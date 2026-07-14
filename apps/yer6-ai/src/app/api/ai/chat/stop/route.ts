import { stopAIRequest } from "@/server/ai/request-registry";
import { stopPayloadSchema } from "@/server/ai/security";
import { isAccessResponse, requireWorkspaceUser } from "@/server/auth/workspace-access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (process.env.AUTH_REQUIRED === "true") {
    const access = await requireWorkspaceUser();
    if (isAccessResponse(access)) return access;
  }

  const payload = stopPayloadSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return Response.json({ status: "invalid_request" }, { status: 400 });
  }

  const stopped = stopAIRequest(payload.data.requestId);
  return Response.json({ status: stopped ? "stopped" : "acknowledged", stopped });
}
