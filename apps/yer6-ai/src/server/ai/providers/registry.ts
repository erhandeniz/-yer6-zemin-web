import type { AIConfig } from "@/server/ai/config";
import { createCloudflareWorkersAIProvider, type WorkersAIBinding } from "@/server/ai/providers/cloudflare-workers-ai";
import { createOpenAIResponsesProvider } from "@/server/ai/providers/openai-responses";
import { createDeepSeekProvider } from "@/server/ai/providers/deepseek";
import { createGeminiProvider } from "@/server/ai/providers/gemini";
import { createOpenAICompatibleProvider } from "@/server/ai/providers/openai-compatible";
import {
  CEREBRAS_BASE_URL,
  CEREBRAS_MODEL_CANDIDATES,
  GROQ_BASE_URL,
  GROQ_MODEL_CANDIDATES,
  MISTRAL_BASE_URL,
  MISTRAL_MODEL_CANDIDATES
} from "@/server/ai/config";
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
 * Provider chain for the PUBLIC marketing bot, in fallback order (free first):
 *   1) Gemini    — free ~1,500 req/day (Flash)
 *   2) Groq      — free 1,000/day (Llama 3.3 70B) + 14,400/day (Llama 3.1 8B)
 *   3) Cerebras  — free ~1M tokens/day
 *   4) Mistral   — free experiment tier (~1B tokens/month)
 *   5) DeepSeek  — low-cost paid fallback
 *   6) GPT-5.6   — the "abi" brain, highest-quality paid fallback
 *   7) Cloudflare Workers AI — final binding fallback
 *
 * Combined free capacity ≈ 17,000–20,000 answers/day. Only providers whose
 * credentials/bindings exist are included. The route moves to the next provider
 * ONLY if the current one fails before producing any output (rate-limit 429s
 * fail before output → clean fall-through; mid-answer failures stop honestly).
 */
export function createPublicProviderChain(config: AIConfig, workersAI?: WorkersAIBinding): AIProvider[] {
  const geminiProvider = config.geminiApiKey
    ? createGeminiProvider(config.geminiApiKey, config.geminiModel)
    : null;
  const groqProvider = config.groqApiKey
    ? createOpenAICompatibleProvider({
        name: "groq",
        apiKey: config.groqApiKey,
        baseURL: GROQ_BASE_URL,
        model: config.groqModel,
        candidates: GROQ_MODEL_CANDIDATES
      })
    : null;
  const cerebrasProvider = config.cerebrasApiKey
    ? createOpenAICompatibleProvider({
        name: "cerebras",
        apiKey: config.cerebrasApiKey,
        baseURL: CEREBRAS_BASE_URL,
        model: config.cerebrasModel,
        candidates: CEREBRAS_MODEL_CANDIDATES
      })
    : null;
  const mistralProvider = config.mistralApiKey
    ? createOpenAICompatibleProvider({
        name: "mistral",
        apiKey: config.mistralApiKey,
        baseURL: MISTRAL_BASE_URL,
        model: config.mistralModel,
        candidates: MISTRAL_MODEL_CANDIDATES
      })
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

  return [
    geminiProvider,
    groqProvider,
    cerebrasProvider,
    mistralProvider,
    deepSeekProvider,
    openAIProvider,
    cloudflareProvider
  ].filter((provider): provider is AIProvider => Boolean(provider));
}
