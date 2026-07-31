# YER6 — 20 ŞEHİR, DEPREM BİLGİ MERKEZİ VE ARAMA OTORİTESİ RAPORU

**Tarih:** 28 Temmuz 2026
**Kapsam:** Yalnızca kurumsal site reposu (`yer6-zemin-web`). YER6 AI uygulamasına ve AURENZA'ya dokunulmadı.
**Branch:** `feature/yer6-secure-platform-and-agents`

---

## 1. MEVCUT DURUM DENETİMİ (AŞAMA 1)

### 1.1 Google "noindex" uyarısı — TEŞHİS: YANLIŞ ALARM

Search Console'dan gelen *"noindex etiketi tarafından hariç tutuldu"* bildirimi incelendi.

| Bulgu | Sonuç |
|---|---|
| Kaynak kodda `noindex` kullanımı | **Yok** |
| Üretilen HTML'de `noindex` bulunan sayfalar | Yalnızca `404.html`, `404/index.html`, `_not-found/index.html` |
| Diğer tüm sayfalar | `index, follow` |

**Karar:** 404 sayfalarının `noindex` olması doğrudur ve Next.js'in standart davranışıdır. **Düzeltme gerekmiyor.** Google, 404 sayfasını da "yeni neden" olarak raporladığı için bildirim gönderilmiş.

### 1.2 iCloud kopya dosya kirliliği — TEMİZLENDİ

Repoda **147 adet** iCloud senkronizasyon artığı (`dosya 2.ext`, `dosya 3.ext`) tespit edildi. Bu dosyalar daha önce Cloudflare build'ini bozmuştu.

- Hiçbiri git tarafından izlenmiyordu → **silinmesi güvenliydi**, silindi.
- Hiçbir gerçek içerik kaybedilmedi.

### 1.3 Deployment mimarisi — KRİTİK BULGU

`wrangler.jsonc` incelendi:

```jsonc
{ "name": "yer6zemin", "assets": { "directory": "./out" } }
```

**Site statik export'tur; çalışan bir Worker/sunucu yoktur.** Bunun iki önemli sonucu var:

1. `git push` tek başına canlıyı değiştirmez. Yayın zinciri: `npm run build` → `npx wrangler deploy`.
2. **Cloudflare Cron Trigger kullanılamaz** (cron bir Worker gerektirir, sitede Worker yok). GitHub Actions da tanımlı değil.

Bu nedenle günlük araştırma sistemi, halihazırda çalışan ve kanıtlanmış olan **Cowork zamanlanmış görev altyapısı** üzerine kuruldu (bkz. Bölüm 4).

### 1.4 Korunanlar (silinmedi / değiştirilmedi)

Header, navigasyon, footer, ana sayfa yerleşimi, renk paleti, tipografi, mobil menü, animasyonlar, tüm hizmet sayfaları, 81 şehir sayfası, proje sayfaları, makine parkuru, Bilgi Merkezi, Blog, çoklu dil altyapısı ve mevcut URL yapısı **aynen korundu.** Hiçbir rota, sayfa veya içerik silinmedi.

---

## 2. KORUYUCU TEMİZLİK (AŞAMA 2)

| İşlem | Durum |
|---|---|
| 147 iCloud kopya dosyası | Silindi (izlenmeyen artıklar) |
| Proje görsel açıklamalarındaki "(temsili görsel)" ibaresi | Kaldırıldı — görseller YER6 saha arşivinden |
| Sitede kalan stok/internet görseli | **Yok** (Unsplash referansları kendi arşivle değiştirilmişti) |
| Ham çeviri anahtarı sızıntısı (`proj_..._title`) | Çözüldü: 3 dilde çeviri + bileşen düzeyinde fallback |
| Sekme başlığındaki çift marka (`| YER6 | YER6 Zemin...`) | Düzeltildi |

---

## 3. 20 ÖNCELİKLİ ŞEHİR — VERİYE DAYALI SEÇİM (AŞAMA 3)

