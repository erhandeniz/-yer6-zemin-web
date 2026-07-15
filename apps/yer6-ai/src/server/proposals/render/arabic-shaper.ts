/**
 * Dependency-free Arabic text shaper for the PDF engine.
 *
 * Real contextual shaping (not right-aligned unshaped code points):
 *   1. Determines each letter's joining context (isolated / initial / medial /
 *      final) from Unicode Arabic joining types.
 *   2. Maps each base letter to its Arabic Presentation Forms-B glyph, which the
 *      embedded DejaVu font renders as the correct connected shape.
 *   3. Applies the required lam-alef ligatures (FEF5–FEFC).
 *   4. Reorders to visual (right-to-left) order with a light bidi pass that
 *      keeps embedded Latin / European-digit runs left-to-right.
 *
 * Combining marks (harakat) are treated as transparent for joining and stay
 * attached to their base letter through reordering.
 *
 * The approved Turkish/English originals are never routed through this — only
 * Arabic-locale output is shaped, and text with no Arabic is returned unchanged.
 */

type Joining = "D" | "R" | "T" | "U"; // dual, right, transparent, non-joining

// Joining type per base code point (0x0621–0x064A + common extras).
const JOINING: Record<number, Joining> = {
  0x0621: "U", // hamza
  0x0622: "R", // alef madda
  0x0623: "R", // alef hamza above
  0x0624: "R", // waw hamza
  0x0625: "R", // alef hamza below
  0x0626: "D", // yeh hamza
  0x0627: "R", // alef
  0x0628: "D", // beh
  0x0629: "R", // teh marbuta
  0x062a: "D", // teh
  0x062b: "D", // theh
  0x062c: "D", // jeem
  0x062d: "D", // hah
  0x062e: "D", // khah
  0x062f: "R", // dal
  0x0630: "R", // thal
  0x0631: "R", // reh
  0x0632: "R", // zain
  0x0633: "D", // seen
  0x0634: "D", // sheen
  0x0635: "D", // sad
  0x0636: "D", // dad
  0x0637: "D", // tah
  0x0638: "D", // zah
  0x0639: "D", // ain
  0x063a: "D", // ghain
  0x0640: "D", // tatweel
  0x0641: "D", // feh
  0x0642: "D", // qaf
  0x0643: "D", // kaf
  0x0644: "D", // lam
  0x0645: "D", // meem
  0x0646: "D", // noon
  0x0647: "D", // heh
  0x0648: "R", // waw
  0x0649: "D", // alef maksura
  0x064a: "D" // yeh
};

// Presentation Forms-B: [isolated, final, initial, medial]. Right-joining
// letters only use isolated/final (initial/medial are 0 → fall back).
const FORMS: Record<number, [number, number, number, number]> = {
  0x0621: [0xfe80, 0, 0, 0],
  0x0622: [0xfe81, 0xfe82, 0, 0],
  0x0623: [0xfe83, 0xfe84, 0, 0],
  0x0624: [0xfe85, 0xfe86, 0, 0],
  0x0625: [0xfe87, 0xfe88, 0, 0],
  0x0626: [0xfe89, 0xfe8a, 0xfe8b, 0xfe8c],
  0x0627: [0xfe8d, 0xfe8e, 0, 0],
  0x0628: [0xfe8f, 0xfe90, 0xfe91, 0xfe92],
  0x0629: [0xfe93, 0xfe94, 0, 0],
  0x062a: [0xfe95, 0xfe96, 0xfe97, 0xfe98],
  0x062b: [0xfe99, 0xfe9a, 0xfe9b, 0xfe9c],
  0x062c: [0xfe9d, 0xfe9e, 0xfe9f, 0xfea0],
  0x062d: [0xfea1, 0xfea2, 0xfea3, 0xfea4],
  0x062e: [0xfea5, 0xfea6, 0xfea7, 0xfea8],
  0x062f: [0xfea9, 0xfeaa, 0, 0],
  0x0630: [0xfeab, 0xfeac, 0, 0],
  0x0631: [0xfead, 0xfeae, 0, 0],
  0x0632: [0xfeaf, 0xfeb0, 0, 0],
  0x0633: [0xfeb1, 0xfeb2, 0xfeb3, 0xfeb4],
  0x0634: [0xfeb5, 0xfeb6, 0xfeb7, 0xfeb8],
  0x0635: [0xfeb9, 0xfeba, 0xfebb, 0xfebc],
  0x0636: [0xfebd, 0xfebe, 0xfebf, 0xfec0],
  0x0637: [0xfec1, 0xfec2, 0xfec3, 0xfec4],
  0x0638: [0xfec5, 0xfec6, 0xfec7, 0xfec8],
  0x0639: [0xfec9, 0xfeca, 0xfecb, 0xfecc],
  0x063a: [0xfecd, 0xfece, 0xfecf, 0xfed0],
  0x0641: [0xfed1, 0xfed2, 0xfed3, 0xfed4],
  0x0642: [0xfed5, 0xfed6, 0xfed7, 0xfed8],
  0x0643: [0xfed9, 0xfeda, 0xfedb, 0xfedc],
  0x0644: [0xfedd, 0xfede, 0xfedf, 0xfee0],
  0x0645: [0xfee1, 0xfee2, 0xfee3, 0xfee4],
  0x0646: [0xfee5, 0xfee6, 0xfee7, 0xfee8],
  0x0647: [0xfee9, 0xfeea, 0xfeeb, 0xfeec],
  0x0648: [0xfeed, 0xfeee, 0, 0],
  0x0649: [0xfeef, 0xfef0, 0, 0],
  0x064a: [0xfef1, 0xfef2, 0xfef3, 0xfef4]
};

