/**
 * Production database verification.
 *
 *   pnpm --filter @yer6/ai db:verify
 *
 * Checks, without ever printing DATABASE_URL or secrets:
 *   1. Connectivity (a trivial query succeeds).
 *   2. Every expected table exists (information_schema).
 *   3. A real read/write/delete round-trip against IngestionJob.
 *   4. Seed row counts for the structured modules.
 */

import { prisma } from "@/lib/prisma";

const EXPECTED_TABLES = [
  "User",
  "Account",
  "Session",
  "VerificationToken",
  "Project",
  "Document",
  "Conversation",
  "Message",
  "Analysis",
  "AuditLog",
  "KnowledgeDocument",
  "EngineeringStandard",
  "MemoryRecord",
  "SpatialAsset",
  "KnowledgeChunk",
  "MachineRig",
  "SoilProfile",
  "DecisionRule",
  "IngestionJob"
];

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set (value not shown).");
    process.exitCode = 1;
    return;
  }

  // 1. Connectivity
  await prisma.$queryRaw`SELECT 1`;
  console.log("1. Connectivity: OK");

  // 2. Tables
  const rows = await prisma.$queryRaw<Array<{ table_name: string }>>`
    SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'
  `;
  const present = new Set(rows.map((row) => row.table_name));
  const missing = EXPECTED_TABLES.filter((table) => !present.has(table));
  if (missing.length > 0) {
    console.error(`2. Tables: MISSING -> ${missing.join(", ")}`);
    process.exitCode = 1;
    return;
  }
  console.log(`2. Tables: OK (${EXPECTED_TABLES.length}/${EXPECTED_TABLES.length} present)`);

  // 3. Read / write / delete round-trip on a safe operational table.
  const created = await prisma.ingestionJob.create({
    data: { kind: "MODULE_REINDEX", status: "COMPLETED", detail: { probe: true } }
  });
  const readBack = await prisma.ingestionJob.findUnique({ where: { id: created.id } });
  await prisma.ingestionJob.delete({ where: { id: created.id } });
  if (!readBack || readBack.id !== created.id) {
    console.error("3. Read/Write: FAILED (round-trip mismatch)");
    process.exitCode = 1;
    return;
  }
  console.log("3. Read/Write/Delete round-trip: OK");

  // 4. Seed counts
  const [machines, decisions] = await Promise.all([
    prisma.machineRig.count(),
    prisma.decisionRule.count()
  ]);
  console.log(`4. Seed counts: machines=${machines}, decisionRules=${decisions}`);

  console.log("Database verification passed.");
}

main().catch((error) => {
  console.error("Verification failed:", error instanceof Error ? error.message : "unknown error");
  process.exitCode = 1;
});
