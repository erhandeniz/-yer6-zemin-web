-- RELEASE 1 / M2 — additive tenancy + registration foundation.
-- Adds Organization + AppSetting tables and profile/tenant columns on User.
-- Data fixes (idempotent, non-destructive):
--   * create the default "YER6" organization matching the legacy env id "yer6"
--     and attach every existing user to it (single-org history preserved);
--   * upgrade the founder account to SUPER_ADMIN (never downgraded) and set
--     the approved public title.

-- CreateTable Organization
CREATE TABLE IF NOT EXISTS "Organization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "Organization_slug_key" ON "Organization"("slug");
CREATE INDEX IF NOT EXISTS "Organization_createdAt_idx" ON "Organization"("createdAt");

-- CreateTable AppSetting
CREATE TABLE IF NOT EXISTS "AppSetting" (
    "key" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "updatedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "AppSetting_pkey" PRIMARY KEY ("key")
);

-- AlterTable User (all additive, nullable)
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "organizationId" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "title" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "phone" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "country" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "city" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "locale" TEXT;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'User_organizationId_fkey'
  ) THEN
    ALTER TABLE "User"
      ADD CONSTRAINT "User_organizationId_fkey"
      FOREIGN KEY ("organizationId") REFERENCES "Organization"("id")
      ON DELETE SET NULL ON UPDATE CASCADE;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS "User_organizationId_role_idx" ON "User"("organizationId", "role");

-- Data fix 1: default YER6 organization (id matches legacy env organizationId
-- "yer6" so existing organizationId strings on KnowledgeDocument / Proposal /
-- MemoryRecord / SpatialAsset keep pointing at the same tenant).
INSERT INTO "Organization" ("id", "name", "slug", "updatedAt")
VALUES ('yer6', 'YER6 Zemin Güçlendirme Geoteknik Mühendislik', 'yer6', CURRENT_TIMESTAMP)
ON CONFLICT ("id") DO NOTHING;

-- Data fix 2: attach existing users (single-tenant history) to YER6.
UPDATE "User" SET "organizationId" = 'yer6' WHERE "organizationId" IS NULL;

-- Data fix 3: founder account — upgrade only, never downgrade.
UPDATE "User"
SET "role" = 'SUPER_ADMIN',
    "title" = COALESCE("title", 'Kurucu & Geoteknik Proje Yöneticisi')
WHERE "email" = 'erhandeniz962@gmail.com';
