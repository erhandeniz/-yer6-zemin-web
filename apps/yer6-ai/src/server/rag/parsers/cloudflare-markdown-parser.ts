import type { KnowledgeFileExtension } from "@/lib/rag/catalog";
import type { RAGWorkersAIBinding } from "@/server/rag/cloudflare-bindings";
import type { DocumentParser, ParsedDocument, RAGDocumentRecord, StoredDocument } from "@/server/rag/contracts";

const supported = new Set<KnowledgeFileExtension>([
  "pdf", "docx", "jpg", "jpeg", "png", "xlsx", "xlsm", "xlsb", "xls"
]);

export class CloudflareMarkdownParser implements DocumentParser {
  readonly name = "cloudflare-markdown";

  constructor(private readonly ai: RAGWorkersAIBinding) {}

  supports(extension: KnowledgeFileExtension) {
    return supported.has(extension);
  }

  async parse(document: RAGDocumentRecord, stored: StoredDocument): Promise<ParsedDocument> {
    const result = await this.ai.toMarkdown(
      { name: document.name, blob: stored.blob },
      { conversionOptions: { pdf: { metadata: true } } }
    );

    if (result.format !== "markdown") throw new Error("RAG_MARKDOWN_CONVERSION_FAILED");
    const text = result.data.trim();
    if (!text) throw new Error("RAG_DOCUMENT_EMPTY");

    return {
      text,
      metadata: {
        sourceFormat: document.extension,
        convertedMimeType: result.mimeType,
        conversionTokens: result.tokens,
        originalBytes: stored.size
      },
      metadataOnly: false,
      parserVersion: "cloudflare-to-markdown-v1"
    };
  }
}
