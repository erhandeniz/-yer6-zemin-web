import { prisma } from "@/lib/prisma";
import { isAccessResponse, requireAdmin } from "@/server/auth/workspace-access";
import { licensedContentAllowed, standardSchema } from "@/server/rag/api-schemas";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;
  const url = new URL(request.url);
  const family = url.searchParams.get("family") || undefined;
  const standards = await prisma.engineeringStandard.findMany({
    where: { family },
    orderBy: [{ family: "asc" }, { code: "asc" }, { updatedAt: "desc" }],
    take: 200
  });
  return Response.json({ standards });
}

export async function POST(request: Request) {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;
  const parsed = standardSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "INVALID_STANDARD" }, { status: 400 });
  const value = parsed.data;
  const standard = await prisma.engineeringStandard.create({
    data: {
      ...value,
      publishedAt: value.publishedAt ? new Date(value.publishedAt) : undefined,
      contentIndexingAllowed: licensedContentAllowed(value.licenseStatus, value.contentIndexingAllowed)
    }
  });
  return Response.json({ standard }, { status: 201 });
}
