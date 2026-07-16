import type { Session } from "next-auth";
import { requireAdmin } from "@/server/auth/workspace-access";
import { getRuntimeBindings } from "@/server/ai/runtime-bindings";

/**
 * Hardened guard for admin write/seed/import/reindex endpoints.
 *
 * Layers, in order:
 *   1. Demo lockout — demo traffic (header or NEXT_PUBLIC_DEMO_MODE) can never
 *      reach these endpoints, even if somehow authenticated.
 *   2. Authorization — must be an ADMIN session (delegated to requireAdmin,
 *      which itself rejects anonymous access).
 *   3. Rate limiting — mutations are throttled via the shared rate limiter so a
 *      compromised/automated admin token cannot hammer seed/import.
 */
export function isDemoRequest(request: Request) {
  return (
    request.headers.get("x-yer6-demo") === "true" ||
    process.env.NEXT_PUBLIC_DEMO_MODE === "true"
  );
}

async function adminRateKey(request: Request, userId: string) {
  const ip =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "anonymous";
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(`admin:${userId}:${ip}`)
  );
  const hash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  return `admin:${hash.slice(0, 32)}`;
}

export async function guardAdmin(
  request: Request,
  options: { rateLimit?: boolean } = {}
): Promise<Session | Response> {
  if (isDemoRequest(request)) {
    return Response.json({ error: "FORBIDDEN_IN_DEMO" }, { status: 403 });
  }

  const access = await requireAdmin();
  if (access instanceof Response) return access;

  if (options.rateLimit) {
    const bindings = await getRuntimeBindings();
    if (bindings.AI_RATE_LIMITER) {
      const key = await adminRateKey(request, access.user.id);
      const { success } = await bindings.AI_RATE_LIMITER.limit({ key });
      if (!success) {
        return Response.json({ error: "RATE_LIMITED" }, { status: 429, headers: { "Retry-After": "60" } });
      }
    }
  }

  return access;
}
