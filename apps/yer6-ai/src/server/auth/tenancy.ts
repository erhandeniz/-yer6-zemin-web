import type { Session } from "next-auth";
import { prisma } from "@/lib/prisma";

/**
 * Central tenant/object authorization helpers (RELEASE 1 foundation).
 *
 * Design rules:
 * - Object-level checks query WITH the ownership predicate — a foreign record
 *   behaves exactly like a missing record (404 semantics, no IDOR probing).
 * - Privileged roles (ADMIN, SUPER_ADMIN) may cross user boundaries; their
 *   access is expected to be audited by the calling route where sensitive.
 * - DEMO role and demo requests can never touch tenant records.
 */
export type SessionLike = Pick<Session, "user">;

export const PRIVILEGED_ROLES = new Set(["ADMIN", "SUPER_ADMIN"]);

export function isPrivileged(role: string | undefined | null): boolean {
  return !!role && PRIVILEGED_ROLES.has(role);
}

export function isDemoActor(session: SessionLike | null): boolean {
  const role = session?.user?.role;
  return role === "DEMO" || session?.user?.id === "demo-engineer";
}

/** True when this actor may read the given project; never throws. */
export async function canAccessProject(
  session: SessionLike | null,
  projectId: string
): Promise<boolean> {
  const userId = session?.user?.id;
  if (!userId || !projectId || isDemoActor(session)) return false;
  const where = isPrivileged(session?.user?.role)
    ? { id: projectId }
    : { id: projectId, ownerId: userId };
  const project = await prisma.project.findFirst({ where, select: { id: true } });
  return Boolean(project);
}

/** True when this actor may read the given conversation. */
export async function canAccessConversation(
  session: SessionLike | null,
  conversationId: string
): Promise<boolean> {
  const userId = session?.user?.id;
  if (!userId || !conversationId || isDemoActor(session)) return false;
  const where = isPrivileged(session?.user?.role)
    ? { id: conversationId }
    : { id: conversationId, userId };
  const conversation = await prisma.conversation.findFirst({ where, select: { id: true } });
  return Boolean(conversation);
}

/** True when this actor may read a document (via its project's owner). */
export async function canAccessDocument(
  session: SessionLike | null,
  documentId: string
): Promise<boolean> {
  const userId = session?.user?.id;
  if (!userId || !documentId || isDemoActor(session)) return false;
  const where = isPrivileged(session?.user?.role)
    ? { id: documentId }
    : { id: documentId, project: { ownerId: userId } };
  const document = await prisma.document.findFirst({ where, select: { id: true } });
  return Boolean(document);
}

/** Only the user themselves (or a privileged admin) may update a profile. */
export function canUpdateUserProfile(
  session: SessionLike | null,
  targetUserId: string
): boolean {
  const userId = session?.user?.id;
  if (!userId || !targetUserId || isDemoActor(session)) return false;
  return userId === targetUserId || isPrivileged(session?.user?.role);
}

/** Same-organization check for company-scoped records (e.g. proposals). */
export function canAccessOrganization(
  session: SessionLike | null,
  organizationId: string | null | undefined
): boolean {
  if (!organizationId || isDemoActor(session)) return false;
  if (isPrivileged(session?.user?.role)) return true;
  return session?.user?.organizationId === organizationId;
}
