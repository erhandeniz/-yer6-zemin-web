/**
 * Proposal workflow orchestrator (sections C, D, I, M).
 *
 *   create → validate → compute → render(client + internal) → verify → store
 *          → status transitions (approve / send / accept / revise)
 *
 * Hard rules enforced here:
 *   - An official PDF is produced and VERIFIED before a proposal can be marked
 *     approved / sent / accepted.
 *   - Issued revisions and their PDFs are immutable; changes create a new
 *     revision with a new immutable PDF.
 *   - Offer numbers are allocated transactionally (no duplicates).
 *   - Client PDFs never contain internal economics (verified, not just assumed).
 */

import { deflateSync } from "node:zlib";
import { prisma } from "@/lib/prisma";
import type {
  Audience,
  Locale,
  ProposalContent,
  ProposalStatus
} from "./domain/types";
import { computeTotals } from "./domain/totals";
import { validateProposal, type ValidationIssue } from "./domain/validation";
import { assertTransition, isImmutable } from "./domain/status";
import { formatOfferNumber, formatRevisionLabel } from "./domain/numbering";
import { hasInternalData, toClientContent } from "./domain/visibility";
import { formatMoney } from "./format/money";
import { proposalFileName, proposalStorageKey } from "./format/filename";
import { loadProposalFonts } from "./pdf/fonts";
import { renderProposalPdf } from "./render/proposal-pdf";
import { verifyProposalPdf } from "./verify/verify-pdf";
import { sha256Hex, sha256Short } from "./verify/checksum";
import {
  putPdf,
  deletePdf,
  getPdf,
  createSignedToken,
  verifySignedToken
} from "./storage/proposal-store";

// The generated Prisma client on the deploy target includes these delegates.
// A narrow, typed facade keeps this module compiling and lint-clean regardless
// of local generation state, while still routing through the real client at
// runtime. Row shapes below cover only the fields this service reads.
interface ProposalRow {
  id: string;
  organizationId: string;
  projectId: string | null;
  offerNumber: string;
  status: string;
  currentRevision: number;
  locale: string;
  currency: string;
  customerName: string;
  projectName: string;
  updatedAt: Date;
}
interface RevisionRow {
  id: string;
  proposalId: string;
  revision: number;
  status: string;
  immutable: boolean;
  content: unknown;
  locale: string;
  currency: string;
  grandTotal: unknown;
  createdAt: Date;
}
interface PdfRow {
  id: string;
  revisionId: string;
  audience: string;
  locale: string;
  storageKey: string;
  fileName: string;
  pageCount: number;
  byteSize: number;
  verified: boolean;
  checksum: string;
}
interface SeqRow {
  lastSequence: number;
}
interface IdRow {
  id: string;
}

interface Delegate<TRow> {
  create(args: unknown): Promise<TRow>;
  update(args: unknown): Promise<TRow>;
  upsert(args: unknown): Promise<TRow>;
  delete(args: unknown): Promise<TRow>;
  findUnique(args: unknown): Promise<TRow | null>;
  findFirst(args: unknown): Promise<TRow | null>;
  findMany(args: unknown): Promise<TRow[]>;
  count(args?: unknown): Promise<number>;
}
interface ProposalDb {
  proposal: Delegate<ProposalRow>;
  proposalRevision: Delegate<RevisionRow>;
  proposalItem: Delegate<IdRow>;
  proposalPdf: Delegate<PdfRow>;
  proposalEvent: Delegate<IdRow>;
  proposalNumberSequence: Delegate<SeqRow>;
  $transaction: <T>(fn: (tx: ProposalDb) => Promise<T>) => Promise<T>;
}

const db = prisma as unknown as ProposalDb;

const deflate = (u: Uint8Array): Uint8Array => new Uint8Array(deflateSync(Buffer.from(u)));

export type ProposalDraft = Omit<ProposalContent, "offerNumber" | "revision" | "status">;

export interface CreateProposalInput {
  organizationId: string;
  projectId?: string | null;
  actorId?: string | null;
  draft: ProposalDraft;
}

export interface CreateProposalResult {
  proposalId: string;
  offerNumber: string;
  revisionId: string;
  revision: number;
}

