import { describe, expect, it } from "vitest";
import { chunkMarkdown } from "@/server/rag/chunking/markdown-chunker";

describe("chunkMarkdown", () => {
  it("preserves headings and bounds large chunks", async () => {
    const text = `# Jet Grout\n\n${"Kolon kalite kontrol verisi. ".repeat(80)}\n\n## Deneyler\n\nSPT ve karot sonuçları.`;
    const chunks = await chunkMarkdown(text, { maxCharacters: 500, overlapCharacters: 60 });

    expect(chunks.length).toBeGreaterThan(2);
    expect(chunks.every((chunk) => chunk.content.length <= 565)).toBe(true);
    expect(chunks.some((chunk) => chunk.section === "Deneyler")).toBe(true);
    expect(chunks.map((chunk) => chunk.ordinal)).toEqual(chunks.map((_, index) => index));
  });

  it("tracks explicit page markers", async () => {
    const chunks = await chunkMarkdown(
      "<!-- page: 4 -->\n\n# Bulgular\n\nYumuşak kil tabakası gözlenmiştir.",
      { maxCharacters: 800, overlapCharacters: 0 }
    );

    expect(chunks).toHaveLength(1);
    expect(chunks[0]).toMatchObject({ page: 4, section: "Bulgular" });
  });
});
