import type { KnowledgeFileExtension } from "@/lib/rag/catalog";
import type { DocumentParser } from "@/server/rag/contracts";

export class DocumentParserRegistry {
  constructor(private readonly parsers: DocumentParser[]) {}

  parserFor(extension: KnowledgeFileExtension) {
    const parser = this.parsers.find((candidate) => candidate.supports(extension));
    if (!parser) throw new Error("RAG_FILE_TYPE_NOT_SUPPORTED");
    return parser;
  }
}
