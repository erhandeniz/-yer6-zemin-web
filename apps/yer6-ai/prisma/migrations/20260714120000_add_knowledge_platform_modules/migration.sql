-- Knowledge platform modules: structured datasets, decision rules and job tracking.

-- CreateEnum
CREATE TYPE "KnowledgeModuleKind" AS ENUM ('DOCUMENT', 'STRUCTURED', 'COMPUTE');

-- CreateEnum
CREATE TYPE "StructuredRecordStatus" AS ENUM ('DRAFT', 'READY', 'INDEXING', 'INDEXED', 'FAILED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "IngestionJobKind" AS ENUM ('DOCUMENT', 'STRUCTURED_IMPORT', 'MODULE_REINDEX');

-- CreateEnum
CREATE TYPE "IngestionJobStatus" AS ENUM ('QUEUED', 'RUNNING', 'COMPLETED', 'FAILED', 'CANCELLED');

-- AlterTable
ALTER TABLE "KnowledgeDocument"
  ADD COLUMN "moduleKey" TEXT,
  ADD COLUMN "partition" TEXT;

-- CreateIndex
CREATE INDEX "KnowledgeDocument_moduleKey_partition_status_idx" ON "KnowledgeDocument"("moduleKey", "partition", "status");

-- CreateTable
CREATE TABLE "MachineRig" (
  "id" TEXT NOT NULL,
  "manufacturer" TEXT NOT NULL,
  "model" TEXT NOT NULL,
  "partition" TEXT,
  "category" TEXT,
  "torque" DOUBLE PRECISION,
  "maxDepth" DOUBLE PRECISION,
  "maxDiameter" DOUBLE PRECISION,
  "weight" DOUBLE PRECISION,
  "enginePower" DOUBLE PRECISION,
  "applications" TEXT[],
  "advantages" TEXT[],
  "limitations" TEXT[],
  "specifications" JSONB,
  "source" TEXT,
  "checksum" TEXT NOT NULL,
  "status" "StructuredRecordStatus" NOT NULL DEFAULT 'READY',
  "vectorId" TEXT,
  "indexedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "MachineRig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MachineRig_vectorId_key" ON "MachineRig"("vectorId");

-- CreateIndex
CREATE INDEX "MachineRig_partition_status_idx" ON "MachineRig"("partition", "status");

-- CreateIndex
CREATE INDEX "MachineRig_status_updatedAt_idx" ON "MachineRig"("status", "updatedAt");

-- CreateIndex
CREATE UNIQUE INDEX "MachineRig_manufacturer_model_key" ON "MachineRig"("manufacturer", "model");

-- CreateTable
CREATE TABLE "SoilProfile" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "partition" TEXT,
  "classification" TEXT,
  "location" TEXT,
  "latitude" DOUBLE PRECISION,
  "longitude" DOUBLE PRECISION,
  "depthFrom" DOUBLE PRECISION,
  "depthTo" DOUBLE PRECISION,
  "groundwater" DOUBLE PRECISION,
  "parameters" JSONB,
  "layers" JSONB,
  "sourceReportId" TEXT,
  "source" TEXT,
  "checksum" TEXT NOT NULL,
  "status" "StructuredRecordStatus" NOT NULL DEFAULT 'READY',
  "vectorId" TEXT,
  "indexedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "SoilProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SoilProfile_vectorId_key" ON "SoilProfile"("vectorId");

-- CreateIndex
CREATE INDEX "SoilProfile_partition_status_idx" ON "SoilProfile"("partition", "status");

-- CreateIndex
CREATE INDEX "SoilProfile_classification_status_idx" ON "SoilProfile"("classification", "status");

-- CreateIndex
CREATE INDEX "SoilProfile_status_updatedAt_idx" ON "SoilProfile"("status", "updatedAt");

-- CreateTable
CREATE TABLE "DecisionRule" (
  "id" TEXT NOT NULL,
  "key" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  "description" TEXT,
  "priority" INTEGER NOT NULL DEFAULT 100,
  "conditions" JSONB NOT NULL,
  "outcome" JSONB NOT NULL,
  "references" TEXT[],
  "active" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "DecisionRule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DecisionRule_key_key" ON "DecisionRule"("key");

-- CreateIndex
CREATE INDEX "DecisionRule_category_active_priority_idx" ON "DecisionRule"("category", "active", "priority");

-- CreateTable
CREATE TABLE "IngestionJob" (
  "id" TEXT NOT NULL,
  "kind" "IngestionJobKind" NOT NULL,
  "moduleKey" TEXT,
  "partition" TEXT,
  "status" "IngestionJobStatus" NOT NULL DEFAULT 'QUEUED',
  "totalItems" INTEGER NOT NULL DEFAULT 0,
  "processed" INTEGER NOT NULL DEFAULT 0,
  "succeeded" INTEGER NOT NULL DEFAULT 0,
  "failed" INTEGER NOT NULL DEFAULT 0,
  "cursor" TEXT,
  "detail" JSONB,
  "errorMessage" TEXT,
  "startedAt" TIMESTAMP(3),
  "finishedAt" TIMESTAMP(3),
  "createdById" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "IngestionJob_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "IngestionJob_kind_status_updatedAt_idx" ON "IngestionJob"("kind", "status", "updatedAt");

-- CreateIndex
CREATE INDEX "IngestionJob_moduleKey_status_idx" ON "IngestionJob"("moduleKey", "status");
