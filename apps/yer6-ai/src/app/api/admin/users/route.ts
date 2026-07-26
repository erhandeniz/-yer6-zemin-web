import { isAccessResponse } from "@/server/auth/workspace-access";
import { guardAdmin } from "@/server/auth/admin-guard";
import { prisma } from "@/lib/prisma";
import { writeAudit } from "@/server/audit/audit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * ADMIN — registered user roster (who signed up).
 *
 * SUPER_ADMIN/ADMIN see every tenant; the response never includes password
 * hashes or tokens. Reading the roster is an audited admin access event.
 */
export async function GET(request: Request) {
  const access = await guardAdmin(request);
  if (isAccessResponse(access)) return access;

  if (!process.env.DATABASE_URL) {
    return Response.json({ items: [], total: 0, unverified: 0 });
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      take: 200,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        title: true,
        city: true,
        country: true,
        emailVerified: true,
        createdAt: true,
        organization: { select: { id: true, name: true } }
      }
    });

    void writeAudit({
      action: "ADMIN_ACCESS",
      entity: "UserRoster",
      userId: access.user.id,
      metadata: { count: users.length }
    });

    return Response.json({
      items: users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        title: user.title,
        location: [user.city, user.country].filter(Boolean).join(", "),
        organizationName: user.organization?.name ?? null,
        verified: Boolean(user.emailVerified),
        createdAt: user.createdAt
      })),
      total: users.length,
      unverified: users.filter((user) => !user.emailVerified).length
    });
  } catch (error) {
    console.error(
      "[admin/users] query failed:",
      error instanceof Error ? error.message.slice(0, 200) : "unknown"
    );
    return Response.json({ error: "UNAVAILABLE" }, { status: 503 });
  }
}
