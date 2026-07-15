/**
 * Dependency-free PDF writer with embedded TrueType (Type0 / Identity-H) fonts.
 *
 * Produces real PDF 1.7 documents with:
 *   - selectable & searchable Unicode text (via embedded font + ToUnicode CMap)
 *   - correct Turkish glyphs and basic Latin/Arabic coverage
 *   - vector rectangles / lines (tables, rules, boxes)
 *   - multi-page output, page numbering hooks, headers/footers (drawn by caller)
 *   - document information dictionary (metadata)
 *
 * Coordinates in the public API use a TOP-LEFT origin (y grows downward), which
 * matches how the proposal layout code thinks. The writer flips to PDF's
 * bottom-left origin internally.
 */

import { TrueTypeFont } from "./ttf";

const ASCII = (s: string): Uint8Array => {
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i) & 0xff;
  return out;
};

function concat(chunks: Uint8Array[]): Uint8Array {
  let total = 0;
  for (const c of chunks) total += c.length;
  const out = new Uint8Array(total);
  let p = 0;
  for (const c of chunks) {
    out.set(c, p);
    p += c.length;
  }
  return out;
}

export type RGB = [number, number, number]; // 0..255

export interface RenderFont {
  key: string; // e.g. "F1"
  ttf: TrueTypeFont;
  used: Map<number, number>; // gid -> codepoint (for ToUnicode)
  spaceGid: number;
}

export interface TextOptions {
  font: PdfFont;
  size: number;
  color?: RGB;
  align?: "left" | "right" | "center";
  /** width of the layout box, required for right/center alignment */
  boxWidth?: number;
}

export interface PdfMetadata {
  title?: string;
  author?: string;
  subject?: string;
  keywords?: string;
  creator?: string;
  producer?: string;
}

export class PdfFont implements RenderFont {
  readonly used = new Map<number, number>();
  readonly spaceGid: number;
  private shaper: (s: string) => string = (s) => s;
  constructor(
    readonly key: string,
    readonly ttf: TrueTypeFont
  ) {
    this.spaceGid = ttf.glyphId(0x20);
  }

  /**
   * Install a text shaper (e.g. Arabic contextual shaping). Applied to both
   * measurement and encoding so widths and glyphs stay consistent.
   */
  setShaper(shaper: (s: string) => string) {
    this.shaper = shaper;
  }

  private codepoints(text: string): number[] {
    const cps: number[] = [];
    for (const ch of text) cps.push(ch.codePointAt(0)!);
    return cps;
  }

  /** Encode a string to a hex string of 4-digit glyph ids for Identity-H. */
  encodeHex(text: string): string {
    let hex = "";
    for (const cp of this.codepoints(this.shaper(text))) {
      let gid = this.ttf.glyphId(cp);
      let mapped = cp;
      if (gid === 0) {
        // Missing glyph: fall back to a visible space to avoid tofu boxes.
        gid = this.spaceGid || 0;
        mapped = 0x20;
      }
      this.used.set(gid, mapped);
      hex += gid.toString(16).padStart(4, "0");
    }
    return hex;
  }

  /** Width of a string at a given font size, in PDF points. */
  widthOfText(text: string, size: number): number {
    let units = 0;
    for (const cp of this.codepoints(this.shaper(text))) {
      let gid = this.ttf.glyphId(cp);
      if (gid === 0) gid = this.spaceGid || 0;
      units += this.ttf.toPdfUnits(this.ttf.advance(gid));
    }
    return (units / 1000) * size;
  }
}

export class PdfPage {
  readonly ops: Uint8Array[] = [];
  /** Plain-text accumulator of everything drawn — used for content verification. */
  textContent = "";
  constructor(
    readonly width: number,
    readonly height: number
  ) {}

  private push(op: string) {
    this.ops.push(ASCII(op));
  }

  private col(c: RGB): string {
    return `${(c[0] / 255).toFixed(4)} ${(c[1] / 255).toFixed(4)} ${(c[2] / 255).toFixed(4)}`;
  }

  /** Filled rectangle. (x,y) is the TOP-LEFT corner. */
  fillRect(x: number, y: number, w: number, h: number, color: RGB) {
    const yPdf = this.height - y - h;
    this.push(`${this.col(color)} rg\n${f(x)} ${f(yPdf)} ${f(w)} ${f(h)} re f\n`);
  }

