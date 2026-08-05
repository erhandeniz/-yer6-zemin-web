# YER6 Arama Otoritesi Uygulama Raporu

Durum: Release 1 canlıya alındı ve doğrulandı
Başlangıç: 5 Ağustos 2026
Rollback deployment: `a314b32b-e25e-4b61-98f9-0370266ff7df`
Başlangıç commit: `b1b072cd3a52db3e8ea05c3caf9ee31a4325c32c`

## Onaylanan Release 1 kapsamı

- Genel zemin güçlendirme ile CFA sayfa sahipliğini ayırmak.
- DSM/Deep Soil Mixing sayfalarının ana/destek ilişkisini belirginleştirmek.
- `/sehirler/` ve `/knowledge/deprem/` bağlantısızlığını gidermek.
- Sitemap'teki beş yinelenen URL kaydını tekilleştirmek.
- Mevcut fore kazık hesaplayıcısındaki çap birimi regresyonunu düzeltmek.
- Altı zorunlu denetim/mimari raporunu üretmek.

## Kesinlikle değişmeyecekler

- CSS, sayfa düzeni, navigasyon yapısı, kart/grid sistemi, görseller ve responsive davranış.
- Mevcut URL'ler, rotalar, hizmetler, şehirler, projeler ve teknik içerikler.
- Teknik İngilizce terimler ve marka adları.
- Production domaini, Cloudflare projesi, secret, binding ve environment ayarları.

## Başlangıç denetimi

| Kontrol | Sonuç |
|---|---|
| Production build | Başarılı, 320 rota |
| HTML envanteri | 316 |
| Sitemap | 314 kayıt / 309 benzersiz |
| İndekslenebilir yanlış canonical | 0 |
| Kırık iç bağlantı | 0 |
| İl / ilçe | 81 / 109 |
| Hizmet detay | 18 |
| Bilgi makalesi | 73 |
| Proje | 11 |
| Hesaplayıcı | 5 |
| Bağlantısız merkez | 2 |

## Uygulama günlüğü

Bu bölüm kod değişikliği, test, commit, push, deployment ve canlı doğrulama tamamlandıkça güncellenecektir.

| Aşama | Durum | Kanıt |
|---|---|---|
| Denetim | Tamamlandı | Beş teknik bulgu ve sorgu sahipliği raporlandı |
| Raporlar | Tamamlandı | Altı zorunlu `docs/` belgesi |
| Kod değişiklikleri | Tamamlandı | Hizmet sahipliği, kontrollü iç link, sitemap tekilleştirme, cm→m düzeltmesi |
| Typecheck | Başarılı | `tsc --noEmit` |
| İçerik/deprem testleri | Başarılı | 18 hizmet, 12 proje, 73 makale, 81 il korundu; deprem olay testleri geçti |
| Production build | Başarılı | Next.js 16.2.9, 320 statik rota |
| SEO/rota/bağlantı/schema | Başarılı | 309/309 benzersiz sitemap URL'si; 0 kırık link, 0 yanlış canonical, 0 geçersiz schema |
| Mobil/desktop smoke | Başarılı | 390×844 ve 1728×980; yatay taşma yok, mobil menü çalışıyor |
| Commit/push | Başarılı | `df878fb`, `600e49b`, `c89c605` |
| Cloudflare deploy | Başarılı | `391893a5-c586-4677-945c-dbf7aa134f6e` |
| Canlı doğrulama | Başarılı | Production domaini ve doğrudan Worker URL'si |

## Çalışma ağacı koruması

Başlangıçta repoda kullanıcıya ait önceden mevcut değişiklikler ve dosyalar bulunmuştur. Release 1 commit'i yalnızca bu raporda listelenen YER6 arama otoritesi dosyalarını açıkça stage edecektir. Kapsam dışı uygulama, görsel ve kullanıcı değişiklikleri commit'e alınmayacaktır.

## Final alanları

- Release 1 ana commit: `df878fb`
- Erişilebilirlik koruma commit'i: `600e49b`
- Türkçe arayüz koruma commit'i: `c89c605`
- Rapor commit: bu raporu tamamlayan commit
- Deployment sürümü: `391893a5-c586-4677-945c-dbf7aa134f6e`
- Rollback sürümü: `a314b32b-e25e-4b61-98f9-0370266ff7df`
- Worker URL'si: `https://yer6zemin.dnzyapierhan.workers.dev`
- İçerik silme: hayır
- Rota silme/değiştirme: hayır
- Sayfa yapısı değişikliği: hayır

