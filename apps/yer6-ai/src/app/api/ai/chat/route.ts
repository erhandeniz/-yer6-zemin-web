import type { AIStreamEvent } from "@/lib/ai/contracts";
import { getAIConfig } from "@/server/ai/config";
import { knowledgeBase } from "@/server/ai/knowledge-base";
import { aiMessage } from "@/server/ai/messages";
import { createProviderChain } from "@/server/ai/providers/registry";
import { registerAIRequest } from "@/server/ai/request-registry";
import { getRuntimeBindings } from "@/server/ai/runtime-bindings";
import {
  chatPayloadSchema,
  rateLimitKey,
  readBoundedJSON,
  requestLocale
} from "@/server/ai/security";
import { encodeSSE, sseHeaders } from "@/server/ai/sse";
import { MAX_TOOL_STEPS } from "@/server/ai/tools";
import type { AIProvider } from "@/server/ai/providers/types";
import { resolveKnowledgeScope, persistConversationExchange } from "@/server/memory/project-memory";
import { prepareIntelligenceTurn, selectPrimaryProvider } from "@/server/intelligence/runtime";

export const runtime = "nodejs";
export const maxDuration = 300;

// Batch streamed model output into SSE frames of at least this many characters.
// A reasoning model can emit hundreds of tiny token deltas; encoding/enqueuing
// one SSE frame per token is CPU-heavy and, on long multi-tool answers, pushed
// the Worker past its CPU budget — killing the stream before the final result.
// Batching cuts the frame count ~15x while keeping the full answer.
const DELTA_FLUSH_CHARS = 90;
export const dynamic = "force-dynamic";

async function getRequiredSession() {
  const [{ getServerSession }, { authOptions }] = await Promise.all([
    import("next-auth"),
    import("@/lib/auth")
  ]);
  return getServerSession(authOptions).catch(() => null);
}

