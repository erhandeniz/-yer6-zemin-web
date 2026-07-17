# YER6 Geotechnical Intelligence Hub — Phase 2

Branch: `feature/yer6-intelligence-hub-phase2` (from `release/...rc1` @ `3ae3b7e`)
Status: **Package A code-complete (awaiting deploy) · Package B engine core complete (flagged off) · C–F designed**

---

## PACKAGE A — Public demo reliability (Workstream 0)

### Demo failure ROOT CAUSE (reproduced live, then fixed)
- **Live reproduction:** anonymous `GET https://ai.yer6zemin.com.tr/demo/chat` → **307 redirect to
  `/login?callbackUrl=%2Fdemo%2Fchat`**. Exactly matches "demo failed to open on another phone" —
  every first-time/anonymous visitor (mobile or desktop) hits the login wall; no cookie, device or
  network factor involved.
- **Code root cause:** the `/demo` bypass in `src/middleware.ts` (early `return NextResponse.next()`
  for `/demo*` + `demo` exclusion in the matcher) existed **only as an uncommitted local edit**.
  The committed middleware protected ALL routes, so the deployed Worker redirects `/demo/*` → `/login`.
  (Contributing factor: the dependency-closure commit used pathspec `src/**/*.ts`, which missed the
  one modified file directly under `src/` — `middleware.ts`.)
- **Fix:** corrected middleware committed (bypass + matcher). Defense-in-depth verified in code:
  the chat API accepts demo traffic without a session (`x-yer6-demo`), demo tool context has
  `retrieval: null` (production knowledge unreachable), and the rate limiter applies per-IP to
  demo traffic. Phase 1 already removed the "source-empty" canned warnings from casual chat.

### Package A tests added
- `src/middleware.test.ts`: anonymous `/demo`, `/demo/chat`, `/demo/projects`, `/demo/chat?utm=ad`
  pass through with `AUTH_REQUIRED=true` (no redirect); non-demo `/chat` still redirects to login.
- `src/app/api/ai/chat/route.test.ts`: anonymous demo request streams a model answer with **no
  session lookup** and **no `search_company_knowledge` tool exposed** (private-data isolation).

### Audit notes (rest of the matrix)
- Redirect loops: none besides the root cause; `/login` is matcher-excluded.
- SSE: `text/event-stream` with batched frames (90-char flush) — mobile-safe.
- Viewport meta present (`width=device-width`); dark theme unchanged.
- CSP/WAF/service-worker: no service worker registered; no custom CSP breaking the demo.
- Conversion path: login page carries "Demo çalışma alanını aç"; demo shell keeps the standard
  navigation. A richer "Tam Sürüme Geç / Teklif İste" banner is listed under remaining work.
- Real-device browser automation (iPhone Safari/Android Chrome) requires the deployed fix; the
  matrix is encoded as unit/integration tests now, live re-check follows deployment.

---

## PACKAGE B — YER6 CostLab (Workstream 1, foundation)

New module `src/server/costlab/`:
- `types.ts` — provenance-carrying inputs (`source: user/document/admin_price_book/calculated`,
  date, confidence, confirmed), common project inputs, cost lines with public visibility flags,
  estimate result with ranges/drivers/missing-info/confidence + mandatory TR disclaimer.
- `jet-grout.ts` — **original, deterministic, versioned** engine (`jetgrout-1.0.0`):
  - inputs: system (Jet1/2/3), diameter, count, depth, cement dosage kg/m, productivity m/day,
    trial columns, core/UCS tests, difficult-drilling allowance;
  - buildup: cement · rig+pump+plant days · fuel · consumables/m · crew days · spoil m³ (system-
    dependent return fraction) · mobilisation · tests → direct; +risk% +overhead% → indirect;
    +profit% → subtotal; +VAT → total; unit ₺/m and ₺/m³; duration; low/likely/high band that
    widens with missing data; top-5 cost drivers; confidence score; missing-information list;
  - all money via decimal-safe `roundHalfUp`; **AI never does the arithmetic**;
  - `toPublicEstimate()` strips profit/risk/overhead and internal-only lines;
  - feature flag `COSTLAB_ENABLED` (default **off** — dark in production).
- `jet-grout.test.ts` — determinism, exact component totals, VAT/total chain, ranges, drivers,
  missing-input honesty, public-projection separation, flag default.
- In-sandbox engine execution: **14/14 math checks passed**.

Price book: schema fields specified (item, unit, region, source type, value, currency, VAT status,
valid-from/expiry, evidence, approver, revision) — DB model + ADMIN UI are next-step work (needs an
additive migration executed by the operator; intentionally not shipped in this pass).

## PACKAGES C–F — designed, not yet implemented (honest scope)
- **C. DSM + Fore Kazık engines & method comparison:** same framework; DSM adds volume-based
  outputs; comparison engine must never pick by price alone and always requires engineer review.
