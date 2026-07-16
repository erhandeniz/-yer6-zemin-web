/**
 * Module 7 — Machine Database repository.
 *
 * Replaces the hardcoded RIG_DATABASE array with a Postgres-backed, incrementally
 * importable dataset that is also embedded into Vectorize for semantic matching.
 * Imports are checksum-diffed: unchanged rows are skipped, so re-running an
 * import of tens of thousands of rigs only re-embeds what actually changed.
 */

import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { sha256 } from "@/server/rag/hash";
import { resolvePartition } from "@/server/knowledge/modules";
import { StructuredVectorIndexer, type StructuredIndexInput } from "@/server/knowledge/structured/indexer";

export type MachineImportInput = {
  manufacturer: string;
  model: string;
  partition?: string;
  category?: string;
  torque?: number;
  maxDepth?: number;
  maxDiameter?: number;
  weight?: number;
  enginePower?: number;
  applications?: string[];
  advantages?: string[];
  limitations?: string[];
  specifications?: Record<string, unknown>;
  source?: string;
};

export type MachineMatchCriteria = {
  minTorque?: number;
  minDepth?: number;
  minDiameter?: number;
  application?: string;
  manufacturer?: string;
  limit?: number;
};

export type ImportSummary = {
  received: number;
  created: number;
  updated: number;
  skipped: number;
  indexed: number;
  failed: number;
};

export type MachineSpec = {
  manufacturer: string;
  model: string;
  torque?: number | null;
  maxDepth?: number | null;
  maxDiameter?: number | null;
  weight?: number | null;
  enginePower?: number | null;
  applications: string[];
  advantages: string[];
  limitations: string[];
};

export type MachineMatchOutcome = {
  suitable: Array<{ machine: MachineSpec; reasons: string[] }>;
  rejected: Array<{ machine: MachineSpec; reasons: string[] }>;
  missingInformation: string[];
};

/**
 * Pure, deterministic equipment matcher shared by the DB-backed repository and
 * the seed fallback. Explains BOTH why a machine qualifies and why others are
 * rejected. Never fabricates a specification: an absent value is reported as
 * missing information rather than assumed to pass.
 */
export function matchMachineSpecs(
  machines: MachineSpec[],
  criteria: MachineMatchCriteria
): MachineMatchOutcome {
  const suitable: MachineMatchOutcome["suitable"] = [];
  const rejected: MachineMatchOutcome["rejected"] = [];
  const missingInformation = new Set<string>();
  const app = criteria.application?.toLowerCase();

  for (const machine of machines) {
    const reasons: string[] = [];
    const rejections: string[] = [];

    if (criteria.minDepth != null) {
      if (machine.maxDepth == null) missingInformation.add(`${machine.manufacturer} ${machine.model}: max depth unknown`);
      else if (machine.maxDepth < criteria.minDepth) rejections.push(`Max depth ${machine.maxDepth} m < required ${criteria.minDepth} m`);
      else reasons.push(`Depth ${machine.maxDepth} m ≥ ${criteria.minDepth} m`);
    }
    if (criteria.minDiameter != null) {
      if (machine.maxDiameter == null) missingInformation.add(`${machine.manufacturer} ${machine.model}: max diameter unknown`);
      else if (machine.maxDiameter < criteria.minDiameter) rejections.push(`Max diameter ${machine.maxDiameter} mm < required ${criteria.minDiameter} mm`);
      else reasons.push(`Diameter ${machine.maxDiameter} mm ≥ ${criteria.minDiameter} mm`);
    }
    if (criteria.minTorque != null) {
      if (machine.torque == null) missingInformation.add(`${machine.manufacturer} ${machine.model}: torque unknown`);
      else if (machine.torque < criteria.minTorque) rejections.push(`Torque ${machine.torque} kNm < required ${criteria.minTorque} kNm`);
      else reasons.push(`Torque ${machine.torque} kNm ≥ ${criteria.minTorque} kNm`);
    }
    if (app) {
      const hasApp = machine.applications.some((item) => item.toLowerCase().includes(app));
      if (hasApp) reasons.push(`Supports application "${criteria.application}"`);
      else rejections.push(`No listed application matching "${criteria.application}"`);
    }

    if (rejections.length > 0) rejected.push({ machine, reasons: rejections });
    else suitable.push({ machine, reasons: reasons.length ? reasons : ["Meets all provided criteria"] });
  }

  return { suitable, rejected, missingInformation: [...missingInformation] };
}

