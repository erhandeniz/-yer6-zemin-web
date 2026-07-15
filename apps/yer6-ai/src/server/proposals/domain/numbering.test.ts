import { describe, expect, it } from "vitest";
import {
  formatOfferNumber,
  formatRevisionLabel,
  parseOfferNumber,
  parseRevisionLabel
} from "@/server/proposals/domain/numbering";

describe("offer numbering", () => {
  it("formats offer numbers and revision labels", () => {
    expect(formatOfferNumber(2026, 1)).toBe("YER6-2026-0001");
    expect(formatOfferNumber(2026, 42)).toBe("YER6-2026-0042");
    expect(formatRevisionLabel("YER6-2026-0001", 0)).toBe("YER6-2026-0001-R0");
    expect(formatRevisionLabel("YER6-2026-0001", 2)).toBe("YER6-2026-0001-R2");
  });
  it("parses back", () => {
    expect(parseOfferNumber("YER6-2026-0007")).toEqual({ prefix: "YER6", year: 2026, sequence: 7 });
    expect(parseRevisionLabel("YER6-2026-0007-R3")).toEqual({
      prefix: "YER6",
      year: 2026,
      sequence: 7,
      revision: 3
    });
    expect(parseOfferNumber("not-a-number")).toBeNull();
  });
});