  /** Stroked rectangle outline. */
  strokeRect(x: number, y: number, w: number, h: number, color: RGB, lineWidth = 0.6) {
    const yPdf = this.height - y - h;
    this.push(
      `${this.col(color)} RG ${f(lineWidth)} w\n${f(x)} ${f(yPdf)} ${f(w)} ${f(h)} re S\n`
    );
  }

  /** Horizontal or arbitrary line from (x1,y1) to (x2,y2), TOP-LEFT origin. */
  line(x1: number, y1: number, x2: number, y2: number, color: RGB, lineWidth = 0.6) {
    this.push(
      `${this.col(color)} RG ${f(lineWidth)} w\n${f(x1)} ${f(this.height - y1)} m ${f(x2)} ${f(
        this.height - y2
      )} l S\n`
    );
  }

  /**
   * Draw a single line of text. `y` is the baseline distance from the TOP edge.
   * For align right/center pass `boxWidth`; `x` is the left edge of the box.
   */
  drawText(x: number, y: number, text: string, opts: TextOptions) {
    if (text.length === 0) return;
    this.textContent += text + " ";
    const { font, size } = opts;
    const color = opts.color ?? [17, 17, 17];
    let drawX = x;
    if (opts.align === "right" || opts.align === "center") {
      const w = font.widthOfText(text, size);
      const box = opts.boxWidth ?? 0;
      drawX = opts.align === "right" ? x + box - w : x + (box - w) / 2;
    }
    const yPdf = this.height - y;
    const hex = font.encodeHex(text);
    this.push(
      `BT ${this.col(color)} rg /${font.key} ${f(size)} Tf 1 0 0 1 ${f(drawX)} ${f(
        yPdf
      )} Tm <${hex}> Tj ET\n`
    );
  }
}

function f(n: number): string {
  // Compact fixed-point; avoid scientific notation and trailing noise.
  return Number.isInteger(n) ? String(n) : n.toFixed(3).replace(/\.?0+$/, "");
}

export class PdfDocument {
  private readonly pages: PdfPage[] = [];
  private readonly fonts: PdfFont[] = [];
  private metadata: PdfMetadata = {};
  constructor(private readonly options: { deflate?: (input: Uint8Array) => Uint8Array } = {}) {}

  addFont(ttf: TrueTypeFont): PdfFont {
    const key = `F${this.fonts.length + 1}`;
    const font = new PdfFont(key, ttf);
    this.fonts.push(font);
    return font;
  }

  addPage(width = 595.28, height = 841.89): PdfPage {
    // Defaults are A4 in points (210 x 297 mm).
    const page = new PdfPage(width, height);
    this.pages.push(page);
    return page;
  }

  setMetadata(meta: PdfMetadata) {
    this.metadata = { ...this.metadata, ...meta };
  }

  /**
   * PDF text string for the Info dictionary. ASCII uses a literal `(...)`;
   * anything with non-ASCII (Turkish, Arabic, …) is emitted as a UTF-16BE hex
   * string with a BOM so viewers render the metadata correctly.
   */
  private pdfTextString(s: string): string {
    if (/^[\x20-\x7E]*$/.test(s)) {
      const esc = s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
      return `(${esc})`;
    }
    let hex = "FEFF";
    for (const ch of s) {
      const cp = ch.codePointAt(0)!;
      if (cp > 0xffff) {
        const u = cp - 0x10000;
        hex += (0xd800 + (u >> 10)).toString(16).padStart(4, "0");
        hex += (0xdc00 + (u & 0x3ff)).toString(16).padStart(4, "0");
      } else {
        hex += cp.toString(16).padStart(4, "0");
      }
    }
    return `<${hex.toUpperCase()}>`;
  }

