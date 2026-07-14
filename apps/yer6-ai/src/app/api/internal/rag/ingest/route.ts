import { z } from "zod";
import { validIngestionSecret } from "@/server/rag/ingestion-dispatcher";
import { createRAGAdminRuntime } from "@/server/rag/runtime";

export const runtime = "nodejs";
export const maxDuration = 300;

const payloadSchema = z.object({ documentId: z.string().trim().min(1).max(100) });

export async function POST(request: Request) {
  if (!validIngestionSecret(request, process.env.RAG_INGESTION_SECRET?.trim())) {
    return Response.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }
  const parsed = payloadSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "INVALID_DOCUMENT" }, { status: 400 });
  const { ingestion } = await createRAGAdminRuntime();
  if (!ingestion) return Response.json({ error: "RAG_INGESTION_UNAVAILABLE" }, { status: 503 });
  try {
    return Response.json(await ingestion.ingest(parsed.data.documentId));
  } catch {
    return Response.json({ error: "RAG_INGESTION_FAILED" }, { status: 422 });
  }
}