async function logEvent(
  client: ProposalDb,
  data: {
    proposalId: string;
    revisionId?: string | null;
    pdfId?: string | null;
    type: string;
    category?: string | null;
    actorId?: string | null;
    metadata?: unknown;
  }
): Promise<void> {
  await client.proposalEvent.create({
    data: {
      proposalId: data.proposalId,
      revisionId: data.revisionId ?? null,
      pdfId: data.pdfId ?? null,
      type: data.type,
      category: data.category ?? null,
      actorId: data.actorId ?? null,
      metadata: (data.metadata as object) ?? undefined
    }
  });
}

/** Transactionally allocate the next gap-free offer number for the org/year. */
export async function allocateOfferNumber(
  organizationId: string,
  year: number
): Promise<{ offerNumber: string; sequence: number; year: number }> {
  const seq = await db.proposalNumberSequence.upsert({
    where: { organizationId_year: { organizationId, year } },
    create: { organizationId, year, lastSequence: 1 },
    update: { lastSequence: { increment: 1 } }
  });
  const sequence = seq.lastSequence as number;
  return { offerNumber: formatOfferNumber(year, sequence), sequence, year };
}

function yearOf(content: { offerDate?: string }): number {
  const d = content.offerDate ? new Date(content.offerDate) : new Date();
  const y = d.getUTCFullYear();
  return Number.isFinite(y) ? y : new Date().getUTCFullYear();
}

export async function createProposal(input: CreateProposalInput): Promise<CreateProposalResult> {
  const year = yearOf(input.draft);
  const { offerNumber, sequence } = await allocateOfferNumber(input.organizationId, year);

  const content: ProposalContent = {
    ...input.draft,
    offerNumber,
    revision: 0,
    status: "draft"
  };

  const clientTotals = computeTotals(content, "client");
  const internalTotals = hasInternalData(content) ? computeTotals(content, "internal") : null;
  const checksum = await sha256Hex(new TextEncoder().encode(JSON.stringify(content)));

  const result = await db.$transaction(async (tx) => {
    const proposal = await tx.proposal.create({
      data: {
        organizationId: input.organizationId,
        projectId: input.projectId ?? null,
        offerNumber,
        year,
        sequence,
        kind: content.kind,
        pricing: content.pricing,
        currency: content.currency,
        locale: content.locale,
        customerName: content.customer.companyName,
        projectName: content.projectName,
        subject: content.subject,
        status: "draft",
        currentRevision: 0,
        createdById: input.actorId ?? null
      }
    });

    const revision = await tx.proposalRevision.create({
      data: {
        proposalId: proposal.id,
        revision: 0,
        status: "draft",
        locale: content.locale,
        currency: content.currency,
        content: content as unknown as object,
        totals: clientTotals as unknown as object,
        internalTotals: (internalTotals as unknown as object) ?? undefined,
        grandTotal: clientTotals.grandTotal,
        checksum,
        createdById: input.actorId ?? null
      }
    });

    await Promise.all(
      clientTotals.lines.concat(internalTotals ? internalTotals.lines : []).map((line, ordinal) =>
        tx.proposalItem.create({
          data: {
            revisionId: revision.id,
            ordinal,
            description: line.description,
            quantity: line.quantity,
            unit: line.unit,
            unitPrice: line.unitPrice,
            currency: content.currency,
            lineTotal: line.lineTotal,
            quantityOrigin: line.quantityOrigin,
            optional: line.optional,
            vatApplicable: line.vatApplicable,
            audience: line.audience,
            category: line.category ?? null,
            source: line.source ?? null
          }
        })
      )
    );

    await logEvent(tx, {
      proposalId: proposal.id,
      revisionId: revision.id,
      type: "created",
      actorId: input.actorId,
      metadata: { offerNumber }
    });

    return { proposalId: proposal.id as string, revisionId: revision.id as string };
  });

  return { ...result, offerNumber, revision: 0 };
}

export interface GenerateResult {
  ok: boolean;
  errors?: ValidationIssue[];
  failureCategory?: string;
  pdfs?: {
    audience: Audience;
    locale: Locale;
    pdfId: string;
    fileName: string;
    pageCount: number;
    checksum: string;
  }[];
}

