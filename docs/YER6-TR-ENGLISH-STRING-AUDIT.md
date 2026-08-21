# YER6 Türkçe Sayfalarda İngilizce Arayüz Kalıntıları Denetimi

**Durum:** Denetim, A sınıfı güvenli düzeltmeler, testler ve production deployment tamamlandı.  
**Denetim tarihi:** 3 Ağustos 2026  
**Repo:** `/Users/erhandeniz/Desktop/yer6-zemin-web`  
**Başlangıç commit'i:** `7fe4fc7bdd5daa07902f9be0e29fdc78949a06e0`  
**İncelenen ürün:** YER6 kurumsal web sitesi  
**Kapsam dışı ve dokunulmayan alanlar:** `apps/yer6-ai/**`, başka repolar, production domaini, görseller, sayfa yapısı, URL/rota yapısı ve mevcut SEO içeriği.

## 1. Denetim yöntemi ve koruma sınırları

- `src/app`, `src/components`, `src/data`, `src/lib`, `src/types`, `public`, `scripts`, metadata üretimi, layout, article/blog/knowledge/city/service/project şablonları, header, footer, breadcrumb, filtreler, formlar, 404, loading, `aria-label`, `title`, `alt`, JSON-LD, Open Graph, Twitter metadata, sitemap ve manifest tarandı.
- Repoda `pages/`, `content/`, `locales/`, bağımsız `i18n/`, MDX, YAML veya ayrı article/blog template klasörleri bulunmadığı için mevcut karşılıkları olan `src/app`, `src/components`, `src/data` ve `src/lib/i18n.ts` üzerinden denetlendi.
- `src/lib/i18n.ts` içinde locale sınırları doğrulandı: Türkçe `5-532`, İngilizce `533-1061`, Arapça `1062-1586`. İngilizce ve Arapça sözlüklerdeki kendi dillerine ait ifadeler hata sayılmadı.
- Denetim başlangıcında TR / EN / AR sözlüklerinin her birinde **475 anahtar** bulundu. Güvenli erişilebilirlik yerelleştirmeleri sonrasında her locale **483 anahtara** ulaştı; anahtar setleri birebir eşittir.
- Üretim derlemesi alınarak **314 rota / 310 HTML dosyası** üzerinde çıktı taraması yapıldı. Ortak bileşenlerden gelen kalıntıların sayfa yayılımı ayrıca doğrulandı.
- Teknik İngilizce terimler, ürün/model adları, marka/özel isimler ve İngilizce teknik kaynak başlıkları değiştirme adayı yapılmadı.
- Denetim öncesinde mevcut olan `package.json`, `apps/yer6-ai/**`, `docs/arastirma/**`, `docs/marketing/**`, `docs/seo/YER6-SEO-FINAL-REPORT.md` ve çeşitli `public/images/**` çalışma ağacı değişikliklerine dokunulmadı.

## 2. Özet

Bu rapordaki sayılar **benzersiz kaynak bulgusu/ifade ailesi** sayısıdır; aynı ortak bileşenin yüzlerce sayfada ürettiği tekrarlar ayrıca “etki” sütununda belirtilmiştir.

| Sınıf | Açıklama | Benzersiz bulgu | Bu aşamadaki işlem |
|---|---|---:|---|
| A | Kesin arayüz çeviri/yerelleştirme hatası | 10 | Düzeltildi ve doğrulandı |
| B | Teknik İngilizce terim veya teknik kaynak adı | 12 | Korunacak |
| C | Marka, ürün/model veya özel isim | 6 | Korunacak |
| D | Bağlama göre manuel inceleme gerekli | 2 | Değişmeden bırakılacak |
| **Toplam** |  | **30** |  |

Kesin A sınıfı bulguların statik üretim çıktısındaki toplam görünüm/erişilebilirlik etkisi yaklaşık **1.773 tekrar**dır. Bu sayı yeni içerik eklenmesiyle artabilir; güvenli düzeltme ortak kaynaklarda yapılmalıdır.

## 3. A sınıfı — kesin arayüz çeviri/yerelleştirme hataları

