/**
 * Core domain types for the YER6 proposal engine.
 *
 * These are runtime-agnostic (no Prisma / Next imports) so they can be reused
 * by pure calculation, validation, rendering and test code.
 */

export type Currency = "TRY" | "USD" | "EUR";
export type Locale = "tr" | "en" | "ar";
export type Audience = "client" | "internal";

/** Where a quantity comes from — affects commercial risk framing. */
export type QuantityOrigin = "measured" | "assumed" | "provisional" | "estimated";

/** Pricing structures YER6 uses (section J). */
export type OfferPricing =
  | "package"
  | "unit_per_meter"
  | "unit_per_m2"
  | "unit_per_m3"
  | "per_column"
  | "per_pile"
  | "daily_machinery"
  | "shift"
  | "labor_only"
  | "material_only"
  | "labor_and_material"
  | "subcontractor_package";

/** Commercial offer categories (section 10 header list). */
export type OfferKind =
  | "preliminary"
  | "budgetary"
  | "final"
  | "package_price"
  | "unit_price"
  | "subcontractor"
  | "revised"
  | "alternative"
  | "additional_work"
  | "progress"
  | "internal_approval";

/** Immutable, ordered proposal lifecycle (section C). */
export type ProposalStatus =
  | "draft"
  | "awaiting_information"
  | "calculation_ready"
  | "validation_failed"
  | "pdf_generating"
  | "pdf_verification"
  | "ready_for_review"
  | "approved"
  | "sent"
  | "viewed"
  | "accepted"
  | "rejected"
  | "expired"
  | "cancelled"
  | "revised";

export type VatMode = "included" | "excluded" | "zero";

export interface ProposalItemInput {
  /** Stable line key within a revision (for ordering / diffing). */
  key?: string;
  description: string;
  quantity: number;
  unit: string; // m, m², m³, adet, kolon, kazık, gün, vardiya, ton, kg, ...
  unitPrice: number;
  currency?: Currency; // defaults to proposal currency; mixed currencies are rejected
  quantityOrigin: QuantityOrigin;
  optional?: boolean; // optional vs mandatory item
  vatApplicable?: boolean; // default true
  audience?: Audience; // "internal" lines never appear in the client PDF
  source?: string; // provenance note (internal)
  category?: string; // e.g. jet_grout, fore_pile, dsm, micropile, mobilization ...
}

export interface InternalCostInput {
  labor?: number;
  machinery?: number;
  fuel?: number;
  material?: number;
  transport?: number;
  accommodation?: number;
  mobilization?: number;
  demobilization?: number;
  testing?: number;
  wasteFactorPct?: number;
  riskAllowancePct?: number;
  overheadPct?: number;
  targetMarginPct?: number;
}

export interface PartyInfo {
  companyName: string;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
}

export interface ProposalContent {
  offerNumber: string; // e.g. YER6-2026-0001
  revision: number; // 0,1,2...
  status: ProposalStatus;
  kind: OfferKind;
  pricing: OfferPricing;
  currency: Currency;
  locale: Locale;
  offerDate: string; // ISO date
  validityDays?: number;

  customer: PartyInfo;
  projectName: string;
  projectLocation?: string;
  subject: string;
  scopeOfWork?: string;
  technicalMethod?: string;

  items: ProposalItemInput[];

  discountRatePct?: number; // applied to subtotal
  vatMode: VatMode;
  vatRatePct: number; // e.g. 20

  mobilizationInfo?: string;
  workDuration?: string;
  estimatedProductionDuration?: string;
  paymentTerms?: string;

  inclusions?: string[];
  exclusions?: string[];
  engineeringAssumptions?: string[];
  commercialConditions?: string[];
  customerResponsibilities?: string[];
  yer6Responsibilities?: string[];

  revisionNote?: string;

  /** Internal-only cost breakdown; never rendered in the client PDF. */
  internalCost?: InternalCostInput;

  createdBy?: string;
}

/** Result of the money calculation, in the proposal currency. */
export interface ComputedLine {
  key: string;
  description: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  lineTotal: number;
  optional: boolean;
  vatApplicable: boolean;
  audience: Audience;
  quantityOrigin: QuantityOrigin;
  category?: string;
  source?: string;
}

export interface ComputedTotals {
  currency: Currency;
  lines: ComputedLine[];
  subtotal: number; // mandatory, client-visible lines (excl. optional)
  optionalTotal: number;
  discountRatePct: number;
  discountAmount: number;
  netSubtotal: number; // subtotal - discount
  vatMode: VatMode;
  vatRatePct: number;
  vatBase: number;
  vatAmount: number;
  grandTotal: number;
  writtenTotal: string;
}