export async function POST(request: Request) {
  const body = await readBoundedJSON(request);
  if (!body.ok) {
    return new Response(aiMessage("invalidRequest", "tr"), {
      status: body.reason === "too_large" ? 413 : 400
    });
  }

  const rawPayload = body.value;
  const locale = requestLocale(rawPayload);
  const parsedPayload = chatPayloadSchema.safeParse(rawPayload);
  if (!parsedPayload.success) {
    return new Response(aiMessage("invalidRequest", locale), { status: 400 });
  }

  const isDemoRequest = request.headers.get("x-yer6-demo") === "true";
  const authRequired = process.env.AUTH_REQUIRED === "true";
  const session = authRequired && !isDemoRequest ? await getRequiredSession() : null;
  if (authRequired && !isDemoRequest && !session) {
    return new Response(aiMessage("unauthorized", locale), { status: 401 });
  }

  const bindings = await getRuntimeBindings();
  if (bindings.AI_RATE_LIMITER) {
    const key = await rateLimitKey(request, session?.user?.id);
    const { success } = await bindings.AI_RATE_LIMITER.limit({ key });
    if (!success) {
      return new Response(aiMessage("rateLimited", locale), {
        status: 429,
        headers: { "Retry-After": "60" }
      });
    }
  }

  const config = getAIConfig();
  const providers = createProviderChain(config, bindings.AI);

  // GPT-5.6 (OpenAI Responses) is the primary brain. We never silently fall back
  // to Cloudflare Workers AI or a static template — if it is not configured we
  // return an honest "not configured" message.
  let primary: AIProvider;
  try {
    primary = selectPrimaryProvider(providers);
  } catch {
    return new Response(aiMessage("notConfigured", locale), { status: 503 });
  }

  const payload = parsedPayload.data;
  const latestQuestion =
    [...payload.messages].reverse().find((message) => message.role === "user")?.content ?? "";
  const knowledgeScope = await resolveKnowledgeScope(session, payload.projectId);

  // Prepare the turn: concise model-first system prompt + FULL conversation
  // history + optional tools (RAG is just one tool the model may call). No
  // forced retrieval, no canned "knowledge base empty" disclosure.
  const turn = prepareIntelligenceTurn({
    config,
    locale,
    messages: payload.messages,
    toolContext: {
      demo: isDemoRequest,
      locale,
      scope: knowledgeScope,
      retrieval: isDemoRequest
        ? null
        : { search: (query, scope, limit) => knowledgeBase.retrieve(query, scope, limit) },
      databaseAvailable: Boolean(process.env.DATABASE_URL),
      researchEnabled: !isDemoRequest
    }
  });

  const invokedTools = new Set<string>();
  const activeRequest = registerAIRequest(payload.requestId, request.signal);

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let closed = false;
      const send = (event: AIStreamEvent) => {
        if (closed) return false;
        try {
          controller.enqueue(encodeSSE(event));
          return true;
        } catch {
          closed = true;
          return false;
        }
      };

      const outputChunks: string[] = [];
      let streamed = false;
      let deltaBuffer = "";
      const flushDelta = () => {
        if (!deltaBuffer) return true;
        const text = deltaBuffer;
        deltaBuffer = "";
        const ok = send({ type: "delta", text });
        if (ok) streamed = true;
        return ok;
      };

      // Initial sources frame preserves the streaming/UI contract. It carries
      // real citations only if a knowledge tool has already returned them
      // (empty for ordinary/general conversation — never a forced disclosure).
      send({ type: "sources", citations: turn.tools.citations.list() });
      send({ type: "meta", requestId: payload.requestId, provider: primary.name });

      let producedOutput = false;
      try {
        for await (const text of primary.stream({
          system: turn.system,
          messages: turn.messages,
          maxOutputTokens: turn.policy.maxOutputTokens,
          abortSignal: activeRequest.signal,
          tools: turn.tools.tools,
          maxSteps: MAX_TOOL_STEPS,
          onToolCall: (toolName) => {
            // Flush buffered text first so tool-progress never jumps ahead of
            // already-streamed answer text; keeps the connection warm too.
            flushDelta();
            invokedTools.add(toolName);
            turn.telemetry.noteTool(toolName);
            send({ type: "tool", name: toolName });
          }
        })) {
          if (activeRequest.shouldStop()) activeRequest.abort();
          if (activeRequest.signal.aborted || !text) break;
          producedOutput = true;
          outputChunks.push(text);
          deltaBuffer += text;
          if (deltaBuffer.length >= DELTA_FLUSH_CHARS && !flushDelta()) break;
        }
      } catch {
        // Provider failure (before OR after partial output). Return the honest
        // localized message — never fabricate, never use the old knowledge-base
        // warning, and never silently continue with another provider. Any text
        // already streamed is flushed first so it is not lost.
        if (!activeRequest.signal.aborted) {
          flushDelta();
          send({ type: "error", message: aiMessage("unavailable", locale) });
          activeRequest.cleanup();
          if (!closed) {
            closed = true;
            controller.close();
          }
          return;
        }
      }

      flushDelta();

      // Surface citations ONLY when the knowledge tool returned real sources.
      const citations = turn.tools.citations.list();
      if (citations.length > 0) send({ type: "sources", citations });

      if (activeRequest.signal.aborted) {
        send({ type: "done", stopped: true, tools: [...invokedTools] });
      } else if (producedOutput) {
        try {
          await persistConversationExchange({
            current: session,
            conversationId: payload.conversationId,
            projectId: knowledgeScope.projectId,
            userMessage: latestQuestion,
            assistantMessage: outputChunks.join(""),
            citations
          });
        } catch {
          // Persisting the transcript must never suppress the completion event.
        }
        send({ type: "done", stopped: false, tools: [...invokedTools] });
      } else {
        // Nothing produced and not aborted → honest unavailable (no fabrication).
        send(
          streamed
            ? { type: "done", stopped: false, tools: [...invokedTools] }
            : { type: "error", message: aiMessage("unavailable", locale) }
        );
      }

      activeRequest.cleanup();
      if (!closed) {
        closed = true;
        controller.close();
      }
    },
    cancel() {
      activeRequest.abort();
      activeRequest.cleanup();
    }
  });

  return new Response(stream, { headers: sseHeaders });
}
