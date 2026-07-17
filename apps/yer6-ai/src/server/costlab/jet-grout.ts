/**
 * YER6 CostLab — Jet Grout preliminary cost engine (original, deterministic).
 *
 * Formula version is recorded on every result so estimates are reproducible
 * and auditable. All rounding is decimal-safe half-up to 2 dp. No external
 * company's constants, texts or formulas are used — the cost buildup follows
 * standard first-principles quantity × rate composition with YER6-configurable
 * rates supplied by the ADMIN price book at call time.
 */

import { roundHalfUp } from "@/server/proposals/format/money";
import {
  PRELIMINARY_DISCLAIMER_TR,
  type CommonProjectInputs,
  type CostDriver,
  type CostLine,
  type EstimateResult,
  type UnitRate
} from "./types";

export const JET_GROUT_ENGINE_VERSION = "jetgrout-1.0.0";

export type JetSystem = "jet1" | "jet2" | "jet3";

export interface JetGroutInputs {
  system: JetSystem;
  columnDiameterM: number;
  columnCount: number;
  averageDepthM: number;
  /** kg of cement per metre of column (dosage). */
  cementDosageKgPerM: number;
  productivityMetersPerDay: number;
  trialColumns?: number;
  coreUcsTests?: number;
  spoilDisposalDistanceKm?: number;
  /** 0..1 share of extra time/cost for difficult drilling; default 0. */
  difficultDrillingAllowance?: number;
}

/** Rates the caller must resolve from the ADMIN price book (internal values). */
export interface JetGroutRates {
  cementPerKg: UnitRate;
  rigDay: UnitRate; // drilling rig + high-pressure pump + batching, per day
  crewDay: UnitRate; // full crew per day
  fuelPerDay: UnitRate;
  consumablesPerMeter: UnitRate; // hoses/nozzles/drilling consumables
  spoilPerM3: UnitRate; // handling + disposal per m3
  mobilisationLump: UnitRate;
  testPerCore: UnitRate;
}

export interface JetGroutPolicy {
  riskAllowancePct: number; // e.g. 8
  overheadPct: number; // e.g. 10
  profitPct: number; // e.g. 15 — internal-only, never public
}

const r2 = (n: number) => roundHalfUp(n, 2);

