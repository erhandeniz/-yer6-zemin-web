# YER6 — MOBİL PERFORMANS VE LCP ONARIM RAPORU

**Tarih:** 3 Ağustos 2026
**Kapsam:** Yalnızca kurumsal site reposu. YER6 AI ve AURENZA'ya dokunulmadı.
**Tasarım:** Değiştirilmedi. **İçerik:** Hiçbir sayfa, bölüm, görsel veya animasyon silinmedi.

---

## 1. BAŞLANGIÇ DEĞERLERİ (PageSpeed, kullanıcı raporu)

| Metrik | Mobil |
|---|---|
| Performans | 58 |
| Desktop performans | 73 |
| SEO | 100 |
| FCP | 4,57 s |
| Speed Index | 6,69 s |
| **LCP** | **7,70 s** |
| TBT | 191 ms |
| CLS | 0,00 |

---

## 2. LCP ELEMANI — TESPİT

**Mobil LCP elemanı:** Ana sayfa hero arka plan görseli
`/images/site/yer6-construction-hero.jpg`

**Ölçülen durum:**
- Boyut: **1400 × 933 piksel**
- Dosya: **453 KB JPEG**
- Sunum: Tek bir `<img>` etiketiyle, `srcset` olmadan → **telefon da masaüstü görselini indiriyordu**
- `fetchpriority` yok, `preload` yok
- `decoding="sync"` → ana iş parçacığında senkron çözme

Masaüstünde LCP elemanı aynı görselin video poster'ıdır (`<video poster>`).

### Kök nedenler

1. **Aşırı büyük görsel:** 390 px genişliğindeki bir telefona 1400 px görsel indiriliyordu (~3,5× fazla piksel).
2. **Modern format yok:** Yalnızca JPEG; WebP/AVIF varyantı yoktu.
3. **Geç keşif:** Görsel CSS/HTML ayrıştırıldıktan sonra bulunuyordu; `preload` yoktu.
4. **Öncelik sinyali yok:** `fetchpriority="high"` verilmemişti.
5. **Senkron çözme:** `decoding="sync"` ilk boyamayı geciktiriyordu.
6. **Video ön yüklemesi:** `<video preload="metadata">` mobilde gizli olmasına rağmen bazı tarayıcılarda metadata isteği üretiyordu.
7. **Erken JS yükü:** `FloatingCalculator` istemci bileşeni ilk JS paketine framer-motion ve ikon kütüphanesi sokuyordu.
8. **Analytics zamanlaması:** GA4 ve Yandex Metrica `afterInteractive` ile hidrasyon sonrası hemen çalışıyordu.

---

## 3. YAPILAN OPTİMİZASYONLAR

### A. LCP görseli — responsive ve modern format

Orijinal dosya **korundu** (`yer6-construction-hero.jpg`, kaynak olarak durur).
Yanına 9 optimize varyant üretildi:

| Dosya | Boyut | Ağırlık |
|---|---|---|
| hero-640.avif | 640×427 | 61 KB |
| hero-640.webp | 640×427 | 69 KB |
| hero-640.jpg | 640×427 | 78 KB |
| hero-960.avif | 960×640 | 124 KB |
| hero-960.webp | 960×640 | 142 KB |
| hero-960.jpg | 960×640 | 164 KB |
| hero-1400.avif | 1400×933 | 232 KB |
| hero-1400.webp | 1400×933 | 278 KB |
| hero-1400.jpg | 1400×933 | 330 KB |
| *(orijinal, korundu)* | 1400×933 | *453 KB* |

**Mobil LCP yükü: 453 KB → 61 KB (%87 azalma).**

Uygulanan teknikler:
- `<picture>` ile AVIF → WebP → JPEG sıralı fallback
- `srcSet` + `sizes="100vw"` ile doğru boyut seçimi
- `fetchPriority="high"` (yalnızca gerçek LCP elemanına)
- Açık `width` ve `height` (CLS koruması)
- `decoding="async"` (senkron çözme kaldırıldı)
- `loading="eager"` korundu — LCP elemanı lazy yüklenmez

### B. Preload

`layout.tsx` içine yalnızca **mobil** LCP görseli için preload eklendi:
- `media="(max-width: 767px)"` → masaüstünde indirilmez
- `imageSrcSet` + `imageSizes` → tarayıcı yalnızca gereken boyutu çeker
- `fetchPriority="high"`

### C. Video

- `preload="metadata"` → **`preload="none"`** (mobilde gereksiz istek engellendi)
- Poster, optimize edilmiş WebP sürümüne çevrildi (254 KB → 214 KB)
- Video kaynağı, otomatik oynatma ve görünüm **değişmedi**

### D. JavaScript

