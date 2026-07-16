/**
 * Module 10 — Engineering Decision Engine (evaluation core).
 *
 * A declarative, side-effect-free rule evaluator. Rules are plain JSON (stored
 * in the DecisionRule table or supplied as seed) so domain experts can extend
 * the knowledge base without code changes. Conditions are evaluated with a small,
 * safe DSL — no `eval`, no dynamic code — against a normalized site/design
 * context assembled from the soil, standards and machine modules.
 *
 * The engine never issues a final design; it surfaces ranked, referenced
 * candidate strategies for an engineer to verify.
 */

export type DecisionValue = string | number | boolean | null;
export type DecisionContext = Record<string, DecisionValue>;

export type ConditionOperator =
  | "eq"
  | "neq"
  | "lt"
  | "lte"
  | "gt"
  | "gte"
  | "in"
  | "contains"
  | "exists";

export type DecisionCondition = {
  field: string;
  op: ConditionOperator;
  value?: DecisionValue | DecisionValue[];
};

export type DecisionOutcome = {
  recommendation: string;
  rationale?: string;
  methods?: string[];
  cautions?: string[];
  confidence?: "low" | "medium" | "high";
};

export type DecisionRuleDefinition = {
  key: string;
  title: string;
  category: string;
  priority: number;
  conditions: DecisionCondition[];
  outcome: DecisionOutcome;
  references: string[];
};

export type DecisionMatch = DecisionOutcome & {
  key: string;
  title: string;
  category: string;
  priority: number;
  references: string[];
};

function toNumber(value: DecisionValue): number | null {
  return typeof value === "number" ? value : null;
}

function evaluateCondition(condition: DecisionCondition, context: DecisionContext): boolean {
  const actual = context[condition.field] ?? null;
  const expected = condition.value ?? null;

  switch (condition.op) {
    case "exists":
      return actual !== null && actual !== undefined;
    case "eq":
      return actual === expected;
    case "neq":
      return actual !== expected;
    case "in":
      return Array.isArray(expected) && expected.includes(actual);
    case "contains": {
      if (typeof actual !== "string") return false;
      return typeof expected === "string" && actual.toLowerCase().includes(expected.toLowerCase());
    }
    case "lt":
    case "lte":
    case "gt":
    case "gte": {
      const left = toNumber(actual);
      const right = toNumber(Array.isArray(expected) ? null : expected);
      if (left === null || right === null) return false;
      if (condition.op === "lt") return left < right;
      if (condition.op === "lte") return left <= right;
      if (condition.op === "gt") return left > right;
      return left >= right;
    }
    default:
      return false;
  }
}

/** A rule matches only when every one of its conditions holds (logical AND). */
export function ruleMatches(rule: DecisionRuleDefinition, context: DecisionContext): boolean {
  return rule.conditions.every((condition) => evaluateCondition(condition, context));
}

export function evaluateDecisions(
  rules: DecisionRuleDefinition[],
  context: DecisionContext
): DecisionMatch[] {
  return rules
    .filter((rule) => ruleMatches(rule, context))
    .sort((a, b) => a.priority - b.priority)
    .map((rule) => ({
      key: rule.key,
      title: rule.title,
      category: rule.category,
      priority: rule.priority,
      references: rule.references,
      ...rule.outcome
    }));
}

/**
 * Data-driven default rules. These are conservative, preliminary candidate
 * strategies — the engine surfaces them, an engineer verifies them. Loaded into
 * the DecisionRule table on seed, but also usable directly as a fallback when no
 * database rows exist.
 */
export const DECISION_SEED: DecisionRuleDefinition[] = [
  {
    key: "liquefaction-loose-sand",
    title: "Liquefaction risk in loose saturated sand",
    category: "seismic",
    priority: 10,
    conditions: [
      { field: "soilClass", op: "in", value: ["sand", "silt"] },
      { field: "sptN", op: "lt", value: 15 },
      { field: "groundwaterDepth", op: "lte", value: 6 },
      { field: "seismicZone", op: "exists" }
    ],
    outcome: {
      recommendation:
        "Assess liquefaction per TBDY 2018 §16 / Eurocode 8; consider densification-based ground improvement.",
      methods: ["Stone columns / vibro replacement", "Deep dynamic compaction", "Jet grout containment cells"],
      cautions: [
        "Liquefaction triggering must be verified with CPT/SPT-based analysis before selecting a method."
      ],
      confidence: "medium"
    },
    references: ["TBDY 2018 §16", "Eurocode 8 (EN 1998-5)", "FHWA GEC-13"]
  },
  {
    key: "soft-clay-settlement",
    title: "Compressible soft clay under structural load",
    category: "ground-improvement",
    priority: 20,
    conditions: [
      { field: "soilClass", op: "eq", value: "clay" },
      { field: "cohesion", op: "lt", value: 40 }
    ],
    outcome: {
      recommendation:
        "Control consolidation settlement; evaluate DSM or preloading with vertical drains as conditional candidates.",
      methods: ["Deep soil mixing (DSM)", "Preloading + prefabricated vertical drains", "Rigid inclusions"],
      cautions: [
        "Soft clay is low-permeability; DSM does not increase permeability.",
        "Requires laboratory mix design and field trials before production."
      ],
      confidence: "medium"
    },
    references: ["Eurocode 7 (EN 1997-1)", "FHWA Ground Modification Reference Manual"]
  },
  {
    key: "restricted-access-localized",
    title: "Restricted access / localized treatment near structures",
    category: "execution",
    priority: 30,
    conditions: [
      { field: "accessRestricted", op: "eq", value: true }
    ],
    outcome: {
      recommendation:
        "Prefer compact, low-headroom equipment and localized treatment methods.",
      methods: ["Jet grouting (compact rigs)", "Micropiles", "Compensation grouting"],
      cautions: ["Confirm rig headroom and vibration limits against adjacent-structure constraints."],
      confidence: "medium"
    },
    references: ["EN 12716", "EN 14199 (micropiles)"]
  },
  {
    key: "high-bearing-deep-load-transfer",
    title: "High loads requiring transfer to competent stratum",
    category: "foundation",
    priority: 40,
    conditions: [
      { field: "structuralLoad", op: "gte", value: 1500 },
      { field: "competentStratumDepth", op: "gte", value: 8 }
    ],
    outcome: {
      recommendation: "Evaluate deep foundations transferring load to the competent stratum.",
      methods: ["Bored piles (Kelly/CFA)", "Displacement piles", "Pile-raft systems"],
      cautions: ["Axial/lateral capacity and settlement checks required per code."],
      confidence: "medium"
    },
    references: ["Eurocode 7 (EN 1997-1) §7", "BS 8004"]
  }
];
