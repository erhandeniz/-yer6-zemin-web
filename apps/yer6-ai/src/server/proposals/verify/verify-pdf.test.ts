import { deflateSync } from "node:zlib";
import { describe, expect, it } from "vitest";
import { renderProposalPdf } from "@/server/proposals/render/proposal-pdf";
import { computeTotals } from "@/server/proposals/domain/totals";
import { toClientContent } from "@/server/proposals/domain/visibility";
import { loadProposalFonts } from "@/server/proposals/pdf/fonts";
import { verifyProposalPdf } from "@/server/proposals/verify/verify-pdf";
import { formatMoney } from "@/server/proposals/format/money";
import { sampleContent } from "@/server/proposals/proposal-fixture";

const deflate = (u: Uint8Array) => new Uint8Array(deflateSync(Buffer.from(u)));

async function renderClient() {
  const fonts = await loadProposalFonts();
  const content = sampleContent();
  const totals = computeTotals(content, "client");
  const res = renderProposalPdf({ content: toClientContent(content), totals, audience: "client", fonts, deflate });
  return { res, content, grandTotalText: formatMoney(totals.grandTotal, content.currency, content.locale) };
}

describe("PDF verification", () => {
  it("passes for a correctly rendered client PDF", async () => {
    const { res, content, grandTotalText } = await renderClient();
    const v = verifyProposalPdf({
      bytes: res.bytes,
      pageTexts: res.pageTexts,
      expected: {
        audience: "client",
        offerNumber: content.offerNumber,
        revisionLabel: `${content.offerNumber}-R0`,
        grandTotalText,
        pageCount: res.pageCount
      }
    });
    expect(v.ok).toBe(true);
    expect(v.checks.every((c) => c.ok)).toBe(true);
  });

  it("fails when the expected grand total is wrong", async () => {
    const { res, content } = await renderClient();
    const v = verifyProposalPdf({
      bytes: res.bytes,
      pageTexts: res.pageTexts,
      expected: {
        audience: "client",
        offerNumber: content.offerNumber,
        revisionLabel: `${content.offerNumber}-R0`,
        grandTotalText: "9.999.999,99 TL"
      }
    });
    expect(v.ok).toBe(false);
    expect(v.failureCategory).toBe("verification_failed");
  });

  it("fails on a corrupted (empty) document", () => {
    const v = verifyProposalPdf({
      bytes: new Uint8Array([1, 2, 3]),
      pageTexts: [],
      expected: {
        audience: "client",
        offerNumber: "YER6-2026-0001",
        revisionLabel: "YER6-2026-0001-R0",
        grandTotalText: "0,00 TL"
      }
    });
    expect(v.ok).toBe(false);
  });

  it("detects internal leakage in a client document", () => {
    const v = verifyProposalPdf({
      bytes: new Uint8Array(2000).fill(37), // dummy body, structural checks aside
      pageTexts: ["YER6-2026-0001-R0 ... Hedef Marj: %22 ... 1.000,00 TL"],
      expected: {
        audience: "client",
        offerNumber: "YER6-2026-0001",
        revisionLabel: "YER6-2026-0001-R0",
        grandTotalText: "1.000,00 TL"
      }
    });
    const leak = v.checks.find((c) => c.id === "no_internal_leak");
    expect(leak?.ok).toBe(false);
  });
});
