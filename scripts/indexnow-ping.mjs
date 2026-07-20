/**
 * IndexNow bildirimi — Yandex + Bing'e (ve IndexNow'a katılan tüm motorlara)
 * sitemap'teki URL'leri "değişti/yeni" olarak anlık bildirir. Yeni sitenin
 * Yandex'te hızlı keşfedilip taranması için kullanılır.
 *
 * Kullanım (deploy'dan SONRA, sitenin kökünde anahtar dosyası yayında olmalı):
 *   node scripts/indexnow-ping.mjs
 *
 * Anahtar dosyası: public/<KEY>.txt (içeriği anahtarın kendisi) — build ile
 * https://www.yer6zemin.com.tr/<KEY>.txt adresinden yayınlanır.
 */

const KEY = "c2b8b6b0f47a3a0ce159241fccfc6ea8";
const HOST = "www.yer6zemin.com.tr";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow"; // tüm katılan motorlara dağıtır

async function verifyKeyFile(retries = 6, delayMs = 8000) {
  // Deploy sonrası edge yayılması birkaç saniye sürebilir; birkaç kez dene.
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(KEY_LOCATION, { cache: "no-store" });
      const body = (await res.text()).trim();
      if (res.ok && body === KEY) return true;
      console.log(`anahtar dosyası henüz hazır değil (deneme ${attempt}/${retries}, HTTP ${res.status})...`);
    } catch (e) {
      console.log(`anahtar dosyası kontrol hatası (deneme ${attempt}/${retries}): ${String(e?.message ?? e)}`);
    }
    if (attempt < retries) await new Promise((r) => setTimeout(r, delayMs));
  }
  return false;
}

async function main() {
  // 1) Anahtar dosyası yayında ve doğru içerikte mi? (yayılma için tekrar dener)
  if (!(await verifyKeyFile())) {
    console.error(`DURDU: anahtar dosyası doğrulanamadı (${KEY_LOCATION}). Deploy'un edge'e yayılmasını bekleyip tekrar çalıştır.`);
    process.exit(1);
  }

  // 2) Sitemap'ten URL'leri çek.
  const xml = await (await fetch(SITEMAP)).text();
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()).filter(Boolean);
  if (urlList.length === 0) {
    console.error("DURDU: sitemap'te URL bulunamadı.");
    process.exit(1);
  }

  // 3) IndexNow'a gönder (tek istek, tüm URL listesi).
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList })
  });

  console.log(`IndexNow gönderimi: HTTP ${res.status} · ${urlList.length} URL bildirildi.`);
  // 200/202 = kabul edildi. 403 = anahtar doğrulanamadı. 422 = URL/host uyumsuz.
  if (res.status !== 200 && res.status !== 202) {
    const body = await res.text().catch(() => "");
    console.error("Uyarı: beklenmeyen durum.", body.slice(0, 300));
    process.exit(1);
  }
}

main().catch((e) => {
  console.error("HATA:", String(e?.message ?? e).slice(0, 300));
  process.exit(1);
});
