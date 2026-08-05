# YER6 Sorgu → URL Haritası

Tarih: 5 Ağustos 2026
İlke: Her ana sorgu kümesinin tek bir birincil sahibi vardır. Teknik makaleler, hesaplayıcılar, şehir ve proje sayfaları bu sahibi destekler; aynı ticari sorgu için yarışmaz.

## Ana harita

| Sorgu kümesi | Niyet | Birincil URL | Destekleyen mevcut URL/tür | Risk | Karar |
|---|---|---|---|---|---|
| zemin güçlendirme | Ticari/genel | `/services/zemin-guclendirme/` | zemin iyileştirme, yöntem hizmetleri | Kritik | Yanlış CFA içeriğini genel merkeze dönüştür |
| zemin iyileştirme | Ticari/genel | `/services/zemin-iyilestirme/` | `yer-alti-zemin-iyilestirme` rehberi | Orta | Hizmet ticari, rehber bilgilendirici rolü korusun |
| zemin güçlendirme firmaları | Ticari | `/services/zemin-guclendirme/` | `/services/` | Yüksek | Ana CTA/hizmet merkezi sahibi |
| jet grout / jet grouting | Ticari | `/services/jet-grout/` | teknik makaleler, projeler, şehirler | Düşük | Mevcut güçlü merkez korunacak |
| jet grout maliyeti | Ticari araştırma | `/knowledge/jet-grout-maliyeti/` | hesaplayıcı ve hizmet | Orta | Makale fiyat bileşenleri, araç hesap niyeti |
| jet grout hesaplama | Araç | `/hesaplama/jet-grout-maliyet-hesaplama/` | hizmet ve maliyet makalesi | Düşük | Araç sorgusunun sahibi |
| jet grout kalite kontrol | Bilgilendirici | `/knowledge/jet-grout-kalite-kontrol-rehberi/` | kısa kalite kontrol içeriği | Orta | Rehber üst kaynak; kısa içerik alt konu olmalı |
| jet grout Ankara/İstanbul | Yerel ticari | ilgili `/sehirler/...` | yerel bilgi makaleleri | Orta | Şehir sayfası ticari sahibi, makale bilgi sahibi |
| DSM | Ticari | `/services/dsm/` | `/services/deep-soil-mixing/`, makaleler | Yüksek | DSM ana merkez; uzun terim sayfası destekçi |
| Deep Soil Mixing | Teknik/ticari varyant | `/services/deep-soil-mixing/` | `/services/dsm/` | Yüksek | Teknik terimi koru, ana ticari DSM merkezine bağla |
| DSM maliyeti | Ticari araştırma | `/knowledge/dsm-maliyeti/` | DSM hesaplayıcı | Orta | Maliyet etkenleri makalede, hesap araçta |
| DSM hesaplama | Araç | `/hesaplama/dsm-maliyet-hesaplama/` | `/services/dsm/` | Düşük | Araç sahibi |
| fore kazık | Ticari | `/services/fore-kazik/` | makaleler, projeler, şehirler | Düşük | Mevcut güçlü merkez korunacak |
| fore kazık maliyeti | Ticari araştırma | `/knowledge/fore-kazik-maliyeti/` | hesaplayıcı | Orta | Fiyat bağlamı makalede |
| fore kazık hesaplama | Araç | `/hesaplama/fore-kazik-maliyet-hesaplama/` | hizmet | Düşük | Birim regresyonu Release 1'de düzeltilmeli |
| CFA kazık | Ticari | `/services/cfa-kazik/` | teknik makaleler | Kritik | Zemin güçlendirme sayfasından ayrıştır |
| kazık yükleme testleri | Ticari | `/services/kazik-yukleme-testleri/` | iki test makalesi | Orta | Hizmet uygulama sahibi; makaleler yöntem/tür sahibi |
| mini kazık | Ticari | `/services/mini-kazik/` | hesaplayıcı ve makaleler | Düşük | Ana merkez |
| mikro kazık | Ticari eş anlam | `/services/mini-kazik/` | mini kazık hesaplayıcı | Orta | Ayrı rota açmadan aynı merkezde karşıla |
| mini/mikro kazık hesaplama | Araç | `/hesaplama/mini-kazik-maliyet-hesaplama/` | hizmet | Düşük | Araç sahibi |
| ankraj | Ticari | `/services/ankraj/` | makaleler ve hesaplayıcı | Düşük | Ana merkez |
| ankraj hesabı/maliyeti | Araç | `/hesaplama/ankraj-maliyet-hesaplama/` | ankraj hizmeti | Düşük | Araç sahibi |
| iksa sistemleri | Ticari | `/services/iksa-sistemleri/` | ankraj, zemin çivisi, püskürtme beton | Düşük | Üst merkez |
| zemin çivisi / soil nailing | Ticari | `/services/zemin-civisi/` | iksa merkezi | Düşük | Teknik terim korunacak |
| püskürtme beton / shotcrete | Ticari | `/services/puskurtme-beton/` | iki makale | Orta | Hizmet ticari, makaleler tanım ve uygulama rolleri |
| diyafram duvar | Ticari | `/services/diafram-duvar/` | iksa merkezi | Orta | Mevcut URL değişmeden hedeflenmeli |
| taş kolon / stone column | Ticari | `/services/tas-kolon/` | bilgi içerikleri | Düşük | Ana hizmet sahibi |
| zemin enjeksiyonu | Bilgi/gelecek hizmet | `/knowledge/zemin-enjeksiyonu-nedir/` | türler makalesi | Orta | Mevcut hizmet rotası yok; Release 2/sonrası karar |
| temel güçlendirme | Ticari | `/services/zemin-guclendirme/` | bina altı Jet Grout | Orta | Genel merkez; özel bina altı yöntem ayrı kalır |
| bina altı Jet Grout | Ticari/özel | `/services/bina-alti-jet-grout/` | temel güçlendirme içerikleri | Düşük | Elektrikli/titreşimsiz özel niyet |
| sıvılaşma ve zemin iyileştirme | Bilgi→ticari | `/knowledge/deprem/` | zemin iyileştirme hizmeti | Orta | Deprem merkezi görünür iç link almalı |
| zemin etüdü | Ticari | `/services/zemin-etudu/` | SPT/CPT içerikleri | Düşük | Ana hizmet sahibi |
| geoteknik danışmanlık | Ticari | `/services/geoteknik-danismanlik/` | bilgi merkezi | Düşük | Ana hizmet sahibi |
| şehir + yöntem | Yerel ticari | ilgili `/sehirler/{slug}/` | hizmet ve yerel makaleler | Orta | Kanıta dayalı yerel içerik; sahte ofis yok |
| proje + yöntem | Kanıt/vaka | ilgili `/projects/{slug}/` | hizmet merkezi | Orta | Release 4'te gerçek/temsili ayrımı doğrulanmalı |
| geoteknik hesaplama araçları | Araç merkezi | `/hesaplama/` | 5 araç | Düşük | Release 2'de kapsam genişletilecek |

