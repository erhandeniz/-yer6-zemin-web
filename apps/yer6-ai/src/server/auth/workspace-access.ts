import type { Session } from "next-auth";

async function session() {
  const [{ getServerSession }, { authOptions }] = await Promise.all([
    import("next-auth"),
    import("@/lib/auth")
  ]);
  return getServerSession(authOptions).catch(() => null);
}

function localBypassAllowed() {
  return process.env.NODE_ENV !== "production" && process.env.ADMIN_API_DEV_BYPASS === "true";
}

export async function requireWorkspaceUser(): Promise<Session | Response> {
  const current = await session();
  if (current?.user?.id) return current;
  if (localBypassAllowed()) {
    return { user: { id: "local-admin", role: "ADMIN", name: "Local Admin" }, expires: "" };
  }
  return Response.json({ error: "UNAUTHORIZED" }, { status: 401 });
}

export async function requireAdmin(): Promise<Session | Response> {
  const current = await requireWorkspaceUser();
  if (current instanceof Response) return current;
  if (current.user.role === "ADMIN") return current;
  return Response.json({ error: "FORBIDDEN" }, { status: 403 });
}

export function isAccessResponse(value: Session | Response): value is Response {
  return value instanceof Response;
}
