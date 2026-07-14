import { describe, expect, it } from "vitest";
import { retrievalNamespaces } from "@/server/rag/scope";

describe("RAG namespace isolation", () => {
  it("orders project, company and standards scopes without leaking arbitrary namespaces", () => {
    expect(retrievalNamespaces({ projectId: "p1", organizationId: "yer6" })).toEqual([
      "project:p1",
      "company:yer6",
      "standards",
      "global"
    ]);
    expect(retrievalNamespaces({ projectId: "p1", includeStandards: false })).toEqual([
      "project:p1",
      "global"
    ]);
  });
});
