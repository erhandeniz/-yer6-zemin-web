# YER6 — HAFTALIK İŞ FIRSATI VE RAKİP İSTİHBARAT RAPORU

**Tarih:** 27 Ağustos 2026 (Perşembe)
**Kapsam:** 3 – 27 Ağustos 2026 (önceki rapordan bu yana geçen ~3,5 hafta)
**Önceki rapor:** `docs/istihbarat/2026-08-03-haftalik-istihbarat.md`

> ⚠️ **Tarama aralığı notu:** Önceki raporda bir sonraki taramanın 10 Ağustos'ta yapılması öngörülmüştü; arada tarama yapılmadı.
> Bu rapor 24 günlük bir pencereyi kapsıyor. Bu sürede **son başvuru tarihi geçmiş** fırsatlar var — Bölüm 1'de ayrıca işaretlendi.

**Uygulanan kurallar:** Hiçbir ihaleye başvuru veya teklif gönderilmedi. Hiçbir platformda hesap açılmadı.
Rakip metni kopyalanmadı. Site kodu değiştirilmedi, git commit/push/deploy yapılmadı.
`apps/yer6-ai` ve AURENZA'ya dokunulmadı. Bu rapor yalnızca tespit ve öneri içerir.

**Güven puanı ölçeği:**
🟢 **Doğrulanmış-resmî** — resmî ilan metni veya idarenin kendi sitesinden okundu
🟡 **Haber kaynaklı** — güvenilir haber kaynağı, resmî ilan metni doğrulanmadı
🔴 **Söylenti / tarih belirsiz** — teyit edilmedi, karar verilmeden önce doğrulanmalı

---

## 1) BU DÖNEM TESPİT EDİLEN İŞ VE İHALE FIRSATLARI

Toplam **9 fırsat** tespit edildi. Bunların **3'ü hâlâ açık**, 4'ü taşeronluk penceresi, 2'si kapanmış (emsal değeri var).

---

