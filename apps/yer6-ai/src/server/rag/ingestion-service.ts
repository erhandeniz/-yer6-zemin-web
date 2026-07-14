import { chunkMarkdown } from "@/server/rag/chunking/markdown-chunker";
import type {
  DocumentParser,
  DocumentStorageProvider,
  EmbeddingService,
  IngestionResult,
  RAGDocumentRecord,
  RAGMetadataRepository,
  VectorDatabase,
  VectorMetadata,
  VectorRecord
} from "@/server/rag/contracts";
import { sha256 } from "@/server/rag/hash";
import { documentNamespace } from "@/server/rag/scope";
import { validateStoredDocument } from "@/server/rag/document-validation";

type IngestionOptions = {
  chunkSize: number;
  chunkOverlap: number;
  embeddingBatchSize: number;
  parserVersion: string;
};

function sourceType(document: RAGDocumentRecord) {
  if (document.scope === "standards") return "standard";
  if (document.extension === "pdf") return "pdf";
  if (document.extension === "docx") return "docx";
  if (["xlsx", "xlsm", "xlsb", "xls"].includes(document.extension)) return "spreadsheet";
  if (["dwg", "dxf"].includes(document.extension)) return "drawing";
  if (document.extension === "ifc") return "ifc";
  if (["jpg", "jpeg", "png"].includes(document.extension)) return "image";
  return "text";
}

function canIndexStandardContent(document: RAGDocumentRecord) {
  if (document.scope !== "standards") return true;
  return document.contentIndexingAllowed &&
    (document.licenseStatus === "PUBLIC" || document.licenseStatus === "LICENSED_INTERNAL");
}

function rightsSafeStandardMetadata(document: RAGDocumentRecord) {
  const standardCode = typeof document.metadata?.standardCode === "string"
    ? document.metadata.standardCode
    : undefined;
  const rightsHolder = typeof document.metadata?.rightsHolder === "string"
    ? document.metadata.rightsHolder
    : undefined;
  return [
    "# Standart bibliyografik kaydı",
    `Belge: ${document.name}`,
    standardCode ? `Standart: ${standardCode}` : "",
    document.version ? `Sürüm: ${document.version}` : "",
    `Lisans durumu: ${document.licenseStatus ?? "REFERENCE_ONLY"}`,
    rightsHolder ? `Hak sahibi: ${rightsHolder}` : "",
    "Bu kayıt korunan standart metnini içermez; yalnızca bibliyografik referanstır."
  ].filter(Boolean).join("\n");
}

function publicErrorCode(error: unknown) {
  if (error instanceof Error && /^RAG_[A-Z0-9_]+$/.test(error.message)) return error.message;
  return "RAG_INGESTION_FAILED";
}

export class RAGIngestionService {
  constructor(
    private readonly repository: RAGMetadataRepository,
    private readonly storage: DocumentStorageProvider,
    private readonly parserFor: (extension: RAGDocumentRecord["extension"]) => DocumentParser,
    private readonly embeddings: EmbeddingService,
    private readonly vectors: VectorDatabase,
    private readonly options: IngestionOptions
  ) {}

  async ingest(documentId: string): Promise<IngestionResult> {
    const document = await this.repository.getDocument(documentId);
    if (!document) throw new Error("RAG_DOCUMENT_NOT_FOUND");

    try {
      await this.repository.updateDocument(document.id, {
        status: "PARSING",
        errorCode: null,
        errorMessage: null
      });

      let text: string;
      let parserVersion = this.options.parserVersion;
      let parsedMetadata: Record<string, unknown> = {};

      if (canIndexStandardContent(document)) {
        const stored = await this.storage.get(document);
        await validateStoredDocument(document, stored);
        const parsed = await this.parserFor(document.extension).parse(document, stored);
        text = parsed.text;
        parserVersion = parsed.parserVersion;
        parsedMetadata = parsed.metadata;
      } else {
        text = rightsSafeStandardMetadata(document);
        parsedMetadata = { metadataOnly: true, protectedStandardContentExcluded: true };
      }

      await this.repository.updateDocument(document.id, { status: "CHUNKING", parserVersion });
      const drafts = await chunkMarkdown(text, {
        maxCharacters: this.options.chunkSize,
        overlapCharacters: this.options.chunkOverlap
      });
      if (drafts.length === 0) throw new Error("RAG_DOCUMENT_EMPTY");

      await this.repository.updateDocument(document.id, { status: "EMBEDDING" });
      const namespace = documentNamespace(document);
      const checksum = document.checksum ?? await sha256(`${document.storageKey}:${document.size}`);
      const chunks = [];

      for (let offset = 0; offset < drafts.length; offset += this.options.embeddingBatchSize) {
        const batch = drafts.slice(offset, offset + this.options.embeddingBatchSize);
        const values = await this.embeddings.embed(batch.map((chunk) => chunk.content));
        const batchRecords: VectorRecord[] = [];
        for (let index = 0; index < batch.length; index += 1) {
          const chunk = batch[index];
          const id = await sha256(`${document.id}:${chunk.ordinal}:${chunk.contentHash}`);
          const vectorId = `rag_${id.slice(0, 56)}`;
          const metadata: VectorMetadata = {
            content: chunk.content,
            documentId: document.id,
            fileName: document.name,
            sourceType: sourceType(document),
            scope: document.scope,
            category: document.category,
            checksum,
            projectId: document.projectId,
            organizationId: document.organizationId,
            page: chunk.page,
            section: chunk.section,
            version: document.version,
            standardCode: typeof document.metadata?.standardCode === "string"
              ? document.metadata.standardCode
              : undefined,
            updatedAt: document.updatedAt
          };
          batchRecords.push({ id: vectorId, namespace, values: values[index], metadata });
          chunks.push({
            ...chunk,
            id: `chk_${id.slice(0, 56)}`,
            documentId: document.id,
            vectorId,
            metadata: parsedMetadata
          });
        }
        await this.vectors.upsert(batchRecords);
      }

      await this.repository.updateDocument(document.id, { status: "INDEXING" });
      const previousVectorIds = await this.repository.listChunkVectorIds(document.id);
      await this.repository.replaceChunks(document.id, chunks);
      const currentVectorIds = new Set(chunks.map((chunk) => chunk.vectorId));
      const obsolete = previousVectorIds.filter((id) => !currentVectorIds.has(id));
      if (obsolete.length > 0) await this.vectors.delete(obsolete);

      const tokens = chunks.reduce((sum, chunk) => sum + chunk.tokenEstimate, 0);
      await this.repository.updateDocument(document.id, {
        status: "READY",
        checksum,
        parserVersion,
        embeddingProvider: this.embeddings.name,
        embeddingModel: this.embeddings.model,
        vectorProvider: this.vectors.name,
        chunkCount: chunks.length,
        tokenCount: tokens,
        indexedAt: new Date(),
        metadata: { ...document.metadata, ...parsedMetadata }
      });
      return { documentId: document.id, status: "READY", chunks: chunks.length, tokens };
    } catch (error) {
      const errorCode = publicErrorCode(error);
      await this.repository.updateDocument(document.id, {
        status: "FAILED",
        errorCode,
        errorMessage: errorCode
      }).catch(() => undefined);
      throw new Error(errorCode);
    }
  }
}
