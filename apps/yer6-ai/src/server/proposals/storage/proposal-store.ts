/**
 * Private proposal PDF storage (section H).
 *
 * Production: Cloudflare R2 (reuses the existing RAG_DOCUMENTS bucket, or a
 * dedicated PROPOSAL_STORE binding when present) under an org/project-isolated
 * key prefix. Downloads are gated by short-lived HMAC-signed tokens rather than
 * public URLs — the R2 binding has no native presigning, so a signed token +
 * authenticated route is the correct pattern.
 *
 * Node/dev fallback: a local `.proposal-store` directory.
 */

import { getRuntimeBindings } from "@/server/ai/runtime-bindings";
import type { R2BucketBinding } from "@/server/rag/cloudflare-bindings";

const DEV_SECRET = "yer6-dev-proposal-secret-do-not-use-in-prod";

async function bucket(): Promise<R2BucketBinding | null> {
  try {
    const bindings = (await getRuntimeBindings()) as Record<string, unknown>;
    const dedicated = bindings.PROPOSAL_STORE as R2BucketBinding | undefined;
    const shared = bindings.RAG_DOCUMENTS as R2BucketBinding | undefined;
    return dedicated ?? shared ?? null;
  } catch {
    return null;
  }
}

function signingSecret(): string {
  return process.env.NEXTAUTH_SECRET || process.env.PROPOSAL_SIGNING_SECRET || DEV_SECRET;
}

function localDir(): string {
  return `${process.cwd()}/.proposal-store`;
}

export async function putPdf(key: string, bytes: Uint8Array): Promise<void> {
  const b = await bucket();
  if (b) {
    await b.put(key, bytes as unknown as ArrayBuffer, {
      httpMetadata: { contentType: "application/pdf" }
    });
    return;
  }
  // Node/dev fallback.
  const { mkdir, writeFile } = await import("node:fs/promises");
  const path = await import("node:path");
  const full = path.join(localDir(), key);
  await mkdir(path.dirname(full), { recursive: true });
  await writeFile(full, bytes);
}

export async function getPdf(key: string): Promise<Uint8Array | null> {
  const b = await bucket();
  if (b) {
    const obj = await b.get(key);
    if (!obj) return null;
    const blob = await obj.blob();
    return new Uint8Array(await blob.arrayBuffer());
  }
  try {
    const { readFile } = await import("node:fs/promises");
    const path = await import("node:path");
    return new Uint8Array(await readFile(path.join(localDir(), key)));
  } catch {
    return null;
  }
}

export async function deletePdf(key: string): Promise<void> {
  const b = await bucket();
  if (b) {
    await b.delete(key);
    return;
  }
  try {
    const { rm } = await import("node:fs/promises");
    const path = await import("node:path");
    await rm(path.join(localDir(), key), { force: true });
  } catch {
    /* ignore */
  }
}

// ---- Signed download tokens ---------------------------------------------

function b64urlEncode(input: string): string {
  const b64 = btoa(unescape(encodeURIComponent(input)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlDecode(input: string): string {
  const b64 = input.replace(/-/g, "+").replace(/_/g, "/");
  return decodeURIComponent(escape(atob(b64)));
}

async function hmac(message: string): Promise<string> {
  const enc = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    enc.encode(signingSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", cryptoKey, enc.encode(message));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, "0")).join("");
}

export interface SignedTokenClaims {
  key: string;
  organizationId: string;
  pdfId: string;
  audience: string; // "client" | "internal" — internal requires an ADMIN session
  exp: number; // epoch seconds
}

export async function createSignedToken(
  claims: Omit<SignedTokenClaims, "exp">,
  ttlSeconds = 600
): Promise<string> {
  const full: SignedTokenClaims = { ...claims, exp: Math.floor(Date.now() / 1000) + ttlSeconds };
  const payload = b64urlEncode(JSON.stringify(full));
  const sig = await hmac(payload);
  return `${payload}.${sig}`;
}

/** Returns the claims if the token is valid and unexpired, else null. */
export async function verifySignedToken(token: string): Promise<SignedTokenClaims | null> {
  const dot = token.lastIndexOf(".");
  if (dot < 0) return null;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = await hmac(payload);
  if (!timingSafeEqual(sig, expected)) return null;
  try {
    const claims = JSON.parse(b64urlDecode(payload)) as SignedTokenClaims;
    if (typeof claims.exp !== "number" || claims.exp < Math.floor(Date.now() / 1000)) return null;
    return claims;
  } catch {
    return null;
  }
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
