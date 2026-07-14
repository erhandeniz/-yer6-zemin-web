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
            content: "Geoteknik firmanın, kiralık makine yerine kendi mülkiyetindeki modern makine parkına sahip olması esneklik sağlar. Daha da önemlisi, DSM veya Jet Grout gibi makinelerde basınç, devir, hız verilerini anlık kaydeden dijital sensör (data logger) sistemlerinin bulunması kalite kontrol için zorunludur."
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
    relatedSlugs: ["zemin-iyilestirme-yontemleri", "geoteknik-danismanlik"],
    keywords: ["zemin iyileştirme firmaları", "geoteknik firmaları", "fore kazık firmaları", "jet grout firmaları", "zemin güçlendirme firmaları"],
    published: true
  }
];
