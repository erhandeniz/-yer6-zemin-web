import { z } from "zod";
import { guardAdmin } from "@/server/auth/admin-guard";
import { isAccessResponse } from "@/server/auth/workspace-access";
import { organizationId } from "@/server/proposals/org";
import { draftSchema, toDraft } from "@/server/proposals/api-schema";
import { reviseProposal } from "@/server/proposals/service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

const schema = z.object({
  reason: z.string().trim().min(1).max(2000),
  changes: draftSchema.partial()
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

  const result = await reviseProposal({
    proposalId,
    organizationId: organizationId(),
    reason: parsed.data.reason,
    changes: toDraft(parsed.data.changes as never),
    actorId: access.user.id
  });
  if (!result.ok) return Response.json({ ok: false, error: result.error }, { status: 400 });
  return Response.json({ ok: true, revision: result.revision, revisionId: result.revisionId }, { status: 201 });
}