| No | Dosya ve satır | İngilizce / hatalı sunum | Sayfa veya bileşen | Teknik terim mi? | Arayüz metni mi? | Değiştirilmeli mi? | Önerilen Türkçe / güvenli yaklaşım | Güven | Etki |
|---:|---|---|---|---|---|---|---|---|---|
| A-01 | `src/components/Navbar.tsx:36` | `Main Navigation` | Ortak Navbar, `<nav aria-label>` | Hayır | Evet | Evet | `Ana Navigasyon`; locale sözlüğü anahtarı üzerinden TR/EN/AR ayrımı korunmalı | Çok yüksek | 308 HTML |
| A-02 | `src/components/Navbar.tsx:37` | `YER6 home` | Ortak Navbar logo bağlantısı | Hayır | Evet | Evet | `YER6 Ana Sayfa`; locale sözlüğü anahtarı kullanılmalı | Çok yüksek | 308 HTML |
| A-03 | `src/components/Navbar.tsx:106` | `Open menu` | Ortak mobil menü düğmesi | Hayır | Evet | Evet | Menü durumuna göre `Menüyü Aç` / `Menüyü Kapat`; EN/AR karşılıkları sözlükte ayrı tutulmalı | Çok yüksek | 308 HTML |
| A-04 | `src/components/Footer.tsx:22` | `Call us at ${telefon}` | Ortak Footer telefon bağlantısı | Hayır | Evet | Evet | `Bizi arayın: ${telefon}`; locale sözlüğüyle üretilmeli | Çok yüksek | 308 HTML |
| A-05 | `src/components/Footer.tsx:25` | `Email us at ${e-posta}` | Ortak Footer e-posta bağlantısı | Hayır | Evet | Evet | `Bize e-posta gönderin: ${e-posta}`; locale sözlüğüyle üretilmeli | Çok yüksek | 308 HTML |
| A-06 | `src/components/ProjectCard.tsx:39` | `${title} details` | Ana sayfa ve proje kartları | Hayır | Evet | Evet | `${title} detayları`; locale sözlüğüyle ve dinamik başlıkla üretilmeli | Çok yüksek | Mevcut çıktıda 13 kart |
| A-07 | `src/components/BeforeAfter.tsx:37` | `Before after comparison` | Projeler sayfası önce/sonra sürgüsü | Hayır | Evet | Evet | `Önce ve sonra karşılaştırması`; locale sözlüğüyle üretilmeli | Çok yüksek | 1 sayfa |
| A-08 | `src/app/knowledge/[slug]/KnowledgeArticleContent.tsx:30`, `src/lib/i18n.ts:464`, `src/data/knowledge.ts:13` ve aynı alanın 63 kaydı, `src/data/seo-articles.ts:11` ve aynı alanın 10 kaydı | Örn. `9 dk okuma` | 73 Bilgi Merkezi makalesinin okuma süresi | Hayır | Evet | Evet | Veri değerini silmeden/saklamadan yalnız sunumda `9 dakika okuma süresi`; EN ve AR biçimleri locale bazlı kalmalı | Çok yüksek | 73 makale |
| A-09 | `src/app/knowledge/[slug]/KnowledgeArticleContent.tsx:31`, `src/lib/i18n.ts:465`, `src/data/knowledge.ts:14` ve aynı alanın 63 kaydı, `src/data/seo-articles.ts:12` ve aynı alanın 10 kaydı | Örn. `Yayın: 2026-06-21` | 73 Bilgi Merkezi makalesinin yayın tarihi | Hayır | Evet | Evet | `Yayınlanma: 21 Haziran 2026`; kaynak tarih değişmeden `tr-TR`, `Europe/Istanbul` sunumu | Çok yüksek | 73 makale |
| A-10 | `src/app/knowledge/[slug]/KnowledgeArticleContent.tsx:32`, `src/lib/i18n.ts:466`, `src/data/knowledge.ts:15` ve aynı alanın 63 kaydı, `src/data/seo-articles.ts:13` ve aynı alanın 10 kaydı | Örn. `Güncelleme: 2026-06-21` | 73 Bilgi Merkezi makalesinin güncelleme tarihi | Hayır | Evet | Evet | `Güncellenme: 21 Haziran 2026`; kaynak tarih değişmeden `tr-TR`, `Europe/Istanbul` sunumu | Çok yüksek | 73 makale |

