import { describe, expect, it } from "vitest";
import {
  chatPayloadSchema,
  MAX_CHAT_BODY_BYTES,
  rateLimitKey,
  readBoundedJSON,
  requestLocale
} from "@/server/ai/security";

const validPayload = {
  requestId: "89b9e620-05ac-41e2-91ad-3a4f18588fb4",
  conversationId: "conversation-1",
  locale: "tr",
  messages: [{ role: "user", content: "Merhaba" }]
};

describe("chat request security", () => {
  it("accepts a bounded valid conversation", () => {
    expect(chatPayloadSchema.safeParse(validPayload).success).toBe(true);
  });

  it("rejects oversized messages and unsupported roles", () => {
    expect(chatPayloadSchema.safeParse({
      ...validPayload,
      messages: [{ role: "system", content: "x".repeat(6_001) }]
    }).success).toBe(false);
  });

  it("removes unsafe control characters", () => {
    const parsed = chatPayloadSchema.parse({
      ...validPayload,
      messages: [{ role: "user", content: "Merhaba\u0000 dünya" }]
    });
    expect(parsed.messages[0].content).toBe("Merhaba dünya");
  });

  it("does not place raw IP or user identifiers in rate-limit keys", async () => {
    const request = new Request("https://example.test", { headers: { "cf-connecting-ip": "203.0.113.7" } });
    const key = await rateLimitKey(request);
    expect(key).toMatch(/^chat:[a-f0-9]{32}$/);
    expect(key).not.toContain("203.0.113.7");
  });

  it("defaults unknown locales to Turkish", () => {
    expect(requestLocale({ locale: "de" })).toBe("tr");
  });

  it("rejects bodies above the server byte limit before parsing", async () => {
    const request = new Request("https://example.test", {
      method: "POST",
      headers: { "content-length": String(MAX_CHAT_BODY_BYTES + 1) },
      body: "{}"
    });
    await expect(readBoundedJSON(request)).resolves.toEqual({ ok: false, reason: "too_large" });
  });
});
