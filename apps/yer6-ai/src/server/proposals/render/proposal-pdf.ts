/**
 * YER6 corporate proposal renderer.
 *
 * Produces the approved YER6 layout for both document classes:
 *   - client offer PDF   (audience: "client")   — no internal economics
 *   - internal cost PDF  (audience: "internal") — full cost breakdown
 *
 * Features: repeating table headers across pages, page numbers, header/footer
 * bands, totals block and signature block kept whole (never split across a page
 * break), confidentiality note, and PDF metadata (set by the caller).
 */

import type { TrueTypeFont } from "../pdf/ttf";
import { PdfDocument, PdfFont, PdfPage, type RGB } from "../pdf/pdf-document";
import type {
  Audience,
  ComputedTotals,
  Locale,
  ProposalContent,
  QuantityOrigin
} from "../domain/types";
import { formatMoney, formatNumber } from "../format/money";
import { shapeArabic } from "./arabic-shaper";
import {
  BRAND,
  YER6_IDENTITY,
  confidentialityNote,
  documentTitle,
  labels
} from "./identity";

const A4 = { w: 595.28, h: 841.89 };
const MARGIN = 42;
const HEADER_H = 68;
const FOOTER_TOP = A4.h - 46;
const CONTENT_TOP = HEADER_H + 20;
const CONTENT_BOTTOM = FOOTER_TOP - 10;
const CONTENT_W = A4.w - MARGIN * 2;

export interface RenderInput {
  content: ProposalContent;
  totals: ComputedTotals; // totals for the rendered audience
  audience: Audience;
  fonts: { regular: TrueTypeFont; bold: TrueTypeFont };
  deflate?: (u: Uint8Array) => Uint8Array;
  now?: Date;
}

export interface RenderResult {
  bytes: Uint8Array;
  pageCount: number;
  document: PdfDocument;
  /** Plain text drawn on each page — consumed by the verification module. */
  pageTexts: string[];
}

interface Col {
  label: string;
  width: number;
  align?: "left" | "right" | "center";
}

class Layout {
  readonly pages: PdfPage[] = [];
  private page!: PdfPage;
  private y = CONTENT_TOP;
  readonly reg: PdfFont;
  readonly bold: PdfFont;
  private readonly l: Record<string, string>;
  private readonly rtl: boolean;

  constructor(
    private readonly doc: PdfDocument,
    fonts: { regular: TrueTypeFont; bold: TrueTypeFont },
    private readonly meta: {
      audience: Audience;
      locale: Locale;
      offerNumber: string;
      revisionLabel: string;
      createdAt: string;
    }
  ) {
    this.reg = doc.addFont(fonts.regular);
    this.bold = doc.addFont(fonts.bold);
    this.rtl = meta.locale === "ar";
    if (this.rtl) {
      // Real Arabic contextual shaping + RTL reordering at the glyph layer.
      this.reg.setShaper(shapeArabic);
      this.bold.setShaper(shapeArabic);
    }
    this.l = labels(meta.locale);
    this.newPage();
  }

  private newPage() {
    this.page = this.doc.addPage(A4.w, A4.h);
    this.pages.push(this.page);
    this.y = CONTENT_TOP;
  }

  get cursor() {
    return this.y;
  }

  ensure(height: number) {
    if (this.y + height > CONTENT_BOTTOM) this.newPage();
  }

  gap(h: number) {
    this.y += h;
  }

  private base(size: number) {
    return size * 0.82;
  }

  wrap(text: string, font: PdfFont, size: number, maxW: number): string[] {
    const words = String(text ?? "").replace(/\s+/g, " ").trim().split(" ");
    const lines: string[] = [];
    let line = "";
    const pushWord = (w: string) => {
      const trial = line ? `${line} ${w}` : w;
      if (font.widthOfText(trial, size) <= maxW || line === "") {
        if (font.widthOfText(trial, size) <= maxW) {
          line = trial;
        } else {
          // Single word wider than the box — hard-break by characters.
          let chunk = "";
          for (const ch of w) {
            if (font.widthOfText(chunk + ch, size) > maxW && chunk) {
              lines.push(chunk);
              chunk = ch;
            } else chunk += ch;
          }
          line = chunk;
        }
      } else {
        lines.push(line);
        line = w;
      }
    };
    for (const w of words) if (w) pushWord(w);
    if (line) lines.push(line);
    return lines.length ? lines : [""];
  }

