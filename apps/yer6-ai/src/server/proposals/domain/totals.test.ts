import { describe, expect, it } from "vitest";
import { computeTotals } from "@/server/proposals/domain/totals";
import { sampleContent } from "@/server/proposals/proposal-fixture";

describe("commercial totals", () => {
  it("computes VAT-excluded totals with discount, excluding optional and internal lines", () => {
    const t = computeTotals(sampleContent(), "client");
    expect(t.subtotal).toBe(1475000); // 1,250,000 + 225,000
    expect(t.discountAmount).toBe(147500); // 10%
    expect(t.netSubtotal).toBe(1327500);
    expect(t.vatAmount).toBe(265500); // 20% of net
    expect(t.grandTotal).toBe(1593000);
    expect(t.optionalTotal).toBe(21600); // 12 * 1800
    expect(t.lines.some((l) => l.audience === "internal")).toBe(false);
  });

  it("includes internal lines for the internal audience", () => {
    const t = computeTotals(sampleContent(), "internal");
    expect(t.lines.some((l) => l.audience === "internal")).toBe(true);
    expect(t.subtotal).toBeGreaterThan(1475000);
  });

  it("handles VAT-included mode", () => {
    const t = computeTotals(sampleContent({ vatMode: "included", discountRatePct: 0 }), "client");
    expect(t.grandTotal).toBe(1475000);
    expect(t.vatBase + t.vatAmount).toBeCloseTo(t.grandTotal, 2);
  });

  it("handles zero VAT", () => {
    const t = computeTotals(sampleContent({ vatMode: "zero", discountRatePct: 0 }), "client");
    expect(t.vatAmount).toBe(0);
    expect(t.grandTotal).toBe(t.netSubtotal);
  });

  it("rounds line totals to 2 decimals", () => {
    const t = computeTotals(
      sampleContent({
        items: [
          { description: "x", quantity: 3.333, unit: "m", unitPrice: 1.005, quantityOrigin: "measured" }
        ],
        discountRatePct: 0,
        vatMode: "zero",
        vatRatePct: 0
      }),
      "client"
    );
    expect(t.lines[0].lineTotal).toBe(3.35);
  });
});
