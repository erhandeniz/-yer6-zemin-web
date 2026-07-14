import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { WorkersAIBinding } from "@/server/ai/providers/cloudflare-workers-ai";
import type { R2BucketBinding, VectorizeBinding } from "@/server/rag/cloudflare-bindings";

export type RateLimitBinding = {
  limit(options: { key: string }): Promise<{ success: boolean }>;
};

export type YER6RuntimeBindings = {
  AI?: WorkersAIBinding;
  AI_RATE_LIMITER?: RateLimitBinding;
  RAG_VECTORIZE?: VectorizeBinding;
  RAG_DOCUMENTS?: R2BucketBinding;
};

export async function getRuntimeBindings(): Promise<YER6RuntimeBindings> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    return env as typeof env & YER6RuntimeBindings;
  } catch {
    return {};
  }
}
