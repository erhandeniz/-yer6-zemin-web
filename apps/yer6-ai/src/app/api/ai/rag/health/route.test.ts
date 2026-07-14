import { describe, expect, it, vi } from "vitest";

vi.mock("@/server/rag/runtime", () => ({
  createRAGRuntime: vi.fn(async () => ({
    config: { enabled: true },
    retrieval: null,
    state: {
      providers: {
        storage: "uploadthing",
        parser: "cloudflare-markdown",
        metadata: "prisma",
        embedding: "cloudflare-workers-ai",
        vector: "cloudflare-vectorize"
      }
    }
  }))
}));

import { GET } from "@/app/api/ai/rag/health/route";

describe("GET /api/ai/rag/health", () => {
  it("returns unavailable without exposing missing secret values", async () => {
    const response = await GET();
    const body = await response.json();
    expect(response.status).toBe(503);
    expect(body).toMatchObject({ service: "yer6-rag", enabled: true, ready: false });
    expect(JSON.stringify(body)).not.toContain("SECRET");
  });
});
