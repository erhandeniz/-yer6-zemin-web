import type { CalcMode } from "@/lib/costEngine";

/**
 * YER6 HESAP MERKEZİ — araç tanımları
 *
 * Her araç, mevcut `costEngine` motorunu kullanır (yeni bir hesap mantığı
 * yazılmaz). Buradaki veri yalnızca sayfanın metnini, SEO alanlarını ve
 * girdi etiketlerini tanımlar.
 *
 * İLKE: Bu araçlar YAKLAŞIK ÖN DEĞERLENDİRME üretir. Zemin etüdü olmadan
 * kesin metraj veya kesin fiyat iddia edilmez; her sayfada bu uyarı görünür.
 */

export type CalculatorTool = {
  /** URL: /hesaplama/<slug>/ */
  slug: string;
  mode: CalcMode;
  /** Sayfa H1 */
  h1: string;
  /** <title> */
  seoTitle: string;
  metaDescription: string;
  /** H1 altındaki doğrudan cevap (50-100 kelime) */
  directAnswer: string;
  /** Girdi etiketleri — motorun count/depth/diameter alanlarına karşılık gelir */
  labels: {
    count: string;
    depth: string;
    diameter: string;
    countHelp: string;
    depthHelp: string;
    diameterHelp: string;
  };
  /** Varsayılan değerler (gerçekçi bir örnek proje) */
  defaults: { count: number; depth: number; diameter: number };
  /** Hesaplama mantığının açıklaması */
  methodology: string[];
  /** Maliyeti değiştiren faktörler */
  costFactors: string[];
  /** Aracın kapsamadığı, mühendislik gerektiren konular */
  limitations: string[];
  faq: { question: string; answer: string }[];
  /** İlgili hizmet slug'ları (/services/...) */
  relatedServices: string[];
  /** İlgili bilgi merkezi makaleleri (/knowledge/...) */
  relatedArticles: string[];
};

