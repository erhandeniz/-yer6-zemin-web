import { describe, expect, it } from "vitest";
import { documentNamespace, retrievalNamespaces } from "@/server/rag/scope";
import type { RAGDocumentRecord } from "@/server/rag/contracts";

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

  it("prepends knowledge-module namespaces when modules are targeted", () => {
    expect(
      retrievalNamespaces({ modules: ["manuals"], partitions: ["Bauer"], includeStandards: false })
    ).toEqual(["mod:manual", "mod:manual:bauer", "global"]);
  });

  it("ignores invalid module keys without leaking namespaces", () => {
    expect(retrievalNamespaces({ modules: ["not-a-module"], includeStandards: false })).toEqual([
      "global"
    ]);
  });

  it("routes module documents to their module namespace", () => {
    const base = {
      id: "d1",
      name: "EN 1997-1.pdf",
      extension: "pdf",
      mimeType: "application/pdf",
      size: 10,
      category: "Teknik Şartnameler",
      scope: "standards",
      storageProvider: "r2",
      storageKey: "k",
      status: "READY",
      chunkCount: 0,
      tokenCount: 0,
      createdAt: "",
      updatedAt: ""
    } as unknown as RAGDocumentRecord;
    expect(documentNamespace({ ...base, moduleKey: "standards", partition: "eurocode-7" })).toBe(
      "mod:std:eurocode-7"
    );
    expect(documentNamespace(base)).toBe("standards");
  });
});
