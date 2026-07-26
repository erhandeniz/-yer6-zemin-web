import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getRuntimeBindings } from "@/server/ai/runtime-bindings";
import {
  createVerificationToken,
  emailSendingConfigured,
  sendVerificationEmail
} from "@/server/auth/email-verification";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({ email: z.string().email().max(254) });

async function rateKey(request: Request): Promise<string> {
  const ip =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "anonymous";
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`resend:${ip}`));
  return `resend:${Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 32)}`;
}

/**
 * Re-sends the verification email for an existing, still-unverified account.
 *
 * Anti-enumeration: the response is ALWAYS the same regardless of whether the
 * address exists or is already verified — no signal about account existence
 * ever leaves this endpoint. Rate limited per IP.
 */
export async function POST(request: Request) {
  const bindings = await getRuntimeBindings();
  if (bindings.AI_RATE_LIMITER) {
    const { success } = await bindings.AI_RATE_LIMITER.limit({ key: await rateKey(request) });
    if (!success) {
      return Response.json({ ok: true }, { status: 429, headers: { "Retry-After": "60" } });
    }
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return Response.json({ ok: true });
  }
  const parsed = schema.safeParse(raw);
  if (!parsed.success || !emailSendingConfigured()) return Response.json({ ok: true });

  const email = parsed.data.email.trim().toLowerCase();
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, emailVerified: true }
    });
    if (user && !user.emailVerified) {
      const link = await createVerificationToken(email);
      await sendVerificationEmail(email, link);
    }
  } catch (error) {
    console.error(
      "[resend-verification] failed:",
      error instanceof Error ? error.message.slice(0, 150) : "unknown"
    );
  }

  // Identical response in every branch.
  return Response.json({ ok: true });
}
