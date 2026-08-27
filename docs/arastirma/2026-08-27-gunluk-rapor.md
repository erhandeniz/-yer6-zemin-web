# Günlük Deprem ve Teknik Araştırma Raporu — 27 Ağustos 2026

Hazırlanma: 2026-08-27 22:45 TSİ (otomatik tarama)
Tarama penceresi: 2026-08-26 22:45 TSİ → 2026-08-27 22:45 TSİ
Durum: Bu rapordaki hiçbir içerik siteye yayımlanmamıştır. Tüm taslaklar onay kuyruğundadır.
Site kodu değiştirilmedi, git işlemi yapılmadı, deploy edilmedi.

> **BU TARAMANIN ÖNEMLİ SINIRLILIĞI**
> Bu oturumda AFAD, Kandilli, USGS ve EMSC'nin resmî sayfalarına **doğrudan erişilemedi.**
> Sebep teknik: çalışma ortamının ağ izin listesi (egress allowlist) bu alan adlarını
> engelliyor ("cowork-egress-blocked"). Tarayıcı köprüsü de bu oturumda bağlı değildi.
> Bu nedenle deprem verileri **ikincil kaynaklardan** (AFAD/Kandilli verisini aktaran
> Türk haber kuruluşları) derlenmiştir ve her kayıtta bu durum işaretlenmiştir.
> Engel aşılmaya çalışılmamıştır. Çözüm: Ayarlar → Capabilities içine
> `deprem.afad.gov.tr`, `koeri.boun.edu.tr`, `earthquake.usgs.gov`, `emsc-csem.org`
> alan adlarının eklenmesi. Detay: Bölüm 4.

---

## 1) Son 24 saatteki depremler (Türkiye ve yakın çevre)

### M4.0 ve üzeri: PENCERE İÇİNDE KAYIT YOK

Tarama penceresinde (26 Ağustos 22:45 – 27 Ağustos 22:45 TSİ) Türkiye ve yakın çevresinde
**M4.0 veya üzeri deprem bildirimi bulunamamıştır.**

Bu sonuç **doğrulama düzeyi düşüktür**: resmî kurum listelerine doğrudan erişilemediği için
AFAD/Kandilli verisini aktaran haber kaynaklarının gün özetlerine dayanır. Kesin doğrulama
için AFAD ve Kandilli listelerinin doğrudan görülmesi gerekir.

### Pencere içinde bildirilen en büyük olaylar (M4.0 altı)

Aşağıdaki kayıtlar **AFAD kaynaklı olarak aktarılmıştır**; doğrudan AFAD sayfasından
teyit edilememiştir. Derinlik bilgisi çoğu kayıtta aktarılmamıştır.

