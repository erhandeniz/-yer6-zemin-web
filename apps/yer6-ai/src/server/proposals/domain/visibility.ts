/**
 * Client vs. internal data separation (section D) and leakage prevention.
 *
 * The client offer PDF must NEVER expose internal economics. These labels are
 * rendered ONLY on the internal cost-analysis PDF, so scanning extracted client
 * text for any of them is a reliable leakage check.
 */

import type { ProposalContent } from "./types";

/** Section headings / labels that only ever appear on the internal PDF. */
export const INTERNAL_ONLY_LABELS: string[] = [
  "İç Maliyet Analizi",
  "İç Maliyet",
  "Maliyet Fiyatı",
  "Tedarikçi Fiyatı",
  "Taşeron Gizli Fiyat",
  "Kâr Marjı",
  "Kar Marji",
  "Hedef Marj",
  "Beklenen Marj",
  "Asgari Satış Fiyatı",
  "Risk Payı",
  "Gizli Beklenmedik Gider",
  "Genel Gider",
  "Fire Oranı",
  "İç İskonto",
  "Personel Notu",
  "İç Onay Notu",
  "Model Çıktısı",
  "AI Muhakeme"
];

export function findInternalLeakage(clientText: string): string[] {
  const hay = clientText.toLocaleLowerCase("tr-TR");
  return INTERNAL_ONLY_LABELS.filter((label) => hay.includes(label.toLocaleLowerCase("tr-TR")));
}

/**
 * Produce a client-safe copy of the proposal content: strips the internal cost
 * breakdown and drops every line marked `audience: "internal"`.
 */
export function toClientContent(content: ProposalContent): ProposalContent {
  return {
    ...content,
    internalCost: undefined,
    items: content.items.filter((i) => i.audience !== "internal")
  };
}

/** True when the content carries any internal-only economics. */
export function hasInternalData(content: ProposalContent): boolean {
  return Boolean(content.internalCost) || content.items.some((i) => i.audience === "internal");
}