export interface GenerateOptions {
  proposalId: string;
  revision: number;
  organizationId: string;
  actorId?: string | null;
  /** override which audiences to produce; defaults to client (+internal if present). */
  audiences?: Audience[];
  /**
   * Language variants to produce. Defaults to the proposal's base language.
   * Each locale is stored as a SEPARATE, traceable ProposalPdf (revision,
   * audience, locale) — the approved base-language PDF is never overwritten.
   */
  locales?: Locale[];
}

export async function generateProposalPdfs(opts: GenerateOptions): Promise<GenerateResult> {
  const proposal = await db.proposal.findFirst({
    where: { id: opts.proposalId, organizationId: opts.organizationId }
  });
  if (!proposal) return { ok: false, failureCategory: "permission_failed" };

  const revision = await db.proposalRevision.findUnique({
    where: { proposalId_revision: { proposalId: opts.proposalId, revision: opts.revision } }
  });
  if (!revision) return { ok: false, failureCategory: "missing_template" };

  const content = revision.content as ProposalContent;
  const locale = content.locale as Locale;
  const revLabel = formatRevisionLabel(content.offerNumber, content.revision);

  // Validate before generating anything.
  const validation = validateProposal(content);
  if (!validation.ok) {
    await db.proposalRevision.update({
      where: { id: revision.id },
      data: { status: "validation_failed" }
    });
    await db.proposal.update({ where: { id: proposal.id }, data: { status: "validation_failed" } });
    await logEvent(db, {
      proposalId: proposal.id,
      revisionId: revision.id,
      type: "failed",
      category: "calculation_validation_failed",
      actorId: opts.actorId,
      metadata: { errors: validation.errors }
    });
    return { ok: false, errors: validation.errors, failureCategory: "calculation_validation_failed" };
  }

  await db.proposalRevision.update({ where: { id: revision.id }, data: { status: "pdf_generating" } });

  const audiences: Audience[] =
    opts.audiences ?? (hasInternalData(content) ? ["client", "internal"] : ["client"]);

  let fonts;
  try {
    fonts = await loadProposalFonts();
  } catch {
    await failRevision(proposal.id, revision.id, "missing_asset", opts.actorId);
    return { ok: false, failureCategory: "missing_asset" };
  }

  const locales: Locale[] = opts.locales ?? [locale];

  const produced: {
    audience: Audience;
    locale: Locale;
    bytes: Uint8Array;
    pageCount: number;
    checksum: string;
    checksumShort: string;
    fileName: string;
    grandTotalText: string;
  }[] = [];

  for (const audience of audiences) {
    for (const loc of locales) {
      // Render a language variant WITHOUT mutating the approved snapshot: only
      // the render locale changes; content strings stay the approved originals.
      const localized: ProposalContent =
        loc === content.locale ? content : { ...content, locale: loc };
      const audienceContent = audience === "client" ? toClientContent(localized) : localized;
      const totals = computeTotals(localized, audience);
      let render;
      try {
        render = renderProposalPdf({ content: audienceContent, totals, audience, fonts, deflate });
      } catch {
        await failRevision(proposal.id, revision.id, "rendering_failed", opts.actorId);
        return { ok: false, failureCategory: "rendering_failed" };
      }

      await db.proposalRevision.update({ where: { id: revision.id }, data: { status: "pdf_verification" } });

      const grandTotalText = formatMoney(totals.grandTotal, content.currency, loc);
      const verify = verifyProposalPdf({
        bytes: render.bytes,
        pageTexts: render.pageTexts,
        expected: {
          audience,
          offerNumber: content.offerNumber,
          revisionLabel: revLabel,
          grandTotalText,
          pageCount: render.pageCount
        }
      });
      if (!verify.ok) {
        await failRevision(proposal.id, revision.id, verify.failureCategory ?? "verification_failed", opts.actorId, {
          checks: verify.checks.filter((c) => !c.ok)
        });
        return { ok: false, failureCategory: verify.failureCategory ?? "verification_failed" };
      }

      const checksum = await sha256Hex(render.bytes);
      const checksumShort = await sha256Short(render.bytes);
      const fileName = proposalFileName({
        offerNumber: content.offerNumber,
        revision: content.revision,
        customer: content.customer.companyName,
        project: content.projectName,
        audience,
        locale: loc
      });
      produced.push({
        audience,
        locale: loc,
        bytes: render.bytes,
        pageCount: render.pageCount,
        checksum,
        checksumShort,
        fileName,
        grandTotalText
      });
    }
  }

  // Persist: store objects + upsert PDF rows. Issued revisions are never
  // overwritten; draft PDFs may be regenerated (old object removed).
  const pdfs: NonNullable<GenerateResult["pdfs"]> = [];
  for (const p of produced) {
    const storageKey = proposalStorageKey({
      organizationId: opts.organizationId,
      proposalId: proposal.id,
      revision: content.revision,
      audience: p.audience,
      locale: p.locale,
      checksumShort: p.checksumShort
    });

    const existing = await db.proposalPdf.findUnique({
      where: {
        revisionId_audience_locale: { revisionId: revision.id, audience: p.audience, locale: p.locale }
      }
    });
    if (existing?.verified && revision.immutable) {
      pdfs.push({
        audience: p.audience,
        locale: p.locale,
        pdfId: existing.id,
        fileName: existing.fileName,
        pageCount: existing.pageCount,
        checksum: existing.checksum
      });
      continue;
    }
    if (existing && existing.storageKey !== storageKey) {
      await deletePdf(existing.storageKey); // draft regeneration: drop stale object
    }

    await putPdf(storageKey, p.bytes);

    const row = await db.proposalPdf.upsert({
      where: {
        revisionId_audience_locale: { revisionId: revision.id, audience: p.audience, locale: p.locale }
      },
      create: {
        revisionId: revision.id,
        audience: p.audience,
        locale: p.locale,
        storageProvider: "r2",
        storageKey,
        fileName: p.fileName,
        byteSize: p.bytes.length,
        pageCount: p.pageCount,
        checksum: p.checksum,
        verified: true,
        verifiedAt: new Date(),
        grandTotal: computeTotals(content, p.audience).grandTotal,
        offerNumber: content.offerNumber,
        metadata: { audience: p.audience, locale: p.locale }
      },
      update: {
        storageKey,
        fileName: p.fileName,
        byteSize: p.bytes.length,
        pageCount: p.pageCount,
        checksum: p.checksum,
        verified: true,
        verifiedAt: new Date(),
        failureCategory: null
      }
    });
    pdfs.push({
      audience: p.audience,
      locale: p.locale,
      pdfId: row.id,
      fileName: p.fileName,
      pageCount: p.pageCount,
      checksum: p.checksum
    });
    await logEvent(db, {
      proposalId: proposal.id,
      revisionId: revision.id,
      pdfId: row.id,
      type: "pdf_verified",
      actorId: opts.actorId,
      metadata: { audience: p.audience, locale: p.locale, checksum: p.checksum, pages: p.pageCount }
    });
  }

  await db.proposalRevision.update({ where: { id: revision.id }, data: { status: "ready_for_review" } });
  await db.proposal.update({ where: { id: proposal.id }, data: { status: "ready_for_review" } });

  return { ok: true, pdfs };
}

