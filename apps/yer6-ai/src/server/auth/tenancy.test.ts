import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  projectFindFirst: vi.fn(),
  conversationFindFirst: vi.fn(),
  documentFindFirst: vi.fn()
}));

vi.mock("@/lib/prisma", () => ({
  prisma: {
    project: { findFirst: mocks.projectFindFirst },
    conversation: { findFirst: mocks.conversationFindFirst },
    document: { findFirst: mocks.documentFindFirst }
  }
}));

import {
  canAccessConversation,
  canAccessDocument,
  canAccessOrganization,
  canAccessProject,
  canUpdateUserProfile
} from "@/server/auth/tenancy";

const userA = { user: { id: "userA", role: "MEMBER", organizationId: "orgA" } };
const userB = { user: { id: "userB", role: "MEMBER", organizationId: "orgB" } };
const admin = { user: { id: "admin1", role: "ADMIN", organizationId: "orgA" } };
const demo = { user: { id: "demo-engineer", role: "DEMO", organizationId: null } };

describe("tenant isolation (negative security tests)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.projectFindFirst.mockResolvedValue(null);
    mocks.conversationFindFirst.mockResolvedValue(null);
    mocks.documentFindFirst.mockResolvedValue(null);
  });

  it("User A CANNOT see User B's project (ownership predicate in the query)", async () => {
    expect(await canAccessProject(userA, "project-of-B")).toBe(false);
    expect(mocks.projectFindFirst).toHaveBeenCalledWith({
      where: { id: "project-of-B", ownerId: "userA" },
      select: { id: true }
    });
  });

  it("the owner CAN see their own project", async () => {
    mocks.projectFindFirst.mockResolvedValue({ id: "p1" });
    expect(await canAccessProject(userA, "p1")).toBe(true);
  });

  it("User A CANNOT read User B's conversation", async () => {
    expect(await canAccessConversation(userA, "conv-of-B")).toBe(false);
    expect(mocks.conversationFindFirst).toHaveBeenCalledWith({
      where: { id: "conv-of-B", userId: "userA" },
      select: { id: true }
    });
  });

  it("User A CANNOT download User B's file (document scoped via project owner)", async () => {
    expect(await canAccessDocument(userA, "doc-of-B")).toBe(false);
    expect(mocks.documentFindFirst).toHaveBeenCalledWith({
      where: { id: "doc-of-B", project: { ownerId: "userA" } },
      select: { id: true }
    });
  });

  it("User A CANNOT update User B's profile; self and admin can", () => {
    expect(canUpdateUserProfile(userA, "userB")).toBe(false);
    expect(canUpdateUserProfile(userA, "userA")).toBe(true);
    expect(canUpdateUserProfile(admin, "userB")).toBe(true);
  });

  it("one company CANNOT see another company's records", () => {
    expect(canAccessOrganization(userA, "orgB")).toBe(false);
    expect(canAccessOrganization(userB, "orgB")).toBe(true);
  });

  it("DEMO sessions can NEVER touch tenant records (no query even attempted)", async () => {
    expect(await canAccessProject(demo, "p1")).toBe(false);
    expect(await canAccessConversation(demo, "c1")).toBe(false);
    expect(await canAccessDocument(demo, "d1")).toBe(false);
    expect(canAccessOrganization(demo, "orgA")).toBe(false);
    expect(mocks.projectFindFirst).not.toHaveBeenCalled();
    expect(mocks.conversationFindFirst).not.toHaveBeenCalled();
    expect(mocks.documentFindFirst).not.toHaveBeenCalled();
  });

  it("ADMIN may cross user boundaries (audited by calling routes)", async () => {
    mocks.projectFindFirst.mockResolvedValue({ id: "p9" });
    expect(await canAccessProject(admin, "p9")).toBe(true);
    expect(mocks.projectFindFirst).toHaveBeenCalledWith({
      where: { id: "p9" },
      select: { id: true }
    });
  });

  it("anonymous callers are always denied", async () => {
    expect(await canAccessProject(null, "p1")).toBe(false);
    expect(canUpdateUserProfile(null, "userA")).toBe(false);
    expect(canAccessOrganization(null, "orgA")).toBe(false);
  });
});
