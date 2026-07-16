import type { SourceCitation } from "@/lib/ai/contracts";

export type DocumentScope = {
  projectId?: string;
  organizationId?: string;
  includeStandards?: boolean;
  /** Restrict/expand retrieval to specific knowledge modules (see modules.ts). */
  modules?: string[];
  /** Optional module sub-collections (standards family, manufacturer, …). */
  partitions?: string[];
};

export type KnowledgeChunk = {
  content: string;
  citation: SourceCitation;
  score: number;
};

export type KnowledgeBaseStatus = "empty" | "ready" | "unavailable";

export interface KnowledgeBaseProvider {
  readonly name: string;
  status(): Promise<KnowledgeBaseStatus>;
  retrieve(query: string, scope: DocumentScope, limit?: number): Promise<KnowledgeChunk[]>;
}
