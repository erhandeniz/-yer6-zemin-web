import { describe, expect, it } from "vitest";
import type { AIConfig } from "@/server/ai/config";
import type { WorkersAIBinding } from "@/server/ai/providers/cloudflare-workers-ai";
import { createProviderChain } from "@/server/ai/providers/registry";

const baseConfig: AIConfig = {
  providerPreference: "auto",
  openAIApiKey: "test-only-key",
  openAIModel: "test-openai-model",
  cloudflareModel: "test-cloudflare-model",
  maxOutputTokens: 1_200
};

const workersAI = {
  run: async () => new ReadableStream<Uint8Array>()
} as WorkersAIBinding;

describe("provider registry", () => {
  it("orders OpenAI before the Cloudflare fallback", () => {
    expect(createProviderChain(baseConfig, workersAI).map((provider) => provider.name))
      .toEqual(["openai", "cloudflare-workers-ai"]);
  });

  it("uses Cloudflare when OpenAI is not configured", () => {
    expect(createProviderChain({ ...baseConfig, openAIApiKey: undefined }, workersAI).map((provider) => provider.name))
      .toEqual(["cloudflare-workers-ai"]);
  });

  it("returns no provider when neither service is configured", () => {
    expect(createProviderChain({ ...baseConfig, openAIApiKey: undefined })).toEqual([]);
  });

  it("honors an explicit Cloudflare-only preference", () => {
    expect(createProviderChain({ ...baseConfig, providerPreference: "cloudflare" }, workersAI).map((provider) => provider.name))
      .toEqual(["cloudflare-workers-ai"]);
  });
});
