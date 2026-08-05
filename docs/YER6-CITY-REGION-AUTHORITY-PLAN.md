# YER6 Şehir ve Bölge Otoritesi Planı

Tarih: 5 Ağustos 2026
Uygulama dönemi: Release 3

## Envanter

- 81 il sayfası: tüm Türkiye kapsanıyor.
- 109 ilçe sayfası.
- Toplam 190 şehir/ilçe içerik rotası.
- `/sehirler/` merkez sayfası mevcut, ancak denetim anında site içinde bağlantısız.
- Sitemap'te beş ilçe slug'ı iki kez yazılıyor; Release 1'de ilk veri korunarak tekilleştirilecek.

## Benzerlik ve kalite riski

Ana içerikte 5 kelimelik shingle karşılaştırması:

| Ölçüm | Değer |
|---|---:|
| Medyan | 0,069 |
| p90 | 0,373 |
| p95 | 0,467 |
| p99 | 0,515 |
| 0,50 ve üzeri çift | 409 |
| En yüksek benzerlik | 0,681 |

İl sayfaları genel olarak ayrışmaktadır. En yüksek benzerlikler ilçe şablonlarında görülmektedir. Bu sonuç toplu sayfa silmeyi veya `noindex` uygulamasını gerektirmez; Release 3'te benzersiz kanıt ve yerel mühendislik bağlamı ekleme önceliğini gösterir.

## Yerel sayfa kalite sözleşmesi

Her şehir/ilçe sayfası aşağıdaki kaynaklardan en az birkaçını kullanmalıdır:

- doğrulanabilir jeoloji ve zemin sınıfı bağlamı;
- AFAD/MTA/yerel kurum gibi kaynaklardan kanıtlanabilir deprem/zemin riski;
- bölgede yaygın yapı ve altyapı tipleri;
- makine erişimi, lojistik ve çalışma alanı kısıtları;
- uygun olabilecek yöntemlerin nedenleri ve sınırlamaları;
- gerçekten doğrulanmış YER6 projesi veya açıkça “temsili teknik senaryo” etiketi;
- ana hizmet ve ilgili bilgi içeriğine doğal bağlantı.

Sahte şube, sahte ekip, sahte referans, doğrulanmamış “bu ilde yaptık” iddiası veya yalnızca şehir adını değiştiren metin kullanılmamalıdır.

## Öncelikli 20 il

Release 3 veri önceliği; nüfus, sanayi, deprem riski, büyük altyapı ve mevcut arama talebi birlikte değerlendirilerek şu çekirdekte başlamalıdır:

İstanbul, Ankara, İzmir, Bursa, Kocaeli, Sakarya, Tekirdağ, Balıkesir, Çanakkale, Manisa, Denizli, Aydın, Muğla, Antalya, Adana, Mersin, Gaziantep, Konya, Kayseri ve Hatay.

Bu liste sıralama garantisi değildir. Search Console sorgu/gösterim verisi ile üç ayda bir güncellenmelidir.

## Yedi bölge merkezi için ihtiyaç analizi

| Bölge | Ayrı merkez potansiyeli | Benzersiz değer şartı | Release 3 kararı |
|---|---|---|---|
| Marmara | Yüksek | deprem, alüvyon, yoğun sanayi, dar saha lojistiği | Veri ve proje kanıtı varsa oluştur |
| Ege | Yüksek | graben yapısı, kıyı/alüvyon, turizm ve sanayi yapıları | Veri ve proje kanıtı varsa oluştur |
| Akdeniz | Orta-yüksek | kıyı zeminleri, yüksek yeraltı suyu, liman/turizm | Benzersiz rehber olarak değerlendir |
| İç Anadolu | Orta-yüksek | karasal zemin koşulları, Ankara/Konya sanayi-altyapı | Benzersiz rehber olarak değerlendir |
| Karadeniz | Yüksek | eğim, heyelan, yağış, erişim ve iksa | Güçlü teknik farklılaşma mümkün |
| Doğu Anadolu | Yüksek | yüksek deprem riski, topoğrafya, iklim/lojistik | Kaynak ve kanıtla oluştur |
| Güneydoğu Anadolu | Yüksek | deprem sonrası güçlendirme, sanayi, farklı zemin profilleri | Kaynak ve kanıtla oluştur |

Bölge sayfaları şehir sayfalarını kopyalamamalıdır. Bölge → öncelikli şehir → hizmet → makale ilişkisi kurulmalı; yüzlerce anahtar kelime linki içeren bir dizin oluşturulmamalıdır.

## İç bağlantı modeli

- `/sehirler/` → 81 il ve seçili ilçe kümeleri.
- Hizmet → yalnızca bağlamla ilgili sınırlı şehir bağlantıları + “Tüm şehirleri gör”.
- Şehir → en ilgili 3–6 hizmet, yerel risk rehberi ve doğrulanmış proje.
- Bölge → bölgedeki öncelikli iller ve bölgeye özgü yöntem rehberleri.
- Makale → yerel ticari CTA gerektiğinde ilgili şehir sayfası; aynı sorguyu hedefleyen tekrar başlık yok.

## Ölçüm

- İl ve ilçe bazında Search Console sorgu/URL eşleşmesi.
- “şehir + yöntem” gösterim, tıklama ve ortalama konum.
- Aynı sorguda birden fazla YER6 URL'sinin dönüşümlü görünmesi.
- Organik oturumdan teklif/WhatsApp/telefon dönüşümü.
- Şablon benzerliği, kaynak sayısı ve gerçek proje kanıtı oranı.

## Release sınırı

Release 1'de yeni şehir veya bölge rotası yayınlanmayacaktır. Yalnızca mevcut `/sehirler/` merkezinin bağlantısızlığı giderilecek ve yinelenen sitemap kayıtları tekilleştirilecektir.
