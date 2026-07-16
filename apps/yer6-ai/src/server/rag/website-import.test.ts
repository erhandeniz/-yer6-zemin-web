import { describe, expect, it } from "vitest";
import { isImportableYer6Url } from "@/server/rag/website-import";

describe("website import URL policy", () => {
  it("allows public YER6 pages", () => {
    for (const url of [
      "https://www.yer6zemin.com.tr/services/jet-grout/",
      "https://yer6zemin.com.tr/knowledge/jet-grout-nedir/",
      "https://www.yer6zemin.com.tr/sehirler/istanbul/"
    ]) {
      expect(isImportableYer6Url(url).ok).toBe(true);
    }
  });

  it("blocks private admin and authentication routes", () => {
    for (const url of [
      "https://www.yer6zemin.com.tr/admin",
      "https://www.yer6zemin.com.tr/admin/knowledge",
      "https://www.yer6zemin.com.tr/api/auth/session",
      "https://www.yer6zemin.com.tr/login",
      "https://www.yer6zemin.com.tr/demo/chat"
    ]) {
      const result = isImportableYer6Url(url);
      expect(result.ok).toBe(false);
      expect(result.reason).toBe("PRIVATE_ROUTE");
    }
  });

  it("blocks non-YER6 hosts and non-https", () => {
    expect(isImportableYer6Url("https://evil.com/x").reason).toBe("HOST_NOT_ALLOWED");
    expect(isImportableYer6Url("https://yer6zemin.com.tr.evil.com/x").reason).toBe("HOST_NOT_ALLOWED");
    expect(isImportableYer6Url("http://www.yer6zemin.com.tr/x").reason).toBe("NOT_HTTPS");
    expect(isImportableYer6Url("not-a-url").reason).toBe("INVALID_URL");
  });
});
