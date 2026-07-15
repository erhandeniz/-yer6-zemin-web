import { z } from "zod";
import { guardAdmin } from "@/server/auth/admin-guard";
import { isAccessResponse } from "@/server/auth/workspace-access";
import { organizationId } from "@/server/proposals/org";
import { generateProposalPdfs } from "@/server/proposals/service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

const schema = z.object({
  revision: z.number().int().min(0),
  audiences: z.array(z.enum(["client", "internal"])).min(1).optional(),
  // Language variants; each is stored as a separate, traceable PDF.
  locales: z.array(z.enum(["tr", "en", "ar"])).min(1).optional()
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

  const result = await generateProposalPdfs({
    proposalId,
    revision: parsed.data.revision,
    organizationId: organizationId(),
    actorId: access.user.id,
    audiences: parsed.data.audiences,
    locales: parsed.data.locales
  });

  // A failed / unverified PDF must never be reported as a completed proposal.
  if (!result.ok) {
    return Response.json(
      { ok: false, failureCategory: result.failureCategory, errors: result.errors },
      { status: 422 }
    );
  }
  return Response.json(result, { status: 201 });
}