## Test ayrıntıları

- Fore kazık varsayılan girdi sonucu: `2.160 m` delgi, `1.194,3 m³` beton, `143,32 ton` donatı. Önceki santimetre/metre regresyonu giderildi.
- `/services/zemin-guclendirme/`: H1 `Zemin Güçlendirme`; CFA firmaları şeklindeki yanlış title ve metin yok.
- `/services/deep-soil-mixing/`: H1 teknik terimle ayrışıyor ve `/services/dsm/` ana merkezine bağlantı veriyor.
- TR: `Zemin Güçlendirme`; EN: `Ground Strengthening`; AR: `تدعيم التربة`. Ham i18n anahtarı yok, Arapça RTL çalışıyor.
- 404 sayfası `Sayfa Bulunamadı` ve `noindex` olarak doğrulandı.
- Projede ayrı lint veya genel unit-test script'i tanımlı değildir. Mevcut typecheck, içerik, deprem, SEO ve production build kapıları çalıştırılmıştır.
- Lighthouse paketi projede kurulu değildir; yeni bağımlılık eklenmemiştir. Mobil/desktop taşma ve etkileşim smoke testleri gerçek tarayıcıda yapılmıştır.

## Canlı doğrulanan URL'ler

- `https://www.yer6zemin.com.tr/`
- `https://www.yer6zemin.com.tr/knowledge/`
- `https://www.yer6zemin.com.tr/blog/`
- `https://www.yer6zemin.com.tr/knowledge/jet-grout-nedir/`
- `https://www.yer6zemin.com.tr/knowledge/fore-kazik-maliyeti/`
- `https://www.yer6zemin.com.tr/knowledge/dsm-nasil-uygulanir/`
- `https://www.yer6zemin.com.tr/knowledge/zemin-iyilestirme-yontemleri/`
- `https://www.yer6zemin.com.tr/knowledge/sivilasma-riskine-karsi-zemin-guclendirme/`
- `https://www.yer6zemin.com.tr/services/zemin-guclendirme/`
- `https://www.yer6zemin.com.tr/services/cfa-kazik/`
- `https://www.yer6zemin.com.tr/services/deep-soil-mixing/`
- `https://www.yer6zemin.com.tr/services/jet-grout/`
- `https://www.yer6zemin.com.tr/services/dsm/`
- `https://www.yer6zemin.com.tr/services/fore-kazik/`
- `https://www.yer6zemin.com.tr/hesaplama/fore-kazik-maliyet-hesaplama/`
- `https://www.yer6zemin.com.tr/sehirler/istanbul-zemin-guclendirme/`
- `https://www.yer6zemin.com.tr/sehirler/ankara-zemin-guclendirme/`
- `https://www.yer6zemin.com.tr/sehirler/izmir-zemin-guclendirme/`
- `https://www.yer6zemin.com.tr/sitemap.xml`
- Bilinmeyen rota üzerinden canlı 404/noindex kontrolü.

## Canlı sonuç özeti

- HTTP → HTTPS: `301 Moved Permanently`, hedef `https://www.yer6zemin.com.tr/`.
- Sitemap: 309 kayıt, 309 benzersiz URL, 0 tekrar.
- Zemin Güçlendirme H1/title doğru; yanlış CFA firma metni yok.
- Deep Soil Mixing teknik sayfası ana DSM hizmet merkezine bağlı.
- Fore kazık sonucu `1.194,3 m³` beton ve `143,32 ton` donatı; eski milyonlarca m³ sonucu yok.
- Türkçe erişilebilirlik etiketleri özel domainde doğrulandı: `YER6 Ana Sayfa`, `Menüyü Aç`, `Bizi arayın`, `Bize e-posta gönderin`.
- Makale tarihleri Türkçe locale ile görünür; ham ISO tarih sunumu yok.
- İngilizce H1 `Ground Strengthening`; Arapça H1 `تدعيم التربة`, RTL etkin ve ham i18n anahtarı yok.
- Mobil 390×844 ve desktop görünümde yatay taşma yok.
- Canonical, Service, FAQPage, BreadcrumbList ve kurum schema yapıları geçerli.

YER6 SEARCH AUTHORITY RELEASE 1 DEPLOYED — PAGE STRUCTURE AND ALL EXISTING CONTENT PRESERVED
