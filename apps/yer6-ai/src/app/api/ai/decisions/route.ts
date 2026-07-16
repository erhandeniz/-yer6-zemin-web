import { z } from "zod";
import { isAccessResponse, requireWorkspaceUser } from "@/server/auth/workspace-access";
import { evaluateContext } from "@/server/engine/decisions/repository";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const contextSchema = z.record(
  z.string().max(80),
  z.union([z.string().max(400), z.number(), z.boolean(), z.null()])
);

/**
 * Evaluate the decision engine against a normalized site/design context.
 * Returns ranked, referenced candidate strategies — never a final design.
 */
export async function POST(request: Request) {
  const access = await requireWorkspaceUser();
  if (isAccessResponse(access)) return access;
  const parsed = contextSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "INVALID_CONTEXT" }, { status: 400 });

  const recommendations = await evaluateContext(parsed.data);
  return Response.json({
    recommendations,
    disclaimer:
      "Preliminary candidate strategies only. Verify with site data and authorized geotechnical/structural design."
  });
}
