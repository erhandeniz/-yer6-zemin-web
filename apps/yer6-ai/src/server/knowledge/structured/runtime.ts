/**
 * Structured module runtime.
 *
 * Assembles the Machine and Soil repositories with a shared vector indexer,
 * reusing the same embedding/vector providers configured for the document RAG
 * pipeline. When embeddings/vectors are unavailable the repositories still
 * operate in Postgres-only mode (rows stored as READY, not INDEXED), so imports
 * never hard-fail on a misconfigured vector backend.
 */

import { createRAGRuntime } from "@/server/rag/runtime";
import { StructuredVectorIndexer } from "@/server/knowledge/structured/indexer";
import { MachineRepository } from "@/server/knowledge/structured/machines";
import { SoilRepository } from "@/server/knowledge/structured/soils";

export async function createStructuredRuntime() {
  const runtime = await createRAGRuntime();
  const indexer =
    runtime.state.ready && runtime.embeddings && runtime.vectors
      ? new StructuredVectorIndexer(
          runtime.embeddings,
          runtime.vectors,
          runtime.config.embeddingBatchSize
        )
      : null;

  return {
    config: runtime.config,
    state: runtime.state,
    indexer,
    machines: new MachineRepository(indexer),
    soils: new SoilRepository(indexer),
    indexingReady: indexer !== null
  };
}
