import { describe, expect, it } from "vitest";
import { DEFAULT_AI_MODELS, getAIConfig } from "@/server/ai/config";

function environment(values: Record<string, string> = {}): NodeJS.ProcessEnv {
  return { NODE_ENV: "test", ...values };
}

describe("AI configuration", () => {
  it("uses safe server defaults", () => {
    const config = getAIConfig(environment());
    expect(config).toEqual({
      providerPreference: "auto",
      openAIApiKey: undefined,
      openAIModel: DEFAULT_AI_MODELS.openai,
      cloudflareModel: DEFAULT_AI_MODELS.cloudflare,
      maxOutputTokens: 1_200
    });
  });

  it("normalizes provider and output limits", () => {
    expect(getAIConfig(environment({ AI_PROVIDER: "cloudflare", AI_MAX_OUTPUT_TOKENS: "99999" })))
      .toMatchObject({ providerPreference: "cloudflare", maxOutputTokens: 4_000 });
    expect(getAIConfig(environment({ AI_PROVIDER: "invalid", AI_MAX_OUTPUT_TOKENS: "10" })))
      .toMatchObject({ providerPreference: "auto", maxOutputTokens: 256 });
  });
});
