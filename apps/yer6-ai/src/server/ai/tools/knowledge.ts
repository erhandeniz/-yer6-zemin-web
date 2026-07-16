import { tool, type Tool } from "ai";
import { z } from "zod";
import { success, failure, type ToolContext } from "@/server/ai/tools/contracts";

/**
 * Company knowledge search tool. Runs semantic RAG retrieval over the caller's
 * authorised scope (project/company/standards). NEVER exposed to demo traffic —
 * the orchestrator omits it entirely in demo mode, so production R2/Vectorize
 * data is unreachable from the public demo.
 */
export function buildKnowledgeSearchTool(context: ToolContext): Tool {
  return tool({
    description:
      "Search the company knowledge base (uploaded project/company documents and standards) for grounding evidence. " +
      "Returns cited passages. Only cite claims supported by returned passages.",
    inputSchema: z.object({
      query: z.string().min(3).max(500).describe("Focused search query in the user's language")
    }),
    execute: async ({ query }) => {
      if (context.demo || !context.retrieval) {
        return failure("search_company_knowledge", "Knowledge search is not available in this context.", {
          limitations: ["Demo mode and unconfigured RAG have no access to company documents."]
        });
      }
      const chunks = await context.retrieval.search(query, context.scope).catch(() => []);
      if (chunks.length === 0) {
        return success("search_company_knowledge", "No matching company documents were found.", {
          data: { results: [] },
          warnings: ["Do not claim a document, log, price or test result exists when retrieval is empty."],
          confidence: "low"
        });
      }
      // Surface citations to the runtime ONLY when real sources were returned.
      context.onCitations?.(chunks.map((chunk) => chunk.citation));
      return success("search_company_knowledge", `${chunks.length} passage(s) retrieved.`, {
        data: {
          results: chunks.map((chunk) => ({
            id: chunk.citation.id,
            fileName: chunk.citation.fileName,
            scope: chunk.citation.scope,
            page: chunk.citation.page,
            section: chunk.citation.section,
            content: chunk.content
          }))
        },
        confidence: "medium"
      });
    }
  });
}
