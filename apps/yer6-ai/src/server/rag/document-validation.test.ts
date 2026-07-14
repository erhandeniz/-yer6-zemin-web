import { describe, expect, it } from "vitest";
import { validateStoredDocument } from "@/server/rag/document-validation";
import type { RAGDocumentRecord } from "@/server/rag/contracts";

function document(extension: RAGDocumentRecord["extension"], size: number): RAGDocumentRecord {
  return {
    id: "d1",
    name: `sample.${extension}`,
    extension,
    mimeType: "application/octet-stream",
    size,
    category: "Zemin Etütleri",
    scope: "company",
    organizationId: "yer6",
    storageProvider: "uploadthing",
    storageKey: "key",
    status: "UPLOADED",
    chunkCount: 0,
    tokenCount: 0,
    contentIndexingAllowed: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

describe("stored document validation", () => {
  it("accepts a matching PDF signature", async () => {
    const blob = new Blob(["%PDF-1.7 safe"]);
    await expect(validateStoredDocument(document("pdf", blob.size), {
      blob,
      size: blob.size,
      contentType: "application/pdf"
    })).resolves.toBeUndefined();
  });

  it("rejects extension spoofing and size changes", async () => {
    const blob = new Blob(["not a pdf"]);
    await expect(validateStoredDocument(document("pdf", blob.size), {
      blob,
      size: blob.size,
      contentType: "application/pdf"
    })).rejects.toThrow("RAG_DOCUMENT_SIGNATURE_INVALID");
    await expect(validateStoredDocument(document("txt", blob.size + 1), {
      blob,
      size: blob.size,
      contentType: "text/plain"
    })).rejects.toThrow("RAG_DOCUMENT_SIZE_MISMATCH");
  });
});
