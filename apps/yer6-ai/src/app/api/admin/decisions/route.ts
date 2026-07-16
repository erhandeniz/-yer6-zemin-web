import { z } from "zod";
import { isAccessResponse } from "@/server/auth/workspace-access";
import { guardAdmin } from "@/server/auth/admin-guard";
import { DECISION_SEED } from "@/server/engine/decisions/engine";
import { importDecisionRules, loadDecisionRules } from "@/server/engine/decisions/repository";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const conditionSchema = z.object({
  field: z.string().trim().min(1).max(80),
  op: z.enum(["eq", "neq", "lt", "lte", "gt", "gte", "in", "contains", "exists"]),
  value: z
    .union([
      z.string().max(200),
      z.number(),
      z.boolean(),
      z.null(),
      z.array(z.union([z.string().max(200), z.number(), z.boolean(), z.null()])).max(50)
    ])
    .optional()
});

const ruleSchema = z.object({
  key: z.string().trim().min(1).max(120),
  title: z.string().trim().min(1).max(240),
  category: z.string().trim().min(1).max(80),
  priority: z.number().int().min(0).max(10_000),
  conditions: z.array(conditionSchema).min(1).max(20),
  outcome: z.object({
    recommendation: z.string().min(1).max(1_000),
    rationale: z.string().max(1_000).optional(),
    methods: z.array(z.string().max(200)).max(20).optional(),
    cautions: z.array(z.string().max(400)).max(20).optional(),
    confidence: z.enum(["low", "medium", "high"]).optional()
  }),
  references: z.array(z.string().max(200)).max(30)
});

const importSchema = z.object({
  seed: z.boolean().optional(),
  rules: z.array(ruleSchema).max(2_000).optional()
});

export async function GET(request: Request) {
  const access = await guardAdmin(request);
  if (isAccessResponse(access)) return access;
  return Response.json({ rules: await loadDecisionRules() });
}

export async function POST(request: Request) {
  const access = await guardAdmin(request, { rateLimit: true });
  if (isAccessResponse(access)) return access;
  const parsed = importSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "INVALID_IMPORT" }, { status: 400 });

  const rules = parsed.data.seed ? DECISION_SEED : (parsed.data.rules ?? []);
  if (rules.length === 0) return Response.json({ error: "NO_RULES" }, { status: 400 });

  const summary = await importDecisionRules(rules);
  return Response.json({ summary }, { status: 201 });
}