## İç bağlantı kuralı

1. Bilgilendirici makale → ilgili ana hizmet merkezi.
2. Maliyet makalesi → ilgili hesaplayıcı + hizmet merkezi.
3. Hesaplayıcı → ilgili hizmet + mühendislik uyarısı.
4. Şehir sayfası → yöntem hizmeti; hizmet sayfası → sınırlı sayıda öncelikli şehir + şehirler merkezi.
5. Proje → gerçekten uygulanan hizmet; hizmet → doğrulanmış ilgili proje.
6. Aynı niyette iki hizmet sayfası varsa teknik varyant ana merkeze bağlanır; mevcut URL silinmez ve canonical başka sayfaya zorlanmaz.

## Release 1'de uygulanacak sahiplik değişiklikleri

- `/services/zemin-guclendirme/`: “zemin güçlendirme” genel ticari sorgusunun sahibi.
- `/services/cfa-kazik/`: yalnızca CFA/Continuous Flight Auger uygulamasının sahibi.
- `/services/dsm/`: ana DSM ticari merkezi.
- `/services/deep-soil-mixing/`: İngilizce teknik terim ve yöntem açıklaması; DSM ana merkezini destekler.
- `/knowledge/deprem/`: deprem-sıvılaşma bilgi merkezi; zemin iyileştirme hizmetini destekler.
- `/sehirler/`: şehir kümelenmesinin merkezi; mevcut hizmet bileşeninden erişilir.

## Ertelenen kararlar

- Yeni hizmet rotaları, yeni hesaplayıcılar ve yedi bölge rotası Release 1'de açılmayacaktır.
- Makale birleştirme, redirect veya içerik silme yapılmayacaktır. Orta riskli kümeler Search Console sorgu/sayfa verisi ile ayrıca ölçülecektir.
- Şehir sayfalarında toplu metin değişimi Release 3'e; proje kanıt sınıflandırması Release 4'e bırakılmıştır.
