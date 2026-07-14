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

  it("allows authenticated and explicitly unauthenticated development traffic", async () => {
    process.env.AUTH_REQUIRED = "true";
    mocks.token = { sub: "u1" };
    expect((await middleware(new NextRequest("https://ai.yer6.test/"))).status).toBe(200);
    process.env.AUTH_REQUIRED = "false";
    mocks.token = null;
    expect((await middleware(new NextRequest("https://ai.yer6.test/"))).status).toBe(200);
  });
});
