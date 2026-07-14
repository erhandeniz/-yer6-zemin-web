import type { IngestionResult } from "@/server/rag/contracts";
import type { createRAGAdminRuntime } from "@/server/rag/runtime";

type AdminRuntime = Awaited<ReturnType<typeof createRAGAdminRuntime>>;

export function secureIngestionWebhookUrl(value: string | undefined) {
  if (!value) throw new Error("RAG_INGESTION_UNAVAILABLE");
  const url = new URL(value);
  if (url.protocol !== "https:") throw new Error("RAG_INGESTION_WEBHOOK_NOT_SECURE");
  return url;
}

export async function dispatchIngestion(
  runtime: AdminRuntime,
  documentId: string
): Promise<IngestionResult | { documentId: string; status: "QUEUED" }> {
  if (runtime.config.ingestionMode === "webhook") {
    if (!runtime.config.ingestionWebhookUrl || !runtime.config.ingestionSecret) {
      throw new Error("RAG_INGESTION_UNAVAILABLE");
    }
    const response = await fetch(secureIngestionWebhookUrl(runtime.config.ingestionWebhookUrl), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${runtime.config.ingestionSecret}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ documentId })
    });
    if (!response.ok) throw new Error("RAG_INGESTION_DISPATCH_FAILED");
    await runtime.repository?.updateDocument(documentId, { status: "QUEUED" });
    return { documentId, status: "QUEUED" };
  }
  if (!runtime.ingestion) throw new Error("RAG_INGESTION_UNAVAILABLE");
  return runtime.ingestion.ingest(documentId);
}

export function validIngestionSecret(request: Request, expected: string | undefined) {
  const supplied = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  if (!expected || supplied.length !== expected.length) return false;
  let difference = 0;
  for (let index = 0; index < expected.length; index += 1) {
    difference |= supplied.charCodeAt(index) ^ expected.charCodeAt(index);
  }
  return difference === 0;
}
