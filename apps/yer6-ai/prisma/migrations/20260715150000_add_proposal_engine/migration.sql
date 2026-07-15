-- Module 11 — Commercial Proposal Engine
-- Additive migration: new tables only, no changes to existing objects.

-- CreateTable
CREATE TABLE "Proposal" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "projectId" TEXT,
    "offerNumber" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "sequence" INTEGER NOT NULL,
    "kind" TEXT NOT NULL,
    "pricing" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "currentRevision" INTEGER NOT NULL DEFAULT 0,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProposalRevision" (
    "id" TEXT NOT NULL,
    "proposalId" TEXT NOT NULL,
    "revision" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "locale" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "totals" JSONB,
    "internalTotals" JSONB,
    "grandTotal" DECIMAL(18,2),
    "reason" TEXT,
    "priceBookRevision" TEXT,
    "templateRevision" TEXT,
    "calculationRevision" TEXT,
    "checksum" TEXT,
    "immutable" BOOLEAN NOT NULL DEFAULT false,
    "createdById" TEXT,
    "approvedAt" TIMESTAMP(3),
    "sentAt" TIMESTAMP(3),
    "acceptedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "ProposalRevision_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProposalItem" (
    "id" TEXT NOT NULL,
    "revisionId" TEXT NOT NULL,
    "ordinal" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" DECIMAL(18,4) NOT NULL,
    "unit" TEXT NOT NULL,
    "unitPrice" DECIMAL(18,4) NOT NULL,
    "currency" TEXT NOT NULL,
    "lineTotal" DECIMAL(18,2) NOT NULL,
    "quantityOrigin" TEXT NOT NULL,
    "optional" BOOLEAN NOT NULL DEFAULT false,
    "vatApplicable" BOOLEAN NOT NULL DEFAULT true,
    "audience" TEXT NOT NULL DEFAULT 'client',
    "category" TEXT,
    "source" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ProposalItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProposalPdf" (
    "id" TEXT NOT NULL,
    "revisionId" TEXT NOT NULL,
    "audience" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "storageProvider" TEXT NOT NULL DEFAULT 'r2',
    "storageKey" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "byteSize" INTEGER NOT NULL DEFAULT 0,
    "pageCount" INTEGER NOT NULL DEFAULT 0,
    "checksum" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "verifiedAt" TIMESTAMP(3),
    "grandTotal" DECIMAL(18,2),
    "offerNumber" TEXT NOT NULL,
    "metadata" JSONB,
    "failureCategory" TEXT,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ProposalPdf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProposalNumberSequence" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "lastSequence" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "ProposalNumberSequence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProposalTemplate" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "config" JSONB NOT NULL,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "ProposalTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProposalEvent" (
    "id" TEXT NOT NULL,
    "proposalId" TEXT NOT NULL,
    "revisionId" TEXT,
    "pdfId" TEXT,
    "type" TEXT NOT NULL,
    "category" TEXT,
    "actorId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ProposalEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_offerNumber_key" ON "Proposal"("offerNumber");
CREATE INDEX "Proposal_organizationId_status_updatedAt_idx" ON "Proposal"("organizationId", "status", "updatedAt");
CREATE INDEX "Proposal_organizationId_year_sequence_idx" ON "Proposal"("organizationId", "year", "sequence");
CREATE INDEX "Proposal_projectId_idx" ON "Proposal"("projectId");

CREATE UNIQUE INDEX "ProposalRevision_proposalId_revision_key" ON "ProposalRevision"("proposalId", "revision");
CREATE INDEX "ProposalRevision_proposalId_status_idx" ON "ProposalRevision"("proposalId", "status");

CREATE INDEX "ProposalItem_revisionId_ordinal_idx" ON "ProposalItem"("revisionId", "ordinal");

CREATE UNIQUE INDEX "ProposalPdf_storageKey_key" ON "ProposalPdf"("storageKey");
CREATE UNIQUE INDEX "ProposalPdf_revisionId_audience_locale_key" ON "ProposalPdf"("revisionId", "audience", "locale");
CREATE INDEX "ProposalPdf_revisionId_idx" ON "ProposalPdf"("revisionId");

CREATE UNIQUE INDEX "ProposalNumberSequence_organizationId_year_key" ON "ProposalNumberSequence"("organizationId", "year");

CREATE UNIQUE INDEX "ProposalTemplate_organizationId_key_version_key" ON "ProposalTemplate"("organizationId", "key", "version");
CREATE INDEX "ProposalTemplate_organizationId_isDefault_idx" ON "ProposalTemplate"("organizationId", "isDefault");

CREATE INDEX "ProposalEvent_proposalId_createdAt_idx" ON "ProposalEvent"("proposalId", "createdAt");
CREATE INDEX "ProposalEvent_revisionId_idx" ON "ProposalEvent"("revisionId");

-- AddForeignKey
ALTER TABLE "ProposalRevision" ADD CONSTRAINT "ProposalRevision_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ProposalItem" ADD CONSTRAINT "ProposalItem_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "ProposalRevision"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ProposalPdf" ADD CONSTRAINT "ProposalPdf_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "ProposalRevision"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ProposalEvent" ADD CONSTRAINT "ProposalEvent_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ProposalEvent" ADD CONSTRAINT "ProposalEvent_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "ProposalRevision"("id") ON DELETE SET NULL ON UPDATE CASCADE;
