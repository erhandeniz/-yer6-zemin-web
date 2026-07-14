import type { KnowledgeDocumentStatus, KnowledgeDocumentSummary, KnowledgeStats } from "@/lib/rag/api";
import type { KnowledgeCategory, KnowledgeFileExtension } from "@/lib/rag/catalog";
import type { DocumentScope, KnowledgeChunk } from "@/server/ai/knowledge-base/types";

export type RAGDocumentScope = "project" | "company" | "standards";

export type RAGDocumentRecord = KnowledgeDocumentSummary & {
  extension: KnowledgeFileExtension;
  mimeType: string;
  storageProvider: string;
  storageKey: string;
  sourceUrl?: string;
  checksum?: string;
  metadata?: Record<string, unknown>;
  tokenCount: number;
};

export type CreateRAGDocumentInput = {
  name: string;
  extension: KnowledgeFileExtension;
  mimeType: string;
  size: number;
  category: KnowledgeCategory;
  scope: RAGDocumentScope;
  projectId?: string;
  organizationId?: string;
  storageProvider: string;
  storageKey: string;
  sourceUrl?: string;
  checksum?: string;
  version?: string;
  standardId?: string;
  licenseStatus?: "PUBLIC" | "LICENSED_INTERNAL" | "REFERENCE_ONLY" | "RESTRICTED";
  contentIndexingAllowed?: boolean;
  uploadedById?: string;
  metadata?: Record<string, unknown>;
};

export type UpdateRAGDocumentInput = {
  category?: KnowledgeCategory;
  status?: KnowledgeDocumentStatus;
  errorCode?: string | null;
  errorMessage?: string | null;
  parserVersion?: string;
  embeddingProvider?: string;
  embeddingModel?: string;
  vectorProvider?: string;
  chunkCount?: number;
  tokenCount?: number;
  indexedAt?: Date | null;
  metadata?: Record<string, unknown>;
  checksum?: string;
  version?: string;
  standardId?: string | null;
  licenseStatus?: "PUBLIC" | "LICENSED_INTERNAL" | "REFERENCE_ONLY" | "RESTRICTED";
  contentIndexingAllowed?: boolean;
};

export type RAGChunkDraft = {
  ordinal: number;
  content: string;
  contentHash: string;
  tokenEstimate: number;
  page?: number;
  section?: string;
  metadata?: Record<string, unknown>;
};

export type RAGChunkRecord = RAGChunkDraft & {
  id: string;
  documentId: string;
  vectorId: string;
};

export interface RAGMetadataRepository {
  createDocument(input: CreateRAGDocumentInput): Promise<RAGDocumentRecord>;
  getDocument(id: string): Promise<RAGDocumentRecord | null>;
  listDocuments(options: {
    category?: KnowledgeCategory;
    status?: KnowledgeDocumentStatus;
    scope?: RAGDocumentScope;
    projectId?: string;
    organizationId?: string;
    cursor?: string;
    limit: number;
  }): Promise<{ documents: RAGDocumentRecord[]; nextCursor?: string }>;
  updateDocument(id: string, input: UpdateRAGDocumentInput): Promise<RAGDocumentRecord>;
  deleteDocument(id: string): Promise<void>;
  replaceChunks(documentId: string, chunks: RAGChunkRecord[]): Promise<void>;
  listChunkVectorIds(documentId: string): Promise<string[]>;
  stats(): Promise<Omit<KnowledgeStats, "layers">>;
}

export type StoredDocument = {
  blob: Blob;
  contentType: string;
  size: number;
};

export interface DocumentStorageProvider {
  readonly name: string;
  get(document: RAGDocumentRecord): Promise<StoredDocument>;
  delete(document: RAGDocumentRecord): Promise<void>;
}

export type ParsedDocument = {
  text: string;
  metadata: Record<string, unknown>;
  metadataOnly: boolean;
  parserVersion: string;
};

export interface DocumentParser {
  readonly name: string;
  supports(extension: KnowledgeFileExtension): boolean;
  parse(document: RAGDocumentRecord, stored: StoredDocument): Promise<ParsedDocument>;
}

export interface EmbeddingService {
  readonly name: string;
  readonly model: string;
  readonly dimensions: number;
  embed(texts: string[]): Promise<number[][]>;
}

export type VectorMetadata = {
  content: string;
  documentId: string;
  fileName: string;
  sourceType: string;
  scope: RAGDocumentScope;
  category: string;
  checksum: string;
  projectId?: string;
  organizationId?: string;
  version?: string;
  standardCode?: string;
  page?: number;
  section?: string;
  updatedAt: string;
};

export type VectorRecord = {
  id: string;
  namespace: string;
  values: number[];
  metadata: VectorMetadata;
};

export type VectorMatch = {
  id: string;
  score: number;
  metadata: Partial<VectorMetadata>;
};

export interface VectorDatabase {
  readonly name: string;
  upsert(records: VectorRecord[]): Promise<void>;
  query(vector: number[], options: { namespaces: string[]; topK: number }): Promise<VectorMatch[]>;
  delete(ids: string[]): Promise<void>;
}

export interface RetrievalEngine {
  search(query: string, scope: DocumentScope, limit?: number): Promise<KnowledgeChunk[]>;
}

export type IngestionResult = {
  documentId: string;
  status: "READY";
  chunks: number;
  tokens: number;
};
