import { createOpenAI } from "@ai-sdk/openai";
import { stepCountIs, streamText } from "ai";
import type { AIReasoningEffort } from "@/server/ai/config";
import type { AIProvider, AIProviderInput } from "@/server/ai/providers/types";

export function createOpenAIResponsesProvider(
  apiKey: string,
  model: string,
  reasoningEffort: AIReasoningEffort = "low"
): AIProvider {
  const provider = createOpenAI({ apiKey });

  return {
    name: "openai",
    supportsTools: true,
    async *stream(input: AIProviderInput) {
      const hasTools = input.tools && Object.keys(input.tools).length > 0;
      const result = streamText({
        model: provider.responses(model),
        system: input.system,
        messages: input.messages,
        maxOutputTokens: input.maxOutputTokens,
        temperature: 0.3,
        abortSignal: input.abortSignal,
        // Reasoning-model effort. "low" keeps multi-tool round-trips fast enough
        // to finish the final answer within the streaming window. Ignored by
        // non-reasoning models.
        providerOptions: { openai: { reasoningEffort } },
        ...(hasTools
          ? {
              tools: input.tools,
              // Let the model call tools then continue reasoning up to the budget.
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
