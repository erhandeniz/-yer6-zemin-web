export type AIChatLocale = "tr" | "en" | "ar";

export type AIChatRole = "user" | "assistant";

export type AIChatMessage = {
  role: AIChatRole;
  content: string;
};

export type CitationScope = "project" | "company" | "standards";

export type CitationSourceType = "pdf" | "docx" | "text" | "spreadsheet" | "drawing" | "ifc" | "image" | "report" | "standard" | "other";

export type SourceCitation = {
  id: string;
  fileName: string;
  sourceType: CitationSourceType;
  scope: CitationScope;
  documentId?: string;
  category?: string;
  page?: number;
  section?: string;
  version?: string;
  standardCode?: string;
};

export type AIProviderName = "openai" | "cloudflare-workers-ai" | "deepseek" | "gemini";

export type AIStreamEvent =
  | { type: "meta"; requestId: string; provider: AIProviderName }
  | { type: "sources"; citations: SourceCitation[] }
  | { type: "tool"; name: string }
  | { type: "delta"; text: string }
  | { type: "done"; stopped: boolean; tools?: string[] }
  | { type: "error"; message: string };
