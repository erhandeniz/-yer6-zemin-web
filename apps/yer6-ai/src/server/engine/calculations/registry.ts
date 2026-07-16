/**
 * Module 9 — Calculation Engine registry.
 *
 * Wraps the deterministic geotechnical calculators in a data-driven registry so
 * new calculators can be added (or swapped) without touching the call sites.
 * Each entry declares a Zod input schema, a standards reference and a runner.
 * The AI layer and API routes both resolve calculators through this registry.
 */

import { z } from "zod";
import {
  calculateBearingCapacity,
  calculateElasticSettlement,
  calculateEarthPressure,
  calculateJetGroutQuantity,
  calculatePileAxialCapacity
} from "@/server/ai/calculators/geotech";

export type CalculatorDefinition<Input extends z.ZodTypeAny = z.ZodTypeAny> = {
  key: string;
  title: string;
  category: "foundation" | "settlement" | "earth-pressure" | "ground-improvement" | "deep-foundation";
  description: string;
  references: string[];
  /** Output unit map — every returned quantity is labelled, never unitless. */
  units: Record<string, string>;
  /** Engineering assumptions baked into the method. */
  assumptions: string[];
  /** Known limitations the caller must respect. */
  limitations: string[];
  input: Input;
  run: (input: z.infer<Input>) => unknown;
};

function define<Input extends z.ZodTypeAny>(definition: CalculatorDefinition<Input>) {
  return definition as CalculatorDefinition;
}

export const CALCULATORS: CalculatorDefinition[] = [
  define({
    key: "bearing-capacity",
    title: "Ultimate & Allowable Bearing Capacity (Terzaghi/Vesic)",
    category: "foundation",
    description: "Bearing capacity of shallow foundations for strip, square or circular footings.",
    references: ["Terzaghi (1943)", "Vesic (1973)", "Eurocode 7 (EN 1997-1) §6"],
    units: { ultimateCapacity: "kPa", allowableCapacity: "kPa" },
    assumptions: [
      "Homogeneous soil, general shear failure, vertical concentric load.",
      "Water table effects and load inclination not included."
    ],
    limitations: [
      "Preliminary sizing only; not a substitute for a full geotechnical design.",
      "Requires site-verified c, φ and γ — do not use assumed values as final."
    ],
    input: z.object({
      cohesion: z.number().min(0),
      phi: z.number().min(0).max(50),
      gamma: z.number().positive(),
      footingWidth: z.number().positive(),
      footingDepth: z.number().min(0),
      shape: z.enum(["strip", "square", "circle"]),
      safetyFactor: z.number().min(1).max(10)
    }),
    run: (input) => calculateBearingCapacity(input)
  }),
  define({
    key: "elastic-settlement",
    title: "Elastic Settlement of Shallow Foundation",
    category: "settlement",
    description: "Immediate elastic settlement from load intensity and soil elastic modulus.",
    references: ["Boussinesq elastic theory", "Eurocode 7 (EN 1997-1) §6.6"],
    units: { settlementMeters: "m", settlementMm: "mm" },
    assumptions: [
      "Elastic half-space; immediate (undrained) settlement only.",
      "Consolidation and creep settlement not included."
    ],
    limitations: [
      "Total settlement in cohesive soils also needs consolidation analysis.",
      "Influence factor and Es must reflect actual soil stiffness."
    ],
    input: z.object({
      loadIntensity: z.number().positive(),
      footingWidth: z.number().positive(),
      poissonRatio: z.number().min(0).max(0.5),
      elasticModulus: z.number().positive(),
      influenceFactor: z.number().positive()
    }),
    run: (input) => calculateElasticSettlement(input)
  }),
  define({
    key: "earth-pressure",
    title: "Active & Passive Earth Pressure (Rankine)",
    category: "earth-pressure",
    description: "Rankine active/passive coefficients and total thrust for a retaining height.",
    references: ["Rankine (1857)", "Eurocode 7 (EN 1997-1) §9"],
    units: { Ka: "-", Kp: "-", pa: "kPa", pp: "kPa", Pa: "kN/m", Pp: "kN/m" },
    assumptions: [
      "Vertical smooth wall, horizontal cohesionless-to-c-φ backfill, no surcharge.",
      "Rankine theory ignores wall friction (conservative for active thrust)."
    ],
    limitations: [
      "Sloping backfill, surcharge and wall friction require Coulomb/other methods.",
      "Seismic increments (Mononobe-Okabe) not included."
    ],
    input: z.object({
      phi: z.number().min(0).max(50),
      gamma: z.number().positive(),
      height: z.number().positive(),
      cohesion: z.number().min(0).optional()
    }),
    run: (input) => calculateEarthPressure(input)
  }),
  define({
    key: "jet-grout-quantity",
    title: "Jet Grout Column Quantity & Cement Demand",
    category: "ground-improvement",
    description: "Volume of soil-cement, cement mass and bag count for a jet grout column layout.",
    references: ["EN 12716 (Jet grouting execution)"],
    units: {
      singleVolume: "m³",
      totalVolume: "m³",
      totalCementKg: "kg",
      cementBags: "bags (50 kg)"
    },
    assumptions: [
      "Nominal cylindrical column geometry; length is per-column, not cumulative.",
      "Cement ratio is per m³ of treated soil-cement volume."
    ],
    limitations: [
      "Real column diameter varies with soil and jetting parameters; confirm with trial columns.",
      "Spoil return and waste are not included in cement demand."
    ],
    input: z.object({
      diameter: z.number().positive(),
      length: z.number().positive(),
      count: z.number().int().positive(),
      cementRatio: z.number().positive(),
      overlapPercent: z.number().min(0).max(90)
    }),
    run: (input) => calculateJetGroutQuantity(input)
  }),
  define({
    key: "pile-axial-capacity",
    title: "Pile / Micropile Axial Capacity (α / β method)",
    category: "deep-foundation",
    description:
      "Preliminary single-pile axial capacity for cohesive (α-method) or granular (β-method) soil.",
    references: ["Eurocode 7 (EN 1997-1) §7", "EN 14199 (micropiles)", "FHWA drilled shafts (GEC-10)"],
    units: {
      skinFriction: "kN",
      baseResistance: "kN",
      ultimateCapacity: "kN",
      allowableCapacity: "kN"
    },
    assumptions: [
      "Single homogeneous soil layer along the shaft.",
      "Cohesive: Nc = 9 base, adhesion factor α (default 0.5). Granular: β from φ, Nq base.",
      "No negative skin friction; no pile-group interaction."
    ],
    limitations: [
      "Layered profiles, downdrag and group effects must be checked in design.",
      "Requires a static/dynamic load test for verification before construction."
    ],
    input: z
      .object({
        diameter: z.number().positive().max(5),
        length: z.number().positive().max(120),
        soilType: z.enum(["cohesive", "granular"]),
        safetyFactor: z.number().min(1.5).max(5),
        cohesion: z.number().min(0).optional(),
        alpha: z.number().min(0).max(1).optional(),
        gamma: z.number().positive().optional(),
        phi: z.number().min(0).max(50).optional(),
        beta: z.number().min(0).max(2).optional(),
        waterTableDepth: z.number().min(0).optional()
      })
      .superRefine((value, ctx) => {
        if (value.soilType === "cohesive" && value.cohesion == null) {
          ctx.addIssue({ code: "custom", path: ["cohesion"], message: "COHESION_REQUIRED" });
        }
        if (value.soilType === "granular" && (value.gamma == null || value.phi == null)) {
          ctx.addIssue({ code: "custom", path: ["phi"], message: "GAMMA_AND_PHI_REQUIRED" });
        }
      }),
    run: (input) => calculatePileAxialCapacity(input)
  })
];

