# YER6 AI — Oturum Devir Belgesi (claude.ai'de devam için)

> Bu belgeyi claude.ai'de yeni bir sohbete yapıştırarak tüm bağlamla kaldığınız yerden devam edebilirsiniz. Claude Code (CLI) ile yapılan çalışmanın tam özetidir. Tarih: 2026-07-15.

## Proje nedir
- **Uygulama:** `apps/yer6-ai` — geoteknik mühendislik **Copilot'u**. Next.js 15 + OpenNext, **Cloudflare Workers**'ta yayınlı: `https://ai.yer6zemin.com.tr`.
- **Repo:** `Desktop/yer6-zemin-web` (monorepo). Ana pazarlama sitesi kökte `src/` (yer6zemin.com.tr); Copilot uygulaması `apps/yer6-ai/`.
- **Altyapı:** Cloudflare R2 (doküman deposu) + Vectorize (vektör indeksi `yer6-rag`, 1024 boyut) + OpenAI embeddings (`text-embedding-3-large`) + Prisma Postgres (Accelerate/edge).
- **AI sağlayıcı:** OpenAI `gpt-5-mini` (Responses API, AI SDK). Fallback: Cloudflare Workers AI.

## Mimari — çekirdek
- **RAG pipeline** (`src/server/rag/`): provider soyutlamaları (storage/parser/embedding/vector/metadata), namespace tabanlı Vectorize (`company:yer6`, `global`, `standards`, `project:*`, `mod:*`), checksum ile artımlı indeksleme.
- **10 bilgi modülü** (`src/server/knowledge/modules.ts`): standards, papers, manuals, books, specifications, ground-investigation, machines, soils, calculations, decisions. Veri-güdümlü registry; her modül bağımsız indekslenebilir.
- **Yapılandırılmış modüller:** `MachineRig` (makine DB, 9 seed), `SoilProfile`, `DecisionRule` (4 seed) — Prisma + `StructuredVectorIndexer`.
- **Hesap motoru** (`src/server/engine/calculations/registry.ts`): bearing-capacity, elastic-settlement, earth-pressure (Rankine), jet-grout-quantity, pile-axial-capacity. Zod şemalı, formül+adım+birim+varsayım döndürür.
- **Karar motoru** (`src/server/engine/decisions/`): güvenli koşul DSL'i + seed kurallar.

## Copilot araçları (canlı chat'te çağrılabilir — `src/server/ai/tools/`)
Orchestrator `buildEngineeringTools(context)` bağlama göre araç setini kurar (model çağırmaya kendi karar verir, AI SDK çok-adımlı döngü):
- `calc_*` (5 hesaplayıcı) — her zaman (demo dahil).
- `match_equipment` — makine eşleştirme (DB → seed fallback). authenticated'ta canlı DB okur.
- `evaluate_decision` — karar motoru.
- `search_company_knowledge` — RAG şirket bilgisi (yalnız authenticated, demo değil).
- `external_research` — kontrollü web araştırması (Tavily pluggable; yalnız authenticated). **TAVILY_API_KEY gerektirir**; yoksa "yapılandırılmamış" döndürür (sahte veri yok).
- Chat route: `src/app/api/ai/chat/route.ts` (SSE stream: `sources`/`meta`/`tool`/`delta`/`done`/`error`).

