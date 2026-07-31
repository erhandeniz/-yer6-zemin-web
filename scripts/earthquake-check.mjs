/**
 * YER6 — DEPREM VERİ MODELİ KALİTE KAPISI
 *
 *   npm run earthquake:test
 *
 * Doğruladıkları: aynı depremin kaynaklar arasında TEK olaya birleşmesi,
 * kaynak farklarının gizlenmemesi, AFAD önceliği, idempotency, sahte olay
 * üretilmemesi ve kaynak registry bütünlüğü.
 * Herhangi bir iddia tutmazsa exit 1 (deploy kapısı).
 *
 * Not: Bu proje bir test çalıştırıcısı (vitest/jest) barındırmaz; kapılar
 * scripts/*.mjs içinde Node ile çalışır (bkz. scripts/seo-check.mjs).
 */
import { execFileSync } from "node:child_process";

const RUNNER = `
import {
  mergeObservations, isSameEvent, isInTurkeyBox, sortForDisplay, haversineKm
} from "./src/lib/earthquake/model.ts";
import { EARTHQUAKE_SOURCES, enabledSources } from "./src/lib/earthquake/sources.ts";

let failures = 0;
const ok = (cond, msg) => {
  if (cond) console.log("  \\u2713 " + msg);
  else { console.error("  \\u2717 " + msg); failures += 1; }
};

const base = (over = {}) => ({
  sourceId: "afad", externalId: "1",
  originTime: "2026-07-28T10:00:00.000Z",
  latitude: 38.0, longitude: 37.0, depthKm: 10,
  magnitude: 4.5, magnitudeType: "ML", place: "Test",
  sourceUrl: "https://deprem.afad.gov.tr/",
  retrievedAt: "2026-07-28T10:05:00.000Z", ...over
});

console.log("\\n\\u2014 Deprem olay birlestirme");
const merged = mergeObservations([
  base({ sourceId: "afad", externalId: "A1", magnitude: 4.5, depthKm: 10 }),
  base({ sourceId: "usgs", externalId: "U1", magnitude: 4.7, depthKm: 14, latitude: 38.05, originTime: "2026-07-28T10:00:20.000Z" }),
  base({ sourceId: "emsc", externalId: "E1", magnitude: 4.6, depthKm: 12, longitude: 37.06, originTime: "2026-07-28T10:00:10.000Z" })
]);
ok(merged.length === 1, "ayni deprem 3 kurumdan TEK olaya birlesti (kayit cogaltilmadi)");
ok(merged[0].observations.length === 3, "ucu de kaynak olarak korundu");
ok(merged[0].verification === "corroborated", "coklu kaynak dogrulamasi isaretlendi");
ok(merged[0].primary.sourceId === "afad", "AFAD birincil kaynak olarak secildi");
ok(merged[0].discrepancy.magnitudeMin === 4.5 && merged[0].discrepancy.magnitudeMax === 4.7, "buyukluk farki gizlenmedi");
ok(merged[0].discrepancy.depthMinKm === 10 && merged[0].discrepancy.depthMaxKm === 14, "derinlik farki gizlenmedi");
ok(merged[0].inTurkey === true, "Turkiye icindeki olay dogru isaretlendi");

console.log("\\n\\u2014 Ayri olaylar ve idempotency");
ok(mergeObservations([
  base({ externalId: "A1" }),
  base({ sourceId: "usgs", externalId: "U9", originTime: "2026-07-28T13:00:00.000Z", latitude: 40.9, longitude: 29.1 })
]).length === 2, "farkli depremler birlestirilmedi");
const dup = mergeObservations([base({ externalId: "A1" }), base({ externalId: "A1" })]);
ok(dup.length === 1 && dup[0].observations.length === 1, "ayni kurumun ayni kaydi tekrar eklenmedi (idempotent)");
ok(mergeObservations([base({ sourceId: "kandilli", externalId: "K1" })])[0].verification === "single-source",
   "tek kaynakli kayit 'dogrulandi' gibi gosterilmedi");
ok(mergeObservations([]).length === 0, "veri yoksa sahte olay uretilmedi");

console.log("\\n\\u2014 Esikler ve yardimcilar");
ok(isSameEvent(base(), base({ originTime: "2026-07-28T10:05:00.000Z" })) === false, "5 dk fark ayri olay sayildi");
ok(isSameEvent(base(), base({ latitude: 41.5, longitude: 29.0 })) === false, "uzak merkez ayri olay sayildi");
ok(isInTurkeyBox(39.9, 32.8) === true && isInTurkeyBox(48.8, 2.3) === false, "Turkiye kutusu dogru");
ok(Math.round(haversineKm(39.93, 32.86, 41.01, 28.98)) > 300, "mesafe hesabi makul");
const sorted = sortForDisplay(mergeObservations([
  base({ externalId: "old", originTime: "2026-07-27T10:00:00.000Z" }),
  base({ sourceId: "usgs", externalId: "new", originTime: "2026-07-28T09:00:00.000Z", latitude: 36.5, longitude: 28.0 })
]));
ok(sorted[0].primary.externalId === "new", "en yeni deprem basta listelendi");

console.log("\\n\\u2014 Kaynak registry");
ok(EARTHQUAKE_SOURCES.length >= 4, "AFAD, Kandilli, USGS, EMSC tanimli");
ok(EARTHQUAKE_SOURCES.every(s => s.attribution && s.homepage.startsWith("http")), "her kaynakta atif ve adres var");
ok(EARTHQUAKE_SOURCES.every(s => s.minIntervalMs >= 60000), "her kaynak icin hiz limiti tanimli (>= 60 sn)");
ok(enabledSources().some(s => s.id === "afad"), "AFAD etkin");

console.log("");
if (failures > 0) { console.error("DEPREM KAPISI BASARISIZ \\u2014 " + failures + " hata"); process.exit(1); }
console.log("DEPREM KAPISI GECTI \\u2014 tum iddialar dogrulandi");
`;

try {
  execFileSync(
    process.execPath,
    ["--experimental-strip-types", "--no-warnings", "--input-type=module", "-e", RUNNER],
    { stdio: "inherit", cwd: process.cwd() }
  );
} catch {
  process.exit(1);
}
