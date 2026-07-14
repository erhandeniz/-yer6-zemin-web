import type { AIChatMessage, AIProviderName } from "@/lib/ai/contracts";

export type AIProviderInput = {
  system: string;
  messages: AIChatMessage[];
  maxOutputTokens: number;
  abortSignal: AbortSignal;
};

export interface AIProvider {
  readonly name: AIProviderName;
  stream(input: AIProviderInput): AsyncIterable<string>;
}
