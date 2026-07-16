import { z } from "zod";
import { isAccessResponse, requireWorkspaceUser } from "@/server/auth/workspace-access";
import { calculatorCatalog, runCalculation } from "@/server/engine/calculations/registry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const runSchema = z.object({
  key: z.string().trim().min(1).max(80),
  input: z.record(z.string(), z.unknown())
});

export async function GET() {
  const access = await requireWorkspaceUser();
  if (isAccessResponse(access)) return access;
  return Response.json({ calculators: calculatorCatalog() });
}

export async function POST(request: Request) {
  const access = await requireWorkspaceUser();
  if (isAccessResponse(access)) return access;
  const parsed = runSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "INVALID_REQUEST" }, { status: 400 });

  const outcome = runCalculation(parsed.data.key, parsed.data.input);
  if (!outcome.ok) {
    const status = outcome.error === "UNKNOWN_CALCULATOR" ? 404 : 400;
    return Response.json(outcome, { status });
  }
  return Response.json(outcome);
}
