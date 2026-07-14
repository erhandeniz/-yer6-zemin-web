export const DEFAULT_AI_MODELS = {
  openai: "gpt-5-mini",
  cloudflare: "@cf/openai/gpt-oss-120b"
} as const;

export type AIProviderPreference = "auto" | "openai" | "cloudflare";

export type AIConfig = {
  providerPreference: AIProviderPreference;
  openAIApiKey?: string;
  openAIModel: string;
  cloudflareModel: string;
  maxOutputTokens: number;
};

function providerPreference(value: string | undefined): AIProviderPreference {
  return value === "openai" || value === "cloudflare" ? value : "auto";
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
    maxOutputTokens: outputTokenLimit(environment.AI_MAX_OUTPUT_TOKENS)
  };
}
