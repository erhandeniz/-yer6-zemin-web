import { prisma } from "@/lib/prisma";
import { isAccessResponse, requireAdmin } from "@/server/auth/workspace-access";
import { licensedContentAllowed, standardSchema } from "@/server/rag/api-schemas";

export const runtime = "nodejs";
type Context = { params: Promise<{ standardId: string }> };

export async function PATCH(request: Request, context: Context) {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;
  const parsed = standardSchema.partial().safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "INVALID_STANDARD" }, { status: 400 });
  const { standardId } = await context.params;
  const current = await prisma.engineeringStandard.findUnique({ where: { id: standardId } });
  if (!current) return Response.json({ error: "STANDARD_NOT_FOUND" }, { status: 404 });
  const status = parsed.data.licenseStatus ?? current.licenseStatus;
  const standard = await prisma.engineeringStandard.update({
    where: { id: standardId },
    data: {
      ...parsed.data,
      publishedAt: parsed.data.publishedAt ? new Date(parsed.data.publishedAt) : undefined,
      contentIndexingAllowed: licensedContentAllowed(
        status,
        parsed.data.contentIndexingAllowed ?? current.contentIndexingAllowed
      )
    }
  });
  return Response.json({ standard });
}

export async function DELETE(_request: Request, context: Context) {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;
  const { standardId } = await context.params;
  const linked = await prisma.knowledgeDocument.count({ where: { standardId } });
  if (linked > 0) return Response.json({ error: "STANDARD_HAS_DOCUMENTS" }, { status: 409 });
  await prisma.engineeringStandard.delete({ where: { id: standardId } });
  return new Response(null, { status: 204 });
}