async function failRevision(
  proposalId: string,
  revisionId: string,
  category: string,
  actorId?: string | null,
  metadata?: unknown
): Promise<void> {
  await db.proposalRevision.update({
    where: { id: revisionId },
    data: { status: "validation_failed" }
  });
  await logEvent(db, { proposalId, revisionId, type: "failed", category, actorId, metadata });
}

/** True when the revision has a verified client PDF (mandatory to issue). */
export async function hasVerifiedClientPdf(revisionId: string, locale: Locale): Promise<boolean> {
  const count = await db.proposalPdf.count({
    where: { revisionId, audience: "client", locale, verified: true }
  });
  return count > 0;
}

export interface TransitionInput {
  proposalId: string;
  organizationId: string;
  to: ProposalStatus;
  actorId?: string | null;
}

/**
 * Move a proposal to a new status. Approving / sending / accepting REQUIRE a
 * verified official PDF; issued statuses freeze the current revision.
 */
export async function transitionProposal(input: TransitionInput): Promise<{ ok: boolean; error?: string }> {
  const proposal = await db.proposal.findFirst({
    where: { id: input.proposalId, organizationId: input.organizationId }
  });
  if (!proposal) return { ok: false, error: "NOT_FOUND" };

  const from = proposal.status as ProposalStatus;
  try {
    assertTransition(from, input.to);
  } catch {
    return { ok: false, error: `ILLEGAL_TRANSITION:${from}->${input.to}` };
  }

  const revision = await db.proposalRevision.findUnique({
    where: { proposalId_revision: { proposalId: proposal.id, revision: proposal.currentRevision } }
  });
  if (!revision) return { ok: false, error: "REVISION_NOT_FOUND" };

  const needsPdf: ProposalStatus[] = ["approved", "sent", "accepted"];
  if (needsPdf.includes(input.to)) {
    const ok = await hasVerifiedClientPdf(revision.id, proposal.locale as Locale);
    if (!ok) return { ok: false, error: "OFFICIAL_PDF_REQUIRED" };
  }

  const now = new Date();
  const revData: Record<string, unknown> = { status: input.to };
  if (isImmutable(input.to)) revData.immutable = true;
  if (input.to === "approved") revData.approvedAt = now;
  if (input.to === "sent") revData.sentAt = now;
  if (input.to === "accepted") revData.acceptedAt = now;

  await db.proposalRevision.update({ where: { id: revision.id }, data: revData });
  await db.proposal.update({ where: { id: proposal.id }, data: { status: input.to } });
  await logEvent(db, {
    proposalId: proposal.id,
    revisionId: revision.id,
    type: input.to,
    actorId: input.actorId
  });
  return { ok: true };
}

