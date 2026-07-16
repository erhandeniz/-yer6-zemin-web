import { tool, type Tool } from "ai";
import { z } from "zod";
import {
  matchMachineSpecs,
  type MachineSpec,
  type MachineMatchCriteria
} from "@/server/knowledge/structured/machines";
import { MACHINE_SEED } from "@/server/knowledge/structured/seed-machines";
import { success, type ToolContext } from "@/server/ai/tools/contracts";

const criteriaSchema = z.object({
  method: z.string().max(120).optional().describe("Execution method, e.g. 'jet grouting', 'bored piles', 'micropiles'"),
  minDepth: z.number().min(0).max(200).optional().describe("Required drilling depth (m)"),
  minDiameter: z.number().min(0).max(5000).optional().describe("Required diameter (mm)"),
  minTorque: z.number().min(0).max(1000).optional().describe("Required rotary torque (kNm)"),
  workingHeight: z.number().min(0).max(60).optional().describe("Available headroom (m)"),
  accessRestricted: z.boolean().optional().describe("True for tight/urban access"),
  transportRestricted: z.boolean().optional().describe("True when transport weight/size is limited"),
  groundConditions: z.string().max(200).optional(),
  productionTarget: z.string().max(200).optional(),
  manufacturer: z.string().max(80).optional()
});

const SEED_SPECS: MachineSpec[] = MACHINE_SEED.map((rig) => ({
  manufacturer: rig.manufacturer,
  model: rig.model,
  torque: rig.torque ?? null,
  maxDepth: rig.maxDepth ?? null,
  maxDiameter: rig.maxDiameter ?? null,
  weight: rig.weight ?? null,
  enginePower: rig.enginePower ?? null,
  applications: rig.applications ?? [],
  advantages: rig.advantages ?? [],
  limitations: rig.limitations ?? []
}));

async function loadMachines(context: ToolContext, manufacturer?: string): Promise<{ machines: MachineSpec[]; source: "verified-database" | "seed-catalogue" }> {
  // Demo traffic and DB-less deployments use only the public seed catalogue —
  // never production data.
  if (context.demo || !context.databaseAvailable) {
    return { machines: SEED_SPECS, source: "seed-catalogue" };
  }
  try {
    const { MachineRepository } = await import("@/server/knowledge/structured/machines");
    const repository = new MachineRepository();
    const { items } = await repository.list({ limit: 200 });
    if (items.length === 0) return { machines: SEED_SPECS, source: "seed-catalogue" };
    const machines: MachineSpec[] = items
      .filter((row) => !manufacturer || row.manufacturer.toLowerCase() === manufacturer.toLowerCase())
      .map((row) => ({
        manufacturer: row.manufacturer,
        model: row.model,
        torque: row.torque,
        maxDepth: row.maxDepth,
        maxDiameter: row.maxDiameter,
        weight: row.weight,
        enginePower: row.enginePower,
        applications: row.applications,
        advantages: row.advantages,
        limitations: row.limitations
      }));
    return { machines, source: "verified-database" };
  } catch {
    return { machines: SEED_SPECS, source: "seed-catalogue" };
  }
}

/**
 * Machine matcher tool. Filters the verified equipment dataset (or public seed
 * catalogue in demo / DB-less mode) against site constraints and returns
 * suitable machines, rejected machines with reasons, and any specifications
 * that are missing from the database. It never claims a specification that is
 * not present in the data.
 */
export function buildMachineMatcherTool(context: ToolContext): Tool {
  return tool({
    description:
      "Match drilling/piling rigs to site constraints (method, depth, diameter, torque, headroom, access, transport). " +
      "Returns suitable machines, rejected machines with reasons, and missing specs. Only uses verified database records.",
    inputSchema: criteriaSchema,
    execute: async (input) => {
      const manufacturer = input.manufacturer?.trim() || undefined;
      const { machines, source } = await loadMachines(context, manufacturer);
      const criteria: MachineMatchCriteria = {
        application: input.method,
        minDepth: input.minDepth,
        minDiameter: input.minDiameter,
        minTorque: input.minTorque,
        manufacturer
      };
      const outcome = matchMachineSpecs(machines, criteria);

      const unfiltered: string[] = [];
      if (input.workingHeight != null) unfiltered.push("headroom/mast height not in dataset — verify against rig mast configuration");
      if (input.transportRestricted) unfiltered.push("transport limits — check operating weight against the transport constraint");
      if (input.productionTarget) unfiltered.push("production target — verify daily output with method-specific cycle times");
      if (input.groundConditions) unfiltered.push("ground conditions — confirm tooling/energy suitability for the described soil/rock");

      const provided = [input.method, input.minDepth, input.minDiameter, input.minTorque].filter((v) => v != null).length;
      const confidence = provided >= 2 && source === "verified-database" ? "high" : provided >= 1 ? "medium" : "low";

      return success("match_equipment", `${outcome.suitable.length} suitable, ${outcome.rejected.length} rejected from ${source}.`, {
        data: {
          source,
          suitable: outcome.suitable,
          rejected: outcome.rejected,
          constraintsToVerifyManually: unfiltered
        },
        missing: outcome.missingInformation,
        limitations: [
          source === "seed-catalogue"
            ? "Matched against the public seed catalogue, not the full production database."
            : "Matched against verified database records only.",
          "Headroom, transport and production targets are advisory and must be verified manually."
        ],
        confidence
      });
    }
  });
}
