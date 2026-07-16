import type { Tool } from "ai";
import { buildCalculatorTools, calculatorToolName } from "@/server/ai/tools/calculators";
import { buildMachineMatcherTool } from "@/server/ai/tools/machine-matcher";
import { buildDecisionTool } from "@/server/ai/tools/decision";
import { buildKnowledgeSearchTool } from "@/server/ai/tools/knowledge";
import { buildResearchTool } from "@/server/ai/tools/research";
import type { ToolContext } from "@/server/ai/tools/contracts";
import { CALCULATORS } from "@/server/engine/calculations/registry";

export type { ToolContext } from "@/server/ai/tools/contracts";

/**
 * Chief Geotechnical Engineer orchestrator.
 *
 * Assembles the callable engineering tool set for a single chat request, scoped
 * by context. The model itself decides which tools to call (AI SDK multi-step
 * loop); this function decides which tools are *available*:
 *
 *   - Calculators, machine matcher and decision engine are always available
 *     (safe: math + public seed data), including in the demo.
 *   - Company knowledge search is available ONLY for authenticated, non-demo
 *     traffic with a configured retrieval engine — production R2/Vectorize data
 *     is never reachable from the public demo.
 */
export function buildEngineeringTools(context: ToolContext): Record<string, Tool> {
  const tools: Record<string, Tool> = {
    ...buildCalculatorTools(),
    match_equipment: buildMachineMatcherTool(context),
    evaluate_decision: buildDecisionTool(context)
  };

  if (!context.demo && context.retrieval) {
    tools.search_company_knowledge = buildKnowledgeSearchTool(context);
  }
  if (context.researchEnabled) {
    tools.external_research = buildResearchTool(context);
  }

  return tools;
}

/** Names of every tool that could be exposed — used for prompts and tests. */
export function engineeringToolNames(context: ToolContext): string[] {
  return Object.keys(buildEngineeringTools(context));
}

/** Names of all calculator tools (for the "must not compute mentally" rule). */
export function calculatorToolNames(): string[] {
  return CALCULATORS.map((calculator) => calculatorToolName(calculator.key));
}

/** Maximum tool/reasoning steps the orchestrator allows per request. */
export const MAX_TOOL_STEPS = 6;
