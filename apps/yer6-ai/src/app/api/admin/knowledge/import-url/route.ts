import { z } from "zod";
import { isAccessResponse } from "@/server/auth/workspace-access";
import { guardAdmin } from "@/server/auth/admin-guard";
import { KNOWLEDGE_CATEGORIES } from "@/lib/rag/catalog";
import { createRAGAdminRuntime } from "@/server/rag/runtime";
import { importYer6Url } from "@/server/rag/website-import";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

const importSchema = z.object({
  urls: z.array(z.string().trim().url().max(2_000)).min(1).max(10),
  category: z.enum(KNOWLEDGE_CATEGORIES).optional(),
  language: z.string().trim().max(8).optional(),
  section: z.string().trim().max(80).optional()
});

/**
 * Import public YER6 website pages into the permanent company knowledge base.
 * ADMIN only, demo-denied and rate-limited (guardAdmin). Batches are capped at
 * 10 URLs; import the full sitemap by calling this repeatedly. Refuses private
 * admin/auth routes and non-YER6 hosts (enforced in importYer6Url).
 */
export async function POST(request: Request) {
  const access = await guardAdmin(request, { rateLimit: true });
  if (isAccessResponse(access)) return access;

  const parsed = importSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "INVALID_IMPORT" }, { status: 400 });

  const rag = await createRAGAdminRuntime();
  if (!rag.state.ingestionReady) {
    return Response.json({ error: "RAG_INGESTION_UNAVAILABLE", missing: rag.state.ingestionMissing }, { status: 503 });
  }

  const results = [];
  for (const url of parsed.data.urls) {
    results.push(
      await importYer6Url(rag, {
        url,
        category: parsed.data.category,
        language: parsed.data.language,
        section: parsed.data.section
      })
    );
  }

  const summary = results.reduce(
    (acc, r) => ({ ...acc, [r.status]: (acc[r.status] ?? 0) + 1 }),
    {} as Record<string, number>
  );
  return Response.json({ summary, results }, { status: 201 });
}
