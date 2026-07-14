import { describe, expect, it, vi } from "vitest";
import type {
  DocumentParser,
  DocumentStorageProvider,
  EmbeddingService,
  RAGChunkRecord,
  RAGDocumentRecord,
  RAGMetadataRepository,
  UpdateRAGDocumentInput,
  VectorDatabase,
  VectorRecord
} from "@/server/rag/contracts";
import { RAGIngestionService } from "@/server/rag/ingestion-service";
import { SemanticRetrievalEngine } from "@/server/rag/retrieval-engine";

class MemoryRepository implements RAGMetadataRepository {
  chunks: RAGChunkRecord[] = [];
  constructor(public document: RAGDocumentRecord) {}
  async createDocument() { return this.document; }
  async getDocument(id: string) { return id === this.document.id ? this.document : null; }
  async listDocuments() { return { documents: [this.document] }; }
  async updateDocument(_id: string, input: UpdateRAGDocumentInput) {
    const { standardId, ...rest } = input;
    this.document = {
      ...this.document,
      ...rest,
      standardId: standardId === null ? undefined : standardId ?? this.document.standardId,
      errorCode: input.errorCode ?? this.document.errorCode,
      updatedAt: new Date().toISOString()
    };
    return this.document;
  }
  async deleteDocument() {}
  async replaceChunks(_documentId: string, chunks: RAGChunkRecord[]) { this.chunks = chunks; }
  async listChunkVectorIds() { return this.chunks.map((chunk) => chunk.vectorId); }
  async stats() {
    return {
      documents: 1,
      readyDocuments: this.document.status === "READY" ? 1 : 0,
      processingDocuments: 0,
      failedDocuments: 0,
      chunks: this.chunks.length,
      bytes: this.document.size,
      categories: [{ category: this.document.category, count: 1 }]
    };
  }
}

class MemoryVectors implements VectorDatabase {
  readonly name = "memory-vector";
  records: VectorRecord[] = [];
  async upsert(records: VectorRecord[]) {
    const ids = new Set(records.map((record) => record.id));
    this.records = [...this.records.filter((record) => !ids.has(record.id)), ...records];
  }
  async query(_vector: number[], options: { namespaces: string[]; topK: number }) {
    return this.records
      .filter((record) => options.namespaces.includes(record.namespace))
      .slice(0, options.topK)
      .map((record) => ({ id: record.id, score: 0.92, metadata: record.metadata }));
  }
  async delete(ids: string[]) { this.records = this.records.filter((record) => !ids.includes(record.id)); }
}

const embeddings: EmbeddingService = {
  name: "test-embedding",
  model: "test-model",
  dimensions: 3,
  async embed(texts) { return texts.map((text) => [text.length, 1, 0]); }
};

const parser: DocumentParser = {
  name: "test-parser",
  supports: () => true,
  async parse(_document, stored) {
    return {
      text: await stored.blob.text(),
      metadata: { parsed: true },
      metadataOnly: false,
      parserVersion: "test-parser-v1"
    };
  }
};

function record(overrides: Partial<RAGDocumentRecord> = {}): RAGDocumentRecord {
  return {
    id: "document-1",
    name: "investigation.txt",
    extension: "txt",
    mimeType: "text/plain",
    size: 0,
    category: "Zemin Etütleri",
    scope: "project",
    projectId: "project-1",
    storageProvider: "memory",
    storageKey: "document-1",
    status: "UPLOADED",
    chunkCount: 0,
    tokenCount: 0,
    contentIndexingAllowed: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...overrides
  };
}

function service(
  repository: MemoryRepository,
  storage: DocumentStorageProvider,
  vectors: MemoryVectors,
  selectedParser = parser
) {
  return new RAGIngestionService(
    repository,
    storage,
    () => selectedParser,
    embeddings,
    vectors,
    { chunkSize: 800, chunkOverlap: 80, embeddingBatchSize: 4, parserVersion: "fallback-v1" }
  );
}

describe("complete RAG flow", () => {
  it("stores, parses, chunks, embeds, indexes, retrieves and cites a project document", async () => {
    const text = "# Sondaj BH-01\n\nYumuşak kil tabakası 4 ile 11 metre arasında raporlanmıştır.";
    const blob = new Blob([text]);
    const repository = new MemoryRepository(record({ size: blob.size }));
    const vectors = new MemoryVectors();
    const storage: DocumentStorageProvider = {
      name: "memory",
      async get() { return { blob, size: blob.size, contentType: "text/plain" }; },
      async delete() {}
    };

    const result = await service(repository, storage, vectors).ingest("document-1");
    expect(result).toMatchObject({ status: "READY", chunks: 1 });
    expect(repository.document).toMatchObject({
      status: "READY",
      embeddingModel: "test-model",
      vectorProvider: "memory-vector"
    });

    const retrieval = new SemanticRetrievalEngine(embeddings, vectors, {
      topK: 5,
      minimumScore: 0.5,
      maximumRetrievedCharacters: 5000
    });
    const matches = await retrieval.search("BH-01 yumuşak kil", { projectId: "project-1" });
    expect(matches).toHaveLength(1);
    expect(matches[0].content).toContain("Yumuşak kil");
    expect(matches[0].citation).toMatchObject({
      id: "K1",
      documentId: "document-1",
      fileName: "investigation.txt",
      scope: "project"
    });
  });

  it("indexes only bibliographic metadata for a protected standard", async () => {
    const repository = new MemoryRepository(record({
      name: "standard.pdf",
      extension: "pdf",
      scope: "standards",
      projectId: undefined,
      licenseStatus: "REFERENCE_ONLY",
      contentIndexingAllowed: false,
      metadata: { standardCode: "TS TEST 1" }
    }));
    const get = vi.fn(async () => { throw new Error("protected content must not be read"); });
    const storage: DocumentStorageProvider = { name: "memory", get, async delete() {} };
    const protectedParser: DocumentParser = {
      ...parser,
      parse: vi.fn(async () => { throw new Error("protected content must not be parsed"); })
    };
    const vectors = new MemoryVectors();

    await expect(service(repository, storage, vectors, protectedParser).ingest("document-1"))
      .resolves.toMatchObject({ status: "READY" });
    expect(get).not.toHaveBeenCalled();
    expect(protectedParser.parse).not.toHaveBeenCalled();
    expect(vectors.records[0].metadata.content).toContain("korunan standart metnini içermez");
  });
});
