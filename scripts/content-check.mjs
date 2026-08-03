/**
 * YER6 — İÇERİK BÜTÜNLÜĞÜ KAPISI
 *
 *   npm run content:test
 *
 * Doğruladıkları:
 *  - Her hizmet ve projenin çevirisi 3 dilde (TR/EN/AR) tam mı? (ham "svc_..."
 *    veya "proj_..." anahtarının sitede görünmesini önler)
 *  - Bilgi Merkezi makalelerinde kırık iç bağlantı (relatedSlugs) var mı?
 *  - Yinelenen slug var mı?
 *  - Müşteriye gösterilmemesi gereken geliştirici dili kalmış mı?
 * Herhangi biri tutmazsa exit 1 (deploy kapısı).
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

const read = (p) => readFileSync(join(process.cwd(), p), "utf8");

let failures = 0;
const ok = (cond, msg) => {
  if (cond) console.log(`  ✓ ${msg}`);
  else {
    console.error(`  ✗ ${msg}`);
    failures += 1;
  }
};

const content = read("src/lib/content.ts");
const i18n = read("src/lib/i18n.ts");
const knowledge = read("src/data/knowledge.ts");
const seoArticles = read("src/data/seo-articles.ts");
const cityContent = read("src/lib/cityContent.ts");

// ——— 1. Çeviri bütünlüğü: her key 3 dilde olmalı ———
console.log("\n— Ceviri butunlugu (TR/EN/AR)");
for (const [label, prefix] of [
  ["hizmet", "svc_"],
  ["proje", "proj_"]
]) {
  const keys = [...content.matchAll(new RegExp(`key: "(${prefix}[^"]+)"`, "g"))].map((m) => m[1]);
  const missing = keys.filter(
    (k) => (i18n.match(new RegExp(`${k}_title\\b`, "g")) || []).length < 3
  );
  ok(
    missing.length === 0,
    missing.length === 0
      ? `tum ${label} kayitlari 3 dilde tanimli (${keys.length} adet)`
      : `${label} cevirisi eksik: ${missing.join(", ")}`
  );
}

// ——— 2. Bilgi Merkezi iç bağlantıları ———
console.log("\n— Bilgi Merkezi ic baglantilari");
const allArticles = knowledge + seoArticles;
const slugMatches = [...allArticles.matchAll(/^\s{4}slug: "([a-z0-9-]+)"/gm)].map((m) => m[1]);
const slugs = new Set(slugMatches);
const refs = [...allArticles.matchAll(/relatedSlugs: \[([^\]]*)\]/g)].flatMap((m) =>
  [...m[1].matchAll(/"([a-z0-9-]+)"/g)].map((x) => x[1])
);
const broken = [...new Set(refs.filter((r) => !slugs.has(r)))];
ok(
  broken.length === 0,
  broken.length === 0
    ? `${refs.length} ic baglantinin tamami gecerli (${slugs.size} makale)`
    : `kirik ic baglanti: ${broken.join(", ")}`
);

const dupes = slugMatches.filter((s, i) => slugMatches.indexOf(s) !== i);
ok(dupes.length === 0, dupes.length === 0 ? "yinelenen makale slug'i yok" : `yinelenen slug: ${dupes.join(", ")}`);

// ——— 3. Şehir sayfaları ———
console.log("\n— Sehir sayfalari");
const citySlugs = [...cityContent.matchAll(/slug: "([a-z-]+-zemin-guclendirme)"/g)].map((m) => m[1]);
const uniqueCities = new Set(citySlugs);
ok(uniqueCities.size >= 81, `${uniqueCities.size} sehir sayfasi mevcut (81 il hedefi)`);
const serviceSection = (cityContent.match(/fore kazık, DSM ve ankraj uygulamaları/g) || []).length;
ok(serviceSection >= 80, `${serviceSection} sehir sayfasinda "il + yontem" hizmet bolumu var`);

// ——— 4. Müşteriye gösterilmemesi gereken geliştirici dili ———
console.log("\n— Musteriye gorunen gelistirici dili");
const FORBIDDEN = ["Headless CMS", "CMS içerik katmanı", "Hazır CMS", "MDX", "boilerplate", "Lorem ipsum", "TODO:", "FIXME"];
for (const phrase of FORBIDDEN) {
  const hit = i18n.includes(phrase) || content.includes(phrase);
  ok(!hit, hit ? `YASAKLI IFADE HALA VAR: "${phrase}"` : `"${phrase}" yok`);
}

// ——— 4b. Teknik terminoloji hatalari ———
// Geoteknikte "kolon" kullanilir; "sutun" yapisal bir elemani (kolon/kiris)
// isaret eder ve zemin kolonu icin yanlistir. "derin sutun kesme" ise
// deep soil mixing'in hatali cevirisidir.
console.log("\n— Teknik terminoloji");
const TERM_ERRORS = [
  ["sütun kesme", "DSM = derin zemin karistirma; 'sutun kesme' hatali ceviri"],
  ["kesme başlığı", "DSM'de 'karistirma basligi' kullanilir"],
  ["zemin sütun", "zemin kolonu olmali"],
  ["Deneme sütun", "deneme kolonu olmali"],
  ["sütun dayanımı", "kolon dayanimi olmali"],
  ["kazık çakma yöntemiyle jet grout", "yontem karisikligi"]
];
const allContent = content + knowledge + seoArticles + cityContent + i18n;
for (const [phrase, why] of TERM_ERRORS) {
  const hit = allContent.includes(phrase);
  ok(!hit, hit ? `TERMINOLOJI HATASI: "${phrase}" — ${why}` : `"${phrase}" yok`);
}

// ——— 4c. SAYFA YAPISI KORUMA ———
// Erhan'in degismez kurali: header, navigasyon, footer ve ana sayfa yerlesimi
// hicbir kosulda degistirilmez (bkz. CLAUDE.md). Bu kapi, yapisal dosyalarin
// bozulmadigini ve zorunlu bolumlerin yerinde oldugunu dogrular.
console.log("\n— Sayfa yapisi korumasi");
const structural = [
  // Navbar metinleri i18n'den gelir; burada YAPI aranir (nav elemani + menu kaynagi)
  ["src/components/Navbar.tsx", ["<nav", "navItems", 't("navAria")']],
  ["src/components/Footer.tsx", ["footer"]],
  ["src/components/SiteShell.tsx", ["Navbar", "Footer", "LanguageProvider"]],
  ["src/app/layout.tsx", ["SiteShell"]]
];
for (const [file, mustHave] of structural) {
  let src = "";
  try {
    src = read(file);
  } catch {
    ok(false, `YAPISAL DOSYA KAYIP: ${file}`);
    continue;
  }
  const missing = mustHave.filter((token) => !src.includes(token));
  ok(
    missing.length === 0,
    missing.length === 0
      ? `${file} butun (${mustHave.join(", ")})`
      : `${file} icinde eksik: ${missing.join(", ")}`
  );
}
// Navigasyondaki ana rotalar duruyor mu?
const navSrc = (() => {
  try {
    return read("src/lib/content.ts");
  } catch {
    return "";
  }
})();
const REQUIRED_ROUTES = ["/about", "/services", "/projects", "/equipment-fleet", "/technology", "/knowledge", "/blog", "/contact"];
const lostRoutes = REQUIRED_ROUTES.filter((r) => !navSrc.includes(`"${r}"`));
ok(
  lostRoutes.length === 0,
  lostRoutes.length === 0 ? `navigasyondaki ${REQUIRED_ROUTES.length} ana rota yerinde` : `NAVIGASYONDAN DUSEN ROTA: ${lostRoutes.join(", ")}`
);

// ——— 4d. ICERIK SILINME KORUMASI ———
// Icerik daima zenginlesir, azalmaz. Bu esikler mevcut duruma gore konmustur;
// bir sayi duserse bir sey SILINMIS demektir ve deploy durur.
console.log("\n— Icerik silinme korumasi (esik kontrolu)");
const counts = [
  ["hizmet", (content.match(/key: "svc_/g) || []).length, 18],
  ["proje", (content.match(/key: "proj_/g) || []).length, 12],
  ["makale", slugMatches.length, 73],
  ["sehir sayfasi", uniqueCities.size, 81],
  ["ilce sayfasi", (read("src/lib/districtContent.ts").match(/slug: "/g) || []).length, 114]
];
for (const [label, current, floor] of counts) {
  ok(current >= floor, current >= floor ? `${label}: ${current} (taban ${floor})` : `${label} AZALMIS: ${current} < ${floor} — bir sey silinmis olabilir`);
}


// ——— 4e. CIFT BASLIK KONTROLU ———
// Ayni sayfada H1 ile H2 birebir ayni metni tasirsa hem SEO hem okunabilirlik
// bozulur. Bilgi Merkezi'nde bu hata yasandi; tekrar etmemesi icin kilitlendi.
console.log("\n— Cift baslik kontrolu");
const knowledgeFilter = (() => { try { return read("src/components/KnowledgeFilter.tsx"); } catch { return ""; } })();
const dupTitle = knowledgeFilter.includes('t("knowledgeTitle")');
ok(!dupTitle, dupTitle
  ? "KnowledgeFilter icinde knowledgeTitle tekrar kullanilmis (PageHero'daki H1 ile cakisir)"
  : "Bilgi Merkezi'nde cift baslik yok");

// ——— 5. Ham ceviri anahtari sizintisi (icerikte duz metin olarak) ———
console.log("\n— Ham anahtar sizintisi");
const rawLeak = /["'>](svc|proj|blog)_[a-z0-9_]+_(title|summary|detail|excerpt)["'<]/.test(content);
ok(!rawLeak, rawLeak ? "icerikte duz metin olarak ham anahtar bulundu" : "icerikte ham anahtar metni yok");

console.log("");
if (failures > 0) {
  console.error(`ICERIK KAPISI BASARISIZ — ${failures} hata`);
  process.exit(1);
}
console.log("ICERIK KAPISI GECTI — tum iddialar dogrulandi");
