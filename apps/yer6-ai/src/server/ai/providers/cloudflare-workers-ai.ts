import type { AIProvider, AIProviderInput } from "@/server/ai/providers/types";

export type WorkersAIBinding = {
  run: (
    model: string,
    input: Record<string, unknown>,
    options?: { signal?: AbortSignal; tags?: string[] }
  ) => Promise<ReadableStream<Uint8Array>>;
};

function textDelta(payload: unknown) {
  if (!payload || typeof payload !== "object") return null;
  const data = payload as {
    type?: unknown;
    delta?: unknown;
    response?: unknown;
    choices?: Array<{
      text?: unknown;
      delta?: { content?: unknown };
      message?: { content?: unknown };
    }>;
  };
  if (data.type === "response.output_text.delta" && typeof data.delta === "string") {
    return data.delta;
  }
  if (typeof data.response === "string") return data.response;

  const choice = data.choices?.[0];
  const content = choice?.delta?.content ?? choice?.message?.content ?? choice?.text;
  return typeof content === "string" ? content : null;
}

export async function* parseWorkersAIStream(
  stream: ReadableStream<Uint8Array>,
  abortSignal: AbortSignal
) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let finished = false;

  try {
    while (!abortSignal.aborted) {
      const { done, value } = await reader.read();
      if (done) {
        finished = true;
        break;
      }
      buffer += decoder.decode(value, { stream: true }).replace(/\r\n/g, "\n");

      let boundary = buffer.indexOf("\n\n");
      while (boundary >= 0) {
        const block = buffer.slice(0, boundary);
        buffer = buffer.slice(boundary + 2);
        boundary = buffer.indexOf("\n\n");

        const data = block
          .split("\n")
          .filter((line) => line.startsWith("data:"))
          .map((line) => line.slice(5).trimStart())
          .join("\n");
        if (!data || data === "[DONE]") continue;

        try {
          const delta = textDelta(JSON.parse(data));
          if (delta) yield delta;
        } catch {
          // Ignore malformed provider frames without exposing their contents.
        }
      }
    }
  } finally {
    if (!finished) await reader.cancel().catch(() => undefined);
    reader.releaseLock();
  }
}

export function createCloudflareWorkersAIProvider(binding: WorkersAIBinding, model: string): AIProvider {
  return {
    name: "cloudflare-workers-ai",
    async *stream(input: AIProviderInput) {
      const responseStream = await binding.run(
        model,
        {
          messages: [
            { role: "system", content: input.system },
            ...input.messages
          ],
          max_tokens: input.maxOutputTokens,
          temperature: 0,
          stream: true
        },
        {
          signal: input.abortSignal,
          tags: ["yer6-ai", "chat"]
        }
      );

      yield* parseWorkersAIStream(responseStream, input.abortSignal);
    }
  };
}
