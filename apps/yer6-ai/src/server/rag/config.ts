const embeddingProviders = ["cloudflare-workers-ai", "openai"] as const;
const vectorProviders = ["cloudflare-vectorize"] as const;
const storageProviders = ["r2", "uploadthing"] as const;
const metadataProviders = ["prisma"] as const;
const parserProviders = ["cloudflare-markdown"] as const;

function choice<T extends readonly string[]>(value: string | undefined, values: T, fallback: T[number]) {
  return values.includes(value as T[number]) ? value as T[number] : fallback;
}

function boundedNumber(value: string | undefined, fallback: number, minimum: number, maximum: number) {
  const parsed = Number.parseFloat(value ?? "");
  return Number.isFinite(parsed) ? Math.min(maximum, Math.max(minimum, parsed)) : fallback;
}

function enabled(value: string | undefined) {
  return value?.trim().toLowerCase() === "true";
}

export type RAGConfig = ReturnType<typeof getRAGConfig>;

export function getRAGConfig(environment: NodeJS.ProcessEnv = process.env) {
  const chunkSize = Math.round(boundedNumber(environment.RAG_CHUNK_SIZE, 2_800, 800, 8_000));
  const chunkOverlap = Math.round(boundedNumber(environment.RAG_CHUNK_OVERLAP, 320, 0, chunkSize / 2));

  return {
    enabled: enabled(environment.RAG_ENABLED),
    requireAuth: environment.RAG_REQUIRE_AUTH !== "false",
    storageProvider: choice(environment.RAG_STORAGE_PROVIDER, storageProviders, "uploadthing"),
    parserProvider: choice(environment.RAG_PARSER_PROVIDER, parserProviders, "cloudflare-markdown"),
    metadataProvider: choice(environment.RAG_METADATA_PROVIDER, metadataProviders, "prisma"),
    embeddingProvider: choice(
      environment.RAG_EMBEDDING_PROVIDER,
      embeddingProviders,
      "cloudflare-workers-ai"
    ),
    embeddingModel: environment.RAG_EMBEDDING_MODEL?.trim() || "@cf/baai/bge-m3",
    embeddingDimensions: Math.round(boundedNumber(environment.RAG_EMBEDDING_DIMENSIONS, 1_024, 64, 4_096)),
    openAIEmbeddingModel: environment.RAG_OPENAI_EMBEDDING_MODEL?.trim() || "text-embedding-3-small",
    vectorProvider: choice(environment.RAG_VECTOR_PROVIDER, vectorProviders, "cloudflare-vectorize"),
    chunkSize,
    chunkOverlap,
    embeddingBatchSize: Math.round(boundedNumber(environment.RAG_EMBEDDING_BATCH_SIZE, 32, 1, 100)),
    topK: Math.round(boundedNumber(environment.RAG_TOP_K, 8, 1, 50)),
    minimumScore: boundedNumber(environment.RAG_MINIMUM_SCORE, 0.55, 0, 1),
    maximumRetrievedCharacters: Math.round(
      boundedNumber(environment.RAG_MAX_RETRIEVED_CHARACTERS, 18_000, 2_000, 50_000)
    ),
    allowedStorageHosts: (environment.RAG_STORAGE_ALLOWED_HOSTS || "ufs.sh,utfs.io")
      .split(",")
      .map((host) => host.trim().toLowerCase())
      .filter(Boolean),
    ingestionMode: environment.RAG_INGESTION_MODE === "webhook" ? "webhook" as const : "inline" as const,
    ingestionWebhookUrl: environment.RAG_INGESTION_WEBHOOK_URL?.trim(),
    ingestionSecret: environment.RAG_INGESTION_SECRET?.trim(),
    parserVersion: "yer6-rag-parser-v1"
  };
}

export function ragConfigurationState(config: RAGConfig, bindings: {
  AI?: unknown;
  RAG_VECTORIZE?: unknown;
  RAG_DOCUMENTS?: unknown;
}) {
  const missing: string[] = [];
  if (!config.enabled) missing.push("RAG_ENABLED");
  if (config.requireAuth && process.env.AUTH_REQUIRED !== "true") missing.push("AUTH_REQUIRED");
  if (config.embeddingProvider === "cloudflare-workers-ai" && !bindings.AI) missing.push("AI binding");
  if (config.embeddingProvider === "openai" && !process.env.OPENAI_API_KEY) missing.push("OPENAI_API_KEY");
  if (config.vectorProvider === "cloudflare-vectorize" && !bindings.RAG_VECTORIZE) {
    missing.push("RAG_VECTORIZE binding");
  }
  const ingestionMissing = [...missing];
  if (!process.env.DATABASE_URL) ingestionMissing.push("DATABASE_URL");
  if (config.parserProvider === "cloudflare-markdown" && !bindings.AI) ingestionMissing.push("AI binding");
  if (config.storageProvider === "r2" && !bindings.RAG_DOCUMENTS) ingestionMissing.push("RAG_DOCUMENTS binding");
  if (config.storageProvider === "uploadthing" && !process.env.UPLOADTHING_TOKEN) {
    ingestionMissing.push("UPLOADTHING_TOKEN");
  }
  if (config.ingestionMode === "webhook" && !config.ingestionWebhookUrl) {
    ingestionMissing.push("RAG_INGESTION_WEBHOOK_URL");
  }
  if (config.ingestionMode === "webhook" && !config.ingestionSecret) {
    ingestionMissing.push("RAG_INGESTION_SECRET");
  }

  return {
    ready: missing.length === 0,
    ingestionReady: ingestionMissing.length === 0,
    missing,
    ingestionMissing: [...new Set(ingestionMissing)],
    providers: {
      storage: config.storageProvider,
      parser: config.parserProvider,
      metadata: config.metadataProvider,
      embedding: config.embeddingProvider,
      vector: config.vectorProvider
    }
  };
}
