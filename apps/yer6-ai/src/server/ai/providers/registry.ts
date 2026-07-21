import type { AIConfig } from "@/server/ai/config";
import { createCloudflareWorkersAIProvider, type WorkersAIBinding } from "@/server/ai/providers/cloudflare-workers-ai";
import { createOpenAIResponsesProvider } from "@/server/ai/providers/openai-responses";
import { createDeepSeekProvider } from "@/server/ai/providers/deepseek";
import { createGeminiProvider } from "@/server/ai/providers/gemini";
import type { AIProvider } from "@/server/ai/providers/types";

export function createProviderChain(config: AIConfig, workersAI?: WorkersAIBinding): AIProvider[] {
  const openAIProvider = config.openAIApiKey
    ? createOpenAIResponsesProvider(config.openAIApiKey, config.openAIModel, config.reasoningEffort)
    : null;
  const cloudflareProvider = workersAI
    ? createCloudflareWorkersAIProvider(workersAI, config.cloudflareModel)
    : null;

  if (config.providerPreference === "cloudflare") {
    return cloudflareProvider ? [cloudflareProvider] : [];
  }

  return [openAIProvider, cloudflareProvider].filter((provider): provider is AIProvider => Boolean(provider));
}

/**
 * Provider chain for the PUBLIC marketing bot, in fallback order:
 *   1) Gemini     — Google AI Studio FREE tier (Flash), zero-cost primary
 *   2) DeepSeek   — low-cost fallback
 *   3) GPT-5.6    — the "abi" brain, higher quality fallback
 *   4) Cloudflare Workers AI — final no-key fallback (bound in the Worker)
 *
 * Only providers whose credentials/bindings exist are included. The public route
 * tries each in order and moves to the next ONLY if a provider fails before it
 * has produced any output (so a mid-answer failure never restarts/duplicates).
 * Gemini's free-tier 429 (rate limit) fails before output → clean fall-through.
 */
export function createPublicProviderChain(config: AIConfig, workersAI?: WorkersAIBinding): AIProvider[] {
  const geminiProvider = config.geminiApiKey
    ? createGeminiProvider(config.geminiApiKey, config.geminiModel)
    : null;
  const deepSeekProvider = config.deepSeekApiKey
    ? createDeepSeekProvider(config.deepSeekApiKey, config.deepSeekModel)
    : null;
  const openAIProvider = config.openAIApiKey
    ? createOpenAIResponsesProvider(config.openAIApiKey, config.openAIModel, config.reasoningEffort)
    : null;
  const cloudflareProvider = workersAI
    ? createCloudflareWorkersAIProvider(workersAI, config.cloudflareModel)
    : null;

  return [geminiProvider, deepSeekProvider, openAIProvider, cloudflareProvider].filter(
    (provider): provider is AIProvider => Boolean(provider)
  );
}
