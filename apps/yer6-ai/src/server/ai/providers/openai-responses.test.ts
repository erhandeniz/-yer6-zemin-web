import { describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  apiKey: "",
  model: "",
  call: null as Record<string, unknown> | null
}));

vi.mock("@ai-sdk/openai", () => ({
  createOpenAI: ({ apiKey }: { apiKey: string }) => {
    mocks.apiKey = apiKey;
    return {
      responses(model: string) {
        mocks.model = model;
        return { provider: "responses-api", model };
      }
    };
  }
}));

vi.mock("ai", () => ({
  streamText: (call: Record<string, unknown>) => {
    mocks.call = call;
    return {
      textStream: (async function* () {
        yield "streamed";
        yield " response";
      })()
    };
  }
}));

import { createOpenAIResponsesProvider } from "@/server/ai/providers/openai-responses";

describe("OpenAI Responses provider", () => {
  it("uses the server API key, Responses API model and streaming history", async () => {
    const provider = createOpenAIResponsesProvider("server-test-key", "gpt-test");
    const chunks: string[] = [];
    for await (const chunk of provider.stream({
      system: "system prompt",
      messages: [{ role: "user", content: "Merhaba" }],
      maxOutputTokens: 900,
      abortSignal: new AbortController().signal
    })) chunks.push(chunk);

    expect(mocks.apiKey).toBe("server-test-key");
    expect(mocks.model).toBe("gpt-test");
    expect(mocks.call).toMatchObject({
      model: { provider: "responses-api", model: "gpt-test" },
      messages: [{ role: "user", content: "Merhaba" }],
      maxOutputTokens: 900
    });
    expect(chunks.join("")).toBe("streamed response");
  });
});
