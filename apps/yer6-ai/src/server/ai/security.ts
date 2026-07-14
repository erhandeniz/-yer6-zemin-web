import { z } from "zod";
import type { AIChatLocale } from "@/lib/ai/contracts";

export const MAX_CHAT_BODY_BYTES = 128 * 1024;

function sanitizePlainText(value: string) {
  return value
    .replace(/[\u0000\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim();
}

export const chatPayloadSchema = z.object({
  requestId: z.string().uuid(),
  conversationId: z.string().min(1).max(100),
  projectId: z.string().min(1).max(100).optional(),
  organizationId: z.string().min(1).max(100).optional(),
  locale: z.enum(["tr", "en", "ar"]).default("tr"),
  messages: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string().min(1).max(6_000).transform(sanitizePlainText)
  })).min(1).max(20)
});

export type ChatPayload = z.infer<typeof chatPayloadSchema>;

export const stopPayloadSchema = z.object({
  requestId: z.string().uuid()
});

export function requestLocale(payload: unknown): AIChatLocale {
  if (!payload || typeof payload !== "object" || !("locale" in payload)) return "tr";
  const locale = payload.locale;
  return locale === "en" || locale === "ar" ? locale : "tr";
}

function bodyIsTooLarge(request: Request) {
  const contentLength = Number.parseInt(request.headers.get("content-length") ?? "0", 10);
  return Number.isFinite(contentLength) && contentLength > MAX_CHAT_BODY_BYTES;
}

export async function readBoundedJSON(request: Request): Promise<
  | { ok: true; value: unknown }
  | { ok: false; reason: "invalid" | "too_large" }
> {
  if (bodyIsTooLarge(request)) return { ok: false, reason: "too_large" };
  if (!request.body) return { ok: false, reason: "invalid" };

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let size = 0;
  let body = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_CHAT_BODY_BYTES) {
        await reader.cancel().catch(() => undefined);
        return { ok: false, reason: "too_large" };
      }
      body += decoder.decode(value, { stream: true });
    }
    body += decoder.decode();
  } catch {
    return { ok: false, reason: "invalid" };
  } finally {
    reader.releaseLock();
  }

  try {
    return { ok: true, value: JSON.parse(body) };
  } catch {
    return { ok: false, reason: "invalid" };
  }
}

export async function rateLimitKey(request: Request, userId?: string) {
  const forwarded = request.headers.get("cf-connecting-ip")
    ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? "anonymous";
  const actor = userId ? `user:${userId}` : `ip:${forwarded}`;
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(actor));
  const hash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  return `chat:${hash.slice(0, 32)}`;
}
