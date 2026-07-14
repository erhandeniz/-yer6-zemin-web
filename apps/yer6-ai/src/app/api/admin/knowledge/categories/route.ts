import {
  ENGINEERING_STANDARD_FAMILIES,
  KNOWLEDGE_CATEGORIES,
  KNOWLEDGE_FILE_EXTENSIONS,
  MEMORY_TYPES,
  SPATIAL_ASSET_KINDS,
  STANDARD_LICENSE_STATUSES
} from "@/lib/rag/catalog";
import { isAccessResponse, requireAdmin } from "@/server/auth/workspace-access";

export const runtime = "nodejs";

export async function GET() {
  const access = await requireAdmin();
  if (isAccessResponse(access)) return access;
  return Response.json({
    categories: KNOWLEDGE_CATEGORIES,
    fileExtensions: KNOWLEDGE_FILE_EXTENSIONS,
    standardFamilies: ENGINEERING_STANDARD_FAMILIES,
    standardLicenseStatuses: STANDARD_LICENSE_STATUSES,
    memoryTypes: MEMORY_TYPES,
    futureSpatialAssets: SPATIAL_ASSET_KINDS
  });
}
