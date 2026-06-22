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
      "Konya'da geniş tarımsal depolar, yüksek silolar and killi ova zeminleri için DSM zemin iyileştirme, fore kazık ve geoteknik risk yönetimi.",
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
      "Sakarya'da deprem bölgesi zemin yapıları, alüvyon tabakalar and sanayi platformları için DSM zemin iyileştirme, jet grout ve fore kazık uygulamaları.",
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

export function getCityPageBySlug(slug: string) {
  return cityPages.find((page) => page.slug === slug);
}

export function getCityPaths() {
  return cityPages.map((page) => ({ slug: page.slug }));
}
