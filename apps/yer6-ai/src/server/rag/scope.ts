import type { DocumentScope } from "@/server/ai/knowledge-base/types";
import type { RAGDocumentRecord } from "@/server/rag/contracts";
import { isKnowledgeModuleKey } from "@/server/knowledge/modules";
import { moduleNamespace, moduleRetrievalNamespaces } from "@/server/knowledge/namespaces";

export function retrievalNamespaces(scope: DocumentScope) {
  const namespaces = scope.includeStandards === false ? ["global"] : ["standards", "global"];
  if (scope.organizationId) namespaces.unshift(`company:${scope.organizationId}`);
  if (scope.projectId) namespaces.unshift(`project:${scope.projectId}`);

  // Module-scoped retrieval is additive: when a caller targets specific
  // knowledge modules, their namespaces are prepended so module hits rank
  // alongside the classic project/company/standards corpora.
  if (scope.modules && scope.modules.length > 0) {
    const moduleNamespaces = scope.modules
      .filter(isKnowledgeModuleKey)
      .flatMap((moduleKey) => moduleRetrievalNamespaces(moduleKey, scope.partitions));
    for (const namespace of [...new Set(moduleNamespaces)].reverse()) {
      if (!namespaces.includes(namespace)) namespaces.unshift(namespace);
    }
  }
  return namespaces;
}

export function documentNamespace(document: RAGDocumentRecord) {
  // A document assigned to a knowledge module is routed to that module's
  // namespace (optionally partitioned). This keeps every module independently
  // indexable and purgeable.
  if (document.moduleKey && isKnowledgeModuleKey(document.moduleKey)) {
    return moduleNamespace(document.moduleKey, document.partition);
  }
  if (document.scope === "project" && document.projectId) return `project:${document.projectId}`;
  if (document.scope === "company" && document.organizationId) {
    return `company:${document.organizationId}`;
  }
  if (document.scope === "standards") return "standards";
  return "global";
}