  text(
    x: number,
    text: string,
    opts: { font?: PdfFont; size?: number; color?: RGB; align?: "left" | "right" | "center"; boxW?: number } = {}
  ) {
    const font = opts.font ?? this.reg;
    const size = opts.size ?? 9.5;
    this.page.drawText(x, this.y + this.base(size), text, {
      font,
      size,
      color: opts.color ?? BRAND.text,
      align: opts.align,
      boxWidth: opts.boxW
    });
  }

  paragraph(text: string, opts: { size?: number; color?: RGB; font?: PdfFont; indent?: number } = {}) {
    const size = opts.size ?? 9.5;
    const font = opts.font ?? this.reg;
    const indent = opts.indent ?? 0;
    const lineH = size * 1.38;
    for (const line of this.wrap(text, font, size, CONTENT_W - indent)) {
      this.ensure(lineH);
      if (this.rtl) {
        this.text(MARGIN, line, { font, size, color: opts.color, align: "right", boxW: CONTENT_W - indent });
      } else {
        this.text(MARGIN + indent, line, { font, size, color: opts.color });
      }
      this.y += lineH;
    }
  }

  sectionTitle(title: string) {
    const size = 10.5;
    this.ensure(size * 2.2);
    this.gap(4);
    this.text(MARGIN, title.toLocaleUpperCase("tr-TR"), {
      font: this.bold,
      size,
      color: BRAND.ink,
      align: this.rtl ? "right" : "left",
      boxW: this.rtl ? CONTENT_W : undefined
    });
    this.y += size * 1.2;
    this.page.line(MARGIN, this.y, MARGIN + CONTENT_W, this.y, BRAND.gold, 0.8);
    this.y += 6;
  }

  keyValueGrid(rows: [string, string][], cols = 2) {
    const size = 9.5;
    const colW = CONTENT_W / cols;
    const rowH = size * 1.55;
    for (let i = 0; i < rows.length; i += cols) {
      this.ensure(rowH);
      for (let c = 0; c < cols; c++) {
        const item = rows[i + c];
        if (!item) continue;
        const x = MARGIN + c * colW;
        const [k, v] = item;
        if (this.rtl) {
          // Key on the right, value to its left (right-to-left reading).
          const keyLabel = `${k} :`;
          this.page.drawText(x, this.y + this.base(size), keyLabel, {
            font: this.bold,
            size,
            color: BRAND.muted,
            align: "right",
            boxWidth: colW - 4
          });
          const kw = this.bold.widthOfText(keyLabel, size);
          const val = this.wrap(v, this.reg, size, colW - kw - 10)[0] ?? v;
          this.page.drawText(x, this.y + this.base(size), val, {
            font: this.reg,
            size,
            color: BRAND.text,
            align: "right",
            boxWidth: colW - kw - 10
          });
        } else {
          this.page.drawText(x, this.y + this.base(size), `${k}: `, {
            font: this.bold,
            size,
            color: BRAND.muted
          });
          const kw = this.bold.widthOfText(`${k}: `, size);
          const val = this.wrap(v, this.reg, size, colW - kw - 8)[0] ?? v;
          this.page.drawText(x + kw, this.y + this.base(size), val, { font: this.reg, size, color: BRAND.text });
        }
      }
      this.y += rowH;
    }
  }

  bulletSection(title: string, items: string[]) {
    if (!items || items.length === 0) return;
    this.sectionTitle(title);
    const size = 9.5;
    const lineH = size * 1.4;
    for (const it of items) {
      const lines = this.wrap(it, this.reg, size, CONTENT_W - 14);
      lines.forEach((line, idx) => {
        this.ensure(lineH);
        if (this.rtl) {
          if (idx === 0)
            this.text(MARGIN, "•", { font: this.bold, size, color: BRAND.gold, align: "right", boxW: CONTENT_W });
          this.text(MARGIN, line, { font: this.reg, size, align: "right", boxW: CONTENT_W - 14 });
        } else {
          if (idx === 0) this.text(MARGIN + 2, "•", { font: this.bold, size, color: BRAND.gold });
          this.text(MARGIN + 14, line, { font: this.reg, size });
        }
        this.y += lineH;
      });
    }
    this.gap(2);
  }

