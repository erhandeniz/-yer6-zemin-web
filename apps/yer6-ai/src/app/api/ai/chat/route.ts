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
import { buildSystemPrompt } from "@/server/ai/system-prompt";
import { isGreetingOnly, noSourceNotice } from "@/server/rag/citation-engine";
import {
  loadMemoryKnowledge,
  persistConversationExchange,
  resolveKnowledgeScope
} from "@/server/memory/project-memory";

export const runtime = "nodejs";
export const maxDuration = 60;
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

  const authRequired = process.env.AUTH_REQUIRED === "true";
  const session = authRequired
    ? await getRequiredSession()
    : null;
  if (authRequired && !session) {
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
  if (providers.length === 0) {
    return new Response(aiMessage("notConfigured", locale), { status: 503 });
  }

  const payload = parsedPayload.data;
  const latestQuestion = [...payload.messages].reverse().find((message) => message.role === "user")?.content ?? "";
  const knowledgeScope = await resolveKnowledgeScope(session, payload.projectId);
  const [retrievedChunks, memoryChunks] = await Promise.all([
    knowledgeBase.retrieve(latestQuestion, knowledgeScope).catch(() => []),
    loadMemoryKnowledge(session, knowledgeScope)
  ]);
  const knowledgeChunks = [...retrievedChunks, ...memoryChunks].slice(0, 12);
  const citations = knowledgeChunks.map((chunk) => chunk.citation);
  const conversationContext = payload.messages
    .filter((message) => message.role === "user")
    .map((message) => message.content)
    .join("\n");
  const system = buildSystemPrompt(locale, knowledgeChunks, latestQuestion, conversationContext);
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

      send({ type: "sources", citations });
      let completed = false;
      let assistantOutput = "";
      if (knowledgeChunks.length === 0 && !isGreetingOnly(latestQuestion)) {
        const disclosure = `${noSourceNotice(locale)}\n\n`;
        assistantOutput += disclosure;
        send({ type: "delta", text: disclosure });
      }

      try {
        for (const provider of providers) {
          if (activeRequest.shouldStop()) activeRequest.abort();
          if (activeRequest.signal.aborted) break;
          send({ type: "meta", requestId: payload.requestId, provider: provider.name });
          let producedOutput = false;

          try {
            for await (const text of provider.stream({
              system,
              messages: payload.messages,
              maxOutputTokens: config.maxOutputTokens,
              abortSignal: activeRequest.signal
            })) {
              if (activeRequest.shouldStop()) activeRequest.abort();
              if (activeRequest.signal.aborted || !text) break;
              producedOutput = true;
              assistantOutput += text;
              if (!send({ type: "delta", text })) break;
            }
          } catch {
            if (activeRequest.signal.aborted) break;
            if (producedOutput) {
              send({ type: "error", message: aiMessage("unavailable", locale) });
              completed = true;
              break;
            }
            continue;
          }

          if (activeRequest.signal.aborted) break;
          if (!producedOutput) continue;
          await persistConversationExchange({
            current: session,
            conversationId: payload.conversationId,
            projectId: knowledgeScope.projectId,
            userMessage: latestQuestion,
            assistantMessage: assistantOutput,
            citations
          });
          send({ type: "done", stopped: false });
          completed = true;
          break;
        }

        if (activeRequest.signal.aborted) {
          send({ type: "done", stopped: true });
        } else if (!completed) {
          send({ type: "error", message: aiMessage("unavailable", locale) });
        }
      } finally {
        activeRequest.cleanup();
        if (!closed) {
          closed = true;
          controller.close();
        }
      }
    },
    cancel() {
      activeRequest.abort();
      activeRequest.cleanup();
    }
  });

  return new Response(stream, {
    headers: sseHeaders
  });
}
