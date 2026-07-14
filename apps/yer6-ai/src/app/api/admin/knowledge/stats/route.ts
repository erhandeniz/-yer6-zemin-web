import { isAccessResponse, requireAdmin } from "@/server/auth/workspace-access";
import { createRAGAdminRuntime } from "@/server/rag/runtime";

export const runtime = "nodejs";

export async function GET() {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;
  const state = await createRAGAdminRuntime();
  if (!state.repository) return Response.json({ error: "RAG_METADATA_UNAVAILABLE" }, { status: 503 });
  const stats = await state.repository.stats();
  return Response.json({
    ...stats,
    layers: {
      storage: state.config.storageProvider,
      parser: state.config.parserProvider,
      metadata: state.config.metadataProvider,
      embedding: state.config.embeddingProvider,
      vector: state.config.vectorProvider,
      retrieval: state.retrieval ? "ready" : state.config.enabled ? "unavailable" : "disabled"
    }
  });
}