const CALCULATOR_MAP = new Map(CALCULATORS.map((calculator) => [calculator.key, calculator]));

export function getCalculator(key: string): CalculatorDefinition | null {
  return CALCULATOR_MAP.get(key) ?? null;
}

export type CalculationRun =
  | {
      ok: true;
      key: string;
      title: string;
      references: string[];
      units: Record<string, string>;
      assumptions: string[];
      limitations: string[];
      result: unknown;
    }
  | {
      ok: false;
      key: string;
      error: "UNKNOWN_CALCULATOR" | "INVALID_INPUT";
      issues?: { path: string; message: string }[];
    };

export function runCalculation(key: string, rawInput: unknown): CalculationRun {
  const calculator = getCalculator(key);
  if (!calculator) return { ok: false, key, error: "UNKNOWN_CALCULATOR" };
  const parsed = calculator.input.safeParse(rawInput);
  if (!parsed.success) {
    return {
      ok: false,
      key,
      error: "INVALID_INPUT",
      issues: parsed.error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message
      }))
    };
  }
  return {
    ok: true,
    key,
    title: calculator.title,
    references: calculator.references,
    units: calculator.units,
    assumptions: calculator.assumptions,
    limitations: calculator.limitations,
    result: calculator.run(parsed.data)
  };
}

export function calculatorCatalog() {
  return CALCULATORS.map((calculator) => ({
    key: calculator.key,
    title: calculator.title,
    category: calculator.category,
    description: calculator.description,
    references: calculator.references,
    units: calculator.units,
    assumptions: calculator.assumptions,
    limitations: calculator.limitations
  }));
}
