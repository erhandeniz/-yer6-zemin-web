import { tool, type Tool } from "ai";
import { z } from "zod";
import { DECISION_SEED, evaluateDecisions } from "@/server/engine/decisions/engine";
import { success, type ToolContext } from "@/server/ai/tools/contracts";

const contextSchema = z.object({
  soilClass: z.enum(["clay", "sand", "silt", "gravel", "rock", "fill"]).optional(),
  sptN: z.number().min(0).max(100).optional(),
  cohesion: z.number().min(0).max(1000).optional().describe("Undrained shear strength cu (kPa)"),
  groundwaterDepth: z.number().min(0).max(100).optional(),
  seismicZone: z.string().max(20).optional(),
  structuralLoad: z.number().min(0).optional().describe("Column/footing load (kN)"),
  competentStratumDepth: z.number().min(0).max(120).optional(),
  accessRestricted: z.boolean().optional()
});

/**
 * Engineering decision engine tool. Evaluates the rule base (DB rules, or the
 * built-in seed when the DB is unavailable) against a normalized site context
 * and returns ranked, referenced candidate strategies — never a final design.
 */
export function buildDecisionTool(context: ToolContext): Tool {
  return tool({
    description:
      "Evaluate the engineering decision engine against site parameters (soil class, SPT N, cohesion, groundwater, seismic zone, load). " +
      "Returns ranked preliminary candidate strategies with references. Not a final design.",
    inputSchema: contextSchema,
    execute: async (input) => {
      let recommendations = evaluateDecisions(DECISION_SEED, input);
      let source: "seed-rules" | "database-rules" = "seed-rules";
      if (!context.demo && context.databaseAvailable) {
        try {
          const { evaluateContext } = await import("@/server/engine/decisions/repository");
          recommendations = await evaluateContext(input);
          source = "database-rules";
        } catch {
          source = "seed-rules";
        }
      }
      const providedCount = Object.values(input).filter((value) => value != null).length;
      return success("evaluate_decision", `${recommendations.length} candidate strategy set(s) from ${source}.`, {
        data: { source, recommendations },
        limitations: [
          "Preliminary candidate strategies only; verify with site data and authorized design.",
          providedCount < 2 ? "Few parameters supplied — request more site data before relying on this." : "Based on the supplied parameters only."
        ],
        confidence: providedCount >= 3 ? "medium" : "low"
      });
    }
  });
}
