import type { AIConfig } from "@/server/ai/config";
import type { AIChatLocale, AIChatMessage } from "@/lib/ai/contracts";
import type { AIProvider } from "@/server/ai/providers/types";
import type { ToolContext } from "@/server/ai/tools/contracts";
import { resolveModelPolicy, type ModelPolicy } from "@/server/intelligence/model-policy";
import { buildTurnContext } from "@/server/intelligence/context-builder";
import { buildIntelligenceTools, type IntelligenceTools } from "@/server/intelligence/tool-registry";
import { startTelemetry, type TelemetryHandle } from "@/server/intelligence/telemetry";
import { IntelligenceError } from "@/server/intelligence/errors";

/**
 * The GPT-5.6 intelligence runtime.
 *
 * GPT-5.6 (OpenAI Responses API, via the provider) is the primary brain. RAG,
 * calculators, decision and proposal systems are optional tools it may call.
 * The runtime prepares the turn (policy + concise system prompt + full history +
 * tools with a citation collector) and selects the primary provider, refusing to
 * silently fall back to Cloudflare or a static template.
 */
export interface PreparedTurn {
  policy: ModelPolicy;
  system: string;
  messages: AIChatMessage[];
  tools: IntelligenceTools;
  telemetry: TelemetryHandle;
}

export function prepareIntelligenceTurn(params: {
  config: AIConfig;
  locale: AIChatLocale;
  messages: AIChatMessage[];
  toolContext: Omit<ToolContext, "onCitations">;
}): PreparedTurn {
  const policy = resolveModelPolicy(params.config);
  const tools = buildIntelligenceTools(params.toolContext);
  const { system, messages } = buildTurnContext({
    locale: params.locale,
    messages: params.messages,
    toolNames: tools.toolNames
  });
  return { policy, system, messages, tools, telemetry: startTelemetry(policy.model) };
}

/**
 * Select the GPT-5.6 (OpenAI Responses) provider. Throws `not_configured` when
 * the primary brain is unavailable — the runtime never silently uses Cloudflare
 * Workers AI or a static answer in its place.
 */
export function selectPrimaryProvider(providers: AIProvider[]): AIProvider {
  const openai = providers.find((provider) => provider.name === "openai");
  if (!openai) {
    throw new IntelligenceError("not_configured", "The GPT-5.6 primary brain is not configured.");
  }
  return openai;
}
