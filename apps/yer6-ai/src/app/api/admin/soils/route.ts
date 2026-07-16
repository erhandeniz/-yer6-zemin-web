import { z } from "zod";
import { isAccessResponse } from "@/server/auth/workspace-access";
import { guardAdmin } from "@/server/auth/admin-guard";
import { createStructuredRuntime } from "@/server/knowledge/structured/runtime";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

const layerSchema = z.object({
  from: z.number(),
  to: z.number(),
  description: z.string().max(400).optional(),
  classification: z.string().max(120).optional(),
  sptN: z.number().optional(),
  cptQc: z.number().optional(),
  cohesion: z.number().optional(),
  phi: z.number().optional(),
  unitWeight: z.number().optional()
});

const soilSchema = z.object({
  name: z.string().trim().min(1).max(200),
  partition: z.string().trim().max(60).optional(),
  classification: z.string().trim().max(120).optional(),
  location: z.string().trim().max(240).optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  depthFrom: z.number().optional(),
  depthTo: z.number().optional(),
  groundwater: z.number().optional(),
  parameters: z.record(z.string(), z.unknown()).optional(),
  layers: z.array(layerSchema).max(200).optional(),
  sourceReportId: z.string().trim().max(120).optional(),
  source: z.string().trim().max(200).optional()
});

const importSchema = z.object({
  reindex: z.boolean().optional(),
  soils: z.array(soilSchema).min(1).max(5_000)
});

export async function GET(request: Request) {
  const access = await guardAdmin(request);
  if (isAccessResponse(access)) return access;
  const url = new URL(request.url);
  const { soils } = await createStructuredRuntime();
  const result = await soils.list({
    partition: url.searchParams.get("partition") || undefined,
    classification: url.searchParams.get("classification") || undefined,
    cursor: url.searchParams.get("cursor") || undefined,
    limit: Number.parseInt(url.searchParams.get("limit") ?? "100", 10) || 100
  });
  return Response.json({ ...result, total: await soils.count() });
}

export async function POST(request: Request) {
  const access = await guardAdmin(request, { rateLimit: true });
  if (isAccessResponse(access)) return access;
  const parsed = importSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "INVALID_IMPORT" }, { status: 400 });

  const { soils, indexingReady } = await createStructuredRuntime();
  const summary = await soils.importMany(parsed.data.soils, { reindex: parsed.data.reindex });
  return Response.json({ summary, indexingReady }, { status: 201 });
}
