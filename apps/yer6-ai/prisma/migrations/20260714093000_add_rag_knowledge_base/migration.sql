CREATE TYPE "KnowledgeDocumentStatus" AS ENUM (
  'UPLOADED',
  'QUEUED',
  'PARSING',
  'CHUNKING',
  'EMBEDDING',
  'INDEXING',
  'READY',
  'FAILED',
  'ARCHIVED'
);

CREATE TYPE "KnowledgeDocumentScope" AS ENUM ('PROJECT', 'COMPANY', 'STANDARDS');
CREATE TYPE "StandardLicenseStatus" AS ENUM ('PUBLIC', 'LICENSED_INTERNAL', 'REFERENCE_ONLY', 'RESTRICTED');
CREATE TYPE "MemoryScope" AS ENUM ('PROJECT', 'COMPANY');
CREATE TYPE "MemoryType" AS ENUM (
  'CONVERSATION', 'DOCUMENT', 'ANALYSIS', 'QUANTITY', 'PRELIMINARY_COST',
  'PROPOSAL', 'TECHNICAL_NOTE', 'PROCEDURE', 'EQUIPMENT'
);
CREATE TYPE "SpatialAssetKind" AS ENUM ('BIM', 'DRONE', 'POINT_CLOUD', 'LIDAR', 'GIS', 'MODEL_3D');
CREATE TYPE "SpatialAssetStatus" AS ENUM ('REGISTERED', 'PROCESSING', 'READY', 'FAILED', 'ARCHIVED');

