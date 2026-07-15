import { guardAdmin } from "@/server/auth/admin-guard";
import { isAccessResponse } from "@/server/auth/workspace-access";
import { organizationId } from "@/server/proposals/org";
import { getProposalDetail } from "@/server/proposals/service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  context: { params: Promise<{ proposalId: string }> }
) {
  const access = await guardAdmin(request);
  if (isAccessResponse(access)) return access;
  const { proposalId } = await context.params;
  const detail = await getProposalDetail({ organizationId: organizationId(), proposalId });
  if (!detail) return Response.json({ error: "NOT_FOUND" }, { status: 404 });
  return Response.json(detail);
}
