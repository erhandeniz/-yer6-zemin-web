import type { RAGChunkDraft } from "@/server/rag/contracts";
import { sha256 } from "@/server/rag/hash";

export type ChunkingOptions = {
  maxCharacters: number;
  overlapCharacters: number;
  minimumCharacters?: number;
};

type Segment = {
  text: string;
  section?: string;
  page?: number;
};

function normalizeText(text: string) {
  return text
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function splitLongText(text: string, maxCharacters: number) {
  const parts: string[] = [];
  let remaining = text.trim();

  while (remaining.length > maxCharacters) {
    const window = remaining.slice(0, maxCharacters + 1);
    const sentence = Math.max(window.lastIndexOf(". "), window.lastIndexOf("? "), window.lastIndexOf("! "));
    const whitespace = window.lastIndexOf(" ");
    const splitAt = sentence > maxCharacters * 0.55 ? sentence + 1 : whitespace > 0 ? whitespace : maxCharacters;
    parts.push(remaining.slice(0, splitAt).trim());
    remaining = remaining.slice(splitAt).trim();
  }

  if (remaining) parts.push(remaining);
  return parts;
}

function segmentsFromMarkdown(text: string, maxCharacters: number) {
  const blocks = normalizeText(text).split(/\n\n+/);
  const segments: Segment[] = [];
  let section: string | undefined;
  let page: number | undefined;

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    const pageMatch = trimmed.match(/^<!--\s*page\s*:\s*(\d+)\s*-->$/i);
    if (pageMatch) {
      page = Number.parseInt(pageMatch[1], 10);
      continue;
    }

    const heading = trimmed.match(/^#{1,6}\s+(.+)$/m);
    if (heading) section = heading[1].trim().slice(0, 180);

    for (const part of splitLongText(trimmed, maxCharacters)) {
      segments.push({ text: part, section, page });
    }
  }

  return segments;
}

function overlapSuffix(text: string, target: number) {
  if (target <= 0 || text.length <= target) return target <= 0 ? "" : text;
  const suffix = text.slice(-target);
  const firstSpace = suffix.indexOf(" ");
  return (firstSpace >= 0 ? suffix.slice(firstSpace + 1) : suffix).trim();
}

export async function chunkMarkdown(text: string, options: ChunkingOptions): Promise<RAGChunkDraft[]> {
  const minimumCharacters = options.minimumCharacters ?? 120;
  const segments = segmentsFromMarkdown(text, options.maxCharacters);
  const assembled: Array<Omit<RAGChunkDraft, "ordinal" | "contentHash" | "tokenEstimate">> = [];
  let current = "";
  let currentSection: string | undefined;
  let currentPage: number | undefined;

  const flush = () => {
    const content = current.trim();
    if (!content) return;
    assembled.push({ content, section: currentSection, page: currentPage });
    current = overlapSuffix(content, options.overlapCharacters);
  };

  for (const segment of segments) {
    const next = current ? `${current}\n\n${segment.text}` : segment.text;
    const boundaryChanged = current && (
      (segment.page !== undefined && segment.page !== currentPage) ||
      (segment.section && currentSection && segment.section !== currentSection)
    );

    if (current && (next.length > options.maxCharacters || boundaryChanged)) flush();
    if (!currentSection || segment.section) currentSection = segment.section ?? currentSection;
    if (segment.page !== undefined) currentPage = segment.page;
    current = current ? `${current}\n\n${segment.text}` : segment.text;
  }
  flush();

  const merged = assembled.reduce<typeof assembled>((result, chunk) => {
    const previous = result.at(-1);
    if (
      previous &&
      chunk.content.length < minimumCharacters &&
      previous.section === chunk.section &&
      previous.page === chunk.page
    ) {
      previous.content = `${previous.content}\n\n${chunk.content}`.trim();
      return result;
    }
    result.push(chunk);
    return result;
  }, []);

  return Promise.all(merged.map(async (chunk, ordinal) => ({
    ...chunk,
    ordinal,
    contentHash: await sha256(chunk.content),
    tokenEstimate: Math.max(1, Math.ceil(chunk.content.length / 4))
  })));
}
