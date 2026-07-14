import { beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

const mocks = vi.hoisted(() => ({
  getServerSession: vi.fn(),
  get: vi.fn<(request: Request) => Promise<Response>>(async () => new Response(null, { status: 200 })),
  post: vi.fn<(request: Request) => Promise<Response>>(async () => new Response(null, { status: 200 }))
}));

vi.mock("next-auth", () => ({ getServerSession: mocks.getServerSession }));
vi.mock("@/lib/auth", () => ({ authOptions: {} }));
vi.mock("uploadthing/next", async (importOriginal) => {
  const actual = await importOriginal<typeof import("uploadthing/next")>();
  return {
    ...actual,
    createRouteHandler: vi.fn(() => ({ GET: mocks.get, POST: mocks.post }))
  };
});

import { getUploadPrincipal } from "./core";
import { POST } from "./route";

describe("UploadThing route principal binding", () => {
  beforeEach(() => {
    mocks.getServerSession.mockReset();
    mocks.post.mockReset();
  });

  it("captures the authenticated principal before entering UploadThing", async () => {
    const request = new NextRequest("https://yer6.example/api/uploadthing", { method: "POST" });
    mocks.getServerSession.mockResolvedValue({ user: { id: "admin-1", role: "ADMIN" } });

    let observed: ReturnType<typeof getUploadPrincipal>;
    mocks.post.mockImplementationOnce(async (received) => {
      observed = getUploadPrincipal(received);
      return new Response(null, { status: 200 });
    });

    await POST(request);

    expect(observed!).toEqual({ id: "admin-1", role: "ADMIN" });
    expect(getUploadPrincipal(request)).toBeNull();
  });

  it("binds an anonymous request explicitly instead of reading ambient auth state", async () => {
    const request = new NextRequest("https://yer6.example/api/uploadthing", { method: "POST" });
    mocks.getServerSession.mockResolvedValue(null);

    mocks.post.mockImplementationOnce(async (received) => {
      expect(getUploadPrincipal(received)).toBeNull();
      return new Response(null, { status: 200 });
    });

    await POST(request);
    expect(mocks.post).toHaveBeenCalledWith(request);
  });
});
