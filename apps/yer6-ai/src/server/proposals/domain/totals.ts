/**
 * Commercial calculation engine (section E). Pure and deterministic.
 *
 * Rules:
 *   - line total   = round2(quantity × unitPrice)
 *   - subtotal     = Σ mandatory, non-optional lines for the audience
 *   - optionalTotal= Σ optional lines (shown separately, not in grand total)
 *   - discount     = round2(subtotal × discountRate%)
 *   - netSubtotal  = subtotal − discount
 *   - VAT:
 *       excluded → vatAmount = round2(netSubtotal × rate%), grand = net + vat
 *       zero     → vatAmount = 0,                           grand = net
 *       included → grand = net, vatAmount = net − net/(1+rate)
 *   - "internal" audience includes internal-only lines; "client" never does.
 */

import type { Audience, ComputedLine, ComputedTotals, ProposalContent } from "./types";
import { roundHalfUp } from "../format/money";
import { writtenTotal } from "../format/number-to-words";

export function computeTotals(content: ProposalContent, audience: Audience): ComputedTotals {
  const currency = content.currency;
  const lines: ComputedLine[] = [];

  content.items.forEach((item, idx) => {
    const lineAudience: Audience = item.audience === "internal" ? "internal" : "client";
    if (audience === "client" && lineAudience === "internal") return; // hard exclusion
    const quantity = numeric(item.quantity);
    const unitPrice = numeric(item.unitPrice);
    const lineTotal = roundHalfUp(quantity * unitPrice, 2);
    lines.push({
      key: item.key ?? `L${idx + 1}`,
      description: item.description,
      quantity,
      unit: item.unit,
      unitPrice,
      lineTotal,
      optional: Boolean(item.optional),
      vatApplicable: item.vatApplicable !== false,
      audience: lineAudience,
      quantityOrigin: item.quantityOrigin,
      category: item.category,
      source: item.source
    });
  });

  const subtotal = roundHalfUp(
    lines.filter((l) => !l.optional).reduce((s, l) => s + l.lineTotal, 0),
    2
  );
  const optionalTotal = roundHalfUp(
    lines.filter((l) => l.optional).reduce((s, l) => s + l.lineTotal, 0),
    2
  );

  const discountRatePct = clampPct(content.discountRatePct ?? 0);
  const discountAmount = roundHalfUp((subtotal * discountRatePct) / 100, 2);
  const netSubtotal = roundHalfUp(subtotal - discountAmount, 2);

  const vatRatePct = content.vatMode === "zero" ? 0 : clampPct(content.vatRatePct ?? 0);
  let vatBase = netSubtotal;
  let vatAmount = 0;
  let grandTotal = netSubtotal;

  if (content.vatMode === "excluded") {
    vatAmount = roundHalfUp((netSubtotal * vatRatePct) / 100, 2);
    grandTotal = roundHalfUp(netSubtotal + vatAmount, 2);
    vatBase = netSubtotal;
  } else if (content.vatMode === "included") {
    grandTotal = netSubtotal;
    vatBase = roundHalfUp(netSubtotal / (1 + vatRatePct / 100), 2);
    vatAmount = roundHalfUp(grandTotal - vatBase, 2);
  } else {
    // zero
    vatAmount = 0;
    grandTotal = netSubtotal;
    vatBase = netSubtotal;
  }

  return {
    currency,
    lines,
    subtotal,
    optionalTotal,
    discountRatePct,
    discountAmount,
    netSubtotal,
    vatMode: content.vatMode,
    vatRatePct,
    vatBase,
    vatAmount,
    grandTotal,
    writtenTotal: writtenTotal(grandTotal, currency, content.locale)
  };
}

function numeric(n: unknown): number {
  const v = typeof n === "number" ? n : Number(n);
  return Number.isFinite(v) ? v : 0;
}

function clampPct(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.min(100, Math.max(0, n));
}