### A sınıfı için güvenli ortak-kaynak düzeltme planı

1. Navbar ve Footer için yalnızca yeni locale sözlük anahtarları eklemek; bileşen yerleşimini değiştirmeden `aria-label` değerlerini `t(...)` ile üretmek.
2. `ProjectCard` ve `BeforeAfter` için aynı locale-safe yaklaşımı kullanmak; kart, grid ve sürgü yapısına dokunmamak.
3. Makale şablonunda tarih ve okuma süresini tek ortak sunum yardımcısıyla locale bazlı biçimlendirmek; `publishedAt`, `updatedAt` ve `readingTime` kaynak verilerini değiştirmemek.
4. İngilizce ve Arapça locale değerlerini Türkçeleştirmemek; her locale kendi etiketini ve tarih biçimini korumalı.

## 4. B sınıfı — korunacak teknik İngilizce terimler

| No | Dosya ve satır(lar) | İngilizce metin / terim | Sayfa veya bileşen | Teknik terim mi? | Arayüz metni mi? | Değiştirilmeli mi? | Öneri | Güven |
|---:|---|---|---|---|---|---|---|---|
| B-01 | `src/lib/i18n.ts:22,31,52,119,209,219,422-433,456,510,514` ve içerik/metadata boyunca | `Jet Grout`, `Jet Grouting` | Hizmet, proje, blog, Bilgi Merkezi, makine parkuru, SEO | Evet | İçerik/başlık | Hayır | Aynen koru | Çok yüksek |
| B-02 | `src/lib/i18n.ts:22,31,52,125,162-165,185-194,443-456` | `Deep Soil Mixing`, `DSM`, `CFA`, `Continuous Flight Auger` | Hizmet ve teknik içerik | Evet | İçerik/başlık | Hayır | Aynen koru; ilk Türkçe açıklamalar zaten mevcut | Çok yüksek |
| B-03 | `src/lib/i18n.ts:194`, `src/data/knowledge.ts` içindeki deney açıklamaları | `SPT`, `CPT`, `CPTu` | Zemin etüdü ve teknik makaleler | Evet | İçerik | Hayır | Aynen koru | Çok yüksek |
| B-04 | `src/lib/i18n.ts:185-189`, `src/data/seo-articles.ts:110` ve ilgili makaleler | `PIT`, `load test`, `static load test`, `dynamic load test`, `UCS`, `CSL` | Kazık kalite kontrolü | Evet | İçerik/SEO anahtar kelimesi | Hayır | Aynen koru | Çok yüksek |
| B-05 | `src/lib/i18n.ts:133,163`, `src/data/seo-articles.ts:145-166` | `tremie`, `bentonite`, `casing`, `slurry` | Fore kazık hizmeti ve teknik kaynak | Evet | İçerik | Hayır | Aynen koru | Çok yüksek |
| B-06 | `src/lib/i18n.ts:138,211,438` | `underpinning` | Mini kazık, bina altı güçlendirme, blog | Evet | İçerik/SEO | Hayır | Aynen koru | Çok yüksek |
| B-07 | `src/lib/i18n.ts:165` ve teknik makaleler | `Data Logger`, `Torque` | CFA / makine veri takibi | Evet | Teknik özellik | Hayır | Aynen koru | Çok yüksek |
| B-08 | `src/lib/i18n.ts:382-388` | `soil mixing`, `grout`, `Grout Mixing Unit` | Metax pompa ve Soilmec santral kartları | Evet | Teknik ekipman adı/özelliği | Hayır | Aynen koru | Yüksek |
| B-09 | `src/lib/i18n.ts:253,263-265`, `src/lib/seo.ts:213` | `rotary`, `rig`, `front-the-wall` | Proje anlatımı ve Casagrande teknik özelliği | Evet | Teknik özellik | Hayır | Aynen koru | Yüksek |
| B-10 | `src/lib/i18n.ts:122,269` | `mono`, `double`, `triple` | Jet grout sistem türleri | Evet | Teknik özellik | Hayır | Aynen koru | Çok yüksek |
| B-11 | `src/data/seo-articles.ts:159` | `Tremie Concrete for Deep Foundations` | Teknik kaynak/referans başlığı | Evet | Kaynak adı | Hayır | Kaynak başlığını aynen koru | Çok yüksek |
| B-12 | `src/data/knowledge.ts:1439` | `Ground Improvement: Methods, Modification Techniques, and Engineering Solutions` | Teknik kaynak/referans başlığı | Evet | Kaynak adı | Hayır | Kaynak başlığını aynen koru | Çok yüksek |

