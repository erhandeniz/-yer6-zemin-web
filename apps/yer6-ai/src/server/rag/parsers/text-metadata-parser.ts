import type { KnowledgeFileExtension } from "@/lib/rag/catalog";
import type { DocumentParser, ParsedDocument, RAGDocumentRecord, StoredDocument } from "@/server/rag/contracts";

const MAX_TEXT_BYTES = 20 * 1024 * 1024;
const MAX_METADATA_BYTES = 2 * 1024 * 1024;
const supported = new Set<KnowledgeFileExtension>(["txt", "md", "markdown", "dwg", "dxf", "ifc"]);

function safeMetadataValue(value: string | undefined) {
  return value?.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, 300);
}

async function leadingText(blob: Blob, maxBytes: number) {
  return blob.slice(0, maxBytes).text();
}

function dxfMetadata(text: string) {
  const version = text.match(/\$ACADVER\s*\r?\n\s*1\s*\r?\n([^\r\n]+)/i)?.[1];
  const units = text.match(/\$INSUNITS\s*\r?\n\s*70\s*\r?\n([^\r\n]+)/i)?.[1];
  const entities = (text.match(/\r?\n\s*0\s*\r?\n\s*(LINE|LWPOLYLINE|POLYLINE|CIRCLE|ARC|TEXT|MTEXT)\s*(?=\r?\n)/gi) ?? []).length;
  return {
    cadFormat: "DXF",
    drawingVersion: safeMetadataValue(version),
    insertionUnitsCode: safeMetadataValue(units),
    sampledEntityCount: entities
  };
}

function ifcMetadata(text: string) {
  return {
    bimFormat: "IFC",
    schema: safeMetadataValue(text.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']+)'/i)?.[1]),
    sourceApplication: safeMetadataValue(text.match(/FILE_NAME\s*\([^;]+?'([^']+)'/i)?.[1]),
    projectName: safeMetadataValue(text.match(/IFCPROJECT\s*\([^;]*?'([^']+)'\s*,\s*\$\s*,\s*'([^']+)'/i)?.[2])
  };
}

async function dwgMetadata(blob: Blob) {
  const header = new TextDecoder("ascii").decode(await blob.slice(0, 6).arrayBuffer());
  return {
    cadFormat: "DWG",
    drawingVersionSignature: /^AC10\d{2}$/.test(header) ? header : "unknown"
  };
}

function metadataSummary(document: RAGDocumentRecord, metadata: Record<string, unknown>) {
  const details = Object.entries(metadata)
    .filter(([, value]) => value !== undefined && value !== "")
    .map(([key, value]) => `- ${key}: ${String(value)}`)
    .join("\n");
  return `# Dosya metadatası\n\nDosya: ${document.name}\nKategori: ${document.category}\n` +
    `Tür: ${document.extension.toUpperCase()}\nBoyut: ${document.size} bayt\n\n${details}`;
}

export class TextAndMetadataParser implements DocumentParser {
  readonly name = "text-and-metadata";

  supports(extension: KnowledgeFileExtension) {
    return supported.has(extension);
  }

  async parse(document: RAGDocumentRecord, stored: StoredDocument): Promise<ParsedDocument> {
    if (document.extension === "txt" || document.extension === "md" || document.extension === "markdown") {
      if (stored.size > MAX_TEXT_BYTES) throw new Error("RAG_TEXT_DOCUMENT_TOO_LARGE");
      const text = (await stored.blob.text()).trim();
      if (!text) throw new Error("RAG_DOCUMENT_EMPTY");
      return {
        text,
        metadata: { sourceFormat: document.extension, originalBytes: stored.size },
        metadataOnly: false,
        parserVersion: "yer6-text-parser-v1"
      };
    }

    const metadata = document.extension === "dwg"
      ? await dwgMetadata(stored.blob)
      : document.extension === "dxf"
        ? dxfMetadata(await leadingText(stored.blob, MAX_METADATA_BYTES))
        : ifcMetadata(await leadingText(stored.blob, MAX_METADATA_BYTES));

    return {
      text: metadataSummary(document, metadata),
      metadata: { ...metadata, metadataOnly: true, originalBytes: stored.size },
      metadataOnly: true,
      parserVersion: "yer6-cad-metadata-parser-v1"
    };
  }
}
