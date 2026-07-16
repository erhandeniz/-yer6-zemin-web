import { describe, expect, it } from "vitest";
import { calculatorCatalog, getCalculator, runCalculation } from "@/server/engine/calculations/registry";

describe("calculation engine registry", () => {
  it("exposes a catalogue of calculators", () => {
    const keys = calculatorCatalog().map((item) => item.key);
    expect(keys).toEqual(
      expect.arrayContaining(["bearing-capacity", "elastic-settlement", "earth-pressure", "jet-grout-quantity"])
    );
    expect(getCalculator("bearing-capacity")).not.toBeNull();
  });

  it("rejects unknown calculators", () => {
    const outcome = runCalculation("does-not-exist", {});
    expect(outcome).toMatchObject({ ok: false, error: "UNKNOWN_CALCULATOR" });
  });

  it("validates input and reports issues", () => {
    const outcome = runCalculation("bearing-capacity", { cohesion: -5 });
    expect(outcome.ok).toBe(false);
    if (!outcome.ok) expect(outcome.error).toBe("INVALID_INPUT");
  });

  it("runs a valid bearing capacity calculation", () => {
    const outcome = runCalculation("bearing-capacity", {
      cohesion: 25,
      phi: 30,
      gamma: 18,
      footingWidth: 2,
      footingDepth: 1.5,
      shape: "square",
      safetyFactor: 3
    });
    expect(outcome.ok).toBe(true);
    if (outcome.ok) {
      const result = outcome.result as { allowableCapacity: number };
      expect(result.allowableCapacity).toBeGreaterThan(0);
      expect(outcome.references.length).toBeGreaterThan(0);
    }
  });
});
