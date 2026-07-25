import { prisma } from "@/lib/prisma";

/**
 * ADMIN-configurable registration policy, stored in AppSetting under
 * "registration.policy". Safe defaults apply when the row is missing.
 * Emergency kill-switch: env REGISTRATION_DISABLED="true" closes registration
 * regardless of the stored policy (no deploy needed to stop abuse).
 */
export const REGISTRATION_POLICY_KEY = "registration.policy";

export type RegistrationPolicy = {
  open: boolean;
  /** "off" (default; no email provider configured) or "required". */
  emailVerification: "off" | "required";
  /** "immediate" (default). "approval" is reserved for a later release. */
  activation: "immediate" | "approval";
  /** Role assigned to self-registered users. Restricted to safe roles. */
  defaultRole: "MEMBER" | "VIEWER";
  /** Optional allow-list of email domains (empty = all domains allowed). */
  allowedDomains: string[];
};

export const DEFAULT_REGISTRATION_POLICY: RegistrationPolicy = {
  open: true,
  emailVerification: "off",
  activation: "immediate",
  defaultRole: "MEMBER",
  allowedDomains: []
};

function sanitize(raw: unknown): RegistrationPolicy {
  const value = (raw ?? {}) as Partial<RegistrationPolicy>;
  return {
    open: typeof value.open === "boolean" ? value.open : DEFAULT_REGISTRATION_POLICY.open,
    emailVerification: value.emailVerification === "required" ? "required" : "off",
    activation: value.activation === "approval" ? "approval" : "immediate",
    defaultRole: value.defaultRole === "VIEWER" ? "VIEWER" : "MEMBER",
    allowedDomains: Array.isArray(value.allowedDomains)
      ? value.allowedDomains.filter((d): d is string => typeof d === "string").map((d) => d.toLowerCase())
      : []
  };
}

export async function getRegistrationPolicy(): Promise<RegistrationPolicy> {
  if (process.env.REGISTRATION_DISABLED === "true") {
    return { ...DEFAULT_REGISTRATION_POLICY, open: false };
  }
  if (!process.env.DATABASE_URL) return { ...DEFAULT_REGISTRATION_POLICY };
  try {
    const row = await prisma.appSetting.findUnique({ where: { key: REGISTRATION_POLICY_KEY } });
    return sanitize(row?.value);
  } catch {
    // On read failure fail CLOSED for writes but report closed to the UI —
    // never let a DB outage silently open unintended registration behaviour.
    return { ...DEFAULT_REGISTRATION_POLICY, open: false };
  }
}

export function emailDomainAllowed(email: string, policy: RegistrationPolicy): boolean {
  if (policy.allowedDomains.length === 0) return true;
  const domain = email.split("@")[1]?.toLowerCase() ?? "";
  return policy.allowedDomains.includes(domain);
}
