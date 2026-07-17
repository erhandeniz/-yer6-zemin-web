import { describe, expect, it } from "vitest";
import {
  JET_GROUT_ENGINE_VERSION,
  computeJetGroutEstimate,
  costLabEnabled,
  toPublicEstimate,
  type JetGroutInputs,
  type JetGroutRates,
  type JetGroutPolicy
} from "@/server/costlab/jet-grout";
import type { CommonProjectInputs, UnitRate } from "@/server/costlab/types";

const rate = (item: string, unit: string, value: number): UnitRate => ({
  item,
  unit,
  value,
  source: "admin_price_book"
});

const common: CommonProjectInputs = { currency: "TRY", vatRatePct: 20 };
const inputs: JetGroutInputs = {
  system: "jet2",
  columnDiameterM: 0.6,
  columnCount: 100,
  averageDepthM: 10,
  cementDosageKgPerM: 90,
  productivityMetersPerDay: 100,
  trialColumns: 2,
  coreUcsTests: 6
};
const rates: JetGroutRates = {
  cementPerKg: rate("cement", "kg", 4),
  rigDay: rate("rig", "day", 45000),
  crewDay: rate("crew", "day", 12000),
  fuelPerDay: rate("fuel", "day", 8000),
  consumablesPerMeter: rate("consumables", "m", 60),
  spoilPerM3: rate("spoil", "m3", 350),
  mobilisationLump: rate("mob", "lump", 150000),
  testPerCore: rate("test", "core", 5000)
};
const policy: JetGroutPolicy = { riskAllowancePct: 8, overheadPct: 10, profitPct: 15 };

describe("CostLab jet grout engine", () => {
  it("is deterministic and version-stamped", () => {
    const a = computeJetGroutEstimate(common, inputs, rates, policy);
    const b = computeJetGroutEstimate(common, inputs, rates, policy);
    expect(a).toEqual(b);
    expect(a.engineVersion).toBe(JET_GROUT_ENGINE_VERSION);
  });

  it("computes the documented cost buildup with decimal-safe money", () => {
    const r = computeJetGroutEstimate(common, inputs, rates, policy);
    // 100 columns × 10 m = 1000 m; 10 days at 100 m/day.
    expect(r.durationDays).toBe(10);
    // cement: 1000 m × 90 kg/m × 4 = 360,000
    expect(r.materialCost).toBe(360000);
    // rig+fuel 10d ×(45k+8k)=530k; consumables 1000×60=60k; spoil 45% of 282.74 m3 ≈127.23×350
    expect(r.labourCost).toBe(120000);
    expect(r.mobilisation).toBe(150000);
    expect(r.testingCost).toBe(40000);
    // direct = sum of lines; indirect = 18% of direct; profit = 15% of (direct+indirect)
    expect(r.indirectCost).toBe(Math.round((r.directCost * 0.18) * 100) / 100);
    expect(r.subtotal).toBeCloseTo(r.directCost + r.indirectCost + r.profit, 2);
    // VAT 20% and grand total
    expect(r.vatAmount).toBeCloseTo(r.subtotal * 0.2, 2);
    expect(r.total).toBeCloseTo(r.subtotal + r.vatAmount, 2);
    // unit prices derived from subtotal
    expect(r.unitPricePerMeter).toBeCloseTo(r.subtotal / 1000, 2);
  });

  it("produces low/likely/high range and top cost drivers", () => {
    const r = computeJetGroutEstimate(common, inputs, rates, policy);
    expect(r.range.low).toBeLessThan(r.range.likely);
    expect(r.range.high).toBeGreaterThan(r.range.likely);
    expect(r.topDrivers.length).toBeGreaterThanOrEqual(3);
    expect(r.topDrivers[0].total).toBeGreaterThanOrEqual(r.topDrivers[1].total);
  });

  it("reports missing inputs and lowers confidence instead of inventing data", () => {
    const r = computeJetGroutEstimate(
      common,
      { ...inputs, cementDosageKgPerM: 0, productivityMetersPerDay: 0 },
      rates,
      policy
    );
    expect(r.missingInformation).toEqual(
      expect.arrayContaining(["Çimento dozajı (kg/m)", "Günlük üretim (m/gün)"])
    );
    expect(r.confidenceScore).toBeLessThan(60);
    const full = computeJetGroutEstimate(common, inputs, rates, policy);
    expect(full.confidenceScore).toBeGreaterThan(r.confidenceScore);
  });

  it("public projection never exposes profit, risk or overhead breakdown", () => {
    const r = computeJetGroutEstimate(common, inputs, rates, policy);
    const pub = toPublicEstimate(r) as Record<string, unknown>;
    expect(pub.profit).toBeUndefined();
    expect(pub.riskAllowance).toBeUndefined();
    expect(pub.overhead).toBeUndefined();
    expect(pub.disclaimerTr).toContain("ön maliyet analizidir");
  });

  it("always carries the mandatory preliminary disclaimer", () => {
    const r = computeJetGroutEstimate(common, inputs, rates, policy);
    expect(r.disclaimerTr).toContain("Kesin fiyat");
  });

  it("stays feature-flagged off by default", () => {
    expect(costLabEnabled({} as NodeJS.ProcessEnv)).toBe(false);
    expect(costLabEnabled({ COSTLAB_ENABLED: "true" } as unknown as NodeJS.ProcessEnv)).toBe(true);
  });
});