  freeSection(title: string, body?: string) {
    if (!body || !body.trim()) return;
    this.sectionTitle(title);
    this.paragraph(body);
    this.gap(2);
  }

  private drawTableHeader(cols: Col[]) {
    const size = 8.8;
    const rowH = 18;
    this.page.fillRect(MARGIN, this.y, CONTENT_W, rowH, BRAND.tableHead);
    this.page.strokeRect(MARGIN, this.y, CONTENT_W, rowH, BRAND.hairline, 0.5);
    let x = MARGIN;
    for (const col of cols) {
      const pad = 4;
      this.page.drawText(x + pad, this.y + 12, col.label, {
        font: this.bold,
        size,
        color: BRAND.ink,
        align: col.align === "right" ? "right" : "left",
        boxWidth: col.align === "right" ? col.width - pad * 2 : undefined
      });
      x += col.width;
    }
    this.y += rowH;
  }

  table(cols: Col[], rows: string[][]) {
    const size = 8.8;
    const cellPad = 4;
    // For Arabic, mirror the column order (logical-first column on the right)
    // and right-align text columns. Numeric cells keep their formatted LTR digit
    // content and right alignment, so numbers/currencies/offer numbers are not
    // reversed — only the column layout is mirrored.
    const eff = (c: Col): Col =>
      this.rtl ? { ...c, align: c.align === "center" ? "center" : "right" } : c;
    const drawCols = (this.rtl ? [...cols].reverse() : cols).map(eff);
    const drawRows = this.rtl ? rows.map((r) => [...r].reverse()) : rows;

    this.ensure(30);
    this.drawTableHeader(drawCols);
    let zebra = false;
    for (const row of drawRows) {
      // Compute row height from the wrapped cells.
      const cellLines: string[][] = drawCols.map((col, ci) =>
        this.wrap(row[ci] ?? "", this.reg, size, col.width - cellPad * 2)
      );
      const maxLines = Math.max(...cellLines.map((c) => c.length), 1);
      const rowH = Math.max(16, maxLines * size * 1.32 + 6);

      // Keep a row intact: if it doesn't fit, start a new page and repeat header.
      if (this.y + rowH > CONTENT_BOTTOM) {
        this.newPage();
        this.drawTableHeader(drawCols);
      }
      if (zebra) this.page.fillRect(MARGIN, this.y, CONTENT_W, rowH, BRAND.zebra);
      this.page.strokeRect(MARGIN, this.y, CONTENT_W, rowH, BRAND.hairline, 0.4);
      let x = MARGIN;
      drawCols.forEach((col, ci) => {
        const lines = cellLines[ci];
        lines.forEach((line, li) => {
          const yLine = this.y + 6 + li * size * 1.32;
          this.page.drawText(
            col.align === "right" ? x + cellPad : x + cellPad,
            yLine + this.base(size),
            line,
            {
              font: this.reg,
              size,
              color: BRAND.text,
              align: col.align === "right" ? "right" : col.align === "center" ? "center" : "left",
              boxWidth: col.align && col.align !== "left" ? col.width - cellPad * 2 : undefined
            }
          );
        });
        x += col.width;
      });
      this.y += rowH;
      zebra = !zebra;
    }
    this.gap(6);
  }

