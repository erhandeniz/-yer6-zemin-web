import type { AIStreamEvent } from "@/lib/ai/contracts";
import { getAIConfig } from "@/server/ai/config";
import { aiMessage } from "@/server/ai/messages";
import { createPublicProviderChain } from "@/server/ai/providers/registry";
import { getRuntimeBindings } from "@/server/ai/runtime-bindings";
import { chatPayloadSchema, rateLimitKey, readBoundedJSON, requestLocale } from "@/server/ai/security";
import { encodeSSE, sseHeaders } from "@/server/ai/sse";
import { MAX_TOOL_STEPS } from "@/server/ai/tools";
import { resolveKnowledgeScope } from "@/server/memory/project-memory";
import { prepareIntelligenceTurn } from "@/server/intelligence/runtime";

export const runtime = "nodejs";
export const maxDuration = 120;
export const dynamic = "force-dynamic";

// PUBLIC bot endpoint (marketing site FloatingCalculator). Anonymous, rate-limited,
// CORS-restricted to the marketing domain. Uses the DeepSeek -> GPT-5.6 -> Cloudflare
// fallback chain so a single provider outage never takes the bot down.

const ALLOWED_ORIGINS = new Set([
  "https://www.yer6zemin.com.tr",
  "https://yer6zemin.com.tr"
]);

const DELTA_FLUSH_CHARS = 90;

function corsHeaders(origin: string | null): Record<string, string> {
  const allow = origin && ALLOWED_ORIGINS.has(origin) ? origin : "https://www.yer6zemin.com.tr";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin"
  };
}

export function OPTIONS(request: Request) {
  return new Response(null, { status: 204, headers: corsHeaders(request.headers.get("origin")) });
}

export async function POST(request: Request) {
  const cors = corsHeaders(request.headers.get("origin"));

  const body = await readBoundedJSON(request);
  if (!body.ok) {
    return new Response(aiMessage("invalidRequest", "tr"), {
      status: body.reason === "too_large" ? 413 : 400,
      headers: cors
    });
  }

  const locale = requestLocale(body.value);
  const parsed = chatPayloadSchema.safeParse(body.value);
  if (!parsed.success) {
    return new Response(aiMessage("invalidRequest", locale), { status: 400, headers: cors });
  }

  const bindings = await getRuntimeBindings();
  // Rate limit anonymous public traffic strictly by IP.
  if (bindings.AI_RATE_LIMITER) {
    const key = await rateLimitKey(request);
    const { success } = await bindings.AI_RATE_LIMITER.limit({ key: `public:${key}` });
    if (!success) {
      return new Response(aiMessage("rateLimited", locale), {
        status: 429,
        headers: { ...cors, "Retry-After": "60" }
      });
    }
  }

  const config = getAIConfig();
  const providers = createPublicProviderChain(config, bindings.AI);
  if (providers.length === 0) {
    return new Response(aiMessage("notConfigured", locale), { status: 503, headers: cors });
  }

  const payload = parsed.data;
  const scope = await resolveKnowledgeScope(null, undefined);

  // Model-first brain, demo mode: no production RAG/DB, just the YER6 system
  // prompt + full conversation. The engineering context (project params + cost
  // estimate) is carried inside the user messages sent by the marketing bot.
  const turn = prepareIntelligenceTurn({
    config,
    locale,
    messages: payload.messages,
    toolContext: {
      demo: true,
      locale,
      scope,
      retrieval: null,
      databaseAvailable: false,
      researchEnabled: false
    }
  });

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
      const finish = () => {
        if (!closed) {
          closed = true;
          controller.close();
        }
      };

      send({ type: "sources", citations: turn.tools.citations.list() });

      let anyOutput = false;
      // Try each provider in order. Fall through to the next ONLY when a provider
      // fails before producing any text; a mid-answer failure ends the stream
      // honestly (no restart/duplication).
      for (let i = 0; i < providers.length; i++) {
        const provider = providers[i];
        let providerProducedOutput = false;
        let deltaBuffer = "";
        const flush = () => {
          if (!deltaBuffer) return true;
          const text = deltaBuffer;
          deltaBuffer = "";
          return send({ type: "delta", text });
        };

        send({ type: "meta", requestId: payload.requestId, provider: provider.name });

        try {
          for await (const text of provider.stream({
            system: turn.system,
            messages: turn.messages,
            maxOutputTokens: turn.policy.maxOutputTokens,
            abortSignal: request.signal,
            tools: turn.tools.tools,
            maxSteps: MAX_TOOL_STEPS,
            onToolCall: (toolName) => {
              flush();
              turn.telemetry.noteTool(toolName);
              send({ type: "tool", name: toolName });
            }
          })) {
            if (request.signal.aborted || !text) break;
            providerProducedOutput = true;
            anyOutput = true;
            deltaBuffer += text;
            if (deltaBuffer.length >= DELTA_FLUSH_CHARS && !flush()) break;
          }
          flush();
          if (providerProducedOutput) {
            const citations = turn.tools.citations.list();
            if (citations.length > 0) send({ type: "sources", citations });
            send({ type: "done", stopped: request.signal.aborted, tools: [] });
            finish();
            return;
          }
          // No output and no throw → try next provider.
        } catch {
          flush();
          if (providerProducedOutput || request.signal.aborted) {
            // Partial answer already streamed, or client aborted → stop honestly.
            send({ type: "done", stopped: request.signal.aborted, tools: [] });
            finish();
            return;
          }
          // Failed before any output → continue to the next provider in the chain.
        }
      }

      // Every provider failed before producing output.
      if (!anyOutput) send({ type: "error", message: aiMessage("unavailable", locale) });
      else send({ type: "done", stopped: false, tools: [] });
      finish();
    }
  });

  return new Response(stream, { headers: { ...sseHeaders, ...cors } });
}
