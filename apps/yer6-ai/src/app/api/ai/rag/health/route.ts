import { createRAGRuntime } from "@/server/rag/runtime";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const { config, state, retrieval } = await createRAGRuntime();
  return Response.json({
    service: "yer6-rag",
    enabled: config.enabled,
    ready: Boolean(retrieval),
    providers: state.providers,
    timestamp: new Date().toISOString()
  }, {
    status: config.enabled && !retrieval ? 503 : 200,
    headers: { "Cache-Control": "no-store" }
  });
}
