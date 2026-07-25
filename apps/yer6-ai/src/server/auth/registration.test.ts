import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  userFindUnique: vi.fn(),
  userCreate: vi.fn(),
  orgCreate: vi.fn(),
  orgUpdate: vi.fn(),
  appSettingFindUnique: vi.fn(),
  auditCreate: vi.fn(),
  hash: vi.fn(async () => "hashed-password")
}));

vi.mock("bcryptjs", () => ({ hash: mocks.hash }));
vi.mock("@/lib/prisma", () => ({
  prisma: {
    user: { findUnique: mocks.userFindUnique, create: mocks.userCreate },
    organization: { create: mocks.orgCreate, update: mocks.orgUpdate },
    appSetting: { findUnique: mocks.appSettingFindUnique },
    auditLog: { create: mocks.auditCreate }
  }
}));

import { passwordMeetsPolicy, registerUser } from "@/server/auth/registration";
import { getRegistrationPolicy } from "@/server/auth/registration-policy";

const validInput = {
  firstName: "Ahmet",
  lastName: "Yılmaz",
  email: "Ahmet.Yilmaz@Firma.COM",
  password: "guclu-sifre-2026",
  companyName: "Yılmaz İnşaat",
  jobTitle: "Şantiye Şefi",
  country: "Türkiye",
  city: "Ankara"
};

describe("registration (Package A)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    delete process.env.REGISTRATION_DISABLED;
    delete process.env.DATABASE_URL;
    mocks.userFindUnique.mockResolvedValue(null);
    mocks.orgCreate.mockResolvedValue({ id: "org1" });
    mocks.userCreate.mockResolvedValue({ id: "user1" });
    mocks.orgUpdate.mockResolvedValue({});
  });
  afterEach(() => {
    delete process.env.REGISTRATION_DISABLED;
    delete process.env.DATABASE_URL;
  });

  it("enforces the strong password policy", () => {
    expect(passwordMeetsPolicy("short1")).toBe(false);
    expect(passwordMeetsPolicy("onlylettershere")).toBe(false);
    expect(passwordMeetsPolicy("123456789012")).toBe(false);
    expect(passwordMeetsPolicy("guclu-sifre-2026")).toBe(true);
  });

  it("creates the organization + user with normalized email and default MEMBER role", async () => {
    const result = await registerUser(validInput);
    expect(result).toMatchObject({ ok: true, created: true });
    expect(mocks.userFindUnique).toHaveBeenCalledWith({
      where: { email: "ahmet.yilmaz@firma.com" },
      select: { id: true }
    });
    expect(mocks.orgCreate).toHaveBeenCalledWith({
      data: expect.objectContaining({ name: "Yılmaz İnşaat" })
    });
    const created = mocks.userCreate.mock.calls[0][0].data;
    expect(created.role).toBe("MEMBER");
    expect(created.organizationId).toBe("org1");
    expect(created.passwordHash).toBe("hashed-password");
    expect(created.email).toBe("ahmet.yilmaz@firma.com");
  });

  it("returns an identical success shape for duplicate emails (no enumeration)", async () => {
    mocks.userFindUnique.mockResolvedValue({ id: "existing" });
    const result = await registerUser(validInput);
    expect(result).toMatchObject({ ok: true, created: false });
    expect(mocks.userCreate).not.toHaveBeenCalled();
    expect(mocks.orgCreate).not.toHaveBeenCalled();
    // Outward JSON shape matches a fresh registration: { ok, created, verificationRequired }
    expect(Object.keys(result).sort()).toEqual(["created", "ok", "verificationRequired"]);
  });

  it("rejects weak passwords", async () => {
    const result = await registerUser({ ...validInput, password: "kisa1" });
    expect(result).toEqual({ ok: false, code: "weak_password" });
    expect(mocks.userCreate).not.toHaveBeenCalled();
  });

  it("honours the emergency kill-switch (registration closed)", async () => {
    process.env.REGISTRATION_DISABLED = "true";
    const result = await registerUser(validInput);
    expect(result).toEqual({ ok: false, code: "registration_closed" });
    expect(mocks.userCreate).not.toHaveBeenCalled();
  });

  it("reads the ADMIN-configured default role from AppSetting", async () => {
    process.env.DATABASE_URL = "postgres://test";
    mocks.appSettingFindUnique.mockResolvedValue({
      value: { open: true, defaultRole: "VIEWER" }
    });
    const policy = await getRegistrationPolicy();
    expect(policy.defaultRole).toBe("VIEWER");
    expect(policy.open).toBe(true);
  });

  it("fails CLOSED when the policy store is unreachable", async () => {
    process.env.DATABASE_URL = "postgres://test";
    mocks.appSettingFindUnique.mockRejectedValue(new Error("db down"));
    const policy = await getRegistrationPolicy();
    expect(policy.open).toBe(false);
  });
});
