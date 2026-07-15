/**
 * Zod schemas for the proposal API. Mirrors the domain types in
 * domain/types.ts and produces a validated ProposalDraft.
 */

import { z } from "zod";
import type { ProposalDraft } from "./service";

const currency = z.enum(["TRY", "USD", "EUR"]);
const locale = z.enum(["tr", "en", "ar"]);
const quantityOrigin = z.enum(["measured", "assumed", "provisional", "estimated"]);
const vatMode = z.enum(["included", "excluded", "zero"]);
const audience = z.enum(["client", "internal"]);

const offerKind = z.enum([
  "preliminary",
  "budgetary",
  "final",
  "package_price",
  "unit_price",
  "subcontractor",
  "revised",
  "alternative",
  "additional_work",
  "progress",
  "internal_approval"
]);

const pricing = z.enum([
  "package",
  "unit_per_meter",
  "unit_per_m2",
  "unit_per_m3",
  "per_column",
  "per_pile",
  "daily_machinery",
  "shift",
  "labor_only",
  "material_only",
  "labor_and_material",
  "subcontractor_package"
]);

const itemSchema = z.object({
  key: z.string().max(60).optional(),
  description: z.string().trim().min(1).max(600),
  quantity: z.number().finite(),
  unit: z.string().trim().min(1).max(24),
  unitPrice: z.number().finite(),
  currency: currency.optional(),
  quantityOrigin,
  optional: z.boolean().optional(),
  vatApplicable: z.boolean().optional(),
  audience: audience.optional(),
  source: z.string().max(200).optional(),
  category: z.string().max(60).optional()
});

const partySchema = z.object({
  companyName: z.string().trim().min(1).max(240),
  contactName: z.string().max(160).optional(),
  contactEmail: z.string().max(160).optional(),
  contactPhone: z.string().max(60).optional(),
  address: z.string().max(400).optional()
});

const internalCostSchema = z
  .object({
    labor: z.number().optional(),
    machinery: z.number().optional(),
    fuel: z.number().optional(),
    material: z.number().optional(),
    transport: z.number().optional(),
    accommodation: z.number().optional(),
    mobilization: z.number().optional(),
    demobilization: z.number().optional(),
    testing: z.number().optional(),
    wasteFactorPct: z.number().optional(),
    riskAllowancePct: z.number().optional(),
    overheadPct: z.number().optional(),
    targetMarginPct: z.number().optional()
  })
  .optional();

export const draftSchema = z.object({
  kind: offerKind,
  pricing,
  currency,
  locale,
  offerDate: z.string().min(4).max(40),
  validityDays: z.number().int().positive().max(3650).optional(),
  customer: partySchema,
  projectName: z.string().trim().min(1).max(240),
  projectLocation: z.string().max(240).optional(),
  subject: z.string().trim().min(1).max(600),
  scopeOfWork: z.string().max(6000).optional(),
  technicalMethod: z.string().max(6000).optional(),
  items: z.array(itemSchema).min(1).max(500),
  discountRatePct: z.number().min(0).max(100).optional(),
  vatMode,
  vatRatePct: z.number().min(0).max(100),
  mobilizationInfo: z.string().max(2000).optional(),
  workDuration: z.string().max(500).optional(),
  estimatedProductionDuration: z.string().max(500).optional(),
  paymentTerms: z.string().max(3000).optional(),
  inclusions: z.array(z.string().max(400)).max(60).optional(),
  exclusions: z.array(z.string().max(400)).max(60).optional(),
  engineeringAssumptions: z.array(z.string().max(400)).max(60).optional(),
  commercialConditions: z.array(z.string().max(400)).max(60).optional(),
  customerResponsibilities: z.array(z.string().max(400)).max(60).optional(),
  yer6Responsibilities: z.array(z.string().max(400)).max(60).optional(),
  revisionNote: z.string().max(2000).optional(),
  internalCost: internalCostSchema,
  createdBy: z.string().max(120).optional()
});

export const createProposalSchema = z.object({
  projectId: z.string().max(60).nullish(),
  draft: draftSchema
});

export type DraftSchema = z.infer<typeof draftSchema>;

/** Narrow the validated schema to the domain ProposalDraft type. */
export function toDraft(input: DraftSchema): ProposalDraft {
  return input as unknown as ProposalDraft;
}
