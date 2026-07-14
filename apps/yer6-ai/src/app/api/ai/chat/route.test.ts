import { beforeEach, describe, expect, it, vi } from "vitest";
import { getServerSession } from "next-auth";
import type { AIProvider } from "@/server/ai/providers/types";

const mocks = vi.hoisted(() => ({
  providers: [] as AIProvider[],
  rateLimitSuccess: true
}));

vi.mock("next-auth", () => ({ getServerSession: vi.fn(async () => null) }));
vi.mock("@/lib/auth", () => ({ authOptions: {} }));
vi.mock("@/server/ai/providers/registry", () => ({
  createProviderChain: vi.fn(() => mocks.providers)
}));
vi.mock("@/server/ai/runtime-bindings", () => ({
  getRuntimeBindings: vi.fn(async () => ({
    AI_RATE_LIMITER: {
      limit: async () => ({ success: mocks.rateLimitSuccess })
    }
  }))
}));

import { POST } from "@/app/api/ai/chat/route";

const requestId = "89b9e620-05ac-41e2-91ad-3a4f18588fb4";

function chatRequest(messages = [{ role: "user", content: "Merhaba" }], locale = "tr") {
  return new Request("https://yer6.test/api/ai/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json", "cf-connecting-ip": "203.0.113.7" },
    body: JSON.stringify({
      requestId,
      conversationId: "conversation-1",
      locale,
      messages
    })
  });
}

async function responseEvents(response: Response) {
  const text = await response.text();
  return text
    .split("\n\n")
    .map((block) => block.split("\n").find((line) => line.startsWith("data:"))?.slice(5).trim())
    .filter((data): data is string => Boolean(data))
    .map((data) => JSON.parse(data) as { type: string; [key: string]: unknown });
}

describe("POST /api/ai/chat", () => {
  beforeEach(() => {
    mocks.providers = [];
    mocks.rateLimitSuccess = true;
    delete process.env.AUTH_REQUIRED;
    vi.mocked(getServerSession).mockClear();
  });

  it("does not initialize authentication when auth is disabled", async () => {
    await POST(chatRequest());
    expect(getServerSession).not.toHaveBeenCalled();
  });

  it("requires a session only when authentication is enabled", async () => {
    process.env.AUTH_REQUIRED = "true";
    const response = await POST(chatRequest());
    expect(response.status).toBe(401);
    expect(getServerSession).toHaveBeenCalledOnce();
  });

  it("returns an explicit message when no provider is configured", async () => {
    const response = await POST(chatRequest());
    expect(response.status).toBe(503);
    expect(await response.text()).toBe("Yapay zekâ hizmeti henüz yapılandırılmadı.");
  });

  it("streams provider metadata, text deltas and completion", async () => {
    mocks.providers = [{
      name: "cloudflare-workers-ai",
      async *stream() {
        yield "Merhaba";
        yield " Erhan";
      }
    }];
    const response = await POST(chatRequest());
    const events = await responseEvents(response);
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("text/event-stream");
    expect(events.map((event) => event.type)).toEqual(["sources", "meta", "delta", "delta", "done"]);
    expect(events.filter((event) => event.type === "delta").map((event) => event.text).join(""))
      .toBe("Merhaba Erhan");
  });

  it("falls back when the primary provider fails before producing output", async () => {
    mocks.providers = [
      {
        name: "openai",
        async *stream() {
          throw new Error("private provider failure");
        }
      },
      {
        name: "cloudflare-workers-ai",
        async *stream() {
          yield "Yedek sağlayıcı yanıtı";
        }
      }
    ];
    const events = await responseEvents(await POST(chatRequest()));
    expect(events.filter((event) => event.type === "meta").map((event) => event.provider))
      .toEqual(["openai", "cloudflare-workers-ai"]);
    expect(events.find((event) => event.type === "delta")?.text).toBe("Yedek sağlayıcı yanıtı");
    expect(JSON.stringify(events)).not.toContain("private provider failure");
  });

  it("does not mix providers after the primary has emitted partial output", async () => {
    mocks.providers = [
      {
        name: "openai",
        async *stream() {
          yield "Kısmi yanıt";
          throw new Error("private midstream failure");
        }
      },
      {
        name: "cloudflare-workers-ai",
        async *stream() {
          yield "Karıştırılmaması gereken yedek yanıt";
        }
      }
    ];
    const events = await responseEvents(await POST(chatRequest()));
    expect(events.filter((event) => event.type === "meta").map((event) => event.provider))
      .toEqual(["openai"]);
    expect(events.filter((event) => event.type === "delta").map((event) => event.text))
      .toEqual(["Kısmi yanıt"]);
    expect(events.at(-1)?.type).toBe("error");
    expect(JSON.stringify(events)).not.toContain("private midstream failure");
  });

  it("returns a localized safe error when every provider fails", async () => {
    mocks.providers = [
      { name: "openai", async *stream() { throw new Error("openai secret detail"); } },
      { name: "cloudflare-workers-ai", async *stream() { throw new Error("cloudflare secret detail"); } }
    ];
    const events = await responseEvents(await POST(chatRequest()));
    expect(events.at(-1)).toEqual({
      type: "error",
      message: "Yapay zekâ hizmetine şu anda ulaşılamıyor. Lütfen biraz sonra yeniden deneyin."
    });
    expect(JSON.stringify(events)).not.toContain("secret detail");
  });

  it("passes multi-turn history to the provider", async () => {
    const receivedHistories: unknown[] = [];
    mocks.providers = [{
      name: "cloudflare-workers-ai",
      async *stream(input) {
        receivedHistories.push(input.messages);
        yield "Bağlamı hatırladım";
      }
    }];
    const history = [
      { role: "user", content: "Projem Bursa'da." },
      { role: "assistant", content: "Anladım." },
      { role: "user", content: "Zemin yumuşak kil. Hangi yöntem uygun?" }
    ];
    await (await POST(chatRequest(history))).text();
    expect(receivedHistories).toEqual([history]);
  });

  it("enforces the configured rate limit before model execution", async () => {
    mocks.rateLimitSuccess = false;
    mocks.providers = [{ name: "cloudflare-workers-ai", async *stream() { yield "unused"; } }];
    const response = await POST(chatRequest());
    expect(response.status).toBe(429);
    expect(response.headers.get("retry-after")).toBe("60");
  });

  it("localizes unconfigured responses in English and Arabic", async () => {
    const english = await POST(chatRequest(undefined, "en"));
    const arabic = await POST(chatRequest(undefined, "ar"));
    expect(await english.text()).toBe("The AI service has not been configured yet.");
    expect(await arabic.text()).toBe("لم تتم تهيئة خدمة الذكاء الاصطناعي بعد.");
  });
});
