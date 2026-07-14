import type { Session } from "next-auth";
import type { KnowledgeChunk } from "@/server/ai/knowledge-base/types";

export async function resolveKnowledgeScope(
  current: Session | null,
  requestedProjectId?: string
) {
  const organizationId = current ? process.env.YER6_ORGANIZATION_ID?.trim() || undefined : undefined;
  if (!current?.user?.id || !requestedProjectId || !process.env.DATABASE_URL) {
    return { organizationId, includeStandards: true };
  }
  try {
    const { prisma } = await import("@/lib/prisma");
    const project = await prisma.project.findFirst({
      where: current.user.role === "ADMIN"
        ? { id: requestedProjectId }
        : { id: requestedProjectId, ownerId: current.user.id },
      select: { id: true }
    });
    return { projectId: project?.id, organizationId, includeStandards: true };
  } catch {
    return { organizationId, includeStandards: true };
  }
}

export async function loadMemoryKnowledge(
  current: Session | null,
  scope: { projectId?: string; organizationId?: string }
): Promise<KnowledgeChunk[]> {
  if (!current?.user?.id || !process.env.DATABASE_URL) return [];
  if (!scope.projectId && !scope.organizationId) return [];
  try {
    const { prisma } = await import("@/lib/prisma");
    const [memories, conversations] = await Promise.all([
      prisma.memoryRecord.findMany({
        where: {
          OR: [
            ...(scope.projectId ? [{ scope: "PROJECT" as const, projectId: scope.projectId }] : []),
            ...(scope.organizationId ? [{ scope: "COMPANY" as const, organizationId: scope.organizationId }] : [])
          ]
        },
        orderBy: { updatedAt: "desc" },
        take: 6
      }),
      scope.projectId
        ? prisma.conversation.findMany({
            where: { projectId: scope.projectId, userId: current.user.id },
            orderBy: { updatedAt: "desc" },
            take: 2,
            include: { messages: { orderBy: { createdAt: "desc" }, take: 6 } }
          })
        : []
    ]);

    const chunks: KnowledgeChunk[] = memories.map((memory, index) => ({
      content: memory.content.slice(0, 4_000),
      score: 1,
      citation: {
        id: `M${index + 1}`,
        fileName: memory.title,
        sourceType: "report",
        scope: memory.scope === "PROJECT" ? "project" : "company",
        section: memory.type,
        version: memory.updatedAt.toISOString().slice(0, 10)
      }
    }));

    for (const conversation of conversations) {
      const content = [...conversation.messages].reverse()
        .map((message) => `${message.role}: ${message.content}`)
        .join("\n")
        .slice(0, 5_000);
      if (!content) continue;
      chunks.push({
        content,
        score: 0.95,
        citation: {
          id: `M${chunks.length + 1}`,
          fileName: conversation.title,
          sourceType: "report",
          scope: "project",
          section: "CONVERSATION",
          version: conversation.updatedAt.toISOString().slice(0, 10)
        }
      });
    }
    return chunks.slice(0, 8);
  } catch {
    return [];
  }
}

export async function persistConversationExchange(input: {
  current: Session | null;
  conversationId: string;
  projectId?: string;
  userMessage: string;
  assistantMessage: string;
  citations: unknown;
}) {
  if (!input.current?.user?.id || !input.projectId || !process.env.DATABASE_URL || !input.assistantMessage) return;
  try {
    const { prisma } = await import("@/lib/prisma");
    const title = input.userMessage.replace(/\s+/g, " ").trim().slice(0, 100) || "YER6 AI görüşmesi";
    const existing = await prisma.conversation.findUnique({
      where: { id: input.conversationId },
      select: { userId: true }
    });
    if (existing && existing.userId !== input.current.user.id) return;
    await prisma.conversation.upsert({
      where: { id: input.conversationId },
      update: { projectId: input.projectId },
      create: {
        id: input.conversationId,
        title,
        userId: input.current.user.id,
        projectId: input.projectId
      }
    });
    await prisma.message.createMany({
      data: [
        { role: "USER", content: input.userMessage, conversationId: input.conversationId },
        {
          role: "ASSISTANT",
          content: input.assistantMessage,
          citations: input.citations as object,
          conversationId: input.conversationId
        }
      ]
    });
  } catch {
    // Chat must remain available when optional persistence is temporarily unavailable.
  }
}
