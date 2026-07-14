import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  compare: vi.fn(async () => true),
  findUnique: vi.fn()
}));

vi.mock("@next-auth/prisma-adapter", () => ({ PrismaAdapter: vi.fn(() => ({})) }));
vi.mock("bcryptjs", () => ({ compare: mocks.compare }));
vi.mock("@/lib/prisma", () => ({
  prisma: { user: { findUnique: mocks.findUnique } }
}));

import { authorizeCredentials } from "@/lib/auth";

describe("credential authorization", () => {
  beforeEach(() => {
    mocks.findUnique.mockReset();
    mocks.compare.mockClear();
    delete process.env.DEMO_EMAIL;
    delete process.env.DEMO_PASSWORD;
  });
  afterEach(() => {
    delete process.env.DEMO_EMAIL;
    delete process.env.DEMO_PASSWORD;
  });

  it("normalizes email and validates a stored password hash", async () => {
    mocks.findUnique.mockResolvedValue({
      id: "u1",
      email: "engineer@yer6.ai",
      name: "Engineer",
      image: null,
      role: "ENGINEER",
      passwordHash: "hash"
    });
    const user = await authorizeCredentials({ email: "  ENGINEER@YER6.AI ", password: "correct" });
    expect(mocks.findUnique).toHaveBeenCalledWith({ where: { email: "engineer@yer6.ai" } });
    expect(mocks.compare).toHaveBeenCalledWith("correct", "hash");
    expect(user).toMatchObject({ id: "u1", email: "engineer@yer6.ai" });
  });

  it("rejects missing and oversized credentials before database access", async () => {
    expect(await authorizeCredentials(undefined)).toBeNull();
    expect(await authorizeCredentials({ email: `${"a".repeat(250)}@x.io`, password: "x" })).toBeNull();
    expect(await authorizeCredentials({ email: "a@x.io", password: "x".repeat(129) })).toBeNull();
    expect(mocks.findUnique).not.toHaveBeenCalled();
  });

  it("enables demo login only when both explicit credentials match", async () => {
    process.env.DEMO_EMAIL = "demo@yer6.ai";
    process.env.DEMO_PASSWORD = "local-only";
    expect(await authorizeCredentials({ email: "DEMO@YER6.AI", password: "local-only" }))
      .toMatchObject({ id: "demo-engineer", role: "ENGINEER" });
    expect(await authorizeCredentials({ email: "demo@yer6.ai", password: "wrong" })).toBeNull();
  });
});
