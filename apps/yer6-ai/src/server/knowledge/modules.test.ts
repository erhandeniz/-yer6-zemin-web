import { describe, expect, it } from "vitest";
import {
  KNOWLEDGE_MODULE_LIST,
  DOCUMENT_MODULE_KEYS,
  INDEXABLE_MODULE_KEYS,
  getKnowledgeModule,
  isKnowledgeModuleKey,
  resolvePartition
} from "@/server/knowledge/modules";
import { moduleNamespace, moduleRetrievalNamespaces, allModuleNamespaces } from "@/server/knowledge/namespaces";

describe("knowledge module registry", () => {
  it("declares all 10 modules in stable order", () => {
    expect(KNOWLEDGE_MODULE_LIST).toHaveLength(10);
    expect(KNOWLEDGE_MODULE_LIST.map((module) => module.order)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]);
  });

  it("marks compute modules as non-indexable and document/structured as indexable", () => {
    expect(DOCUMENT_MODULE_KEYS).toContain("standards");
    expect(INDEXABLE_MODULE_KEYS).toContain("machines");
    expect(INDEXABLE_MODULE_KEYS).not.toContain("calculations");
    expect(INDEXABLE_MODULE_KEYS).not.toContain("decisions");
  });

  it("validates module keys", () => {
    expect(isKnowledgeModuleKey("papers")).toBe(true);
    expect(isKnowledgeModuleKey("nonsense")).toBe(false);
    expect(getKnowledgeModule("manuals")?.namespacePrefix).toBe("manual");
  });

  it("resolves known partitions and aliases, and accepts unknown ones when allowed", () => {
    expect(resolvePartition("standards", "EN 1997")).toBe("eurocode-7");
    expect(resolvePartition("standards", "Eurocode 8")).toBe("eurocode-8");
    expect(resolvePartition("manuals", "Bauer")).toBe("bauer");
    expect(resolvePartition("standards", "Some New Body")).toBe("some-new-body");
  });
});

describe("module namespaces", () => {
  it("builds isolated namespaces per module and partition", () => {
    expect(moduleNamespace("standards")).toBe("mod:std");
    expect(moduleNamespace("standards", "EN 1997")).toBe("mod:std:eurocode-7");
    expect(moduleNamespace("manuals", "Bauer")).toBe("mod:manual:bauer");
  });

  it("throws for non-indexable modules", () => {
    expect(() => moduleNamespace("calculations")).toThrow(/MODULE_NOT_INDEXABLE/);
  });

  it("includes module-wide namespace alongside partitions for retrieval", () => {
    expect(moduleRetrievalNamespaces("manuals", ["Bauer", "Soilmec"])).toEqual([
      "mod:manual",
      "mod:manual:bauer",
      "mod:manual:soilmec"
    ]);
    expect(allModuleNamespaces()).toContain("mod:paper");
  });
});
