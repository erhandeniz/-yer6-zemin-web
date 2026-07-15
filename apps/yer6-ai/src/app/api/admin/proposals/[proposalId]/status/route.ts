import { z } from "zod";
import { guardAdmin } from "@/server/auth/admin-guard";
import { isAccessResponse } from "@/server/auth/workspace-access";
import { organizationId } from "@/server/proposals/org";
import { transitionProposal } from "@/server/proposals/service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  to: z.enum([
    "awaiting_information",
    "calculation_ready",
    "ready_for_review",
    "approved",
    "sent",
    "viewed",
    "accepted",
    "rejected",
    "expired",
    "cancelled",
    "revised"
  ])
});

export async function POST(
  request: Request,
  context: { params: Promise<{ proposalId: string }> }
) {
  const access = await guardAdmin(request, { rateLimit: true });
  if (isAccessResponse(access)) return access;
  const { proposalId } = await context.params;
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "INVALID_REQUEST" }, { status: 400 });

  const result = await transitionProposal({
    proposalId,
    organizationId: organizationId(),
    to: parsed.data.to,
    actorId: access.user.id
  });
  if (!result.ok) {
    const status = result.error === "OFFICIAL_PDF_REQUIRED" ? 409 : 400;
    return Response.json({ ok: false, error: result.error }, { status });
  }
  return Response.json({ ok: true });
}
