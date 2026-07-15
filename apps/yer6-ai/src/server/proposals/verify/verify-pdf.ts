/**
 * PDF verification (section F). A PDF is NOT considered successfully generated
 * until every check passes. Runs without any external PDF library — it inspects
 * the raw bytes we produced plus the plain-text index captured at render time.
 */

import type { Audience } from "../domain/types";
import { findInternalLeakage } from "../domain/visibility";

export interface VerifyInput {
  bytes: Uint8Array;
  pageTexts: string[]; // plain text drawn per page (from the renderer)
  expected: {
    audience: Audience;
    offerNumber: string;
    revisionLabel: string; // e.g. YER6-2026-0001-R0
    grandTotalText: string; // formatted, e.g. "1.593.000,00 TL"
    pageCount?: number;
  };
  minBytes?: number;
}

export interface VerifyCheck {
  id: string;
  ok: boolean;
  detail?: string;
}

export interface VerifyResult {
  ok: boolean;
  checks: VerifyCheck[];
  failureCategory?: string;
  pageCount: number;
  byteSize: number;
}

const decoder = new TextDecoder("latin1");

export function verifyProposalPdf(input: VerifyInput): VerifyResult {
  const { bytes, pageTexts, expected } = input;
  const checks: VerifyCheck[] = [];
  const raw = decoder.decode(bytes);
  const allText = pageTexts.join("\n");

  const add = (id: string, ok: boolean, detail?: string) => checks.push({ id, ok, detail });

  // 1. File opens: valid header + trailer.
  add("header", raw.startsWith("%PDF-1."), "%PDF-1.x header");
  add("eof", raw.trimEnd().endsWith("%%EOF"), "%%EOF marker");
  const startxref = /startxref\s+(\d+)/.exec(raw);
  add("startxref", Boolean(startxref), "startxref offset present");

  // 2. Non-zero / plausible size.
  const minBytes = input.minBytes ?? 1000;
  add("size", bytes.length >= minBytes, `>= ${minBytes} bytes (got ${bytes.length})`);

  // 3. Page count.
  const pageCount = (raw.match(/\/Type\s*\/Page(?![s])/g) || []).length;
  const pageOk = pageCount > 0 && (expected.pageCount == null || pageCount === expected.pageCount);
  add("pages", pageOk, `page objects=${pageCount}`);

  // 4. Selectable / searchable text: embedded Type0 font + ToUnicode CMap.
  add("selectable_text", raw.includes("/Type0") && raw.includes("/ToUnicode"), "Type0 + ToUnicode");

  // 5. Expected offer number present in rendered text.
  add(
    "offer_number",
    allText.includes(expected.offerNumber) || allText.includes(expected.revisionLabel),
    expected.revisionLabel
  );

  // 6. Expected grand total present.
  add("grand_total", allText.includes(expected.grandTotalText), expected.grandTotalText);

  // 7. Final page not blank.
  const last = pageTexts[pageTexts.length - 1] ?? "";
  add("final_page_not_blank", last.trim().length > 0, `last page chars=${last.trim().length}`);

  // 8. No internal-only labels leaked into a client PDF.
  if (expected.audience === "client") {
    const leaks = findInternalLeakage(allText);
    add("no_internal_leak", leaks.length === 0, leaks.length ? `leaked: ${leaks.join(", ")}` : "clean");
  } else {
    add("no_internal_leak", true, "internal document — n/a");
  }

  const firstFail = checks.find((c) => !c.ok);
  const failureCategory = firstFail ? categoryFor(firstFail.id) : undefined;

  return {
    ok: !firstFail,
    checks,
    failureCategory,
    pageCount,
    byteSize: bytes.length
  };
}

function categoryFor(checkId: string): string {
  switch (checkId) {
    case "no_internal_leak":
      return "verification_failed";
    case "offer_number":
    case "grand_total":
    case "final_page_not_blank":
      return "verification_failed";
    case "selectable_text":
    case "header":
    case "eof":
    case "startxref":
      return "corrupted_output";
    case "size":
      return "rendering_failed";
    case "pages":
      return "rendering_failed";
    default:
      return "verification_failed";
  }
}
