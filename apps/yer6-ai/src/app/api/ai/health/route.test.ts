import { describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({ cloudflareConfigured: true }));

vi.mock("@/server/ai/runtime-bindings", () => ({
  getRuntimeBindings: vi.fn(async () => mocks.cloudflareConfigured ? { AI: {} } : {})
}));
vi.mock("@/server/ai/providers/registry", () => ({
  createProviderChain: vi.fn((_config, binding) => binding ? [{ name: "cloudflare-workers-ai" }] : [])
}));

import { GET } from "@/app/api/ai/health/route";

describe("GET /api/ai/health", () => {
  it("reports provider and knowledge status without secret values", async () => {
    const originalKey = process.env.OPENAI_API_KEY;
    process.env.OPENAI_API_KEY = "test-key";
    const response = await GET();
    const body = await response.json();
    process.env.OPENAI_API_KEY = originalKey;

    expect(body).toMatchObject({
      status: "configured",
      activeProvider: "cloudflare-workers-ai",
      openAIConfigured: true,
      cloudflareAIConfigured: true,
      knowledgeBase: { provider: "yer6-rag", status: "empty" }
    });
    expect(JSON.stringify(body)).not.toContain("test-key");
  });
});
