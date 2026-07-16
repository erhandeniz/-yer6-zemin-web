import { KNOWLEDGE_CATEGORIES } from "@/lib/rag/catalog";
import { isAccessResponse, requireAdmin } from "@/server/auth/workspace-access";
import { documentCreateSchema, licensedContentAllowed } from "@/server/rag/api-schemas";
import { createRAGAdminRuntime } from "@/server/rag/runtime";
import { dispatchIngestion } from "@/server/rag/ingestion-dispatcher";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function GET(request: Request) {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;
  const { repository } = await createRAGAdminRuntime();
  if (!repository) return Response.json({ error: "RAG_METADATA_UNAVAILABLE" }, { status: 503 });
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const scope = url.searchParams.get("scope");
  const result = await repository.listDocuments({
    category: KNOWLEDGE_CATEGORIES.find((item) => item === category),
    scope: scope === "project" || scope === "company" || scope === "standards" ? scope : undefined,
    cursor: url.searchParams.get("cursor") || undefined,
    limit: Math.min(100, Math.max(1, Number.parseInt(url.searchParams.get("limit") ?? "50", 10) || 50))
  });
  return Response.json(result);
}

export async function POST(request: Request) {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;
  const parsed = documentCreateSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "INVALID_DOCUMENT" }, { status: 400 });
  const runtimeState = await createRAGAdminRuntime();
  if (!runtimeState.repository) {
    return Response.json({ error: "RAG_METADATA_UNAVAILABLE" }, { status: 503 });
  }
  const value = parsed.data;
  const licenseStatus = value.scope === "standards" ? value.licenseStatus : undefined;
  const document = await runtimeState.repository.createDocument({
    name: value.name,
    extension: value.extension,
    mimeType: value.mimeType,
    size: value.size,
    category: value.category,
    scope: value.scope,
    moduleKey: value.moduleKey,
    partition: value.partition,
    projectId: value.projectId,
    organizationId: value.organizationId,
    storageProvider: runtimeState.config.storageProvider,
    storageKey: value.storageKey,
    sourceUrl: value.sourceUrl,
    version: value.version,
    standardId: value.standardId,
    uploadedById: access.user.id === "local-admin" ? undefined : access.user.id,
    licenseStatus,
    contentIndexingAllowed: value.scope !== "standards" || licensedContentAllowed(
      licenseStatus,
      value.contentIndexingAllowed
    ),
    metadata: value.standardCode ? { standardCode: value.standardCode } : undefined
  });
  if (value.ingest) {
    if (!runtimeState.state.ingestionReady) {
      return Response.json({ document, error: "RAG_INGESTION_UNAVAILABLE" }, { status: 202 });
    }
    const result = await dispatchIngestion(runtimeState, document.id);
    return Response.json({ document, ingestion: result }, { status: 201 });
  }
  return Response.json({ document }, { status: 201 });
}
