import { describe, expect, it } from "vitest";
import { userInitials } from "@/lib/initials";

describe("userInitials (Package B display rules)", () => {
  it("builds initials from first + last name", () => {
    expect(userInitials("Erhan Deniz")).toBe("ED");
    expect(userInitials("Ahmet Yılmaz")).toBe("AY");
    expect(userInitials("Mehmet Kaya")).toBe("MK");
  });

  it("uses the first and LAST word for multi-part names", () => {
    expect(userInitials("Ayşe Nur Demir")).toBe("AD");
  });

  it("falls back to two letters for single names, Turkish-aware", () => {
    expect(userInitials("işıl")).toBe("İŞ");
  });

  it("returns null for empty/invalid names (generic icon)", () => {
    expect(userInitials("")).toBeNull();
    expect(userInitials("   ")).toBeNull();
    expect(userInitials(null)).toBeNull();
    expect(userInitials(undefined)).toBeNull();
  });
});