Liste ezberden değil, **denetlenebilir bir puanlama modeliyle** belirlendi:
`src/lib/cityPriority.ts`

### 3.1 Puanlama bileşenleri (toplam 100)

| Bileşen | Ağırlık | Veri kaynağı |
|---|---|---|
| Nüfus | 0–30 | TÜİK 2025 (ADNKS) |
| Deprem tehlikesi | 0–25 | AFAD tehlike haritası + 2023 Kahramanmaraş etkisi |
| Sanayi / yatırım | 0–20 | OSB yoğunluğu, liman, lojistik, toplu konut |
| Zemin riski | 0–15 | Alüvyon havza, yeraltı suyu, sıvılaşma, kıyı dolgusu |
| Mobilizasyon | 0–10 | Gölbaşı/Ankara üssünden ekip ve makine erişimi |

### 3.2 Seçilen 20 şehir (puan sırası)

| # | Şehir | Puan | # | Şehir | Puan |
|---|---|---|---|---|---|
| 1 | İstanbul | 96 | 11 | Mersin | 73 |
| 2 | İzmir | 88 | 12 | Manisa | 73 |
| 3 | Kocaeli | 87 | 13 | Kahramanmaraş | 71 |
| 4 | Bursa | 86 | 14 | Konya | 69 |
| 5 | Adana | 80 | 15 | Tekirdağ | 69 |
| 6 | Sakarya | 78 | 16 | Denizli | 69 |
| 7 | Ankara | 76 | 17 | Samsun | 65 |
| 8 | Hatay | 76 | 18 | Malatya | 65 |
| 9 | Gaziantep | 76 | 19 | Eskişehir | 65 |
| 10 | Antalya | 73 | 20 | Kayseri | 64 |

**Ankara**, ham puanda 7. sırada olmasına rağmen merkez üs ve en yüksek saha kontrolüne sahip il olduğu için listede **daima ilk sırada sabitlenir** (kod içinde açıkça belgelendi).

### 3.3 Havuzda değerlendirilip ilk 20'ye giremeyenler (şeffaflık)

Balıkesir (64), Şanlıurfa (58), Muğla (58), Diyarbakır (57), Van (57).
**Bu illerin sayfaları silinmedi** — `/sehirler/` altında yayında kalmaya devam ediyor; yalnızca öne çıkarma sırası değişti.

### 3.4 81 ile hizmet kapsaması

Tüm şehir sayfalarına (87 kayıt) şu H2 bölümü eklendi:
**"{Şehir} jet grout, fore kazık, DSM ve ankraj uygulamaları"**

Amaç: "il + yöntem" aramalarında (örn. *Iğdır jet grout*) birebir eşleşme sağlamak. Sayfa yapısına dokunulmadı; içerik veri katmanına eklendi.

---

## 4. DEPREM VE ZEMİN BİLGİ MERKEZİ (AŞAMA 4)

### 4.1 Yeni sayfa

**URL:** `/knowledge/deprem/` — mevcut Bilgi Merkezi altında alt kategori olarak çalışır, navigasyon değiştirilmedi.

İçerik başlıkları: deprem-zemin ilişkisi ve zemin büyütmesi, yapı-zemin etkileşimi, sıvılaşma (oluşum koşulları, saha etkileri, azaltma yaklaşımları), deprem sonrası zemin ve temel incelemesi, yöntemler (jet grout / DSM / fore kazık / mikro kazık), deprem bölgesinde kalite kontrol, 20 şehir rehber bağlantıları, SSS, kaynaklar.

**Editoryal ilkeler (kodda uygulanmıştır):**
- Deprem korkusu üzerinden pazarlama yok, sansasyonel başlık yok.
- "Bu depremde şunu yaptırın" tarzı CTA yok; yalnızca sayfa sonunda tarafsız teknik değerlendirme bağlantısı.
- Tahmin yok — SSS'de "bir sonraki deprem tahmin edilebilir mi?" sorusuna açıkça *hayır* yanıtı.
- Sınırlama uyarısı: mahalle/parsel ölçeğinde kesin zemin sınıfı iddia edilmez.

