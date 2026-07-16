/**
 * Vectorize namespace strategy for the knowledge platform.
 *
 * Every indexable module owns a namespace prefix (`std`, `paper`, `manual`, …).
 * A module's corpus can be partitioned further (a standards family, a
 * manufacturer) so that a single sub-collection is (re)indexed and queried in
 * isolation. This is what lets the platform scale to millions of documents
 * without cross-module interference and lets each source be indexed
 * independently.
 *
 *   mod:<prefix>                 → whole module
 *   mod:<prefix>:<partition>     → one sub-collection
 *
 * Project/company/standards scopes from the original RAG design are preserved
 * untouched for backward compatibility.
 */

import {
  KNOWLEDGE_MODULES,
  INDEXABLE_MODULE_KEYS,
  getKnowledgeModule,
  resolvePartition,
  type KnowledgeModuleKey
} from "@/server/knowledge/modules";

export function moduleNamespace(moduleKey: KnowledgeModuleKey, partition?: string | null): string {
  const definition = KNOWLEDGE_MODULES[moduleKey];
  if (!definition.indexable || !definition.namespacePrefix) {
    throw new Error(`MODULE_NOT_INDEXABLE:${moduleKey}`);
  }
  const resolved = partition ? resolvePartition(moduleKey, partition) : null;
  return resolved ? `mod:${definition.namespacePrefix}:${resolved}` : `mod:${definition.namespacePrefix}`;
}

/**
 * Namespaces to query for a module. When a partition is given we still include
 * the module-wide namespace so items registered without a partition remain
 * retrievable.
 */
export function moduleRetrievalNamespaces(
  moduleKey: KnowledgeModuleKey,
  partitions?: string[]
): string[] {
  const definition = getKnowledgeModule(moduleKey);
  if (!definition || !definition.indexable || !definition.namespacePrefix) return [];
  const base = `mod:${definition.namespacePrefix}`;
  if (!partitions || partitions.length === 0) return [base];
  const namespaces = new Set<string>([base]);
  for (const partition of partitions) {
    const resolved = resolvePartition(moduleKey, partition);
    if (resolved) namespaces.add(`${base}:${resolved}`);
  }
  return [...namespaces];
}

/** Namespaces covering every indexable module (used for platform-wide search). */
export function allModuleNamespaces(): string[] {
  return INDEXABLE_MODULE_KEYS.map((key) => `mod:${KNOWLEDGE_MODULES[key].namespacePrefix}`);
}
