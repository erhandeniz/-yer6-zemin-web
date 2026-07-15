/**
 * Minimal, dependency-free TrueType font parser.
 *
 * Parses only the tables required to embed a TTF into a PDF as a Type0 /
 * CIDFontType2 composite font with Identity-H encoding:
 *   - head : unitsPerEm, font bounding box
 *   - hhea : number of horizontal metrics, ascent/descent
 *   - maxp : glyph count
 *   - hmtx : per-glyph advance widths
 *   - cmap : Unicode codepoint -> glyph id (formats 4 and 12)
 *   - OS/2 : cap height / typo metrics (optional)
 *   - post : italic angle (optional)
 *
 * The full font program is embedded verbatim as FontFile2, and CIDToGIDMap is
 * Identity, so glyph ids referenced from the content stream map directly to the
 * embedded glyphs. This yields real, selectable, searchable Unicode text with
 * correct Turkish glyphs (ş, ğ, İ, ı, ç, ö, ü …) — no rasterisation.
 */

export interface TtfMetrics {
  unitsPerEm: number;
  ascent: number;
  descent: number;
  capHeight: number;
  italicAngle: number;
  numGlyphs: number;
  bbox: [number, number, number, number];
  flags: number;
  stemV: number;
}

export class TrueTypeFont {
  readonly data: Uint8Array;
  private readonly view: DataView;
  private readonly tables = new Map<string, { offset: number; length: number }>();
  private readonly cmap = new Map<number, number>();
  private advanceWidths: number[] = [];
  private numHMetrics = 0;
  metrics!: TtfMetrics;

  constructor(data: Uint8Array) {
    this.data = data;
    this.view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    this.parseTableDirectory();
    this.parseHead();
    this.parseMaxp();
    this.parseHhea();
    this.parseHmtx();
    this.parseCmap();
    this.parseOptional();
  }

  private u16(o: number) {
    return this.view.getUint16(o);
  }
  private i16(o: number) {
    return this.view.getInt16(o);
  }
  private u32(o: number) {
    return this.view.getUint32(o);
  }

  private parseTableDirectory() {
    // Offset 0: sfnt version (4), numTables (2) at offset 4.
    const numTables = this.u16(4);
    let p = 12;
    for (let i = 0; i < numTables; i++) {
      const tag = String.fromCharCode(
        this.data[p],
        this.data[p + 1],
        this.data[p + 2],
        this.data[p + 3]
      );
      const offset = this.u32(p + 8);
      const length = this.u32(p + 12);
      this.tables.set(tag, { offset, length });
      p += 16;
    }
  }

  private table(tag: string) {
    const t = this.tables.get(tag);
    if (!t) throw new Error(`TTF_TABLE_MISSING:${tag}`);
    return t;
  }

  private headMeta = { unitsPerEm: 1000, bbox: [0, 0, 0, 0] as [number, number, number, number] };

  private parseHead() {
    const { offset } = this.table("head");
    const unitsPerEm = this.u16(offset + 18);
    const xMin = this.i16(offset + 36);
    const yMin = this.i16(offset + 38);
    const xMax = this.i16(offset + 40);
    const yMax = this.i16(offset + 42);
    this.headMeta = { unitsPerEm, bbox: [xMin, yMin, xMax, yMax] };
  }

  private numGlyphs = 0;
  private parseMaxp() {
    const { offset } = this.table("maxp");
    this.numGlyphs = this.u16(offset + 4);
  }

  private hheaMeta = { ascent: 0, descent: 0 };
  private parseHhea() {
    const { offset } = this.table("hhea");
    this.hheaMeta = { ascent: this.i16(offset + 4), descent: this.i16(offset + 6) };
    this.numHMetrics = this.u16(offset + 34);
  }

  private parseHmtx() {
    const { offset } = this.table("hmtx");
    const widths: number[] = [];
    let last = 0;
    for (let i = 0; i < this.numHMetrics; i++) {
      last = this.u16(offset + i * 4);
      widths.push(last);
    }
    // Remaining glyphs share the final advance width.
    for (let i = this.numHMetrics; i < this.numGlyphs; i++) widths.push(last);
    this.advanceWidths = widths;
  }

