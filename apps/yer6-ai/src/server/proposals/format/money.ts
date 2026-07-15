/**
 * Deterministic money & number formatting for the proposal engine.
 *
 * We do NOT rely on Intl for the final commercial output because grouping and
 * symbol placement must be byte-for-byte predictable across Node and the
 * Cloudflare Workers runtime, and must match YER6's approved formats:
 *
 *   TRY (tr locale) : 1.250.000,00 TL
 *   USD (en locale) : 1,250,000.00 USD
 *   EUR (en locale) : 1,250,000.00 EUR
 */

import type { Currency, Locale } from "../domain/types";

export interface MoneyFormat {
  groupSep: string;
  decimalSep: string;
  suffix: string; // currency label placed after the amount
}

const TR: Omit<MoneyFormat, "suffix"> = { groupSep: ".", decimalSep: "," };
const INTL: Omit<MoneyFormat, "suffix"> = { groupSep: ",", decimalSep: "." };

const CURRENCY_LABEL: Record<Currency, string> = {
  TRY: "TL",
  USD: "USD",
  EUR: "EUR"
};

export function formatSpec(currency: Currency, locale: Locale): MoneyFormat {
  // Turkish locale always uses Turkish grouping. Other locales use the
  // international convention. Currency label is fixed per currency.
  const base = locale === "tr" ? TR : INTL;
  return { ...base, suffix: CURRENCY_LABEL[currency] };
}

/** Half-up rounding to `dp` decimal places, robust against binary fp drift. */
export function roundHalfUp(value: number, dp = 2): number {
  if (!Number.isFinite(value)) return 0;
  const factor = 10 ** dp;
  const scaled = value * factor;
  const sign = scaled < 0 ? -1 : 1;
  // Nudge by a tiny relative epsilon so exact .5 boundaries round away from 0.
  const eps = Math.abs(scaled) * 1e-9 + 1e-6;
  const rounded = Math.floor(Math.abs(scaled) + 0.5 + eps) * sign;
  const result = rounded / factor;
  return Object.is(result, -0) ? 0 : result;
}

function groupInteger(intDigits: string, sep: string): string {
  let out = "";
  for (let i = 0; i < intDigits.length; i++) {
    if (i > 0 && (intDigits.length - i) % 3 === 0) out += sep;
    out += intDigits[i];
  }
  return out;
}

/** Format a raw number with grouping and fixed decimals (no currency label). */
export function formatNumber(
  value: number,
  opts: { locale?: Locale; decimals?: number } = {}
): string {
  const locale = opts.locale ?? "tr";
  const decimals = opts.decimals ?? 2;
  const spec = locale === "tr" ? TR : INTL;
  const rounded = roundHalfUp(value, decimals);
  const negative = rounded < 0;
  const fixed = Math.abs(rounded).toFixed(decimals);
  const [intPart, fracPart = ""] = fixed.split(".");
  const grouped = groupInteger(intPart, spec.groupSep);
  const body = decimals > 0 ? `${grouped}${spec.decimalSep}${fracPart}` : grouped;
  return negative ? `-${body}` : body;
}

/** Format a monetary amount with grouping, decimals and currency label. */
export function formatMoney(
  value: number,
  currency: Currency,
  locale: Locale = "tr",
  decimals = 2
): string {
  const spec = formatSpec(currency, locale);
  return `${formatNumber(value, { locale, decimals })} ${spec.suffix}`;
}
