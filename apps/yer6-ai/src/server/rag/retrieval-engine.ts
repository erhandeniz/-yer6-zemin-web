import type { KnowledgeChunk } from "@/server/ai/knowledge-base/types";
import type { DocumentScope } from "@/server/ai/knowledge-base/types";
import { citationFromMatch, sanitizeRetrievedContent } from "@/server/rag/citation-engine";
import type { EmbeddingService, RetrievalEngine, VectorDatabase } from "@/server/rag/contracts";
import { retrievalNamespaces } from "@/server/rag/scope";

export class SemanticRetrievalEngine implements RetrievalEngine {
  constructor(
    private readonly embeddings: EmbeddingService,
    private readonly vectors: VectorDatabase,
    private readonly options: {
      topK: number;
      minimumScore: number;
      maximumRetrievedCharacters: number;
    }
  ) {}

  async search(query: string, scope: DocumentScope, limit = this.options.topK) {
    const normalizedQuery = query.trim().slice(0, 6_000);
    if (!normalizedQuery) return [];
    const [queryVector] = await this.embeddings.embed([normalizedQuery]);
    const matches = await this.vectors.query(queryVector, {
      namespaces: retrievalNamespaces(scope),
      topK: Math.min(limit, this.options.topK)
    });

    const chunks: KnowledgeChunk[] = [];
    let retrievedCharacters = 0;
    for (const match of matches) {
      if (match.score < this.options.minimumScore) continue;
      const citation = citationFromMatch(match, chunks.length);
      const remaining = this.options.maximumRetrievedCharacters - retrievedCharacters;
      const content = sanitizeRetrievedContent(match.metadata.content, Math.max(0, remaining));
      if (!citation || !content || remaining <= 0) continue;
      chunks.push({ content, citation, score: match.score });
      retrievedCharacters += content.length;
    }
    return chunks;
  }
}
