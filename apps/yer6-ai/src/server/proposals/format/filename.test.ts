import { describe, expect, it } from "vitest";
import {
  proposalFileName,
  proposalStorageKey,
  sanitizeSegment,
  transliterate
} from "@/server/proposals/format/filename";

describe("filename safety", () => {
  it("transliterates Turkish characters", () => {
    expect(transliterate("Şahin İnşaat Güçlü")).toBe("Sahin Insaat Guclu");
  });
  it("blocks path traversal and unsafe characters", () => {
    expect(sanitizeSegment("../../etc/passwd")).toBe("etc_passwd");
    expect(sanitizeSegment("a/b\\c:*?<>|")).not.toMatch(/[/\\:*?<>|]/);
  });
  it("builds client and internal file names", () => {
    const parts = {
      offerNumber: "YER6-2026-0001",
      revision: 0,
      customer: "Şahin İnşaat A.Ş.",
      project: "Gölbaşı Fabrika",
      audience: "client" as const
    };
    expect(proposalFileName(parts)).toBe(
      "YER6_Teklif_YER6-2026-0001_Sahin_Insaat_A.S_Golbasi_Fabrika_R0.pdf"
    );
    expect(proposalFileName({ ...parts, audience: "internal" })).toContain("YER6_IcMaliyet_");
  });
  it("keeps Turkish as the base name and suffixes other language variants", () => {
    const parts = {
      offerNumber: "YER6-2026-0001",
      revision: 0,
      customer: "Şahin",
      project: "Fabrika",
      audience: "client" as const
    };
    expect(proposalFileName({ ...parts, locale: "tr" })).not.toContain("_TR");
    expect(proposalFileName({ ...parts, locale: "ar" })).toContain("_AR.pdf");
    expect(proposalFileName({ ...parts, locale: "en" })).toContain("_EN.pdf");
  });
  it("produces org/project/locale isolated storage keys", () => {
    const key = proposalStorageKey({
      organizationId: "yer6",
      proposalId: "abc123",
      revision: 1,
      audience: "client",
      locale: "ar",
      checksumShort: "deadbeef0011"
    });
    expect(key).toBe("proposals/yer6/abc123/r1/client-ar-deadbeef0011.pdf");
    expect(key).not.toContain("..");
  });
});
