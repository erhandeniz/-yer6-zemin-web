export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const email = process.env.DEMO_EMAIL?.trim();
  const password = process.env.DEMO_PASSWORD?.trim();

  if (!email || !password) {
    return Response.json({ error: "DEMO_MODE_DISABLED" }, { status: 404 });
  }

  return Response.json({ email, password });
}
