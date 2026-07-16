/**
 * Internal-only turn telemetry. NEVER exposed in the public chat UI and never
 * contains secrets — used for diagnostics/logging.
 */
export interface TurnTelemetry {
  model: string;
  status: "ok" | "provider_unavailable" | "not_configured" | "aborted";
  latencyMs: number;
  responseId?: string;
  toolsInvoked: string[];
  tokenUsage?: { input?: number; output?: number };
}

export interface TelemetryHandle {
  noteTool(name: string): void;
  finish(status: TurnTelemetry["status"], extra?: Partial<TurnTelemetry>): TurnTelemetry;
}

export function startTelemetry(model: string): TelemetryHandle {
  const started = Date.now();
  const toolsInvoked: string[] = [];
  return {
    noteTool(name: string) {
      if (name && !toolsInvoked.includes(name)) toolsInvoked.push(name);
    },
    finish(status, extra = {}) {
      return { model, status, latencyMs: Date.now() - started, toolsInvoked, ...extra };
    }
  };
}
