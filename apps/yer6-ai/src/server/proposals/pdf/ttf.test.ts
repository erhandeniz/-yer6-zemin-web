import { describe, expect, it } from "vitest";
import { loadFont } from "@/server/proposals/pdf/fonts";

describe("TrueType parser", () => {
  it("parses metrics and maps Turkish + Arabic glyphs", async () => {
    const ttf = await loadFont("regular");
    expect(ttf.metrics.unitsPerEm).toBeGreaterThan(0);
    expect(ttf.metrics.numGlyphs).toBeGreaterThan(1000);
    // Turkish glyphs must resolve to non-zero glyph ids.
    for (const cp of [0x15f /*ş*/, 0x11f /*ğ*/, 0x130 /*İ*/, 0x131 /*ı*/, 0xe7 /*ç*/]) {
      expect(ttf.glyphId(cp)).toBeGreaterThan(0);
    }
    // Basic Arabic coverage.
    expect(ttf.glyphId(0x628 /*ب*/)).toBeGreaterThan(0);
    // Advance widths are positive for a normal glyph.
    expect(ttf.advance(ttf.glyphId(0x41))).toBeGreaterThan(0);
  });
});
