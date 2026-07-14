import { describe, expect, it } from "vitest";
import { parseWorkersAIStream } from "@/server/ai/providers/cloudflare-workers-ai";

function streamFrames(frames: string[]) {
  const encoder = new TextEncoder();
  return new ReadableStream<Uint8Array>({
    start(controller) {
      frames.forEach((frame) => controller.enqueue(encoder.encode(frame)));
      controller.close();
    }
  });
}

describe("Workers AI stream parser", () => {
  it("parses Responses API, legacy and chat-completion SSE deltas across chunk boundaries", async () => {
    const stream = streamFrames([
      "event: response.output_text.delta\ndata: {\"type\":\"response.output_text.delta\",\"delta\":\"Selam, \"}\n\n",
      "data: {\"response\":\"Mer",
      "haba\"}\n\n",
      "data: {\"choices\":[{\"delta\":{\"content\":\" dünya\"}}]}\n\n",
      "data: [DONE]\n\n"
    ]);
    const chunks: string[] = [];
    for await (const chunk of parseWorkersAIStream(stream, new AbortController().signal)) chunks.push(chunk);
    expect(chunks).toEqual(["Selam, ", "Merhaba", " dünya"]);
  });

  it("ignores malformed provider frames", async () => {
    const stream = streamFrames(["data: not-json\n\ndata: {\"response\":\"ok\"}\n\n"]);
    const chunks: string[] = [];
    for await (const chunk of parseWorkersAIStream(stream, new AbortController().signal)) chunks.push(chunk);
    expect(chunks).toEqual(["ok"]);
  });
});
