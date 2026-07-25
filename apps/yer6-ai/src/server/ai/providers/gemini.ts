import { createOpenAI } from "@ai-sdk/openai";
import { stepCountIs, streamText } from "ai";
import { GEMINI_BASE_URL, GEMINI_MODEL_CANDIDATES } from "@/server/ai/config";
import type { AIProvider, AIProviderInput } from "@/server/ai/providers/types";

/**
 * Google Gemini provider via the OpenAI-compatible endpoint
 * (generativelanguage.googleapis.com/v1beta/openai). Reuses the AI SDK's OpenAI
 * client with a custom baseURL — no extra dependency, same pattern as DeepSeek.
 *
 * Model-id drift protection: Google renames/retires Flash ids over time (2.5 →
 * 3 → 3.5 …). We try the configured id first, then the candidate list; a
 * candidate is only skipped when it fails BEFORE producing any output, so a
 * mid-answer failure still stops honestly (never restarts/duplicates).
 */
export function createGeminiProvider(apiKey: string, model: string): AIProvider {
  const provider = createOpenAI({ apiKey, baseURL: GEMINI_BASE_URL });
  const candidates = [...new Set([model, ...GEMINI_MODEL_CANDIDATES])];

  return {
    name: "gemini",
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
          // Failed before any output (e.g. model Not Found) → next candidate.
        }
      }

      if (lastError) throw lastError;
    }
  };
}
