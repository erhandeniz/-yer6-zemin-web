/**
 * YER6 public website ingestion.
 *
 * Fetches a public YER6 page, converts it to markdown, stores it in the RAG R2
 * bucket and ingests it (chunk → embed → Vectorize) as permanent COMPANY
 * knowledge so `search_company_knowledge` can cite it. Preserves page URL,
 * title, language, section and last-updated metadata. Refuses private admin /
 * authentication routes and non-YER6 hosts. Checksum-diffed: an unchanged page
 * is skipped, a changed page is re-ingested in place.
 */

import type { createRAGAdminRuntime } from "@/server/rag/runtime";
import type { KnowledgeCategory } from "@/lib/rag/catalog";
import { sha256 } from "@/server/rag/hash";

type AdminRuntime = Awaited<ReturnType<typeof createRAGAdminRuntime>>;

const ALLOWED_HOST_SUFFIX = "yer6zemin.com.tr";
const BLOCKED_PATH_PREFIXES = ["/api", "/admin", "/login", "/auth", "/demo", "/settings"];

export type WebsiteImportInput = {
  url: string;
  category?: KnowledgeCategory;
  language?: string;
  section?: string;
};

export type WebsiteImportResult = {
  url: string;
  status: "imported" | "updated" | "skipped-unchanged" | "failed";
  documentId?: string;
  chunks?: number;
  reason?: string;
};

export function isImportableYer6Url(raw: string): { ok: boolean; url?: URL; reason?: string } {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return { ok: false, reason: "INVALID_URL" };
  }
  if (url.protocol !== "https:") return { ok: false, reason: "NOT_HTTPS" };
  const host = url.hostname.toLowerCase();
  if (host !== ALLOWED_HOST_SUFFIX && !host.endsWith(`.${ALLOWED_HOST_SUFFIX}`)) {
    return { ok: false, reason: "HOST_NOT_ALLOWED" };
  }
  const path = url.pathname.toLowerCase();
  if (BLOCKED_PATH_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`))) {
    return { ok: false, reason: "PRIVATE_ROUTE" };
  }
  return { ok: true, url };
}

function extractTitle(html: string, url: URL): string {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  const clean = title?.replace(/\s+/g, " ").trim();
  if (clean) return clean.slice(0, 180);
  const slug = url.pathname.replace(/\/+$/g, "").split("/").pop() || "yer6";
  return slug.replace(/-/g, " ").slice(0, 180);
}

function detectLanguage(html: string, fallback: string): string {
  return html.match(/<html[^>]*\blang=["']([a-zA-Z-]+)["']/i)?.[1]?.slice(0, 8).toLowerCase() || fallback;
}

function storageKeyForUrl(url: URL): string {
  const slug = `${url.pathname}${url.search}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "home";
  return `website/${slug.slice(0, 120)}.md`;
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

async function htmlToMarkdown(runtime: AdminRuntime, title: string, html: string): Promise<string> {
  if (runtime.ai) {
    try {
      const result = await runtime.ai.toMarkdown({
        name: "page.html",
        blob: new Blob([html], { type: "text/html" })
      });
      if (result.format === "markdown" && result.data.trim()) return result.data.trim();
    } catch {
      // fall through to the plain-text strip
    }
  }
  const text = stripHtml(html);
  return `# ${title}\n\n${text}`;
}

export async function importYer6Url(
  runtime: AdminRuntime,
  input: WebsiteImportInput
): Promise<WebsiteImportResult> {
  const check = isImportableYer6Url(input.url);
  if (!check.ok || !check.url) return { url: input.url, status: "failed", reason: check.reason };
  if (!runtime.repository || !runtime.ingestion || !runtime.bindings.RAG_DOCUMENTS) {
    return { url: input.url, status: "failed", reason: "RAG_INGESTION_UNAVAILABLE" };
  }
  const url = check.url;

  let html: string;
  try {
    const response = await fetch(url.toString(), {
      headers: { "User-Agent": "YER6-AI-KnowledgeBot/1.0", Accept: "text/html" },
      signal: AbortSignal.timeout(20_000)
    });
    if (!response.ok) return { url: input.url, status: "failed", reason: `HTTP_${response.status}` };
    html = await response.text();
  } catch {
    return { url: input.url, status: "failed", reason: "FETCH_FAILED" };
  }

  const title = extractTitle(html, url);
  const language = input.language || detectLanguage(html, "tr");
  const markdown = await htmlToMarkdown(runtime, title, html);
  if (markdown.length < 40) return { url: input.url, status: "failed", reason: "EMPTY_CONTENT" };

  const bytes = new TextEncoder().encode(markdown);
  const checksum = await sha256(markdown);
  const storageKey = storageKeyForUrl(url);
  const { prisma } = await import("@/lib/prisma");

  const existing = await prisma.knowledgeDocument.findFirst({ where: { storageKey } });
  if (existing && existing.checksum === checksum && existing.status === "READY") {
    return { url: input.url, status: "skipped-unchanged", documentId: existing.id };
  }

  await runtime.bindings.RAG_DOCUMENTS.put(storageKey, bytes, {
    httpMetadata: { contentType: "text/markdown" }
  });

  const metadata = {
    sourceType: "website",
    sourceUrl: url.toString(),
    title,
    language,
    section: input.section ?? url.pathname.replace(/\/+$/g, "").split("/")[1] ?? "genel",
    updatedAt: new Date().toISOString()
  };

  let documentId: string;
  let updated = false;
  if (existing) {
    updated = true;
    await prisma.knowledgeDocument.update({
      where: { id: existing.id },
      data: { name: title, size: bytes.byteLength, checksum, sourceUrl: url.toString(), metadata }
    });
    documentId = existing.id;
  } else {
    const created = await runtime.repository.createDocument({
      name: title,
      extension: "md",
      mimeType: "text/markdown",
      size: bytes.byteLength,
      category: input.category ?? "YER6 Projeleri",
      scope: "company",
      organizationId: process.env.YER6_ORGANIZATION_ID?.trim() || "yer6",
      storageProvider: "r2",
      storageKey,
      sourceUrl: url.toString(),
      contentIndexingAllowed: true,
      metadata
    });
    documentId = created.id;
  }

  try {
    const result = await runtime.ingestion.ingest(documentId);
    return {
      url: input.url,
      status: updated ? "updated" : "imported",
      documentId,
      chunks: result.chunks
    };
  } catch (error) {
    return {
      url: input.url,
      status: "failed",
      documentId,
      reason: error instanceof Error ? error.message : "INGESTION_FAILED"
    };
  }
}