export function computeJetGroutEstimate(
  common: CommonProjectInputs,
  inputs: JetGroutInputs,
  rates: JetGroutRates,
  policy: JetGroutPolicy
): EstimateResult {
  const missing: string[] = [];
  if (!inputs.columnCount || inputs.columnCount <= 0) missing.push("Kolon adedi");
  if (!inputs.averageDepthM || inputs.averageDepthM <= 0) missing.push("Ortalama kolon derinliği");
  if (!inputs.cementDosageKgPerM || inputs.cementDosageKgPerM <= 0) missing.push("Çimento dozajı (kg/m)");
  if (!inputs.productivityMetersPerDay || inputs.productivityMetersPerDay <= 0)
    missing.push("Günlük üretim (m/gün)");

  const totalMeters = r2(Math.max(0, inputs.columnCount) * Math.max(0, inputs.averageDepthM));
  const difficult = Math.min(0.5, Math.max(0, inputs.difficultDrillingAllowance ?? 0));
  const durationDays =
    inputs.productivityMetersPerDay > 0
      ? Math.ceil((totalMeters / inputs.productivityMetersPerDay) * (1 + difficult))
      : 0;

  // Column volume for spoil estimate (typical spoil return fraction by system).
  const spoilReturn: Record<JetSystem, number> = { jet1: 0.3, jet2: 0.45, jet3: 0.6 };
  const columnArea = Math.PI * (inputs.columnDiameterM / 2) ** 2;
  const treatedVolumeM3 = r2(columnArea * totalMeters);
  const spoilM3 = r2(treatedVolumeM3 * spoilReturn[inputs.system]);

  const cementKg = r2(totalMeters * inputs.cementDosageKgPerM);

  const lines: CostLine[] = [];
  const add = (
    key: string,
    label: string,
    quantity: number,
    unit: string,
    rate: UnitRate,
    category: CostLine["category"],
    publicVisible = true
  ) => {
    const total = r2(quantity * rate.value);
    lines.push({ key, label, quantity: r2(quantity), unit, unitRate: rate.value, total, category, publicVisible });
    return total;
  };

  const materialCost = add("cement", "Çimento", cementKg, "kg", rates.cementPerKg, "material");
  const machineryCost = r2(
    add("rig", "Delgi + yüksek basınç pompa + santral", durationDays, "gün", rates.rigDay, "machinery") +
      add("fuel", "Yakıt/enerji", durationDays, "gün", rates.fuelPerDay, "machinery") +
      add("consumables", "Delgi sarfları (hortum/nozul/tij)", totalMeters, "m", rates.consumablesPerMeter, "machinery")
  );
  const labourCost = add("crew", "Ekip (operatör + saha)", durationDays, "gün", rates.crewDay, "labour");
  const spoilCost = add("spoil", "Şlam/atık bertarafı", spoilM3, "m³", rates.spoilPerM3, "machinery");
  const mobilisation = add("mob", "Mobilizasyon + demobilizasyon", 1, "adet", rates.mobilisationLump, "mobilisation");
  const testingCost = add(
    "tests",
    "Deneme kolonu + karot/UCS",
    (inputs.trialColumns ?? 0) + (inputs.coreUcsTests ?? 0),
    "adet",
    rates.testPerCore,
    "testing"
  );

  const directCost = r2(materialCost + machineryCost + labourCost + spoilCost + mobilisation + testingCost);
  const riskAllowance = r2((directCost * Math.max(0, policy.riskAllowancePct)) / 100);
  const overhead = r2((directCost * Math.max(0, policy.overheadPct)) / 100);
  const indirectCost = r2(riskAllowance + overhead);
  const profit = r2(((directCost + indirectCost) * Math.max(0, policy.profitPct)) / 100);
  const subtotal = r2(directCost + indirectCost + profit);
  const vatAmount = r2((subtotal * Math.max(0, common.vatRatePct)) / 100);
  const total = r2(subtotal + vatAmount);

  // Uncertainty band widens with missing data and difficult ground.
  const spreadBase = 0.12 + 0.05 * missing.length + difficult * 0.2;
  const spread = Math.min(0.35, spreadBase);
  const range = {
    low: r2(subtotal * (1 - spread * 0.7)),
    likely: subtotal,
    high: r2(subtotal * (1 + spread))
  };

  const driverPool = [...lines].sort((a, b) => b.total - a.total).slice(0, 5);
  const topDrivers: CostDriver[] = driverPool.map((l) => ({
    key: l.key,
    label: l.label,
    total: l.total,
    sharePct: directCost > 0 ? r2((l.total / directCost) * 100) : 0
  }));

  const confidenceScore = Math.max(
    10,
    Math.min(90, 80 - missing.length * 15 - Math.round(difficult * 40))
  );

  return {
    engineVersion: JET_GROUT_ENGINE_VERSION,
    method: "jet_grout",
    currency: common.currency,
    lines,
    directCost,
    indirectCost,
    mobilisation,
    materialCost,
    machineryCost: r2(machineryCost + spoilCost),
    labourCost,
    testingCost,
    riskAllowance,
    overhead,
    profit,
    subtotal,
    vatAmount,
    total,
    unitPricePerMeter: totalMeters > 0 ? r2(subtotal / totalMeters) : undefined,
    unitPricePerM3: treatedVolumeM3 > 0 ? r2(subtotal / treatedVolumeM3) : undefined,
    durationDays,
    productionPerDay: inputs.productivityMetersPerDay,
    range,
    topDrivers,
    missingInformation: missing,
    confidenceScore,
    disclaimerTr: PRELIMINARY_DISCLAIMER_TR
  };
}

/** Public/customer projection: omits profit / risk / overhead and internal-only lines. */
export type PublicEstimate = Omit<EstimateResult, "profit" | "riskAllowance" | "overhead">;

export function toPublicEstimate(result: EstimateResult): PublicEstimate {
  return {
    engineVersion: result.engineVersion,
    method: result.method,
    currency: result.currency,
    lines: result.lines.filter((l) => l.publicVisible),
    directCost: result.directCost,
    indirectCost: result.indirectCost,
    mobilisation: result.mobilisation,
    materialCost: result.materialCost,
    machineryCost: result.machineryCost,
    labourCost: result.labourCost,
    testingCost: result.testingCost,
    subtotal: result.subtotal,
    vatAmount: result.vatAmount,
    total: result.total,
    unitPricePerMeter: result.unitPricePerMeter,
    unitPricePerM3: result.unitPricePerM3,
    durationDays: result.durationDays,
    productionPerDay: result.productionPerDay,
    range: result.range,
    topDrivers: result.topDrivers,
    missingInformation: result.missingInformation,
    confidenceScore: result.confidenceScore,
    disclaimerTr: result.disclaimerTr
  };
}

/** Feature flag — CostLab stays dark until explicitly enabled in production. */
export function costLabEnabled(env: NodeJS.ProcessEnv = process.env): boolean {
  return env.COSTLAB_ENABLED === "true";
}
