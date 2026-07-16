import { tool, type Tool } from "ai";
import { z } from "zod";
import { success, failure, type ToolContext } from "@/server/ai/tools/contracts";

/**
 * Controlled public research tool.
 *
 * Searches public authoritative sources (standards bodies, universities,
 * government institutions, scientific publishers, equipment manufacturers) via a
 * pluggable search provider (Tavily; TAVILY_API_KEY). It NEVER fabricates
 * results: with no provider configured it returns an explicit
 * "not configured" outcome. Every returned item carries a citation (url, title,
 * publisher, publication date, access date). Results that cannot be
 * independently verified are labelled as such. Copyrighted full texts are never
 * downloaded or reproduced — only titles, links and short snippets.
 */

const AUTHORITATIVE_HINTS = [
  ".gov", ".edu", ".org", "europa.eu", "iso.org", "astm.org", "aci-", "concrete.org",
  "fhwa.dot.gov", "usace.army.mil", "issmge.org", "dfi.org", "bsigroup.com", "din.de",
  "tse.org.tr", "resmigazete", "tubitak", "bauer.de", "soilmec", "casagrande", "keller",
  "menard", "sciencedirect", "springer", "asce.org", "researchgate", "scholar.google"
];

function publisherFromUrl(raw: string): string {
  try {
    return new URL(raw).hostname.replace(/^www\./, "");
  } catch {
    return "unknown";
  }
}

function authorityRank(url: string): number {
  const lower = url.toLowerCase();
  return AUTHORITATIVE_HINTS.some((hint) => lower.includes(hint)) ? 0 : 1;
}

type TavilyResult = { title?: string; url?: string; content?: string; published_date?: string };

async function tavilySearch(apiKey: string, query: string, maxResults: number): Promise<TavilyResult[]> {
  const response = await fetch("https://api.tavily.com/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: apiKey,
      query,
      search_depth: "advanced",
      max_results: Math.min(Math.max(maxResults, 3), 8),
      include_answer: false,
      include_raw_content: false
    }),
    signal: AbortSignal.timeout(25_000)
  });
  if (!response.ok) throw new Error(`TAVILY_${response.status}`);
  const data = (await response.json()) as { results?: TavilyResult[] };
  return Array.isArray(data.results) ? data.results : [];
}

export function isResearchConfigured(): boolean {
  return Boolean(process.env.TAVILY_API_KEY?.trim());
}

export function buildResearchTool(context: ToolContext): Tool {
  return tool({
    description:
      "Search public authoritative technical sources (standards bodies, universities, government, scientific publishers, equipment manufacturers) for external evidence. " +
      "Returns cited results (url, title, publisher, date). Use only when the company knowledge base lacks an adequate source. Never present an external claim without its citation.",
    inputSchema: z.object({
      query: z.string().min(4).max(400).describe("Focused technical research query"),
      maxResults: z.number().int().min(3).max(8).optional()
    }),
    execute: async ({ query, maxResults }) => {
      if (!context.researchEnabled) {
        return failure("external_research", "External research is disabled for this session.", {
          limitations: ["Public research runs only for authenticated (non-demo) sessions."]
        });
      }
      const apiKey = process.env.TAVILY_API_KEY?.trim();
      if (!apiKey) {
        return failure("external_research", "External research is not configured on the server.", {
          limitations: [
            "No search provider is configured (set TAVILY_API_KEY). Answer only from internal knowledge and clearly labelled model fallback; do not invent external citations."
          ]
        });
      }

      let results: TavilyResult[];
      try {
        results = await tavilySearch(apiKey, query, maxResults ?? 4);
      } catch (error) {
        return failure("external_research", "External research request failed.", {
          warnings: [error instanceof Error ? error.message : "SEARCH_FAILED"]
        });
      }

      const accessDate = new Date().toISOString().slice(0, 10);
      const cited = results
        .filter((r) => r.url && r.title)
        .sort((a, b) => authorityRank(a.url!) - authorityRank(b.url!))
        .map((r) => ({
          title: r.title!.slice(0, 240),
          url: r.url!,
          publisher: publisherFromUrl(r.url!),
          publicationDate: r.published_date ?? "unknown",
          accessDate,
          snippet: (r.content ?? "").slice(0, 600),
          independentlyVerified: authorityRank(r.url!) === 0
        }));

      if (cited.length === 0) {
        return success("external_research", "No authoritative external sources found for this query.", {
          data: { sources: [] },
          confidence: "low"
        });
      }
      return success("external_research", `${cited.length} external source(s) retrieved.`, {
        data: { sources: cited },
        warnings: [
          "Cite each source with its url, title, publisher and access date. Label any source with independentlyVerified=false as not independently verified."
        ],
        confidence: cited.some((c) => c.independentlyVerified) ? "medium" : "low"
      });
    }
  });
}
