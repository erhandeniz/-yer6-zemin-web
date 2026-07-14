import { describe, expect, it } from "vitest";
import type { AIStreamEvent } from "@/lib/ai/contracts";
import { consumeAIEventStream } from "@/lib/ai/sse-client";

function responseFromFrames(frames: string[]) {
  const encoder = new TextEncoder();
  return new Response(new ReadableStream<Uint8Array>({
    start(controller) {
      frames.forEach((frame) => controller.enqueue(encoder.encode(frame)));
      controller.close();
    }
  }), { status: 200, headers: { "Content-Type": "text/event-stream" } });
}

describe("client SSE consumer", () => {
  it("delivers streaming events in order", async () => {
    const response = responseFromFrames([
      "event: meta\ndata: {\"type\":\"meta\",\"requestId\":\"r1\",\"provider\":\"cloudflare-workers-ai\"}\n\n",
      "event: delta\ndata: {\"type\":\"delta\",\"text\":\"Merhaba\"}\n\n",
      "event: done\ndata: {\"type\":\"done\",\"stopped\":false}\n\n"
    ]);
    const events: AIStreamEvent[] = [];
    await consumeAIEventStream(response, (event) => events.push(event), new AbortController().signal);
    expect(events.map((event) => event.type)).toEqual(["meta", "delta", "done"]);
  });

  it("surfaces bounded server errors", async () => {
    const response = new Response("Yapay zekâ hizmeti henüz yapılandırılmadı.", { status: 503 });
    await expect(consumeAIEventStream(response, () => undefined, new AbortController().signal))
      .rejects.toThrow("Yapay zekâ hizmeti henüz yapılandırılmadı.");
  });
});
