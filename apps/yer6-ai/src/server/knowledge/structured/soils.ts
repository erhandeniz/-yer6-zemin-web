/**
 * Module 8 — Soil Database repository.
 *
 * Structured soil profiles (classification, index/strength parameters, layers)
 * stored in Postgres and semantically indexed in Vectorize. Feeds both the
 * decision engine (exact parameter lookups) and semantic retrieval. Imports are
 * checksum-diffed for incremental updates at scale.
 */

import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { sha256 } from "@/server/rag/hash";
import { resolvePartition } from "@/server/knowledge/modules";
import { StructuredVectorIndexer, type StructuredIndexInput } from "@/server/knowledge/structured/indexer";
import type { ImportSummary } from "@/server/knowledge/structured/machines";

export type SoilLayer = {
  from: number;
  to: number;
  description?: string;
  classification?: string;
  sptN?: number;
  cptQc?: number;
  cohesion?: number;
  phi?: number;
  unitWeight?: number;
};

export type SoilImportInput = {
  name: string;
  partition?: string;
  classification?: string;
  location?: string;
  latitude?: number;
  longitude?: number;
  depthFrom?: number;
  depthTo?: number;
  groundwater?: number;
  parameters?: Record<string, unknown>;
  layers?: SoilLayer[];
  sourceReportId?: string;
  source?: string;
};

function slug(value: string) {
  return value.trim().toLowerCase().replace(/[\s_]+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export function soilNaturalKey(input: SoilImportInput) {
  return input.sourceReportId ? `${slug(input.sourceReportId)}/${slug(input.name)}` : slug(input.name);
}

export function soilPartition(input: SoilImportInput) {
  return resolvePartition("soils", input.partition ?? input.classification ?? "");
}

export async function soilChecksum(input: SoilImportInput) {
  return sha256(
    JSON.stringify({
      name: input.name,
      classification: input.classification ?? null,
      location: input.location ?? null,
      depthFrom: input.depthFrom ?? null,
      depthTo: input.depthTo ?? null,
      groundwater: input.groundwater ?? null,
      parameters: input.parameters ?? null,
      layers: input.layers ?? []
    })
  );
}

export function renderSoilText(input: SoilImportInput): string {
  const layers = (input.layers ?? []).map((layer) => {
    const parts = [
      `${layer.from}-${layer.to} m`,
      layer.classification ?? layer.description ?? "",
      layer.sptN != null ? `SPT N=${layer.sptN}` : "",
      layer.cptQc != null ? `CPT qc=${layer.cptQc} MPa` : "",
      layer.cohesion != null ? `c=${layer.cohesion} kPa` : "",
      layer.phi != null ? `φ=${layer.phi}°` : "",
      layer.unitWeight != null ? `γ=${layer.unitWeight} kN/m³` : ""
    ].filter(Boolean);
    return `- ${parts.join(", ")}`;
  });
  const params = input.parameters
    ? Object.entries(input.parameters).map(([key, value]) => `${key}: ${String(value)}`)
    : [];
  return [
    `Soil profile: ${input.name}`,
    input.classification ? `Classification: ${input.classification}` : "",
    input.location ? `Location: ${input.location}` : "",
    input.depthFrom != null || input.depthTo != null
      ? `Depth range: ${input.depthFrom ?? 0}-${input.depthTo ?? "?"} m`
      : "",
    input.groundwater != null ? `Groundwater table: ${input.groundwater} m` : "",
    ...params,
    layers.length ? "Layers:" : "",
    ...layers
  ]
    .filter(Boolean)
    .join("\n");
}

export class SoilRepository {
  constructor(private readonly indexer: StructuredVectorIndexer | null = null) {}

  async count() {
    return prisma.soilProfile.count();
  }

  async list(options: { partition?: string; classification?: string; limit?: number; cursor?: string } = {}) {
    const take = Math.min(200, Math.max(1, options.limit ?? 100));
    const rows = await prisma.soilProfile.findMany({
      where: { partition: options.partition, classification: options.classification },
      orderBy: [{ updatedAt: "desc" }, { id: "desc" }],
      take: take + 1,
      ...(options.cursor ? { cursor: { id: options.cursor }, skip: 1 } : {})
    });
    const hasMore = rows.length > take;
    const items = rows.slice(0, take);
    return { items, nextCursor: hasMore ? items.at(-1)?.id : undefined };
  }

  async importMany(inputs: SoilImportInput[], options: { reindex?: boolean } = {}): Promise<ImportSummary> {
    const summary: ImportSummary = {
      received: inputs.length,
      created: 0,
      updated: 0,
      skipped: 0,
      indexed: 0,
      failed: 0
    };
    const toIndex: { id: string; input: SoilImportInput }[] = [];

    for (const input of inputs) {
      try {
        if (!input.name?.trim()) {
          summary.failed += 1;
          continue;
        }
        const checksum = await soilChecksum(input);
        const partition = soilPartition(input);
        const naturalKey = soilNaturalKey(input);
        const existing = await prisma.soilProfile.findFirst({
          where: { name: input.name, sourceReportId: input.sourceReportId ?? null }
        });

        if (existing && existing.checksum === checksum && existing.status === "INDEXED" && !options.reindex) {
          summary.skipped += 1;
          continue;
        }

        const data: Prisma.SoilProfileUncheckedCreateInput = {
          name: input.name,
          partition,
          classification: input.classification,
          location: input.location,
          latitude: input.latitude,
          longitude: input.longitude,
          depthFrom: input.depthFrom,
          depthTo: input.depthTo,
          groundwater: input.groundwater,
          parameters: (input.parameters ?? undefined) as Prisma.InputJsonValue | undefined,
          layers: (input.layers ?? undefined) as Prisma.InputJsonValue | undefined,
          sourceReportId: input.sourceReportId,
          source: input.source,
          checksum,
          status: this.indexer ? "INDEXING" : "READY"
        };

        const row = existing
          ? await prisma.soilProfile.update({ where: { id: existing.id }, data })
          : await prisma.soilProfile.create({ data });
        if (existing) summary.updated += 1;
        else summary.created += 1;
        if (this.indexer) toIndex.push({ id: row.id, input });
        void naturalKey;
      } catch {
        summary.failed += 1;
      }
    }

    if (this.indexer && toIndex.length > 0) {
      const items: StructuredIndexInput[] = toIndex.map(({ id, input }) => ({
        moduleKey: "soils",
        naturalKey: `${id}`,
        partition: soilPartition(input),
        text: renderSoilText(input),
        metadata: {
          documentId: id,
          fileName: input.name,
          category: "Zemin Etütleri",
          checksum: "",
          updatedAt: new Date().toISOString()
        }
      }));
      const indexed = await this.indexer.index(items);
      const byKey = new Map(indexed.map((entry) => [entry.naturalKey, entry.vectorId]));
      for (const { id } of toIndex) {
        const vectorId = byKey.get(id);
        if (!vectorId) {
          summary.failed += 1;
          continue;
        }
        await prisma.soilProfile.update({
          where: { id },
          data: { vectorId, status: "INDEXED", indexedAt: new Date() }
        });
        summary.indexed += 1;
      }
    }

    return summary;
  }
}
