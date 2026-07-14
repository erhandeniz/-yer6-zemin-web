import type {
  DocumentScope,
  KnowledgeBaseProvider,
  KnowledgeBaseStatus,
  KnowledgeChunk
} from "@/server/ai/knowledge-base/types";
import { createRAGRuntime, ragKnowledgeStatus } from "@/server/rag/runtime";

export class ConfiguredKnowledgeBaseProvider implements KnowledgeBaseProvider {
  readonly name = "yer6-rag";

  status(): Promise<KnowledgeBaseStatus> {
    return ragKnowledgeStatus();
  }

  async retrieve(query: string, scope: DocumentScope, limit?: number): Promise<KnowledgeChunk[]> {
    const { retrieval } = await createRAGRuntime();
    return retrieval ? retrieval.search(query, scope, limit) : [];
  }
}
