import type { R2BucketBinding } from "@/server/rag/cloudflare-bindings";
import type { DocumentStorageProvider, RAGDocumentRecord } from "@/server/rag/contracts";

export class R2DocumentStorage implements DocumentStorageProvider {
  readonly name = "r2";

  constructor(private readonly bucket: R2BucketBinding) {}

  async get(document: RAGDocumentRecord) {
    const object = await this.bucket.get(document.storageKey);
    if (!object) throw new Error("RAG_DOCUMENT_OBJECT_NOT_FOUND");
    const blob = await object.blob();
    return {
      blob,
      contentType: object.httpMetadata?.contentType || document.mimeType,
      size: object.size
    };
  }

  async delete(document: RAGDocumentRecord) {
    await this.bucket.delete(document.storageKey);
  }
}
