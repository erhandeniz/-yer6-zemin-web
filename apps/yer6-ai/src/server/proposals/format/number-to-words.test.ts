import { describe, expect, it } from "vitest";
import {
  englishIntegerToWords,
  turkishIntegerToWords,
  writtenTotal
} from "@/server/proposals/format/number-to-words";

describe("number to words", () => {
  it("turkish integers", () => {
    expect(turkishIntegerToWords(0)).toBe("sıfır");
    expect(turkishIntegerToWords(1000)).toBe("bin");
    expect(turkishIntegerToWords(1475000)).toBe("birmilyondörtyüzyetmişbeşbin");
  });
  it("english integers", () => {
    expect(englishIntegerToWords(0)).toBe("zero");
    expect(englishIntegerToWords(1475000)).toBe("one million four hundred seventy-five thousand");
  });
  it("written total tr includes currency and kuruş", () => {
    const w = writtenTotal(1593000, "TRY", "tr");
    expect(w).toContain("YALNIZ");
    expect(w).toContain("Türk Lirası");
    expect(w).toContain("SıfırKuruş");
  });
  it("written total en includes cents fraction", () => {
    expect(writtenTotal(1475000.5, "USD", "en")).toContain("US Dollars and 50/100");
  });
});
