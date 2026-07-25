import { createOpenAI } from "@ai-sdk/openai";
import { stepCountIs, streamText } from "ai";
import { DEEPSEEK_BASE_URL, DEEPSEEK_MODEL_CANDIDATES } from "@/server/ai/config";
import type { AIProvider, AIProviderInput } from "@/server/ai/providers/types";

/**
 * DeepSeek provider. DeepSeek exposes an OpenAI-compatible Chat Completions API,
 * so we reuse the AI SDK's OpenAI client with a custom baseURL and the `.chat()`
 * model factory. Function-calling (tools) is supported via chat completions.
 *
 * Model-id drift protection: 2026-07 the API retired the "deepseek-chat" alias
 * in favour of deepseek-v4-flash / deepseek-v4-pro. We try the configured id
 * first, then the candidates; a candidate is only skipped when it fails BEFORE
 * producing output, so a mid-answer failure still stops honestly.
 */
export function createDeepSeekProvider(apiKey: string, model: string): AIProvider {
  const provider = createOpenAI({ apiKey, baseURL: DEEPSEEK_BASE_URL });
  const candidates = [...new Set([model, ...DEEPSEEK_MODEL_CANDIDATES])];

  return {
    name: "deepseek",
    supportsTools: true,
    async *stream(input: AIProviderInput) {
      const hasTools = input.tools && Object.keys(input.tools).length > 0;
      let lastError: unknown;

      for (const candidate of candidates) {
        let produced = false;
        try {
          const result = streamText({
            model: provider.chat(candidate),
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
            if (text) {
              produced = true;
              yield text;
            }
          }
          if (produced) return;
          // Completed without any output → try the next candidate id.
        } catch (error) {
          if (produced) throw error; // honest mid-answer stop, no restart
          lastError = error;
          if (input.abortSignal.aborted) throw error;
          // Failed before any output (e.g. retired model id) → next candidate.
        }
      }

      if (lastError) throw lastError;
    }
  };
}
