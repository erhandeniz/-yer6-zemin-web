import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { isAccessResponse, requireAdmin } from "@/server/auth/workspace-access";
import { memorySchema } from "@/server/rag/api-schemas";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;
  const organizationId = new URL(request.url).searchParams.get("organizationId")
    || process.env.YER6_ORGANIZATION_ID;
  if (!organizationId) return Response.json({ error: "ORGANIZATION_REQUIRED" }, { status: 400 });
  const records = await prisma.memoryRecord.findMany({
    where: { scope: "COMPANY", organizationId },
    orderBy: { updatedAt: "desc" },
    take: 100
  });
  return Response.json({ records });
}

export async function POST(request: Request) {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;
  const parsed = memorySchema.extend({ organizationId: z.string().trim().min(1).max(100).optional() })
    .safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "INVALID_MEMORY" }, { status: 400 });
  const { organizationId: inputOrganizationId, structuredData, ...value } = parsed.data;
  const organizationId = inputOrganizationId || process.env.YER6_ORGANIZATION_ID;
  if (!organizationId) return Response.json({ error: "ORGANIZATION_REQUIRED" }, { status: 400 });
  const record = await prisma.memoryRecord.create({
    data: {
      ...value,
      structuredData: structuredData as Prisma.InputJsonValue | undefined,
      scope: "COMPANY",
      organizationId,
      createdById: access.user.id === "local-admin" ? undefined : access.user.id
    }
  });
  return Response.json({ record }, { status: 201 });
}
