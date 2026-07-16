import { describe, expect, it } from "vitest";
import { DECISION_SEED, evaluateDecisions, ruleMatches } from "@/server/engine/decisions/engine";

describe("decision engine", () => {
  it("matches liquefaction rule for loose saturated sand in a seismic zone", () => {
    const context = {
      soilClass: "sand",
      sptN: 8,
      groundwaterDepth: 3,
      seismicZone: "ZC"
    };
    const results = evaluateDecisions(DECISION_SEED, context);
    expect(results.map((rule) => rule.key)).toContain("liquefaction-loose-sand");
    const liquefaction = results.find((rule) => rule.key === "liquefaction-loose-sand");
    expect(liquefaction?.methods).toContain("Stone columns / vibro replacement");
  });

  it("does not match liquefaction when the sand is dense", () => {
    const context = { soilClass: "sand", sptN: 30, groundwaterDepth: 3, seismicZone: "ZC" };
    expect(evaluateDecisions(DECISION_SEED, context).map((r) => r.key)).not.toContain(
      "liquefaction-loose-sand"
    );
  });

  it("ranks matches by ascending priority", () => {
    const context = {
      soilClass: "clay",
      cohesion: 20,
      accessRestricted: true
    };
    const results = evaluateDecisions(DECISION_SEED, context);
    const priorities = results.map((rule) => rule.priority);
    expect(priorities).toEqual([...priorities].sort((a, b) => a - b));
  });

  it("evaluates numeric operators only against numbers", () => {
    const rule = DECISION_SEED.find((item) => item.key === "soft-clay-settlement")!;
    expect(ruleMatches(rule, { soilClass: "clay", cohesion: "soft" })).toBe(false);
    expect(ruleMatches(rule, { soilClass: "clay", cohesion: 10 })).toBe(true);
  });
});
