import { tool, type Tool } from "ai";
import { CALCULATORS, runCalculation } from "@/server/engine/calculations/registry";
import { failure, success } from "@/server/ai/tools/contracts";

/** Registry key → callable tool name (identifier-safe). */
export function calculatorToolName(key: string) {
  return `calc_${key.replace(/-/g, "_")}`;
}

/**
 * Builds one strongly-typed tool per registered calculator. Each tool validates
 * inputs with the calculator's own Zod schema, rejects missing/impossible
 * values, and returns the formula, steps, units, assumptions and limitations.
 * The model is expected to call these instead of doing arithmetic mentally.
 */
export function buildCalculatorTools(): Record<string, Tool> {
  const tools: Record<string, Tool> = {};
  for (const calculator of CALCULATORS) {
    const name = calculatorToolName(calculator.key);
    tools[name] = tool({
      description:
        `${calculator.title}. ${calculator.description} ` +
        `Use this tool for exact values; never compute this result mentally. ` +
        `References: ${calculator.references.join("; ")}.`,
      inputSchema: calculator.input,
      execute: async (input) => {
        const outcome = runCalculation(calculator.key, input);
        if (!outcome.ok) {
          if (outcome.error === "INVALID_INPUT") {
            return failure(name, "Input validation failed — provide the missing or corrected values.", {
              missing: outcome.issues?.map((issue) => `${issue.path}: ${issue.message}`) ?? []
            });
          }
          return failure(name, "Unknown calculator.");
        }
        return success(name, `${outcome.title} computed.`, {
          data: outcome.result,
          formula: (outcome.result as { formula?: string | string[] }).formula,
          steps: (outcome.result as { steps?: string[] }).steps,
          units: outcome.units,
          assumptions: outcome.assumptions,
          limitations: outcome.limitations,
          references: outcome.references,
          // Arithmetic is exact; engineering confidence is bounded by input quality.
          confidence: "high"
        });
      }
    });
  }
  return tools;
}
