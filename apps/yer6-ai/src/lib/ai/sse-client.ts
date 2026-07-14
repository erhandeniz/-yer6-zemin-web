import type { AIStreamEvent } from "@/lib/ai/contracts";

function parseEventBlock(block: string): AIStreamEvent | null {
  const data = block
    .split("\n")
    .filter((line) => line.startsWith("data:"))
    .map((line) => line.slice(5).trimStart())
    .join("\n");
  if (!data) return null;

  try {
    const event = JSON.parse(data) as AIStreamEvent;
    return event && typeof event === "object" && "type" in event ? event : null;
  } catch {
    return null;
  }
}

export async function consumeAIEventStream(
  response: Response,
  onEvent: (event: AIStreamEvent) => void,
  abortSignal: AbortSignal
) {
  if (!response.ok) {
    const contentType = response.headers.get("content-type") ?? "";
    const message = contentType.startsWith("text/plain")
      ? (await response.text()).slice(0, 500)
      : "";
    throw new Error(message || "AI_REQUEST_FAILED");
  }
  if (!response.body) throw new Error("AI response stream is unavailable");

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (!abortSignal.aborted) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true }).replace(/\r\n/g, "\n");

      let boundary = buffer.indexOf("\n\n");
      while (boundary >= 0) {
        const block = buffer.slice(0, boundary);
        buffer = buffer.slice(boundary + 2);
        boundary = buffer.indexOf("\n\n");
        const event = parseEventBlock(block);
        if (event) onEvent(event);
      }
    }
  } finally {
    if (abortSignal.aborted) await reader.cancel().catch(() => undefined);
    reader.releaseLock();
  }
}
