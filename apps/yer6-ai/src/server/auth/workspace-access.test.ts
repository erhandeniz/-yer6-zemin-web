import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  getServerSession: vi.fn()
}));

vi.mock("next-auth", () => ({ getServerSession: mocks.getServerSession }));
vi.mock("@/lib/auth", () => ({ authOptions: {} }));

import { requireAdmin } from "@/server/auth/workspace-access";

describe("admin route authorization (roles)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    delete process.env.ADMIN_API_DEV_BYPASS;
  });

  it("MEMBER cannot use ADMIN routes", async () => {
    mocks.getServerSession.mockResolvedValue({ user: { id: "u1", role: "MEMBER" } });
    const result = await requireAdmin();
    expect(result).toBeInstanceOf(Response);
    expect((result as Response).status).toBe(403);
  });

  it("DEMO cannot use ADMIN routes", async () => {
    mocks.getServerSession.mockResolvedValue({ user: { id: "demo-engineer", role: "DEMO" } });
    const result = await requireAdmin();
    expect((result as Response).status).toBe(403);
  });

  it("ADMIN and SUPER_ADMIN are accepted", async () => {
    mocks.getServerSession.mockResolvedValue({ user: { id: "a1", role: "ADMIN" } });
    expect(await requireAdmin()).toMatchObject({ user: { id: "a1" } });
    mocks.getServerSession.mockResolvedValue({ user: { id: "s1", role: "SUPER_ADMIN" } });
    expect(await requireAdmin()).toMatchObject({ user: { id: "s1" } });
  });

  it("anonymous callers get 401", async () => {
    mocks.getServerSession.mockResolvedValue(null);
    const result = await requireAdmin();
    expect((result as Response).status).toBe(401);
  });
});
