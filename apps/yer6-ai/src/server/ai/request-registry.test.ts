import { describe, expect, it } from "vitest";
import { registerAIRequest, stopAIRequest } from "@/server/ai/request-registry";

describe("AI request registry", () => {
  it("shares only a stop flag across request contexts", () => {
    const incoming = new AbortController();
    const active = registerAIRequest("request-1", incoming.signal);
    expect(active.signal.aborted).toBe(false);
    expect(stopAIRequest("request-1")).toBe(true);
    expect(active.shouldStop()).toBe(true);
    expect(active.signal.aborted).toBe(false);
    active.abort();
    expect(active.signal.aborted).toBe(true);
    active.cleanup();
  });

  it("relays client disconnects", () => {
    const incoming = new AbortController();
    const active = registerAIRequest("request-2", incoming.signal);
    incoming.abort();
    expect(active.signal.aborted).toBe(true);
    active.cleanup();
  });
});
