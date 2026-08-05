# YER6 Arama Otoritesi Denetimi

Tarih: 5 Ağustos 2026
Kapsam: Yalnızca mevcut YER6 kurumsal web sitesi
İlk sürüm rollback hedefi: `a314b32b-e25e-4b61-98f9-0370266ff7df`
Kaynak commit: `b1b072cd3a52db3e8ea05c3caf9ee31a4325c32c`

## Yönetici özeti

Mevcut yapı güçlü bir teknik içerik tabanına sahiptir: 320 statik rota üretilmekte, 81 il ve 109 ilçe sayfası bulunmakta, ana hizmet sayfaları çok sayıda iç bağlantı almaktadır. Denetimde indekslenebilir sayfalarda bozuk canonical veya kırık iç bağlantı bulunmamıştır. Bununla birlikte Release 1 öncesinde düzeltilmesi gereken dört kesin sorun vardır:

1. `/services/zemin-guclendirme/` yanlışlıkla ikinci bir CFA sayfası olarak yayınlanmaktadır. Bu sayfa hem `/services/cfa-kazik/` ile çakışmakta hem de “zemin güçlendirme” ana sorgusunu sahipsiz bırakmaktadır.
2. Sitemap 314 URL kaydı üretmekte, ancak yalnızca 309 URL benzersizdir. Beş ilçe URL'si iki kez yazılmaktadır.
3. `/sehirler/` ve `/knowledge/deprem/` sayfaları site içinde bağlantısız kalmıştır.
4. Fore kazık hesaplayıcısında santimetre cinsinden girilen çap metre olarak işlenmektedir. Varsayılan değerlerle yaklaşık `11.943.078,6 m³` beton sonucu üretmesi kritik bir birim hatasıdır.

Release 1; bu kesin sorunları, ana hizmet merkezi sahipliğini ve kontrollü iç bağlantıları ele alacaktır. Yeni rota, yeni tasarım, yeni hesaplama aracı, toplu şehir metni veya görsel değişikliği yapılmayacaktır.

## Koruma sınırları

- Header, navigasyon, footer yerleşimi, grid, kart, renk, font, spacing, animasyon ve breakpoint'ler korunacaktır.
- Mevcut URL'ler ve rota sıralaması değiştirilmeyecektir.
- Hiçbir hizmet, proje, şehir, makale, görsel, schema veya metadata kaldırılmayacaktır.
- Teknik terimler korunacaktır: Jet Grout, DSM, Deep Soil Mixing, CFA, SPT, CPT/CPTu, UCS, PIT, CSL, tremie, casing, auger, Kelly bar ve diğer mevcut mühendislik terimleri.
- Başka uygulama ve repolar kapsam dışıdır.

## Teknik envanter

| Varlık | Sayı | Bulgular |
|---|---:|---|
| Next.js statik rota | 320 | Production build başarılı |
| Üretilen HTML | 316 | 404/doğrulama dosyaları dışında metadata tam |
| Sitemap kaydı | 314 | 309 benzersiz, 5 tekrar |
| Hizmet detay rotası | 18 | 3 rota sahiplik/bağlantı açısından öncelikli |
| Bilgi Merkezi makalesi | 73 | Ek olarak `/knowledge/deprem/` merkezi var |
| İl sayfası | 81 | Türkiye'nin tüm illeri mevcut |
| İlçe sayfası | 109 | 5 yinelenen slug kaydı sitemap'i etkiliyor |
| Proje sayfası | 11 | Release 4'te kanıt/sınıflandırma denetimi önerildi |
| Hesaplama aracı | 5 | 5 planlı araç Release 2'ye bırakıldı |
| Kırık iç bağlantı | 0 | Build çıktısında tarandı |
| Yanlış indexed canonical | 0 | İndekslenebilir sayfalarda self-canonical doğru |
| Bağlantısız içerik rotası | 2 | `/sehirler/`, `/knowledge/deprem/` |

## Sitemap ve indekslenebilirlik

Yinelenen URL'ler:

- `/sehirler/sakarya-serdivan-zemin-guclendirme/`
- `/sehirler/sakarya-erenler-zemin-guclendirme/`
- `/sehirler/gaziantep-sehitkamil-zemin-guclendirme/`
- `/sehirler/adana-ceyhan-zemin-guclendirme/`
- `/sehirler/denizli-pamukkale-zemin-guclendirme/`

Bu kayıtlar ayrı sayfalar değildir; aynı slug'ın veri dizisinde iki kez bulunmasından kaynaklanır. Release 1'de ilk kayıt korunarak veri kaynağında tekilleştirme yapılacaktır. Böylece rota veya içerik silinmeden sitemap tekrarı kalkacaktır.

`404` ve arama motoru doğrulama dosyalarının title/canonical eksikliği indeksleme sorunu sayılmamıştır; bunlar içerik sayfası değildir. İndekslenebilir sayfalarda yanlış canonical veya kırık bağlantı bulunmamıştır.

## Hizmet merkezi denetimi

| Hedef URL | Kelime | Gelen iç link | Durum | Release 1 kararı |
|---|---:|---:|---|---|
| `/services/jet-grout/` | 1.092 | 488 | Güçlü ana merkez | Koru, destek içerik sahipliğini raporla |
| `/services/dsm/` | 735 | 483 | Ana DSM merkezi | Ana ticari hedef olarak koru |
| `/services/fore-kazik/` | 900 | 502 | Güçlü ana merkez | Koru |
| `/services/zemin-iyilestirme/` | 868 | 179 | Güçlü üst merkez | Deprem merkezine doğal bağlantı ekle |
| `/services/mini-kazik/` | 667 | 374 | Ana mini/mikro kazık merkezi | Koru |
| `/services/ankraj/` | 647 | 363 | Ana ankraj merkezi | Koru |
| `/services/iksa-sistemleri/` | 683 | 354 | Ana iksa merkezi | Koru |
| `/services/zemin-guclendirme/` | 860 | 2 | Yanlış CFA içeriği | Genel zemin güçlendirme merkezi olarak düzelt |
| `/services/cfa-kazik/` | 924 | 1 | Doğru içerik, zayıf bağlantı | CFA içeriğini ve teknik terimleri koru; benzersiz sözlük anahtarı ver |
| `/services/deep-soil-mixing/` | 787 | 1 | DSM ile sorgu çakışması riski | Teknik terim destek sayfası olarak `/services/dsm/` merkezine bağla |

Mevcut hizmet rota adları korunacaktır. Özellikle mevcut `/services/diafram-duvar/` slug'ının yazımı URL değişikliğine gerekçe yapılmayacaktır.

## Sorgu yamyamlaşması

Yüksek risk:

- `zemin güçlendirme`: `/services/zemin-guclendirme/` ile `/services/cfa-kazik/` aynı CFA niyetine sahip.
- `DSM / Deep Soil Mixing`: `/services/dsm/` ile `/services/deep-soil-mixing/` aynı ticari niyete yaklaşmaktadır.

Orta risk, Release 1'de içerik silmeden rol ayrımı yapılacak kümeler:

- `jet grout kalite kontrol`: `jet-grout-kalite-kontrol` ve `jet-grout-kalite-kontrol-rehberi`
- `kazık yükleme testleri`: `kazik-yukleme-testleri` ve `kazik-yukleme-testi-turleri`
- `zemin enjeksiyonu`: `zemin-enjeksiyonu-nedir` ve `zemin-enjeksiyonu-turleri`
- `püskürtme beton`: `puskurtme-beton-nedir` ve `puskurtme-beton-uygulamasi`
- Konum makaleleri ile şehir hizmet sayfaları: ticari yerel niyet şehir sayfasına, bilgilendirici niyet makaleye ait olmalıdır.

## İç bağlantı denetimi

Build çıktısında kırık bağlantı yoktur. Ancak iki gerçek içerik merkezi bağlantısızdır:

- `/sehirler/`: mevcut hizmet sayfası şehir bağlantıları bölümünden görünür ve doğal bir “Tüm şehirleri gör” bağlantısı almalıdır.
- `/knowledge/deprem/`: zemin iyileştirme hizmetindeki ilgili teknik içerik alanından bağlantı almalıdır.