| Tarih-saat (TSİ) | Büyüklük | Derinlik | Yer | Kaynak kurum | Aktaran |
| --- | --- | --- | --- | --- | --- |
| 2026-08-27 08:33 | M 3.2 | 7,45 km | Akdeniz, Gazipaşa (Antalya) açıklarına ~160 km | AFAD | [CNN Türk](https://www.cnnturk.com/turkiye/deprem-son-dakika-27-agustos-bugun-deprem-mi-oldu-nerede-kac-siddetinde-27-agustos-2026-afad-ve-kandilli-rasathanesi-son-depremler-3459487) |
| 2026-08-27 (saat aktarılmadı) | M 3.2 | — | Akhisar (Manisa) | AFAD | [Sanayi Gazetesi](https://sanayigazetesi.com.tr/son-depremler-son-dakika-deprem-mi-oldu-az-once-deprem-mi-oldu-27-agustos-2026-afad-ve-kandilli-son-depremler/) |
| 2026-08-27 06:56 | M 3.0 | — | Ege Denizi, Dikili (İzmir) açıklarına ~12 km | AFAD | [World EDU Türkçe](https://turkce.world.edu/27-agustos-2026-afad-ve-kandilliden-guncel-deprem-kayitlari-istanbul-ankara-izmirde-buyuk-sarsinti-bildirimi-yok-66904/) |
| 2026-08-27 14:16 | M 2.6 | — | Marmara Denizi, Marmaraereğlisi (Tekirdağ) açıkları | AFAD | [World EDU Türkçe](https://turkce.world.edu/27-agustos-2026-afad-ve-kandilliden-guncel-deprem-kayitlari-istanbul-ankara-izmirde-buyuk-sarsinti-bildirimi-yok-66904/) |
| 2026-08-27 16:21 | M 1.8 | — | Malatya çevresi | AFAD | [World EDU Türkçe](https://turkce.world.edu/27-agustos-2026-afad-ve-kandilliden-guncel-deprem-kayitlari-istanbul-ankara-izmirde-buyuk-sarsinti-bildirimi-yok-66904/) |
| 2026-08-27 15:38 | M 1.5 | — | Kütahya çevresi | AFAD | [World EDU Türkçe](https://turkce.world.edu/27-agustos-2026-afad-ve-kandilliden-guncel-deprem-kayitlari-istanbul-ankara-izmirde-buyuk-sarsinti-bildirimi-yok-66904/) |
| 2026-08-27 14:53 | M 1.2 | — | Ege Denizi, Çandarlı Körfezi açıkları | AFAD | [World EDU Türkçe](https://turkce.world.edu/27-agustos-2026-afad-ve-kandilliden-guncel-deprem-kayitlari-istanbul-ankara-izmirde-buyuk-sarsinti-bildirimi-yok-66904/) |

İstanbul, Ankara ve İzmir merkezlerinde hissedilen büyük sarsıntı bildirimi yoktur.
Gün genelinde can veya mal kaybı ihbarı bildirilmemiştir.

### Pencere dışı — referans olay: Kayseri Pınarbaşı M4.1 (26 Ağustos 09:53 TSİ)

Bu olay tarama penceresinin **öncesindedir** (pencere 26 Ağustos 22:45'te başlar), ancak
son 48 saatin tek M4.0+ olayı ve hasar üretmiş olduğu için kayda geçirilmiştir.

**Kurumlar arası fark (gizlenmemiştir):**

| Kurum | Büyüklük | Derinlik | Konum |
| --- | --- | --- | --- |
| AFAD | **Mw 4.1** | 7 km | 38,7505 K – 36,54183 D, Pınarbaşı (Kayseri) |
| Kandilli (KRDAE) | **M 4.0** | — | Pınarbaşı (Kayseri) |

Bu fark ölçüm ağı, kullanılan ölçek ve çözüm yönteminden kaynaklanır; hata değildir.

Tarih-saat: 2026-08-26 09:53:43 TSİ
Bildirilen etki: Yukarıborandere köyünde bir evin duvarı kısmen yıkılmış, bazı evlerin
duvarlarında hafif çatlaklar oluşmuştur. AFAD ve ilgili birimler saha taraması başlatmıştır.
Kaynak: [Anadolu Ajansı](https://aa.com.tr/tr/gundem/kayseride-4-1-buyuklugunde-deprem/4037610) ·
[Habertürk Yerel](https://yerel-haberler.haberturk.com/kayseri-haberleri/kayserideki-depremde-bazi-evlerde-hasar-olustu-119255878)

> **Not:** Bu rapor deprem tahmini yapmaz. Gelecekte nerede/ne zaman deprem olacağına dair
> hiçbir ifade içermez ve içeremez. Yukarıdaki kayıtlar yalnızca gerçekleşmiş olayların
> kaydıdır.

---

## 2) Öne çıkan teknik yayınlar (özgün Türkçe özetler)

### 2.1 Caltrans Geoteknik El Kitabı — "Grouting" modülü (Ocak 2026)

| Alan | Bilgi |
| --- | --- |
| Yayıncı/kurum | California Department of Transportation (Caltrans), Geotechnical Services |
| Yayın tarihi | Ocak 2026 |
| Erişim tarihi | 2026-08-27 |
| Dil | İngilizce |
| Güvenilirlik | **Resmî kurum dokümanı** (eyalet karayolları idaresi tasarım el kitabı) |
| Kaynak URL | https://dot.ca.gov/-/media/dot-media/programs/engineering/documents/geotechnical-services/202601-gm-grouting-a11y.pdf |

**Özgün Türkçe özet:** Doküman enjeksiyon yöntemlerini dörde ayırıyor: konvansiyonel
(boşluk dolgu), kompaksiyon enjeksiyonu, jet grout ve permeasyon (nüfuz) enjeksiyonu.
Başarılı bir enjeksiyon projesi için dört şart sayılıyor — normalden **daha ayrıntılı**
zemin etüdü, açıkça tanımlanmış performans şartları, imalat sırasında gerçek zamanlı
izleme ve performansın doğrulanması.

Jet grout için verilen sayısal aralıklar: enjeksiyon basıncı 7.000 psi'ye kadar; kolon çapı
zemine ve yönteme göre yaklaşık 0,9–4,6 m; uygulama derinliği genellikle 30 m altında,
teorik sınır ~45 m. Üç sistem tanımlanıyor: tek akışkan (yalnız şerbet, 7.200 psi, kısmî
yer değiştirme), çift akışkan (hava mantosu içinde şerbet — daha büyük çap, daha düşük
dayanım), üç akışkan (yüksek basınçlı su + hava ile kazı, ayrı düşük basınçlı şerbet ile
dolgu). Spoil hacmi işlenen hacmin yaklaşık **%80'i** olarak veriliyor; plastik zeminlerde
daha yüksek. Yüksek plastisiteli killer ve lifli turba jet grout için önerilmiyor.

Doğrulama testleri listesi doğrudan uygulanabilir: CPT sondajları, yükleme deneyleri, karot
alma, RQD, şerbet numunelerinde basınç/kesme deneyleri, presiyometre, kolonlarda paker
(permeabilite) deneyi ve kolon çapı ölçümü.

Permeasyon enjeksiyonu için 200 nolu elekten geçen yüzdeye göre uygunluk tablosu:
%12 altı "kolay uygulanabilir", %12–15 "orta", %15–20 "sınırda", %20 üzeri "uygun değil".

**YER6 için önemi:** Sitedeki `jet-grout-kalite-kontrol`, `jet-grout-kolon-capi` ve
`zemin-enjeksiyonu-turleri` sayfalarında bugüne kadar üretici dokümanlarına dayanan
sayısal aralıklar, artık **resmî bir kamu idaresinin 2026 tarihli tasarım el kitabına**
atıfla verilebilir. Bu, otorite açısından ciddi bir kazanımdır.

---

### 2.2 Zhao, K. (2026) — "Deep Cement Mixing in Geotechnical Engineering: Applications, Developments, and Emerging Trends"

| Alan | Bilgi |
| --- | --- |
| Yayıncı | Springer — *Geotechnical and Geological Engineering*, Cilt 44, Sayı 3, Makale 158 |
| Yazar | Kai Zhao (Department of Earth and Planetary Sciences, The University of Hong Kong) |
| Yayın tarihi | Çevrimiçi 2 Mart 2026 (basılı sayı: Nisan 2026) |
| Erişim tarihi | 2026-08-27 |
| Dil | İngilizce |
| Güvenilirlik | **Hakemli yayın** — State-of-the-Art Review, açık erişim |
| DOI / URL | 10.1007/s10706-026-03673-x · https://link.springer.com/article/10.1007/s10706-026-03673-x |

**Özgün Türkçe özet:** DSM/DCM (derin çimento karıştırma) alanındaki güncel durumu
toparlayan bir derleme. Üç ana başlık altında ilerliyor: tasarım (DSM kolonlarının
stabilitesi ve taşıma kapasitesi), imalat (yöntemler ve ekipman) ve mühendislik
uygulamaları (vaka çalışmaları, kalite kontrol, performans izleme). Ayrıca deneysel model
deneyleri ve sayısal modellemedeki son gelişmeleri özetliyor. Yumuşak zeminlerin mekanik
özelliklerinin iyileştirilmesi vurgusu öne çıkıyor.

**YER6 için önemi:** `dsm-nedir`, `dsm-uygulama-ve-kalite-kontrol` ve
`dsm-karistirma-enerjisi-ve-dayanim-iliskisi` sayfaları için 2026 tarihli, açık erişimli
ve hakemli tek bir referans. "Derleme makale" olması, tek başına birçok kaynağa atıf
yerine geçmesini sağlar.

---

### 2.3 Earthquake Spectra, Şubat 2026 (Cilt 42, Sayı 1) — YER6'yı ilgilendiren makaleler

| Alan | Bilgi |
| --- | --- |
| Yayıncı | Earthquake Engineering Research Institute (EERI) / Wiley |
| Yayın tarihi | Şubat 2026 sayısı (duyuru 30 Mart 2026) |
| Erişim tarihi | 2026-08-27 |
| Dil | İngilizce |
| Güvenilirlik | **Hakemli yayın** — deprem mühendisliğinin referans dergisi |
| Kaynak URL | https://www.eeri.org/about-eeri/news/29830-earthquake-spectra-highlights-february-2026-volume-42-issue-1 |

Sayıdan YER6 iş alanına doğrudan değen dört başlık:

**(a) "Next-Generation Probabilistic Liquefaction Model Building at the Regional Scale"**
— Jonathan Schmidt, Shideh Dashti, Cristina Torres-Machi.
*Özet:* Sıvılaşma değerlendirmesini tek nokta yerine **bölgesel ölçekte olasılıksal**
kurmaya yönelik yeni nesil model yapımı. Parsel bazlı analizden bölge planlamasına geçiş
eğiliminin göstergesi.

**(b) "National-scale Mapping of the Expected Earthquake Magnitude for Soil Liquefaction
Triggering Analyses in Italy"** — Ali Güney Özcebe, Francesca Bozzoni, Carlo Giovanni Lai,
Elisa Zuccolo.
*Özet:* İtalya genelinde, sıvılaşma tetiklenme analizlerinde kullanılacak **beklenen deprem
büyüklüğünün** ülke ölçeğinde haritalanması. Sıvılaşma hesabında kritik girdi olan
"tasarım magnitüdü" seçimini keyfî olmaktan çıkarıp haritaya bağlıyor. Yöntem olarak
Türkiye'ye kavramsal aktarımı en yüksek çalışma.

**(c) "Utilization of Spatially Distributed mHVSR to Assess the Effectiveness of Ground
Response Analysis"** — Francisco Javier G. Ornelas, Christopher A. de la Torre,
Jonathan P. Stewart.
*Özet:* Mikrotremor yatay/düşey spektral oran (mHVSR) ölçümlerinin mekânsal dağılımını
kullanarak zemin tepki analizinin (site response) ne kadar isabetli olduğunu sınama.
Zemin büyütmesi konusunda saha ölçümü ile hesap arasındaki farkı ele alıyor.

**(d) "Building Back Better Following the 2023 Kahramanmaraş Earthquake Sequence: Repair
and Retrofit of Damaged Residential Reinforced Concrete High-Rise Buildings"**
— Nikola Blagojević, Nemanja Krtinić, Safak Arslantürkoglu, Serife Özata, Zeynep Ünsal
Aslan, Marko Marinković, Svetlana Brzev, Božidar Stojadinović.
*Özet:* 2023 Kahramanmaraş depremlerinden sonra hasar görmüş betonarme yüksek konut
binalarının onarım ve güçlendirme uygulamalarının değerlendirilmesi. **Türkiye
odaklı, hakemli, uluslararası** — güçlendirme sayfaları için nadir bulunan bir kaynak.

Ek olarak zemin büyütmesi başlığında aynı sayıda: "Regional Site Response Model via
Uncertainty Projected Mapping: Application to Kanto Region, Japan" (Chakraborty & Kotha),
"Site Response Models Based on Geometric Parameters for Southern California Sedimentary
Basins" (Shams, Nweke, Parker) ve uygulama makalesi "Host-To-Target Site Response
Adjustments for Site-Specific Probabilistic Seismic Hazard Analysis" (Kottke, Kaklamanos,
Rodriguez-Marek ve ark.).

**YER6 için önemi:** `sivilasma-riskine-karsi-zemin-guclendirme`,
`izmir-korfezi-zemin-profili-ve-sivilasma-riski` ve
`istanbul-depremi-zemin-etudu-ve-iksa-sistemleri` sayfalarında "uluslararası literatürde
şu anda ne konuşuluyor" başlığı açmaya yeter malzeme.

---

### 2.4 Mevzuat — DOĞRULANMAMIŞ İDDİA UYARISI

Taramada "2026'da Türkiye Bina Deprem Yönetmeliği'nde şunlar değişti" iddiasını taşıyan
çok sayıda sayfa çıktı: 4 kattan yüksek binalarda betonarme perde zorunluluğu ve
%1,5 perde oranı, DASK kapsamının genişletilmesi, 1 Mart 2026 yürürlük tarihi vb.

**Bu iddiaların hiçbiri doğrulanmamıştır.** Kaynakların tamamı ticari blog / firma
sitesidir (inşaat firmaları, statik program siteleri, sigorta içerik siteleri). Resmî
Gazete, Mevzuat Bilgi Sistemi, ÇŞB ve AFAD sayfalarına bu oturumda erişilemedi.

**Doğrulanmış tek dayanak:** "Zemin ve Temel Etüdü Uygulama Esasları ve Rapor Formatı"
tebliği — Resmî Gazete 09.03.2019, sayı 30709. Etüt iki bölümden oluşur: **Veri Raporu**
ve **Geoteknik Rapor**.

**Karar:** Bu mevzuat iddiaları YER6 sitesinde **kullanılmayacaktır.** Resmî Gazete
üzerinden birincil metin görülmeden hiçbir yönetmelik değişikliği içeriğe girmez.
(CLAUDE.md madde 3 — kanıtlanamayan bilgi yazılmaz.)

---

## 3) YER6 sitesi için içerik fırsatı önerileri

Aşağıdakiler **öneri**dir. Hiçbiri uygulanmamıştır. Tümü mevcut tasarım sistemi içinde,
mevcut sayfalara **ekleme** olarak tasarlanmıştır — yeni rota, yeni bölüm düzeni veya
yerleşim değişikliği önerilmemektedir. (CLAUDE.md madde 1)

| # | Hedef sayfa (mevcut slug) | Önerilen ekleme | Dayanak |
| --- | --- | --- | --- |
| 1 | `jet-grout-kalite-kontrol` / `jet-grout-kalite-kontrol-rehberi` | Mevcut kalite kontrol bölümüne "Doğrulama ve kabul deneyleri" alt başlığı: CPT, yükleme deneyi, karot + RQD, UCS, presiyometre, paker deneyi, kolon çapı ölçümü | Caltrans Ocak 2026 |
| 2 | `jet-grout-kolon-capi` | Mevcut tabloya tek/çift/üç akışkan sistem karşılaştırma satırı ve basınç aralıkları | Caltrans Ocak 2026 |
| 3 | `zemin-enjeksiyonu-turleri` | Permeasyon enjeksiyonu uygunluk tablosu (200 nolu elek % — uygunluk) | Caltrans Ocak 2026 |
| 4 | `jet-grout-is-guvenligi-ve-spoil-kontrolu` | Spoil hacminin işlenen hacmin ~%80'i olduğu, plastik zeminlerde arttığı bilgisi | Caltrans Ocak 2026 |
| 5 | `dsm-nedir` / `dsm-uygulama-ve-kalite-kontrol` | "Güncel literatür" kısa kutusu + Zhao (2026) derlemesine atıf | Zhao 2026 |
| 6 | `sivilasma-riskine-karsi-zemin-guclendirme` | SSS'ye "Sıvılaşma hesabında hangi deprem büyüklüğü kullanılır?" sorusu — İtalya ulusal haritalama örneğiyle | Özcebe ve ark. 2026 |
| 7 | `istanbul-depremi-zemin-etudu-ve-iksa-sistemleri` | Zemin büyütmesi bölümüne mikrotremor (mHVSR) ile saha doğrulaması paragrafı | Ornelas ve ark. 2026 |
| 8 | `zemin-etudu` / `zemin-etudu-nasil-yapilir` | "Veri Raporu ve Geoteknik Rapor" ayrımının net anlatımı (2019 tebliği) — mevcutta varsa kaynak atfı eklenmesi | RG 09.03.2019 / 30709 |

**Bilinçli olarak önerilmeyenler:**

- Günlük deprem listesi yayımlayan bir sayfa. YER6 sismoloji kurumu değildir; AFAD ve
  Kandilli'nin işini tekrarlamak otorite kazandırmaz, veri hatası riski taşır.
- Kayseri Pınarbaşı depremini pazarlama içeriğine çevirmek. Hasar görmüş bir köy üzerinden
  hizmet tanıtımı yapılmaz. (CLAUDE.md madde 3)
- "2026 yönetmeliği değişti" başlıklı içerik — bkz. Bölüm 2.4.

---

## 4) Erişilemeyen / başarısız kaynaklar

| Kaynak | Durum | Sebep |
| --- | --- | --- |
| AFAD Deprem (deprem.afad.gov.tr) | **Erişilemedi** | Ağ izin listesi engeli (cowork-egress-blocked) |
| Kandilli / KRDAE (koeri.boun.edu.tr) | **Erişilemedi** | Ağ izin listesi engeli |
| USGS (earthquake.usgs.gov, FDSN sorgusu) | **Erişilemedi** | Ağ izin listesi engeli |
| EMSC (emsc-csem.org) | **Erişilemedi** | Ağ izin listesi engeli |
| Resmî Gazete (resmigazete.gov.tr) | **Boş içerik döndü** | Sayfa istemci tarafında render ediliyor olabilir |
| ÇŞB haber sayfası (csb.gov.tr) | **Boş içerik döndü** | Aynı sebep |
| Tarayıcı köprüsü (Chrome eklentisi) | **Bağlı değil** | Bu oturumda bağlı tarayıcı bulunamadı |

Hiçbir engel aşılmaya çalışılmamıştır; CAPTCHA veya arşiv/ayna kullanılmamıştır.

**Çözüm önerisi:** Ayarlar → Capabilities içine şu alan adlarının eklenmesi, sonraki
taramaların doğrudan resmî kaynaklardan çalışmasını sağlar:

```
deprem.afad.gov.tr
koeri.boun.edu.tr
earthquake.usgs.gov
emsc-csem.org
resmigazete.gov.tr
mevzuat.gov.tr
csb.gov.tr
```

---

## 5) Onay bekleyen taslaklar

Hiçbiri yazılmamış, yalnızca tanımlanmıştır. Onay verilirse metin üretilecektir.

- **[ONAY BEKLİYOR]** T-01 — `jet-grout-kalite-kontrol`: "Doğrulama ve kabul deneyleri"
  alt bölümü (Caltrans Ocak 2026 atıflı, ~300 kelime + 1 tablo)
- **[ONAY BEKLİYOR]** T-02 — `jet-grout-kolon-capi`: tek/çift/üç akışkan sistem
  karşılaştırma tablosu (mevcut tablo formatında, 3 satır)
- **[ONAY BEKLİYOR]** T-03 — `zemin-enjeksiyonu-turleri`: permeasyon enjeksiyonu zemin
  uygunluk tablosu (4 satır)
- **[ONAY BEKLİYOR]** T-04 — `dsm-nedir`: güncel literatür kutusu, Zhao (2026) atıflı
  (~120 kelime)
- **[ONAY BEKLİYOR]** T-05 — `sivilasma-riskine-karsi-zemin-guclendirme`: SSS maddesi
  "Sıvılaşma hesabında hangi deprem büyüklüğü kullanılır?" (~150 kelime, schema FAQ uyumlu)
- **[ONAY BEKLİYOR]** T-06 — `istanbul-depremi-zemin-etudu-ve-iksa-sistemleri`: mikrotremor
  ile zemin büyütmesi doğrulaması paragrafı (~200 kelime)
- **[BLOKE — ONAYA SUNULMADI]** T-07 — 2026 mevzuat değişikliği içeriği. Resmî Gazete
  metni görülmeden taslak dahi yazılmayacaktır.

---

## Kaynaklar

**Deprem (ikincil — resmî kurum verisini aktaran):**

- [CNN Türk — 27 Ağustos 2026 AFAD ve Kandilli son depremler](https://www.cnnturk.com/turkiye/deprem-son-dakika-27-agustos-bugun-deprem-mi-oldu-nerede-kac-siddetinde-27-agustos-2026-afad-ve-kandilli-rasathanesi-son-depremler-3459487)
- [Sanayi Gazetesi — 27 Ağustos 2026 son depremler](https://sanayigazetesi.com.tr/son-depremler-son-dakika-deprem-mi-oldu-az-once-deprem-mi-oldu-27-agustos-2026-afad-ve-kandilli-son-depremler/)
- [World EDU Türkçe — 27 Ağustos 2026 AFAD ve Kandilli kayıtları](https://turkce.world.edu/27-agustos-2026-afad-ve-kandilliden-guncel-deprem-kayitlari-istanbul-ankara-izmirde-buyuk-sarsinti-bildirimi-yok-66904/)
- [Anadolu Ajansı — Kayseri'de 4,1 büyüklüğünde deprem](https://aa.com.tr/tr/gundem/kayseride-4-1-buyuklugunde-deprem/4037610)
- [Habertürk Yerel — Kayseri'deki depremde bazı evlerde hasar oluştu](https://yerel-haberler.haberturk.com/kayseri-haberleri/kayserideki-depremde-bazi-evlerde-hasar-olustu-119255878)

**Teknik (birincil):**

- [Caltrans Geotechnical Manual — Grouting, Ocak 2026 (PDF)](https://dot.ca.gov/-/media/dot-media/programs/engineering/documents/geotechnical-services/202601-gm-grouting-a11y.pdf)
- [Zhao, K. (2026), Deep Cement Mixing in Geotechnical Engineering, Geotech Geol Eng 44(3):158](https://link.springer.com/article/10.1007/s10706-026-03673-x)
- [EERI — Earthquake Spectra Highlights, Şubat 2026, Cilt 42 Sayı 1](https://www.eeri.org/about-eeri/news/29830-earthquake-spectra-highlights-february-2026-volume-42-issue-1)
- [Earthquake Spectra Şubat 2026 sayısı içindekiler (Wiley)](https://onlinelibrary.wiley.com/toc/19448201/2026/42/1)

---

*Rapor sonu. Site kodu değiştirilmedi, dosya yayımlanmadı, git işlemi yapılmadı,
deploy edilmedi.*
