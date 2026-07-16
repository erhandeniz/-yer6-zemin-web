import { isAccessResponse, requireAdmin } from "@/server/auth/workspace-access";
import { KNOWLEDGE_MODULE_LIST } from "@/server/knowledge/modules";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Registry of the 10 knowledge modules. Drives the admin UI and lets clients
 * discover which modules exist, their kind, namespace and known partitions —
 * without hardcoding any of it client-side.
 */
export async function GET() {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;
  return Response.json({
    modules: KNOWLEDGE_MODULE_LIST.map((module) => ({
      key: module.key,
      kind: module.kind,
      order: module.order,
      title: module.title,
      titleTr: module.titleTr,
      description: module.description,
      namespacePrefix: module.namespacePrefix,
      indexable: module.indexable,
      incremental: module.incremental,
      defaultLicense: module.defaultLicense,
      partitions: module.partitions,
      allowUnknownPartitions: module.allowUnknownPartitions
    }))
  });
}
