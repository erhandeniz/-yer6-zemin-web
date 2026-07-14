import { getRuntimeBindings } from "@/server/ai/runtime-bindings";
import type { KnowledgeBaseStatus } from "@/server/ai/knowledge-base/types";
import type { RAGWorkersAIBinding } from "@/server/rag/cloudflare-bindings";
import { getRAGConfig, ragConfigurationState } from "@/server/rag/config";
import type {
  DocumentStorageProvider,
  EmbeddingService,
  RAGMetadataRepository,
  RetrievalEngine,
  VectorDatabase
} from "@/server/rag/contracts";
import { CloudflareEmbeddingService } from "@/server/rag/embeddings/cloudflare-workers-ai";
import { OpenAIEmbeddingService } from "@/server/rag/embeddings/openai";
import { CloudflareMarkdownParser } from "@/server/rag/parsers/cloudflare-markdown-parser";
import { DocumentParserRegistry } from "@/server/rag/parsers/registry";
import { TextAndMetadataParser } from "@/server/rag/parsers/text-metadata-parser";
import { SemanticRetrievalEngine } from "@/server/rag/retrieval-engine";
import { R2DocumentStorage } from "@/server/rag/storage/r2";
import { UploadThingDocumentStorage } from "@/server/rag/storage/uploadthing";
import { CloudflareVectorizeDatabase } from "@/server/rag/vectors/cloudflare-vectorize";
import { RAGIngestionService } from "@/server/rag/ingestion-service";

function embeddingService(
  config: ReturnType<typeof getRAGConfig>,
  ai: RAGWorkersAIBinding | undefined
): EmbeddingService | null {
  if (config.embeddingProvider === "cloudflare-workers-ai") {
    return ai ? new CloudflareEmbeddingService(ai, config.embeddingModel, config.embeddingDimensions) : null;
  }
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  return apiKey
    ? new OpenAIEmbeddingService(apiKey, config.openAIEmbeddingModel, config.embeddingDimensions)
    : null;
}

export async function createRAGRuntime() {
  const config = getRAGConfig();
  const bindings = await getRuntimeBindings();
  const state = ragConfigurationState(config, bindings);
  const ai = bindings.AI as unknown as RAGWorkersAIBinding | undefined;
  const embeddings = embeddingService(config, ai);
  const vectors: VectorDatabase | null = bindings.RAG_VECTORIZE
    ? new CloudflareVectorizeDatabase(bindings.RAG_VECTORIZE)
    : null;
  const retrieval: RetrievalEngine | null = state.ready && embeddings && vectors
    ? new SemanticRetrievalEngine(embeddings, vectors, {
        topK: config.topK,
        minimumScore: config.minimumScore,
        maximumRetrievedCharacters: config.maximumRetrievedCharacters
      })
    : null;

  return { config, bindings, state, ai, embeddings, vectors, retrieval };
}

export async function createRAGAdminRuntime() {
  const runtime = await createRAGRuntime();
  let repository: RAGMetadataRepository | null = null;
  if (process.env.DATABASE_URL) {
    const { PrismaRAGMetadataRepository } = await import("@/server/rag/metadata/prisma-repository");
    repository = new PrismaRAGMetadataRepository();
  }

  let storage: DocumentStorageProvider | null = null;
  if (runtime.config.storageProvider === "r2" && runtime.bindings.RAG_DOCUMENTS) {
    storage = new R2DocumentStorage(runtime.bindings.RAG_DOCUMENTS);
  } else if (runtime.config.storageProvider === "uploadthing") {
    storage = new UploadThingDocumentStorage(
      runtime.config.allowedStorageHosts,
      process.env.UPLOADTHING_TOKEN?.trim()
    );
  }

  const parsers = runtime.ai
    ? new DocumentParserRegistry([
        new TextAndMetadataParser(),
        new CloudflareMarkdownParser(runtime.ai)
      ])
    : new DocumentParserRegistry([new TextAndMetadataParser()]);

  const ingestion = runtime.state.ingestionReady && repository && storage && runtime.embeddings && runtime.vectors
    ? new RAGIngestionService(
        repository,
        storage,
        (extension) => parsers.parserFor(extension),
        runtime.embeddings,
        runtime.vectors,
        {
          chunkSize: runtime.config.chunkSize,
          chunkOverlap: runtime.config.chunkOverlap,
          embeddingBatchSize: runtime.config.embeddingBatchSize,
          parserVersion: runtime.config.parserVersion
        }
      )
    : null;

  return { ...runtime, repository, storage, parsers, ingestion };
}

export async function ragKnowledgeStatus(): Promise<KnowledgeBaseStatus> {
  const { config, state } = await createRAGRuntime();
  if (!config.enabled) return "empty";
  return state.ready ? "ready" : "unavailable";
}
