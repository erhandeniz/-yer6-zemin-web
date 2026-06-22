export type CityPage = {
  slug: string;
  city: string;
  title: string;
  description: string;
  heroLead: string;
  soilContext: string;
  recommendedApproach: string;
  qualityFocus: string;
  serviceSlugs: string[];
  articleSlugs: string[];
};

export const cityPages: CityPage[] = [
  {
    slug: "bursa-zemin-guclendirme",
    city: "Bursa",
    title: "Bursa Zemin Güçlendirme ve Zemin İyileştirme",
    description:
      "Bursa'da endüstriyel tesis, lojistik alan ve konut projeleri için jet grout, DSM zemin iyileştirme, fore kazık ve enjeksiyon çözümleri.",
    heroLead:
      "Bursa'da zemin güçlendirme kararları; ova alüvyonları, sanayi parsellerindeki dolgu tabakaları ve yüksek işletme yükleri birlikte değerlendirilerek verilmelidir.",
    soilContext:
      "Nilüfer, Osmangazi ve Gemlik çevresinde gevşek dolgu, yumuşak kil ve yer yer yüksek yeraltı suyu koşulları oturma ve taşıma gücü açısından kritik olabilir.",
    recommendedApproach:
      "Lojistik ve üretim tesislerinde DSM zemin iyileştirme, temel altı kolon düzeni ve gerektiğinde jet grout enjeksiyon perdesi birlikte kurgulanır.",
    qualityFocus:
      "Bursa sahalarında karot, kolon sürekliliği, bağlayıcı dozajı ve üretim kayıtları yatırımın işletme yüklerine uygun performans vermesi için izlenir.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-nasil-uygulanir", "jet-grout-nedir", "zemin-iyilestirme-yontemleri"]
  },
  {
    slug: "izmir-zemin-guclendirme",
    city: "İzmir",
    title: "İzmir Zemin Güçlendirme, Jet Grout ve Enjeksiyon",
    description:
      "İzmir'de kıyı, liman ve kentsel dönüşüm projeleri için zemin iyileştirme, jet grout, enjeksiyon ve fore kazık mühendisliği.",
    heroLead:
      "İzmir'de zemin iyileştirme projeleri çoğu zaman kıyı etkisi, yeraltı suyu, sıvılaşma riski ve dar şehir içi şantiye koşullarıyla birlikte ele alınır.",
    soilContext:
      "Körfez çevresi ve alüvyon alanlarda gevşek kum-silt seviyeleri, su geçirgenliği ve deprem etkisi jet grout veya DSM seçimini doğrudan etkiler.",
    recommendedApproach:
      "Su kontrolü gereken alanlarda jet grout ve enjeksiyon; oturma kontrolü gereken geniş parsellerde DSM zemin iyileştirme tercih edilebilir.",
    qualityFocus:
      "İzmir sahalarında basınç kayıtları, kolon çapı doğrulaması ve yeraltı suyu davranışı kalite kabul sürecinin ana parçalarıdır.",
    serviceSlugs: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["jet-grout-hangi-zeminlerde-uygulanir", "jet-grout-kalite-kontrol", "dsm-nasil-uygulanir"]
  },
  {
    slug: "istanbul-zemin-guclendirme",
    city: "İstanbul",
    title: "İstanbul Zemin Güçlendirme ve Temel Güçlendirme",
    description:
      "İstanbul'da derin kazı, temel güçlendirme, fore kazık, mini kazık, ankraj ve zemin iyileştirme projeleri için teknik çözümler.",
    heroLead:
      "İstanbul'da zemin güçlendirme; komşu yapı etkisi, yoğun altyapı hatları ve sınırlı şantiye lojistiği nedeniyle yalnızca yöntem seçimi değil risk yönetimi konusudur.",
    soilContext:
      "Kıyı dolguları, ayrışmış kaya geçişleri ve değişken yerleşim dokusu temel güçlendirme ve iksa sistemlerinde hassas deplasman kontrolü gerektirir.",
    recommendedApproach:
      "Fore kazık, mini kazık, ankraj ve jet grout kombinasyonları; mevcut yapı, derin kazı ve kentsel dönüşüm senaryolarına göre projelendirilir.",
    qualityFocus:
      "İstanbul uygulamalarında düşeylik, beton sürekliliği, ankraj testleri ve çevre yapı izleme kayıtları birlikte takip edilmelidir.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "ankraj", "jet-grout"],
    articleSlugs: ["fore-kazik-nedir", "fore-kazik-uygulama-asamalari", "jet-grout-ve-fore-kazik-farki"]
  },
  {
    slug: "ankara-zemin-guclendirme",
    city: "Ankara",
    title: "Ankara Zemin Güçlendirme ve Fore Kazık Uygulamaları",
    description:
      "Ankara'da temel güçlendirme, fore kazık, ankraj, iksa sistemleri ve zemin iyileştirme uygulamaları için saha odaklı mühendislik.",
    heroLead:
      "Ankara'da zemin güçlendirme çalışmaları; derin kazı, ulaşım yapıları, kamu projeleri ve kot farkı yüksek parsellerde güvenli imalat disiplinine dayanır.",
    soilContext:
      "Kil, marn, ayrışmış kaya ve dolgu geçişleri kısa mesafede değişebildiği için sondaj verisi ile imalat yöntemi birlikte yorumlanmalıdır.",
    recommendedApproach:
      "Fore kazık, ankraj ve iksa sistemleri derin kazılarda; jet grout veya DSM ise taşıma ve oturma kontrolü gereken alanlarda devreye alınır.",
    qualityFocus:
      "Ankara sahalarında kazı kademeleri, ankraj kabul testleri, beton kayıtları ve deformasyon izleme planı kritik kalite verileridir.",
    serviceSlugs: ["fore-kazik", "ankraj", "iksa-sistemleri", "zemin-iyilestirme"],
    articleSlugs: ["fore-kazik-avantajlari", "zemin-iyilestirme-planlama", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "hatay-zemin-guclendirme",
    city: "Hatay",
    title: "Hatay Deprem Bölgesi Zemin Güçlendirme",
    description:
      "Hatay deprem bölgesinde zemin güçlendirme, temel güçlendirme, jet grout, DSM ve fore kazık uygulamaları için teknik değerlendirme.",
    heroLead:
      "Hatay'da deprem bölgesi zemin güçlendirme kararları, sıvılaşma potansiyeli, oturma riski ve mevcut yapı güvenliğiyle birlikte ele alınmalıdır.",
    soilContext:
      "Amik Ovası ve kıyı etkisindeki alanlarda yumuşak zemin, yüksek su seviyesi ve deprem ivmesi temel sistemini doğrudan etkileyebilir.",
    recommendedApproach:
      "Yeni yapılarda DSM ve jet grout ile performans kontrollü zemin iyileştirme; mevcut yapılarda mini kazık ve temel güçlendirme alternatifleri değerlendirilir.",
    qualityFocus:
      "Hatay sahalarında yöntem seçimi mutlaka zemin etüdü, deneme imalatı, numune testi ve deprem performans hedefleriyle doğrulanmalıdır.",
    serviceSlugs: ["zemin-iyilestirme", "jet-grout", "dsm", "mini-kazik"],
    articleSlugs: ["zemin-iyilestirme-risk-yonetimi", "jet-grout-kalite-kontrol", "dsm-malzeme-secinimi"]
  },
  {
    slug: "mersin-zemin-guclendirme",
    city: "Mersin",
    title: "Mersin Zemin İyileştirme ve Jet Grout",
    description:
      "Mersin'de liman, sanayi ve kıyı projeleri için jet grout, DSM zemin iyileştirme, enjeksiyon ve fore kazık uygulamaları.",
    heroLead:
      "Mersin'de zemin iyileştirme projeleri çoğunlukla kıyı alüvyonu, liman yükleri, yeraltı suyu ve geniş endüstriyel platform ihtiyaçlarıyla şekillenir.",
    soilContext:
      "Kumlu-siltli tabakalar ve dolgu alanları su geçirgenliği, oturma ve sıvılaşma bakımından proje özelinde incelenmelidir.",
    recommendedApproach:
      "Jet grout su kontrolü ve geçirimsizlik için; DSM zemin iyileştirme ise geniş sahalarda oturma azaltımı ve taşıma gücü artışı için kullanılabilir.",
    qualityFocus:
      "Mersin uygulamalarında debi, basınç, kolon geometrisi ve bağlayıcı tüketimi üretim raporlarında karşılaştırmalı izlenmelidir.",
    serviceSlugs: ["jet-grout", "dsm", "zemin-iyilestirme", "fore-kazik"],
    articleSlugs: ["jet-grout-nedir", "jet-grout-ve-dsm-farki", "zemin-kalite-kontrol-standartlari"]
  },
  {
    slug: "mugla-zemin-guclendirme",
    city: "Muğla",
    title: "Muğla Zemin Güçlendirme ve Temel Güçlendirme",
    description:
      "Muğla'da turizm, konut ve eğimli arazi projeleri için temel güçlendirme, mini kazık, fore kazık, ankraj ve enjeksiyon çözümleri.",
    heroLead:
      "Muğla'da zemin güçlendirme çalışmaları; eğimli parseller, kıyı etkisi, sınırlı erişim ve mevcut yapı hassasiyeti nedeniyle kompakt ekipman planı gerektirir.",
    soilContext:
      "Ayrışmış kaya, dolgu ve lokal yumuşak zemin geçişleri özellikle bodrum kazıları ve temel güçlendirme işlerinde değişken davranış gösterebilir.",
    recommendedApproach:
      "Mini kazık, fore kazık, ankraj ve enjeksiyon uygulamaları; erişim kısıtı ve mimari proje sınırlarıyla uyumlu şekilde seçilir.",
    qualityFocus:
      "Muğla sahalarında düşük titreşim, kontrollü delgi, enjeksiyon sarfı ve komşu yapı etkisi kalite planının merkezinde olmalıdır.",
    serviceSlugs: ["mini-kazik", "fore-kazik", "ankraj", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-nedir", "saha-denetimi-numune-testleri", "zemin-iyilestirme-planlama"]
  },
  {
    slug: "kayseri-zemin-guclendirme",
    city: "Kayseri",
    title: "Kayseri Zemin Güçlendirme ve DSM Zemin İyileştirme",
    description:
      "Kayseri'de sanayi yapıları, depo alanları ve temel sistemleri için DSM zemin iyileştirme, fore kazık ve jet grout çözümleri.",
    heroLead:
      "Kayseri'de zemin güçlendirme ihtiyaçları çoğunlukla sanayi yapıları, geniş açıklıklı depolar ve yüksek döşeme yükleri etrafında oluşur.",
    soilContext:
      "Dolgu kalitesi, değişken taşıma gücü ve oturma toleransları üretim tesislerinde yapısal performansı doğrudan etkileyebilir.",
    recommendedApproach:
      "DSM zemin iyileştirme ve jet grout kolonları, temel altı rijitlik ve oturma kontrolü için; fore kazık ise yüksek taşıyıcı sistemlerde değerlendirilir.",
    qualityFocus:
      "Kayseri sahalarında kolon kayıtları, bağlayıcı dozajı, karot sonuçları ve platform toleransları teslim kalitesini belirler.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-nasil-uygulanir", "dsm-malzeme-secinimi", "zemin-iyilestirme-yontemleri"]
  },
  {
    slug: "sivas-zemin-guclendirme",
    city: "Sivas",
    title: "Sivas Zemin Güçlendirme ve Fore Kazık",
    description:
      "Sivas'ta altyapı, sanayi ve kamu projeleri için fore kazık, DSM, jet grout ve zemin iyileştirme uygulamaları.",
    heroLead:
      "Sivas'ta zemin güçlendirme kararları, iklim koşulları, dolgu davranışı, don etkisi ve geniş altyapı parsellerinin taşıma hedefleriyle birlikte ele alınır.",
    soilContext:
      "Kil, dolgu ve ayrışmış kaya geçişleri temel kazısı, platform stabilitesi ve uzun vadeli oturma bakımından teknik değerlendirme gerektirir.",
    recommendedApproach:
      "Fore kazık ve zemin iyileştirme yöntemleri; proje yükü, temel tipi ve saha erişimi dikkate alınarak birlikte veya ayrı çözümler olarak tasarlanır.",
    qualityFocus:
      "Sivas uygulamalarında delgi verisi, beton sürekliliği, saha numuneleri ve mevsimsel çalışma planı kalite kontrolün temelidir.",
    serviceSlugs: ["fore-kazik", "dsm", "jet-grout", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-uygulama-asamalari", "zemin-iyilestirme-planlama", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "van-zemin-guclendirme",
    city: "Van",
    title: "Van Deprem Bölgesi Zemin Güçlendirme",
    description:
      "Van'da deprem bölgesi zemin güçlendirme, sıvılaşma değerlendirmesi, jet grout, DSM ve temel güçlendirme çözümleri.",
    heroLead:
      "Van'da zemin güçlendirme projeleri deprem etkisi, göl çevresi zeminleri ve yerel oturma riskleri nedeniyle performans odaklı tasarlanmalıdır.",
    soilContext:
      "Gevşek alüvyon, suya duyarlı zeminler ve farklı zemin tabakaları sıvılaşma ve taşıma gücü açısından ayrıntılı incelenmelidir.",
    recommendedApproach:
      "DSM zemin iyileştirme, jet grout ve fore kazık seçenekleri; zemin sınıfı, yapı yükü ve deprem performans hedefiyle birlikte değerlendirilir.",
    qualityFocus:
      "Van sahalarında laboratuvar verisi, üretim parametreleri ve test sonuçları deprem bölgesi zemin güçlendirme kararının kanıt zincirini oluşturur.",
    serviceSlugs: ["zemin-iyilestirme", "dsm", "jet-grout", "fore-kazik"],
    articleSlugs: ["zemin-iyilestirme-risk-yonetimi", "jet-grout-ve-dsm-farki", "zemin-kalite-kontrol-standartlari"]
  },
  {
    slug: "agri-zemin-guclendirme",
    city: "Ağrı",
    title: "Ağrı Zemin Güçlendirme ve Temel Güçlendirme",
    description:
      "Ağrı'da altyapı, kamu yapıları ve temel güçlendirme projeleri için fore kazık, mini kazık, enjeksiyon ve zemin iyileştirme çözümleri.",
    heroLead:
      "Ağrı'da zemin güçlendirme çalışmaları yüksek rakım, soğuk iklim, dolgu davranışı ve sınırlı saha sezonu dikkate alınarak planlanmalıdır.",
    soilContext:
      "Yerel zemin değişkenliği, don etkisi ve taşıma gücü belirsizlikleri temel sistemi ve imalat programı üzerinde belirleyicidir.",
    recommendedApproach:
      "Fore kazık, mini kazık ve enjeksiyon uygulamaları; temel güçlendirme ve altyapı projelerinde saha erişimiyle uyumlu şekilde değerlendirilir.",
    qualityFocus:
      "Ağrı sahalarında delgi kayıtları, beton/çimento dayanımı, numune koruması ve mevsimsel kalite planı uygulama güvenilirliğini artırır.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "zemin-iyilestirme", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-avantajlari", "saha-denetimi-numune-testleri", "zemin-iyilestirme-planlama"]
  }
];

export function getCityPageBySlug(slug: string) {
  return cityPages.find((page) => page.slug === slug);
}

export function getCityPaths() {
  return cityPages.map((page) => ({ slug: page.slug }));
}