CREATE TABLE "EngineeringStandard" (
  "id" TEXT NOT NULL,
  "family" TEXT NOT NULL,
  "code" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "edition" TEXT,
  "version" TEXT,
  "publishedAt" TIMESTAMP(3),
  "licenseStatus" "StandardLicenseStatus" NOT NULL DEFAULT 'REFERENCE_ONLY',
  "contentIndexingAllowed" BOOLEAN NOT NULL DEFAULT false,
  "rightsHolder" TEXT,
  "sourceReference" TEXT,
  "usageNote" TEXT,
  "active" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "EngineeringStandard_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "KnowledgeDocument" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "extension" TEXT NOT NULL,
  "mimeType" TEXT NOT NULL,
  "size" INTEGER NOT NULL,
  "category" TEXT NOT NULL,
  "scope" "KnowledgeDocumentScope" NOT NULL,
  "projectId" TEXT,
  "organizationId" TEXT,
  "storageProvider" TEXT NOT NULL,
  "storageKey" TEXT NOT NULL,
  "sourceUrl" TEXT,
  "checksum" TEXT,
  "version" TEXT,
  "standardId" TEXT,
  "licenseStatus" "StandardLicenseStatus",
  "contentIndexingAllowed" BOOLEAN NOT NULL DEFAULT true,
  "status" "KnowledgeDocumentStatus" NOT NULL DEFAULT 'UPLOADED',
  "parserVersion" TEXT,
  "embeddingProvider" TEXT,
  "embeddingModel" TEXT,
  "vectorProvider" TEXT,
  "chunkCount" INTEGER NOT NULL DEFAULT 0,
  "tokenCount" INTEGER NOT NULL DEFAULT 0,
  "metadata" JSONB,
  "errorCode" TEXT,
  "errorMessage" TEXT,
  "uploadedById" TEXT,
  "indexedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "KnowledgeDocument_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "MemoryRecord" (
  "id" TEXT NOT NULL,
  "scope" "MemoryScope" NOT NULL,
  "type" "MemoryType" NOT NULL,
  "title" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "structuredData" JSONB,
  "projectId" TEXT,
  "organizationId" TEXT,
  "sourceType" TEXT,
  "sourceId" TEXT,
  "createdById" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "MemoryRecord_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "SpatialAsset" (
  "id" TEXT NOT NULL,
  "kind" "SpatialAssetKind" NOT NULL,
  "status" "SpatialAssetStatus" NOT NULL DEFAULT 'REGISTERED',
  "name" TEXT NOT NULL,
  "projectId" TEXT,
  "organizationId" TEXT,
  "storageKey" TEXT,
  "sourceUrl" TEXT,
  "coordinateRef" TEXT,
  "metadata" JSONB,
  "createdById" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "SpatialAsset_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "KnowledgeChunk" (
  "id" TEXT NOT NULL,
  "documentId" TEXT NOT NULL,
  "ordinal" INTEGER NOT NULL,
  "content" TEXT NOT NULL,
  "contentHash" TEXT NOT NULL,
  "tokenEstimate" INTEGER NOT NULL,
  "page" INTEGER,
  "section" TEXT,
  "vectorId" TEXT NOT NULL,
  "metadata" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "KnowledgeChunk_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "KnowledgeDocument_storageKey_key" ON "KnowledgeDocument"("storageKey");
CREATE INDEX "KnowledgeDocument_category_status_updatedAt_idx" ON "KnowledgeDocument"("category", "status", "updatedAt");
CREATE INDEX "KnowledgeDocument_projectId_status_idx" ON "KnowledgeDocument"("projectId", "status");
CREATE INDEX "KnowledgeDocument_organizationId_status_idx" ON "KnowledgeDocument"("organizationId", "status");
CREATE INDEX "KnowledgeDocument_standardId_status_idx" ON "KnowledgeDocument"("standardId", "status");
CREATE INDEX "KnowledgeDocument_uploadedById_createdAt_idx" ON "KnowledgeDocument"("uploadedById", "createdAt");
CREATE UNIQUE INDEX "KnowledgeChunk_vectorId_key" ON "KnowledgeChunk"("vectorId");
CREATE UNIQUE INDEX "KnowledgeChunk_documentId_ordinal_key" ON "KnowledgeChunk"("documentId", "ordinal");
CREATE INDEX "KnowledgeChunk_documentId_createdAt_idx" ON "KnowledgeChunk"("documentId", "createdAt");
CREATE INDEX "KnowledgeChunk_contentHash_idx" ON "KnowledgeChunk"("contentHash");
CREATE UNIQUE INDEX "EngineeringStandard_family_code_version_key" ON "EngineeringStandard"("family", "code", "version");
CREATE INDEX "EngineeringStandard_family_active_updatedAt_idx" ON "EngineeringStandard"("family", "active", "updatedAt");
CREATE INDEX "EngineeringStandard_licenseStatus_contentIndexingAllowed_idx" ON "EngineeringStandard"("licenseStatus", "contentIndexingAllowed");
CREATE INDEX "MemoryRecord_projectId_type_updatedAt_idx" ON "MemoryRecord"("projectId", "type", "updatedAt");
CREATE INDEX "MemoryRecord_organizationId_type_updatedAt_idx" ON "MemoryRecord"("organizationId", "type", "updatedAt");
CREATE INDEX "MemoryRecord_sourceType_sourceId_idx" ON "MemoryRecord"("sourceType", "sourceId");
CREATE INDEX "SpatialAsset_projectId_kind_updatedAt_idx" ON "SpatialAsset"("projectId", "kind", "updatedAt");
CREATE INDEX "SpatialAsset_organizationId_kind_updatedAt_idx" ON "SpatialAsset"("organizationId", "kind", "updatedAt");

ALTER TABLE "KnowledgeDocument"
  ADD CONSTRAINT "KnowledgeDocument_projectId_fkey"
  FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "KnowledgeDocument"
  ADD CONSTRAINT "KnowledgeDocument_uploadedById_fkey"
  FOREIGN KEY ("uploadedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "KnowledgeDocument"
  ADD CONSTRAINT "KnowledgeDocument_standardId_fkey"
  FOREIGN KEY ("standardId") REFERENCES "EngineeringStandard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "KnowledgeChunk"
  ADD CONSTRAINT "KnowledgeChunk_documentId_fkey"
  FOREIGN KEY ("documentId") REFERENCES "KnowledgeDocument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "MemoryRecord"
  ADD CONSTRAINT "MemoryRecord_projectId_fkey"
  FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "MemoryRecord"
  ADD CONSTRAINT "MemoryRecord_createdById_fkey"
  FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "SpatialAsset"
  ADD CONSTRAINT "SpatialAsset_projectId_fkey"
  FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SpatialAsset"
  ADD CONSTRAINT "SpatialAsset_createdById_fkey"
  FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
