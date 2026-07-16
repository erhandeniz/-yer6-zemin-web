import type { SourceCitation } from "@/lib/ai/contracts";

/**
 * Collects citations emitted by knowledge tools, de-duplicated by id. Citations
 * are surfaced to the UI ONLY when the model actually used retrieved sources —
 * ordinary/general conversation yields an empty collector.
 */
export class CitationCollector {
  private readonly byId = new Map<string, SourceCitation>();

  add(citations: SourceCitation[]): void {
    for (const c of citations) {
      if (c && c.id && !this.byId.has(c.id)) this.byId.set(c.id, c);
    }
  }

  list(): SourceCitation[] {
    return [...this.byId.values()];
  }

  get size(): number {
    return this.byId.size;
  }
}
