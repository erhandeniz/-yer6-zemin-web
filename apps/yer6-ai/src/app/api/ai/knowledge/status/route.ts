import { KnowledgeDocumentScope, KnowledgeDocumentStatus, type Prisma } from "@prisma/client";
import { requireWorkspaceUser, isAccessResponse } from "@/server/auth/workspace-access";
import { resolveKnowledgeScope } from "@/server/memory/project-memory";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMPTY = {
  totalSources: 0,
  readySources: 0,
  processingSources: 0,
  failedSources: 0,
  chunks: 0
};

const PROCESSING_STATUSES: KnowledgeDocumentStatus[] = [
  KnowledgeDocumentStatus.UPLOADED,
  KnowledgeDocumentStatus.QUEUED,
  KnowledgeDocumentStatus.PARSING,
  KnowledgeDocumentStatus.CHUNKING,
  KnowledgeDocumentStatus.EMBEDDING,
  KnowledgeDocumentStatus.INDEXING
];

/**
 * Read-only knowledge-base status for the chat header badge. Counts the SAME
 * permanent sources that search_company_knowledge can retrieve for this session
 * (the resolved company/project/standards scope). The public demo and
 * unconfigured DB return zeros — never other tenants' data. No secrets.
 */
export async function GET(request: Request) {
  // Demo traffic is isolated: it has no company knowledge, so report empty.
  if (request.headers.get("x-yer6-demo") === "true") return Response.json(EMPTY);

  const access = await requireWorkspaceUser();
  if (isAccessResponse(access)) return access;
  if (!process.env.DATABASE_URL) return Response.json(EMPTY);

  const scope = await resolveKnowledgeScope(access, undefined);
  const or: Prisma.KnowledgeDocumentWhereInput[] = [
    {
      scope: KnowledgeDocumentScope.COMPANY,
      OR: [{ organizationId: scope.organizationId ?? undefined }, { organizationId: null }]
    }
  ];
  if (scope.projectId) or.push({ scope: KnowledgeDocumentScope.PROJECT, projectId: scope.projectId });
  if (scope.includeStandards !== false) or.push({ scope: KnowledgeDocumentScope.STANDARDS });
  const where: Prisma.KnowledgeDocumentWhereInput = { OR: or };

  try {
    const { prisma } = await import("@/lib/prisma");
    const [totalSources, readySources, processingSources, failedSources, chunkAgg] = await Promise.all([
      prisma.knowledgeDocument.count({ where }),
      prisma.knowledgeDocument.count({ where: { ...where, status: KnowledgeDocumentStatus.READY } }),
      prisma.knowledgeDocument.count({ where: { ...where, status: { in: PROCESSING_STATUSES } } }),
      prisma.knowledgeDocument.count({ where: { ...where, status: KnowledgeDocumentStatus.FAILED } }),
      prisma.knowledgeDocument.aggregate({
        where: { ...where, status: KnowledgeDocumentStatus.READY },
        _sum: { chunkCount: true }
      })
    ]);
    return Response.json({
      totalSources,
      readySources,
      processingSources,
      failedSources,
      chunks: chunkAgg._sum.chunkCount ?? 0
    });
  } catch {
    return Response.json(EMPTY);
  }
}