## 5. C sınıfı — korunacak marka ve özel isimler

| No | Dosya ve satır(lar) | Metin | Sayfa veya bileşen | Teknik terim mi? | Arayüz metni mi? | Değiştirilmeli mi? | Öneri | Güven |
|---:|---|---|---|---|---|---|---|---|
| C-01 | `src/components/Navbar.tsx:37,43-44` | `YER6`, `YER6 Geotechnical` | Navbar marka alanı | Hayır | Marka | Hayır | Aynen koru | Çok yüksek |
| C-02 | `src/components/Navbar.tsx:67-72,140-145`, `src/components/FloatingCalculator.tsx:625,830` | `YER6 AI` | Navbar ve hesaplayıcı | Hayır | Ürün/marka adı | Hayır | Aynen koru; `apps/yer6-ai/**` kapsam dışı | Çok yüksek |
| C-03 | `src/lib/i18n.ts:323-388`, `src/lib/seo.ts:180-238` | `BAUER`, `Soilmec`, `Metax`, `MDT`, `Cummins`, `Casagrande`, `XCMG`, model ve ürün adları | Makine parkuru | Hayır | Marka/model | Hayır | Aynen koru | Çok yüksek |
| C-04 | `src/lib/i18n.ts:479,487-500`, `src/lib/siteConfig.ts:15-19` | `WhatsApp` | İletişim ve teklif formları | Hayır | Marka | Hayır | Aynen koru | Çok yüksek |
| C-05 | `src/components/ShareLinks.tsx:9-12,32-39` | `Twitter`, `LinkedIn`, `Facebook` | Makale paylaşım bağlantıları | Hayır | Marka | Hayır | Aynen koru | Çok yüksek |
| C-06 | `src/app/contact/ContactContent.tsx:60-64,82`, `src/lib/siteConfig.ts:4-12`, `src/app/layout.tsx:36-98` | `Armut`, `Google Maps`, `Google Analytics`, `Search Console`, `Yandex`, `Open Graph`, `Schema.org` bağlamı | İletişim, doğrulama ve metadata | Hayır | Marka/standart/özel isim | Hayır | Aynen koru | Çok yüksek |

## 6. D sınıfı — manuel inceleme gerekli, değişmeden bırakılacak

| No | Dosya ve satır(lar) | İngilizce metin | Sayfa veya bileşen | Teknik terim mi? | Arayüz metni mi? | Değiştirilmeli mi? | Olası Türkçe karşılık | Güven |
|---:|---|---|---|---|---|---|---|---|
| D-01 | `src/components/PremiumLoader.tsx:43`, `src/components/FloatingCalculator.tsx:369` | `Ground Intelligence` / `GROUND INTELLIGENCE` | Tüm sayfalardaki açılış yükleyicisi ve indirilen fizibilite PDF'i | Kısmen marka sloganı olabilir | Evet | **Hayır; manuel marka kararı gerekli** | Marka sloganı değilse `Zemin Mühendisliği`; marka ifadesiyse aynen kalmalı | Orta |
| D-02 | `src/lib/i18n.ts:68,77,503` | `premium` / `Premium` | Hakkımızda metni, vizyon metni ve footer sloganı | Hayır | Pazarlama metni | **Hayır; kasıtlı marka dili olabilir** | Marka dili değilse `üst düzey` veya `nitelikli`; onay olmadan değiştirilmemeli | Orta |