  totalsBlock(lines: { label: string; value: string; strong?: boolean; accent?: boolean }[], written: string) {
    const size = 9.5;
    const rowH = size * 1.7;
    const boxW = 250;
    const x = MARGIN + CONTENT_W - boxW;
    const writtenLines = this.wrap(written, this.reg, 9, CONTENT_W - 8);
    const blockH = lines.length * rowH + 12 + writtenLines.length * 12 + 10;
    this.ensure(blockH); // keep the totals block together
    this.page.line(x, this.y, x + boxW, this.y, BRAND.hairline, 0.6);
    this.y += 4;
    for (const ln of lines) {
      const font = ln.strong ? this.bold : this.reg;
      const color = ln.accent ? BRAND.ink : BRAND.text;
      if (ln.accent) this.page.fillRect(x, this.y - 1, boxW, rowH, BRAND.tableHead);
      // For RTL the label sits on the right, the value on the left.
      this.page.drawText(x + 6, this.y + this.base(size), ln.label, {
        font,
        size,
        color,
        align: this.rtl ? "right" : "left",
        boxWidth: this.rtl ? boxW - 12 : undefined
      });
      this.page.drawText(x + 6, this.y + this.base(size), ln.value, {
        font,
        size,
        color,
        align: this.rtl ? "left" : "right",
        boxWidth: boxW - 12
      });
      this.y += rowH;
    }
    this.gap(4);
    // Written total spans full width.
    const wAlign = this.rtl ? "right" : "left";
    this.text(MARGIN, `${this.l.writtenTotal}:`, {
      font: this.bold,
      size: 9,
      color: BRAND.muted,
      align: wAlign,
      boxW: this.rtl ? CONTENT_W : undefined
    });
    this.y += 12;
    for (const line of writtenLines) {
      this.text(MARGIN, line, { font: this.reg, size: 9, color: BRAND.text, align: wAlign, boxW: this.rtl ? CONTENT_W : undefined });
      this.y += 12;
    }
    this.gap(4);
  }

  signatureBlock(authorizedFor: string, sigLabel: string, stampLabel: string) {
    const blockH = 96;
    this.ensure(blockH + 10);
    this.gap(14);
    const halfW = (CONTENT_W - 20) / 2;
    const boxH = 70;
    // Signature box (left) and stamp box (right) — never split.
    this.page.strokeRect(MARGIN, this.y, halfW, boxH, BRAND.hairline, 0.6);
    this.page.strokeRect(MARGIN + halfW + 20, this.y, halfW, boxH, BRAND.hairline, 0.6);
    this.text(MARGIN + 6, authorizedFor, { font: this.bold, size: 9, color: BRAND.muted });
    this.page.drawText(MARGIN + 6, this.y + boxH - 8, sigLabel, {
      font: this.reg,
      size: 8.5,
      color: BRAND.muted
    });
    this.page.drawText(MARGIN + halfW + 26, this.y + boxH - 8, stampLabel, {
      font: this.reg,
      size: 8.5,
      color: BRAND.muted
    });
    this.y += boxH + 8;
  }

  /** Draw the repeating header + footer bands onto every page. */
  finalize() {
    const total = this.pages.length;
    const title = documentTitle(this.meta.audience, this.meta.locale as Locale);
    const confidential = confidentialityNote(this.meta.audience, this.meta.locale as Locale);
    this.pages.forEach((page, idx) => {
      // Header band.
      page.fillRect(0, 0, A4.w, HEADER_H, BRAND.headerFill);
      page.fillRect(0, HEADER_H, A4.w, 2.5, BRAND.gold);
      page.drawText(MARGIN, 30, YER6_IDENTITY.wordmark, { font: this.bold, size: 22, color: BRAND.gold });
      const wmW = this.bold.widthOfText(YER6_IDENTITY.wordmark, 22);
      page.drawText(MARGIN + wmW + 6, 30, YER6_IDENTITY.wordmarkAccent, {
        font: this.reg,
        size: 11,
        color: BRAND.goldSoft
      });
      page.drawText(MARGIN, 48, YER6_IDENTITY.legalName, {
        font: this.reg,
        size: 7.6,
        color: BRAND.white
      });
      // Contact block (right aligned).
      const contact = [
        YER6_IDENTITY.phone,
        YER6_IDENTITY.email,
        `${YER6_IDENTITY.address.line1}, ${YER6_IDENTITY.address.line2}`
      ];
      contact.forEach((c, i) => {
        page.drawText(A4.w - MARGIN - 240, 22 + i * 11, c, {
          font: this.reg,
          size: 7.4,
          color: BRAND.goldSoft,
          align: "right",
          boxWidth: 240
        });
      });
      // Document title strip (first page only, in body space).
      if (idx === 0) {
        page.drawText(MARGIN, HEADER_H + 16, title, {
          font: this.bold,
          size: 13,
          color: BRAND.ink,
          align: this.rtl ? "right" : "left",
          boxWidth: this.rtl ? CONTENT_W : undefined
        });
        page.drawText(MARGIN, HEADER_H + 16, this.meta.revisionLabel, {
          font: this.bold,
          size: 10,
          color: BRAND.gold,
          align: this.rtl ? "left" : "right",
          boxWidth: CONTENT_W
        });
      }

      // Footer band.
      page.line(MARGIN, FOOTER_TOP, A4.w - MARGIN, FOOTER_TOP, BRAND.hairline, 0.6);
      page.drawText(MARGIN, FOOTER_TOP + 12, YER6_IDENTITY.legalName, {
        font: this.reg,
        size: 6.8,
        color: BRAND.muted
      });
      page.drawText(MARGIN, FOOTER_TOP + 21, confidential, {
        font: this.reg,
        size: 6.8,
        color: this.meta.audience === "internal" ? BRAND.danger : BRAND.muted
      });
      const pageStr = `${this.l.page} ${idx + 1} ${this.l.of} ${total}`;
      page.drawText(A4.w - MARGIN - 200, FOOTER_TOP + 12, pageStr, {
        font: this.reg,
        size: 7.4,
        color: BRAND.text,
        align: "right",
        boxWidth: 200
      });
      page.drawText(A4.w - MARGIN - 200, FOOTER_TOP + 21, `${this.l.createdAt}: ${this.meta.createdAt}`, {
        font: this.reg,
        size: 6.8,
        color: BRAND.muted,
        align: "right",
        boxWidth: 200
      });
    });
    return total;
  }
}

