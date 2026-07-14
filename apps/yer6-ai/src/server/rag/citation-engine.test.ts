import { describe, expect, it } from "vitest";
import { citationFromMatch, isGreetingOnly, noSourceNotice } from "@/server/rag/citation-engine";

describe("citation engine", () => {
  it("creates stable source labels with document version metadata", () => {
    const citation = citationFromMatch({
      id: "vector-1",
      score: 0.9,
      metadata: {
        fileName: "BH-01.pdf",
        sourceType: "pdf",
        scope: "project",
        page: 4,
        version: "2026-02",
        standardCode: "TS EN 1997-1"
      }
    }, 0);

    expect(citation).toMatchObject({
      id: "K1",
      fileName: "BH-01.pdf",
      page: 4,
      version: "2026-02",
      standardCode: "TS EN 1997-1"
    });
  });

  it("does not add a missing-source notice to greeting-only turns", () => {
    expect(isGreetingOnly("Merhaba!" )).toBe(true);
    expect(isGreetingOnly("Jet grout nedir?")).toBe(false);
    expect(noSourceNotice("tr")).toContain("genel mühendislik bilgisine");
  });
});
