import { guardAdmin } from "@/server/auth/admin-guard";
import { isAccessResponse } from "@/server/auth/workspace-access";
import { organizationId } from "@/server/proposals/org";
import { createProposalSchema, toDraft } from "@/server/proposals/api-schema";
import { createProposal, listProposals } from "@/server/proposals/service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function GET(request: Request) {
  const access = await guardAdmin(request);
  if (isAccessResponse(access)) return access;
  const url = new URL(request.url);
  const proposals = await listProposals({
    organizationId: organizationId(),
    limit: Number.parseInt(url.searchParams.get("limit") ?? "50", 10) || 50,
    status: url.searchParams.get("status") || undefined
  });
  return Response.json({ proposals });
}

export async function POST(request: Request) {
  const access = await guardAdmin(request, { rateLimit: true });
  if (isAccessResponse(access)) return access;
  const parsed = createProposalSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return Response.json({ error: "INVALID_PROPOSAL", issues: parsed.error.issues }, { status: 400 });
  }
  const result = await createProposal({
    organizationId: organizationId(),
    projectId: parsed.data.projectId ?? null,
    actorId: access.user.id,
    draft: toDraft(parsed.data.draft)
  });
  return Response.json(result, { status: 201 });
}
