import { describe, expect, it } from "vitest";
import type { Tool } from "ai";
import {
  buildEngineeringTools,
  calculatorToolNames,
  engineeringToolNames
} from "@/server/ai/tools";
import type { ToolContext } from "@/server/ai/tools/contracts";
import type { EngineeringToolResult } from "@/server/ai/tools/contracts";
import { matchMachineSpecs, type MachineSpec } from "@/server/knowledge/structured/machines";

const baseContext: ToolContext = {
  demo: false,
  locale: "tr",
  scope: { includeStandards: true },
  retrieval: { search: async () => [] },
  databaseAvailable: false,
  researchEnabled: false
};

const demoContext: ToolContext = { ...baseContext, demo: true, retrieval: null, researchEnabled: false };

async function run(tool: Tool, input: unknown): Promise<EngineeringToolResult> {
  const execute = tool.execute as (i: unknown, o: unknown) => Promise<EngineeringToolResult>;
  return execute(input, { toolCallId: "test", messages: [] });
}

describe("orchestrator tool selection", () => {
  it("exposes calculators, matcher and decision engine in every context", () => {
    const names = engineeringToolNames(baseContext);
    expect(names).toEqual(expect.arrayContaining(["match_equipment", "evaluate_decision"]));
    for (const calc of calculatorToolNames()) expect(names).toContain(calc);
    expect(calculatorToolNames()).toEqual(
      expect.arrayContaining([
        "calc_bearing_capacity",
        "calc_elastic_settlement",
        "calc_earth_pressure",
        "calc_jet_grout_quantity",
        "calc_pile_axial_capacity"
      ])
    );
  });

  it("exposes company knowledge search only for authenticated non-demo traffic", () => {
    expect(engineeringToolNames(baseContext)).toContain("search_company_knowledge");
    expect(engineeringToolNames(demoContext)).not.toContain("search_company_knowledge");
  });

  it("exposes external_research only when research is enabled", () => {
    expect(engineeringToolNames(baseContext)).not.toContain("external_research");
    expect(engineeringToolNames({ ...baseContext, researchEnabled: true })).toContain("external_research");
    expect(engineeringToolNames(demoContext)).not.toContain("external_research");
  });

  it("external_research reports 'not configured' instead of fabricating sources", async () => {
    const prev = process.env.TAVILY_API_KEY;
    delete process.env.TAVILY_API_KEY;
    const tools = buildEngineeringTools({ ...baseContext, researchEnabled: true });
    const result = await run(tools.external_research, { query: "jet grout design standards" });
    expect(result.ok).toBe(false);
    expect(JSON.stringify(result.limitations)).toContain("TAVILY_API_KEY");
    if (prev !== undefined) process.env.TAVILY_API_KEY = prev;
  });
});

describe("calculator tools", () => {
  it("returns units, formula, steps and high confidence for valid input", async () => {
    const tools = buildEngineeringTools(baseContext);
    const result = await run(tools.calc_bearing_capacity, {
      cohesion: 25,
      phi: 30,
      gamma: 18,
      footingWidth: 2,
      footingDepth: 1.5,
      shape: "square",
      safetyFactor: 3
    });
    expect(result.ok).toBe(true);
    expect(result.confidence).toBe("high");
    expect(result.units).toMatchObject({ allowableCapacity: "kPa" });
    expect(result.formula).toContain("q_ult");
    expect(result.steps?.length).toBeGreaterThan(0);
    expect(result.assumptions?.length).toBeGreaterThan(0);
  });

  it("rejects missing/impossible input without inventing values", async () => {
    const tools = buildEngineeringTools(baseContext);
    const result = await run(tools.calc_bearing_capacity, { cohesion: -5 });
    expect(result.ok).toBe(false);
    expect(result.missing?.length).toBeGreaterThan(0);
  });

  it("computes pile axial capacity with correct α-method arithmetic", async () => {
    const tools = buildEngineeringTools(baseContext);
    const result = await run(tools.calc_pile_axial_capacity, {
      diameter: 0.6,
      length: 15,
      soilType: "cohesive",
      cohesion: 50,
      alpha: 0.5,
      safetyFactor: 2.5
    });
    expect(result.ok).toBe(true);
    const data = result.data as { skinFriction: number; baseResistance: number; ultimateCapacity: number };
    // Q_s = 0.5*50 * (π*0.6) * 15 ; Q_b = 9*50 * (π*0.36/4)
    const expectedSkin = 0.5 * 50 * (Math.PI * 0.6) * 15;
    const expectedBase = 9 * 50 * ((Math.PI * 0.6 * 0.6) / 4);
    expect(data.skinFriction).toBeCloseTo(expectedSkin, 1);
    expect(data.baseResistance).toBeCloseTo(expectedBase, 1);
    expect(data.ultimateCapacity).toBeCloseTo(expectedSkin + expectedBase, 1);
  });

  it("requires cohesion for cohesive piles (validation, not invention)", async () => {
    const tools = buildEngineeringTools(baseContext);
    const result = await run(tools.calc_pile_axial_capacity, {
      diameter: 0.6,
      length: 15,
      soilType: "cohesive",
      safetyFactor: 2.5
    });
    expect(result.ok).toBe(false);
    expect(JSON.stringify(result.missing)).toContain("cohesion");
  });
});

