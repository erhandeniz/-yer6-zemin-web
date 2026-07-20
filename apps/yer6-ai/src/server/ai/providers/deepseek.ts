import { createOpenAI } from "@ai-sdk/openai";
import { stepCountIs, streamText } from "ai";
import { DEEPSEEK_BASE_URL } from "@/server/ai/config";
import type { AIProvider, AIProviderInput } from "@/server/ai/providers/types";

/**
 * DeepSeek provider. DeepSeek exposes an OpenAI-compatible Chat Completions API,
 * so we reuse the AI SDK's OpenAI client with a custom baseURL and the `.chat()`
 * model factory. Function-calling (tools) is supported via chat completions.
 *
 * Used as the low-cost primary brain for the PUBLIC marketing bot; the public
 * provider chain falls back to GPT-5.6 and then Cloudflare Workers AI.
 */
export function createDeepSeekProvider(apiKey: string, model: string): AIProvider {
  const provider = createOpenAI({ apiKey, baseURL: DEEPSEEK_BASE_URL });

  return {
    name: "deepseek",
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