- **D. Document Intelligence:** PDF/DOCX/XLSX/CSV/image/DXF first; DWG honestly unsupported
  (retain original, offer DXF/PDF conversion, never invent dimensions); extraction results marked
  confirmed/inferred/uncertain with page citations.
- **E. Knowledge Hub:** source registry (FHWA/GMM Vol I-II, deep mixing, drilled shafts, anchors,
  micropiles, QC/load testing, liquefaction…), pipeline discovery→validation→licence check→ADMIN
  approval→ingestion→TR/EN/AR original summaries→citation test; nothing auto-published.
- **F. Opportunity Radar:** EKAP, TED, UNGM, World Bank, EBRD via official feeds only; relevance
  scoring; ADMIN dashboards; notifications architecture disabled by default; no auto-bidding, ever.
- Isolation rule honoured everywhere: public-web research agents never receive private YER6
  documents or secrets; private-data tools and web tools run in separate stages.

## Files changed (this branch)
- `src/middleware.ts` (committed fix — was uncommitted-local-only)
- `src/middleware.test.ts` (+2 demo tests)
- `src/app/api/ai/chat/route.test.ts` (+1 demo isolation test)
- `src/server/costlab/{types,jet-grout,jet-grout.test}.ts` (new)
- `docs/YER6-INTELLIGENCE-HUB-PHASE2.md` (this file)

## Gates run in this environment
- Typecheck: **0 errors** · Lint (ts-eslint zero-warning rules): **0**
- CostLab engine math (Node execution): **14/14**
- Live anonymous reproduction of the demo defect: **confirmed** (root cause, not symptom)
- `vitest` full suite / production build / deploy: **operator machine required**
  (no network, macOS-native binaries, no Cloudflare/GitHub credentials here)

## Deployment & verification state
- Nothing deployed in this pass. Production Worker unchanged (last live: `804914f5…`;
  recorded rollback: `798fb37e…`).
- **Package A must be released first**: push branch → clean worktree → install/typecheck/lint/
  test/build → record Worker version → deploy → live anonymous `/demo/chat` check on iPhone
  Safari + Android Chrome + desktop → then Package B+ flags stay off until their own gates pass.
- Also still pending from earlier: proposal-PDF font upload to R2 (two `wrangler r2 object put`
  commands) and Block E live proposal verification; Phase 1 commit `3ae3b7e` push.

## Feature flags
- `COSTLAB_ENABLED` (off) — CostLab dark until its production gate passes.
- Opportunity Radar / notifications: not yet implemented; will ship disabled.

## PACKAGE A — DEPLOYED & LIVE-VERIFIED (2026-07-17)

- Commits: `2018f7d` (demo fix + CostLab) → `8526101` (dep closure: @prisma/extension-accelerate,
  tsx, db scripts) → `dd2edc2` (lint-clean public projection). Pushed to
  `origin/feature/yer6-intelligence-hub-phase2`.
- Clean detached worktree gate (operator): `pnpm install --frozen-lockfile` ✓, typecheck ✓,
  lint `--max-warnings=0` ✓, **vitest 216/216 ✓** (54 files), `next build` ✓, OpenNext build ✓.
- Rollback target recorded: previous live Worker version **`6a04093e-7922-4af9-97d0-0ccbdb1ae639`**
  (`npx wrangler rollback 6a04093e-...` if needed; additive DB tables are kept, no reverse migration).
- Deployed to the existing `yer6-ai` Worker (`ai.yer6zemin.com.tr`) — no new Worker/project.
- **Live verification (HTTP, cookieless = first-time anonymous visitor):**
  - `GET /demo/chat` → **200, demo workspace rendered, NO redirect to /login** (root cause fixed).
    `meta-viewport: width=device-width…` present → mobile-ready markup.
  - `GET /api/ai/health` → `configured`, OpenAI active, knowledge base `ready` (chat/RAG intact).
  - Demo project context shows `0 dosya / İndekslenmiş kaynak yok` → private data isolated.
- **Known cosmetic follow-up:** the demo header still renders the "Bağlamda kaynak yok" status
  label (empty-context indicator). It does not block chat, but Workstream 0/8 wants it hidden from
  normal chat UI — deferred to a small UI pass (i18n-provider) to avoid an untested visual change now.
- **Operator final step:** on-device tap-test (iPhone Safari + Android Chrome) to confirm the visual
  rendering; the server now serves the demo to any anonymous client (the exact failure mode is gone).

## Remaining limitations
- Packages C–F are design-complete only; no code shipped for them in this pass.
- Price book DB model needs an additive migration (operator-run) before CostLab can go live.
- Real-device mobile matrix requires the deployed fix; unit tests cover the logic now.
- Live "verified on mobile" claim is intentionally withheld until post-deploy checks pass.
