import { createOpenAI } from "@ai-sdk/openai";
import { stepCountIs, streamText } from "ai";
import { GEMINI_BASE_URL } from "@/server/ai/config";
import type { AIProvider, AIProviderInput } from "@/server/ai/providers/types";

/**
 * Google Gemini provider via the OpenAI-compatible endpoint
 * (generativelanguage.googleapis.com/v1beta/openai). Reuses the AI SDK's OpenAI
 * client with a custom baseURL — no extra dependency, same pattern as DeepSeek.
 *
 * Gemini's free tier (Flash class, ~1500 req/day, no credit card) makes it the
 * FREE primary brain for the public marketing bot. On a rate-limit (429) or any
 * error it produces before output, the public chain falls through to DeepSeek,
 * then GPT-5.6, then Cloudflare Workers AI.
 */
export function createGeminiProvider(apiKey: string, model: string): AIProvider {
  const provider = createOpenAI({ apiKey, baseURL: GEMINI_BASE_URL });

  return {
    name: "gemini",
    supportsTools: true,
    async *stream(input: AIProviderInput) {
      const hasTools = input.tools && Object.keys(input.tools).length > 0;
      const result = streamText({
        model: provider.chat(model),
        system: input.system,
        messages: input.messages,
        maxOutputTokens: input.maxOutputTokens,
        temperature: 0.3,
        abortSignal: input.abortSignal,
        ...(hasTools
          ? {
              tools: input.tools,
              stopWhen: stepCountIs(input.maxSteps ?? 6),
              onStepFinish: ({ toolCalls }) => {
                for (const call of toolCalls ?? []) {
                  input.onToolCall?.(call.toolName);
                }
              }
            }
          : {})
      });

      for await (const text of result.textStream) {
        if (text) yield text;
      }
    }
  };
}
