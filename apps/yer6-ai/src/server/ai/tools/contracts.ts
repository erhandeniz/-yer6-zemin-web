import type { AIChatLocale, SourceCitation } from "@/lib/ai/contracts";
import type { DocumentScope, KnowledgeChunk } from "@/server/ai/knowledge-base/types";

/**
 * Confidence reflects how much the tool's OUTPUT can be trusted given the
 * INPUTS — arithmetic is exact, but engineering confidence depends on whether
 * real site data was supplied. Tools never invent data to raise confidence.
 */
export type ToolConfidence = "low" | "medium" | "high";

/** Uniform envelope every engineering tool returns to the model. */
export type EngineeringToolResult = {
  ok: boolean;
  tool: string;
  summary: string;
  data?: unknown;
  formula?: string | string[];
  steps?: string[];
  assumptions?: string[];
  units?: Record<string, string>;
  warnings?: string[];
  limitations?: string[];
  /** Inputs that were missing or invalid — surfaced, never fabricated. */
  missing?: string[];
  references?: string[];
  confidence: ToolConfidence;
};

export type ToolContext = {
  /** True for public demo traffic: no production R2/Vectorize/company data. */
  demo: boolean;
  locale: AIChatLocale;
  scope: DocumentScope;
  /** Semantic retrieval engine, or null when RAG is unavailable/disabled. */
  retrieval: { search: (q: string, s: DocumentScope, limit?: number) => Promise<KnowledgeChunk[]> } | null;
  /** Whether a database connection string is configured (structured modules). */
  databaseAvailable: boolean;
  /** Whether controlled public internet research is allowed for this session. */
  researchEnabled: boolean;
  /**
   * Optional sink invoked when a knowledge tool returns REAL sources. Lets the
   * intelligence runtime surface citations only when the model actually used
   * retrieved company documents (never for ordinary/general conversation).
   */
  onCitations?: (citations: SourceCitation[]) => void;
};

export function failure(tool: string, summary: string, extra: Partial<EngineeringToolResult> = {}): EngineeringToolResult {
  return { ok: false, tool, summary, confidence: "low", ...extra };
}

export function success(tool: string, summary: string, extra: Partial<EngineeringToolResult> = {}): EngineeringToolResult {
  return { ok: true, tool, summary, confidence: "medium", ...extra };
}