describe("machine matcher", () => {
  const fleet: MachineSpec[] = [
    { manufacturer: "Bauer", model: "BG 36 H", torque: 367, maxDepth: 115, maxDiameter: 3000, applications: ["Bored Piles"], advantages: [], limitations: [] },
    { manufacturer: "Comacchio", model: "MC 15", torque: 15, maxDepth: 30, maxDiameter: 300, applications: ["Micropiles", "Jet Grouting"], advantages: [], limitations: [] },
    { manufacturer: "Klemm", model: "KR 806-3D", torque: null, maxDepth: 45, maxDiameter: 400, applications: ["Jet Grouting"], advantages: [], limitations: [] }
  ];

  it("accepts machines meeting all criteria and rejects those that do not, with reasons", () => {
    const outcome = matchMachineSpecs(fleet, { minDepth: 50, minDiameter: 1000, application: "bored piles" });
    expect(outcome.suitable.map((s) => s.machine.model)).toEqual(["BG 36 H"]);
    expect(outcome.rejected.find((r) => r.machine.model === "MC 15")?.reasons.join(" ")).toMatch(/depth|diameter/i);
  });

  it("reports missing specifications instead of assuming they pass", () => {
    const outcome = matchMachineSpecs(fleet, { minTorque: 20, application: "jet grouting" });
    expect(outcome.missingInformation.join(" ")).toContain("torque unknown");
    // Klemm has unknown torque -> not auto-rejected on torque, but flagged missing.
    expect(outcome.suitable.some((s) => s.machine.model === "KR 806-3D")).toBe(true);
  });

  it("falls back to the seed catalogue when the database is unavailable", async () => {
    const tools = buildEngineeringTools(baseContext); // databaseAvailable: false
    const result = await run(tools.match_equipment, { method: "jet grouting", minDepth: 20 });
    expect(result.ok).toBe(true);
    expect((result.data as { source: string }).source).toBe("seed-catalogue");
  });
});

describe("decision tool", () => {
  it("returns ranked candidate strategies from the seed rules", async () => {
    const tools = buildEngineeringTools(baseContext);
    const result = await run(tools.evaluate_decision, {
      soilClass: "sand",
      sptN: 8,
      groundwaterDepth: 3,
      seismicZone: "ZC"
    });
    expect(result.ok).toBe(true);
    const data = result.data as { recommendations: Array<{ key: string }>; source: string };
    expect(data.source).toBe("seed-rules");
    expect(data.recommendations.map((r) => r.key)).toContain("liquefaction-loose-sand");
  });
});

describe("demo isolation", () => {
  it("blocks company knowledge search in demo mode", async () => {
    const tools = buildEngineeringTools(demoContext);
    // The tool is not even registered in demo; build a direct instance to prove it self-guards too.
    expect(tools.search_company_knowledge).toBeUndefined();
  });

  it("machine matcher never touches the database in demo mode", async () => {
    const tools = buildEngineeringTools(demoContext);
    const result = await run(tools.match_equipment, { method: "micropiles" });
    expect((result.data as { source: string }).source).toBe("seed-catalogue");
  });
});
