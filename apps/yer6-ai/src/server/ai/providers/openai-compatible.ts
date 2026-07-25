import { createOpenAI } from "@ai-sdk/openai";
import { stepCountIs, streamText } from "ai";
import type { AIProviderName } from "@/lib/ai/contracts";
import type { AIProvider, AIProviderInput } from "@/server/ai/providers/types";

/**
 * Generic OpenAI-compatible provider factory for the free-tier chain members
 * (Groq, Cerebras, Mistral — all expose OpenAI-style chat completions).
 *
 * Same resilience pattern as the Gemini/DeepSeek providers:
 * - ordered model-candidate list: if an id fails BEFORE producing output
 *   (retired id, 404, model-level 429), the next candidate is tried;
 * - a mid-answer failure is rethrown so the route can stop honestly
 *   (never restarts/duplicates an answer).
 */
export function createOpenAICompatibleProvider(params: {
  name: AIProviderName;
  apiKey: string;
  baseURL: string;
  model: string;
  candidates: readonly string[];
}): AIProvider {
  const provider = createOpenAI({ apiKey: params.apiKey, baseURL: params.baseURL });
  const candidates = [...new Set([params.model, ...params.candidates])];

  return {
    name: params.name,
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
          // Failed before any output → next candidate.
        }
      }

      if (lastError) throw lastError;
    }
  };
}
