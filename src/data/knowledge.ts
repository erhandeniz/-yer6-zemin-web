import type { KnowledgeArticle } from "@/types/knowledge";
import { seoArticles } from "./seo-articles";
export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "jet-grout-nedir",
    title: "Jet Grout Nedir? Kullanım Alanları ve Çalışma Prensibi",
    seoTitle: "Jet Grout Nedir? Zemin Güçlendirme ve Jet Grouting Firmaları | YER6",
    description:
      "Jet Grout nedir? Zemin güçlendirme yöntemleri, DSM, mini kazık ve zemin enjeksiyonu ile karşılaştırmalı jet grouting taşıma kapasitesi rehberi.",
    excerpt:
      "Jet Grout; kum, silt ve kil gibi farklı zeminlerde yüksek basınçlı çimento şerbetiyle zemin-çimento kolonları oluşturan bir zemin iyileştirme yöntemidir. Zeminin taşıma gücünü artırmaya, oturmaları azaltmaya ve geçirimsizliği iyileştirmeye yardımcı olur.",
    category: "Jet Grout",
    readingTime: "9 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "Jet Grout Bilgi Merkezi",
    introduction:
      "Jet Grout, yerinde zemin iyileştirmede sık kullanılan enjeksiyon tekniklerinden biridir. Saha koşullarına göre ayarlanabilen basınç, karışım ve delgi stratejileri sayesinde farklı zemin özelliklerinde kolonlar oluşturur.",
    sections: [
      {
        id: "definition",
        title: "Jet Grout Tanımı",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet Grout, yüksek basınçlı su ve çimento karışımının aynı anda zemine enjekte edilmesiyle zemin-çimento karışımı oluşturan bir geoteknik uygulamadır. Bu yöntem, zemin içinde kolonlar oluşturarak taşıma kapasitesini ve stabiliteyi artırır."
          },
          {
            type: "paragraph",
            content:
              "Jet Grout kolonları, sadece dolgu veya zemini aktifleştirmekle kalmaz; aynı zamanda su geçirimsizlik performansını da destekler. Bu nedenle uygulama, hem çökelme kontrolü hem de yeraltı suyu yönetimine yönelik çözümlerde tercih edilir."
          }
        ]
      },
      {
        id: "working-principle",
        title: "Çalışma Prensibi",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet Grout uygulamasında önce delgi yapılır, sonra enjeksiyon başlığı ile yüksek hızlı bir sıvı jeti oluşturulur. Bu jet, zemini parçalar ve aynı anda çimento karışımı zemine dağıtarak zemin-çimento karışımı üretir."
          },
          {
            type: "list",
            title: "Temel adımlar",
            items: [
              "Delgi makinesi ile kolon hattının açılması",
              "Jet başlığının zemine yerleştirilmesi",
              "Yüksek basınçlı çimento karışımının enjekte edilmesi",
              "Kolon oluşurken kontrollü geri çekilme"
            ]
          },
          {
            type: "note",
            title: "Saha uyumu",
            content:
              "Jet Grout uygulaması, sondaj ve zemin verilerini temel alarak projelendirilmelidir. Farklı zemin türleri için basınç, karışım oranı ve geri çekilme hızı değişir."
          }
        ]
      },
      {
        id: "column-formation",
        title: "Zemin-Çimento Kolonunun Oluşması",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet Grout kolonları, zemin ve çimento arasındaki sınırda devamlı bir geçirgen zemin-çimento karışımı oluşturur. Bu kolonlar, yüksek basınçlı jetin zemini parçalayarak karışımı dağıtmasıyla meydana gelir."
          },
          {
            type: "paragraph",
            content:
              "Kolon çapı, kullanılan sistem, karışım viskozitesi ve geri çekilme hızına göre kontrol edilir. Yerinde deneyler, kolon geometrisinin tasarımda netleşmesini sağlar."
          }
        ]
      },
      {
        id: "applications",
        title: "Uygulamanın Temel Bileşenleri",
        blocks: [
          {
            type: "list",
            title: "Jet Grout uygulamasının ana bileşenleri",
            items: [
              "Delgi makinesi ve kolon hattı aplikasyonu",
              "Yüksek basınç pompası ve enjeksiyon tesisatı",
              "Çimento karışım tankları ile dozaj kontrolü",
              "Jet başlığı ve geri çekme mekanizması",
              "Karot, numune ve saha kalibrasyonu"
            ]
          },
          {
            type: "warning",
            title: "Proje reçetesinde kesinlik",
            content:
              "Jet Grout parametreleri projeye, zemin koşullarına ve mühendislik gereksinimlerine göre belirlenmelidir; bu yüzden saha uygulaması sırasında sabit bir reçete kullanılmamalıdır."
          }
        ]
      },
      {
        id: "use-cases",
        title: "Hangi Sorunların Çözümünde Kullanılır?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet Grout, zemin taşıma gücünü artırmak, oturmayı azaltmak, su geçirimsizlik sağlamak veya mevcut yapı altındaki zemin koşullarını iyileştirmek için kullanılır. Bu yöntem, özellikle sıkı yerleşimlerde ve su etkisi olan zeminde tercih edilir."
          },
          {
            type: "list",
            items: [
              "Temel altı zemin iyileştirmesi",
              "Bodrum ve kazı tabanı stabilizasyonu",
              "Zemin geçirimsizlik ve su sızdırmazlığı",
              "Yeraltı suyu yakınındaki taşıma gücü artırımı"
            ]
          }
        ]
      },
      {
        id: "advantages-limitations",
        title: "Avantajları ve Sınırlamaları",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet Grout, tekniğine uygun uygulandığında çok yönlü bir çözüm sunar. Zemin-çimento kolonları farklı derinliklerde ve çaplarda üretilebilir. Ancak her zemin türü için aynı parametre geçerli değildir."
          },
          {
            type: "note",
            title: "Teknik sınırlama",
            content:
              "Çakıllı veya çok heterojen zeminler, enjeksiyon kontrolü ve kolon sürekliliği açısından özel tasarım gerektirir. Bu nedenle saha çalışmaları ve deneme kolonları önem kazanır."
          }
        ]
      },
      {
        id: "comparison",
        title: "Diğer Yöntemlerle İlişkisi",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet Grout, DSM veya fore kazık gibi yöntemlerden farklı bir üretim karakteri taşır. Jet Grout, yüksek basınçlı sıvı jeti vasıtasıyla zemini dönüştürürken, DSM daha çok karıştırma ve zemini stabilize etme prensibine dayanır."
          },
          {
            type: "list",
            items: [
              "Jet Grout: yüksek basınçlı enjeksiyon ile kolon üretimi",
              "DSM: zemin-karışım homojenizasyonu",
              "Fore kazık: donatı ve beton temelli taşıyıcı eleman"
            ]
          }
        ]
      }
    ],
    faq: [
      {
        question: "Jet Grout uygulaması hangi zeminde uygundur?",
        answer:
          "Jet Grout, kumlu, siltli ve kil içeren zeminlerde uygulanabilir; ancak zemin heterojenliği ve yeraltı suyu seviyesi projelendirme sürecinde belirleyici olur."
      },
      {
        question: "Deneme kolonları neden önemlidir?",
        answer:
          "Deneme kolonları, enjeksiyon basıncı, karışım oranı ve kolon geometrisini saha koşullarına göre test etmek için kullanılır. Böylece uygulamanın tasarımı güvenilir verilerle desteklenir."
      }
    ],
    relatedSlugs: ["jet-grout-uygulama-asamalari", "jet-grout-hangi-zeminlerde-uygulanir"],
    keywords: [
      "jet grout nedir",
      "jet grout uygulama aşamaları",
      "zemin iyileştirme",
      "zemin güçlendirme",
      "geoteknik enjeksiyon"
    ],
    published: true
  },
  {
    slug: "jet-grout-uygulama-asamalari",
    title: "Jet Grout Uygulama Aşamaları: Delgiden Kalite Kontrole",
    seoTitle: "Jet Grout Uygulama Aşamaları: Delgiden Kalite Kontrole | YER6",
    description:
      "Jet Grout saha uygulaması, delgi ve enjeksiyon adımlarının planlanması, üretim kaydı ve kalite kontrol zinciriyle tamamlanır.",
    excerpt:
      "Jet Grout uygulama aşamaları; saha hazırlığı, ekipman kurulumu, delgi, enjeksiyon ve kalite kontrol süreçlerini içerir.",
    category: "Jet Grout",
    readingTime: "10 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "Jet Grout Aşamaları",
    introduction:
      "Bir Jet Grout uygulaması sadece enjeksiyon sürecinden ibaret değildir. Sahayı okumak, ekipmanı yerleştirmek ve üretimi kayıt altına almak teknik başarı için kritik adımlardır."
    ,
    sections: [
      {
        id: "site-review",
        title: "Saha ve Zemin Verilerinin İncelenmesi",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet Grout projesi, zemin etüdü, sondaj verileri, laboratuvar raporları ve jeoteknik model üzerine inşa edilir. Saha belirsizlikleri analiz edilmeden uygulama başlamamalıdır."
          },
          {
            type: "list",
            items: [
              "Jeofizik verilerin değerlendirilmesi",
              "Sondajlı zemin profilleri ve numune sonuçları",
              "Yeraltı suyu seviyesi ve akım yönü",
              "Zemin heterojenliğinin proje etkisi"
            ]
          }
        ]
      },
      {
        id: "platform",
        title: "Çalışma Platformunun Hazırlanması",
        blocks: [
          {
            type: "paragraph",
            content:
              "Saha platformu, ekipman yerleşimi, malzeme stok alanları ve güvenli çalışma koridorları dikkate alınarak düzenlenir. Bu adım, mobil saha üretimi ve saha lojistiği için temel oluşturur."
          },
          {
            type: "note",
            title: "Güvenlik ve erişim",
            content:
              "Jet Grout sahası, yüksek basınçlı ekipman ve ağır delgi makinesi içerdiğinden, çevre güvenliği ve erişim kontrollü şekilde planlanmalıdır."
          }
        ]
      },
      {
        id: "layout",
        title: "Kolon Merkezlerinin Aplikasyonu",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet Grout kolon hattı, projenin taşıma ve su geçirimsizlik gereksinimlerine göre aplikasyon edilir. Kolon merkezleri, yüzeyden ölçümler ve formatlar ile belirlenir."
          },
          {
            type: "list",
            items: [
              "Kolon çapı ve aralığının belirlenmesi",
              "Yeraltı suyu koşullarına göre imalat çizgisi",
              "Komşu yapı ve altyapıya yakınlığın hesaplanması"
            ]
          }
        ]
      },
      {
        id: "equipment",
        title: "Ekipman Kurulumu",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet Grout sahasında delgi makinesi, yüksek basınç pompası, çimento mikseri ve enjeksiyon manifoldu arasında uyumlu bir akış sağlanmalıdır. Bağlantı hatalarına açık bölgeler sürekli kontrol edilmelidir."
          },
          {
            type: "warning",
            title: "Sistem testi",
            content:
              "Uygulama öncesinde tüm vanalar, basınç göstergeleri ve karışım dozaj cihazları çalışır durumda olmalıdır. Aksi halde saha üretimi kesintiye uğrayabilir."
          }
        ]
      },
      {
        id: "drilling",
        title: "Delgi",
        blocks: [
          {
            type: "paragraph",
            content:
              "Delgi aşaması, kolon merkezinin yüzeyden zemine aktarılması ve hedef derinliğe erişilmesi olarak iki unsuru içerir. Sondaj, zemin katmanını bozmadan yapılmalıdır."
          },
          {
            type: "list",
            items: [
              "Delgi makinesi seçim kriterleri",
              "Koruma borusu ve stabilizasyon",
              "İlerleme hızı ve çekirdek kontrolü"
            ]
          }
        ]
      },
      {
        id: "mixing",
        title: "Enjeksiyon Karışımının Hazırlanması",
        blocks: [
          {
            type: "paragraph",
            content:
              "Çimento karışımı, su-çimento oranı ve katkı dozajı zemin koşullarına göre ayarlanır. Karışımın viskozitesi, jetleme performansını ve kolon dayanımını etkileyen temel parametrelerden biridir."
          },
          {
            type: "list",
            items: [
              "Dozaj kontrollü çimento pompası",
              "Sıvı katkı maddesi uygulamaları",
              "Karışım stabilitesi için mikser devri"
            ]
          }
        ]
      },
      {
        id: "jetting",
        title: "Jetleme",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jetleme, yüksek basınçlı çimento karışımının zemine yönlendirilmesidir. Bu esnada kolonda zeminin parçalanması ve karışımın yayılması birlikte kontrol edilir."
          },
          {
            type: "paragraph",
            content:
              "Basma ve geri çekilme hızları, kolon çapını ve zemindeki karışım dağılımını belirler. Bu süreç, Jet-1, Jet-2 ve Jet-3 sistemlerine göre ayrı stratejiler gerektirir."
          }
        ]
      },
      {
        id: "retraction",
        title: "Dönüş ve Geri Çekme",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet başlığı geri çekilirken enjeksiyon basıncı kontrollü olarak devam eder. Bu hareket, kolonun sürekliliğini ve hedef çapta oluşmasını sağlar."
          },
          {
            type: "note",
            title: "Üretim kaydı",
            content:
              "Geri çekme sırasında her milimetre için basınç ve debi kaydı tutulmalıdır. Bu veriler, kalite kontrol raporunda saha üretim parametrelerini gösterir."
          }
        ]
      },
      {
        id: "quality-control",
        title: "Numune, Karot ve Raporlama",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet Grout kolonlarının kalitesi saha numuneleri, karot kesitleri ve görsel değerlendirme ile doğrulanır. Bu kontroller, uygulamanın proje spesifikasyonuna uygunluğunu gösterir."
          },
          {
            type: "list",
            items: [
              "Karot üzerinden kolon çapı ve süreklilik kontrolü",
              "Numune testleri ile çimento bağlama durumu",
              "Saha raporlarında parametrelerin karşılaştırılması"
            ]
          }
        ]
      }
    ],
    faq: [
      {
        question: "Jet Grout uygulamasında kalite kontrol nasıl yapılır?",
        answer:
          "Kalite kontrol; üretim kayıtları, karot kesitleri ve saha denetimleri ile yürütülür. Kolon çapı, basınç değişimleri ve karışım parametreleri birlikte değerlendirilir."
      },
      {
        question: "Uygulamadan sonra ne tür raporlama gerekir?",
        answer:
          "Saha raporları, test sonuçları ve üretim logları, teslim dosyasında Jet Grout kolonlarının performansını destekleyecek biçimde düzenlenir."
      }
    ],
    relatedSlugs: ["jet-grout-nedir", "jet-grout-hangi-zeminlerde-uygulanir"],
    keywords: [
      "jet grout aşamaları",
      "zemin enjeksiyon süreci",
      "jet grout kalite kontrol",
      "jet grout uygulama"
    ],
    published: true
  },
  {
    slug: "jet-grout-hangi-zeminlerde-uygulanir",
    title: "Jet Grout Hangi Zeminlerde Uygulanır?",
    seoTitle: "Jet Grout Hangi Zeminlerde Uygulanır? | YER6",
    description:
      "Jet Grout, kumlu, siltli, killi ve dolgu zeminlerde farklı yöntemlerle uygulanabilir. Zemin türü saha projelendirmesinde belirleyicidir.",
    excerpt:
      "Jet Grout uygulanabilecek zemin türleri arasında kumlu, çakıllı, siltli, killi ve dolgu zeminler yer alır. Her durumda deneme kolonları önem kazanır.",
    category: "Jet Grout",
    readingTime: "9 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "Jet Grout Zemin Türleri",
    introduction:
      "Jet Grout zemin türü bilgisi, uygulamanın başarısını belirleyen önemli bir unsurdur. Zemin karakterine göre sistem seçimi ve karışım reçetesi değişir.",
    sections: [
      {
        id: "importance",
        title: "Zemin Türünün Önemi",
        blocks: [
          {
            type: "paragraph",
            content:
              "Zemin türü, Jet Grout kolonlarının oluşumu, karışım kontrolü ve enjeksiyon stratejisini etkiler. Kumlu zeminlerde farklı, killi zeminlerde farklı parametreler önceliklidir."
          },
          {
            type: "note",
            title: "Tek reçete yok",
            content:
              "Her zemin için tek bir Jet Grout reçetesi yoktur. Tasarım, laboratuvar sonuçları ve saha denemeleri temelinde hazırlanmalıdır."
          }
        ]
      },
      {
        id: "sandy-soils",
        title: "Kumlu Zeminler",
        blocks: [
          {
            type: "paragraph",
            content:
              "Kumlu zeminler, Jet Grout uygulamasına iyi yanıt verir; çünkü zeminin kolay parçalanması ve enjeksiyon jetinin yayılması daha homojendir. Ancak yüksek geçirgenlik nedeniyle enjeksiyon basıncı dikkatli seçilmelidir."
          },
          {
            type: "list",
            items: [
              "Basınçlı jetin kum tanelerini ayırması",
              "Yüksek viskoziteli karışım tercihleri",
              "Kolon sürekliliğinin izlenmesi"
            ]
          }
        ]
      },
      {
        id: "gravelly-soils",
        title: "Çakıllı Zeminler",
        blocks: [
          {
            type: "paragraph",
            content:
              "Çakıllı zeminlerde Jet Grout kolon sürekliliğini sağlamak zordur. Bu durumda yüksek enerjili jet ve uygun karışım tasarımı gerekir. Çakıl boyutu ve geometri dikkatlice değerlendirilmelidir."
          },
          {
            type: "warning",
            title: "Saha denemesi şart",
            content:
              "Çakıllı zeminlerde deneme kolonları, enjeksiyon hatasına karşı kolon sürekliliğini kontrol etmek için gereklidir."
          }
        ]
      },
      {
        id: "silty-soils",
        title: "Siltli Zeminler",
        blocks: [
          {
            type: "paragraph",
            content:
              "Siltli zeminler, jet karışımının yayılmasını sınırlayan ince taneli davranış sergiler. Bu nedenle enjeksiyon basıncı ince ayar gerektirir ve numune kontrolleri önem kazanır."
          },
          {
            type: "list",
            items: [
              "Karışım oranının ayarlanması",
              "Kolon çapı kontrolü",
              "Saha kararlılığının izlenmesi"
            ]
          }
        ]
      },
      {
        id: "clayey-soils",
        title: "Killi Zeminler",
        blocks: [
          {
            type: "paragraph",
            content:
              "Killi zeminlerde Jet Grout uygulaması, çimento karışımı ile zeminin bir ölçüde kırılmasını gerektirir. Killi yapıdaki su içeriği ve plastisite, enjeksiyon akışkanlığını etkiler."
          },
          {
            type: "note",
            title: "Hassas parametreler",
            content:
              "Kil oranına göre karışım ve basınç ayarlarında tolerans daralır. Bu nedenle pilot uygulamalar planlanmalıdır."
          }
        ]
      },
      {
        id: "fill-soils",
        title: "Dolgu Zeminler",
        blocks: [
          {
            type: "paragraph",
            content:
              "Dolgu zeminler, heterojenlik ve organik içerik nedeniyle en fazla dikkat gerektiren sınıflardan biridir. Dolgu içeriği ve sıkılığı, Jet Grout kolonunun sürekliliğini belirler."
          },
          {
            type: "list",
            items: [
              "Ön zemin araştırması ve dolgu malzemesi analizi",
              "Karışım stabilitesinin değerlendirilmesi",
              "Kolon hatları ve derinliğinin proje uyumu"
            ]
          }
        ]
      },
      {
        id: "heterogeneous",
        title: "Heterojen Zeminler",
        blocks: [
          {
            type: "paragraph",
            content:
              "Heterojen zeminler, Jet Grout projesinde özel tasarım gerektirir. Birden fazla zemin tabakası olan sahalarda her tabaka için uygun enjeksiyon stratejisi geliştirilmelidir."
          }
        ]
      },
      {
        id: "groundwater",
        title: "Yeraltı Suyunun Uygulamaya Etkisi",
        blocks: [
          {
            type: "paragraph",
            content:
              "Yeraltı suyu, Jet Grout uygulamasında hem pozitif hem de negatif etki yaratır. Su basıncı enjeksiyon performansını etkiler ve geçirimsizlik gereksinimini belirler."
          },
          {
            type: "list",
            items: [
              "Su seviyesi kontrolü",
              "Sızıntı riski ve enjeksiyon kontrolü",
              "Saha drenajı planlaması"
            ]
          }
        ]
      },
      {
        id: "trial-columns",
        title: "Deneme Kolonunun Önemi",
        blocks: [
          {
            type: "paragraph",
            content:
              "Deneme kolonları, Jet Grout parametrelerinin sahada doğrulanması için kullanılır. Deneme sonuçları; basınç, mezür, kolon çapı ve numune performansı açısından değerlendirilir."
          },
          {
            type: "note",
            title: "Projeye özgü veri",
            content:
              "Her saha için elde edilen deneme verileri, nihai uygulama planının temelini oluşturur. Bu detaylar, genel bir tarife değil saha özgü bir reçetedir."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Jet Grout hangi zemin çeşitlerinde daha uygun?",
        answer:
          "Jet Grout, özellikle kumlu ve siltli zeminlerde yaygın olarak uygulanır. Çakıllı ve dolgu zeminlerde de proje tasarımı ve deneme kolonlarıyla çözüm üretilebilir."
      },
      {
        question: "Yeraltı suyu olan sahalarda nelere dikkat edilmelidir?",
        answer:
          "Su seviyesi, enjeksiyon basıncı ve geçirimsizlik gereksinimleri saha planlamasında birlikte değerlendirilmelidir. Yeraltı suyu koşuluna göre drenaj ve kontrol önlemleri eklenir."
      }
    ],
    relatedSlugs: ["jet-grout-nedir", "jet-grout-uygulama-asamalari"],
    keywords: [
      "jet grout zemin türleri",
      "jet grout hangi zeminde",
      "saha zemin etüdü",
      "deneme kolonları"
    ],
    published: true
  },
  {
    slug: "jet-grout-kolon-capi",
    title: "Jet Grout Kolon Çapı",
    seoTitle: "Jet Grout Kolon Çapı | YER6",
    description: "Jet Grout kolon çapını etkileyen parametreler; zemin, basınç ve uygulama yöntemiyle belirlenir.",
    excerpt: "Jet Grout kolon çapı zemin koşullarına, enjeksiyon sistemine ve taşıma gücü gereksinimine göre tasarlanır.",
    category: "Jet Grout",
    readingTime: "8 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "Jet Grout Kolon Çapı",
    introduction:
      "Jet Grout kolon çapı, zemin koşulları, sistem seçimi ve projenin taşıma gücü gereksinimleri doğrultusunda tasarlanır. Doğru çap seçimi kolon performansını doğrudan etkiler.",
    sections: [
      {
        id: "design-factors",
        title: "Kolon Çapını Belirleyen Faktörler",
        blocks: [
          {
            type: "paragraph",
            content:
              "Kolon çapı, zemin tipi, enjeksiyon basıncı ve istenen taşıma kapasitesine göre değişir. İnce taneli zeminler ve su dolu tabakalarda çap seçimi daha hassas yapılmalıdır."
          },
          {
            type: "list",
            items: [
              "Zemin geçirgenliği ve sınıflandırması",
              "Kullanılacak sistemin jet enerjisi",
              "Proje yükleme ve hizmet şartları"
            ]
          }
        ]
      },
      {
        id: "field-implementation",
        title: "Saha Uygulamasında Çap Kontrolü",
        blocks: [
          {
            type: "paragraph",
            content:
              "Saha uygulaması sırasında mezür, basınç ve dönüş hızları izlenerek kolon çapı kontrol edilir. Deneme kolonları, tüm saha için kullanılacak standart çap değerlerini doğrular."
          },
          {
            type: "note",
            title: "Deneme kolonları kritik",
            content:
              "Deneme kolonları, tasarımda belirsizliği azaltır ve gerçek zemin koşullarında en uygun çapın belirlenmesine yardımcı olur."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Jet Grout kolon çapı nasıl hesaplanır?",
        answer:
          "Kolon çapı hesaplaması zemin koşulları, taşıma gereksinimleri ve enjeksiyon parametreleri dikkate alınarak yapılır. Proje spesifikasyonları saha verilerine göre ayarlanmalıdır."
      },
      {
        question: "Küçük çaplı kolonlar her zaman ekonomik midir?",
        answer:
          "Daha küçük çaplı kolonlar malzeme açısından avantajlı olabilir, ancak yeterli taşıma kapasitesi sağlanmalı ve süreklilik kontrolü yapılmalıdır."
      }
    ],
    relatedSlugs: ["jet-grout-uygulama-asamalari", "jet-grout-hangi-zeminlerde-uygulanir"],
    keywords: ["jet grout kolon çapı", "kolon çapı faktörleri", "jet grout tasarımı"],
    published: true
  },
  {
    slug: "jet-grout-kalite-kontrol",
    title: "Jet Grout Kalite Kontrol",
    seoTitle: "Jet Grout Kalite Kontrol | YER6",
    description: "Jet Grout uygulamasında kalite kontrol başlıkları, saha denetimi ve test süreçleri.",
    excerpt: "Jet Grout kalite kontrolü saha denetimi, karot testleri ve uygulama sonrası raporlama ile sağlanır.",
    category: "Kalite Kontrol",
    readingTime: "8 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "Jet Grout Kalite Kontrol",
    introduction:
      "Jet Grout projelerinde kalite kontrol, saha parametreleri ve numune sonuçlarının sürekli olarak takip edilmesini gerektirir. Uygulama sırasında veri kayıtları bütün sürecin temelini oluşturur.",
    sections: [
      {
        id: "inspection",
        title: "Saha Kalite Denetimi",
        blocks: [
          {
            type: "paragraph",
            content:
              "Saha denetiminde enjeksiyon basınçları, karışım oranları ve mezür değerleri kontrol edilir. Bu parametreler, kolon sürekliliği ve kalite performansı için kritik öneme sahiptir."
          },
          {
            type: "list",
            items: [
              "Basınç ve debi kayıtları",
              "Çimento karışım dokümantasyonu",
              "Sondaj ve karot numuneleri"
            ]
          }
        ]
      },
      {
        id: "testing",
        title: "Karot ve Numune Testleri",
        blocks: [
          {
            type: "paragraph",
            content:
              "Karot testleri, kolonun sürekliliğini ve çapını doğrulamak için kullanılır. Numune testleri ise bağlayıcının bağlanma kalitesini ve dayanımını değerlendirir."
          },
          {
            type: "warning",
            title: "Karot planlaması",
            content:
              "Doğru karot yerleri belirlenmeli ve testler projeye uygun şekilde uygulanmalıdır. Eksik veya hatalı karotlar, kalite denetimini geçersiz kılar."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Jet Grout saha denetiminde hangi veriler toplanır?",
        answer:
          "Basınç, debi, mezür, malzeme reçetesi ve karot sonuçları gibi tüm uygulama parametreleri denetlenir. Bu veriler sonunda raporlanır ve kalite onayı için kullanılır."
      },
      {
        question: "Kalite kontrol raporu hangi bilgileri içerir?",
        answer:
          "Rapor; saha kayıtları, deneme sonuçları, karot ölçümleri ve proje spesifikasyonlarına uygunluğu gösteren analizleri içerir."
      }
    ],
    relatedSlugs: ["jet-grout-uygulama-asamalari", "jet-grout-hangi-zeminlerde-uygulanir"],
    keywords: ["jet grout kalite kontrol", "saha testleri", "karot raporu"],
    published: true
  },
  {
    slug: "jet-grout-ve-dsm-farki",
    title: "Jet Grout ve DSM Farkı",
    seoTitle: "Jet Grout ve DSM Farkı | YER6",
    description: "Jet Grout ve DSM arasındaki temel farklar, uygulama alanları ve zemin iyileştirme stratejileri.",
    excerpt: "Jet Grout ile DSM yöntemleri arasındaki farklar, projeye özel zemin iyileştirme yaklaşımını belirler.",
    category: "DSM",
    readingTime: "7 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "Jet Grout ve DSM Farkı",
    introduction:
      "Jet Grout ve DSM, farklı zemin koşullarında tercih edilen iki yerinde zemin iyileştirme yöntemidir. Her iki yöntemin avantajları ve kullanım alanları farklıdır.",
    sections: [
      {
        id: "method-comparison",
        title: "Yöntemlerin Temel Farkları",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet Grout, yüksek basınçlı enjeksiyonla zemin-çimento kolonları oluştururken, DSM zemini karıştırarak trenç kolonları üretir. Jet Grout daha ince kolonlara uygundur, DSM daha geniş alanlarda kullanılır."
          },
          {
            type: "list",
            items: [
              "Jet Grout: belirli kolonlar ve su geçirimsizliği",
              "DSM: karıştırılmış zemin sütunları ve geniş alan stabilizasyonu",
              "Her iki yöntemin saha uygulama gereksinimleri"
            ]
          }
        ]
      },
      {
        id: "field-use",
        title: "Saha Uygulama Kriterleri",
        blocks: [
          {
            type: "paragraph",
            content:
              "DSM, yüksek su içeriği ve heterojen zeminlerde etkin iken, Jet Grout daha kontrollü kolon üretimi sağlayabilir. Zemin araştırması ve proje gereksinimleri yöntemi seçerken temel ölçüttür."
          },
          {
            type: "note",
            title: "Uygulama seçimi",
            content:
              "Yöntem seçimi mutlaka mühendislik analizlerine dayandırılmalıdır. Bazı sahalarda her iki yöntemin birleşimi daha uygun olabilir."
          }
        ]
      }
    ],
    faq: [
      {
        question: "DSM ne zaman tercih edilir?",
        answer:
          "DSM, genellikle geniş alan iyileştirmesi ve düşük taşıma gücü zeminlerde kullanılır. Yüksek su içeriği olan sahalarda kapalı döngü karıştırma ile etkili sonuç verir."
      },
      {
        question: "Jet Grout DSM’den daha mı pahalıdır?",
        answer:
          "Maliyet proje ve saha koşullarına bağlıdır. Jet Grout kolon bazlı uygulama iken DSM daha geniş alan için uygundur; maliyet analizinde alan, malzeme ve uygulama süresi değerlendirilmelidir."
      }
    ],
    relatedSlugs: ["jet-grout-nedir", "dsm-nasil-uygulanir"],
    keywords: ["jet grout dsm farkı", "dsm vs jet grout", "zemin iyileştirme yöntemleri"],
    published: true
  },
  {
    slug: "jet-grout-ve-fore-kazik-farki",
    title: "Jet Grout ve Fore Kazık Farkı",
    seoTitle: "Jet Grout ve Fore Kazık Farkı | YER6",
    description: "Jet Grout ile fore kazık arasında uygulama, maliyet ve sahaya uygunluk açısından karşılaştırma.",
    excerpt: "Jet Grout ve fore kazık, farklı zemin iyileştirme ihtiyaçlarına uygun alternatiftir; seçim saha koşullarına bağlıdır.",
    category: "Fore Kazık",
    readingTime: "7 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "Jet Grout ve Fore Kazık Farkı",
    introduction:
      "Jet Grout ve fore kazık iki farklı zemin iyileştirme yaklaşımıdır. Birinin seçimi, projenin taşıma gücü, derinlik ve alan gereksinimlerine göre yapılır.",
    sections: [
      {
        id: "technical-comparison",
        title: "Teknik Karşılaştırma",
        blocks: [
          {
            type: "paragraph",
            content:
              "Fore kazık, sondaj ve beton dökümüyle çalışan bir taşıyıcı eleman sistemidir. Jet Grout ise enjeksiyonla zemin-çimento kolonları üretir. Fore kazık daha yüksek taşıma kapasiteli olabilir; Jet Grout ise geçirimsizlik ve yeraltı suyu kontrolünde avantaj sağlar."
          },
          {
            type: "list",
            items: [
              "Fore kazık: taşıyıcı kazıklar ve betonarme kolonlar",
              "Jet Grout: zemin-çimento kolonları ve yapılaşma desteği",
              "Derinlik ve çevresel etki değerlendirmesi"
            ]
          }
        ]
      },
      {
        id: "application-areas",
        title: "Uygulama Alanı ve Riskler",
        blocks: [
          {
            type: "paragraph",
            content:
              "Fore kazık, yapı temelleri ve derin kazılar için sık tercih edilir. Jet Grout, özellikle zemin geçirimsizliği gerektiren veya su etkili bölgelerde yaygın kullanım alanı bulur."
          },
          {
            type: "note",
            title: "Saha analizi zorunlu",
            content:
              "Her iki yöntemde de zemin analizi, jeolojik veriler ve çevresel koşullar önceden değerlendirilmelidir."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Fore kazık hangi durumlarda avantajlıdır?",
        answer:
          "Ağır yapı yükleri ve derin temel sistemleri için fore kazık daha uygun olabilir. Özellikle taşıyıcı tabakaya ulaşılması gereken koşullarda tercih edilir."
      },
      {
        question: "Jet Grout ne tür projelerde kullanılır?",
        answer:
          "Jet Grout, yeraltı suyu kontrolü, dolgu stabilizasyonu ve su geçirimsizlik gerektiren projelerde sıkça kullanılır."
      }
    ],
    relatedSlugs: ["fore-kazik-uygulama-asamalari", "jet-grout-nedir"],
    keywords: ["jet grout fore kazık farkı", "fore kazık uygulaması", "zemin güçlendirme"],
    published: true
  },
  {
    slug: "fore-kazik-nedir",
    title: "Fore Kazık Nedir? Temel İlkeler",
    seoTitle: "Fore Kazık Nedir? Temel İlkeler | YER6",
    description: "Fore kazık uygulamasının temel prensipleri, kullanım alanları ve taşıyıcı sistem özellikleri.",
    excerpt: "Fore kazık, derin temel sistemlerinde kullanılan sondajlı kazık elemanıdır; taşıyıcı güç ve yatay yük dayanımı sağlar.",
    category: "Fore Kazık",
    readingTime: "8 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "Fore Kazık Bilgi Merkezi",
    introduction:
      "Fore kazık, sondajla açılan deliklere beton dökülerek oluşturulan taşıyıcı elemandır. Özellikle derin temellerde ve zemin mikroayarlarında yaygın olarak kullanılır.",
    sections: [
      {
        id: "principles",
        title: "Fore Kazık Temel Prensipleri",
        blocks: [
          {
            type: "paragraph",
            content:
              "Fore kazıklar, sondaj süreci, donatı yerleşimi ve beton dökümü ile inşa edilir. Sistem, taşıyıcı zemine aktarılacak yüklerin emniyetle taşınmasını sağlayacak şekilde tasarlanmalıdır."
          },
          {
            type: "list",
            items: [
              "Sondaj derinliği ve çapı",
              "Donatı ve beton standardı",
              "Kazık uç dayanımı ve sürtünme"  
            ]
          }
        ]
      },
      {
        id: "field-conditions",
        title: "Saha Koşullarının Etkisi",
        blocks: [
          {
            type: "paragraph",
            content:
              "Zemin türü ve su seviyesi fore kazık uygulamasını etkiler. Heterojen zeminlerde sondaj kontrolü ve beton büzülmesi için ek önlemler alınmalıdır."
          },
          {
            type: "warning",
            title: "Su seviyesi kontrolü",
            content:
              "Yüksek su tablası olan sahalarda çamur kontrollü sondaj ve uygun basınçlı beton pompalama teknikleri kullanılmalıdır."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Fore kazık hangi zemin tiplerinde daha uygundur?",
        answer:
          "Fore kazıklar, iyi derecede sıkışmış zeminlerden geçirimsiz tabakalara kadar geniş bir yelpazede kullanılabilir. Proje gereksinimleri ve yükleme tipleri belirleyici olur."
      },
      {
        question: "Fore kazık ve diğer kazık türleri arasındaki fark nedir?",
        answer:
          "Fore kazık, sahada yerinde üretilen sondajlı bir kazık tipidir. Diğer prefabrik kazıklar ise fabrikada üretildikten sonra yerleştirilir."
      }
    ],
    relatedSlugs: ["jet-grout-ve-fore-kazik-farki", "fore-kazik-uygulama-asamalari"],
    keywords: ["fore kazık nedir", "fore kazık uygulama", "derin temel"],
    published: true
  },
  {
    slug: "fore-kazik-uygulama-asamalari",
    title: "Fore Kazık Uygulama Aşamaları",
    seoTitle: "Fore Kazık Uygulama Aşamaları | YER6",
    description: "Fore kazık sahasında sondaj, donatı yerleşimi, betonlama ve kabul testlerinin aşamaları.",
    excerpt: "Fore kazık uygulaması sondajdan beton dökümüne kadar dikkatli planlanmış adımlarla ilerler.",
    category: "Fore Kazık",
    readingTime: "7 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "Fore Kazık Aşamaları",
    introduction:
      "Fore kazık uygulaması, sahada doğru ekipman ve denetimle aşama aşama yürütülür. Bu süreç, her adımda kalite ve emniyet kontrolüne dayanır.",
    sections: [
      {
        id: "drilling-stage",
        title: "Sondaj ve Hazırlık",
        blocks: [
          {
            type: "paragraph",
            content:
              "Sondaj aşaması, deliklerin doğru konumda ve hesaplanan derinlikte açılmasını içerir. Delik yüzeyi stabil olmalı ve priz kontrolü sağlanmalıdır."
          },
          {
            type: "list",
            items: [
              "Aplikasyon kontrolü",
              "Sondaj makinesi seçimi",
              "Delik stabilizasyonu"
            ]
          }
        ]
      },
      {
        id: "reinforcement-concrete",
        title: "Donatı Yerleşimi ve Betonlama",
        blocks: [
          {
            type: "paragraph",
            content:
              "Donatı kafesi özenle yerleştirildikten sonra beton, kesintisiz ve homojen bir akışla dökülür. Beton kalitesi ve vibrasyon kontrolü taşıma gücü için kritiktir."
          },
          {
            type: "note",
            title: "Beton sürekliliği",
            content:
              "Beton dökümünün kesintisiz ve düzgün yapılması, fore kazığın uzun vadeli dayanımını doğrudan etkiler."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Fore kazık uygulamasına hangi testler eşlik eder?",
        answer:
          "Sondaj ölçümleri, beton kıvam testi ve beton basınç dayanımı testleri, fore kazık uygulamasının kalite kontrolü için kullanılır."
      },
      {
        question: "Uygulama sırasında ne tür riskler vardır?",
        answer:
          "Delik çökmesi, beton segregasyonu ve donatı yerleşim hataları en yaygın riskler arasındadır. Bu riskler saha denetimi ile minimize edilir."
      }
    ],
    relatedSlugs: ["fore-kazik-nedir", "jet-grout-ve-fore-kazik-farki"],
    keywords: ["fore kazık aşamaları", "fore kazık betonlama", "fore kazık donatı"],
    published: true
  },
  {
    slug: "fore-kazik-avantajlari",
    title: "Fore Kazık Avantajları ve Saha Uygulamaları",
    seoTitle: "Fore Kazık Avantajları ve Saha Uygulamaları | YER6",
    description: "Fore kazığın avantajları, dayanım ve uygulama alanları hakkında saha odaklı bilgi.",
    excerpt: "Fore kazık, yüksek taşıma gücü ve zemin stabilizasyonu gerektiren projelerde avantaj sağlar.",
    category: "Fore Kazık",
    readingTime: "7 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "Fore Kazık Avantajları",
    introduction:
      "Fore kazık, özellikle ağır yapı yükleri ve derin temeller için güvenilir bir çözümdür. Saha uygulamalarında taşıma kapasitesi ve uyumlu zemin analizi ön plandadır.",
    sections: [
      {
        id: "structural-benefits",
        title: "Taşıma Gücü ve Dayanım",
        blocks: [
          {
            type: "paragraph",
            content:
              "Fore kazıklar, düşük taşıma gücüne sahip zeminlerde yapı yükünü derin tabakalara aktarır. Bu sayede yapı hareketleri azaltılır ve stabilite artırılır."
          },
          {
            type: "list",
            items: [
              "Yüksek yük taşıma kapasitesi",
              "Yanal stabilite sağlama",
              "Derin temellerde performans"
            ]
          }
        ]
      },
      {
        id: "implementation-benefits",
        title: "Saha Uygulamasındaki Esneklik",
        blocks: [
          {
            type: "paragraph",
            content:
              "Fore kazık uygulaması pek çok zemin tipine uyarlanabilir. Özellikle dar alanlarda ve karmaşık altyapı koşullarında kullanılabilen esnek bir çözümdür."
          },
          {
            type: "note",
            title: "Şantiye destek gereksinimi",
            content:
              "Fore kazık uygulaması ekipman ve beton temini açısından iyi planlanmış saha lojistiği gerektirir."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Fore kazığın en büyük saha avantajı nedir?",
        answer:
          "Yüksek taşıma kapasitesi ve derin zeminlere erişim yeteneği, fore kazığı ağır yapı projelerinde avantajlı kılar."
      },
      {
        question: "Fore kazık yapımı ne kadar sürer?",
        answer:
          "Süre zemin koşullarına, kazık sayısına ve sahadaki ekipmana bağlıdır. Planlı bir uygulama ile iş akışı optimize edilir."
      }
    ],
    relatedSlugs: ["fore-kazik-nedir", "fore-kazik-uygulama-asamalari"],
    keywords: ["fore kazık avantajları", "fore kazık saha uygulaması", "derin temel kazığı"],
    published: true
  },
  {
    slug: "dsm-nasil-uygulanir",
    title: "DSM Nasıl Uygulanır? Aşamalar ve Ekipman",
    seoTitle: "DSM Nasıl Uygulanır? Aşamalar ve Ekipman | YER6",
    description: "DSM uygulama süreci, kullanılan ekipman ve saha hazırlığı hakkında adım adım rehber.",
    excerpt: "DSM, derin sütun kesme metoduna göre saha hazırlığı, karıştırma ve sıkıştırma adımlarını içerir.",
    category: "DSM",
    readingTime: "8 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "DSM Uygulama Süreci",
    introduction:
      "DSM uygulaması, zemin karıştırma ekipmanı ve uygun malzeme dozajıyla gerçekleştirilir. Uygulama her aşamada kalite kontrol ve hassas denetim gerektirir.",
    sections: [
      {
        id: "site-preparation",
        title: "Saha Hazırlığı",
        blocks: [
          {
            type: "paragraph",
            content:
              "DSM sahasında önce zemin etüdü yapılır, aplikasyon çizimleri hazırlanır ve ekipman konumları belirlenir. Alan temizliği ve erişim planlaması üretim verimliliği için önemlidir."
          },
          {
            type: "list",
            items: [
              "Ekipman yerleşimi",
              "Malzeme lojistiği",
              "Çalışma alanı güvenliği"
            ]
          }
        ]
      },
      {
        id: "mixing-and-cutting",
        title: "Karıştırma ve Kesme Süreci",
        blocks: [
          {
            type: "paragraph",
            content:
              "DSM sisteminde zemin, çimento ve su karıştırılır; daha sonra kesme başlığıyla sütun formu oluşur. Malzeme oranı ve karıştırma süresi sütun dayanımını belirler."
          },
          {
            type: "note",
            title: "Reçete uyumu",
            content:
              "Karışım reçetesi saha zeminine göre ayarlanmalı ve numune denemeleri ile doğrulanmalıdır."
          }
        ]
      }
    ],
    faq: [
      {
        question: "DSM uygulamasında hangi ekipman kullanılır?",
        answer:
          "DSM kazanları, karıştırıcı başlıklar, çimento pompaları ve kontrol sistemleri kullanılır. Ekipman, saha koşullarına göre seçilmelidir."
      },
      {
        question: "Uygulama sırasında hangi kalite kriterleri takip edilir?",
        answer:
          "Sütun çapı, karışım dozajı, karıştırma seviyesi ve karot testleri gibi kriterler takip edilir."
      }
    ],
    relatedSlugs: ["jet-grout-ve-dsm-farki", "dsm-malzeme-secinimi"],
    keywords: ["dsm nasıl uygulanır", "dsm aşamaları", "zemin karıştırma"],
    published: true
  },
  {
    slug: "dsm-malzeme-secinimi",
    title: "DSM Malzeme Seçimi ve Reçete Planlaması",
    seoTitle: "DSM Malzeme Seçimi ve Reçete Planlaması | YER6",
    description: "DSM proje planında çimento bağlayıcıları ve katkı maddelerinin seçimi ile ilgili teknik rehber.",
    excerpt: "DSM malzeme seçimi, sütun dayanımı ve uzun vadeli performans için doğru reçete hazırlanmasını gerektirir.",
    category: "DSM",
    readingTime: "7 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "DSM Malzeme Seçimi",
    introduction:
      "DSM uygulamasında malzeme seçimi, karışım reçetesinin saha zeminine uygun olmasını sağlar. Bağlayıcı türü ve su/çimento oranı performansı belirler.",
    sections: [
      {
        id: "binder-selection",
        title: "Bağlayıcı Seçimi",
        blocks: [
          {
            type: "paragraph",
            content:
              "DSM reçetesinde çimento tipi, uçucu kül ve katkılar bir arada değerlendirilir. Dayanım gereksinimleri ve çevresel koşullar malzeme seçimini etkiler."
          },
          {
            type: "list",
            items: [
              "Çimento kalitesi ve türü",
              "Katkı maddelerinin etkisi",
              "Su/çimento oranı kontrolü"
            ]
          }
        ]
      },
      {
        id: "mix-design",
        title: "Reçete Tasarımı",
        blocks: [
          {
            type: "paragraph",
            content:
              "Reçete tasarımı, sahadaki zemin özellikleri ve hedef dayanım düzeyi ile belirlenir. Deneme sütunları, reçetenin optimize edilmesi için kritik bir adım oluşturur."
          },
          {
            type: "note",
            title: "Laboratuvar ve saha uyumu",
            content:
              "Laboratuvar denemeleri saha uygulamasıyla eşleştirilmeli, reçete saha koşullarına göre ayarlanmalıdır."
          }
        ]
      }
    ],
    faq: [
      {
        question: "DSM reçetesi nasıl oluşturulur?",
        answer:
          "Reçete, zemin sınıfı, hedef dayanım ve çevresel koşullar göz önünde bulundurularak laboratuvar ve saha denemeleriyle oluşturulur."
      },
      {
        question: "Malzeme seçimi uzun vadeli performansı nasıl etkiler?",
        answer:
          "Uygun bağlayıcı ve katkı seçimi, sütun dayanımı ve çevresel etkiler karşısında performansın korunmasına yardımcı olur."
      }
    ],
    relatedSlugs: ["jet-grout-ve-dsm-farki", "dsm-nasil-uygulanir"],
    keywords: ["dsm malzeme seçimi", "dsm reçete", "karıştırılmış zemin"],
    published: true
  },
  {
    slug: "zemin-iyilestirme-yontemleri",
    title: "Zemin İyileştirme Nedir? Yöntemler, Seçim ve Uygulama",
    seoTitle: "Zemin İyileştirme Teknikleri ve Yöntemleri Nelerdir? | YER6",
    description:
      "Zemin iyileştirme nedir, ne zaman gerekir? Jet grout, DSM, taş kolon ve enjeksiyon yöntemlerini; seçim, uygulama ve kalite kontrol adımlarıyla öğrenin.",
    excerpt:
      "Zemin iyileştirmenin tanımı, gerekli olduğu durumlar; jet grout, DSM, taş kolon, enjeksiyon ve kalite kontrol adımlarıyla kapsamlı mühendislik rehberi.",
    category: "Zemin İyileştirme",
    readingTime: "14 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-07-12",
    heroLabel: "Zemin İyileştirme Nedir?",
    introduction:
      "Zemin iyileştirme; zeminin taşıma gücünü artırmak, oturmayı sınırlandırmak, sıvılaşma riskini azaltmak veya geçirimsizliği iyileştirmek için fiziksel, mekanik ya da kimyasal yöntemlerle zeminin mühendislik özelliklerini değiştirme işlemidir. Doğru çözüm, zemin etüdü ve yapı yükleri birlikte değerlendirilerek projeye özel seçilir.",
    sections: [
      {
        id: "zemin-iyilestirme-nedir",
        title: "Zemin İyileştirme Nedir?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Zemin iyileştirme, mevcut zemini tamamen kaldırıp değiştirmek yerine onun dayanım, rijitlik, sıkılık, drenaj veya geçirgenlik özelliklerini kontrollü biçimde geliştiren geoteknik uygulamaların ortak adıdır. Hedef; temel sisteminin güvenle çalışabileceği, toplam ve farklı oturmaların kabul edilebilir sınırlar içinde kaldığı bir zemin ortamı oluşturmaktır."
          },
          {
            type: "paragraph",
            content:
              "Uygulama yeni yapı alanlarında temel imalatından önce yapılabileceği gibi mevcut binaların altında, endüstriyel sahalarda, dolgu alanlarında, derin kazılarda ve yeraltı suyu etkisindeki bölgelerde de gerçekleştirilebilir. [Yer altı zemin iyileştirme rehberi](/knowledge/yer-alti-zemin-iyilestirme/) ilkelerine göre, yöntem seçimi yalnızca zeminin adına göre değil; tabaka kalınlığı, yeraltı suyu, yapı yükü, komşu yapılar ve hedef performans birlikte değerlendirilerek yapılır."
          },
          {
            type: "note",
            title: "Kısa cevap",
            content:
              "Zemin iyileştirme, zayıf veya riskli zemini proje yüklerini güvenle taşıyacak duruma getirmek için uygulanan mühendislik müdahalesidir. Tek bir yöntem değil; jet grout, DSM, taş kolon, sıkıştırma ve enjeksiyon gibi farklı çözümleri kapsar."
          }
        ]
      },
      {
        id: "neden-gerekir",
        title: "Zemin İyileştirme Neden ve Ne Zaman Gerekir?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Zemin etüdünde taşıma gücü yetersizliği, yüksek oturma, heterojen dolgu, yumuşak kil, gevşek kum, sıvılaşma potansiyeli veya kontrolsüz yeraltı suyu belirlenmesi zemin iyileştirme ihtiyacını gündeme getirir. Amaç yalnızca taşıma gücünü yükseltmek değildir; yapının kullanım ömrü boyunca servis performansını korumak da tasarımın parçasıdır."
          },
          {
            type: "list",
            title: "Başlıca iyileştirme hedefleri",
            items: [
              "Zeminin taşıma kapasitesini ve rijitliğini artırmak",
              "Toplam oturmayı ve farklı oturma riskini azaltmak",
              "Deprem etkisinde sıvılaşma veya yanal yayılma riskini düşürmek",
              "Kazı tabanı kabarması ve stabilite sorunlarını kontrol etmek",
              "Yeraltı suyu geçişini azaltmak veya drenajı iyileştirmek",
              "Dolgu ve platform zeminlerinde homojen bir çalışma tabakası oluşturmak"
            ]
          },
          {
            type: "warning",
            title: "Etütsüz yöntem seçilmez",
            content:
              "Sadece komşu parselde kullanılan yöntemi kopyalamak güvenli değildir. Sondajlar, SPT/CPT gibi saha deneyleri, laboratuvar sonuçları, yeraltı suyu ve yapı yükleri değerlendirilmeden kolon çapı, derinliği, aralığı veya enjeksiyon reçetesi belirlenmemelidir."
          }
        ]
      },
      {
        id: "zemin-iyilestirme-yontemleri",
        title: "Başlıca Zemin İyileştirme Yöntemleri",
        blocks: [
          {
            type: "paragraph",
            content:
              "Her zemin iyileştirme yöntemi aynı problemi çözmez. Bazı yöntemler zemini bağlayıcıyla kolon haline getirir, bazıları sıkıştırır, bazıları drenajı hızlandırır; kazıklı çözümler ise yükü daha derindeki sağlam tabakalara aktarır. Projede bir yöntem tek başına veya hibrit sistem içinde kullanılabilir."
          },
          {
            type: "list",
            title: "Yöntemler ve tipik kullanım alanları",
            items: [
              "Jet grout: Yüksek basınçlı çimento şerbetiyle zemin-çimento kolonları oluşturur; dar sahalar, değişken tabakalar, temel altı uygulamaları ve geçirimsizlik hedeflerinde kullanılabilir.",
              "DSM (Deep Soil Mixing): Zemini bağlayıcıyla mekanik olarak karıştırır; yumuşak kil, silt ve geniş alanlı platformlarda oturma kontrolü için değerlendirilebilir.",
              "Taş kolon: Granüler kolonlarla drenajı, sıkılığı ve yük paylaşımını geliştirir; uygun yumuşak veya gevşek zeminlerde sıvılaşma ve oturma kontrolünde kullanılabilir.",
              "Derin kompaksiyon ve vibro yöntemler: Dinamik kompaksiyon ve vibro-kompaksiyon (vibrasyon) ile gevşek granüler zeminleri sıkılaştırarak sıvılaşma riskini azaltmayı hedefler.",
              "Enjeksiyon yöntemleri: Poliüretan enjeksiyon, permeasyon ve kimyasal enjeksiyonlar ile boşlukları doldurur, dayanım ya da geçirimsizlik sağlar.",
              "Ön yükleme ve düşey drenler: Yumuşak kil ve siltli tabakalarda konsolidasyonu hızlandırır.",
              "Mini kazık, mikrokazık ve zemin çivisi (soil nail): Zemini karıştırmak yerine yapı yüklerini daha sağlam tabakalara aktarır veya şev stabilitesi sağlar; özellikle dar alanlı temel güçlendirmelerinde öne çıkar."
            ]
          },
          {
            type: "note",
            title: "Zemin iyileştirme ile temel güçlendirme aynı değildir",
            content:
              "Zemin iyileştirme zeminin mühendislik özelliklerini değiştirir. Temel güçlendirme ise mevcut veya yeni temelin yük aktarma kapasitesini artırır. Jet grout bazı projelerde iki hedefe birden hizmet edebilir; mini kazık ise çoğunlukla yük aktarım sisteminin parçasıdır."
          }
        ]
      },
      {
        id: "yontem-secimi",
        title: "Doğru Zemin İyileştirme Yöntemi Nasıl Seçilir?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Doğru yöntem, hedef performansı en düşük ilk yatırım bedeliyle değil; uygulanabilirlik, kalite doğrulaması, süre, çevresel etkiler ve yaşam döngüsü riski birlikte değerlendirilerek seçilir. Aynı parsel içinde tabakalar değişiyorsa farklı bölgelerde farklı çözümler gerekebilir."
          },
          {
            type: "list",
            title: "Kararı etkileyen teknik veriler",
            items: [
              "Zemin tabakalarının türü, kalınlığı, dayanımı ve sıkışabilirliği",
              "Yeraltı suyu seviyesi ve geçirgenlik koşulları",
              "Yapı yükleri, temel tipi ve izin verilebilir oturma sınırları",
              "Sıvılaşma, şev/kazı stabilitesi ve komşu yapı riskleri",
              "Çalışma yüksekliği, erişim, gürültü ve titreşim kısıtları",
              "Uygulama sonrası kullanılabilecek test ve kabul yöntemleri",
              "İmalat süresi, malzeme tüketimi ve toplam proje maliyeti"
            ]
          },
          {
            type: "note",
            title: "Pilot uygulama",
            content:
              "Tasarım varsayımlarının sahada doğrulanması için deneme kolonu veya pilot alan uygulanması; çap, dayanım, süre ve malzeme tüketimi gibi parametrelerin seri imalat öncesinde netleşmesini sağlar."
          }
        ]
      },
      {
        id: "muhendislik-siniflandirmasi",
        title: "Zemin İyileştirme Yöntemlerinin Mühendislik Sınıflandırması",
        blocks: [
          {
            type: "paragraph",
            content:
              "Akademik ve kurumsal teknik kaynaklarda yöntemler, zeminde oluşturdukları etkiye göre sınıflandırılır. Bu yaklaşım, yalnızca yöntem adlarını sıralamak yerine hangi fiziksel mekanizmanın hedeflendiğini anlamayı sağlar. Bir projede tek mekanizma yeterli olmayabilir; örneğin sıkılaştırma ile drenaj veya rijit kolonlarla yük transferi birlikte tasarlanabilir."
          },
          {
            type: "list",
            title: "Temel etki mekanizmaları",
            items: [
              "Sıkılaştırma: Zemin tanelerini yeniden düzenleyerek boşluk oranını azaltır; yüzeysel kompaksiyon, vibro kompaksiyon ve derin dinamik kompaksiyon bu gruptadır.",
              "Konsolidasyon ve drenaj: İnce daneli zemindeki suyun çıkış yolunu kısaltarak zamana bağlı oturmayı kontrollü biçimde hızlandırır; ön yükleme, düşey dren ve vakum konsolidasyonu örnektir.",
              "Kimyasal modifikasyon ve karıştırma: Kireç, çimento veya projeye uygun bağlayıcılarla plastisiteyi, dayanımı ve suya duyarlılığı değiştirir; yüzey stabilizasyonu ve DSM bu grupta değerlendirilir.",
              "Enjeksiyon: Zemin boşluklarına veya zemin kütlesine bağlayıcı vererek dayanım, rijitlik ya da geçirimsizlik sağlar; permeasyon, kompaksiyon ve jet enjeksiyonu farklı çalışma prensiplerine sahiptir.",
              "Donatı ve rijit elemanlarla güçlendirme: Taş kolon, rijit inklüzyon, geosentetik veya benzeri elemanlarla kompozit bir zemin kütlesi oluşturur ve yük paylaşımını düzenler.",
              "Kaldırma ve değiştirme: Ekonomik ve uygulanabilir olduğunda sığ problemli tabaka kazılarak uygun kontrollü dolgu ile değiştirilir."
            ]
          },
          {
            type: "note",
            title: "Mekanizma ile yöntem adı aynı şey değildir",
            content:
              "Bir yöntem birden fazla mekanizma oluşturabilir. Taş kolon hem drenaj yolu hem de daha rijit yük taşıyan eleman gibi çalışabilir; jet grout ise zemin-çimento kütlesi oluşturarak dayanım ve geçirimsizlik hedeflerine birlikte hizmet edebilir. Tasarım hesabı hangi etkinin esas alındığını açıkça göstermelidir."
          }
        ]
      },
      {
        id: "uygulama-asamalari",
        title: "Zemin İyileştirme Uygulama Aşamaları",
        blocks: [
          {
            type: "paragraph",
            content:
              "Başarılı bir zemin iyileştirme projesi yalnızca sahadaki imalattan oluşmaz. Etüt, hesap, pilot uygulama, üretim kaydı ve kabul testleri aynı kalite zincirinin parçalarıdır."
          },
          {
            type: "list",
            title: "Tipik proje akışı",
            items: [
              "Zemin etüdü: Sondaj, saha deneyleri, laboratuvar testleri ve yeraltı suyu verileriyle zemin modeli oluşturulur.",
              "Performans hedefi: Taşıma gücü, oturma, sıvılaşma, geçirimsizlik veya stabilite kriterleri tanımlanır.",
              "Yöntem ve tasarım: Kolon geometrisi, aralık, derinlik, reçete ve uygulama parametreleri hesaplanır.",
              "Pilot imalat: Deneme alanında tasarım kabulleri ve makine parametreleri doğrulanır.",
              "Seri üretim: Aplikasyon ve günlük saha kayıtlarıyla imalat mühendislik denetiminde yürütülür.",
              "Kalite kontrol ve kabul: Numune, karot, yükleme, bütünlük veya saha deneyleriyle hedef performans kontrol edilir.",
              "Teslim dosyası: As-built planlar, üretim kayıtları ve test sonuçları birlikte raporlanır."
            ]
          }
        ]
      },
      {
        id: "kalite-kontrol",
        title: "Kalite Kontrol Nasıl Yapılır?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Kalite kontrol yöntemi seçilen tekniğe göre değişir. Jet grout ve DSM imalatlarında derinlik, basınç, debi, dönüş ve çekme hızı ile bağlayıcı tüketimi gibi üretim parametreleri kaydedilir. Gerektiğinde karot ve basınç dayanımı deneyleriyle oluşan kolonun sürekliliği ve dayanımı kontrol edilir."
          },
          {
            type: "paragraph",
            content:
              "Taş kolon veya sıkıştırma uygulamalarında saha penetrasyon deneyleri, plaka yükleme deneyleri ve oturma ölçümleri kullanılabilir. Kazıklı çözümlerde bütünlük ve yükleme testleri gündeme gelir. Kabul kriterleri uygulama başlamadan önce proje ve teknik şartnamede açıkça tanımlanmalıdır."
          },
          {
            type: "warning",
            title: "Sadece metraj yeterli değildir",
            content:
              "Tamamlanan kolon metresi tek başına performans kanıtı değildir. Üretim parametreleri, malzeme belgeleri, test sonuçları ve as-built konumları birlikte değerlendirilmelidir."
          }
        ]
      },
      {
        id: "maliyet-ve-sure",
        title: "Zemin İyileştirme Maliyeti ve Süresi Neye Göre Değişir?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Zemin iyileştirme için güvenilir birim fiyat; etüt verileri, toplam imalat miktarı, kolon boyu ve çapı, malzeme reçetesi, makine erişimi, mobilizasyon, yeraltı suyu ve test kapsamı görülmeden belirlenemez. Aynı yöntem için bile saha koşulları malzeme tüketimini ve üretim hızını önemli ölçüde değiştirebilir."
          },
          {
            type: "list",
            title: "Fiyat ve programı etkileyen başlıca unsurlar",
            items: [
              "İyileştirme derinliği, alanı ve toplam metraj",
              "Hedef kolon çapı, dayanım ve performans kriterleri",
              "Zemin tabakalarının değişkenliği ve delgi zorluğu",
              "Çimento, agrega ve diğer malzeme tüketimleri",
              "Şantiye erişimi, çalışma saatleri ve lojistik koşulları",
              "Pilot uygulama, numune ve doğrulama testlerinin kapsamı"
            ]
          }
        ]
      },
      {
        id: "yer6-saha-deneyimi",
        title: "YER6 Saha Deneyiminden Uygulama Notu",
        blocks: [
          {
            type: "paragraph",
            content:
              "YER6, Bursa Yunuseli Nida Evleri projesinde temel altı zemin iyileştirme kapsamında yaklaşık 6.200 metre jet grout imalatı gerçekleştirdi. Sahada 15 metre boyunda ve 60 santimetre çapında kolonlarla zeminin taşıma kapasitesinin artırılması ve oturma riskinin azaltılması hedeflendi."
          },
          {
            type: "paragraph",
            content:
              "Bu tür projelerde tasarım değerlerinin sahaya aktarılması; doğru aplikasyon, delgi-enjeksiyon kayıtlarının izlenmesi ve imalatın testlerle doğrulanmasına bağlıdır. YER6 yaklaşımı, yöntem seçiminden saha kalite kontrolüne kadar ölçülebilir performans kriterlerini esas alır."
          }
        ]
      },
      {
        id: "teknik-kaynaklar",
        title: "Teknik Kaynaklar ve Akademik Dayanak",
        blocks: [
          {
            type: "paragraph",
            content:
              "Bu rehber; YER6 saha deneyiminin yanı sıra üniversite ders notları, hakemli yayınlar ve kamu kurumlarının teknik dokümanları karşılaştırılarak hazırlanmıştır. Kaynaklardaki genel sınıflandırmalar projeye özel tasarımın yerine geçmez; uygulama kararı güncel zemin etüdü ve geoteknik hesapla verilmelidir."
          },
          {
            type: "list",
            title: "Başvurulan temel kaynaklar",
            items: [
              "Çukurova Üniversitesi, İnşaat Mühendisliği Bölümü — Zemin Mekaniği II: Zemin İyileştirme Yöntemleri ders notları.",
              "Altuğ Saygılı, Muğla Sıtkı Koçman Üniversitesi — Zemin İyileştirme Yöntemleri: ilkeler, problem türleri ve metot seçimi sunumu.",
              "Atila Demiröz ve Mustafa Karaduman — Zemin İyileştirme Metotları, Selçuk-Teknik Dergisi, Cilt 8, Sayı 3, 2009, sayfa 176–192.",
              "Onur Selçukhan ve Abdullah Ekinci — Zemin İyileştirme Yöntemleri ve Yaygın Kullanımına Bağlı Değerlendirilmesi, Avrupa Bilim ve Teknoloji Dergisi, Sayı 23, 2021, DOI: 10.31590/ejosat.881603.",
              "İller Bankası A.Ş. Uzmanlık Tezleri — Yapım İşlerinde Zemin İyileştirme Yöntemleri.",
              "Çorum Belediyesi teknik eğitim dokümanı — Zemin İyileştirme Yöntemleri.",
              "Geopier teknik rehberi — Ground Improvement: Methods, Modification Techniques, and Engineering Solutions."
            ]
          }
        ]
      }
    ],
    faq: [
      {
        question: "Zemin iyileştirme nedir?",
        answer:
          "Zemin iyileştirme; zeminin taşıma gücünü, rijitliğini, sıkılığını, drenajını veya geçirimsizliğini geliştirerek yapı yüklerini güvenle taşımasını sağlayan geoteknik mühendislik uygulamalarının genel adıdır."
      },
      {
        question: "Zemin iyileştirme ne zaman gereklidir?",
        answer:
          "Zemin etüdünde düşük taşıma gücü, aşırı oturma, gevşek dolgu, yumuşak kil, sıvılaşma potansiyeli veya yeraltı suyu kaynaklı stabilite sorunu belirlendiğinde zemin iyileştirme değerlendirilir. Kesin ihtiyaç geoteknik hesapla belirlenir."
      },
      {
        question: "En iyi zemin iyileştirme yöntemi hangisidir?",
        answer:
          "Her proje için tek bir en iyi yöntem yoktur. Jet grout, DSM, taş kolon, sıkıştırma, enjeksiyon veya drenaj çözümleri; zemin profili, yapı yükü, yeraltı suyu, saha erişimi ve hedef performansa göre karşılaştırılmalıdır."
      },
      {
        question: "Zemin iyileştirme ile temel güçlendirme arasındaki fark nedir?",
        answer:
          "Zemin iyileştirme zeminin mühendislik özelliklerini değiştirir; temel güçlendirme ise temelin veya yük aktarma sisteminin kapasitesini artırır. Bazı projelerde jet grout veya mini kazık gibi çözümler iki sistemin birlikte çalışmasını sağlar."
      },
      {
        question: "Zemin iyileştirme sıvılaşmayı önler mi?",
        answer:
          "Uygun tasarlanmış sıkıştırma, taş kolon, drenaj, jet grout veya DSM çözümleri sıvılaşma riskini azaltabilir. Yöntem, sıvılaşabilir tabakanın derinliği ve özellikleri ile deprem tasarım verilerine göre seçilmelidir."
      },
      {
        question: "Mevcut bina altında zemin iyileştirme yapılabilir mi?",
        answer:
          "Evet. Erişim ve yapı güvenliği uygun olduğunda mikro jet grout, enjeksiyon veya mini kazık gibi düşük çalışma yüksekliğine uyarlanabilen yöntemler kullanılabilir. Uygulama öncesinde mevcut temel ve yapı davranışı analiz edilmelidir."
      },
      {
        question: "Zemin iyileştirme fiyatı nasıl belirlenir?",
        answer:
          "Fiyat; iyileştirme alanı ve derinliği, yöntem, toplam metraj, kolon çapı, malzeme reçetesi, zemin koşulları, mobilizasyon ve test kapsamına göre hesaplanır. Bu nedenle etüt ve proje görülmeden verilen tek bir metrekare veya metre fiyatı yanıltıcı olabilir."
      },
      {
        question: "Zemin iyileştirme ne kadar sürer?",
        answer:
          "Süre; yöntem, metraj, makine sayısı, zemin yapısı, çalışma saatleri ve test programına bağlıdır. Pilot uygulama sonrasında elde edilen gerçek üretim hızıyla güvenilir bir iş programı hazırlanabilir."
      }
    ],
    relatedSlugs: [
      "jet-grout-nedir",
      "dsm-nasil-uygulanir",
      "zemin-etudu-nasil-yapilir",
      "sivilasma-riskine-karsi-zemin-guclendirme"
    ],
    keywords: [
      "zemin iyileştirme nedir",
      "zemin iyileştirme yöntemleri",
      "zemin güçlendirme",
      "jet grout",
      "dsm zemin iyileştirme",
      "taş kolon",
      "zemin iyileştirme uygulaması"
    ],
    published: true
  },
  {
    slug: "zemin-iyilestirme-planlama",
    title: "Zemin İyileştirmede Proje Planlaması",
    seoTitle: "Zemin İyileştirmede Proje Planlaması | YER6",
    description: "Zemin iyileştirme projelerinde saha etüdü, uygulama tasarımı ve yönetim süreci.",
    excerpt: "Etkin zemin iyileştirme projeleri saha etüdü, planlama ve adım adım uygulama yönetimi gerektirir.",
    category: "Zemin İyileştirme",
    readingTime: "8 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "Zemin İyileştirme Planlaması",
    introduction:
      "Zemin iyileştirme projeleri, doğru saha etüdü ve kapsamlı planlama ile başarıya ulaşır. Her aşamada risk yönetimi ve kalite kontrol sağlanmalıdır.",
    sections: [
      {
        id: "site-survey",
        title: "Saha Etüdü ve Tasarım",
        blocks: [
          {
            type: "paragraph",
            content:
              "Saha etüdü, mevcut zemin koşulları, yeraltı suyu ile geoteknik parametreleri ortaya koyar. Bu veriler proje tasarımına doğrudan rehberlik eder."
          },
          {
            type: "list",
            items: [
              "Jeoteknik raporlar",
              "Yeraltı suyu incelemesi",
              "Uygulama senaryoları"
            ]
          }
        ]
      },
      {
        id: "execution-plan",
        title: "Uygulama ve Denetim Planı",
        blocks: [
          {
            type: "paragraph",
            content:
              "Uygulama planı, iş programı, kaynak yönetimi ve kalite kontrol adımlarını kapsar. Her aşama belgelenmeli ve saha denetimleri ile desteklenmelidir."
          },
          {
            type: "note",
            title: "Risk izleme",
            content:
              "Planlama sürecinde öngörülemeyen saha riskleri için yedek senaryolar hazırlanmalıdır."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Zemin iyileştirme projesi nasıl planlanır?",
        answer:
          "Planlama, saha etüdü, uygulama yöntemi seçimi ve malzeme/ekipman hazırlığını içerir."
      },
      {
        question: "Kalite kontrol planı neden önemlidir?",
        answer:
          "Kalite kontrol planı saha uygulamasının doğru ve güvenli şekilde ilerlemesini sağlar."
      }
    ],
    relatedSlugs: ["zemin-iyilestirme-yontemleri", "zemin-iyilestirme-risk-yonetimi"],
    keywords: ["zemin iyileştirme planlaması", "jeoteknik proje", "saha etüdü"],
    published: true
  },
  {
    slug: "zemin-iyilestirme-risk-yonetimi",
    title: "Zemin İyileştirmede Risk Yönetimi",
    seoTitle: "Zemin İyileştirmede Risk Yönetimi | YER6",
    description: "Zemin iyileştirme projelerinde risk analizi, önceliklendirme ve saha uygulaması yönetimi.",
    excerpt: "Risk yönetimi, zemin iyileştirme projelerinde belirsizlikleri azaltmak ve iş sürekliliğini sağlamak için gereklidir.",
    category: "Zemin İyileştirme",
    readingTime: "7 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "Risk Yönetimi",
    introduction:
      "Zemin iyileştirme sürecinde riskler saha koşullarından tedarik zincirine kadar uzanır. Projeye özel risk yönetimi, uygulamanın başarısını artırır.",
    sections: [
      {
        id: "risk-identification",
        title: "Risklerin Belirlenmesi",
        blocks: [
          {
            type: "paragraph",
            content:
              "Zemin koşulları, su seviyesi, malzeme temini ve saha erişimi başlıca risk kaynaklarıdır. Bu riskler projenin erken aşamalarında tespit edilmelidir."
          },
          {
            type: "list",
            items: [
              "Zemin belirsizlikleri",
              "Çevresel sınırlamalar",
              "Tedarik ve lojistik riskleri"
            ]
          }
        ]
      },
      {
        id: "mitigation",
        title: "Risk Azaltma Stratejileri",
        blocks: [
          {
            type: "paragraph",
            content:
              "Risk azaltma stratejileri, alternatif uygulama yöntemleri ve saha denetimleriyle oluşturulur. Önleyici tedbirler, projenin güvenli ve planlı ilerlemesini sağlar."
          },
          {
            type: "note",
            title: "Süreç içi izleme",
            content:
              "Saha uygulaması boyunca risklerin yeniden değerlendirilmesi, değişen koşullara hızlı yanıt sağlamak için önemlidir."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Zemin iyileştirmede en önemli risk faktörü nedir?",
        answer:
          "Zemin koşullarındaki belirsizlikler ve yeraltı suyu seviyesi en önemli risk faktörlerindendir."
      },
      {
        question: "Risk yönetimi nasıl uygulanır?",
        answer:
          "Risk yönetimi saha izleme, test sonuçları ve proje ekipleri arasında koordinasyon ile sürekli yürütülür."
      }
    ],
    relatedSlugs: ["zemin-iyilestirme-planlama", "zemin-iyilestirme-yontemleri"],
    keywords: ["zemin iyileştirme risk yönetimi", "jeoteknik risk", "saha belirsizliği"],
    published: true
  },
  {
    slug: "zemin-kalite-kontrol-standartlari",
    title: "Zemin İyileştirmede Kalite Kontrol Standartları",
    seoTitle: "Zemin İyileştirmede Kalite Kontrol Standartları | YER6",
    description: "Zemin iyileştirme projelerinde kalite kontrol standartları, test yöntemleri ve kabul kriterleri.",
    excerpt: "Zemin iyileştirme kalite kontrol standartları, saha kabul kriterleri ve süreç izleme gereksinimlerini açıklar.",
    category: "Kalite Kontrol",
    readingTime: "8 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "Kalite Kontrol Standartları",
    introduction:
      "Zemin iyileştirme projelerinde kalite kontrol standartları, uygulama süreci ve teslim edilen sonuçların uygunluğunu güvence altına alır.",
    sections: [
      {
        id: "standards-overview",
        title: "Standartların Rolü",
        blocks: [
          {
            type: "paragraph",
            content:
              "Kalite kontrol standartları, test yöntemleri ve kabul kriterleri ile saha uygulamasının doğrulanmasını sağlar. Bu standartlar projeye özgü olarak seçilmelidir."
          },
          {
            type: "list",
            items: [
              "Numune alma metotları",
              "Test protokolleri",
              "Kabul kriterleri"
            ]
          }
        ]
      },
      {
        id: "field-documentation",
        title: "Saha Dokümantasyonu",
        blocks: [
          {
            type: "paragraph",
            content:
              "Saha dokümantasyonu, kalite kontrol sonuçlarının izlenmesini ve denetimlere hazır tutulmasını sağlar. Tüm test sonuçları detaylı şekilde kayıt altına alınmalıdır."
          },
          {
            type: "note",
            title: "Veri bütünlüğü",
            content:
              "Eksiksiz ve doğru dokümantasyon, proje kabul sürecinde en önemli kanıtlardan biridir."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Hangi standartlar zeminde kullanılır?",
        answer:
          "Zemin iyileştirme projelerinde genel olarak TS, EN ve ASTM standartları referans alınır. Proje şartnamesi hangi standartların uygulanacağını belirler."
      },
      {
        question: "Dokümantasyon neden kritik?",
        answer:
          "Dokümantasyon, kalite kontrol sonuçlarının izlenmesi, raporlanması ve proje kabul süreçlerinde gereklidir."
      }
    ],
    relatedSlugs: ["jet-grout-kalite-kontrol", "saha-denetimi-numune-testleri"],
    keywords: ["kalite kontrol standartları", "zemin iyileştirme testleri", "saha dokümantasyonu"],
    published: true
  },
  {
    slug: "saha-denetimi-numune-testleri",
    title: "Saha Denetimi ve Numune Testleri",
    seoTitle: "Saha Denetimi ve Numune Testleri | YER6",
    description: "Saha denetimi ve numune testleri zemin iyileştirme süreçlerinde kalite güvencesinin temelini oluşturur.",
    excerpt: "Saha denetimi, numune alımı ve test sonuçları zemin iyileştirme projelerinin kalitesini doğrular.",
    category: "Kalite Kontrol",
    readingTime: "8 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    heroLabel: "Saha Denetimi ve Numune Testleri",
    introduction:
      "Saha denetiminde doğru numune alımı ve test takipleri, zemin iyileştirme projelerinin kalite kontrol sürecinde kritik öneme sahiptir.",
    sections: [
      {
        id: "inspection-protocol",
        title: "Denetim Protokolü",
        blocks: [
          {
            type: "paragraph",
            content:
              "Saha denetim protokolü, uygulama sürecindeki her adımın izlenmesini sağlar. Denetim raporları üretim kayıtları ve test sonuçlarıyla birleştirilir."
          },
          {
            type: "list",
            items: [
              "Saha gözlemleri",
              "Ekipman kontrolü",
              "Uygulama uyumu"
            ]
          }
        ]
      },
      {
        id: "sampling-tests",
        title: "Numune Alma ve Test Yönetimi",
        blocks: [
          {
            type: "paragraph",
            content:
              "Numune alma yöntemi, test hedeflerine ve zemin özelliklerine göre belirlenir. Numuneler doğru belgelenmeli ve laboratuvar testine uygun şekilde korunmalıdır."
          },
          {
            type: "note",
            title: "Numune kalitesi",
            content:
              "Yanlış alınan veya yetersiz numuneler, test sonuçlarının güvenilirliğini azaltır."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Nasıl numune alınmalı?",
        answer:
          "Numuneler saha koşullarına uygun cihazlarla ve proje protokolüne göre alınmalıdır. Numune alımı sırasında kontaminasyon önlenmelidir."
      },
      {
        question: "Test sonuçları nasıl kullanılır?",
        answer:
          "Test sonuçları, zemin iyileştirme performansını doğrulamak ve gerekirse uygulama ayarlarını revize etmek için kullanılır."
      }
    ],
    relatedSlugs: ["zemin-kalite-kontrol-standartlari", "jet-grout-kalite-kontrol"],
    keywords: ["saha denetimi", "numune testleri", "kalite kontrol zemin"],
    published: true
  },
  {
    slug: "jet-grout-maliyeti",
    title: "Jet Grout Maliyeti 2026: Fiyatı Belirleyen Faktörler",
    seoTitle: "Jet Grout Maliyeti 2026 | Fiyatı Neler Belirler? | YER6",
    description: "Jet grout maliyeti; kolon çapı ve derinliği, zemin türü, metraj, sistem tipi ve saha koşullarına göre belirlenir. Fiyatı etkileyen faktörler ve metraj mantığı.",
    excerpt: "Jet grout maliyeti tek bir birim fiyatla ifade edilemez; kolon çapı ve derinliği, zemin türü, toplam metraj, mono/double/triple sistem seçimi ve saha erişimi gibi değişkenlerle belirlenir. Doğru maliyet, ancak zemin verisi ve projeye özel metrajla hesaplanır.",
    category: "Jet Grout",
    readingTime: "8 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-07-10",
    heroLabel: "Jet Grout Maliyeti",
    introduction:
      "Jet grout maliyeti, saha ve proje koşullarına bağlı olarak geniş bir aralıkta değişir. Bu nedenle 'jet grout metretül fiyatı nedir?' sorusunun tek bir cevabı yoktur. Maliyeti gerçekçi biçimde belirlemek için kolon geometrisi, zemin türü, toplam metraj ve uygulama sistemi birlikte değerlendirilmelidir. Bu yazıda jet grout fiyatını belirleyen temel kalemleri ve metraj mantığını açıklıyoruz.",
    sections: [
      {
        id: "faktorler",
        title: "Jet Grout Maliyetini Belirleyen Faktörler",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet grout maliyeti; imalat metrajı (toplam kolon boyu veya iyileştirilen zemin hacmi), kolon çapı, uygulama sistemi ve saha koşullarının birleşimiyle oluşur. Aynı m² alanda dahi, farklı zemin ve derinlik koşulları maliyeti önemli ölçüde değiştirebilir."
          },
          {
            type: "list",
            title: "Fiyatı etkileyen başlıca kalemler",
            items: [
              "Kolon çapı ve derinliği (metraj)",
              "Zemin türü ve geçirimliliği (mono/double/triple sistem seçimi)",
              "Toplam kolon adedi ve saha büyüklüğü",
              "Çimento dozajı ve bağlayıcı sarfı",
              "Yeraltı suyu seviyesi ve saha erişimi",
              "Mobilizasyon, deneme kolonu ve kalite kontrol testleri"
            ]
          }
        ]
      },
      {
        id: "metraj",
        title: "Metraj ve Birim Fiyat Mantığı",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet grout işleri genellikle toplam kolon boyu (metretül) veya iyileştirilen zemin hacmi (m³) üzerinden metrajlanır. Birim fiyat; çimento sarfı, delgi süresi, ekipman ve işçilik kalemlerini kapsar. Üretim öncesi yapılan deneme kolonları, gerçek sarf ve üretim hızını doğrulayarak metrajın güvenilirliğini artırır."
          },
          {
            type: "note",
            title: "Sağlıklı teklif için gereken",
            content:
              "Gerçekçi bir jet grout maliyeti için zemin etüdü verisi ve proje bilgisi gerekir. YER6, ihale öncesi zemin koşullarına göre yaklaşık metraj ve maliyet öngörüsü hazırlayarak karar sürecini destekler."
          }
        ]
      },
      {
        id: "optimizasyon",
        title: "Maliyeti Optimize Etmenin Yolları",
        blocks: [
          {
            type: "list",
            title: "Maliyeti kontrol altında tutan yaklaşımlar",
            items: [
              "Kolon çapı ve aralığını zemin verisine göre optimize etmek",
              "Uygun sistem (mono/double/triple) seçimiyle gereksiz sarftan kaçınmak",
              "Deneme kolonlarıyla üretim parametrelerini kalibre etmek",
              "Alternatif yöntemleri (DSM, fore kazık) teknik-ekonomik karşılaştırmak",
              "Saha organizasyonuyla mobilizasyon ve bekleme sürelerini azaltmak"
            ]
          }
        ]
      }
    ],
    faq: [
      { question: "Jet grout metretül fiyatı ne kadar?", answer: "Tek bir sabit fiyat yoktur. Metretül fiyatı; zemin türü, kolon çapı ve derinliği, sistem tipi ve toplam metraja göre değişir. Gerçekçi rakam ancak zemin verisi ve projeye özel metrajla verilebilir." },
      { question: "Jet grout mu fore kazık mı daha ekonomik?", answer: "Duruma bağlıdır. Su kontrolü ve dar saha için jet grout, yüksek eksenel yük ve derin temel için fore kazık öne çıkar. En ekonomik çözüm, zemin koşulu ve yük hedefine göre teknik karşılaştırmayla belirlenir." },
      { question: "Maliyeti en çok ne artırır?", answer: "Büyük kolon çapı/derinliği, zorlu zemin, yüksek yeraltı suyu, geniş metraj ve erişimi kısıtlı saha maliyeti artıran başlıca etkenlerdir." },
      { question: "Teklif almak için ne gerekli?", answer: "Mevcut zemin etüdü raporu ve proje bilgileri (yapı tipi, kazı/derinlik, kolon düzeni) ile yaklaşık metraj ve maliyet öngörüsü hazırlayabiliriz." }
    ],
    relatedSlugs: ["jet-grout-nedir", "jet-grout-kolon-capi", "jet-grout-ve-fore-kazik-farki"],
    keywords: ["jet grout maliyeti", "jet grout fiyatları", "jet grout metretül fiyatı", "zemin iyileştirme maliyeti", "jet grout fiyatı 2026"],
    published: true
  },
  {
    slug: "jet-grout-makineleri",
    title: "Jet Grout Makineleri ve Ekipmanları",
    seoTitle: "Jet Grout Makineleri ve Ekipmanları | YER6",
    description: "Jet grout sahasında kullanılan delgi makinesi, yüksek basınç pompası, mikser, silo ve jet başlığı ekipmanları ve kaliteye etkileri.",
    excerpt: "Jet grout uygulaması; delgi makinesi, yüksek basınç pompası, karıştırıcı (mikser), çimento silosu ve jet başlığından oluşan bütünleşik bir ekipman zinciriyle yürütülür. Ekipman kapasitesi ve uyumu, kolon kalitesini doğrudan etkiler.",
    category: "Jet Grout",
    readingTime: "7 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-07-10",
    heroLabel: "Jet Grout Makineleri",
    introduction:
      "Jet grout kalitesi yalnızca tasarıma değil, sahadaki ekipman zincirine de bağlıdır. Delgi, yüksek basınçlı enjeksiyon ve karışım hazırlığı birbirine bağlı çalışır; herhangi bir halkadaki kapasite eksikliği kolon çapını ve dayanımını etkiler. Bu yazıda jet grout ekipmanlarını ve kaliteye etkilerini açıklıyoruz.",
    sections: [
      {
        id: "ekipman-zinciri",
        title: "Jet Grout Ekipman Zinciri",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet grout uygulaması; zemine kolon hattını açan delgi makinesi, çimento şerbetini yüksek basınçla ileten pompa, şerbeti hazırlayan mikser, çimentoyu depolayan silo ve enjeksiyonu gerçekleştiren jet başlığından (monitör) oluşur. Bu ekipmanlar senkron çalışarak sürekli ve kontrollü üretim sağlar."
          },
          {
            type: "list",
            title: "Temel ekipmanlar",
            items: [
              "Delgi makinesi (kolon hattının açılması)",
              "Yüksek basınç pompası (enjeksiyon basıncının sağlanması)",
              "Mikser / karıştırıcı (homojen çimento şerbeti hazırlığı)",
              "Çimento silosu (sürekli üretim akışı)",
              "Jet başlığı / monitör ve tijler (enjeksiyon geometrisi)"
            ]
          }
        ]
      },
      {
        id: "kapasite-kalite",
        title: "Ekipman Kapasitesinin Kaliteye Etkisi",
        blocks: [
          {
            type: "paragraph",
            content:
              "Enjeksiyon basıncı, debi ve geri çekilme hızı kolon çapını belirleyen ana parametrelerdir. Pompanın basınç ve debi kapasitesi yetersizse hedef kolon çapına ulaşılamaz; mikser kapasitesi düşükse şerbet homojenliği ve üretim hızı düşer. Bu nedenle ekipman seçimi, hedef kolon geometrisiyle uyumlu olmalıdır."
          },
          {
            type: "note",
            title: "Gerçek zamanlı takip",
            content:
              "Modern jet grout uygulamalarında basınç, debi ve derinlik verileri anlık kaydedilir. Bu veriler hem üretim kontrolü hem de teslim dosyası için kalite kanıtı oluşturur."
          }
        ]
      },
      {
        id: "yer6-park",
        title: "YER6 Makine Parkı Yaklaşımı",
        blocks: [
          {
            type: "paragraph",
            content:
              "YER6, jet grout ve zemin iyileştirme projelerinde delgi, pompa ve santral ekipmanlarını proje gereksinimlerine göre eşleştirir. Ekipman kapasitesinin tasarım hedefleriyle uyumu, kolon çapı ve dayanımının güvenilir biçimde elde edilmesini sağlar."
          }
        ]
      }
    ],
    faq: [
      { question: "Jet grout için hangi makineler gerekir?", answer: "Delgi makinesi, yüksek basınç pompası, mikser, çimento silosu ve jet başlığı temel ekipmanlardır. Bunlar senkron çalışarak kolon üretimini gerçekleştirir." },
      { question: "Pompa basıncı kolon çapını etkiler mi?", answer: "Evet. Enjeksiyon basıncı, debi ve geri çekilme hızı kolon çapını doğrudan belirler. Yetersiz pompa kapasitesi hedef çapa ulaşılmasını engelleyebilir." },
      { question: "Ekipman verileri neden kaydedilir?", answer: "Basınç, debi ve derinlik kayıtları hem üretim kalitesini kontrol etmek hem de teslim dosyasında kalite kanıtı sunmak için tutulur." }
    ],
    relatedSlugs: ["jet-grout-nedir", "jet-grout-uygulama-asamalari", "jet-grout-kalite-kontrol"],
    keywords: ["jet grout makineleri", "jet grout ekipmanları", "jet grout pompası", "jet grout delgi makinesi", "jet grout santrali"],
    published: true
  },
  {
    slug: "jet-grout-sik-sorulan-sorular",
    title: "Jet Grout Sık Sorulan Sorular (SSS)",
    seoTitle: "Jet Grout Sık Sorulan Sorular (SSS) | YER6",
    description: "Jet grout nedir, hangi zeminlerde uygulanır, kolon çapı ne kadar olur, mevcut yapı altında yapılır mı, maliyeti neye bağlıdır? En çok sorulan sorular yanıtlarıyla.",
    excerpt: "Jet grout uygulaması, zemin türleri, kolon çapı, süre, kalite kontrol ve maliyet hakkında en çok merak edilen soruların teknik yanıtları bir arada.",
    category: "Jet Grout",
    readingTime: "7 dk",
    publishedAt: "2026-06-21",
    updatedAt: "2026-07-10",
    heroLabel: "Jet Grout SSS",
    introduction:
      "Jet grout hakkında saha uygulaması, zemin uygunluğu, kolon geometrisi, kalite kontrol ve maliyet konularında en sık gelen soruları bu rehberde topladık. Yanıtlar, projeye özel koşulların yerini tutmaz; ancak konuya hızlı bir teknik bakış sunar.",
    sections: [
      {
        id: "genel",
        title: "Jet Grout Hakkında Genel Bilgi",
        blocks: [
          {
            type: "paragraph",
            content:
              "Jet grout, yüksek basınçlı çimento karışımının zemine enjekte edilmesiyle zemin-çimento kolonları oluşturan bir zemin iyileştirme yöntemidir. Zeminin taşıma gücünü artırma, oturmaları azaltma ve su geçirimsizliği sağlama amaçlarıyla kullanılır."
          },
          {
            type: "note",
            title: "Projeye özel değerlendirme",
            content:
              "Aşağıdaki yanıtlar tipik durumları özetler. Her proje için doğru parametreler, sondaj ve laboratuvar verisiyle kurulan zemin modeline göre belirlenir."
          }
        ]
      }
    ],
    faq: [
      { question: "Jet grout hangi zemin türlerinde uygulanır?", answer: "Kum, silt, kil ve karma yapılı zeminlerde uygulanabilir. Çakıl ve iri dane içeren katmanlar enjeksiyon kontrolü açısından ayrıca değerlendirilmelidir." },
      { question: "Jet grout kolon çapı ne kadar olur?", answer: "Sistem türüne ve zemine göre yaklaşık 0,4 m ile 2,5 m arasında değişir. Enjeksiyon basıncı, debi ve geri çekilme hızı çapı belirleyen ana değişkenlerdir." },
      { question: "Mevcut yapı altında jet grout yapılabilir mi?", answer: "Evet. Kompakt ekipmanlarla mevcut yapı bodrumu veya temel altında uygulama mümkündür; öncesinde yapı ve zemin koşulları ayrıntılı incelenmelidir." },
      { question: "Jet grout uygulaması ne kadar sürer?", answer: "Süre; kolon sayısı, derinlik ve zemin koşullarına bağlıdır. Günlük 50–150 adet kolon üretimi mümkün olabilir; program saha verisine göre optimize edilir." },
      { question: "Jet grout maliyeti neye bağlıdır?", answer: "Kolon çapı ve derinliği, zemin türü, toplam metraj, sistem tipi ve saha koşulları maliyeti belirler. Gerçekçi rakam için zemin verisi ve projeye özel metraj gerekir." },
      { question: "Jet grout kalitesi nasıl kontrol edilir?", answer: "Karot alımı, tek eksenli basınç deneyi ve kolon sürekliliği kontrolleriyle doğrulanır; üretim verileri (basınç, debi, derinlik) teslim dosyasına işlenir." },
      { question: "Jet grout sıvılaşmaya karşı etkili mi?", answer: "Evet. Jet grout kolonları zemin rijitliğini artırarak ve gerektiğinde geçirimsizlik sağlayarak sıvılaşma riskini azaltmaya katkıda bulunur." },
      { question: "Jet grout mu DSM mi tercih edilmeli?", answer: "Geniş alan ve yumuşak zeminde DSM ekonomik olabilirken, su kontrolü ve dar saha gereken durumlarda jet grout öne çıkar. Karar zemin ve proje koşullarına bağlıdır." }
    ],
    relatedSlugs: ["jet-grout-nedir", "jet-grout-hangi-zeminlerde-uygulanir", "jet-grout-maliyeti"],
    keywords: ["jet grout sss", "jet grout sık sorulan sorular", "jet grout nedir", "jet grout kolon çapı", "jet grout maliyeti"],
    published: true
  },
  {
    slug: "fore-kazik-nerelerde-kullanilir",
    title: "Fore Kazık Nerelerde Kullanılır? Uygulama Alanları ve Koşulları",
    seoTitle: "Fore Kazık Nerelerde Kullanılır? Uygulama Alanları | YER6",
    description: "Fore kazık; yüksek yapı temelleri, köprüler, limanlar, derin kazılar ve iksa sistemlerinde taşıma kapasitesi ve stabilite için kullanılır.",
    excerpt: "Fore kazık, büyük eksenel yük gerektiren yüksek yapılardan köprü ve liman projelerine, derin iksa perdelerinden kıyı yapılarına kadar geniş bir uygulama yelpazesinde tercih edilen temel sistemidir.",
    category: "Fore Kazık",
    readingTime: "8 dk",
    publishedAt: "2026-06-23",
    updatedAt: "2026-06-23",
    heroLabel: "Fore Kazık Uygulama Alanları",
    introduction: "Fore kazık; büyük çaplı, derin ve yüksek kapasiteli bir temel elemanıdır. Zemin koşullarının üstyapı yükünü taşımak için yeterli olmadığı ya da oturma, kapasite ve stabilite risklerinin kabul edilemez düzeyde olduğu her projede fore kazık devreye girer.",
    sections: [
      {
        id: "yuksek-yapilar",
        title: "Yüksek Yapılar ve Karma Kullanım Projeleri",
        blocks: [
          {
            type: "paragraph",
            content: "Çok katlı yapılarda temel derinleştirilmesi ve yüksek eksenel yük aktarımı için fore kazık en yaygın çözümdür. Özellikle zemin taşıma kapasitesinin yüzeysel temel için yetersiz olduğu ya da sıvılaşma riski taşıyan zeminlerde baret veya kazık grubu sistemleriyle birlikte kullanılır."
          },
          {
            type: "list",
            title: "Yüksek yapılarda fore kazık gerektiren durumlar",
            items: [
              "Zemin taşıma kapasitesinin yüzeysel temel için yetersiz kalması",
              "Yapı kolonlarına gelen yüksek eksenel ve moment yükleri",
              "Deprem bölgesinde kapasiteli temel sistemi gereksinimi",
              "Komşu yapı ve altyapıya minimum etki kısıtı"
            ]
          }
        ]
      },
      {
        id: "kopru-viyaduk",
        title: "Köprü, Viyadük ve Ulaşım Altyapısı",
        blocks: [
          {
            type: "paragraph",
            content: "Köprü ve viyadük ayak temelleri, yüksek dinamik ve statik yükleri taşımalı, aynı zamanda sismik kuvvetlere dayanmalıdır. Fore kazık; bu yapılarda kaya veya sıkı zemine soket yapılarak yüksek kapasite elde edilmesine imkân tanır."
          },
          {
            type: "note",
            title: "Kaya soket uygulaması",
            content: "Köprü ayaklarında kaya soketi, fore kazığın kaya tabakasına en az 3–5 çap derinlikte gömülmesiyle oluşturulur ve çok yüksek uç taşıma kapasitesi sağlar."
          }
        ]
      },
      {
        id: "liman-kiyi",
        title: "Liman, İskele ve Kıyı Yapıları",
        blocks: [
          {
            type: "paragraph",
            content: "Deniz ve kıyı yapılarında yüksek yeraltı suyu, dalga kuvveti ve korozif çevre koşulları nedeniyle fore kazık özel tasarım gerektirir. Bentonit veya polimer destekli delgi, kıyı projelerinde standart yöntemdir."
          },
          {
            type: "list",
            items: [
              "Liman iskelesi ve dolfin temelleri",
              "Sahil duvarı ve zemin güçlendirme",
              "Denizde dolgu alanı üzerine inşa edilen yapı temelleri",
              "Kıyı şeridi iksa ve kazı sistemi"
            ]
          }
        ]
      },
      {
        id: "derin-kazi-iksa",
        title: "Derin Kazı ve İksa Perde Sistemi",
        blocks: [
          {
            type: "paragraph",
            content: "Fore kazık perde duvar, komşu yapılara yakın derin kazılarda yanal yük taşıyıcı eleman olarak kullanılır. Ankraj veya strüt ile birlikte tasarlanan kazıklı perde sistemleri, metro, tünel girişi, bodrum kat kazısı ve altyapı projelerinde standarttır."
          }
        ]
      },
      {
        id: "endustriyel",
        title: "Endüstriyel Tesis ve Enerji Yapıları",
        blocks: [
          {
            type: "paragraph",
            content: "Enerji santrali, petrokimya tesisi, siloları ve depolama yapıları; yüksek noktasal yükler ve titreşim nedeniyle fore kazık gibi derin temel sistemleri gerektirir. Titreşim sönümleme ve fark oturma kontrolü bu projelerde kritik parametrelerdir."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Fore kazık ne zaman tercih edilir?",
        answer: "Zemin taşıma kapasitesi yetersiz olduğunda, yüksek yapı yükü söz konusu olduğunda, kaya soket gerektiğinde veya derin kazı perdesi oluşturulması gerektiğinde fore kazık tercih edilir."
      },
      {
        question: "Fore kazık minimum çap nedir?",
        answer: "Fore kazık genellikle 400 mm ile 2000 mm arasında çaplarda yapılır. Yapı türü ve zemin koşullarına göre çap seçilir."
      },
      {
        question: "Mini kazık ile fore kazık arasındaki temel fark nedir?",
        answer: "Fore kazık büyük çaplı, yüksek kapasiteli ve açık alanlarda yapılan temel elemanıdır. Mini kazık ise dar ve kısıtlı alanlarda kompakt ekipmanla uygulanan küçük çaplı güçlendirme elemanıdır."
      }
    ],
    relatedSlugs: ["fore-kazik-nedir", "fore-kazik-uygulama-asamalari", "fore-kazik-avantajlari"],
    keywords: [
      "fore kazık nerelerde kullanılır",
      "fore kazık uygulama alanları",
      "fore kazık köprü",
      "fore kazık liman",
      "fore kazık yüksek yapı",
      "derin temel sistemi"
    ],
    published: true
  },
  {
    slug: "temel-alti-zemin-guclendirme",
    title: "Temel Altı Zemin Güçlendirme: Yöntemler ve Uygulama",
    seoTitle: "Temel Altı Zemin Güçlendirme Yöntemleri | YER6",
    description: "Mevcut yapıların temel altındaki zayıf zemin; jet grout, mini kazık, enjeksiyon ve DSM ile güçlendirilebilir. Temel altı zemin güçlendirme yöntemleri.",
    excerpt: "Temel altı zemin güçlendirme; oturma, taşıma kapasitesi kaybı veya sıvılaşma riski nedeniyle mevcut yapının güvenliğini tehdit eden zeminlerin iyileştirilmesidir. Doğru yöntem seçimi zemin koşuluna ve yapı tipine bağlıdır.",
    category: "Zemin İyileştirme",
    readingTime: "10 dk",
    publishedAt: "2026-06-23",
    updatedAt: "2026-06-23",
    heroLabel: "Temel Altı Zemin Güçlendirme",
    introduction: "Mevcut bir yapının altındaki zemin zayıfladığında ya da zemin koşulları daha önce yeterince değerlendirilmediğinde, yapının temel sistemi yeniden güçlendirilmelidir. Bu süreç 'temel altı zemin güçlendirme' ya da teknik literatürde 'underpinning' olarak adlandırılır.",
    sections: [
      {
        id: "neden-gerekli",
        title: "Temel Altı Zemin Güçlendirme Neden Gereklidir?",
        blocks: [
          {
            type: "paragraph",
            content: "Yapı temelinin altındaki zemin, zaman içinde su etkisi, yük artışı, komşu inşaat veya zemin özelliklerindeki değişimler nedeniyle kapasitesini yitirebilir. Bu durumda yapıda çatlaklar, eğilme ya da aşırı oturma gözlemlenir."
          },
          {
            type: "list",
            title: "Temel altı güçlendirme gerektiren başlıca durumlar",
            items: [
              "Bina yükünün artması (kat ekleme, yük değişikliği)",
              "Komşu derin kazının zemin gerilme değişimine yol açması",
              "Yeraltı suyu değişimi ve zemin yıkanması",
              "Deprem veya titreşim kaynaklı zemin kapasitesi kaybı",
              "Mevcut zemin raporunun gerçek koşulları yansıtmaması",
              "Tarihi yapı veya anıt restorasyon projelerinde zemin stabilitesi"
            ]
          }
        ]
      },
      {
        id: "yontemler",
        title: "Temel Altı Güçlendirme Yöntemleri",
        blocks: [
          {
            type: "paragraph",
            content: "Yöntem seçimi; zemin tipi, yapı yükü, erişim kısıtları ve proje bütçesine göre belirlenir. YER6 aşağıdaki yöntemleri tek başına veya kombinasyon halinde uygular:"
          },
          {
            type: "list",
            title: "Başlıca yöntemler",
            items: [
              "Mini kazık: Dar alanlarda kompakt ekipmanla, düşük titreşimle uygulanan güçlendirme kazıkları",
              "Jet grout: Mevcut temel altında yüksek basınçlı enjeksiyonla zemin-çimento kolonları",
              "Kompansasyon enjeksiyonu: Oturma kontrolü için boşluk doldurma enjeksiyonu",
              "DSM: Geniş alanlarda zemin-çimento karıştırma ile platform güçlendirme",
              "Geleneksel beton ayak: Etaplı ve kontrollü temel genişletme yöntemi"
            ]
          }
        ]
      },
      {
        id: "jet-grout-underpinning",
        title: "Jet Grout ile Temel Altı Güçlendirme",
        blocks: [
          {
            type: "paragraph",
            content: "Jet grout, mevcut yapı altında ek kazı gerektirmeden zemin içinde kolonlar oluşturarak kapasiteyi artırır. Kolon geometrisi ve enjeksiyon parametreleri, mevcut temel yükleri ve zemin koşullarına göre tasarlanır."
          },
          {
            type: "note",
            title: "Etaplı uygulama",
            content: "Temel altı jet grout uygulamalarında, yapı güvenliğini korumak için kolonlar belirli bir etap sırasına göre üretilmeli; hiçbir zaman tüm temel hattı aynı anda uygulamaya alınmamalıdır."
          }
        ]
      },
      {
        id: "mini-kazik-underpinning",
        title: "Mini Kazık ile Temel Altı Güçlendirme",
        blocks: [
          {
            type: "paragraph",
            content: "Mini kazıklar (mikro kazıklar), mevcut yapı bodrum katında kompakt delgi ekipmanlarıyla uygulanabilir. Mevcut temele bağlantı kafası betonlanarak yükler mini kazıklara aktarılır. Tarihi yapılarda ve bodrum katlarda en yaygın underpinning yöntemidir."
          }
        ]
      },
      {
        id: "izleme",
        title: "İzleme ve Yapı Güvenliği",
        blocks: [
          {
            type: "paragraph",
            content: "Temel altı güçlendirme sürecinde yapı hareketleri hassas nivelmanla ve çatlak ölçerleriyle izlenmelidir. Belirlenen alarm sınırı aşıldığında uygulama durdurularak sorun değerlendirilmelidir."
          },
          {
            type: "warning",
            title: "Yapı güvenliği önce gelir",
            content: "Temel altı güçlendirme çalışmaları boyunca yapı hareketi sürekli izlenmelidir. Herhangi bir ani deformasyon sinyali, çalışmanın durdurulması için yeterli nedendir."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Temel altı zemin güçlendirme ne kadar sürer?",
        answer: "Projenin büyüklüğüne ve yönteme göre birkaç haftadan birkaç aya uzanabilir. Etaplı uygulama planı ve yapı izleme sürecinin dahil edilmesi gerçekçi program için kritiktir."
      },
      {
        question: "Yapı içinden uygulama yapılabilir mi?",
        answer: "Evet. Mini kazık ve kompakt jet grout ekipmanları bodrum kattan uygulanabilir. Ekipman yüksekliği ve ağırlığı kısıtlarına göre ekipman seçimi yapılır."
      },
      {
        question: "Temel altı güçlendirme ne zaman zorunlu olur?",
        answer: "Yapıda aşırı oturma, çatlak veya eğilme tespit edildiğinde; komşu derin kazı öncesinde gerekli görüldüğünde ya da yapıya yeni yük ekleneceğinde temel altı güçlendirme değerlendirilmelidir."
      }
    ],
    relatedSlugs: ["fore-kazik-nedir", "zemin-iyilestirme-yontemleri", "jet-grout-nedir"],
    keywords: [
      "temel altı zemin güçlendirme",
      "underpinning",
      "mevcut yapı zemin güçlendirme",
      "mini kazık underpinning",
      "jet grout underpinning",
      "temel güçlendirme"
    ],
    published: true
  },
  {
    slug: "sivilasma-riskine-karsi-zemin-guclendirme",
    title: "Sıvılaşma Riskine Karşı Zemin Güçlendirme Yöntemleri",
    seoTitle: "Sıvılaşma Riskine Karşı Zemin Güçlendirme | YER6",
    description: "Deprem bölgelerinde sıvılaşma riskine karşı zemin güçlendirme: jet grout, DSM kolon sistemleri, drenaj ve kompaksiyon yöntemleri.",
    excerpt: "Sıvılaşmaya yatkın kum ve silt zeminler, deprem sırasında taşıma kapasitesini yitirebilir. Zemin güçlendirme yöntemleri bu riski kabul edilebilir düzeye indirir.",
    category: "Zemin İyileştirme",
    readingTime: "11 dk",
    publishedAt: "2026-06-23",
    updatedAt: "2026-06-23",
    heroLabel: "Sıvılaşma ve Zemin Güçlendirme",
    introduction: "Sıvılaşma, doygun gevşek kum veya silt zeminin deprem sırasında ani boşluk suyu basıncı artışıyla taşıma kapasitesini yitirmesidir. Bu durum yapılarda aşırı oturma, devrilme veya temel göçmesine yol açabilir. Sıvılaşma riski belirlendiğinde zemin güçlendirme zorunlu hale gelir.",
    sections: [
      {
        id: "sivilasma-nedir",
        title: "Sıvılaşma Nedir ve Nasıl Oluşur?",
        blocks: [
          {
            type: "paragraph",
            content: "Sıvılaşma; doygun, gevşek kum veya silt zeminlerde sismik enerji etkisiyle boşluk suyu basıncının efektif gerilmeye eşit ya da üstüne çıkmasıyla zemin tanelerinin birbirinden ayrılması sürecidir. Zemin bu anda yük taşıma kapasitesini yitirir ve sıvı gibi davranır."
          },
          {
            type: "list",
            title: "Sıvılaşmaya yatkın zemin koşulları",
            items: [
              "Relative density (Dr) değeri %40'ın altında olan gevşek kum",
              "Doygun zemin koşulu (yeraltı suyu yüzey yakını)",
              "İnce dane içeriği (fines content) %35'in altında olan malzeme",
              "SPT N değeri 15'in altında olan kum ve silt tabakalar"
            ]
          }
        ]
      },
      {
        id: "risk-degerlendirme",
        title: "Sıvılaşma Riski Nasıl Değerlendirilir?",
        blocks: [
          {
            type: "paragraph",
            content: "TBDY 2018 ve uluslararası standartlara göre sıvılaşma riski; SPT veya CPT verileri, zemin dane dağılımı, yer altı suyu derinliği ve tasarım depremi büyüklüğü kullanılarak hesaplanır."
          },
          {
            type: "note",
            title: "TBDY 2018 zorunluluğu",
            content: "Türkiye Bina Deprem Yönetmeliği 2018 kapsamında sıvılaşma potansiyeli hesabı zorunludur. Sıvılaşma riski belirlenen zeminlerde ya zemin iyileştirilmeli ya da yapı tasarımı bu risk dikkate alınarak yapılmalıdır."
          }
        ]
      },
      {
        id: "guclendirme-yontemleri",
        title: "Sıvılaşmaya Karşı Zemin Güçlendirme Yöntemleri",
        blocks: [
          {
            type: "list",
            title: "Yaygın kullanılan yöntemler",
            items: [
              "Jet Grout Kolon Sistemi: Zemin içi kolonlarla etkin gerilme artışı ve deformasyon kontrolü",
              "DSM Kolon Sistemi: Geniş alanlarda zemin-çimento karıştırma, sıvılaşma bölgesi kapsama",
              "Vibro Kompaksiyon / Taş Kolon: Mekanik sıkılaştırma ile relative density artışı",
              "Dinamik Kompaksiyon: Ağır tokmak darbeleriyle yüzeysel sıkılaştırma",
              "Prefabrik Drenaj: Boşluk suyu basıncını hızla dağıtarak sıvılaşma riskini azaltma"
            ]
          }
        ]
      },
      {
        id: "jet-grout-sivilasma",
        title: "Jet Grout ile Sıvılaşma Riskinin Azaltılması",
        blocks: [
          {
            type: "paragraph",
            content: "Jet grout kolonları, sıvılaşmaya yatkın zemin tabakası içinde yeterli aralık ve çapta tasarlandığında, deprem sırasında zemin bloğunu bir arada tutarak sıvılaşma etkisini önemli ölçüde sınırlar. Kolon grubu arasındaki zemin hacminin yeterli oranda kapsanması (area replacement ratio) tasarım değişkenidir."
          },
          {
            type: "paragraph",
            content: "Türkiye'nin deprem risk bölgelerinde; İstanbul, Bursa, İzmir, Kocaeli ve Sakarya gibi illerde, gevşek alüvyon zeminler üzerine inşa edilen yapılarda jet grout ile sıvılaşma güçlendirme projeleri yaygın biçimde uygulanmaktadır."
          }
        ]
      },
      {
        id: "dsm-sivilasma",
        title: "DSM ile Sıvılaşma Güçlendirme",
        blocks: [
          {
            type: "paragraph",
            content: "DSM kolon ağı, sıvılaşma bölgesi içinde yüksek yer değiştirme oranı sağlandığında boşluk suyu basıncı birikimini önler. Geniş alanlarda ekonomik avantajı nedeniyle endüstriyel tesis ve lojistik platformlarda tercih edilir."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Sıvılaşma riski olan zeminlerde yapı inşa edilebilir mi?",
        answer: "Evet, ancak zemin güçlendirme veya yapı tasarımında özel önlemler alınması zorunludur. TBDY 2018 bu durumu açıkça düzenler."
      },
      {
        question: "Sıvılaşma riski hangi şehirlerde yüksektir?",
        answer: "İstanbul (özellikle Avcılar, Küçükçekmece, Zeytinburnu), İzmir, Bursa, Kocaeli, Sakarya ve Adapazarı gibi alüvyon zemin ağırlıklı şehirlerde sıvılaşma riski yüksektir."
      },
      {
        question: "Jet grout sıvılaşmayı tamamen önler mi?",
        answer: "Yeterli alan yer değiştirme oranı ve kolon kapsamıyla sıvılaşma riski büyük ölçüde azaltılabilir, ancak 'tamamen önlenir' ifadesi yerine 'kabul edilebilir düzeye indirilir' daha doğrudur. Tasarım performans hedeflerine göre değerlendirilir."
      }
    ],
    relatedSlugs: ["jet-grout-nedir", "dsm-nasil-uygulanir", "zemin-iyilestirme-yontemleri"],
    keywords: [
      "sıvılaşma zemin güçlendirme",
      "deprem zemin güçlendirme",
      "sıvılaşma riski",
      "jet grout sıvılaşma",
      "DSM sıvılaşma",
      "TBDY 2018 sıvılaşma"
    ],
    published: true
  },
  {
    slug: "dsm-nedir",
    title: "DSM Nedir? Deep Soil Mixing Zemin İyileştirme Yöntemi",
    seoTitle: "DSM (Derin Zemin Karıştırma) Nedir? Deep Soil Mixing Yöntemleri | YER6",
    description: "DSM (Deep Soil Mixing - Derin Zemin Karıştırma), zemin ve çimento şerbetinin yerinde karıştırılmasıyla oluşturulan kolonlardır. Taş kolon ve jet grout ile kıyaslamalı zemin iyileştirme rehberi.",
    excerpt: "DSM yani Derin Zemin Karıştırma, yumuşak kil ve gevşek kum zeminlerde taşıma kapasitesini artırmak, oturmayı kontrol etmek ve sıvılaşmayı önlemek için kullanılan modern bir zemin iyileştirme yöntemidir.",
    category: "DSM",
    readingTime: "9 dk",
    publishedAt: "2026-06-23",
    updatedAt: "2026-06-23",
    heroLabel: "DSM Zemin İyileştirme",
    introduction: "DSM (Deep Soil Mixing – Derin Zemin Karıştırma), zemin katmanları içinde dönen bir aks yardımıyla çimento şerbetinin zemin ile karıştırılarak zemin-çimento kolonları oluşturulduğu yerinde zemin iyileştirme yöntemidir. Düşük titreşim, hızlı ilerleme ve geniş uygulama kapsamıyla endüstriyel projeler başta olmak üzere altyapı iyileştirmesinde sıkça tercih edilir.",
    sections: [
      {
        id: "calisma-prensibi",
        title: "DSM Nasıl Çalışır?",
        blocks: [
          {
            type: "paragraph",
            content: "DSM uygulamasında, özel bir delgi aletinin ucuna monte edilen karıştırıcı kanatlar zemine indirilir. Aynı anda pompayla basılan çimento şerbeti, zemin ile karıştırılarak homojen bir zemin-çimento kütlesi oluşturulur."
          },
          {
            type: "list",
            title: "Temel çalışma adımları",
            items: [
              "Çimento şerbeti laboratuvarda belirlenen oranda hazırlanır",
              "Karıştırıcı aks zemine belirlenen derinliğe indirilir",
              "İniş ve çıkış sırasında çimento şerbeti enjekte edilir",
              "Zemin-çimento karışımı homojen biçimde oluşur",
              "Kürlenmiş kolonun kalitesi karot ve basınç testleriyle doğrulanır"
            ]
          }
        ]
      },
      {
        id: "dsm-cesitleri",
        title: "DSM Sistem Çeşitleri",
        blocks: [
          {
            type: "paragraph",
            content: "DSM sistemleri genel olarak tek aks (single axis) ve çift aks (twin shaft) olmak üzere iki gruba ayrılır. Çift aks sistemler daha yüksek günlük ilerleme kapasitesi sunarak büyük ölçekli projelerde ekonomik avantaj sağlar."
          },
          {
            type: "list",
            items: [
              "Tek aks DSM: Küçük ve orta ölçekli alanlar için uygundur",
              "Çift aks DSM: Yüksek günlük üretim kapasitesi, büyük alanlar için idealdir",
              "Jet karıştırma (CDM): Yüksek basınçlı jet desteğiyle DSM; zor geçimli zeminlerde kullanılır"
            ]
          }
        ]
      },
      {
        id: "kullanim-alanlari",
        title: "DSM Kullanım Alanları",
        blocks: [
          {
            type: "list",
            title: "DSM'nin tercih edildiği proje tipleri",
            items: [
              "Endüstriyel tesis ve depo zemin platformu iyileştirmesi",
              "Raylı sistem ve karayolu alt yapısı stabilizasyonu",
              "Lojistik merkezi ve fabrika temeli oturma kontrolü",
              "Sıvılaşmaya yatkın zemin güçlendirme",
              "Deniz dolgusu ve yumuşak zemin stabilizasyonu",
              "İksa perdesi olarak zemin geçirimsizlik uygulaması"
            ]
          }
        ]
      },
      {
        id: "tasarim",
        title: "DSM Tasarım Kriterleri",
        blocks: [
          {
            type: "paragraph",
            content: "DSM tasarımı iki temel adımdan oluşur: Laboratuvar karışım tasarımı ve saha uygulama tasarımı. Laboratuvarda zemin numuneleri ile farklı çimento dozajlarında karıştırma yapılarak hedef mukavemet değerini karşılayan optimum dozaj belirlenir."
          },
          {
            type: "note",
            title: "Hedef mukavemet değeri",
            content: "DSM kolonlarında unconfined sıkıştırma mukavemeti (qu) genellikle 500 kPa ile 3000 kPa arasında hedeflenir. Bu değer zemin türü, bağlayıcı dozajı ve kürleme koşullarına bağlıdır."
          }
        ]
      }
    ],
    faq: [
      {
        question: "DSM ile jet grout arasındaki temel fark nedir?",
        answer: "DSM, karıştırıcı kanatlarla zemini mekanik olarak karıştırırken, jet grout yüksek basınçlı sıvı jetiyle zemini parçalayarak kolon oluşturur. DSM daha düşük basınçla çalışır ve geniş alanlarda ekonomiktir."
      },
      {
        question: "DSM hangi zeminlerde uygulanmaz?",
        answer: "Çakıl ve iri dane içeriği yüksek zeminlerde karıştırıcı kanatların geçişi zorlaşır ve DSM verimliliği düşer. Bu durumda jet grout veya vibro kompaksiyon daha uygun seçenek olabilir."
      },
      {
        question: "DSM kolonu ne kadar mukavemet sağlar?",
        answer: "Zemin tipine ve çimento dozajına göre genellikle 0,5 MPa ile 3 MPa arasında unconfined basınç mukavemeti elde edilir. Organik içerikli zeminlerde daha yüksek dozaj veya kireç katkısı gerekebilir."
      },
      {
        question: "DSM oturma sorunlarını çözer mi?",
        answer: "Evet. DSM kolon ağı, zemin taşıma kapasitesini artırarak hem toplam oturmayı hem de fark oturmayı önemli ölçüde azaltır. Performans hedefleri proje başında belirlenir ve tasarım buna göre yapılır."
      }
    ],
    relatedSlugs: ["dsm-nasil-uygulanir", "dsm-malzeme-secinimi", "jet-grout-ve-dsm-farki"],
    keywords: [
      "DSM nedir",
      "deep soil mixing nedir",
      "derin zemin karıştırma",
      "DSM zemin iyileştirme",
      "zemin çimento kolon",
      "DSM avantajları"
    ],
    published: true
  },
  {
    slug: "mini-kazik-tercih-nedenleri",
    title: "Mini Kazık Hangi Durumlarda Tercih Edilir?",
    seoTitle: "Mini Kazık Hangi Durumlarda Tercih Edilir? | YER6",
    description: "Mini kazık; sınırlı alanlarda, mevcut yapı altında ve titreşim kısıtlı sahalarda zemin güçlendirme ve underpinning için kullanılır.",
    excerpt: "Mini kazık (mikro kazık), kompakt ekipmanıyla dar, kapalı ve kısıtlı alanlarda zemin güçlendirme ve mevcut yapı takviyesi için tercih edilen yüksek kapasiteli bir temel elemanıdır.",
    category: "Mini Kazık",
    readingTime: "8 dk",
    publishedAt: "2026-06-23",
    updatedAt: "2026-06-23",
    heroLabel: "Mini Kazık Uygulama Koşulları",
    introduction: "Mini kazık ya da teknik ismiyle mikro kazık; küçük çaplı (100–300 mm), çelik donatılı ve enjeksiyonlu bir zemin güçlendirme elemanıdır. Kompakt ekipmanı sayesinde fore kazığın ulaşamadığı alanlarda etkili biçimde uygulanabilir.",
    sections: [
      {
        id: "ne-zaman-tercih-edilir",
        title: "Mini Kazık Ne Zaman Tercih Edilir?",
        blocks: [
          {
            type: "list",
            title: "Mini kazık tercih koşulları",
            items: [
              "Bodrum kat, kapalı alan veya düşük tavan yüksekliği kısıtı",
              "Mevcut yapı temelinin underpinning (alttan takviye) gereksinimi",
              "Tarihi yapı ve anıtlarda minimal müdahaleyle güçlendirme",
              "Aktif trafik altında veya çevresinde çalışma zorunluluğu",
              "Eğimli arazide şev stabilitesi ve ankrajlı güçlendirme",
              "Titreşim kısıtlı alanda minimum titreşimle delgi gereksinimi"
            ]
          }
        ]
      },
      {
        id: "teknik-ozellikler",
        title: "Mini Kazık Teknik Özellikleri",
        blocks: [
          {
            type: "paragraph",
            content: "Mini kazıklar genellikle 100 mm ile 300 mm arasında çaplarda, 20–40 m derinliğe kadar uygulanabilir. Çelik boru veya çubuk donatıyla güçlendirilen kuyuya çimento grout enjekte edilir."
          },
          {
            type: "list",
            items: [
              "Çap: 100–300 mm (özel projelerde 400 mm'ye kadar)",
              "Derinlik: 20–40 m, zemin koşullarına göre değişir",
              "Taşıma kapasitesi: 30–500 kN eksenel kapasite",
              "Ekipman yüksekliği: 2,5–5 m (kapalı alan uygulamaları için)"
            ]
          }
        ]
      },
      {
        id: "uygulama-alanlari",
        title: "Mini Kazık Uygulama Alanları",
        blocks: [
          {
            type: "paragraph",
            content: "Mini kazık en sık underpinning projelerinde karşımıza çıkar. Mevcut yapının temelinin yeterli taşıma kapasitesine sahip olmadığı durumlarda ya da yapıya ek kat eklenmesi planlandığında mini kazık ile temel kapasitesi artırılabilir."
          },
          {
            type: "list",
            items: [
              "Mevcut yapı underpinning (temel altı takviyesi)",
              "Tarihi bina ve anıt restorasyonu",
              "Eğimli arazi şev güçlendirme ve stabilizasyon ankrajı",
              "Boru hattı ve altyapı altı zemin güçlendirme",
              "Bodrum genişletme ve sınırlı alan kazısı desteği",
              "Dağlık ve engebeli arazilerde temel sistemi"
            ]
          }
        ]
      },
      {
        id: "enjeksiyon-sistemi",
        title: "Enjeksiyon Sistemi ve Kapasite",
        blocks: [
          {
            type: "paragraph",
            content: "Mini kazıklarda yükleme kapasitesi büyük ölçüde enjeksiyon yöntemine bağlıdır. Tek aşamalı (gravity) enjeksiyon, çift aşamalı (pressure) enjeksiyon ve post-grouting seçenekleri kapasite ve maliyet dengesi açısından değerlendirilir."
          },
          {
            type: "note",
            title: "Uygunluk testi",
            content: "Her mini kazık projesinde en az %5 oranında uygunluk yükleme testi yapılması tavsiye edilir. Test kazıkları, üretim parametrelerinin doğrulanması için kullanılır."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Mini kazık ile fore kazık arasındaki fark nedir?",
        answer: "Fore kazık büyük çaplı (400–2000 mm), yüksek kapasiteli ve açık sahada standart delgi ekipmanıyla yapılır. Mini kazık ise küçük çaplı (100–300 mm), kompakt ekipmanla dar alanlarda uygulanan ve daha az kapasiteye sahip güçlendirme elemanıdır."
      },
      {
        question: "Mini kazık mevcut bir yapının içinde uygulanabilir mi?",
        answer: "Evet, bu mini kazığın en yaygın kullanım senaryosudur. Kompakt ekipman bodrum kata sığacak boyutlardaysa, yapı içinden doğrudan uygulama yapılabilir."
      },
      {
        question: "Mini kazık neyi çözer: oturmayı mı, taşıma kapasitesini mi?",
        answer: "İkisini de çözebilir. Mevcut oturmayı durdurmak ve ek yük kapasitesi kazandırmak için mini kazık etkin bir yöntemdir. Tasarım hedefine göre parametre ve adet belirlenir."
      }
    ],
    relatedSlugs: ["fore-kazik-nedir", "temel-alti-zemin-guclendirme", "zemin-iyilestirme-yontemleri"],
    keywords: [
      "mini kazık nedir",
      "mikro kazık",
      "mini kazık underpinning",
      "mini kazık uygulama",
      "sınırlı alan zemin güçlendirme",
      "mini kazık hangi durumlarda"
    ],
    published: true
  },
  {
    slug: "kazi-destek-sistemleri-nedir",
    title: "Kazı Destek Sistemleri Nedir? İksa Türleri ve Seçim Kriterleri",
    seoTitle: "İksa ve Kazı Destek Sistemleri: Diyafram Duvar, Palplanş ve Zemin Çivisi | YER6",
    description: "Derin kazılarda kullanılan iksa ve kazı destek sistemleri; ankrajlı fore kazık perde, diyafram duvar, palplanş (sheet pile), mini kazık ve zemin çivisi (soil nail) uygulamaları.",
    excerpt: "Kazı destek sistemleri, derin kazı çeperlerinin göçmesini önleyen ve komşu yapıları koruyan mühendislik yapılarıdır. Fore kazık perde, diyafram duvar, çelik profil perde ve ankraj kombinasyonları en yaygın seçeneklerdir.",
    category: "Ankraj & İksa",
    readingTime: "10 dk",
    publishedAt: "2026-06-23",
    updatedAt: "2026-06-23",
    heroLabel: "Kazı Destek Sistemleri",
    introduction: "Derin kazılar; zemin stabilitesini, komşu yapıları ve altyapı tesislerini tehdit edebilir. Kazı destek sistemleri (iksa sistemleri), kazı sırasında ve sonrasında zemin deformasyonunu kontrol altında tutarak güvenli inşaat ortamı sağlar.",
    sections: [
      {
        id: "iksa-turleri",
        title: "Kazı Destek Sistemi Türleri",
        blocks: [
          {
            type: "paragraph",
            content: "Kazı derinliği, zemin koşulları, komşu yapılara mesafe ve proje bütçesine göre farklı iksa sistemi tipleri seçilir. Temel sistem tipleri şunlardır:"
          },
          {
            type: "list",
            title: "Başlıca iksa sistemi türleri",
            items: [
              "Fore Kazık Perde: Ardışık veya kesişik fore kazıklardan oluşan perde sistemi",
              "Diyafram Duvar: Yüksek derinlik ve su yalıtımı için uygun rijit perde sistemi",
              "Çelik Profil Perde (Berlin Tipi): Ahşap veya beton panellerle desteklenen çelik H/I profil perdesi",
              "Zemin Çivisi (Soil Nailing): Eğimli zeminlerde gerilmeli çivi + püskürtme beton",
              "Gabyon Duvar: Hafif kazılarda taş dolgulu tel kafes duvarlar"
            ]
          }
        ]
      },
      {
        id: "fore-kazik-perde",
        title: "Fore Kazık Perde Sistemi",
        blocks: [
          {
            type: "paragraph",
            content: "Fore kazık perde sistemleri, ardışık (tangent) veya kesişik (secant) düzende yerleştirilen fore kazıklardan oluşur. Secant pile perde, kazıkların birbirine geçmesiyle hem taşıyıcı hem su kesici işlev görür."
          },
          {
            type: "list",
            items: [
              "Ardışık kazık perde: Kazıklar yan yana, aralarında boşluk",
              "Kesişik kazık perde (secant): Birincil ve ikincil kazıklar sırayla kesişecek şekilde",
              "Kiriş (wale) ve ankraj sistemiyle yanal yük aktarımı"
            ]
          }
        ]
      },
      {
        id: "diyafram-duvar",
        title: "Diyafram Duvar",
        blocks: [
          {
            type: "paragraph",
            content: "Diyafram duvar, bentonit çamurlu oluk içine yerleştirilen donatı kafesi ve dökülen beton ile oluşturulan rijit ve geçirimsiz bir perde sistemidir. Yüksek derinlik (30 m+) ve su kontrolü gerektiren projelerde tercih edilir."
          },
          {
            type: "note",
            title: "Kalıcı yapı entegrasyonu",
            content: "Diyafram duvar çoğu zaman binanın bodrum kat dış duvarı ve temel perdesi olarak kalıcı yapı sistemine entegre edilir, böylece ek kalıp ve beton maliyeti ortadan kalkar."
          }
        ]
      },
      {
        id: "ankraj-sistemi",
        title: "Ankrajlı İksa Sistemi",
        blocks: [
          {
            type: "paragraph",
            content: "İksa perdesine ankraj bağlamak, kazı genişlediğinde ya da strüt kullanımı mümkün olmadığında yaygın çözümdür. Her ankraj katmanı, kazı derinleştikçe sırayla gerilerek perdedeki deformasyonu kontrol altında tutar."
          },
          {
            type: "paragraph",
            content: "Ankraj yükleri ve aralıkları; zemin parametreleri, derinlik ve komşu yapı riski dikkate alınarak mühendislik hesaplarıyla belirlenir. Her ankraj kabul testiyle doğrulanır."
          }
        ]
      },
      {
        id: "izleme",
        title: "Kazı Sürecinde İzleme",
        blocks: [
          {
            type: "paragraph",
            content: "Derin kazılarda izleme, komşu yapı ve altyapı güvenliği için zorunludur. İnklinometre, piyezometre ve referans noktası ölçümleri periyodik olarak alınır ve tasarım limitleriyle karşılaştırılır."
          },
          {
            type: "warning",
            title: "Erken uyarı sistemi",
            content: "İzleme değerleri alarm limitini aştığında kazı durdurulmalı, mühendislik değerlendirmesi yapılarak gerekli önlem alınmalıdır. Pasif izleme yerine aktif izleme planı benimsenmelidir."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Hangi iksa sistemi daha ucuzdur?",
        answer: "Çelik profil perde (Berlin tipi) genellikle en ekonomik başlangıç seçeneğidir. Ancak su geçirimsizliği, derinlik ve kalıcı kullanım gerektiğinde diyafram duvar veya fore kazık perde daha avantajlı olabilir. Toplam maliyet karşılaştırması için fizibilite çalışması yapılması gerekir."
      },
      {
        question: "İksa sistemi ne kadar derine gidebilir?",
        answer: "Diyafram duvar 50 m ve üzeri derinliğe ulaşabilir. Fore kazık perde genellikle 30–40 m, çelik profil perde ise 10–20 m derinliklerde ekonomiktir. Derinlik ihtiyacı projeye göre belirlenir."
      },
      {
        question: "Komşu bina riski nasıl değerlendirilir?",
        answer: "İksa tasarımı öncesinde komşu yapılar fotoğraflanır, yapısal değerlendirme yapılır ve izin verilebilir deformasyon limitleri belirlenir. Bu limitler tasarım ve izleme planını doğrudan etkiler."
      },
      {
        question: "İksa sistemi inşaat bitince sökülebilir mi?",
        answer: "Geçici iksa sistemleri (strüt, geçici ankraj) inşaat tamamlandığında sökülebilir. Kalıcı iksa sistemleri (diyafram duvar, fore kazık perde) ise yapıya entegre edilir ve sökülmez."
      }
    ],
    relatedSlugs: ["fore-kazik-nedir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"],
    keywords: [
      "kazı destek sistemleri",
      "iksa sistemi",
      "fore kazık perde",
      "diyafram duvar",
      "derin kazı güvenliği",
      "ankrajlı iksa"
    ],
    published: true
  },
  {
    slug: "fore-kazik-maliyeti",
    title: "Fore Kazık Maliyeti 2026: Fiyatı Belirleyen Faktörler",
    seoTitle: "Fore Kazık Maliyeti 2026 | Fiyatı Neler Belirler? | YER6",
    description: "Fore kazık maliyeti; kazık çapı ve derinliği, beton ve donatı miktarı, zemin koşulları, kazık adedi ve saha erişimine göre belirlenir. Metraj mantığı ve maliyet kalemleri.",
    excerpt: "Fore kazık maliyeti; kazık çapı ve derinliği, beton–donatı sarfı, zemin koşulları, toplam kazık adedi ve saha erişimi gibi kalemlerin birleşimiyle oluşur. Gerçekçi fiyat, zemin verisi ve projeye özel metrajla hesaplanır.",
    category: "Fore Kazık",
    readingTime: "8 dk",
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-10",
    heroLabel: "Fore Kazık Maliyeti",
    introduction:
      "Fore kazık maliyeti, projeden projeye önemli ölçüde değişir; tek bir metretül fiyatı vermek gerçekçi değildir. Kazık geometrisi, beton ve donatı miktarı, zemin koşulları ve saha organizasyonu maliyeti birlikte belirler. Bu yazıda fore kazık fiyatını etkileyen kalemleri ve metraj mantığını ele alıyoruz.",
    sections: [
      {
        id: "faktorler",
        title: "Fore Kazık Maliyetini Belirleyen Faktörler",
        blocks: [
          {
            type: "paragraph",
            content:
              "Fore kazık maliyeti; delgi metrajı (toplam kazık boyu), kazık çapı, beton ve donatı sarfı, zemin sertliği ve saha koşullarına bağlıdır. Sert kaya veya yüksek yeraltı suyu gibi koşullar hem delgi süresini hem de muhafaza borusu ihtiyacını artırarak maliyeti yükseltir."
          },
          {
            type: "list",
            title: "Fiyatı etkileyen başlıca kalemler",
            items: [
              "Kazık çapı ve derinliği (delgi metrajı)",
              "Beton sınıfı ve donatı (çelik) miktarı",
              "Zemin sertliği ve muhafaza borusu ihtiyacı",
              "Yeraltı suyu ve tremie beton koşulları",
              "Toplam kazık adedi ve saha büyüklüğü",
              "Mobilizasyon, deneme kazığı ve yükleme testleri"
            ]
          }
        ]
      },
      {
        id: "metraj",
        title: "Metraj ve Maliyet Mantığı",
        blocks: [
          {
            type: "paragraph",
            content:
              "Fore kazık işleri genellikle toplam kazık boyu (metretül) üzerinden metrajlanır; birim fiyat delgi, beton, donatı, ekipman ve işçilik kalemlerini içerir. Kazık yükleme ve bütünlük (PIT) testleri kalite güvencesi için maliyete eklenen kalemlerdir."
          },
          {
            type: "note",
            title: "Sağlıklı teklif için",
            content:
              "Gerçekçi bir fore kazık maliyeti, zemin etüdü verisi ve projeye özel kazık düzeniyle hesaplanır. YER6 ihale öncesi yaklaşık metraj ve maliyet öngörüsü hazırlar."
          }
        ]
      }
    ],
    faq: [
      { question: "Fore kazık metretül fiyatı ne kadar?", answer: "Sabit bir fiyat yoktur; çap, derinlik, beton–donatı miktarı ve zemin koşullarına göre değişir. Gerçekçi rakam ancak zemin verisi ve projeye özel metrajla verilir." },
      { question: "Fore kazık maliyetini en çok ne artırır?", answer: "Sert kaya, yüksek yeraltı suyu, büyük çap/derinlik, muhafaza borusu ihtiyacı ve geniş kazık adedi maliyeti artıran başlıca etkenlerdir." },
      { question: "Mini kazık fore kazıktan ucuz mu?", answer: "Dar sahalarda ve düşük yüklerde mini kazık avantajlı olabilir; ancak yüksek eksenel yüklerde fore kazık gerekir. Karar yük ve saha koşullarına bağlıdır." },
      { question: "Yükleme testi maliyeti neye göre belirlenir?", answer: "Test yöntemi (statik/dinamik), test adedi ve şartname gereklilikleri maliyeti belirler. Test kapsamı proje riskine göre planlanır." }
    ],
    relatedSlugs: ["fore-kazik-nedir", "fore-kazik-avantajlari", "kazi-destek-sistemleri-nedir"],
    keywords: ["fore kazık maliyeti", "fore kazık fiyatları", "fore kazık metretül fiyatı", "kazıklı temel maliyeti", "fore kazık fiyatı 2026"],
    published: true
  },
  {
    slug: "binalari-yikmadan-zemin-guclendirme",
    title: "Binaları Yıkmadan Zemin Güçlendirme Yöntemleri",
    seoTitle: "Binaları Yıkmadan Zemin Güçlendirme | Mevcut Yapı Takviyesi | YER6",
    description: "Mevcut binaları yıkmadan temel altı zemin güçlendirme: jet grout, mini kazık, enjeksiyon ve mikro kazık ile oturma ve taşıma gücü sorunlarının çözümü.",
    excerpt: "Mevcut yapıyı yıkmadan, temel altında jet grout, mini kazık ve enjeksiyon yöntemleriyle zemin güçlendirilebilir. Bu yöntemler oturma, çatlak ve taşıma gücü sorunlarına düşük müdahaleyle çözüm sunar.",
    category: "Zemin İyileştirme",
    readingTime: "9 dk",
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-10",
    heroLabel: "Mevcut Yapı Güçlendirme",
    introduction:
      "Zemin kaynaklı oturma, çatlak ve taşıma gücü sorunları her zaman yıkımı gerektirmez. Doğru yöntemle, mevcut bina kullanımda kalırken temel altındaki zemin güçlendirilebilir. Bu yazıda binaları yıkmadan uygulanan zemin güçlendirme yöntemlerini ve seçim kriterlerini açıklıyoruz.",
    sections: [
      {
        id: "yontemler",
        title: "Mevcut Yapı Altında Uygulanan Yöntemler",
        blocks: [
          {
            type: "paragraph",
            content:
              "Mevcut yapı altında zemin güçlendirme; kompakt ekipmanlarla, düşük titreşimle ve kontrollü biçimde uygulanır. Yöntem seçimi; zemin türüne, sorunun kaynağına (oturma, sıvılaşma, taşıma gücü) ve yapının durumuna göre belirlenir."
          },
          {
            type: "list",
            title: "Öne çıkan yöntemler",
            items: [
              "Jet grout: temel altında zemin-çimento kolonlarıyla taşıma gücü ve su kontrolü",
              "Mini/mikro kazık: yükün derindeki sağlam tabakaya aktarılması (underpinning)",
              "Zemin enjeksiyonu: boşlukların doldurulması ve zemin sıkılaştırma",
              "Ankraj/destek: yanal hareket ve şev sorunlarının kontrolü"
            ]
          }
        ]
      },
      {
        id: "secim",
        title: "Yöntem Seçimi ve Ön Değerlendirme",
        blocks: [
          {
            type: "paragraph",
            content:
              "Doğru yöntem, ancak yapının mevcut durumunun ve zemin koşullarının incelenmesiyle belirlenir. Oturma nedeninin doğru teşhisi, kalıcı çözüm için kritiktir; aksi halde müdahale geçici kalabilir."
          },
          {
            type: "warning",
            title: "Teşhis olmadan müdahale etmeyin",
            content:
              "Çatlak ve oturma belirtileri farklı nedenlerden kaynaklanabilir. Zemin etüdü ve yapısal değerlendirme yapılmadan uygulanan müdahaleler sorunu çözmeyebilir, hatta artırabilir."
          }
        ]
      }
    ],
    faq: [
      { question: "Bina boşaltılmadan güçlendirme yapılabilir mi?", answer: "Çoğu durumda evet. Kompakt ekipman ve düşük titreşimli yöntemlerle bina büyük ölçüde kullanımda kalırken temel altı güçlendirme planlanabilir. Kesin durum yapısal değerlendirmeye bağlıdır." },
      { question: "Oturan bir bina düzeltilebilir mi?", answer: "Oturmanın kaynağına göre mini kazık (underpinning) ve enjeksiyon yöntemleriyle yük derindeki sağlam tabakaya aktarılarak oturma durdurulabilir; bazı durumlarda seviye düzeltmesi de mümkündür." },
      { question: "Hangi yöntem daha uygun?", answer: "Zemin türü, sorunun kaynağı ve yapının durumu belirleyicidir. Jet grout su kontrolü ve taşıma gücü için, mini kazık derin yük aktarımı için öne çıkar. Karar teşhise dayanır." },
      { question: "Önce ne yapılmalı?", answer: "Öncelikle zemin etüdü ve yapısal değerlendirme ile sorunun kaynağı doğru teşhis edilmeli; ardından yönteme karar verilmelidir." }
    ],
    relatedSlugs: ["temel-alti-zemin-guclendirme", "sivilasma-riskine-karsi-zemin-guclendirme", "zemin-iyilestirme-yontemleri"],
    keywords: ["binaları yıkmadan zemin güçlendirme", "mevcut yapı güçlendirme", "temel altı güçlendirme", "underpinning", "oturan bina güçlendirme"],
    published: true
  },
  {
    slug: "zemin-etudu-nasil-yapilir",
    title: "Zemin Etüdü Nasıl Yapılır? Süreç ve Kapsam",
    seoTitle: "Zemin Etüdü Nasıl Yapılır? Süreç, Kapsam ve Önemi | YER6",
    description: "Zemin etüdü; sondaj, arazi deneyleri (SPT, CPT) ve laboratuvar testleriyle zeminin mühendislik parametrelerini belirleyen ve güvenli temel tasarımının temelini oluşturan süreçtir.",
    excerpt: "Zemin etüdü; sondaj, SPT/CPT arazi deneyleri ve laboratuvar testleriyle zeminin taşıma gücünü, oturma ve sıvılaşma davranışını belirler. Yapı ruhsatı için zorunlu, güvenli tasarım için vazgeçilmezdir.",
    category: "Zemin İyileştirme",
    readingTime: "8 dk",
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-10",
    heroLabel: "Zemin Etüdü",
    introduction:
      "Zemin etüdü, güvenli ve ekonomik temel tasarımının ilk adımıdır. Sondaj, arazi ve laboratuvar deneyleriyle zeminin mühendislik özellikleri belirlenir; sıvılaşma, oturma ve taşıma gücü riskleri değerlendirilir. Bu yazıda zemin etüdünün nasıl yapıldığını ve neleri kapsadığını açıklıyoruz.",
    sections: [
      {
        id: "surec",
        title: "Zemin Etüdü Süreci",
        blocks: [
          {
            type: "paragraph",
            content:
              "Zemin etüdü; proje tipine göre planlanan sondaj ve deney programıyla başlar. Arazide sondaj yapılır, SPT/CPT gibi deneylerle zemin profili ve yeraltı suyu belirlenir; alınan numuneler laboratuvarda test edilir. Sonuçlar değerlendirilerek zemin modeli ve tasarım parametreleri oluşturulur."
          },
          {
            type: "list",
            title: "Etüdün temel aşamaları",
            items: [
              "Ön değerlendirme ve sondaj/deney programının planlanması",
              "Arazi çalışmaları: sondaj, SPT/CPT, yeraltı suyu ölçümü",
              "Laboratuvar deneyleri: indeks, mukavemet, konsolidasyon",
              "Analiz ve zemin modeli oluşturma",
              "Geoteknik rapor ve temel önerileri"
            ]
          }
        ]
      },
      {
        id: "onem",
        title: "Neden Önemli?",
        blocks: [
          {
            type: "paragraph",
            content:
              "Zemin etüdü hem yasal bir gerekliliktir hem de güvenli tasarımın teknik temelidir. Yetersiz etüt; hatalı temel seçimi, beklenmeyen oturma veya sıvılaşma sürprizleri ve ilerleyen aşamada çok daha yüksek maliyetlere yol açabilir. Doğru etüt, gerektiğinde uygun zemin iyileştirme yöntemine de altlık oluşturur."
          },
          {
            type: "note",
            title: "TBDY 2018 uyumu",
            content:
              "Etüt kapsamı; yerel zemin sınıfı, sıvılaşma değerlendirmesi ve tasarım spektrumu için yönetmelik gerekliliklerini karşılayacak derinlik ve veriyi içermelidir."
          }
        ]
      }
    ],
    faq: [
      { question: "Zemin etüdü zorunlu mu?", answer: "Evet. Yapı ruhsatı için zemin ve temel etüdü yasal olarak zorunludur; ayrıca güvenli tasarım için teknik olarak da gereklidir." },
      { question: "Kaç sondaj gerekir?", answer: "Sondaj sayısı ve derinliği; yapı büyüklüğü, yük durumu ve zemin değişkenliğine göre belirlenir. Amaç, güvenilir bir zemin modeli kurmaktır." },
      { question: "Zemin etüdü ne kadar sürer?", answer: "Süre; sondaj sayısı, derinlik ve laboratuvar programına göre değişir. Küçük projelerde birkaç gün, büyük sahalarda daha uzun sürebilir." },
      { question: "Etüt sonrası iyileştirme gerekir mi?", answer: "Sonuca bağlıdır. Zayıf, gevşek veya sıvılaşmaya yatkın zeminlerde iyileştirme veya uygun temel sistemi önerilir; sağlam zeminlerde gerekmeyebilir." }
    ],
    relatedSlugs: ["zemin-iyilestirme-planlama", "sivilasma-riskine-karsi-zemin-guclendirme", "zemin-kalite-kontrol-standartlari"],
    keywords: ["zemin etüdü nasıl yapılır", "zemin etüdü", "zemin etüt raporu", "sondaj", "SPT CPT deneyi", "zemin etüdü zorunlu mu"],
    published: true
  },
  {
    slug: "jet-grout-firmasi-ankara",
    title: "Jet Grout Firması Ankara: Seçim Kriterleri ve YER6",
    seoTitle: "Jet Grout Firması Ankara | Ankara Jet Grout Uygulaması | YER6",
    description: "Ankara'da jet grout firması seçerken makine parkı, saha tecrübesi, kalite kontrol ve referanslar önemlidir. Ankara zemin koşullarına uygun jet grout uygulaması için YER6.",
    excerpt: "Ankara'da jet grout firması seçerken makine parkı, saha tecrübesi, kalite kontrol süreci ve yerel zemin bilgisi belirleyicidir. YER6, Gölbaşı merkezli ekibiyle Ankara ve çevresinde jet grout uygular.",
    category: "Jet Grout",
    readingTime: "7 dk",
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-10",
    heroLabel: "Ankara Jet Grout",
    introduction:
      "Ankara'da jet grout ihtiyacı; başkentin yüksek plastisiteli 'Ankara kili' ve değişken dolgu koşullarıyla doğrudan ilişkilidir. Doğru firma seçimi, uygulamanın kalitesini ve maliyetini belirler. Bu yazıda Ankara'da jet grout firması seçerken dikkat edilmesi gerekenleri ve YER6'nın yaklaşımını açıklıyoruz.",
    sections: [
      {
        id: "secim",
        title: "Ankara'da Jet Grout Firması Seçerken Nelere Dikkat Edilmeli?",
        blocks: [
          {
            type: "list",
            title: "Değerlendirme kriterleri",
            items: [
              "Kendi makine parkı ve ekipman kapasitesi (delgi, pompa, santral)",
              "Ankara zemin koşullarında (kil, dolgu) saha tecrübesi",
              "Deneme kolonu ve kalite kontrol (karot, basınç testi) süreci",
              "Şeffaf metraj ve gerçekçi maliyet öngörüsü",
              "Referans projeler ve teknik dokümantasyon"
            ]
          },
          {
            type: "paragraph",
            content:
              "Jet grout kalitesi, tasarım kadar sahadaki ekipman ve uygulama disiplinine bağlıdır. Yeterli basınç ve debi sağlayamayan ekipmanla hedef kolon çapı elde edilemez; bu nedenle firmanın makine parkı ve kalite kontrol yaklaşımı belirleyicidir."
          }
        ]
      },
      {
        id: "ankara-zemin",
        title: "Ankara Zemininde Jet Grout",
        blocks: [
          {
            type: "paragraph",
            content:
              "Ankara'nın önemli bölümünde yüzeye yakın yüksek plastisiteli killer bulunur; bu killer nem değişiminde şişme-büzülme yaparak temellerde sorun oluşturabilir. Jet grout, temel altı güçlendirme ve su kontrolü gereken durumlarda dar sahalarda bile düşük titreşimle uygulanabilir."
          },
          {
            type: "note",
            title: "Yerel bilgi önemlidir",
            content:
              "Çankaya, Gölbaşı, Etimesgut ve Sincan gibi bölgelerde zemin koşulları değişir. Doğru parametreler, sondaj verisiyle kurulan zemin modeline göre belirlenmelidir."
          }
        ]
      }
    ],
    faq: [
      { question: "Ankara'da jet grout firması nasıl seçilir?", answer: "Makine parkı, Ankara zemininde saha tecrübesi, deneme kolonu ve kalite kontrol süreci, şeffaf metraj ve referanslar en önemli kriterlerdir." },
      { question: "YER6 Ankara'nın hangi bölgelerinde çalışıyor?", answer: "Gölbaşı merkezli ekibimizle Ankara'nın tüm ilçelerinde ve çevre illerde jet grout ve zemin güçlendirme uygulamaları yapıyoruz." },
      { question: "Ankara jet grout maliyeti neye bağlı?", answer: "Kolon çapı ve derinliği, zemin türü, metraj ve saha koşullarına bağlıdır. Gerçekçi rakam zemin verisi ve projeye özel metrajla verilir." }
    ],
    relatedSlugs: ["jet-grout-nedir", "jet-grout-maliyeti", "jet-grout-hangi-zeminlerde-uygulanir"],
    keywords: ["jet grout firması ankara", "ankara jet grout", "jet grout ankara", "jet grout firmaları ankara", "ankara zemin güçlendirme"],
    published: true
  },
  {
    slug: "fore-kazik-firmasi-ankara",
    title: "Fore Kazık Firması Ankara: Seçim Kriterleri ve YER6",
    seoTitle: "Fore Kazık Firması Ankara | Ankara Fore Kazık Uygulaması | YER6",
    description: "Ankara'da fore kazık firması seçerken delgi kapasitesi, makine parkı, kalite kontrol ve referanslar önemlidir. Ankara'da yüksek yapı ve derin temel için fore kazık: YER6.",
    excerpt: "Ankara'da fore kazık firması seçerken delgi kapasitesi, makine parkı, bütünlük/yükleme testleri ve referanslar belirleyicidir. YER6, Ankara ve çevresinde fore kazık ve derin temel uygular.",
    category: "Fore Kazık",
    readingTime: "7 dk",
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-10",
    heroLabel: "Ankara Fore Kazık",
    introduction:
      "Ankara'da yüksek yapı temelleri, derin kazılar ve altyapı projeleri fore kazık gerektirir. Doğru firma seçimi; delgi kapasitesi, kalite kontrol ve yerel saha tecrübesiyle şekillenir. Bu yazıda Ankara'da fore kazık firması seçerken dikkat edilmesi gerekenleri ve YER6'nın yaklaşımını açıklıyoruz.",
    sections: [
      {
        id: "secim",
        title: "Ankara'da Fore Kazık Firması Seçerken Nelere Dikkat Edilmeli?",
        blocks: [
          {
            type: "list",
            title: "Değerlendirme kriterleri",
            items: [
              "Delgi makinesi kapasitesi ve çap/derinlik aralığı",
              "Muhafaza borulu delgi ve zorlu zemin tecrübesi",
              "Bütünlük (PIT) ve yükleme testi ile kalite doğrulama",
              "Tremie beton ve donatı uygulama disiplini",
              "Referans projeler ve teknik raporlama"
            ]
          },
          {
            type: "paragraph",
            content:
              "Fore kazığın taşıma kapasitesi; doğru delgi, donatı yerleşimi ve tremie beton dökümüne bağlıdır. Kalite; bütünlük ve yükleme testleriyle bağımsız biçimde doğrulanmalıdır."
          }
        ]
      },
      {
        id: "ankara-uygulama",
        title: "Ankara'da Fore Kazık Uygulaması",
        blocks: [
          {
            type: "paragraph",
            content:
              "Ankara'da yüksek yapı ve derin bodrumlu projelerde fore kazıklı temeller ile ankraj destekli iksa sistemleri sıkça birlikte uygulanır. Zemin profili ve yük durumuna göre kazık çapı, derinliği ve düzeni projelendirilir."
          },
          {
            type: "note",
            title: "Test ile güvence",
            content:
              "Uygulanan kazıkların tasarım varsayımlarını karşıladığı, yükleme ve bütünlük testleriyle belgelenmelidir. Bağımsız test raporu, yatırımcı için güvenilir kalite kanıtıdır."
          }
        ]
      }
    ],
    faq: [
      { question: "Ankara'da fore kazık firması nasıl seçilir?", answer: "Delgi kapasitesi, makine parkı, kalite kontrol (PIT ve yükleme testi), uygulama disiplini ve referanslar en önemli kriterlerdir." },
      { question: "Fore kazık kalitesi nasıl doğrulanır?", answer: "Düşük gerilme bütünlük testi (PIT) ile süreklilik, statik/dinamik yükleme testleriyle taşıma kapasitesi bağımsız olarak doğrulanır." },
      { question: "YER6 Ankara'da fore kazık uyguluyor mu?", answer: "Evet. Gölbaşı merkezli ekibimizle Ankara'nın tüm ilçelerinde ve çevre illerde fore kazık ve derin temel uygulamaları yapıyoruz." }
    ],
    relatedSlugs: ["fore-kazik-nedir", "fore-kazik-maliyeti", "fore-kazik-avantajlari"],
    keywords: ["fore kazık firması ankara", "ankara fore kazık", "fore kazık ankara", "fore kazık firmaları ankara", "ankara kazıklı temel"],
    published: true
  },
  {
    slug: "deep-soil-mixing-ankara",
    title: "Deep Soil Mixing (DSM) Ankara: Uygulama ve Firma Seçimi",
    seoTitle: "Deep Soil Mixing Ankara | DSM Zemin İyileştirme Firması | YER6",
    description: "Ankara'da Deep Soil Mixing (DSM) zemin iyileştirme; yumuşak zemin ve dolgu alanlarında oturma kontrolü için uygulanır. Firma seçimi kriterleri ve YER6 DSM uygulaması.",
    excerpt: "Deep Soil Mixing (DSM), Ankara'da yumuşak zemin ve dolgu alanlarında oturmayı kontrol etmek için tercih edilir. Firma seçiminde laboratuvar karışım tasarımı, ekipman ve kalite kontrol belirleyicidir.",
    category: "DSM",
    readingTime: "7 dk",
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-10",
    heroLabel: "Ankara DSM",
    introduction:
      "Deep Soil Mixing (derin zemin karıştırma / DSM), yumuşak kil ve gevşek dolgu zeminlerde oturmayı ve taşıma gücü sorunlarını kontrol etmek için etkili bir zemin iyileştirme yöntemidir. Ankara ve çevresinde geniş taban alanlı yapılarda tercih edilir. Bu yazıda DSM'in Ankara'daki uygulamasını ve firma seçim kriterlerini açıklıyoruz.",
    sections: [
      {
        id: "dsm-ankara",
        title: "Ankara'da DSM Ne Zaman Tercih Edilir?",
        blocks: [
          {
            type: "paragraph",
            content:
              "DSM; yumuşak kil, gevşek silt ve dolgu zeminlerde, özellikle depo, lojistik ve endüstriyel yapılar gibi geniş taban alanlı projelerde oturma kontrolü için tercih edilir. Düşük titreşimi ve yüksek günlük ilerleme kapasitesiyle geniş alanlarda ekonomik çözüm sunar."
          },
          {
            type: "list",
            title: "Firma seçiminde önemli noktalar",
            items: [
              "Laboratuvar karışım tasarımı (çimento dozajı ve hedef mukavemet)",
              "DSM ekipman kapasitesi ve derinlik aralığı",
              "Karot ve basınç testleriyle kolon kalite doğrulaması",
              "Dijital üretim kaydı (çimento sarfı, karıştırma, derinlik)",
              "Ankara zemin koşullarında saha tecrübesi"
            ]
          }
        ]
      },
      {
        id: "kalite",
        title: "DSM Kalite Kontrolü",
        blocks: [
          {
            type: "paragraph",
            content:
              "DSM kolonlarının hedef mukavemeti; zemin plastisitesi, organik içerik ve bağlayıcı oranına bağlıdır. Laboratuvar karışım tasarımı ve saha karot testleri, kolon dayanımının doğrulanması için esastır."
          },
          {
            type: "note",
            title: "Jet grout mu DSM mi?",
            content:
              "Geniş alan ve yumuşak zeminde DSM ekonomik olabilir; su kontrolü ve dar saha gerektiren durumlarda jet grout öne çıkar. Karar, zemin verisi ve proje hedefine göre verilir."
          }
        ]
      }
    ],
    faq: [
      { question: "DSM Ankara'da hangi projelerde uygulanır?", answer: "Yumuşak zemin ve dolgu alanlarında, özellikle depo, lojistik ve endüstriyel yapılar gibi geniş taban alanlı projelerde oturma kontrolü için uygulanır." },
      { question: "DSM firması seçerken nelere dikkat edilmeli?", answer: "Laboratuvar karışım tasarımı, ekipman kapasitesi, karot ve basınç testleriyle kalite doğrulaması ve dijital üretim kaydı en önemli kriterlerdir." },
      { question: "YER6 Ankara'da DSM uyguluyor mu?", answer: "Evet. Gölbaşı merkezli ekibimizle Ankara ve çevresinde DSM zemin iyileştirme uygulamaları yapıyoruz." }
    ],
    relatedSlugs: ["dsm-nedir", "dsm-nasil-uygulanir", "jet-grout-ve-dsm-farki"],
    keywords: ["deep soil mixing ankara", "dsm ankara", "derin zemin karıştırma ankara", "dsm firması ankara", "ankara zemin iyileştirme"],
    published: true
  },
  {
    slug: "ankraj-nedir",
    title: "Ankraj Nedir? Öngermeli Ankraj Uygulaması ve Kullanım Alanları",
    seoTitle: "Ankraj Nedir? Zemin Ankrajı, İksa ve Öngermeli Ankraj Uygulamaları | YER6",
    description: "Zemin ankrajı nedir? Derin kazı iksası, şev stabilizasyonu, zemin çivisi ve ankrajlı fore kazık perde sistemlerinde kullanılan öngermeli ankraj yöntemleri.",
    excerpt: "Ankraj; zemine açılan delgiye yerleştirilen çelik tendonun enjeksiyonla kenetlenmesi ve ön germe uygulanmasıyla yatay yükleri güvenle zemine aktaran bir sistemdir. Derin kazı iksası ve şev stabilizasyonunda kullanılır.",
    category: "Ankraj & İksa",
    readingTime: "7 dk",
    publishedAt: "2026-07-11",
    updatedAt: "2026-07-11",
    heroLabel: "Ankraj",
    introduction: "Ankraj, derin kazılarda perde sistemlerini destekleyen ve yamaçları stabilize eden en yaygın geoteknik çözümlerden biridir. Bu yazıda ankrajın ne olduğunu, nasıl uygulandığını ve nerelerde kullanıldığını açıklıyoruz.",
    sections: [
      { id: "tanim", title: "Ankraj Nedir?", blocks: [
        { type: "paragraph", content: "Ankraj; zemine belirli açı ve derinlikte açılan delgiye çelik tendon (halat veya çubuk) yerleştirilmesi, enjeksiyonla zemine kenetlenmesi ve ön germe uygulanarak yatay yüklerin güvenli biçimde zemine aktarılmasıdır. Geçici veya kalıcı olarak tasarlanabilir." },
        { type: "list", title: "Temel bileşenler", items: ["Serbest boy ve kök (kenetlenme) bölgesi", "Çelik tendon (halat/çubuk)", "Enjeksiyon (kök aderansı)", "Ön germe ve kilitleme başlığı"] }
      ]},
      { id: "kullanim", title: "Nerelerde Kullanılır?", blocks: [
        { type: "list", title: "Uygulama alanları", items: ["Derin kazılarda iksa perdesi desteği", "Şev ve yamaç stabilizasyonu", "İstinat yapılarının güçlendirilmesi", "Yüzer temel/kaldırma kuvvetine karşı ankastre"] },
        { type: "note", title: "Kabul testi", content: "Ankrajlar kabul/çekme testleriyle taşıma kapasitesi açısından doğrulanmalı; kalıcı sistemlerde korozyon koruması sağlanmalıdır." }
      ]}
    ],
    faq: [
      { question: "Geçici ve kalıcı ankraj farkı nedir?", answer: "Geçici ankrajlar inşaat süresince görev yapar ve sökülebilir; kalıcı ankrajlar korozyon korumasıyla yapının ömrü boyunca çalışır." },
      { question: "Ankraj hangi zeminlerde uygulanır?", answer: "Kaya, sert kil ve yeterli kenetlenme sağlayan zeminlerde etkilidir; kök bölgesi zemin dayanımına göre tasarlanır." },
      { question: "Ankraj kalitesi nasıl doğrulanır?", answer: "Her ankraj ön germe sırasında test edilir; ayrıca seçili ankrajlarda çekme (kabul) testi yapılır." }
    ],
    relatedSlugs: ["kazi-destek-sistemleri-nedir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"],
    keywords: ["ankraj nedir", "öngermeli ankraj", "ankraj uygulaması", "iksa ankraj", "zemin ankrajı"],
    published: true
  },
  {
    slug: "tas-kolon-nedir",
    title: "Taş Kolon Nedir? Uygulaması ve Avantajları",
    seoTitle: "Taş Kolon Nedir? Vibro Taş Kolon Uygulaması | YER6",
    description: "Taş kolon; yumuşak zemine sıkıştırılmış çakıl/kırmataş kolonları teşkil ederek taşıma gücünü artıran, oturmayı azaltan ve drenaj sağlayan zemin iyileştirme yöntemidir.",
    excerpt: "Taş kolon; yumuşak kil ve gevşek zeminlere vibro yöntemiyle sıkıştırılmış çakıl/kırmataş kolonları teşkil ederek taşıma gücünü artıran, oturmayı azaltan ve drenaj sağlayarak sıvılaşma direncine katkıda bulunan bir yöntemdir.",
    category: "Zemin İyileştirme",
    readingTime: "6 dk",
    publishedAt: "2026-07-11",
    updatedAt: "2026-07-11",
    heroLabel: "Taş Kolon",
    introduction: "Taş kolon, yumuşak ve gevşek zeminlerde oturma kontrolü ile sıvılaşma azaltımı için etkili bir zemin iyileştirme yöntemidir. Bu yazıda taş kolonun ne olduğunu ve avantajlarını açıklıyoruz.",
    sections: [
      { id: "tanim", title: "Taş Kolon Nedir?", blocks: [
        { type: "paragraph", content: "Taş kolon, vibratör yardımıyla zemine açılan boşluğa çakıl/kırmataş beslenip sıkıştırılarak oluşturulan, yanal zemine kenetlenmiş agrega kolonlarıdır. Islak veya kuru sistemle uygulanır." },
        { type: "list", title: "Sağladıkları", items: ["Taşıma kapasitesi artışı", "Oturma ve fark oturma azaltımı", "Drenaj ile hızlı konsolidasyon", "Sıvılaşma direncine katkı"] }
      ]},
      { id: "avantaj", title: "Avantajları ve Uygulama Alanları", blocks: [
        { type: "paragraph", content: "Doğal agrega kullanımıyla çevre dostudur ve geniş alanlarda hızlı-ekonomik uygulanır. Depo, lojistik ve endüstriyel platformlar ile dolgu altı iyileştirmede tercih edilir." },
        { type: "note", title: "Çok yumuşak zemin", content: "Yanal destek sağlayamayan çok yumuşak zeminlerde kolon şişmesine karşı geotekstil kılıflı taş kolon değerlendirilebilir." }
      ]}
    ],
    faq: [
      { question: "Taş kolon hangi zeminlerde uygun?", answer: "Yumuşak kil, gevşek silt ve kumlu zeminlerde etkilidir; çok yumuşak zeminlerde geotekstil kılıflı çözüm tercih edilebilir." },
      { question: "Taş kolon sıvılaşmayı önler mi?", answer: "Drenaj sağlayıp rijitliği artırarak sıvılaşma direncine katkıda bulunur." },
      { question: "Taş kolon mu DSM mi?", answer: "Taş kolon drenaj ve doğal agrega avantajı sunar; DSM daha yüksek ve kontrollü mukavemet sağlar. Karar zemin ve hedefe bağlıdır." }
    ],
    relatedSlugs: ["zemin-iyilestirme-yontemleri", "sivilasma-riskine-karsi-zemin-guclendirme", "zemin-iyilestirme-planlama"],
    keywords: ["taş kolon nedir", "vibro taş kolon", "taş kolon uygulaması", "zemin iyileştirme taş kolon", "geotekstil kılıflı taş kolon"],
    published: true
  },
  {
    slug: "diafram-duvar-nedir",
    title: "Diyafram Duvar Nedir? Uygulaması ve Kullanım Alanları",
    seoTitle: "Diyafram Duvar Nedir? Bentonit Destekli Perde | YER6",
    description: "Diyafram duvar; bentonit çamuru desteğinde teşkil edilen, hem iksa hem su geçirimsizlik sağlayan betonarme sürekli perde duvardır. Derin kazı ve metro yapılarında kullanılır.",
    excerpt: "Diyafram duvar; bentonit çamuru desteğinde panel panel kazılıp betonarme olarak teşkil edilen, hem yüksek rijitlikli iksa hem de su geçirimsizlik sağlayan sürekli perde duvardır.",
    category: "Ankraj & İksa",
    readingTime: "6 dk",
    publishedAt: "2026-07-11",
    updatedAt: "2026-07-11",
    heroLabel: "Diyafram Duvar",
    introduction: "Diyafram duvar, derin ve sulu kazılarda yüksek rijitlik ve su kontrolü gerektiren projeler için tercih edilen kalıcı bir perde sistemidir. Bu yazıda ne olduğunu ve nerelerde kullanıldığını açıklıyoruz.",
    sections: [
      { id: "tanim", title: "Diyafram Duvar Nedir?", blocks: [
        { type: "paragraph", content: "Diyafram duvar; kılavuz duvarlar arasında, bentonit çamuru desteğinde özel kepçelerle panel panel kazılan, donatı kafesi indirilip tremie betonla dökülen sürekli betonarme perde duvardır. Panjur/su tutucu ile paneller birleştirilir." },
        { type: "list", title: "Öne çıkan özellikler", items: ["Yüksek rijitlik, düşük deplasman", "Su geçirimsizlik", "Kalıcı taşıyıcı bodrum perdesi olabilme", "Komşu yapıya duyarlı derin kazı"] }
      ]},
      { id: "kullanim", title: "Nerelerde Kullanılır?", blocks: [
        { type: "paragraph", content: "Derin bodrumlu yüksek yapılar, metro istasyonları, yüksek yeraltı suyu bulunan derin kazılar ve komşu yapıya sıfır toleranslı kentsel kazılarda tercih edilir." },
        { type: "note", title: "Fore kazık perdesine göre", content: "Diyafram duvar daha yüksek rijitlik ve daha iyi su geçirimsizliği sağlar; derin, sulu ve hassas kazılarda avantajlıdır." }
      ]}
    ],
    faq: [
      { question: "Diyafram duvar mı fore kazık perdesi mi?", answer: "Diyafram duvar derin, sulu ve komşu yapıya duyarlı kazılarda daha rijit ve su geçirimsizdir; fore kazık perdesi bazı koşullarda daha hızlı/ekonomiktir." },
      { question: "Kalıcı yapı elemanı olur mu?", answer: "Evet; uygun tasarlandığında nihai yapının bodrum perde duvarı olarak taşıyıcı görev üstlenir." },
      { question: "Bentonit çamuru ne işe yarar?", answer: "Kazı sırasında panel çeperinin göçmesini önleyerek stabiliteyi sağlar ve beton dökümüyle yerini betona bırakır." }
    ],
    relatedSlugs: ["kazi-destek-sistemleri-nedir", "fore-kazik-nedir", "zemin-iyilestirme-risk-yonetimi"],
    keywords: ["diyafram duvar nedir", "diafram duvar", "bentonit destekli perde", "derin kazı perde duvarı", "iksa diyafram duvar"],
    published: true
  },
  {
    slug: "kentsel-donusumde-zemin-guclendirme",
    title: "Kentsel Dönüşümde Zemin Güçlendirme: Yöntemler ve Süreç",
    seoTitle: "Kentsel Dönüşümde Zemin Güçlendirme | YER6",
    description: "Kentsel dönüşümde zemin güçlendirme; mevcut yapı altında jet grout, mini kazık ve enjeksiyonla ya da yeni yapı öncesi zemin iyileştirmeyle güvenli temel sağlar.",
    excerpt: "Kentsel dönüşümde zemin güçlendirme; hem mevcut yapıların temel altı takviyesinde (jet grout, mini kazık, enjeksiyon) hem de yeni yapı öncesi zemin iyileştirmede kritik rol oynar. Dar ve komşu yapıya yakın sahalarda düşük titreşimli yöntemler öne çıkar.",
    category: "Zemin İyileştirme",
    readingTime: "7 dk",
    publishedAt: "2026-07-11",
    updatedAt: "2026-07-11",
    heroLabel: "Kentsel Dönüşüm",
    introduction: "Kentsel dönüşüm projelerinde zemin, yapı güvenliğinin temelidir. Bu yazıda mevcut yapı altında ve yeni yapı öncesinde uygulanan zemin güçlendirme yöntemlerini ve süreci açıklıyoruz.",
    sections: [
      { id: "yontemler", title: "Uygulanan Yöntemler", blocks: [
        { type: "list", title: "Kentsel dönüşümde öne çıkanlar", items: ["Mevcut yapı altında jet grout ve mini kazık (underpinning)", "Zemin enjeksiyonu ve sıkılaştırma", "Yeni yapı öncesi jet grout / DSM zemin iyileştirme", "Derin kazıda ankrajlı iksa ve fore kazık perde"] },
        { type: "note", title: "Dar saha", content: "Komşu yapıya yakın, dar kentsel parsellerde kompakt ekipman ve düşük titreşimli yöntemler tercih edilir; çevre yapı izlemesi yapılır." }
      ]},
      { id: "surec", title: "Süreç", blocks: [
        { type: "paragraph", content: "Süreç; zemin etüdü ve yapısal değerlendirmeyle başlar, yönteme karar verilir, uygulama sırasında üretim ve deplasman verileri izlenir, sonuç teslim dosyasında belgelenir." }
      ]}
    ],
    faq: [
      { question: "Mevcut bina yıkılmadan güçlendirilebilir mi?", answer: "Çoğu durumda evet; temel altında jet grout ve mini kazık (underpinning) ile kontrollü güçlendirme yapılabilir. Kesin durum yapısal değerlendirmeye bağlıdır." },
      { question: "Dar parselde uygulama mümkün mü?", answer: "Evet; kompakt ekipman ve düşük titreşimli yöntemlerle komşu yapıya duyarlı biçimde çalışılır." },
      { question: "Önce ne yapılmalı?", answer: "Zemin etüdü ve yapısal değerlendirmeyle sorunun kaynağı teşhis edilmeli, ardından yönteme karar verilmelidir." }
    ],
    relatedSlugs: ["binalari-yikmadan-zemin-guclendirme", "temel-alti-zemin-guclendirme", "sivilasma-riskine-karsi-zemin-guclendirme"],
    keywords: ["kentsel dönüşümde zemin güçlendirme", "kentsel dönüşüm zemin", "mevcut bina güçlendirme", "temel altı güçlendirme", "underpinning"],
    published: true
  },
  {
    slug: "zemin-guclendirme-maliyeti",
    title: "Zemin Güçlendirme Maliyeti 2026: Fiyatı Belirleyen Faktörler",
    seoTitle: "Zemin Güçlendirme Maliyeti 2026 | Fiyatı Neler Belirler? | YER6",
    description: "Zemin güçlendirme maliyeti; seçilen yöntem (jet grout, DSM, fore kazık), metraj, zemin koşulları ve saha erişimine göre belirlenir. Fiyatı etkileyen kalemler.",
    excerpt: "Zemin güçlendirme maliyeti; seçilen yönteme (jet grout, DSM, fore kazık), toplam metraja, zemin koşullarına ve saha erişimine göre değişir. Tek bir birim fiyat yerine projeye özel metrajla hesaplanır.",
    category: "Zemin İyileştirme",
    readingTime: "6 dk",
    publishedAt: "2026-07-11",
    updatedAt: "2026-07-11",
    heroLabel: "Maliyet",
    introduction: "Zemin güçlendirme maliyeti projeden projeye önemli ölçüde değişir. Bu yazıda fiyatı belirleyen temel kalemleri ve maliyeti optimize etmenin yollarını açıklıyoruz.",
    sections: [
      { id: "faktorler", title: "Maliyeti Belirleyen Faktörler", blocks: [
        { type: "list", title: "Fiyatı etkileyen kalemler", items: ["Seçilen yöntem (jet grout / DSM / fore kazık / taş kolon)", "Toplam metraj (kolon boyu, adet, alan)", "Zemin türü ve yeraltı suyu", "Saha erişimi ve mobilizasyon", "Kalite kontrol ve testler (karot, yükleme, PIT)"] }
      ]},
      { id: "optimizasyon", title: "Maliyeti Optimize Etmek", blocks: [
        { type: "paragraph", content: "En ekonomik çözüm, zemin verisine göre doğru yöntemin seçilmesiyle bulunur. Gereğinden büyük tasarım veya yanlış yöntem maliyeti artırır." },
        { type: "note", title: "Sağlıklı teklif", content: "Gerçekçi maliyet için zemin etüdü verisi ve proje bilgisi gerekir. YER6 ihale öncesi yaklaşık metraj ve maliyet öngörüsü hazırlar." }
      ]}
    ],
    faq: [
      { question: "Zemin güçlendirme metrekare/metretül fiyatı nedir?", answer: "Sabit bir fiyat yoktur; yöntem, metraj, zemin ve saha koşullarına göre değişir. Gerçekçi rakam zemin verisi ve projeye özel metrajla verilir." },
      { question: "Hangi yöntem daha ekonomik?", answer: "Duruma bağlıdır; geniş alan/yumuşak zeminde DSM, su kontrolü/dar sahada jet grout, yüksek yükte fore kazık öne çıkar. Teknik karşılaştırmayla belirlenir." },
      { question: "Teklif için ne gerekli?", answer: "Mevcut zemin etüdü ve proje bilgileriyle yaklaşık metraj ve maliyet öngörüsü hazırlayabiliriz." }
    ],
    relatedSlugs: ["jet-grout-maliyeti", "fore-kazik-maliyeti", "zemin-iyilestirme-yontemleri"],
    keywords: ["zemin güçlendirme maliyeti", "zemin güçlendirme fiyatları", "zemin iyileştirme maliyeti", "zemin güçlendirme fiyatı 2026", "temel güçlendirme maliyeti"],
    published: true
  }

,
  {
    slug: "zemin-civisi-nedir",
    title: "Zemin Çivisi (Soil Nailing) Nedir? Uygulaması ve Avantajları",
    seoTitle: "Zemin Çivisi (Soil Nailing) Nedir? Uygulaması | YER6",
    description: "Zemin çivisi; kazı yüzeyine delgi, donatı ve enjeksiyonla yerleştirilen pasif elemanlar ve püskürtme beton kaplamayla şev ve kazı stabilitesi sağlayan iksa yöntemidir.",
    excerpt: "Zemin çivisi (soil nailing); kazı kademeler halinde ilerlerken yüzeye delgi–donatı–enjeksiyon adımlarıyla yerleştirilen pasif donatı elemanları ve püskürtme beton kaplamayla şev/kazı stabilitesi sağlayan ekonomik bir iksa yöntemidir.",
    category: "Ankraj & İksa",
    readingTime: "7 dk",
    publishedAt: "2026-07-13",
    updatedAt: "2026-07-13",
    heroLabel: "Zemin Çivisi",
    introduction: "Zemin çivisi, kazı ve şev yüzeylerini kademeli imalatla stabilize eden, ankraja göre daha hafif ve ekonomik bir iksa çözümüdür. Bu yazıda zemin çivisinin ne olduğunu, nasıl uygulandığını ve hangi projelerde tercih edildiğini açıklıyoruz.",
    sections: [
      { id: "tanim", title: "Zemin Çivisi Nedir ve Nasıl Uygulanır?", blocks: [
        { type: "paragraph", content: "Zemin çivisi; kazı yüzeyine belirli açı ve aralıklarla açılan delgilere çelik donatı yerleştirilmesi ve enjeksiyonla zemine kenetlenmesiyle oluşturulan pasif bir güçlendirme elemanıdır. Çiviler, yüzeydeki hasır donatılı püskürtme beton kaplama ile birlikte kompozit bir istinat sistemi gibi çalışır." },
        { type: "list", title: "Uygulama adımları", items: ["Kademeli kazı (tipik 1–2 m yükseklikte etaplar)", "Delgi ve çelik donatının yerleştirilmesi", "Enjeksiyon ile çivinin zemine kenetlenmesi", "Hasır donatı ve püskürtme beton yüzey kaplaması", "Drenaj (barbakan ve şerit drenler) teşkili"] },
        { type: "note", title: "Pasif eleman", content: "Zemin çivisine ankrajdaki gibi ön germe uygulanmaz; çivi, zemin hareket etme eğilimi gösterdikçe yük almaya başlar. Bu nedenle tasarımda izin verilebilir deformasyon dikkate alınır." }
      ]},
      { id: "kullanim", title: "Kullanım Alanları ve Ankrajdan Farkı", blocks: [
        { type: "paragraph", content: "Zemin çivisi; ankrajlı sistemlere göre daha küçük ekipmanla, daha hızlı ve ekonomik uygulanır. Buna karşılık deformasyon kontrolü ankrajlı perde kadar sıkı değildir; komşu yapıya çok duyarlı derin kazılarda ankrajlı sistemler öne çıkar." },
        { type: "list", title: "Tercih edildiği durumlar", items: ["Şev ve yarma stabilizasyonu", "Orta derinlikte kazı iksası", "Karayolu ve altyapı yarmaları", "Mevcut istinat yapılarının güçlendirilmesi"] }
      ]}
    ],
    faq: [
      { question: "Zemin çivisi ile ankraj arasındaki fark nedir?", answer: "Ankraj öngermeli (aktif) çalışır ve yükü kontrollü biçimde zemine aktarır; zemin çivisi pasif elemandır, zemin deforme oldukça yük alır. Çivi daha ekonomiktir, ankraj deformasyon kontrolünde daha güçlüdür." },
      { question: "Zemin çivisi hangi zeminlerde uygulanır?", answer: "Kademeli kazıda kısa süre kendini tutabilen kohezyonlu veya hafif çimentolu zeminlerde etkilidir. Gevşek kum ve yüksek yeraltı suyu koşullarında özel önlem gerekir." },
      { question: "Zemin çivisi kalıcı olabilir mi?", answer: "Evet. Korozyon koruması ve uygun kaplama detayıyla kalıcı sistem olarak tasarlanabilir; geçici kazı iksası olarak da yaygın kullanılır." },
      { question: "Püskürtme beton zorunlu mu?", answer: "Yüzey kaplaması sistemin parçasıdır; çivilerle birlikte çalışan hasır donatılı püskürtme beton, yüzey stabilitesini ve yük dağılımını sağlar." }
    ],
    relatedSlugs: ["ankraj-nedir", "kazi-destek-sistemleri-nedir", "puskurtme-beton-nedir"],
    keywords: ["zemin çivisi nedir", "soil nailing", "zemin çivili iksa", "şev stabilizasyonu", "zemin çivisi uygulaması"],
    published: true
  },
  {
    slug: "puskurtme-beton-nedir",
    title: "Püskürtme Beton (Shotcrete) Nedir? Uygulama ve Kullanım Alanları",
    seoTitle: "Püskürtme Beton (Shotcrete) Nedir? Uygulaması | YER6",
    description: "Püskürtme beton (shotcrete); basınçlı hava ile yüzeye püskürtülerek yerleştirilen betondur. İksa yüzey kaplaması, şev koruma ve tünel kaplamalarında kullanılır.",
    excerpt: "Püskürtme beton; basınçlı hava yardımıyla yüzeye yüksek hızla püskürtülerek sıkışan ve kalıp gerektirmeyen bir beton uygulama tekniğidir. Zemin çivili iksa yüzeyleri, şev koruma ve tünel kaplamalarının standart çözümüdür.",
    category: "Ankraj & İksa",
    readingTime: "6 dk",
    publishedAt: "2026-07-13",
    updatedAt: "2026-07-13",
    heroLabel: "Püskürtme Beton",
    introduction: "Püskürtme beton, kalıp kurulamayan eğimli ve düzensiz yüzeylerde hızlı ve güvenilir beton kaplama sağlar. Bu yazıda kuru ve yaş karışım sistemlerini, kullanım alanlarını ve kalite kontrol yaklaşımını açıklıyoruz.",
    sections: [
      { id: "tanim", title: "Püskürtme Beton Nedir? Kuru ve Yaş Sistem", blocks: [
        { type: "paragraph", content: "Püskürtme beton; beton karışımının hortum ve nozul üzerinden basınçlı havayla yüzeye püskürtülmesi ve çarpma enerjisiyle sıkışarak yerleşmesidir. Kalıp gerektirmediği için eğimli kazı yüzeylerinde ve tünellerde hızlı uygulanır." },
        { type: "list", title: "İki temel sistem", items: ["Kuru karışım: su nozulda eklenir; küçük hacimli ve kesintili işlerde esnektir", "Yaş karışım: hazır beton pompalanır, nozulda hızlandırıcı katılır; yüksek kapasite ve homojen kalite sağlar"] },
        { type: "note", title: "Hızlandırıcı katkı", content: "Priz hızlandırıcı katkılar, püskürtülen betonun yüzeyde tutunmasını ve erken dayanım kazanmasını sağlar; dozaj hedef dayanımı etkileyeceği için kontrollü kullanılmalıdır." }
      ]},
      { id: "kullanim", title: "Kullanım Alanları ve Kalite Kontrol", blocks: [
        { type: "list", title: "Başlıca kullanım alanları", items: ["Zemin çivili iksa sistemlerinde yüzey kaplaması", "Şev ve yarma yüzeylerinin korunması", "Tünel ve galeri kaplamaları", "Mevcut yapı ve istinat duvarı güçlendirme (hasır veya lif donatılı)"] },
        { type: "paragraph", content: "Kalite kontrolde; panel numuneleri ve karotlarla basınç dayanımı doğrulanır, kaplama kalınlığı ölçülür ve yüzey hazırlığı (gevşek malzemenin temizlenmesi, drenaj) denetlenir. Donatı olarak çelik hasır veya çelik/sentetik lif kullanılabilir." }
      ]}
    ],
    faq: [
      { question: "Kuru ve yaş karışım arasındaki fark nedir?", answer: "Kuru sistemde su nozulda eklenir ve küçük işlerde esneklik sağlar; yaş sistemde hazır beton pompalanır, kapasite ve kalite homojenliği daha yüksektir." },
      { question: "Püskürtme beton dayanımı nasıl kontrol edilir?", answer: "Uygulama sırasında alınan panel numuneleri ve sertleşmiş kaplamadan alınan karotlarla basınç dayanımı test edilir; kalınlık kontrolü de yapılır." },
      { question: "Hasır yerine lif kullanılabilir mi?", answer: "Evet. Çelik veya sentetik lifler, uygun tasarımla hasır donatının yerini alabilir ve uygulamayı hızlandırır; seçim proje gereksinimine bağlıdır." }
    ],
    relatedSlugs: ["zemin-civisi-nedir", "kazi-destek-sistemleri-nedir", "ankraj-nedir"],
    keywords: ["püskürtme beton nedir", "shotcrete", "püskürtme beton uygulaması", "iksa yüzey kaplaması", "yaş karışım püskürtme beton"],
    published: true
  },
  {
    slug: "kazik-yukleme-testleri",
    title: "Kazık Yükleme Testleri: Statik, Dinamik ve Bütünlük (PIT)",
    seoTitle: "Kazık Yükleme Testleri: Statik, Dinamik, PIT | YER6",
    description: "Kazık yükleme testleri; statik ve dinamik yüklemeyle taşıma kapasitesini, PIT bütünlük testiyle kazık sürekliliğini doğrular. Test türleri, planlama ve değerlendirme.",
    excerpt: "Kazıklı temellerde kalite; statik ve dinamik yükleme testleriyle taşıma kapasitesinin, PIT bütünlük testiyle kazık sürekliliğinin bağımsız biçimde doğrulanmasına dayanır.",
    category: "Kalite Kontrol",
    readingTime: "7 dk",
    publishedAt: "2026-07-13",
    updatedAt: "2026-07-13",
    heroLabel: "Kazık Testleri",
    introduction: "Fore kazık ve mini kazık uygulamalarında tasarım varsayımlarının sahada karşılandığı ancak testlerle kanıtlanır. Bu yazıda kazık yükleme ve bütünlük testlerinin türlerini, ne zaman yapıldığını ve sonuçların nasıl değerlendirildiğini açıklıyoruz.",
    sections: [
      { id: "turler", title: "Test Türleri", blocks: [
        { type: "paragraph", content: "Kazık testleri iki temel soruyu yanıtlar: kazık hedeflenen yükü taşıyor mu (yükleme testleri) ve kazık gövdesi sürekli ve kusursuz mu (bütünlük testleri)." },
        { type: "list", title: "Yaygın kullanılan testler", items: ["Statik yükleme testi: reaksiyon sistemi ve hidrolik krikolarla kademeli yükleme; en güvenilir kapasite doğrulamasıdır", "Dinamik yükleme testi (PDA): darbe ile hızlı ve ekonomik kapasite tahmini; statik testle korele edilmesi önerilir", "Düşük gerilmeli bütünlük testi (PIT): kazık boyu, süreklilik ve olası kusurların hızlı taraması", "Sonik log (CSL): büyük çaplı kazıklarda gövde betonunun kesit bütünlüğünün borular arası ölçümü"] }
      ]},
      { id: "planlama", title: "Test Planlaması ve Değerlendirme", blocks: [
        { type: "paragraph", content: "Test adedi ve türü proje şartnamesiyle belirlenir. Deneme (ön üretim) kazıkları tasarım parametrelerini doğrulamak için göçme mertebesine kadar yüklenebilir; kabul testleri ise üretim kazıklarında servis yükünün belirli katına kadar yapılır. PIT taraması genellikle çok daha geniş bir kazık grubuna uygulanır." },
        { type: "note", title: "Zamanlama", content: "Yükleme ve bütünlük testleri, kazık betonu yeterli dayanıma ulaştıktan sonra yapılmalıdır. Test programı iş programına baştan işlenmeli, sonuçlar teslim dosyasında raporlanmalıdır." }
      ]}
    ],
    faq: [
      { question: "Statik test mi dinamik test mi?", answer: "Statik test en güvenilir sonucu verir ancak süre ve maliyeti yüksektir; dinamik test hızlı ve ekonomiktir. Yaygın yaklaşım, az sayıda statik testle dinamik testleri korele etmektir." },
      { question: "PIT testi neyi gösterir?", answer: "PIT; kazık boyunu, gövde sürekliliğini ve daralma/süreksizlik gibi olası kusurları düşük maliyetle tarar. Kapasite ölçmez; kapasite için yükleme testi gerekir." },
      { question: "Kaç kazıkta test yapılmalı?", answer: "Adet, proje şartnamesi ve risk düzeyine göre belirlenir. Tipik uygulamada seçili kazıklarda yükleme testi, geniş bir grupta PIT taraması yapılır." },
      { question: "Test ne zaman yapılır?", answer: "Kazık betonu hedef dayanıma ulaştıktan sonra; deneme kazıkları üretim öncesinde, kabul testleri üretim sürecinde planlanır." }
    ],
    relatedSlugs: ["fore-kazik-nedir", "fore-kazik-maliyeti", "saha-denetimi-numune-testleri"],
    keywords: ["kazık yükleme testi", "statik yükleme testi", "dinamik kazık testi", "PIT bütünlük testi", "kazık testleri"],
    published: true
  },
  {
    slug: "zemin-enjeksiyonu-nedir",
    title: "Zemin Enjeksiyonu Nedir? Türleri ve Kullanım Alanları",
    seoTitle: "Zemin Enjeksiyonu Nedir? Türleri ve Uygulama | YER6",
    description: "Zemin enjeksiyonu; çimento esaslı veya kimyasal karışımların zemine kontrollü basınçla verilmesiyle dayanım, sıkılık ve geçirimsizlik sağlayan yöntemlerin genel adıdır.",
    excerpt: "Zemin enjeksiyonu; permeasyon, kompaksiyon, çatlatma ve jet enjeksiyonu gibi tekniklerle zemine bağlayıcı vererek dayanım artışı, boşluk doldurma ve su kesme sağlayan yöntemler ailesidir.",
    category: "Zemin İyileştirme",
    readingTime: "7 dk",
    publishedAt: "2026-07-13",
    updatedAt: "2026-07-13",
    heroLabel: "Zemin Enjeksiyonu",
    introduction: "Enjeksiyon, zemin iyileştirmenin en esnek araçlarından biridir: aynı temel prensip; boşluk doldurmadan su kesmeye, oturma telafisinden temel altı güçlendirmeye kadar farklı problemlere uyarlanabilir. Bu yazıda enjeksiyon türlerini ve kullanım alanlarını açıklıyoruz.",
    sections: [
      { id: "turler", title: "Enjeksiyon Türleri", blocks: [
        { type: "paragraph", content: "Enjeksiyon türleri, karışımın zemine hangi mekanizmayla yerleştiğine göre ayrılır. Zemin türü, hedef performans ve mevcut yapı koşulları hangi tekniğin uygun olduğunu belirler." },
        { type: "list", title: "Başlıca teknikler", items: ["Permeasyon enjeksiyonu: karışımın zemin boşluklarına düşük basınçla sızdırılması; geçirimli kum ve çakılda dayanım ve geçirimsizlik", "Kompaksiyon enjeksiyonu: yoğun harcın zemini sıkıştırarak yer değiştirmesi; gevşek zemin sıkılaştırma ve oturma telafisi", "Çatlatma (fracture) enjeksiyonu: kontrollü çatlaklarla zemin kütlesinin güçlendirilmesi ve kompansasyon uygulamaları", "Jet enjeksiyonu (jet grout): yüksek basınçlı jetle zemin-çimento kolonları oluşturulması"] }
      ]},
      { id: "kullanim", title: "Kullanım Alanları ve Kalite Kontrol", blocks: [
        { type: "list", title: "Tipik kullanım alanları", items: ["Temel altı boşlukların ve karstik boşlukların doldurulması", "Mevcut yapı altında güçlendirme ve oturma telafisi", "Kazı ve baraj uygulamalarında su kesme perdesi", "Tünel ve altyapı çevresinde zemin iyileştirme"] },
        { type: "note", title: "Kayıt ve doğrulama", content: "Enjeksiyonda basınç, debi ve sarf kayıtları imalatın kanıtıdır; gerektiğinde sondaj, numune ve geçirimlilik testleriyle hedefe ulaşıldığı doğrulanır." }
      ]}
    ],
    faq: [
      { question: "Jet grout bir enjeksiyon yöntemi midir?", answer: "Evet. Jet grout, yüksek basınçlı jetle zemini parçalayıp çimento ile karıştıran özel bir enjeksiyon tekniğidir; klasik permeasyon enjeksiyonundan çalışma prensibiyle ayrılır." },
      { question: "Enjeksiyonda hangi malzemeler kullanılır?", answer: "Çoğunlukla çimento esaslı karışımlar kullanılır; ince boşluklu zeminlerde mikro çimento veya projeye uygun kimyasal karışımlar değerlendirilebilir. Seçim zemin ve hedefe bağlıdır." },
      { question: "Su sızıntısı enjeksiyonla çözülür mü?", answer: "Uygun teknik ve karışımla zemin kaynaklı su geçişi önemli ölçüde azaltılabilir; kaynak teşhisi ve doğru enjeksiyon planı belirleyicidir." },
      { question: "Mevcut yapı altında enjeksiyon yapılabilir mi?", answer: "Evet. Kompakt ekipmanla, düşük basınç ve kontrollü etaplarla mevcut yapı altında güçlendirme ve oturma telafisi uygulanabilir; yapı hareketi izlenmelidir." }
    ],
    relatedSlugs: ["jet-grout-nedir", "zemin-iyilestirme-yontemleri", "temel-alti-zemin-guclendirme"],
    keywords: ["zemin enjeksiyonu", "enjeksiyon nedir", "çimento enjeksiyonu", "kompaksiyon enjeksiyonu", "geçirimsizlik enjeksiyonu"],
    published: true
  },
  {
    slug: "jet-grout-firmasi-istanbul",
    title: "Jet Grout Firması İstanbul: Seçim Kriterleri ve YER6",
    seoTitle: "Jet Grout Firması İstanbul | İstanbul Jet Grout Uygulaması | YER6",
    description: "İstanbul'da jet grout firması seçerken makine parkı, alüvyon ve sıvılaşma tecrübesi, kalite kontrol ve referanslar önemlidir. Türkiye geneli hizmet veren YER6 yaklaşımı.",
    excerpt: "İstanbul'un alüvyon zeminleri, sıvılaşma riski ve dar kentsel parselleri jet grout uygulamasını sık gündeme getirir. Firma seçiminde makine parkı, saha tecrübesi ve kalite kontrol süreci belirleyicidir.",
    category: "Jet Grout",
    readingTime: "7 dk",
    publishedAt: "2026-07-13",
    updatedAt: "2026-07-13",
    heroLabel: "İstanbul Jet Grout",
    introduction: "İstanbul'da jet grout ihtiyacı; alüvyon zeminler, yüksek yeraltı suyu, sıvılaşma riski ve komşu yapıya sıfır dar parsellerle doğrudan ilişkilidir. Bu yazıda İstanbul'da jet grout firması seçerken dikkat edilmesi gerekenleri ve YER6'nın yaklaşımını açıklıyoruz.",
    sections: [
      { id: "secim", title: "İstanbul'da Jet Grout Firması Seçerken Nelere Dikkat Edilmeli?", blocks: [
        { type: "list", title: "Değerlendirme kriterleri", items: ["Kendi makine parkı ve ekipman kapasitesi (delgi, pompa, santral)", "Alüvyon, dolgu ve sıvılaşmaya yatkın zeminlerde saha tecrübesi", "Deneme kolonu ve kalite kontrol (karot, basınç testi) süreci", "Şeffaf metraj ve gerçekçi maliyet öngörüsü", "Referans projeler ve teknik dokümantasyon"] },
        { type: "paragraph", content: "Jet grout kalitesi, tasarım kadar sahadaki ekipman ve uygulama disiplinine bağlıdır. Dar parsellerde ve mevcut yapı yakınında çalışabilen ekipman ile üretim verilerinin (basınç, debi, derinlik) kayıt altına alınması, İstanbul projelerinde ayırt edici kriterlerdir." }
      ]},
      { id: "istanbul-zemin", title: "İstanbul Zemininde Jet Grout", blocks: [
        { type: "paragraph", content: "İstanbul'da özellikle sahil kesimlerinde ve dere yataklarında gevşek alüvyon tabakalar bulunur; bu zeminlerde taşıma gücü artırımı ve sıvılaşma riskinin azaltılması için jet grout kolonları yaygın biçimde uygulanır. Dar kentsel parsellerde düşük titreşimle çalışabilmesi yöntemin önemli avantajıdır." },
        { type: "note", title: "Bölgesel değişkenlik", content: "Zemin koşulları ilçeden ilçeye önemli ölçüde değişir. Doğru parametreler, sondaj verisiyle kurulan zemin modeline ve TBDY 2018 kapsamındaki sıvılaşma değerlendirmesine göre belirlenmelidir." }
      ]}
    ],
    faq: [
      { question: "İstanbul'da jet grout firması nasıl seçilir?", answer: "Makine parkı, alüvyon ve sıvılaşmaya yatkın zeminlerde saha tecrübesi, deneme kolonu ve kalite kontrol süreci, şeffaf metraj ve referanslar en önemli kriterlerdir." },
      { question: "YER6 İstanbul'da jet grout uyguluyor mu?", answer: "Evet. Ankara merkezli ekibimizle Türkiye genelinde ve yurt dışında hizmet veriyoruz; İstanbul ve çevresindeki projeler için mobilizasyon ve saha planlaması yapıyoruz." },
      { question: "İstanbul jet grout maliyeti neye bağlı?", answer: "Kolon çapı ve derinliği, zemin türü, metraj ve saha koşullarına bağlıdır. Gerçekçi rakam zemin verisi ve projeye özel metrajla verilir." }
    ],
    relatedSlugs: ["jet-grout-firmasi-ankara", "jet-grout-maliyeti", "sivilasma-riskine-karsi-zemin-guclendirme"],
    keywords: ["jet grout firması istanbul", "istanbul jet grout", "jet grout istanbul", "jet grout firmaları istanbul", "istanbul zemin güçlendirme"],
    published: true
  },
  {
    slug: "yer-alti-zemin-iyilestirme",
    title: "Yer Altı Zemin İyileştirme Rehberi: Yöntemler, Tasarım ve Uygulama",
    seoTitle: "Yer Altı Zemin İyileştirme: 2026 Kapsamlı Rehber | YER6",
    description: "Yer altı zemin iyileştirme rehberi: jet grout, DSM, taş kolon, enjeksiyon ve 15+ yöntem; seçim matrisi, TBDY 2018, maliyet faktörleri. Uzmanından okuyun.",
    excerpt: "Yer altı zemin iyileştirme yöntemlerinin tamamını — jet grout'tan taş kolona, DSM'den derin kompaksiyona — seçim kriterleri, tasarım parametreleri ve kalite kontrol testleriyle birlikte anlatan Türkiye'nin en kapsamlı rehberi.",
    category: "Zemin İyileştirme",
    readingTime: "25 dk",
    publishedAt: "2026-07-14",
    updatedAt: "2026-07-14",
    heroLabel: "Mega Rehber",
    introduction: "Yer altı zemin iyileştirme, yapı yükünü güvenle taşıyamayan zeminlerin jet grout, derin karıştırma (DSM), taş kolon, derin kompaksiyon ve enjeksiyon gibi tekniklerle metrelerce derinlikte yerinde güçlendirilmesidir. Bu rehberde 15'ten fazla yöntemi; zemin türüne göre seçim matrisi, TBDY 2018 zemin sınıfları, tasarım parametreleri, kalite kontrol testleri ve maliyet-süre faktörleriyle birlikte tek sayfada topladık. Ankara merkezli YER6 Zemin Güçlendirme Geoteknik Mühendislik'in saha tecrübesiyle hazırlanan bu kılavuz, arsa sahibinden geoteknik mühendisine kadar herkesin \"hangi zemine hangi yöntem?\" sorusuna net cevap bulması için tasarlandı.",
    sections: [
      {
        id: "yer-alti-zemin-iyilestirme-nedir",
        title: "Yer Altı Zemin İyileştirme Nedir? Tanım, Kapsam ve Terminoloji",
        blocks: [
          {
            type: "note",
            title: "Kısa cevap",
            content: "Yer altı zemin iyileştirme; yapı yükünü güvenle taşıyamayan zeminin taşıma gücü, oturma davranışı, geçirimlilik ve sıvılaşma direnci gibi mühendislik özelliklerinin, zemin yerinde bırakılarak derinlemesine ve kalıcı biçimde değiştirilmesidir."
          },
          {
            type: "paragraph",
            content: "Türkçe teknik literatürde birbirinin yerine kullanılan terimler arasında nüans farkları vardır. \"Zemin ıslahı\" en genel şemsiye terimdir ve her tür müdahaleyi kapsar. \"Zemin stabilizasyonu\" ağırlıklı olarak çimento veya kireç gibi katkılarla kimyasal bağlanma yoluyla kalıcı dayanım kazandırmayı; \"zemin modifikasyonu\" kıvam ve işlenebilirlik gibi özelliklerin sınırlı ölçüde değiştirilmesini; \"zemin güçlendirme\" ise zemine taş kolon veya ankraj gibi taşıyıcı elemanlar eklenmesini ifade eder. Üç temel kavramın ayrımı da önemlidir: kompaksiyon, zemin boşluklarındaki havanın mekanik enerjiyle kısa sürede atılmasıdır; konsolidasyon, boşluk suyunun zamana bağlı olarak dışarı atılmasıyla gelişen hacim azalmasıdır; stabilizasyon ise kimyasal bağlanmayla kazanılan kalıcı dayanımı anlatır."
          },
          {
            type: "paragraph",
            content: "Uygulama derinliği temel ayrım eksenidir. Yüzeysel iyileştirme (yaklaşık 0-3 m) silindirle kompaksiyon ve kireç-çimento serimi gibi işlemleri kapsar; yer altı (derin) iyileştirme ise projeye ve yönteme bağlı olarak tipik biçimde 3-50 m derinlik aralığında jet grout, derin karıştırma (DSM), taş kolon, derin kompaksiyon ve derin enjeksiyon gibi tekniklerle yürütülür. Bu rehberin odağı derin uygulamalardır. Yaklaşım felsefesi bakımından yer altı zemin iyileştirme, kazıklı temelden ayrılır: iyileştirme zeminin kendisini düzelterek yüzeysel veya radye temel kullanımına imkân verir; kazık ise zemini değiştirmeden yapı yükünü derindeki sağlam tabakaya aktarır. İki yaklaşım arasındaki seçim yapı yüküne, zemin profiline ve toplam maliyet analizine göre yapılır."
          },
          {
            type: "paragraph",
            content: "Uluslararası literatürde yöntemler, Türkçe kaynaklarda az işlenen bir üçlemeyle sınıflandırılır. Ground Reinforcement (donatılandırma), zemine taşıyıcı eleman eklenerek güçlendirmedir: taş kolon, ankraj, zemin çivisi bu gruptadır. Ground Improvement (iyileştirme), zeminin kendi yapısının düzeltilmesidir: yüzeysel ve derin kompaksiyon, ön yükleme ve düşey drenler bu kapsamda değerlendirilir. Ground Treatment (tedavi) ise katkı veya enjeksiyonla müdahaleyi anlatır: çimento ve kireç enjeksiyonu, bitüm ve uçucu kül stabilizasyonu ile zemin dondurma gibi teknikler bu gruba girer."
          },
          {
            type: "note",
            title: "Kısa tarihçe",
            content: "Vibroflotasyon (vibro kompaksiyon) 1930'larda Avrupa'da geliştirildi; jet grout 1970'lerde Japonya'da uygulanmaya başlandı; rijit inklüzyon (kontrollü modüllü kolon, CMC) tekniği ise 1990'larda geliştirilerek yaygınlaştı. Bu yöntemler on yıllar boyunca sahada denenmiş, performansı ölçüm ve gözlemlerle doğrulanmış mühendislik çözümleridir."
          },
          {
            type: "list",
            title: "İyileştirmeyle değişen başlıca zemin parametreleri",
            items: ["Kayma mukavemeti parametreleri: kohezyon (c) ve içsel sürtünme açısı (φ)", "Relatif sıkılık (Dr): granüler zeminlerde sıkılığın ölçüsü", "Konsolidasyon katsayısı (cv) ve sıkışabilirlik: oturmanın hızı ve büyüklüğü", "Permeabilite (k): geçirimliliğin azaltılması veya drenaj kapasitesinin artırılması", "Atterberg kıvam limitleri: plastisitenin düşürülmesi ve işlenebilirliğin iyileştirilmesi", "Deformasyon (rijitlik) modülü: yük altında şekil değiştirme davranışı", "Kayma dalgası hızı (Vs): dinamik davranışın ve yerel zemin sınıfının göstergesi"]
          }
        ]
      },
      {
        id: "neden-ve-ne-zaman-gerekir",
        title: "Yer Altı Zemin İyileştirme Neden ve Ne Zaman Gerekir?",
        blocks: [
          {
            type: "paragraph",
            content: "Elverişsiz zeminle karşılaşıldığında mühendisin önünde dört seçenek vardır: yapının yerini değiştirmek, zayıf zemini kazıp uygun malzemeyle değiştirmek, derin temelle sağlam tabakaya inmek veya zemini yerinde iyileştirmek. Yer değiştirme, imar ve arsa kısıtları nedeniyle çoğu projede uygulanabilir değildir. Kaz-değiştir yaklaşımı yalnızca zayıf tabakanın sığ (birkaç metre) ve hacmin küçük olduğu durumlarda ekonomiktir. Derin temel, ağır ve noktasal yüklü yapılarda güvenilir ancak genellikle maliyetli bir çözümdür. Yerinde iyileştirme ise özellikle geniş oturma alanlı, orta düzeyde yüklü yapılarda çoğu zaman dengeli bir seçenektir; hangi yolun izleneceği zemin etüdü sonuçlarına, yapı özelliklerine ve proje ekonomisine göre belirlenir."
          },
          {
            type: "paragraph",
            content: "İyileştirme ihtiyacına işaret eden yaygın göstergeler şunlardır: gevşek kumlarda SPT N30 değerinin 10'un altında kalması, hesaplanan oturmanın tekil temellerde yaklaşık 25 mm'yi, radye temellerde yaklaşık 50 mm'yi aşması, taşıma gücü güvenlik katsayısının sağlanamaması ve sıvılaşma analizinde güvenlik katsayısının 1,1'in altına düşmesi. Bu değerler yaygın kabul gören sınırlar olup proje özelinde farklılaşabilir. TBDY 2018'e göre ZF sınıfı zeminler sahaya özel araştırma ve değerlendirme gerektirir; ZE gibi zayıf zemin profillerinde de ayrıntılı geoteknik değerlendirme fiilen kaçınılmazdır. Geoteknik raporda yetersiz taşıma gücü, aşırı oturma veya sıvılaşma riski tespit edildiğinde ve ruhsat aşamasında idare iyileştirme projesi talep ettiğinde, yer altı zemin iyileştirme bir tercih olmaktan çıkıp zorunluluğa dönüşür."
          },
          {
            type: "list",
            title: "İyileştirmenin sekiz temel amacı",
            items: ["Taşıma kapasitesini artırmak", "Toplam ve farklı oturmaları azaltmak", "Konsolidasyon sürecini hızlandırmak", "Deprem yükleri altında sıvılaşma direncini yükseltmek", "Şev ve derin kazı stabilitesini sağlamak", "Geçirimliliği azaltmak (baraj gövdeleri, derin kazı çevreleri)", "Makine ve trafik kaynaklı titreşimleri sönümlemek", "Kıyı ve şev bölgelerinde yanal yayılmayı önlemek"]
          },
          {
            type: "warning",
            title: "Deprem gerçeği",
            content: "Türkiye topraklarının büyük bölümü aktif deprem kuşağındadır. 1999 Kocaeli ve 2023 Kahramanmaraş depremlerinde görülen sıvılaşma, aşırı oturma ve devrilme gibi zemin kaynaklı hasarlar; üst yapı ne kadar güçlü tasarlanırsa tasarlansın, zemini ihmal eden yaklaşımın güvenli olmadığını açıkça göstermiştir."
          },
          {
            type: "paragraph",
            content: "Orta ve yüksek katlı binalar, sanayi tesisleri ve depolama tankları, yol ve demiryolu dolguları, köprü yaklaşım dolguları, rüzgâr türbinleri ile liman ve kıyı dolgu sahaları iyileştirmenin en sık gerektiği yapı tipleridir. Ekonomik açıdan bakıldığında, geniş oturma alanlı ve orta yüklü yapılarda yer altı zemin iyileştirme, kazıklı temele kıyasla çoğu durumda daha uygun maliyetli olabilmektedir; ancak bu karşılaştırma her projede temel sistemi, kazı, iyileştirme imalatı ve süre kalemlerini birlikte içeren toplam maliyet üzerinden yapılmalı, nihai karar geoteknik değerlendirme ve temel mühendisliği hesaplarıyla birlikte verilmelidir."
          }
        ]
      },
      {
        id: "sorunlu-zeminler",
        title: "Sorunlu Zeminler: Hangi Zeminler Yer Altında İyileştirme Gerektirir?",
        blocks: [
          {
            type: "paragraph",
            content: "Zemin davranışını en temelde dane çapı belirler. Kil daneleri 0,002 mm'den küçüktür; silt 0,002-0,075 mm, kum 0,075-4,75 mm aralığındadır; çakıl ise 4,75 mm'den iridir. İnce daneli (kohezyonlu) zeminler suyu çok yavaş bırakır, zamana bağlı oturur ve plastisite gösterir; iri daneli (granüler) zeminler ise sıkılık derecelerine göre ya yükü güvenle taşır ya da ani oturma ve sıvılaşma riski üretir. Yer altında iyileştirme gerektiren sorunlu zeminler, bu iki davranış ailesinin zayıf üyeleri ile insan eliyle oluşturulmuş kontrolsüz dolgulardır."
          },
          {
            type: "list",
            title: "Yedi problemli zemin tipi",
            items: ["Normal konsolide / yumuşak killer: yüksek sıkışabilirlik, yıllara yayılan konsolidasyon oturması", "Gevşek kum ve siltler: statik yükte ani oturma, deprem yükünde sıvılaşma potansiyeli", "Kontrolsüz (mühendislik dışı) dolgular: değişken sıkılık, moloz ve boşluk içeriği, öngörülemeyen farklı oturmalar", "Organik zeminler ve turba: yüksek su muhtevası, uzun süreli sekonder (krip) oturma", "Şişen (ekspansif) killer: su alıp verdikçe hacim değiştirerek özellikle hafif yapıları çatlatma eğilimi", "Çökebilen (kollapsibl) zeminler: kuru halde ayakta durup suyla temasta ani hacim kaybı", "Karstik boşluklu zeminler: erime boşlukları nedeniyle ani tasman (çökme) riski"]
          },
          {
            type: "paragraph",
            content: "Yumuşak killerde drenajsız kayma mukavemetinin yaklaşık 25 kPa'ın altında kalması tipik bir zayıflık göstergesidir; çok düşük permeabilite nedeniyle konsolidasyon oturması yıllara yayılabilir ve yapı ömrü boyunca sürebilir. Gevşek kumlarda ise relatif sıkılığın yaklaşık %35-40'ın altında olması gevşekliğin göstergesi kabul edilir: bu zeminler statik yük altında ani oturma yapabilir, suya doygun haldeyken deprem sarsıntısında sıvılaşabilir. Her iki durumda da müdahalenin türü, kapsamı ve derinliği zemin etüdü sonuçlarına göre belirlenir."
          },
          {
            type: "warning",
            title: "En riskli kategori: kontrolsüz dolgu",
            content: "Türkiye şehirlerindeki eski vadi tabanları ve kıyı dolguları başta olmak üzere, mühendislik kontrolü olmadan oluşturulmuş dolgular; moloz içeriği, değişken sıkılık ve boşluklar nedeniyle en öngörülemez zemin grubudur ve en sık yer altı zemin iyileştirme gerektiren kategoridir. Dolgu kalınlığı ve içeriği sondajlarla belirlenmeden bu zeminler üzerine temel oturtulmamalıdır."
          },
          {
            type: "paragraph",
            content: "Organik zeminler ve turbada, yüksek su muhtevasına ek olarak birincil konsolidasyon tamamlandıktan sonra da süren sekonder (krip) oturma belirleyicidir; bu zeminlerde klasik kompaksiyon genellikle sonuç vermez, kolon tipi çözümler veya hafif dolgu malzemeleri değerlendirilir. Yüksek yer altı su seviyesi ise tabloyu ağırlaştırır: efektif gerilmeyi düşürerek taşıma gücünü azaltır, kazı stabilitesi sorunları doğurur ve imalat tekniğinin ıslak ya da kuru yöntem olarak seçimini doğrudan etkiler. Yer altı suyu kontrolü ve susuzlaştırma konusu ilgili bölümde ayrıca ele alınmıştır."
          }
        ]
      },
      {
        id: "zemin-etudu-ve-saha-deneyleri",
        title: "Zemin Etüdü ve Saha Deneyleri: SPT, CPT, Presiyometre, Jeofizik",
        blocks: [
          {
            type: "note",
            title: "Kısa cevap",
            content: "Zemin etüdü, yer altı zemin iyileştirme tasarımının tüm girdilerini üreten zorunlu ilk adımdır. Sondajlar, arazi deneyleri ve laboratuvar sonuçları birlikte değerlendirilmeden hiçbir iyileştirme yöntemi güvenle seçilemez; yöntem seçimi kadar iyileştirme derinliği ve hedef parametreler de bu verilere dayanır."
          },
          {
            type: "paragraph",
            content: "Etüt planlaması yapıya göre şekillenir: sondaj sayısı ve derinliği; yapının oturma alanına, yüksekliğine ve temel yüklerinin zeminde oluşturduğu gerilmelerin etkili olduğu derinliğe göre belirlenir. Amaç, iyileştirmenin hedefleyeceği zayıf tabakaların kalınlığını, derinliğini ve yeraltı suyu koşullarını eksiksiz ortaya koymaktır. Bu nedenle sondajların, gerilme etki derinliğinin altındaki sağlam taşıyıcı tabakaya ulaşacak şekilde planlanması beklenir; zayıf tabaka içinde sonlandırılan bir sondaj, hem etüdü hem de ona dayanan iyileştirme tasarımını eksik bırakır."
          },
          {
            type: "paragraph",
            content: "Arazi deneylerinin ilk sırasında SPT (Standart Penetrasyon Deneyi) gelir: 63,5 kg'lık şahmerdanın 76 cm'den serbest düşürülmesiyle numune alıcının son 30 cm penetrasyonu için gereken darbe sayısı N olarak kaydedilir; enerji ve örtü yükü düzeltmeleriyle N60 ve N1,60 değerleri elde edilir. Yaygın bir yorumla kumlarda N < 10 gevşek, 10-30 orta sıkı, 30 üzeri sıkı kabul edilir ve N < 10 mertebesindeki değerler iyileştirme ihtiyacının tipik göstergelerindendir; ancak nihai değerlendirme her zaman zemin profili bütününde yapılır. CPT/CPTu (koni penetrasyon deneyi) koni uç direnci qc, sürtünme oranı ve boşluk suyu basıncını ölçerek kesintisiz bir zemin profili verir; bu süreklilik onu ince tabakaların yakalanmasında ve sıvılaşma analizinde önemli bir girdi yapar. Presiyometre (PMT) ise kuyu içinde limit basınç ve Menard deformasyon modülünü ölçerek taşıma gücü ve oturma hesabına doğrudan parametre sağlayan başlıca arazi deneylerindendir."
          },
          {
            type: "paragraph",
            content: "Jeofizik yöntemler etüdün üçüncü ayağıdır. MASW ve sismik kırılma ölçümleriyle kayma dalgası hızı (Vs) profili çıkarılır; üst 30 metrenin ortalaması olan Vs30, TBDY 2018'deki yerel zemin sınıfını belirleyen ana parametredir. Elektrik rezistivite ölçümleri yeraltı su seviyesinin, boşlukların ve kontrolsüz dolgu sınırlarının tespitinde destekleyici veri sağlar. Jeofizik ölçümler tek başına tasarım parametresi üretmez; sondaj ve arazi deneyi sonuçlarıyla birlikte, birbirini doğrulayacak şekilde yorumlanmalıdır."
          },
          {
            type: "list",
            title: "Laboratuvar deneyleri ve tasarıma verdiği parametreler",
            items: ["Atterberg limitleri: plastisite ve kıvam; killerde stabilizasyon katkısı seçimini yönlendirir", "Elek analizi + hidrometre: dane dağılımı; yöntem ön elemesinin (granüler/kohezyonlu ayrımı) temeli", "Odometre (konsolidasyon) deneyi: sıkışabilirlik ve oturma süresi; ön yükleme ve düşey dren tasarımının girdisi", "Üç eksenli ve kesme kutusu deneyleri: kayma dayanımı parametreleri (c, φ); taşıma gücü ve stabilite hesapları", "Proktor deneyi: optimum su muhtevası ve maksimum kuru birim hacim ağırlık; kompaksiyon kontrol kriteri", "Doğal su muhtevası ve birim hacim ağırlık: konsolidasyon ve oturma hesaplarının temel girdileri"]
          },
          {
            type: "paragraph",
            content: "Etüdün asıl değeri, çıktıların tasarıma dönüşmesindedir: mevcut N, qc ve Vs profili üzerinden hedef iyileştirilmiş değerler tanımlanır; bu hedefler iyileştirme derinliğini, kolon yerleşimini ve yöntem ön seçimini belirler. Yer altı zemin iyileştirme uygulaması tamamlandıktan sonra aynı deneylerin tekrarlanması, başarının kanıtlanmasının temelidir; bu doğrulama süreci kalite kontrol bölümünde ayrıntılı olarak ele alınmıştır. Etüt sürecinin adımları için sitedeki \"zemin etüdü nasıl yapılır\" rehberine de bakılabilir."
          }
        ]
      },
      {
        id: "tbdy-2018-zemin-siniflari",
        title: "TBDY 2018 Zemin Sınıfları (ZA-ZF) ve Yönetmelik Çerçevesi",
        blocks: [
          {
            type: "paragraph",
            content: "Türkiye Bina Deprem Yönetmeliği (TBDY 2018), zeminleri başlıca üst 30 metredeki ortalama kayma dalgası hızına (Vs30) göre ZA'dan ZF'ye kadar altı sınıfa ayırır; sınıflandırmada ortalama SPT darbe sayısı (N60) ve drenajsız kayma dayanımı (cu) ortalamaları da kullanılabilir. Bu sınıflandırma yalnızca bir etiket değildir; binaya etkiyecek deprem yükünün büyüklüğünü ve zemin iyileştirme gerekip gerekmediğini doğrudan etkileyen yasal çerçevedir."
          },
          {
            type: "list",
            title: "TBDY 2018 zemin sınıfları",
            items: ["ZA: Sağlam, masif kaya (Vs30 > 1500 m/s)", "ZB: Az ayrışmış, orta sağlam kaya (Vs30 = 760-1500 m/s)", "ZC: Çok sıkı kum-çakıl tabakaları ve sert kil ya da çok çatlaklı zayıf kaya (Vs30 = 360-760 m/s)", "ZD: Orta sıkı-sıkı kum, çakıl veya çok katı kil tabakaları (Vs30 = 180-360 m/s)", "ZE: Gevşek kum, yumuşak-orta katı kil profilleri (Vs30 < 180 m/s) veya 3 m'den kalın yumuşak kil tabakası (cu < 25 kPa, yüksek su muhtevası ve plastisite)", "ZF: Sahaya özel araştırma ve değerlendirme gerektiren zeminler (sıvılaşabilir zeminler, hassas killer, yüksek organik içerikli veya çok yüksek plastisiteli kalın tabakalar)"]
          },
          {
            type: "paragraph",
            content: "ZF sınıfına giren sahalarda yönetmelik sahaya özel zemin davranış analizini zorunlu kılar. ZE ve ZF sahalarında ise yer altı zemin iyileştirme veya kazıklı temel gibi özel geoteknik önlemler çoğu projede kaçınılmaz hale gelir; hangi çözümün seçileceği yapı, zemin profili ve maliyet birlikte değerlendirilerek projeye göre belirlenir. İyileştirmenin yönetmelik açısından bir karşılığı Vs üzerinden okunur: jet grout, derin karıştırma (DSM) veya taş kolon gibi kolonlu uygulamalar zemin-kolon kompozitinin ortalama kayma dalgası hızını artırarak zemin davranışını iyileştirebilir. İyileştirme sonrası zemin sınıfının nasıl değerlendirileceği ise sahada yapılacak yeni Vs ölçümleri ve geoteknik raporda gerekçelendirilen kompozit değerlendirme ile, ilgili idarenin onayına bağlı olarak projeye göre belirlenir."
          },
          {
            type: "warning",
            title: "Kötü zemin, daha büyük deprem kuvveti demektir",
            content: "Yerel zemin etki katsayıları (Fs, F1) zayıf zeminlerde spektral ivmeleri büyütür: aynı bina, ZE sınıfı bir zeminde ZC sınıfına göre belirgin biçimde daha büyük deprem kuvvetiyle hesaplanır. Zemini iyileştirmek yalnızca oturmayı değil, tasarım deprem yükünü de etkileyen bir mühendislik kararıdır."
          },
          {
            type: "paragraph",
            content: "TBDY 2018'in 16. bölümü, deprem etkisi altında temel zemini ve temellerin tasarımına ilişkin kuralları düzenler: zemin araştırma gereklilikleri, basitleştirilmiş yöntemle sıvılaşma değerlendirmesi, zemin iyileştirmeye ve kazıklı temellere ilişkin hükümler bu kapsamdadır. Yönetmelik ayrıca deprem yer hareketi düzeylerini (DD-1'den DD-4'e) bina performans hedefleriyle eşleştirir; iyileştirme tasarım kriterleri de bu performans hedeflerine göre, örneğin hangi deprem düzeyinde sıvılaşmanın önleneceği tanımlanarak belirlenir."
          },
          {
            type: "note",
            title: "Onay süreci akışı",
            content: "Tipik akış şöyledir: zemin ve temel etüt raporu (jeoloji/jeofizik ve inşaat mühendisliği ortak imzası) → geoteknik değerlendirme raporu → iyileştirme uygulama projesi (geoteknik alanında deneyimli inşaat mühendisi) → uygulama ve yapı denetim gözetimi → kontrol deneyleriyle hazırlanan doğrulama raporu. Her aşamanın imza ve içerik gereklilikleri ilgili idarenin uygulamasına göre değişebilir; süreç başlamadan önce yerel idareyle teyit edilmesi önerilir."
          }
        ]
      },
      {
        id: "yontemlerin-bilimsel-siniflandirmasi",
        title: "Yer Altı Zemin İyileştirme Yöntemlerinin Bilimsel Sınıflandırması",
        blocks: [
          {
            type: "paragraph",
            content: "Onlarca farklı tekniği kıyaslanabilir kılmanın yolu, onları doğru eksenlerde sınıflandırmaktan geçer. Türkçe kaynaklarda yaygın olan klasik dörtlü şema, yöntemleri zemine müdahale biçimine göre ayırır ve bu rehberin omurgasını oluşturur."
          },
          {
            type: "list",
            title: "Klasik dörtlü sınıflandırma",
            items: ["Mekanik iyileştirme (kompaksiyon ailesi): vibro kompaksiyon, dinamik kompaksiyon, hızlı darbeli kompaksiyon (RIC), yüzeysel sıkıştırma", "Hidrolik iyileştirme (drenaj/konsolidasyon ailesi): ön yükleme + sürşarj, prefabrik düşey drenler (PVD), wellpoint ile susuzlaştırma", "Fiziko-kimyasal iyileştirme (katkı ve enjeksiyon ailesi): permeasyon, kompaksiyon ve çatlatma enjeksiyonları; kireç, çimento ve uçucu kül stabilizasyonu", "Katılma/donatılı iyileştirme (kolon ve donatı ailesi): jet grout, derin karıştırma (DSM), taş kolon, rijit inklüzyonlar, geosentetikler, ankraj ve zemin çivisi"]
          },
          {
            type: "paragraph",
            content: "Uluslararası literatür farklı bir eksen kullanır: Mitchell ve Katti'nin (1981) sınıflaması ile FHWA'nın rehber yaklaşımı, yöntemleri yapılışına değil fonksiyonuna göre gruplar. Buna göre teknikler Ground Reinforcement (taş kolon, DSM, jet grout, donatılı zemin, ankraj, zemin çivisi), Ground Improvement (yüzeysel ve derin kompaksiyon, ön yükleme + düşey dren) ve Ground Treatment (kompaksiyon ve zemin-çimento enjeksiyonu; kireç, bitüm ve uçucu kül stabilizasyonu) olarak üçe ayrılır. İki şema birbirinin alternatifi değil tamamlayıcısıdır: dörtlü Türkçe şema \"nasıl\" sorusuna, üçlü fonksiyon şeması \"ne işe yarar\" sorusuna cevap verir."
          },
          {
            type: "paragraph",
            content: "Kritik nokta, aynı yöntemin birden fazla fonksiyon üstlenebilmesidir; örneğin taş kolon hem çevre zemini sıkılaştırır hem de düşey dren gibi çalışarak konsolidasyonu hızlandırır. Fonksiyon ekseninde pratik eşleştirme şöyle özetlenebilir: sıkılaştırma için vibro ve dinamik kompaksiyon; konsolidasyonu hızlandırmak için PVD + sürşarj; dayanım artırmak için jet grout ve DSM; geçirimliliği azaltmak için enjeksiyon ve geçirimsizlik perdeleri; oturma kontrolü için rijit inklüzyonlar; sıvılaşma direnci için taş kolon ve dren kombinasyonları."
          },
          {
            type: "paragraph",
            content: "Yer altı zemin iyileştirme kavramının bel kemiği ise derinlik eksenidir. Tipik uygulama bantları şöyledir: 0-3 m arası yüzeysel bölgede kompaksiyon ve katkılı stabilizasyon; yaklaşık 3-10 m orta kademede taş kolon, dinamik kompaksiyon ve kısa kolonlar; yaklaşık 10-30 m derin kademede jet grout, DSM, vibro kompaksiyon ve PVD; 30 m'yi aşan çok derin kademede ise enjeksiyon ve derin kazık-kolon sistemleri değerlendirilebilir. Bu aralıklar kesin sınırlar değil tipik bantlardır; her yöntemin ulaşabileceği derinlik ekipmana, zemin koşullarına ve projeye göre değişir. Zemin tipi ise ilk eleme kuralını verir: granüler zeminlerde titreşimli yöntemler etkilidir; kohezyonlu zeminlerde drenaj, kolon ve karıştırma teknikleri öne çıkar; organik zeminlerde rijit kolon veya hafif dolgu çözümleri tercih edilir."
          },
          {
            type: "note",
            title: "Tek bakışta yöntem haritası",
            content: "Bu rehberde işlenen yöntemlerin aile-derinlik-bölüm eşleşmesi (derinlikler tipik değerlerdir, projeye göre değişir): jet grout (katılma ailesi, tipik olarak ~30 m'ye kadar, 7. bölüm), DSM (katılma, ~30 m, 8. bölüm), taş kolon (katılma + hidrolik, ~20 m, 9. bölüm), vibro/dinamik kompaksiyon ve RIC (mekanik, 10. bölüm), enjeksiyon teknikleri (fiziko-kimyasal, derin uygulamalar dahil, 11. bölüm), ön yükleme + PVD (hidrolik, 12. bölüm), rijit inklüzyonlar (katılma, 13. bölüm), susuzlaştırma ve geçirimsizlik perdeleri (14. bölüm), katkılı stabilizasyon (15. bölüm)."
          }
        ]
      },
      {
        id: "jet-grout-ile-yer-alti-zemin-iyilestirme",
        title: "Jet Grout: Yüksek Basınçlı Enjeksiyonla Yer Altı Zemin İyileştirme",
        blocks: [
          {
            type: "paragraph",
            content: "Jet Grout yöntemi, yüksek basınçlı enjeksiyon jeti vasıtasıyla zeminin yerinde çimento şerbetiyle karıştırılarak yüksek mukavemetli zemin-çimento kolonları (soilcrete) oluşturulması prensibine dayanır. Bu işlem sırasında nozullardan çıkan şerbet, yaklaşık 300 ila 600 bar gibi son derece yüksek bir basınçla zemini yırtarak parçalar ve zemin taneleriyle homojen biçimde birleşir."
          },
          {
            type: "list",
            title: "Jet Grout Sistemleri",
            items: ["Jet 1 (Tek Akışkanlı): Sadece çimento şerbeti enjekte edilir. Tipik olarak 0,6-1,0 m arası kolon çapı elde edilir.", "Jet 2 (Çift Akışkanlı): Çimento şerbeti, çevresini saran basınçlı hava jetiyle desteklenir. Kolon çapı 1,0-1,8 m aralığına ulaşır.", "Jet 3 (Üç Akışkanlı): Su jeti ve hava jetiyle zemin önceden kesilir, ardından çimento şerbeti ayrı bir nozuldan verilir. Kolon çapı 1,5-2,5 m ve üzerine çıkabilir."]
          },
          {
            type: "note",
            title: "Uygulama Adımları",
            content: "Delgi makinesi ile hedef derinliğe kadar delik açılması (delgi tiji vasıtasıyla) → Monitör nozullarından yüksek basınçlı şerbet püskürtülerek tijin dönerek ve kontrollü hızla geri çekilmesi → İmalat sırasında yüzeye çıkan çimento-zemin çamuru (spoil/geri dönüş harcı) yönetimi."
          },
          {
            type: "paragraph",
            content: "Bu yöntem kumlu, siltli, killi ve dolgu zeminler dahil olmak üzere çok geniş bir zemin yelpazesinde başarıyla uygulanabilir. Ancak iri kaya blokları veya çok sıkı çakıllı zeminler enjeksiyon jetinin enerjisini sönümleyerek kolon çapında daralmalara neden olabilir."
          },
          {
            type: "warning",
            title: "Lojistik ve Limitler",
            content: "Jet Grout yüksek mobilizasyon kapasitesi ve dar alanlarda (mini rig ekipmanıyla) çalışabilmesi bakımından avantajlıdır. Ancak geri dönüş harcının (spoil) sahadan uzaklaştırılması ciddi bir çevre ve lojistik maliyet kalemidir. Ayrıca imalat bittikten sonra kolon geometrisinin tam doğrulanması özel deneyler gerektirir."
          }
        ]
      },
      {
        id: "derin-karistirma-dsm",
        title: "Derin Karıştırma (DSM): Zemini Yerinde Çimento ile Karıştırmak",
        blocks: [
          {
            type: "paragraph",
            content: "Derin Karıştırma (Deep Soil Mixing - DSM), özel tasarım karıştırma paletlerine sahip delgi ekipmanları kullanılarak zeminin derinlerde mekanik olarak çimento veya diğer bağlayıcılarla karıştırılması yöntemidir. Jet grout yönteminden en temel farkı, kesme işleminin yüksek basınçlı hidrolik jetle değil, doğrudan mekanik karıştırma paletleriyle yapılmasıdır. Bu durum, kolon geometrisinin ve çapının zemin heterojenliğinden bağımsız olarak daha öngörülebilir ve düzgün olmasını sağlar."
          },
          {
            type: "list",
            title: "DSM Yöntem Aileleri",
            items: ["Islak Karıştırma (Wet Mixing): Çimento şerbetinin sıvı fazda zemine enjekte edilerek karıştırılmasıdır. Genellikle daha homojen bir soilcrete kalitesi sunar.", "Kuru Karıştırma (Dry Mixing): Doğal su muhtevası yüksek yumuşak zeminlerde, çimentonun toz formda verilmesidir. Zemindeki fazla suyu bağlayarak ek stabilizasyon sağlar.", "CSM (Cutter Soil Mixing): Döner dişli tamburlarla panel şeklinde dikdörtgen kolonlar oluşturulmasıdır; iksa duvarlarında çok etkilidir."]
          },
          {
            type: "note",
            title: "Tipik DSM Tasarım Parametreleri",
            content: "DSM kolonlarında çap genellikle 60-120 cm aralığında tasarlanır. Uygulama derinliği 25-30 metreye kadar çıkabilir. Metreküp başına çimento sarfiyatı 150-400 kg arasındadır. Hedef serbest basınç dayanımı ise projeye göre 0.5-5.0 MPa mertebesindedir."
          },
          {
            type: "paragraph",
            content: "DSM özellikle yumuşak kil, silt ve gevşek kumlu zeminlerde ideal sonuçlar verir. Ancak çok sıkı çakıl, sert kaya tabakaları veya büyük yapısal engeller içeren zeminlerde mekanik paletlerin ilerlemesi mümkün olmayacağı için DSM imalatı kısıtlanır."
          },
          {
            type: "warning",
            title: "Jet Grout vs DSM Karşılaştırma Mantığı",
            content: "DSM yöntemi çimento sarfiyatının kontrol edilebilirliği ve geri dönüş harcının (spoil) minimal olması nedeniyle jet grout'a göre genellikle daha ekonomiktir. Ancak jet grout daha dar çalışma alanlarında ve eğimli yüzeylerde uygulanabilirken, DSM dikey ve geniş açıklıklı sahalarda daha yüksek verim sunar."
          }
        ]
      },
      {
        id: "tas-kolon-vibro-replasman",
        title: "Taş Kolon (Vibro Replasman): Sıkıştırma ve Drenajın İkili Gücü",
        blocks: [
          {
            type: "paragraph",
            content: "Taş Kolon (Vibro Replasman) yöntemi, yer altında vibrasyonlu bir prob (vibroflot) yardımıyla açılan boşluğa kademeli olarak agrega doldurulması ve bu agreganın titreşimle sıkıştırılarak yüksek yoğunlukta düşey kolonlar oluşturulması işlemidir. Oluşturulan taş kolonlar çevre zeminle birlikte bir 'kompozit zemin' sistemi meydana getirerek yapı yüklerinin paylaşılmasını ve oturmaların sınırlandırılmasını sağlar."
          },
          {
            type: "list",
            title: "Besleme ve İmalat Yöntemleri",
            items: ["Islak Üstten Besleme (Wet Top-Feed): Su jeti yardımıyla kuyu açılır, agrega üstten dökülür. Özellikle yeraltı su seviyesi altındaki kalın gevşek tabakalarda tercih edilir.", "Kuru Alttan Besleme (Dry Bottom-Feed): Agreganın özel bir boru sistemiyle doğrudan probun ucundan, kuyu tabanından verilmesidir. Çevre kirliliği ve çamur üretimi istemeyen şehir içi şantiyelerde kullanılır."]
          },
          {
            type: "note",
            title: "Tasarım ve Boyut Değerleri",
            content: "Taş kolonlerin çapı tipik olarak 60-120 cm, uygulama derinliği 20-30 metreye kadardır. Kolon aralıkları üçgen veya kare desende 1.5-3.0 metre arasında planlanır. Alan ikame oranı (kolon kesit alanının toplam alana oranı) ise %10 ile %35 arasındadır."
          },
          {
            type: "paragraph",
            content: "Taş kolonlar hem çevre zemini yanal olarak sıkıştırarak taşıma gücünü artırır hem de yüksek geçirgenliği sayesinde deprem esnasında oluşan aşırı boşluk suyu basıncını hızla sönümleyerek düşey dren vazifesi görür. Bu çifte etki mekanizması, yöntemi sıvılaşma riskine karşı en etkili yer altı zemin iyileştirme çözümlerinden biri yapar."
          },
          {
            type: "warning",
            title: "Çok Yumuşak Zeminlerde Sınırlama",
            content: "Taş kolonların taşıma gücü, çevre zeminin yanal direncine bağlıdır (kolon bulging/şişme yaparak göçer). Drenajsız kayma dayanımı 15-20 kPa'ın altında olan çok yumuşak killerde taş kolon yanal destek bulamayacağı için geotekstil kılıflı kolonlar (Geotextile Encased Columns - VTC) gibi özel türevler değerlendirilmelidir."
          }
        ]
      },
      {
        id: "derin-kompaksiyon-yontemleri",
        title: "Derin Kompaksiyon: Vibro Kompaksiyon, Dinamik Kompaksiyon ve RIC",
        blocks: [
          {
            type: "paragraph",
            content: "Yüzeysel kompaksiyonda silindirler ve titreşimli tablalar zeminin yalnızca üst 30-50 cm'lik bölümünü etkiler. Oysa gevşek kum tabakalarında, kontrolsüz dolgularda ve hidrolik dolgu sahalarında sorun çoğu zaman metrelerce derinde başlar. Derin kompaksiyon yöntemleri, sıkıştırma enerjisini 5-15 m ve ötesine taşıyarak yeraltı zemin iyileştirme ihtiyacını doğrudan kaynağında karşılar; bu ölçek farkı, yöntem ailesini yüzey sıkıştırmasından ayıran temel özelliktir. Hangi yöntemin uygulanacağı ise zemin cinsine, ince dane oranına, hedef derinliğe ve sahanın çevre koşullarına (komşu yapılar, titreşim hassasiyeti) göre belirlenir."
          },
          {
            type: "paragraph",
            content: "Vibro kompaksiyon (vibroflotasyon), vince asılı yatay titreşimli bir vibroflotun su jeti yardımıyla zemine indirilmesi ve kademeler halinde yukarı çekilirken temiz kum danelerini yeniden düzenleyerek sıkılaştırması esasına dayanır. Yöntem yalnızca kohezyonsuz, temiz granüler zeminlerde çalışır; ince dane oranı tipik olarak %10-15 eşiğini aştığında titreşim daneler arasında etkin iletilemez ve taş kolon (vibro replasman) çözümüne geçilir. Etkili derinlik tipik olarak 5-15 m olup özel projelerde çok daha derin uygulamalar raporlanmıştır. Sıkıştırma noktaları üçgen veya kare düzende yerleştirilir; nokta aralığı vibroflot kapasitesine, zemin özelliklerine ve hedef sıkılığa bağlı olarak projeye göre belirlenir (yaygın uygulamada 2-3,5 m mertebesinde) ve hedef genellikle %70-85 relatif sıkılıktır. Kesin karelaj, saha başında yapılan deneme uygulamasıyla doğrulanmalıdır."
          },
          {
            type: "paragraph",
            content: "Dinamik kompaksiyonda 10-30 ton ağırlığındaki çelik tokmak, vinçle 10-25 m yükseklikten serbest düşürülür ve darbe enerjisi gevşek zemini derinlemesine sıkıştırır. Islah derinliği D = n·√(W·H) ampirik bağıntısıyla öngörülür; burada W tokmak ağırlığı (ton), H düşme yüksekliği (m), n ise zemin cinsine bağlı 0,3-0,6 aralığında bir katsayıdır. Örneğin 15 tonluk tokmağın 20 m'den düşürüldüğü bir uygulamada √(15×20) ≈ 17,3 olur; n = 0,5 alındığında yaklaşık 8-9 m etki derinliği hesaplanır. Yumuşak kohezyonlu zeminlerde ise aynı ekipmanla dinamik replasman uygulanır: tokmak, iri taş yastıklarını zemine çakarak hem sıkıştıran hem yük taşıyan kolonlar oluşturur ve yöntemin uygulama alanını kohezyonlu zeminlere genişletir."
          },
          {
            type: "warning",
            title: "Dinamik kompaksiyonun sınırları",
            content: "Yöntem granüler dolgular ve gevşek kumlarda etkilidir; suya doygun, düşük geçirimli killerde boşluk suyu basıncı sönümlenemediği için sonuç alınamaz. Ayrıca darbe titreşimleri nedeniyle mevcut yapılara bırakılması gereken güvenli mesafe önemli bir kısıttır; bu mesafe sahadaki yapı stoğuna ve zemin koşullarına bağlı olarak değişir ve zemin etüdü ile titreşim ölçümlerine dayanılarak projeye göre belirlenmelidir."
          },
          {
            type: "list",
            title: "Hızlı darbeli kompaksiyon (RIC): şehir içi alternatif",
            items: ["Ekskavatör taşıyıcıya bağlı 5-12 tonluk hidrolik çekiç, dakikada yaklaşık 40-60 darbe uygular.", "Etkili derinlik tipik olarak 4-7 m'dir; klasik dinamik kompaksiyon ile yüzeysel silindiraj arasındaki boşluğu doldurur.", "Darbe başına enerji kontrollü ve görece düşük olduğundan çevre titreşimi klasik tokmaklamaya göre belirgin biçimde azdır.", "Bu sayede komşu yapıların yakınında ve şehir içi sahalarda değerlendirilebilir; yine de güvenli çalışma mesafesi titreşim ölçümüyle doğrulanmalıdır.", "Her darbedeki oturma ve darbe sayısı, ekipman üzerindeki kayıt sistemleriyle izlenir; böylece sahanın tamamında homojen bir iyileştirme kontrolü sağlanır."]
          },
          {
            type: "note",
            title: "Kalite kontrol nasıl yapılır?",
            content: "Derin kompaksiyonun başarısı, uygulama öncesi ve sonrası SPT/CPT sonuçlarının karşılaştırılmasıyla kanıtlanır; dinamik kompaksiyonda krater derinliği ölçümleri enerji verimini izlemenin pratik yoludur. Saha genelinde uygulamaya geçmeden önce bir deneme sahasında tokmak ağırlığı, düşme yüksekliği, darbe sayısı ve nokta karelajı kalibre edilmeli; kabul kriterleri (hedef SPT/CPT değerleri, relatif sıkılık) proje şartnamesinde önceden tanımlanmalıdır."
          }
        ]
      },
      {
        id: "enjeksiyon-yontemleri",
        title: "Enjeksiyon Yöntemleri: Permeasyon, Kompaksiyon, Çatlatma ve Reçine",
        blocks: [
          {
            type: "paragraph",
            content: "Enjeksiyon yöntemleri, çimento esaslı şerbetlerin veya kimyasal çözeltilerin basınç altında zemine verilmesiyle dayanımı artırmayı, geçirimliliği azaltmayı veya oturmaları düzeltmeyi amaçlar ve yeraltı zemin iyileştirme araç kutusunun en esnek ailesini oluşturur. Malzemenin zemindeki davranışına göre dört ana mekanizma ayırt edilir: permeasyon (emdirme), kompaksiyon/deplasman (düşük mobiliteli enjeksiyon), çatlatma (hidrolik çatlatma ve kompanzasyon) ile yüksek basınçlı jet enjeksiyonu. Jet grout ayrı bölümde ele alındığından burada ilk üç mekanizma üzerinde durulmaktadır. Hangi mekanizmanın seçileceği zeminin dane çapı dağılımına, boşluk yapısına ve iyileştirme hedefine göre belirlenir; bu nedenle tasarımın çıkış noktası her zaman güvenilir bir zemin etüdüdür."
          },
          {
            type: "list",
            title: "Hangi mekanizma hangi zeminde çalışır?",
            items: ["Permeasyon: çakıl ve kaba-orta kumlar — şerbet, dane dizilimini bozmadan boşluklara sızar.", "Kompaksiyon (deplasman): gevşek dolgular, boşluklu ve karstik ortamlar — koyu harç zemini iterek sıkıştırır.", "Çatlatma/kompanzasyon: ince daneli kil ve siltler — kontrollü çatlak ağıyla zemin kütlesi iyileştirilir, yapı milimetrik hassasiyette kaldırılabilir.", "Poliüretan reçine: döşeme altı boşluklar ve acil oturma müdahaleleri — hızlı genleşen hafif dolgu.", "Jet enjeksiyonu: kilden ince çakıla uzanan geniş yelpaze — jet grout bölümünde detaylandırılmıştır."]
          },
          {
            type: "paragraph",
            content: "Permeasyon enjeksiyonunda düşük viskoziteli şerbet, dane dizilimini bozmayacak bir basınçla zemin boşluklarına emdirilir. Belirleyici kavram enjekte edilebilirliktir (groutability): şerbetteki dane çapının zemin boşluklarına göre yeterince küçük olması gerekir. Bu nedenle normal çimento yalnızca çakıl ve kaba kumda çalışır; orta kumlarda mikro çimento, ince kumlarda ise sodyum silikat ve kimyasal reçineler gündeme gelir. Malzeme seçimi elek analizi ve deneme enjeksiyonlarıyla, zemin etüdü sonuçlarına göre yapılır; deneme panelinden alınan karot ve permeabilite sonuçları tasarımın sahada doğrulanmasını sağlar."
          },
          {
            type: "paragraph",
            content: "Kompaksiyon enjeksiyonunda (low mobility grouting) çökme değeri çok düşük, koyu kıvamlı harç zemine itilir; harç boşluklara sızmak yerine enjeksiyon noktası çevresinde genişleyen bir kütle oluşturarak çevre zemini radyal olarak sıkıştırır. Oturmuş temellerin düzeltilmesi, karst boşluklarının ve obrukların doldurulması ile tünel üstü zeminlerin desteklenmesi tipik kullanım alanlarıdır. Çatlatma enjeksiyonunda ise kontrollü hidrolik çatlaklar açılarak zemin kütlesi içinde sertleşmiş şerbet damarları oluşturulur; kompanzasyon enjeksiyonu bu ilkeyle hassas yapıların altında oturmayı milimetrik hassasiyette telafi edebilir ve döşeme kaldırma (slabjacking) mantığının derin zemindeki karşılığı olarak düşünülebilir."
          },
          {
            type: "note",
            title: "Sahada kayıt üçlüsü: basınç-debi-hacim",
            content: "Klasik uygulamada su/çimento oranı 3:1 gibi akışkan bir karışımla başlar; zeminin alımına göre karışım kademeli olarak 2:1, 1:1 ve daha koyu oranlara koyulaştırılır. Bentonit katkısı çökelmeyi azaltıp süspansiyonu kararlı kılar. Manşetli boru (tube-à-manchette) tekniği aynı seviyeye kontrollü ve tekrarlı enjeksiyon imkânı verir. Her kademede basınç, debi ve verilen hacim kesintisiz kaydedilmeli; kabul dosyası bu kayıtlar üzerine kurulmalıdır."
          },
          {
            type: "paragraph",
            content: "Poliüretan reçine enjeksiyonu, saniyeler içinde genleşen hafif reçineyle döşeme altı boşluklarını doldurur ve ani oturmalarda acil müdahale aracı olarak değerlendirilir; mevcut yapı altındaki uygulama detayları temel güçlendirme (underpinning) bölümünde ele alınmaktadır. Geçirimsizlik amaçlı enjeksiyonda ise kaya çatlakları doldurulur ve kesişen enjeksiyon sıralarıyla perde oluşturulur; baraj temelleri ve derin kazılar tipik senaryolardır. Kabul ölçütü çoğunlukla Lugeon testiyle tanımlanan geçirimlilik değeridir ve hedef değer projeye göre şartnamede belirlenir. Yeraltı suyu kontrolüyle ilişkisi ilgili bölümde, uygulama adımları ise sitedeki zemin enjeksiyonu nedir sayfasında detaylandırılmıştır."
          }
        ]
      },
      {
        id: "on-yukleme-ve-dusey-drenler",
        title: "Ön Yükleme ve Düşey Drenler (PVD): Konsolidasyonu Hızlandırmak",
        blocks: [
          {
            type: "paragraph",
            content: "Suya doygun yumuşak killer üzerine dolgu veya yapı yüklendiğinde oturma hemen değil, boşluk suyunun zamanla dışarı atılmasıyla yıllara yayılarak gelişir; Terzaghi'nin konsolidasyon teorisi bu davranışı tanımlar. Ön yükleme yöntemi aynı fizikten yararlanır: yapı yükünü temsil eden ve çoğunlukla bir miktar fazlasıyla (sürşarj) hazırlanan geçici toprak dolgu sahaya serilir; zemin, oturmasının büyük bölümünü inşaat başlamadan tamamlar ve dolgu kaldırıldığında yapı, oturması önemli ölçüde tamamlanmış bir zemine oturur. Ekipman ihtiyacı düşük, mekanizması şeffaf olan bu yaklaşım, yeraltı zemin iyileştirme yöntemleri içinde en ekonomik çözümlerden biri olarak değerlendirilir."
          },
          {
            type: "paragraph",
            content: "Sürecin darboğazı suyun kilden çıkış hızıdır; prefabrik düşey drenler (PVD, fitil dren) tam bu noktada devreye girer. Tipik olarak yaklaşık 100 × 4 mm kesitli, geotekstil filtreli kompozit şeritler, mandrel adı verilen çelik kılıf yardımıyla zemine itilir ve 25-30 m ve üzeri derinliklere ulaşabilir; üçgen veya kare yerleşimde genellikle 1,0-2,5 m aralıklarla çakılır, kesin aralık konsolidasyon analiziyle projeye göre belirlenir. Uzun yıllar kullanılan kum drenlerin yerini bu hafif, hızlı uygulanan ve homojen şeritler büyük ölçüde almıştır. Sıvılaşmaya yönelik deprem drenleri ise ayrı bir işlev görür: amaç konsolidasyon değil, deprem sırasında oluşan boşluk suyu basıncının hızla sönümlenmesidir."
          },
          {
            type: "note",
            title: "Fizik kuralı: mesafenin karesi",
            content: "Konsolidasyon süresi drenaj mesafesinin karesiyle orantılıdır. İki yüzünden drene olan 10 m kalınlığında bir kil tabakasında su en fazla 5 m yol alır ve oturma onlarca yıl sürebilir; 1,2 m aralıklı PVD ile drenaj yolu yaklaşık 0,6 m'ye indiğinde süre kabaca (5/0,6)² ≈ 70 kat kısalır ve yıllar mertebesindeki bekleme aylara inebilir. Bu basitleştirilmiş bir gösterimdir; gerçek süre, konsolidasyon katsayısı, dren etrafındaki örselenme (smear) etkisi ve tabaka geometrisine göre projede hesaplanır."
          },
          {
            type: "paragraph",
            content: "Sürşarj tasarımında hedef genellikle %90 ve üzeri konsolidasyon derecesidir; sürşarj yüksekliği bu hedefe ve inşaat takvimine göre belirlenir. Yumuşak taban kayma göçmesine karşı hassas olduğundan dolgu kademeli inşa edilir ve her kademede boşluk suyu basıncının yeterince sönümlenmesi beklenir. Saha gözlemsel yöntemle izlenir: oturma plakaları oturma-zaman eğrisini, piezometreler boşluk suyu basıncını, inklinometreler yanal hareketi takip eder; dolgu programı bu ölçümlere göre güncellenir. Dolgu malzemesinin temin edilemediği veya taban stabilitesinin kritik olduğu sahalarda vakum konsolidasyonu değerlendirilebilir: geçirimsiz membran altında oluşturulan vakum, atmosfer basıncını sürşarj gibi kullanır ve kayma göçmesi riski oluşturmadan yük uygular."
          },
          {
            type: "list",
            title: "Ön yükleme + PVD'nin tipik uygulama alanları",
            items: ["Liman geri sahaları ve kıyı dolgu alanları", "Karayolu ve demiryolu yaklaşım dolguları", "Geniş alana yayılan düşük katlı yapılaşma ve depolama sahaları", "Tank çiftlikleri ve açık stok alanları", "Normal konsolide veya hafif aşırı konsolide yumuşak kil profilleri"]
          },
          {
            type: "warning",
            title: "En büyük dezavantaj: takvim",
            content: "PVD konsolidasyon süresini kat kat kısaltabilse de yöntem doğası gereği aylar sürebilen bir bekleme dönemi gerektirir. İnşaat takvimi sıkışık projelerde bu bekleme çoğu zaman eleme kriteridir; gerekli süre zemin etüdü ve konsolidasyon analizleriyle projeye göre belirlenmeli, yöntem ve takvim kararı bu hesaplara dayandırılmalıdır."
          }
        ]
      },
      {
        id: "rijit-inkluzyonlar-ve-kazik-iliskisi",
        title: "Rijit İnklüzyonlar (CMC) ve Kazıklı Sistemlerle İlişkisi",
        blocks: [
          {
            type: "paragraph",
            content: "Rijit inklüzyonlar, sıkışabilir zayıf tabakalar boyunca ilerletilen, deformasyon modülü çevre zemine göre çok yüksek ve genellikle donatısız beton kolonlardır. Ayırt edici özellikleri, yapıya yapısal olarak bağlanmamalarıdır: yapı yükü, temel ile kolon başları arasına serilen granüler bir yük aktarım platformu (LTP) üzerinden kolonlara ve çevre zemine paylaştırılır. Böylece temel sistemi yüzeysel ya da radye olarak kalır; kolonlar bir temel elemanı değil, yeraltı zemin iyileştirme elemanı olarak tasarlanır. Fark tek cümlede özetlenebilir: kazık, yapıya bağlı bir temel elemanıdır ve yapısal tasarıma girer; rijit inklüzyon ise zemini iyileştirir, temel yüzeysel kalmaya devam eder."
          },
          {
            type: "note",
            title: "Jet grout kolonu kazık mıdır?",
            content: "Hayır. Soilcrete malzemesi beton kadar homojen değildir, oluşan kolon geometrisi kazık toleranslarında doğrulanamaz ve yaygın yönetmelik yaklaşımı bu elemanları temel elemanı olarak değil zemin iyileştirmesi olarak değerlendirir. Bu nedenle jet grout kolonlarına kazık taşıma gücü formülleri doğrudan uygulanmaz; tasarım, iyileştirilmiş zemin ortamı üzerinden yapılır."
          },
          {
            type: "paragraph",
            content: "Kontrollü Modül Kolonları (CMC), 1990'lı yıllarda geliştirilen ve günümüzde yaygın biçimde uygulanan bir rijit inklüzyon teknolojisidir. Tipik olarak 25-45 cm çapındaki kolonlar, deplasmanlı burgu ile hafriyat çıkarmadan ve kayda değer titreşim oluşturmadan imal edilir; takım geri çekilirken beton basınç altında pompalanır. İmalat sırasında derinlik, tork, beton basıncı ve pompalanan hacim sürekli kaydedilir; bu kayıtlar kalite kontrolün temelini oluşturur. Sistemin anahtarı yük aktarım platformudur: temel altındaki sıkıştırılmış granüler yastık içinde kemerlenme (arching) mekanizması gelişir; yük büyük ölçüde kolon başlarına yönlenirken bir bölümü çevre zeminde kalır. Yastık kalınlığı, kolon aralığı ve kolon-zemin rijitlik oranı bu yük paylaşımını belirleyen başlıca tasarım değişkenleridir. Doğru tasarlanmış rijit inklüzyon uygulamaları, oturmaları projeye ve zemin profiline bağlı olarak birkaç kat mertebesinde azaltabilir; kesin iyileştirme oranı sayısal analiz ve saha deneyleriyle doğrulanır."
          },
          {
            type: "list",
            title: "İyileştirme-derin temel spektrumunda başlıca düşey elemanlar",
            items: ["CMC (Kontrollü Modül Kolonu): tipik 25-45 cm çap, deplasmanlı burgu ile hafriyatsız ve düşük titreşimli imalat; yumuşak kil ve silt profillerinde radye altı iyileştirme.", "Vibro beton kolon (VCC): vibratörle imal edilen beton kolon; gevşek granüler zeminler ve yumuşak ara tabakalarda.", "Kuru (alttan beslemeli) vibro beton kolon: yeraltı suyu koşullarının elverdiği durumlarda kuru yöntemle imalat.", "Geotekstil kılıflı kolon (GEC): yanal desteği çok zayıf, aşırı yumuşak zeminlerde kılıfın çevresel destek sağladığı çözüm.", "CFA (sürekli burgulu) kazık: tipik 45-90 cm çap; ekipmana bağlı olarak 25-30 m mertebesine ulaşan derinlik; uygun zemin profillerinde hızlı bir derin temel alternatifi.", "Fore kazık: yaygın olarak Ø60-200 cm çap, gerektiğinde 50 m'yi aşan derinlik; yapıya bağlı klasik derin temel elemanı.", "Mini kazık: genellikle Ø30 cm'nin altındaki çaplarda; dar alanlarda ve mevcut yapı yakınında derin temel ve güçlendirme elemanı."]
          },
          {
            type: "paragraph",
            content: "İyileştirme mi kazık mı sorusu; yük düzeyi, yapının oturma toleransı, sağlam tabakanın derinliği ve deprem koşulları birlikte değerlendirilerek yanıtlanır. Orta düzey yükler ve oturmaya toleranslı üst yapılarda rijit inklüzyonlu radye ekonomik bir çözüm olabilir. Buna karşılık ağır tekil yükler, çok sıkı oturma limitleri, derindeki sağlam tabaka veya sıvılaşma sonrası yanal yayılma riski gibi durumlarda kazıklı temel gerekli hale gelebilir; çekme ve yatay yük aktarımı gereken durumlarda da yapıya bağlı kazıklar tercih edilir. Nihai karar, zemin etüdü sonuçlarına ve yapısal analizlere göre projeye özgü verilir; imalat detayları için sitedeki fore kazık nedir ve mini kazık tercih nedenleri sayfaları incelenebilir."
          }
        ]
      },
      {
        id: "yeralti-suyu-kontrolu-ve-gecirimsizlik",
        title: "Yeraltı Suyu Kontrolü, Susuzlaştırma ve Geçirimsizlik Perdeleri",
        blocks: [
          {
            type: "paragraph",
            content: "Yeraltı su seviyesi (YAS), yeraltı zemin iyileştirme projelerinde hem sorunun kaynağı hem de yöntem seçiminin belirleyicisidir. Yüksek YAS, efektif gerilmeyi düşürerek taşıma gücünü azaltır; gevşek kumlarda sıvılaşma potansiyelini artırır; derin kazılarda kaynama, borulanma ve taban kabarması riskini doğurur. Aynı zamanda ıslak/kuru imalat kararını, bağlayıcı seçimini ve ekipman planını doğrudan etkiler. Bu nedenle susuzlaştırma stratejisi, zemin etüdü aşamasında geçirimlilik ölçümleri ve piyezometre gözlemleriyle birlikte planlanmalıdır."
          },
          {
            type: "paragraph",
            content: "Kazı susuzlaştırmasında en yaygın çözüm wellpoint sistemidir: vakum pompasına bağlı iğne kuyu dizileri, kum ve siltli kum zeminlerde su seviyesini kontrollü biçimde düşürür. Tek kademede pratik düşüm sınırı 5-6 m mertebesindedir; daha büyük düşümlerde kademeli (cascade) kurulum yapılır. Kuyu filtreleri, zeminin dane çapı dağılımına uygun yarık açıklığı ve kum filtre zarfı ile teşkil edilir; aksi halde ince dane taşınması ve tıkanma sorunları görülür. Daha derin ve yüksek debili su düşürme gerektiğinde dalgıç pompalı derin kuyu (deep well) sistemleri tercih edilir; düşük geçirimlilikli siltlerde ise vakum destekli veya ejektörlü kuyular gündeme gelebilir. Kuyu sayısı, aralığı ve pompa kapasitesi zeminin geçirimliliğine ve hedef düşüme göre projelendirilir."
          },
          {
            type: "note",
            title: "Kurutma da bir iyileştirmedir",
            content: "YAS'ın düşürülmesi tek başına iyileştirme etkisi yaratır: boşluk suyu basıncı azaldıkça efektif gerilme artar, ince daneli zeminlerde konsolidasyon gelişir ve zemin zamanla dayanım kazanır."
          },
          {
            type: "warning",
            title: "Komşu yapılarda oturma riski",
            content: "Kontrolsüz su düşürme, etki konisi içindeki komşu yapıların altında ilave konsolidasyon oturmalarına yol açabilir. Düşüm hızı ve süresi gözlem kuyuları ve piyezometrelerle izlenmeli; gerekirse geçirimsizlik perdesi veya yeniden besleme (recharge) kuyuları gibi önlemlerle çevresel etkiler yönetilmelidir."
          },
          {
            type: "list",
            title: "Başlıca geçirimsizlik perdesi çözümleri",
            items: ["Kesişen jet grout kolon perdesi: kolonların birbirine geçirilerek imal edilmesiyle oluşturulan sızdırmazlık perdesi.", "DSM panel perdesi: derin karıştırma panellerinin ardışık ve bindirmeli imalatıyla düşük geçirimlilikli bariyer oluşturulması.", "Slurry trench (bulamaç hendek): bentonit-çimento dolgulu hendeklerle sığ ve orta derinlikte geçirimsizlik.", "Diyafram duvar: derin kazı ve baraj senaryolarında hem destek hem geçirimsizlik sağlayan betonarme perde; detaylar sitedeki diyafram duvar nedir ve kazı destek sistemleri sayfalarında ele alınmıştır.", "Kazı tabanı tıkaç enjeksiyonu: taban kabarmasına ve artezyen basıncına karşı kazı tabanının sızdırmazlaştırılması."]
          },
          {
            type: "paragraph",
            content: "Perde performansı imalatla bitmez; doğrulanması gerekir. Geçirimlilik azaltımının kalite kontrolü Lugeon testi, kuyu içi permeabilite (düşen/yükselen seviye) deneyleri ve gözlem kuyularındaki su seviyesi takibiyle yapılır. Derin kazılarda alt akiferlerdeki artezyen basınçları ayrıca ölçülmeli, gerektiğinde basınç düşürme kuyuları planlanmalıdır. Hedef geçirimlilik değerleri ve kabul kriterleri, yapının su hassasiyetine ve kazı derinliğine bağlı olarak projeye göre belirlenir."
          }
        ]
      },
      {
        id: "katki-maddeleri-ve-ozel-yontemler",
        title: "Katkı Maddeleriyle Stabilizasyon ve Özel İyileştirme Yöntemleri",
        blocks: [
          {
            type: "paragraph",
            content: "Katkı maddeleriyle stabilizasyon, zeminin kimyasını değiştirerek davranışını iyileştirir. Kireç stabilizasyonu özellikle şişen killerde etkilidir: kalsiyum iyonları kil mineralleriyle iyon değişimine girer, ardından gelişen puzolanik reaksiyon zamanla kalıcı sertleşme sağlar. Plastisite indisi düşer, işlenebilirlik artar; şişme davranışının yol, kanal kaplaması ve döşeme gibi hafif yapılara verdiği hasar azalır. Tipik dozaj kuru zemin ağırlığının %3-8'i mertebesindedir; kesin oran laboratuvar karışım deneyleriyle belirlenir. Sönmemiş kireç suyu hızla bağladığı için ıslak zeminlerde avantajlıdır; sönmüş kireç ise daha güvenli ve kolay uygulanır. Sülfat içeriği yüksek zeminlerde kireç, etrenjit oluşumuna bağlı ilave şişmeye (sülfat kabarması) yol açabileceğinden uygulama öncesi mutlaka ön deneylerle kontrol edilmelidir."
          },
          {
            type: "warning",
            title: "Sönmemiş kireçle çalışma güvenliği",
            content: "Sönmemiş kireç su ile şiddetli ekzotermik reaksiyona girer; cilt ve göz temasında ciddi yanık riski taşır. Uygulamada toz kontrolü ve kişisel koruyucu donanım kullanımı zorunludur."
          },
          {
            type: "paragraph",
            content: "Çimento stabilizasyonu, organik zeminler dışında geniş bir zemin aralığında tipik olarak %3-10 dozajla dayanım artışı sağlar; en verimli olduğu birimler kum-çakıl, kumlu-siltli zeminler ve düşük plastisiteli killerdir. Yol alt temeli, dolgu ve çalışma platformu iyileştirmelerinde karışım, laboratuvarda farklı dozajların denenmesi ve hedef serbest basınç dayanımının (UCS) doğrulanmasıyla tasarlanır. Uçucu kül ve yüksek fırın cürufu gibi endüstriyel yan ürünler, düşük maliyetli ve düşük karbonlu bağlayıcı alternatifleri sunar; tek başlarına sınırlı puzolanik katkı sağlarken kireç veya çimentoyla birlikte kullanıldıklarında belirgin dayanım artışı elde edilebilir. Sağlanacak artış zemin türüne, dozaja ve kür süresine bağlı olarak projeye göre değişir. Bitüm stabilizasyonu ise kohezyonsuz granüler malzemeye kohezyon ve su geçirimsizliği kazandırır."
          },
          {
            type: "note",
            title: "Yüzeyden yer altına",
            content: "Aynı bağlayıcılar derin karıştırma (DSM) ekipmanıyla 25-30 m mertebesindeki derinliklere taşınabilir. Katkı stabilizasyonunun yeraltı zemin iyileştirme versiyonu sayılabilecek bu uygulama, derin karıştırma bölümünde detaylandırılmıştır."
          },
          {
            type: "list",
            title: "Özel ve gelişmekte olan yöntemler",
            items: ["Zemin dondurma (ground freezing): tuzlu su (brine) veya sıvı azot devridaimiyle geçici sızdırmazlık ve yapısal destek; tünel ve şaft işlerinde kullanılır, yüksek enerji maliyeti nedeniyle genellikle diğer yöntemlerin yetersiz kaldığı durumlarda tercih edilir.", "Biyokalsifikasyon (MICP): bakteriler aracılığıyla kalsit çökelterek kum tanelerini doğal bir çimentoyla bağlayan, düşük karbon ayak izli ve henüz gelişmekte olan bir yöntem.", "EPS geofoam: yaklaşık 20-30 kg/m³ yoğunluğuyla dolgu yükünün kendisini azaltan hafif dolgu; köprü yaklaşım dolguları ve oturmaya hassas sahalarda değerlendirilir.", "Köpük beton: hafif, akışkan ve kendiliğinden yerleşen bir hafif dolgu alternatifi.", "Geogrid donatılı yük platformları ve temel altı donatı: zeminin çekme dayanımı eksikliğini geosentetiklerle tamamlayan, rijit inklüzyon uygulamalarını destekleyen çözümler.", "Donatılı zemin (MSE) duvarları: çelik veya polimer şeritlerle donatılandırılan dolgularla yüksek istinat yapıları oluşturulabilir; ulaşılabilir yükseklik donatı tipine ve projeye göre değişir.", "Elektro-osmoz: ince daneli zeminlerde boşluk suyunu elektrik alanla yönlendiren niş bir elektrokinetik yöntem."]
          },
          {
            type: "paragraph",
            content: "Hangi katkının hangi dozajla kullanılacağı; zemin türü, su muhtevası, hedef dayanım ve çevresel kısıtlara bağlı olarak laboratuvar karışım deneyleriyle belirlenir. Sahada ise serme kalınlığı, karıştırma homojenliği ve kür koşulları performansı doğrudan etkilediğinden imalat kontrolü deney sonuçları kadar önemlidir. Bu yöntemler çoğu projede tek başına değil, derin yeraltı zemin iyileştirme teknikleriyle birlikte hibrit çözümler halinde değerlendirilir; nihai seçim zemin etüdü sonuçlarına ve maliyet-performans karşılaştırmasına göre yapılır."
          }
        ]
      },
      {
        id: "sivilasma-riskinin-azaltilmasi",
        title: "Zemin Sıvılaşması ve Yer Altı Zemin Güçlendirme ile Riskin Azaltılması",
        blocks: [
          {
            type: "note",
            title: "Kısa cevap",
            content: "Zemin sıvılaşması, suya doygun gevşek kumlu zeminlerin deprem sarsıntısı sırasında geçici olarak taşıma gücünü yitirmesidir. Vibro kompaksiyon, taş kolon, jet grout ve derin karıştırma gibi yer altı zemin güçlendirme yöntemleriyle bu risk, analizlerle doğrulanabilir biçimde kabul edilebilir düzeye indirilebilir."
          },
          {
            type: "paragraph",
            content: "Sıvılaşmanın mekanizması boşluk suyu basıncının artışında saklıdır. Suya doygun, gevşek kum ve siltli kum tabakalarında deprem sırasında oluşan tekrarlı kesme yükleri, su tabaka dışına yeterince hızlı kaçamadığı için boşluk suyu basıncını sürekli yükseltir. Bu basınç, daneleri bir arada tutan efektif gerilme düzeyine ulaştığında daneler arası temas kuvvetleri pratik olarak sıfırlanır ve zemin geçici olarak sıvı gibi davranır: binalar aşırı oturur veya yana yatar; boş tank, rögar ve boru hattı gibi hafif gömülü yapılar ise kaldırma etkisiyle yüzeye çıkabilir. 1999 Kocaeli depreminde Adapazarı'nda, 2023 Kahramanmaraş depremlerinde ise Gölbaşı ve İskenderun'da gözlenen yapı devrilmeleri ve aşırı oturmalar bu mekanizmanın saha kanıtlarıdır."
          },
          {
            type: "paragraph",
            content: "Risk, üç koşulun bir arada bulunmasıyla oluşur: gevşek granüler zemin, sığ yeraltı su seviyesi (çoğu durumda 10 m'den sığ; değerlendirme genellikle ilk 20 m derinlik için yapılır) ve yeterince güçlü sarsıntı. Temiz kumlar kadar siltli kumlar ve düşük plastisiteli siltler de hassastır. Tespitte SPT/CPT tabanlı basitleştirilmiş yöntem (Seed-Idriss yaklaşımı) kullanılır: depremin oluşturduğu tekrarlı gerilme oranı (CSR), zeminin tekrarlı direnç oranı (CRR) ile karşılaştırılır ve derinlik boyunca güvenlik katsayısı hesaplanır. TBDY 2018 Bölüm 16.6, ilgili koşulları taşıyan sahalarda sıvılaşma değerlendirmesini zorunlu tutar; bu değerlendirme tamamlanmadan temel tasarımına geçilmemelidir."
          },
          {
            type: "list",
            title: "Sıvılaşmaya karşı yöntem matrisi",
            items: ["Vibro kompaksiyon: temiz, kohezyonsuz kumlarda relatif sıkılığı artırarak sıvılaşma direncini yükseltir", "Taş kolon (vibro replasman): sıkılaştırma ve drenajı birleştirir; siltli kumlarda en yaygın tercihtir", "Dinamik kompaksiyon: geniş ve yapılaşmamış sahalarda gevşek kum ve dolguların derin sıkıştırılması", "Jet grout veya DSM ile hücresel (kafes) düzen: sıvılaşabilir bölgeyi çevreleyerek kesme deformasyonlarını sınırlar", "Kompaksiyon enjeksiyonu: mevcut yapı altında zemini yer değiştirterek sıkıştırır", "Yeraltı su seviyesini düşürme ve deprem drenleri: doygunluğu ve boşluk suyu basıncı birikimini azaltır"]
          },
          {
            type: "paragraph",
            content: "Taş kolonun en yaygın sıvılaşma çözümü olmasının nedeni üçlü mekanizmasıdır: kolonlar drenaj yolunu kısaltarak deprem sırasında oluşan boşluk suyu basıncının hızla sönümlenmesini sağlar, imalat titreşimi çevre zeminin relatif sıkılığını artırır ve kolonların rijitliği deprem kesme gerilmelerinin bir bölümünü üstlenir. İyileştirme hedefi, yapı önem düzeyine ve saha koşullarına bağlı olarak genellikle N1,60 için 15-25 aralığında tanımlanır; CPT ile çalışılıyorsa eşdeğer uç direnci (qc) hedefleri belirlenir. Kesin hedef değerler projeye göre değişir. Kritik adım, iyileştirme sonrasında yapılan deneylerin sonuçlarıyla sıvılaşma analizinin yeniden koşulması ve hedeflenen güvenlik katsayısının sağlandığının sayısal olarak gösterilmesidir."
          },
          {
            type: "note",
            title: "Sıvılaşma riski olan arsaya bina yapılabilir mi?",
            content: "Evet. Zemin etüdüyle doğrulanmış uygun bir yer altı zemin iyileştirme yöntemi, rijit radye gibi uygun bir temel sistemiyle birleştirildiğinde sıvılaşma riskli sahalarda güvenli yapılaşma mümkündür. Uygulama detayları sitedeki sıvılaşma riskine karşı zemin güçlendirme makalesinde ele alınmıştır."
          }
        ]
      },
      {
        id: "yontem-secim-matrisi",
        title: "Zemin Türüne Göre Yöntem Seçimi: Karşılaştırma Matrisi ve Karar Ağacı",
        blocks: [
          {
            type: "paragraph",
            content: "Yöntem seçiminin ilk ekseni zemin türüdür. Temiz kum, siltli kum, silt, yumuşak kil, organik zemin/turba, kontrolsüz dolgu ve karstik ortamların her biri için yöntemler \"uygun / koşullu / uygun değil\" şeklinde derecelendirilir: örneğin vibro kompaksiyon temiz kumda uygunken silt oranı arttıkça koşullu hale gelir, kilde ise etkisizdir. İkinci eksen derinliktir: 0-3 m bandında yüzeysel kompaksiyon ve katkılı stabilizasyon; 3-10 m'de hızlı darbeli kompaksiyon (RIC), kütle karıştırma ve sığ kolonlar; 10-30 m'de jet grout, derin karıştırma (DSM), taş kolon ve düşey drenler (PVD); 30-50 m bandında ise derin jet grout, vibro kompaksiyon ve derin enjeksiyon değerlendirilebilir. Doğru yer altı zemin iyileştirme yöntemi bu iki eksenin kesişiminde aranır; sınır durumlarda saha deneyimi ve deneme imalatı belirleyici olur."
          },
          {
            type: "paragraph",
            content: "Seçim süreci bir karar ağacı gibi işletilebilir: zemin tipi → yeraltı su seviyesinin konumu → gereken iyileştirme derinliği → yapı yükü ve oturma toleransı → çevre kısıtları (titreşim, gürültü, komşu yapı hassasiyeti) → inşaat takvimi → bütçe → yöntem kısa listesi. ABD Federal Karayolu İdaresi'nin (FHWA) GEC-13 rehberi de benzer bir süreci adım adım sistematikleştirir: performans probleminin tanımlanması, saha ve zemin verisinin derlenmesi, aday teknolojilerin taranması, teknik eleme, maliyet-performans karşılaştırması ile şartname ve kalite kontrol planının hazırlanması bu sürecin ana başlıklarıdır."
          },
          {
            type: "list",
            title: "Tipik eşleştirmeler",
            items: ["Temiz, gevşek kum → vibro kompaksiyon", "Yumuşak kil + geniş saha + esnek takvim → PVD + sürşarjlı ön yükleme", "Yumuşak kil + dar takvim → DSM veya rijit inklüzyon", "Organik zemin ve turba → rijit kolon veya hafif dolgu çözümleri", "Kontrolsüz dolgu → dinamik kompaksiyon veya RIC (derinliğe ve çevre kısıtlarına göre)", "Karstik boşluklar → kompaksiyon (düşük mobiliteli) enjeksiyon", "Mevcut bina altı → jet grout veya reçine enjeksiyonu"]
          },
          {
            type: "warning",
            title: "Yanlış eşleştirmenin bedeli ağırdır",
            content: "Suya doygun kilde dinamik kompaksiyon işe yaramaz; çünkü boşluk suyu darbe hızında dışarı çıkamaz. İnce daneli zeminde normal çimentolu permeasyon enjeksiyonu dane aralarından geçemez. Çok yumuşak kilde kılıfsız taş kolon yeterli yanal destek bulamayıp şişerek kapasitesini yitirir. Bu tür yanlış seçimler hem bütçeyi tüketir hem de gerçekte var olmayan bir güvenlik hissi yaratır."
          },
          {
            type: "paragraph",
            content: "Gerçek projelerde yöntemler çoğu zaman tek başına değil kombine kullanılır: PVD + sürşarj + taş kolon üçlüsü yumuşak killerde oturmayı hem hızlandırır hem sınırlar; derin kazılarda jet grout, ankrajlı iksa ile birlikte çalışır; DSM kolonlarının üzerine geogrid donatılı yük aktarım platformu teşkil edilebilir. Nihai karar geoteknik mühendisinin sorumluluğundadır ve sağlıklı bir seçim ancak zemin etüdü, deneme imalatı ve gözlemsel yöntem üçlüsüyle doğrulanır. Tablo ve karar ağacı yalnızca kısa listeyi oluşturur; projeyi belirlemez."
          }
        ]
      },
      {
        id: "tasarim-parametreleri",
        title: "Tasarım Parametreleri: Derinlik, Çap, Aralık ve Hedef Değerler",
        blocks: [
          {
            type: "paragraph",
            content: "Yer altı zemin iyileştirme tasarımının ilk sorusu derinliktir ve üç kriterin en elverişsizi esas alınır: sağlam taşıyıcı tabakanın derinliği, temel gerilmelerinin etkili olduğu derinlik (yaklaşık olarak temel genişliğinin 1,5-2 katı) ve sıvılaşabilir ya da problemli tabakanın alt sınırı. Kolonlu yöntemlerde derinlik genellikle zayıf tabakayı tamamen geçip sağlam birime soketlenecek şekilde seçilir; asılı (yüzer) kolon çözümleri ancak ayrıntılı oturma analizleriyle gerekçelendirilebilir."
          },
          {
            type: "paragraph",
            content: "Kolon yerleşiminde üçgen veya kare karelaj kullanılır; üçgen düzen aynı aralıkta daha homojen bir iyileştirme sağlar. Tasarımın anahtar büyüklüğü alan ikame oranıdır: as = Akolon/Ahücre, yani bir kolonun kesit alanının etkilediği birim hücre alanına oranı. Tipik değerler %10-35 aralığındadır; oran büyüdükçe oturma azalır ancak maliyet artar. Hedef performans değerleri projeye göre belirlenir: tekil temellerde yaklaşık 25 mm, radye temellerde yaklaşık 50 mm izin verilebilir oturma yaygın kabullerdir; ancak bu sınırlar yapı türüne ve hasar duyarlılığına göre proje özelinde farklılaşır. Bunlara taşıma gücü güvenlik katsayısı ile deprem performansı için kompozit kayma dalgası hızı (Vs) ve N1,60 hedefleri eşlik eder."
          },
          {
            type: "list",
            title: "Yöntem bazlı özet parametre aralıkları",
            items: ["Jet grout: kolon çapı sisteme göre 0,6-2,5 m, enjeksiyon basıncı yaklaşık 300-600 bar, yaygın uygulama derinliği 25-30 m'ye kadar", "Derin karıştırma (DSM): çap 0,6-1,2 m, bağlayıcı dozajı 150-400 kg/m³, derinlik tipik olarak 25-30 m'ye kadar", "Taş kolon: çap 0,6-1,2 m, kolon aralığı 1,5-3,0 m, derinlik tipik olarak 20 m'ye, özel ekipmanla 30 m'ye kadar", "Düşey dren (PVD): aralık 1,0-2,5 m, derinlik tipik olarak 25-30 m; özel ekipmanla daha derin uygulanabilir", "Dinamik kompaksiyon: 10-30 ton tokmak; etki derinliği D = n·√(W·H) ampirik bağıntısıyla (n ≈ 0,3-0,6) tahmin edilir", "Vibro kompaksiyon: nokta karelajı 1,8-4,3 m, hedef relatif sıkılık Dr = %70-85", "Tüm aralıklar gösterge niteliğindedir; kesin değerler zemin etüdü ve deneme imalatıyla projeye özel belirlenir"]
          },
          {
            type: "note",
            title: "Deneme imalatı pazarlık konusu değildir",
            content: "Çap, dayanım, kompaksiyon enerjisi ve karelaj gibi tasarım parametreleri kâğıt üzerindeki değerlerdir; deneme sahası ve deneme kolonlarıyla sahada kalibre edilmeleri gerekir. Jet grout gibi yöntemlerde deneme kolonunun kazılarak çapının fiilen ölçülmesi, tasarım doğrulamasının en güvenilir yoludur."
          },
          {
            type: "paragraph",
            content: "Kavramsal bir örnek süreci somutlaştırır: 8 katlı bir bina, 12 m kalınlığında gevşek siltli kum ve 3 m derinlikte yeraltı suyu bulunan bir sahada sıvılaşma analizi, hedef relatif sıkılığı ve N1,60 değerini verir. Taş kolon seçilirse önce hedefe ulaştıracak alan ikame oranı hesaplanır (örneğin %15-20 mertebesi); 0,8 m çaplı kolonlar için bu oran yaklaşık 1,7-2,0 m'lik üçgen karelaja karşılık gelir. Kolon boyu 12 m'lik zayıf tabakayı geçecek şekilde seçilir; doğrulama planı, iyileştirme sonrası SPT/CPT deneylerini ve gerektiğinde kolon yükleme deneyini içerir. Buradaki rakamlar kavramsaldır; gerçek değerler zemin etüdü sonuçlarına göre projelendirilir."
          },
          {
            type: "paragraph",
            content: "Analiz tarafında birim hücre yöntemi ve kompozit malzeme parametreleri ön tasarımı, sonlu elemanlar modelleri (örneğin Plaxis) ise oturma ve gerilme dağılımının doğrulanmasını sağlar; gözlemsel yöntemle saha ölçümlerine göre tasarım güncellenir. Tüm bu içerik, TBDY 2018'e uygun formatta hazırlanan geoteknik rapora işlenir; proje müellifi ve yapı denetim mekanizması tasarımın resmi çerçevesini tamamlar. Sürecin planlama boyutu sitedeki zemin iyileştirme planlama sayfasında ayrıntılandırılmıştır."
          }
        ]
      },
      {
        id: "mevcut-yapi-altinda-iyilestirme",
        title: "Mevcut Yapı Altında Yer Altı Zemin İyileştirme (Underpinning)",
        blocks: [
          {
            type: "note",
            title: "Kısa cevap",
            content: "Underpinning (temel altı takviye), mevcut bir yapının temelini yeni yükler, komşu kazılar veya zemin kaynaklı oturmalar karşısında güvenli hale getirmek amacıyla temel altındaki zeminin veya temel sisteminin güçlendirilmesidir."
          },
          {
            type: "paragraph",
            content: "Klasik kademeli underpinning'de temel altı, yapı dengesini bozmamak için küçük panolar hâlinde sırayla kazılıp betonla doldurulur. Emek yoğun ve yavaş olan bu yöntem, günümüzde büyük ölçüde yerini mevcut yapı altında uygulanan yer altı zemin iyileştirme tekniklerine bırakmıştır. Kritik karar noktası şudur: Sorun yalnızca temel altındaki zeminin taşıma gücü veya oturması ise zemin iyileştirme tek başına yeterli olabilir; taşıyıcı sistemde kesit ya da donatı yetersizliği de varsa yapısal güçlendirme birlikte planlanmalıdır. Bu ayrım, yapısal değerlendirme raporu ile zemin etüdü birlikte okunarak yapılır."
          },
          {
            type: "paragraph",
            content: "Mevcut bina altında jet grout en yaygın çözümlerden biridir: Delgi, düşük tavan yüksekliğine uygun mini delgi makineleriyle bodrumdan düşey ya da bina kenarından eğimli olarak yapılır. Delgi eğiminin pratikte genellikle 10-20 derece ile sınırlı kalması, kenardan girilen kolonların temelin orta bölgesine ancak belirli bir derinlikte ulaşabilmesi anlamına gelir; geniş oturumlu yapılarda bu nedenle bodrum içi delgi veya iki yaklaşımın kombinasyonu planlanır. Hızlı oturma düzeltmede poliüretan reçine enjeksiyonu öne çıkar: Dakikalar içinde genleşen reçine, lazer nivelman ile eş zamanlı izlenerek yapıyı milimetre mertebesinde kontrollü biçimde kaldırabilir. Yöntem, klasik underpinning'in haftalar süren kazılı imalatına kıyasla kazısız uygulanır ve çoğu projede günler mertebesinde tamamlanır; ancak derin oturma mekanizmalarında ve yapısal kaynaklı problemlerde tek başına yeterli olmayabilir. Tünel ve derin kazı kaynaklı oturmalarda ise kompanzasyon enjeksiyonu kullanılır: Örneğin metro güzergâhı üzerindeki binaların altına, tünel ilerlemesiyle eş zamanlı enjeksiyon yapılarak oturma gerçek zamanlı telafi edilir."
          },
          {
            type: "list",
            title: "Bina kullanımdayken (oturulurken) uygulama ve yapı sağlığı takibi",
            items: ["Titreşimsiz veya düşük titreşimli yöntemler (jet grout, reçine/kompanzasyon enjeksiyonu, mini kazık) tercih edilir; vibro ve darbeli yöntemler mevcut yapı altında genellikle uygulanmaz.", "Mini kazık + jet grout kombinasyonunda jet grout zemini iyileştirirken mini kazıklar yükü derindeki sağlam tabakaya aktarır.", "Çalışma bölgesel ve kademeli planlanır; bina çoğu durumda tahliye edilmeden bölüm bölüm ilerlenebilir.", "Gürültü ve çalışma saati yönetimiyle bina sakinlerinin konforu korunur.", "Çatlak ölçerler (crackmetre) mevcut çatlakların açılıp kapanmasını sürekli izler.", "Hassas nivelman ve eğim (tilt) sensörleri düşey hareket ile dönmeyi kaydeder.", "Önceden tanımlı alarm eşikleri aşıldığında imalat durdurulur, tasarım gözden geçirilir."]
          },
          {
            type: "warning",
            title: "Her çatlamış bina kaldırılamaz",
            content: "Oturma düzeltme, taşıyıcı sistemi sağlam olup farklı oturma nedeniyle hasar görmüş yapılarda değerlendirilebilir. Ağır taşıyıcı sistem hasarında önce yapısal değerlendirme şarttır; kontrolsüz kaldırma, hasarlı kesitlere ek zorlama getirebilir. Düzeltme sonrasında yapı, projede tanımlanan izleme dönemi boyunca nivelmanla takip edilmelidir."
          },
          {
            type: "paragraph",
            content: "Kentsel dönüşüm bağlamında, riskli bulunan ancak yıkılması istenmeyen yapılarda temel altı takviye, yıkım-yeniden yapım senaryosuna alternatif olarak zemin etüdü ve yapısal analiz sonuçlarına göre değerlendirilebilmektedir; uygulanabilirlik kararı her yapı için ayrı verilmelidir. Bina ölçeğindeki detaylar için sitemizdeki binaları yıkmadan zemin güçlendirme, temel altı zemin güçlendirme ve kentsel dönüşümde zemin güçlendirme makalelerine göz atabilirsiniz."
          }
        ]
      },
      {
        id: "uygulama-adimlari-ve-ekipman",
        title: "Uygulama Adımları ve Ekipman: Etütten Doğrulama Raporuna",
        blocks: [
          {
            type: "paragraph",
            content: "Başarılı bir yer altı zemin iyileştirme uygulaması, tek tek makinelerin değil uçtan uca kurgulanmış bir sürecin ürünüdür. Süreç zemin etüdüyle başlar, doğrulama raporuyla biter; ara adımların atlanması hem kalite hem sözleşme riskini büyütür. Aşağıdaki akış, projelerin büyük bölümünde geçerli olan tipik sıralamayı özetler."
          },
          {
            type: "list",
            title: "Uçtan uca 8 adım",
            items: ["Zemin etüdü: sondajlar, SPT/CPT deneyleri ve jeofizik ölçümler", "Geoteknik rapor: zemin profili, tasarım parametreleri ve problem tanımı", "Yöntem seçimi: zemin türü, hedef performans ve bütçenin birlikte değerlendirilmesi", "Tasarım projesi ve onay: kolon çapı-aralığı-derinliği, hesap raporu, denetim onayı", "Deneme imalatı: parametrelerin sahada test kolonlarıyla doğrulanması", "Ana imalat: onaylı parametrelerle seri üretim", "Eşzamanlı kalite kontrol: imalatla birlikte yürüyen kayıt ve testler", "Doğrulama raporu ve teslim: sonuçların hedef değerlerle karşılaştırıldığı kapanış raporu"]
          },
          {
            type: "paragraph",
            content: "Saha hazırlığı çoğu zaman küçümsenen ancak takvimi belirleyen adımdır: Ağır delgi makineleri için stabil çalışma platformu ve erişim yolları, enerji ve su temini, çimento silosu ile mikser-ajitatör istasyonu, jet grout geri dönüş harcı için çökeltme havuzları ve çevre koruma önlemleri imalat başlamadan kurulur. İmalat öncesinde mevcut altyapı hatlarının (elektrik, su, doğal gaz, kanalizasyon) konumları belirlenmeli, delgi noktaları gerekirse buna göre revize edilmelidir. Ekipman parkı yönteme göre değişir: Fore kazık ve jet grout işlerinde paletli delgi makineleri ile yüksek basınçlı enjeksiyon pompaları (jet grout için tipik olarak 300-600 bar aralığında; sistem ve projeye göre değişir), taş kolonda vibroflot üniteleri, dinamik kompaksiyonda ağır vinç ve tokmak, ön yükleme projelerinde düşey dren (PVD) serim makinesi kullanılır."
          },
          {
            type: "note",
            title: "İmalat kaydı = kalite kanıtı",
            content: "Modern delgi makinelerindeki otomatik veri kayıt (DAQ) sistemleri derinlik, basınç, debi, dönüş ve çekme hızını gerçek zamanlı kaydeder; akustik tabanlı kolon çapı ölçüm teknolojileri jet grout kolon geometrisinin doğrulanmasına yardımcı olur. Bu kayıtlar doğrulama raporunun temel ekidir."
          },
          {
            type: "paragraph",
            content: "İmalat sıralamasında primer-sekonder (atlamalı) dizilim esastır: Önce aralıklı primer kolonlar imal edilir; taze kolon komşuluğunda priz için bekleme süresi bırakıldıktan sonra aradaki sekonder kolonlar tamamlanır. Kazı çevresi işlerinde genellikle dıştan içe doğru çalışılır. Saha organizasyonunda geoteknik mühendisi tasarım-uygulama uyumunu, saha şefi günlük üretimi, operatörler makine parametrelerini izler; yapı denetim kuruluşu ve müşavir bağımsız kontrolü üstlenir. Görev dağılımı ve numune akışının detayları saha denetimi ve numune testleri makalemizde ele alınmıştır."
          },
          {
            type: "warning",
            title: "Saha riskleri kayıt altına alınmalı",
            content: "Yağış ve kış koşulları, beklenmeyen yer altı suyu veya artezyen basıncı, delgi kaçakları ve şerbet kayıpları imalatı kesintiye uğratabilir. Her kesinti, nedeni ve alınan önlemle birlikte imalat kayıtlarına işlenmeli; plan dışı zemin koşullarıyla karşılaşıldığında mutlaka tasarımcıya danışılmalıdır."
          }
        ]
      },
      {
        id: "kalite-kontrol-testleri",
        title: "Kalite Kontrol ve Doğrulama Testleri: Başarı Nasıl Kanıtlanır?",
        blocks: [
          {
            type: "note",
            title: "Kısa cevap",
            content: "Başarı iki ayakla kanıtlanır: imalat sırasında tutulan üretim kalite kontrol kayıtları (parametre kayıtları, malzeme testleri) ve imalat sonrası iyileştirilmiş zeminde yapılan kabul/performans testleri. Biri diğerinin yerine geçmez; ikisi birlikte doğrulama raporunu oluşturur."
          },
          {
            type: "paragraph",
            content: "Çimento esaslı kolonlarda en yaygın kabul aracı karottur ve iki tür birbirinden ayrılır: Tam boy karot kolon boyunca süreklilik ve homojenliği gösterirken, kafa karotu kolonun üst bölgesinden alınan numuneyle erken dayanım hakkında hızlı fikir verir. Karot verimi (alınabilen sağlam karot yüzdesi) kolon bütünlüğünün dolaylı göstergesidir; karot numuneleri üzerinde serbest basınç (UCS) deneyi yapılarak sonuçlar projede tanımlı hedef dayanımla karşılaştırılır."
          },
          {
            type: "paragraph",
            content: "Yükleme deneyleri performansı doğrudan ölçer: Tekil kolon yükleme testi kolonun proje yükü altındaki davranışını, plaka yükleme deneyi ise iyileştirilmiş yüzeyin deformasyon modülünü (Ev2) verir. Hedef Ev2 değeri projeye göre tanımlanır; saha ve dolgu uygulamalarında 40 MPa mertebesindeki eşikler sık kullanılan örneklerdendir. Kolon gruplarında grup etkisi ayrıca doğrulanır (detaylar kazık yükleme testleri sayfamızda). Sıkıştırma yöntemlerinin ana kanıtı penetrasyon karşılaştırmasıdır: İyileştirme öncesi ve sonrası SPT/CPT profilleri üst üste çizilerek, örneğin sıvılaşma projelerinde N1,60 ≥ 15 gibi projeye özgü belirlenen hedeflere ulaşılıp ulaşılmadığı kontrol edilir. Kompaksiyon yöntemlerinde test, yaşlanma (aging) etkisi nedeniyle imalattan tipik olarak 7-28 gün sonra yapılmalıdır; erken test yanıltıcı düşük sonuç verebilir. Jeofizik tarafta MASW ile kompozit kayma dalgası hızındaki (Vs) artış ölçülür; crosshole sismik ölçümler ve PIT (süreklilik) testi kolon bütünlüğünü kontrol eder."
          },
          {
            type: "list",
            title: "Yönteme özel kalite kontrol araçları",
            items: ["Enjeksiyon: alım (şerbet tüketimi) grafikleri ve Lugeon geçirimlilik testi", "Taş kolon: vibroflot ampermetre kaydı ve agrega tüketim takibi", "Jet grout / DSM: imalat sırasında alınan yaş numune (wet grab) küplerinde basınç deneyi", "Jet grout: karot + kolon yükleme deneyi, standart doğrulama kombinasyonudur", "Kompaksiyon yöntemleri: bekleme süresi sonrası önce/sonra SPT-CPT ve plaka yükleme", "Tüm yöntemler: DAQ imalat parametre kayıtlarının şartname değerleriyle karşılaştırılması"]
          },
          {
            type: "paragraph",
            content: "Yer altı zemin iyileştirme işlerinde kabul kriterleri sözleşme aşamasında yazılı hale getirilmelidir: hangi test, metraj başına kaç adet ve hangi hedef değerle yapılacak; başarısızlık hâlinde telafi imalatı kimin sorumluluğunda olacak. \"Zemin iyileştirmede garanti verilir mi?\" sorusunun teknik cevabı da budur: Süresiz ve genel bir garanti değil, ölçülebilir hedef değerlerin bağımsız testlerle kanıtlanması taahhüt edilebilir. Uygulama detayları jet grout kalite kontrol ve zemin kalite kontrol standartları makalelerimizde derinleştirilmiştir."
          }
        ]
      },
      {
        id: "maliyet-sure-ve-planlama",
        title: "Maliyeti Belirleyen Faktörler, Süre ve İnşaat Takvimine Etkisi",
        blocks: [
          {
            type: "paragraph",
            content: "Yer altı zemin iyileştirme maliyeti tek bir birim fiyatla ifade edilemez; her proje kendi zemin profili, yapı yükleri ve saha koşullarıyla ayrı fiyatlandırılır. Bununla birlikte iyileştirme kalemi, toplam inşaat bütçesi içinde çoğunlukla sınırlı bir paya sahiptir ve erken aşamada yaptırılan kapsamlı zemin etüdü bu payı daha da küçültür. İmalat sırasında ortaya çıkan \"sürpriz zemin\" ise her zaman en pahalı zemindir: projede öngörülmeyen tabakalar revizyona, gecikmeye ve telafi imalatlarına yol açarak asıl bütçe sapmasını yaratır."
          },
          {
            type: "list",
            title: "Maliyeti belirleyen 8 faktör",
            items: ["Seçilen yöntem: ekipman parkı, bağlayıcı tüketimi ve imalat hızı yöntemden yönteme büyük fark yaratır.", "İyileştirme derinliği: derinlik arttıkça metraj ve delgi süresi birlikte büyür.", "Kolon sayısı ve aralığı: m² başına düşen imalat metrajını doğrudan belirler.", "Zemin türü ve delgi zorluğu: sert bantlar, bloklu dolgular ve yeraltı engelleri ilerleme hızını düşürür.", "Yeraltı suyu koşulları: susuzlaştırma ihtiyacı ve imalat güçlükleri ek maliyet kalemleri oluşturur.", "Mobilizasyon-demobilizasyon: küçük sahalarda toplam bedel içindeki payı belirgin biçimde artar.", "Çimento ve agrega piyasası: bağlayıcı dozajı yüksek yöntemler fiyat dalgalanmalarına daha duyarlıdır.", "Saha erişimi ve çalışma kısıtları: dar alan, çalışma saati sınırlamaları ve şehir içi lojistik imalat verimini etkiler."]
          },
          {
            type: "paragraph",
            content: "Kavramsal bir maliyet merdiveni — projeye göre değişmek kaydıyla — şöyle kurulabilir: yüzeysel kompaksiyon ve katkı stabilizasyonu < ön yükleme + PVD < vibro yöntemler/taş kolon < derin karıştırma (DSM) < jet grout ve rijit inklüzyon < zemin dondurma. \"İyileştirme mi, kazıklı temel mi?\" karşılaştırması ise tekil imalat fiyatı üzerinden değil, toplam temel sistemi maliyeti üzerinden yapılmalıdır: kazık + kazık başlığı + bağ kirişi toplamı, zayıf tabakanın makul derinlikte sonlandığı ve yüklerin orta düzeyde kaldığı projelerde yeraltı zemin iyileştirme + radye kombinasyonundan pahalıya gelebilir; çok derin zayıf tabakalarda ve ağır yüklerde ise denge kazıklı çözüm lehine döner. Nihai karar, her iki alternatifin aynı performans hedefine göre boyutlandırılıp karşılaştırılmasıyla verilmelidir."
          },
          {
            type: "paragraph",
            content: "Süre tarafında yöntem bazında düşünmek gerekir: jet grout ve DSM'de tek rig, zemin koşullarına ve derinliğe bağlı bir günlük kolon kapasitesiyle çalışır; orta ölçekli bir konut parselinde imalat tipik olarak birkaç hafta, büyük sahalarda birkaç ay sürebilir. Dinamik kompaksiyon geniş sahalarda haftalar mertebesinde ilerler; ön yükleme + PVD senaryosunda ise konsolidasyon için — zemin profiline ve dren aralığına bağlı olarak çoğu projede 3-12 ay mertebesinde — bir bekleme süresi takvime eklenir. Bu nedenle iyileştirme, ruhsat–hafriyat–iksa–temel imalat zincirine erkenden yerleştirilmeli; kışa denk gelen enjeksiyon ve dolgu işleri don ve yağış riskleri gözetilerek planlanmalıdır. Ayrıntılar için zemin iyileştirme planlama ve zemin güçlendirme maliyeti sayfalarımıza bakabilirsiniz."
          },
          {
            type: "note",
            title: "İyileştirme biter bitmez inşaata başlanır mı?",
            content: "Çimento esaslı kolonlarda tasarım dayanımı tipik olarak 28 günde gelişir; 7. gün dayanımı ve süreklilik kontrolleri gibi ara testler olumlu sonuç verirse birçok projede kademeli yüklemeye daha erken izin verilebilir. Tam yüke geçiş ise doğrulama testleri sonuçlanmadan planlanmamalıdır; bu karar her zaman geoteknik tasarımcının onayına bağlıdır."
          },
          {
            type: "list",
            title: "Teklif alırken kontrol listesi",
            items: ["Metraj tanımı: ödeme kolon boyu üzerinden mi, delgi boyu üzerinden mi yapılacak; boş delgi nasıl ölçülüyor?", "Kabul kriterleri: hedef dayanım, çap ve süreklilik değerleri sözleşmede sayısal olarak tanımlı mı?", "Kalite kontrol kapsamı: test türleri, sayısı ve bedelinin hangi tarafa ait olduğu net mi?", "Geri dönüş harcı: spoil bertarafı teklife dahil mi, ayrı kalem mi?", "Telafi hükümleri: kabul kriterini sağlamayan imalatlar için ilave imalat/telafi maddesi var mı?"]
          }
        ]
      },
      {
        id: "cevresel-etkiler-ve-komsu-yapilar",
        title: "Çevresel Etkiler, Komşu Yapılar ve Şehir İçi Uygulamalar",
        blocks: [
          {
            type: "paragraph",
            content: "Şehir içinde yer altı zemin iyileştirme yaparken teknik başarı kadar çevresel etki yönetimi de belirleyicidir. Yöntemler gürültü ve titreşim açısından belirgin biçimde ayrışır: dinamik kompaksiyon en yüksek etki sınıfındadır ve mevcut yapılara — projeye ve zemin koşullarına göre değişmekle birlikte — genellikle onlarca metre mertebesinde emniyet mesafesi bırakılarak uygulanır; vibro yöntemler orta düzeyde titreşim üretir; jet grout, DSM, enjeksiyon ve reçine uygulamaları ise kayda değer titreşim yaratmadıkları için tarihi ve hassas yapıların hemen yanında dahi değerlendirilebilir. Bu sıralama, şehir içi projelerde yöntem seçiminin ilk filtresi olarak kullanılır."
          },
          {
            type: "paragraph",
            content: "Titreşim riski sezgiyle değil ölçümle yönetilir: komşu yapılar için tepe parçacık hızı (PPV) limitleri tanımlanır ve imalat boyunca sismograflarla sürekli kayıt alınır; tarihi bina, hastane gibi hassas yapılar için bu eşikler ayrıca sıkılaştırılır. Uygulama öncesinde komşu yapılarda fotoğraflı röleve ve ön hasar tespit tutanağı hazırlanması hem mühendislik hem hukuki koruma sağlar; olası bir uyuşmazlıkta mevcut çatlakların imalattan önce de var olduğunu kanıtlamanın en güvenilir yolu budur."
          },
          {
            type: "note",
            title: "Komşu binaya zarar verir mi?",
            content: "Dürüst cevap şudur: risk hiçbir zaman sıfır değildir; ancak zemine uygun yöntem seçimi, PPV izleme ve ön hasar tespiti ile yönetilebilir düzeye indirilir. Bitişik nizamda titreşimsiz yöntemler (jet grout, DSM, enjeksiyon) ilk tercih olarak değerlendirilir."
          },
          {
            type: "warning",
            title: "Kontrolsüz YAS düşürmeyin",
            content: "Yeraltı su seviyesinin hızlı ve kontrolsüz düşürülmesi, komşu parsellerde konsolidasyon oturmalarını tetikleyebilir. Kademeli düşürme, gözlem kuyularıyla seviye takibi ve gerekirse reşarj (geri besleme) kuyuları projeye dahil edilmelidir."
          },
          {
            type: "paragraph",
            content: "Jet grout uygulamalarında ciddi hacimde geri dönüş harcı (spoil) oluşur; bu harç çökeltme havuzlarında toplanmalı, taşınması ve bertarafı çevre mevzuatına uygun biçimde yürütülmelidir. Şehir içi lojistik de plana dahil edilmelidir: dar sokaklarda standart rigler yerine mini riglerle çalışmak, belediyelerin çalışma saati sınırlamalarına uymak, beton ve harç trafiğini yaya güvenliğiyle birlikte yönetmek gerekir. Ankara ve diğer büyükşehirlerdeki bitişik nizam uygulamalarında bu kısıtlar çoğu zaman ekipman ve yöntem seçimini doğrudan belirler."
          },
          {
            type: "list",
            title: "Düşük karbonlu iyileştirme seçenekleri",
            items: ["Derin karıştırma (DSM): zemini yerinde kullandığı için hafriyat ve nakliye hacmini azaltır.", "Uçucu kül ve yüksek fırın cürufu katkılı bağlayıcılar: çimento klinker payını düşürür.", "Biyokalsifikasyon (MICP) gibi gelişmekte olan biyolojik stabilizasyon yöntemleri.", "Elektrikli ve hibrit delgi ekipmanına geçiş: şantiye emisyonunu ve gürültüyü birlikte azaltır.", "Taş kolon dolgusunda geri kazanılmış agrega/beton kullanımı değerlendirilebilir."]
          }
        ]
      },
      {
        id: "turkiyede-bolgesel-zeminler-ve-sik-hatalar",
        title: "Türkiye'de Bölgesel Zemin Koşulları ve Sık Yapılan Hatalar",
        blocks: [
          {
            type: "paragraph",
            content: "Türkiye'de yeraltı zemin iyileştirme ihtiyacı bölgeden bölgeye farklı biçimlerde ortaya çıkar. Ankara'da kalın ve sert \"Ankara kili\" çoğu yapı için elverişli bir taban oluşturur; ancak şişme potansiyelli killer ile havza kenarlarındaki kontrolsüz dolgular yüzeysel temeller için risk üretir. Bu koşullarda kireç stabilizasyonu, derin karıştırma (DSM) ve gerektiğinde fore kazıklı çözümler öne çıkar. YER6'nın Ankara merkezli saha deneyimi, bu kil profillerinin mevsimsel nem hareketlerine ve dolgu geçişlerine nasıl tepki verdiğini yerinde gözlemleme imkanı sağlamıştır."
          },
          {
            type: "paragraph",
            content: "İstanbul'da eski dere yatakları, kıyı dolguları ve yıllar içinde kontrolsüz biriktirilmiş hafriyat dolguları, özellikle kentsel dönüşüm projelerinde temel altı iyileştirme ihtiyacını gündeme getirir. İzmir'de Bayraklı-Karşıyaka hattındaki derin ve yumuşak alüvyon havzası, 2020 Sisam (Samos) depreminde zemin büyütmesinin merkez üssünden uzakta bile ağır hasar yaratabildiğini göstermiştir. Marmara'da ise 1999 depreminde Adapazarı'nda yaşanan yaygın sıvılaşma, yeraltı su seviyesinin yüksek olduğu ova zeminlerinde taş kolon ve vibro çözümlerinin öne çıkmasının başlıca nedenidir."
          },
          {
            type: "paragraph",
            content: "2023 Kahramanmaraş-Hatay depremleri, ova zeminlerinde sıvılaşma ve aşırı oturmanın yapısal hasarı nasıl büyüttüğünü bir kez daha ortaya koydu; yeniden imar sürecinde zemin iyileştirme fiilen standart uygulama haline gelmektedir. Karadeniz'de dar vadi tabanlarındaki dolgular ve şev stabilitesi sorunları, Konya-İç Anadolu hattında ise obruk ve karstik boşluk riski — boşluk dolgu enjeksiyonu ihtiyacıyla birlikte — bölgesel gündemleri oluşturur. Bu tablo, yöntem seçiminin ülke genelinde geçerli tek bir reçeteyle değil, bölgesel zemin modeli ve parsel ölçeğindeki etüt verisiyle yapılması gerektiğini gösterir."
          },
          {
            type: "list",
            title: "Sahada en sık yapılan 6 hata",
            items: ["Yetersiz veya \"kopyala-yapıştır\" zemin etüdüyle yöntem seçmek.", "Deneme kolonunu ve deneme sahasını bütçeden kırpmak.", "Kalite kontrol testlerini masraf olarak görüp kapsamını daraltmak.", "Zemin-yöntem uyumsuzluğu: doygun kilde dinamik kompaksiyon veya ince daneli zeminde standart çimentoyla permeasyon enjeksiyonu denemek.", "Komşu yapılarda ön hasar tespiti yapmadan imalata başlamak.", "Kabul kriteri tanımlamadan yalnızca en düşük teklifi esas almak."]
          },
          {
            type: "warning",
            title: "Zinciri atlamayın",
            content: "Etüt → tasarım → deneme → imalat → doğrulama sıralaması bir formalite değil, yer altı zemin iyileştirmenin güvence mekanizmasıdır. Bu zincirin herhangi bir halkasını atlamak, görünürdeki tasarrufu telafi imalatlarıyla misliyle geri ödetebilir; iş, geoteknik alanında uzman bir ekibe emanet edilmelidir."
          },
          {
            type: "note",
            title: "Sahanız için değerlendirme",
            content: "Parselinizin bölgesel zemin profili ve yapı yükleriniz için uygun yaklaşım, ancak yerinde inceleme ve etüt verisiyle netleşir. YER6'dan saha incelemesi ve projeye özel değerlendirme talep ederek süreci doğru adımla başlatabilirsiniz."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Yer altı zemin iyileştirme nedir?",
        answer: "Yer altı zemin iyileştirme; taşıma kapasitesi yetersiz, aşırı oturma veya sıvılaşma riski taşıyan zayıf zeminlerin mühendislik özelliklerini yerinde (in-situ) iyileştirmek amacıyla yapılan derin geoteknik müdahalelerdir. Bu süreçte zemin kazılıp değiştirilmez; bunun yerine jet grout, DSM, taş kolon veya enjeksiyon gibi tekniklerle zemin yapısı kalıcı olarak güçlendirilir."
      },
      {
        question: "Yer altı zemin iyileştirme nasıl yapılır?",
        answer: "Uygulanacak yönteme göre saha hazırlığı yapıldıktan sonra delgi makineleri ile hedef derinliğe kadar inilir. Jet grout veya enjeksiyon yöntemlerinde yüksek basınçlı çimento enjekte edilirken; DSM'de mekanik karıştırma, taş kolonda ise agreganın vibrasyonla sıkıştırılması esasına göre imalat yapılır. Son aşamada ise testlerle imalatın kalitesi doğrulanır."
      },
      {
        question: "Yer altı zemin iyileştirme ile yüzeysel zemin iyileştirme arasındaki fark nedir?",
        answer: "Yüzeysel zemin iyileştirme genellikle ilk 0-3 metre derinlikteki tabakaları kapsar ve silindirle sıkıştırma, kireç/çimento serimi gibi basit işlemlerle yapılır. Yer altı (derin) zemin iyileştirme ise 3 metreden başlayıp 30-50 metre derinliğe kadar ulaşabilen ve özel makine parkı gerektiren jet grout, DSM, derin kompaksiyon gibi ileri mühendislik uygulamalarını içerir."
      },
      {
        question: "Zemin iyileştirme ile zemin güçlendirme arasındaki fark nedir?",
        answer: "Zemin iyileştirme zeminin kendi parametrelerini (sıkılık, geçirimsizlik, vb.) kalıcı olarak düzeltmeyi hedefler. Zemin güçlendirme (veya takviye) ise zemine taş kolon, ankraj veya zemin çivisi gibi yük taşıyan rijit elemanlar ekleyerek kompozit bir yapı oluşturulması prensibine dayanır; her iki kavram da genellikle zemin ıslahı şemsiyesi altında yer alır."
      },
      {
        question: "Zemin iyileştirme neden yapılır?",
        answer: "Zayıf zeminlerin üzerine inşa edilecek yapıların yüklerini güvenle taşımasını sağlamak, deprem esnasında oluşabilecek sıvılaşma riskini ortadan kaldırmak ve izin verilebilir limitlerin üzerindeki toplam ya da farklı oturmaları engellemek için yapılır. Böylece hem can güvenliği sağlanır hem de üst yapıda oturma kaynaklı yapısal hasarların önüne geçilir."
      },
      {
        question: "Hangi zeminler iyileştirme gerektirir?",
        answer: "Gevşek kum ve siltler, yumuşak veya normal konsolide killer, organik içeriği yüksek bataklık zeminler (turbalar), kontrolsüz yapay dolgular ve karstik boşluk içeren zeminler iyileştirme gerektiren başlıca zayıf zemin tipleridir. Bu zeminlerin tespit edilmesi ve sınırlarının belirlenmesi saha sondajları ve laboratuvar testleriyle netleştirilir."
      },
      {
        question: "Zemin iyileştirme ne zaman zorunlu olur?",
        answer: "Yapılan zemin etüt raporlarında taşıma gücünün yetersiz çıkması, deprem sıvılaşma analizinde güvenlik katsayısının kritik sınırın altında kalması veya yapının oturma limitlerini aşacağının hesaplanması durumunda zorunlu olur. Ayrıca TBDY 2018 standartları kapsamında ilgili yerel idareler ruhsat aşamasında iyileştirme projelerini yasal olarak zorunlu tutmaktadır."
      },
      {
        question: "TBDY 2018'e göre hangi zemin sınıflarında (ZE/ZF) iyileştirme gerekir?",
        answer: "Yönetmeliğe göre yumuşak killi ve gevşek kumlu profilleri içeren ZE zemin sınıfında ve sıvılaşabilir ya da sahaya özel analiz gerektiren ZF zemin sınıfında geoteknik önlemler alınması gerekir. Bu sınıflardaki zeminlerde geoteknik raporun bulguları doğrultusunda temel altı zemin iyileştirme veya kazıklı temel tasarımı yasal ve teknik bir zorunluluktur."
      },
      {
        question: "Zemin etüdü olmadan zemin iyileştirme yapılabilir mi?",
        answer: "Hayır, zemin etüdü ve saha sondaj verileri olmadan zemin iyileştirme projelendirmesi ve imalatı kesinlikle yapılamaz. Zayıf tabakaların derinliği, yeraltı suyu seviyesi, SPT darbe sayıları ve zemin laboratuvar parametreleri bilinmeden seçilecek herhangi bir yöntem veya derinlik, yapıda ağır hasarlara ve yüksek maliyet kayıplarına yol açacaktır."
      },
      {
        question: "Zemin iyileştirme yöntemine kim karar verir?",
        answer: "Zemin etüt verilerini ve üst yapı yüklerini inceleyen, geoteknik mühendisliği alanında uzmanlaşmış inşaat mühendisleri (geoteknik uzmanları) karar verir. Yöntem seçimi; zemin profilinin dane dağılımına, yeraltı suyu durumuna, çevresel kısıtlara, iş programına ve projenin toplam bütçe analizine göre bilimsel hesaplamalarla netleştirilir."
      },
      {
        question: "Yer altı zemin iyileştirme kaç metre derinliğe kadar yapılabilir?",
        answer: "Kullanılan yönteme ve makine parkına bağlı olarak tipik olarak 5 metreden 35-40 metre derinliğe kadar yapılabilmektedir. Örneğin jet grout ve DSM yöntemlerinde 20-30 metrelik derinlikler yaygın olarak taranırken, dinamik kompaksiyon gibi sıkıştırma yöntemlerinde etki derinliği daha sınırlı kalabilmektedir."
      },
      {
        question: "İyileştirme derinliği neye göre belirlenir?",
        answer: "İyileştirme derinliği, zemin etüt raporunda belirlenen zayıf, gevşek ve sıvılaşabilir tabakaların kalınlığına ve bu tabakaların altında yer alan sağlam, taşıyıcı ana kaya veya sıkı tabakanın derinliğine göre belirlenir. Tasarım mühendisi, temel gerilmelerinin sönümlendiği derinliği de hesaba katarak iyileştirme boyunu kesinleştirir."
      },
      {
        question: "Jet grout nedir ve hangi zeminlerde uygulanır?",
        answer: "Jet grout, yüksek basınçlı çimento şerbetinin nozullardan püskürtülerek zemini kesmesi ve onunla karışarak zemin-çimento kolonları oluşturması yöntemidir. Kumlu, siltli ve killi zeminler ile kontrolsüz yapay dolgularda başarıyla uygulanabilir; iri kaya blokları içeren zeminler dışında en geniş kullanım alanına sahip zemin iyileştirme tekniğidir."
      },
      {
        question: "Jet 1, Jet 2 ve Jet 3 sistemleri arasındaki fark nedir?",
        answer: "Jet 1 sisteminde sadece çimento enjekte edilerek 0.6-1.0 m arası kolonlar oluşturulur. Jet 2 sisteminde enjeksiyona basınçlı hava eklenerek kolon çapı 1.0-1.8 m aralığına çekilir. Jet 3 sisteminde ise su jeti, hava jeti ve çimento şerbeti bir arada kullanılarak 1.5-2.5 m ve üzeri çapta büyük kolonlar üretilebilir."
      },
      {
        question: "Jet grout kolonu kazık mıdır?",
        answer: "Hayır, jet grout kolonları fore kazıklar gibi betonarme yapısal taşıyıcı elemanlar değildir. İçlerinde çelik donatı bulunmaz; bu kolonlar zeminin taşıma gücünü ve deformasyon modülünü artırarak zemini 'iyileştirmeyi' amaçlar. Yük taşıma mekanizmaları ve yapısal kapasiteleri fore kazıklardan farklıdır."
      },
      {
        question: "Derin karıştırma (DSM) ile jet grout arasındaki fark nedir?",
        answer: "Jet grout zemin kesme işlemini yüksek basınçlı sıvı jeti ile yaparken; derin karıştırma (DSM) zemin karıştırma işlemini doğrudan mekanik paletlerle gerçekleştirir. Bu nedenle DSM'de kolon geometrisi daha öngörülebilir, çimento sarfiyatı ve geri dönüş harcı (spoil) miktarı ise jet grout'a kıyasla çok daha azdır."
      },
      {
        question: "Taş kolon ne işe yarar ve hangi derinliğe kadar uygulanır?",
        answer: "Taş kolonlar, açılan kuyulara agrega doldurulup sıkıştırılmasıyla oluşturulur; zemin taşıma kapasitesini artırır, oturmayı azaltır ve yüksek geçirgenliğiyle deprem anında suyun hızla tahliye olmasını sağlayarak sıvılaşmayı önler. Genellikle 15 ila 25 metre derinliğe kadar güvenle uygulanabilmektedir."
      },
      {
        question: "Vibro kompaksiyon ile taş kolon (vibro replasman) arasındaki fark nedir?",
        answer: "Vibro kompaksiyonda zemine dışarıdan herhangi bir agrega veya çimento eklenmez; probun titreşimiyle mevcut gevşek kumlu zemin sıkıştırılır. Taş kolonda (vibro replasman) ise prob vasıtasıyla zeminde açılan boşluğa agrega (kırma taş) ilave edilerek yeni bir taşıyıcı kolon elemanı imal edilir."
      },
      {
        question: "Dinamik kompaksiyon hangi zeminlerde işe yarar, hangilerinde yaramaz?",
        answer: "Dinamik kompaksiyon gevşek kumlar, çakıllar ve kontrolsüz yapay dolgularda yüksek verimle çalışır; boşluk suyu basıncının hızla sönümlendiği zeminlerde etkilidir. Buna karşın su içeriği yüksek, ince daneli ve doygun killi zeminlerde boşluk suyunun hızlı tahliyesi mümkün olmadığı için bu yöntem başarılı sonuç vermez."
      },
      {
        question: "Ön yükleme (sürşarj) yöntemi nasıl çalışır ve ne kadar sürer?",
        answer: "İnşaat öncesinde zemin üzerine tasarlanan yapı yüküne eşdeğer veya daha fazla ağırlıkta geçici toprak dolgu serilerek zayıf killi zeminin oturmalarını önceden yapması sağlanır. Bu süreç zemin geçirimliliğine bağlı olarak genellikle 3 ila 9 ay arasında sürer; hedeflenen konsolidasyon tamamlanınca dolgu kaldırılır."
      },
      {
        question: "PVD (fitil dren) konsolidasyonu ne kadar hızlandırır?",
        answer: "Prefabrik düşey drenler (PVD), killi zeminlerdeki suyun tahliye yolunu kısaltarak konsolidasyon süresini yıllardan aylara indirir. Fitil dren kullanılmayan bir sahada 5-10 yılda tamamlanacak oturma süreci, fitil dren ve ön yükleme dolgusu kombinasyonuyla 2 ila 4 ay gibi kısa bir sürede tamamlanabilir."
      },
      {
        question: "Rijit inklüzyon (CMC) ile kazık arasındaki fark nedir?",
        answer: "Rijit inklüzyonlar (CMC), üst yapıya doğrudan bağlanmayan, zemin özelliklerini iyileştirmek için tasarlanan çeliksiz beton kolonlerdir; yapı yükleri rijit inklüzyonlara üstteki yük dağıtım platformu (LTP) aracılığıyla aktarılır. Kazıklar ise yapı temeline doğrudan bağlanarak tüm yükü doğrudan kendi gövdeleriyle derine taşır."
      },
      {
        question: "Killi zeminlerde hangi iyileştirme yöntemi uygundur?",
        answer: "Killerde su tahliyesi zor olduğu için jet grout, derin karıştırma (DSM) ve rijit inklüzyon (CMC) gibi çimento bağlayıcılı yöntemler ile fitil dren destekli ön yükleme uygulamaları en uygun çözümlerdir. Sıkıştırma amaçlı vibro kompaksiyon veya dinamik kompaksiyon killi zeminlerde etkisizdir."
      },
      {
        question: "Kumlu zeminlerde hangi iyileştirme yöntemi uygundur?",
        answer: "Gevşek kumlu zeminlerde titreşimle sıkıştırma sağlayan vibro kompaksiyon, taş kolon (vibro replasman) ve dinamik kompaksiyon yöntemleri son derece etkilidir. Ayrıca çimento esaslı enjeksiyon ve jet grout uygulamaları da kum taneleri arasındaki boşlukları doldurarak mukavemet artışı sağlar."
      },
      {
        question: "Dolgu zeminlerde hangi yöntem uygundur?",
        answer: "Kontrolsüz yapay dolguların heterojen yapısı nedeniyle dinamik kompaksiyon (geniş alanlarda) veya jet grout (dar alanlarda ve bina altlarında) en çok tercih edilen yöntemlerdir. Dolgunun kalınlığına ve moloz içeriğine göre enjeksiyon veya DSM uygulamaları da değerlendirilebilir."
      },
      {
        question: "Organik ve turba zeminlerde iyileştirme yapılabilir mi?",
        answer: "Evet, ancak bu zeminler yüksek su içeriği ve yüksek asidite nedeniyle özel yaklaşımlar gerektirir. Çimento hidratasyonunu bozmayacak özel bağlayıcı katkılı DSM (kuru karıştırma) veya jet grout kolonları ile rijit inklüzyonlar bu tip zeminlerde taşıma kapasitesi oluşturmak için kullanılır."
      },
      {
        question: "Zemin sıvılaşması nedir ve hangi zeminlerde risk vardır?",
        answer: "Deprem sarsıntısı esnasında suya doygun gevşek kum ve silt tabakalarındaki boşluk suyu basıncının ani artışıyla zeminin mukavemetini tamamen kaybedip sıvı gibi davranması olayıdır. Yer altı su seviyesinin yüksek olduğu akarsu yatakları, kıyı şeritleri ve alüvyon ovalarda bu risk son derece yüksektir."
      },
      {
        question: "Sıvılaşmaya karşı en etkili yer altı zemin iyileştirme yöntemleri hangileridir?",
        answer: "Taş kolonler (drenaj ve sıkıştırma etkisiyle), jet grout ve DSM kolonları (rijit şebeke oluşturarak kayma deformasyonlarını sınırlama etkisiyle) sıvılaşmaya karşı en etkili yöntemlerdir. Ayrıca derin vibro kompaksiyon ile granüler zeminin relatif sıkılığının artırılması da riski doğrudan yok eder."
      },
      {
        question: "Sıvılaşma riski olan arsaya bina yapılabilir mi?",
        answer: "Evet, ancak TBDY 2018 standartları uyarınca sıvılaşma analizi yapılarak riskli tabakalar belirlenmeli ve temel tasarımı öncesinde bu risk zemin iyileştirme (jet grout, taş kolon vb.) yöntemleriyle tamamen bertaraf edilmelidir. Risk ortadan kaldırılmadan yapılacak doğrudan temel uygulamaları depremde yıkıcı hasarlar üretir."
      },
      {
        question: "Mevcut binanın altında yer altı zemin iyileştirme yapılabilir mi?",
        answer: "Evet, mevcut binaların altında zemin iyileştirme (underpinning) yapılabilir. Mini rig denilen kompakt jet grout makineleriyle bina içinden veya temel kenarından açılı delgilerle temel altına girilerek jet grout kolonları veya düşük basınçlı çimento/kimyasal enjeksiyon uygulamaları gerçekleştirilir."
      },
      {
        question: "Bina kullanılırken (oturulurken) zemin iyileştirme uygulaması yapılabilir mi?",
        answer: "Evet, ancak gürültü, titreşim ve alan kısıtları nedeniyle özel planlama gerektirir. Bu durumlarda titreşimsiz çalışan kimyasal/reçine enjeksiyonu veya düşük gürültülü mini jet grout ekipmanları tercih edilerek bina sakinleri tahliye edilmeden lokal müdahaleler yapılabilmektedir."
      },
      {
        question: "Oturma yapmış (çatlamış) bina düzeltilebilir mi?",
        answer: "Evet, farklı oturma nedeniyle eğrilen veya çatlayan binalar kompaksiyon enjeksiyonu veya hidrolik krikolu underpinning sistemleriyle kontrollü biçimde askıya alınarak düzeltilebilir. Bu süreçte öncelikle oturan bölgenin altındaki zemin jet grout veya enjeksiyonla güçlendirilir, ardından bina teraziye getirilir."
      },
      {
        question: "Zemin iyileştirme çalışmaları ne kadar sürer?",
        answer: "Çalışma süresi; uygulanacak yönteme, makine sayısına, sahanın büyüklüğüne ve zemin etüdündeki zayıf tabaka derinliğine göre değişir. Küçük ve orta ölçekli konut projelerinde jet grout veya DSM imalatları tipik olarak 1 ila 3 hafta içinde tamamlanırken, büyük sanayi tesislerinde bu süre aylara yayılabilir."
      },
      {
        question: "İyileştirme bittikten hemen sonra inşaata başlanabilir mi?",
        answer: "Hayır, kullanılan yönteme göre belirli bir kür ve test bekleme süresi vardır. Çimento esaslı jet grout ve DSM kolonlarının tasarım dayanımına (28 günlük) ulaşması için en az 7 ila 14 gün beklenmesi ve bu sürenin sonunda doğrulama testlerinin (karot, yükleme vb.) yapılması gerekir."
      },
      {
        question: "Zemin iyileştirme maliyetini hangi faktörler belirler?",
        answer: "Maliyeti belirleyen ana faktörler; iyileştirilecek tabakanın derinliği, toplam metraj, kullanılacak çimento/agrega sarfiyatı, yöntem seçimi (jet grout, DSM, taş kolon vb.), şantiyenin lojistik konumu ve ekipman mobilizasyon giderleridir. Projeye özel zemin verisi analiz edilmeden kesin bir bütçe çıkarılamaz."
      },
      {
        question: "Zemin iyileştirme mi kazıklı temel mi daha ekonomiktir?",
        answer: "Genellikle geniş oturma alanlı, orta düzey yük taşıyan yapılarda ve zayıf tabakanın 15-20 metreyi aşmadığı durumlarda zemin iyileştirme (jet grout, taş kolon vb.) kazıklı temele kıyasla daha ekonomiktir. Ancak ağır yapı yükleri ve derin zayıf profillerde kazıklı temel teknik olarak daha güvenli ve ekonomik hale gelebilir."
      },
      {
        question: "Yer altı zemin iyileştirmenin başarısı hangi testlerle doğrulanır?",
        answer: "Başarı; imalat sonrasında yapılan karot numune alımı ve laboratuvar basınç testleri, kolon yükleme testleri (statik yükleme), PIT (bütünlük testleri) ve iyileştirme öncesi/sonrası yapılan CPT veya Vs30 kayma dalgası hızı ölçüm karşılaştırmalarıyla bilimsel olarak doğrulanır."
      },
      {
        question: "Deneme (test) kolonu nedir, neden yapılır?",
        answer: "Deneme kolonu, ana imalat başlamadan önce sahada tasarım parametrelerini (basınç, devir hızı, karışım oranı) test etmek amacıyla yapılan ön deneme kolonudur. Bu kolonlar kırılarak veya karot alınarak çapı, mukavemeti ve zeminle uyumu incelenir, böylece projenin saha parametreleri kesinleştirilir."
      },
      {
        question: "Zemin iyileştirme kalıcı mıdır, ömrü ne kadardır?",
        answer: "Evet, tekniğine uygun olarak yapılan yer altı zemin iyileştirme uygulamaları kalıcı geoteknik çözümlerdir. Oluşturulan çimento kolonleri veya sıkıştırılmış agrega yapıları zemin altında yapı ömrü boyunca (ve hatta daha uzun süre) mukavemetini ve işlevini koruyacak şekilde projelendirilir."
      },
      {
        question: "Zemin iyileştirme sırasında gürültü ve titreşim olur mu, komşu binalara zarar verir mi?",
        answer: "Dinamik kompaksiyon ve vibro yöntemler yüksek titreşim üretirken; jet grout, DSM ve kimyasal enjeksiyon yöntemleri son derece düşük titreşim değerlerine sahiptir. Şehir içi ve komşu bina yakınlığındaki projelerde titreşimsiz çalışan jet grout ve DSM yöntemleri seçilerek çevre yapılara zarar verilmesi önlenir."
      },
      {
        question: "Şehir içi projelerde hangi yer altı zemin iyileştirme yöntemleri tercih edilir?",
        answer: "Çevredeki yapıların güvenliği ve gürültü/titreşim hassasiyeti nedeniyle şehir içi projelerde jet grout, derin karıştırma (DSM) ve kompaksiyon/reçine enjeksiyonu yöntemleri tercih edilir. Ayrıca kuru beslemeli taş kolon uygulamaları da çamursuz imalat avantajıyla öne zarar vermeden kullanılır."
      },
      {
        question: "Yeraltı su seviyesi yüksek zeminlerde hangi yöntemler uygulanır?",
        answer: "Yeraltı suyu altındaki zeminlerde ıslak yöntem jet grout, ıslak derin karıştırma (DSM) ve ıslak beslemeli taş kolonlar en güvenilir çözümlerdir. Kuru toz DSM veya dinamik sıkıştırma gibi yöntemler yeraltı suyunun bulunduğu koşullarda teknik zorluklar ve performans kayıpları üretir."
      }
    ],
    relatedSlugs: ["zemin-iyilestirme-yontemleri", "jet-grout-nedir", "dsm-nedir", "tas-kolon-nedir", "sivilasma-riskine-karsi-zemin-guclendirme", "zemin-etudu-nasil-yapilir"],
    keywords: ["yer altı zemin iyileştirme", "yeraltı zemin iyileştirme", "yer altı zemin güçlendirme", "zemin iyileştirme yöntemleri", "derin zemin iyileştirme", "jet grout zemin iyileştirme", "taş kolon zemin iyileştirme", "derin karıştırma DSM", "zemin sıvılaşması önleme", "TBDY 2018 zemin sınıfları", "zemin iyileştirme maliyet faktörleri", "yeraltı su seviyesi düşürme", "zemin iyileştirme kalite kontrol", "sorunlu zeminlerde temel çözümleri", "zemin iyileştirme Ankara"],
    published: true
  },
  ...seoArticles
];

export const publishedKnowledgeArticles = knowledgeArticles.filter((article) => article.published);
export const knowledgeCategories = [
  "Jet Grout",
  "Fore Kazık",
  "DSM",
  "Zemin İyileştirme",
  "Mini Kazık",
  "Ankraj & İksa",
  "Kalite Kontrol"
] as const;

export function getKnowledgeArticleBySlug(slug: string) {
  return knowledgeArticles.find((article) => article.slug === slug && article.published);
}

export function getKnowledgePaths() {
  return publishedKnowledgeArticles.map((article) => ({ slug: article.slug }));
}
