import type { VectorizeBinding } from "@/server/rag/cloudflare-bindings";
import type { VectorDatabase, VectorMatch, VectorRecord } from "@/server/rag/contracts";

function compactMetadata(metadata: VectorRecord["metadata"]) {
  return Object.fromEntries(
    Object.entries(metadata).filter((entry): entry is [string, string | number] => (
      typeof entry[1] === "string" || typeof entry[1] === "number"
    ))
  );
}

export class CloudflareVectorizeDatabase implements VectorDatabase {
  readonly name = "cloudflare-vectorize";

  constructor(private readonly index: VectorizeBinding) {}

  async upsert(records: VectorRecord[]) {
    for (let offset = 0; offset < records.length; offset += 500) {
      await this.index.upsert(records.slice(offset, offset + 500).map((record) => ({
        id: record.id,
        namespace: record.namespace,
        values: record.values,
        metadata: compactMetadata(record.metadata)
      })));
    }
  }

  async query(vector: number[], options: { namespaces: string[]; topK: number }) {
    const responses = await Promise.all(options.namespaces.map((namespace) => this.index.query(vector, {
      topK: options.topK,
      namespace,
      returnValues: false,
      returnMetadata: "all"
    })));

    const byId = new Map<string, VectorMatch>();
    for (const match of responses.flatMap((response) => response.matches)) {
      const previous = byId.get(match.id);
      if (!previous || match.score > previous.score) {
        byId.set(match.id, { id: match.id, score: match.score, metadata: match.metadata ?? {} });
      }
    }

    return [...byId.values()]
      .sort((left, right) => right.score - left.score)
      .slice(0, options.topK);
  }

  async delete(ids: string[]) {
    for (let offset = 0; offset < ids.length; offset += 1_000) {
      await this.index.deleteByIds(ids.slice(offset, offset + 1_000));
    }
  }
}