const ORIGIN_KEY: Record<QuantityOrigin, string> = {
  measured: "originMeasured",
  assumed: "originAssumed",
  provisional: "originProvisional",
  estimated: "originEstimated"
};

export function renderProposalPdf(input: RenderInput): RenderResult {
  const { content, totals, audience } = input;
  const locale = content.locale;
  const now = input.now ?? new Date();
  const doc = new PdfDocument({ deflate: input.deflate });
  const l = labels(locale);
  const money = (n: number) => formatMoney(n, content.currency, locale);
  const num = (n: number, dp = 2) => formatNumber(n, { locale, decimals: dp });

  const layout = new Layout(doc, input.fonts, {
    audience,
    locale,
    offerNumber: content.offerNumber,
    revisionLabel: `${content.offerNumber}-R${content.revision}`,
    createdAt: now.toISOString().slice(0, 10)
  });

  // Push body below the first-page title strip.
  layout.gap(30);

  // --- Meta grid --------------------------------------------------------
  const statusLabel = content.status;
  const validity = content.validityDays ? `${content.validityDays} ${l.validityDays}` : "-";
  layout.keyValueGrid([
    [l.offerNo, content.offerNumber],
    [l.revision, `R${content.revision}`],
    [l.date, content.offerDate],
    [l.status, statusLabel],
    [l.customer, content.customer.companyName],
    [l.contact, content.customer.contactName ?? "-"],
    [l.project, content.projectName],
    [l.location, content.projectLocation ?? "-"],
    [l.currency, content.currency],
    [l.validity, validity]
  ]);
  layout.gap(6);
  layout.freeSection(l.subject, content.subject);
  layout.freeSection(l.scope, content.scopeOfWork);
  layout.freeSection(l.method, content.technicalMethod);

  // --- Items table ------------------------------------------------------
  layout.sectionTitle(audience === "internal" ? l.internalCostBreakdown : l.description);
  const cols: Col[] = [
    { label: l.no, width: 24, align: "center" },
    { label: l.description, width: CONTENT_W - 24 - 52 - 60 - 74 - 84, align: "left" },
    { label: l.origin, width: 52, align: "left" },
    { label: l.qty, width: 60, align: "right" },
    { label: `${l.unitPrice}`, width: 74, align: "right" },
    { label: `${l.lineTotal}`, width: 84, align: "right" }
  ];
  const rows: string[][] = totals.lines.map((line, i) => [
    String(i + 1),
    line.optional ? `${line.description}  (${l.optional})` : line.description,
    (l as Record<string, string>)[ORIGIN_KEY[line.quantityOrigin]] ?? line.quantityOrigin,
    `${num(line.quantity)} ${line.unit}`,
    num(line.unitPrice),
    num(line.lineTotal)
  ]);
  layout.table(cols, rows);

  // --- Totals -----------------------------------------------------------
  const totalLines: { label: string; value: string; strong?: boolean; accent?: boolean }[] = [
    { label: l.subtotal, value: money(totals.subtotal) }
  ];
  if (totals.discountAmount > 0)
    totalLines.push({
      label: `${l.discount} (%${num(totals.discountRatePct, 2)})`,
      value: `- ${money(totals.discountAmount)}`
    });
  if (totals.discountAmount > 0) totalLines.push({ label: l.netSubtotal, value: money(totals.netSubtotal) });
  if (content.vatMode === "included")
    totalLines.push({ label: `${l.vatBase}`, value: money(totals.vatBase) });
  totalLines.push({
    label: `${l.vat} (%${num(totals.vatRatePct, 2)})${content.vatMode === "included" ? " *" : ""}`,
    value: money(totals.vatAmount)
  });
  totalLines.push({ label: l.grandTotal, value: money(totals.grandTotal), strong: true, accent: true });
  if (totals.optionalTotal > 0)
    totalLines.push({ label: l.optionalTotal, value: money(totals.optionalTotal) });
  layout.totalsBlock(totalLines, totals.writtenTotal);

  // --- Internal-only cost analysis -------------------------------------
  if (audience === "internal" && content.internalCost) {
    const c = content.internalCost;
    layout.sectionTitle(l.internalCostBreakdown);
    const costRows: [string, string][] = [];
    const add = (label: string, v?: number) => {
      if (v != null) costRows.push([label, money(v)]);
    };
    add("İşçilik / Labor", c.labor);
    add("Makine / Machinery", c.machinery);
    add("Yakıt / Fuel", c.fuel);
    add("Malzeme / Material", c.material);
    add("Nakliye / Transport", c.transport);
    add("Konaklama / Accommodation", c.accommodation);
    add(l.mobilization, c.mobilization);
    add("Demobilizasyon", c.demobilization);
    add("Test", c.testing);
    if (c.wasteFactorPct != null) costRows.push([l.wasteFactor, `%${num(c.wasteFactorPct)}`]);
    if (c.riskAllowancePct != null) costRows.push([l.riskAllowance, `%${num(c.riskAllowancePct)}`]);
    if (c.overheadPct != null) costRows.push([l.overhead, `%${num(c.overheadPct)}`]);
    if (c.targetMarginPct != null) costRows.push([l.targetMargin, `%${num(c.targetMarginPct)}`]);
    layout.keyValueGrid(costRows);
  }

  // --- Commercial / technical sections ---------------------------------
  layout.freeSection(l.mobilization, content.mobilizationInfo);
  if (content.workDuration) layout.freeSection(l.workDuration, content.workDuration);
  if (content.estimatedProductionDuration)
    layout.freeSection(l.productionDuration, content.estimatedProductionDuration);
  layout.freeSection(l.paymentTerms, content.paymentTerms);
  layout.bulletSection(l.inclusions, content.inclusions ?? []);
  layout.bulletSection(l.exclusions, content.exclusions ?? []);
  layout.bulletSection(l.assumptions, content.engineeringAssumptions ?? []);
  layout.bulletSection(l.commercialConditions, content.commercialConditions ?? []);
  layout.bulletSection(l.customerResp, content.customerResponsibilities ?? []);
  layout.bulletSection(l.yer6Resp, content.yer6Responsibilities ?? []);
  if (content.revision > 0 || content.revisionNote)
    layout.freeSection(l.revisionNote, content.revisionNote ?? "-");

  // --- Signature / stamp -----------------------------------------------
  layout.signatureBlock(l.authorizedFor, l.signature, l.stamp);

  const pageCount = layout.finalize();

  // Metadata.
  doc.setMetadata({
    title: `${content.offerNumber}-R${content.revision} — ${documentTitle(audience, locale)}`,
    author: YER6_IDENTITY.legalName,
    subject: content.subject,
    keywords: [content.kind, content.pricing, content.projectName, content.customer.companyName].join(", ")
  });

  return { bytes: doc.save(), pageCount, document: doc, pageTexts: layout.pages.map((p) => p.textContent) };
}