// Lam-Alef ligatures keyed by the alef code point: [isolated, final].
const LAM_ALEF: Record<number, [number, number]> = {
  0x0622: [0xfef5, 0xfef6], // lam + alef madda
  0x0623: [0xfef7, 0xfef8], // lam + alef hamza above
  0x0625: [0xfef9, 0xfefa], // lam + alef hamza below
  0x0627: [0xfefb, 0xfefc] // lam + alef
};

function joiningType(cp: number): Joining {
  if (cp >= 0x064b && cp <= 0x0655) return "T"; // harakat / marks
  if (cp === 0x0670) return "T"; // superscript alef
  return JOINING[cp] ?? "U";
}

function isArabicLetter(cp: number): boolean {
  return cp >= 0x0621 && cp <= 0x064a;
}

export function hasArabic(text: string): boolean {
  for (const ch of text) {
    const cp = ch.codePointAt(0)!;
    if ((cp >= 0x0600 && cp <= 0x06ff) || (cp >= 0xfb50 && cp <= 0xfeff)) return true;
  }
  return false;
}

interface Cluster {
  cp: number; // shaped code point of the base
  marks: number[]; // transparent marks attached to the base (kept in order)
  arabic: boolean; // participates in RTL run
}

/** Shape + reorder Arabic text to visual (RTL) order. Non-Arabic passes through. */
export function shapeArabic(text: string): string {
  if (!hasArabic(text)) return text;

  const cps = Array.from(text, (ch) => ch.codePointAt(0)!);

  // Split into base clusters (base + trailing transparent marks).
  const clusters: Cluster[] = [];
  for (let i = 0; i < cps.length; i++) {
    const cp = cps[i];
    if (joiningType(cp) === "T" && clusters.length > 0) {
      clusters[clusters.length - 1].marks.push(cp);
    } else {
      clusters.push({ cp, marks: [], arabic: cp >= 0x0600 && cp <= 0x06ff });
    }
  }

  // Contextual analysis over Arabic base letters (marks are transparent).
  const letterIdx = clusters.map((c) => c.cp);
  const typeOf = (i: number): Joining => joiningType(letterIdx[i]);
  const isLetter = (i: number) => i >= 0 && i < clusters.length && isArabicLetter(letterIdx[i]);

  for (let i = 0; i < clusters.length; i++) {
    const cp = clusters[i].cp;
    if (!isArabicLetter(cp)) continue;

    // Lam followed by Alef → ligature (consume the alef cluster).
    if (cp === 0x0644 && isLetter(i + 1) && LAM_ALEF[letterIdx[i + 1]]) {
      const alef = letterIdx[i + 1];
      const joinPrev = i - 1 >= 0 && isLetter(i - 1) && typeOf(i - 1) === "D";
      const [iso, fin] = LAM_ALEF[alef];
      clusters[i].cp = joinPrev ? fin : iso;
      // Merge marks and drop the alef cluster.
      clusters[i].marks.push(...clusters[i + 1].marks);
      clusters.splice(i + 1, 1);
      letterIdx.splice(i + 1, 1);
      continue;
    }

    const cur = typeOf(i);
    const prevJoins = isLetter(i - 1) && typeOf(i - 1) === "D" && (cur === "D" || cur === "R");
    const nextJoins = cur === "D" && isLetter(i + 1) && (typeOf(i + 1) === "D" || typeOf(i + 1) === "R");

    const forms = FORMS[cp];
    if (!forms) continue;
    const [iso, fin, ini, med] = forms;
    let shaped = iso;
    if (prevJoins && nextJoins) shaped = med || fin || iso;
    else if (prevJoins) shaped = fin || iso;
    else if (nextJoins) shaped = ini || iso;
    clusters[i].cp = shaped || iso;
  }

  // Visual reordering: reverse cluster order (RTL), but keep maximal runs of
  // non-Arabic (Latin / digits / punctuation attached to them) left-to-right.
  const out: Cluster[] = [];
  let i = clusters.length - 1;
  const isRtl = (c: Cluster) =>
    c.arabic || (c.cp >= 0xfb50 && c.cp <= 0xfeff) || (c.cp >= 0x0600 && c.cp <= 0x06ff);
  while (i >= 0) {
    if (isRtl(clusters[i])) {
      out.push(clusters[i]);
      i--;
    } else {
      // Collect a left-to-right run and emit it in original order.
      let j = i;
      while (j >= 0 && !isRtl(clusters[j])) j--;
      for (let k = j + 1; k <= i; k++) out.push(clusters[k]);
      i = j;
    }
  }

  // Flatten to a string (base then its marks).
  let result = "";
  for (const c of out) {
    result += String.fromCodePoint(c.cp);
    for (const m of c.marks) result += String.fromCodePoint(m);
  }
  return result;
}