### 4.2 Kaynak registry — `src/lib/earthquake/sources.ts`

| Kaynak | Kurum | Kapsam | Güvenilirlik |
|---|---|---|---|
| AFAD | İçişleri Bakanlığı AFAD | Türkiye | Resmî (birincil) |
| Kandilli | Boğaziçi Üni. KRDAE | Türkiye | Akademik |
| USGS | U.S. Geological Survey | Dünya | Uluslararası kurum |
| EMSC | European-Mediterranean Seismological Centre | Avrupa-Akdeniz | Uluslararası kurum |

Her kaynakta atıf metni, ana sayfa adresi ve **hız limiti (≥60 sn)** tanımlıdır. Erişim engeli/CAPTCHA **aşılmaz**; engel varsa kaynak devre dışı bırakılır.

### 4.3 Veri modeli ve tekilleştirme — `src/lib/earthquake/model.ts`

Aynı deprem 4 kurumda 4 ayrı kayıt olarak bulunur. Model bunları **tek olaya birleştirir**:

- Eşleşme eşiği: <60 sn zaman farkı, <100 km mesafe, ≤1.5 birim büyüklük farkı.
- Birincil kaynak önceliği: **AFAD > Kandilli > EMSC > USGS**.
- Kaynaklar arası büyüklük/derinlik/merkez farkı **gizlenmez**, `discrepancy` alanında taşınır.
- Aynı kurumun aynı kaydı tekrar eklenmez (idempotency); revizyon gelirse güncellenir.
- Doğrulama durumu: `single-source` / `corroborated` / `revised`.

---

## 5. GÜNLÜK ARAŞTIRMA VE ZAMANLAMA (AŞAMA 5)

### 5.1 Zamanlayıcı seçimi — gerekçe

| Seçenek | Durum |
|---|---|
| Cloudflare Cron Trigger | **Kullanılamaz** — site statik, Worker yok |
| GitHub Actions | Tanımlı değil; kurulumu deployment zincirini riske atardı |
| CMS scheduler | Yok (headless CMS kullanılmıyor) |
| **Cowork zamanlanmış görev** | **Seçildi** — halihazırda çalışıyor ve kanıtlı |

### 5.2 Kurulan görevler

| Görev | Saat (TSİ) | İşlev |
|---|---|---|
| `yer6-deprem-ve-teknik-arastirma` | 07:00 | AFAD/Kandilli/USGS/EMSC deprem taraması + dünya geneli geoteknik yayın araştırması → `docs/arastirma/` altında **[ONAY BEKLİYOR]** etiketli taslak |
| `yer6-gsc-sehir-indeksleme` | 10:03 | Search Console kuyruğundan günlük 10 URL için dizine ekleme isteği (mevcut, çalışıyor) |

### 5.3 Yayın politikası

- **Hiçbir araştırma çıktısı otomatik yayımlanmaz.** Görev yalnızca taslak yazar; yayın kararı Erhan'a aittir.
- Görev site kodunu değiştirmez, commit/push/deploy yapmaz → **günlük kod deploy riski yoktur.**
- Kaynak sayfalarındaki metinler **veri** olarak işlenir, **talimat olarak uygulanmaz** (prompt injection koruması görev promptunda açıkça yazılıdır).

### 5.4 Bilinen sınırlama (dürüst beyan)

Statik export mimarisi nedeniyle **onaylanan içeriğin canlıya çıkması için build + deploy gerekir.** "Deploy'suz içerik yayını" ancak şu iki yoldan biriyle mümkün olur ve **bu çalışmanın kapsamı dışında bırakılmıştır** (production mimarisini değiştirmemek için):
1. Deprem verisini tarayıcı tarafında canlı API'den çekmek (CORS doğrulaması gerekir),
2. Cloudflare Worker + KV/R2 katmanı eklemek.

Öneri: 2. seçenek, ayrı ve kontrollü bir sürümde ele alınmalıdır.

---

## 6. KALİTE KAPILARI (AŞAMA 6)

