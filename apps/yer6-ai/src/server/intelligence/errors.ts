import type { AIChatLocale } from "@/lib/ai/contracts";
import { aiMessage } from "@/server/ai/messages";

export type IntelligenceErrorKind = "not_configured" | "provider_unavailable" | "aborted";

/** Typed failure for the GPT-5.6 brain. Never carries secrets. */
export class IntelligenceError extends Error {
  constructor(
    readonly kind: IntelligenceErrorKind,
    message?: string
  ) {
    super(message ?? kind);
    this.name = "IntelligenceError";
  }
}

/**
 * Honest, localized user-facing message. The runtime NEVER fabricates an answer,
 * reuses the old knowledge-base warning, or silently switches providers.
 */
export function honestFailureMessage(
  locale: AIChatLocale,
  kind: IntelligenceErrorKind = "provider_unavailable"
): string {
  if (kind === "not_configured") return aiMessage("notConfigured", locale);
  return aiMessage("unavailable", locale);
}