  private parseCmap() {
    const { offset } = this.table("cmap");
    const numSub = this.u16(offset + 2);
    let best = -1;
    let bestScore = -1;
    for (let i = 0; i < numSub; i++) {
      const p = offset + 4 + i * 8;
      const platform = this.u16(p);
      const encoding = this.u16(p + 2);
      const subOffset = this.u32(p + 4);
      // Prefer Unicode full (3,10) > Unicode BMP (3,1) > Unicode (0,*).
      let score = 0;
      if (platform === 3 && encoding === 10) score = 5;
      else if (platform === 3 && encoding === 1) score = 4;
      else if (platform === 0) score = 3;
      else if (platform === 3 && encoding === 0) score = 1;
      if (score > bestScore) {
        bestScore = score;
        best = offset + subOffset;
      }
    }
    if (best < 0) throw new Error("TTF_NO_UNICODE_CMAP");
    const format = this.u16(best);
    if (format === 4) this.parseCmap4(best);
    else if (format === 12) this.parseCmap12(best);
    else if (format === 6) this.parseCmap6(best);
    else throw new Error(`TTF_CMAP_FORMAT_UNSUPPORTED:${format}`);
  }

  private parseCmap4(o: number) {
    const segX2 = this.u16(o + 6);
    const segCount = segX2 / 2;
    const endO = o + 14;
    const startO = endO + segX2 + 2;
    const deltaO = startO + segX2;
    const rangeO = deltaO + segX2;
    for (let s = 0; s < segCount; s++) {
      const end = this.u16(endO + s * 2);
      const start = this.u16(startO + s * 2);
      const delta = this.u16(deltaO + s * 2);
      const rangeOffset = this.u16(rangeO + s * 2);
      for (let c = start; c <= end && c !== 0xffff; c++) {
        let gid: number;
        if (rangeOffset === 0) {
          gid = (c + delta) & 0xffff;
        } else {
          const glyphIndexAddr = rangeO + s * 2 + rangeOffset + (c - start) * 2;
          gid = this.u16(glyphIndexAddr);
          if (gid !== 0) gid = (gid + delta) & 0xffff;
        }
        if (gid !== 0) this.cmap.set(c, gid);
      }
    }
  }

  private parseCmap12(o: number) {
    const nGroups = this.u32(o + 12);
    let p = o + 16;
    for (let g = 0; g < nGroups; g++) {
      const startChar = this.u32(p);
      const endChar = this.u32(p + 4);
      const startGid = this.u32(p + 8);
      for (let c = startChar; c <= endChar; c++) {
        this.cmap.set(c, startGid + (c - startChar));
      }
      p += 12;
    }
  }

  private parseCmap6(o: number) {
    const first = this.u16(o + 6);
    const count = this.u16(o + 8);
    let p = o + 10;
    for (let i = 0; i < count; i++) {
      this.cmap.set(first + i, this.u16(p));
      p += 2;
    }
  }

  private parseOptional() {
    const { unitsPerEm, bbox } = this.headMeta;
    let capHeight = Math.round(this.hheaMeta.ascent * 0.7);
    let italicAngle = 0;
    let flags = 32; // Nonsymbolic
    const os2 = this.tables.get("OS/2");
    if (os2) {
      // sCapHeight lives at offset 88 in version >= 2; guard by table length.
      if (os2.length >= 90) {
        const ch = this.i16(os2.offset + 88);
        if (ch > 0) capHeight = ch;
      }
      const fsSelection = this.u16(os2.offset + 62);
      if (fsSelection & 0x01) italicAngle = -12; // italic bit (approximation only)
    }
    const post = this.tables.get("post");
    if (post) {
      // italicAngle is a Fixed (16.16) at offset 4.
      const raw = this.view.getInt32(post.offset + 4);
      italicAngle = raw / 65536;
      const isFixedPitch = this.u32(post.offset + 12);
      if (isFixedPitch) flags |= 1;
    }
    if (italicAngle !== 0) flags |= 64;
    this.metrics = {
      unitsPerEm,
      ascent: this.hheaMeta.ascent,
      descent: this.hheaMeta.descent,
      capHeight,
      italicAngle,
      numGlyphs: this.numGlyphs,
      bbox,
      flags,
      stemV: 80
    };
  }

  /** Glyph id for a Unicode codepoint (0 = .notdef / missing). */
  glyphId(codepoint: number): number {
    return this.cmap.get(codepoint) ?? 0;
  }

  hasGlyph(codepoint: number): boolean {
    return this.cmap.has(codepoint);
  }

  /** Advance width for a glyph id, in font units. */
  advance(gid: number): number {
    return this.advanceWidths[gid] ?? this.advanceWidths[0] ?? this.headMeta.unitsPerEm;
  }

  /** Scale a font-unit value to the 1000-unit em square PDF expects. */
  toPdfUnits(fontUnits: number): number {
    return Math.round((fontUnits * 1000) / this.headMeta.unitsPerEm);
  }
}
