import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import type { AIProvider, AIProviderInput } from "@/server/ai/providers/types";

export function createOpenAIResponsesProvider(apiKey: string, model: string): AIProvider {
  const provider = createOpenAI({ apiKey });

  return {
    name: "openai",
    async *stream(input: AIProviderInput) {
      const result = streamText({
        model: provider.responses(model),
        system: input.system,
        messages: input.messages,
        maxOutputTokens: input.maxOutputTokens,
        temperature: 0.3,
        abortSignal: input.abortSignal
      });

      for await (const text of result.textStream) {
        if (text) yield text;
      }
    }
  };
}
