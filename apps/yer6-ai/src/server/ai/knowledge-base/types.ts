import type { SourceCitation } from "@/lib/ai/contracts";

export type DocumentScope = {
  projectId?: string;
  organizationId?: string;
  includeStandards?: boolean;
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
