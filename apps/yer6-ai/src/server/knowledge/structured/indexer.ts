/**
 * Structured-data vector indexer.
 *
 * Structured modules (machines, soils) live in Postgres for exact querying but
 * are ALSO embedded into Vectorize so the copilot can retrieve them
 * semantically alongside documents. This indexer is the shared, module-agnostic
 * bridge: it renders a record to text, embeds it, and upserts a single vector
 * per record under the module's namespace. It reuses the exact same
 * EmbeddingService and VectorDatabase abstractions as the document pipeline, so
 * provider swaps (OpenAI ↔ Workers AI, Vectorize ↔ …) apply uniformly.
 */

import type { EmbeddingService, VectorDatabase, VectorMetadata } from "@/server/rag/contracts";
import { sha256 } from "@/server/rag/hash";
import { moduleNamespace } from "@/server/knowledge/namespaces";
import type { KnowledgeModuleKey } from "@/server/knowledge/modules";

export type StructuredIndexInput = {
  moduleKey: KnowledgeModuleKey;
  /** Stable natural identity of the record (e.g. "bauer/bg-20-h"). */
  naturalKey: string;
  partition?: string | null;
  text: string;
  metadata: Omit<VectorMetadata, "content" | "sourceType" | "scope" | "moduleKey" | "partition">;
};

export type StructuredIndexResult = {
  naturalKey: string;
  vectorId: string;
};

export async function structuredVectorId(moduleKey: KnowledgeModuleKey, naturalKey: string) {
  const digest = await sha256(`${moduleKey}:${naturalKey}`);
  return `struct_${digest.slice(0, 54)}`;
}

export class StructuredVectorIndexer {
  constructor(
    private readonly embeddings: EmbeddingService,
    private readonly vectors: VectorDatabase,
    private readonly batchSize = 32
  ) {}

  async index(inputs: StructuredIndexInput[]): Promise<StructuredIndexResult[]> {
    const results: StructuredIndexResult[] = [];
    for (let offset = 0; offset < inputs.length; offset += this.batchSize) {
      const batch = inputs.slice(offset, offset + this.batchSize);
      const vectors = await this.embeddings.embed(batch.map((item) => item.text.slice(0, 6_000)));
      const records = [];
      for (let index = 0; index < batch.length; index += 1) {
        const item = batch[index];
        const vectorId = await structuredVectorId(item.moduleKey, item.naturalKey);
        const namespace = moduleNamespace(item.moduleKey, item.partition);
        const metadata: VectorMetadata = {
          ...item.metadata,
          content: item.text,
          sourceType: item.moduleKey,
          scope: "company",
          moduleKey: item.moduleKey,
          partition: item.partition ?? undefined
        };
        records.push({ id: vectorId, namespace, values: vectors[index], metadata });
        results.push({ naturalKey: item.naturalKey, vectorId });
      }
      await this.vectors.upsert(records);
    }
    return results;
  }

  async remove(vectorIds: string[]): Promise<void> {
    const ids = vectorIds.filter(Boolean);
    if (ids.length > 0) await this.vectors.delete(ids);
  }
}
