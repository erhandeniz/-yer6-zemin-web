import { isAccessResponse, requireAdmin } from "@/server/auth/workspace-access";
import { createRAGAdminRuntime } from "@/server/rag/runtime";

export const runtime = "nodejs";
export const maxDuration = 300;

export async function POST() {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;

  const runtime = await createRAGAdminRuntime();
  const { ingestion, repository, bindings } = runtime;

  if (!ingestion || !repository || !bindings.RAG_DOCUMENTS) {
    return Response.json(
      { error: "RAG_INGESTION_UNAVAILABLE", ready: runtime.state.ingestionReady },
      { status: 503 }
    );
  }

  interface R2BucketWithList {
    list(options?: { cursor?: string }): Promise<{
      objects: Array<{ key: string; size: number }>;
      truncated: boolean;
      cursor?: string;
    }>;
  }

  try {
    const bucket = bindings.RAG_DOCUMENTS as unknown as R2BucketWithList;
    let cursor: string | undefined = undefined;
    const pdfObjects: Array<{ key: string; size: number }> = [];

    do {
      const result: { objects: Array<{ key: string; size: number }>; truncated: boolean; cursor?: string } = await bucket.list({ cursor });
      if (result && Array.isArray(result.objects)) {
        for (const obj of result.objects) {
          if (obj.key.toLowerCase().endsWith(".pdf")) {
            pdfObjects.push({ key: obj.key, size: obj.size });
          }
        }
      }
      cursor = result?.truncated ? result.cursor : undefined;
    } while (cursor);

    const results = [];

    for (const obj of pdfObjects) {
      // Find document by storage key
      const { prisma } = await import("@/lib/prisma");
      let documentRecord = await prisma.knowledgeDocument.findFirst({
        where: { storageKey: obj.key }
      });

      if (!documentRecord) {
        // Create document record if missing
        const newDoc = await repository.createDocument({
          name: obj.key.split("/").pop() || obj.key,
          extension: "pdf",
          mimeType: "application/pdf",
          size: obj.size,
          category: "YER6 Projeleri",
          scope: "company",
          storageProvider: "r2",
          storageKey: obj.key,
          contentIndexingAllowed: true
        });
        documentRecord = await prisma.knowledgeDocument.findUnique({
          where: { id: newDoc.id }
        });
      }

      if (documentRecord) {
        try {
          const ingestResult = await ingestion.ingest(documentRecord.id);
          results.push({ key: obj.key, ...ingestResult });
        } catch (ingestError: unknown) {
          const message = ingestError instanceof Error ? ingestError.message : "INGESTION_ERROR";
          results.push({
            key: obj.key,
            status: "FAILED",
            error: message
          });
        }
      }
    }

    return Response.json({ count: pdfObjects.length, results });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "UNKNOWN_ERROR";
    return Response.json(
      { error: "REINDEX_FAILED", message },
      { status: 500 }
    );
  }
}
