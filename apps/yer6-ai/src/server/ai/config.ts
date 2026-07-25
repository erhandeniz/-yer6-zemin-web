export const DEFAULT_AI_MODELS = {
  // Primary brain: GPT-5.6 via the OpenAI Responses API. Override with
  // OPENAI_MODEL only for verified, accessible model ids.
  openai: "gpt-5.6",
  cloudflare: "@cf/openai/gpt-oss-120b",
  // DeepSeek is OpenAI-compatible (chat completions). Used in the PUBLIC
  // marketing-bot chain. 2026-07: API accepts deepseek-v4-flash / deepseek-v4-pro
  // ("deepseek-chat" alias was retired — providers also carry a candidate list).
  deepseek: "deepseek-v4-flash",
  // Gemini (Google AI Studio) exposes an OpenAI-compatible endpoint. Free tier
  // (Flash class) = the FREE primary brain for the public bot. "-latest" alias
  // auto-tracks Google's newest Flash so the id never goes stale.
  gemini: "gemini-flash-latest"
} as const;

// Model-id drift protection: if the configured/default id returns "not found",
// providers retry these in order (before any output has streamed).
export const GEMINI_MODEL_CANDIDATES = [
  "gemini-flash-latest",
  "gemini-3.5-flash",
  "gemini-3-flash",
  "gemini-2.5-flash"
] as const;
export const DEEPSEEK_MODEL_CANDIDATES = ["deepseek-v4-flash", "deepseek-v4-pro"] as const;
// Groq: try the strong 70B pool (1,000/day free) first, then the huge 8B pool (14,400/day free).
export const GROQ_MODEL_CANDIDATES = ["llama-3.3-70b-versatile", "llama-3.1-8b-instant"] as const;
export const CEREBRAS_MODEL_CANDIDATES = ["llama-3.3-70b", "llama3.1-8b"] as const;
export const MISTRAL_MODEL_CANDIDATES = [
  "mistral-large-latest",
  "mistral-medium-latest",
  "mistral-small-latest"
] as const;

export const DEEPSEEK_BASE_URL = "https://api.deepseek.com";
export const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/openai/";
// Free-tier OpenAI-compatible providers for the public bot chain
// (each activates only when its API key secret is present):
export const GROQ_BASE_URL = "https://api.groq.com/openai/v1";
export const CEREBRAS_BASE_URL = "https://api.cerebras.ai/v1";
export const MISTRAL_BASE_URL = "https://api.mistral.ai/v1";

export type AIProviderPreference = "auto" | "openai" | "cloudflare";
export type AIReasoningEffort = "minimal" | "low" | "medium" | "high";

export type AIConfig = {
  providerPreference: AIProviderPreference;
  openAIApiKey?: string;
  openAIModel: string;
  cloudflareModel: string;
  deepSeekApiKey?: string;
  deepSeekModel: string;
  geminiApiKey?: string;
  geminiModel: string;
  groqApiKey?: string;
  groqModel: string;
  cerebrasApiKey?: string;
  cerebrasModel: string;
  mistralApiKey?: string;
  mistralModel: string;
  maxOutputTokens: number;
  reasoningEffort: AIReasoningEffort;
};

function providerPreference(value: string | undefined): AIProviderPreference {
  return value === "openai" || value === "cloudflare" ? value : "auto";
}

function reasoningEffort(value: string | undefined): AIReasoningEffort {
  return value === "minimal" || value === "medium" || value === "high" ? value : "low";
}

function outputTokenLimit(value: string | undefined) {
  const parsed = Number.parseInt(value ?? "", 10);
  if (!Number.isFinite(parsed)) return 1_200;
  return Math.min(Math.max(parsed, 256), 4_000);
}

export function getAIConfig(environment: NodeJS.ProcessEnv = process.env): AIConfig {
  return {
    providerPreference: providerPreference(environment.AI_PROVIDER),
    openAIApiKey: environment.OPENAI_API_KEY?.trim() || undefined,
    openAIModel: environment.OPENAI_MODEL?.trim() || DEFAULT_AI_MODELS.openai,
    cloudflareModel: environment.CLOUDFLARE_AI_MODEL?.trim() || DEFAULT_AI_MODELS.cloudflare,
    deepSeekApiKey: environment.DEEPSEEK_API_KEY?.trim() || undefined,
    deepSeekModel: environment.DEEPSEEK_MODEL?.trim() || DEFAULT_AI_MODELS.deepseek,
    geminiApiKey: environment.GEMINI_API_KEY?.trim() || undefined,
    geminiModel: environment.GEMINI_MODEL?.trim() || DEFAULT_AI_MODELS.gemini,
    groqApiKey: environment.GROQ_API_KEY?.trim() || undefined,
    groqModel: environment.GROQ_MODEL?.trim() || GROQ_MODEL_CANDIDATES[0],
    cerebrasApiKey: environment.CEREBRAS_API_KEY?.trim() || undefined,
    cerebrasModel: environment.CEREBRAS_MODEL?.trim() || CEREBRAS_MODEL_CANDIDATES[0],
    mistralApiKey: environment.MISTRAL_API_KEY?.trim() || undefined,
    mistralModel: environment.MISTRAL_MODEL?.trim() || MISTRAL_MODEL_CANDIDATES[0],
    maxOutputTokens: outputTokenLimit(environment.AI_MAX_OUTPUT_TOKENS),
    // Reasoning models (e.g. gpt-5-mini) default to "low" so multi-tool jobs
    // finish their tool round-trips and final answer within the platform's
    // streaming window. Numeric accuracy comes from deterministic tools, not
    // model reasoning, so a lower effort does not reduce calculation quality.
    reasoningEffort: reasoningEffort(environment.AI_REASONING_EFFORT)
  };
}
