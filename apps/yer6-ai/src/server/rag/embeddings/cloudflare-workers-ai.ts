import type { RAGWorkersAIBinding } from "@/server/rag/cloudflare-bindings";
import type { EmbeddingService } from "@/server/rag/contracts";

function embeddingData(value: unknown) {
  if (!value || typeof value !== "object") return null;
  const data = (value as { data?: unknown }).data;
  if (!Array.isArray(data)) return null;
  const vectors = data.filter((item): item is number[] => (
    Array.isArray(item) && item.every((coordinate) => typeof coordinate === "number" && Number.isFinite(coordinate))
  ));
  return vectors.length === data.length ? vectors : null;
}

export class CloudflareEmbeddingService implements EmbeddingService {
  readonly name = "cloudflare-workers-ai";

  constructor(
    private readonly ai: RAGWorkersAIBinding,
    readonly model: string,
    readonly dimensions: number
  ) {}

  async embed(texts: string[]) {
    if (texts.length === 0) return [];
    const result = await this.ai.run(this.model, { text: texts, truncate_inputs: false });
    const vectors = embeddingData(result);
    if (!vectors || vectors.length !== texts.length) throw new Error("RAG_EMBEDDING_RESPONSE_INVALID");
    if (vectors.some((vector) => vector.length !== this.dimensions)) {
      throw new Error("RAG_EMBEDDING_DIMENSION_MISMATCH");
    }
    return vectors;
  }
}
