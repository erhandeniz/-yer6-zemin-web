import { afterEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({ ingest: vi.fn(async () => ({ documentId: "d1", status: "READY" })) }));
vi.mock("@/server/rag/runtime", () => ({
  createRAGAdminRuntime: vi.fn(async () => ({ ingestion: { ingest: mocks.ingest } }))
}));

import { POST } from "@/app/api/internal/rag/ingest/route";

function request(authorization?: string, body = { documentId: "d1" }) {
  return new Request("https://yer6.test/api/internal/rag/ingest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(authorization ? { Authorization: authorization } : {})
    },
    body: JSON.stringify(body)
  });
}

describe("internal RAG ingestion API", () => {
  afterEach(() => delete process.env.RAG_INGESTION_SECRET);

  it("rejects a missing or invalid secret", async () => {
    process.env.RAG_INGESTION_SECRET = "correct-secret";
    expect((await POST(request())).status).toBe(401);
    expect((await POST(request("Bearer wrong-secret"))).status).toBe(401);
  });

  it("accepts the configured secret without exposing it", async () => {
    process.env.RAG_INGESTION_SECRET = "correct-secret";
    const response = await POST(request("Bearer correct-secret"));
    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({ documentId: "d1", status: "READY" });
  });
});
