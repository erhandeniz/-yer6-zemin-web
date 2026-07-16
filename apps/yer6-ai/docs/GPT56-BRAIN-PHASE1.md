# GPT-5.6 Brain — Phase 1 (root cause + status)

## Objective
Replace the rigid RAG-first chat path with a model-first intelligence runtime
where RAG / calculations / company knowledge / proposals are *optional tools*.

## Current request path (traced, live code)
```
browser chat input (src/components/chat/*)
  → POST /api/ai/chat  (src/app/api/ai/chat/route.ts)
    → auth: getServerSession (next-auth) + AUTH_REQUIRED / demo
    → conversation history: loadMemoryKnowledge / resolveKnowledgeScope (src/server/memory/project-memory.ts)
    → provider selection: createProviderChain(config, bindings.AI)  (src/server/ai/providers/registry.ts)
        openAIProvider (@ai-sdk/openai, model = config.openAIModel) → cloudflareProvider (Workers AI) fallback
    → RAG retrieval: knowledgeBase + retrieval (src/server/rag/*)
    → *** RAG-FIRST BLOCK ***  (route.ts ~L152-153)
        if (knowledgeChunks.length === 0 && !isGreetingOnly(latestQuestion)) {
          const disclosure = `${noSourceNotice(locale)}\n\n`;  // canned warning prepended
        }
    → model call (streamed), tools = buildEngineeringTools(...)
    → SSE stream (encodeSSE / DELTA_FLUSH_CHARS batching)
    → UI (i18n-provider labels)
```

## Root cause
1. **Forced canned disclosure.** `src/server/rag/citation-engine.ts` → `noSourceNotice()`:
   - tr: "Bilgi tabanında bu soruyla ilgili bir belge bulunamadı. Aşağıdaki değerlendirme genel mühendislik bilgisine dayanır."
   - Prepended by `route.ts` for *every* non-greeting question with zero RAG chunks.
   - `isGreetingOnly()` only exempts exact greetings (merhaba/selam/hello/…), so ordinary
     conversation and general questions are mislabeled as "no knowledge base document".
2. **RAG is on the global critical path**, not a tool the model chooses. Retrieval runs for
   every message and its emptiness changes the visible answer.
3. **Model.** Current model is `gpt-5-mini` (`src/server/ai/config.ts` default `openai: "gpt-5-mini"`,
   over/ridden by `OPENAI_MODEL`). Provider = `@ai-sdk/openai` (Vercel AI SDK), not `openai.responses.create`.
4. **UI labels** "Bilgi tabanı boş" / "Bağlamda kaynak yok" exist in `src/components/i18n-provider.tsx`.

## Intended fix (Phase 1)
- New `src/server/intelligence/` runtime calling the OpenAI **Responses API** with `model: "gpt-5.6"`,
  `reasoning: { effort: "low" }` for ordinary chat.
- `search_company_knowledge` becomes a typed function tool the model may call; **zero RAG results
  no longer block** the model. Canned disclosure removed from the normal path (kept only for
  ADMIN diagnostics). Honest unavailability only for missing *company-specific* facts.
- Conversation continuity via the existing conversation DB (no new memory store in Phase 1).
- Honest provider-failure message; never fabricate, never silently fall back to Cloudflare/static.

## Phase 1 status: STOPPED SAFELY (verification gate not satisfiable in this environment)
The prerequisite — **verify real `gpt-5.6` access (Step 2)** — cannot be executed here:
1. `OPENAI_API_KEY` is **not present locally** (it is a Cloudflare Worker secret); this environment
   has **no network access to `api.openai.com`**. The verification call cannot run.
2. `gpt-5.6` / `gpt-5.6-sol` could **not be confirmed** as accessible OpenAI models. The app
   currently uses `gpt-5-mini`. Per policy, `gpt-5-mini` is **not** silently substituted.
3. The `openai` npm package (for `openai.responses.create`) is **not installed** and cannot be
   added offline. (The verification script below uses `fetch` against the REST API to avoid this.)

Because the model-access gate cannot be verified, the live chat brain was **not** rewired and
**nothing was deployed** (production unchanged), in line with Step 2 and Step 11.

## How to clear the gate and resume (operator machine, has key + network)
```bash
cd ~/Desktop/yer6-zemin-web/apps/yer6-ai
# export the key for THIS shell only (hidden; not written to .env, not in history):
read -rs OPENAI_API_KEY && export OPENAI_API_KEY
node --experimental-strip-types scripts/verify-brain-model.ts   # or: npx tsx scripts/verify-brain-model.ts
unset OPENAI_API_KEY
```
Expected on success: `model=gpt-5.6  output=YER6_BRAIN_OK`.
- If `gpt-5.6` is accessible → I proceed to build `src/server/intelligence/*`, make RAG a tool,
  wire the route, add the Step 9 regression tests, and run the local quality gate.
