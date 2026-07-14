import type { DocumentScope } from "@/server/ai/knowledge-base/types";
import type { RAGDocumentRecord } from "@/server/rag/contracts";

export function retrievalNamespaces(scope: DocumentScope) {
  const namespaces = scope.includeStandards === false ? ["global"] : ["standards", "global"];
  if (scope.organizationId) namespaces.unshift(`company:${scope.organizationId}`);
  if (scope.projectId) namespaces.unshift(`project:${scope.projectId}`);
  return namespaces;
}

export function documentNamespace(document: RAGDocumentRecord) {
  if (document.scope === "project" && document.projectId) return `project:${document.projectId}`;
  if (document.scope === "company" && document.organizationId) {
    return `company:${document.organizationId}`;
  }
  if (document.scope === "standards") return "standards";
  return "global";
}
