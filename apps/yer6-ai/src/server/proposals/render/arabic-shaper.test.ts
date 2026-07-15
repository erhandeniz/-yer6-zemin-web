import { describe, expect, it } from "vitest";
import { hasArabic, shapeArabic } from "@/server/proposals/render/arabic-shaper";

const cps = (s: string) => Array.from(s, (c) => c.codePointAt(0)!);

describe("arabic shaper", () => {
  it("detects Arabic", () => {
    expect(hasArabic("عرض")).toBe(true);
    expect(hasArabic("Teklif")).toBe(false);
  });

  it("leaves non-Arabic text unchanged", () => {
    expect(shapeArabic("YER6-2026-0001")).toBe("YER6-2026-0001");
  });

  it("shapes a joined word into presentation forms in visual (RTL) order", () => {
    // Logical b-y-t → initial/medial/final, reversed for display.
    // beh initial FE91, yeh medial FEF4, teh final FE96.
    expect(cps(shapeArabic("بيت"))).toEqual([0xfe96, 0xfef4, 0xfe91]);
  });

  it("applies the lam-alef ligature", () => {
    expect(cps(shapeArabic("لا"))).toEqual([0xfefb]); // isolated lam-alef
  });

  it("uses isolated form for a standalone letter", () => {
    // Standalone beh → isolated FE8F.
    expect(cps(shapeArabic("ب"))).toEqual([0xfe8f]);
  });

  it("keeps embedded Latin/digits left-to-right within RTL text", () => {
    const out = shapeArabic("رقم 2026");
    // The digit run stays in order somewhere in the output.
    expect(out).toContain("2026");
  });
});
