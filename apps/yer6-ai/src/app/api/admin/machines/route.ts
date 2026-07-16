import { z } from "zod";
import { isAccessResponse } from "@/server/auth/workspace-access";
import { guardAdmin } from "@/server/auth/admin-guard";
import { createStructuredRuntime } from "@/server/knowledge/structured/runtime";
import type { MachineImportInput } from "@/server/knowledge/structured/machines";
import { MACHINE_SEED } from "@/server/knowledge/structured/seed-machines";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

const machineSchema = z.object({
  manufacturer: z.string().trim().min(1).max(120),
  model: z.string().trim().min(1).max(120),
  partition: z.string().trim().max(60).optional(),
  category: z.string().trim().max(120).optional(),
  torque: z.number().nonnegative().optional(),
  maxDepth: z.number().nonnegative().optional(),
  maxDiameter: z.number().nonnegative().optional(),
  weight: z.number().nonnegative().optional(),
  enginePower: z.number().nonnegative().optional(),
  applications: z.array(z.string().max(200)).max(50).optional(),
  advantages: z.array(z.string().max(200)).max(50).optional(),
  limitations: z.array(z.string().max(200)).max(50).optional(),
  specifications: z.record(z.string(), z.unknown()).optional(),
  source: z.string().trim().max(200).optional()
});

const importSchema = z.object({
  seed: z.boolean().optional(),
  reindex: z.boolean().optional(),
  machines: z.array(machineSchema).max(5_000).optional()
});

export async function GET(request: Request) {
  const access = await guardAdmin(request);
  if (isAccessResponse(access)) return access;
  const url = new URL(request.url);
  const { machines } = await createStructuredRuntime();
  const result = await machines.list({
    partition: url.searchParams.get("partition") || undefined,
    cursor: url.searchParams.get("cursor") || undefined,
    limit: Number.parseInt(url.searchParams.get("limit") ?? "100", 10) || 100
  });
  return Response.json({ ...result, total: await machines.count() });
}

export async function POST(request: Request) {
  const access = await guardAdmin(request, { rateLimit: true });
  if (isAccessResponse(access)) return access;
  const parsed = importSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "INVALID_IMPORT" }, { status: 400 });

  const inputs: MachineImportInput[] = parsed.data.seed
    ? MACHINE_SEED
    : (parsed.data.machines ?? []);
  if (inputs.length === 0) return Response.json({ error: "NO_MACHINES" }, { status: 400 });

  const { machines, indexingReady } = await createStructuredRuntime();
  const summary = await machines.importMany(inputs, { reindex: parsed.data.reindex });
  return Response.json({ summary, indexingReady }, { status: 201 });
}
