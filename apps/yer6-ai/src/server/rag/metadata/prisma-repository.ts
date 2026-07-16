import {
  KnowledgeDocumentScope,
  type KnowledgeDocument as PrismaKnowledgeDocument,
  type Prisma
} from "@prisma/client";
import type { KnowledgeDocumentStatus } from "@/lib/rag/api";
import {
  KNOWLEDGE_CATEGORIES,
  type KnowledgeCategory,
  type KnowledgeFileExtension
} from "@/lib/rag/catalog";
import { prisma } from "@/lib/prisma";
import type {
  CreateRAGDocumentInput,
  RAGChunkRecord,
  RAGDocumentRecord,
  RAGDocumentScope,
  RAGMetadataRepository,
  UpdateRAGDocumentInput
} from "@/server/rag/contracts";

const categorySet = new Set<string>(KNOWLEDGE_CATEGORIES);

function jsonRecord(value: Prisma.JsonValue | null) {
  return value && typeof value === "object" && !Array.isArray(value)
    ? value as Record<string, unknown>
    : undefined;
}

function toDocument(record: PrismaKnowledgeDocument): RAGDocumentRecord {
  return {
    id: record.id,
    name: record.name,
    extension: record.extension as KnowledgeFileExtension,
    mimeType: record.mimeType,
    size: record.size,
    category: record.category as KnowledgeCategory,
    scope: record.scope === KnowledgeDocumentScope.PROJECT
      ? "project"
      : record.scope === KnowledgeDocumentScope.STANDARDS
        ? "standards"
        : "company",
    moduleKey: record.moduleKey ?? undefined,
    partition: record.partition ?? undefined,
    projectId: record.projectId ?? undefined,
    organizationId: record.organizationId ?? undefined,
    storageProvider: record.storageProvider,
    storageKey: record.storageKey,
    sourceUrl: record.sourceUrl ?? undefined,
    checksum: record.checksum ?? undefined,
    version: record.version ?? undefined,
    standardId: record.standardId ?? undefined,
    licenseStatus: record.licenseStatus ?? undefined,
    contentIndexingAllowed: record.contentIndexingAllowed,
    status: record.status as KnowledgeDocumentStatus,
    chunkCount: record.chunkCount,
    tokenCount: record.tokenCount,
    embeddingModel: record.embeddingModel ?? undefined,
    errorCode: record.errorCode ?? undefined,
    metadata: jsonRecord(record.metadata),
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString()
  };
}

function jsonInput(value: Record<string, unknown> | undefined) {
  return value as Prisma.InputJsonValue | undefined;
}

export class PrismaRAGMetadataRepository implements RAGMetadataRepository {
  async createDocument(input: CreateRAGDocumentInput) {
    const record = await prisma.knowledgeDocument.create({
      data: {
        ...input,
        scope: input.scope === "project"
          ? KnowledgeDocumentScope.PROJECT
          : input.scope === "standards"
            ? KnowledgeDocumentScope.STANDARDS
            : KnowledgeDocumentScope.COMPANY,
        metadata: jsonInput(input.metadata)
      }
    });
    return toDocument(record);
  }

  async getDocument(id: string) {
    const record = await prisma.knowledgeDocument.findUnique({ where: { id } });
    return record ? toDocument(record) : null;
  }

  async listDocuments(options: {
    category?: KnowledgeCategory;
    status?: KnowledgeDocumentStatus;
    scope?: RAGDocumentScope;
    moduleKey?: string;
    partition?: string;
    projectId?: string;
    organizationId?: string;
    cursor?: string;
    limit: number;
  }) {
    const records = await prisma.knowledgeDocument.findMany({
      where: {
        category: options.category,
        status: options.status,
        scope: options.scope === "project"
          ? KnowledgeDocumentScope.PROJECT
          : options.scope === "standards"
            ? KnowledgeDocumentScope.STANDARDS
            : options.scope === "company"
              ? KnowledgeDocumentScope.COMPANY
              : undefined,
        moduleKey: options.moduleKey,
        partition: options.partition,
        projectId: options.projectId,
        organizationId: options.organizationId
      },
      orderBy: [{ updatedAt: "desc" }, { id: "desc" }],
      take: options.limit + 1,
      ...(options.cursor ? { cursor: { id: options.cursor }, skip: 1 } : {})
    });
    const hasMore = records.length > options.limit;
    const documents = records.slice(0, options.limit);
    return {
      documents: documents.map(toDocument),
      nextCursor: hasMore ? documents.at(-1)?.id : undefined
    };
  }

  async updateDocument(id: string, input: UpdateRAGDocumentInput) {
    const record = await prisma.knowledgeDocument.update({
      where: { id },
      data: {
        ...input,
        metadata: jsonInput(input.metadata)
      }
    });
    return toDocument(record);
  }

  async deleteDocument(id: string) {
    await prisma.knowledgeDocument.delete({ where: { id } });
  }

  async replaceChunks(documentId: string, chunks: RAGChunkRecord[]) {
    await prisma.$transaction([
      prisma.knowledgeChunk.deleteMany({ where: { documentId } }),
      prisma.knowledgeChunk.createMany({
        data: chunks.map((chunk) => ({
          ...chunk,
          metadata: jsonInput(chunk.metadata)
        }))
      })
    ]);
  }

  async listChunkVectorIds(documentId: string) {
    const chunks = await prisma.knowledgeChunk.findMany({
      where: { documentId },
      select: { vectorId: true }
    });
    return chunks.map((chunk) => chunk.vectorId);
  }

  async stats() {
    const processingStatuses = ["UPLOADED", "QUEUED", "PARSING", "CHUNKING", "EMBEDDING", "INDEXING"] as const;
    const [documents, readyDocuments, processingDocuments, failedDocuments, chunks, sizes, categories] =
      await Promise.all([
        prisma.knowledgeDocument.count(),
        prisma.knowledgeDocument.count({ where: { status: "READY" } }),
        prisma.knowledgeDocument.count({ where: { status: { in: [...processingStatuses] } } }),
        prisma.knowledgeDocument.count({ where: { status: "FAILED" } }),
        prisma.knowledgeChunk.count(),
        prisma.knowledgeDocument.aggregate({ _sum: { size: true } }),
        prisma.knowledgeDocument.groupBy({ by: ["category"], _count: { _all: true } })
      ]);

    return {
      documents,
      readyDocuments,
      processingDocuments,
      failedDocuments,
      chunks,
      bytes: sizes._sum.size ?? 0,
      categories: categories
        .filter((item) => categorySet.has(item.category))
        .map((item) => ({ category: item.category as KnowledgeCategory, count: item._count._all }))
    };
  }
}
