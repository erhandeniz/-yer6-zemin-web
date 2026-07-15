import { describe, expect, it } from "vitest";
import { validateProposal } from "@/server/proposals/domain/validation";
import { sampleContent } from "@/server/proposals/proposal-fixture";

describe("proposal validation", () => {
  it("accepts a complete proposal", () => {
    expect(validateProposal(sampleContent()).ok).toBe(true);
  });

  it("rejects negative quantities and prices", () => {
    const r = validateProposal(
      sampleContent({
        items: [{ description: "x", quantity: -5, unit: "m", unitPrice: 10, quantityOrigin: "measured" }]
      })
    );
    expect(r.ok).toBe(false);
    expect(r.errors.map((e) => e.code)).toContain("ITEM_NEG_QTY");
  });

  it("rejects incompatible currencies", () => {
    const r = validateProposal(
      sampleContent({
        items: [
          { description: "x", quantity: 1, unit: "m", unitPrice: 10, currency: "USD", quantityOrigin: "measured" }
        ]
      })
    );
    expect(r.errors.map((e) => e.code)).toContain("CURRENCY_MISMATCH");
  });

  it("flags missing mandatory fields", () => {
    const r = validateProposal(sampleContent({ projectName: "", subject: "" }));
    expect(r.ok).toBe(false);
    const codes = r.errors.map((e) => e.code);
    expect(codes).toContain("MISSING_PROJECT");
    expect(codes).toContain("MISSING_SUBJECT");
  });

  it("warns on duplicated items", () => {
    const r = validateProposal(
      sampleContent({
        items: [
          { description: "Jet grout", quantity: 1, unit: "m", unitPrice: 1, quantityOrigin: "measured" },
          { description: "Jet grout", quantity: 1, unit: "m", unitPrice: 1, quantityOrigin: "measured" }
        ]
      })
    );
    expect(r.warnings.map((w) => w.code)).toContain("DUPLICATE_ITEM");
  });

  it("rejects a zero grand total", () => {
    const r = validateProposal(
      sampleContent({
        items: [{ description: "x", quantity: 0, unit: "m", unitPrice: 0, quantityOrigin: "measured" }],
        discountRatePct: 0
      })
    );
    expect(r.errors.map((e) => e.code)).toContain("ZERO_TOTAL");
  });
});