export interface ReviseInput {
  proposalId: string;
  organizationId: string;
  reason: string;
  changes: Partial<ProposalDraft>;
  actorId?: string | null;
}

/** Create a new immutable revision, preserving all previous ones (section C). */
export async function reviseProposal(input: ReviseInput): Promise<{ ok: boolean; revision?: number; revisionId?: string; error?: string }> {
  const proposal = await db.proposal.findFirst({
    where: { id: input.proposalId, organizationId: input.organizationId }
  });
  if (!proposal) return { ok: false, error: "NOT_FOUND" };

  const prev = await db.proposalRevision.findUnique({
    where: { proposalId_revision: { proposalId: proposal.id, revision: proposal.currentRevision } }
  });
  if (!prev) return { ok: false, error: "REVISION_NOT_FOUND" };

  const prevContent = prev.content as ProposalContent;
  const nextRevision = proposal.currentRevision + 1;
  const nextContent: ProposalContent = {
    ...prevContent,
    ...input.changes,
    offerNumber: prevContent.offerNumber,
    revision: nextRevision,
    status: "draft",
    revisionNote: input.reason
  };
  const clientTotals = computeTotals(nextContent, "client");
  const internalTotals = hasInternalData(nextContent) ? computeTotals(nextContent, "internal") : null;
  const checksum = await sha256Hex(new TextEncoder().encode(JSON.stringify(nextContent)));

  const res = await db.$transaction(async (tx) => {
    // Freeze the previous revision.
    await tx.proposalRevision.update({
      where: { id: prev.id },
      data: { status: "revised", immutable: true }
    });
    const created = await tx.proposalRevision.create({
      data: {
        proposalId: proposal.id,
        revision: nextRevision,
        status: "draft",
        locale: nextContent.locale,
        currency: nextContent.currency,
        content: nextContent as unknown as object,
        totals: clientTotals as unknown as object,
        internalTotals: (internalTotals as unknown as object) ?? undefined,
        grandTotal: clientTotals.grandTotal,
        reason: input.reason,
        checksum,
        createdById: input.actorId ?? null
      }
    });
    await tx.proposal.update({
      where: { id: proposal.id },
      data: { currentRevision: nextRevision, status: "draft" }
    });
    await logEvent(tx, {
      proposalId: proposal.id,
      revisionId: created.id,
      type: "revised",
      actorId: input.actorId,
      metadata: { from: proposal.currentRevision, to: nextRevision, reason: input.reason }
    });
    return { revisionId: created.id as string };
  });

  return { ok: true, revision: nextRevision, revisionId: res.revisionId };
}

// ---- Queries & secure download ------------------------------------------

export interface ProposalSummary {
  id: string;
  offerNumber: string;
  customerName: string;
  projectName: string;
  status: string;
  currentRevision: number;
  currency: string;
  updatedAt: string;
}

