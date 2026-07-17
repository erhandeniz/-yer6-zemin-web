import { afterEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

const mocks = vi.hoisted(() => ({ token: null as object | null }));
vi.mock("next-auth/jwt", () => ({ getToken: vi.fn(async () => mocks.token) }));

import { middleware } from "@/middleware";

describe("authentication middleware", () => {
  afterEach(() => {
    delete process.env.AUTH_REQUIRED;
    mocks.token = null;
  });

  it("redirects anonymous production traffic to login with a local callback", async () => {
    process.env.AUTH_REQUIRED = "true";
    const response = await middleware(new NextRequest("https://ai.yer6.test/projects?status=active"));
    expect(response.status).toBe(307);
    expect(response.headers.get("location"))
      .toBe("https://ai.yer6.test/login?callbackUrl=%2Fprojects%3Fstatus%3Dactive");
  });

  it("lets anonymous visitors open the public demo without any login redirect", async () => {
    // Root cause of the mobile demo failure: a middleware build without the
    // /demo bypass redirected every anonymous /demo/* request to /login.
    process.env.AUTH_REQUIRED = "true";
    mocks.token = null;
    for (const path of ["/demo", "/demo/chat", "/demo/projects", "/demo/chat?utm=ad"]) {
      const response = await middleware(new NextRequest(`https://ai.yer6.test${path}`));
      expect(response.status, `expected pass-through for ${path}`).toBe(200);
      expect(response.headers.get("location")).toBeNull();
    }
  });

  it("still protects non-demo routes while the demo is open", async () => {
    process.env.AUTH_REQUIRED = "true";
    mocks.token = null;
    const priv = await middleware(new NextRequest("https://ai.yer6.test/chat"));
    expect(priv.status).toBe(307);
    expect(priv.headers.get("location")).toContain("/login");
  });

  it("allows authenticated and explicitly unauthenticated development traffic", async () => {
    process.env.AUTH_REQUIRED = "true";
    mocks.token = { sub: "u1" };
    expect((await middleware(new NextRequest("https://ai.yer6.test/"))).status).toBe(200);
    process.env.AUTH_REQUIRED = "false";
    mocks.token = null;
    expect((await middleware(new NextRequest("https://ai.yer6.test/"))).status).toBe(200);
  });
});
