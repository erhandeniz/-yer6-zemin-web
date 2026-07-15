export type CitySection = {
  heading: string;
  body: string[];
};

export type CityFaq = {
  question: string;
  answer: string;
};

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
  // Zenginleştirilmiş (öncelikli) iller için opsiyonel uzun içerik alanları.
  // Doldurulmuşsa şablon bu bölümleri ve SSS'i (FAQ şeması ile) render eder.
  intro?: string;
  sections?: CitySection[];
  faq?: CityFaq[];
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
      "Nilüfer, Osmangazi ve Gemlik çevresinde gevşek dolgu, yumuşak kil ve yer yer yüksek yeraltı suyu koşulları; [kapsamlı zemin iyileştirme yöntemleri](/knowledge/yer-alti-zemin-iyilestirme/) ve geoteknik parametreler doğrultusunda oturma ve taşıma gücü açısından değerlendirilmelidir.",
    recommendedApproach:
      "Lojistik ve üretim tesislerinde DSM zemin iyileştirme, temel altı kolon düzeni ve gerektiğinde jet grout enjeksiyon perdesi birlikte kurgulanır.",
    qualityFocus:
      "Bursa sahalarında karot, kolon sürekliliği, bağlayıcı dozajı ve üretim kayıtları yatırımın işletme yüklerine uygun performans vermesi için izlenir.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-nasil-uygulanir", "jet-grout-nedir", "zemin-iyilestirme-yontemleri", "yer-alti-zemin-iyilestirme"]
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
      "Su kontrolü gereken alanlarda jet grout ve enjeksiyon; oturma kontrolü gereken geniş parsellerde ise [zemine uygun iyileştirme yöntemi seçimi](/knowledge/yer-alti-zemin-iyilestirme/) kriterlerine göre DSM zemin iyileştirme tercih edilebilir.",
    qualityFocus:
      "İzmir sahalarında basins kayıtları, kolon çapı doğrulaması ve yeraltı suyu davranışı kalite kabul sürecinin ana parçalarıdır.",
    serviceSlugs: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["jet-grout-hangi-zeminlerde-uygulanir", "jet-grout-kalite-kontrol", "dsm-nasil-uygulanir", "yer-alti-zemin-iyilestirme"]
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
      "Fore kazık, ankraj ve iksa sistemleri derin kazılarda; [derin zemin iyileştirme yöntemleri](/knowledge/yer-alti-zemin-iyilestirme/) ise taşıma ve oturma kontrolü gereken alanlarda devreye alınır.",
    qualityFocus:
      "Ankara sahalarında kazı kademeleri, ankraj kabul testleri, beton kayıtları ve deformasyon izleme planı kritik kalite verileridir.",
    serviceSlugs: ["fore-kazik", "ankraj", "iksa-sistemleri", "zemin-iyilestirme"],
    articleSlugs: ["fore-kazik-avantajlari", "zemin-iyilestirme-planlama", "saha-denetimi-numune-testleri", "yer-alti-zemin-iyilestirme"]
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
  },
  {
    slug: "igdir-zemin-guclendirme",
    city: "Iğdır",
    title: "Iğdır Zemin Güçlendirme ve Deprem Bölgesi Temel Çözümleri",
    description:
      "Iğdır'da Aras vadisi alüvyon koşulları, deprem bölgesi gereklilikleri ve soğuk iklim etkisiyle şekillenen zemin güçlendirme, fore kazık ve zemin iyileştirme uygulamaları.",
    heroLead:
      "Iğdır'da zemin güçlendirme projeleri; Aras Nehri alüvyon tabakaları, bölgenin yüksek depremselliği ve don-çözülme döngüsünün zemin davranışı üzerindeki etkisiyle birlikte değerlendirilmelidir.",
    soilContext:
      "Aras vadisinde kalın alüvyon kesitler, yerel kumlu-siltli tabakalar ve mevsimsel yüksek yeraltı suyu seviyeleri taşıma gücü ve sıvılaşma açısından risk oluşturabilir. Don derinliği ve iklimsel döngüler ise zemin davranışını mevsimden mevsime farklılaştırır.",
    recommendedApproach:
      "Konut ve kamu yapılarında fore kazık ile derinlere ulaşan güvenli temel; geniş platform ve altyapı projelerinde DSM zemin iyileştirme ile homojen taşıma kapasitesi sağlanabilir. Donma riski nedeniyle çimento dozajı ve koruma protokolleri saha koşullarına göre belirlenir.",
    qualityFocus:
      "Iğdır sahalarında mevsimsel çalışma planı, soğuk hava beton/çimento koruma protokolü, delgi verisi ile deprem bölgesi performans testleri birlikte yönetilmelidir.",
    serviceSlugs: ["fore-kazik", "dsm", "zemin-iyilestirme", "mini-kazik"],
    articleSlugs: ["fore-kazik-avantajlari", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "aksaray-zemin-guclendirme",
    city: "Aksaray",
    title: "Aksaray Zemin İyileştirme, DSM ve Sanayi Temel Çözümleri",
    description:
      "Aksaray'da volkanik kökenli zeminler, organize sanayi bölgesi projeleri ve lojistik tesisler için DSM zemin iyileştirme, jet grout ve fore kazık uygulamaları.",
    heroLead:
      "Aksaray'da zemin güçlendirme kararları; tüf ve volkanik kül kökenli zeminlerin değişken mukavemeti, sanayi yapılarının yüksek döşeme yükleri ve Tuz Gölü havzasına yakın bölgelerdeki sülfatlı zemin riski birlikte ele alınarak verilmelidir.",
    soilContext:
      "Kapadokya'nın batı uzantısında volkanik kökenli tüf, kül ve andezit parçalanma ürünleri kısa mesafede farklı rijitlik değerleri sergileyebilir. Bazı parsellerde yüksek sülfat içeriği çimento seçimini ve bağlayıcı dozajını doğrudan etkiler.",
    recommendedApproach:
      "Geniş sanayi platformlarında DSM zemin iyileştirme kolonları oturma kontrolü ve rijitlik artışı için tercih edilebilir; su kontrolü gereken alanlarda jet grout perdesi uygulanır. Değişken zemin profillerinde fore kazık ile selektif temel çözümü mümkündür.",
    qualityFocus:
      "Aksaray sahalarında bağlayıcı dozajı sülfat direncine göre belirlenmeli, kolon performans testleri, karışım denemeleri ve yerinde numune alımı kalite planının temelini oluşturmalıdır.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-nasil-uygulanir", "zemin-iyilestirme-yontemleri", "jet-grout-kalite-kontrol"]
  },
  {
    slug: "adana-zemin-guclendirme",
    city: "Adana",
    title: "Adana Zemin Güçlendirme, Jet Grout ve Çukurova Alüvyon Çözümleri",
    description:
      "Adana'da Çukurova alüvyonu, yüksek yeraltı suyu ve sanayi projeleri için jet grout, DSM zemin iyileştirme, fore kazık ve enjeksiyon uygulamaları.",
    heroLead:
      "Adana'da zemin güçlendirme projeleri; Seyhan ve Ceyhan nehirlerinin oluşturduğu kalın alüvyon kesitler, yüksek yeraltı suyu seviyeleri ve geniş lojistik platform ihtiyaçları gözetilerek tasarlanmalıdır.",
    soilContext:
      "Çukurova Ovası'nın derin alüvyon dolgusu yumuşak kil, gevşek kum-silt serileri ve yüksek su geçirgenliği barındırır. Sahile yakın parsellerde tuzluluk ve organik madde oranı zemin davranışını olumsuz etkileyebilir; bu bölgelerde taşıma gücü ve oturma hesabı proje özelinde yapılmalıdır.",
    recommendedApproach:
      "Yüksek yeraltı suyu koşullarında jet grout geçirimsizlik perdesi ve zemin stabilizasyonu birlikte kurgulanabilir; geniş depo ve sanayi platformlarında DSM zemin iyileştirme homojen bir taşıma kapasitesi sağlar. Nokta yükler için fore kazık tercih edilir.",
    qualityFocus:
      "Adana uygulamalarında akiferin yönetimi, enjeksiyon basınç ve debi kayıtları, kolon geometri doğrulaması ile uzun vadeli oturma izleme planı birlikte yürütülmelidir.",
    serviceSlugs: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["jet-grout-nedir", "jet-grout-hangi-zeminlerde-uygulanir", "dsm-nasil-uygulanir"]
  },
  {
    slug: "manisa-zemin-guclendirme",
    city: "Manisa",
    title: "Manisa Zemin Güçlendirme, DSM ve Sanayi Projesi Temel Çözümleri",
    description:
      "Manisa'da Gediz vadisi alüvyon koşulları, aktif sismik yapı ve büyük ölçekli sanayi projeleri için DSM zemin iyileştirme, jet grout ve fore kazık çözümleri.",
    heroLead:
      "Manisa'da zemin güçlendirme projeleri; Gediz Nehri'nin oluşturduğu derin alüvyon dolgusu, Gediz fayının aktif sismik yükü ve organize sanayi bölgelerinin yüksek platform ve taşıma talepleri bir arada değerlendirilerek yürütülmelidir.",
    soilContext:
      "Gediz vadisinde kumlu-siltli alüvyon tabakalar ve zaman zaman rastlanan yumuşak kil mercekleri, büyük açıklıklı yapılar altında diferansiyel oturma riskini artırır. Aktif fay yakınlığı nedeniyle sıvılaşma potansiyeli ve deprem yükü, temel sisteminin seçiminde belirleyici kriterler arasındadır.",
    recommendedApproach:
      "OSB içindeki geniş sanayi binalarında DSM zemin iyileştirme ile homojen rijitlik ve oturma kontrolü sağlanabilir; su geçirimsizliği gereken bölümlerde jet grout perdesi devreye alınır. Noktasal yüksek yükler ve mevcut yapı güçlendirmelerinde fore kazık çözümü değerlendirilir.",
    qualityFocus:
      "Manisa sahalarında karot ve basınç denemeleri, deprem bölgesi sıvılaşma değerlendirmesi, bağlayıcı dozaj kontrolü ve büyük platform üretim hızı takibi kalite planının temel bileşenleridir.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-malzeme-secinimi", "jet-grout-ve-dsm-farki", "zemin-kalite-kontrol-standartlari"]
  },
  {
    slug: "adiyaman-zemin-guclendirme",
    city: "Adıyaman",
    title: "Adıyaman Zemin Güçlendirme ve Deprem Bölgesi Çözümleri",
    description:
      "Adıyaman'da deprem sonrası yeniden yapılanma projeleri için jet grout, DSM zemin iyileştirme, fore kazık ve geoteknik danışmanlık hizmetleri.",
    heroLead:
      "Adıyaman'daki zemin güçlendirme çalışmaları; deprem sonrası oluşan yapısal performans hedefleri, yüksek sismik risk ve bölgedeki alüvyon-yamaç geçişleri dikkate alınarak planlanmaktadır.",
    soilContext:
      "Fırat havzası yakınındaki gevşek alüvyon zemin tabakaları ve merkez çevresindeki heterojen kil-kireçtaşı geçişleri taşıma kapasitesi ve sıvılaşma riskini ön plana çıkarmaktadır.",
    recommendedApproach:
      "Yeni yerleşim alanlarında zemin taşıma gücünü artırmak amacıyla DSM zemin iyileştirme; su etkisi altındaki ova kesimlerinde ise jet grout kolonları ve fore kazık temel sistemleri entegre edilir.",
    qualityFocus:
      "Adıyaman şantiyelerinde, zemin stabilizasyon performansı için basınçlı enjeksiyon takibi, karot alımı ve deprem dayanım testleri kalite standartlarımızın odağını oluşturur.",
    serviceSlugs: ["zemin-iyilestirme", "jet-grout", "dsm", "fore-kazik"],
    articleSlugs: ["zemin-iyilestirme-risk-yonetimi", "jet-grout-kalite-kontrol", "dsm-nasil-uygulanir"]
  },
  {
    slug: "afyonkarahisar-zemin-guclendirme",
    city: "Afyonkarahisar",
    title: "Afyonkarahisar Zemin Güçlendirme, DSM ve Termal Havza Çözümleri",
    description:
      "Afyonkarahisar'da termal su etkisindeki zeminler ve endüstriyel yatırımlar için jet grout, DSM zemin iyileştirme, fore kazık ve iksa sistemleri.",
    heroLead:
      "Afyonkarahisar'da zemin güçlendirme projeleri; bölgedeki yoğun fay hatları, termal akiferlerin kimyasal etkileri ve sanayi yapılarının yüksek taban yükleri göz önünde bulundurularak projelendirilir.",
    soilContext:
      "Merkez ova düzlüklerindeki yumuşak alüvyon dolgular ile jeotermal alanlardaki sıcak, yüksek sülfatlı yeraltı suları çimento bağlayıcısının dayanıklılığı açısından kritik önem taşır.",
    recommendedApproach:
      "Sülfata dayanıklı özel çimento katkılı DSM zemin iyileştirme ve jet grout uygulamaları ile kimyasal etkilere dayanıklı zemin kolonları inşa edilerek temeller güvenceye alınır.",
    qualityFocus:
      "Afyonkarahisar sahalarında enjeksiyon karışımının kimyasal analizi, bağlayıcı dozaj hassasiyeti ve kolon süreklilik testleri kalite kontrol sürecimizin vazgeçilmezidir.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "iksa-sistemleri"],
    articleSlugs: ["dsm-malzeme-secinimi", "jet-grout-ve-dsm-farki", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "amasya-zemin-guclendirme",
    city: "Amasya",
    title: "Amasya Zemin Güçlendirme ve Yeşilırmak Vadisi İksa Sistemleri",
    description:
      "Amasya'da Yeşilırmak vadisi alüvyonları, eğimli araziler ve kentsel yapılar için fore kazık, mini kazık, ankraj ve zemin iyileştirme.",
    heroLead:
      "Amasya'daki zemin güçlendirme çalışmaları; Yeşilırmak'ın şekillendirdiği dar vadi tabanları, tarihi dokunun korunması ve dik yamaçlardaki şantiye erişim kısıtları etrafında planlanır.",
    soilContext:
      "Yeşilırmak havzasındaki değişken kalınlıktaki taşkın alüvyonları, yüksek su seviyesi ve yamaç molozları, zemin taşıma gücünü ve yanal stabilitesini zayıflatabilmektedir.",
    recommendedApproach:
      "Vadi düzlüğündeki projelerde fore kazık ve jet grout ile geçirimsizlik; dik yamaç kazılarında ise mini kazık ve öngerilmeli ankraj sistemleriyle komşu yapı güvenliği sağlanır.",
    qualityFocus:
      "Amasya uygulamalarında delgi açısı doğruluğu, tarihi yapılardaki titreşim sınırları ve enjeksiyon debi takibi en üst seviyede tutulmaktadır.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "ankraj", "iksa-sistemleri"],
    articleSlugs: ["fore-kazik-nedir", "fore-kazik-uygulama-asamalari", "zemin-iyilestirme-planlama"]
  },
  {
    slug: "antalya-zemin-guclendirme",
    city: "Antalya",
    title: "Antalya Zemin Güçlendirme, Karstik Zemin ve İksa Çözümleri",
    description:
      "Antalya'da karstik boşluklu zeminler, kıyı turizm yapıları ve derin kazılar için jet grout, enjeksiyon, fore kazık ve iksa sistemleri.",
    heroLead:
      "Antalya'da zemin güçlendirme; kentin traverten yapısı, karstik boşlukların varlığı, yüksek yeraltı suyu ve kıyı yapılarının lojistik dinamikleri doğrultusunda çözülmelidir.",
    soilContext:
      "Kıyı şeridindeki alüvyon birikintiler ile traverten plato altındaki gizli karstik boşluklar ve yeraltı nehirleri, düzensiz taşıma gücü ve ani oturma riski yaratmaktadır.",
    recommendedApproach:
      "Karstik boşlukların doldurulması için kontrollü çimento enjeksiyonu ve kavitasyon doldurma adımları izlenirken, derin kazı iksa perdelerinde jet grout su kesme perdesi ve kazıklı iksa tasarlanır.",
    qualityFocus:
      "Antalya şantiyelerinde enjeksiyon tüketimi, boşluk dolum oranları, kazı deformasyonlarının takibi ve sismik izleme verileri kalite standardımızı belirler.",
    serviceSlugs: ["jet-grout", "fore-kazik", "iksa-sistemleri", "geoteknik-danismanlik"],
    articleSlugs: ["jet-grout-nedir", "jet-grout-hangi-zeminlerde-uygulanir", "zemin-iyilestirme-risk-yonetimi"]
  },
  {
    slug: "ardahan-zemin-guclendirme",
    city: "Ardahan",
    title: "Ardahan Zemin Güçlendirme ve Don Etkili Temel Tasarımı",
    description:
      "Ardahan'da sert iklim koşulları, yüksek rakım zeminleri ve kamu yatırımları için fore kazık, mini kazık ve zemin iyileştirme uygulamaları.",
    heroLead:
      "Ardahan'daki zemin güçlendirme projeleri; aşırı soğuk iklim koşulları, don derinliğinin zemin stabilitesine etkisi ve kısa süren saha çalışma takvimi yönetilerek gerçekleştirilir.",
    soilContext:
      "Mevsimsel donma-çözülme döngüleri yaşayan killi ve siltli zemin tabakaları, üst yapı temellerinde oturma ve kabarma hareketlerine neden olarak mukavemet kayıpları yaratabilir.",
    recommendedApproach:
      "Don derinliğinin altındaki kararlı tabakalara ulaşmak için fore kazık ve mini kazık temeller kurulur; çimento kürlenme sürecini korumak amacıyla sahada özel ısıtma ve katkı protokolleri uygulanır.",
    qualityFocus:
      "Ardahan sahalarında taze betonun sıcaklık takibi, soğuk hava koşullarında kür kalitesi ve donma öncesi dayanım kazanımı titizlikle doğrulanır.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "zemin-iyilestirme", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-avantajlari", "saha-denetimi-numune-testleri", "zemin-iyilestirme-planlama"]
  },
  {
    slug: "artvin-zemin-guclendirme",
    city: "Artvin",
    title: "Artvin Zemin Güçlendirme, Heyelan Kontrolü ve Ankraj Sistemleri",
    description:
      "Artvin'de dik yamaçlar, karayolu ve baraj altyapıları için aktif-pasif ankraj, mini kazık, fore kazık ve şev stabilizasyonu çözümleri.",
    heroLead:
      "Artvin'de zemin güçlendirme ve şev stabilitesi çalışmaları; aşırı engebeli topoğrafya, yüksek yağış rejimi, kaya düşmesi ve heyelan riskleri altında yürütülür.",
    soilContext:
      "Ayrışmış kaya yüzeyleri, dik şev eğimleri ve suya doymuş yamaç molozları, yanal toprak basıncını artırarak heyelan ve kayma düzlemi oluşturmaktadır.",
    recommendedApproach:
      "Şev stabilitesi ve yol geçişlerinde derin öngerilmeli ankraj sistemleri, mini kazık perdeleri ve püskürtme beton uygulamaları entegre edilerek heyelan riskleri kontrol altına alınır.",
    qualityFocus:
      "Artvin sahalarında ankraj germe ve kabul testleri, delgi doğrultusu izleme ve şev hareketlerini takip eden enstrümantasyon verileri kalitenin temelidir.",
    serviceSlugs: ["ankraj", "mini-kazik", "fore-kazik", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-nedir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "aydin-zemin-guclendirme",
    city: "Aydın",
    title: "Aydın Zemin Güçlendirme ve Menderes Havzası Sıvılaşma Önlemleri",
    description:
      "Aydın'da tarım ve sanayi havzası zeminleri için DSM zemin iyileştirme, jet grout, fore kazık ve sıvılaşma önleme mühendisliği.",
    heroLead:
      "Aydın'da zemin güçlendirme çalışmaları; Büyük Menderes havzasındaki gevşek tortullar, yüksek depremsellik riski ve tarımsal sulama kaynaklı su tablası değişkenlikleri dikkate alınarak tasarlanır.",
    soilContext:
      "Menderes ovasındaki suya doygun gevşek kum-silt tabakaları, olası depremlerde yüksek sıvılaşma potansiyeline sahiptir ve yapılarda ciddi diferansiyel oturmalara zemin hazırlayabilir.",
    recommendedApproach:
      "Sıvılaşma ve oturma kontrolü için geniş endüstriyel alanlarda DSM zemin iyileştirme; konut ve altyapı projelerinde ise jet grout kolonları ve derin fore kazık sistemleri tercih edilir.",
    qualityFocus:
      "Aydın şantiyelerinde sıvılaşma direncini artırmaya yönelik kolon yerleşimi, enjeksiyon basıncı doğrulaması ve yerinde karot mukavemet testleri kalite kabulünün ana unsurlarıdır.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-nasil-uygulanir", "jet-grout-kalite-kontrol", "zemin-kalite-kontrol-standartlari"]
  },
  {
    slug: "balikesir-zemin-guclendirme",
    city: "Balıkesir",
    title: "Balıkesir Zemin Güçlendirme, DSM ve Endüstriyel Temel İyileştirme",
    description:
      "Balıkesir'de yeni sanayi yatırımları, rüzgar santralleri ve lojistik depolar için DSM zemin iyileştirme, jet grout ve fore kazık çözümleri.",
    heroLead:
      "Balıkesir'de zemin güçlendirme; organize sanayi bölgesindeki geniş açıklıklı yapılar, yenilenebilir enerji temelleri ve farklı jeolojik oluşumların bir araya geldiği zemin profillerine göre kurgulanır.",
    soilContext:
      "Ova kesimlerindeki killi-siltli alüvyon birikintiler ağır endüstriyel yükler altında yüksek oturma davranışı gösterebilirken, yüksek bölgelerde kaya-kil geçişleri farklı oturmalara sebep olabilir.",
    recommendedApproach:
      "Sanayi döşemeleri altında oturma sınırlarını korumak için DSM zemin iyileştirme kolonları; rüzgar türbini ve yüksek yapı temellerinde ise yüksek taşıma kapasiteli fore kazıklar inşa edilir.",
    qualityFocus:
      "Balıkesir projelerinde makine enjeksiyon basınç kayıtları, eksenel yükleme testleri ve kolon süreklilik kabul formları kalite güvencemizi belgeler.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-malzeme-secinimi", "jet-grout-ve-dsm-farki", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "bartin-zemin-guclendirme",
    city: "Bartın",
    title: "Bartın Zemin Güçlendirme ve Bartın Çayı Taşkın Bölgesi Çözümleri",
    description:
      "Bartın'da taşkın düzlükleri, heyelanlı yamaçlar ve endüstriyel alanlar için jet grout, DSM zemin iyileştirme, fore kazık ve iksa sistemleri.",
    heroLead:
      "Bartın'da zemin güçlendirme çalışmaları; Bartın Çayı taşkın havzasındaki suya doygun alüvyonlar, Karadeniz ikliminin yüksek yağış etkisi ve yamaç stabilitesi gereksinimlerine göre şekillenir.",
    soilContext:
      "Nehir birikintisi olan gevşek mil, ince kum ve yumuşak kil tabakaları, yüksek yeraltı suyu seviyesiyle birleşerek aşırı oturma ve mukavemet kaybı riski sunar.",
    recommendedApproach:
      "Suya doygun havzalarda zemin kohezyonunu ve taşıma gücünü artırmak amacıyla jet grout ve DSM zemin iyileştirme; taşkın riski altındaki temellerde ise derin fore kazıklar ve iksa duvarları uygulanır.",
    qualityFocus:
      "Bartın şantiyelerinde kolon bütünlüğü, su altı beton döküm kalitesi ve akifer basıncı yönetimi enstrümantal yöntemlerle izlenmektedir.",
    serviceSlugs: ["jet-grout", "dsm", "fore-kazik", "iksa-sistemleri"],
    articleSlugs: ["jet-grout-kalite-kontrol", "dsm-nasil-uygulanir", "zemin-iyilestirme-risk-yonetimi"]
  },
  {
    slug: "batman-zemin-guclendirme",
    city: "Batman",
    title: "Batman Zemin Güçlendirme ve Dicle Havzası Alüvyon Çözümleri",
    description:
      "Batman'da endüstriyel tesisler, rafineri genişleme projeleri ve konut alanları için jet grout, DSM zemin iyileştirme ve fore kazık uygulamaları.",
    heroLead:
      "Batman'da zemin güçlendirme projeleri; Dicle Nehri havzasındaki taşkın tortulları, petrol ve endüstri tesislerinin ağır işletme yükleri ve sismik etkiler dikkate alınarak tasarlanır.",
    soilContext:
      "Dicle havzasındaki kalın ve suya doygun çakıl-kum-kil ardalanması, özellikle ağır endüstriyel tesisler ve tank temelleri altında yüksek taşıma kapasitesi ve oturma hassasiyeti yaratmaktadır.",
    recommendedApproach:
      "Sanayi binaları ve depolama sahalarında taşıma gücünü homojen hale getirmek amacıyla DSM ve jet grout zemin iyileştirme; ağır yük barındıran ünitelerde ise fore kazık temel tasarımı tercih edilir.",
    qualityFocus:
      "Batman uygulamalarında enjeksiyon parametrelerinin gerçek zamanlı izlenmesi, yerinde penetrasyon deneyleri ve karot numunelerinin mukavemet testleri kalite kontrol sürecimizin merkezindedir.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-nasil-uygulanir", "jet-grout-ve-dsm-farki", "zemin-kalite-kontrol-standartlari"]
  },
  {
    slug: "bayburt-zemin-guclendirme",
    city: "Bayburt",
    title: "Bayburt Zemin Güçlendirme ve Alüvyon Havza Çözümleri",
    description:
      "Bayburt'ta Çoruh havzası taşkın düzlükleri ve kamu yatırımları için fore kazık, mini kazık, zemin iyileştirme ve enjeksiyon uygulamaları.",
    heroLead:
      "Bayburt'ta zemin güçlendirme çalışmaları; Çoruh Nehri taşkın yatağındaki gevşek alüvyonlar, değişken kaya geçişleri ve yüksek rakım iklim kısıtları analiz edilerek planlanır.",
    soilContext:
      "Çoruh havzası çevresindeki kumlu-siltli taşkın çökelleri ve zayıf kaya birimleri, yüksek yeraltı suyu seviyesi nedeniyle taşıma gücü ve oturma riskleri barındırır.",
    recommendedApproach:
      "Alüvyon sahalardaki yapılar için fore kazık ve mini kazık ile derin temel çözümü uygulanırken, enjeksiyonlu iyileştirmeler ile zemin taşıma kapasitesi artırılır.",
    qualityFocus:
      "Bayburt sahalarında don etkisine karşı enjeksiyon kürlenme takibi, delgi profili sürekliliği ve beton kalite kontrol testleri titizlikle izlenmektedir.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "zemin-iyilestirme", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-nedir", "saha-denetimi-numune-testleri", "zemin-iyilestirme-planlama"]
  },
  {
    slug: "bilecik-zemin-guclendirme",
    city: "Bilecik",
    title: "Bilecik Zemin Güçlendirme, Ankraj ve İksa Çözümleri",
    description:
      "Bilecik'te sanayi tesisleri, şev duraylılığı projeleri ve derin kazılar için fore kazık, ankraj, mini kazık ve iksa sistemleri.",
    heroLead:
      "Bilecik'te zemin güçlendirme projeleri; engebeli topoğrafya, değişken kil-kaya geçiş profilleri ve hızla büyüyen sanayi bölgelerinin platform yükleri göz önüne alınarak tasarlanır.",
    soilContext:
      "Bölgedeki killerin şişme potansiyeli ve eğimli alanlardaki heyelan riski taşıyan zayıf şev birimleri, temellerde ve kazı duvarlarında yanal deplasman kontrolü gerektirir.",
    recommendedApproach:
      "Eğimli arazilerde şev stabilizasyonu için aktif ankrajlar ve püskürtme beton; derin temel tasarımlarında ise yüksek taşıma kapasiteli fore kazık ve mini kazık sistemleri entegre edilir.",
    qualityFocus:
      "Bilecik şantiyelerinde ankraj test yükleme değerleri, delgi düşeyliği doğrulaması ve zemin nem-şişme davranışı kalite kontrollerimizin odağındadır.",
    serviceSlugs: ["fore-kazik", "ankraj", "iksa-sistemleri", "mini-kazik"],
    articleSlugs: ["fore-kazik-uygulama-asamalari", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "bingol-zemin-guclendirme",
    city: "Bingöl",
    title: "Bingöl Deprem Bölgesi Zemin Güçlendirme ve DSM",
    description:
      "Bingöl deprem bölgesinde sıvılaşma önlemleri ve yeniden yapılanma projeleri için DSM zemin iyileştirme, jet grout, fore kazık ve temel güçlendirme.",
    heroLead:
      "Bingöl'de zemin güçlendirme kararları; Doğu Anadolu Fay Hattı üzerindeki yüksek depremsellik riski, havza çökellerinin yapısı ve sismik performans hedefleriyle birlikte ele alınmalıdır.",
    soilContext:
      "Çapakçur havzasındaki suya doygun gevşek alüvyonlar ve kum-silt tabakaları sismik sarsıntı altında yüksek sıvılaşma ve ani oturma riski sergileyebilir.",
    recommendedApproach:
      "Deprem dayanımı ve sıvılaşmanın önlenmesi amacıyla geniş alanlarda derin çimento karıştırma (DSM) zemin iyileştirme ve jet grout kolon yapısı entegre edilir.",
    qualityFocus:
      "Bingöl sahalarında yerinde dayanım testleri, karot numuneleri, enjeksiyon hacim tüketimi ve sismik tasarım kriterlerine uyum kalite kabulünün temelidir.",
    serviceSlugs: ["zemin-iyilestirme", "dsm", "jet-grout", "fore-kazik"],
    articleSlugs: ["zemin-iyilestirme-risk-yonetimi", "dsm-nasil-uygulanir", "jet-grout-kalite-kontrol"]
  },
  {
    slug: "bitlis-zemin-guclendirme",
    city: "Bitlis",
    title: "Bitlis Zemin Güçlendirme ve Volkanik Zemin Çözümleri",
    description:
      "Bitlis'te volkanik kökenli zemin yapısı ve dik topoğrafya projeleri için fore kazık, mini kazık, zemin iyileştirme ve enjeksiyon.",
    heroLead:
      "Bitlis'te zemin güçlendirme çalışmaları; Nemrut volkanizmasının getirdiği heterojen tüf birimleri, dik yamaçlar ve sert kış ikliminin zemin üzerindeki etkileri yönetilerek yapılır.",
    soilContext:
      "Değişken mukavemetli tüf, kül ve bazalt geçişleri kısa mesafelerde farklı oturma davranışları sergileyebilir ve temel stabilitesini etkileyebilir.",
    recommendedApproach:
      "Farklı oturmaları sınırlamak için fore kazık ve mini kazık temeller tasarlanırken, şevli yollarda püskürtme beton ve enjeksiyon uygulamaları ile stabilizasyon sağlanır.",
    qualityFocus:
      "Bitlis şantiyelerinde volkanik kaya-tüf geçişlerindeki delgi parametreleri, beton yerleşim sürekliliği ve donma koruma protokolleri izlenmektedir.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "zemin-iyilestirme", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-nedir", "fore-kazik-avantajlari", "zemin-iyilestirme-planlama"]
  },
  {
    slug: "bolu-zemin-guclendirme",
    city: "Bolu",
    title: "Bolu Zemin Güçlendirme, DSM ve Heyelan Önleme Sistemleri",
    description:
      "Bolu'da yumuşak gölsel killer, heyelan riski taşıyan dik yamaçlar ve otoyol yapıları için DSM zemin iyileştirme, fore kazık, mini kazık ve ankraj.",
    heroLead:
      "Bolu'da zemin güçlendirme projeleri; otoyol koridorlarındaki şev stabilitesi ihtiyaçları, havza kili oturma davranışları ve aktif Kuzey Anadolu Fay Hattı sismik verileriyle tasarlanır.",
    soilContext:
      "Bölgede yaygın olan yüksek plastikli gölsel kil seviyeleri ve suya doygun yamaç molozları aşırı oturma, kayma ve mukavemet kayıpları yaratabilir.",
    recommendedApproach:
      "Kil zeminlerde oturma kontrolü için DSM zemin iyileştirme; eğimli heyelan bölgelerinde ise fore kazık perde duvarları ile aktif öngerilmeli ankraj kombinasyonu uygulanır.",
    qualityFocus:
      "Bolu sahalarında killi zeminlerin şişme-oturmaları, ankraj germe kabul testleri ve yamaç deformasyon enstrümantasyon kayıtları yakından izlenmektedir.",
    serviceSlugs: ["dsm", "fore-kazik", "ankraj", "mini-kazik"],
    articleSlugs: ["dsm-nasil-uygulanir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "burdur-zemin-guclendirme",
    city: "Burdur",
    title: "Burdur Zemin Güçlendirme ve Göller Yöresi Alüvyon Çözümleri",
    description:
      "Burdur'da gölsel alüvyon çökelleri, sıvılaşma riski ve konut projeleri için jet grout, DSM zemin iyileştirme, fore kazık ve temel güçlendirme.",
    heroLead:
      "Burdur'daki zemin güçlendirme çalışmaları; göl havzası alüvyonlarının değişken yapısı, yüksek sismik risk ve yeraltı suyu seviyesinin dinamikleri doğrultusunda çözülmelidir.",
    soilContext:
      "Havza tabanındaki ince daneli kum, silt ve yumuşak gölsel kil tabakaları deprem anında sıvılaşmaya ve yapı altında taşıma gücü kayıplarına neden olabilir.",
    recommendedApproach:
      "Ova parsellerinde sıvılaşmayı önlemek için jet grout enjeksiyonu ve DSM zemin iyileştirme; noktasal yapı yükleri için ise fore kazık temel mühendisliği tercih edilir.",
    qualityFocus:
      "Burdur şantiyelerinde kolon çapı ve süreklilik doğrulamaları, enjeksiyon sarfiyatı ve yeraltı suyu değişimleri kalite güvencemizin merkezindedir.",
    serviceSlugs: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["jet-grout-nedir", "jet-grout-ve-dsm-farki", "zemin-kalite-kontrol-standartlari"]
  },
  {
    slug: "canakkale-zemin-guclendirme",
    city: "Çanakkale",
    title: "Çanakkale Kıyı Bölgesi Zemin Güçlendirme ve Fore Kazık",
    description:
      "Çanakkale'de kıyı yapıları, rüzgar santralleri ve köprü bağlantı yolları için fore kazık, jet grout, DSM ve geoteknik danışmanlık.",
    heroLead:
      "Çanakkale'de zemin güçlendirme çalışmaları; kıyı etkisi, boğaz akıntıları altındaki gevşek birikintiler, rüzgar türbini dinamik yükleri ve bölgedeki aktif sismik hatlar dikkate alınarak planlanır.",
    soilContext:
      "Kıyı düzlüklerindeki suya doygun siltli kum tabakaları ve denizel tortullar, yüksek yükler altında sıvılaşma ve oturma davranışı gösterebilir.",
    recommendedApproach:
      "Kıyı yapısı temellerinde ve rüzgar santrallerinde yüksek yanal dayanım için büyük çaplı fore kazıklar; geniş dolgu sahalarında ise DSM zemin iyileştirme entegrasyonu kullanılır.",
    qualityFocus:
      "Çanakkale sahalarında deniz suyu kimyasal etkilerine dayanıklı çimento kullanımı, düşeylik kontrolü ve ultrasonik kazık bütünlük testleri kalite standardımızın parçasıdır.",
    serviceSlugs: ["fore-kazik", "jet-grout", "dsm", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-nedir", "jet-grout-kalite-kontrol", "zemin-iyilestirme-risk-yonetimi"]
  },
  {
    slug: "cankiri-zemin-guclendirme",
    city: "Çankırı",
    title: "Çankırı Zemin Güçlendirme ve Jipsli Zemin Çözümleri",
    description:
      "Çankırı'da jipsli/tuzlu zemin birimleri ve endüstriyel parseller için DSM zemin iyileştirme, fore kazık, enjeksiyon ve geoteknik risk yönetimi.",
    heroLead:
      "Çankırı'da zemin güçlendirme projeleri; bölgede yaygın olan jips (alçıtaşı) ve tuz katmanlarının çözünme özellikleri, kimyasal zemin agresifliği ve yerel kil oturma riskleri göz önüne alınarak tasarlanır.",
    soilContext:
      "Jipsli tabakalardaki yeraltı suyu sirkülasyonu, karstlaşma ve erime boşlukları oluştururken, yüksek sülfat içeriği beton ve çimento bağlayıcısına zarar verici etki yapabilir.",
    recommendedApproach:
      "Sülfata dayanıklı özel bağlayıcı tasarımlı DSM zemin iyileştirme kolonları ve fore kazık uygulamaları; erime boşluklarının tespiti durumunda ise çimento enjeksiyonu ile boşluk doldurma yapılır.",
    qualityFocus:
      "Çankırı sahalarında kullanılan çimentonun kimyasal karakteri, enjeksiyon yayılım performansı ve karstik boşluk dolum oranları titizlikle kontrol edilir.",
    serviceSlugs: ["dsm", "fore-kazik", "zemin-iyilestirme", "geoteknik-danismanlik"],
    articleSlugs: ["dsm-malzeme-secinimi", "zemin-iyilestirme-yontemleri", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "corum-zemin-guclendirme",
    city: "Çorum",
    title: "Çorum Zemin Güçlendirme ve Sanayi Yapısı DSM Çözümleri",
    description:
      "Çorum'da endüstriyel tesisler, tuğla-kiremit sanayi alanları ve lojistik depolar için DSM zemin iyileştirme, jet grout ve fore kazık.",
    heroLead:
      "Çorum'da zemin güçlendirme kararları; sanayi tesislerinin geniş taban açıklıkları, ağır makine döşeme yükleri ve lokal alüvyon-kil profillerinin oturma davranışları analiz edilerek verilir.",
    soilContext:
      "Merkez ova düzlüklerindeki siltli-killi çökeller ve zayıf sıkışmış dolgular taşıma gücü yetersizliği ve diferansiyel oturma riskleri sergilemektedir.",
    recommendedApproach:
      "Depolama ve üretim sahalarında oturma sınırlarını kabul edilebilir düzeyde tutmak amacıyla DSM zemin iyileştirme; noktasal kolon yükleri için fore kazık sistemleri tercih edilir.",
    qualityFocus:
      "Çorum sahalarında kolon bağlayıcı dozajının homojenliği, karot mukavemet sonuçları ve zemin taşıma kapasitesi testleri kalite doğrulamamızın merkezidir.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-nasil-uygulanir", "jet-grout-ve-dsm-farki", "zemin-kalite-kontrol-standartlari"]
  },
  {
    slug: "denizli-zemin-guclendirme",
    city: "Denizli",
    title: "Denizli Zemin Güçlendirme, Jet Grout ve Tektonik Akifer Çözümleri",
    description:
      "Denizli'de jeotermal havza alanları, organize sanayi projeleri ve yüksek yapılar için jet grout, DSM zemin iyileştirme, fore kazık ve iksa sistemleri.",
    heroLead:
      "Denizli'de zemin güçlendirme projeleri; fay hatlarıyla kontrol edilen aktif tektonik havza yapısı, sıcak yeraltı suları ve endüstriyel tesislerin oturma hassasiyetine göre kurgulanır.",
    soilContext:
      "Gediz ve Büyük Menderes grabenlerinin birleştiği bölgedeki gevşek alüvyonlar ve jeotermal etki altındaki agresif zemin akiferleri mukavemet ve beton dayanıklılığı açısından risk taşır.",
    recommendedApproach:
      "Sıcak ve sülfatlı yeraltı suyu varlığında özel çimentolu jet grout ve DSM zemin iyileştirme kolonları; derin temel yüklerini taşımak için ise fore kazık ve iksa perdeleri entegre edilir.",
    qualityFocus:
      "Denizli şantiyelerinde akifer kimyasal analizine uygun mix tasarımı, enjeksiyon basınç kayıtları ve eksenel/yanal yükleme testleri kalite kabulünün parçasıdır.",
    serviceSlugs: ["jet-grout", "dsm", "fore-kazik", "iksa-sistemleri"],
    articleSlugs: ["jet-grout-nedir", "dsm-nasil-uygulanir", "zemin-iyilestirme-risk-yonetimi"]
  },
  {
    slug: "diyarbakir-zemin-guclendirme",
    city: "Diyarbakır",
    title: "Diyarbakır Zemin Güçlendirme ve Bazalt Zemin İyileştirme",
    description:
      "Diyarbakır'da sert bazalt zeminler, nehir taşkın yatakları ve endüstriyel parseller için fore kazık, mini kazık, DSM zemin iyileştirme ve ankraj.",
    heroLead:
      "Diyarbakır'da zemin güçlendirme projeleri; Karacadağ kökenli sert bazalt tabakaları, Dicle havzası alüvyon çökelleri ve ağır yapısal yükler birlikte ele alınarak tasarlanır.",
    soilContext:
      "Dicle havzasında gevşek siltli-killi birikintiler bulunurken, şehrin diğer kesimlerinde çok yüksek mukavemetli ancak kırıklı bazalt akıntıları delgi ekipmanı seçimi açısından kritik eşik oluşturur.",
    recommendedApproach:
      "Havza kili üzerinde oturan yapılarda oturma kontrolü için DSM zemin iyileştirme; bazalt geçişli veya yüksek katlı projelerde ise ağır hizmet rotary delgi makineleriyle fore kazık uygulamaları kurgulanır.",
    qualityFocus:
      "Diyarbakır sahalarında bazalt delgi hızı takibi, ankraj ankrajlama derinliği ve beton döküm sürekliliği kalite kontrolümüzün temel taşlarıdır.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "dsm", "ankraj"],
    articleSlugs: ["fore-kazik-nedir", "fore-kazik-uygulama-asamalari", "zemin-iyilestirme-planlama"]
  },
  {
    slug: "duzce-zemin-guclendirme",
    city: "Düzce",
    title: "Düzce Zemin Güçlendirme, Deprem Dayanımı ve Jet Grout",
    description:
      "Düzce'de sismik sıvılaşma riskli ova zeminleri ve endüstriyel tesisler için jet grout, DSM zemin iyileştirme, fore kazık ve iksa sistemleri.",
    heroLead:
      "Düzce'de zemin güçlendirme çalışmaları; yüksek yeraltı suyu seviyesi barındıran ova dolguları, yoğun sismik geçmiş ve sıvılaşma riskleri analiz edilerek yürütülür.",
    soilContext:
      "Düzce ovasının kalın gölsel-akarsu alüvyonları, deprem sarsıntısı altında yüksek sıvılaşma potansiyeli ve ani taşıma gücü kayıpları yaratabilen kum-silt tabakaları içerir.",
    recommendedApproach:
      "Sıvılaşmanın önlenmesi ve zemin rijitliğinin artırılması amacıyla jet grout kolon perdesi ve DSM zemin iyileştirme; ağır sanayi tesisleri altında ise fore kazık derin temel çözümleri devreye alınır.",
    qualityFocus:
      "Düzce sahalarında enjeksiyon basıncı izleme, kolon çapı süreklilik kaydı ve yerinde mukavemet testleri kalite kabul formlarımızın temel parçalarıdır.",
    serviceSlugs: ["jet-grout", "dsm", "fore-kazik", "iksa-sistemleri"],
    articleSlugs: ["jet-grout-nedir", "jet-grout-kalite-kontrol", "zemin-iyilestirme-risk-yonetimi"]
  },
  {
    slug: "edirne-zemin-guclendirme",
    city: "Edirne",
    title: "Edirne Zemin Güçlendirme ve Meriç Havzası Çözümleri",
    description:
      "Edirne'de taşkın düzlükleri, tarihi eser koruma projeleri ve sanayi yapıları için fore kazık, mini kazık, zemin iyileştirme ve jet grout.",
    heroLead:
      "Edirne'deki zemin güçlendirme projeleri; Meriç ve Tunca nehirlerinin taşkın yatakları, kentsel dönüşüm alanlarındaki gevşek dolgular ve tarihi yapıların korunması hedefleriyle tasarlanır.",
    soilContext:
      "Nehir boylarındaki yüksek yeraltı suyu tablası ve çok gevşek siltli kum seviyeleri, yapıların taşıma gücü sınırları ve oturma toleransları üzerinde doğrudan belirleyicidir.",
    recommendedApproach:
      "Tarihi yapılarda titreşimsiz mini kazık ve temel güçlendirme enjeksiyonu; nehir havzasındaki yeni yatırımlarda ise fore kazık ve jet grout zemin iyileştirme sistemleri entegre edilir.",
    qualityFocus:
      "Edirne sahalarında çevre yapılardaki sismik sarsıntı izleme verileri, su altı beton döküm kalitesi ve enjeksiyon yayılım kayıtları kalite planının merkezindedir.",
    serviceSlugs: ["mini-kazik", "fore-kazik", "jet-grout", "zemin-iyilestirme"],
    articleSlugs: ["fore-kazik-avantajlari", "jet-grout-hangi-zeminlerde-uygulanir", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "elazig-zemin-guclendirme",
    city: "Elazığ",
    title: "Elazığ Deprem Bölgesi Zemin Güçlendirme ve Ankraj",
    description:
      "Elazığ'da deprem bölgesi zemin koşulları, kentsel dönüşüm ve derin kazılar için fore kazık, ankraj, jet grout ve DSM zemin iyileştirme.",
    heroLead:
      "Elazığ'da zemin güçlendirme çalışmaları; Doğu Anadolu Fay Hattı sismik parametreleri, eğimli şehir yapısı ve değişken kil-kaya zemin özellikleri dikkate alınarak şekillendirilir.",
    soilContext:
      "Bölgedeki yüksek depremsellik ve dik kazı sahalarındaki yanal basınçlar, özellikle derin temel kazılarında ve şevlerde güvenlik sınırlarının yüksek tutulmasını gerektirir.",
    recommendedApproach:
      "Derin kazı sınırlarında fore kazıklı iksa ve öngerilmeli aktif ankraj sistemleri; ova kesimlerindeki yeni konut temelleri altında ise jet grout veya DSM zemin iyileştirme tercih edilir.",
    qualityFocus:
      "Elazığ şantiyelerinde ankraj test yükleme değerleri, kazı deplasman izleme okumaları ve beton bütünlük testleri kalite kontrol sürecimizin vazgeçilmezleridir.",
    serviceSlugs: ["fore-kazik", "ankraj", "jet-grout", "iksa-sistemleri"],
    articleSlugs: ["fore-kazik-uygulama-asamalari", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "erzincan-zemin-guclendirme",
    city: "Erzincan",
    title: "Erzincan Deprem Bölgesi Sıvılaşma Önleme ve DSM",
    description:
      "Erzincan deprem havzasında gevşek alüvyonlar ve yüksek sıvılaşma riskleri için DSM zemin iyileştirme, jet grout, fore kazık ve geoteknik tasarım.",
    heroLead:
      "Erzincan'da zemin güçlendirme projeleri; geçmişteki yıkıcı sismik olaylar, havzanın kalın gevşek alüvyon profili ve yüksek su tablası nedeniyle son derece hassas tasarlanmalıdır.",
    soilContext:
      "Erzincan havzasının suya doygun ve gevşek kum-çakıl-silt çökelleri, deprem sarsıntısı altında sıvılaşma, oturma ve yanal yayılma açısından yüksek risk taşımaktadır.",
    recommendedApproach:
      "Zeminin sıvılaşmaya karşı direncini artırmak ve taşıma kapasitesini homojen hale getirmek amacıyla geniş alanlarda DSM zemin iyileştirme ve jet grout kolonları birlikte kurgulanır.",
    qualityFocus:
      "Erzincan sahalarında don etkisine karşı enjeksiyon kür takibi, kolon sürekliliği kontrolü ve deprem bölgesi kalite kabul kriterleri eksiksiz yürütülür.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-nasil-uygulanir", "jet-grout-kalite-kontrol", "zemin-kalite-kontrol-standartlari"]
  },
  {
    slug: "erzurum-zemin-guclendirme",
    city: "Erzurum",
    title: "Erzurum Zemin Güçlendirme ve Don Etkili Zemin Çözümleri",
    description:
      "Erzurum'da soğuk iklim koşulları, killi zeminler ve kamu yapıları için fore kazık, mini kazık, enjeksiyon ve zemin iyileştirme.",
    heroLead:
      "Erzurum'da zemin güçlendirme çalışmaları; aşırı don derinliği, donma-çözülme döngüleri altında değişen kil mukavemetleri ve kısa saha imalat sezonu planlanarak yürütülür.",
    soilContext:
      "Killi ve siltli ova zeminlerinin donma etkisiyle hacimsel değişime uğraması ve mukavemet kaybetmesi, üstyapı temellerinde yapısal hasarlara yol açabilir.",
    recommendedApproach:
      "Don derinliğinin altındaki kararlı tabakalara yük aktarmak için fore kazık ve mini kazık temeller; dona karşı dayanıklı bağlayıcı katkılı enjeksiyon çözümleriyle zemin iyileştirme yapılır.",
    qualityFocus:
      "Erzurum şantiyelerinde soğuk hava beton döküm ısı takipleri, numune koruma prosedürleri ve çimento priz dayanımları kalite kontrollerimizin odağındadır.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "zemin-iyilestirme", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-avantajlari", "saha-denetimi-numune-testleri", "zemin-iyilestirme-planlama"]
  },
  {
    slug: "eskisehir-zemin-guclendirme",
    city: "Eskişehir",
    title: "Eskişehir Zemin Güçlendirme, DSM ve Porsuk Havzası İyileştirmeleri",
    description:
      "Eskişehir'de Porsuk Çayı alüvyonları, yüksek oturma riskli killer ve organize sanayi yatırımları için DSM zemin iyileştirme, fore kazık ve jet grout.",
    heroLead:
      "Eskişehir'de zemin güçlendirme; organize sanayi bölgesindeki yüksek döşeme yükleri, Porsuk havzasındaki gölsel-akarsu killeri ve oturma hassasiyetleri birlikte yönetilerek yapılır.",
    soilContext:
      "Porsuk havzasındaki yüksek plastisiteli yumuşak killer ve gevşek silt tabakaları, ağır yapılar altında yüksek zamana bağlı (konsolidasyon) oturma davranışı gösterir.",
    recommendedApproach:
      "Geniş fabrika taban alanlarında oturmayı sınırlamak ve homojen taşıma gücü sağlamak için DSM zemin iyileştirme kolonları; ağır kolon yüklerinde fore kazık uygulamaları tasarlanır.",
    qualityFocus:
      "Eskişehir sahalarında bağlayıcı dozajının laboratuvar mix tasarımıyla uyumu, kolon karot mukavemet değerleri ve zemin performans izleme kayıtları incelenir.",
    serviceSlugs: ["dsm", "fore-kazik", "jet-grout", "zemin-iyilestirme"],
    articleSlugs: ["dsm-malzeme-secinimi", "jet-grout-ve-dsm-farki", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "gaziantep-zemin-guclendirme",
    city: "Gaziantep",
    title: "Gaziantep Zemin Güçlendirme ve Sanayi Yapısı Temel Çözümleri",
    description:
      "Gaziantep'te killi zeminler, organize sanayi genişleme projeleri ve derin kazılar için fore kazık, ankraj, mini kazık ve zemin iyileştirme.",
    heroLead:
      "Gaziantep'te zemin güçlendirme çalışmaları; organize sanayi bölgelerindeki geniş açıklıklı ağır sanayi tesisleri, killi zeminler ve sismik risk faktörleri gözetilerek kurgulanır.",
    soilContext:
      "Bölgedeki yüksek plastisiteli ve değişken nem içerikli kil tabakaları kurak-yağışlı mevsim döngülerinde şişme-büzülme davranışı sergileyerek temellere düzensiz yükler aktarabilir.",
    recommendedApproach:
      "Şişme riskini kontrol etmek ve taşıma kapasitesini artırmak için DSM zemin iyileştirme; derin kazılarda ankrajlı kazık perdeleri ve ağır yapı temellerinde fore kazıklar tasarlanır.",
    qualityFocus:
      "Gaziantep sahalarında kilin şişme basınç testleri, ankraj yükleme kabul testleri ve platform seviye hassasiyeti kalite doğrulamamızın merkezidir.",
    serviceSlugs: ["fore-kazik", "dsm", "ankraj", "iksa-sistemleri"],
    articleSlugs: ["fore-kazik-nedir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "giresun-zemin-guclendirme",
    city: "Giresun",
    title: "Giresun Zemin Güçlendirme, Heyelan Kontrolü ve Kazık Çözümleri",
    description:
      "Giresun'da dik yamaçlar, karayolu şevleri ve kıyı dolgu sahaları için fore kazık, mini kazık, ankraj ve heyelan önleme mühendisliği.",
    heroLead:
      "Giresun'da zemin güçlendirme ve şev stabilitesi çalışmaları; Doğu Karadeniz'in dik eğimli topoğrafyası, yüksek yağış rejimi ve kıyı dolgu alanlarının oturma davranışları dikkate alınarak yapılır.",
    soilContext:
      "Aşırı yağış alan suya doymuş yamaç molozları ve kıyı kesimindeki gevşek yapay dolgular, yanal zemin basıncını artırarak kayma ve oturma risklerini tetikler.",
    recommendedApproach:
      "Yamaç stabilitesini korumak için derin öngerilmeli ankrajlar ve mini kazıklı istinat duvarları; sahil kesimindeki yapılarda ise fore kazıklı derin temeller uygulanır.",
    qualityFocus:
      "Giresun şantiyelerinde ankraj germe yük ve deformasyon kayıtları, delgi eğim doğrulamaları ve su altı beton yerleşim kalitesi yakından izlenmektedir.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "ankraj", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-nedir", "saha-denetimi-numune-testleri", "zemin-iyilestirme-planlama"]
  },
  {
    slug: "gumushane-zemin-guclendirme",
    city: "Gümüşhane",
    title: "Gümüşhane Zemin Güçlendirme, Şev Stabilitesi ve Ankraj Çözümleri",
    description:
      "Gümüşhane'de engebeli arazi geçişleri, yol kazıları ve maden sahaları için fore kazık, mini kazık, ankraj ve şev duraylılığı uygulamaları.",
    heroLead:
      "Gümüşhane'de zemin güçlendirme çalışmaları; Harşit vadisi alüvyonları, aşırı engebeli arazi yapısı ve maden/altyapı kazılarının yanal kararlılık gereksinimleri gözetilerek planlanır.",
    soilContext:
      "Harşit Çayı yatağındaki kumlu-çakıllı alüvyon kesitler ile dik yamaçlardaki ayrışmış kaya tabakaları taşıma gücü belirsizliği ve kaya düşmesi/şev kayması riskleri barındırır.",
    recommendedApproach:
      "Yol ve altyapı kazılarında stabiliteyi korumak amacıyla öngerilmeli ankraj perdeleri ve püskürtme beton; vadi tabanındaki yapılarda ise mini kazık ve fore kazık sistemleri uygulanır.",
    qualityFocus:
      "Gümüşhane sahalarında ankraj germe verileri, delgi doğrultusu ölçümleri ve enjeksiyon sarf takibi kalite planımızın temel taşlarıdır.",
    serviceSlugs: ["ankraj", "mini-kazik", "fore-kazik", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-uygulama-asamalari", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "hakkari-zemin-guclendirme",
    city: "Hakkari",
    title: "Hakkari Zemin Güçlendirme ve Kaya Sınıfı Şev Çözümleri",
    description:
      "Hakkari'de engebeli dağlık topoğrafya, kaya şevleri ve askeri/kamu yapıları için fore kazık, mini kazık, ankraj ve zemin enjeksiyon sistemleri.",
    heroLead:
      "Hakkari'deki zemin güçlendirme çalışmaları; yüksek rakımlı dağ yamaçları, dik şev eğimleri ve kaya kütlelerinin yapısal süreksizlikleri analiz edilerek planlanır.",
    soilContext:
      "Bölgedeki aşırı engebeli arazi yapısı ve kırıklı kaya birimleri, yamaç molozları ile birleşerek heyelan ve kaya düşmesi risklerini artırmaktadır.",
    recommendedApproach:
      "Şev duraylılığını sağlamak amacıyla derin öngerilmeli ankrajlar ve püskürtme beton; kamu yapısı temellerinde ise mini kazıklı stabilizasyon çözümleri entegre edilir.",
    qualityFocus:
      "Hakkari şantiyelerinde don etkisine karşı çimento priz takibi, ankraj germe kabul testleri ve delgi doğrultusu ölçümleri kalite kontrolümüzün temelidir.",
    serviceSlugs: ["ankraj", "mini-kazik", "fore-kazik", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-nedir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "isparta-zemin-guclendirme",
    city: "Isparta",
    title: "Isparta Zemin Güçlendirme ve Karstik Gözenek Çözümleri",
    description:
      "Isparta'da karstik zemin boşlukları, gölsel alüvyonlar ve endüstriyel parseller için jet grout, DSM zemin iyileştirme, fore kazık ve enjeksiyon.",
    heroLead:
      "Isparta'da zemin güçlendirme; karstik kireçtaşı boşlukları, göl havzası tortulları ve yapısal oturma toleransları bir arada değerlendirilerek yürütülür.",
    soilContext:
      "Gölsel alüvyon çökellerin yumuşak kil-silt tabakaları taşıma gücü yetersizliği yaratırken, kireçtaşı platonun altındaki karstik erime boşlukları ani oturma riski sunar.",
    recommendedApproach:
      "Boşluklu yapılarda dolgu ve stabilizasyon enjeksiyonu; gevşek gölsel çökeller üzerinde ise homojen taşıma gücü için DSM veya jet grout kolonları tasarlanır.",
    qualityFocus:
      "Isparta sahalarında enjeksiyon dolum oranları, mix dozaj takibi ve yerinde mukavemet karot alımları kalite planımızın esasını oluşturur.",
    serviceSlugs: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["jet-grout-nedir", "dsm-nasil-uygulanir", "zemin-kalite-kontrol-standartlari"]
  },
  {
    slug: "kahramanmaras-zemin-guclendirme",
    city: "Kahramanmaraş",
    title: "Kahramanmaraş Deprem Bölgesi Zemin Güçlendirme ve DSM",
    description:
      "Kahramanmaraş deprem bölgesinde sıvılaşma önlemleri, alüvyon zeminlerin iyileştirilmesi ve fore kazık uygulamaları.",
    heroLead:
      "Kahramanmaraş'ta zemin güçlendirme çalışmaları; deprem sonrası oluşan yüksek sismik ivme hedefleri, kalın alüvyon tabakaları ve sıvılaşma riskleri dikkate alınarak planlanır.",
    soilContext:
      "Maraş ovasının suya doygun alüvyon tortulları ve kum-silt ardalanmaları, sismik sarsıntıda yüksek sıvılaşma ve yapı altında diferansiyel oturma davranışı sergiler.",
    recommendedApproach:
      "Yeni temellerde deprem performansını artırmak ve sıvılaşmayı önlemek için DSM zemin iyileştirme ve jet grout; ağır yapılar için fore kazık sistemleri uygulanır.",
    qualityFocus:
      "Kahramanmaraş sahalarında zemin iyileştirme kolonlarının süreklilik testleri, enjeksiyon hacim takipleri ve plaka yükleme testleri kalite standartlarımızı belirler.",
    serviceSlugs: ["zemin-iyilestirme", "dsm", "jet-grout", "fore-kazik"],
    articleSlugs: ["zemin-iyilestirme-risk-yonetimi", "dsm-nasil-uygulanir", "jet-grout-kalite-kontrol"]
  },
  {
    slug: "karabuk-zemin-guclendirme",
    city: "Karabük",
    title: "Karabük Ağır Sanayi Zemin Güçlendirme ve İksa Çözümleri",
    description:
      "Karabük'te ağır endüstri tesisleri, yüksek fırın temelleri ve derin kazılar için fore kazık, iksa sistemleri, mini kazık ve ankraj.",
    heroLead:
      "Karabük'te zemin güçlendirme projeleri; ağır demir-çelik sanayi yapılarının yüksek işletme yükleri, vadi alüvyonları ve dar şantiye koşulları analiz edilerek kurgulanır.",
    soilContext:
      "Filyos havzası kollarındaki gevşek alüvyonlar ve endüstriyel dolgular, ağır tesis yükleri altında yüksek konsolidasyon oturması potansiyeli taşır.",
    recommendedApproach:
      "Ağır makine temellerinin oturmasını engellemek için derin fore kazıklar; derin kazı sınırlarında ise öngerilmeli ankrajlı kazık duvarları ve iksa sistemleri uygulanır.",
    qualityFocus:
      "Karabük sahalarında kazık yükleme testleri, düşeylik ölçümleri ve yüksek mukavemetli beton kalitesi en titiz standartlarda izlenmektedir.",
    serviceSlugs: ["fore-kazik", "iksa-sistemleri", "ankraj", "mini-kazik"],
    articleSlugs: ["fore-kazik-nedir", "fore-kazik-uygulama-asamalari", "zemin-iyilestirme-planlama"]
  },
  {
    slug: "karaman-zemin-guclendirme",
    city: "Karaman",
    title: "Karaman Zemin Güçlendirme ve Tarımsal Havza Çözümleri",
    description:
      "Karaman'da organize sanayi yapıları, silolar ve killi zeminler için DSM zemin iyileştirme, fore kazık ve geoteknik danışmanlık.",
    heroLead:
      "Karaman'daki zemin güçlendirme çalışmaları; tarımsal sanayi tesislerinin yüksek taban yükleri, siloların devrilme stabilitesi ve yerel killi zeminlerin davranışları doğrultusunda çözülür.",
    soilContext:
      "Havzadaki killi ve siltli tabakalar kuraklık-sulama döngüsünde değişken nem seviyelerine bağlı olarak şişme veya oturma riski barındırmaktadır.",
    recommendedApproach:
      "Silolar ve geniş depolar altında homojen taşıma gücü elde etmek ve oturmayı sınırlandırmak amacıyla DSM zemin iyileştirme kolonları ve derin fore kazıklar inşa edilir.",
    qualityFocus:
      "Karaman şantiyelerinde kolon süreklilikleri, bağlayıcı oran takibi ve eksenel oturma testleri kalite doğrulamamızın merkezindedir.",
    serviceSlugs: ["dsm", "fore-kazik", "zemin-iyilestirme", "geoteknik-danismanlik"],
    articleSlugs: ["dsm-nasil-uygulanir", "dsm-malzeme-secinimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "kars-zemin-guclendirme",
    city: "Kars",
    title: "Kars Zemin Güçlendirme ve Don Mukavemeti Çözümleri",
    description:
      "Kars'ta sert iklim koşulları, yüksek rakım killeri ve kamu yatırımları için fore kazık, mini kazık ve zemin iyileştirme uygulamaları.",
    heroLead:
      "Kars'taki zemin güçlendirme projeleri; aşırı soğuk iklim koşulları, don derinliğinin zemin mukavemetine etkisi ve kısa saha sezonu yönetilerek gerçekleştirilir.",
    soilContext:
      "Kars ovasındaki siltli ve gözenekli kil tabakaları, mevsimsel donma-çözülme döngülerinde hacimsel genleşmelere uğrayarak temellerde mukavemet kayıpları oluşturabilir.",
    recommendedApproach:
      "Don derinliğinin altındaki kararlı tabakalara ulaşmak için fore kazık temeller kurulur; çimento kürlenme kalitesini korumak amacıyla sahada donma önleyici termal önlemler uygulanır.",
    qualityFocus:
      "Kars sahalarında taze beton sıcaklık takipleri, soğuk hava beton koruma protokolü ve don öncesi dayanım testleri kalite güvencemizin esasını oluşturur.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "zemin-iyilestirme", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-avantajlari", "saha-denetimi-numune-testleri", "zemin-iyilestirme-planlama"]
  },
  {
    slug: "kastamonu-zemin-guclendirme",
    city: "Kastamonu",
    title: "Kastamonu Zemin Güçlendirme ve Heyelan Stabilizasyonu",
    description:
      "Kastamonu'da heyelanlı yamaçlar, karayolu şevleri ve kamu yapıları için ankraj, fore kazık, mini kazık ve heyelan kontrol mühendisliği.",
    heroLead:
      "Kastamonu'da zemin güçlendirme çalışmaları; Karadeniz'in yüksek yağış rejimi, engebeli topoğrafya ve heyelan riski taşıyan yamaç zeminleri analiz edilerek tasarlanır.",
    soilContext:
      "Gevşek yamaç molozları ve suya doymuş killi tabakalar, yüksek yağışlerle birlikte kayma düzlemi oluşturarak heyelan risklerini tetikler.",
    recommendedApproach:
      "Yamaç stabilitesini korumak için derin öngerilmeli ankraj perdeleri ve mini kazıklar; vadi tabanındaki bina projelerinde ise fore kazıklı temeller uygulanır.",
    qualityFocus:
      "Kastamonu şantiyelerinde ankraj germe yükleri, delgi açısı hassasiyeti ve şev izleme ölçümleri en yüksek hassasiyetle takip edilmektedir.",
    serviceSlugs: ["ankraj", "mini-kazik", "fore-kazik", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-nedir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "kirikkale-zemin-guclendirme",
    city: "Kırıkkale",
    title: "Kırıkkale Zemin Güçlendirme ve Kızılırmak Alüvyon Çözümleri",
    description:
      "Kırıkkale'de Kızılırmak havzası alüvyonları ve sanayi yapıları için jet grout, DSM zemin iyileştirme, fore kazık ve enjeksiyon uygulamaları.",
    heroLead:
      "Kırıkkale'de zemin güçlendirme; Kızılırmak nehir yatağındaki gevşek alüvyon tabakaları, yüksek su tablası ve sanayi tesislerinin platform gereksinimlerine göre kurgulanır.",
    soilContext:
      "Kızılırmak havzasındaki kumlu-siltli alüvyonlar ve zayıf sıkışmış dolgu sahaları, yüksek yeraltı suyu seviyesi nedeniyle taşıma gücü yetersizliği ve oturma riski barındırır.",
    recommendedApproach:
      "Sanayi döşemeleri altında homojen taşıma gücü için DSM zemin iyileştirme; su yalıtımı ve stabilizasyon gereken alanlarda ise jet grout enjeksiyonu uygulanır.",
    qualityFocus:
      "Kırıkkale sahalarında karışım bağlayıcı oranları, enjeksiyon basınç kayıtları ve eksenel yükleme testleri kalite planımızın temelini oluşturur.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-nasil-uygulanir", "jet-grout-kalite-kontrol", "zemin-kalite-kontrol-standartlari"]
  },
  {
    slug: "kirklareli-zemin-guclendirme",
    city: "Kırklareli",
    title: "Kırklareli Zemin Güçlendirme, DSM ve Sanayi Platform Çözümleri",
    description:
      "Kırklareli'de organize sanayi bölgeleri ve lojistik depolar için DSM zemin iyileştirme, fore kazık ve jet grout uygulamaları.",
    heroLead:
      "Kırklareli'de zemin güçlendirme çalışmaları; Ergene havzasındaki kil seviyeleri, OSB alanlarındaki geniş platform talepleri ve sismik risk faktörleri dikkate alınarak tasarlanır.",
    soilContext:
      "Ergene havzasına bağlı gevşek siltli-killi birikintiler ağır endüstriyel yükler altında yüksek diferansiyel oturma davranışı sergileyebilir.",
    recommendedApproach:
      "Sanayi döşemeleri altında oturma sınırlarını korumak için DSM zemin iyileştirme; yüksek noktasal yük taşıyan kolon temellerinde ise fore kazıklar inşa edilir.",
    qualityFocus:
      "Kırklareli projelerinde makine üretim veri formları, karot mukavemet sonuçları ve plaka yükleme testleri kalite güvencemizin parçasıdır.",
    serviceSlugs: ["dsm", "fore-kazik", "jet-grout", "zemin-iyilestirme"],
    articleSlugs: ["dsm-malzeme-secinimi", "jet-grout-ve-dsm-farki", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "kirsehir-zemin-guclendirme",
    city: "Kırşehir",
    title: "Kırşehir Zemin Güçlendirme, Killi Zemin ve Fore Kazık Uygulamaları",
    description:
      "Kırşehir'de yüksek şişme potansiyelli killer ve konut projeleri için DSM zemin iyileştirme, fore kazık ve geoteknik risk yönetimi.",
    heroLead:
      "Kırşehir'de zemin güçlendirme projeleri; bölgede yaygın olan yüksek plastisiteli ve şişme-büzülme riski taşıyan killi zemin davranışları gözetilerek planlanır.",
    soilContext:
      "Yerel killi zeminlerin mevsimsel nem değişimlerinde hacimsel genleşmeler göstermesi, hafif yapılar ve konut temelleri altında düzensiz gerilmeler yaratabilir.",
    recommendedApproach:
      "Şişme basınçlarını engellemek ve mukavemet artışı sağlamak için DSM zemin iyileştirme; derin yapısal yükler için ise fore kazıklı temel çözümleri uygulanır.",
    qualityFocus:
      "Kırşehir sahalarında kilin laboratuvar indeks özellikleri, kolon bağlayıcı dozaj oranları ve yerinde karot numune testleri kalite doğrulamamızın merkezidir.",
    serviceSlugs: ["dsm", "fore-kazik", "zemin-iyilestirme", "geoteknik-danismanlik"],
    articleSlugs: ["dsm-nasil-uygulanir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "kilis-zemin-guclendirme",
    city: "Kilis",
    title: "Kilis Zemin Güçlendirme ve Kurak Zemin Çözümleri",
    description:
      "Kilis'te killi tarım arazileri, endüstriyel depolar ve konut projeleri için DSM zemin iyileştirme, fore kazık ve enjeksiyon uygulamaları.",
    heroLead:
      "Kilis'teki zemin güçlendirme çalışmaları; bölgedeki kurak mevsim killi toprak davranışları, sismik risk faktörleri ve depo alanlarının yüksek taban yükleri göz önüne alınarak tasarlanır.",
    soilContext:
      "Bölgedeki yüksek şişme-büzülme karakterli killi birimler, nem değişimlerinde temellerde düzensiz oturmalar ve gerilme değişimleri oluşturabilir.",
    recommendedApproach:
      "Yapı zeminini homojenleştirmek ve şişme basınçlarını kontrol altına almak için DSM zemin iyileştirme; ağır yükler için fore kazıklı temel çözümleri kurgulanır.",
    qualityFocus:
      "Kilis sahalarında kilin laboratuvar indeks tayinleri, enjeksiyon hacim kayıtları ve kolon yerinde dayanım testleri kalite standartlarımızı belirler.",
    serviceSlugs: ["dsm", "fore-kazik", "zemin-iyilestirme", "geoteknik-danismanlik"],
    articleSlugs: ["dsm-nasil-uygulanir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "kocaeli-zemin-guclendirme",
    city: "Kocaeli",
    title: "Kocaeli Endüstriyel Zemin Güçlendirme ve Jet Grout",
    description:
      "Kocaeli'de ağır sanayi tesisleri, liman yapıları ve sıvılaşma riskli dolgu sahaları için jet grout, DSM zemin iyileştirme, fore kazık ve iksa sistemleri.",
    heroLead:
      "Kocaeli'de zemin güçlendirme projeleri; Körfez kıyısındaki suya doygun alüvyonlar, ağır endüstriyel fırın/depo yükleri ve Kuzey Anadolu Fayı sismik riskleri dikkate alınarak projelendirilir.",
    soilContext:
      "Kıyı dolgu alanlarındaki gevşek kumlu-siltli tabakalar deprem sarsıntısı altında yüksek sıvılaşma potansiyeli ve aşırı taşıma gücü kayıpları yaratmaktadır.",
    recommendedApproach:
      "Kıyı yapılarda ve geniş platformlarda sıvılaşma ve oturma kontrolü için jet grout ve DSM zemin iyileştirme; noktasal ağır makine temellerinde fore kazıklı derin temeller uygulanır.",
    qualityFocus:
      "Kocaeli sahalarında enjeksiyon parametrelerinin anlık izlenmesi, kazık süreklilik bütünlük testleri ve büyük ölçekli plaka yükleme testleri kalite kabulümüzün temelidir.",
    serviceSlugs: ["jet-grout", "dsm", "fore-kazik", "iksa-sistemleri"],
    articleSlugs: ["jet-grout-nedir", "dsm-nasil-uygulanir", "zemin-iyilestirme-risk-yonetimi"]
  },
  {
    slug: "konya-zemin-guclendirme",
    city: "Konya",
    title: "Konya Zemin Güçlendirme, DSM ve Silo Temel Çözümleri",
    description:
      "Konya'da geniş tarımsal depolar, yüksek silolar ve killi ova zeminleri için DSM zemin iyileştirme, fore kazık ve geoteknik risk yönetimi.",
    heroLead:
      "Konya'da zemin güçlendirme çalışmaları; havzadaki kalın gölsel kil tabakaları, yüksek tonajlı siloların devrilme/oturma stabilitesi ve geniş tabanlı fabrika döşeme yüklerine göre şekillendirilir.",
    soilContext:
      "Konya ovasının kalın kil çökelleri yüksek sıkışabilirlik özelliğine sahiptir ve ağır yapılar altında uzun vadede yüksek konsolidasyon oturmalarına neden olabilir.",
    recommendedApproach:
      "Depoların ve fabrikaların taban döşemelerinde oturmayı sınırlamak amacıyla DSM zemin iyileştirme; silo temellerinde ise fore kazık derin temel mühendisliği tercih edilir.",
    qualityFocus:
      "Konya sahalarında kilin oturma analizleri, kolon mukavemet doğrulamaları ve eksenel yükleme testleri en yüksek standartlarda izlenmektedir.",
    serviceSlugs: ["dsm", "fore-kazik", "jet-grout", "geoteknik-danismanlik"],
    articleSlugs: ["dsm-nasil-uygulanir", "dsm-malzeme-secinimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "kutahya-zemin-guclendirme",
    city: "Kütahya",
    title: "Kütahya Zemin Güçlendirme ve Termal Havza Çözümleri",
    description:
      "Kütahya'da termal su etkisindeki zeminler ve organize sanayi yatırımları için jet grout, DSM zemin iyileştirme, fore kazık ve enjeksiyon uygulamaları.",
    heroLead:
      "Kütahya'da zemin güçlendirme projeleri; bölgedeki jeotermal akiferlerin kimyasal etkileri, kil-kaya geçişleri ve sanayi yapılarının döşeme yükleri dikkate alınarak tasarlanır.",
    soilContext:
      "Termal havzalara yakın parsellerdeki sıcak ve sülfat içeriği yüksek yeraltı suları, çimento bağlayıcısının dayanıklılığı ve beton kalitesi açısından yüksek risk oluşturur.",
    recommendedApproach:
      "Kimyasal etkilere dayanıklı sülfata dirençli çimento mix tasarımlı DSM ve jet grout kolonları inşa edilerek temeller koruma altına alınır; derin yapılar için fore kazık uygulanır.",
    qualityFocus:
      "Kütahya sahalarında enjeksiyon karışımının kimyasal direnç tayinleri, priz süre takipleri ve numune laboratuvar mukavemet kırımları hassasiyetle izlenir.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-malzeme-secinimi", "jet-grout-ve-dsm-farki", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "malatya-zemin-guclendirme",
    city: "Malatya",
    title: "Malatya Deprem Bölgesi Zemin Güçlendirme ve Fore Kazık",
    description:
      "Malatya deprem bölgesinde kentsel dönüşüm alanları, gevşek alüvyonlar ve endüstri tesisleri için jet grout, DSM zemin iyileştirme ve fore kazık.",
    heroLead:
      "Malatya'da deprem bölgesi zemin güçlendirme çalışmaları; deprem sonrası belirlenen sismik performans hedefleri, gevşek ova çökelleri ve oturma kısıtları gözetilerek projelendirilir.",
    soilContext:
      "Malatya ovasının suya doygun alüvyonları ve ince daneli silt-kum seviyeleri sismik sarsıntıda sıvılaşma ve ani mukavemet kayıplarına yol açabilecek yapıdadır.",
    recommendedApproach:
      "Sıvılaşma önlemleri ve homojen taşıma gücü için DSM ve jet grout zemin iyileştirme; konut ve endüstriyel bina temellerinde fore kazıklı derin temeller entegre edilir.",
    qualityFocus:
      "Malatya şantiyelerinde kolon süreklilik bütünlüğü, enjeksiyon sarf oranları ve plaka yükleme testleri kalite kabulünün temelini oluşturur.",
    serviceSlugs: ["zemin-iyilestirme", "dsm", "jet-grout", "fore-kazik"],
    articleSlugs: ["zemin-iyilestirme-risk-yonetimi", "dsm-nasil-uygulanir", "jet-grout-kalite-kontrol"]
  },
  {
    slug: "mardin-zemin-guclendirme",
    city: "Mardin",
    title: "Mardin Zemin Güçlendirme ve Tarihi Doku Şev Stabilizasyonu",
    description:
      "Mardin'de tarihi kentsel yapılar, eğimli şevler ve kil zeminler için fore kazık, mini kazık, ankraj ve zemin enjeksiyon çözümleri.",
    heroLead:
      "Mardin'deki zemin güçlendirme projeleri; tarihi kentsel dokunun korunması, dik eğimli kireçtaşı yamaçları ve eğimli parsellerdeki yanal duraylılık gereksinimleriyle planlanır.",
    soilContext:
      "Eğik traverten-kireçtaşı süreksizlikleri ve yamaç molozları, yüksek yağışlarda veya sismik sarsıntıda şev kayması ve kaya blok hareketliliği yaratabilir.",
    recommendedApproach:
      "Tarihi yapılara zarar vermeyecek düşük titreşimli mini kazıklar ve öngerilmeli ankraj perdeleri uygulanırken, ova kesimindeki yapılarda fore kazık derin temel çözümleri tasarlanır.",
    qualityFocus:
      "Mardin sahalarında çevre yapılardaki titreşim sınır takipleri, delgi açısı doğruluğu ve ankraj germe kabul testleri en üst düzeyde denetlenir.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "ankraj", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-nedir", "fore-kazik-avantajlari", "zemin-iyilestirme-risk-yonetimi"]
  },
  {
    slug: "mus-zemin-guclendirme",
    city: "Muş",
    title: "Muş Zemin Güçlendirme ve Muş Ovası Alüvyon Çözümleri",
    description:
      "Muş ovası kalın gevşek çökelleri ve kamu yatırımları için DSM zemin iyileştirme, jet grout ve fore kazık uygulamaları.",
    heroLead:
      "Muş'ta zemin güçlendirme çalışmaları; Muş ovasındaki kalın ve suya doygun gölsel-akarsu alüvyonları, yüksek sismik risk ve soğuk kış ikliminin şantiye etkileri dikkate alınarak planlanır.",
    soilContext:
      "Muş ovasının gevşek siltli kum ve yumuşak kil tabakaları deprem sarsıntısında sıvılaşmaya ve yapılarda yüksek diferansiyel oturmalara zemin hazırlar.",
    recommendedApproach:
      "Ova parsellerindeki yapılarda sıvılaşmanın önlenmesi amacıyla DSM ve jet grout zemin iyileştirme; ağır kamu binalarında ise derin fore kazıklar tercih edilir.",
    qualityFocus:
      "Muş şantiyelerinde don etkisi önleyici enjeksiyon kür takipleri, kolon bütünlük kontrolleri ve zemin taşıma kapasitesi testleri kalite kontrollerimizin temelini oluşturur.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-nasil-uygulanir", "jet-grout-kalite-kontrol", "zemin-kalite-kontrol-standartlari"]
  },
  {
    slug: "nevsehir-zemin-guclendirme",
    city: "Nevşehir",
    title: "Nevşehir Zemin Güçlendirme ve Volkanik Tüf İyileştirmeleri",
    description:
      "Nevşehir'de volkanik tüf zeminler, yer altı boşlukları ve turizm yapıları için fore kazık, mini kazık, enjeksiyon ve geoteknik danışmanlık.",
    heroLead:
      "Nevşehir'de zemin güçlendirme çalışmaları; bölgenin volkanik kökenli tüf ve kül tabakaları, tarihi yer altı tünellerinin getirdiği boşluk riskleri ve turizm yatırımlarının yapı yükleri gözetilerek planlanır.",
    soilContext:
      "Değişken sıkılıkta ve erozyona açık tüf birimleri ile yer altındaki lokal doğal/tarihi boşluklar, temellerde oturma belirsizliği ve taşıma gücü yetersizliği yaratabilir.",
    recommendedApproach:
      "Tespit edilen boşlukların çimento enjeksiyonu ile doldurulması; tüf geçişlerinde homojen taşıma gücü sağlamak için ise mini kazık ve fore kazık sistemleri uygulanır.",
    qualityFocus:
      "Nevşehir sahalarında enjeksiyon sarfiyat takipleri, boşluk dolum oran doğrulamaları ve karot numune basınç dayanımları kalite kabul sürecimizin merkezindedir.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "zemin-iyilestirme", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-nedir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "nigde-zemin-guclendirme",
    city: "Niğde",
    title: "Niğde Zemin Güçlendirme ve Organize Sanayi DSM Çözümleri",
    description:
      "Niğde'de kil zeminler, organize sanayi depoları ve yüksek yapılar için DSM zemin iyileştirme, fore kazık ve enjeksiyon uygulamaları.",
    heroLead:
      "Niğde'de zemin güçlendirme projeleri; organize sanayi bölgesindeki geniş açıklıklı sanayi yapılarının yüksek döşeme yükleri, yerel kil tabakaları ve sismik risk verileri altında kurgulanır.",
    soilContext:
      "Bölgedeki killi ve siltli birikintiler, ağır platform yükleri altında yapısal diferansiyel oturmalara ve döşeme çatlaklarına neden olabilecek davranış gösterebilir.",
    recommendedApproach:
      "Sanayi binaları tabanlarında oturmayı sınırlandırmak için DSM zemin iyileştirme; derin yapısal yüklerin güvenle taşınması için ise fore kazıklı temel çözümleri kurgulanır.",
    qualityFocus:
      "Niğde şantiyelerinde kolon bağlayıcı dozaj homojenliği, yerinde mukavemet testleri ve plaka yükleme deneyleri kalite kontrolümüzün temel taşlarıdır.",
    serviceSlugs: ["dsm", "fore-kazik", "zemin-iyilestirme", "geoteknik-danismanlik"],
    articleSlugs: ["dsm-nasil-uygulanir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "ordu-zemin-guclendirme",
    city: "Ordu",
    title: "Ordu Zemin Güçlendirme, Heyelan Kontrolü ve Kazık Çözümleri",
    description:
      "Ordu'da heyelanlı yamaçlar, karayolu şevleri ve kıyı yapıları için fore kazık, mini kazık, ankraj ve şev duraylılığı mühendisliği.",
    heroLead:
      "Ordu'da zemin güçlendirme ve şev stabilitesi çalışmaları; Doğu Karadeniz'in dik eğimli topoğrafyası, yüksek yağış rejimi ve kıyı dolgu alanlarının oturma davranışları analiz edilerek tasarlanır.",
    soilContext:
      "Yüksek yağışlarla suya doymuş yamaç molozları ve kıyı dolgularındaki gevşek denizel tortullar, yanal toprak basıncını artırarak heyelan ve oturma riskleri yaratmaktadır.",
    recommendedApproach:
      "Yamaç stabilitesini korumak için derin öngerilmeli ankraj sistemleri ve mini kazıklı perdeler; sahil kesimindeki yapılarda ise fore kazıklı derin temeller uygulanır.",
    qualityFocus:
      "Ordu sahalarında ankraj germe test verileri, kazık düşeylik doğrulamaları ve su altı beton yerleşim kalitesi en yüksek standartta izlenmektedir.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "ankraj", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-nedir", "saha-denetimi-numune-testleri", "zemin-iyilestirme-planlama"]
  },
  {
    slug: "osmaniye-zemin-guclendirme",
    city: "Osmaniye",
    title: "Osmaniye Zemin Güçlendirme ve Deprem Dayanımlı Temel İyileştirme",
    description:
      "Osmaniye'de sismik risk altındaki yapılar, organize sanayi yatırımları ve killi/alüvyonal zeminler için jet grout, DSM ve fore kazık çözümleri.",
    heroLead:
      "Osmaniye'deki zemin güçlendirme projeleri; bölgenin yüksek sismik ivme değerleri, alüvyonal ova düzlükleri ve sanayi tesislerinin yüksek taban basınçları dikkate alınarak planlanır.",
    soilContext:
      "Osmaniye ovasındaki yumuşak kil seviyeleri ve suya doygun alüvyon birikintiler, ağır yapılar altında yüksek sıkışabilirlik ve oturma riski barındırmaktadır.",
    recommendedApproach:
      "Depolama alanlarında oturma kontrolünü sağlamak amacıyla DSM zemin iyileştirme; su yalıtımı ve stabilizasyon gerektiren alanlarda ise jet grout enjeksiyonu ve fore kazıklı derin temeller entegre edilir.",
    qualityFocus:
      "Osmaniye şantiyelerinde kolon sürekliliği, taze beton yerleşim takipleri ve deprem bölgesi sismik tasarım hedefleriyle uyum kalite kontrolümüzün temelini oluşturur.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-nasil-uygulanir", "jet-grout-kalite-kontrol", "zemin-iyilestirme-risk-yonetimi"]
  },
  {
    slug: "rize-zemin-guclendirme",
    city: "Rize",
    title: "Rize Zemin Güçlendirme, Heyelan Kontrolü ve Kıyı Yapısı Çözümleri",
    description:
      "Rize'de aşırı yağış alan dik yamaçlar, heyelan riskli bölgeler ve kıyı dolgu sahaları için ankraj, mini kazık, fore kazık ve şev duraylılığı.",
    heroLead:
      "Rize'deki zemin güçlendirme projeleri; Doğu Karadeniz'in ekstrem yağış rejimi, dik topoğrafyası ve sahil şeridindeki gevşek dolguların oturma davranışları analiz edilerek kurgulanır.",
    soilContext:
      "Aşırı yağışlerle suya doyan yamaç molozları heyelan risklerini tetiklerken, kıyı dolgu alanlarındaki gevşek denizel çökeller yüksek oturma potansiyeline sahiptir.",
    recommendedApproach:
      "Yamaç stabilizasyonu için derin öngerilmeli ankraj sistemleri ve püskürtme beton; sahil kesimindeki yapılarda ise fore kazıklı derin temeller ve mini kazık uygulamaları tercih edilir.",
    qualityFocus:
      "Rize sahalarında ankraj germe kabul testleri, düşeylik ölçümleri ve su altı beton döküm kalitesi en titiz standartlarda takip edilmektedir.",
    serviceSlugs: ["ankraj", "fore-kazik", "mini-kazik", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-nedir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "sakarya-zemin-guclendirme",
    city: "Sakarya",
    title: "Sakarya Zemin Güçlendirme, DSM ve Sıvılaşma Önleme Mühendisliği",
    description:
      "Sakarya'da deprem bölgesi zemin yapıları, alüvyon tabakalar ve sanayi platformları için DSM zemin iyileştirme, jet grout ve fore kazık uygulamaları.",
    heroLead:
      "Sakarya'da zemin iyileştirme kararları; Adapazarı havzasının gevşek alüvyonal yapısı, yüksek sismik risk ve yeraltı suyu seviyesinin dinamikleri doğrultusunda verilir.",
    soilContext:
      "Havzada yaygın olan suya doygun gevşek kum-silt tabakaları deprem anında yüksek sıvılaşma ve yapı altında ani taşıma gücü kayıpları yaratma potansiyeline sahiptir.",
    recommendedApproach:
      "Sıvılaşma direncini artırmak ve diferansiyel oturmaları engellemek için geniş parsellerde DSM zemin iyileştirme; konut ve endüstriyel yapılarda ise jet grout kolonları ve fore kazık sistemleri uygulanır.",
    qualityFocus:
      "Sakarya şantiyelerinde kolon bağlayıcı dozaj homojenliği, yerinde mukavemet testleri ve plaka yükleme deneyleri kalite kontrolümüzün temel taşlarıdır.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-nasil-uygulanir", "jet-grout-ve-dsm-farki", "zemin-kalite-kontrol-standartlari"]
  },
  {
    slug: "samsun-zemin-guclendirme",
    city: "Samsun",
    title: "Samsun Zemin Güçlendirme, Delta Alüvyonları ve Sanayi Temel Çözümleri",
    description:
      "Samsun'da delta alüvyonları, yüksek yeraltı suyu ve organize sanayi projeleri için jet grout, DSM zemin iyileştirme ve fore kazık çözümleri.",
    heroLead:
      "Samsun'da zemin güçlendirme projeleri; Yeşilırmak ve Kızılırmak deltalarının oluşturduğu kalın alüvyon kesitler, yüksek su tablası ve liman yükleri gözetilerek tasarlanır.",
    soilContext:
      "Delta ovalarındaki yumuşak kil ve gevşek kum katmanları, ağır endüstriyel yapılar altında yüksek konsolidasyon oturması ve sıvılaşma davranışı sergileyebilir.",
    recommendedApproach:
      "Geniş depo ve fabrika zeminlerinde homojen taşıma gücü için DSM zemin iyileştirme; su kontrolü ve geçirimsizlik gerektiren kıyı yapılarında jet grout ve fore kazıklı derin temeller entegre edilir.",
    qualityFocus:
      "Samsun uygulamalarında enjeksiyon basınç ve debi kayıtları, kolon bütünlük testleri ve eksenel yükleme testleri titizlikle izlenmektedir.",
    serviceSlugs: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["jet-grout-nedir", "dsm-malzeme-secinimi", "zemin-iyilestirme-planlama"]
  },
  {
    slug: "siirt-zemin-guclendirme",
    city: "Siirt",
    title: "Siirt Zemin Güçlendirme, Yamaç Stabilitesi ve Kazık Sistemleri",
    description:
      "Siirt'te engebeli topoğrafya, değişken killi zeminler ve altyapı projeleri için fore kazık, mini kazık, ankraj ve zemin iyileştirme çözümleri.",
    heroLead:
      "Siirt'teki zemin güçlendirme çalışmaları; topoğrafik eğimler, değişken kil-kaya geçiş profilleri ve karayolu/kamu yapılarının yanal duraylılık gereksinimlerine göre planlanır.",
    soilContext:
      "Yamaç bölgelerindeki zayıf çimentolu killi seviyeler ve ayrışmış kaya birimleri, nem değişimleri ve kazı çalışmaları altında kayma veya şişme riski gösterebilir.",
    recommendedApproach:
      "Derin kazıların ve dik şevlerin güvenliği için öngerilmeli ankrajlar ve kazıklı perde duvarları; zemin taşıma kapasitesini artırmak için mini kazık ve enjeksiyon uygulamaları kurgulanır.",
    qualityFocus:
      "Siirt sahalarında delgi düşeyliği doğrulaması, enjeksiyon hacim kayıtları ve ankraj test yükleme değerleri kalite kontrollerimizin odağındadır.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "ankraj", "iksa-sistemleri"],
    articleSlugs: ["fore-kazik-uygulama-asamalari", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "sinop-zemin-guclendirme",
    city: "Sinop",
    title: "Sinop Zemin Güçlendirme, Kıyı Alüvyonları ve Heyelan Çözümleri",
    description:
      "Sinop'ta denizel tortullar, heyelanlı sahil yamaçları ve altyapı yatırımları için fore kazık, mini kazık, ankraj ve zemin iyileştirme.",
    heroLead:
      "Sinop'taki zemin güçlendirme projeleri; sahil şeridindeki gevşek kıyı alüvyonları, yüksek yeraltı suyu seviyeleri ve yarımadanın heyelan riski taşıyan dik yamaç yapısı analiz edilerek kurgulanır.",
    soilContext:
      "Denizel birikintiler içeren suya doymuş killi-siltli seviyeler taşıma gücü yetersizliği sergilerken, sahil şevleri dalga aşındırması ve yağışlarla duraylılık riski barındırır.",
    recommendedApproach:
      "Yol ve yapı temellerinin güvenliği için fore kazık ve mini kazık perde duvarları; geniş dolgu parsellerinde ise zemin stabilizasyonu sağlamak amacıyla enjeksiyonlu iyileştirmeler tasarlanır.",
    qualityFocus:
      "Sinop sahalarında su altı beton yerleşim kalitesi, kazık süreklilik bütünlük testleri ve şev izleme ölçümleri hassasiyetle doğrulanır.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "ankraj", "zemin-iyilestirme"],
    articleSlugs: ["fore-kazik-nedir", "zemin-iyilestirme-planlama", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "sanliurfa-zemin-guclendirme",
    city: "Şanlıurfa",
    title: "Şanlıurfa Zemin Güçlendirme, Karstik Jips ve Sanayi Temel Çözümleri",
    description:
      "Şanlıurfa'da karstik boşluklu kireçtaşı/jips zeminler, geniş sanayi platformları ve kurak iklim killeri için enjeksiyon, DSM ve fore kazık.",
    heroLead:
      "Şanlıurfa'daki zemin güçlendirme çalışmaları; bölgedeki jips ve kireçtaşı tabakalarındaki erime boşlukları, kurak iklim kili davranışları ve OSB parsellerindeki büyük taban yüklerine göre tasarlanır.",
    soilContext:
      "Kireçtaşı ve jips birimlerindeki karstik boşluklar ani oturma riski yaratırken, ova düzlüklerindeki yüksek plastikli killer kuraklık ve sulama döngülerinde şişme-büzülme sergileyebilir.",
    recommendedApproach:
      "Boşluklu yapılarda dolgu ve stabilizasyon enjeksiyonu uygulanırken; sanayi yapılarının temellerinde homojen taşıma gücü sağlamak amacıyla DSM zemin iyileştirme ve fore kazık sistemleri entegre edilir.",
    qualityFocus:
      "Şanlıurfa şantiyelerinde enjeksiyon dolum oran doğrulamaları, karot numune mukavemetleri ve kilin laboratuvar indeks özellikleri yakından denetlenir.",
    serviceSlugs: ["dsm", "fore-kazik", "zemin-iyilestirme", "geoteknik-danismanlik"],
    articleSlugs: ["dsm-nasil-uygulanir", "dsm-malzeme-secinimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "sirnak-zemin-guclendirme",
    city: "Şırnak",
    title: "Şırnak Zemin Güçlendirme, Heyelan Kontrolü ve Temel İyileştirme",
    description:
      "Şırnak'ta dik eğimli yamaç heyelanları, değişken kaya geçişleri ve kamu yatırımları için fore kazık, mini kazık, ankraj ve zemin iyileştirme.",
    heroLead:
      "Şırnak'taki zemin güçlendirme projeleri; engebeli dağlık topoğrafya, yüksek şev eğimleri ve yapı temellerinin oturma/heyelan risklerini azaltan mühendislik çözümleriyle planlanır.",
    soilContext:
      "Yamaçlarda biriken zayıf yamaç molozları ve suya doymuş killi-marnlı seviyeler, derin temel imalatlarında yanal toprak basıncını ve kayma riskini artırır.",
    recommendedApproach:
      "Şevlerin stabilitesini korumak için derin öngerilmeli ankraj sistemleri ve fore kazıklı iksa perdeleri; yapı temellerinde ise kaya seviyesine oturtulan mini kazık ve fore kazık tasarımları kullanılır.",
    qualityFocus:
      "Şırnak sahalarında ankraj germe kabul testleri, delgi profili sürekliliği ve beton kalitesi en titiz standartlarda doğrulanmaktadır.",
    serviceSlugs: ["ankraj", "fore-kazik", "mini-kazik", "iksa-sistemleri"],
    articleSlugs: ["fore-kazik-nedir", "fore-kazik-uygulama-asamalari", "zemin-iyilestirme-risk-yonetimi"]
  },
  {
    slug: "tekirdag-zemin-guclendirme",
    city: "Tekirdağ",
    title: "Tekirdağ Zemin Güçlendirme, Ergene Havzası DSM ve Liman Çözümleri",
    description:
      "Tekirdağ'da Ergene havzası kil/silt birimleri, büyük ölçekli sanayi tesisleri ve kıyı liman yapıları için DSM zemin iyileştirme, jet grout ve fore kazık.",
    heroLead:
      "Tekirdağ'da zemin iyileştirme çalışmaları; Ergene havzasındaki yüksek sıkışabilir kil seviyeleri, kıyı liman yapılarının yüksek taşıma talepleri ve sismik riskler dikkate alınarak planlanır.",
    soilContext:
      "Havzadaki gevşek kumlu-siltli alüvyonlar ve yumuşak kil tabakaları, ağır endüstriyel yükler altında yüksek oturma ve deprem anında sıvılaşma riski barındırmaktadır.",
    recommendedApproach:
      "Liman dolgularında ve geniş sanayi zeminlerinde oturmayı kontrol altına almak için DSM zemin iyileştirme kolonları; kıyı yapılarında ise yüksek taşıma kapasiteli fore kazık ve jet grout geçirimsizlik perdeleri uygulanır.",
    qualityFocus:
      "Tekirdağ projelerinde makine enjeksiyon basınç kayıtları, yerinde karot mukavemet testleri ve plaka yükleme testleri kalite kabulünün ana bileşenleridir.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-nasil-uygulanir", "jet-grout-ve-dsm-farki", "zemin-kalite-kontrol-standartlari"]
  },
  {
    slug: "tokat-zemin-guclendirme",
    city: "Tokat",
    title: "Tokat Zemin Güçlendirme, Yeşilırmak Havzası Alüvyon Çözümleri",
    description:
      "Tokat'ta Yeşilırmak havzası alüvyonları, deprem bölgesi zemin yapıları ve kamu binaları için jet grout, DSM zemin iyileştirme ve fore kazık.",
    heroLead:
      "Tokat'taki zemin güçlendirme projeleri; Kuzey Anadolu Fay Hattı'na yakın yüksek sismik aktivite, Yeşilırmak havzası taşkın tortulları ve yerel oturma riskleri göz önünde bulundurularak kurgulanır.",
    soilContext:
      "Nehir yatağındaki gevşek alüvyon kum-silt serileri ve suya doymuş tabakalar, sismik sarsıntıda sıvılaşmaya ve yapılarda yüksek diferansiyel oturmalara neden olabilir.",
    recommendedApproach:
      "Yeni yapılarda sıvılaşma riskini azaltmak ve taşıma kapasitesini artırmak için DSM ve jet grout zemin iyileştirme; ağır kamu yapılarında ise derin fore kazık sistemleri tercih edilir.",
    qualityFocus:
      "Tokat sahalarında karışım bağlayıcı oranları, enjeksiyon basınç kayıtları ve eksenel yükleme testleri kalite kontrol sürecimizin vazgeçilmezidir.",
    serviceSlugs: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["dsm-nasil-uygulanir", "jet-grout-kalite-kontrol", "zemin-iyilestirme-risk-yonetimi"]
  },
  {
    slug: "trabzon-zemin-guclendirme",
    city: "Trabzon",
    title: "Trabzon Zemin Güçlendirme, Heyelan Kontrolü ve Kıyı Dolgu Çözümleri",
    description:
      "Trabzon'da dik şev heyelanları, sahil yolları ve kıyı dolgu sahaları için ankraj, mini kazık, fore kazık ve zemin iyileştirme uygulamaları.",
    heroLead:
      "Trabzon'daki zemin güçlendirme projeleri; Doğu Karadeniz'in yüksek eğimli şevleri, aşırı yağış rejimleri ve sahil dolgularının getirdiği yanal/düşey zemin hareketleri analiz edilerek tasarlanır.",
    soilContext:
      "Yüksek yağış alan dik yamaçlarda suya doymuş kontrolsüz yamaç dolguları kayma riski oluştururken, kıyılardaki gevşek dolgular ve denizel tortullar yüksek oturma riski barındırır.",
    recommendedApproach:
      "Yamaç stabilitesi ve şev koruma projelerinde derin öngerilmeli ankraj ve püskürtme beton; kıyı yapılarında ise yüksek taşıma kapasiteli fore kazıklı derin temeller uygulanır.",
    qualityFocus:
      "Trabzon şantiyelerinde ankraj germe yükleri, delgi açısı doğruluğu ve su altı beton yerleşim kalitesi en üst seviyede denetlenmektedir.",
    serviceSlugs: ["ankraj", "fore-kazik", "mini-kazik", "geoteknik-danismanlik"],
    articleSlugs: ["fore-kazik-nedir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "tunceli-zemin-guclendirme",
    city: "Tunceli",
    title: "Tunceli Zemin Güçlendirme ve Deprem Bölgesi Temel Çözümleri",
    description:
      "Tunceli'de aktif fay hatları, eğimli dağlık yamaçlar ve kamu yatırımları için fore kazık, mini kazık, ankraj ve zemin iyileştirme çözümleri.",
    heroLead:
      "Tunceli'deki zemin güçlendirme ve iksa çalışmaları; bölgenin yüksek sismik aktivitesi, engebeli topoğrafya ve zayıf zemin-kaya geçiş hatları göz önünde bulundurularak planlanır.",
    soilContext:
      "Aktif sismik sarsıntılara maruz kalan gevşek yamaç molozları ve suya doygun vadiler, taşıma gücü kayıpları ve şev duraylılığı problemleri yaratabilir.",
    recommendedApproach:
      "Kamu binaları ve yapı temellerinde kaya seviyesine ulaşan fore kazık ve mini kazıklar; dik kazılarda ise güvenli yanal destek için öngerilmeli ankraj sistemleri tercih edilir.",
    qualityFocus:
      "Tunceli sahalarında delgi profili sürekliliği, don ve iklim etkilerine karşı beton kürleme kalitesi ve sismik tasarım uyumluluğu kontrol edilir.",
    serviceSlugs: ["fore-kazik", "mini-kazik", "ankraj", "iksa-sistemleri"],
    articleSlugs: ["fore-kazik-avantajlari", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "usak-zemin-guclendirme",
    city: "Uşak",
    title: "Uşak Zemin Güçlendirme ve Sanayi Yapısı DSM İyileştirmeleri",
    description:
      "Uşak'ta killi zeminler, organize sanayi depoları ve yüksek tabanlı fabrika döşemeleri için DSM zemin iyileştirme, fore kazık ve enjeksiyon çözümleri.",
    heroLead:
      "Uşak'taki zemin güçlendirme projeleri; sanayi parsellerindeki yüksek taban yükleri, geniş açıklıklı depolar ve yerel killi zeminlerin şişme-oturma davranışları dikkate alınarak tasarlanır.",
    soilContext:
      "Merkez ve sanayi bölgelerinde rastlanan yüksek plastikli killi birimler, nem değişimlerine bağlı olarak hacimsel değişimler ve diferansiyel oturma riski sunar.",
    recommendedApproach:
      "Geniş taban döşemelerinde oturmayı sınırlandırmak ve taşıma kapasitesini homojenleştirmek için DSM zemin iyileştirme; ağır kolon yüklerinde fore kazıklar inşa edilir.",
    qualityFocus:
      "Uşak şantiyelerinde kolon bağlayıcı dozaj hassasiyeti, yerinde mukavemet testleri ve plaka yükleme deneyleri kalite kontrolümüzün temelini oluşturur.",
    serviceSlugs: ["dsm", "fore-kazik", "zemin-iyilestirme", "geoteknik-danismanlik"],
    articleSlugs: ["dsm-nasil-uygulanir", "dsm-malzeme-secinimi", "saha-denetimi-numune-testleri"]
  },
  {
    slug: "yalova-zemin-guclendirme",
    city: "Yalova",
    title: "Yalova Zemin Güçlendirme ve Sıvılaşma Dayanımlı Temel İyileştirme",
    description:
      "Yalova'da sismik riskli alüvyon zeminler, kıyı yapıları ve konut projeleri için jet grout, DSM zemin iyileştirme ve fore kazık uygulamaları.",
    heroLead:
      "Yalova'daki zemin güçlendirme projeleri; Marmara deprem riski, kıyı alüvyonlarının suya doygun yapısı ve sıvılaşma hassasiyeti göz önünde bulundurularak kurgulanır.",
    soilContext:
      "Sahil şeridindeki suya doygun gevşek kum-silt tabakaları, olası bir deprem sarsıntısında ani mukavemet kayıpları ve yüksek sıvılaşma riski taşımaktadır.",
    recommendedApproach:
      "Sıvılaşma direncini artırmak ve taşıma gücünü güvenceye almak için jet grout ve DSM zemin iyileştirme kolonları; yapısal temellerde ise derin fore kazık sistemleri uygulanır.",
    qualityFocus:
      "Yalova sahalarında enjeksiyon parametrelerinin anlık takibi, kolon bütünlük testleri ve yerinde karot mukavemet tayinleri en üst düzeyde denetlenir.",
    serviceSlugs: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"],
    articleSlugs: ["jet-grout-nedir", "jet-grout-kalite-kontrol", "zemin-iyilestirme-risk-yonetimi"]
  },
  {
    slug: "yozgat-zemin-guclendirme",
    city: "Yozgat",
    title: "Yozgat Zemin Güçlendirme, Killi Zemin ve Fore Kazık Çözümleri",
    description:
      "Yozgat'ta yüksek plastikli killer, kamu binaları ve altyapı projeleri için DSM zemin iyileştirme, fore kazık ve zemin stabilizasyonu.",
    heroLead:
      "Yozgat'taki zemin güçlendirme çalışmaları; değişken killi zemin tabakalarının şişme-büzülme özellikleri ve kentsel/altyapı yapılarının oturma toleransları doğrultusunda çözülür.",
    soilContext:
      "Bölgede rastlanan yüksek plastikli killer, mevsimsel nem dalgalanmalarında hacimsel hareketler yaparak temellerde düzensiz gerilmelere yol açabilir.",
    recommendedApproach:
      "Zemin rijitliğini artırmak ve şişme basınçlarını kontrol etmek amacıyla DSM zemin iyileştirme; derin yapısal yüklerin taşınması için ise fore kazıklı temeller uygulanır.",
    qualityFocus:
      "Yozgat şantiyelerinde kilin laboratuvar indeks özellikleri, kolon yerinde mukavemet testleri ve düşeylik kontrolleri kalite güvencemizin temelini oluşturur.",
    serviceSlugs: ["dsm", "fore-kazik", "zemin-iyilestirme", "geoteknik-danismanlik"],
    articleSlugs: ["dsm-nasil-uygulanir", "saha-denetimi-numune-testleri", "zemin-iyilestirme-planlama"]
  },
  {
    slug: "zonguldak-zemin-guclendirme",
    city: "Zonguldak",
    title: "Zonguldak Zemin Güçlendirme, Dolgu ve Heyelan Önleme Sistemleri",
    description:
      "Zonguldak'ta engebeli yamaç heyelanları, maden dolguları ve kıyı yapıları için fore kazık, mini kazık, ankraj ve iksa çözümleri.",
    heroLead:
      "Zonguldak'taki zemin güçlendirme ve şev stabilitesi çalışmaları; engebeli topoğrafya, eski maden dolguları ve sahil şeridindeki gevşek denizel çökeller analiz edilerek planlanır.",
    soilContext:
      "Yamaçlardaki kontrolsüz yapay dolgular ve suya doymuş şevler yanal toprak basıncını artırırken, kıyı kesimindeki gevşek çökeller oturma hassasiyeti sunar.",
    recommendedApproach:
      "Yamaç duraylılığını korumak amacıyla derin öngerilmeli ankraj sistemleri ve kazıklı iksa perdeleri; kıyı yapılarında ise kaya seviyesine uzanan fore kazıklı derin temeller uygulanır.",
    qualityFocus:
      "Zonguldak şantiyelerinde ankraj test yükleri, delgi sürekliliği ve su altı beton yerleşim kalitesi en yüksek mühendislik hassasiyetiyle izlenmektedir.",
    serviceSlugs: ["ankraj", "fore-kazik", "mini-kazik", "iksa-sistemleri"],
    articleSlugs: ["fore-kazik-nedir", "zemin-iyilestirme-risk-yonetimi", "saha-denetimi-numune-testleri"]
  }
];

type CityEnrichment = Pick<CityPage, "intro" | "sections" | "faq"> & { slug: string };

// Öncelikli illerin benzersiz, uzun içerikleri. getCityPageBySlug bu içeriği ilgili ile
// birleştirir; böylece ana veri bloğu sade kalır ve zengin içerik ayrı yönetilir.
const cityEnrichmentList: CityEnrichment[] = [
  {
    slug: "ankara-zemin-guclendirme",
    intro:
      "Ankara'da zemin güçlendirme, başkentin kendine özgü ve mühendislik literatüründe 'Ankara kili' olarak anılan yüksek plastisiteli, şişme-büzülme davranışı gösteren zemin yapısıyla doğrudan ilişkilidir. YER6, Gölbaşı merkezli saha ekibiyle Ankara ve çevresinde jet grout, fore kazık ve DSM zemin iyileştirme uygulamalarını tek bir kalite standardında yürütür.",
    sections: [
      {
        heading: "Ankara kili ve yerel zemin davranışı",
        body: [
          "Ankara'nın önemli bir bölümünde yüzeye yakın seviyelerde bulunan yüksek plastisiteli killer, mevsimsel nem değişimlerinde belirgin hacim değişimi yapar. Kuru dönemde büzülüp yağışlı dönemde şişen bu killer, özellikle hafif yapıların temellerinde çatlama ve düzensiz oturma riskini artırır.",
          "Çankaya, Gölbaşı, Etimesgut ve Sincan gibi bölgelerde dolgu kalınlığı, yeraltı suyu seviyesi ve kilin plastisitesi parselden parsele değişir. Bu nedenle Ankara'da doğru yöntem seçimi, ancak sondaj verisi ve laboratuvar indeks deneyleriyle kurulan bir zemin modeliyle güvenilir biçimde yapılabilir."
        ]
      },
      {
        heading: "Ankara'da uygulanan zemin güçlendirme yöntemleri",
        body: [
          "Yüksek yapısal yüklerin ve derin kazıların söz konusu olduğu kamu ve konut projelerinde fore kazıklı temeller ile ankraj destekli iksa sistemleri öne çıkar. Mevcut yapı altında güçlendirme veya su yalıtımı gereken durumlarda ise jet grout kolonları, dar sahalarda bile düşük titreşimle uygulanabilir.",
          "Geniş taban alanlı endüstriyel yapılarda oturmayı kontrol etmek için DSM zemin iyileştirme tercih edilir. YER6, her projede kolon çapı, derinlik ve bağlayıcı dozajını Ankara zeminine özgü parametrelerle optimize eder."
        ]
      },
      {
        heading: "Saha kalitesi ve teslim süreci",
        body: [
          "Ankara projelerinde deneme kolonları, karot alımı, tek eksenli basınç deneyleri ve kolon sürekliliği kontrolleri üretim boyunca kayıt altına alınır. Bu veriler, yapının servis yükleri altında beklenen performansı vereceğini belgelemek için teslim dosyasına işlenir.",
          "Yüksek plastisiteli killerde nem yönetimi ve numune koruması kritik olduğundan, saha kalite planı mevsim koşullarına göre uyarlanır."
        ]
      }
    ],
    faq: [
      {
        question: "Ankara kili neden özel önlem gerektirir?",
        answer:
          "Yüksek plastisiteli olduğu için nem değiştikçe şişip büzülür; bu hacimsel hareket temellerde düzensiz gerilme ve çatlaklara yol açabilir. Uygun zemin iyileştirme ve temel sistemi bu hareketleri kontrol altına alır."
      },
      {
        question: "Ankara'da jet grout mu fore kazık mı uygulanmalı?",
        answer:
          "Karar; yük büyüklüğü, kazı derinliği, komşu yapı durumu ve zemin profiline bağlıdır. Su kontrolü ve dar saha için jet grout, yüksek taşıma kapasitesi ve derin temel için fore kazık öne çıkar. Çoğu projede ikisi birlikte kurgulanır."
      },
      {
        question: "YER6 Ankara'nın hangi bölgelerinde çalışıyor?",
        answer:
          "Gölbaşı merkezli ekibimizle Ankara'nın tüm ilçelerinde ve çevre illerde saha uygulaması yapıyoruz."
      },
      {
        question: "Zemin etüdü olmadan fiyat teklifi alabilir miyim?",
        answer:
          "Ön değerlendirme için mevcut sondaj raporu veya proje bilgileri yeterlidir; ancak kesin tasarım ve metraj için güncel zemin etüdü verisi gereklidir."
      }
    ]
  },
  {
    slug: "istanbul-zemin-guclendirme",
    intro:
      "İstanbul'da zemin güçlendirme; yalnızca yöntem seçimi değil, komşu yapı etkisi, yoğun altyapı hatları ve sınırlı şantiye lojistiğinin birlikte yönetildiği bir risk mühendisliği konusudur. YER6, derin kazı, temel güçlendirme ve kentsel dönüşüm projelerinde fore kazık, mini kazık, ankraj ve jet grout çözümlerini bir arada kurgular.",
    sections: [
      {
        heading: "İstanbul'da zemin ve kazı koşulları",
        body: [
          "Kıyı dolguları, ayrışmış kaya geçişleri ve bölgeden bölgeye değişen yerleşim dokusu, İstanbul'da temel güçlendirme ve iksa sistemlerinde hassas deplasman kontrolü gerektirir. Haliç, Boğaz ve Marmara kıyısı boyunca gevşek dolgu ve yüksek yeraltı suyu koşulları öne çıkarken, iç kesimlerde daha rijit formasyonlarla karşılaşılabilir.",
          "Bitişik nizam yapılaşma nedeniyle kazı sırasında komşu binaların güvenliği belirleyicidir; bu da öngerilmeli ankraj, kazıklı iksa perdesi ve gerektiğinde jet grout ile taban stabilizasyonunu zorunlu kılar."
        ]
      },
      {
        heading: "Derin kazı ve temel güçlendirme yöntemleri",
        body: [
          "Yüksek yapılar ve derin bodrumlu projelerde büyük çaplı fore kazıklar taşıma kapasitesini sağlarken, dar ve erişimi kısıtlı kentsel dönüşüm parsellerinde mini kazık ve underpinning uygulamaları mevcut yapıyı taşımadan güçlendirmeye imkân verir.",
          "Su geçirimsizliği ve kazı tabanı güvenliği gereken alanlarda jet grout perdeleri devreye alınır. YER6, her projede düşeylik, beton sürekliliği ve ankraj test yüklerini kayıt altına alarak çevre yapı izleme verisiyle birlikte raporlar."
        ]
      }
    ],
    faq: [
      {
        question: "İstanbul'da komşu yapıya zarar vermeden kazı yapılabilir mi?",
        answer:
          "Evet. Öngerilmeli ankraj, kazıklı iksa ve gerektiğinde jet grout taban stabilizasyonu ile deplasmanlar sınırlandırılır; çevre yapılar izleme (monitoring) altında tutulur."
      },
      {
        question: "Kentsel dönüşümde mevcut binanın altına güçlendirme yapılabilir mi?",
        answer:
          "Mini kazık ve underpinning yöntemleriyle mevcut temel altına kontrollü yük aktarımı sağlanabilir. Uygulama, yapının statik durumu ve zemin profiline göre projelendirilir."
      },
      {
        question: "İstanbul'da hangi zemin verileri gerekli?",
        answer:
          "Sondaj logları, yeraltı suyu seviyesi, komşu yapı bilgileri ve kazı derinliği; güvenli bir iksa/temel tasarımı için asgari gereksinimlerdir."
      }
    ]
  },
  {
    slug: "izmir-zemin-guclendirme",
    intro:
      "İzmir'de zemin iyileştirme projeleri çoğu zaman kıyı etkisi, yüksek yeraltı suyu, sıvılaşma riski ve dar şehir içi şantiye koşullarıyla birlikte ele alınır. YER6, körfez çevresi ve alüvyon alanlarda jet grout, DSM zemin iyileştirme ve fore kazık uygulamalarını deprem performansı odağıyla yürütür.",
    sections: [
      {
        heading: "İzmir körfez zemini ve sıvılaşma riski",
        body: [
          "Körfez çevresi ve alüvyon alanlarda yer alan gevşek kum-silt seviyeleri, yüksek yeraltı suyuyla birleştiğinde deprem sırasında sıvılaşma potansiyeli taşır. Bayraklı, Karşıyaka ve Bornova gibi bölgelerde bu davranış, temel sistemi ve zemin iyileştirme kararlarını doğrudan etkiler.",
          "2020 depreminde gözlenen yapısal hasarlar, İzmir'de yumuşak zemin üzerinde oturan yapılarda zemin iyileştirmesinin ve uygun temel seçiminin önemini bir kez daha ortaya koymuştur."
        ]
      },
      {
        heading: "İzmir'de zemin iyileştirme yaklaşımı",
        body: [
          "Su kontrolü ve sıvılaşma azaltımı gereken sahalarda jet grout ve enjeksiyon; oturma kontrolü gereken geniş parsellerde DSM zemin iyileştirme öne çıkar. Derin ve yüksek yükleri kaya/sağlam tabakaya aktarmak için fore kazıklı temeller tercih edilir.",
          "YER6, İzmir sahalarında basınç kayıtları, kolon çapı doğrulaması ve yeraltı suyu davranışını kalite kabul sürecinin merkezine alır."
        ]
      }
    ],
    faq: [
      {
        question: "İzmir'de sıvılaşma riski nasıl azaltılır?",
        answer:
          "Jet grout veya DSM ile zemin rijitliği artırılarak, gerektiğinde drenaj ve enjeksiyon yöntemleriyle sıvılaşma potansiyeli düşürülür. Yöntem, sondaj ve laboratuvar verisine göre seçilir."
      },
      {
        question: "Bayraklı bölgesinde hangi yöntem uygundur?",
        answer:
          "Yumuşak/gevşek zemin ve yüksek yeraltı suyu nedeniyle çoğunlukla jet grout, DSM veya derin temel (fore kazık) çözümleri değerlendirilir; kesin karar zemin etüdüne bağlıdır."
      },
      {
        question: "Deprem yönetmeliğine uygun uygulama yapıyor musunuz?",
        answer:
          "Uygulamalarımız güncel zemin etüdü ve performans hedefleri doğrultusunda projelendirilir; üretim verileri belgelenerek teslim edilir."
      }
    ]
  },
  {
    slug: "bursa-zemin-guclendirme",
    intro:
      "Bursa'da zemin güçlendirme kararları; ova alüvyonları, sanayi parsellerindeki dolgu tabakaları ve yüksek işletme yükleri birlikte değerlendirilerek verilir. YER6, lojistik ve üretim tesislerinden konut projelerine kadar Bursa genelinde DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Bursa ovası ve sanayi zeminleri",
        body: [
          "Nilüfer, Osmangazi ve Gemlik çevresinde gevşek dolgu, yumuşak kil ve yer yer yüksek yeraltı suyu koşulları; oturma ve taşıma gücü açısından kritik olabilir. Özellikle geniş taban alanlı üretim ve depolama yapılarında düzensiz oturma, zemin iyileştirmesini zorunlu kılar.",
          "Sanayi parsellerindeki kontrolsüz dolgular ve değişken tabaka geçişleri, parsel bazında zemin modeli kurulmasını gerektirir."
        ]
      },
      {
        heading: "Lojistik ve üretim tesislerinde uygulama",
        body: [
          "Lojistik ve üretim tesislerinde DSM zemin iyileştirme, temel altı kolon düzeni ve gerektiğinde jet grout enjeksiyon perdesi birlikte kurgulanır. Yüksek nokta yükleri taşıyan makine temellerinde fore/mini kazık çözümleri devreye alınır.",
          "YER6, Bursa sahalarında karot, kolon sürekliliği, bağlayıcı dozajı ve üretim kayıtlarını izleyerek yatırımın işletme yüklerine uygun performans vermesini güvence altına alır."
        ]
      }
    ],
    faq: [
      {
        question: "Fabrika zemininde oturma sorununa hangi çözüm uygun?",
        answer:
          "Geniş taban alanlarında DSM zemin iyileştirme ile oturma kontrol edilir; yüksek nokta yüklerinde fore/mini kazıklı makine temelleri tercih edilir. Yöntem, yük ve zemin profiline göre belirlenir."
      },
      {
        question: "Bursa'da yüksek yeraltı suyu uygulamayı etkiler mi?",
        answer:
          "Evet; su geçirgenliği yüksek zeminlerde jet grout ve enjeksiyon ile su kontrolü sağlanır, imalat programı yeraltı suyuna göre düzenlenir."
      },
      {
        question: "Mevcut tesiste üretimi durdurmadan güçlendirme mümkün mü?",
        answer:
          "Çoğu durumda kompakt ekipmanla, bölgesel ve düşük titreşimli uygulamalarla üretim büyük ölçüde sürdürülerek güçlendirme planlanabilir."
      }
    ]
  },
  {
    slug: "kocaeli-zemin-guclendirme",
    intro:
      "Kocaeli'nde zemin güçlendirme; körfez alüvyonu, yoğun ağır sanayi yükleri ve bölgenin deprem geçmişi bir arada değerlendirilerek planlanır. YER6, tank ve makine temellerinden lojistik alanlara kadar Kocaeli genelinde DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Kocaeli körfez zemini ve deprem geçmişi",
        body: [
          "İzmit Körfezi çevresindeki alüvyon alanlarda gevşek kum-silt seviyeleri ve yüksek yeraltı suyu, deprem sırasında sıvılaşma açısından risk oluşturabilir. 1999 Marmara depremi, bölgede zemin davranışının yapısal güvenlikteki belirleyici rolünü açıkça ortaya koymuştur.",
          "Petrokimya, otomotiv ve lojistik tesislerinin yoğun olduğu bölgede, ağır ve dinamik yükler zemin iyileştirmesini çoğu projede zorunlu hale getirir."
        ]
      },
      {
        heading: "Ağır sanayi ve tank temellerinde uygulama",
        body: [
          "Büyük çaplı depolama tankları ve makine temellerinde oturma ve sıvılaşma kontrolü için DSM ve jet grout kolonları; yüksek nokta yüklerinde ise fore kazıklı derin temeller uygulanır.",
          "YER6, Kocaeli sahalarında kolon sürekliliği, bağlayıcı dozajı ve yükleme performansını kayıt altına alarak endüstriyel işletme yüklerine uygun teslim güvencesi verir."
        ]
      }
    ],
    faq: [
      {
        question: "Tank temeli altında sıvılaşma riski nasıl yönetilir?",
        answer:
          "Jet grout veya DSM ile zemin rijitliği artırılır, gerektiğinde drenaj çözümleriyle boşluk suyu basıncı kontrol altına alınır. Yöntem, sondaj ve dinamik yük analizine göre seçilir."
      },
      {
        question: "Kocaeli sanayi bölgelerinde çalışıyor musunuz?",
        answer:
          "Evet; Gebze, Çayırova, Körfez ve Dilovası dahil bölge genelinde endüstriyel zemin iyileştirme uygulamaları yapıyoruz."
      },
      {
        question: "Deprem sonrası mevcut tesis güçlendirmesi mümkün mü?",
        answer:
          "Mevcut yapı altında jet grout ve mini kazık çözümleriyle kontrollü güçlendirme planlanabilir; uygulama, yapının statik değerlendirmesiyle birlikte kurgulanır."
      }
    ]
  },
  {
    slug: "eskisehir-zemin-guclendirme",
    intro:
      "Eskişehir'de zemin güçlendirme; Porsuk ovasının alüvyon yapısı, yüksek yeraltı suyu ve organize sanayi bölgelerindeki geniş taban alanlı yapılar dikkate alınarak planlanır. YER6, DSM zemin iyileştirme, jet grout ve fore kazık uygulamalarını bölgenin zemin koşullarına göre optimize eder.",
    sections: [
      {
        heading: "Porsuk ovası alüvyonu ve yeraltı suyu",
        body: [
          "Porsuk çevresindeki alüvyon zeminlerde yumuşak kil ve gevşek silt-kum seviyeleri, yüksek yeraltı suyuyla birlikte oturma ve taşıma gücü açısından hassasiyet oluşturur. Bu koşullar, özellikle sanayi ve lojistik yapılarında zemin iyileştirmesini gerektirebilir.",
          "Tabaka geçişlerinin değişken olduğu bölgelerde, güvenilir tasarım ancak sondaj ve laboratuvar verisiyle kurulan bir zemin modeliyle mümkündür."
        ]
      },
      {
        heading: "Eskişehir'de zemin iyileştirme yaklaşımı",
        body: [
          "Geniş parselli üretim ve depolama yapılarında oturmayı kontrol etmek için DSM zemin iyileştirme; su kontrolü ve yerel güçlendirme için jet grout tercih edilir. Yüksek yapısal yüklerde fore kazıklı temeller devreye alınır.",
          "YER6, Eskişehir sahalarında kolon çapı doğrulaması, bağlayıcı dozajı ve üretim kayıtlarını izleyerek kalite kabul sürecini belgelendirir."
        ]
      }
    ],
    faq: [
      {
        question: "Eskişehir OSB'de zemin iyileştirme gerekli mi?",
        answer:
          "Yumuşak alüvyon ve yüksek yeraltı suyu bulunan parsellerde geniş taban alanlı yapılarda oturma riski nedeniyle çoğunlukla gereklidir; kesin karar zemin etüdüne bağlıdır."
      },
      {
        question: "Yüksek yeraltı suyu uygulamayı nasıl etkiler?",
        answer:
          "Su geçirgen zeminlerde jet grout ve enjeksiyon ile su kontrolü sağlanır; imalat programı ve ekipman seçimi yeraltı suyu seviyesine göre düzenlenir."
      },
      {
        question: "Hangi verilerle ön teklif alabilirim?",
        answer:
          "Mevcut sondaj raporu, parsel ölçüleri ve yapı yükleri ile ön değerlendirme ve yaklaşık metraj hazırlayabiliriz."
      }
    ]
  },
  {
    slug: "konya-zemin-guclendirme",
    intro:
      "Konya'da zemin güçlendirme; geniş ova zemininin killi yapısı, oturma davranışı ve tarımsal/endüstriyel yapıların yük koşulları dikkate alınarak planlanır. YER6, DSM zemin iyileştirme, fore kazık ve jet grout uygulamalarını bölgenin zemin profiline göre kurgular.",
    sections: [
      {
        heading: "Konya ovası zemini ve oturma davranışı",
        body: [
          "Konya ovasının geniş kesiminde yer alan killi ve siltli zeminler, yük altında zamanla oturma (konsolidasyon) davranışı gösterebilir. Bu durum, geniş taban alanlı depolama ve üretim yapılarında düzensiz oturma riskini artırır.",
          "Bölgede yeraltı suyu ve tabaka özellikleri konum bazında değiştiğinden, doğru yöntem seçimi için parsel özelinde zemin etüdü esastır."
        ]
      },
      {
        heading: "Sanayi ve tarımsal yapılarda uygulama",
        body: [
          "Silo, depo ve üretim tesisleri gibi yüksek ve sürekli yük taşıyan yapılarda oturmayı sınırlamak için DSM zemin iyileştirme ve fore kazıklı temeller öne çıkar. Yerel güçlendirme ve su yalıtımı gereken noktalarda jet grout uygulanır.",
          "YER6, Konya sahalarında kolon sürekliliği, mukavemet testleri ve üretim kayıtlarını izleyerek yatırımın uzun vadeli performansını güvence altına alır."
        ]
      }
    ],
    faq: [
      {
        question: "Silo ve depo temellerinde neden zemin iyileştirme gerekir?",
        answer:
          "Yüksek ve sürekli yükler killi zeminlerde konsolidasyon oturmasına yol açabilir. DSM veya kazıklı temel çözümleriyle oturma sınırlandırılarak yapı güvenliği sağlanır."
      },
      {
        question: "Konya genelinde saha uygulaması yapıyor musunuz?",
        answer:
          "Evet; Konya merkez ve ilçelerdeki sanayi, tarım ve altyapı projelerinde zemin güçlendirme uygulamaları yürütüyoruz."
      },
      {
        question: "Ön değerlendirme için ne gerekli?",
        answer:
          "Mevcut sondaj verisi, yapı yükleri ve parsel bilgileri ile yöntem önerisi ve yaklaşık metraj hazırlayabiliriz."
      }
    ]
  },
  {
    slug: "hatay-zemin-guclendirme",
    intro:
      "Hatay'da zemin güçlendirme; Amik ovasının alüvyon yapısı, yüksek yeraltı suyu ve 6 Şubat 2023 depremlerinin ortaya koyduğu zemin davranışı dersleri dikkate alınarak planlanır. YER6, güvenli yeniden yapım sürecinde jet grout, DSM zemin iyileştirme ve fore kazık çözümleriyle sağlam temel altyapısı kurulmasına destek olur.",
    sections: [
      {
        heading: "Hatay zemini ve 2023 depremi dersleri",
        body: [
          "Antakya ve çevresindeki Amik ovası, kalın alüvyon tabakaları, yumuşak kil ve yüksek yeraltı suyuyla karakterizedir. İskenderun kıyı kesiminde gözlenen zemin davranışları, gevşek ve suya doygun zeminlerde sıvılaşma ile taşıma gücü kaybının yapısal hasarı büyütebildiğini göstermiştir.",
          "Bu koşullar, bölgede yeni yapıların temellerinde zemin iyileştirmesinin ve doğru temel sistemi seçiminin belirleyici olduğunu ortaya koyar."
        ]
      },
      {
        heading: "Yeniden yapımda zemin güçlendirme",
        body: [
          "Sıvılaşma ve oturma riski taşıyan alüvyon sahalarda jet grout ve DSM zemin iyileştirme ile zemin rijitliği artırılır; yüksek ve derin yükler için fore kazıklı temeller sağlam tabakaya ulaşır.",
          "YER6, Hatay sahalarında sondaj verisiyle kurulan zemin modeli üzerinden kolon parametrelerini belirler; deneme kolonları, karot ve süreklilik kontrolleriyle üretim kalitesini belgeler."
        ]
      }
    ],
    faq: [
      {
        question: "Deprem bölgesinde yeni yapı için zemin iyileştirme şart mı?",
        answer:
          "Gevşek/suya doygun alüvyon ve sıvılaşma riski bulunan sahalarda çoğunlukla gereklidir. Kesin karar, güncel zemin etüdü ve performans hedeflerine göre verilir."
      },
      {
        question: "İskenderun kıyı zemininde hangi yöntem uygun?",
        answer:
          "Yüksek yeraltı suyu ve sıvılaşma potansiyeli nedeniyle jet grout, DSM veya derin temel çözümleri değerlendirilir; yöntem sondaj sonuçlarına bağlıdır."
      },
      {
        question: "Hatay genelinde saha uygulaması yapıyor musunuz?",
        answer:
          "Evet; Antakya, İskenderun, Defne ve Samandağ dahil bölge genelinde zemin güçlendirme uygulamaları yürütüyoruz."
      }
    ]
  },
  {
    slug: "kahramanmaras-zemin-guclendirme",
    intro:
      "Kahramanmaraş'ta zemin güçlendirme; 6 Şubat 2023 depremlerinin merkez üssü olan bölgenin fay etkisi, ova alüvyonları ve yeniden inşa ihtiyaçları dikkate alınarak planlanır. YER6, güvenli yapı temeli için jet grout, DSM zemin iyileştirme ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Kahramanmaraş zemini ve fay etkisi",
        body: [
          "Bölge, aktif fay zonuna yakınlığı ve ova kesimlerindeki alüvyon zeminler nedeniyle deprem etkilerinin zeminle birlikte değerlendirilmesini gerektirir. Gevşek dolgu ve yumuşak tabakalar, sarsıntı sırasında büyütme (amplifikasyon) ve oturma açısından risk taşıyabilir.",
          "Yeni yapılaşmada, zemin koşulları ile yapısal tasarımın uyumlu kurgulanması güvenli sonuç için esastır."
        ]
      },
      {
        heading: "Güvenli yeniden yapım için temel çözümleri",
        body: [
          "Oturma ve taşıma gücü sorunlu alüvyon sahalarda DSM ve jet grout ile zemin rijitliği artırılır; yüksek yükler ve derin temeller için fore kazık uygulanır.",
          "YER6, Kahramanmaraş sahalarında zemin modeli, deneme kolonları ve kalite kontrol kayıtlarıyla üretim güvenilirliğini belgeler."
        ]
      }
    ],
    faq: [
      {
        question: "Merkez üssü bölgesinde temel için ne önerilir?",
        answer:
          "Zemin profiline göre DSM, jet grout veya fore kazıklı temel çözümleri değerlendirilir. Yöntem seçimi mutlaka güncel zemin etüdüne dayanmalıdır."
      },
      {
        question: "Alüvyon zeminde oturma nasıl kontrol edilir?",
        answer:
          "Zemin iyileştirme (DSM/jet grout) ile rijitlik artırılır veya yükler kazıklarla sağlam tabakaya aktarılır; böylece düzensiz oturma sınırlandırılır."
      },
      {
        question: "Kahramanmaraş'ta çalışıyor musunuz?",
        answer:
          "Evet; merkez ve ilçelerdeki konut, kamu ve altyapı projelerinde zemin güçlendirme uygulamaları yapıyoruz."
      }
    ]
  },
  {
    slug: "malatya-zemin-guclendirme",
    intro:
      "Malatya'da zemin güçlendirme; ova alüvyonları, killi zemin davranışı ve 2023 depremlerinin ardından öne çıkan güvenli yeniden yapım ihtiyacı doğrultusunda planlanır. YER6, DSM zemin iyileştirme, fore kazık ve jet grout uygulamalarını bölgenin zemin koşullarına göre kurgular.",
    sections: [
      {
        heading: "Malatya zemini ve yapısal riskler",
        body: [
          "Battalgazi ve Yeşilyurt çevresindeki ova kesimlerinde alüvyon ve killi tabakalar, yük altında oturma ve deprem sırasında zemin büyütmesi açısından değerlendirilmelidir. Gevşek dolgu alanları, temel performansını doğrudan etkiler.",
          "Bu nedenle yeni yapılarda temel sistemi, zemin etüdüyle kurulan bir model üzerinden seçilmelidir."
        ]
      },
      {
        heading: "Zemin iyileştirme ve temel çözümleri",
        body: [
          "Oturma sorunlu alüvyon ve killi zeminlerde DSM zemin iyileştirme ve gerektiğinde jet grout ile rijitlik artırılır; yüksek yapısal yükler fore kazıklı temellerle taşınır.",
          "YER6, Malatya sahalarında kolon sürekliliği, mukavemet deneyleri ve üretim kayıtlarını izleyerek kalite kabul sürecini belgeler."
        ]
      }
    ],
    faq: [
      {
        question: "Killi zeminde hangi güçlendirme yöntemi uygun?",
        answer:
          "Killi ve oturmaya yatkın zeminlerde DSM zemin iyileştirme veya kazıklı temel çözümleri öne çıkar; yöntem, plastisite ve yük koşullarına göre belirlenir."
      },
      {
        question: "Yeni konut projesi için zemin etüdü şart mı?",
        answer:
          "Evet; güvenli temel tasarımı ve doğru yöntem seçimi için güncel zemin etüdü verisi gereklidir."
      },
      {
        question: "Malatya genelinde hizmet veriyor musunuz?",
        answer:
          "Evet; merkez ilçeler ve çevredeki projelerde zemin güçlendirme saha uygulamaları yürütüyoruz."
      }
    ]
  },
  {
    slug: "adiyaman-zemin-guclendirme",
    intro:
      "Adıyaman'da zemin güçlendirme; ova alüvyonları, killi zemin davranışı ve 2023 depremlerinin ardından öne çıkan güvenli yeniden yapım ihtiyacı doğrultusunda planlanır. YER6, DSM zemin iyileştirme, jet grout ve fore kazık uygulamalarını bölgenin zemin koşullarına göre kurgular.",
    sections: [
      {
        heading: "Adıyaman zemini ve deprem sonrası öncelikler",
        body: [
          "Merkez ve çevre ilçelerdeki alüvyon ve killi zeminler, yük altında oturma ve deprem sırasında zemin büyütmesi açısından dikkatle değerlendirilmelidir. Gevşek dolgu alanları ve suya doygun tabakalar, temel performansını doğrudan etkileyen risk unsurlarıdır.",
          "Güvenli yeniden yapımda, temel sistemi seçimi mutlaka sondaj ve laboratuvar verisiyle kurulan bir zemin modeline dayanmalıdır."
        ]
      },
      {
        heading: "Zemin iyileştirme ve temel çözümleri",
        body: [
          "Oturma ve taşıma gücü sorunlu sahalarda DSM zemin iyileştirme ve jet grout ile zemin rijitliği artırılır; yüksek yapısal yükler fore kazıklı temellerle sağlam tabakaya aktarılır.",
          "YER6, Adıyaman sahalarında deneme kolonları, karot alımı ve süreklilik kontrolleriyle üretim kalitesini belgeleyerek teslim eder."
        ]
      }
    ],
    faq: [
      {
        question: "Deprem sonrası yeni yapıda hangi temel önerilir?",
        answer:
          "Zemin profiline göre DSM, jet grout veya fore kazıklı temel çözümleri değerlendirilir. Karar, güncel zemin etüdü ve performans hedeflerine dayanır."
      },
      {
        question: "Alüvyon zeminde oturma nasıl önlenir?",
        answer:
          "Zemin iyileştirme ile rijitlik artırılır veya yükler kazıklarla derindeki sağlam tabakaya aktarılarak düzensiz oturma sınırlandırılır."
      },
      {
        question: "Adıyaman'da saha uygulaması yapıyor musunuz?",
        answer:
          "Evet; merkez ve ilçelerdeki konut, kamu ve altyapı projelerinde zemin güçlendirme uygulamaları yürütüyoruz."
      }
    ]
  },
  {
    slug: "gaziantep-zemin-guclendirme",
    intro:
      "Gaziantep'te zemin güçlendirme; yoğun sanayi yapılaşması, değişken zemin profili ve bölgenin deprem etkisi bir arada değerlendirilerek planlanır. YER6, organize sanayi tesislerinden konut projelerine kadar Gaziantep genelinde DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Gaziantep zemini ve yapısal koşullar",
        body: [
          "Kent genelinde nispeten sağlam platform zeminlerinin yanı sıra, ova ve dere yataklarına yakın kesimlerde alüvyon ve gevşek dolgu tabakalarıyla karşılaşılır. Bu değişkenlik, aynı bölgede bile parsel bazında farklı temel çözümleri gerektirebilir.",
          "Deprem etkisinin belirgin olduğu bölgede, zemin koşulları ile yapısal tasarımın birlikte kurgulanması güvenli sonuç için esastır."
        ]
      },
      {
        heading: "Sanayi ve konut yapılarında uygulama",
        body: [
          "Geniş taban alanlı sanayi tesislerinde oturmayı kontrol etmek için DSM zemin iyileştirme; yerel güçlendirme ve su yalıtımı için jet grout uygulanır. Yüksek yükler ve derin temellerde fore kazık devreye alınır.",
          "YER6, Gaziantep sahalarında kolon çapı doğrulaması, bağlayıcı dozajı ve üretim kayıtlarını izleyerek kalite kabul sürecini belgeler."
        ]
      }
    ],
    faq: [
      {
        question: "Gaziantep OSB'de zemin iyileştirme gerekir mi?",
        answer:
          "Alüvyon veya gevşek dolgu bulunan parsellerde geniş taban alanlı yapılarda oturma riski nedeniyle çoğunlukla gereklidir; kesin karar zemin etüdüne bağlıdır."
      },
      {
        question: "Aynı bölgede zemin neden parselden parsele değişir?",
        answer:
          "Platform zeminleri ile dere yatağı/ova alüvyonları yan yana bulunabilir. Bu nedenle her parsel için ayrı sondaj ve değerlendirme yapılması önerilir."
      },
      {
        question: "Gaziantep genelinde hizmet veriyor musunuz?",
        answer:
          "Evet; merkez ilçeler, OSB ve çevre bölgelerdeki sanayi, konut ve altyapı projelerinde zemin güçlendirme uygulamaları yapıyoruz."
      }
    ]
  },
  {
    slug: "adana-zemin-guclendirme",
    intro:
      "Adana'da zemin güçlendirme; Çukurova ovasının kalın alüvyon yapısı, yüksek yeraltı suyu ve sıvılaşma potansiyeli dikkate alınarak planlanır. YER6, sanayi tesisleri, lojistik alanlar ve konut projelerinde jet grout, DSM ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Adana (Çukurova) zemin koşulları",
        body: [
          "Seyhan ve Ceyhan çevresindeki Çukurova alüvyonunda gevşek kum-silt seviyeleri ve yüksek yeraltı suyu yaygındır. Bu koşullar, deprem sırasında sıvılaşma ve yük altında oturma açısından değerlendirilmesi gereken risklerdir.",
          "Sanayi ve depolama yapılarının yoğun olduğu bölgede, geniş taban alanlı yapılarda düzensiz oturma zemin iyileştirmesini çoğu projede zorunlu kılar."
        ]
      },
      {
        heading: "Adana'da uygulanan yöntemler",
        body: [
          "Su kontrolü ve sıvılaşma azaltımı gereken sahalarda jet grout ve enjeksiyon; oturma kontrolü gereken geniş parsellerde DSM zemin iyileştirme öne çıkar. Yüksek ve derin yükler için fore kazıklı temeller tercih edilir.",
          "YER6, Adana sahalarında basınç kayıtları, kolon çapı doğrulaması ve yeraltı suyu davranışını kalite kabul sürecinin merkezine alır."
        ]
      }
    ],
    faq: [
      { question: "Çukurova alüvyonunda sıvılaşma riski nasıl azaltılır?", answer: "Jet grout veya DSM ile zemin rijitliği artırılır; gerektiğinde drenaj ve enjeksiyonla boşluk suyu basıncı kontrol edilir. Yöntem, sondaj ve laboratuvar verisine göre seçilir." },
      { question: "Adana'da fabrika zemini için hangi çözüm uygun?", answer: "Geniş taban alanlarında DSM ile oturma kontrolü, yüksek nokta yüklerinde fore/mini kazık öne çıkar. Karar zemin profili ve yüke göre verilir." },
      { question: "YER6 Adana'da hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Adana ve Çukurova genelinde zemin güçlendirme saha uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "antalya-zemin-guclendirme",
    intro:
      "Antalya'da zemin güçlendirme; kıyı alüvyonları, karstik kireçtaşı (boşluk/erime riski) ve yüksek yeraltı suyu birlikte değerlendirilerek planlanır. YER6, otel, konut ve ticari yapı projelerinde jet grout, fore kazık ve enjeksiyon çözümleri sunar.",
    sections: [
      {
        heading: "Antalya zemininde karst ve alüvyon",
        body: [
          "Bölgede yer yer karstik kireçtaşı bulunması, zemin içinde boşluk ve erime kanalları riski oluşturur; bu da temel altında ani oturma veya düzensizlik açısından önemlidir. Kıyı kesimlerinde ise gevşek alüvyon ve yüksek yeraltı suyu belirleyicidir.",
          "Bu değişken yapı, doğru yöntemin ancak sondaj ve gerektiğinde jeofizik ölçümlerle kurulan zemin modeline göre seçilmesini gerektirir."
        ]
      },
      {
        heading: "Antalya'da uygulama yaklaşımı",
        body: [
          "Karstik boşlukların doldurulması ve su kontrolü için enjeksiyon ve jet grout; yüksek yapı ve derin temellerde fore kazık öne çıkar. Otel ve ticari yapılarda oturmaya duyarlı yükler için temel altı güçlendirme kurgulanır.",
          "YER6, Antalya sahalarında boşluk tespiti, enjeksiyon kayıtları ve kolon sürekliliği kontrolleriyle kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Karstik zeminde temel nasıl güvence altına alınır?", answer: "Boşluklar enjeksiyonla doldurulur, gerektiğinde jet grout ile zemin güçlendirilir veya yükler fore kazıkla sağlam tabakaya aktarılır. Öncesinde boşluk tespiti (sondaj/jeofizik) yapılır." },
      { question: "Antalya kıyı zemininde hangi yöntem uygun?", answer: "Yüksek yeraltı suyu ve gevşek alüvyon nedeniyle jet grout, enjeksiyon veya derin temel çözümleri değerlendirilir; karar zemin etüdüne bağlıdır." },
      { question: "YER6 Antalya'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Antalya ve çevresinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "sakarya-zemin-guclendirme",
    intro:
      "Sakarya'da zemin güçlendirme; Adapazarı ovasının gevşek alüvyonu, çok yüksek yeraltı suyu ve 1999 depreminde yaşanan sıvılaşma dersleri doğrultusunda planlanır. YER6, sanayi ve konut projelerinde DSM, jet grout ve taş kolon çözümleri sunar.",
    sections: [
      {
        heading: "Sakarya zemini ve sıvılaşma",
        body: [
          "Adapazarı ve çevresindeki alüvyon ovada gevşek kum-silt seviyeleri ve yüzeye çok yakın yeraltı suyu, sıvılaşma açısından Türkiye'nin en kritik sahalarından birini oluşturur. 1999 Marmara depremi bu bölgede sıvılaşma kaynaklı ağır hasarları açıkça göstermiştir.",
          "Bu nedenle Sakarya'da yeni yapıların temellerinde zemin iyileştirmesi ve uygun temel seçimi belirleyici öneme sahiptir."
        ]
      },
      {
        heading: "Sakarya'da uygulama yaklaşımı",
        body: [
          "Sıvılaşma direncini artırmak ve oturmayı kontrol etmek için DSM, jet grout ve gerektiğinde taş kolon uygulanır. Yüksek yapısal yükler fore kazıklı temellerle sağlam tabakaya aktarılır.",
          "YER6, Sakarya sahalarında kolon sürekliliği, mukavemet testleri ve yeraltı suyu davranışını kalite kabul sürecinde izler."
        ]
      }
    ],
    faq: [
      { question: "Adapazarı zemininde sıvılaşma neden bu kadar önemli?", answer: "Gevşek kum-silt ve çok yüksek yeraltı suyu birleşimi deprem sırasında sıvılaşma riskini artırır; 1999'da bölgede bu kaynaklı ağır hasarlar görülmüştür. İyileştirme bu riski azaltır." },
      { question: "Hangi yöntem sıvılaşmaya karşı daha etkili?", answer: "DSM, jet grout ve taş kolon; zemin rijitliğini artırıp drenaj sağlayarak sıvılaşma direncine katkıda bulunur. Seçim zemin verisine göre yapılır." },
      { question: "YER6 Sakarya'da hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Sakarya ve çevresinde zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "samsun-zemin-guclendirme",
    intro:
      "Samsun'da zemin güçlendirme; Karadeniz kıyısı ve ırmak deltalarının alüvyon yapısı, yüksek yeraltı suyu ve liman/sanayi yükleri dikkate alınarak planlanır. YER6, jet grout, DSM ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Samsun zemin koşulları",
        body: [
          "Kızılırmak ve Yeşilırmak delta alüvyonları ile kıyı kesimindeki gevşek çökeller, yüksek yeraltı suyuyla birlikte oturma ve sıvılaşma açısından değerlendirilmelidir. Liman ve sanayi yapılarının ağır yükleri bu koşullarda zemin iyileştirmesini gerektirebilir.",
          "Tabaka geçişlerinin değişken olduğu delta alanlarında güvenilir tasarım için parsel bazında zemin etüdü esastır."
        ]
      },
      {
        heading: "Samsun'da uygulama yaklaşımı",
        body: [
          "Su kontrolü ve yerel güçlendirme için jet grout; geniş alanlarda oturma kontrolü için DSM; yüksek ve derin yükler için fore kazık uygulanır.",
          "YER6, Samsun sahalarında basınç kayıtları, kolon çapı doğrulaması ve üretim verileriyle kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Delta/kıyı alüvyonunda hangi yöntem uygun?", answer: "Yüksek yeraltı suyu ve gevşek çökeller nedeniyle jet grout, DSM veya derin temel çözümleri değerlendirilir; karar zemin etüdüne bağlıdır." },
      { question: "Liman/sanayi yapısı zemini güçlendirilebilir mi?", answer: "Evet; ağır ve dinamik yükler için DSM, jet grout ve fore kazık kombinasyonlarıyla oturma ve taşıma güvenliği sağlanır." },
      { question: "YER6 Samsun'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Samsun ve Karadeniz bölgesinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "denizli-zemin-guclendirme",
    intro:
      "Denizli'de zemin güçlendirme; aktif fay/jeotermal bölgenin zemin koşulları, alüvyon ve traverten yapıları ile sanayi yüklerinin birlikte değerlendirilmesiyle planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Denizli zemini ve deprem aktivitesi",
        body: [
          "Bölge, aktif fay ve jeotermal etkinliğe yakınlığıyla dikkat gerektirir. Ova kesimlerindeki alüvyon ve yer yer traverten oluşumları, taşıma gücü ve oturma açısından değişken davranış gösterir.",
          "Bu değişkenlik, sanayi ve konut yapılarında temel sisteminin zemin etüdüyle kurulan bir modele göre seçilmesini gerektirir."
        ]
      },
      {
        heading: "Denizli'de uygulama yaklaşımı",
        body: [
          "Oturma kontrolü ve zemin rijitliği için DSM ve jet grout; yüksek yapısal yükler için fore kazıklı temeller öne çıkar. Yerel güçlendirme ve su yalıtımı gereken noktalarda jet grout uygulanır.",
          "YER6, Denizli sahalarında karot, kolon sürekliliği ve üretim kayıtlarıyla kalite kabul sürecini belgeler."
        ]
      }
    ],
    faq: [
      { question: "Traverten/değişken zeminde temel nasıl kurulur?", answer: "Zemin etüdüyle tabaka davranışı belirlenir; oturmaya duyarlı alanlarda DSM/jet grout ile güçlendirme veya fore kazıkla derin yük aktarımı tercih edilir." },
      { question: "Denizli sanayi yapılarında zemin iyileştirme gerekir mi?", answer: "Alüvyon ve gevşek zemin bulunan parsellerde geniş taban alanlı yapılarda çoğunlukla gereklidir; kesin karar zemin etüdüne bağlıdır." },
      { question: "YER6 Denizli'de hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Denizli ve çevresinde zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "diyarbakir-zemin-guclendirme",
    intro:
      "Diyarbakır'da zemin güçlendirme; bazalt platformun nispeten sağlam yapısı ile Dicle vadisi ve ova kesimlerindeki alüvyonun bir arada değerlendirilmesiyle planlanır. YER6, jet grout, fore kazık ve DSM çözümleri sunar.",
    sections: [
      {
        heading: "Diyarbakır zemin koşulları",
        body: [
          "Kent genelinde bazalt platform nispeten sağlam bir zemin sunarken, Dicle vadisine ve ova kesimlerine yakın alanlarda alüvyon ve gevşek dolgu tabakalarıyla karşılaşılır. Bu değişkenlik, aynı bölgede farklı temel çözümleri gerektirebilir.",
          "Doğru yöntem seçimi için parsel özelinde sondaj ve zemin modeli esastır."
        ]
      },
      {
        heading: "Diyarbakır'da uygulama yaklaşımı",
        body: [
          "Alüvyon ve gevşek zemin sahalarında oturma ve taşıma gücü için DSM ve jet grout; yüksek yükler ve derin temeller için fore kazık öne çıkar. Sağlam platform zeminlerinde ise temel çözümleri buna göre optimize edilir.",
          "YER6, Diyarbakır sahalarında kolon sürekliliği, mukavemet testleri ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Aynı şehirde zemin neden farklılık gösterir?", answer: "Bazalt platform ile vadi/ova alüvyonu yan yana bulunabilir. Bu yüzden her parsel için ayrı sondaj ve değerlendirme önerilir." },
      { question: "Diyarbakır'da hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, jet grout veya fore kazık uygulanır; karar sondaj ve laboratuvar verisiyle verilir." },
      { question: "YER6 Diyarbakır'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Diyarbakır ve çevresinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "sanliurfa-zemin-guclendirme",
    intro:
      "Şanlıurfa'da zemin güçlendirme; GAP bölgesinin kalker platformu, ova alüvyonları ve sulama etkisiyle değişen zemin koşulları dikkate alınarak planlanır. YER6, tarımsal tesis, sanayi ve konut projelerinde jet grout, DSM ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Şanlıurfa zemin koşulları",
        body: [
          "Bölgede kalker platform nispeten sağlam zemin sunarken, ova ve sulama alanlarına yakın kesimlerde alüvyon, killi zeminler ve yükselen yeraltı suyu görülebilir. GAP sulamasıyla artan nem, killi zeminlerde şişme-oturma davranışını etkileyebilir.",
          "Bu değişkenlik, temel sisteminin parsel bazında zemin etüdüyle seçilmesini gerektirir."
        ]
      },
      {
        heading: "Şanlıurfa'da uygulama yaklaşımı",
        body: [
          "Oturma ve taşıma gücü sorunlu alüvyon sahalarda DSM ve jet grout; yüksek yükler ve derin temeller için fore kazık öne çıkar. Yerel güçlendirme ve su kontrolü gereken noktalarda jet grout uygulanır.",
          "YER6, Şanlıurfa sahalarında kolon sürekliliği, mukavemet testleri ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Sulama etkisiyle killi zemin sorun çıkarır mı?", answer: "Nem artışı yüksek plastisiteli killerde şişme-oturma hareketine yol açabilir. Uygun zemin iyileştirme ve temel sistemi bu hareketleri kontrol altına alır." },
      { question: "Şanlıurfa'da hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, jet grout veya fore kazık uygulanır; karar sondaj ve laboratuvar verisiyle verilir." },
      { question: "YER6 Şanlıurfa'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Şanlıurfa ve GAP bölgesinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "tekirdag-zemin-guclendirme",
    intro:
      "Tekirdağ'da zemin güçlendirme; Trakya'nın kıyı alüvyonları, killi zeminler ve Çorlu-Çerkezköy hattındaki yoğun sanayi yükleri dikkate alınarak planlanır. YER6, sanayi ve lojistik tesisleri için DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Tekirdağ zemin koşulları",
        body: [
          "Marmara kıyısı ve iç kesimlerde killi-siltli zeminler ile yer yer gevşek dolgu alanları bulunur. Organize sanayi bölgelerindeki geniş taban alanlı ve ağır yüklü yapılar, oturma açısından zemin iyileştirmesini gerektirebilir.",
          "Kıyı kesiminde yeraltı suyu ve gevşek çökeller ek hassasiyet oluşturur."
        ]
      },
      {
        heading: "Tekirdağ'da uygulama yaklaşımı",
        body: [
          "Geniş sanayi parsellerinde oturma kontrolü için DSM zemin iyileştirme; yüksek nokta yükleri ve derin temeller için fore/mini kazık; su kontrolü gereken noktalarda jet grout uygulanır.",
          "YER6, Tekirdağ sahalarında karot, kolon sürekliliği ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Sanayi tesisi zemininde oturmaya karşı ne yapılır?", answer: "Geniş taban alanlarında DSM ile oturma kontrol edilir; yüksek nokta yüklerinde fore/mini kazıklı makine temelleri tercih edilir." },
      { question: "Çorlu/Çerkezköy OSB'de zemin iyileştirme gerekir mi?", answer: "Killi/gevşek zemin bulunan parsellerde geniş taban alanlı yapılarda çoğunlukla gereklidir; kesin karar zemin etüdüne bağlıdır." },
      { question: "YER6 Tekirdağ'da hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Tekirdağ ve Trakya genelinde zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "trabzon-zemin-guclendirme",
    intro:
      "Trabzon'da zemin güçlendirme; dik topoğrafya, heyelan riski, dere yataklarındaki dolgular ve dar sahil şeridi dikkate alınarak planlanır. YER6, fore kazık, ankraj, iksa ve zemin iyileştirme çözümleri sunar.",
    sections: [
      {
        heading: "Trabzon zemini ve şev riski",
        body: [
          "Engebeli topoğrafya, yüksek yağış ve dere yataklarındaki gevşek dolgular; heyelan ve şev duraysızlığı açısından belirleyicidir. Sahil dolgu alanlarında ise gevşek çökeller ve yeraltı suyu öne çıkar.",
          "Bu koşullar, temel ve istinat çözümlerinde hassas deplasman kontrolü gerektirir."
        ]
      },
      {
        heading: "Trabzon'da uygulama yaklaşımı",
        body: [
          "Yamaç duraylılığı için öngermeli ankraj ve kazıklı iksa; dolgu ve gevşek zeminlerde fore kazıklı derin temeller; su ve gevşek zemin kontrolü için jet grout uygulanır.",
          "YER6, Trabzon sahalarında ankraj test yükleri, delgi sürekliliği ve deplasman izlemesiyle kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Heyelanlı/yamaç zeminde ne yapılır?", answer: "Öngermeli ankraj ve kazıklı iksa perdeleriyle yamaç duraylılığı sağlanır; drenaj çözümleriyle su etkisi azaltılır. Uygulama zemin etüdüne dayanır." },
      { question: "Dere dolgusu üzerinde temel güvenli olur mu?", answer: "Gevşek dolgularda yük, fore kazıkla sağlam tabakaya aktarılır veya zemin iyileştirmesiyle güçlendirilir. Karar sondaj sonucuna bağlıdır." },
      { question: "YER6 Trabzon'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Trabzon ve Doğu Karadeniz'de zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "erzurum-zemin-guclendirme",
    intro:
      "Erzurum'da zemin güçlendirme; yüksek rakım, don derinliği, killi ve volkanik kökenli zeminler ile kısa saha sezonu dikkate alınarak planlanır. YER6, DSM, fore kazık ve jet grout çözümleri sunar.",
    sections: [
      {
        heading: "Erzurum zemin koşulları",
        body: [
          "Yüksek rakım ve sert kış koşulları, don derinliği ve mevsimsel donma-çözülme etkilerini temel tasarımında belirleyici kılar. Ova kesimlerindeki killi ve volkanik kökenli zeminler taşıma gücü ve oturma açısından değişkenlik gösterir.",
          "Bu koşullar, imalat programının mevsime ve zemin modeline göre kurgulanmasını gerektirir."
        ]
      },
      {
        heading: "Erzurum'da uygulama yaklaşımı",
        body: [
          "Oturma kontrolü ve zemin rijitliği için DSM; yüksek yapısal yükler için fore kazık; yerel güçlendirme için jet grout uygulanır. Don derinliği ve numune koruması saha kalite planında öne çıkar.",
          "YER6, Erzurum sahalarında kolon sürekliliği, mukavemet testleri ve mevsimsel kalite planıyla üretim güvenilirliğini belgeler."
        ]
      }
    ],
    faq: [
      { question: "Don derinliği temeli nasıl etkiler?", answer: "Temel, don derinliğinin altına indirilmeli veya donma-çözülme etkisine karşı korunmalıdır. Zemin iyileştirme ve uygun temel derinliği birlikte değerlendirilir." },
      { question: "Erzurum'da hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, fore kazık veya jet grout uygulanır; karar sondaj ve laboratuvar verisiyle verilir." },
      { question: "YER6 Erzurum'da hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Erzurum ve Doğu Anadolu'da zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "aydin-zemin-guclendirme",
    intro:
      "Aydın'da zemin güçlendirme; Büyük Menderes ovasının alüvyonu, jeotermal/fay etkisi ve yüksek yeraltı suyu dikkate alınarak planlanır. YER6, tarımsal ve sanayi tesisleri için jet grout, DSM ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Aydın zemin koşulları",
        body: [
          "Büyük Menderes ovasındaki kalın alüvyon, gevşek kum-silt seviyeleri ve yüksek yeraltı suyuyla birlikte oturma ve sıvılaşma açısından değerlendirilmelidir. Bölgenin jeotermal ve fay etkinliği ek dikkat gerektirir.",
          "Bu koşullar, temel sisteminin zemin etüdüyle kurulan bir modele göre seçilmesini gerektirir."
        ]
      },
      {
        heading: "Aydın'da uygulama yaklaşımı",
        body: [
          "Su kontrolü ve sıvılaşma azaltımı için jet grout ve enjeksiyon; oturma kontrolü için DSM; yüksek ve derin yükler için fore kazık uygulanır.",
          "YER6, Aydın sahalarında basınç kayıtları, kolon çapı doğrulaması ve yeraltı suyu davranışını kalite kabul sürecinde izler."
        ]
      }
    ],
    faq: [
      { question: "Menderes ovasında sıvılaşma riski var mı?", answer: "Gevşek kum-silt ve yüksek yeraltı suyu bulunan alüvyon alanlarda sıvılaşma potansiyeli değerlendirilmelidir; gerekli görülürse jet grout/DSM ile azaltılır." },
      { question: "Aydın'da hangi yöntem uygulanır?", answer: "Zemin tipine göre jet grout, DSM veya fore kazık uygulanır; karar sondaj ve laboratuvar verisine bağlıdır." },
      { question: "YER6 Aydın'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Aydın ve Ege bölgesinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "balikesir-zemin-guclendirme",
    intro:
      "Balıkesir'de zemin güçlendirme; fay bölgesi etkisi, ova alüvyonları, sanayi yükleri ve Bandırma kıyı/liman koşulları dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Balıkesir zemin koşulları",
        body: [
          "Ova kesimlerindeki alüvyon ve gevşek dolgu alanları ile Bandırma çevresindeki kıyı çökelleri, oturma ve deprem etkisi açısından değerlendirilmelidir. Bölgenin fay etkinliği zemin davranışını önemli kılar.",
          "Sanayi ve liman yapılarının ağır yükleri, bu koşullarda zemin iyileştirmesini gerektirebilir."
        ]
      },
      {
        heading: "Balıkesir'de uygulama yaklaşımı",
        body: [
          "Geniş sanayi parsellerinde oturma kontrolü için DSM; su kontrolü ve yerel güçlendirme için jet grout; yüksek ve derin yükler için fore kazık uygulanır.",
          "YER6, Balıkesir sahalarında kolon sürekliliği, mukavemet testleri ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Bandırma kıyı zemininde hangi yöntem uygun?", answer: "Yüksek yeraltı suyu ve gevşek çökeller nedeniyle jet grout, DSM veya derin temel çözümleri değerlendirilir; karar zemin etüdüne bağlıdır." },
      { question: "Sanayi yapısı için zemin iyileştirme gerekir mi?", answer: "Alüvyon/gevşek zemin bulunan geniş taban alanlı yapılarda çoğunlukla gereklidir; kesin karar zemin etüdüne bağlıdır." },
      { question: "YER6 Balıkesir'de hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Balıkesir ve çevresinde zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "ordu-zemin-guclendirme",
    intro:
      "Ordu'da zemin güçlendirme; dik yamaçlar, heyelan riski, dere yataklarındaki dolgular ve dar sahil şeridi dikkate alınarak planlanır. YER6, fore kazık, ankraj, iksa ve zemin iyileştirme çözümleri sunar.",
    sections: [
      {
        heading: "Ordu zemini ve şev riski",
        body: [
          "Engebeli topoğrafya, yüksek yağış ve dere yataklarındaki gevşek dolgular heyelan ve şev duraysızlığı açısından belirleyicidir. Sahil dolgu alanlarında gevşek çökeller ve yeraltı suyu öne çıkar.",
          "Bu koşullar, temel ve istinat çözümlerinde hassas deplasman kontrolü gerektirir."
        ]
      },
      {
        heading: "Ordu'da uygulama yaklaşımı",
        body: [
          "Yamaç duraylılığı için öngermeli ankraj ve kazıklı iksa; gevşek dolgularda fore kazıklı derin temeller; su ve gevşek zemin kontrolü için jet grout uygulanır.",
          "YER6, Ordu sahalarında ankraj test yükleri, delgi sürekliliği ve deplasman izlemesiyle kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Yamaç/heyelan sahasında ne yapılır?", answer: "Öngermeli ankraj, kazıklı iksa ve drenaj çözümleriyle yamaç duraylılığı sağlanır. Uygulama zemin etüdü ve stabilite analizine dayanır." },
      { question: "Dere dolgusu üzerinde güvenli temel olur mu?", answer: "Gevşek dolgularda yük fore kazıkla sağlam tabakaya aktarılır veya zemin iyileştirmesiyle güçlendirilir. Karar sondaj sonucuna bağlıdır." },
      { question: "YER6 Ordu'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Ordu ve Karadeniz bölgesinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "elazig-zemin-guclendirme",
    intro:
      "Elazığ'da zemin güçlendirme; aktif fay etkisi (2020 Sivrice depremi), alüvyon ve killi zeminler ile Hazar çevresi koşulları dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Elazığ zemini ve deprem etkisi",
        body: [
          "Bölge, aktif fay zonuna yakınlığı nedeniyle deprem etkilerinin zeminle birlikte değerlendirilmesini gerektirir. Ova kesimlerindeki alüvyon ve killi zeminler, yük altında oturma ve sarsıntı sırasında büyütme açısından risk taşıyabilir.",
          "2020 depremi, bölgede zemin davranışının yapısal güvenlikteki rolünü ortaya koymuştur."
        ]
      },
      {
        heading: "Elazığ'da uygulama yaklaşımı",
        body: [
          "Oturma ve taşıma gücü sorunlu zeminlerde DSM ve jet grout ile rijitlik artırılır; yüksek yapısal yükler fore kazıklı temellerle sağlam tabakaya aktarılır.",
          "YER6, Elazığ sahalarında deneme kolonları, karot ve süreklilik kontrolleriyle üretim kalitesini belgeler."
        ]
      }
    ],
    faq: [
      { question: "Fay bölgesinde yeni yapı için ne önerilir?", answer: "Zemin profiline göre DSM, jet grout veya fore kazıklı temel çözümleri değerlendirilir. Karar mutlaka güncel zemin etüdüne dayanmalıdır." },
      { question: "Killi/alüvyon zeminde oturma nasıl kontrol edilir?", answer: "Zemin iyileştirme ile rijitlik artırılır veya yükler kazıklarla sağlam tabakaya aktarılarak düzensiz oturma sınırlandırılır." },
      { question: "YER6 Elazığ'da hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Elazığ ve çevresinde zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "mersin-zemin-guclendirme",
    intro:
      "Mersin'de zemin güçlendirme; Akdeniz kıyı alüvyonları, liman ve sanayi yükleri, yüksek yeraltı suyu ve yer yer karstik etki dikkate alınarak planlanır. YER6, jet grout, DSM ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Mersin zemin koşulları",
        body: [
          "Kıyı ve ova kesimlerindeki gevşek kum-silt alüvyonu, yüksek yeraltı suyuyla birlikte oturma ve sıvılaşma açısından değerlendirilmelidir. Liman ve sanayi yapılarının ağır yükleri bu koşulları kritik kılar.",
          "Bölgede yer yer karstik kireçtaşı etkisi, boşluk riski açısından ek dikkat gerektirir."
        ]
      },
      {
        heading: "Mersin'de uygulama yaklaşımı",
        body: [
          "Su kontrolü ve sıvılaşma azaltımı için jet grout ve enjeksiyon; oturma kontrolü için DSM; yüksek ve derin yükler için fore kazık uygulanır.",
          "YER6, Mersin sahalarında basınç kayıtları, kolon çapı doğrulaması ve yeraltı suyu davranışını kalite kabul sürecinde izler."
        ]
      }
    ],
    faq: [
      { question: "Liman/sanayi zemini nasıl güçlendirilir?", answer: "Ağır ve dinamik yükler için DSM, jet grout ve fore kazık kombinasyonlarıyla oturma ve taşıma güvenliği sağlanır. Yöntem zemin etüdüne göre seçilir." },
      { question: "Mersin kıyı zemininde sıvılaşma riski var mı?", answer: "Gevşek kum-silt ve yüksek yeraltı suyu bulunan alüvyon alanlarda değerlendirilmeli; gerekirse jet grout/DSM ile azaltılmalıdır." },
      { question: "YER6 Mersin'de çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Mersin ve Akdeniz bölgesinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "manisa-zemin-guclendirme",
    intro:
      "Manisa'da zemin güçlendirme; Gediz ovasının alüvyonu, aktif fay etkisi ve organize sanayi bölgelerindeki ağır yükler dikkate alınarak planlanır. YER6, sanayi ve lojistik tesisleri için DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Manisa zemin koşulları",
        body: [
          "Gediz ovasındaki gevşek kum-silt seviyeleri ve yüksek yeraltı suyu, deprem sırasında sıvılaşma ve yük altında oturma açısından önemlidir. Bölgenin fay etkinliği zemin davranışını belirleyici kılar.",
          "OSB'lerdeki geniş taban alanlı ve ağır yüklü yapılar, oturma açısından zemin iyileştirmesini gerektirebilir."
        ]
      },
      {
        heading: "Manisa'da uygulama yaklaşımı",
        body: [
          "Sıvılaşma azaltımı ve su kontrolü için jet grout/DSM; geniş sanayi parsellerinde oturma kontrolü için DSM; yüksek yükler için fore kazık uygulanır.",
          "YER6, Manisa sahalarında kolon sürekliliği, mukavemet testleri ve yeraltı suyu davranışını izleyerek kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Manisa OSB'de zemin iyileştirme gerekir mi?", answer: "Gevşek alüvyon ve yüksek yeraltı suyu bulunan parsellerde geniş taban alanlı yapılarda çoğunlukla gereklidir; kesin karar zemin etüdüne bağlıdır." },
      { question: "Gediz ovasında sıvılaşma riski nasıl azaltılır?", answer: "Jet grout veya DSM ile zemin rijitliği artırılır, gerektiğinde drenajla boşluk suyu basıncı kontrol edilir." },
      { question: "YER6 Manisa'da hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Manisa ve Ege bölgesinde zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "kutahya-zemin-guclendirme",
    intro:
      "Kütahya'da zemin güçlendirme; İç Batı Anadolu'nun killi zeminleri, ova alüvyonları ve seramik/sanayi tesislerinin yükleri dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Kütahya zemin koşulları",
        body: [
          "Ova kesimlerindeki killi ve siltli zeminler, yük altında oturma ve nem değişiminde hacim hareketi açısından değerlendirilmelidir. Sanayi yapılarının yükleri bu koşullarda zemin iyileştirmesini gerektirebilir.",
          "Tabaka geçişlerinin değişken olduğu alanlarda güvenilir tasarım için zemin etüdü esastır."
        ]
      },
      {
        heading: "Kütahya'da uygulama yaklaşımı",
        body: [
          "Oturma kontrolü ve zemin rijitliği için DSM; yerel güçlendirme için jet grout; yüksek yapısal yükler için fore kazık uygulanır.",
          "YER6, Kütahya sahalarında karot, kolon sürekliliği ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Killi zeminde hangi yöntem uygun?", answer: "Killi ve oturmaya yatkın zeminlerde DSM veya kazıklı temel çözümleri öne çıkar; yöntem plastisite ve yük koşullarına göre belirlenir." },
      { question: "Kütahya sanayi yapısında zemin iyileştirme gerekir mi?", answer: "Killi/gevşek zemin bulunan geniş taban alanlı yapılarda çoğunlukla gereklidir; kesin karar zemin etüdüne bağlıdır." },
      { question: "YER6 Kütahya'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Kütahya ve çevresinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "zonguldak-zemin-guclendirme",
    intro:
      "Zonguldak'ta zemin güçlendirme; engebeli topoğrafya, eski maden dolguları, heyelan riski ve kıyı çökelleri dikkate alınarak planlanır. YER6, fore kazık, ankraj, iksa ve zemin iyileştirme çözümleri sunar.",
    sections: [
      {
        heading: "Zonguldak zemin koşulları",
        body: [
          "Yamaçlardaki kontrolsüz yapay dolgular ve suya doygun şevler yanal toprak basıncını artırırken, kıyı kesimindeki gevşek denizel çökeller oturma hassasiyeti sunar. Eski maden alanları ek risk oluşturabilir.",
          "Bu koşullar, temel ve istinat çözümlerinde hassas deplasman kontrolü gerektirir."
        ]
      },
      {
        heading: "Zonguldak'ta uygulama yaklaşımı",
        body: [
          "Yamaç duraylılığı için öngermeli ankraj ve kazıklı iksa; kıyı yapılarında kaya seviyesine uzanan fore kazıklı derin temeller; gevşek zemin ve su kontrolü için jet grout uygulanır.",
          "YER6, Zonguldak sahalarında ankraj test yükleri, delgi sürekliliği ve su altı beton kalitesini izleyerek belgeler."
        ]
      }
    ],
    faq: [
      { question: "Maden dolgusu/yamaç sahasında ne yapılır?", answer: "Ankraj ve kazıklı iksa ile yamaç duraylılığı sağlanır; gevşek dolgularda yük fore kazıkla sağlam tabakaya aktarılır. Uygulama zemin etüdüne dayanır." },
      { question: "Kıyı yapısında hangi temel uygun?", answer: "Gevşek denizel çökellerde yük, kaya/sağlam tabakaya uzanan fore kazıklarla aktarılır; su kontrolü için jet grout kullanılabilir." },
      { question: "YER6 Zonguldak'ta hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Zonguldak ve Batı Karadeniz'de zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "osmaniye-zemin-guclendirme",
    intro:
      "Osmaniye'de zemin güçlendirme; ova alüvyonları, aktif fay etkisi ve 2023 depremlerinin ardından öne çıkan güvenli yapı ihtiyacı doğrultusunda planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Osmaniye zemin koşulları",
        body: [
          "Ceyhan çevresi ve ova kesimlerindeki alüvyon ile gevşek dolgu alanları, oturma ve deprem sırasında zemin büyütmesi açısından dikkatle değerlendirilmelidir. Bölgenin fay etkinliği zemin davranışını önemli kılar.",
          "Güvenli yeniden yapımda temel sistemi, zemin etüdüyle kurulan bir modele dayanmalıdır."
        ]
      },
      {
        heading: "Osmaniye'de uygulama yaklaşımı",
        body: [
          "Oturma ve taşıma gücü sorunlu alüvyon sahalarda DSM ve jet grout ile rijitlik artırılır; yüksek yapısal yükler fore kazıklı temellerle sağlam tabakaya aktarılır.",
          "YER6, Osmaniye sahalarında deneme kolonları, karot ve süreklilik kontrolleriyle üretim kalitesini belgeler."
        ]
      }
    ],
    faq: [
      { question: "Deprem sonrası yeni yapıda hangi temel önerilir?", answer: "Zemin profiline göre DSM, jet grout veya fore kazıklı temel çözümleri değerlendirilir; karar güncel zemin etüdüne dayanır." },
      { question: "Alüvyon zeminde oturma nasıl önlenir?", answer: "Zemin iyileştirme ile rijitlik artırılır veya yükler kazıklarla sağlam tabakaya aktarılarak düzensiz oturma sınırlandırılır." },
      { question: "YER6 Osmaniye'de çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Osmaniye ve çevresinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "mardin-zemin-guclendirme",
    intro:
      "Mardin'de zemin güçlendirme; kalker platformun nispeten sağlam yapısı ile ova kesimlerindeki alüvyon ve dolguların bir arada değerlendirilmesiyle planlanır. YER6, jet grout, fore kazık ve DSM çözümleri sunar.",
    sections: [
      {
        heading: "Mardin zemin koşulları",
        body: [
          "Kent genelinde kalker platform nispeten sağlam bir zemin sunarken, ova ve yeni yerleşim alanlarına yakın kesimlerde alüvyon ve gevşek dolgu tabakalarıyla karşılaşılır. Bu değişkenlik parsel bazında farklı temel çözümleri gerektirebilir.",
          "Doğru yöntem seçimi için parsel özelinde sondaj ve zemin modeli esastır."
        ]
      },
      {
        heading: "Mardin'de uygulama yaklaşımı",
        body: [
          "Alüvyon ve gevşek zemin sahalarında oturma ve taşıma gücü için DSM ve jet grout; yüksek yükler için fore kazık öne çıkar. Sağlam platform zeminlerinde temel çözümleri buna göre optimize edilir.",
          "YER6, Mardin sahalarında kolon sürekliliği, mukavemet testleri ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Aynı bölgede zemin neden farklılık gösterir?", answer: "Kalker platform ile ova alüvyonu yan yana bulunabilir; bu yüzden her parsel için ayrı sondaj ve değerlendirme önerilir." },
      { question: "Mardin'de hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, jet grout veya fore kazık uygulanır; karar sondaj ve laboratuvar verisiyle verilir." },
      { question: "YER6 Mardin'de hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Mardin ve Güneydoğu bölgesinde zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "yalova-zemin-guclendirme",
    intro:
      "Yalova'da zemin güçlendirme; Marmara kıyısının alüvyonu, yüksek yeraltı suyu ve 1999 depreminde yaşanan hasar dersleri doğrultusunda planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Yalova zemin koşulları",
        body: [
          "Kıyı ve ova kesimlerindeki gevşek alüvyon ile yüzeye yakın yeraltı suyu, deprem sırasında sıvılaşma ve yük altında oturma açısından kritik olabilir. 1999 depremi bölgede zemin kaynaklı hasarları göstermiştir.",
          "Bu nedenle Yalova'da yeni yapıların temellerinde zemin iyileştirmesi ve uygun temel seçimi belirleyicidir."
        ]
      },
      {
        heading: "Yalova'da uygulama yaklaşımı",
        body: [
          "Sıvılaşma direncini artırmak ve oturmayı kontrol etmek için DSM, jet grout ve gerektiğinde taş kolon uygulanır; yüksek yükler fore kazıklı temellerle taşınır.",
          "YER6, Yalova sahalarında kolon sürekliliği, mukavemet testleri ve yeraltı suyu davranışını kalite kabul sürecinde izler."
        ]
      }
    ],
    faq: [
      { question: "Yalova zemininde sıvılaşma riski nasıl azaltılır?", answer: "Jet grout, DSM veya taş kolon ile zemin rijitliği artırılır ve drenaj sağlanarak sıvılaşma direnci yükseltilir. Yöntem zemin etüdüne göre seçilir." },
      { question: "Kıyı alüvyonunda hangi temel uygun?", answer: "Gevşek zeminlerde yük fore kazıkla sağlam tabakaya aktarılır veya zemin iyileştirmesiyle güçlendirilir; karar sondaj sonucuna bağlıdır." },
      { question: "YER6 Yalova'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Yalova ve Marmara bölgesinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "canakkale-zemin-guclendirme",
    intro:
      "Çanakkale'de zemin güçlendirme; Marmara ve Ege kıyı alüvyonları, fay etkisi ve liman/sanayi yükleri dikkate alınarak planlanır. YER6, jet grout, DSM ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Çanakkale zemin koşulları",
        body: [
          "Kıyı ve ova kesimlerindeki gevşek alüvyon ile yüksek yeraltı suyu, oturma ve sıvılaşma açısından değerlendirilmelidir. Bölgenin fay etkinliği zemin davranışını önemli kılar.",
          "Liman ve sanayi yapılarının ağır yükleri, bu koşullarda zemin iyileştirmesini gerektirebilir."
        ]
      },
      {
        heading: "Çanakkale'de uygulama yaklaşımı",
        body: [
          "Su kontrolü ve sıvılaşma azaltımı için jet grout; oturma kontrolü için DSM; yüksek ve derin yükler için fore kazık uygulanır.",
          "YER6, Çanakkale sahalarında basınç kayıtları, kolon çapı doğrulaması ve üretim verileriyle kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Kıyı alüvyonunda hangi yöntem uygun?", answer: "Yüksek yeraltı suyu ve gevşek zemin nedeniyle jet grout, DSM veya derin temel çözümleri değerlendirilir; karar zemin etüdüne bağlıdır." },
      { question: "Fay bölgesinde zemin iyileştirme önemli mi?", answer: "Evet; sıvılaşmaya yatkın alüvyon zeminlerde iyileştirme, deprem performansı açısından kritik olabilir. Zemin etüdüyle karar verilir." },
      { question: "YER6 Çanakkale'de hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Çanakkale ve çevresinde zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "bolu-zemin-guclendirme",
    intro:
      "Bolu'da zemin güçlendirme; aktif fay etkisi (1999 Düzce-Bolu depremi), ova alüvyonları ve yamaç koşulları dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Bolu zemin koşulları",
        body: [
          "Ova kesimlerindeki alüvyon ve gevşek dolgu alanları ile yamaçlardaki koşullar, oturma, sıvılaşma ve şev duraysızlığı açısından değerlendirilmelidir. Bölge aktif fay zonuna yakınlığıyla dikkat gerektirir.",
          "1999 depremi, bölgede zemin davranışının yapısal güvenlikteki rolünü ortaya koymuştur."
        ]
      },
      {
        heading: "Bolu'da uygulama yaklaşımı",
        body: [
          "Oturma ve sıvılaşma kontrolü için DSM ve jet grout; yamaç duraylılığı için ankraj ve kazıklı iksa; yüksek yükler için fore kazık uygulanır.",
          "YER6, Bolu sahalarında kolon sürekliliği, mukavemet testleri ve deplasman izlemesiyle kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Fay bölgesinde yeni yapı için ne önerilir?", answer: "Zemin profiline göre DSM, jet grout veya fore kazıklı temel çözümleri değerlendirilir; karar güncel zemin etüdüne dayanır." },
      { question: "Yamaç sahasında ne yapılır?", answer: "Ankraj ve kazıklı iksa ile yamaç duraylılığı sağlanır; drenaj çözümleriyle su etkisi azaltılır." },
      { question: "YER6 Bolu'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Bolu ve çevresinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "duzce-zemin-guclendirme",
    intro:
      "Düzce'de zemin güçlendirme; ova alüvyonunun gevşek yapısı, çok yüksek yeraltı suyu ve 1999 depreminde yaşanan sıvılaşma dersleri doğrultusunda planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Düzce zemini ve sıvılaşma",
        body: [
          "Düzce ovasındaki gevşek kum-silt seviyeleri ve yüzeye çok yakın yeraltı suyu, sıvılaşma açısından kritik koşullar oluşturur. 1999 depremi bu bölgede sıvılaşma kaynaklı hasarları açıkça göstermiştir.",
          "Bu nedenle yeni yapıların temellerinde zemin iyileştirmesi ve uygun temel seçimi belirleyici öneme sahiptir."
        ]
      },
      {
        heading: "Düzce'de uygulama yaklaşımı",
        body: [
          "Sıvılaşma direncini artırmak ve oturmayı kontrol etmek için DSM, jet grout ve gerektiğinde taş kolon uygulanır; yüksek yapısal yükler fore kazıklı temellerle sağlam tabakaya aktarılır. YER6 bölgede fabrika temel altı jet grout uygulamaları gerçekleştirmiştir.",
          "YER6, Düzce sahalarında kolon sürekliliği, mukavemet testleri ve yeraltı suyu davranışını kalite kabul sürecinde izler."
        ]
      }
    ],
    faq: [
      { question: "Düzce ovasında sıvılaşma neden önemli?", answer: "Gevşek kum-silt ve çok yüksek yeraltı suyu birleşimi deprem sırasında sıvılaşma riskini artırır; 1999'da bölgede bu kaynaklı ağır hasarlar görülmüştür. İyileştirme bu riski azaltır." },
      { question: "Hangi yöntem sıvılaşmaya karşı etkili?", answer: "DSM, jet grout ve taş kolon; zemin rijitliğini artırıp drenaj sağlayarak sıvılaşma direncine katkıda bulunur. Seçim zemin verisine göre yapılır." },
      { question: "YER6 Düzce'de hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Düzce ve çevresinde zemin güçlendirme uygulamaları yapıyoruz; bölgede fabrika temel altı jet grout projeleri gerçekleştirdik." }
    ]
  },
  {
    slug: "mugla-zemin-guclendirme",
    intro:
      "Muğla'da zemin güçlendirme; Ege-Akdeniz kıyı alüvyonları, karstik kireçtaşı (boşluk riski), yüksek yeraltı suyu ve yoğun turizm yapılaşması dikkate alınarak planlanır. YER6, otel, konut ve ticari projelerde jet grout, fore kazık ve enjeksiyon çözümleri sunar.",
    sections: [
      {
        heading: "Muğla zemininde karst ve kıyı alüvyonu",
        body: [
          "Bölgede yer yer karstik kireçtaşı bulunması, zemin içinde boşluk ve erime kanalları riski oluşturur; kıyı kesimlerinde ise gevşek alüvyon ve yüksek yeraltı suyu belirleyicidir. Bu değişkenlik ani oturma açısından önemlidir.",
          "Doğru yöntem, ancak sondaj ve gerektiğinde jeofizik ölçümlerle kurulan zemin modeline göre seçilir."
        ]
      },
      {
        heading: "Muğla'da uygulama yaklaşımı",
        body: [
          "Karstik boşlukların doldurulması ve su kontrolü için enjeksiyon ve jet grout; yüksek yapı ve otel projelerinde fore kazıklı derin temeller öne çıkar.",
          "YER6, Muğla sahalarında boşluk tespiti, enjeksiyon kayıtları ve kolon sürekliliği kontrolleriyle kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Karstik zeminde temel nasıl güvence altına alınır?", answer: "Boşluklar enjeksiyonla doldurulur, gerektiğinde jet grout ile güçlendirilir veya yükler fore kazıkla sağlam tabakaya aktarılır. Öncesinde boşluk tespiti yapılır." },
      { question: "Otel/konut projesinde hangi yöntem uygun?", answer: "Zemin ve yük durumuna göre jet grout, enjeksiyon veya fore kazık değerlendirilir; karar zemin etüdüne bağlıdır." },
      { question: "YER6 Muğla'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Muğla ve çevresinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "kayseri-zemin-guclendirme",
    intro:
      "Kayseri'de zemin güçlendirme; İç Anadolu'nun volkanik kökenli zeminleri, ova alüvyonları ve büyük organize sanayi bölgelerinin yükleri dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Kayseri zemin koşulları",
        body: [
          "Erciyes çevresindeki volkanik kökenli zeminler ve ova kesimlerindeki alüvyon, taşıma gücü ve oturma açısından değişkenlik gösterir. OSB'lerdeki geniş taban alanlı ve ağır yüklü yapılar zemin iyileştirmesini gerektirebilir.",
          "Tabaka geçişlerinin değişken olduğu alanlarda güvenilir tasarım için zemin etüdü esastır."
        ]
      },
      {
        heading: "Kayseri'de uygulama yaklaşımı",
        body: [
          "Geniş sanayi parsellerinde oturma kontrolü için DSM; yerel güçlendirme için jet grout; yüksek yapısal yükler için fore kazık uygulanır.",
          "YER6, Kayseri sahalarında karot, kolon sürekliliği ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Kayseri OSB'de zemin iyileştirme gerekir mi?", answer: "Alüvyon/gevşek zemin bulunan geniş taban alanlı yapılarda oturma riski nedeniyle çoğunlukla gereklidir; kesin karar zemin etüdüne bağlıdır." },
      { question: "Volkanik kökenli zeminde hangi yöntem uygun?", answer: "Zemin davranışı sondajla belirlenir; oturmaya duyarlı alanlarda DSM/jet grout, yüksek yüklerde fore kazık tercih edilir." },
      { question: "YER6 Kayseri'de hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Kayseri ve İç Anadolu'da zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "sivas-zemin-guclendirme",
    intro:
      "Sivas'ta zemin güçlendirme; İç Anadolu'nun killi ve yer yer jipsli zeminleri, Kızılırmak çevresi alüvyonu ve altyapı projeleri dikkate alınarak planlanır. YER6, DSM, fore kazık ve jet grout çözümleri sunar.",
    sections: [
      {
        heading: "Sivas zemin koşulları",
        body: [
          "Bölgede rastlanan killi ve yer yer jipsli (alçıtaşı) zeminler; suyla temas ettiğinde çözünme ve oturma açısından özel dikkat gerektirir. Kızılırmak çevresindeki alüvyon alanlarda ise gevşek çökeller ve yeraltı suyu öne çıkar.",
          "Bu koşullar, temel sisteminin zemin etüdüyle kurulan bir modele göre seçilmesini gerektirir."
        ]
      },
      {
        heading: "Sivas'ta uygulama yaklaşımı",
        body: [
          "Oturma kontrolü ve zemin rijitliği için DSM; yüksek yapısal ve altyapı yükleri için fore kazık; yerel güçlendirme için jet grout uygulanır.",
          "YER6, Sivas sahalarında kolon sürekliliği, mukavemet testleri ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Jipsli zemin neden özel önlem gerektirir?", answer: "Jips suyla çözünebildiği için zeminde boşluk ve oturma riski oluşabilir. Su kontrolü, uygun temel ve gerektiğinde zemin iyileştirme ile risk yönetilir." },
      { question: "Sivas'ta hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, fore kazık veya jet grout uygulanır; karar sondaj ve laboratuvar verisiyle verilir." },
      { question: "YER6 Sivas'ta çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Sivas ve İç Anadolu'da zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "van-zemin-guclendirme",
    intro:
      "Van'da zemin güçlendirme; aktif fay etkisi (2011 Van depremi), göl kıyısı alüvyonları ve killi zeminler dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Van zemini ve deprem etkisi",
        body: [
          "Van Gölü çevresindeki alüvyon ve killi zeminler ile yüksek yeraltı suyu, oturma ve deprem sırasında zemin büyütmesi açısından önemlidir. Bölge aktif fay zonuna yakınlığıyla dikkat gerektirir.",
          "2011 depremi, bölgede zemin davranışının yapısal güvenlikteki rolünü ortaya koymuştur."
        ]
      },
      {
        heading: "Van'da uygulama yaklaşımı",
        body: [
          "Oturma ve taşıma gücü için DSM ve jet grout ile rijitlik artırılır; yüksek yapısal yükler fore kazıklı temellerle sağlam tabakaya aktarılır.",
          "YER6, Van sahalarında deneme kolonları, karot ve süreklilik kontrolleriyle üretim kalitesini belgeler."
        ]
      }
    ],
    faq: [
      { question: "Fay bölgesinde yeni yapı için ne önerilir?", answer: "Zemin profiline göre DSM, jet grout veya fore kazıklı temel çözümleri değerlendirilir; karar güncel zemin etüdüne dayanır." },
      { question: "Göl kıyısı alüvyonunda hangi yöntem uygun?", answer: "Gevşek zemin ve yüksek yeraltı suyu nedeniyle jet grout, DSM veya derin temel çözümleri değerlendirilir." },
      { question: "YER6 Van'da hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Van ve Doğu Anadolu'da zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "nevsehir-zemin-guclendirme",
    intro:
      "Nevşehir'de zemin güçlendirme; Kapadokya'nın volkanik tüf yapısı, yumuşak kaya ve ova alüvyonları ile turizm yapılaşması dikkate alınarak planlanır. YER6, jet grout, DSM ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Nevşehir zemin koşulları",
        body: [
          "Bölgedeki volkanik tüf ve yumuşak kaya yapıları, kolay işlenebilir ancak boşluk ve dayanım açısından değişken zeminlerdir. Ova kesimlerinde ise alüvyon ve gevşek dolgu alanları bulunur.",
          "Bu değişkenlik, temel çözümünün parsel bazında zemin etüdüyle seçilmesini gerektirir."
        ]
      },
      {
        heading: "Nevşehir'de uygulama yaklaşımı",
        body: [
          "Boşluk ve gevşek zemin bulunan alanlarda enjeksiyon ve jet grout; oturma kontrolü için DSM; yüksek yükler için fore kazık uygulanır.",
          "YER6, Nevşehir sahalarında zemin modeli, kolon sürekliliği ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Tüf/yumuşak kaya zeminde temel nasıl kurulur?", answer: "Dayanım ve boşluk durumu sondajla belirlenir; gerektiğinde enjeksiyon/jet grout ile güçlendirme veya fore kazıkla derin yük aktarımı yapılır." },
      { question: "Nevşehir'de hangi yöntem uygulanır?", answer: "Zemin tipine göre jet grout, DSM veya fore kazık uygulanır; karar sondaj ve laboratuvar verisine bağlıdır." },
      { question: "YER6 Nevşehir'de çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Nevşehir ve Kapadokya bölgesinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "afyonkarahisar-zemin-guclendirme",
    intro:
      "Afyonkarahisar'da zemin güçlendirme; jeotermal/fay etkisi, killi ova zeminleri ve sanayi/termal tesis yükleri dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Afyonkarahisar zemin koşulları",
        body: [
          "Ova kesimlerindeki killi ve siltli zeminler, yük altında oturma ve nem değişiminde hacim hareketi açısından değerlendirilmelidir. Bölgenin jeotermal ve fay etkinliği ek dikkat gerektirir.",
          "Termal tesis ve sanayi yapılarının yükleri, bu koşullarda zemin iyileştirmesini gerektirebilir."
        ]
      },
      {
        heading: "Afyonkarahisar'da uygulama yaklaşımı",
        body: [
          "Oturma kontrolü ve zemin rijitliği için DSM; yerel güçlendirme için jet grout; yüksek yapısal yükler için fore kazık uygulanır.",
          "YER6, Afyonkarahisar sahalarında karot, kolon sürekliliği ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Killi ova zemininde hangi yöntem uygun?", answer: "Killi ve oturmaya yatkın zeminlerde DSM veya kazıklı temel çözümleri öne çıkar; yöntem plastisite ve yük koşullarına göre belirlenir." },
      { question: "Termal tesis zemini güçlendirilebilir mi?", answer: "Evet; ağır ve sürekli yükler için DSM, jet grout ve fore kazık kombinasyonlarıyla oturma ve taşıma güvenliği sağlanır." },
      { question: "YER6 Afyonkarahisar'da hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Afyonkarahisar ve çevresinde zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "aksaray-zemin-guclendirme",
    intro:
      "Aksaray'da zemin güçlendirme; İç Anadolu'nun killi ova zeminleri, alüvyon alanları ve organize sanayi yükleri dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Aksaray zemin koşulları",
        body: [
          "Ova kesimlerindeki killi ve siltli zeminler ile gevşek dolgu alanları, oturma ve taşıma gücü açısından değerlendirilmelidir. Sanayi yapılarının yükleri bu koşullarda zemin iyileştirmesini gerektirebilir.",
          "Tabaka geçişlerinin değişken olduğu alanlarda güvenilir tasarım için zemin etüdü esastır."
        ]
      },
      {
        heading: "Aksaray'da uygulama yaklaşımı",
        body: [
          "Oturma kontrolü için DSM; yerel güçlendirme için jet grout; yüksek yapısal yükler için fore kazık uygulanır.",
          "YER6, Aksaray sahalarında kolon sürekliliği, mukavemet testleri ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Aksaray OSB'de zemin iyileştirme gerekir mi?", answer: "Killi/gevşek zemin bulunan geniş taban alanlı yapılarda çoğunlukla gereklidir; kesin karar zemin etüdüne bağlıdır." },
      { question: "Killi zeminde hangi yöntem uygun?", answer: "DSM veya kazıklı temel çözümleri öne çıkar; yöntem plastisite ve yük koşullarına göre belirlenir." },
      { question: "YER6 Aksaray'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Aksaray ve İç Anadolu'da zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "amasya-zemin-guclendirme",
    intro:
      "Amasya'da zemin güçlendirme; Yeşilırmak vadisinin dar alüvyon yapısı, yamaç koşulları ve fay etkisi dikkate alınarak planlanır. YER6, fore kazık, DSM ve jet grout çözümleri sunar.",
    sections: [
      {
        heading: "Amasya zemin koşulları",
        body: [
          "Yeşilırmak vadisindeki alüvyon ve gevşek dolgu alanları ile vadi yamaçları, oturma ve şev duraysızlığı açısından değerlendirilmelidir. Bölgenin fay etkinliği zemin davranışını önemli kılar.",
          "Dar vadi yerleşimi, temel ve istinat çözümlerinde hassas deplasman kontrolü gerektirir."
        ]
      },
      {
        heading: "Amasya'da uygulama yaklaşımı",
        body: [
          "Alüvyon sahalarda oturma kontrolü için DSM ve jet grout; yamaç ve derin yükler için fore kazık ve ankraj uygulanır.",
          "YER6, Amasya sahalarında kolon sürekliliği, ankraj testleri ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Vadi alüvyonunda hangi yöntem uygun?", answer: "Gevşek alüvyon ve yeraltı suyu bulunan alanlarda DSM, jet grout veya fore kazık değerlendirilir; karar zemin etüdüne bağlıdır." },
      { question: "Yamaç sahasında ne yapılır?", answer: "Ankraj ve kazıklı iksa ile yamaç duraylılığı sağlanır; drenaj çözümleriyle su etkisi azaltılır." },
      { question: "YER6 Amasya'da hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Amasya ve çevresinde zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "tokat-zemin-guclendirme",
    intro:
      "Tokat'ta zemin güçlendirme; Yeşilırmak ovası alüvyonu, Kuzey Anadolu Fayı etkisi, killi zeminler ve yamaç koşulları dikkate alınarak planlanır. YER6, DSM, fore kazık ve jet grout çözümleri sunar.",
    sections: [
      {
        heading: "Tokat zemin koşulları",
        body: [
          "Ova kesimlerindeki alüvyon ve killi zeminler ile fay zonuna yakınlık, oturma ve deprem etkisi açısından değerlendirilmelidir. Yamaç alanlarında ise şev duraylılığı öne çıkar.",
          "Bu koşullar, temel sisteminin zemin etüdüyle kurulan bir modele göre seçilmesini gerektirir."
        ]
      },
      {
        heading: "Tokat'ta uygulama yaklaşımı",
        body: [
          "Oturma ve taşıma gücü için DSM ve jet grout; yüksek yapısal yükler ve yamaç için fore kazık ve ankraj uygulanır.",
          "YER6, Tokat sahalarında kolon sürekliliği, mukavemet testleri ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Fay bölgesinde zemin iyileştirme önemli mi?", answer: "Evet; sıvılaşmaya yatkın veya oturmaya duyarlı zeminlerde iyileştirme, deprem performansı açısından kritik olabilir. Zemin etüdüyle karar verilir." },
      { question: "Tokat'ta hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, jet grout veya fore kazık uygulanır; karar sondaj ve laboratuvar verisiyle verilir." },
      { question: "YER6 Tokat'ta çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Tokat ve çevresinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "kirsehir-zemin-guclendirme",
    intro:
      "Kırşehir'de zemin güçlendirme; İç Anadolu'nun killi ova zeminleri, alüvyon alanları ve altyapı/sanayi yükleri dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Kırşehir zemin koşulları",
        body: [
          "Ova kesimlerindeki killi ve siltli zeminler ile gevşek dolgu alanları, oturma ve taşıma gücü açısından değerlendirilmelidir. Yapı yüklerine göre bu koşullar zemin iyileştirmesini gerektirebilir.",
          "Güvenilir tasarım için parsel bazında sondaj ve zemin modeli esastır."
        ]
      },
      {
        heading: "Kırşehir'de uygulama yaklaşımı",
        body: [
          "Oturma kontrolü için DSM; yerel güçlendirme için jet grout; yüksek yapısal yükler için fore kazık uygulanır.",
          "YER6, Kırşehir sahalarında kolon sürekliliği, mukavemet testleri ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Killi zeminde hangi yöntem uygun?", answer: "Killi ve oturmaya yatkın zeminlerde DSM veya kazıklı temel çözümleri öne çıkar; yöntem plastisite ve yük koşullarına göre belirlenir." },
      { question: "Ön değerlendirme için ne gerekli?", answer: "Mevcut sondaj verisi, yapı yükleri ve parsel bilgileri ile yöntem önerisi ve yaklaşık metraj hazırlayabiliriz." },
      { question: "YER6 Kırşehir'de hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Kırşehir ve İç Anadolu'da zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "agri-zemin-guclendirme",
    intro:
      "Ağrı'da zemin güçlendirme; yüksek rakım, don derinliği, volkanik kökenli zeminler ve kısa saha sezonu dikkate alınarak planlanır. YER6, DSM, fore kazık ve jet grout çözümleri sunar.",
    sections: [
      {
        heading: "Ağrı zemin koşulları",
        body: [
          "Yüksek rakım ve sert kış koşulları, don derinliği ve donma-çözülme etkilerini temel tasarımında belirleyici kılar. Ova kesimlerindeki killi ve volkanik kökenli zeminler taşıma gücü ve oturma açısından değişkenlik gösterir.",
          "Bu koşullar, imalat programının mevsime ve zemin modeline göre kurgulanmasını gerektirir."
        ]
      },
      {
        heading: "Ağrı'da uygulama yaklaşımı",
        body: [
          "Oturma kontrolü ve zemin rijitliği için DSM; yüksek yapısal yükler için fore kazık; yerel güçlendirme için jet grout uygulanır. Don derinliği ve numune koruması saha kalite planında öne çıkar.",
          "YER6, Ağrı sahalarında kolon sürekliliği, mukavemet testleri ve mevsimsel kalite planıyla üretim güvenilirliğini belgeler."
        ]
      }
    ],
    faq: [
      { question: "Don derinliği temeli nasıl etkiler?", answer: "Temel, don derinliğinin altına indirilmeli veya donma-çözülme etkisine karşı korunmalıdır. Zemin iyileştirme ve uygun temel derinliği birlikte değerlendirilir." },
      { question: "Ağrı'da hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, fore kazık veya jet grout uygulanır; karar sondaj ve laboratuvar verisiyle verilir." },
      { question: "YER6 Ağrı'da hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Ağrı ve Doğu Anadolu'da zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "igdir-zemin-guclendirme",
    intro:
      "Iğdır'da zemin güçlendirme; Aras vadisinin alüvyon ovası, tarımsal sulama etkisi ve yüksek yeraltı suyu dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Iğdır zemin koşulları",
        body: [
          "Aras ovasındaki alüvyon ve gevşek çökeller, yüksek yeraltı suyuyla birlikte oturma ve sıvılaşma açısından değerlendirilmelidir. Sulama etkisiyle değişen nem, killi zeminlerde hacim hareketine yol açabilir.",
          "Bu koşullar, temel sisteminin zemin etüdüyle kurulan bir modele göre seçilmesini gerektirir."
        ]
      },
      {
        heading: "Iğdır'da uygulama yaklaşımı",
        body: [
          "Su kontrolü ve oturma azaltımı için jet grout ve DSM; yüksek yükler için fore kazık uygulanır.",
          "YER6, Iğdır sahalarında kolon sürekliliği, mukavemet testleri ve yeraltı suyu davranışını kalite kabul sürecinde izler."
        ]
      }
    ],
    faq: [
      { question: "Yüksek yeraltı suyu uygulamayı nasıl etkiler?", answer: "Su geçirgen zeminlerde jet grout ve enjeksiyonla su kontrolü sağlanır; imalat programı yeraltı suyuna göre düzenlenir." },
      { question: "Iğdır'da hangi yöntem uygulanır?", answer: "Zemin tipine göre jet grout, DSM veya fore kazık uygulanır; karar sondaj ve laboratuvar verisine bağlıdır." },
      { question: "YER6 Iğdır'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Iğdır ve Doğu Anadolu'da zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "kars-zemin-guclendirme",
    intro:
      "Kars'ta zemin güçlendirme; yüksek plato, sert kış ve don derinliği, bazalt/volkanik kökenli zeminler dikkate alınarak planlanır. YER6, DSM, fore kazık ve jet grout çözümleri sunar.",
    sections: [
      {
        heading: "Kars zemin koşulları",
        body: [
          "Yüksek rakımlı plato ve sert kış koşulları, don derinliği ve donma-çözülme etkilerini temel tasarımında belirleyici kılar. Bazalt ve volkanik kökenli zeminler ile ova alüvyonu taşıma gücü açısından değişkenlik gösterir.",
          "Kısa saha sezonu, imalat programının mevsime göre kurgulanmasını gerektirir."
        ]
      },
      {
        heading: "Kars'ta uygulama yaklaşımı",
        body: [
          "Oturma kontrolü için DSM; yüksek yapısal yükler için fore kazık; yerel güçlendirme için jet grout uygulanır.",
          "YER6, Kars sahalarında kolon sürekliliği, mukavemet testleri ve mevsimsel kalite planıyla üretim güvenilirliğini belgeler."
        ]
      }
    ],
    faq: [
      { question: "Soğuk iklim temel uygulamasını etkiler mi?", answer: "Evet; don derinliği ve donma-çözülme, temel derinliği ve imalat mevsimini etkiler. Saha kalite planı buna göre uyarlanır." },
      { question: "Kars'ta hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, fore kazık veya jet grout uygulanır; karar sondaj ve laboratuvar verisiyle verilir." },
      { question: "YER6 Kars'ta hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Kars ve Doğu Anadolu'da zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "edirne-zemin-guclendirme",
    intro:
      "Edirne'de zemin güçlendirme; Trakya'nın Meriç-Tunca nehir alüvyonları, killi zeminler ve yüksek yeraltı suyu dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Edirne zemin koşulları",
        body: [
          "Meriç ve Tunca çevresindeki alüvyon ve killi zeminler, yüksek yeraltı suyuyla birlikte oturma ve taşıma gücü açısından değerlendirilmelidir. Nehir yataklarına yakın kesimlerde gevşek çökeller öne çıkar.",
          "Bu koşullar, temel sisteminin zemin etüdüyle kurulan bir modele göre seçilmesini gerektirir."
        ]
      },
      {
        heading: "Edirne'de uygulama yaklaşımı",
        body: [
          "Su kontrolü ve oturma azaltımı için jet grout ve DSM; yüksek yükler için fore kazık uygulanır.",
          "YER6, Edirne sahalarında kolon sürekliliği, mukavemet testleri ve yeraltı suyu davranışını kalite kabul sürecinde izler."
        ]
      }
    ],
    faq: [
      { question: "Nehir alüvyonunda hangi yöntem uygun?", answer: "Gevşek alüvyon ve yüksek yeraltı suyu nedeniyle jet grout, DSM veya derin temel çözümleri değerlendirilir; karar zemin etüdüne bağlıdır." },
      { question: "Edirne'de zemin iyileştirme gerekir mi?", answer: "Killi/gevşek zemin ve yüksek yeraltı suyu bulunan parsellerde çoğunlukla gereklidir; kesin karar zemin etüdüne bağlıdır." },
      { question: "YER6 Edirne'de çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Edirne ve Trakya genelinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "kirklareli-zemin-guclendirme",
    intro:
      "Kırklareli'nde zemin güçlendirme; Trakya'nın alüvyon ovaları, Istranca çevresi koşulları ve Lüleburgaz-Babaeski hattındaki sanayi yükleri dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Kırklareli zemin koşulları",
        body: [
          "Ova kesimlerindeki killi-siltli zeminler ile gevşek dolgu alanları, oturma açısından değerlendirilmelidir. Organize sanayi bölgelerindeki geniş taban alanlı ve ağır yüklü yapılar zemin iyileştirmesini gerektirebilir.",
          "Tabaka geçişlerinin değişken olduğu alanlarda güvenilir tasarım için zemin etüdü esastır."
        ]
      },
      {
        heading: "Kırklareli'nde uygulama yaklaşımı",
        body: [
          "Geniş sanayi parsellerinde oturma kontrolü için DSM; yerel güçlendirme için jet grout; yüksek yükler için fore kazık uygulanır.",
          "YER6, Kırklareli sahalarında karot, kolon sürekliliği ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "OSB'de zemin iyileştirme gerekir mi?", answer: "Killi/gevşek zemin bulunan geniş taban alanlı yapılarda çoğunlukla gereklidir; kesin karar zemin etüdüne bağlıdır." },
      { question: "Kırklareli'nde hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, jet grout veya fore kazık uygulanır; karar sondaj ve laboratuvar verisiyle verilir." },
      { question: "YER6 Kırklareli'nde hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Kırklareli ve Trakya genelinde zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "usak-zemin-guclendirme",
    intro:
      "Uşak'ta zemin güçlendirme; İç Ege'nin killi ova zeminleri, fay etkisi ve tekstil/deri sanayisinin yükleri dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Uşak zemin koşulları",
        body: [
          "Ova kesimlerindeki killi ve siltli zeminler, yük altında oturma ve nem değişiminde hacim hareketi açısından değerlendirilmelidir. Bölgenin fay etkinliği zemin davranışını önemli kılar.",
          "Sanayi yapılarının yükleri, bu koşullarda zemin iyileştirmesini gerektirebilir."
        ]
      },
      {
        heading: "Uşak'ta uygulama yaklaşımı",
        body: [
          "Oturma kontrolü için DSM; yerel güçlendirme için jet grout; yüksek yapısal yükler için fore kazık uygulanır.",
          "YER6, Uşak sahalarında karot, kolon sürekliliği ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Killi zeminde hangi yöntem uygun?", answer: "Killi ve oturmaya yatkın zeminlerde DSM veya kazıklı temel çözümleri öne çıkar; yöntem plastisite ve yük koşullarına göre belirlenir." },
      { question: "Sanayi yapısında zemin iyileştirme gerekir mi?", answer: "Geniş taban alanlı ve ağır yüklü yapılarda alüvyon/killi zeminde çoğunlukla gereklidir; kesin karar zemin etüdüne bağlıdır." },
      { question: "YER6 Uşak'ta çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Uşak ve Ege bölgesinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "isparta-zemin-guclendirme",
    intro:
      "Isparta'da zemin güçlendirme; Göller Bölgesi'nin karstik yapısı, göl kıyısı alüvyonları, fay etkisi ve yüksek yeraltı suyu dikkate alınarak planlanır. YER6, jet grout, DSM ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Isparta zemin koşulları",
        body: [
          "Bölgede karstik kireçtaşı boşluk riski ile göl ve ova kesimlerindeki gevşek alüvyon ve yüksek yeraltı suyu bir arada bulunabilir. Fay etkinliği zemin davranışını önemli kılar.",
          "Bu değişkenlik, temel çözümünün parsel bazında zemin etüdüyle seçilmesini gerektirir."
        ]
      },
      {
        heading: "Isparta'da uygulama yaklaşımı",
        body: [
          "Boşluk doldurma ve su kontrolü için enjeksiyon ve jet grout; oturma kontrolü için DSM; yüksek yükler için fore kazık uygulanır.",
          "YER6, Isparta sahalarında boşluk tespiti, kolon sürekliliği ve üretim kayıtlarıyla kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Karstik/göl kıyısı zeminde temel nasıl kurulur?", answer: "Boşluklar enjeksiyonla doldurulur, gerektiğinde jet grout ile güçlendirilir; gevşek zeminde yük fore kazıkla sağlam tabakaya aktarılır. Öncesinde boşluk tespiti yapılır." },
      { question: "Isparta'da hangi yöntem uygulanır?", answer: "Zemin tipine göre jet grout, DSM veya fore kazık uygulanır; karar sondaj ve jeofizik verisine bağlıdır." },
      { question: "YER6 Isparta'da hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Isparta ve Göller Bölgesi'nde zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "burdur-zemin-guclendirme",
    intro:
      "Burdur'da zemin güçlendirme; göl kıyısı alüvyonları, Burdur fayı etkisi, killi zeminler ve yüksek yeraltı suyu dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Burdur zemini ve fay etkisi",
        body: [
          "Göl çevresindeki gevşek alüvyon ve killi zeminler, yüksek yeraltı suyuyla birlikte oturma ve sıvılaşma açısından değerlendirilmelidir. Burdur fayına yakınlık, deprem etkisinin zeminle birlikte ele alınmasını gerektirir.",
          "Bu koşullar, temel sisteminin zemin etüdüyle kurulan bir modele göre seçilmesini gerektirir."
        ]
      },
      {
        heading: "Burdur'da uygulama yaklaşımı",
        body: [
          "Sıvılaşma azaltımı ve su kontrolü için jet grout/DSM; oturma kontrolü için DSM; yüksek yükler için fore kazık uygulanır.",
          "YER6, Burdur sahalarında kolon sürekliliği, mukavemet testleri ve yeraltı suyu davranışını kalite kabul sürecinde izler."
        ]
      }
    ],
    faq: [
      { question: "Fay bölgesi göl kıyısında sıvılaşma riski var mı?", answer: "Gevşek alüvyon ve yüksek yeraltı suyu bulunan alanlarda değerlendirilmelidir; gerekirse jet grout/DSM ile azaltılır." },
      { question: "Burdur'da hangi yöntem uygulanır?", answer: "Zemin tipine göre jet grout, DSM veya fore kazık uygulanır; karar sondaj ve laboratuvar verisine bağlıdır." },
      { question: "YER6 Burdur'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Burdur ve çevresinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "giresun-zemin-guclendirme",
    intro:
      "Giresun'da zemin güçlendirme; dik topoğrafya, heyelan riski, dere yataklarındaki dolgular ve dar sahil şeridi dikkate alınarak planlanır. YER6, fore kazık, ankraj, iksa ve zemin iyileştirme çözümleri sunar.",
    sections: [
      {
        heading: "Giresun zemini ve şev riski",
        body: [
          "Engebeli topoğrafya, yüksek yağış ve dere yataklarındaki gevşek dolgular; heyelan ve şev duraysızlığı açısından belirleyicidir. Sahil dolgu alanlarında gevşek çökeller ve yeraltı suyu öne çıkar.",
          "Bu koşullar, temel ve istinat çözümlerinde hassas deplasman kontrolü gerektirir."
        ]
      },
      {
        heading: "Giresun'da uygulama yaklaşımı",
        body: [
          "Yamaç duraylılığı için öngermeli ankraj ve kazıklı iksa; gevşek dolgularda fore kazıklı derin temeller; su ve gevşek zemin kontrolü için jet grout uygulanır.",
          "YER6, Giresun sahalarında ankraj test yükleri, delgi sürekliliği ve deplasman izlemesiyle kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Heyelanlı/yamaç zeminde ne yapılır?", answer: "Öngermeli ankraj, kazıklı iksa ve drenaj çözümleriyle yamaç duraylılığı sağlanır. Uygulama zemin etüdü ve stabilite analizine dayanır." },
      { question: "Dere dolgusu üzerinde güvenli temel olur mu?", answer: "Gevşek dolgularda yük fore kazıkla sağlam tabakaya aktarılır veya zemin iyileştirmesiyle güçlendirilir. Karar sondaj sonucuna bağlıdır." },
      { question: "YER6 Giresun'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Giresun ve Karadeniz bölgesinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "rize-zemin-guclendirme",
    intro:
      "Rize'de zemin güçlendirme; çok yüksek yağış, dik yamaçlar, yoğun heyelan riski ve dere/dolgu alanları dikkate alınarak planlanır. YER6, fore kazık, ankraj, iksa ve zemin iyileştirme çözümleri sunar.",
    sections: [
      {
        heading: "Rize zemini ve heyelan riski",
        body: [
          "Türkiye'nin en yağışlı bölgelerinden biri olması, dik yamaçlar ve suya doygun zeminlerle birleşince heyelan ve şev duraysızlığı açısından yüksek risk oluşturur. Dere yataklarındaki gevşek dolgular ek hassasiyet sunar.",
          "Bu koşullar, drenaj ve deplasman kontrolünü temel/istinat tasarımının merkezine taşır."
        ]
      },
      {
        heading: "Rize'de uygulama yaklaşımı",
        body: [
          "Yamaç duraylılığı için öngermeli ankraj, kazıklı iksa ve etkin drenaj; gevşek dolgularda fore kazıklı derin temeller; yerel güçlendirme için jet grout uygulanır.",
          "YER6, Rize sahalarında ankraj test yükleri, drenaj kontrolü ve deplasman izlemesiyle kaliteyi belgeler."
        ]
      }
    ],
    faq: [
      { question: "Yoğun yağışlı yamaçta ne yapılır?", answer: "Ankraj ve kazıklı iksa ile duraylılık sağlanırken, etkin drenaj ile su etkisi azaltılır. Uygulama stabilite analizine ve zemin etüdüne dayanır." },
      { question: "Dere dolgusu üzerinde temel güvenli olur mu?", answer: "Gevşek dolgularda yük fore kazıkla sağlam tabakaya aktarılır veya zemin iyileştirmesiyle güçlendirilir. Karar sondaj sonucuna bağlıdır." },
      { question: "YER6 Rize'de hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Rize ve Doğu Karadeniz'de zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "erzincan-zemin-guclendirme",
    intro:
      "Erzincan'da zemin güçlendirme; Kuzey Anadolu Fayı'nın en aktif kesimlerinden biri, ova alüvyonu ve sıvılaşma riski dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      { heading: "Erzincan zemini ve deprem", body: [
        "Erzincan ovası, Kuzey Anadolu Fayı üzerinde yer alan gevşek alüvyon ve yüksek yeraltı suyuyla, sıvılaşma açısından Türkiye'nin en kritik sahalarındandır. 1939 ve 1992 depremleri bu riski açıkça göstermiştir.",
        "Yeni yapılarda zemin iyileştirmesi ve uygun temel seçimi belirleyici öneme sahiptir."
      ]},
      { heading: "Erzincan'da uygulama", body: [
        "Sıvılaşma direncini artırmak için DSM, jet grout ve gerektiğinde taş kolon; yüksek yükler için fore kazık uygulanır.",
        "YER6, Erzincan sahalarında kolon sürekliliği, mukavemet testleri ve yeraltı suyu davranışını kalite kabul sürecinde izler."
      ]}
    ],
    faq: [
      { question: "Erzincan'da sıvılaşma neden bu kadar önemli?", answer: "Aktif fay, gevşek alüvyon ve yüksek yeraltı suyu birleşimi deprem sırasında sıvılaşma riskini artırır; geçmiş depremler bunu göstermiştir. İyileştirme bu riski azaltır." },
      { question: "Hangi yöntem etkili?", answer: "DSM, jet grout ve taş kolon; zemin rijitliğini artırıp drenaj sağlayarak sıvılaşma direncine katkıda bulunur. Seçim zemin verisine göre yapılır." },
      { question: "YER6 Erzincan'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Erzincan ve Doğu Anadolu'da zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "corum-zemin-guclendirme",
    intro:
      "Çorum'da zemin güçlendirme; Kuzey Anadolu Fayı etkisi, killi ova zeminleri ve organize sanayi yükleri dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      { heading: "Çorum zemin koşulları", body: [
        "Ova kesimlerindeki killi ve siltli zeminler ile fay zonuna yakınlık, oturma ve deprem etkisi açısından değerlendirilmelidir. OSB'lerdeki ağır yüklü yapılar zemin iyileştirmesini gerektirebilir.",
        "Güvenilir tasarım için parsel bazında zemin etüdü esastır."
      ]},
      { heading: "Çorum'da uygulama", body: [
        "Oturma kontrolü için DSM; yerel güçlendirme için jet grout; yüksek yükler için fore kazık uygulanır.",
        "YER6, Çorum sahalarında karot, kolon sürekliliği ve üretim kayıtlarıyla kaliteyi belgeler."
      ]}
    ],
    faq: [
      { question: "OSB'de zemin iyileştirme gerekir mi?", answer: "Killi/gevşek zemin bulunan geniş taban alanlı yapılarda çoğunlukla gereklidir; kesin karar zemin etüdüne bağlıdır." },
      { question: "Çorum'da hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, jet grout veya fore kazık uygulanır; karar sondaj verisine bağlıdır." },
      { question: "YER6 Çorum'da hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Çorum ve İç Anadolu'da zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "bingol-zemin-guclendirme",
    intro:
      "Bingöl'de zemin güçlendirme; aktif fay etkisi, ova alüvyonları ve killi zeminler dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      { heading: "Bingöl zemini ve deprem", body: [
        "Bölge aktif fay zonuna yakınlığıyla, ova kesimlerindeki alüvyon ve gevşek dolgu alanları oturma ve zemin büyütmesi açısından dikkatle değerlendirilmelidir.",
        "Güvenli yapı için temel sistemi zemin etüdüyle kurulan bir modele dayanmalıdır."
      ]},
      { heading: "Bingöl'de uygulama", body: [
        "Oturma ve taşıma gücü için DSM ve jet grout; yüksek yükler için fore kazık uygulanır.",
        "YER6, Bingöl sahalarında deneme kolonları, karot ve süreklilik kontrolleriyle kaliteyi belgeler."
      ]}
    ],
    faq: [
      { question: "Fay bölgesinde ne önerilir?", answer: "Zemin profiline göre DSM, jet grout veya fore kazıklı temel değerlendirilir; karar güncel zemin etüdüne dayanır." },
      { question: "Bingöl'de hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, jet grout veya fore kazık uygulanır; karar sondaj verisine bağlıdır." },
      { question: "YER6 Bingöl'de çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Bingöl ve Doğu Anadolu'da zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "bitlis-zemin-guclendirme",
    intro:
      "Bitlis'te zemin güçlendirme; dik topoğrafya, volkanik kökenli zeminler, heyelan riski ve Van Gölü çevresi koşulları dikkate alınarak planlanır. YER6, fore kazık, ankraj, iksa ve zemin iyileştirme çözümleri sunar.",
    sections: [
      { heading: "Bitlis zemin koşulları", body: [
        "Engebeli topoğrafya, volkanik kökenli zeminler ve dere yataklarındaki dolgular; heyelan ve şev duraysızlığı açısından belirleyicidir. Göl çevresinde gevşek çökeller öne çıkar.",
        "Bu koşullar temel ve istinat çözümlerinde hassas deplasman kontrolü gerektirir."
      ]},
      { heading: "Bitlis'te uygulama", body: [
        "Yamaç duraylılığı için ankraj ve kazıklı iksa; gevşek zeminlerde fore kazık; yerel güçlendirme için jet grout uygulanır.",
        "YER6, Bitlis sahalarında ankraj test yükleri, delgi sürekliliği ve deplasman izlemesiyle kaliteyi belgeler."
      ]}
    ],
    faq: [
      { question: "Yamaç/heyelan sahasında ne yapılır?", answer: "Ankraj ve kazıklı iksa ile yamaç duraylılığı sağlanır; drenajla su etkisi azaltılır. Uygulama zemin etüdüne dayanır." },
      { question: "Bitlis'te hangi yöntem uygulanır?", answer: "Zemin tipine göre ankraj, fore kazık veya jet grout uygulanır; karar sondaj verisine bağlıdır." },
      { question: "YER6 Bitlis'te hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Bitlis ve Doğu Anadolu'da zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "batman-zemin-guclendirme",
    intro:
      "Batman'da zemin güçlendirme; Güneydoğu'nun platform ve ova zeminleri, Dicle havzası alüvyonu ve sanayi yükleri dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      { heading: "Batman zemin koşulları", body: [
        "Platform zeminleri nispeten sağlam olsa da, ova ve dere havzasına yakın kesimlerde alüvyon ve gevşek dolgu tabakalarıyla karşılaşılır. Bu değişkenlik parsel bazında farklı temel çözümleri gerektirebilir.",
        "Doğru yöntem için parsel özelinde sondaj ve zemin modeli esastır."
      ]},
      { heading: "Batman'da uygulama", body: [
        "Alüvyon sahalarda DSM ve jet grout; yüksek yükler için fore kazık; sağlam platformda temel çözümleri buna göre optimize edilir.",
        "YER6, Batman sahalarında kolon sürekliliği, mukavemet testleri ve üretim kayıtlarıyla kaliteyi belgeler."
      ]}
    ],
    faq: [
      { question: "Aynı bölgede zemin neden farklı?", answer: "Platform ile havza alüvyonu yan yana bulunabilir; her parsel için ayrı sondaj önerilir." },
      { question: "Batman'da hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, jet grout veya fore kazık uygulanır; karar sondaj verisine bağlıdır." },
      { question: "YER6 Batman'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Batman ve Güneydoğu bölgesinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "siirt-zemin-guclendirme",
    intro:
      "Siirt'te zemin güçlendirme; Güneydoğu'nun engebeli topoğrafyası, ova alüvyonları ve killi zeminler dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      { heading: "Siirt zemin koşulları", body: [
        "Ova kesimlerindeki alüvyon ve killi zeminler ile yamaç alanları, oturma ve şev duraysızlığı açısından değerlendirilmelidir. Yapı yüklerine göre bu koşullar zemin iyileştirmesini gerektirebilir.",
        "Güvenilir tasarım için parsel bazında zemin etüdü esastır."
      ]},
      { heading: "Siirt'te uygulama", body: [
        "Oturma kontrolü için DSM ve jet grout; yüksek yükler ve yamaç için fore kazık ve ankraj uygulanır.",
        "YER6, Siirt sahalarında kolon sürekliliği, mukavemet testleri ve üretim kayıtlarıyla kaliteyi belgeler."
      ]}
    ],
    faq: [
      { question: "Killi/alüvyon zeminde hangi yöntem uygun?", answer: "DSM, jet grout veya fore kazık değerlendirilir; karar sondaj ve laboratuvar verisine bağlıdır." },
      { question: "Ön değerlendirme için ne gerekli?", answer: "Mevcut sondaj verisi, yapı yükleri ve parsel bilgileriyle yöntem önerisi ve yaklaşık metraj hazırlayabiliriz." },
      { question: "YER6 Siirt'te hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Siirt ve Güneydoğu bölgesinde zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "sirnak-zemin-guclendirme",
    intro:
      "Şırnak'ta zemin güçlendirme; dağlık ve engebeli topoğrafya, ova alüvyonları ve killi zeminler dikkate alınarak planlanır. YER6, fore kazık, DSM, ankraj ve jet grout çözümleri sunar.",
    sections: [
      { heading: "Şırnak zemin koşulları", body: [
        "Dağlık topoğrafya ve dere yataklarındaki dolgular, heyelan ve şev duraysızlığı açısından belirleyicidir. Ova kesimlerinde alüvyon ve killi zeminler öne çıkar.",
        "Bu koşullar, temel ve istinat çözümlerinde hassas deplasman kontrolü gerektirir."
      ]},
      { heading: "Şırnak'ta uygulama", body: [
        "Yamaç duraylılığı için ankraj ve kazıklı iksa; alüvyon sahalarda DSM ve jet grout; yüksek yükler için fore kazık uygulanır.",
        "YER6, Şırnak sahalarında ankraj test yükleri, kolon sürekliliği ve üretim kayıtlarıyla kaliteyi belgeler."
      ]}
    ],
    faq: [
      { question: "Yamaç sahasında ne yapılır?", answer: "Ankraj ve kazıklı iksa ile yamaç duraylılığı sağlanır; drenajla su etkisi azaltılır." },
      { question: "Şırnak'ta hangi yöntem uygulanır?", answer: "Zemin tipine göre ankraj, fore kazık, DSM veya jet grout uygulanır; karar sondaj verisine bağlıdır." },
      { question: "YER6 Şırnak'ta çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Şırnak ve Güneydoğu bölgesinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "hakkari-zemin-guclendirme",
    intro:
      "Hakkari'de zemin güçlendirme; yüksek dağlık topoğrafya, dik yamaçlar, heyelan riski ve dere/dolgu alanları dikkate alınarak planlanır. YER6, fore kazık, ankraj, iksa ve zemin iyileştirme çözümleri sunar.",
    sections: [
      { heading: "Hakkari zemin koşulları", body: [
        "Yüksek dağlık topoğrafya ve dik yamaçlar, heyelan ve şev duraysızlığı açısından yüksek risk oluşturur. Dere yataklarındaki gevşek dolgular ek hassasiyet sunar.",
        "Bu koşullar, drenaj ve deplasman kontrolünü temel/istinat tasarımının merkezine taşır."
      ]},
      { heading: "Hakkari'de uygulama", body: [
        "Yamaç duraylılığı için öngermeli ankraj ve kazıklı iksa; gevşek dolgularda fore kazık; yerel güçlendirme için jet grout uygulanır.",
        "YER6, Hakkari sahalarında ankraj test yükleri, drenaj ve deplasman izlemesiyle kaliteyi belgeler."
      ]}
    ],
    faq: [
      { question: "Dik yamaçta ne yapılır?", answer: "Ankraj ve kazıklı iksa ile duraylılık sağlanır; etkin drenajla su etkisi azaltılır. Uygulama stabilite analizine dayanır." },
      { question: "Hakkari'de hangi yöntem uygulanır?", answer: "Zemin tipine göre ankraj, fore kazık veya jet grout uygulanır; karar sondaj verisine bağlıdır." },
      { question: "YER6 Hakkari'de hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Hakkari ve Doğu Anadolu'da zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "mus-zemin-guclendirme",
    intro:
      "Muş'ta zemin güçlendirme; Muş ovasının gevşek alüvyonu, yüksek yeraltı suyu ve fay etkisi dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      { heading: "Muş zemin koşulları", body: [
        "Muş ovasındaki gevşek alüvyon ve yüksek yeraltı suyu, oturma ve sıvılaşma açısından değerlendirilmelidir. Bölgenin fay etkinliği zemin davranışını önemli kılar.",
        "Bu koşullar, temel sisteminin zemin etüdüyle kurulan bir modele göre seçilmesini gerektirir."
      ]},
      { heading: "Muş'ta uygulama", body: [
        "Sıvılaşma azaltımı ve su kontrolü için jet grout/DSM; yüksek yükler için fore kazık uygulanır.",
        "YER6, Muş sahalarında kolon sürekliliği, mukavemet testleri ve yeraltı suyu davranışını kalite kabul sürecinde izler."
      ]}
    ],
    faq: [
      { question: "Ova alüvyonunda sıvılaşma riski var mı?", answer: "Gevşek alüvyon ve yüksek yeraltı suyu bulunan alanlarda değerlendirilmeli; gerekirse jet grout/DSM ile azaltılmalıdır." },
      { question: "Muş'ta hangi yöntem uygulanır?", answer: "Zemin tipine göre jet grout, DSM veya fore kazık uygulanır; karar sondaj verisine bağlıdır." },
      { question: "YER6 Muş'ta çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Muş ve Doğu Anadolu'da zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "kastamonu-zemin-guclendirme",
    intro:
      "Kastamonu'da zemin güçlendirme; Batı Karadeniz'in engebeli topoğrafyası, dere/vadi alüvyonları, heyelan ve sel riski dikkate alınarak planlanır. YER6, fore kazık, ankraj, DSM ve jet grout çözümleri sunar.",
    sections: [
      { heading: "Kastamonu zemin koşulları", body: [
        "Vadi alüvyonları ve yamaç alanları, heyelan, şev duraysızlığı ve sel etkisi açısından değerlendirilmelidir. Dere yataklarındaki gevşek dolgular ek hassasiyet sunar.",
        "Bu koşullar temel ve istinat çözümlerinde hassas deplasman ve drenaj kontrolü gerektirir."
      ]},
      { heading: "Kastamonu'da uygulama", body: [
        "Yamaç duraylılığı için ankraj ve kazıklı iksa; alüvyonda DSM ve jet grout; yüksek yükler için fore kazık uygulanır.",
        "YER6, Kastamonu sahalarında ankraj test yükleri, drenaj ve kolon sürekliliği kontrolleriyle kaliteyi belgeler."
      ]}
    ],
    faq: [
      { question: "Vadi/yamaç sahasında ne yapılır?", answer: "Ankraj ve kazıklı iksa ile duraylılık, etkin drenajla su etkisi azaltılır. Uygulama zemin etüdüne dayanır." },
      { question: "Kastamonu'da hangi yöntem uygulanır?", answer: "Zemin tipine göre ankraj, fore kazık, DSM veya jet grout uygulanır; karar sondaj verisine bağlıdır." },
      { question: "YER6 Kastamonu'da hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Kastamonu ve Batı Karadeniz'de zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "karaman-zemin-guclendirme",
    intro:
      "Karaman'da zemin güçlendirme; İç Anadolu'nun killi ova zeminleri, yer yer karst/obruk riski ve sanayi yükleri dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      { heading: "Karaman zemin koşulları", body: [
        "Ova kesimlerindeki killi ve siltli zeminler ile bölgesel karst/boşluk riski, oturma açısından değerlendirilmelidir. Sanayi yapılarının yükleri zemin iyileştirmesini gerektirebilir.",
        "Güvenilir tasarım için parsel bazında sondaj ve gerektiğinde jeofizik esastır."
      ]},
      { heading: "Karaman'da uygulama", body: [
        "Boşluk ve gevşek zeminde enjeksiyon ve jet grout; oturma kontrolü için DSM; yüksek yükler için fore kazık uygulanır.",
        "YER6, Karaman sahalarında boşluk tespiti, kolon sürekliliği ve üretim kayıtlarıyla kaliteyi belgeler."
      ]}
    ],
    faq: [
      { question: "Karst/boşluk riski nasıl yönetilir?", answer: "Boşluklar enjeksiyonla doldurulur, gerektiğinde jet grout ile güçlendirilir veya yükler fore kazıkla aktarılır. Öncesinde boşluk tespiti yapılır." },
      { question: "Karaman'da hangi yöntem uygulanır?", answer: "Zemin tipine göre jet grout, DSM veya fore kazık uygulanır; karar sondaj ve jeofizik verisine bağlıdır." },
      { question: "YER6 Karaman'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Karaman ve İç Anadolu'da zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "nigde-zemin-guclendirme",
    intro:
      "Niğde'de zemin güçlendirme; İç Anadolu'nun volkanik kökenli zeminleri, ova alüvyonları ve tarım/sanayi yükleri dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      { heading: "Niğde zemin koşulları", body: [
        "Volkanik kökenli zeminler ve ova alüvyonu, taşıma gücü ve oturma açısından değişkenlik gösterir. Yapı yüklerine göre bu koşullar zemin iyileştirmesini gerektirebilir.",
        "Güvenilir tasarım için parsel bazında zemin etüdü esastır."
      ]},
      { heading: "Niğde'de uygulama", body: [
        "Oturma kontrolü için DSM; yerel güçlendirme için jet grout; yüksek yükler için fore kazık uygulanır.",
        "YER6, Niğde sahalarında kolon sürekliliği, mukavemet testleri ve üretim kayıtlarıyla kaliteyi belgeler."
      ]}
    ],
    faq: [
      { question: "Volkanik/değişken zeminde hangi yöntem uygun?", answer: "Zemin davranışı sondajla belirlenir; oturmaya duyarlı alanlarda DSM/jet grout, yüksek yüklerde fore kazık tercih edilir." },
      { question: "Ön değerlendirme için ne gerekli?", answer: "Mevcut sondaj verisi ve yapı yükleriyle yöntem önerisi ve yaklaşık metraj hazırlayabiliriz." },
      { question: "YER6 Niğde'de hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Niğde ve İç Anadolu'da zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "kirikkale-zemin-guclendirme",
    intro:
      "Kırıkkale'de zemin güçlendirme; İç Anadolu'nun killi ova zeminleri, Kızılırmak çevresi alüvyonu ve sanayi yükleri dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      { heading: "Kırıkkale zemin koşulları", body: [
        "Kızılırmak çevresindeki alüvyon ile ova kesimlerindeki killi zeminler, oturma ve taşıma gücü açısından değerlendirilmelidir. Sanayi yapılarının yükleri zemin iyileştirmesini gerektirebilir.",
        "Güvenilir tasarım için parsel bazında zemin etüdü esastır."
      ]},
      { heading: "Kırıkkale'de uygulama", body: [
        "Oturma kontrolü için DSM; yerel güçlendirme için jet grout; yüksek yükler için fore kazık uygulanır.",
        "YER6, Kırıkkale sahalarında kolon sürekliliği, mukavemet testleri ve üretim kayıtlarıyla kaliteyi belgeler."
      ]}
    ],
    faq: [
      { question: "Killi/alüvyon zeminde hangi yöntem uygun?", answer: "DSM, jet grout veya fore kazık değerlendirilir; karar sondaj ve laboratuvar verisine bağlıdır." },
      { question: "Kırıkkale'de zemin iyileştirme gerekir mi?", answer: "Killi/gevşek zemin bulunan geniş taban alanlı yapılarda çoğunlukla gereklidir; kesin karar zemin etüdüne bağlıdır." },
      { question: "YER6 Kırıkkale'de çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Kırıkkale ve çevresinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "ardahan-zemin-guclendirme",
    intro: "Ardahan'da zemin güçlendirme; yüksek plato, sert kış, don derinliği ve volkanik kökenli zeminler dikkate alınarak planlanır. YER6, DSM, fore kazık ve jet grout çözümleri sunar.",
    sections: [
      { heading: "Ardahan zemin koşulları", body: ["Yüksek rakım ve donma-çözülme etkileri temel derinliğini belirler; ova zeminleri taşıma gücü açısından değişkenlik gösterir.", "Kısa saha sezonu, imalatın mevsime göre planlanmasını gerektirir."] },
      { heading: "Ardahan'da uygulama", body: ["Oturma kontrolü için DSM; yüksek yükler için fore kazık; yerel güçlendirme için jet grout uygulanır.", "YER6, kolon sürekliliği ve mevsimsel kalite planıyla üretim güvenilirliğini belgeler."] }
    ],
    faq: [
      { question: "Don derinliği temeli nasıl etkiler?", answer: "Temel don derinliğinin altına indirilmeli veya korunmalıdır; zemin iyileştirme ile birlikte değerlendirilir." },
      { question: "Ardahan'da hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, fore kazık veya jet grout; karar sondaj verisine bağlıdır." },
      { question: "YER6 Ardahan'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Ardahan ve Doğu Anadolu'da zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "artvin-zemin-guclendirme",
    intro: "Artvin'de zemin güçlendirme; çok dik topoğrafya, yoğun yağış, heyelan riski ve Çoruh vadisi koşulları dikkate alınarak planlanır. YER6, fore kazık, ankraj, iksa ve zemin iyileştirme çözümleri sunar.",
    sections: [
      { heading: "Artvin zemini ve heyelan", body: ["Dik yamaçlar ve yüksek yağış, heyelan ve şev duraysızlığı açısından yüksek risk oluşturur; dere dolgularında gevşek zemin öne çıkar.", "Drenaj ve deplasman kontrolü tasarımın merkezindedir."] },
      { heading: "Artvin'de uygulama", body: ["Yamaç duraylılığı için ankraj ve kazıklı iksa, etkin drenaj; gevşek dolguda fore kazık uygulanır.", "YER6, ankraj test yükleri ve deplasman izlemesiyle kaliteyi belgeler."] }
    ],
    faq: [
      { question: "Dik/heyelanlı yamaçta ne yapılır?", answer: "Ankraj ve kazıklı iksa ile duraylılık, etkin drenajla su etkisi azaltılır; uygulama stabilite analizine dayanır." },
      { question: "Artvin'de hangi yöntem uygulanır?", answer: "Zemin tipine göre ankraj, fore kazık veya jet grout; karar sondaj verisine bağlıdır." },
      { question: "YER6 Artvin'de hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Artvin ve Doğu Karadeniz'de zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "bartin-zemin-guclendirme",
    intro: "Bartın'da zemin güçlendirme; Batı Karadeniz'in nehir/kıyı alüvyonları, sel riski, yüksek yeraltı suyu ve yamaç koşulları dikkate alınarak planlanır. YER6, DSM, jet grout, fore kazık ve ankraj çözümleri sunar.",
    sections: [
      { heading: "Bartın zemin koşulları", body: ["Bartın Çayı çevresindeki alüvyon ve gevşek çökeller, yüksek yeraltı suyu ve sel etkisiyle oturma açısından hassastır.", "Yamaç alanlarında şev duraylılığı öne çıkar."] },
      { heading: "Bartın'da uygulama", body: ["Alüvyonda DSM ve jet grout; yamaçta ankraj ve iksa; yüksek yükler için fore kazık uygulanır.", "YER6, kolon sürekliliği ve drenaj kontrolüyle kaliteyi belgeler."] }
    ],
    faq: [
      { question: "Nehir/kıyı alüvyonunda hangi yöntem uygun?", answer: "Gevşek zemin ve yüksek yeraltı suyu nedeniyle jet grout, DSM veya derin temel değerlendirilir; karar zemin etüdüne bağlıdır." },
      { question: "Bartın'da hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, jet grout, fore kazık veya ankraj; karar sondaj verisine bağlıdır." },
      { question: "YER6 Bartın'da çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Bartın ve Batı Karadeniz'de zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "bayburt-zemin-guclendirme",
    intro: "Bayburt'ta zemin güçlendirme; yüksek rakım, sert kış, don derinliği ve Çoruh havzası koşulları dikkate alınarak planlanır. YER6, DSM, fore kazık ve jet grout çözümleri sunar.",
    sections: [
      { heading: "Bayburt zemin koşulları", body: ["Yüksek rakım ve donma-çözülme etkileri temel derinliğini belirler; ova ve vadi zeminleri taşıma gücü açısından değişkendir.", "Kısa saha sezonu imalat planını etkiler."] },
      { heading: "Bayburt'ta uygulama", body: ["Oturma kontrolü için DSM; yüksek yükler için fore kazık; yerel güçlendirme için jet grout uygulanır.", "YER6, kolon sürekliliği ve mevsimsel kalite planıyla üretimi belgeler."] }
    ],
    faq: [
      { question: "Soğuk iklim temeli etkiler mi?", answer: "Evet; don derinliği temel derinliğini ve imalat mevsimini etkiler. Saha kalite planı buna göre uyarlanır." },
      { question: "Bayburt'ta hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, fore kazık veya jet grout; karar sondaj verisine bağlıdır." },
      { question: "YER6 Bayburt'ta hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Bayburt ve çevresinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "bilecik-zemin-guclendirme",
    intro: "Bilecik'te zemin güçlendirme; killi ova zeminleri, fay etkisi ve seramik/OSB sanayisinin yükleri dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      { heading: "Bilecik zemin koşulları", body: ["Ova kesimlerindeki killi-siltli zeminler ve gevşek dolgu alanları, oturma açısından değerlendirilmelidir; fay etkinliği zemin davranışını önemli kılar.", "OSB'lerdeki ağır yüklü yapılar iyileştirme gerektirebilir."] },
      { heading: "Bilecik'te uygulama", body: ["Oturma kontrolü için DSM; yerel güçlendirme için jet grout; yüksek yükler için fore kazık uygulanır.", "YER6, karot ve kolon sürekliliği kontrolleriyle kaliteyi belgeler."] }
    ],
    faq: [
      { question: "OSB'de zemin iyileştirme gerekir mi?", answer: "Killi/gevşek zemin bulunan geniş taban alanlı yapılarda çoğunlukla gereklidir; karar zemin etüdüne bağlıdır." },
      { question: "Bilecik'te hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, jet grout veya fore kazık; karar sondaj verisine bağlıdır." },
      { question: "YER6 Bilecik'te çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Bilecik ve çevresinde zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "cankiri-zemin-guclendirme",
    intro: "Çankırı'da zemin güçlendirme; İç Anadolu'nun killi ve yer yer tuzlu/jipsli zeminleri, ova alüvyonu ve fay etkisi dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      { heading: "Çankırı zemin koşulları", body: ["Killi ve yer yer jipsli/tuzlu zeminler, suyla temasta çözünme ve oturma açısından özel dikkat gerektirir; ova alüvyonunda gevşek çökeller öne çıkar.", "Temel sistemi zemin etüdüne göre seçilmelidir."] },
      { heading: "Çankırı'da uygulama", body: ["Oturma kontrolü için DSM; su kontrolü ve yerel güçlendirme için jet grout; yüksek yükler için fore kazık uygulanır.", "YER6, kolon sürekliliği ve üretim kayıtlarıyla kaliteyi belgeler."] }
    ],
    faq: [
      { question: "Jipsli/tuzlu zemin neden riskli?", answer: "Suyla çözünebildiği için boşluk ve oturma riski oluşabilir; su kontrolü ve uygun temel ile risk yönetilir." },
      { question: "Çankırı'da hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, jet grout veya fore kazık; karar sondaj verisine bağlıdır." },
      { question: "YER6 Çankırı'da hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Çankırı ve İç Anadolu'da zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "gumushane-zemin-guclendirme",
    intro: "Gümüşhane'de zemin güçlendirme; dağlık topoğrafya, heyelan riski, dere/vadi dolguları ve madencilik etkisi dikkate alınarak planlanır. YER6, fore kazık, ankraj, iksa ve zemin iyileştirme çözümleri sunar.",
    sections: [
      { heading: "Gümüşhane zemin koşulları", body: ["Dik yamaçlar ve dere yataklarındaki gevşek dolgular heyelan ve şev duraysızlığı açısından belirleyicidir; eski maden alanları ek risk oluşturabilir.", "Deplasman ve drenaj kontrolü esastır."] },
      { heading: "Gümüşhane'de uygulama", body: ["Yamaç duraylılığı için ankraj ve kazıklı iksa; gevşek dolguda fore kazık; yerel güçlendirme için jet grout uygulanır.", "YER6, ankraj test yükleri ve deplasman izlemesiyle kaliteyi belgeler."] }
    ],
    faq: [
      { question: "Yamaç/maden dolgusu sahasında ne yapılır?", answer: "Ankraj ve kazıklı iksa ile duraylılık sağlanır; gevşek dolguda yük fore kazıkla aktarılır. Uygulama zemin etüdüne dayanır." },
      { question: "Gümüşhane'de hangi yöntem uygulanır?", answer: "Zemin tipine göre ankraj, fore kazık veya jet grout; karar sondaj verisine bağlıdır." },
      { question: "YER6 Gümüşhane'de çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Gümüşhane ve Doğu Karadeniz'de zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "karabuk-zemin-guclendirme",
    intro: "Karabük'te zemin güçlendirme; ağır sanayi (demir-çelik) yükleri, vadi alüvyonu, yamaç ve dere koşulları dikkate alınarak planlanır. YER6, DSM, jet grout, fore kazık ve ankraj çözümleri sunar.",
    sections: [
      { heading: "Karabük zemin koşulları", body: ["Vadi alüvyonu ve gevşek dolgu alanları ile yamaç koşulları, oturma ve şev duraysızlığı açısından değerlendirilmelidir; ağır sanayi yükleri belirleyicidir.", "Parsel bazında zemin etüdü esastır."] },
      { heading: "Karabük'te uygulama", body: ["Ağır sanayi temellerinde oturma kontrolü için DSM/jet grout; yüksek nokta yükleri için fore kazık; yamaçta ankraj uygulanır.", "YER6, kolon sürekliliği ve üretim kayıtlarıyla kaliteyi belgeler."] }
    ],
    faq: [
      { question: "Ağır sanayi zemini nasıl güçlendirilir?", answer: "DSM, jet grout ve fore kazık kombinasyonlarıyla oturma ve taşıma güvenliği sağlanır; yöntem yük ve zemine göre seçilir." },
      { question: "Karabük'te hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, jet grout, fore kazık veya ankraj; karar sondaj verisine bağlıdır." },
      { question: "YER6 Karabük'te hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Karabük ve Batı Karadeniz'de zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "kilis-zemin-guclendirme",
    intro: "Kilis'te zemin güçlendirme; Güneydoğu'nun platform ve ova zeminleri, alüvyon alanları ve deprem bölgesine yakınlık dikkate alınarak planlanır. YER6, DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      { heading: "Kilis zemin koşulları", body: ["Platform zeminleri nispeten sağlam olsa da ova kesimlerinde alüvyon ve gevşek dolgu tabakaları bulunur; 2023 depremlerinden etkilenen bölgeye yakınlık dikkat gerektirir.", "Parsel bazında zemin etüdü esastır."] },
      { heading: "Kilis'te uygulama", body: ["Alüvyonda DSM ve jet grout; yüksek yükler için fore kazık; sağlam platformda temel çözümleri optimize edilir.", "YER6, kolon sürekliliği ve üretim kayıtlarıyla kaliteyi belgeler."] }
    ],
    faq: [
      { question: "Deprem bölgesine yakın alanda ne önerilir?", answer: "Zemin profiline göre DSM, jet grout veya fore kazıklı temel değerlendirilir; karar güncel zemin etüdüne dayanır." },
      { question: "Kilis'te hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, jet grout veya fore kazık; karar sondaj verisine bağlıdır." },
      { question: "YER6 Kilis'te çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Kilis ve Güneydoğu bölgesinde zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "sinop-zemin-guclendirme",
    intro: "Sinop'ta zemin güçlendirme; Karadeniz kıyı alüvyonları, yüksek yeraltı suyu, yamaç ve dere koşulları dikkate alınarak planlanır. YER6, DSM, jet grout, fore kazık ve ankraj çözümleri sunar.",
    sections: [
      { heading: "Sinop zemin koşulları", body: ["Kıyı ve dere alüvyonundaki gevşek çökeller ve yüksek yeraltı suyu, oturma açısından hassastır; yamaç alanlarında şev duraylılığı öne çıkar.", "Parsel bazında zemin etüdü esastır."] },
      { heading: "Sinop'ta uygulama", body: ["Su kontrolü için jet grout; oturma kontrolü için DSM; yamaçta ankraj; yüksek yükler için fore kazık uygulanır.", "YER6, kolon sürekliliği ve drenaj kontrolüyle kaliteyi belgeler."] }
    ],
    faq: [
      { question: "Kıyı alüvyonunda hangi yöntem uygun?", answer: "Yüksek yeraltı suyu ve gevşek zemin nedeniyle jet grout, DSM veya derin temel değerlendirilir; karar zemin etüdüne bağlıdır." },
      { question: "Sinop'ta hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, jet grout, fore kazık veya ankraj; karar sondaj verisine bağlıdır." },
      { question: "YER6 Sinop'ta hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Sinop ve Karadeniz bölgesinde zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  },
  {
    slug: "tunceli-zemin-guclendirme",
    intro: "Tunceli'de zemin güçlendirme; dağlık topoğrafya, dere/vadi dolguları, heyelan riski ve baraj/HES projeleri dikkate alınarak planlanır. YER6, fore kazık, ankraj, iksa ve zemin iyileştirme çözümleri sunar.",
    sections: [
      { heading: "Tunceli zemin koşulları", body: ["Dik yamaçlar ve vadi dolguları heyelan ve şev duraysızlığı açısından belirleyicidir; su yapıları çevresinde zemin koşulları özel önem taşır.", "Deplasman ve drenaj kontrolü esastır."] },
      { heading: "Tunceli'de uygulama", body: ["Yamaç duraylılığı için ankraj ve kazıklı iksa; gevşek dolguda fore kazık; yerel güçlendirme için jet grout uygulanır.", "YER6, ankraj test yükleri ve deplasman izlemesiyle kaliteyi belgeler."] }
    ],
    faq: [
      { question: "Yamaç/vadi sahasında ne yapılır?", answer: "Ankraj ve kazıklı iksa ile duraylılık, etkin drenajla su etkisi azaltılır; uygulama zemin etüdüne dayanır." },
      { question: "Tunceli'de hangi yöntem uygulanır?", answer: "Zemin tipine göre ankraj, fore kazık veya jet grout; karar sondaj verisine bağlıdır." },
      { question: "YER6 Tunceli'de çalışıyor mu?", answer: "Evet; Ankara merkezli ekibimizle Tunceli ve Doğu Anadolu'da zemin güçlendirme uygulamaları yapıyoruz." }
    ]
  },
  {
    slug: "yozgat-zemin-guclendirme",
    intro: "Yozgat'ta zemin güçlendirme; İç Anadolu'nun yüksek plastisiteli killi zeminleri, mevsimsel nem hareketi ve altyapı/sanayi yükleri dikkate alınarak planlanır. YER6, DSM, fore kazık ve jet grout çözümleri sunar.",
    sections: [
      { heading: "Yozgat zemin koşulları", body: ["Yüksek plastisiteli killer nem değişiminde şişme-büzülme yaparak temellerde düzensiz gerilme oluşturabilir; oturma davranışı kritik olabilir.", "Temel sistemi zemin etüdüne göre seçilmelidir."] },
      { heading: "Yozgat'ta uygulama", body: ["Zemin rijitliğini artırmak ve şişme basınçlarını kontrol için DSM; derin yükler için fore kazık; yerel güçlendirme için jet grout uygulanır.", "YER6, kilin indeks özellikleri ve kolon testleriyle kaliteyi belgeler."] }
    ],
    faq: [
      { question: "Şişen kil neden önlem gerektirir?", answer: "Nem değiştikçe şişip büzülür; bu hareket temellerde düzensiz gerilme oluşturur. Zemin iyileştirme ve uygun temel ile kontrol edilir." },
      { question: "Yozgat'ta hangi yöntem uygulanır?", answer: "Zemin tipine göre DSM, fore kazık veya jet grout; karar sondaj ve laboratuvar verisine bağlıdır." },
      { question: "YER6 Yozgat'ta hizmet veriyor mu?", answer: "Evet; Ankara merkezli ekibimizle Yozgat ve İç Anadolu'da zemin güçlendirme uygulamaları yürütüyoruz." }
    ]
  }
// ================================================================
// YER6 — cityContent.ts DERINLESTIRME BATCH 1 (6 il)
// Ankara, Istanbul, Izmir, Bursa, Kocaeli, Antalya
//
// NASIL YAPISTIRILIR:
// 1) VS Code'da src/lib/cityContent.ts dosyasini ac
// 2) "// ENRICH_ANCHOR" satirini bul (Cmd+F)
// 3) Bu dosyadaki HER SEYI kopyala ve o satirin HEMEN USTUNE yapistir
// 4) Eski Ankara/Istanbul/... girislerini SILMENE GEREK YOK —
//    listede ayni slug iki kez olunca SONDAKI gecerli olur
//    (Object.fromEntries son girisi kullanir). Yapi degismiyor.
// 5) Kaydet -> commit -> push
// ================================================================
,
  {
    slug: "ankara-zemin-guclendirme",
    intro:
      "Ankara'da zemin güçlendirme, mühendislik literatüründe 'Ankara kili' olarak anılan yüksek plastisiteli, şişme-büzülme davranışı gösteren zemin yapısıyla doğrudan ilişkilidir. YER6, Gölbaşı merkezli saha ekibiyle Ankara ve çevresinde jet grout, fore kazık, ankraj-iksa ve DSM zemin iyileştirme uygulamalarını tek bir kalite standardında yürütür; Türkiye geneli ve yurt dışı projelere de buradan mobilize olur.",
    sections: [
      {
        heading: "Ankara kili ve yerel zemin davranışı",
        body: [
          "Ankara'nın önemli bir bölümünde yüzeye yakın seviyelerde bulunan yüksek plastisiteli killer, mevsimsel nem değişimlerinde belirgin hacim değişimi yapar. Kuru dönemde büzülüp yağışlı dönemde şişen bu killer, özellikle hafif yapıların temellerinde çatlama ve düzensiz oturma riskini artırır.",
          "Bu davranışın kontrolü; temel derinliği, drenaj ve gerektiğinde zemin iyileştirmesinin birlikte tasarlanmasını gerektirir. Doğru yöntem seçimi, ancak sondaj verisi ve laboratuvar indeks deneyleriyle kurulan bir zemin modeliyle güvenilir biçimde yapılabilir."
        ]
      },
      {
        heading: "Bölgelere göre zemin koşulları",
        body: [
          "Vadi tabanlarında ve akarsu çevresinde alüvyon tabakalar ile yer yer yüksek yeraltı suyu bulunurken, sırt ve yamaç kesimlerinde ayrışmış kaya-kil geçişleri öne çıkar. Gölbaşı çevresinde göl çökelleri, gelişme alanlarında ise eski kontrolsüz dolgular ek değişkenlik oluşturur.",
          "Aynı ilçede, hatta komşu parsellerde bile tabaka kalınlığı ve yeraltı suyu seviyesi değişebildiğinden, temel ve iksa kararı parsel bazında sondajla verilmelidir. Komşu parseldeki çözümü kopyalamak Ankara'da güvenli bir yaklaşım değildir."
        ]
      },
      {
        heading: "Derin kazı, ankraj ve iksa uygulamaları",
        body: [
          "Kot farkı yüksek parseller ve derin bodrumlu projelerde fore kazıklı perde ile öngermeli ankraj kombinasyonu Ankara'nın standart çözümüdür. Bitişik nizam ve komşu yapı bulunan kazılarda deplasman kontrolü tasarımın merkezindedir.",
          "Kazı kademeleri, ankraj kabul testleri ve deformasyon izleme (inklinometre, topografik okuma) üretim boyunca kayıt altına alınır; alarm sınırları aşıldığında imalat durdurularak değerlendirme yapılır."
        ]
      },
      {
        heading: "Ankara'da uygulanan zemin iyileştirme yöntemleri",
        body: [
          "Mevcut yapı altında güçlendirme veya su kontrolü gereken durumlarda jet grout kolonları, dar sahalarda bile düşük titreşimle uygulanabilir. Geniş taban alanlı endüstriyel yapılarda oturmayı kontrol etmek için DSM zemin iyileştirme tercih edilir.",
          "YER6, her projede kolon çapı, derinlik ve bağlayıcı dozajını Ankara zeminine özgü parametrelerle optimize eder; oturma ve çatlak sorunu yaşayan mevcut binalarda jet grout ve mini kazık ile temel altı güçlendirme (underpinning) kurgulanır."
        ]
      },
      {
        heading: "Saha kalitesi ve teslim süreci",
        body: [
          "Ankara projelerinde deneme kolonları, karot alımı, tek eksenli basınç deneyleri ve kolon sürekliliği kontrolleri üretim boyunca kayıt altına alınır. Bu veriler, yapının servis yükleri altında beklenen performansı vereceğini belgelemek için teslim dosyasına işlenir.",
          "Yüksek plastisiteli killerde nem yönetimi ve numune koruması kritik olduğundan, saha kalite planı mevsim koşullarına göre uyarlanır."
        ]
      }
    ],
    faq: [
      {
        question: "Ankara kili neden özel önlem gerektirir?",
        answer:
          "Yüksek plastisiteli olduğu için nem değiştikçe şişip büzülür; bu hacimsel hareket temellerde düzensiz gerilme ve çatlaklara yol açabilir. Uygun zemin iyileştirme ve temel sistemi bu hareketleri kontrol altına alır."
      },
      {
        question: "Ankara'da jet grout mu fore kazık mı uygulanmalı?",
        answer:
          "Karar; yük büyüklüğü, kazı derinliği, komşu yapı durumu ve zemin profiline bağlıdır. Su kontrolü ve dar saha için jet grout, yüksek taşıma kapasitesi ve derin temel için fore kazık öne çıkar. Çoğu projede ikisi birlikte kurgulanır."
      },
      {
        question: "Derin bodrumlu projede iksa zorunlu mu?",
        answer:
          "Kazı derinliği, zemin profili ve komşu yapı durumuna göre belirlenir; kentsel parsellerde derin kazıların büyük bölümünde kazıklı perde ve ankrajlı iksa gerekir. Kesin karar proje bazında verilir."
      },
      {
        question: "Mevcut binada oturma veya çatlak varsa ne yapılmalı?",
        answer:
          "Önce zemin etüdü ve yapısal değerlendirme ile sorunun kaynağı teşhis edilmelidir. Ardından jet grout veya mini kazık ile temel altı güçlendirme (underpinning) planlanabilir."
      },
      {
        question: "YER6 Ankara'nın hangi bölgelerinde çalışıyor?",
        answer:
          "Gölbaşı merkezli ekibimizle Ankara'nın tüm ilçelerinde ve çevre illerde saha uygulaması yapıyoruz; Türkiye geneli ve yurt dışı projelere de mobilize oluyoruz."
      },
      {
        question: "Zemin etüdü olmadan fiyat teklifi alabilir miyim?",
        answer:
          "Ön değerlendirme için mevcut sondaj raporu veya proje bilgileri yeterlidir; ancak kesin tasarım ve metraj için güncel zemin etüdü verisi gereklidir."
      }
    ]
  },
  {
    slug: "istanbul-zemin-guclendirme",
    intro:
      "İstanbul'da zemin güçlendirme; yalnızca yöntem seçimi değil, komşu yapı etkisi, yoğun altyapı hatları ve sınırlı şantiye lojistiğinin birlikte yönetildiği bir risk mühendisliği konusudur. YER6, derin kazı, temel güçlendirme ve kentsel dönüşüm projelerinde fore kazık, mini kazık, ankraj ve jet grout çözümlerini bir arada kurgular; Ankara merkezli ekip Türkiye geneli hizmet kapsamında İstanbul projelerine mobilize olur.",
    sections: [
      {
        heading: "İstanbul'da zemin ve kazı koşulları",
        body: [
          "Kıyı dolguları, ayrışmış kaya geçişleri ve bölgeden bölgeye değişen yerleşim dokusu, İstanbul'da temel güçlendirme ve iksa sistemlerinde hassas deplasman kontrolü gerektirir. Haliç, Boğaz ve Marmara kıyısı boyunca gevşek dolgu ve yüksek yeraltı suyu koşulları öne çıkarken, iç kesimlerde daha rijit formasyonlarla karşılaşılabilir.",
          "Bitişik nizam yapılaşma nedeniyle kazı sırasında komşu binaların güvenliği belirleyicidir; bu da öngermeli ankraj, kazıklı iksa perdesi ve gerektiğinde jet grout ile taban stabilizasyonunu zorunlu kılar."
        ]
      },
      {
        heading: "Kıyı dolguları, dere yatakları ve sıvılaşma riski",
        body: [
          "Avcılar, Küçükçekmece ve Zeytinburnu gibi kıyı kesimleri ile eski dere yataklarına oturan dolgu alanlarında gevşek, suya doygun tabakalar sıvılaşma potansiyeli taşır. Beklenen Marmara depremi, bu bölgelerde zemin iyileştirmesini yapısal güvenliğin ön koşulu haline getirmektedir.",
          "Sıvılaşma değerlendirmesi TBDY 2018 kapsamında zorunludur; risk belirlenen parsellerde jet grout, DSM veya derin temel çözümleriyle performans hedefi sağlanır."
        ]
      },
      {
        heading: "Derin kazı ve temel güçlendirme yöntemleri",
        body: [
          "Yüksek yapılar ve derin bodrumlu projelerde büyük çaplı fore kazıklar taşıma kapasitesini sağlarken, dar ve erişimi kısıtlı kentsel dönüşüm parsellerinde mini kazık ve underpinning uygulamaları mevcut yapıyı taşımadan güçlendirmeye imkân verir.",
          "Su geçirimsizliği ve kazı tabanı güvenliği gereken alanlarda jet grout perdeleri devreye alınır. YER6, her projede düşeylik, beton sürekliliği ve ankraj test yüklerini kayıt altına alarak çevre yapı izleme verisiyle birlikte raporlar."
        ]
      },
      {
        heading: "Kentsel dönüşümde uygulama süreci",
        body: [
          "Süreç; mevcut yapının değerlendirilmesi ve zemin etüdüyle başlar, yöntem seçimi ve etap planıyla devam eder. Bitişik nizamda titreşim sınırları gözetilir; kompakt ekipmanlar dar parsellerde ve gerektiğinde bodrum katından çalışabilir.",
          "Üretim etaplı yürütülür, yapı hareketleri izlenir ve tüm imalat kayıtları teslim dosyasında belgelenir."
        ]
      }
    ],
    faq: [
      {
        question: "İstanbul'da komşu yapıya zarar vermeden kazı yapılabilir mi?",
        answer:
          "Evet. Öngermeli ankraj, kazıklı iksa ve gerektiğinde jet grout taban stabilizasyonu ile deplasmanlar sınırlandırılır; çevre yapılar izleme (monitoring) altında tutulur."
      },
      {
        question: "Sıvılaşma riski olan ilçede güvenli yapı mümkün mü?",
        answer:
          "Evet; uygun tasarlanmış jet grout, DSM veya derin temel çözümleriyle sıvılaşma riski kabul edilebilir düzeye indirilir. Değerlendirme TBDY 2018 kapsamında zemin etüdüyle yapılır."
      },
      {
        question: "Kentsel dönüşümde mevcut binanın altına güçlendirme yapılabilir mi?",
        answer:
          "Mini kazık ve underpinning yöntemleriyle mevcut temel altına kontrollü yük aktarımı sağlanabilir. Uygulama, yapının statik durumu ve zemin profiline göre projelendirilir."
      },
      {
        question: "Dar parselde ekipman çalışabilir mi?",
        answer:
          "Evet; kompakt jet grout ve mini kazık ekipmanları dar parsellerde, düşük tavan yüksekliğinde ve gerektiğinde bodrum katından uygulama yapabilir."
      },
      {
        question: "İstanbul'da hangi zemin verileri gerekli?",
        answer:
          "Sondaj logları, yeraltı suyu seviyesi, komşu yapı bilgileri ve kazı derinliği; güvenli bir iksa/temel tasarımı için asgari gereksinimlerdir."
      },
      {
        question: "YER6 İstanbul'da çalışıyor mu?",
        answer:
          "Evet. Ankara merkezli ekibimizle Türkiye genelinde hizmet veriyoruz; İstanbul projelerinde mobilizasyon ve saha planlamasını proje takvimiyle uyumlu kurguluyoruz."
      }
    ]
  },
  {
    slug: "izmir-zemin-guclendirme",
    intro:
      "İzmir'de zemin iyileştirme projeleri çoğu zaman kıyı etkisi, yüksek yeraltı suyu, sıvılaşma riski ve dar şehir içi şantiye koşullarıyla birlikte ele alınır. YER6, körfez çevresi ve alüvyon alanlarda jet grout, DSM zemin iyileştirme ve fore kazık uygulamalarını deprem performansı odağıyla yürütür; Ankara merkezli ekip Türkiye geneli kapsamında İzmir projelerine mobilize olur.",
    sections: [
      {
        heading: "İzmir körfez zemini ve sıvılaşma riski",
        body: [
          "Körfez çevresi ve alüvyon alanlarda yer alan gevşek kum-silt seviyeleri, yüksek yeraltı suyuyla birleştiğinde deprem sırasında sıvılaşma potansiyeli taşır. Bayraklı, Karşıyaka ve Bornova gibi bölgelerde bu davranış, temel sistemi ve zemin iyileştirme kararlarını doğrudan etkiler.",
          "2020 depreminde gözlenen yapısal hasarlar, İzmir'de yumuşak zemin üzerinde oturan yapılarda zemin iyileştirmesinin ve uygun temel seçiminin önemini bir kez daha ortaya koymuştur."
        ]
      },
      {
        heading: "Bölgelere göre zemin koşulları",
        body: [
          "Körfezin doğu ve kuzey kesimlerindeki alüvyon ovalar kalın, suya doygun ve yumuşak tabakalar barındırırken; kıyı dolgu alanlarında gevşek yapay dolgular öne çıkar. Yamaç ilçelerde ise ayrışmış kaya ve daha rijit birimlerle karşılaşılabilir.",
          "Bu değişkenlik nedeniyle temel ve iyileştirme kararı parsel bazında sondajla verilmelidir; aynı mahallede bile tabaka kalınlığı önemli ölçüde değişebilir."
        ]
      },
      {
        heading: "İzmir'de zemin iyileştirme yaklaşımı",
        body: [
          "Su kontrolü ve sıvılaşma azaltımı gereken sahalarda jet grout ve enjeksiyon; oturma kontrolü gereken geniş parsellerde DSM zemin iyileştirme öne çıkar. Derin ve yüksek yükleri sağlam tabakaya aktarmak için fore kazıklı temeller tercih edilir.",
          "YER6, İzmir sahalarında basınç kayıtları, kolon çapı doğrulaması ve yeraltı suyu davranışını kalite kabul sürecinin merkezine alır."
        ]
      },
      {
        heading: "Mevcut yapı güçlendirme ve kentsel dönüşüm",
        body: [
          "2020 sonrasında mevcut yapıların temel ve zemin güvenliğine yönelik talep belirgin biçimde artmıştır. Temel altı jet grout ve mini kazık uygulamaları, bina büyük ölçüde kullanımda kalırken etaplı olarak yürütülebilir.",
          "Dar parsellerde kompakt ekipman kullanılır; uygulama boyunca yapı hareketleri izlenir ve kayıtlar teslim dosyasına işlenir."
        ]
      }
    ],
    faq: [
      {
        question: "İzmir'de sıvılaşma riski nasıl azaltılır?",
        answer:
          "Jet grout veya DSM ile zemin rijitliği artırılarak, gerektiğinde drenaj ve enjeksiyon yöntemleriyle sıvılaşma potansiyeli düşürülür. Yöntem, sondaj ve laboratuvar verisine göre seçilir."
      },
      {
        question: "Bayraklı bölgesinde hangi yöntem uygundur?",
        answer:
          "Yumuşak/gevşek zemin ve yüksek yeraltı suyu nedeniyle çoğunlukla jet grout, DSM veya derin temel (fore kazık) çözümleri değerlendirilir; kesin karar zemin etüdüne bağlıdır."
      },
      {
        question: "Mevcut bina boşaltılmadan güçlendirilebilir mi?",
        answer:
          "Çoğu durumda evet; kompakt ekipmanla temel altı jet grout ve mini kazık uygulamaları etaplı yürütülerek bina büyük ölçüde kullanımda kalabilir. Kesin durum yapısal değerlendirmeye bağlıdır."
      },
      {
        question: "Dar şehir içi parselde uygulama mümkün mü?",
        answer:
          "Evet; düşük titreşimli kompakt ekipmanlarla komşu yapıya duyarlı biçimde çalışılır, gerektiğinde bodrumdan uygulama yapılır."
      },
      {
        question: "Deprem yönetmeliğine uygun uygulama yapıyor musunuz?",
        answer:
          "Uygulamalarımız güncel zemin etüdü ve performans hedefleri doğrultusunda projelendirilir; üretim verileri belgelenerek teslim edilir."
      },
      {
        question: "YER6 İzmir'de çalışıyor mu?",
        answer:
          "Evet. Ankara merkezli ekibimizle Türkiye genelinde hizmet veriyoruz; İzmir ve Ege bölgesi projelerine mobilize oluyoruz."
      }
    ]
  },
  {
    slug: "bursa-zemin-guclendirme",
    intro:
      "Bursa'da zemin güçlendirme kararları; ova alüvyonları, sanayi parsellerindeki dolgu tabakaları ve yüksek işletme yükleri birlikte değerlendirilerek verilir. YER6, lojistik ve üretim tesislerinden konut projelerine kadar Bursa genelinde DSM, jet grout ve fore kazık çözümleri sunar ve bölgede temel altı jet grout saha deneyimine sahiptir.",
    sections: [
      {
        heading: "Bursa ovası ve sanayi zeminleri",
        body: [
          "Nilüfer, Osmangazi ve Gemlik çevresinde gevşek dolgu, yumuşak kil ve yer yer yüksek yeraltı suyu koşulları; oturma ve taşıma gücü açısından kritik olabilir. Özellikle geniş taban alanlı üretim ve depolama yapılarında düzensiz oturma, zemin iyileştirmesini zorunlu kılar.",
          "Sanayi parsellerindeki kontrolsüz dolgular ve değişken tabaka geçişleri, parsel bazında zemin modeli kurulmasını gerektirir."
        ]
      },
      {
        heading: "Deprem ve sıvılaşma değerlendirmesi",
        body: [
          "Bursa, aktif fay kuşağına yakınlığı nedeniyle deprem etkisinin zeminle birlikte ele alınmasını gerektirir. Ova alüvyonundaki gevşek, suya doygun tabakalarda sıvılaşma potansiyeli TBDY 2018 kapsamında değerlendirilmelidir.",
          "Risk belirlenen parsellerde jet grout veya DSM ile zemin rijitliği artırılarak performans hedefi sağlanır; yüksek yükler fore kazıkla sağlam tabakaya aktarılır."
        ]
      },
      {
        heading: "Lojistik ve üretim tesislerinde uygulama",
        body: [
          "Lojistik ve üretim tesislerinde DSM zemin iyileştirme, temel altı kolon düzeni ve gerektiğinde jet grout enjeksiyon perdesi birlikte kurgulanır. Yüksek nokta yükleri taşıyan makine temellerinde fore/mini kazık çözümleri devreye alınır.",
          "YER6, Bursa sahalarında karot, kolon sürekliliği, bağlayıcı dozajı ve üretim kayıtlarını izleyerek yatırımın işletme yüklerine uygun performans vermesini güvence altına alır."
        ]
      },
      {
        heading: "YER6 Bursa saha deneyimi",
        body: [
          "YER6, Bursa Yunuseli Nida Evleri projesinde temel altı zemin iyileştirme kapsamında yaklaşık 6.200 metre jet grout imalatı gerçekleştirdi. Sahada 15 metre boyunda ve 60 santimetre çapında kolonlarla zeminin taşıma kapasitesinin artırılması ve oturma riskinin azaltılması hedeflendi.",
          "Bu tür projelerde tasarım değerlerinin sahaya aktarılması; doğru aplikasyon, delgi-enjeksiyon kayıtlarının izlenmesi ve imalatın testlerle doğrulanmasına bağlıdır."
        ]
      }
    ],
    faq: [
      {
        question: "Fabrika zemininde oturma sorununa hangi çözüm uygun?",
        answer:
          "Geniş taban alanlarında DSM zemin iyileştirme ile oturma kontrol edilir; yüksek nokta yüklerinde fore/mini kazıklı makine temelleri tercih edilir. Yöntem, yük ve zemin profiline göre belirlenir."
      },
      {
        question: "Bursa'da sıvılaşma riski var mı?",
        answer:
          "Ova alüvyonundaki gevşek, suya doygun tabakalarda değerlendirilmesi gereken bir risktir; TBDY 2018 kapsamında zemin etüdüyle belirlenir ve gerekirse jet grout/DSM ile azaltılır."
      },
      {
        question: "Bursa'da yüksek yeraltı suyu uygulamayı etkiler mi?",
        answer:
          "Evet; su geçirgenliği yüksek zeminlerde jet grout ve enjeksiyon ile su kontrolü sağlanır, imalat programı yeraltı suyuna göre düzenlenir."
      },
      {
        question: "Mevcut tesiste üretimi durdurmadan güçlendirme mümkün mü?",
        answer:
          "Çoğu durumda kompakt ekipmanla, bölgesel ve düşük titreşimli uygulamalarla üretim büyük ölçüde sürdürülerek güçlendirme planlanabilir."
      },
      {
        question: "YER6'nın Bursa'da referansı var mı?",
        answer:
          "Evet; Yunuseli Nida Evleri projesinde yaklaşık 6.200 metre temel altı jet grout imalatı gerçekleştirdik. Proje detaylarını ve üretim yaklaşımımızı paylaşabiliriz."
      }
    ]
  },
  {
    slug: "kocaeli-zemin-guclendirme",
    intro:
      "Kocaeli'nde zemin güçlendirme; körfez alüvyonu, yoğun ağır sanayi yükleri ve bölgenin deprem geçmişi bir arada değerlendirilerek planlanır. YER6, tank ve makine temellerinden lojistik alanlara kadar Kocaeli genelinde DSM, jet grout ve fore kazık çözümleri sunar.",
    sections: [
      {
        heading: "Kocaeli körfez zemini ve deprem geçmişi",
        body: [
          "İzmit Körfezi çevresindeki alüvyon alanlarda gevşek kum-silt seviyeleri ve yüksek yeraltı suyu, deprem sırasında sıvılaşma açısından risk oluşturabilir. 1999 Marmara depremi, bölgede zemin davranışının yapısal güvenlikteki belirleyici rolünü açıkça ortaya koymuştur.",
          "Petrokimya, otomotiv ve lojistik tesislerinin yoğun olduğu bölgede, ağır ve dinamik yükler zemin iyileştirmesini çoğu projede zorunlu hale getirir."
        ]
      },
      {
        heading: "Gebze–Dilovası sanayi ekseninde zemin koşulları",
        body: [
          "Gebze, Çayırova, Dilovası ve Körfez hattındaki OSB parsellerinde kontrolsüz dolgular, değişken tabaka geçişleri ve yer yer yüksek yeraltı suyu ile karşılaşılır. Geniş taban alanlı depo ve fabrika yapılarında düzensiz oturma başlıca risktir.",
          "Bu eksende yöntem seçimi; döşeme yükleri, makine temelleri ve saha erişimi birlikte değerlendirilerek parsel bazında yapılmalıdır."
        ]
      },
      {
        heading: "Ağır sanayi ve tank temellerinde uygulama",
        body: [
          "Büyük çaplı depolama tankları ve makine temellerinde oturma ve sıvılaşma kontrolü için DSM ve jet grout kolonları; yüksek nokta yüklerinde ise fore kazıklı derin temeller uygulanır.",
          "YER6, Kocaeli sahalarında kolon sürekliliği, bağlayıcı dozajı ve yükleme performansını kayıt altına alarak endüstriyel işletme yüklerine uygun teslim güvencesi verir."
        ]
      },
      {
        heading: "Liman ve kıyı yapılarında zemin güçlendirme",
        body: [
          "Liman geri sahaları ve kıyı dolgu alanlarında gevşek denizel çökeller yüksek oturma potansiyeli taşır; konteyner ve yük sahalarında bu durum işletme performansını doğrudan etkiler.",
          "Bu alanlarda jet grout geçirimsizlik perdesi, DSM ile alan iyileştirmesi ve fore kazıklı derin temeller proje gereksinimine göre birlikte kurgulanır."
        ]
      }
    ],
    faq: [
      {
        question: "Tank temeli altında sıvılaşma riski nasıl yönetilir?",
        answer:
          "Jet grout veya DSM ile zemin rijitliği artırılır, gerektiğinde drenaj çözümleriyle boşluk suyu basıncı kontrol altına alınır. Yöntem, sondaj ve dinamik yük analizine göre seçilir."
      },
      {
        question: "Kocaeli sanayi bölgelerinde çalışıyor musunuz?",
        answer:
          "Evet; Gebze, Çayırova, Körfez ve Dilovası dahil bölge genelinde endüstriyel zemin iyileştirme uygulamaları yapıyoruz."
      },
      {
        question: "Liman/kıyı dolgusunda oturma nasıl kontrol edilir?",
        answer:
          "Gevşek dolgularda DSM veya jet grout ile alan iyileştirmesi yapılır; ağır ve noktasal yükler fore kazıkla sağlam tabakaya aktarılır. Karar zemin etüdüne bağlıdır."
      },
      {
        question: "Deprem sonrası mevcut tesis güçlendirmesi mümkün mü?",
        answer:
          "Mevcut yapı altında jet grout ve mini kazık çözümleriyle kontrollü güçlendirme planlanabilir; uygulama, yapının statik değerlendirmesiyle birlikte kurgulanır."
      },
      {
        question: "Teklif için hangi bilgiler gerekli?",
        answer:
          "Mevcut zemin etüdü, yapı/tesis yükleri ve parsel bilgileri ile yöntem önerisi ve yaklaşık metraj hazırlayabiliriz."
      }
    ]
  },
  {
    slug: "antalya-zemin-guclendirme",
    intro:
      "Antalya'da zemin güçlendirme; kıyı alüvyonları, karstik kireçtaşı (boşluk/erime riski) ve yüksek yeraltı suyu birlikte değerlendirilerek planlanır. YER6, otel, konut ve ticari yapı projelerinde jet grout, fore kazık ve enjeksiyon çözümleri sunar; imalat programını turizm sezonu takvimiyle uyumlu kurgular.",
    sections: [
      {
        heading: "Antalya zemininde karst ve alüvyon",
        body: [
          "Bölgede yer yer karstik kireçtaşı bulunması, zemin içinde boşluk ve erime kanalları riski oluşturur; bu da temel altında ani oturma veya düzensizlik açısından önemlidir. Kıyı kesimlerinde ise gevşek alüvyon ve yüksek yeraltı suyu belirleyicidir.",
          "Traverten platosu ile kıyı alüvyonu arasındaki bu fark, aynı ilçede bile parselden parsele farklı temel çözümleri gerektirebilir. Doğru yöntem, ancak sondaj ve gerektiğinde jeofizik ölçümlerle kurulan zemin modeline göre seçilir."
        ]
      },
      {
        heading: "Kıyı turizm bandında uygulama koşulları",
        body: [
          "Otel ve rezidans projelerinde derin bodrum kazıları çoğu zaman yüksek yeraltı suyuyla birlikte yürür; jet grout su kesme perdesi ve kazıklı iksa bu koşulların standart çözümüdür. Yoğun yapılaşmış bantta komşu tesis ve altyapıya duyarlı, düşük titreşimli imalat esastır.",
          "İşletmedeki tesislerde güçlendirme ve tadilat işleri, sezon dışı döneme göre planlanarak faaliyet kaybı en aza indirilir."
        ]
      },
      {
        heading: "Antalya'da uygulama yaklaşımı",
        body: [
          "Karstik boşlukların doldurulması ve su kontrolü için enjeksiyon ve jet grout; yüksek yapı ve derin temellerde fore kazık öne çıkar. Otel ve ticari yapılarda oturmaya duyarlı yükler için temel altı güçlendirme kurgulanır.",
          "YER6, Antalya sahalarında boşluk tespiti, enjeksiyon kayıtları ve kolon sürekliliği kontrolleriyle kaliteyi belgeler."
        ]
      },
      {
        heading: "Boşluk tespiti ve doğrulama süreci",
        body: [
          "Karst şüphesi olan parsellerde sondaj programı gerektiğinde jeofizik ölçümlerle desteklenir; tespit edilen boşluklar kontrollü enjeksiyonla doldurulur ve sarf kayıtlarıyla haritalanır.",
          "Dolum sonrası kontrol sondajları ve enjeksiyon sarf karşılaştırmasıyla hedefe ulaşıldığı doğrulanır; tüm veriler teslim dosyasına işlenir."
        ]
      }
    ],
    faq: [
      {
        question: "Karstik zeminde temel nasıl güvence altına alınır?",
        answer:
          "Boşluklar enjeksiyonla doldurulur, gerektiğinde jet grout ile zemin güçlendirilir veya yükler fore kazıkla sağlam tabakaya aktarılır. Öncesinde boşluk tespiti (sondaj/jeofizik) yapılır."
      },
      {
        question: "Antalya kıyı zemininde hangi yöntem uygun?",
        answer:
          "Yüksek yeraltı suyu ve gevşek alüvyon nedeniyle jet grout, enjeksiyon veya derin temel çözümleri değerlendirilir; karar zemin etüdüne bağlıdır."
      },
      {
        question: "Parselde boşluk/obruk şüphesi varsa ne yapılmalı?",
        answer:
          "Sondaj ve gerektiğinde jeofizik ölçümlerle boşluk araştırması yapılmalı; tespit halinde kontrollü enjeksiyonla dolgu ve doğrulama kontrolleri planlanmalıdır."
      },
      {
        question: "İşletmedeki otelde güçlendirme yapılabilir mi?",
        answer:
          "Evet; kompakt ekipman ve etaplı imalatla, tercihen sezon dışı dönemde planlanarak tesis faaliyeti büyük ölçüde korunabilir. Kesin kapsam yapısal değerlendirmeye bağlıdır."
      },
      {
        question: "YER6 Antalya'da çalışıyor mu?",
        answer:
          "Evet; Ankara merkezli ekibimizle Türkiye genelinde hizmet veriyoruz ve Antalya projelerine mobilize oluyoruz."
      }
    ]
  }
  // ENRICH_ANCHOR
];

const cityEnrichment: Record<string, CityEnrichment> = Object.fromEntries(
  cityEnrichmentList.map((entry) => [entry.slug, entry])
);

export function getCityPageBySlug(slug: string) {
  const page = cityPages.find((page) => page.slug === slug);
  if (!page) {
    return undefined;
  }
  const enrichment = cityEnrichment[slug];
  return enrichment ? { ...page, ...enrichment } : page;
}

export function getCityPaths() {
  return cityPages.map((page) => ({ slug: page.slug }));
}

// Öncelikli iller. Tüm iller indekslenir ve sitemap'te yer alır; ancak öncelikli iller
// her listede DAİMA ÖNDE gösterilir ve sitemap'te daha yüksek önceliğe (priority) sahiptir.
// Bu listedeki iller ayrıca zenginleştirilmiş (benzersiz, uzun) içeriğe sahiptir.
export const featuredCitySlugs = [
  "ankara-zemin-guclendirme",
  "istanbul-zemin-guclendirme",
  "izmir-zemin-guclendirme",
  "bursa-zemin-guclendirme",
  "kocaeli-zemin-guclendirme",
  "hatay-zemin-guclendirme",
  "kahramanmaras-zemin-guclendirme",
  "malatya-zemin-guclendirme",
  "adiyaman-zemin-guclendirme",
  "gaziantep-zemin-guclendirme",
  "eskisehir-zemin-guclendirme",
  "konya-zemin-guclendirme"
];

export function isFeaturedCity(slug: string) {
  return featuredCitySlugs.includes(slug);
}

// Öncelikli iller, featuredCitySlugs sırasıyla (Ankara en başta) döner.
export const featuredCityPages = featuredCitySlugs
  .map((slug) => cityPages.find((page) => page.slug === slug))
  .filter((page): page is CityPage => Boolean(page));

// Tüm iller; öncelikli iller önce (Ankara en başta, daima önde), ardından diğerleri.
// Listelerde ve sitemap'te bu sıra kullanılır.
export const orderedCityPages = [
  ...featuredCityPages,
  ...cityPages.filter((page) => !featuredCitySlugs.includes(page.slug))
];
