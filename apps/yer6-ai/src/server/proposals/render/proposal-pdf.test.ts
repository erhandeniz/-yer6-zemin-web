import { deflateSync } from "node:zlib";
import { describe, expect, it } from "vitest";
import { renderProposalPdf } from "@/server/proposals/render/proposal-pdf";
import { computeTotals } from "@/server/proposals/domain/totals";
import { toClientContent, findInternalLeakage } from "@/server/proposals/domain/visibility";
import { loadProposalFonts } from "@/server/proposals/pdf/fonts";
import { sampleContent } from "@/server/proposals/proposal-fixture";

const deflate = (u: Uint8Array) => new Uint8Array(deflateSync(Buffer.from(u)));

describe("proposal renderer", () => {
  it("renders a client PDF with no internal-data leakage", async () => {
    const fonts = await loadProposalFonts();
    const content = sampleContent();
    const clientContent = toClientContent(content);
    const totals = computeTotals(content, "client");
    const res = renderProposalPdf({ content: clientContent, totals, audience: "client", fonts, deflate });

    expect(res.pageCount).toBeGreaterThan(0);
    expect(res.bytes.length).toBeGreaterThan(1000);
    const text = res.pageTexts.join("\n");
    expect(text).toContain("YER6-2026-0001");
    expect(text).toContain("1.593.000,00 TL"); // grand total
    // No internal-only labels or internal line descriptions.
    expect(findInternalLeakage(text)).toEqual([]);
    expect(text).not.toContain("İç işçilik");
    expect(text).not.toContain("180.000");
  });

  it("renders an internal PDF containing the cost breakdown", async () => {
    const fonts = await loadProposalFonts();
    const content = sampleContent();
    const totals = computeTotals(content, "internal");
    const res = renderProposalPdf({ content, totals, audience: "internal", fonts, deflate });
    const text = res.pageTexts.join("\n");
    expect(text).toContain("İÇ MALİYET");
    expect(text).toContain("Hedef Marj");
    expect(text.toLowerCase()).toContain("labor");
  });

  it("supports multiple currencies and an English locale", async () => {
    const fonts = await loadProposalFonts();
    const content = sampleContent({ currency: "USD", locale: "en", discountRatePct: 0, vatMode: "zero" });
    const totals = computeTotals(content, "client");
    const res = renderProposalPdf({ content: toClientContent(content), totals, audience: "client", fonts, deflate });
    const text = res.pageTexts.join("\n");
    expect(text).toContain("USD");
    expect(text).toContain("COMMERCIAL PROPOSAL");
  });
});