## Bu oturumda tamamlananlar (fazlar)
1. **10 modüllü bilgi platformu** kuruldu (registry, namespace, Prisma modelleri + migration, yapılandırılmış importer'lar, hesap/karar motorları, admin API'ler).
2. **Copilot tool entegrasyonu:** araçlar gerçek chat akışına bağlandı; `done.tools` ile çağrım kanıtı; demo izolasyonu; admin guard (demo-deny + rate-limit).
3. **Production DB entegrasyonu:** Prisma Postgres + Accelerate edge client (`src/lib/prisma.ts`, lazy proxy). Eksik `init_core` migration üretildi; zincir `init_core→RAG→platform` uygulandı. 19 tablo doğrulandı. Seed: 9 makine + 4 karar kuralı.
4. **Production hardening:** çok-tool işlerinin kayıpsız tamamlanması (delta buffering ~15x olay azaltımı, O(n²)→O(n), done-garanti, tool ilerleme event'leri, `reasoningEffort=low`, `AI_MAX_OUTPUT_TOKENS=2000`). Kalıcı admin workflow + parola sıfırlama script'i. Auth doğrulaması (login/logout/session/expiration/authz).
5. **Kalıcı bilgi + araştırma:** YER6 website ingestion (`import-url` admin endpoint + `website-import.ts`), `external_research` aracı, kaynak önceliği A-F + cevap formatı + citation kuralları system prompt'a eklendi. **6 YER6 dokümanı kalıcı indekslendi (110 chunk).**
6. **UI badge düzeltmesi:** "Bilgi tabanı boş" badge'i statik/hardcoded'du → `/api/ai/knowledge/status` endpoint'ine bağlandı (gerçek sayım). Artık authenticated'ta **"6 kaynak hazır"** gösteriyor.

## Canlı üretim durumu (2026-07-15)
- **Deploy:** Worker Version `798fb37c` (`ai.yer6zemin.com.tr`).
- **DB:** 1 kalıcı ADMIN kullanıcı (parola kullanıcıda). 9 makine, 4 karar kuralı, **6 YER6 website dokümanı (READY, 110 chunk)**.
- **Vectorize:** ~110 vektör (indekslenmiş YER6 içeriği).
- **Chat kaynak-temelli:** "jet grout vs DSM" → 8 gerçek YER6 citation.

## Konfigürasyon / secret modeli
- Cloudflare Worker secret'ları: `DATABASE_URL` (prisma+postgres://...), `OPENAI_API_KEY`, `NEXTAUTH_SECRET`. (Opsiyonel: `TAVILY_API_KEY` — external_research için.)
- `wrangler.jsonc` vars: `AI_PROVIDER=auto`, `OPENAI_MODEL=gpt-5-mini`, `AI_MAX_OUTPUT_TOKENS=2000`, `AI_REASONING_EFFORT=low`, `RAG_*` ayarları, `YER6_ORGANIZATION_ID=yer6`.
- Yerel `apps/yer6-ai/.env` (gitignore'lu): `DATABASE_URL`. Secret'lar asla loglanmaz.
- **DB scriptleri:** `db:migrate:deploy`, `db:seed`, `db:verify`, `db:create-admin`, `db:reset-admin-password` (parolayı `ADMIN_PASSWORD` env'inden okur, basmaz).
- **Deploy:** `corepack pnpm --filter @yer6/ai cloudflare:deploy` (OpenNext build içeride `pnpm build` çağırır — PATH'te `pnpm` gerekir).

## Bilinen sınırlar (önemli)
- **Cloudflare Free plan ~2000ms CPU limiti:** 3+ araçlı tek-cevap `done`'dan önce kesilebiliyor (araçlar çağrılıyor, akıyor; cevap sonu kesilebilir). Çok büyük sayfa importu da (ör. zemin-iyilestirme-yontemleri) tek istekte CPU'yu aşıyor → tek-URL import gerekir. **Paid plan** bunu çözer (`limits.cpu_ms` + `AI_REASONING_EFFORT=medium`).
- `reasoningEffort=low` gpt-5-mini'yi hızlandırıyor ama araç çağırımını bazen atlatıyor (non-deterministik).
- `external_research` canlı sonuç için `TAVILY_API_KEY` ister (şu an "yapılandırılmamış" — dürüst, sahte citation yok).
- Tam sitemap (164 URL) crawl edilmedi — 6 kilit sayfa indekslendi; kalanı `POST /api/admin/knowledge/import-url` ile küçük batch'lerle eklenebilir.
- Türkçe çeviri admin özelliği + 16 ayrı curated koleksiyon yapılmadı (içerik mevcut kategorilere göre).

## Sıradaki muhtemel adımlar
1. **AI'yı Claude'a geçirmeyi** değerlendir (araç çağırımı daha tutarlı olabilir): AI SDK'ya `@ai-sdk/anthropic` ekle, `ANTHROPIC_API_KEY` secret, provider registry'ye Claude ekle. (Not: Cloudflare CPU limiti hâlâ geçerli.)
2. Kalan YER6 sitemap URL'lerini `import-url` ile küçük batch'lerle indeksle.
3. `TAVILY_API_KEY` ekleyip external_research'ü canlı doğrula.
4. Paid Cloudflare plan → `limits.cpu_ms` + `reasoningEffort=medium` → çok-tool tam tamamlanma.
5. Admin panelde Türkçe çeviri (kaynağı koruyarak) özelliği.

## Doğrulama komutları
- `corepack pnpm --filter @yer6/ai typecheck` / `lint` / `test` (143 test) / `build`.
- Canlı sağlık: `curl https://ai.yer6zemin.com.tr/api/ai/health` ve `/api/ai/rag/health`.
