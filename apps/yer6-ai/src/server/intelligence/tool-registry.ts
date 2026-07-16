import type { Tool } from "ai";
import type { SourceCitation } from "@/lib/ai/contracts";
import { buildEngineeringTools } from "@/server/ai/tools";
import type { ToolContext } from "@/server/ai/tools/contracts";
import { CitationCollector } from "@/server/intelligence/response-parser";

export interface IntelligenceTools {
  tools: Record<string, Tool>;
  toolNames: string[];
  citations: CitationCollector;
}

/**
 * Assemble the optional tool set for a turn. RAG (`search_company_knowledge`) is
 * just one tool the model MAY call — it is only present for authenticated,
 * non-demo traffic with retrieval configured. A citation collector is wired in
 * so real sources surface only when the knowledge tool actually returns them.
 */
export function buildIntelligenceTools(context: Omit<ToolContext, "onCitations">): IntelligenceTools {
  const citations = new CitationCollector();
  const ctx: ToolContext = {
    ...context,
    onCitations: (c: SourceCitation[]) => citations.add(c)
  };
  const tools = buildEngineeringTools(ctx);
  return { tools, toolNames: Object.keys(tools), citations };
}
