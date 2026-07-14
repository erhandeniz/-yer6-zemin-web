import { describe, expect, it, vi } from "vitest";
import { CloudflareEmbeddingService } from "@/server/rag/embeddings/cloudflare-workers-ai";

describe("CloudflareEmbeddingService", () => {
  it("validates vector count and dimensions", async () => {
    const run = vi.fn(async () => ({ data: [[0.1, 0.2], [0.3, 0.4]] }));
    const service = new CloudflareEmbeddingService({ run, toMarkdown: vi.fn() }, "model", 2);

    await expect(service.embed(["a", "b"])).resolves.toEqual([[0.1, 0.2], [0.3, 0.4]]);
  });

  it("rejects mismatched dimensions without exposing provider output", async () => {
    const run = vi.fn(async () => ({ data: [[0.1]] }));
    const service = new CloudflareEmbeddingService({ run, toMarkdown: vi.fn() }, "model", 2);

    await expect(service.embed(["a"])).rejects.toThrow("RAG_EMBEDDING_DIMENSION_MISMATCH");
  });
});
