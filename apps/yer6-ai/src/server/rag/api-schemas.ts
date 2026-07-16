import { z } from "zod";
import {
  ENGINEERING_STANDARD_FAMILIES,
  KNOWLEDGE_CATEGORIES,
  KNOWLEDGE_FILE_EXTENSIONS,
  MEMORY_TYPES,
  STANDARD_LICENSE_STATUSES
} from "@/lib/rag/catalog";
import { KNOWLEDGE_MODULE_KEYS } from "@/server/knowledge/modules";

const clean = (maximum: number) => z.string().trim().min(1).max(maximum);

export const documentCreateSchema = z.object({
  name: clean(180).refine((value) => !/[\\/]/.test(value)),
  extension: z.enum(KNOWLEDGE_FILE_EXTENSIONS),
  mimeType: clean(180),
  size: z.number().int().positive().max(256 * 1024 * 1024),
  category: z.enum(KNOWLEDGE_CATEGORIES),
  scope: z.enum(["project", "company", "standards"]),
  moduleKey: z.enum(KNOWLEDGE_MODULE_KEYS).optional(),
  partition: clean(60).optional(),
  projectId: clean(100).optional(),
  organizationId: clean(100).optional(),
  storageKey: clean(500),
  sourceUrl: z.url().max(2_000).optional(),
  version: clean(80).optional(),
  standardId: clean(100).optional(),
  standardCode: clean(100).optional(),
  licenseStatus: z.enum(STANDARD_LICENSE_STATUSES).optional(),
  contentIndexingAllowed: z.boolean().optional(),
  ingest: z.boolean().default(false)
}).superRefine((value, context) => {
  if (value.scope === "project" && !value.projectId) {
    context.addIssue({ code: "custom", path: ["projectId"], message: "PROJECT_REQUIRED" });
  }
  if (value.scope === "company" && !value.organizationId) {
    context.addIssue({ code: "custom", path: ["organizationId"], message: "COMPANY_REQUIRED" });
  }
  if (value.scope === "standards" && !value.licenseStatus) {
    context.addIssue({ code: "custom", path: ["licenseStatus"], message: "LICENSE_REQUIRED" });
  }
});

export const documentUpdateSchema = z.object({
  category: z.enum(KNOWLEDGE_CATEGORIES).optional(),
  version: clean(80).optional(),
  standardId: clean(100).nullable().optional(),
  licenseStatus: z.enum(STANDARD_LICENSE_STATUSES).optional(),
  contentIndexingAllowed: z.boolean().optional()
}).strict();

export const searchSchema = z.object({
  query: clean(6_000),
  projectId: clean(100).optional(),
  organizationId: clean(100).optional(),
  includeStandards: z.boolean().default(true),
  limit: z.number().int().min(1).max(20).default(8)
});

export const standardSchema = z.object({
  family: z.enum(ENGINEERING_STANDARD_FAMILIES),
  code: clean(100),
  title: clean(240),
  edition: clean(80).optional(),
  version: clean(80).optional(),
  publishedAt: z.iso.datetime().optional(),
  licenseStatus: z.enum(STANDARD_LICENSE_STATUSES).default("REFERENCE_ONLY"),
  contentIndexingAllowed: z.boolean().default(false),
  rightsHolder: clean(180).optional(),
  sourceReference: clean(2_000).optional(),
  usageNote: clean(2_000).optional()
});

export const memorySchema = z.object({
  type: z.enum(MEMORY_TYPES),
  title: clean(180),
  content: clean(20_000),
  sourceType: clean(80).optional(),
  sourceId: clean(100).optional(),
  structuredData: z.record(z.string(), z.unknown()).optional()
});

export function licensedContentAllowed(status: string | undefined, requested: boolean | undefined) {
  return requested === true && (status === "PUBLIC" || status === "LICENSED_INTERNAL");
}