function slug(value: string) {
  return value.trim().toLowerCase().replace(/[\s_]+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export function machineNaturalKey(input: Pick<MachineImportInput, "manufacturer" | "model">) {
  return `${slug(input.manufacturer)}/${slug(input.model)}`;
}

export function machinePartition(input: MachineImportInput) {
  return input.partition
    ? resolvePartition("machines", input.partition)
    : resolvePartition("machines", input.manufacturer);
}

export async function machineChecksum(input: MachineImportInput) {
  const canonical = JSON.stringify({
    manufacturer: input.manufacturer,
    model: input.model,
    category: input.category ?? null,
    torque: input.torque ?? null,
    maxDepth: input.maxDepth ?? null,
    maxDiameter: input.maxDiameter ?? null,
    weight: input.weight ?? null,
    enginePower: input.enginePower ?? null,
    applications: input.applications ?? [],
    advantages: input.advantages ?? [],
    limitations: input.limitations ?? [],
    specifications: input.specifications ?? null
  });
  return sha256(canonical);
}

export function renderMachineText(input: MachineImportInput): string {
  const specs = input.specifications
    ? Object.entries(input.specifications).map(([key, value]) => `${key}: ${String(value)}`)
    : [];
  return [
    `${input.manufacturer} ${input.model}`,
    input.category ? `Category: ${input.category}` : "",
    input.torque != null ? `Max torque: ${input.torque} kNm` : "",
    input.maxDepth != null ? `Max drilling depth: ${input.maxDepth} m` : "",
    input.maxDiameter != null ? `Max diameter: ${input.maxDiameter} mm` : "",
    input.weight != null ? `Operating weight: ${input.weight} t` : "",
    input.enginePower != null ? `Engine power: ${input.enginePower} kW` : "",
    input.applications?.length ? `Applications: ${input.applications.join(", ")}` : "",
    input.advantages?.length ? `Advantages: ${input.advantages.join(", ")}` : "",
    input.limitations?.length ? `Limitations: ${input.limitations.join(", ")}` : "",
    ...specs
  ]
    .filter(Boolean)
    .join("\n");
}

export class MachineRepository {
  constructor(private readonly indexer: StructuredVectorIndexer | null = null) {}

  async count() {
    return prisma.machineRig.count();
  }

  async list(options: { partition?: string; limit?: number; cursor?: string } = {}) {
    const take = Math.min(200, Math.max(1, options.limit ?? 100));
    const rows = await prisma.machineRig.findMany({
      where: { partition: options.partition },
      orderBy: [{ manufacturer: "asc" }, { model: "asc" }],
      take: take + 1,
      ...(options.cursor ? { cursor: { id: options.cursor }, skip: 1 } : {})
    });
    const hasMore = rows.length > take;
    const items = rows.slice(0, take);
    return { items, nextCursor: hasMore ? items.at(-1)?.id : undefined };
  }

  /** Exact feasibility filter — the deterministic counterpart to semantic search. */
  async match(criteria: MachineMatchCriteria) {
    const rows = await prisma.machineRig.findMany({
      where: {
        status: { not: "ARCHIVED" },
        partition: criteria.manufacturer ? resolvePartition("machines", criteria.manufacturer) ?? undefined : undefined,
        torque: criteria.minTorque != null ? { gte: criteria.minTorque } : undefined,
        maxDepth: criteria.minDepth != null ? { gte: criteria.minDepth } : undefined,
        maxDiameter: criteria.minDiameter != null ? { gte: criteria.minDiameter } : undefined,
        applications: criteria.application ? { hasSome: [criteria.application] } : undefined
      },
      orderBy: [{ torque: "desc" }],
      take: Math.min(50, Math.max(1, criteria.limit ?? 20))
    });
    if (!criteria.application) return rows;
    const needle = criteria.application.toLowerCase();
    return rows.filter((rig) => rig.applications.some((app) => app.toLowerCase().includes(needle)));
  }

  async importMany(
    inputs: MachineImportInput[],
    options: { reindex?: boolean } = {}
  ): Promise<ImportSummary> {
    const summary: ImportSummary = {
      received: inputs.length,
      created: 0,
      updated: 0,
      skipped: 0,
      indexed: 0,
      failed: 0
    };
    const toIndex: { id: string; input: MachineImportInput }[] = [];

    for (const input of inputs) {
      try {
        if (!input.manufacturer?.trim() || !input.model?.trim()) {
          summary.failed += 1;
          continue;
        }
        const checksum = await machineChecksum(input);
        const partition = machinePartition(input);
        const existing = await prisma.machineRig.findUnique({
          where: { manufacturer_model: { manufacturer: input.manufacturer, model: input.model } }
        });

        if (existing && existing.checksum === checksum && existing.status === "INDEXED" && !options.reindex) {
          summary.skipped += 1;
          continue;
        }

        const data: Prisma.MachineRigUncheckedCreateInput = {
          manufacturer: input.manufacturer,
          model: input.model,
          partition,
          category: input.category,
          torque: input.torque,
          maxDepth: input.maxDepth,
          maxDiameter: input.maxDiameter,
          weight: input.weight,
          enginePower: input.enginePower,
          applications: input.applications ?? [],
          advantages: input.advantages ?? [],
          limitations: input.limitations ?? [],
          specifications: (input.specifications ?? undefined) as Prisma.InputJsonValue | undefined,
          source: input.source,
          checksum,
          status: this.indexer ? "INDEXING" : "READY"
        };

        const row = await prisma.machineRig.upsert({
          where: { manufacturer_model: { manufacturer: input.manufacturer, model: input.model } },
          create: data,
          update: data
        });
        if (existing) summary.updated += 1;
        else summary.created += 1;
        if (this.indexer) toIndex.push({ id: row.id, input });
      } catch {
        summary.failed += 1;
      }
    }

    if (this.indexer && toIndex.length > 0) {
      const items: StructuredIndexInput[] = toIndex.map(({ input }) => ({
        moduleKey: "machines",
        naturalKey: machineNaturalKey(input),
        partition: machinePartition(input),
        text: renderMachineText(input),
        metadata: {
          documentId: machineNaturalKey(input),
          fileName: `${input.manufacturer} ${input.model}`,
          category: input.category ?? "Makine Katalogları",
          checksum: "",
          updatedAt: new Date().toISOString()
        }
      }));
      const indexed = await this.indexer.index(items);
      const byKey = new Map(indexed.map((entry) => [entry.naturalKey, entry.vectorId]));
      for (const { id, input } of toIndex) {
        const vectorId = byKey.get(machineNaturalKey(input));
        if (!vectorId) {
          summary.failed += 1;
          continue;
        }
        await prisma.machineRig.update({
          where: { id },
          data: { vectorId, status: "INDEXED", indexedAt: new Date() }
        });
        summary.indexed += 1;
      }
    }

    return summary;
  }
}