export const CALCULATOR_TOOLS: CalculatorTool[] = [
  {
    slug: "jet-grout-maliyet-hesaplama",
    mode: "jet-grout",
    h1: "Jet Grout Maliyet ve Metraj Hesaplama",
    seoTitle: "Jet Grout Maliyet Hesaplama Aracı | Metraj ve Çimento Hesabı | YER6",
    metaDescription:
      "Jet grout kolon çapı, boyu ve adedine göre yaklaşık metraj, çimento tüketimi, makine günü ve ön maliyet hesabı yapın. Ücretsiz mühendislik aracı.",
    directAnswer:
      "Jet grout maliyeti; toplam kolon metresi, kolon çapı, çimento dozajı, zemin türü ve saha koşullarına göre değişir. Bu araç kolon çapı, boyu ve adedini kullanarak toplam imalat metresini, teorik kolon hacmini, çimento tüketimini, tahmini makine gününü ve düşük–olası–yüksek bandında ön maliyeti hesaplar. Sonuç yaklaşık bir ön değerlendirmedir; kesin metraj ve fiyat, zemin etüdü ve projelendirme sonrası belirlenir.",
    labels: {
      count: "Kolon adedi",
      depth: "Kolon boyu (m)",
      diameter: "Kolon çapı (cm)",
      countHelp: "Projede teşkil edilecek toplam jet grout kolonu sayısı.",
      depthHelp: "Bir kolonun ıslah (enjeksiyon) boyu. Delgi boyu daha uzun olabilir.",
      diameterHelp: "Hedeflenen kolon çapı. Zemin türü ve enjeksiyon parametrelerine bağlıdır."
    },
    defaults: { count: 250, depth: 12, diameter: 60 },
    methodology: [
      "Toplam imalat metresi = kolon adedi × kolon boyu",
      "Teorik kolon hacmi = π × (çap/2)² × boy × kolon adedi",
      "Çimento tüketimi, kolon hacmi ve zemin türüne göre dozaj katsayısıyla hesaplanır",
      "Makine günü = toplam metre ÷ günlük üretim kapasitesi (zemin zorluğuna göre düzeltilir)",
      "Mazot tüketimi metre başına ortalama sarfiyattan türetilir",
      "Malzeme kalemleri güncel fiyat kataloğu ve canlı döviz kuruyla güncellenir",
      "Sonuç; malzeme, işçilik, makine, yakıt ve mobilizasyon toplamına genel gider ve kâr eklenerek bulunur"
    ],
    costFactors: [
      "Zemin türü: kohezyonlu zeminlerde aynı çapa ulaşmak daha yüksek enerji ve dozaj gerektirir",
      "Çimento dozajı ve su/çimento oranı",
      "Kolon çapı: hacim çapın karesiyle arttığı için maliyeti en hızlı değiştiren parametredir",
      "Yeraltı suyu ve delgi zorluğu",
      "Saha erişimi ve çalışma alanı genişliği",
      "Mobilizasyon mesafesi",
      "Deneme kolonu ve kalite kontrol testlerinin kapsamı",
      "Çalışma vardiyası ve saha sezonu"
    ],
    limitations: [
      "Kolon çapı zemin etüdü ve deneme kolonu ile doğrulanmadan kesinleşmez",
      "Sıvılaşma azaltımı hedefleniyorsa kolon aralığı ayrı bir analizle belirlenir",
      "Su geçirimsizlik gerekiyorsa bindirme oranı ve perde geometrisi ayrı hesaplanır",
      "Mevcut yapı altında çalışma, imalat sırası ve izleme planı gerektirir"
    ],
    faq: [
      {
        question: "Jet grout metre fiyatı ne kadar?",
        answer:
          "Tek bir metre fiyatı yoktur. Fiyat; kolon çapı, çimento dozajı, zemin türü, toplam metraj, saha erişimi ve test kapsamına göre değişir. Bu araç, girdiğiniz değerlere göre düşük–olası–yüksek bandında bir ön aralık üretir."
      },
      {
        question: "Hesap sonucu kesin fiyat mıdır?",
        answer:
          "Hayır. Ön değerlendirmedir. Kesin metraj ve fiyat; zemin etüdü, projelendirme ve saha keşfi sonrasında verilir. Aracın ürettiği aralık, teklif karşılaştırmasında büyüklük mertebesini görmek içindir."
      },
      {
        question: "Çimento tüketimi nasıl hesaplanıyor?",
        answer:
          "Teorik kolon hacmi hesaplanır ve zemin türüne bağlı dozaj katsayısıyla çarpılır. Gerçek tüketim; enjeksiyon basıncı, çekme hızı ve zeminin yıkanma davranışına göre bundan sapabilir."
      },
      {
        question: "Delgi boyu ile ıslah boyu farklı mı?",
        answer:
          "Evet. Kolon genellikle belirli bir derinlikten itibaren teşkil edilir; üstteki bölüm yalnızca delgi olabilir. Bu araçta girilen değer ıslah (enjeksiyon) boyudur."
      }
    ],
    relatedServices: ["jet-grout", "bina-alti-jet-grout", "zemin-iyilestirme"],
    relatedArticles: ["jet-grout-maliyeti", "jet-grout-nedir", "jet-grout-uygulama-asamalari"]
  },
  {
    slug: "fore-kazik-maliyet-hesaplama",
    mode: "fore-kazik",
    h1: "Fore Kazık Maliyet ve Metraj Hesaplama",
    seoTitle: "Fore Kazık Maliyet Hesaplama | Beton, Donatı ve Delgi Metrajı | YER6",
    metaDescription:
      "Fore kazık çapı, boyu ve adedine göre toplam delgi metresi, beton hacmi, donatı tonajı, makine günü ve yaklaşık maliyet hesabı yapın.",
    directAnswer:
      "Fore kazık maliyeti; kazık çapı, boyu, adedi, beton ve donatı miktarı ile delgi zorluğuna göre belirlenir. Bu araç girdiğiniz çap, boy ve adet değerlerinden toplam delgi metresini, beton hacmini, donatı tonajını, tahmini makine gününü ve düşük–olası–yüksek bandında ön maliyeti hesaplar. Sonuç yaklaşıktır; kesin metraj zemin etüdü ve statik proje ile netleşir.",
    labels: {
      count: "Kazık adedi",
      depth: "Kazık boyu (m)",
      diameter: "Kazık çapı (cm)",
      countHelp: "Projede imal edilecek toplam fore kazık sayısı.",
      depthHelp: "Ortalama kazık boyu. Sağlam tabakaya soket boyu dahildir.",
      diameterHelp: "Kazık çapı. Yaygın aralık 60–150 cm'dir."
    },
    defaults: { count: 120, depth: 18, diameter: 80 },
    methodology: [
      "Toplam delgi metresi = kazık adedi × kazık boyu",
      "Teorik beton hacmi = π × (çap/2)² × boy × adet",
      "Beton sarfiyatına saha koşuluna bağlı fire katsayısı eklenir (overbreak)",
      "Donatı tonajı, çapa bağlı ortalama kg/m değerinden türetilir",
      "Makine günü = toplam delgi ÷ günlük delgi kapasitesi (zemin/kaya durumuna göre düzeltilir)",
      "Malzeme fiyatları güncel katalog ve canlı döviz kuruyla güncellenir"
    ],
    costFactors: [
      "Kazık çapı: beton hacmi çapın karesiyle arttığı için en belirleyici parametredir",
      "Zemin/kaya durumu: kaya delgisi hızı düşürür, maliyeti yükseltir",
      "Muhafaza borusu ihtiyacı (göçmeye eğilimli zeminlerde)",
      "Yeraltı suyu ve tremie ile döküm gereksinimi",
      "Donatı kafesi ağırlığı ve ek detayları",
      "Beton sınıfı ve fire oranı",
      "Hafriyat ve spoil bertarafı",
      "Test kapsamı (PIT, CSL, statik yükleme)",
      "Saha erişimi ve mobilizasyon mesafesi"
    ],
    limitations: [
      "Kazık boyu ve çapı statik hesapla belirlenir; bu araç tasarım yapmaz",
      "Kazık aralığı ve grup etkisi hesaba dahil değildir",
      "İksa perdesi olarak çalışacak kazıklarda ankraj/kuşak maliyeti ayrıdır",
      "Kaya delgisi oranı bilinmiyorsa süre tahmini geniş bir bant taşır"
    ],
    faq: [
      {
        question: "Fore kazık metre fiyatı nasıl belirlenir?",
        answer:
          "Çap, boy, toplam metraj, beton sınıfı, donatı yoğunluğu, zemin/kaya durumu, muhafaza ihtiyacı ve test kapsamı birlikte değerlendirilir. Aynı çapta iki proje, zemin farkı nedeniyle belirgin biçimde farklı fiyatlanabilir."
      },
      {
        question: "Beton fire katsayısı nedir?",
        answer:
          "Delgi cidarındaki genişleme (overbreak) nedeniyle sahada teorik hacimden fazla beton harcanır. Bu fark fire katsayısıyla hesaba katılır; gevşek zeminlerde oran yükselir."
      },
      {
        question: "Donatı tonajı nasıl bulunuyor?",
        answer:
          "Kazık çapına bağlı ortalama donatı yoğunluğu (kg/m) ile toplam metre çarpılır. Kesin tonaj, statik projedeki kafes detayına göre belirlenir."
      },
      {
        question: "Kaya çıkarsa maliyet ne kadar artar?",
        answer:
          "Kaya delgisi günlük ilerlemeyi düşürür ve ekipman aşınmasını artırır. Etkisi kayanın dayanımına ve oranına bağlıdır; bu nedenle sahada kaya beklenen projelerde etüt kritik önemdedir."
      }
    ],
    relatedServices: ["fore-kazik", "cfa-kazik", "kazik-yukleme-testleri"],
    relatedArticles: ["fore-kazik-maliyeti", "fore-kazik-nedir", "kazik-yukleme-testi-turleri"]
  },
  {
    slug: "dsm-maliyet-hesaplama",
    mode: "dsm",
    h1: "DSM (Derin Zemin Karıştırma) Maliyet ve Metraj Hesaplama",
    seoTitle: "DSM Zemin İyileştirme Maliyet Hesaplama Aracı | YER6",
    metaDescription:
      "DSM kolon çapı, boyu ve adedine göre toplam metraj, bağlayıcı tüketimi, makine günü ve yaklaşık maliyet hesabı yapın.",
    directAnswer:
      "DSM maliyeti; kolon çapı, boyu, adedi, bağlayıcı dozajı ve zeminin su muhtevasına göre değişir. Bu araç girdiğiniz değerlerden toplam kolon metresini, teorik hacmi, bağlayıcı tüketimini, tahmini üretim süresini ve düşük–olası–yüksek bandında ön maliyeti hesaplar. Geniş alanlı platformlarda DSM genellikle metre başına daha ekonomiktir; kesin değerler karışım tasarımı ve deneme kolonu sonrası netleşir.",
    labels: {
      count: "Kolon adedi",
      depth: "Kolon boyu (m)",
      diameter: "Kolon çapı (cm)",
      countHelp: "Grid yerleşimine göre toplam DSM kolon sayısı.",
      depthHelp: "Karıştırma yapılacak ortalama derinlik.",
      diameterHelp: "Karıştırma başlığı çapı. Tipik aralık 60–120 cm'dir."
    },
    defaults: { count: 800, depth: 14, diameter: 80 },
    methodology: [
      "Toplam kolon metresi = kolon adedi × kolon boyu",
      "Teorik hacim = π × (çap/2)² × boy × adet",
      "Bağlayıcı tüketimi, hacim ve zemin türüne bağlı dozaj katsayısıyla hesaplanır",
      "Üretim süresi, DSM ekipmanının günlük metre kapasitesinden türetilir",
      "Fiyatlar güncel katalog ve canlı döviz kuruyla güncellenir"
    ],
    costFactors: [
      "Bağlayıcı dozajı (kg/m³) — maliyetin en büyük kalemi",
      "Zeminin doğal su muhtevası ve ıslak/kuru yöntem seçimi",
      "Hedef dayanım (UCS) seviyesi",
      "Kolon çapı ve grid aralığı (alan değiştirme oranı)",
      "Karıştırma enerjisi ve çekme hızı",
      "Saha büyüklüğü — geniş alanda birim maliyet düşer",
      "Deneme kolonu ve karot/UCS test kapsamı",
      "Mobilizasyon"
    ],
    limitations: [
      "Kolon aralığı ve alan değiştirme oranı tasarım hesabıyla belirlenir",
      "Hedef dayanım laboratuvar karışım tasarımı olmadan varsayılamaz",
      "Çok iri çakıl, blok veya sert kaya içeren zeminlerde DSM uygun olmayabilir",
      "Yük dağıtım tabakası (granüler yastık) maliyeti bu hesaba dahil değildir"
    ],
    faq: [
      {
        question: "DSM mi jet grout mu daha ekonomik?",
        answer:
          "Geniş alanlı platformlarda ve uygun zeminlerde DSM genellikle metre başına daha ekonomiktir. Dar alanda, mevcut yapı altında veya su kesme gerektiğinde jet grout öne çıkar. Karar zemin profiline ve hedefe göre verilir."
      },
      {
        question: "Bağlayıcı dozajı nasıl belirlenir?",
        answer:
          "Laboratuvar karışım tasarımıyla başlanır: saha zemininden alınan numunelerle dozaj-dayanım ilişkisi kurulur. Sahada deneme kolonu ile doğrulanır."
      },
      {
        question: "DSM kolon dayanımı ne olur?",
        answer:
          "Zemin türü, su muhtevası, bağlayıcı tipi/dozajı ve karıştırma enerjisine bağlıdır. Tek bir genel değer verilemez; hedef dayanım projede tanımlanır ve karot/UCS ile doğrulanır."
      }
    ],
    relatedServices: ["dsm", "deep-soil-mixing", "zemin-iyilestirme"],
    relatedArticles: ["dsm-uygulama-ve-kalite-kontrol", "dsm-nedir", "jet-grout-ve-dsm-farki"]
  },
  {
    slug: "ankraj-maliyet-hesaplama",
    mode: "ankraj",
    h1: "Ankraj Metraj ve Maliyet Hesaplama",
    seoTitle: "Ankraj Metraj ve Maliyet Hesaplama Aracı | İksa Ankrajı | YER6",
    metaDescription:
      "Ankraj adedi, boyu ve delgi çapına göre toplam delgi metresi, halat metrajı, enjeksiyon hacmi, süre ve yaklaşık maliyet hesabı yapın.",
    directAnswer:
      "Ankraj maliyeti; ankraj adedi, serbest ve kök boyu, delgi çapı, halat sayısı ve test kapsamına göre belirlenir. Bu araç girdiğiniz değerlerden toplam delgi metresini, halat metrajını, enjeksiyon hacmini, tahmini süreyi ve düşük–olası–yüksek bandında ön maliyeti hesaplar. Ankraj boyları stabilite analiziyle belirlenir; bu araç tasarım yapmaz.",
    labels: {
      count: "Ankraj adedi",
      depth: "Ankraj toplam boyu (m)",
      diameter: "Delgi çapı (cm)",
      countHelp: "İksa projesinde öngörülen toplam ankraj sayısı (tüm kademeler).",
      depthHelp: "Serbest boy + kök boyu toplamı.",
      diameterHelp: "Ankraj delgi çapı. Yaygın aralık 13–20 cm'dir."
    },
    defaults: { count: 180, depth: 20, diameter: 15 },
    methodology: [
      "Toplam delgi metresi = ankraj adedi × ankraj boyu",
      "Enjeksiyon hacmi, delgi çapı ve kök boyundan türetilir",
      "Halat/çubuk metrajı toplam boy üzerinden hesaplanır",
      "Süre, ankraj ünitesinin günlük delgi kapasitesinden bulunur",
      "Germe ve test işçiliği ayrı kalem olarak eklenir",
      "Fiyatlar güncel katalog ve canlı döviz kuruyla güncellenir"
    ],
    costFactors: [
      "Ankraj kapasitesi (halat sayısı)",
      "Serbest ve kök boyu uzunlukları",
      "Delgi çapı ve zemin/kaya zorluğu",
      "Geçici mi kalıcı mı — kalıcı ankrajda korozyon koruması maliyeti artırır",
      "Kuşak kirişi tipi (çelik veya betonarme)",
      "Test adedi (uygunluk, kabul, sürünme)",
      "Kademeli kazı programı ve bekleme süreleri",
      "Komşu parsel izni ve erişim koşulları"
    ],
    limitations: [
      "Serbest ve kök boyu stabilite analiziyle belirlenir; araç tasarım yapmaz",
      "Kuşak kirişi ve perde maliyeti bu hesaba dahil değildir",
      "Komşu parsele ankraj izni alınamazsa alternatif sistem gerekir (payandalı iksa vb.)",
      "Deformasyon izleme maliyeti ayrı değerlendirilir"
    ],
    faq: [
      {
        question: "Ankraj boyu nasıl belirlenir?",
        answer:
          "Serbest boy kayma yüzeyinin arkasındaki sağlam bölgeye ulaşacak şekilde, kök boyu ise tasarım yükünü zemine aktaracak sürtünme direncine göre hesaplanır. İkisi de zemin etüdü ve stabilite analizine dayanır."
      },
      {
        question: "Geçici ve kalıcı ankraj maliyeti neden farklı?",
        answer:
          "Kalıcı ankrajlar yapı ömrü boyunca çalıştığı için çift korozyon koruması, özel kılıf detayları ve daha kapsamlı başlık kapatma gerektirir. Bu, birim maliyeti belirgin biçimde yükseltir."
      },
      {
        question: "Ankraj testi zorunlu mu?",
        answer:
          "Germe sırasında yapılan kabul testi standart uygulamadır ve ankrajın tasarım yükünü taşıdığının tek doğrudan kanıtıdır. Proje başında uygunluk testi de yapılır."
      }
    ],
    relatedServices: ["ankraj", "iksa-sistemleri", "zemin-civisi"],
    relatedArticles: ["ankraj-uygulama-asamalari", "ankraj-nedir", "iksa-sistemi-nasil-secilir"]
  },
  {
    slug: "mini-kazik-maliyet-hesaplama",
    mode: "mini-kazik",
    h1: "Mini Kazık (Mikro Kazık) Maliyet ve Metraj Hesaplama",
    seoTitle: "Mini Kazık Maliyet Hesaplama | Mikro Kazık Metrajı | YER6",
    metaDescription:
      "Mini kazık çapı, boyu ve adedine göre toplam delgi metresi, enjeksiyon hacmi, donatı metrajı, süre ve yaklaşık maliyet hesabı yapın.",
    directAnswer:
      "Mini kazık maliyeti; kazık çapı, boyu, adedi, donatı tipi ve enjeksiyon yöntemine göre belirlenir. Bu araç girdiğiniz değerlerden toplam delgi metresini, enjeksiyon hacmini, donatı metrajını, tahmini süreyi ve düşük–olası–yüksek bandında ön maliyeti hesaplar. Mevcut yapı altında çalışmada erişim ve imalat sırası maliyeti belirgin biçimde etkiler.",
    labels: {
      count: "Kazık adedi",
      depth: "Kazık boyu (m)",
      diameter: "Delgi çapı (cm)",
      countHelp: "Temel güçlendirme planına göre toplam mini kazık sayısı.",
      depthHelp: "Sağlam tabakaya soket boyu dahil ortalama kazık boyu.",
      diameterHelp: "Delgi çapı. Yaygın aralık 9–30 cm'dir."
    },
    defaults: { count: 90, depth: 14, diameter: 15 },
    methodology: [
      "Toplam delgi metresi = kazık adedi × kazık boyu",
      "Enjeksiyon hacmi, delgi çapı ve boydan türetilir; enjeksiyon tipine göre artırılır",
      "Donatı metrajı toplam boy üzerinden hesaplanır",
      "Süre, kompakt ekipmanın günlük delgi kapasitesinden bulunur",
      "Kapalı/alçak tavanlı çalışmada verimlilik düşüşü dikkate alınır",
      "Fiyatlar güncel katalog ve canlı döviz kuruyla güncellenir"
    ],
    costFactors: [
      "Delgi çapı ve donatı kesiti (çelik boru veya nervürlü çubuk)",
      "Enjeksiyon tipi: basınçlı ve tekrarlı enjeksiyon maliyeti artırır ama kapasiteyi yükseltir",
      "Çalışma alanı: bodrum veya alçak tavan verimliliği düşürür",
      "Muhafaza borusu ihtiyacı",
      "Mevcut yapı içinde çalışma: koruma, temizlik ve iş güvenliği maliyeti",
      "Başlık kirişi veya plaka detayı",
      "Yükleme testi adedi",
      "Mobilizasyon ve ekipman indirme/çıkarma"
    ],
    limitations: [
      "Kazık kapasitesi hesapla belirlenir ve yükleme testiyle doğrulanır",
      "Başlık kirişi ve üstyapı bağlantı detayı bu hesaba dahil değildir",
      "Mevcut yapıda deformasyon izleme maliyeti ayrıdır",
      "Kaya veya blok içeren zeminlerde delgi süresi belirgin biçimde artabilir"
    ],
    faq: [
      {
        question: "Mini kazık fore kazıktan ucuz mu?",
        answer:
          "Metre başına daha düşük görünse de aynı yükü taşımak için çok daha fazla eleman gerekir. Mini kazık ekonomik alternatif değil; erişimin kısıtlı olduğu sahalar için teknik alternatiftir."
      },
      {
        question: "Bina altında çalışma maliyeti nasıl etkiler?",
        answer:
          "Alçak tavan, dar manevra, koruma önlemleri ve malzeme taşıma verimliliği düşürür. Aynı metraj açık sahaya göre daha uzun sürede tamamlanır."
      },
      {
        question: "Enjeksiyon tipi maliyeti ne kadar değiştirir?",
        answer:
          "Basınçlı ve tekrarlı (tüp à manchette) enjeksiyon, yerçekimi enjeksiyonuna göre daha fazla malzeme ve işçilik gerektirir; buna karşılık taşıma kapasitesini artırır. Karar tasarımla verilir."
      }
    ],
    relatedServices: ["mini-kazik", "bina-alti-jet-grout", "zemin-guclendirme"],
    relatedArticles: ["mini-kazik-nedir", "mini-kazik-mi-fore-kazik-mi", "temel-alti-zemin-guclendirme"]
  }
];

export function getCalculatorTool(slug: string): CalculatorTool | undefined {
  return CALCULATOR_TOOLS.find((tool) => tool.slug === slug);
}

export function getCalculatorPaths() {
  return CALCULATOR_TOOLS.map((tool) => ({ slug: tool.slug }));
}
