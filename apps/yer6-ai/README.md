# YER6 AI

Enterprise geotechnical engineering workspace built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui conventions, Zustand, React Query, Vercel AI SDK, UploadThing, PostgreSQL, Prisma and NextAuth.

## Local development

```bash
cp .env.example .env.local
corepack pnpm install
corepack pnpm --filter @yer6/ai db:generate
corepack pnpm --filter @yer6/ai dev
```

The chat never returns a canned engineering answer. Configure `OPENAI_API_KEY` for the primary OpenAI Responses API provider, or run through Cloudflare with the Workers AI binding. If neither provider is available, the API returns a localized configuration message.

## AI providers

Provider selection is server-only:

1. OpenAI Responses API when `OPENAI_API_KEY` is configured.
2. Cloudflare Workers AI through the `env.AI` binding when OpenAI is unavailable.
3. A localized `AI service not configured` response when neither provider exists.

Configuration:

```bash
AI_PROVIDER="auto"
OPENAI_API_KEY=""
OPENAI_MODEL="gpt-5-mini"
CLOUDFLARE_AI_MODEL="@cf/openai/gpt-oss-120b"
AI_MAX_OUTPUT_TOKENS="1200"
```

Routes:

- `POST /api/ai/chat` streams typed Server-Sent Events.
- `POST /api/ai/chat/stop` acknowledges best-effort server cancellation; the client also aborts its request directly.
- `GET /api/ai/health` reports provider configuration without returning secret values.

## Geotechnical Intelligence and RAG

The response path searches isolated project, company and standards namespaces before model inference. Retrieved chunks are treated as untrusted evidence and carry document, page/section, version and scope metadata. When nothing relevant is found, the API deterministically discloses that the answer uses general engineering knowledge.

Layers:

- `src/server/rag/storage`: UploadThing and Cloudflare R2 document storage adapters.
- `src/server/rag/parsers`: Cloudflare Markdown conversion plus TXT/Markdown and DWG/DXF/IFC metadata parsers.
- `src/server/rag/chunking`: heading- and page-aware deterministic chunking.
- `src/server/rag/embeddings`: configurable Workers AI BGE-M3 or OpenAI embeddings.
- `src/server/rag/vectors`: Cloudflare Vectorize adapter and namespace isolation.
- `src/server/rag/retrieval-engine.ts`: score filtering and bounded retrieval context.
- `src/server/rag/citation-engine.ts`: localized citations and no-source disclosure.
- `src/server/memory`: project conversations, project memory and company memory context.

Supported input includes PDF, DOCX, TXT, Markdown, Excel, JPG/PNG and metadata-only DWG, DXF and IFC. Standards from TS, Eurocode, ASTM, EN, ACI, FHWA, BS and DIN are stored as rights-aware catalogue records. `REFERENCE_ONLY` and `RESTRICTED` records never index protected standard text. `PUBLIC` and `LICENSED_INTERNAL` content is indexed only when `contentIndexingAllowed=true` is explicitly recorded.

RAG configuration:

```bash
RAG_ENABLED="true"
RAG_REQUIRE_AUTH="true"
RAG_STORAGE_PROVIDER="uploadthing" # or r2
RAG_EMBEDDING_PROVIDER="cloudflare-workers-ai" # or openai
RAG_EMBEDDING_MODEL="@cf/baai/bge-m3"
RAG_EMBEDDING_DIMENSIONS="1024"
RAG_VECTOR_PROVIDER="cloudflare-vectorize"
RAG_INGESTION_MODE="inline" # use webhook for large production jobs
```

No API key belongs in source control. Use Wrangler secrets for `DATABASE_URL`, `NEXTAUTH_SECRET`, `UPLOADTHING_TOKEN`, `OPENAI_API_KEY` and `RAG_INGESTION_SECRET`.

RAG and memory routes:

- `GET|POST /api/admin/knowledge/documents`
- `PATCH|DELETE /api/admin/knowledge/documents/:documentId`
- `POST /api/admin/knowledge/documents/:documentId/ingest`
- `POST /api/admin/knowledge/search`
- `GET /api/admin/knowledge/stats`
- `GET /api/admin/knowledge/categories`
- `GET /api/ai/rag/health`
- `GET|POST /api/admin/standards`
- `PATCH|DELETE /api/admin/standards/:standardId`
- `GET|POST /api/projects/:projectId/memory`
- `GET|POST /api/admin/company-memory`
- `POST /api/internal/rag/ingest` for secret-authenticated background ingestion.

## Database

Point `DATABASE_URL` to a PostgreSQL database, then run:

```bash
corepack pnpm --filter @yer6/ai db:migrate
```

The Prisma schema includes users, sessions, projects, documents, conversations, messages, analyses, audit logs, knowledge documents/chunks, engineering standards, project/company memory and future spatial assets.

## Cloudflare

YER6 AI uses OpenNext for Cloudflare Workers. `wrangler.jsonc` defines the Workers AI binding and an eight-requests-per-minute rate limiter. Add encrypted secrets through Wrangler or the Cloudflare dashboard, then deploy:

```bash
corepack pnpm --filter @yer6/ai cloudflare:deploy
```

`NEXTAUTH_SECRET` is required for sessions. `DATABASE_URL` and `UPLOADTHING_TOKEN` are required when production authentication and managed uploads are enabled. `OPENAI_API_KEY` is optional because Workers AI is the configured fallback.

Create RAG resources before enabling the commented bindings in `wrangler.jsonc`:

```bash
wrangler vectorize create yer6-rag --dimensions=1024 --metric=cosine
wrangler r2 bucket create yer6-rag-documents
wrangler secret put DATABASE_URL
wrangler secret put NEXTAUTH_SECRET
wrangler secret put UPLOADTHING_TOKEN
wrangler secret put RAG_INGESTION_SECRET
```

Vectorize dimensions must match the selected embedding model. Use a dedicated ingestion Worker or secured webhook for large documents, retries and dead-letter handling. R2 remains optional when UploadThing is the configured storage provider.

## Production controls

- Keep PostgreSQL in an EU region close to the Cloudflare Worker.
- Replace demo credentials with organization SSO or provision hashed user passwords.
- Require authenticated sessions in the chat and upload routes before public launch.
- Keep `AI_PROVIDER=auto`; use `cloudflare` only for an intentional Cloudflare-only environment.
- Monitor Workers AI usage and rate-limit responses in Cloudflare observability.
- Run Prisma migrations in CI before deploying the Worker.
- Configure object retention and deletion policies to match project contracts.
- Set `AUTH_REQUIRED=true` before `RAG_ENABLED=true`; unauthenticated RAG retrieval is intentionally unavailable.
- Create and bind Vectorize, then verify `/api/ai/rag/health` reports `ready: true`.
- Confirm standard licence metadata and indexing permission before uploading protected material.
- Test project/company namespace isolation with two separate users and projects.
- Test citation document/page/version display and conflicting-document warnings.
- Configure background ingestion retries, idempotency monitoring and a dead-letter workflow.
- Back up PostgreSQL and define R2/UploadThing lifecycle, legal hold and deletion procedures.
- Run typecheck, lint, tests, Next.js build and OpenNext Cloudflare build before deployment.
