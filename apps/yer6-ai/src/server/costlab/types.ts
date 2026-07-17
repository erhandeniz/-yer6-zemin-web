/**
 * YER6 CostLab — shared types (Package B foundation).
 *
 * Deterministic, versioned preliminary-cost framework. The AI may collect
 * inputs conversationally and explain results, but NEVER performs the core
 * arithmetic — all money math lives in typed, tested engine functions using
 * decimal-safe rounding (see proposals/format/money.roundHalfUp).
 */

import type { Currency } from "@/server/proposals/domain/types";

/** Provenance of every input value — surfaced with each result. */
export type InputSource = "user" | "document" | "admin_price_book" | "calculated";

export interface ProvenancedValue<T> {
  value: T;
  source: InputSource;
  /** ISO date the value was captured/derived. */
  date?: string;
  confidence: "low" | "medium" | "high";
  confirmed: boolean;
}

export interface CommonProjectInputs {
  country?: string;
  city?: string;
  currency: Currency;
  vatRatePct: number;
  mobilisationDistanceKm?: number;
  workingHoursPerDay?: number;
  shifts?: number;
  electricityAvailable?: boolean;
  waterAvailable?: boolean;
  groundwaterDepthM?: number;
  notes?: string;
}

/** One resolved unit rate from the ADMIN price book (values internal-only). */
export interface UnitRate {
  item: string;
  unit: string;
  value: number; // in project currency
  source: InputSource;
  validFrom?: string;
}

export interface CostLine {
  key: string;
  label: string;
  quantity: number;
  unit: string;
  unitRate: number;
  total: number;
  category: "material" | "machinery" | "labour" | "mobilisation" | "testing" | "indirect";
  /** Whether the line may be shown to public/customer output. */
  publicVisible: boolean;
}

export interface EstimateRange {
  low: number;
  likely: number;
  high: number;
}

export interface CostDriver {
  key: string;
  label: string;
  total: number;
  sharePct: number;
}

export interface EstimateResult {
  engineVersion: string;
  method: "jet_grout" | "dsm" | "fore_kazik";
  currency: Currency;
  lines: CostLine[];
  directCost: number;
  indirectCost: number;
  mobilisation: number;
  materialCost: number;
  machineryCost: number;
  labourCost: number;
  testingCost: number;
  riskAllowance: number;
  overhead: number;
  profit: number;
  subtotal: number;
  vatAmount: number;
  total: number;
  unitPricePerMeter?: number;
  unitPricePerM3?: number;
  durationDays?: number;
  productionPerDay?: number;
  range: EstimateRange;
  topDrivers: CostDriver[];
  missingInformation: string[];
  confidenceScore: number; // 0..100
  disclaimerTr: string;
}

export const PRELIMINARY_DISCLAIMER_TR =
  "Bu çalışma ön maliyet analizidir. Kesin fiyat; proje, zemin etüdü, teknik şartname ve saha koşulları doğrulandıktan sonra hazırlanır.";
