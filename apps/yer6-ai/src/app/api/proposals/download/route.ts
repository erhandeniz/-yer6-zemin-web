import { requireAdmin, isAccessResponse } from "@/server/auth/workspace-access";
import { resolveDownload } from "@/server/proposals/service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Token-gated PDF download. The signed token is the authorization for CLIENT
 * offers (HMAC + TTL + organization + pdf id). INTERNAL cost-analysis PDFs
 * additionally require a live ADMIN session — the token alone is never enough.
 * Invalid, expired or cross-organization tokens resolve to nothing.
 */
export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");
  if (!token) return Response.json({ error: "MISSING_TOKEN" }, { status: 400 });

  const payload = await resolveDownload(token);
  if (!payload) return Response.json({ error: "INVALID_OR_EXPIRED" }, { status: 403 });

  // Internal cost-analysis PDFs must never be reachable without an ADMIN session.
  if (payload.audience === "internal") {
    const access = await requireAdmin();
    if (isAccessResponse(access)) return access;
  }

  return new Response(payload.bytes as unknown as BodyInit, {
    status: 200,
    headers: {
      "Content-Type": payload.contentType,
      "Content-Disposition": `attachment; filename="${payload.fileName}"`,
      "Content-Length": String(payload.bytes.length),
      "Cache-Control": "private, no-store"
    }
  });
}