## 7. Özellikle doğrulanan noktalar

- `Frequently Asked Questions`, `Table of Contents`, `Published`, `Updated`, `Read more`, `Copy link`, `Page Not Found` ve benzeri değerler İngilizce locale bloğunda doğru yerde bulunuyor; Türkçe locale karşılıkları mevcut ve İngilizce/AR locale içeriği hata sayılmadı.
- Türkçe genel teknik uyarı zaten Türkçedir: `src/lib/i18n.ts:470`. İngilizce uyarı yalnızca İngilizce locale içindedir: `src/lib/i18n.ts:999`. Bu nedenle uyarı metninde A sınıfı hata yoktur.
- Türkçe 404 metinleri `src/lib/i18n.ts:524-526`, paylaşım metinleri `src/lib/i18n.ts:529-531`, bilgi merkezi başlıkları `src/lib/i18n.ts:454-470` içinde Türkçedir.
- Türkçe sayfalardaki açık İngilizce kalıntıların çoğu görünür metin değil, ekran okuyucuya sunulan ortak `aria-label` sabitleridir. Bunlar erişilebilirlik açısından gerçek arayüz metni kabul edilmiştir.
- `Ground Intelligence` görünür İngilizce metindir ve üretim çıktısında 308 HTML dosyasına yayılır; ancak iki ayrı yerde tutarlı marka sloganı gibi kullanıldığı için güvenli davranış gereği D sınıfında bırakılmıştır.
- JSON-LD içindeki `@context`, `@type`, schema property adları, Open Graph/Twitter metadata protokol alanları ve kod içi İngilizce tanımlayıcılar kullanıcı arayüzü çeviri hatası değildir.

## 8. Uygulanan A sınıfı düzeltmeler

- Ortak Navbar, Footer, proje kartı ve önce/sonra bileşenindeki erişilebilirlik etiketleri TR / EN / AR locale sözlüğüne bağlandı.
- Mobil menü etiketi açık/kapalı durumuna göre yerelleştirildi.
- Bilgi Merkezi makalelerinde mevcut tarih verisine dokunulmadan `tr-TR`, `en-GB` ve Gregoryen `ar-EG` sunumu uygulandı; saat dilimi `Europe/Istanbul` olarak sabitlendi.
- Mevcut okuma süresi verisi değiştirilmeden Türkçede `{n} dakika okuma süresi`, İngilizcede `{n} min read`, Arapçada `{n} دقيقة قراءة` biçiminde sunuldu.
- B, C ve D sınıfındaki ifadeler değiştirilmedi. Teknik terimler, marka/model adları ve manuel karar gerektiren pazarlama ifadeleri korundu.

## 9. Değişen dosyalar

