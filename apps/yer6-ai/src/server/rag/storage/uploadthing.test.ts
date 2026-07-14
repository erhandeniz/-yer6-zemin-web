import { beforeEach, describe, expect, it, vi } from "vitest";
import type { RAGDocumentRecord } from "@/server/rag/contracts";

const mocks = vi.hoisted(() => ({
  generateSignedURL: vi.fn(),
  deleteFiles: vi.fn()
}));

vi.mock("uploadthing/server", () => ({
  UTApi: class {
    generateSignedURL = mocks.generateSignedURL;
    deleteFiles = mocks.deleteFiles;
  }
}));

import { UploadThingDocumentStorage } from "./uploadthing";

const document = {
  storageKey: "private-document-key",
  sourceUrl: "https://public.example/ignored.pdf",
  mimeType: "application/pdf"
} as RAGDocumentRecord;

describe("UploadThingDocumentStorage", () => {
  beforeEach(() => {
    mocks.generateSignedURL.mockReset();
    vi.unstubAllGlobals();
  });

  it("downloads private documents through a generated signed URL", async () => {
    mocks.generateSignedURL.mockResolvedValue({ ufsUrl: "https://files.example/signed.pdf" });
    const fetchMock = vi.fn(async () =>
      new Response(new Blob(["private-content"], { type: "application/pdf" }), {
        status: 200,
        headers: { "content-type": "application/pdf" }
      })
    );
    vi.stubGlobal("fetch", fetchMock);

    const storage = new UploadThingDocumentStorage(["files.example"], "token");
    const result = await storage.get(document);

    expect(mocks.generateSignedURL).toHaveBeenCalledWith("private-document-key");
    expect(fetchMock).toHaveBeenCalledWith(new URL("https://files.example/signed.pdf"), { redirect: "error" });
    expect(await result.blob.text()).toBe("private-content");
  });

  it("fails closed when private read credentials are absent", async () => {
    const storage = new UploadThingDocumentStorage(["files.example"]);
    await expect(storage.get(document)).rejects.toThrow("RAG_STORAGE_READ_NOT_CONFIGURED");
  });
});
