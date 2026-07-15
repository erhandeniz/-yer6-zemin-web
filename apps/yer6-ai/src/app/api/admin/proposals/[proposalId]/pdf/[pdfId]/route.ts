import { guardAdmin } from "@/server/auth/admin-guard";
import { isAccessResponse } from "@/server/auth/workspace-access";
import { organizationId } from "@/server/proposals/org";
import { issueDownloadToken } from "@/server/proposals/service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Issue a short-lived signed download URL for a verified PDF (org-scoped). */
export async function GET(
  request: Request,
  context: { params: Promise<{ proposalId: string; pdfId: string }> }
) {
  const access = await guardAdmin(request);
  if (isAccessResponse(access)) return access;
  const { pdfId } = await context.params;
  const issued = await issueDownloadToken({
    organizationId: organizationId(),
    pdfId,
    actorId: access.user.id,
    ttlSeconds: 600
  });
  if (!issued) return Response.json({ error: "NOT_FOUND_OR_UNVERIFIED" }, { status: 404 });

  const base = process.env.NEXT_PUBLIC_APP_URL || process.env.NEXTAUTH_URL || "";
  const downloadUrl = `${base.replace(/\/$/, "")}/api/proposals/download?token=${encodeURIComponent(
    issued.token
  )}`;
  return Response.json({ downloadUrl, fileName: issued.fileName, expiresInSeconds: 600 });
}
