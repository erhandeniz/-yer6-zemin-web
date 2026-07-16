import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  admin: null as unknown,
  rateSuccess: true
}));

vi.mock("@/server/auth/workspace-access", () => ({
  requireAdmin: vi.fn(async () => mocks.admin)
}));
vi.mock("@/server/ai/runtime-bindings", () => ({
  getRuntimeBindings: vi.fn(async () => ({
    AI_RATE_LIMITER: { limit: async () => ({ success: mocks.rateSuccess }) }
  }))
}));

import { guardAdmin, isDemoRequest } from "@/server/auth/admin-guard";

function req(headers: Record<string, string> = {}) {
  return new Request("https://yer6.test/api/admin/machines", { method: "POST", headers });
}

describe("admin guard", () => {
  beforeEach(() => {
    mocks.admin = { user: { id: "admin-1", role: "ADMIN" }, expires: "" };
    mocks.rateSuccess = true;
    delete process.env.NEXT_PUBLIC_DEMO_MODE;
  });
  afterEach(() => {
    delete process.env.NEXT_PUBLIC_DEMO_MODE;
  });

  it("blocks demo-header requests before any auth check", async () => {
    const response = await guardAdmin(req({ "x-yer6-demo": "true" }), { rateLimit: true });
    expect(response).toBeInstanceOf(Response);
    expect((response as Response).status).toBe(403);
    expect(await (response as Response).json()).toEqual({ error: "FORBIDDEN_IN_DEMO" });
  });

  it("blocks requests when NEXT_PUBLIC_DEMO_MODE is enabled", async () => {
    process.env.NEXT_PUBLIC_DEMO_MODE = "true";
    expect(isDemoRequest(req())).toBe(true);
    const response = await guardAdmin(req());
    expect((response as Response).status).toBe(403);
  });

  it("propagates the unauthorized response from requireAdmin", async () => {
    mocks.admin = Response.json({ error: "UNAUTHORIZED" }, { status: 401 });
    const response = await guardAdmin(req());
    expect((response as Response).status).toBe(401);
  });

  it("rate-limits authorized mutations", async () => {
    mocks.rateSuccess = false;
    const response = await guardAdmin(req(), { rateLimit: true });
    expect((response as Response).status).toBe(429);
    expect((response as Response).headers.get("retry-after")).toBe("60");
  });

  it("returns the admin session when authorized and within limits", async () => {
    const result = await guardAdmin(req(), { rateLimit: true });
    expect(result).not.toBeInstanceOf(Response);
    expect((result as { user: { id: string } }).user.id).toBe("admin-1");
  });
});
