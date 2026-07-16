/**
 * Seed source for the Machine Database.
 *
 * The legacy in-memory RIG_DATABASE is retained only as the initial seed for the
 * Postgres-backed machine module — it is no longer the runtime source of truth.
 * Operators import this once (POST /api/admin/machines/import with `seed: true`)
 * and thereafter grow the catalogue with real manufacturer data. Nothing in the
 * query path hardcodes rigs any more.
 */

import { RIG_DATABASE } from "@/server/ai/equipment/database";
import type { MachineImportInput } from "@/server/knowledge/structured/machines";

export const MACHINE_SEED: MachineImportInput[] = RIG_DATABASE.map((rig) => ({
  manufacturer: rig.manufacturer,
  model: rig.model,
  partition: rig.manufacturer,
  category: rig.applications[0],
  torque: rig.torque,
  maxDepth: rig.maxDepth,
  maxDiameter: rig.maxDiameter,
  weight: rig.weight,
  enginePower: rig.enginePower,
  applications: rig.applications,
  advantages: rig.advantages,
  limitations: rig.limitations,
  source: "seed:legacy-rig-database"
}));
