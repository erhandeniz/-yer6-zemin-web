import type { AIConfig, AIReasoningEffort } from "@/server/ai/config";

/** The primary brain. RAG/calculations/proposals are tools it may call. */
export const PRIMARY_MODEL = "gpt-5.6";

export interface ModelPolicy {
  model: string;
  reasoningEffort: AIReasoningEffort;
  maxOutputTokens: number;
}

/**
 * Resolve the model policy for a turn. GPT-5.6 is the primary brain; OPENAI_MODEL
 * may override to another *verified* model id (config default is already gpt-5.6).
 * Ordinary conversation starts at "low" effort so multi-turn / tool answers stream
 * within the platform window — deterministic tools carry numerical precision.
 */
export function resolveModelPolicy(config: AIConfig): ModelPolicy {
  return {
    model: config.openAIModel || PRIMARY_MODEL,
    reasoningEffort: config.reasoningEffort ?? "low",
    maxOutputTokens: config.maxOutputTokens
  };
}