- `FloatingCalculator` → yeni `DeferredCalculator` sarmalayıcısıyla `requestIdleCallback` sonrasında dinamik yüklenir. Bileşenin kendisine dokunulmadı; buton aynı yerde, aynı görünümde belirir.
- jsPDF ve jspdf-autotable zaten dinamik import ediliyordu — korundu.

### E. Üçüncü parti scriptler

- GA4 ve Yandex Metrica: `afterInteractive` → **`lazyOnload`**
- Analytics **kaldırılmadı**, Search Console doğrulaması **korundu**, dönüşüm takibi bozulmadı.

### F. Değiştirilmeyenler (zaten doğruydu)

- `ParticleField`: mobilde hiç çalışmıyor (`max-width: 767px` kontrolü), `prefers-reduced-motion` destekliyor, three.js dinamik import ediliyor. **Dokunulmadı.**
- Fold altı görseller: `ProjectCard`, `MachineCard` vb. zaten `loading="lazy"`.
- CLS: 0,00 — açık boyut verilerek korundu.
- Schema, canonical, hreflang, metadata: **değiştirilmedi**.

---

## 4. DEĞİŞEN DOSYALAR

| Dosya | Değişiklik |
|---|---|
| `src/components/CinematicHero.tsx` | `<picture>` + srcset + fetchpriority; video preload="none" |
| `src/app/layout.tsx` | LCP preload; analytics lazyOnload; DeferredCalculator |
| `src/components/DeferredCalculator.tsx` | **yeni** — hesap makinesini idle sonrası yükler |
| `public/images/site/*` | **9 yeni** optimize varyant (orijinal korundu) |
| `scripts/content-check.mjs` | sayfa yapısı ve içerik silinme koruma kapıları |

---

## 5. KALİTE KAPILARI

| Kapı | Sonuç |
|---|---|
| `typecheck` | ✅ 0 hata |
| `content:test` — sayfa yapısı | ✅ Navbar, Footer, SiteShell, layout bütün; 8 ana rota yerinde |
| `content:test` — içerik silinme | ✅ 18 hizmet, 12 proje, 73 makale, 81 il, 114 ilçe (hiçbiri azalmadı) |
| `content:test` — terminoloji | ✅ temiz |
| `earthquake:test` | ✅ 21/21 |
| `seo:test` | build sonrası çalışır |

---

## 6. BEKLENEN ETKİ

Ölçülen dosya boyutu kazancı kesindir; Lighthouse skoru ağ ve cihaz koşullarına
göre değişir. Bu nedenle **tahmin** olarak sunulur:

| Metrik | Önce | Beklenen |
|---|---|---|
| Mobil hero yükü | 453 KB | 61 KB |
| LCP | 7,70 s | belirgin düşüş (ana neden görsel boyutuydu) |
| TBT | 191 ms | analytics ve hesap makinesi ertelendiği için düşüş |
| CLS | 0,00 | değişmez (açık boyut verildi) |
| SEO | 100 | değişmez (metadata/schema'ya dokunulmadı) |

**Dürüst not:** Lighthouse ölçümü bu ortamda çalıştırılamadı (sandbox'ta Chrome
ve dış ağ yok). Deploy sonrası PageSpeed Insights ile 3 ölçüm alınıp medyanı
bu rapora eklenmelidir.

---

## 7. KALAN SINIRLAMALAR

1. **Lighthouse ölçümü yapılmadı** — deploy sonrası kullanıcı tarafından alınmalı.
2. **Masaüstü video** hâlâ üçüncü parti kaynaktan (mixkit.co) geliyor. Kendi
   sunucumuzdan servis edilmesi ek kazanç sağlar ancak dosya boyutu ve Cloudflare
   bant genişliği değerlendirilmelidir. Bu sürümde **değiştirilmedi**.
3. **Font stratejisi** incelendi; kritik bir sorun bulunmadı, bu nedenle
   dokunulmadı (mevcut doğru uygulama korundu ilkesi).
4. **Cloudflare cache başlıkları** sandbox'tan doğrulanamadı; `_headers` dosyası
   mevcut ve deploy sonrası kontrol edilmelidir.

---

## 8. DEPLOY VE GERİ ALMA

- **Geri alma hedefi:** deploy öncesi son commit ve mevcut Cloudflare sürümü
  kaydedilmelidir (`npx wrangler deployments list`).
- **Yayın komutu:** `npm run gates && npx wrangler deploy`
- **Doğrulama:** iPhone boyutunda ve masaüstünde ana sayfa görsel kontrolü;
  hero görselinin göründüğü, videonun masaüstünde oynadığı, hesap makinesi
  butonunun belirdiği teyit edilmeli.
- **Force-push yapılmadı.**