  /** Build a Type0 font object cluster; returns [objBytes...] and the font-dict obj number. */
  private buildFontObjects(
    font: PdfFont,
    nextObj: () => number,
    register: (num: number, bytes: Uint8Array) => void
  ): number {
    const ttf = font.ttf;
    const m = ttf.metrics;

    // Font program (FontFile2), optionally FlateDecode-compressed.
    const raw = ttf.data;
    let streamBytes = raw;
    let filter = "";
    if (this.options.deflate) {
      try {
        streamBytes = this.options.deflate(raw);
        filter = " /Filter /FlateDecode";
      } catch {
        streamBytes = raw;
        filter = "";
      }
    }
    const fontFileNum = nextObj();
    register(
      fontFileNum,
      concat([
        ASCII(
          `${fontFileNum} 0 obj\n<< /Length ${streamBytes.length}${filter} /Length1 ${raw.length} >>\nstream\n`
        ),
        streamBytes,
        ASCII(`\nendstream\nendobj\n`)
      ])
    );

    // Widths array (/W) for the glyphs actually used.
    const gids = [...font.used.keys()].sort((a, b) => a - b);
    let wParts = "";
    for (const gid of gids) {
      wParts += `${gid}[${ttf.toPdfUnits(ttf.advance(gid))}]`;
    }

    const descriptorNum = nextObj();
    const [x0, y0, x1, y1] = m.bbox;
    register(
      descriptorNum,
      ASCII(
        `${descriptorNum} 0 obj\n<< /Type /FontDescriptor /FontName /YER6Sans /Flags ${m.flags} ` +
          `/FontBBox [${ttf.toPdfUnits(x0)} ${ttf.toPdfUnits(y0)} ${ttf.toPdfUnits(x1)} ${ttf.toPdfUnits(
            y1
          )}] ` +
          `/ItalicAngle ${Math.round(m.italicAngle)} /Ascent ${ttf.toPdfUnits(m.ascent)} /Descent ${ttf.toPdfUnits(
            m.descent
          )} /CapHeight ${ttf.toPdfUnits(m.capHeight)} /StemV ${m.stemV} /FontFile2 ${fontFileNum} 0 R >>\nendobj\n`
      )
    );

    const cidFontNum = nextObj();
    register(
      cidFontNum,
      ASCII(
        `${cidFontNum} 0 obj\n<< /Type /Font /Subtype /CIDFontType2 /BaseFont /YER6Sans ` +
          `/CIDSystemInfo << /Registry (Adobe) /Ordering (Identity) /Supplement 0 >> ` +
          `/FontDescriptor ${descriptorNum} 0 R /CIDToGIDMap /Identity /DW 1000 /W [${wParts}] >>\nendobj\n`
      )
    );

    // ToUnicode CMap so copy/paste and text search return real characters.
    const toUnicode = this.buildToUnicode(font);
    const toUniNum = nextObj();
    register(
      toUniNum,
      concat([
        ASCII(`${toUniNum} 0 obj\n<< /Length ${toUnicode.length} >>\nstream\n`),
        toUnicode,
        ASCII(`\nendstream\nendobj\n`)
      ])
    );

    const type0Num = nextObj();
    register(
      type0Num,
      ASCII(
        `${type0Num} 0 obj\n<< /Type /Font /Subtype /Type0 /BaseFont /YER6Sans /Encoding /Identity-H ` +
          `/DescendantFonts [${cidFontNum} 0 R] /ToUnicode ${toUniNum} 0 R >>\nendobj\n`
      )
    );
    return type0Num;
  }

  private buildToUnicode(font: PdfFont): Uint8Array {
    const entries = [...font.used.entries()].sort((a, b) => a[0] - b[0]);
    const lines: string[] = [];
    for (const [gid, cp] of entries) {
      const src = gid.toString(16).padStart(4, "0");
      // Encode target codepoint as UTF-16BE hex (handles BMP + astral planes).
      let dst: string;
      if (cp > 0xffff) {
        const u = cp - 0x10000;
        const hi = 0xd800 + (u >> 10);
        const lo = 0xdc00 + (u & 0x3ff);
        dst = hi.toString(16).padStart(4, "0") + lo.toString(16).padStart(4, "0");
      } else {
        dst = cp.toString(16).padStart(4, "0");
      }
      lines.push(`<${src}> <${dst}>`);
    }
    // bfchar blocks are limited to 100 entries each.
    const blocks: string[] = [];
    for (let i = 0; i < lines.length; i += 100) {
      const chunk = lines.slice(i, i + 100);
      blocks.push(`${chunk.length} beginbfchar\n${chunk.join("\n")}\nendbfchar`);
    }
    const cmap =
      `/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n` +
      `/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def\n` +
      `/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n` +
      `1 begincodespacerange\n<0000> <FFFF>\nendcodespacerange\n` +
      `${blocks.join("\n")}\n` +
      `endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend`;
    return ASCII(cmap);
  }

