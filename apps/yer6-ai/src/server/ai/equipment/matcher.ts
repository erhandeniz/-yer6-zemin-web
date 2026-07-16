import { RIG_DATABASE, type EquipmentRig } from "@/server/ai/equipment/database";

export type MatchingCriteria = {
  minTorque?: number; // kNm
  minDepth?: number; // m
  minDiameter?: number; // mm
  application?: string;
};

/**
 * Programmatically filters the equipment database based on requirements.
 */
export function findRigsForProject(criteria: MatchingCriteria): EquipmentRig[] {
  return RIG_DATABASE.filter((rig) => {
    if (criteria.minTorque && rig.torque < criteria.minTorque) return false;
    if (criteria.minDepth && rig.maxDepth < criteria.minDepth) return false;
    if (criteria.minDiameter && rig.maxDiameter < criteria.minDiameter) return false;
    if (criteria.application) {
      const appLower = criteria.application.toLowerCase();
      const hasApp = rig.applications.some((app) => app.toLowerCase().includes(appLower));
      if (!hasApp) return false;
    }
    return true;
  });
}
