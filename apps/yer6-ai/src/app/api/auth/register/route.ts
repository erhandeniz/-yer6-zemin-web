import { z } from "zod";
import { getRuntimeBindings } from "@/server/ai/runtime-bindings";
import { getRegistrationPolicy } from "@/server/auth/registration-policy";
import { registerUser } from "@/server/auth/registration";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 16 * 1024;

const registerSchema = z.object({
  firstName: z.string().min(1).max(80),
  lastName: z.string().min(1).max(80),
  email: z.string().email().max(254),
  password: z.string().min(1).max(128),
  passwordConfirm: z.string().min(1).max(128),
  companyName: z.string().min(2).max(160),
  jobTitle: z.string().min(1).max(120),
  country: z.string().min(1).max(80),
  city: z.string().min(1).max(80),
  phone: z.string().max(32).optional().or(z.literal("")),
  acceptTerms: z.literal(true),
  locale: z.enum(["tr", "en", "ar"]).optional(),
  /** Honeypot — real users never fill this hidden field. */
  website: z.string().max(0).optional().or(z.literal(""))
});

async function ipRateKey(request: Request): Promise<string> {
  const ip =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "anonymous";
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`register:${ip}`));
  const hash = Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
  return `register:${hash.slice(0, 32)}`;
}

/** Public, safe policy probe for the login screen (no sensitive data). */
export async function GET() {
  const policy = await getRegistrationPolicy();
  return Response.json({
    open: policy.open,
    verificationRequired: policy.emailVerification === "required"
  });
}

export async function POST(request: Request) {
  const contentLength = Number.parseInt(request.headers.get("content-length") ?? "0", 10);
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return Response.json({ ok: false, code: "invalid" }, { status: 413 });
  }

  // Per-IP rate limiting (shared Workers rate-limit binding, register: prefix).
  const bindings = await getRuntimeBindings();
  if (bindings.AI_RATE_LIMITER) {
    const { success } = await bindings.AI_RATE_LIMITER.limit({ key: await ipRateKey(request) });
    if (!success) {
      return Response.json(
        { ok: false, code: "rate_limited" },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return Response.json({ ok: false, code: "invalid" }, { status: 400 });
  }

  const parsed = registerSchema.safeParse(raw);
  if (!parsed.success) {
    return Response.json({ ok: false, code: "invalid" }, { status: 400 });
  }
  const data = parsed.data;

  // Honeypot tripped → pretend success, create nothing (bot gets no signal).
  if (data.website && data.website.length > 0) {
    return Response.json({ ok: true, created: true, verificationRequired: false });
  }

  if (data.password !== data.passwordConfirm) {
    return Response.json({ ok: false, code: "password_mismatch" }, { status: 400 });
  }

  const result = await registerUser({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    companyName: data.companyName,
    jobTitle: data.jobTitle,
    country: data.country,
    city: data.city,
    phone: data.phone || undefined,
    locale: data.locale
  });

  if (!result.ok) {
    const status = result.code === "registration_closed" ? 403 : 400;
    return Response.json(result, { status });
  }
  return Response.json(result);
}
