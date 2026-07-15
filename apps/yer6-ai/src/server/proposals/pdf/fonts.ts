/**
 * Cross-runtime font provider for the proposal PDF engine.
 *
 * Load order:
 *   1. R2 bucket (production Workers) at key `system/fonts/<file>` — keeps the
 *      Worker bundle small and lets fonts be swapped without a redeploy.
 *   2. Local filesystem (Node: tests, `next build` server context, scripts).
 *
 * Fonts are cached per-process after first load.
 */

import { TrueTypeFont } from "./ttf";

export type FontStyle = "regular" | "bold";

const FILES: Record<FontStyle, string> = {
  regular: "YER6Sans-Regular.ttf",
  bold: "YER6Sans-Bold.ttf"
};

const R2_PREFIX = "system/fonts/";

const cache = new Map<FontStyle, TrueTypeFont>();

async function fromR2(file: string): Promise<Uint8Array | null> {
  try {
    const { getRuntimeBindings } = await import("@/server/ai/runtime-bindings");
    const bindings = await getRuntimeBindings();
    const bucket = bindings.RAG_DOCUMENTS;
    if (!bucket) return null;
    const object = await bucket.get(`${R2_PREFIX}${file}`);
    if (!object) return null;
    const blob = await object.blob();
    return new Uint8Array(await blob.arrayBuffer());
  } catch {
    return null;
  }
}

async function fromAssets(file: string): Promise<Uint8Array | null> {
  // On Cloudflare Workers there is no filesystem; the font is served as a
  // static asset from /proposal-fonts/<file> (public/proposal-fonts).
  try {
    const base = process.env.NEXT_PUBLIC_APP_URL || process.env.NEXTAUTH_URL;
    if (!base) return null;
    const res = await fetch(`${base.replace(/\/$/, "")}/proposal-fonts/${file}`);
    if (!res.ok) return null;
    return new Uint8Array(await res.arrayBuffer());
  } catch {
    return null;
  }
}

async function fromFs(file: string): Promise<Uint8Array | null> {
  try {
    const [{ readFile }, path] = await Promise.all([import("node:fs/promises"), import("node:path")]);
    // This module lives at src/server/proposals/pdf; fonts are in ./fonts.
    const here = path.dirname(new URL(import.meta.url).pathname);
    const full = path.join(here, "fonts", file);
    return new Uint8Array(await readFile(full));
  } catch {
    // Fallback for CJS/bundled contexts where import.meta.url is unavailable.
    try {
      const { readFileSync } = await import("node:fs");
      const path = await import("node:path");
      const full = path.join(process.cwd(), "src/server/proposals/pdf/fonts", file);
      return new Uint8Array(readFileSync(full));
    } catch {
      return null;
    }
  }
}

export async function loadFont(style: FontStyle): Promise<TrueTypeFont> {
  const cached = cache.get(style);
  if (cached) return cached;
  const file = FILES[style];
  const bytes = (await fromR2(file)) ?? (await fromFs(file)) ?? (await fromAssets(file));
  if (!bytes) throw new Error(`FONT_UNAVAILABLE:${file}`);
  const ttf = new TrueTypeFont(bytes);
  cache.set(style, ttf);
  return ttf;
}

export async function loadProposalFonts(): Promise<{ regular: TrueTypeFont; bold: TrueTypeFont }> {
  const [regular, bold] = await Promise.all([loadFont("regular"), loadFont("bold")]);
  return { regular, bold };
}
