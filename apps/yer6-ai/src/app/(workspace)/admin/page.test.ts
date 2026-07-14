import { beforeEach, describe, expect, it, vi } from "vitest";

const { redirect, requireAdmin } = vi.hoisted(() => ({
  redirect: vi.fn((path: string) => {
    throw new Error(`REDIRECT:${path}`);
  }),
  requireAdmin: vi.fn()
}));

vi.mock("next/navigation", () => ({ redirect }));
vi.mock("@/components/admin/admin-view", () => ({ AdminView: () => null }));
vi.mock("@/server/auth/workspace-access", () => ({
  requireAdmin,
  isAccessResponse: (value: unknown) => value instanceof Response
}));

import AdminPage from "./page";

describe("admin page access", () => {
  beforeEach(() => vi.clearAllMocks());

  it("redirects a signed-in non-admin away from the admin page", async () => {
    requireAdmin.mockResolvedValue(Response.json({ error: "FORBIDDEN" }, { status: 403 }));
    await expect(AdminPage()).rejects.toThrow("REDIRECT:/");
  });

  it("renders for an admin session", async () => {
    requireAdmin.mockResolvedValue({ user: { id: "admin", role: "ADMIN" }, expires: "" });
    await expect(AdminPage()).resolves.toBeTruthy();
    expect(redirect).not.toHaveBeenCalled();
  });
});