- If only `gpt-5.6-sol` is accessible → we confirm the exact model id first, then proceed with it.
- If neither is accessible → remain stopped; report the sanitized HTTP status + OpenAI error code.

The verification script prints only `model`, HTTP `status`, `requestId`, `latency`, and the
`output` text. It never prints, logs, or embeds the API key.

---

## UPDATE — Phase 1 IMPLEMENTED (gate cleared)

`gpt-5.6` access was verified by the operator: **model=gpt-5.6, HTTP 200, output=YER6_BRAIN_OK,
no fallback**. Implementation completed (no deploy, no migration):

**New — `src/server/intelligence/`**
- `errors.ts` — typed `IntelligenceError` + honest localized failure message (reuses the
  existing "service unavailable" copy; never the old RAG warning, never fabricated).
- `model-policy.ts` — `PRIMARY_MODEL = "gpt-5.6"`; `resolveModelPolicy` (low effort for ordinary chat).
- `telemetry.ts` — internal-only turn telemetry (model, latency, tools, status) — never shown in UI.
- `context-builder.ts` — concise model-first system instruction + full recent history (no forced RAG).
- `tool-registry.ts` — assembles optional tools; wires a citation collector.
- `response-parser.ts` — `CitationCollector` (real sources only, de-duplicated).
- `runtime.ts` — `prepareIntelligenceTurn` + `selectPrimaryProvider` (GPT-5.6 only; refuses silent
  Cloudflare/static fallback).

**Changed**
- `src/app/api/ai/chat/route.ts` — rewired to the GPT-5.6 runtime. Removed the forced RAG
  pre-retrieval and the `noSourceNotice` prepend; RAG is now a tool the model may call; citations
  surface only from real tool results; provider failure → honest message; streaming/abort/
  persistence preserved.
- `src/server/ai/config.ts` + `wrangler.jsonc` — model default/var → `gpt-5.6`.
- `src/server/ai/tools/contracts.ts` + `tools/knowledge.ts` — additive `onCitations` sink so the
  knowledge tool reports citations only when it returns real sources.

**Conversation-history strategy:** the full recent history (last N turns, default 20) is passed to
the model each turn via the existing conversation payload — no new memory store in Phase 1.

**How RAG became optional:** `search_company_knowledge` is present only for authenticated,
non-demo traffic with retrieval configured; it is one tool among many; zero results return a normal
(non-blocking) tool result; the model answers ordinary/general questions without it.

**Tests:** `src/server/intelligence/intelligence.test.ts` (Tests 1–6 + policy/history/citations).
Proposal/PDF regression tests unchanged.

**In-sandbox verification:** typecheck **0 errors**; lint (`@typescript-eslint`) **0 warnings**;
intelligence core logic **10/10** under Node. Full `vitest` (tool-graph tests need the `ai`
package) and `next build` require the operator toolchain (macOS-native binaries) and are run there.

## FINAL VERIFICATION (operator machine)

- GPT-5.6 real API call: **HTTP 200, output=YER6_BRAIN_OK, no fallback**.
- Chat route tests: **11/11 passed** (`src/app/api/ai/chat/route.test.ts`).
- Full suite: **206/206 passed** (intelligence + proposal/PDF + existing).
- Typecheck: **passed**. Lint: **0 errors, 0 warnings**. Production build: **passed**.

### Chat route test fixes (5 previously failing)
1. `streams provider metadata…` — restored the initial `sources` frame (real defect); mock provider → `openai` (GPT-5.6 is the brain, not Cloudflare).
2. `emits tool progress…` — restored the initial `sources` frame (real defect).
3. `falls back … primary fails` — rewritten: honest localized error, **no silent Cloudflare fallback** (architecture change).
4. `does not mix providers after partial output` — route now emits an honest `error` on any mid-stream provider failure instead of `done` (real defect).
5. `passes multi-turn history` — mock provider → `openai`; history reaches the runtime as `[history]` in order.
No test was skipped, weakened, or deleted.

**Remaining real limitations:** (1) Migration/deploy remain out of scope for Phase 1 — nothing
deployed or pushed. (2) On Cloudflare Workers the model call still runs within the platform CPU
window; very long multi-tool answers benefit from the Paid plan. (3) `gpt-5.6` must remain an
accessible model id in the OpenAI project; if it becomes unavailable the runtime returns an honest
error and does not silently downgrade. (4) Project memory is not yet a tool (Phase 2).

PHASE 1: GPT-5.6 BRAIN VERIFIED LOCALLY

