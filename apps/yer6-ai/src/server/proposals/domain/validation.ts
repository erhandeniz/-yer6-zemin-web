/**
 * Pre-PDF commercial validation (section E). Returns SAFE, user-facing errors
 * only — never stack traces, secrets or internal identifiers.
 *
 * An official PDF must NOT be generated while `ok` is false; the proposal stays
 * in `draft` or `validation_failed`.
 */

import type { Currency, ProposalContent } from "./types";
import { computeTotals } from "./totals";
import { roundHalfUp } from "../format/money";

export interface ValidationIssue {
  code: string;
  field?: string;
  message: string;
}

export interface ValidationResult {
  ok: boolean;
  errors: ValidationIssue[];
  warnings: ValidationIssue[];
}

export interface ValidationOptions {
  /** Currencies whose price book is currently valid; others are "expired". */
  approvedCurrencies?: Currency[];
  /** If provided, item unitPrice above this ratio vs. reference is flagged. */
  maxUnitPrice?: number;
}

export function validateProposal(
  content: ProposalContent,
  options: ValidationOptions = {}
): ValidationResult {
  const errors: ValidationIssue[] = [];
  const warnings: ValidationIssue[] = [];
  const err = (code: string, message: string, field?: string) =>
    errors.push({ code, message, field });
  const warn = (code: string, message: string, field?: string) =>
    warnings.push({ code, message, field });

  // Mandatory header fields.
  if (!content.customer?.companyName?.trim()) err("MISSING_CUSTOMER", "Müşteri/firma adı zorunludur.", "customer.companyName");
  if (!content.projectName?.trim()) err("MISSING_PROJECT", "Proje adı zorunludur.", "projectName");
  if (!content.subject?.trim()) err("MISSING_SUBJECT", "Teklif konusu zorunludur.", "subject");
  if (!content.offerDate?.trim()) err("MISSING_DATE", "Teklif tarihi zorunludur.", "offerDate");
  if (!content.offerNumber?.trim()) err("MISSING_OFFER_NUMBER", "Teklif numarası zorunludur.", "offerNumber");
  if (!content.currency) err("MISSING_CURRENCY", "Para birimi zorunludur.", "currency");

  // Rates.
  const disc = content.discountRatePct ?? 0;
  if (disc < 0 || disc > 100) err("BAD_DISCOUNT", "İskonto oranı 0–100 aralığında olmalıdır.", "discountRatePct");
  const vat = content.vatRatePct ?? 0;
  if (content.vatMode !== "zero" && (vat < 0 || vat > 100))
    err("BAD_VAT", "KDV oranı 0–100 aralığında olmalıdır.", "vatRatePct");

  // Items.
  const items = content.items ?? [];
  if (items.length === 0) err("NO_ITEMS", "En az bir kalem gereklidir.", "items");

  const seen = new Set<string>();
  items.forEach((item, i) => {
    const at = `items[${i}]`;
    if (!item.description?.trim()) err("ITEM_NO_DESC", `${i + 1}. kalemin açıklaması boş.`, `${at}.description`);
    if (!item.unit?.trim()) err("ITEM_NO_UNIT", `${i + 1}. kalemin birimi boş.`, `${at}.unit`);
    if (!Number.isFinite(item.quantity)) err("ITEM_BAD_QTY", `${i + 1}. kalem miktarı geçersiz.`, `${at}.quantity`);
    else if (item.quantity < 0) err("ITEM_NEG_QTY", `${i + 1}. kalem miktarı negatif olamaz.`, `${at}.quantity`);
    if (!Number.isFinite(item.unitPrice)) err("ITEM_BAD_PRICE", `${i + 1}. kalem birim fiyatı geçersiz.`, `${at}.unitPrice`);
    else if (item.unitPrice < 0) err("ITEM_NEG_PRICE", `${i + 1}. kalem birim fiyatı negatif olamaz.`, `${at}.unitPrice`);

    // Currency compatibility.
    if (item.currency && content.currency && item.currency !== content.currency)
      err("CURRENCY_MISMATCH", `${i + 1}. kalem para birimi (${item.currency}) teklif para birimiyle (${content.currency}) uyumsuz.`, `${at}.currency`);

    // Expired / unapproved price book.
    const cur = item.currency ?? content.currency;
    if (options.approvedCurrencies && cur && !options.approvedCurrencies.includes(cur))
      err("PRICE_EXPIRED", `${i + 1}. kalem için ${cur} fiyat listesi güncel değil.`, `${at}.currency`);
    if (options.maxUnitPrice != null && item.unitPrice > options.maxUnitPrice)
      warn("PRICE_OVERRIDE", `${i + 1}. kalem birim fiyatı onaylı üst sınırın üzerinde; onay gerekir.`, `${at}.unitPrice`);

    // Duplicate detection.
    const sig = `${(item.description ?? "").trim().toLowerCase()}|${(item.unit ?? "").trim().toLowerCase()}|${item.category ?? ""}`;
    if (seen.has(sig)) warn("DUPLICATE_ITEM", `${i + 1}. kalem tekrar ediyor: "${item.description}".`, at);
    seen.add(sig);
  });

  // Totals sanity.
  if (errors.length === 0) {
    const totals = computeTotals(content, "client");
    if (roundHalfUp(totals.grandTotal, 2) <= 0)
      err("ZERO_TOTAL", "Genel toplam sıfır veya negatif olamaz.", "grandTotal");
    // Re-derive line totals to catch any drift.
    for (const line of totals.lines) {
      const expected = roundHalfUp(line.quantity * line.unitPrice, 2);
      if (Math.abs(expected - line.lineTotal) > 0.005)
        err("LINE_TOTAL_DRIFT", `"${line.description}" için satır toplamı tutarsız.`, "items");
    }
  }

  return { ok: errors.length === 0, errors, warnings };
}
