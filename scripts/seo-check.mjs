/**
 * YER6 SEO gate — statik export (out/) HTML'i üzerinde çalışır.
 *   npm run build && npm run seo:test
 * Doğruladıkları: title, meta description, self-canonical, tr-TR hreflang,
 * Open Graph, Twitter, CollectionPage şeması ve eski İngilizce ifadenin yokluğu.
 * Herhangi bir iddia tutmazsa exit 1 (deploy kapısı).
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

const OUT = join(process.cwd(), "out");
const SITE = "https://www.yer6zemin.com.tr";
const FORBIDDEN = ["Knowledge center for geotechnical engineering"];

const EXPECT = [
  {
    file: "index.html",
    url: `${SITE}/`,
    title: "YER6 Zemin Güçlendirme | Jet Grout, DSM ve Fore Kazık",
    descriptionIncludes: "zemin güçlendirme",
    xDefault: true,
    collection: false
  },
  {
    file: "blog/index.html",
    url: `${SITE}/blog/`,
    title: "Zemin Güçlendirme Blogu | YER6",
    descriptionIncludes:
      "Jet grout, DSM, fore kazık, zemin iyileştirme, iksa ve kalite kontrol uygulamalarına yönelik güncel teknik yazılar ve saha rehberleri.",
    xDefault: false,
    collection: true
  },
  {
    file: "knowledge/index.html",
    url: `${SITE}/knowledge/`,
    title: "Geoteknik Bilgi Merkezi | Jet Grout, DSM ve Fore Kazık | YER6",
    descriptionIncludes:
      "doğrulanmış teknik rehberler, uygulama esasları ve kalite kontrol içerikleri",
    xDefault: false,
    collection: true
  }
];

let failures = 0;
const fail = (page, message) => {
  failures += 1;
  console.error(`  ✗ [${page}] ${message}`);
};
const pass = (page, message) => console.log(`  ✓ [${page}] ${message}`);

const attr = (html, regex) => {
  const match = html.match(regex);
  return match ? match[1] : null;
};

for (const spec of EXPECT) {
  console.log(`\n— ${spec.url}`);
  let html;
  try {
    html = readFileSync(join(OUT, spec.file), "utf8");
  } catch {
    fail(spec.file, `out/${spec.file} bulunamadı — önce npm run build çalıştırın`);
    continue;
  }

  // Title (tam eşleşme)
  const title = attr(html, /<title>([^<]*)<\/title>/i);
  title === spec.title
    ? pass(spec.file, `title: "${title}"`)
    : fail(spec.file, `title beklenen "${spec.title}", bulunan "${title}"`);

  // Meta description
  const description =
    attr(html, /<meta name="description" content="([^"]*)"/i) ??
    attr(html, /<meta content="([^"]*)" name="description"/i);
  description && description.toLowerCase().includes(spec.descriptionIncludes.toLowerCase())
    ? pass(spec.file, "meta description doğru")
    : fail(spec.file, `description eşleşmedi: "${(description ?? "").slice(0, 80)}…"`);

  // Self-canonical
  const canonical =
    attr(html, /<link rel="canonical" href="([^"]*)"/i) ??
    attr(html, /<link href="([^"]*)" rel="canonical"/i);
  canonical === spec.url
    ? pass(spec.file, `canonical: ${canonical}`)
    : fail(spec.file, `canonical beklenen ${spec.url}, bulunan ${canonical}`);

  // hreflang tr-TR (öz-referans)
  const hasTr =
    html.includes(`hreflang="tr-TR" href="${spec.url}"`) ||
    html.includes(`href="${spec.url}" hreflang="tr-TR"`) ||
    (html.includes('hreflang="tr-TR"') && html.includes(spec.url));
  hasTr ? pass(spec.file, "hreflang tr-TR mevcut") : fail(spec.file, "hreflang tr-TR eksik");

  // x-default yalnızca uygun yerde (ana sayfa)
  const hasXDefault = html.includes('hreflang="x-default"');
  hasXDefault === spec.xDefault
    ? pass(spec.file, `x-default ${spec.xDefault ? "mevcut (doğru)" : "yok (doğru)"}`)
    : fail(spec.file, `x-default ${spec.xDefault ? "eksik" : "olmamalıydı"}`);

  // Open Graph + Twitter eşleşmesi
  const og = attr(html, /<meta property="og:title" content="([^"]*)"/i);
  og === spec.title
    ? pass(spec.file, "og:title eşleşiyor")
    : fail(spec.file, `og:title "${og}" ≠ title`);
  const ogUrl = attr(html, /<meta property="og:url" content="([^"]*)"/i);
  ogUrl === spec.url
    ? pass(spec.file, "og:url doğru")
    : fail(spec.file, `og:url beklenen ${spec.url}, bulunan ${ogUrl}`);
  const tw = attr(html, /<meta name="twitter:title" content="([^"]*)"/i);
  tw === spec.title
    ? pass(spec.file, "twitter:title eşleşiyor")
    : fail(spec.file, `twitter:title "${tw}" ≠ title`);

  // CollectionPage şeması (blog + knowledge)
  if (spec.collection) {
    html.includes('"@type":"CollectionPage"') && html.includes(`"url":"${spec.url}"`)
      ? pass(spec.file, "CollectionPage şeması mevcut")
      : fail(spec.file, "CollectionPage şeması eksik/yanlış");
  }

  // Yasaklı eski ifade
  for (const phrase of FORBIDDEN) {
    html.includes(phrase)
      ? fail(spec.file, `yasaklı ifade hâlâ HTML'de: "${phrase}"`)
      : pass(spec.file, "eski İngilizce ifade yok");
  }
}

console.log("");
if (failures > 0) {
  console.error(`SEO GATE FAILED — ${failures} hata`);
  process.exit(1);
}
console.log("SEO GATE PASSED — tüm iddialar doğrulandı");
