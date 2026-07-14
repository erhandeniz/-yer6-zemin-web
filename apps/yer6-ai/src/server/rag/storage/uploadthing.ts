import { UTApi } from "uploadthing/server";
import type { DocumentStorageProvider, RAGDocumentRecord } from "@/server/rag/contracts";

function allowedSourceUrl(value: string | undefined, allowedHosts: string[]) {
  if (!value) throw new Error("RAG_DOCUMENT_URL_MISSING");
  const url = new URL(value);
  if (url.protocol !== "https:" || !allowedHosts.some((host) => url.hostname === host || url.hostname.endsWith(`.${host}`))) {
    throw new Error("RAG_DOCUMENT_URL_NOT_ALLOWED");
  }
  return url;
}

export class UploadThingDocumentStorage implements DocumentStorageProvider {
  readonly name = "uploadthing";
  private readonly client: UTApi | null;

  constructor(private readonly allowedHosts: string[], token?: string) {
    this.client = token ? new UTApi({ token }) : null;
  }

  async get(document: RAGDocumentRecord) {
    if (!this.client) throw new Error("RAG_STORAGE_READ_NOT_CONFIGURED");
    const { ufsUrl } = await this.client.generateSignedURL(document.storageKey);
    const url = allowedSourceUrl(ufsUrl, this.allowedHosts);
    const response = await fetch(url, { redirect: "error" });
    if (!response.ok) throw new Error("RAG_DOCUMENT_DOWNLOAD_FAILED");
    const blob = await response.blob();
    return {
      blob,
      contentType: response.headers.get("content-type") || document.mimeType,
      size: blob.size
    };
  }

  async delete(document: RAGDocumentRecord) {
    if (!this.client) throw new Error("RAG_STORAGE_DELETE_NOT_CONFIGURED");
    const result = await this.client.deleteFiles(document.storageKey);
    if (!result.success) throw new Error("RAG_STORAGE_DELETE_FAILED");
  }
}
