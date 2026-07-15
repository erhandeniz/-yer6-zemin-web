import { describe, expect, it } from "vitest";
import { canTransition, isImmutable } from "@/server/proposals/domain/status";

describe("status state machine", () => {
  it("allows valid transitions", () => {
    expect(canTransition("draft", "calculation_ready")).toBe(true);
    expect(canTransition("ready_for_review", "approved")).toBe(true);
    expect(canTransition("approved", "sent")).toBe(true);
    expect(canTransition("sent", "accepted")).toBe(true);
  });
  it("blocks illegal transitions", () => {
    expect(canTransition("accepted", "draft")).toBe(false);
    expect(canTransition("cancelled", "sent")).toBe(false);
    expect(canTransition("sent", "draft")).toBe(false);
  });
  it("marks issued statuses immutable", () => {
    for (const s of ["approved", "sent", "viewed", "accepted", "rejected", "expired", "revised"] as const) {
      expect(isImmutable(s)).toBe(true);
    }
    expect(isImmutable("draft")).toBe(false);
    expect(isImmutable("ready_for_review")).toBe(false);
  });
});
