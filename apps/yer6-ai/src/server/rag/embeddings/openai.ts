import type { EmbeddingService } from "@/server/rag/contracts";

export class OpenAIEmbeddingService implements EmbeddingService {
  readonly name = "openai";

  constructor(
    private readonly apiKey: string,
    readonly model: string,
    readonly dimensions: number
  ) {}

  async embed(texts: string[]) {
    if (texts.length === 0) return [];
    const response = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        authorization: `Bearer ${this.apiKey}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({ model: this.model, input: texts, dimensions: this.dimensions })
    });
    if (!response.ok) throw new Error("RAG_EMBEDDING_PROVIDER_UNAVAILABLE");

    const payload = await response.json() as {
      data?: Array<{ index?: number; embedding?: number[] }>;
    };
    const vectors = [...(payload.data ?? [])]
      .sort((left, right) => (left.index ?? 0) - (right.index ?? 0))
      .map((item) => item.embedding)
      .filter((item): item is number[] => Array.isArray(item));

    if (vectors.length !== texts.length || vectors.some((vector) => vector.length !== this.dimensions)) {
      throw new Error("RAG_EMBEDDING_RESPONSE_INVALID");
    }
    return vectors;
  }
}
