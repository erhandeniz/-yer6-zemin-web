import type { KnowledgeArticle } from "@/types/knowledge";

export const seoArticles: KnowledgeArticle[] = [
  {
    slug: "jet-grout-kalite-kontrol-rehberi",
    title: "Jet Grout Kalite Kontrol Rehberi: Deneme Kolonu ve Dayanım",
    seoTitle: "Jet Grout Kalite Kontrol Rehberi | YER6",
    description: "Jet grout imalatında kalite kontrol adımları, deneme kolonu zorunluluğu ve uluslararası standartlara (FHWA) göre saha denetimleri.",
    excerpt: "Bir jet grout projesinin başarısı, tasarım değerlerinin sahada doğrulanmasına bağlıdır. FHWA ve USACE standartları, üretim öncesinde deneme kolonları (trial columns) yapılarak çap ve dayanım parametrelerinin kalibre edilmesini zorunlu kılar.",
    category: "Jet Grout",
    readingTime: "8 dk",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
    heroLabel: "Mühendislik Rehberi",
    introduction: "Jet grout uygulamalarının kalitesi yalnızca çimento sarfiyatına değil, enjeksiyon basıncı, çekme hızı ve zemin türü gibi dinamik parametrelere bağlıdır. Kalite güvencesinin ilk adımı deneme kolonlarıdır.",
    sections: [
      {
        id: "deneme-kolonlari",
        title: "Deneme Kolonları (Trial Columns)",
        blocks: [
          {
            type: "paragraph",
            content: "FHWA-HRT-13-046 yönergelerine göre, her projede tam ölçekli üretim başlamadan önce saha koşullarında deneme kolonları inşa edilmelidir. Bu kolonlar, zemin matrisinin yüksek basınçla ne ölçüde parçalandığını ve çimento şerbetinin hangi çapta yayıldığını gösterir."
          },
          {
            type: "list",
            title: "Deneme Kolonu Parametreleri",
            items: [
              "Enjeksiyon basıncı (400 - 600 bar aralığında kalibrasyon)",
              "Tijin dönüş hızı (RPM) ve geri çekme hızı (cm/dk)",
              "Su/Çimento (W/C) oranı"
            ]
          }
        ]
      },
      {
        id: "dayanim-testleri",
        title: "Dayanım Testleri ve UCS",
        blocks: [
          {
            type: "paragraph",
            content: "Sertleşen jet grout kolonlarından (soilcrete) genellikle 7, 14 ve 28. günlerde elmas uçlu makinelerle karot alınır. Laboratuvarda yapılan Serbest Basınç Dayanımı (Unconfined Compressive Strength - UCS) testleri ile kolonun tasarım mukavemetine ulaşıp ulaşmadığı doğrulanır."
          }
        ]
      }
    ],
    faq: [],
    relatedSlugs: ["jet-grout-nedir", "jet-grout-uygulama-asamalari"],
    keywords: ["jet grout kalite kontrol", "deneme kolonu", "trial column", "UCS testi", "FHWA standartları", "jet grout çap kontrolü"],
    published: true
  },
  {
    slug: "jet-grout-is-guvenligi-ve-spoil-kontrolu",
    title: "Jet Grout İmalatında Dönüş (Spoil) Kontrolünün Önemi",
    seoTitle: "Jet Grout Yüzey Dönüş (Spoil) Kontrolü ve İş Güvenliği | YER6",
    description: "Jet grout uygulamasında yüzeye sürekli çamur (spoil) dönüşünün mühendislik anlamı ve zemin kabarması (heave) riskinin yönetimi.",
    excerpt: "Jet grout imalatı sırasında zemine basılan yüksek hacimli sıvı, yüzeye tahliye edilmelidir (spoil). Dönüşün kesilmesi, yeraltında istenmeyen yanal kırılmalara (hidro-fraktür) ve tehlikeli zemin kabarmalarına yol açar.",
    category: "Jet Grout",
    readingTime: "7 dk",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
    heroLabel: "Saha Uygulama",
    introduction: "Jet grout bir 'yer değiştirme' veya 'yerine geçme' yöntemidir. Zemin parçalanıp çimento ile karıştıkça, fazla malzemenin yüzeye çıkması sistemin sağlıklı çalıştığının en net göstergesidir.",
    sections: [
      {
        id: "spoil-nedir",
        title: "Spoil (Dönüş) Nedir?",
        blocks: [
          {
            type: "paragraph",
            content: "Spoil; zemindeki delgi kuyusundan yüzeye taşan, çimento şerbeti, su ve zemin parçacıklarından oluşan çamur karışımıdır. Bu dönüş, yüksek basıncın kuyu içinde sıkışmadığını kanıtlar."
          }
        ]
      },
      {
        id: "heave-riski",
        title: "Yanal Kırılma ve Heave (Kabarma) Riski",
        blocks: [
          {
            type: "paragraph",
            content: "Kil oranı yüksek, yoğun zeminlerde kuyu ağzı tıkanabilir. Spoil dönüşü kesildiğinde enjeksiyon derhal durdurulmalıdır. Aksi halde biriken basınç yanal kırılmalara ve komşu yapıların temellerinde yukarı yönlü hareketlere (heave) neden olabilir. USACE EM 1110-2-3506 standardı bu konuda katı kurallar içerir."
          }
        ]
      }
    ],
    faq: [],
    relatedSlugs: ["jet-grout-nedir", "jet-grout-kalite-kontrol-rehberi"],
    keywords: ["jet grout spoil", "zemin kabarması", "heave", "hidro-fraktür", "iş güvenliği", "jet grout dönüş çamuru"],
    published: true
  },
  {
    slug: "fore-kazik-sureklilik-ve-yukleme-testleri",
    title: "Fore Kazık Bütünlük (PIT) ve Yükleme Testleri",
    seoTitle: "Fore Kazık Bütünlük ve Yükleme Testleri Arasındaki Farklar | YER6",
    description: "Fore kazıklarda uygulanan Low-Strain Süreklilik (PIT) testinin sınırları ve taşıma gücünü doğrulayan yükleme testleri.",
    excerpt: "Fore kazık kalitesini doğrulamak için uygulanan PIT (Süreklilik) testi kazığın yapısal bütünlüğünü ölçerken, taşıma kapasitesini göstermez. Kapasite doğrulaması için Statik veya Dinamik yükleme testleri şarttır.",
    category: "Fore Kazık",
    readingTime: "10 dk",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
    heroLabel: "Kalite Güvencesi",
    introduction: "Yeraltında dökülen betonun homojenliği ve planlanan yükü taşıyıp taşımayacağı, kazık imalatının en büyük soru işaretidir. Doğru test yönteminin seçimi proje güvenliği için elzemdir.",
    sections: [
      {
        id: "pit-testi",
        title: "Süreklilik (PIT / Low-Strain) Testi",
        blocks: [
          {
            type: "paragraph",
            content: "Kazık başına hafif bir çekiçle vurularak sismik dalgaların ölçüldüğü PIT (Pile Integrity Test), boyun verme veya toprak karışması gibi süreksizlikleri tespit eder. Ancak NCHRP Synthesis 318'e göre, boy/çap (L/D) oranı 30'un üzerinde olan çok derin kazıklarda yansıma okumak güçleşir."
          }
        ]
      },
      {
        id: "yukleme-testi",
        title: "Taşıma Kapasitesi: Yükleme Testleri",
        blocks: [
          {
            type: "paragraph",
            content: "Kazığın zemine aktarabileceği gerçek yükü (friction ve end-bearing) ölçmek için Statik Yükleme veya Yüksek Gerinimli Dinamik Yükleme testleri (PDA) kullanılmalıdır. ICE SPERW 3. Baskı, kritik projelerde bu testlerin yapılmasını şart koşar."
          }
        ]
      }
    ],
    faq: [],
    relatedSlugs: ["fore-kazik-nedir", "kazik-yukleme-testleri"],
    keywords: ["fore kazık PIT testi", "süreklilik testi", "kazık yükleme testi", "kazık bütünlük testi", "PDA testi", "crosshole sonic logging"],
    published: true
  },
  {
    slug: "fore-kazik-tremie-beton-dokum-kriterleri",
    title: "Fore Kazık İmalatında Tremie Beton Döküm Standartları",
    seoTitle: "Fore Kazık Tremie Borusu Beton Döküm Standartları | YER6",
    description: "Yüksek yeraltı suyunda bentonitli fore kazık imalatında tremie beton dökümünün mühendislik kuralları ve DFI standartları.",
    excerpt: "Sulu zeminlerde fore kazık betonu asla serbest düşüşle dökülmez. Tremie borusu yöntemiyle dipten yukarı döküm yapılırken borunun en az 3 metre beton içinde kalması kritik bir standarttır.",
    category: "Fore Kazık",
    readingTime: "9 dk",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
    heroLabel: "Teknik Uygulama",
    introduction: "Bentonit veya polimer çamuru altında beton dökmek, fore kazık üretiminin en hassas aşamasıdır. Tremie borusunun yanlış kullanımı, kazık içinde çamur boşluklarına ve ciddi taşıma gücü kayıplarına yol açar.",
    sections: [
      {
        id: "tremie-prensibi",
        title: "Tremie Yöntemi Nedir?",
        blocks: [
          {
            type: "paragraph",
            content: "Tremie borusu, kuyu tabanına kadar indirilen çelik bir boru hattıdır. Beton bu borudan dökülerek, kuyu içindeki suyu ve bentoniti yukarı doğru iter. Böylece beton, suyla karışmadan homojen bir şekilde yerleşir."
          }
        ]
      },
      {
        id: "gomulme-derinligi",
        title: "3 Metre Kuralı (DFI/EFFC Rehberi)",
        blocks: [
          {
            type: "paragraph",
            content: "DFI/EFFC 'Tremie Concrete for Deep Foundations' rehberine göre, beton dökümü boyunca tremie borusunun ucu sürekli olarak taze betonun içinde kalmalıdır (minimum 2-3 metre gömülü). Borunun yanlışlıkla betondan çıkması, kuyu içindeki çamurun betonun içine akmasına (soğuk derz) neden olur ve o kazık ret (red) edilir."
          }
        ]
      }
    ],
    faq: [],
    relatedSlugs: ["fore-kazik-nedir", "fore-kazik-nerelerde-kullanilir"],
    keywords: ["fore kazık tremie", "tremie borusu", "bentonit", "beton dökümü", "DFI standartları", "fore kazık soğuk derz"],
    published: true
  },
  {
    slug: "dsm-karistirma-enerjisi-ve-dayanim-iliskisi",
    title: "DSM (Deep Soil Mixing) Karıştırma Enerjisi ve Dayanım",
    seoTitle: "DSM Karıştırma Enerjisi ve Zemin Dayanım İlişkisi | YER6",
    description: "Derin Zemin Karıştırma (DSM) yönteminde kolon mukavemetini belirleyen Blade Rotation Number (BRN) ve karışım enerjisi tasarımı.",
    excerpt: "DSM kolonlarının dayanımı sadece kullanılan çimento miktarıyla değil, zemine aktarılan mekanik karıştırma enerjisi (Blade Rotation Number) ile doğrudan ilişkilidir.",
    category: "DSM",
    readingTime: "9 dk",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
    heroLabel: "Mühendislik Rehberi",
    introduction: "Derin zemin karıştırma yönteminde (DSM), kil ve silt gibi zeminlerin çimento ile homojen biçimde reaksiyona girmesi için belli bir mekanik işe ihtiyaç vardır. Zemin laboratuvar tasarımı, makine sahasında karıştırma enerjisine dönüştürülmelidir.",
    sections: [
      {
        id: "brn-kavrami",
        title: "Blade Rotation Number (BRN) Nedir?",
        blocks: [
          {
            type: "paragraph",
            content: "BRN, bir metrelik ilerleme sırasında DSM bıçaklarının zemini kaç tur kestiğini gösteren bir endekstir. FHWA-NHI-13-046 rehberine göre, BRN'nin artması (daha fazla dönüş, daha yavaş ilerleme) karışım homojenliğini ve dayanımı artırır."
          }
        ]
      },
      {
        id: "organik-zeminler",
        title: "Organik İçerikli Zeminlerde Bağlayıcı Seçimi",
        blocks: [
          {
            type: "paragraph",
            content: "Yüksek plastik kil veya turba (organik içerik > %5) gibi zeminlerde, çimentonun priz alması zorlaşır. Bu tür sahalarda sadece karıştırma enerjisi yetmez; çimentoya ek olarak Sönmemiş Kireç (Quicklime) katılarak hidratasyon ısısı artırılmalı ve boşluk suyu buharlaştırılmalıdır."
          }
        ]
      }
    ],
    faq: [],
    relatedSlugs: ["dsm-nedir", "zemin-iyilestirme-yontemleri"],
    keywords: ["DSM", "Deep Soil Mixing", "Blade Rotation Number", "BRN", "zemin-çimento karışımı", "organik zemin iyileştirme"],
    published: true
  },
  {
    slug: "sivilasma-tas-kolon-ve-dikey-dren-kombinasyonu",
    title: "Sıvılaşma Mitigasyonu: Taş Kolon ve Dikey Dren (Wick Drain)",
    seoTitle: "Sıvılaşmaya Karşı Taş Kolon ve Dikey Dren (Wick Drain) Çözümleri | YER6",
    description: "İnce taneli (siltli) kumlarda zemin sıvılaşmasını önlemek için taş kolonların dikey drenlerle desteklenmesinin teknik nedenleri.",
    excerpt: "Sıvılaşmaya karşı sıkça kullanılan taş kolonlar, 'ince tane' (silt/kil) oranının yüksek olduğu kumlarda boşluk suyu basıncını yeterince hızlı sönümleyemez. Bu durumda prefabrik dikey drenlerin (wick drains) entegrasyonu kritik bir mühendislik çözümüdür.",
    category: "Zemin İyileştirme",
    readingTime: "11 dk",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
    heroLabel: "Deprem Mühendisliği",
    introduction: "Zemin sıvılaşması (liquefaction), deprem sarsıntısı sırasında suya doygun kumların taşıma gücünü tamamen yitirmesidir. Taş kolon (Vibro Replacement), hem zemini sıkıştırarak hem de drenaj sağlayarak sıvılaşmayı önler.",
    sections: [
      {
        id: "ince-tane-etkisi",
        title: "İnce Tane (Fines) Oranının Etkisi",
        blocks: [
          {
            type: "paragraph",
            content: "Eğer kumun içinde %15'ten fazla silt veya kil (fines) varsa, sismik dalgalar geldiğinde oluşan aşırı boşluk suyu basıncı, taş kolonlara doğru yeterince hızlı akamaz (zemin geçirimsizleşir). Bu durumda sıvılaşma gerçekleşebilir."
          }
        ]
      },
      {
        id: "dikey-drenler",
        title: "Wick Drain (Dikey Dren) Kombinasyonu",
        blocks: [
          {
            type: "paragraph",
            content: "Uluslararası araştırmalar (Missouri S&T, Rollins vd.), taş kolonların arasına PVD (Prefabrik Dikey Dren) yerleştirilmesinin drenaj yolunu dramatik şekilde kısalttığını kanıtlamıştır. Bu hibrit çözüm, siltli kumlarda sıvılaşma ve yanal yayılmayı önlemede en etkin ve maliyet-optimum yaklaşımlardan biridir."
          }
        ]
      }
    ],
    faq: [],
    relatedSlugs: ["tas-kolon-nedir", "sivilasma-riskine-karsi-zemin-guclendirme"],
    keywords: ["zemin sıvılaşması", "taş kolon", "vibro kompaksiyon", "wick drain", "dikey dren", "deprem zemin iyileştirme", "TBDY 2018"],
    published: true
  },
  {
    slug: "zemin-turune-gore-iyilestirme-yontemi-secimi",
    title: "Zemin Türüne Göre İyileştirme Yöntemi Seçim Matrisi",
    seoTitle: "Zemin Türüne Göre Geoteknik İyileştirme Yöntemi Seçimi | YER6",
    description: "Kil, silt, kum ve çakıl zeminlerde geoteknik problemlere (oturma, taşıma, sıvılaşma) karşı doğru zemin iyileştirme yönteminin seçilmesi.",
    excerpt: "Her zemin için tek bir mucizevi yöntem yoktur. İyileştirme yöntemi; zeminin granülometrisine (dane boyutu), yeraltı suyu seviyesine ve hedeflenen proje yüklerine göre seçilmelidir.",
    category: "Zemin İyileştirme",
    readingTime: "12 dk",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
    heroLabel: "Karar Destek Rehberi",
    introduction: "Bir projenin bütçesini ve güvenliğini belirleyen en önemli faktör, zemin etüt raporundaki geoteknik verilere uygun bir temel güçlendirme tasarımının (Jet Grout, DSM, Taş Kolon vb.) yapılmasıdır.",
    sections: [
      {
        id: "granuler-zeminler",
        title: "Kum ve Çakıl Zeminler (Kohezyonsuz)",
        blocks: [
          {
            type: "list",
            title: "Uygulanabilir Yöntemler:",
            items: [
              "Vibro Kompaksiyon: Temiz kumlarda en ucuz ve hızlı yöntem.",
              "Taş Kolon: Siltli kumlarda sıvılaşma önlemi için.",
              "Kompaksiyon Enjeksiyonu: Düşük baş mesafeli yerlerde temel altı (underpinning) uygulaması için."
            ]
          }
        ]
      },
      {
        id: "kohezyonlu-zeminler",
        title: "Kil ve Silt Zeminler (Kohezyonlu)",
        blocks: [
          {
            type: "list",
            title: "Uygulanabilir Yöntemler:",
            items: [
              "DSM (Deep Soil Mixing): Geniş alanlarda (lojistik, liman) oturma kontrolü için en ekonomik çözüm.",
              "Jet Grout: Su geçirimsizlik perdesi gereken veya çok sert katmanları aşması gereken dar kentsel kazılarda idealdir.",
              "Wick Drain + Sürşarj: Uzun proje süresi olan otoyol dolgularında konsolidasyonu hızlandırmak için."
            ]
          }
        ]
      }
    ],
    faq: [],
    relatedSlugs: ["zemin-iyilestirme-yontemleri", "jet-grout-nedir", "dsm-nedir", "tas-kolon-nedir"],
    keywords: ["zemin iyileştirme seçimi", "kum zemin sıvılaşması", "killi zemin güçlendirme", "geoteknik tasarım matrisi"],
    published: true
  },
  {
    slug: "geoteknik-firma-secimi-ve-kriterleri",
    title: "Geoteknik Yüklenici (Firma) Seçiminde Kritik Kriterler",
    seoTitle: "Zemin İyileştirme ve Geoteknik Firma Seçimi | YER6",
    description: "Zemin iyileştirme ve fore kazık firmalarını seçerken makine parkı, deneme kolonu, kalite kontrol ve mühendislik yeterliliğinin değerlendirilmesi.",
    excerpt: "Zemin güçlendirme, standart bir 'beton döküm' işlemi değil; tamamen sahaya özgü dinamikleri olan bir mühendislik operasyonudur. Yanlış firma seçimi, milyarlarca liralık üst yapının risk altında kalmasına neden olur.",
    category: "Kalite Kontrol",
    readingTime: "8 dk",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
    heroLabel: "Endüstri Standartları",
    introduction: "Türkiye pazarında zemin iyileştirme yapan çok sayıda firma bulunmaktadır. Ancak uluslararası standartlara (FHWA, Eurocode 7) göre faaliyet gösteren firmaları ayırt etmek için belirli parametrelere bakılmalıdır.",
    sections: [
      {
        id: "makine-ve-dijital",
        title: "1. Makine Parkı ve Dijital Takip Sistemi",
        blocks: [
          {
            type: "paragraph",
            content: "Geoteknik firmanın, proje terminlerine ve değişken zemin şartlarına doğrudan uyarlanabilir modern bir makine parkına sahip olması saha operasyonlarında hız ve teknik esneklik sağlar. Daha da önemlisi, DSM veya Jet Grout gibi imalatlarda enjeksiyon basıncı, devir hızı ve debi verilerini anlık kaydeden dijital sensör (data logger) sistemlerinin bulunması kalite güvence ve kalite kontrol (QA/QC) süreçleri için teknik bir zorunluluktur."
          }
        ]
      },
      {
        id: "muhendislik-ve-kalite",
        title: "2. Deneme Kolonu ve QA/QC Disiplini",
        blocks: [
          {
            type: "paragraph",
            content: "Firma, işe başlamadan önce 'Deneme Kolonu' (Trial Column) yapmayı teklif ediyor mu? İmalat sonrasında Karot Testi (UCS), PIT, veya Yükleme testlerini bağımsız laboratuvarlarla yürütüyor mu? Bu sorulara 'evet' cevabı alınmadan geoteknik risk devredilmemelidir."
          }
        ]
      }
    ],
    faq: [],
    relatedSlugs: ["zemin-iyilestirme-yontemleri", "zemin-etudu-nasil-yapilir"],
    keywords: ["zemin iyileştirme firmaları", "geoteknik firmaları", "fore kazık firmaları", "jet grout firmaları", "zemin güçlendirme firmaları"],
    published: true
  },
  {
    slug: "dsm-zemin-iyilestirme-firmalari-ve-birim-fiyatlari",
    title: "DSM Zemin İyileştirme ve Deep Soil Mixing Metraj Rehberi",
    seoTitle: "Deep Soil Mixing (DSM) Nedir? Tasarım Kriterleri ve Metraj Hesabı | YER6",
    description: "DSM (Deep Soil Mixing) zemin iyileştirme firmaları seçimi, m³ ve m² metraj maliyet analizi, karıştırma enerjisi (BRN) ve sıvılaşma önleme rehberi.",
    excerpt: "Deep Soil Mixing (DSM / Derin Zemin Karıştırma), mekanik karıştırma kanatlarıyla zayıf alüvyal zeminlerde hafriyatsız ve son derece hızlı zemin-çimento kolonları oluşturan modern bir geoteknik yöntemdir.",
    category: "DSM",
    readingTime: "10 dk",
    publishedAt: "2026-07-25",
    updatedAt: "2026-07-25",
    heroLabel: "Mühendislik ve Maliyet Rehberi",
    introduction: "Endüstriyel tesisler, lojistik depolar, organize sanayi bölgeleri (OSB), otoyol rampları ve liman arkası yapılarında zemin taşıma kapasitesini artırmak ve farklı oturmaları sınırlandırmak amacıyla Deep Soil Mixing (DSM) yüksek hızlı ve çevre dostu bir geoteknik yöntemdir. Doğru DSM zemin iyileştirme mühendisliği, hafriyatsız yerinde imalat hızı ve laboratuvar karışım tasarımıyla şantiye ekonomisini optimize eder.",
    sections: [
      {
        id: "dsm-firmalari-secimi",
        title: "1. DSM Zemin İyileştirme Firmaları Seçerken Dikkat Edilecek 4 Kriter",
        blocks: [
          {
            type: "paragraph",
            content: "DSM projelerinde başarının anahtarı firmanın makine parkında çift milli (twin shaft) yüksek torklu donanımlara sahip olması ve saha uygulamasında Blade Rotation Number (BRN) olarak adlandırılan karıştırma enerjisini anlık bilgisayarlı sensörlerle (data logger) kaydetmesidir. YER6, her DSM projesinde laboratuvar karışım tasarımı ve BRN kontrolü sunar."
          }
        ]
      },
      {
        id: "dsm-maliyet-hesabi",
        title: "2. Deep Soil Mixing Metraj ve m³ / m² Birim Fiyatı Neye Göre Değişir?",
        blocks: [
          {
            type: "paragraph",
            content: "DSM birim maliyeti; zemin stratigrafisine, bağlayıcı (çimento) dozajına (ör. 150-250 kg/m³), kuyu derinliğine (15-30 metre), kolon yerleşim düzenine (tekil, teğet, grid), replasman oranına ve sahada harcanan BRN karıştırma enerjisine bağlıdır. Dışarıya hafriyat toprağı ve çamur atığı çıkarılmaması, uygun zemin profillerinde şantiye süresi, nakliye ve malzeme lojistiğinde belirgin bir verimlilik sağlar."
          }
        ]
      },
      {
        id: "dsm-endustriyel-osb",
        title: "3. Sanayi Parselleri ve Lojistik Depolarda DSM Kafes (Grid) Sistemi",
        blocks: [
          {
            type: "paragraph",
            content: "Ağır zemin yükü taşıyan lojistik antrepolar ve endüstriyel zemin betonlarında, noktasal kazıklar yerine kesişen veya kafes (grid) düzeninde imal edilen DSM kolonları zemin rijitliğini homojenleştirir. Bu sistem diferansiyel oturmaları sınırlandırırken, deprem anında alüvyal tabakanın sıvılaşma potansiyelini ortadan kaldırır."
          }
        ]
      },
      {
        id: "dsm-ts-en-14679-standart",
        title: "4. TS EN 14679 Standartlarında Kalite Kontrol ve UCS Basınç Deneyleri",
        blocks: [
          {
            type: "paragraph",
            content: "TS EN 14679 ve güncel Avrupa normları (EN 14679) uyarınca derin zemin karıştırma; dry ve wet mixing yöntemleri, süpervizyon, enstrümantasyon, periyodik şerbet yoğunluk kontrolleri ve kalite denetimlerini kapsar. İmalattan 28 gün sonra kolonlardan karot numuneleri alınarak Tek Eksenli Serbest Basınç Dayanımı (UCS) testlerine tabi tutulur; hedeflenen 1.5 - 4.0 MPa dayanım eşiği bağımsız akredite laboratuvarlarca raporlanır."
          }
        ]
      }
    ],
    faq: [
      { question: "DSM zemin iyileştirme metraj ve teklifi nasıl hesaplanır?", answer: "Saha zemin etüt raporu (SPT/CPT verileri) incelenir, hedeflenen UCS dayanımına göre çimento dozajı belirlenir ve toplam kolon metrajı (m/tül veya m³) üzerinden projelendirilir." },
      { question: "DSM yöntemi geniş platformlarda neden tercih edilir?", answer: "DSM yerindeki zemini bağlayıcı ile karıştırarak kolon oluşturur. Dışarıya hafriyat toprağı ve çamur atığı çıkarmaz, donatı kafesi gerektirmez ve yüksek günlük delgi kapasitesiyle geniş platformlarda imalat takvimini belirgin biçimde hızlandırır." },
      { question: "DSM hangi zemin türlerinde en yüksek verimi sağlar?", answer: "Yumuşak killer, siltli alüvyonlar, gevşek ince kumlar ve kontrolsüz dolgularda en yüksek performans ve taşıma gücü artışını sağlar." }
    ],
    relatedSlugs: ["dsm-nasil-uygulanir", "jet-grout-ve-dsm-farki"],
    keywords: ["dsm zemin iyileştirme firmaları", "deep soil mixing firmaları", "dsm metre fiyatı", "dsm zemin güçlendirme", "dsm zemin iyileştirme"],
    published: true
  },
  {
    slug: "ongermeli-ankraj-firmalari-ve-uygulama-rehberi",
    title: "Öngermeli Ankraj Uygulama Rehberi: Derin Kazı İksa ve Halatlı Ankraj",
    seoTitle: "Öngermeli Ankraj Rehberi: İksa Tasarımı, Halatlı Ankraj ve Kabul Testi | YER6",
    description: "Öngermeli ankraj firmaları seçimi, kalıcı ve geçici halatlı ankraj imalatı, ön germe kuvveti ve iksa perdesi enstrümantasyon rehberi.",
    excerpt: "Öngermeli ankraj, derin kazılarda oluşan yanal zemin basınçlarını germe halatları ve çimento enjeksiyonuyla derin sağlam zemin kütlesine aktaran aktif destek sistemidir.",
    category: "Ankraj & İksa",
    readingTime: "9 dk",
    publishedAt: "2026-07-25",
    updatedAt: "2026-07-25",
    heroLabel: "İksa ve Derin Kazı Rehberi",
    introduction: "Kent içi dar şantiyelerde, komşu parsel sınırlarında ve derin bina kazılarında güvenli çalışma ortamı oluşturmak için öngermeli ankraj ve kazıklı iksa sistemleri bir arada projelendirilir. TS EN 1537 ve EN ISO 22477-5 standartlarına uygun tasarım, iksa stabilitesinin temel güvencesidir.",
    sections: [
      {
        id: "ankraj-firmalari-kritik",
        title: "1. Öngermeli Ankraj Uygulamasında Firma Yeterliliği ve Saha Uzmanlığı",
        blocks: [
          {
            type: "paragraph",
            content: "Ankraj imalatında rotary veya darbeli delgi kalitesi, kuyu sapma kontrolü ve çimento grout enjeksiyonu kadar hayati olan diğer aşamalar; kalibre edilmiş hidrolik krikolarla ön germe (pre-stressing), kilitlenme yükü (lock-off load) ayarı ve EN ISO 22477-5 uyarınca kabul testleridir. YER6, her ankraj imalatında basınç-deplasman ve sünme (creep) grafiklerini anlık sensörlerle kayıt altına alır."
          }
        ]
      },
      {
        id: "ankraj-kapasite-ve-kök-boyu",
        title: "2. Halat Sayısı, Serbest Boy (Free Length) ve Kök Boyu (Bond Length) Mekaniği",
        blocks: [
          {
            type: "paragraph",
            content: "Derin kazılarda yanal zemin basıncına göre 3x0.6\", 4x0.6\" veya 5x0.6\" yüksek mukavemetli çelik halat (strand) demetleri kullanılır. Serbest boy (L_fr), potansiyel Rankine/Coulomb aktif kayma prizmasının en az 1.5 ila 2.0 metre ötesine uzatılmalıdır. Kök boyu (L_b) ise sağlam kaya veya sıkı tabakada genellikle 6 ila 10 metre arasında projelendirilerek basınçlı grout enjeksiyonu ile zemine kilitlenir."
          }
        ]
      },
      {
        id: "ankraj-ts-en-1537-test",
        title: "3. TS EN 1537 ve EN ISO 22477-5 Standartlarında Test Metodolojisi",
        blocks: [
          {
            type: "paragraph",
            content: "TS EN 1537 ve EN ISO 22477-5 standartları; Araştırma (Investigation), Uygunluk (Suitability) ve Kabul (Acceptance/Proof) testlerini zorunlu kılar. İmal edilen her üretim ankrajı, servis yükünün 1.25 ila 1.50 katına kadar kademeli gerilerek yük tutma periyotlarında sünme/yük kaybı (creep displacement rate) sınırları denetlenir. Kabul kriterlerini sağlayan ankrajlar kilit yüküne sabitlenir."
          }
        ]
      },
      {
        id: "ankraj-cift-korozyon-korumasi",
        title: "4. Kalıcı Ankrajlarda Çift Korozyon Koruması (DCP)",
        blocks: [
          {
            type: "paragraph",
            content: "Hizmet ömrü 2 yılı aşan kalıcı zemin ankrajlarında çift korozyon koruması (Double Corrosion Protection - DCP) uygulanır. Halat demetleri hem fabrika ortamında oluklu yüksek yoğunluklu polietilen (HDPE) kılıf içine harçla hapsedilir hem de saha enjeksiyonu ile zemin temasından tamamen yalıtılarak 50-100 yıllık tasarım ömrü güvenceye alınır."
          }
        ]
      }
    ],
    faq: [
      { question: "Geçici ve kalıcı ankraj arasındaki fark nedir?", answer: "Geçici ankrajlar inşaat süresince (12-24 ay) kazı yüzeyini tutar; kalıcı ankrajlar ise yapı ömrü boyunca (50-100 yıl) çift korozyon korumalı (DCP) HDPE kılıf ve özel enjeksiyon bariyerleri ile çalışır." },
      { question: "Ankrajlı iksa sistemi derin kazılarda neden zorunludur?", answer: "Kent içi bitişik nizam kazılarda komşu yapıların ve çevre yolların kazı çukuruna doğru yatay ötelenmesini önlemek için iksa perdesi arkasına öngermeli ankraj uygulanarak deformasyonlar milimetrik toleranslarda sınırlandırılır." },
      { question: "Öngermeli halatlı ankraj hangi zeminlerde uygulanır?", answer: "Kaya, çakıl, sıkı kum ve sert killi zeminlerde yüksek kök tutunma kapasitesi sağlar. Zayıf ve gevşek zeminlerde ise mansetli boru (tube à manchette) ile kademeli basınçlı enjeksiyon uygulanarak kök mukavemeti artırılır." }
    ],
    relatedSlugs: ["kazi-destek-sistemleri-nedir", "zemin-iyilestirme-risk-yonetimi"],
    keywords: ["öngermeli ankraj firmaları", "ankraj firmaları", "halatlı ankraj", "ankrajlı iksa", "öngermeli zemin ankrajı"],
    published: true
  },
  {
    slug: "eurocode-7-ve-tbdy-2018-zemin-guclendirme-standartlari",
    title: "Eurocode 7 ve TBDY 2018 Zemin Güçlendirme Standartları Rehberi",
    seoTitle: "Eurocode 7 ve TBDY 2018 Zemin Güçlendirme & İyileştirme Standartları | YER6",
    description: "Eurocode 7 (EN 1997) ve Türkiye Deprem Yönetmeliği (TBDY 2018) geoteknik tasarım esasları, taşıma gücü ve oturma hesabı kriterleri.",
    excerpt: "Eurocode 7 ve TBDY 2018 yönetmelikleri, zemin güçlendirme projelerinde sınır durumlar (ULS/SLS), kısmi güvenlik katsayıları ve sıvılaşma analizi esaslarını belirler.",
    category: "Zemin İyileştirme",
    readingTime: "11 dk",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-01",
    heroLabel: "Uluslararası Geoteknik Standartlar",
    introduction: "Modern zemin güçlendirme projelerinde yapısal güvenlik; Eurocode 7 (EN 1997-1) ve TBDY 2018 (Bölüm 16) geoteknik tasarım ilkelerinin sahada eksiksiz uygulanmasına bağlıdır.",
    sections: [
      {
        id: "eurocode7-tasarim",
        title: "1. Eurocode 7 (EN 1997) Geoteknik Tasarım Yaklaşımları",
        blocks: [
          {
            type: "paragraph",
            content: "Eurocode 7, geoteknik projelerde Tasarım Yaklaşımı 1 (DA1), DA2 ve DA3 olmak üzere 3 farklı kısmi güvenlik katsayısı kombinasyonu tanımlar. Türkiye uygulamasında TBDY 2018 Bölüm 16 ile uyumlu olarak taşıma gücü ve yenilme analizi taşıma gücü katsayıları (DA2/DA1-2) esas alınır."
          }
        ]
      },
      {
        id: "tbdy2018-sivilasma",
        title: "2. TBDY 2018 Bölüm 16 Sıvılaşma ve Zemin İyileştirme Esasları",
        blocks: [
          {
            type: "paragraph",
            content: "TBDY 2018 Bölüm 16, sıvılaşma değerlendirmesinde güvenlik koşulunu sağlamayan tabakalar için taşıma gücü kaybı, oturma ve yanal yayılma gibi sonuçların incelenmesini; gerekli görüldüğünde üstyapı ve/veya zemin iyileştirmesi uygulanmasını öngörür. Yönetmelik belirli bir yöntemi isim vererek zorunlu kılmaz; sıvılaşma değerlendirmesi düzeltilmiş SPT (N1,60) veya CPT verisi, plastisite indisi, dane dağılımı ve yeraltı suyu seviyesi birlikte ele alınarak yapılır. Yöntem seçimi (Jet Grout, DSM, taş kolon, kazıklı temel veya bunların kombinasyonu) zemin profiline, yapı yüklerine, hedeflenen performansa ve proje şartnamesine göre geoteknik mühendisliği hesaplarıyla belirlenir. YER6, her projede imalat öncesi ve sonrası CPT/SPT doğrulamasını gerçekleştirerek tasarım hedeflerini belgeler."
          }
        ]
      }
    ],
    faq: [
      { question: "TBDY 2018'e göre hangi zeminlerde zemin iyileştirme zorunludur?", answer: "Yeraltı su seviyesi yüksek, SPT N1,60 < 15 olan gevşek kum ve siltti zeminlerde sıvılaşma riski tespit edildiğinde zemin iyileştirme zorunludur." }
    ],
    relatedSlugs: ["zemin-iyilestirme-planlama", "zemin-kalite-kontrol-standartlari"],
    keywords: ["Eurocode 7 zemin", "TBDY 2018 zemin güçlendirme", "geoteknik tasarım standartları", "EN 1997 zemin iyileştirme"],
    published: true
  },
  {
    slug: "astm-d2166-jet-grout-karot-ucs-basinc-dayanimi-testi",
    title: "ASTM D2166 Standartına Göre Jet Grout Karot Basınç Dayanımı (UCS) Testi",
    seoTitle: "ASTM D2166 Jet Grout Karot Basınç Dayanımı (UCS) Testi ve Kabul Kriterleri | YER6",
    description: "ASTM D2166 ve ASTM D4219 standartlarına göre sertleşmiş jet grout (soilcrete) kolonlarından karot alımı, laboratuvar UCS basınç dayanımı deneyleri ve kabul limitleri.",
    excerpt: "Jet grout imalatının kalitesini belirleyen en kritik laboratuvar doğrulaması ASTM D2166 standardına göre yapılan Serbest Basınç Dayanımı (UCS) kırım testidir.",
    category: "Kalite Kontrol",
    readingTime: "10 dk",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    heroLabel: "Laboratuvar Kalite Kabul",
    introduction: "Sertleşen jet grout (soilcrete) kolonlarının tasarım mukavemetini (ör. 28 günlük UCS: 5.0 - 12.0 MPa) doğrulamanın uluslararası kabul görmüş tek yolu ASTM D2166 kırım deneyidir.",
    sections: [
      {
        id: "karot-alimi",
        title: "1. Elmas Uçlu Karot Alma Standartları (ASTM D2113)",
        blocks: [
          {
            type: "paragraph",
            content: "İmalattan 7 ila 28 gün sonra elmas uçlu tam dönerli karotiyer makineleri ile jet grout kolon aksından karot numunesi çıkarılır. Numune çapı minimum 70-100mm olmalı ve kırılmadan özel numune koruma sandıklarında ıslak muhafaza edilmelidir."
          }
        ]
      },
      {
        id: "ucs-kirim-deneyi",
        title: "2. ASTM D2166 UCS Basınç Dayanımı Kırım Prosedürü",
        blocks: [
          {
            type: "paragraph",
            content: "Laboratuvarda başlık giydirilen silindirik numuneler sabit eksenel gerinim hızında (%0.5 - %2.0/dakika) basınç presine tabi tutulur. Maksimum kırılma yükü kaydedilerek UCS mukavemeti (MPa) ve elastisite modülü (E50) hesaplanır."
          }
        ]
      }
    ],
    faq: [
      { question: "Jet grout UCS serbest basınç dayanımı kaç MPa olmalıdır?", answer: "Siltli killi zeminlerde 2.5 - 5.0 MPa, kumlu çakıllı zeminlerde 5.0 - 15.0 MPa aralığı uluslararası tasarım standardıdır." }
    ],
    relatedSlugs: ["jet-grout-kalite-kontrol-rehberi", "saha-denetimi-numune-testleri"],
    keywords: ["ASTM D2166", "UCS testi", "jet grout karot dayanımı", "soilcrete basınç testi", "ASTM D4219"],
    published: true
  },
  {
    slug: "ice-piling-specification-fore-kazik-kalite-kontrol-rehberi",
    title: "ICE Kılavuzuna Göre Fore Kazık ve İksa Sistemleri Kalite Kabul Rehberi",
    seoTitle: "ICE Kılavuzuna Göre Fore Kazık ve İksa Sistemleri Kalite Kabul Rehberi | YER6",
    description: "ICE (Institution of Civil Engineers) standart şartnamesine göre fore kazık delgisi, bentonit çamuru kalitesi, tremie betonlama ve yükleme testleri kabul kriterleri.",
    excerpt: "Uluslararası ICE (Institution of Civil Engineers) fore kazık şartnamesi, derin temel imalatlarında sıfır hata ve aksiyal yük kapasitesi garantisi için altın standarttır.",
    category: "Fore Kazık",
    readingTime: "12 dk",
    publishedAt: "2026-08-05",
    updatedAt: "2026-08-05",
    heroLabel: "Küresel İhale Kılavuzu",
    introduction: "Uluslararası prestijli altyapı ve kentsel dönüşüm projelerinde fore kazık imalatları ICE Specification for Piling and Embedded Retaining Walls kılavuzuna göre denetlenir.",
    sections: [
      {
        id: "delgi-duseylik",
        title: "1. Kazık Düşeyliği ve Çap Toleransları (ICE Kriterleri)",
        blocks: [
          {
            type: "paragraph",
            content: "ICE standartlarına göre fore kazık düşey eksenden sapma toleransı maksimum 1/75 (yaklaşık %1.33) olmalıdır. Kazık merkez konum sapması ise yüzeyde maksimum 75mm ile sınırlandırılmıştır."
          }
        ]
      },
      {
        id: "tremie-betonlama",
        title: "2. Tremie Borulu Sualtı Betonlaması ve Slump Kabulü",
        blocks: [
          {
            type: "paragraph",
            content: "Yeraltı suyu altındaki delgilerde beton ayrışmasını (segregasyon) engellemek için minimum 180-220mm slump değerine sahip yüksek işlenebilirlikli C30/37 hazır beton kullanılır. Tremie borusu sürekli beton içinde min 2.0m gömülü kalmalıdır."
          }
        ]
      }
    ],
    faq: [
      { question: "ICE kılavuzuna göre fore kazık yükleme testleri nasıl yapılır?", answer: "Maksimum tasarım yükünün 1.5 katı hidrolik krikolarla kademeli uygulanır; oturma ve geri yaylanma değerleri mikrometrelerle 24 saat izlenir." }
    ],
    relatedSlugs: ["fore-kazik-tremie-beton-dokum-kriterleri", "kazik-yukleme-testleri"],
    keywords: ["ICE piling specification", "fore kazık kalite kontrol", "ICE kazık şartnamesi", "tremie betonlama"],
    published: true
  },
  {
    slug: "dunya-geoteknik-makine-ozellikleri-rehberi-bauer-soilmec-casagrande",
    title: "Dünya Geoteknik Makine Özellikleri Rehberi: Bauer, Soilmec, Casagrande & Metax Parkı",
    seoTitle: "Dünya Geoteknik Makine Özellikleri Rehberi 2026 | YER6",
    description: "Dünyanın önde gelen geoteknik delgi ve enjeksiyon makinelerinin (Bauer BG, Soilmec SM, Casagrande C6, Metax MP7) tork, delgi derinliği, motor gücü ve saha performans kriterleri.",
    excerpt: "Geoteknik zemin güçlendirme projelerinin başarısı, zemin matrisine uygun makine parkuru seçimine bağlıdır. Bauer, Soilmec, Casagrande, XCMG ve Metax gibi küresel üreticilerin delgi makineleri, triplex motopompaları ve jet grout santrallerinin mühendislik spesifikasyonları incelemesi.",
    category: "Zemin İyileştirme",
    readingTime: "15 dk",
    publishedAt: "2026-08-13",
    updatedAt: "2026-08-13",
    heroLabel: "Küresel Makine Anketi & Şartname",
    introduction: "Derin temel ve iksa altyapısında projenin süresi, maliyeti ve kalitesi doğru makine ve santral filosu seçimi ile doğrudan ilişkilidir. Bu kapsamlı rehberde, küresel ölçekte kullanılan ağır geoteknik delgi makineleri, yüksek basınçlı enjeksiyon pompaları ve jet grout mikser santrallerinin teknik değerlerini detaylandırıyoruz.",
    sections: [
      {
        id: "fore-kazik-makineleri",
        title: "1. Ağır Fore Kazık Delgi Makineleri (Bauer & XCMG)",
        blocks: [
          {
            type: "paragraph",
            content: "Derin temel imalatlarında yüksek tork ve eksenel baskı kuvveti (crowd force) gerektiren sert kayalı veya yüksek su seviyeli zeminlerde ağır kuleli hidrolik delgi makineleri kullanılır."
          },
          {
            type: "list",
            title: "Öne Çıkan Ağır Fore Kazık Makineleri Spesifikasyonları",
            items: [
              "Bauer BG 45: 461 kNm Tork, CAT C18 563 kW Motor, Maksimum 125.5m Delgi Derinliği, 3000mm Çap Kapasitesi.",
              "Bauer BG 28 H: 277 kNm Tork, CAT C13 354 kW Motor, Maksimum 65.8m Delgi Derinliği, 2300mm Çap Kapasitesi.",
              "Bauer BG 18 H: 177 kNm Tork, CAT C7.1 205 kW Motor, Maksimum 53.4m Delgi Derinliği, 1800mm Çap Kapasitesi.",
              "XCMG XR220D: 220 kNm Tork, Cummins QSL9 242 kW Motor, Maksimum 67.5m Delgi Derinliği, 2000mm Çap Kapasitesi."
            ]
          }
        ]
      },
      {
        id: "jet-grout-dsm-ankraj-makineleri",
        title: "2. Jet Grout, DSM ve Ankraj Delgi Makineleri (Soilmec & Casagrande & MDT)",
        blocks: [
          {
            type: "paragraph",
            content: "Esnek kule yapıları, yüksek rotasyon hızı ve hassas açı ayarı sunan hidrolik ankraj ve jet grout delgi makineleri, dar şantiye alanlarında ve zemin çivisi/iksa imalatlarında tercih edilir."
          },
          {
            type: "list",
            title: "Jet Grout & Ankraj Delgi Makineleri Teknik Değerleri",
            items: [
              "Soilmec SM-401: 14 kNm Tork, Deutz TCD 4.1 115 kW Motor, Tek Pas Jet Grout Kapasitesi, Dar Alan Eklemli Kule.",
              "Soilmec SM-14: 12 kNm Tork, Cummins QSB 4.5 119 kW Motor, Jet Grout / Ankraj / Mini Kazık Kombinasyonu.",
              "Casagrande C6 XP-2: 15.2 kNm Tork, Deutz TCD 3.6 100 kW Motor, 360 Derece Dönüşlü Kule Mimarisi.",
              "MDT 180 B: 18 kNm Tork, Perkins 129 kW Motor, Ağır Hizmet Tipi Mini Kazık ve Ankraj Delgi Seti."
            ]
          }
        ]
      },
      {
        id: "yüksek-basinc-pompalar-ve-santraller",
        title: "3. Yüksek Basınçlı Jet Grout Pompaları ve Otomatik Santraller (Metax & Soilmec)",
        blocks: [
          {
            type: "paragraph",
            content: "Jet Grout imalatının kalitesi (çap ve mukavemet), çimento harcını 400-600 bar aralığında memeden çıkaran triplex motopompalar ve kesintisiz karışım hazırlayan tam otomatik mikser santralleri ile sağlanır."
          },
          {
            type: "list",
            title: "Pompa ve Santral Ekipman Parametreleri",
            items: [
              "Metax MP7 Triplex Pompa: 600 Bar Maks Basınç, 240 L/dk Debisi, 400 kW Motor Gücü, Seramik Piston Yapısı.",
              "Soilmec 5T-400J Triplex Pompa: 500 Bar Çalışma Basıncı, 350 L/dk Debisi, Ağır Saha İklim Dayanımı.",
              "GM-25 Otomatik Çimento Santrali: 25 m³/saat Harç Üretim Kapasitesi, Dijital Tartım ve PLC Kontrol.",
              "60 Tonluk Dikey Çimento Silosu: Pnömatik Dolum, Çift Emniyet Valfi ve Toz Filtreli Çevre Standartları."
            ]
          }
        ]
      }
    ],
    faq: [
      { question: "Jet grout imalatında pompa basıncı kaç bar olmalıdır?", answer: "Jet 1 yönteminde 400 - 500 bar, Jet 2 ve Jet 3 yöntemlerinde hava ve su desteği ile 500 - 600 bar çalışma basınçları uygulanır." },
      { question: "Fore kazık delgi makinesi seçiminde tork ve motor gücü ne kadar önemlidir?", answer: "Sert kayalık ve kil tabakalarında kesme kuvveti doğrudan kütle torku (kNm) ile ilgilidir. Ø1500mm üzerindeki delgilerde 200 kNm üzeri makineler zorunludur." }
    ],
    relatedSlugs: ["jet-grout-nedir", "fore-kazik-nedir", "dsm-nasil-uygulanir", "jet-grout-kalite-kontrol-rehberi"],
    keywords: [
      "dünya geoteknik makineleri",
      "bauer bg 45 özellikleri",
      "bauer bg 28 h tork",
      "soilmec sm 401 jet grout",
      "casagrande c6 xp-2",
      "metax mp7 triplex pompa",
      "fore kazık delgi makinesi",
      "jet grout pompa basıncı",
      "geoteknik makine parkı"
    ],
    published: true
  },
  {
    slug: "turkiye-fore-kazik-rehberi-caplar-fiyatlar-deprem-dayanimi-ve-radye-temel",
    title: "Türkiye Fore Kazık Rehberi 2026: Çaplar (Ø65-Ø120), Deprem Dayanımı, Metre Fiyatları ve Radye Temel Karşılaştırması",
    seoTitle: "Fore Kazık Kaç Şiddetinde Depreme Dayanır? Fore Kazık mı Radye Temel mi? | YER6",
    description: "Fore kazık kaç şiddetinde depreme dayanır? Fore kazık mı radye temel mi? Ø65, Ø80, Ø100, Ø120 cm çaplar, metre fiyatları ve 81 ilde fore kazık geoteknik analizleri.",
    excerpt: "Fore kazık (bored pile) derin temel sistemleri; TBDY 2018 ve Eurocode 7 standartlarına göre zayıf zeminlerde bina yüklerini sağlam ana kayaya aktarır. Fore kazık ile radye temel farkları, deprem ivme dayanımı, çap seçim matrisi ve Türkiye genelinde maliyet parametreleri.",
    category: "Fore Kazık",
    readingTime: "16 dk",
    publishedAt: "2026-08-16",
    updatedAt: "2026-08-16",
    heroLabel: "Kapsamlı Fore Kazık & Deprem Rehberi",
    introduction: "Deprem kuşağında yer alan Türkiye'de zemin güvenliği, üstyapı statiğinin en belirleyici unsurudur. Bu kapsamlı mühendislik rehberinde; fore kazıkların kaç şiddetinde depreme dayandığı, radye temel ile fore kazık arasındaki yapısal farklar, zemin sınıflarına (ZA-ZF) göre kazıklı radye temel zorunlulukları, çap seçimleri (Ø65, Ø80, Ø100, Ø120 cm) ve 81 il bazında fore kazık uygulama kriterleri detaylandırılmıştır.",
    sections: [
      {
        id: "fore-kazik-deprem-dayanimi",
        title: "1. Fore Kazık Kaç Şiddetinde Depreme Dayanır?",
        blocks: [
          {
            type: "paragraph",
            content: "Geoteknik ve deprem mühendisliğinde (TBDY 2018 Bölüm 16) yapı temelleri 'Richter büyüklüğü' yerine 'En Büyük Zemin İvmesi' (PGA - Peak Ground Acceleration) ve spektral ivme katsayıları (S_DS, S_D1) ile projelendirilir."
          },
          {
            type: "paragraph",
            content: "Doğru tasarlanmış, donatı kafesi tam boy yerleştirilmiş ve sağlam ana kayaya zemin etüdü, RQD (Kaya Kalite Göstergesi), tek eksenli basınç dayanımı (UCS), süreksizlik geometrisi ve yapı yüklerine göre hesaplanan derinlikte soketlenen (rock-socketed) bir fore kazık sistemi; 0.60g - 0.80g zemin ivmesine (7.5 - 8.0+ Mw büyüklüğündeki yıkıcı depremlere) tam dayanım gösterecek şekilde kesme kuvveti (Vr) ve eğilme momenti (Mr) kapasitesine ulaştırılır."
          },
          {
            type: "paragraph",
            content: "Deprem esnasında yüzeydeki alüvyon, gevşek kum veya dolgu tabakası tamamen sıvılaşsa (sıvılaşma güvenlik katsayısı FS < 1.0) dahi, kazıklar sıvılaşan tabakayı baypas ederek yükü derindeki rijit kayaya aktarır. Böylece yapının devrilmesi, zemin içine batması veya toptan göçmesi mühendislik güvenlik katsayıları dahilinde engellenir."
          }
        ]
      },
      {
        id: "fore-kazik-mi-radye-temel-mi",
        title: "2. Fore Kazık mı Radye Temel mi? (Zemin Sınıflarına Göre Seçim)",
        blocks: [
          {
            type: "paragraph",
            content: "Radye temel ve fore kazık birbirinin rakibi değil, zemin sınıfına göre birbirini tamamlayan yüzeysel ve derin temel sistemleridir:"
          },
          {
            type: "list",
            title: "Zemin Sınıfına Göre Temel Karar Matrisi",
            items: [
              "ZA ve ZB Sınıfı (Sağlam / Az Ayrışmış Kaya): Yapı yükleri ve oturma kriterleri elverdiği takdirde radye temel öncelikli ve ekonomik seçenektir; yüksek yapı yükleri, eğimli araziler, fay zonları veya derin bodrum iksası gerektiren durumlar geoteknik tahkikle belirlenir.",
              "ZC Sınıfı (Çok Sıkı Kum/Çakıl ve Katı Kil): Yapı kat adedine, yapı-zemin periyoduna ve beklenen oturma mertebelerine göre radye temel genellikle yeterli olabilmektedir.",
              "ZD ve ZE Sınıfı (Yumuşak Kil, Gevşek Alüvyon, Yüksek Yeraltı Suyu): Salt yüzeysel radye temel; yüksek farklı oturma, yetersiz zemin taşıma gücü veya sıvılaşma durumlarında yapı güvenliğini tek başına sağlayamayabilir. Kahramanmaraş ve Hatay depremlerinde gözlemlendiği üzere, zayıf alüvyal tabakalarda binaların toptan göçme, yan yatma veya batma riskine karşı derin temel (kazıklı radye) veya zemin güçlendirme (DSM, Jet Grout) yöntemleriyle yapı-zemin etkileşimi (SSI) güvenceye alınır.",
              "ZF Sınıfı (Özel Araştırma Gerektiren / Sıvılaşabilir / Bataklık Zeminler): TBDY 2018 uyarınca sahaya özel geoteknik analiz zorunludur; fore kazık veya jet grout / DSM ile zemin güçlendirmesi yapılmadan inşaat ruhsatı verilemez."
            ]
          }
        ]
      },
      {
        id: "fore-kazik-radye-temel-farklari",
        title: "3. Fore Kazık ve Radye Temel Arasındaki 5 Temel Fark",
        blocks: [
          {
            type: "list",
            title: "Mühendislik Karşılaştırması",
            items: [
              "Yük Aktarım Derinliği: Radye temel 1-2.5 metre derinlikte yüzey gerilmesi oluştururken, fore kazık 15-45+ metre derinlikteki ana kayaya yük aktarır.",
              "Taşıma Mekanizması: Radye temel taban temas basıncıyla taşır; fore kazık uç mukavemeti (Qb) ve çevre sürtünmesi (Qs) kombinasyonu ile taşır.",
              "Sıvılaşma Performansı: Radye temel sıvılaşan zeminde taşıma gücünü kaybederek batar; fore kazık sıvılaşan katmanı delip kayaya kilitlenir.",
              "Oturma Kontrolü: Radye temelde farklı oturma (differential settlement) riski varken, kazıklı temelde oturmalar milimetrik düzeyde sınırlandırılır.",
              "Maliyet & Ekipman: Radye temel standart kalıp-beton imalatıdır; fore kazık yüksek torklu rotary delgi rigi (Bauer vb.) ve mühendislik uzmanlığı gerektirir."
            ]
          }
        ]
      },
      {
        id: "fore-kazik-cap-matrisi",
        title: "4. Çaplarına Göre Fore Kazık Kullanım Alanları (Ø65, Ø80, Ø100, Ø120 cm)",
        blocks: [
          {
            type: "list",
            title: "Çap Boyutlandırma ve Kullanım Kriterleri",
            items: [
              "Ø65 cm Fore Kazık: Düşük ve orta eksenel yüke sahip yapılar, kentsel dönüşüm bina temelleri, sığ iksa perdeleri ve hafif endüstriyel tesisler için değerlendirilen delgi çapıdır.",
              "Ø80 cm Fore Kazık: Konut ve ticari binalarda, orta derinlikteki iksa kazıklarında ve kentsel dönüşüm sahalarında sıkça tercih edilen standart çaptır.",
              "Ø100 cm Fore Kazık: Yüksek katlı yapılar, ağır sanayi fabrika temelleri, derin ankrajlı iksa sistemlerinde yüksek eksenel ve yanal moment taleplerini karşılar.",
              "Ø120 cm ve Üzeri Baret / Fore Kazıklar: Viyadük, köprü ayakları, metro istasyonları, liman rıhtımları ve enerji santralleri gibi mega altyapı projelerinde ağır eksenel ve kesme kuvvetlerini taşır."
            ]
          }
        ]
      },
      {
        id: "81-ilde-fore-kazik-hizmeti",
        title: "5. Türkiye'nin 81 İlinde ve Başlıca İlçelerde Fore Kazık Mühendisliği",
        blocks: [
          {
            type: "paragraph",
            content: "YER6 Geoteknik, güçlü ağır makine parkuru (Bauer BG 45, Bauer BG 28 H, Bauer BG 18 H, XCMG XR220D) ve uzman kadrosuyla Türkiye genelinde 81 ilde anahtar teslim fore kazık ve iksa imalatı gerçekleştirmektedir:"
          },
          {
            type: "list",
            title: "Bölgesel Zemin Karakteri ve Uygulama Alanları",
            items: [
              "İstanbul (Kadıköy, Bakırköy, Esenyurt, Kartal, Pendik, Silivri): Yoğun kentsel dönüşüm, bitişik nizam derin iksa kazıkları ve sahil alüvyonlarında kazıklı temel.",
              "Ankara (Çankaya, Gölbaşı, İncek, Yenimahalle, Sincan): Yüksek kot farkı bulunan arazilerde derin ankrajlı iksa perdeleri ve Ankara kili üzerinde ağır konut/kamu temelleri.",
              "İzmir (Bayraklı, Bornova, Karşıyaka, Çiğli, Aliağa): Körfez alüvyonu, yüksek yeraltı suyu ve sıvılaşma riskine karşı kaya soketli fore kazık ve kazıklı radye çözümleri.",
              "Kocaeli & Bursa (Gebze, İzmit, Nilüfer, Gemlik): Ağır sanayi tesisleri, lojistik depolar ve kıyı liman yapılarında yüksek taşıma kapasiteli kazık sistemleri.",
              "Deprem Bölgesi (Hatay, Kahramanmaraş, Adıyaman, Malatya, Gaziantep): Sıvılaşabilir ZE/ZF zeminlerde TBDY 2018 standartlarına tam uyumlu yeni nesil sismik derin temel imalatları."
            ]
          }
        ]
      }
    ],
    faq: [
      { question: "Fore kazık kaç şiddetinde depreme dayanır?", answer: "Mühendislik hesaplarında deprem dayanımı Richter büyüklüğü yerine Zemin İvmesi (PGA) ile belirlenir. TBDY 2018 standartlarında ana kayaya soketlenen donatılı fore kazıklar; 0.60g - 0.80g zemin ivmesine (7.5 - 8.0+ Mw büyüklüğündeki yıkıcı depremlere) tam dayanım sağlayarak binanın devrilmesini ve oturmasını mühendislik sınırları içinde tutar." },
      { question: "Fore kazık mı radye temel mi tercih edilmelidir?", answer: "Sağlam kaya ve sıkı zeminlerde (ZA, ZB) yapı yükleri izin verdiği sürece radye temel öncelikli ve ekonomiktir. Ancak yumuşak kil, dolgu ve sıvılaşma potansiyeli olan ZD, ZE, ZF zeminlerde farklı oturma ve taşıma yetersizliklerini önlemek için radye plağın altı fore kazıklarla derin taşıyıcı tabakalara bağlanarak 'Kazıklı Radye Temel' (Piled Raft) veya zemin güçlendirme çözümleri uygulanmalıdır." },
      { question: "Fore kazık metre fiyatı 2026 yılında nasıl hesaplanır?", answer: "Fore kazık birim fiyatı; kazık çapına (Ø65-Ø120 cm), toplam metraja, zeminin sertliğine (kaya soketi veya alüvyon delgisi), kılıf (casing) kullanımına, demir donatı tonajına ve beton sınıfına göre hesaplanır. YER6 canlı Fore Kazık Hesaplama Motoru üzerinden yaklaşık maliyet anında hesaplanabilir." },
      { question: "Fore kazık çapı (Ø65, Ø80, Ø100, Ø120 cm) neye göre seçilir?", answer: "Çap seçimi; üstyapı statik yükleri, kolon eksenel kuvvetleri, devrilme momentleri, yanal deprem kuvvetleri ve zemin taşıma gücüne göre geoteknik proje mühendisi tarafından optimize edilir. Tipik olarak orta yüklerde Ø65–Ø80 cm, yüksek katlı yapılarda Ø100 cm, köprü ve altyapı projelerinde Ø120 cm ve üzeri çaplar boyutlandırılır." }
    ],
    relatedSlugs: ["fore-kazik-nedir", "fore-kazik-maliyeti", "kazik-yukleme-testleri", "dunya-geoteknik-makine-ozellikleri-rehberi-bauer-soilmec-casagrande"],
    keywords: [
      "fore kazık kaç şiddetinde depreme dayanır",
      "fore kazık mı radye temel mi",
      "fore kazık ve radye temel arasındaki fark",
      "kazıklı radye temel nedir",
      "fore kazık çapları 65 80 100 120",
      "fore kazık metre fiyatı 2026",
      "fore kazık firmaları türkiye",
      "istanbul fore kazık firmaları",
      "ankara fore kazık firmaları",
      "izmir fore kazık firmaları"
    ],
    published: true
  },
  {
    slug: "mini-kazik-ile-bina-temel-guclendirme-rehberi",
    title: "Mini Kazık ile Bina Temel Güçlendirme Rehberi: Kentsel Dönüşüm, Çatlak Tamiri ve 2026 Fiyatları",
    seoTitle: "Mini Kazık ile Bina Temel Güçlendirme & Kentsel Dönüşüm 2026 | YER6",
    description: "Mini kazık ile bina temel güçlendirme nasıl yapılır? Kentsel dönüşüm dar alanlar, alçak tavanlı bodrum katlar (H < 2.40m), oturan bina kurtarma ve 2026 metre fiyatları.",
    excerpt: "Mini kazık (mikropile) sistemleri; TS EN 14199 standardına göre büyük delgi makinelerinin giremediği dar şehir içi parsellerde ve mevcut binaların bodrum katlarında titreşimsiz temel güçlendirmesi sağlar.",
    category: "Mini Kazık",
    readingTime: "12 dk",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    heroLabel: "Kentsel Dönüşüm & Güçlendirme Rehberi",
    introduction: "Türkiye'nin kentsel dönüşüm seferberliğinde ve deprem kuşağındaki şehirlerimizde karşılaşılan en büyük mühendislik zorluğu; dar sokaklar, bitişik nizam yapılar ve alçak tavanlı bodrum katlarında ağır fore kazık makinelerinin çalışamamasıdır. Bu rehberde, oturan ve çatlayan binaların mini kazıkla nasıl kurtarıldığını (underpinning), Ø150-Ø300 mm delgi çaplarını ve 2026 maliyet parametrelerini inceliyoruz.",
    sections: [
      {
        id: "oturan-bina-kurtarma-underpinning",
        title: "1. Oturan veya Çatlayan Binalarda Mini Kazık ile Kurtarma (Underpinning)",
        blocks: [
          {
            type: "paragraph",
            content: "Temel altındaki dolgu veya killi zeminlerin konsolidasyonu sonucu binada farklı oturma ve duvarlarda 45 derece diyagonal çatlaklar oluştuğunda en güvenli çözüm 'Underpinning' yani mini kazıklarla temel altı takviyesidir. Mevcut radye temel veya sömel kenarlarından açılan karot deliklerinden zemine Ø200-Ø250 mm çelik borulu mini kazıklar çakılır ve epoksi ankraj filizleriyle mevcut temele kilitlenir. Yapı yükü zayıf dolgudan alınarak sağlam derin tabakalara aktarılır."
          }
        ]
      },
      {
        id: "alçak-tavan-bodrum-mini-rig",
        title: "2. Alçak Tavanlı Bodrum Katlarda (H < 2.40 m) Kompakt Mini Delgi Operasyonu",
        blocks: [
          {
            type: "paragraph",
            content: "Klasik fore kazık makineleri en az 8-12 metre tavan yüksekliğine ihtiyaç duyar. YER6 makine parkurunda yer alan özel elektrikli ve modüler mini kazık kuleleri, 2.00 - 2.40 metre tavan yüksekliğine sahip kapalı bodrum katlarında, otoparklarda ve kazan dairelerinde binaya zerre titreşim vermeden ve dizel egzoz dumanı çıkarmadan hidrolik torkla imalat yapar."
          }
        ]
      },
      {
        id: "dar-parsel-bitisik-nizam",
        title: "3. Dar Sokaklarda ve Bitişik Nizam Parsellerde İksa Güvenliği",
        blocks: [
          {
            type: "paragraph",
            content: "Kentsel dönüşümde yan binaya sıfır mesafede yapılan derin bodrum kazılarında, komşu binanın temeline zarar vermemek için kesişen veya aralıklı mini kazık perdesi imal edilir. Mini kazıkların arkasına öngermeli ankrajlar uygulanarak komşu yapının temeli milimetrik deplasman toleransıyla askıya alınır."
          }
        ]
      },
      {
        id: "2026-mini-kazik-metre-fiyati",
        title: "4. 2026 Mini Kazık Metre Birim Fiyatı ve Maliyet Bileşenleri",
        blocks: [
          {
            type: "paragraph",
            content: "Mini kazık metre birim fiyatı; delgi çapına (Ø150, Ø200, Ø250, Ø300 mm), kuyu derinliğine, kullanılan çelik muhafaza borusu (casing) veya donatı demiri tonajına ve m³ başına çimento grout sarfiyatına göre belirlenir. YER6 canlı Mini Kazık Maliyet Hesaplama aracı üzerinden projenizin yaklaşık metraj maliyetini saniyeler içinde hesaplayabilirsiniz."
          }
        ]
      }
    ],
    faq: [
      { question: "Mini kazık mevcut oturan bir binayı düzeltir mi?", answer: "Mini kazıklar hidrolik krikolarla birlikte kullanıldığında (hidrolik kriko underpinning) binadaki oturmayı durdurur ve kademeli yükleme ile binayı güvenli terazi kotuna alabilir." },
      { question: "Mini kazık yapımı sırasında binada yaşayanların tahliye edilmesi gerekir mi?", answer: "Titreşimsiz rotary ve hidrolik delgi makineleri kullanıldığı için çoğu güçlendirme projesinde bina sakinlerinin tahliye edilmesine gerek kalmadan bodrum kattan imalat tamamlanabilir." },
      { question: "Mini kazık mı jet grout mu bina güçlendirmede tercih edilmelidir?", answer: "Alçak tavanlı bodrumlarda ve çamur tahliyesinin riskli olduğu killi sahalarda mini kazık daha temiz ve kontrollüdür. Su geçirimsizlik perdesi gereken veya kumlu sıvılaşabilir sahalarda ise jet grout öne çıkar." }
    ],
    relatedSlugs: ["mini-kazik-nedir", "mini-kazik-tercih-nedenleri", "mini-kazik-mi-fore-kazik-mi"],
    keywords: ["mini kazık ile bina güçlendirme", "mini kazık firmaları", "kentsel dönüşüm mini kazık", "oturan bina güçlendirme", "mini kazık metre fiyatı 2026", "underpinning"],
    published: true
  }
];

