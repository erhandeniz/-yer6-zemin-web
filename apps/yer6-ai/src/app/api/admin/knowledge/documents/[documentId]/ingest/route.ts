import { isAccessResponse, requireAdmin } from "@/server/auth/workspace-access";
import { createRAGAdminRuntime } from "@/server/rag/runtime";

export const runtime = "nodejs";
export const maxDuration = 300;

export async function POST(_request: Request, context: { params: Promise<{ documentId: string }> }) {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;
  const { ingestion, state } = await createRAGAdminRuntime();
  if (!ingestion) {
    return Response.json({ error: "RAG_INGESTION_UNAVAILABLE", ready: state.ingestionReady }, { status: 503 });
  }
  const { documentId } = await context.params;
  try {
    return Response.json(await ingestion.ingest(documentId));
  } catch {
    return Response.json({ error: "RAG_INGESTION_FAILED" }, { status: 422 });
  }
}
