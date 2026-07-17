/**
 * Production seed for the structured knowledge modules.
 *
 * Seeds:
 *   - Machine Database  (MACHINE_SEED → MachineRig rows, Postgres exact-match)
 *   - Decision Rules    (DECISION_SEED → DecisionRule rows)
 *
 * Run in a Node context with DATABASE_URL configured:
 *   pnpm --filter @yer6/ai db:seed
 *
 * Idempotent: importMany/upsert is checksum-diffed, so re-running only writes
 * changed rows. Machines are seeded WITHOUT the vector indexer here (Vectorize
 * is a Worker binding, not available in Node); semantic indexing is a follow-up
 * performed from the Worker. The exact-match matcher works from these rows
 * immediately. Never prints DATABASE_URL or any secret.
 */

import { MachineRepository } from "@/server/knowledge/structured/machines";
import { MACHINE_SEED } from "@/server/knowledge/structured/seed-machines";
import { DECISION_SEED } from "@/server/engine/decisions/engine";
import { importDecisionRules } from "@/server/engine/decisions/repository";

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set. Configure it before seeding (value not shown).");
    process.exitCode = 1;
    return;
  }

  console.log("Seeding Machine Database…");
  const machines = await new MachineRepository(null).importMany(MACHINE_SEED);
  console.log(
    `  machines: received=${machines.received} created=${machines.created} ` +
      `updated=${machines.updated} skipped=${machines.skipped} failed=${machines.failed}`
  );

  console.log("Seeding Engineering Decision Rules…");
  const decisions = await importDecisionRules(DECISION_SEED);
  console.log(
    `  decisions: received=${decisions.received} upserted=${decisions.upserted} failed=${decisions.failed}`
  );

  console.log("Seed complete.");
}

main().catch((error) => {
  // Print only the error message, never connection details.
  console.error("Seed failed:", error instanceof Error ? error.message : "unknown error");
  process.exitCode = 1;
});
