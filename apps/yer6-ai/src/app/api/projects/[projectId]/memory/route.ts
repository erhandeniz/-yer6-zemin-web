import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";
import { isAccessResponse, requireWorkspaceUser } from "@/server/auth/workspace-access";
import { memorySchema } from "@/server/rag/api-schemas";

export const runtime = "nodejs";
type Context = { params: Promise<{ projectId: string }> };

async function authorizedProject(projectId: string, userId: string, role: string) {
  return prisma.project.findFirst({
    where: role === "ADMIN" ? { id: projectId } : { id: projectId, ownerId: userId },
    select: { id: true }
  });
}

export async function GET(request: Request, context: Context) {
  const access = await requireWorkspaceUser();
  if (isAccessResponse(access)) return access;
  const { projectId } = await context.params;
  if (!await authorizedProject(projectId, access.user.id, access.user.role)) {
    return Response.json({ error: "PROJECT_NOT_FOUND" }, { status: 404 });
  }
  const url = new URL(request.url);
  const limit = Math.min(100, Math.max(1, Number.parseInt(url.searchParams.get("limit") ?? "50", 10) || 50));
  const records = await prisma.memoryRecord.findMany({
    where: { scope: "PROJECT", projectId },
    orderBy: { updatedAt: "desc" },
    take: limit
  });
  return Response.json({ records });
}

export async function POST(request: Request, context: Context) {
  const access = await requireWorkspaceUser();
  if (isAccessResponse(access)) return access;
  const { projectId } = await context.params;
  if (!await authorizedProject(projectId, access.user.id, access.user.role)) {
    return Response.json({ error: "PROJECT_NOT_FOUND" }, { status: 404 });
  }
  const parsed = memorySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "INVALID_MEMORY" }, { status: 400 });
  const { structuredData, ...value } = parsed.data;
  const record = await prisma.memoryRecord.create({
    data: {
      ...value,
      structuredData: structuredData as Prisma.InputJsonValue | undefined,
      scope: "PROJECT",
      projectId,
      createdById: access.user.id === "local-admin" ? undefined : access.user.id
    }
  });
  return Response.json({ record }, { status: 201 });
}