### 🥇 1. İzmir Büyükşehir Belediyesi — Ana Hizmet Binası Zemin ve Temel Etüdü
**Güven: 🟢 Doğrulanmış-resmî** (İKN ve ihale tarihi haber metninde ilan verisiyle birebir; ilan 25.08.2026'da yayımlandı)
**Durum: 🔵 AÇIK — son 19 gün**

| Alan | Bilgi |
|---|---|
| İKN | **2026/1554303** (hizmet alımı) |
| İdare | İzmir Büyükşehir Belediyesi |
| Şehir | İzmir / Konak — Ahmetağa Mah., 7559 ada 1 parsel |
| **İhale tarihi** | **15.09.2026 – 10:30**, açık ihale usulü, e-teklif (EKAP) |
| Kapsam | 670 m jeoteknik sondaj kuyusu · 20 m karotlu sondaj (kaya) · 60 m temel sondajı ve **enjeksiyon deliği** (alüvyon, gevşek zemin, sıkıştırılmış kil dolgu) · 300 SPT · 100 örselenmemiş numune · sismik kırılma, MASW, REMİ, SPAC, PS loglama · geçirgenlik, presiyometre, **CPTu** · ~2.900 m² oturma alanı için parsel bazlı jeoteknik etüt raporu |
| Süre | Yer tesliminden itibaren 75 takvim günü (sözleşmeden sonra en geç 15 gün içinde yer teslimi) |
| Yeterlik | Teklif bedelinin **en az %30'u** oranında iş deneyim belgesi. Benzer iş: *her türlü yapı için zemin ve temel etüt çalışması ve rapor hazırlama*. |
| Personel şartı | Saha koordinatörü + **en az 5 yıl deneyimli jeoloji mühendisi** + jeofizik mühendisi; her sondaj makinesi için bir sondör |
| Ceza | Saha koordinatörü bulunmayan her gün 50.000 TL; jeoloji mühendisi bulunmayan her sondaj günü 10.000 TL (+ kuyunun yeniden açılması) |
| Ödeme | Tek hakediş, avans yok, normal süre içinde fiyat farkı yok |
| Kaynak | [9 Eylül Gazetesi — ilan verisine dayalı haber](https://dokuzeylul.com/izmir-buyuksehir-belediyesinin-anahizmet-binasi-icin-ilk-adim-zemin-etudu-ihalesine-cikildi) |

**YER6 yöntem uygunluğu:**

| Yöntem | Uygunluk | Gerekçe |
|---|---|---|
| **Zemin etüdü** | **Çok yüksek** | İşin tamamı bu. YER6'nın `services/zemin-etudu` hizmet hattıyla birebir örtüşüyor. |
| Jet grout | Uygulanmaz | Bu bir hizmet (etüt) ihalesi, yapım değil. |
| DSM / fore kazık / ankraj-iksa | Uygulanmaz | Aynı gerekçe. |

> **Yorum:** Bu, **bu dönemin YER6'ya doğrudan katılım açısından en uygun işi.** Yapım işi değil, hizmet alımı — dolayısıyla ağır makine parkı ve büyük iş deneyim belgesi engeli yok; şart %30 iş deneyimi ve nitelikli personel.
> **Ama dikkat:** benzer iş tanımı "zemin ve temel etüdü + rapor" ile sınırlı. YER6'nın jet grout/fore kazık iş deneyim belgeleri bu tanıma **girmeyebilir**; kabul edilecek belge tipini EKAP'taki idari şartnameden okumadan teklif hazırlanmamalı.
> Ayrıca **jeofizik mühendisi** zorunluluğu var — kadroda yoksa alt yüklenici/dışarıdan görevlendirme çözümü şimdiden planlanmalı.
> İşin ikinci değeri: bu etüdü yapan firma, aynı parselde daha sonra çıkacak **temel/iyileştirme yapım işinin** zemin verisini birinci elden bilir.

---

### 🥈 2. Trabzon Tramvay Hattı 1. Etap — taşeronluk penceresi (8 yeraltı istasyonu)
**Güven: 🟢 Doğrulanmış-resmî** (sözleşme bedeli, tarih ve kapsam iki bağımsız kaynakta tutarlı)
**Durum: 🟠 Ana ihale kapandı — taşeronluk penceresi AÇILDI**

| Alan | Bilgi |
|---|---|
| İdare | AYGM (Altyapı Yatırımları Genel Müdürlüğü) |
| Şehir | Trabzon (Akyazı – Havalimanı, güzergâh Akçaabat–Yomra) |
| Yüklenici | **Kalyon İnşaat A.Ş. – Makyol İnşaat A.Ş. İş Ortaklığı** |
| Sözleşme bedeli | 33.283.061.061 TL (yaklaşık maliyet 38,26 milyar TL; en yüksek teklif 41,2 milyar TL) |
| **Sözleşme tarihi** | **01.07.2026** — yürürlüğe girdi |
| İşe başlama | Sözleşmeden itibaren 15 gün içinde → **saha Temmuz 2026 ortasında açıldı** |
| Süre | İşe başlamadan itibaren 1.440 takvim günü (4 yıl) |
| Kapsam | 16,5 km hat · **8'i yeraltı**, 8'i yerüstü toplam 16 durak · 1 depo-atölye binası · elektromekanik sistemler |
| Kaynak | [Haber61 — sözleşme detayı](https://www.haber61.net/trabzon/trabzon-rayli-sistemde-sozlesme-yururluge-girdi-tramvayin-ilk-etabi-basliyor/637143) · [RayHaber — ihale sonucu](https://rayhaber.com/2026/06/trabzon-rayli-sistem-ihalesini-kalyon-makyol-ortakligi-kazandi/) |

**YER6 yöntem uygunluğu:**

| Yöntem | Uygunluk | Gerekçe |
|---|---|---|
| **Ankraj / iksa** | **Çok yüksek** | 8 yeraltı istasyonu = şehir içi derin kazı; kazı destek sistemi zorunlu |
| **Fore kazık** | **Çok yüksek** | Kazı destek perdesi, istasyon ve depo-atölye kazıklı temeli |
| **Jet grout** | **Yüksek** | Trabzon sahil şeridi = yüksek yeraltı suyu; su kesme perdesi ve kazı tabanı tıkacı |
| DSM | Orta | Depo-atölye sahası ve dolgu altı iyileştirme |

> **Yorum:** Kapsam bakımından **YER6'nın hizmet setinin dördünü birden** kullanan iş bu. Trabzon sahil şeridinde 8 yeraltı istasyonu, geoteknik iş hacmi bakımından bu raporun en büyük kalemi.
> Ana ihale kapalı; giriş yolu **yalnızca Kalyon–Makyol ortaklığının zemin/temel işleri paketi.** Saha Temmuz ortasında açıldığından **temas penceresi şu anda açık ve hızla daralıyor** — ilk yıl kazı destek işleri yapılır.
> Aksiyon: iş deneyim belgesi + makine parkı listesi + personel yeterlilik dosyası hazırsa doğrudan yüklenici satın alma birimine gidilebilir.

---

### 🥉 3. Karayolları 13. Bölge — Elmacık ve Kayı Köprüleri (takip)
**Güven: 🟢 Doğrulanmış-resmî** (ilan parametreleri) / **🔴 sonuç doğrulanamadı**
**Durum: 🟠 İhale yapıldı, kazanan doğrulanamadı**

- İhale **14.08.2026 10:00**'da KGM 13. Bölge'de yapıldı (önceki raporun takip kalemi).
- **Bu oturumda kazanan yüklenici tespit edilemedi.** KGM ihale sorgu sayfası (`vatandas.kgm.gov.tr/Auction`) JavaScript formu; sorgu çalıştırılamadı.
- A-I Grubu köprü/viyadük iş deneyim şartı YER6'nın doğrudan katılımını zaten engelliyordu; değer **köprü ayak kazıklı temel paketinde taşeronluk**.
- Kaynak: [Yeni Alanya — ilan haberi](https://www.yenialanya.com/karayollari-13-bolge-iki-yeni-kopru-icin-ihaleye-cikiyor) · [KGM ihale sorgu](https://vatandas.kgm.gov.tr/Auction)

**Yöntem uygunluğu:** Fore kazık **yüksek** · Jet grout orta · DSM orta · Ankraj/iksa orta

> **Aksiyon:** Kazanan yüklenici KGM ihale sorgu ekranından veya EKAP'tan öğrenilip temas kurulmalı. 365 günlük iş, kazıklı temel ilk aşamada.

---

### 4. Isparta Belediyesi — Kirazlıtepe Zemin İyileştirme *(FIRSAT KAÇTI — emsal değeri yüksek)*
**Güven: 🟢 Doğrulanmış-resmî** (tam ilan metni okundu, Basın No ILN02524545)
**Durum: 🔴 KAPANDI — ihale 20.08.2026'da yapıldı**

| Alan | Bilgi |
|---|---|
| İKN | **2026/1431054** |
| İdare | Isparta Belediye Başkanlığı Fen İşleri Müdürlüğü |
| Şehir | Isparta / Merkez — Dere Mah. 213 ada, 2 parsel |
| İhale tarihi | **20.08.2026 – 11:30** (geçti) |
| **Kapsam** | **Ø80 cm çapında, C30/37 yerinde dökme betonarme FORE KAZIK ile zemin iyileştirme** |
| Süre | Yer tesliminden itibaren 100 takvim günü |
| Yeterlik | Son 15 yılda teklif bedelinin **%60'ından az olmamak üzere** iş deneyimi; benzer iş **B-III (Üstyapı/bina) grubu**; İnşaat Mühendisliği diploması benzer iş sayılıyor |
| Diğer | Anahtar teslim götürü bedel, yalnızca yerli istekli, %3 geçici teminat, sınır değer katsayısı N=1 (altındaki teklifler açıklama istenmeden reddedilir) |
| Kaynak | [Resmî ilan metni](https://www.uyan32.com/kirazlitepe-zemin-iyilestirme-yapim-isi) |

> ⚠️ **Bu, önceki raporun 1. maddesindeki uyarının fiilen gerçekleştiği durumdur.** İlan 06.08.2026'da yayımlandı, ihale 20.08.2026'daydı — **iki haftalık pencere kaçtı.**
> **Emsal değeri:** İş adı "zemin iyileştirme", benzer iş grubu **B-III (bina)** ama iş kalemi **saf fore kazık**. Yani B-III benzer iş şartı, fore kazık işi için YER6'yı dışlamıyor — İnşaat Mühendisliği diploması bile benzer iş sayılıyor. Bu, YER6'nın bu tip belediye işlerine **doğrudan istekli olarak girebileceğini** gösteriyor.
> **Bu ihalenin kaçmasının tek sebebi tarama sıklığı ve EKAP erişiminin olmayışıdır.** Bkz. Bölüm 4, madde 1.

---

### 5. Ankara Mamak Metrosu (Dikimevi–Natoyolu) — durum belirsiz, doğrulanmalı
**Güven: 🔴 Söylenti / tarih karışık**
**Durum: ⚪ DOĞRULANMALI**

- Arama sonuçlarında **birbiriyle çelişen tarihler** çıktı: ön yeterlik ilanı 2023, EBRD onayı Ocak 2025, inşaat başlangıcı Haziran 2025, ihalenin iptal edilip ikinci turda 187 milyon € daha düşük teklif alındığı yönünde haberler.
- **Bu oturumda projenin 2026 Ağustos itibarıyla hangi aşamada olduğu doğrulanamadı.** ABB ve EGO'nun kendi duyuru sayfaları okunmadı.
- 7,46 km, 8 istasyon, hafif raylı sistem.
- Kaynaklar: [ABB — Mamak metrosu ön yeterlik](https://www.ankara.bel.tr/haberler/mamak-metrosu-icin-on-yeterlilik-ihalesi-gerceklestirildi-16671) · [ABB — ihale süreci tekrar başladı](https://www.ankara.bel.tr/haberler/dikimevi-natoyolu-metro-projesi-nde-ihale-sureci-tekrar-basladi-17387) · [EGO — hat sayfası](https://www.ego.gov.tr/sayfa/2281/dikimevinatoyolu-ankaray-hafif-rayli-sistem-hatti)

**Yöntem uygunluğu (proje tipi bazında):** Ankraj/iksa **yüksek** · Fore kazık **yüksek** · Jet grout orta · DSM orta

> **Neden önemli:** 8 istasyon derin kazısı ve **YER6'nın kendi şehri.** Ancak hiçbir aksiyon alınmadan önce projenin gerçek durumu ABB/EGO duyurularından doğrulanmalı. **Bu maddedeki hiçbir tarih karar için kullanılmamalıdır.**

---

### 6. Şanlıurfa Hafif Raylı Sistem — Haliliye–Eyyübiye 1. Aşama
**Güven: 🟡 Haber kaynaklı** (kamulaştırma kararı için 🟢: Cumhurbaşkanı Kararı sayısı verilmiş)
**Durum: 🟠 Yapım ihalesi henüz ilan edilmedi — hazırlık aşaması ilerliyor**

- Proje: 6,2 km, 6 istasyon, günlük 64.000 yolcu hedefi.
- **Kontrollük/mühendislik/danışmanlık** ön yeterliği KİK Bülteni 19.03.2026'da ilan edildi; 11.05.2026'da 10 yeterli aday belirlendi, teklifler 22.06.2026'ya kadar toplandı.
- **08.08.2026 tarih ve 11575 sayılı Cumhurbaşkanı Kararı** ile Eyyübiye ilçesindeki güzergâh taşınmazları **acele kamulaştırma** kapsamına alındı (Eyüpkent, Ruha, Hayati Harrani, Eyyüp Nebi, Onikiler, Kendirci, Türk Meydanı, Sancaktar mahalleleri).
- Kaynaklar: [Memurlar.net — acele kamulaştırma](https://www.memurlar.net/haber/1174990/sanliurfa-da-rayli-sistem-1-asama-icin-acele-kamulastirma-8-mahallede-tasinmazlar-listeye-girdi.html) · [Yatırımlar — ön yeterlik ilanı](https://yatirimlar.com/haber/sanliurfa-buyuksehir-belediyesi-hafif-rayli-sistem-haliliye-eyyubiye-hatti-1-asama-kontrolluk-muhendislik-danismanlik-hizmeti-icin-on-yeterlik-ilani-yapti_248383) · [RayHaber — ön yeterlik sonucu](https://rayhaber.com/2026/05/sanliurfa-hafif-rayli-sistemi-danismanlik-ihalesi-on-yeterlik-sonucu/)

**Yöntem uygunluğu:** Ankraj/iksa **yüksek** · Fore kazık **yüksek** · Jet grout orta · DSM orta

> **Yorum:** Acele kamulaştırma kararı, **yapım ihalesinin yaklaştığının en güçlü işaretidir** — güzergâh hukuken temizleniyor. Yapım ilanı KİK Bülteni'nde izlenmeli. Bu, önceki raporun takip listesinden devreden bir kalem ve **bu dönemde somut ilerleme kaydetti.**

---

### 7. Hatay Şehir Hastanesi (1.000 yatak) — taşeronluk penceresi (devreden)
**Güven: 🟡 Haber kaynaklı**
**Durum: 🟠 Ana ihale kapalı — inşaat başlangıcı yaklaşıyor**

- İhale 05.06.2026'da Sağlık Bakanlığı SYGM tarafından yapıldı; 225.000 m², 1.000 yatak.
- İnşaatın **2026'nın son aylarında** başlaması planlanıyor — yani **önümüzdeki 1–3 ay içinde.**
- ⚠️ Haberlerde geçen "~323,5 milyon TL yaklaşık maliyet" rakamı 225.000 m² için tutarsız; **bu rakama güvenilmemeli.**
- **Bu oturumda kazanan yüklenicinin kesinleştiği doğrulanamadı.**
- Kaynaklar: [Yatırımlar](https://yatirimlar.com/haber/sygm-hatay-sehir-hastanesi-yapimi-icin-ihale-acti_250364) · [Investing.com — Akfen teklifi](https://tr.investing.com/news/global-filings/akfen-insaat-hatay-sehir-hastanesi-ihalesine-teklif-verdi-93CH-3934161)

**Yöntem uygunluğu:** Jet grout **yüksek** · DSM **yüksek** · Fore kazık **yüksek** · Ankraj/iksa **yüksek**
(Hatay alüvyonu + geniş temel alanı + derin bodrum; deprem bölgesinde performans şartları sıkı.)

> **Yorum:** Zemin işleri inşaatın ilk kalemidir. Temas için **doğru zaman şu an** — inşaat başladıktan sonra paket dağıtılmış olur.

---

### 8. Deprem bölgesi — devam eden yeniden inşa hacmi (bağlam)
**Güven: 🟢 Doğrulanmış-resmî** (SBB Yeniden İmar ve Gelişme Raporu) — **ancak spesifik açık ihale bulunamadı**
**Durum: ⚪ Bağlam bilgisi, doğrudan fırsat değil**

- Deprem bölgesi belediyelerinin acil altyapı ihtiyacı için **20,3 milyar TL** tutarında proje yürütülüyor.
- 2024 sonu itibarıyla enerji altyapısına ~18,8 milyar TL, yol onarımına ~7 milyar TL harcandı; demiryolu hatları onarımına 18,6 milyar TL harcandı, **2029'a kadar 34,2 milyar TL** planlanıyor.
- TOKİ Hatay Dikmece: 608 blokta 10.335 konut, 3,076 milyon m² şantiye, 7.000+ işçi, 24 saat çalışma.
- Kapsam illeri: Adana, Adıyaman, Diyarbakır, Gaziantep, Hatay, Kahramanmaraş, Kilis, Malatya, Osmaniye, Şanlıurfa, Elazığ.
- Taahhüt Haber'e göre Ağustos 2026'da bölgede ilan edilen işler ağırlıklı **konut + altyapı + çevre düzenlemesi + istinat duvarı** paketleri (ör. 06.08.2026 Malatya 17. Etap Yol Altyapı, Çevre Düzenlemesi ve İstinat Duvarı; 17.08.2026 Artvin Yusufeli 318 konut).
- Kaynaklar: [SBB — Yeniden İmar ve Gelişme Raporu (PDF)](https://www.sbb.gov.tr/wp-content/uploads/2025/02/Kahramanmaras-ve-Hatay-Depremleri-Yeniden-Imar-ve-Gelisme-Raporu.pdf) · [ÇŞB — TOKİ Hatay Dikmece](https://csb.gov.tr/deprem-bolgesinin-ikinci-buyuk-santiyesi-toki-hatay-dikmece-bakanlik-faaliyetleri-40407) · [Taahhüt Haber 6 Ağustos](https://taahhuthaber.com/taahhut-haberde-6-agustos-2026-persembe-edu-sbis/)

> **Dürüst değerlendirme:** Bu dönemde deprem bölgesinde **YER6'ya doğrudan uyan tek başına bir zemin iyileştirme ihalesi tespit edilemedi.** Zemin işleri konut ve altyapı paketlerinin içine gömülü ilerliyor. Giriş yolu ana yükleniciler üzerinden.

---

### 9. DSİ — bu dönemde zemin iyileştirme/enjeksiyon işi YOK
**Güven: 🟢 Doğrulanmış-resmî** (DSİ resmî ihale listesi doğrudan okundu)
**Durum: ⚪ Fırsat yok**

- DSİ Genel Müdürlüğü ihale listesindeki **en güncel kalemler** 14.08.2026 (servis aracı kiralama düzeltme ilanı) ve 31.07.2026 (servis aracı kiralama). 26.06.2026: Çorum Sungurlu dereleri ıslahı.
- **Ağustos 2026'da yayımlanmış hiçbir baraj, enjeksiyon perdesi veya zemin iyileştirme yapım ihalesi yok.**
- Bağlam: DSİ 20.05.2026'da Düzce Hasanlar Barajı Rehabilitasyonu için Uluova İnşaat ile 2.464.000.000 TL'lik sözleşme imzaladı (baraj rehabilitasyonu = tipik olarak enjeksiyon perdesi içerir — **taşeronluk açısından incelenmeye değer**).
- Kaynaklar: [DSİ ihale listesi](https://www.dsi.gov.tr/ihale/ihaleListe) · [Yatırımlar — Hasanlar Barajı sözleşmesi](https://yatirimlar.com/haber/dsi-duzce-hasanlar-baraji-rehabilitasyonu-yapim-isi-icin-sozlesme-imzaladi_251575)

---

## 2) RAKİP HAREKETLERİ VE İÇERİK BOŞLUKLARI

> Rakip metinleri kopyalanmadı. Aşağıdakiler yalnızca "hangi konu işlenmiş / YER6'da karşılığı var mı" analizidir.

### 2.1 İzlenen firmalarda tespit edilenler

| Firma | Bu dönemde tespit edilen | Güven |
|---|---|---|
| **Zetaş** | Yeni proje veya duyuru **tespit edilmedi.** Kurumsal sitesi eski teknolojide (`index.php?id=` yapısı), güncel proje akışı yok. LinkedIn sayfası aktif ama giriş duvarı arkasında. | 🟡 |
| **Kasktaş** | Bu dönemde yeni duyuru **tespit edilmedi.** | 🟡 |
| **Torem Zemin** | **En agresif içerik üreticisi.** "Devam eden projeler" sayfası aktif: İzmir Bayraklı konut (fore kazık + jet grout), Adana-Tarsus yol (fore kazık, kazıklı temel), İstanbul Büyükçekmece villa, **Gebze fabrika (zemin çivisi + öngermeli ankraj + püskürtme beton)**, İzmir Aliağa fabrika, Manisa Salihli kurutulmuş gıda fabrikası (donatısız fore kazık + enjeksiyon). Sayfa **05.04.2026'da güncellenmiş**. Başlıklarında "2026 fiyatları" kalıbını sistematik kullanıyor. | 🟢 |
| **Temeltaş** | Bu dönemde **tespit edilemedi** — aramalarda çıkmadı. Kayıt doğrulanmalı. | 🔴 |
| **Özbek Geoteknik** | **Ankara'nın en doğrudan rakibi.** Çankaya merkezli. Sitesinde **niyet odaklı ayrı landing sayfaları** var: "Jet Grout Firması Ankara", "Deep Soil Mixing Ankara", "Deep Soil Mixing Firması Ankara", "Fore Kazık Firması Ankara", "Fore Kazık Firmaları", "Jet Grout Firmaları", "Fore kazık maliyeti", "Zemin iyileştirme fore kazık". Hizmet setinde **PIT ve kazık yükleme testleri** de var. Site telif notu 2025. | 🟢 |
| **Barankaya** | Site aktif, "Derin temel uygulamaları" ve "Projelerimiz" sayfaları var. Bu dönemde **yeni duyuru tespit edilmedi.** | 🟡 |
| **Tekatemel** | **İkinci kez tespit edilemedi.** Önceki raporda da bulunamamıştı. **Bu kaydın doğruluğu şüpheli — izleme listesinden çıkarılması veya doğru unvanının bulunması gerekiyor.** | 🔴 |
| **Bursa Zemin Teknolojileri** | Bu dönemde **tespit edilemedi.** | 🔴 |

### 2.2 İzleme listesine eklenmesi önerilen firmalar

Aramalarda YER6'nın önünde veya yanında çıkan, mevcut listede olmayan firmalar:

**Ankara / doğrudan rakip:**

| Firma | Not |
|---|---|
| **Vena Grup** | Ankara merkezli, **kendi jet grout santralini ve makinelerini üretiyor.** Aramalarda "Türkiye geneli lider jet grout firması" konumlandırması. Makine üretimi + uygulama birleşimi ciddi rekabet avantajı. |
| **Turgut Zemin Mühendisliği** | Ankara; jet grout, fore kazık, mini kazık |
| **ENG Zemin** | Ankara fore kazık aramalarında üst sırada |
| **Emirli İnşaat** | Ankara jet grout aramasında görünüyor |
| **Jetgrout Santrali** | "Türkiye Jet Grout Firmaları" dizin sayfasıyla jenerik aramalarda üst sıralarda |

**Türkiye geneli / yeni tespit:**

| Firma | Not |
|---|---|
| **Eti Zemin** | Adana merkezli, 2005 kuruluş, **500+ proje**, İstanbul/Ankara/İzmir/Bursa + **Irak ve Gürcistan'da aktif.** Hem "jet grout firması" hem "istanbul iksa ankraj" aramalarında çıkıyor. Ciddi ölçekli rakip. |
| **STC Zemin** | Fore kazık, iksa kazık, **CFA**, jet grout, DSM — 25+ şehir listeliyor |
| **Altyapı Zemin İyileştirme A.Ş.** | Zemin iyileştirme + derin temel |
| **Foretek / Teknik Temel / İzay Zemin / Geomak** | DSM aramalarında üst sıralarda |
| **Mast Zemin / Akel Geoteknik / Işık Zemin / MapLine** | İstanbul iksa-ankraj kümesinde YER6'nın önünde |

### 2.3 İçerik boşluğu analizi

YER6'nın mevcut içerik envanteri: **66 bilgi merkezi makalesi + 15 SEO makalesi + 19 hizmet sayfası + şehir sayfaları.** Kapsam rakiplerin çok üzerinde. Buna rağmen tespit edilen boşluklar:

| Konu | YER6'da durum | Rakiplerde | Değerlendirme |
|---|---|---|---|
| **Açılı / eğik enjeksiyon ile bina altı güçlendirme** | ❌ "açılı enjeksiyon" ifadesi hiç geçmiyor; "eğik" yalnızca 1 dosyada | Doğrudan işleyen yok | **Boşluk hâlâ açık.** Önceki raporun 3(a) maddesi uygulanmamış. Ayırt edici teknik konu. |
| **CFA kazık** | ✅ `services/cfa-kazik` var | STC Zemin listeliyor | Kapalı |
| **PIT (kazık bütünlük deneyi)** | ✅ `kazik-yukleme-testleri` var | Özbek Geoteknik ayrı hizmet olarak sunuyor | ⚠️ YER6'da PIT **kazık yükleme testleri içine gömülü.** Ayrı bir arama niyeti olabilir — kontrol edilmeli. |
| **Jeogrid / donatılı zemin duvarı** | ❌ "jeogrid" hiç geçmiyor, "donatılı" 2 dosyada | Zetaş donatılı zemin duvarını ana hizmet olarak sunuyor | Boşluk — ama YER6'nın makine parkına uzak, öncelik düşük |
| **Dewatering / susuzlaştırma** | ⚠️ "susuzlaştırma" 1 dosyada, "dewatering" hiç yok | — | Küçük boşluk. Derin kazı işlerinde sık sorulan konu. |
| **Kuyu temel / keson** | ❌ Hiç yok | — | Niş; öncelik düşük |
| **Helisel (vidalı) kazık** | ❌ Hiç yok | — | Niş; öncelik düşük |
| **Kontrolsüz dolgu / eski dere yatağı zemini** | ⚠️ "dolgu" 8 dosyada, "dere yat" 3 dosyada geçiyor ama **başlık düzeyinde ayrı sayfa yok** | — | Önceki raporun 3(b) maddesi; kısmen kapalı, ayrı sayfa hâlâ yok |

**Rakiplerin YER6'da olmayan tek yapısal üstünlüğü:** *"Devam eden projeler"* sayfası (Torem'de var). YER6'nın projeler bölümü tamamlanmış işleri gösteriyor. Ancak **CLAUDE.md kural 3 gereği kanıtlanamayan proje yazılamaz** — bu ancak gerçek, doğrulanabilir devam eden iş varsa yapılabilir.

### 2.4 Sektörel gözlem

- Rakiplerin neredeyse tamamı başlıklarında **"2026 fiyatları"** kalıbını kullanıyor (Torem, Özbek, YER6 dahil). Bu kalıp artık ayırt edici değil, **eşik şart**.
- Aramalarda **Armut.com** ("En İyi 40 ... Firması") jenerik firma aramalarının neredeyse tamamında ilk sırayı alıyor. Bu, firma sitelerinin değil **dizin platformlarının** bu sorguları domine ettiğini gösteriyor.
- Bu dönemde sektörde **yeni makine yatırımı duyurusu tespit edilemedi** (Bauer/Soilmec/Casagrande Türkiye alımları dahil).

---

## 3) ARAMA SIRALAMASI DEĞİŞİMLERİ

### ⚠️ Ölçüm sınırı — önce bu okunmalı

Bu oturumdaki arama aracı **ABD bölgesinden** sorgu yapıyor. Sonuçlar **Türkiye'deki Google sonuçlarıyla birebir örtüşmez.**
Gerçek sıralama yalnızca **Google Search Console**'dan okunabilir; bu oturumda erişilemedi (oturum açma gerekiyor, görev etkileşimsiz).
Aşağıdaki tablo **eğilim göstergesi**dir, kesin sıralama değildir. Önceki hafta aynı yöntemle ölçüldüğü için **karşılaştırma anlamlıdır.**

| Arama | 3 Ağustos | 27 Ağustos | Değişim |
|---|---|---|---|
| `jet grout zemin iyileştirme firması Türkiye` | İlk 8'de yok | **3. sıra** — `/services/jet-grout/` | 🟢 **BÜYÜK İYİLEŞME** |
| `ankara jet grout firması` | İlk 8'de yok ⚠️ | **3. sıra** — `/services/jet-grout/` | 🟢 **BÜYÜK İYİLEŞME** — önceki raporun en kritik bulgusu düzeldi |
| `mini kazık DSM zemin iyileştirme` | İlk 7'de yok | **4. sıra** — `/services/mini-kazik/` | 🟢 **İYİLEŞME** |
| `YER6 zemin güçlendirme Ankara` (marka) | 1.–2. sıra | **2. sıra** — `/blog/` (+ `/services/mini-kazik/`, `/services/jet-grout/` de ilk 5'te) | 🟢 Korunuyor |
| `zemin iyileştirme` (jenerik) | İlk 7'de yok | **İlk 9'da yok** | ⚪ Değişmedi — Çukurova Üni. ders notları, sanalsantiye, Onha, Emirli, Torem, Gökoz, USSAL |
| `fore kazık firması` | İlk 6'da yok | **İlk 6'da yok** | 🔴 Değişmedi — Armut (3 sonuç), ENG Zemin, insaatfirmalarim, imarjeoteknik |
| `istanbul zemin güçlendirme firması iksa ankraj` | İlk 8'de yok | **İlk 8'de yok** | 🔴 Değişmedi — zeminguclendirme.com.tr, MapLine, Mast, **Eti Zemin**, Torem, STC, Işık, Akel |

**Okunabilecek eğilim:**

- 🟢 **Jet grout kümesinde kırılma yaşandı.** YER6 hem Türkiye geneli hem **Ankara** jet grout aramalarında ilk 3'e girdi. Bu, önceki raporun *"en kritik bulgu"* olarak işaretlediği Ankara kaybının tersine döndüğü anlamına geliyor. **Search Console'dan doğrulanmalı.**
- 🟢 **Mini kazık kümesi de açıldı** — `/services/mini-kazik/` artık DSM aramasında görünüyor.
- 🔴 **`fore kazık firması` hâlâ kapalı.** Bu sorguyu **Armut** domine ediyor (3 ayrı sonuçla). Firma sitesiyle dizin platformuna karşı yarışmak zor; bu sorgu için ya uzun kuyruk (`fore kazık firması + şehir + fiyat`) ya da Armut profilinin kendisi düşünülmeli.
- 🔴 **İstanbul iksa/ankraj kümesi kapalı.** Sekiz rakip önde. YER6'nın bu kümede **içeriği var ama çerçevesi ticari değil**: `istanbul-depremi-zemin-etudu-ve-iksa-sistemleri` sayfası deprem/etüt çerçevesinde yazılmış; `jet-grout-firmasi-istanbul` ise yalnızca jet grout niyetini karşılıyor. **"İstanbul iksa ankraj firması" ticari niyetini karşılayan sayfa yok.** Yani boşluk konu boşluğu değil, **niyet boşluğu.**
- ⚪ **`zemin iyileştirme` jeneriği bilgi amaçlı sorgu** — üniversite ders notları ve ansiklopedik içerik domine ediyor. Ticari niyeti düşük; öncelik verilmemeli.

### Google yorum durumu

**Bu oturumda yine doğrulanamadı.** Google Business Profile paneli oturum açma gerektiriyor; görev etkileşimsiz çalıştığı için panele girilemedi.

Son bilinen değer (1 Ağustos 2026 raporu): **YER6 5,0 puan / 3 yorum.** Rakiplerin güncel yorum sayıları da doğrulanamadı.
Arama sonuçlarında Armut platformunun geoteknik firmaları için **ortalama 4,7 puan** verdiği ve platformda Ankara'da 40, İstanbul'da 155, Türkiye genelinde ~290 fore kazık firması listelendiği görüldü.

> **Bu kalem üçüncü kez otomatik olarak okunamadı.** Erhan'ın panele bir kez girip değeri rapora manuel yazması gerekiyor — aksi hâlde bu bölüm her hafta boş kalacak.

---

## 4) YER6 İÇİN ÖNERİLEN AKSİYONLAR

> Aşağıdakiler öneridir. Hiçbiri uygulanmadı; site kodu ve içerik değiştirilmedi.

**1. 🔴 EN ACİL — EKAP kaydı ve e-imza. Üçüncü haftadır açık.**
Bu dönemde **Isparta Kirazlıtepe (İKN 2026/1431054)** kaçtı — Ø80 fore kazık ile zemin iyileştirme, B-III benzer iş, İnşaat Mühendisliği diploması yeterli. YER6'nın **doğrudan girebileceği** bir işti. İlan 6 Ağustos, ihale 20 Ağustos.
Bu kayıp tarama sıklığından değil, **EKAP'ta hesap olmamasından** kaynaklandı: ihaleler ancak BİK ilanı yayımlayan yerel gazeteler üzerinden dolaylı görülebiliyor ve bu her zaman geç kalıyor.
**EKAP kaydı olmadan bu raporun 1. bölümü kalıcı olarak eksik kalır.**

**2. 🔵 15 Eylül'e kadar: İzmir Büyükşehir zemin etüdü ihalesini (İKN 2026/1554303) değerlendir.**
Bu dönemin **doğrudan katılıma en uygun işi.** Yapım değil hizmet alımı; %30 iş deneyimi eşiği görece düşük.
Karar öncesi EKAP'tan idari şartname indirilip iki şey netleştirilmeli:
   - (a) YER6'nın iş deneyim belgeleri "zemin ve temel etüdü + rapor" benzer iş tanımına giriyor mu?
   - (b) **Jeofizik mühendisi** ve 5 yıl deneyimli jeoloji mühendisi kadro şartı nasıl karşılanacak?

**3. 🟠 Trabzon Tramvay 1. Etap için Kalyon–Makyol ortaklığına taşeronluk dosyası gönder.**
8 yeraltı istasyonu = YER6'nın dört hizmetinin de kullanıldığı, bu raporun en büyük geoteknik iş hacmi. Saha Temmuz ortasında açıldı; **kazı destek işleri ilk yılda yapılır, pencere daralıyor.**
Aynı dosya **Hatay Şehir Hastanesi** (inşaat 2026 son çeyreğinde başlıyor) ve **KGM Elmacık/Kayı köprüleri** kazananı için de kullanılabilir.
Dosyanın içeriği: iş deneyim belgeleri, makine parkı listesi, personel yeterlilik, mali durum, ISO belgeleri, referans projeler. **Bu dosya önceki iki raporda da önerildi ve hâlâ açık.**

**4. 🟢 İki içerik boşluğunu kapat** — mevcut tasarım sistemi, kart yapısı ve URL kurgusu **hiç değiştirilmeden**, Bilgi Merkezi'ne iki yeni makale:
   - **(a) "Açılı (eğik) enjeksiyon ile bina altı zemin güçlendirme"** — yapıya girmeden komşu parselden uygulama. YER6'da bu ifade **hiç geçmiyor**, hiçbir rakipte de derinlemesine yok. **Önceki raporda önerildi, uygulanmadı.**
   - **(b) İstanbul iksa/ankraj için ticari niyet sayfası** — bu kümede sekiz rakip YER6'nın önünde. YER6'da konu var ama **çerçeve yanlış**: `istanbul-depremi-zemin-etudu-ve-iksa-sistemleri` deprem/etüt anlatımı, `jet-grout-firmasi-istanbul` yalnızca jet grout. Eksik olan, `jet-grout-firmasi-istanbul` ile aynı kalıpta bir **"İstanbul iksa ve ankraj uygulamaları"** sayfası. Bu, arama tarafında ölçülen en net eksiklik.
   *(Not: mevcut iki sayfa silinmeyecek, kısaltılmayacak, URL'si değiştirilmeyecek — yeni sayfa eklenecek.)*

   *Deprem tahmini yapılmayacak, korku dili kullanılmayacak, rakip metni kopyalanmayacak.*

**5. 🟢 İzleme listesini düzelt.**
   - **Ekle (Ankara, doğrudan rakip):** Vena Grup *(kendi jet grout santralini üretiyor — en dikkat çekici bulgu)*, Turgut Zemin, ENG Zemin, Emirli
   - **Ekle (Türkiye geneli):** **Eti Zemin** *(500+ proje, Irak + Gürcistan, hem jet grout hem iksa aramalarında görünüyor)*, STC Zemin, Altyapı Zemin İyileştirme A.Ş.
   - **Çıkar veya doğrula:** **Tekatemel** ve **Bursa Zemin Teknolojileri** — iki tarama üst üste hiçbir aramada bulunamadı. Unvanları yanlış kayıtlı olabilir.

---

## 5) ERİŞİLEMEYEN KAYNAKLAR

| Kaynak | Sebep | Sonuç |
|---|---|---|
| **EKAP ihale arama** (ekap.kik.gov.tr) | Kayıt ve oturum açma gerektiriyor | **En büyük kapsam boşluğu.** İhaleler yalnızca BİK ilanı yayımlayan gazeteler ve idare siteleri üzerinden **dolaylı** bulunabildi. Isparta işi bu yüzden geç görüldü. |
| **Resmî Gazete ilan sayfaları** (20260822-3, 20260824-3) | Sayfa boş döndü (muhtemelen JS ile yükleniyor) | Ağustos ilanları doğrudan okunamadı |
| **ilan.gov.tr ihale listesi** | Sayfa boş döndü (JS ile yükleniyor) | BİK ilanları toplu taranamadı |
| **KGM ihale sorgu** (vatandas.kgm.gov.tr/Auction) | JavaScript formu; sorgu çalıştırılamadı | Elmacık/Kayı köprü ihalesinin **kazananı öğrenilemedi** |
| **ihaledanismani.com günlük EKAP listeleri** | Sayfa boş döndü | Günlük ilan akışı okunamadı |
| **Google Business Profile paneli** | Oturum açma gerektiriyor; görev etkileşimsiz | Yorum sayısı **üçüncü kez** güncellenemedi |
| **Google Search Console** | Aynı sebep | Gerçek Türkiye sıralamaları okunamadı; Bölüm 3 ABD bölgesinden ve yaklaşıktır |
| **LinkedIn** | Giriş duvarı | Zetaş, Kasktaş ve diğerlerinin paylaşımları, makine yatırımı duyuruları okunamadı |
| **ABB / EGO Mamak metrosu duyuruları** | Bu oturumda doğrudan okunmadı | Projenin **2026 Ağustos durumu belirsiz** (Bölüm 1, madde 5) |
| **TED (ted.europa.eu)** | Bu oturumda sorgulanmadı — öncelik yurt içine verildi | AB ihaleleri taranmadı |
| **Dünya Bankası / EBRD proje portalları** | ECEPP ve WB portalı doğrudan sorgulanmadı; yalnızca arama üzerinden bakıldı | Türkiye'de 2026'da açık, YER6'ya uygun spesifik bir EBRD/WB geoteknik ihalesi **tespit edilemedi.** DSİ üzerinden dolaylı bilgi: TWCEIP, TIMP, TIMP2, TFDMP, TULIP ve AIIB-TWECRP programları aktif. |

---

## EK — ÇALIŞMA KAYDI

**Değiştirilen dosyalar:** Yalnızca bu rapor (`docs/istihbarat/2026-08-27-haftalik-istihbarat.md`).
**Site kodu, içerik dosyaları, rotalar:** Dokunulmadı. Yalnızca içerik envanteri **okundu** (`src/data/knowledge.ts`, `src/data/seo-articles.ts`, `src/lib/content.ts`, `src/lib/cityContent.ts`) — boşluk analizi için.
**Git:** commit / push / deploy yapılmadı.
**`apps/yer6-ai` ve AURENZA:** Dokunulmadı.
**İhale/platform işlemi:** Hiçbir ihaleye başvuru veya teklif gönderilmedi, hiçbir platformda hesap açılmadı.

**Doğrulama adımı:** Rapor yazıldıktan sonra iddialar kod tabanına karşı kontrol edildi. **Bir hata bulundu ve düzeltildi:** taslakta "İstanbul iksa/ankraj için sayfa yok" yazıyordu; `src/data/knowledge.ts` içinde `istanbul-depremi-zemin-etudu-ve-iksa-sistemleri` sayfası **mevcut**. Bulgu, "konu boşluğu" yerine "ticari niyet boşluğu" olarak düzeltildi (Bölüm 3 ve Bölüm 4/4-b).

⚠️ **Bilgi notu — repo durumu:** `git status` çalıştırıldığında bu görevden **bağımsız** şu değişiklikler görüldü:
`gsc-index-queue.txt` (değiştirilmiş), `.claude/settings.local.json` (takip edilmeyen), `docs/arastirma/2026-08-27-gunluk-rapor.md` (takip edilmeyen — başka bir görevin çıktısı).
**Bunlar bu görev tarafından oluşturulmadı, değiştirilmedi, silinmedi.** Bilginize sunulur.
Önceki raporda (3 Ağustos) listelenen commit edilmemiş kaynak kodu değişiklikleri (`Navbar.tsx`, `Footer.tsx`, `i18n.ts` vb.) **artık görünmüyor** — arada commit edilmiş olmalı.

---

*Bir sonraki tarama: 3 Eylül 2026 Perşembe.*
*Takip edilecekler: **İzmir İKN 2026/1554303 → 15.09.2026** · Isparta İKN 2026/1431054 sonucu · KGM Elmacık/Kayı kazananı · Şanlıurfa HRS yapım ihale ilanı (KİK Bülteni) · Hatay Şehir Hastanesi yüklenici ve inşaat başlangıcı · Trabzon Kalyon–Makyol zemin işleri paketi · Ankara Mamak metrosu gerçek durumu (ABB/EGO) · DSİ Hasanlar Barajı enjeksiyon paketi.*
