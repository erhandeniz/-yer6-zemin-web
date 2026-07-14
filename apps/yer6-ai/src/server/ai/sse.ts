import type { AIStreamEvent } from "@/lib/ai/contracts";

const encoder = new TextEncoder();

export function encodeSSE(event: AIStreamEvent) {
  return encoder.encode(`event: ${event.type}\ndata: ${JSON.stringify(event)}\n\n`);
}

export const sseHeaders = {
  "Cache-Control": "no-cache, no-transform",
  "Content-Type": "text/event-stream; charset=utf-8",
  "X-Accel-Buffering": "no"
} as const;
