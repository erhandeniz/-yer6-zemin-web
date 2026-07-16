import type { AIConfig } from "@/server/ai/config";
import { createCloudflareWorkersAIProvider, type WorkersAIBinding } from "@/server/ai/providers/cloudflare-workers-ai";
import { createOpenAIResponsesProvider } from "@/server/ai/providers/openai-responses";
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