- `src/lib/i18n.ts`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/ProjectCard.tsx`
- `src/components/BeforeAfter.tsx`
- `src/app/knowledge/[slug]/KnowledgeArticleContent.tsx`
- `scripts/content-check.mjs` — yapısal koruma testi yeni locale anahtarına uyarlandı
- `docs/YER6-TR-ENGLISH-STRING-AUDIT.md`

CSS, layout, grid, spacing, renk, font, animasyon, responsive breakpoint, rota, URL, görsel, sayfa sırası, içerik bölümü, metadata veya SEO içeriği değiştirilmedi. Çalışma ağacında denetimden önce bulunan kullanıcı değişiklikleri bu çalışmanın parçası değildir ve değiştirilmedi.

## 10. Test ve koruma kapıları

| Kontrol | Sonuç |
|---|---|
| `npm run typecheck` | Başarılı |
| `npm run earthquake:test` | Başarılı |
| `npm run content:test` | Başarılı |
| `npm run build` | Başarılı — Next.js 16.2.9, 314 rota, 310 HTML |
| `npm run seo:test` | Başarılı — canonical, hreflang, Open Graph, Twitter ve schema kontrolleri yeşil |
| Lint | Projede ayrı lint komutu tanımlı değil; çalıştırılmadı |
| Unit test | Projede ayrı unit test komutu tanımlı değil; çalıştırılmadı |
| Kırık iç bağlantı taraması | Başarılı — 15.023 iç bağlantı, 0 kırık |
| JSON-LD doğrulaması | Başarılı — 623 blok, 0 geçersiz |
| Sitemap doğrulaması | Başarılı — 308 URL, 0 kırık |
| Yerel rota testi | Başarılı — ana sayfa, Blog, Bilgi Merkezi, 5 makale, 3 hizmet, 3 şehir `200`; bilinmeyen rota `404` |
| TR / EN / AR smoke testi | Başarılı — locale, tarih, okuma süresi ve erişilebilirlik etiketleri doğru |
| Mobil görünüm | Başarılı — 390×844, yatay taşma yok, mobil menü çalışıyor |
| Masaüstü görünüm | Başarılı — 1280×720 ve 1440×1000, yatay taşma yok |
| Canlı tarayıcı konsolu | 0 hata, 0 uyarı |
| Diff kontrolü | Başarılı — `git diff --check` temiz; CSS/layout/rota/görsel/SEO değişikliği yok |

Mevcut sitede bağımsız bir arama sayfası veya arama kontrolü bulunmadığından arama testi uygulanabilir değildir; kapsamı büyütmemek ve sayfa yapısını korumak için yeni arama özelliği eklenmedi.

## 11. Deployment ve canlı doğrulama

- Başlangıç commit'i: `7fe4fc7bdd5daa07902f9be0e29fdc78949a06e0`
- Yeni commit: Oluşturulmadı; deploy, kullanıcıya ait ilişkisiz çalışma ağacı değişikliklerini commit kapsamına almamak için mevcut çalışma ağacından yapıldı.
- Cloudflare projesi: `yer6zemin`
- Deploy sürümü: `fe00c92d-35b7-44ed-b80e-430317a3b8e4`
- Rollback sürümü: `ef7ab042-811a-4e0f-bf25-489a2e9442c3`
- HTTP → HTTPS: `301 Moved Permanently`, hedef `https://www.yer6zemin.com.tr/`
- Production domaini değiştirilmedi; yeni proje, domain, secret, binding veya environment oluşturulmadı.

Canlı kontrol edilen URL'ler:

- `https://www.yer6zemin.com.tr/`
- `https://www.yer6zemin.com.tr/knowledge/`
- `https://www.yer6zemin.com.tr/blog/`
- `https://www.yer6zemin.com.tr/knowledge/jet-grout-nedir/`
- `https://www.yer6zemin.com.tr/knowledge/jet-grout-uygulama-asamalari/`
- `https://www.yer6zemin.com.tr/knowledge/jet-grout-hangi-zeminlerde-uygulanir/`
- `https://www.yer6zemin.com.tr/knowledge/dsm-nedir/`
- `https://www.yer6zemin.com.tr/knowledge/fore-kazik-nedir/`
- `https://www.yer6zemin.com.tr/services/jet-grout/`
- `https://www.yer6zemin.com.tr/services/dsm/`
- `https://www.yer6zemin.com.tr/services/fore-kazik/`
- `https://www.yer6zemin.com.tr/sehirler/bursa-zemin-guclendirme/`
- `https://www.yer6zemin.com.tr/sehirler/ankara-zemin-guclendirme/`
- `https://www.yer6zemin.com.tr/sehirler/istanbul-zemin-guclendirme/`
- `https://www.yer6zemin.com.tr/does-not-exist/` — beklenen `404`

Canlı smoke testte Türkçe, İngilizce ve Arapça locale aynı makale üzerinde kullanıcı arayüzünden değiştirildi. Türkçe `ltr`, İngilizce `ltr`, Arapça `rtl` yönü; tarih/okuma süresi; Navbar, Footer ve mobil menü etiketleri doğrulandı.

Hiçbir içerik, rota, bileşen, schema, metadata, iç link, görsel veya teknik terim silinmedi. Sayfa yapısı ve mevcut SEO sinyalleri korunmuştur.

**YER6 TÜRKÇE ARAYÜZ DENETİMİ TAMAMLANDI — TEKNİK TERİMLER VE SAYFA YAPISI KORUNDU**
