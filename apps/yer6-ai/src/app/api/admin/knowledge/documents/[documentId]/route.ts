import { isAccessResponse, requireAdmin } from "@/server/auth/workspace-access";
import { documentUpdateSchema, licensedContentAllowed } from "@/server/rag/api-schemas";
import { createRAGAdminRuntime } from "@/server/rag/runtime";

export const runtime = "nodejs";

type Context = { params: Promise<{ documentId: string }> };

export async function PATCH(request: Request, context: Context) {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;
  const parsed = documentUpdateSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "INVALID_DOCUMENT" }, { status: 400 });
  const { documentId } = await context.params;
  const { repository } = await createRAGAdminRuntime();
  if (!repository) return Response.json({ error: "RAG_METADATA_UNAVAILABLE" }, { status: 503 });
  const current = await repository.getDocument(documentId);
  if (!current) return Response.json({ error: "DOCUMENT_NOT_FOUND" }, { status: 404 });
  const licenseStatus = parsed.data.licenseStatus ?? current.licenseStatus;
  const document = await repository.updateDocument(documentId, {
    ...parsed.data,
    contentIndexingAllowed: current.scope === "standards"
      ? licensedContentAllowed(licenseStatus, parsed.data.contentIndexingAllowed ?? current.contentIndexingAllowed)
      : parsed.data.contentIndexingAllowed
  });
  return Response.json({ document });
}

export async function DELETE(_request: Request, context: Context) {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;
  const { documentId } = await context.params;
  const { repository, storage, vectors } = await createRAGAdminRuntime();
  if (!repository) return Response.json({ error: "RAG_METADATA_UNAVAILABLE" }, { status: 503 });
  const document = await repository.getDocument(documentId);
  if (!document) return Response.json({ error: "DOCUMENT_NOT_FOUND" }, { status: 404 });
  const vectorIds = await repository.listChunkVectorIds(documentId);
  if (vectors && vectorIds.length > 0) await vectors.delete(vectorIds);
  if (storage) await storage.delete(document);
  await repository.deleteDocument(documentId);
  return new Response(null, { status: 204 });
}
