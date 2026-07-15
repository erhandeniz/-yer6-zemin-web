/** Single-tenant organization id for YER6 (future: multi-org via session). */
export function organizationId(): string {
  return process.env.YER6_ORGANIZATION_ID || "yer6";
}
