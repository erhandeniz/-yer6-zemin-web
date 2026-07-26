import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { writeAudit } from "@/server/audit/audit";
import { emailDomainAllowed, getRegistrationPolicy } from "@/server/auth/registration-policy";
import {
  createVerificationToken,
  emailSendingConfigured,
  sendVerificationEmail
} from "@/server/auth/email-verification";

export type RegistrationInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  companyName: string;
  jobTitle: string;
  country: string;
  city: string;
  phone?: string;
  locale?: string;
};

export type RegistrationResult =
  | { ok: true; created: boolean; verificationRequired: boolean }
  | {
      ok: false;
      code: "registration_closed" | "domain_not_allowed" | "weak_password" | "invalid" | "unavailable";
    };

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/** Strong password policy: ≥12 chars, at least one letter and one digit. */
export function passwordMeetsPolicy(password: string): boolean {
  return (
    typeof password === "string" &&
    password.length >= 12 &&
    password.length <= 128 &&
    /[a-zA-ZçğıöşüÇĞİÖŞÜ]/.test(password) &&
    /\d/.test(password)
  );
}

function slugify(value: string): string {
  const map: Record<string, string> = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u" };
  const base = value
    .toLowerCase()
    .replace(/[çğıöşü]/g, (ch) => map[ch] ?? ch)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
  return base || "firma";
}

function randomSuffix(): string {
  const buf = new Uint8Array(3);
  crypto.getRandomValues(buf);
  return Array.from(buf, (b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Registers a user + their company workspace (organization).
 *
 * Anti-enumeration: when the email already exists we return the SAME success
 * shape as a fresh registration (created:false internally, message identical
 * on the client). No "this email is taken" signal ever leaves the API.
 */
export async function registerUser(input: RegistrationInput): Promise<RegistrationResult> {
  const policy = await getRegistrationPolicy();
  if (!policy.open) return { ok: false, code: "registration_closed" };

  const email = normalizeEmail(input.email);
  if (!email || email.length > 254 || !email.includes("@")) return { ok: false, code: "invalid" };
  if (!emailDomainAllowed(email, policy)) return { ok: false, code: "domain_not_allowed" };
  if (!passwordMeetsPolicy(input.password)) return { ok: false, code: "weak_password" };

  const firstName = input.firstName.trim();
  const lastName = input.lastName.trim();
  const companyName = input.companyName.trim();
  if (!firstName || !lastName || !companyName) return { ok: false, code: "invalid" };

  const existing = await prisma.user.findUnique({ where: { email }, select: { id: true } });
  if (existing) {
    // Identical outward result — prevents account enumeration.
    return { ok: true, created: false, verificationRequired: policy.emailVerification === "required" };
  }

  // Cost 8: bcryptjs is pure JS; cost 10 exceeded the Workers CPU budget on
  // mobile requests (live Error 1102). Follow-up: migrate to WebCrypto PBKDF2
  // (native) to restore a higher work factor without the CPU ceiling.
  const passwordHash = await hash(input.password, 8);
  const slug = `${slugify(companyName)}-${randomSuffix()}`;

  try {
    const organization = await prisma.organization.create({
      data: { name: companyName, slug }
    });

    const user = await prisma.user.create({
      data: {
        name: `${firstName} ${lastName}`,
        email,
        passwordHash,
        role: policy.defaultRole,
        organizationId: organization.id,
        title: input.jobTitle.trim() || null,
        phone: input.phone?.trim() || null,
        country: input.country.trim() || null,
        city: input.city.trim() || null,
        locale: input.locale || null,
        emailVerified: policy.emailVerification === "off" ? new Date() : null
      },
      select: { id: true }
    });

    await prisma.organization.update({
      where: { id: organization.id },
      data: { createdById: user.id }
    });

    void writeAudit({
      action: "ORG_CREATED",
      entity: "Organization",
      entityId: organization.id,
      userId: user.id,
      metadata: { slug }
    });
    void writeAudit({
      action: "USER_REGISTERED",
      entity: "User",
      entityId: user.id,
      userId: user.id,
      metadata: { organizationId: organization.id, role: policy.defaultRole }
    });

    // Email verification: issue a single-use token and send it when an email
    // provider is configured. Failures never block registration — the admin
    // roster shows the account as "Pending verification".
    if (policy.emailVerification === "required" || emailSendingConfigured()) {
      let delivered = false;
      try {
        const link = await createVerificationToken(email);
        delivered = await sendVerificationEmail(email, link);
      } catch (error) {
        console.error(
          "[register] verification dispatch failed:",
          error instanceof Error ? error.message.slice(0, 150) : "unknown"
        );
      }
      // LOCKOUT GUARD: if the verification mail could NOT be delivered, never
      // leave the account gated behind an email that will never arrive —
      // activate it instead and tell the caller no verification is pending.
      if (!delivered) {
        console.error("[register] verification email not delivered — activating account instead");
        await prisma.user
          .update({ where: { email }, data: { emailVerified: new Date() } })
          .catch(() => undefined);
        return { ok: true, created: true, verificationRequired: false };
      }
    }
  } catch (error) {
    // HONESTY GUARD: if the organization/user write fails, the account does
    // NOT exist — returning success here would create a "phantom
    // registration" (user believes they signed up, can never log in).
    // Report a truthful, retryable failure instead. No secrets in the log.
    console.error(
      "[register] persistence failed:",
      error instanceof Error ? error.message.slice(0, 200) : "unknown"
    );
    return { ok: false, code: "unavailable" };
  }

  return { ok: true, created: true, verificationRequired: policy.emailVerification === "required" };
}