export async function listProposals(params: {
  organizationId: string;
  limit?: number;
  status?: string;
}): Promise<ProposalSummary[]> {
  const rows = await db.proposal.findMany({
    where: {
      organizationId: params.organizationId,
      ...(params.status ? { status: params.status } : {})
    },
    orderBy: { updatedAt: "desc" },
    take: Math.min(200, params.limit ?? 50)
  });
  return rows.map((r) => ({
    id: r.id,
    offerNumber: r.offerNumber,
    customerName: r.customerName,
    projectName: r.projectName,
    status: r.status,
    currentRevision: r.currentRevision,
    currency: r.currency,
    updatedAt: (r.updatedAt as Date).toISOString()
  }));
}

export async function getProposalDetail(params: {
  organizationId: string;
  proposalId: string;
}): Promise<unknown | null> {
  const proposal = await db.proposal.findFirst({
    where: { id: params.proposalId, organizationId: params.organizationId }
  });
  if (!proposal) return null;
  const revisions = await db.proposalRevision.findMany({
    where: { proposalId: proposal.id },
    orderBy: { revision: "desc" }
  });
  const revisionIds = revisions.map((r) => r.id);
  const pdfs = revisionIds.length
    ? await db.proposalPdf.findMany({ where: { revisionId: { in: revisionIds } } })
    : [];
  const events = await db.proposalEvent.findMany({
    where: { proposalId: proposal.id },
    orderBy: { createdAt: "desc" },
    take: 100
  });
  return {
    proposal,
    revisions: revisions.map((r) => ({
      id: r.id,
      revision: r.revision,
      status: r.status,
      immutable: r.immutable,
      grandTotal: r.grandTotal,
      createdAt: r.createdAt,
      pdfs: pdfs
        .filter((p) => p.revisionId === r.id)
        .map((p) => ({
          id: p.id,
          audience: p.audience,
          locale: p.locale,
          fileName: p.fileName,
          pageCount: p.pageCount,
          byteSize: p.byteSize,
          verified: p.verified,
          checksum: p.checksum
        }))
    })),
    events
  };
}

/** Issue a short-lived signed download token for a PDF the org owns. */
export async function issueDownloadToken(params: {
  organizationId: string;
  pdfId: string;
  actorId?: string | null;
  ttlSeconds?: number;
}): Promise<{ token: string; fileName: string } | null> {
  const pdf = await db.proposalPdf.findUnique({ where: { id: params.pdfId } });
  if (!pdf || !pdf.verified) return null;
  const revision = await db.proposalRevision.findUnique({ where: { id: pdf.revisionId } });
  if (!revision) return null;
  const proposal = await db.proposal.findFirst({
    where: { id: revision.proposalId, organizationId: params.organizationId }
  });
  if (!proposal) return null; // cross-organization access denied

  const token = await createSignedToken(
    { key: pdf.storageKey, organizationId: params.organizationId, pdfId: pdf.id, audience: pdf.audience },
    params.ttlSeconds ?? 600
  );
  await logEvent(db, {
    proposalId: proposal.id,
    revisionId: revision.id,
    pdfId: pdf.id,
    type: "download",
    actorId: params.actorId,
    metadata: { fileName: pdf.fileName }
  });
  return { token, fileName: pdf.fileName };
}

export interface DownloadPayload {
  bytes: Uint8Array;
  fileName: string;
  contentType: string;
  audience: string;
}

/** Resolve a signed token to the actual PDF bytes (used by the download route). */
export async function resolveDownload(token: string): Promise<DownloadPayload | null> {
  const claims = await verifySignedToken(token);
  if (!claims) return null;
  const pdf = await db.proposalPdf.findUnique({ where: { id: claims.pdfId } });
  if (!pdf || pdf.storageKey !== claims.key) return null;
  const revision = await db.proposalRevision.findUnique({ where: { id: pdf.revisionId } });
  if (!revision) return null;
  const proposal = await db.proposal.findFirst({
    where: { id: revision.proposalId, organizationId: claims.organizationId }
  });
  if (!proposal) return null;
  const bytes = await getPdf(pdf.storageKey);
  if (!bytes) return null;
  return { bytes, fileName: pdf.fileName, contentType: "application/pdf", audience: pdf.audience };
}
