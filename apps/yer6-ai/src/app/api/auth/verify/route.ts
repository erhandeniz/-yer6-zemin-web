import { consumeVerificationToken } from "@/server/auth/email-verification";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Email verification landing endpoint. Consumes a single-use token and sends
 * the user to /login with a status flag (no token echoed back in the URL).
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token") ?? "";
  const email = url.searchParams.get("email") ?? "";
  const base = url.origin;

  if (!token || !email) {
    return Response.redirect(`${base}/login?verified=0`, 302);
  }

  const result = await consumeVerificationToken(token, email);
  return Response.redirect(`${base}/login?verified=${result.ok ? "1" : "0"}`, 302);
}
