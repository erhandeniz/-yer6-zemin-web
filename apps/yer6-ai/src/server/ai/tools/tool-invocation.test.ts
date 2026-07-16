import { describe, expect, it } from "vitest";
import { generateText, stepCountIs } from "ai";
import { MockLanguageModelV4 } from "ai/test";
import { buildEngineeringTools } from "@/server/ai/tools";
import type { ToolContext } from "@/server/ai/tools/contracts";

const context: ToolContext = {
  demo: false,
  locale: "tr",
  scope: { includeStandards: true },
  retrieval: { search: async () => [] },
  databaseAvailable: false,
  researchEnabled: false
};

/**
 * Proves the wiring end-to-end: when a model emits a tool call for one of our
 * engineering tools, the AI SDK loop actually invokes our `execute` and feeds
 * the real calculator result back. This is the same tools object and step loop
 * the production OpenAI provider uses.
 */
describe("real tool invocation loop", () => {
  it("executes calc_bearing_capacity when the model requests it", async () => {
    const tools = buildEngineeringTools(context);
    let call = 0;

    type MockConfig = ConstructorParameters<typeof MockLanguageModelV4>[0];
    const toolStep = {
      finishReason: "tool-calls",
      usage: { inputTokens: 1, outputTokens: 1, totalTokens: 2 },
      content: [
        {
          type: "tool-call",
          toolCallId: "call-1",
          toolName: "calc_bearing_capacity",
          input: JSON.stringify({
            cohesion: 25,
            phi: 30,
            gamma: 18,
            footingWidth: 2,
            footingDepth: 1.5,
            shape: "square",
            safetyFactor: 3
          })
        }
      ],
      warnings: []
    };
    const textStep = {
      finishReason: "stop",
      usage: { inputTokens: 1, outputTokens: 1, totalTokens: 2 },
      content: [{ type: "text", text: "Hesaplanan taşıma gücü tool çıktısındadır." }],
      warnings: []
    };
    // Single localized boundary cast for the mock; runtime shape is exercised by the assertions below.
    const model = new MockLanguageModelV4({
      doGenerate: async () => (call++ === 0 ? toolStep : textStep)
    } as unknown as MockConfig);

    const result = await generateText({
      model,
      tools,
      stopWhen: stepCountIs(4),
      prompt: "Kare temel için taşıma gücünü hesapla."
    });

    const toolResults = result.toolResults ?? [];
    expect(toolResults.length).toBeGreaterThan(0);
    const output = toolResults[0]?.output as { ok: boolean; units?: Record<string, string>; data?: { allowableCapacity: number } };
    expect(output.ok).toBe(true);
    expect(output.units).toMatchObject({ allowableCapacity: "kPa" });
    expect(output.data?.allowableCapacity).toBeGreaterThan(0);
    expect(result.text).toContain("tool");
  });
});
