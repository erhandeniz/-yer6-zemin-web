import { describe, expect, it } from "vitest";
import { formatMoney, formatNumber, roundHalfUp } from "@/server/proposals/format/money";

describe("money formatting", () => {
  it("formats TRY in Turkish locale", () => {
    expect(formatMoney(1250000, "TRY", "tr")).toBe("1.250.000,00 TL");
    expect(formatMoney(1593000, "TRY", "tr")).toBe("1.593.000,00 TL");
  });
  it("formats USD and EUR in international locale", () => {
    expect(formatMoney(1250000, "USD", "en")).toBe("1,250,000.00 USD");
    expect(formatMoney(1250000.5, "EUR", "en")).toBe("1,250,000.50 EUR");
  });
  it("handles zero-decimal and negatives", () => {
    expect(formatNumber(1250, { locale: "tr", decimals: 0 })).toBe("1.250");
    expect(formatNumber(-1234.5, { locale: "en" })).toBe("-1,234.50");
  });
  it("rounds half up robustly", () => {
    expect(roundHalfUp(2.005, 2)).toBe(2.01);
    expect(roundHalfUp(-1.005, 2)).toBe(-1.01);
    expect(roundHalfUp(0.1 + 0.2, 2)).toBe(0.3);
  });
});
