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

/**
 * Normalizes a configured sender into `Name <a@b.tld>` / `a@b.tld`.
 * Tolerates values pasted with markdown link syntax, mailto: prefixes, quotes
 * or stray whitespace — a malformed secret previously caused a silent 422.
 */
export function normalizeFromAddress(raw: string | undefined): string | null {
  if (!raw) return null;
  let value = raw.trim().replace(/^["']|["']$/g, "");
  const markdown = value.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
  if (markdown) value = markdown[1].trim();
  value = value.replace(/mailto:/gi, "").split("?")[0].trim();

  const named = value.match(/^(.*?)<\s*([^<>\s]+@[^<>\s]+\.[^<>\s]+)\s*>$/);
  if (named) {
    const name = named[1].trim().replace(/[<>"]/g, "");
    return name ? `${name} <${named[2]}>` : named[2];
  }
  const bare = value.match(/[^\s<>]+@[^\s<>]+\.[^\s<>]+/);
  return bare ? bare[0] : null;
}

/** True when an email provider is configured (UI/policy can rely on this). */
export function emailSendingConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && normalizeFromAddress(process.env.EMAIL_FROM));
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
        from: normalizeFromAddress(process.env.EMAIL_FROM) ?? "",
        to: [email],
        // Kurumsal yanıt adresi: doğrulama postasını yanıtlayan müşteri
        // doğrudan firmaya ulaşsın.
        ...(normalizeFromAddress(process.env.EMAIL_REPLY_TO)
          ? { reply_to: normalizeFromAddress(process.env.EMAIL_REPLY_TO) }
          : {}),
        subject: "YER6 AI — E-posta adresinizi doğrulayın",
        text: `YER6 AI hesabınızı etkinleştirmek için bu bağlantıyı açın (24 saat geçerlidir):\n${link}\n\nBu kaydı siz yapmadıysanız bu iletiyi yok sayabilirsiniz.\n\nYER6 Zemin Güçlendirme Geoteknik Mühendislik\nwww.yer6zemin.com.tr`,
        html: `<div style="margin:0;padding:24px;background:#f4f4f5;font-family:system-ui,-apple-system,Segoe UI,Arial,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#0b0b0b;border-radius:12px;overflow:hidden">
    <tr><td style="height:4px;background:#e2b54c"></td></tr>
    <tr><td style="padding:32px 32px 8px">
      <p style="margin:0 0 4px;font-size:20px;font-weight:700;color:#e2b54c;letter-spacing:.02em">YER6 AI</p>
      <p style="margin:0 0 24px;font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:#8a8a8a">Geoteknik Mühendislik Zekâsı</p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#eaeaea">Merhaba,</p>
      <p style="margin:0 0 24px;font-size:15px;line-height:1.65;color:#c9c9c9">YER6 AI çalışma alanı hesabınızı etkinleştirmek için aşağıdaki butona tıklayın. Bağlantı <strong style="color:#eaeaea">24 saat</strong> geçerlidir ve yalnızca bir kez kullanılabilir.</p>
      <p style="margin:0 0 28px"><a href="${link}" style="display:inline-block;background:#e2b54c;color:#111;padding:13px 26px;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px">E-postamı doğrula</a></p>
      <p style="margin:0 0 6px;font-size:12px;color:#7a7a7a">Buton çalışmazsa bu adresi tarayıcınıza yapıştırın:</p>
      <p style="margin:0 0 28px;font-size:11px;color:#5f5f5f;word-break:break-all">${link}</p>
    </td></tr>
    <tr><td style="padding:20px 32px 28px;border-top:1px solid rgba(255,255,255,.07)">
      <p style="margin:0 0 8px;font-size:12px;color:#8a8a8a">Bu kaydı siz yapmadıysanız bu iletiyi yok sayabilirsiniz; hesap etkinleşmez.</p>
      <p style="margin:0;font-size:12px;line-height:1.6;color:#6f6f6f">YER6 Zemin Güçlendirme Geoteknik Mühendislik<br />Gölbaşı / Ankara · <a href="https://www.yer6zemin.com.tr" style="color:#b98f3c;text-decoration:none">www.yer6zemin.com.tr</a></p>
    </td></tr>
  </table>
</div>`
      })
    });
    if (!response.ok) {
      // Surface the provider's reason (domain not verified, bad from-address,
      // sandbox restriction...) so `wrangler tail` shows WHY mail is missing.
      const detail = await response.text().catch(() => "");
      console.error(
        `[verify-email] provider rejected ${response.status}: ${detail.slice(0, 300)}`
      );
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
