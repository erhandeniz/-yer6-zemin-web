/**
 * Safe ADMIN diagnostic: verify real access to the GPT-5.6 brain via the OpenAI
 * Responses API. Uses `fetch` (no `openai` SDK dependency). Reads OPENAI_API_KEY
 * from the environment and NEVER prints, logs, or embeds it.
 *
 * Run (operator machine, key + network available):
 *   read -rs OPENAI_API_KEY && export OPENAI_API_KEY
 *   npx tsx scripts/verify-brain-model.ts
 *   unset OPENAI_API_KEY
 *
 * Reports only: model, HTTP status, request id, latency, output text (and, on
 * failure, the sanitized OpenAI error code/type/message).
 */

const ENDPOINT = "https://api.openai.com/v1/responses";
const PROMPT = "Return exactly: YER6_BRAIN_OK";
const CANDIDATES = ["gpt-5.6", "gpt-5.6-sol"] as const;

const KEY = process.env.OPENAI_API_KEY;

function redact(text: string): string {
  if (!text) return text;
  let out = text;
  if (KEY && KEY.length > 8) out = out.split(KEY).join("[REDACTED]");
  // Also strip anything that looks like an OpenAI key, defensively.
  return out.replace(/sk-[A-Za-z0-9_\-]{16,}/g, "[REDACTED]");
}

interface BrainReport {
  model: string;
  status: number | "network_error";
  requestId: string | null;
  latencyMs: number;
  ok: boolean;
  output?: string;
  errorCode?: string;
  errorType?: string;
  message?: string;
}

function extractText(body: unknown): string {
  const b = body as {
    output_text?: string;
    output?: Array<{ content?: Array<{ text?: string }> }>;
  };
  if (typeof b?.output_text === "string" && b.output_text.trim()) return b.output_text.trim();
  const parts = b?.output?.flatMap((o) => o.content ?? []) ?? [];
  return parts
    .map((c) => c.text ?? "")
    .join("")
    .trim();
}

async function testModel(model: string): Promise<BrainReport> {
  const started = Date.now();
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        authorization: `Bearer ${KEY}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({ model, input: PROMPT, reasoning: { effort: "low" } })
    });
    const latencyMs = Date.now() - started;
    const requestId = res.headers.get("x-request-id");
    const raw = await res.text();
    let parsed: unknown = null;
    try {
      parsed = JSON.parse(raw);
    } catch {
      /* non-JSON error body */
    }
    if (res.ok) {
      return { model, status: res.status, requestId, latencyMs, ok: true, output: redact(extractText(parsed)) };
    }
    const err = (parsed as { error?: { code?: string; type?: string; message?: string } })?.error;
    return {
      model,
      status: res.status,
      requestId,
      latencyMs,
      ok: false,
      errorCode: err?.code ?? undefined,
      errorType: err?.type ?? undefined,
      message: redact((err?.message ?? raw).slice(0, 300))
    };
  } catch (e) {
    return {
      model,
      status: "network_error",
      requestId: null,
      latencyMs: Date.now() - started,
      ok: false,
      message: redact(String((e as Error).message ?? e).slice(0, 300))
    };
  }
}

async function main() {
  if (!KEY) {
    console.error("OPENAI_API_KEY is not set in the environment. Aborting (no key printed).");
    process.exit(2);
  }
  for (const model of CANDIDATES) {
    const r = await testModel(model);
    const line = {
      model: r.model,
      status: r.status,
      requestId: r.requestId,
      latencyMs: r.latencyMs,
      ok: r.ok,
      output: r.output,
      errorCode: r.errorCode,
      errorType: r.errorType,
      message: r.message
    };
    console.log(JSON.stringify(line));
    if (r.ok && r.output === "YER6_BRAIN_OK") {
      console.log(`VERIFIED: model=${r.model} output=YER6_BRAIN_OK`);
      process.exit(0);
    }
    if (r.ok) {
      console.log(`REACHABLE but unexpected output for ${r.model}: ${JSON.stringify(r.output)}`);
      process.exit(0);
    }
    // On model-not-found, fall through to the next candidate; otherwise stop.
    const notFound = r.errorCode === "model_not_found" || r.status === 404;
    if (!notFound) break;
  }
  console.error("GPT-5.6 brain NOT verified. See sanitized status/error above. No fallback used.");
  process.exit(1);
}

void main();