Ana hizmet sayfalarına gelen yüzlerce bağlantı korunacaktır. Release 1'de toplu, anahtar kelime dolduran veya footer'a yüzlerce link ekleyen bir yöntem kullanılmayacaktır.

## Hesaplama araçları

Mevcut araçlar:

- `/hesaplama/jet-grout-maliyet-hesaplama/`
- `/hesaplama/fore-kazik-maliyet-hesaplama/`
- `/hesaplama/dsm-maliyet-hesaplama/`
- `/hesaplama/ankraj-maliyet-hesaplama/`
- `/hesaplama/mini-kazik-maliyet-hesaplama/`

Her araçta self-canonical, açıklayıcı içerik, form, WebApplication schema, FAQ, breadcrumb, paylaşım/PDF ve hizmet bağlantıları vardır. Release 2'de ele alınacak eksikler zemin enjeksiyonu, taş kolon, diyafram duvar, püskürtme beton ve ön iksa hesabıdır.

Fore kazık hesaplayıcısındaki cm→m hatası canlı sonucu güvenilmez yaptığı için yeni özellik değil, kritik regresyon olarak Release 1 güvenlik kapısına alınmıştır. Arayüz ve giriş birimi değişmeden yalnızca hesap motoruna gönderilen çap normalize edilecektir.

## Şehir ve bölge denetimi

- 81 il ve 109 ilçe sayfası mevcuttur.
- İl/ilçe sayfaları arasında 5 kelimelik shingle benzerliği medyanı `0,069`, p90 `0,373`, p95 `0,467`, p99 `0,515` olarak ölçülmüştür.
- `0,50` ve üzeri 409 çift vardır; en yüksek değer `0,681` ve en benzer çiftler ilçe şablonlarıdır.
- Yedi coğrafi bölge için ayrı merkez sayfası mevcut değildir. Bu sayfalar yalnızca benzersiz bölgesel zemin/deprem/lojistik değeri üretilebildiğinde Release 3'te değerlendirilmelidir.
- Sahte şube, sahte ofis veya doğrulanmamış yerel proje iddiası kullanılmamalıdır.

## Proje ve off-site bulguları

11 proje rotası mevcuttur. Proje sayfalarının “gerçek YER6 işi”, “temsili vaka” ve “teknik örnek” ayrımı Release 4'te kanıt dosyalarıyla denetlenmelidir; mevcut sayfalar Release 1'de yeniden etiketlenmeyecektir.

Off-site otorite çalışmaları teknik referans, gerçek müşteri değerlendirmesi, tedarikçi/üretici atfı, meslek kuruluşu ve proje basını üzerinden yürütülmelidir. Sahte yorum, sahte profil ve satın alınmış bağlantı önerilmemektedir.

## Release 1 uygulama sınırı

1. Zemin güçlendirme ve CFA sayfalarının sorgu sahipliğini düzeltmek.
2. DSM teknik terim varyantını ana DSM hizmet merkezine bağlamak.
3. İki bağlantısız merkezi mevcut bileşenlerin içinde doğal bağlantıyla erişilebilir yapmak.
4. Sitemap'teki beş yinelenen URL kaydını tekilleştirmek.
5. Fore kazık çap birimi regresyonunu düzeltmek ve kontrol eklemek.
6. Query-to-URL haritasını ve sonraki sürüm mimarilerini belgelemek.

Yeni sayfa, yeni tasarım, toplu içerik üretimi, yeni hesaplama aracı, şehir/bölge yayını, proje yeniden sınıflandırması ve off-site uygulama Release 1 kapsamı dışındadır.

## Release 1 öncesi güvenlik kapısı

- Production build başarılıdır: 320 rota.
- İndekslenebilir sayfalarda bozuk canonical: 0.
- Build iç bağlantı taramasında kırık bağlantı: 0.
- Mevcut çalışma ağacındaki kullanıcı değişiklikleri Release 1 commit'ine alınmayacaktır.
- Dağıtımdan önce typecheck, içerik kontrolleri, deprem veri kontrolü, production build, SEO testi, rota/bağlantı/schema/sitemap kontrolleri ve yerel görsel smoke test çalıştırılacaktır.
