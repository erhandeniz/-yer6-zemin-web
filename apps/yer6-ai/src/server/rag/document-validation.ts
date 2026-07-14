import type { RAGDocumentRecord, StoredDocument } from "@/server/rag/contracts";

const MAX_DOCUMENT_BYTES = 256 * 1024 * 1024;

function startsWith(bytes: Uint8Array, signature: number[]) {
  return signature.every((value, index) => bytes[index] === value);
}

export async function validateStoredDocument(document: RAGDocumentRecord, stored: StoredDocument) {
  if (stored.size <= 0 || stored.size > MAX_DOCUMENT_BYTES) throw new Error("RAG_DOCUMENT_SIZE_INVALID");
  if (document.size !== stored.size) throw new Error("RAG_DOCUMENT_SIZE_MISMATCH");
  const bytes = new Uint8Array(await stored.blob.slice(0, 32).arrayBuffer());
  const ascii = new TextDecoder("ascii").decode(bytes);
  const zip = startsWith(bytes, [0x50, 0x4b, 0x03, 0x04]);
  const ole = startsWith(bytes, [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]);

  const valid = document.extension === "pdf"
    ? ascii.startsWith("%PDF-")
    : document.extension === "png"
      ? startsWith(bytes, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
      : document.extension === "jpg" || document.extension === "jpeg"
        ? startsWith(bytes, [0xff, 0xd8, 0xff])
        : document.extension === "docx" || ["xlsx", "xlsm", "xlsb"].includes(document.extension)
          ? zip
          : document.extension === "xls"
            ? ole
            : document.extension === "dwg"
              ? /^AC10\d{2}/.test(ascii)
              : true;
  if (!valid) throw new Error("RAG_DOCUMENT_SIGNATURE_INVALID");
}
