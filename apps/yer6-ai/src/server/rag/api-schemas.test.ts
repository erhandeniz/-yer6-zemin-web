import { describe, expect, it } from "vitest";
import { documentCreateSchema, licensedContentAllowed } from "@/server/rag/api-schemas";

describe("RAG API safety", () => {
  it("does not permit indexing protected standard content", () => {
    expect(licensedContentAllowed("REFERENCE_ONLY", true)).toBe(false);
    expect(licensedContentAllowed("RESTRICTED", true)).toBe(false);
    expect(licensedContentAllowed("PUBLIC", true)).toBe(true);
    expect(licensedContentAllowed("LICENSED_INTERNAL", true)).toBe(true);
  });

  it("requires license metadata for standards and project id for projects", () => {
    const base = {
      name: "rapor.pdf",
      extension: "pdf",
      mimeType: "application/pdf",
      size: 100,
      category: "Teknik Şartnameler",
      storageKey: "safe-key"
    } as const;
    expect(documentCreateSchema.safeParse({ ...base, scope: "standards" }).success).toBe(false);
    expect(documentCreateSchema.safeParse({ ...base, scope: "project" }).success).toBe(false);
    expect(documentCreateSchema.safeParse({
      ...base,
      scope: "standards",
      licenseStatus: "REFERENCE_ONLY"
    }).success).toBe(true);
  });
});
