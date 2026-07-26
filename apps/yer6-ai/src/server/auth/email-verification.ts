import { prisma } from "@/lib/prisma";
import { writeAudit } from "@/server/audit/audit";

/**
 * Email verification (Package A architecture).
 *
 * Token model: a single-use, 24h token stored in NextAuth's existing
 * VerificationToken table (identifier = normalized email). Only a SHA-256 hash
 * of the token is stored, so a database read cannot be replayed as a valid
 * link. Sending is provider-agnostic: when RESEND_API_KEY is configured the
 * link is emailed via Resend's HTTP API (no extra dependency); otherwise the
 * token is created and the send is skipped honestly — the admin roster shows
 * the account as "Pending verification" and the operator can resend later.
 */
const TOKEN_TTL_MS = 24 * 60 * 60 * 1000;

function randomToken(): string {
  const buf = new Uint8Array(32);
  crypto.getRandomValues(buf);
  return Array.from(buf, (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function hashToken(token: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(token));
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

export function verificationLink(token: string, email: string): string {
  const base = (process.env.NEXT_PUBLIC_APP_URL || "https://ai.yer6zemin.com.tr").replace(/\/$/, "");
  return `${base}/api/auth/verify?token=${token}&email=${encodeURIComponent(email)}`;
}

/** Creates (or refreshes) a verification token and returns the link. */
export async function createVerificationToken(email: string): Promise<string> {
  const token = randomToken();
  const identifier = email.trim().toLowerCase();
  await prisma.verificationToken.deleteMany({ where: { identifier } }).catch(() => undefined);
  await prisma.verificationToken.create({
    data: {
      identifier,
      token: await hashToken(token),
      expires: new Date(Date.now() + TOKEN_TTL_MS)
    }
  });
  return verificationLink(token, identifier);
}

/** True when an email provider is configured (UI/policy can rely on this). */
export function emailSendingConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM);
}

/** Sends the verification email. Never throws; returns whether it was sent. */
export async function sendVerificationEmail(email: string, link: string): Promise<boolean> {
  if (!emailSendingConfigured()) return false;
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM,
        to: [email],
        subject: "YER6 AI — E-posta adresinizi doğrulayın",
        html: `<div style="font-family:system-ui,Segoe UI,Arial,sans-serif;background:#0b0b0b;color:#eaeaea;padding:32px">
  <h2 style="color:#e2b54c;margin:0 0 12px">YER6 AI</h2>
  <p style="margin:0 0 16px;line-height:1.6">Hesabınızı etkinleştirmek için aşağıdaki bağlantıya tıklayın. Bağlantı 24 saat geçerlidir.</p>
  <p style="margin:0 0 24px"><a href="${link}" style="background:#e2b54c;color:#111;padding:12px 20px;border-radius:6px;text-decoration:none;font-weight:600">E-postamı doğrula</a></p>
  <p style="margin:0;font-size:12px;color:#888">Bu kaydı siz yapmadıysanız bu iletiyi yok sayabilirsiniz.</p>
</div>`
      })
    });
    if (!response.ok) {
      console.error("[verify-email] provider rejected:", response.status);
      return false;
    }
    return true;
  } catch (error) {
    console.error(
      "[verify-email] send failed:",
      error instanceof Error ? error.message.slice(0, 150) : "unknown"
    );
    return false;
  }
}

/** Consumes a token and marks the account verified. Single use. */
export async function consumeVerificationToken(
  token: string,
  email: string
): Promise<{ ok: boolean }> {
  const identifier = email.trim().toLowerCase();
  try {
    const hashed = await hashToken(token);
    const record = await prisma.verificationToken.findUnique({ where: { token: hashed } });
    if (!record || record.identifier !== identifier || record.expires.getTime() < Date.now()) {
      return { ok: false };
    }
    await prisma.user.update({
      where: { email: identifier },
      data: { emailVerified: new Date() }
    });
    await prisma.verificationToken.deleteMany({ where: { identifier } }).catch(() => undefined);
    void writeAudit({ action: "EMAIL_VERIFIED", entity: "User", metadata: { identifier } });
    return { ok: true };
  } catch (error) {
    console.error(
      "[verify-email] consume failed:",
      error instanceof Error ? error.message.slice(0, 150) : "unknown"
    );
    return { ok: false };
  }
}
