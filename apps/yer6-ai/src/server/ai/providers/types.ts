import type { Tool } from "ai";
import type { AIChatMessage, AIProviderName } from "@/lib/ai/contracts";

export type AIProviderInput = {
  system: string;
  messages: AIChatMessage[];
  maxOutputTokens: number;
  abortSignal: AbortSignal;
  /** Callable engineering tools (calculators, matcher, decision, RAG search). */
  tools?: Record<string, Tool>;
  /** Maximum tool/reasoning steps for the multi-step orchestration loop. */
  maxSteps?: number;
  /** Notified whenever the model invokes a tool (telemetry / source separation). */
  onToolCall?: (toolName: string) => void;
};

export interface AIProvider {
  readonly name: AIProviderName;
  /** True when the provider can execute the tool-calling orchestration loop. */
  readonly supportsTools?: boolean;
  stream(input: AIProviderInput): AsyncIterable<string>;
}
