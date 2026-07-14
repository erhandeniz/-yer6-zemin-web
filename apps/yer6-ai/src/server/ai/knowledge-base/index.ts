import { ConfiguredKnowledgeBaseProvider } from "@/server/ai/knowledge-base/configured-provider";

export const knowledgeBase = new ConfiguredKnowledgeBaseProvider();

export type {
  DocumentScope,
  KnowledgeBaseProvider,
  KnowledgeBaseStatus,
  KnowledgeChunk
} from "@/server/ai/knowledge-base/types";
