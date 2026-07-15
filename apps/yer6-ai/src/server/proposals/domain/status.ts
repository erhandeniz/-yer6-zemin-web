/**
 * Proposal status state machine and immutability rules (section C).
 */

import type { ProposalStatus } from "./types";

export const STATUS_ORDER: ProposalStatus[] = [
  "draft",
  "awaiting_information",
  "calculation_ready",
  "validation_failed",
  "pdf_generating",
  "pdf_verification",
  "ready_for_review",
  "approved",
  "sent",
  "viewed",
  "accepted",
  "rejected",
  "expired",
  "cancelled",
  "revised"
];

/**
 * Once a revision has been approved, sent, viewed, accepted, rejected, expired
 * or superseded ("revised"), its data and its PDF are frozen. Any change must
 * create a NEW revision instead of mutating this one.
 */
export const IMMUTABLE_STATUSES: ReadonlySet<ProposalStatus> = new Set<ProposalStatus>([
  "approved",
  "sent",
  "viewed",
  "accepted",
  "rejected",
  "expired",
  "revised"
]);

export function isImmutable(status: ProposalStatus): boolean {
  return IMMUTABLE_STATUSES.has(status);
}

const TRANSITIONS: Record<ProposalStatus, ProposalStatus[]> = {
  draft: ["awaiting_information", "calculation_ready", "validation_failed", "cancelled"],
  awaiting_information: ["draft", "calculation_ready", "cancelled"],
  calculation_ready: ["validation_failed", "pdf_generating", "draft", "cancelled"],
  validation_failed: ["draft", "calculation_ready", "cancelled"],
  pdf_generating: ["pdf_verification", "validation_failed", "draft"],
  pdf_verification: ["ready_for_review", "validation_failed", "pdf_generating", "draft"],
  ready_for_review: ["approved", "draft", "pdf_generating", "cancelled", "revised"],
  approved: ["sent", "revised", "cancelled"],
  sent: ["viewed", "accepted", "rejected", "expired", "revised"],
  viewed: ["accepted", "rejected", "expired", "revised"],
  accepted: ["revised"],
  rejected: ["revised"],
  expired: ["revised"],
  cancelled: [],
  revised: []
};

export function canTransition(from: ProposalStatus, to: ProposalStatus): boolean {
  if (from === to) return true;
  return (TRANSITIONS[from] ?? []).includes(to);
}

export function assertTransition(from: ProposalStatus, to: ProposalStatus): void {
  if (!canTransition(from, to)) {
    throw new Error(`ILLEGAL_STATUS_TRANSITION:${from}->${to}`);
  }
}
