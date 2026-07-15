import { deflateSync } from "node:zlib";
import { describe, expect, it } from "vitest";
import { PdfDocument } from "@/server/proposals/pdf/pdf-document";
import { loadFont } from "@/server/proposals/pdf/fonts";

const decoder = new TextDecoder("latin1");

describe("PDF document writer", () => {
  it("produces a valid PDF with embedded Type0 font and Unicode metadata", async () => {
    const reg = await loadFont("regular");
    const doc = new PdfDocument({ deflate: (u) => new Uint8Array(deflateSync(Buffer.from(u))) });
    const F = doc.addFont(reg);
    doc.setMetadata({ title: "YER6-2026-0001-R0 — TİCARİ TEKLİF", subject: "ŞğİıÇ" });
    const p = doc.addPage();
    p.drawText(40, 60, "Güçlendirme şğİıçöü", { font: F, size: 12 });
    p.fillRect(40, 80, 100, 20, [200, 160, 40]);
    const bytes = doc.save();
    const raw = decoder.decode(bytes);

    expect(raw.startsWith("%PDF-1.")).toBe(true);
    expect(raw.trimEnd().endsWith("%%EOF")).toBe(true);
    expect(raw).toContain("/Type0");
    expect(raw).toContain("/ToUnicode");
    expect(raw).toContain("/FontFile2");
    expect(raw).toContain("startxref");
    // Non-ASCII metadata is UTF-16BE (BOM FEFF).
    expect(raw).toContain("<FEFF");
    expect(bytes.length).toBeGreaterThan(1000);
  });

  it("measures text width monotonically", async () => {
    const reg = await loadFont("regular");
    const doc = new PdfDocument();
    const F = doc.addFont(reg);
    expect(F.widthOfText("ab", 10)).toBeGreaterThan(F.widthOfText("a", 10));
  });
});
