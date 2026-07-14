import type { KnowledgeCategory } from "@/lib/rag/catalog";

export type KnowledgeDocumentStatus =
  | "UPLOADED"
  | "QUEUED"
  | "PARSING"
  | "CHUNKING"
  | "EMBEDDING"
  | "INDEXING"
  | "READY"
  | "FAILED"
  | "ARCHIVED";

export type KnowledgeDocumentSummary = {
  id: string;
  name: string;
  category: KnowledgeCategory;
  extension: string;
  size: number;
  status: KnowledgeDocumentStatus;
  scope: "project" | "company" | "standards";
  projectId?: string;
  organizationId?: string;
  chunkCount: number;
  embeddingModel?: string;
  version?: string;
  standardId?: string;
  licenseStatus?: "PUBLIC" | "LICENSED_INTERNAL" | "REFERENCE_ONLY" | "RESTRICTED";
  contentIndexingAllowed: boolean;
  errorCode?: string;
  createdAt: string;
  updatedAt: string;
};

export type KnowledgeStats = {
  documents: number;
  readyDocuments: number;
  processingDocuments: number;
  failedDocuments: number;
  chunks: number;
  bytes: number;
  categories: Array<{ category: KnowledgeCategory; count: number }>;
  layers: {
    storage: string;
    parser: string;
    metadata: string;
    embedding: string;
    vector: string;
    retrieval: "ready" | "disabled" | "unavailable";
  };
};

export type KnowledgeSearchResult = {
  content: string;
  score: number;
  citation: {
    id: string;
    documentId?: string;
    fileName: string;
    category?: string;
    page?: number;
    section?: string;
    scope: "project" | "company" | "standards";
    version?: string;
  };
};