  /** Serialize to a complete PDF byte array. */
  save(): Uint8Array {
    const objects: { num: number; bytes: Uint8Array }[] = [];
    let counter = 0;
    const nextObj = () => ++counter;
    const register = (num: number, bytes: Uint8Array) => {
      objects.push({ num, bytes });
    };

    const catalogNum = nextObj();
    const pagesNum = nextObj();

    // Fonts first so page resources can reference them.
    const fontObjNums = this.fonts.map((font) => this.buildFontObjects(font, nextObj, register));

    const fontResource =
      `<< ` +
      this.fonts.map((fnt, i) => `/${fnt.key} ${fontObjNums[i]} 0 R`).join(" ") +
      ` >>`;

    // Page + content objects.
    const pageNums: number[] = [];
    for (const page of this.pages) {
      const contentNum = nextObj();
      let content = concat(page.ops);
      let filter = "";
      if (this.options.deflate) {
        try {
          content = this.options.deflate(content);
          filter = " /Filter /FlateDecode";
        } catch {
          filter = "";
        }
      }
      register(
        contentNum,
        concat([
          ASCII(`${contentNum} 0 obj\n<< /Length ${content.length}${filter} >>\nstream\n`),
          content,
          ASCII(`\nendstream\nendobj\n`)
        ])
      );
      const pageNum = nextObj();
      pageNums.push(pageNum);
      register(
        pageNum,
        ASCII(
          `${pageNum} 0 obj\n<< /Type /Page /Parent ${pagesNum} 0 R /MediaBox [0 0 ${f(page.width)} ${f(
            page.height
          )}] /Resources << /Font ${fontResource} >> /Contents ${contentNum} 0 R >>\nendobj\n`
        )
      );
    }

    // Pages tree.
    register(
      pagesNum,
      ASCII(
        `${pagesNum} 0 obj\n<< /Type /Pages /Count ${pageNums.length} /Kids [${pageNums
          .map((n) => `${n} 0 R`)
          .join(" ")}] >>\nendobj\n`
      )
    );

    // Info dictionary (metadata).
    const meta = this.metadata;
    const infoNum = nextObj();
    const infoParts: string[] = [];
    const add = (k: string, v?: string) => {
      if (v) infoParts.push(`/${k} ${this.pdfTextString(v)}`);
    };
    add("Title", meta.title);
    add("Author", meta.author);
    add("Subject", meta.subject);
    add("Keywords", meta.keywords);
    add("Creator", meta.creator ?? "YER6 Proposal Engine");
    add("Producer", meta.producer ?? "YER6 Proposal Engine");
    const now = new Date();
    const d = `D:${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}${pad(
      now.getUTCHours()
    )}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`;
    infoParts.push(`/CreationDate (${d})`, `/ModDate (${d})`);
    register(infoNum, ASCII(`${infoNum} 0 obj\n<< ${infoParts.join(" ")} >>\nendobj\n`));

    // Catalog.
    register(
      catalogNum,
      ASCII(`${catalogNum} 0 obj\n<< /Type /Catalog /Pages ${pagesNum} 0 R >>\nendobj\n`)
    );

    // Assemble the file, computing xref offsets.
    objects.sort((a, b) => a.num - b.num);
    const header = ASCII("%PDF-1.7\n%\xE2\xE3\xCF\xD3\n");
    const chunks: Uint8Array[] = [header];
    let offset = header.length;
    const xref: number[] = new Array(counter + 1).fill(0);
    for (const obj of objects) {
      xref[obj.num] = offset;
      chunks.push(obj.bytes);
      offset += obj.bytes.length;
    }

    const xrefStart = offset;
    let xrefStr = `xref\n0 ${counter + 1}\n0000000000 65535 f \n`;
    for (let i = 1; i <= counter; i++) {
      xrefStr += `${String(xref[i]).padStart(10, "0")} 00000 n \n`;
    }
    xrefStr += `trailer\n<< /Size ${counter + 1} /Root ${catalogNum} 0 R /Info ${infoNum} 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;
    chunks.push(ASCII(xrefStr));

    return concat(chunks);
  }
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}
