# YER6 Hesaplayıcı SEO Mimarisi

Tarih: 5 Ağustos 2026
Uygulama dönemi: Release 2 (kritik mevcut regresyon hariç)

## Mevcut durum

| Araç | URL | Arama niyeti | Mevcut teknik durum |
|---|---|---|---|
| Jet Grout maliyet/metraj | `/hesaplama/jet-grout-maliyet-hesaplama/` | Araç + maliyet araştırması | Yayında; self-canonical, WebApplication, FAQ |
| Fore kazık maliyet/metraj | `/hesaplama/fore-kazik-maliyet-hesaplama/` | Araç + beton/donatı/delgi | Yayında; çap birimi regresyonu var |
| DSM maliyet/metraj | `/hesaplama/dsm-maliyet-hesaplama/` | Araç + bağlayıcı/metraj | Yayında; self-canonical, WebApplication, FAQ |
| Ankraj maliyet/metraj | `/hesaplama/ankraj-maliyet-hesaplama/` | Araç + delgi/çelik | Yayında; self-canonical, WebApplication, FAQ |
| Mini/mikro kazık maliyet | `/hesaplama/mini-kazik-maliyet-hesaplama/` | Araç + metraj | Yayında; çap normalizasyonu kontrol edilmeli |

Merkez `/hesaplama/` altında beş araç listelenmektedir. Araçlarda görünür mühendislik açıklaması, form, sonuç, PDF, paylaşım, ilgili hizmet bağlantısı, breadcrumb, FAQ ve WebApplication schema vardır. Sayfa yapısı korunacaktır.

## Kritik mevcut regresyon

Fore kazık formunda çap `80 cm` olarak gösterildiği halde hesap motoru değeri `80 m` kabul etmektedir. Varsayılan 120 kazık × 18 m için doğru geometrik beton hacmi yaklaşık:

`π × (0,80 / 2)² × 18 × 120 = 1.085,7 m³`

Mevcut fire yaklaşımıyla sonuç yaklaşık `1.194,3 m³` olmalıdır; canlı sonuç `11.943.078,6 m³` düzeyindedir. Bu hata maliyet ve donatı çıktısını da büyütmektedir.

Release 1 güvenlik düzeltmesi:

- Kullanıcı arayüzü ve cm etiketi değişmeyecek.
- URL parametresindeki değer cm olarak kalacak.
- PDF/görünür giriş cm olarak kalacak.
- Yalnızca hesap motoruna aktarılan çap `cm / 100` ile metreye çevrilecek.
- Varsayılan fore kazık sonucu smoke test ile doğrulanacak.

## Release 2'de önerilen yeni araçlar

| Öncelik | Araç | Önerilen slug | Birincil çıktı |
|---:|---|---|---|
| 1 | Zemin enjeksiyonu ön metraj | `zemin-enjeksiyonu-maliyet-hesaplama` | delgi, grout hacmi, yaklaşık maliyet |
| 2 | Taş kolon ön metraj | `tas-kolon-maliyet-hesaplama` | kolon adedi, uzunluk, agrega hacmi |
| 3 | Diyafram duvar ön metraj | `diyafram-duvar-maliyet-hesaplama` | panel, beton, donatı, kazı hacmi |
| 4 | Püskürtme beton ön metraj | `puskurtme-beton-maliyet-hesaplama` | alan, kalınlık, beton hacmi, hasır |
| 5 | İksa ön boyutlandırma | `iksa-on-hesaplama` | çevre, kazı derinliği, ankraj/kaplama ön metrajı |

Bu URL'ler Release 1'de oluşturulmayacaktır. Yeni araçlar saha verisinin ve geoteknik tasarımın yerine geçmemeli; sonuç ekranında açık mühendislik sınırı ve teklif CTA'sı bulunmalıdır.

## Parametreli URL mimarisi

Mevcut statik export nedeniyle sorgu parametreli sonuçlar aynı HTML'i kullanır. Release 2 kuralı:

- Temiz araç URL'si indekslenebilir ve self-canonical olur.
- `?adet=...&cap=...` gibi parametreli URL'lerin canonical'ı temiz araç URL'si olarak kalır.
- Parametre kombinasyonları sitemap'e eklenmez.
- Sonuç paylaşımı parametreli URL ile yapılabilir; sunucu/edge katmanı destekliyorsa parametreli varyantlara `noindex,follow` eklenir.
- Google'ın canonical seçimini zorlayacak sahte ayrı sayfalar üretilmez.
- Parametre adları kalıcı, küçük harfli ve birimli olur; dahili hesap motoru her birimi SI sistemine normalize eder.

## İçerik ve schema sözleşmesi

Her araçta aşağıdakiler korunmalı veya sağlanmalıdır:

1. Benzersiz title, description, H1 ve self-canonical.
2. Araç ne hesaplar, hangi girdileri ister ve hangi varsayımları kullanır açıklaması.
3. Sonuçların teklif/proje hesabı olmadığına dair mühendislik uyarısı.
4. İlgili ana hizmete ve maliyet/metodoloji makalesine bağlantı.
5. `WebApplication` schema: name, description, applicationCategory, operatingSystem, offers.
6. Görünür sorularla eşleşen `FAQPage` schema.
7. `BreadcrumbList` ve kurum kimliğiyle tutarlı publisher.
8. Para birimi, tarih ve sayıların Türkçe locale sunumu.

## Test matrisi

| Test | Beklenti |
|---|---|
| Varsayılan fore kazık hacmi | Yaklaşık 1.194,3 m³ (fire dahil) |
| Geometrik çap ölçekleme | Çap 2 kat olduğunda hacim 4 kat |
| Sıfır/negatif giriş | Engellenir veya güvenli hata gösterir |
| Çok büyük giriş | UI donmaz, overflow oluşmaz |
| Query-param paylaşım | Form geri yüklenir, canonical temiz URL kalır |
| Mobil 390×844 | Yatay taşma yok |
| Desktop | Mevcut kart/form yapısı değişmez |
| Schema | JSON-LD parse edilir ve görünür içerikle eşleşir |
| Sitemap | Yalnızca temiz araç URL'leri içerir |

## Release sınırı

Release 1 yalnızca mevcut kritik birim regresyonunu düzeltir. Yeni hesaplayıcı, yeni rota, yeni tasarım, yeni bağımlılık veya sonuç mimarisi Release 2 onayı olmadan uygulanmaz.
