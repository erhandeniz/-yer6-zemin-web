import { prisma } from "@/lib/prisma";

export type AuditAction =
  | "USER_REGISTERED"
  | "ORG_CREATED"
  | "LOGIN_SUCCESS"
  | "LOGIN_FAILED"
  | "LOGIN_DEMO"
  | "LOGOUT"
  | "PASSWORD_RESET_REQUESTED"
  | "PASSWORD_RESET_COMPLETED"
  | "EMAIL_VERIFIED"
  | "ADMIN_ACCESS"
  | "SETTINGS_UPDATED";

/**
 * Fire-and-forget audit writer. Auditing must NEVER break the user-facing
 * flow: failures (no DATABASE_URL in some environments, transient DB errors)
 * are swallowed after a console note. No secrets or passwords are ever stored;
 * callers pass only safe metadata.
 */
export async function writeAudit(entry: {
  action: AuditAction;
  entity: string;
  entityId?: string | null;
  userId?: string | null;
  metadata?: Record<string, unknown>;
}): Promise<void> {
  if (!process.env.DATABASE_URL) return;
  try {
    await prisma.auditLog.create({
      data: {
        action: entry.action,
        entity: entry.entity,
        entityId: entry.entityId ?? null,
        userId: entry.userId ?? null,
        metadata: (entry.metadata ?? undefined) as never
      }
    });
  } catch (error) {
    console.error("[audit] write failed:", error instanceof Error ? error.message : "unknown");
  }
}
