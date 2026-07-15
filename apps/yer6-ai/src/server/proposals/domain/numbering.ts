/**
 * Immutable, traceable offer numbering (section C).
 *
 * Format: YER6-YYYY-0001  with revision label  YER6-YYYY-0001-R0
 *
 * Number *allocation* is transactional and lives in the workflow service
 * (Postgres, unique constraint + sequence table). This module only owns the
 * pure format / parse logic so it is fully unit-testable.
 */

export const OFFER_PREFIX = "YER6";

export function formatSequence(seq: number): string {
  return String(Math.max(1, Math.floor(seq))).padStart(4, "0");
}

export function formatOfferNumber(year: number, seq: number, prefix = OFFER_PREFIX): string {
  return `${prefix}-${year}-${formatSequence(seq)}`;
}

export function formatRevisionLabel(offerNumber: string, revision: number): string {
  return `${offerNumber}-R${Math.max(0, Math.floor(revision))}`;
}

export interface ParsedOfferNumber {
  prefix: string;
  year: number;
  sequence: number;
}

export function parseOfferNumber(value: string): ParsedOfferNumber | null {
  const m = /^([A-Z0-9]+)-(\d{4})-(\d{3,})$/.exec(value.trim());
  if (!m) return null;
  return { prefix: m[1], year: Number(m[2]), sequence: Number(m[3]) };
}

export function parseRevisionLabel(
  value: string
): (ParsedOfferNumber & { revision: number }) | null {
  const m = /^([A-Z0-9]+)-(\d{4})-(\d{3,})-R(\d+)$/.exec(value.trim());
  if (!m) return null;
  return {
    prefix: m[1],
    year: Number(m[2]),
    sequence: Number(m[3]),
    revision: Number(m[4])
  };
}
