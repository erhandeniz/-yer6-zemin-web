export type MarkdownConversionResult =
  | {
      id: string;
      name: string;
      mimeType: string;
      format: "markdown";
      tokens: number;
      data: string;
    }
  | {
      id: string;
      name: string;
      mimeType: string;
      format: "error";
      error: string;
    };

export type RAGWorkersAIBinding = {
  run(model: string, input: Record<string, unknown>): Promise<unknown>;
  toMarkdown(
    file: { name: string; blob: Blob },
    options?: Record<string, unknown>
  ): Promise<MarkdownConversionResult>;
};

export type VectorizeBinding = {
  upsert(records: Array<{
    id: string;
    namespace?: string;
    values: number[];
    metadata: Record<string, string | number | boolean>;
  }>): Promise<unknown>;
  query(values: number[], options: {
    topK: number;
    namespace?: string;
    returnValues: false;
    returnMetadata: "all";
  }): Promise<{
    matches: Array<{
      id: string;
      score: number;
      metadata?: Record<string, unknown>;
    }>;
  }>;
  deleteByIds(ids: string[]): Promise<unknown>;
};

export type R2ObjectBodyLike = {
  size: number;
  httpMetadata?: { contentType?: string };
  blob(): Promise<Blob>;
};

export type R2BucketBinding = {
  get(key: string): Promise<R2ObjectBodyLike | null>;
  delete(key: string | string[]): Promise<void>;
};
