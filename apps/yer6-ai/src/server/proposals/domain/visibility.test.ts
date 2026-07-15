import { describe, expect, it } from "vitest";
import { findInternalLeakage, hasInternalData, toClientContent } from "@/server/proposals/domain/visibility";
import { sampleContent } from "@/server/proposals/proposal-fixture";

describe("client / internal separation", () => {
  it("detects internal data presence", () => {
    expect(hasInternalData(sampleContent())).toBe(true);
    expect(hasInternalData(sampleContent({ internalCost: undefined, items: [] }))).toBe(false);
  });
  it("strips internal cost and internal-audience lines for the client copy", () => {
    const client = toClientContent(sampleContent());
    expect(client.internalCost).toBeUndefined();
    expect(client.items.every((i) => i.audience !== "internal")).toBe(true);
  });
  it("flags internal-only labels leaking into client text", () => {
    expect(findInternalLeakage("Bu teklif İç Maliyet Analizi ve Hedef Marj içerir")).toEqual(
      expect.arrayContaining(["İç Maliyet Analizi", "Hedef Marj"])
    );
    expect(findInternalLeakage("Jet grout kolon imalatı ve mobilizasyon")).toEqual([]);
  });
});