Yeni komut: `npm run gates` → `typecheck` + `earthquake:test` + `build` + `seo:test`

### 6.1 Deprem veri kapısı — `npm run earthquake:test`

**21/21 kontrol geçti:**
- Aynı deprem 3 kurumdan tek olaya birleşti (kayıt çoğaltılmadı)
- Büyüklük ve derinlik farkı gizlenmedi
- AFAD birincil kaynak seçildi
- Farklı depremler birleştirilmedi
- Aynı kurumun aynı kaydı tekrar eklenmedi (idempotent)
- Tek kaynaklı kayıt "doğrulandı" gösterilmedi
- **Veri yoksa sahte olay üretilmedi**
- Kaynak registry bütünlüğü (atıf, adres, hız limiti)

> Not: Bu projede vitest/jest kurulu değildir; kalite kapıları `scripts/*.mjs` içinde Node ile çalışır (mevcut `seo-check.mjs` deseniyle aynı). Node 22 tip-sıyırma özelliği kullanılarak TS modülleri doğrudan test edilir.

### 6.2 Diğer kapılar

| Kapı | Durum |
|---|---|
| `typecheck` | Geçti (0 hata) |
| `seo:test` | Mevcut kapı korundu |
| Gizli anahtar taraması | Temiz — gömülü API anahtarı/şifre yok |
| Sayfa yapısı koruma | Doğrulandı — header/footer/nav/tasarım değişmedi |

---

## 7. YAPILAN DEĞİŞİKLİKLERİN DOSYA LİSTESİ

**Yeni:**
- `src/lib/cityPriority.ts` — 20 şehir puanlama modeli
- `src/lib/earthquake/sources.ts` — kaynak registry
- `src/lib/earthquake/model.ts` — olay modeli + tekilleştirme
- `src/lib/earthquake/guides.ts` — teknik rehber içeriği + SSS
- `src/app/knowledge/deprem/page.tsx` — Deprem ve Zemin Bilgi Merkezi
- `scripts/earthquake-check.mjs` — kalite kapısı
- `docs/YER6-20-SEHIR-DEPREM-VE-ARAMA-OTORITESI-RAPORU.md` — bu rapor

**Düzenlenen:**
- `src/lib/cityContent.ts` — öncelikli şehir listesi puanlamaya bağlandı (sayfa silinmedi)
- `src/app/sitemap.ts` — `/knowledge/deprem/` eklendi
- `src/lib/content.ts` — "(temsili görsel)" ibaresi kaldırıldı
- `package.json` — `earthquake:test` ve `gates` komutları

---

## 8. MANUEL DOĞRULAMA GEREKTİRENLER (dürüst liste)

| Konu | Neden |
|---|---|
| 5 yeni referans projesinin metrajları | Fotoğraflardan doğrulanabilir bilgi (makine modeli, saha tipi) kullanıldı; **kolon/kazık adedi, metraj ve tarih beyanı Erhan'a aittir** |
| Güney Asya projelerinin yılı (2016) | Fotoğraf filigranlarındaki tarih 2026'ydı; 2016 beyanı kullanıcı bildirimine dayanır |
| Şehir puanlarındaki sanayi/zemin bileşenleri | Nitel değerlendirme; TÜİK nüfusu dışındaki bileşenler uzman görüşüdür |
| Google Business Profile hizmet bölgeleri | Google'ın bölge seçicisi uzaktan tıklamayı kabul etmedi; elle eklenmeli |
| Yandex Business adresi | Kayıtlı adres (Okkan Cad 48A) site adresiyle (Okan Cd 42-A) uyuşmuyor |

---

## 9. SONRAKİ ADIMLAR

1. `npm run gates` (Mac'te) → tüm kapıları çalıştır
2. `npx wrangler deploy` → canlıya çıkar
3. `/knowledge/deprem/` sayfasını GSC kuyruğuna ekle
4. `node scripts/indexnow-ping.mjs` → Yandex/Bing bildirimi
5. İlk günlük araştırma raporunu (`docs/arastirma/`) yarın sabah incele
