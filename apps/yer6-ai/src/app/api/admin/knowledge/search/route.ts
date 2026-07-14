import { isAccessResponse, requireAdmin } from "@/server/auth/workspace-access";
import { searchSchema } from "@/server/rag/api-schemas";
import { createRAGRuntime } from "@/server/rag/runtime";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;
  const parsed = searchSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "INVALID_SEARCH" }, { status: 400 });
  const { retrieval } = await createRAGRuntime();
  if (!retrieval) return Response.json({ error: "RAG_RETRIEVAL_UNAVAILABLE" }, { status: 503 });
  const { query, limit, ...scope } = parsed.data;
  const matches = await retrieval.search(query, scope, limit);
  return Response.json({ matches });
}
