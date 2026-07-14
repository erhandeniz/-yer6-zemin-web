import type { AIChatLocale, CitationSourceType, SourceCitation } from "@/lib/ai/contracts";
import type { VectorMatch } from "@/server/rag/contracts";

function sourceType(value: unknown): CitationSourceType {
  return value === "pdf" || value === "docx" || value === "text" || value === "drawing" ||
    value === "spreadsheet" || value === "ifc" || value === "image" || value === "report" || value === "standard"
    ? value
    : "other";
}

function safeString(value: unknown, maximum = 240) {
  return typeof value === "string"
    ? value.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, maximum)
    : "";
}

function safeInteger(value: unknown) {
  return typeof value === "number" && Number.isInteger(value) && value > 0 ? value : undefined;
}

export function citationFromMatch(match: VectorMatch, index: number): SourceCitation | null {
  const fileName = safeString(match.metadata.fileName, 180);
  if (!fileName) return null;
  const scope = match.metadata.scope === "project" || match.metadata.scope === "standards"
    ? match.metadata.scope
    : "company";

  return {
    id: `K${index + 1}`,
    documentId: safeString(match.metadata.documentId, 100) || undefined,
    fileName,
    sourceType: sourceType(match.metadata.sourceType),
    scope,
    category: safeString(match.metadata.category, 100) || undefined,
    page: safeInteger(match.metadata.page),
    section: safeString(match.metadata.section, 180) || undefined,
    version: safeString(match.metadata.version, 80) || undefined,
    standardCode: safeString(match.metadata.standardCode, 100) || undefined
  };
}

export function sanitizeRetrievedContent(value: unknown, maximumCharacters: number) {
  return safeString(value, maximumCharacters)
    .replace(/<\/?source\b[^>]*>/gi, "")
    .trim();
}

const noSourceNotices: Record<AIChatLocale, string> = {
  tr: "Bilgi tabanında bu soruyla ilgili bir belge bulunamadı. Aşağıdaki değerlendirme genel mühendislik bilgisine dayanır.",
  en: "No relevant document was found in the knowledge base. The assessment below is based on general engineering knowledge.",
  ar: "لم يتم العثور على مستند ذي صلة في قاعدة المعرفة. يعتمد التقييم أدناه على المعرفة الهندسية العامة."
};

export function noSourceNotice(locale: AIChatLocale) {
  return noSourceNotices[locale];
}

export function isGreetingOnly(value: string) {
  const normalized = value.trim().toLocaleLowerCase("tr-TR").replace(/[!.,؟?]+$/g, "").trim();
  return /^(merhaba|selam|günaydın|iyi akşamlar|hello|hi|hey|مرحبا|مرحباً|السلام عليكم)$/u.test(normalized);
}
