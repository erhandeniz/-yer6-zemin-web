/**
 * Number-to-words for the "written total" (yazı ile) required on official
 * offers. Supports Turkish (default) and English.
 */

import type { Currency, Locale } from "../domain/types";
import { roundHalfUp } from "./money";

// ---- Turkish -------------------------------------------------------------

const TR_ONES = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
const TR_TENS = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
const TR_SCALES = ["", "bin", "milyon", "milyar", "trilyon", "katrilyon"];

function trThreeDigits(n: number): string {
  // n in 0..999
  const h = Math.floor(n / 100);
  const t = Math.floor((n % 100) / 10);
  const o = n % 10;
  let parts = "";
  if (h > 0) parts += (h === 1 ? "" : TR_ONES[h]) + "yüz";
  if (t > 0) parts += TR_TENS[t];
  if (o > 0) parts += TR_ONES[o];
  return parts;
}

export function turkishIntegerToWords(value: number): string {
  let n = Math.floor(Math.abs(value));
  if (n === 0) return "sıfır";
  const groups: number[] = [];
  while (n > 0) {
    groups.push(n % 1000);
    n = Math.floor(n / 1000);
  }
  let words = "";
  for (let i = groups.length - 1; i >= 0; i--) {
    const g = groups[i];
    if (g === 0) continue;
    // "bir bin" collapses to "bin".
    if (i === 1 && g === 1) {
      words += "bin";
    } else {
      words += trThreeDigits(g) + TR_SCALES[i];
    }
  }
  return words;
}

// ---- English -------------------------------------------------------------

const EN_ONES = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
  "seventeen", "eighteen", "nineteen"
];
const EN_TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const EN_SCALES = ["", "thousand", "million", "billion", "trillion"];

function enThreeDigits(n: number): string {
  const parts: string[] = [];
  const h = Math.floor(n / 100);
  const rest = n % 100;
  if (h > 0) parts.push(`${EN_ONES[h]} hundred`);
  if (rest > 0) {
    if (rest < 20) parts.push(EN_ONES[rest]);
    else {
      const t = Math.floor(rest / 10);
      const o = rest % 10;
      parts.push(o > 0 ? `${EN_TENS[t]}-${EN_ONES[o]}` : EN_TENS[t]);
    }
  }
  return parts.join(" ");
}

export function englishIntegerToWords(value: number): string {
  let n = Math.floor(Math.abs(value));
  if (n === 0) return "zero";
  const groups: number[] = [];
  while (n > 0) {
    groups.push(n % 1000);
    n = Math.floor(n / 1000);
  }
  const parts: string[] = [];
  for (let i = groups.length - 1; i >= 0; i--) {
    if (groups[i] === 0) continue;
    parts.push(`${enThreeDigits(groups[i])}${EN_SCALES[i] ? " " + EN_SCALES[i] : ""}`);
  }
  return parts.join(" ");
}

// ---- Written total -------------------------------------------------------

const MINOR_LABEL: Record<Currency, { tr: string; en: string; major: { tr: string; en: string } }> = {
  TRY: { tr: "Kuruş", en: "Kurus", major: { tr: "Türk Lirası", en: "Turkish Lira" } },
  USD: { tr: "Sent", en: "Cents", major: { tr: "ABD Doları", en: "US Dollars" } },
  EUR: { tr: "Sent", en: "Cents", major: { tr: "Euro", en: "Euros" } }
};

/**
 * Produce the legally-styled written amount, e.g.
 *   tr: "YALNIZ BirMilyonDörtYüzYetmişBeşBin Türk Lirası SıfırKuruş"
 *   en: "one million four hundred seventy-five thousand US Dollars and 00/100"
 */
export function writtenTotal(amount: number, currency: Currency, locale: Locale = "tr"): string {
  const rounded = roundHalfUp(amount, 2);
  const major = Math.floor(rounded);
  const minor = Math.round((rounded - major) * 100);
  const labels = MINOR_LABEL[currency];
  if (locale === "en" || locale === "ar") {
    // Arabic written-amount generation is out of scope; the internationally
    // unambiguous English wording is used for the AR variant, while the numeric
    // grand total (shown prominently) remains the authoritative figure.
    const minorStr = String(minor).padStart(2, "0");
    return `${englishIntegerToWords(major)} ${labels.major.en} and ${minorStr}/100`.replace(
      /\s+/g,
      " "
    );
  }
  // Turkish.
  const majorWords = capitalizeFirst(turkishIntegerToWords(major));
  const minorWords =
    minor > 0 ? capitalizeFirst(turkishIntegerToWords(minor)) + labels.tr : "Sıfır" + labels.tr;
  return `YALNIZ ${majorWords} ${labels.major.tr} ${minorWords}`;
}

function capitalizeFirst(s: string): string {
  return s.length === 0 ? s : s[0].toLocaleUpperCase("tr-TR") + s.slice(1);
}
