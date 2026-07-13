# YER6 AI

Enterprise geotechnical engineering workspace built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui conventions, Zustand, React Query, Vercel AI SDK, UploadThing, PostgreSQL, Prisma and NextAuth.

## Local development

```bash
cp .env.example .env.local
corepack pnpm install
corepack pnpm --filter @yer6/ai db:generate
corepack pnpm --filter @yer6/ai dev
```

The interface runs in demo mode without an OpenAI key. Configure `OPENAI_API_KEY` to enable streamed model responses and `UPLOADTHING_TOKEN` for managed uploads.

## Database

Point `DATABASE_URL` to a PostgreSQL database, then run:

```bash
corepack pnpm --filter @yer6/ai db:migrate
```

The Prisma schema includes users, sessions, projects, documents, conversations, messages, analyses and audit logs.

## Cloudflare

YER6 AI uses OpenNext for Cloudflare Workers. Add encrypted secrets through Wrangler or the Cloudflare dashboard, then deploy:

```bash
corepack pnpm --filter @yer6/ai cloudflare:deploy
```

Required production secrets: `DATABASE_URL`, `NEXTAUTH_SECRET`, `OPENAI_API_KEY` and `UPLOADTHING_TOKEN`.

## Production controls

- Keep PostgreSQL in an EU region close to the Cloudflare Worker.
- Replace demo credentials with organization SSO or provision hashed user passwords.
- Require authenticated sessions in the chat and upload routes before public launch.
- Run Prisma migrations in CI before deploying the Worker.
- Configure object retention and deletion policies to match project contracts.
