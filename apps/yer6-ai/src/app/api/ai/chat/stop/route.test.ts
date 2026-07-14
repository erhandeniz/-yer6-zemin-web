import { afterEach, describe, expect, it, vi } from "vitest";

const { requireWorkspaceUser } = vi.hoisted(() => ({ requireWorkspaceUser: vi.fn() }));

vi.mock("@/server/auth/workspace-access", () => ({
  requireWorkspaceUser,
  isAccessResponse: (value: unknown) => value instanceof Response
}));

import { POST } from "@/app/api/ai/chat/stop/route";

describe("POST /api/ai/chat/stop", () => {
  afterEach(() => {
    delete process.env.AUTH_REQUIRED;
    vi.clearAllMocks();
  });

  it("rejects malformed request ids and acknowledges unknown valid ids", async () => {
    const invalid = await POST(new Request("https://yer6.test/api/ai/chat/stop", {
      method: "POST",
      body: JSON.stringify({ requestId: "invalid" })
    }));
    expect(invalid.status).toBe(400);

    const valid = await POST(new Request("https://yer6.test/api/ai/chat/stop", {
      method: "POST",
      body: JSON.stringify({ requestId: "89b9e620-05ac-41e2-91ad-3a4f18588fb4" })
    }));
    expect(valid.status).toBe(200);
    expect(await valid.json()).toEqual({ status: "acknowledged", stopped: false });
  });

  it("requires a workspace session when production authentication is enabled", async () => {
    process.env.AUTH_REQUIRED = "true";
    requireWorkspaceUser.mockResolvedValue(Response.json({ error: "UNAUTHORIZED" }, { status: 401 }));

    const response = await POST(new Request("https://yer6.test/api/ai/chat/stop", {
      method: "POST",
      body: JSON.stringify({ requestId: "89b9e620-05ac-41e2-91ad-3a4f18588fb4" })
    }));

    expect(response.status).toBe(401);
  });
});
