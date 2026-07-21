export const DEFAULT_AI_MODELS = {
  // Primary brain: GPT-5.6 via the OpenAI Responses API. Override with
  // OPENAI_MODEL only for verified, accessible model ids.
  openai: "gpt-5.6",
  cloudflare: "@cf/openai/gpt-oss-120b",
  // DeepSeek is OpenAI-compatible (chat completions). Used as the primary,
  // low-cost brain for the PUBLIC marketing bot (see public provider chain).
  deepseek: "deepseek-chat",
  // Gemini (Google AI Studio) exposes an OpenAI-compatible endpoint. Its free
  // tier (Flash class, ~1500 req/day, no card) makes it the FREE primary brain
  // for the public marketing bot.
  gemini: "gemini-2.5-flash"
} as const;

export const DEEPSEEK_BASE_URL = "https://api.deepseek.com";
export const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/openai/";

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
    maxOutputTokens: outputTokenLimit(environment.AI_MAX_OUTPUT_TOKENS),
    // Reasoning models (e.g. gpt-5-mini) default to "low" so multi-tool jobs
    // finish their tool round-trips and final answer within the platform's
    // streaming window. Numeric accuracy comes from deterministic tools, not
    // model reasoning, so a lower effort does not reduce calculation quality.
    reasoningEffort: reasoningEffort(environment.AI_REASONING_EFFORT)
  };
}
