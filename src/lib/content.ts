import {
  Anchor,
  BadgeCheck,
  Building2,
  Compass,
  Drill,
  Factory,
  Gauge,
  Layers3,
  MapPinned,
  Mountain,
  Network,
  ShieldCheck,
  Sparkles,
  Waves
} from "lucide-react";

export const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/projects", key: "projects" },
  { href: "/equipment-fleet", key: "fleet" },
  { href: "/technology", key: "technology" },
  { href: "/knowledge", key: "knowledge" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" }
] as const;

export const metrics = [
  { value: 250, suffix: "+", labelKey: "metric1Label", detailKey: "metric1Detail" },
  { value: 1.8, suffix: "M m", labelKey: "metric2Label", detailKey: "metric2Detail" },
  { value: 42, suffix: "+", labelKey: "metric3Label", detailKey: "metric3Detail" },
  { value: 99, suffix: "%", labelKey: "metric4Label", detailKey: "metric4Detail" }
];

// Referans firmalar (metin-amblem rozet olarak gösterilir). Yalnızca YER6'nın
// gerçekten çalıştığı firmalar listelenir. Erhan tarafından beyan edilenler eklenir.
export const clientLogos = [
  "Rönesans",
  "İçtaş",
  "Pasifik İnşaat",
  "Pekintaş"
];

export const services = [
  {
    slug: "jet-grout",
    key: "svc_jet_grout",
    icon: Drill,
    title: "Jet Grout",
    summary: "YER6, zayıf zeminlerde taşıma kapasitesini artırmak için yüksek basınçlı enjeksiyonla zemin-çimento kolonları oluşturan jet grout uygulamaları gerçekleştirir.",
    detail: "Jet grout yapan firmalar arasında ileri mühendislik standartlarıyla öne çıkan YER6; 400-600 bar aralığındaki yüksek basınçlı çimento şerbetinin (grout), zemin matrisini parçalayarak yerinde zemin-çimento kolonları (soilcrete) oluşturması prensibine dayanır. Zorlu saha koşullarında, dar alanlarda ve mevcut yapılara bitişik (underpinning) kazılarda taşıma kapasitesini artırmak ve su geçirimsizlik perdesi (secant wall) sağlamak için en etkili geoteknik çözümdür.",
    specs: ["Mono, double ve triple sistem", "Gerçek zamanlı basınç ve debi takibi", "Kesintisiz yüzey dönüş (spoil) kontrolü"],
    applications: [
      "Mevcut yapılarda bina altı temel güçlendirmesi (underpinning)",
      "Aktif kullanılan Türk Telekom binaları, veri merkezleri ve santral tesisleri altında elektrikli makinelerle titreşimsiz uygulama",
      "Derin kazılarda yeraltı suyu kesici (cutoff) geçirimsizlik perdeleri",
      "Yumuşak kil ve gevşek kumlarda taşıma gücü (bearing capacity) artırımı",
      "Tünel ayna ve portal giriş stabilizasyonu, şaft kazıları",
      "Kıyı yapılarında deniz suyu girişini engelleyen sızdırmazlık perdeleri",
      "Sıvılaşma riskine karşı zemin iyileştirmesi"
    ],
    advantages: [
      "Düşük Titreşimli Yöntem: Kazık çakma veya darbeli delgi yöntemlerine göre titreşim etkisi düşüktür; komşu yapılar ve hassas cihazlar proje özelindeki izleme planıyla korunur.",
      "Elektrikli Jet Grout Makinesi Teknolojisi: Kapalı bodrum katlarında ve havalandırması kısıtlı tesislerde uygulama noktasında doğrudan dizel egzoz emisyonu oluşturmaz ve gürültü etkisini azaltır.",
      "Oturma (Settlement) ve Kabarma (Heave) Kontrolü: 400-600 bar yüksek basınç enjeksiyonunda spoil (çamur) çıkış kanalları sürekli açık tutularak zemin kabarması engellenir.",
      "Şaşırtmalı/Ardışık (Dama Düzeni) Döküm Sekansı: Yan yana kolonlar aynı anda yapılmaz; proje şartlarına göre kolon aralığı ve priz süresi belirlenerek oturma riski azaltılır.",
      "7/24 Gerçek Zamanlı İzleme (Monitoring): İnklinometre, oturma plakaları ve tiltmetre ile milimetrik bina hareketleri anlık izlenir, belirlenen eşikte imalat durdurulur.",
      "Zemin profiline göre Mono (sadece grout), Double (grout+hava) veya Triple (grout+su+hava) sistem seçimiyle optimize edilir.",
      "İmalat öncesi saha deneme kolonları (trial columns) yapılarak enjeksiyon basıncı, tij çekme hızı ve dönüş sayısı (rpm) zemin ortamında doğrulanır."
    ],
    processSteps: [
      { title: "Zemin Modeli ve Proje Değerlendirmesi", description: "Geoteknik zemin etüdü (SPT/CPT), temel/mimari projeler ve kuyu kotları YER6 mühendislerince incelenerek yapıya özel uygulama modeli tasarlanır." },
      { title: "Saha Deneme Kolonları (Zorunlu Kalibrasyon)", description: "Uluslararası standartlar (USACE, FHWA) gereği pilot kolonlar imal edilir. Hedef çap ve dayanım için basınç, çekme hızı ve su/çimento oranı sahada kalibre edilir." },
      { title: "Elektrikli Ekipman Kurulumu ve Sensör Takibi", description: "Uygulama noktasında doğrudan dizel egzozu oluşturmayan elektrikli jet grout makinesi mobilize edilir; proje risk sınıfına göre inklinometre, oturma plakaları ve optik izleme donanımları kurulur." },
      { title: "Şaşırtmalı/Ardışık Kolon İmalatı", description: "Dama düzeninde yan yana olan kolonlar aynı anda yapılmaz. En az 2 kolon aralığı bırakılır ve 24 saatlik priz süresinin ardından ara kolonlar tamamlanır." },
      { title: "Kesintisiz Spoil (Çamur Dönüşü) ve Basınç Kontrolü", description: "400-600 bar basınçla jetleme yapılırken kuyu ağzından spoil geri dönüşü anlık takip edilir. Çamur dönüşünün kesilmesi durumunda hidro-fraktür ve kabarmayı önlemek için enjeksiyon derhal kesilir." },
      { title: "Karot Alımı ve Kalite Doğrulama Raporu", description: "Sertleşen jet grout kolonlarından karot alınarak (UCS - serbest basınç dayanımı) test edilir ve mühendislik onay raporuyla teslim edilir." }
    ],
    technicalNote: "Bir jet grout uygulamasının başarısı yalnızca kullanılan çimento miktarına değil, uygulanan kinetik enerjiye (basınç ve çekme hızı) ve risk yönetimine bağlıdır. FHWA-HRT-13-046 yönergelerine göre, yüzeye sürekli çamur (spoil) dönüşünün kesilmesi jetlemenin durdurulmasını gerektirir; aksi takdirde yanal zemin kırılmaları (hidro-fraktür) ve tehlikeli zemin kabarmaları (heave) oluşur. YER6; bina altı projelerinde elektrikli makineler, düşük gürültülü çalışma, şaşırtmalı döküm disiplini ve proje özelindeki enstrümantasyon planıyla yapısal hareket riskini izlemeyi; gerekli görülen sahalarda deneme kolonu uygulamayı esas alır.",
    faq: [
      { question: "Jet grout hangi zemin türlerinde uygulanır?", answer: "Jet grout; kum, silt, kil ve karma yapılı zeminlerde uygulanabilir. Ancak çok katı kil veya yoğun çakıllı (boulder) zeminlerde, yüksek kinetik enerji (Triple sistem) ve özel nozul tasarımları gerektirir." },
      { question: "Bina altı jet grout uygulaması mevcut binaya veya cihazlara zarar verir mi?", answer: "Jet grout, darbeli veya çakma sistemlere göre düşük titreşimli bir hidro-enjeksiyon yöntemidir. Bununla birlikte her saha kendine özgüdür; şaşırtmalı döküm sekansı, basınç kontrolü ve inklinometre/oturma takibiyle oturma, kabarma ve çatlak riskleri izlenerek azaltılır." },
      { question: "Neden bina altı uygulamalarda elektrikli jet grout makinesi tercih edilir?", answer: "Bodrum katlarında, veri merkezlerinde ve havalandırması kısıtlı santral binalarında elektrikli makineler uygulama noktasında doğrudan dizel egzoz emisyonu oluşturmaz; havalandırma ve iş güvenliği planını destekler." },
      { question: "Bina altı uygulamalarda oturma (settlement) ve kabarma (heave) riski nasıl önlenir?", answer: "Killi zeminlerde yüksek enjeksiyon basıncının tetiklediği kabarma (heave) riskine karşı enjeksiyon debisi kademeli ayarlanır ve spoil (çamur) çıkışı izlenir. Oturmayı (settlement) engellemek için ise yan yana kolonlar aynı anda imal edilmez (şaşırtmalı döküm) ve taze kolona 24 saat priz beklenir." },
      { question: "Teknik teklif ve risk değerlendirmesi için hangi belgeler gereklidir?", answer: "Sağlıklı bir teklif hazırlanabilmesi için: 1) Akredite Zemin Etüt Raporu (Sondaj, SPT, CPT), 2) Mevcut Temel ve Mimari/Statik Projeler, 3) Bodrum kat tavan yükseklikleri ve mevcut kuyu/temel kotlarının paylaşılması gereklidir. YER6 Mühendisleri yapıya özel karar verir." },
      { question: "Kesintisiz çalışan hassas tesislerde uygulama nasıl yürütülür?", answer: "Kesintisiz çalışan tesislerde elektrikli makineler, gürültü kontrolü, düşük titreşimli delgi ve enstrümantasyon birlikte planlanır. İşletme sürekliliği hedefi; tesis yönetimiyle hazırlanacak çalışma izinleri, durdurma eşikleri ve acil durum planına bağlıdır." },
      { question: "Jet grout kolonlarının kalitesi nasıl test edilir?", answer: "Saha imalatından 7-28 gün sonra kolonlardan elmas uçlu karot alınır. Laboratuvarda UCS (Tek Eksenli Basınç) testi yapılarak tasarım mukavemetinin sağlanıp sağlanmadığı belgelenir." }
    ]
  },
  {
    slug: "dsm",
    key: "svc_dsm",
    icon: Layers3,
    title: "DSM (Deep Soil Mixing)",
    summary: "YER6, derin zemin karıştırma yöntemiyle taşıma kapasitesi ve oturma performansı hedeflerine yönelik DSM uygulamaları gerçekleştirir.",
    detail: "DSM (Derin Zemin Karıştırma), mevcut zemin ile çimento bazlı bağlayıcıların yerinde mekanik olarak karıştırılarak zemin-çimento (soil-cement) kolonları oluşturulması işlemidir. Yüksek yeraltı suyuna sahip yumuşak kil, silt ve gevşek kumlu sahalarda, yanal yayılmayı ve sıvılaşmayı engellemek, oturmayı azaltmak ve taşıma gücünü homojen biçimde artırmak için en ekonomik ve seri yöntemdir.",
    specs: ["Mekanik karıştırma enerjisi (BRN) kontrolü", "Laboratuvar karışım (UCS) tasarımı", "Kolon kalite ve homojenlik kaydı"],
    applications: [
      "Yumuşak killi zeminlerde lojistik depo ve endüstriyel tesis platformu",
      "Otoyol, demiryolu ve köprü yaklaşım dolgularında oturma kontrolü",
      "Sıvılaşmaya yatkın sahalarda grid (kafes) veya blok tipi zemin stabilizasyonu",
      "Liman ve kıyı yapılarının arkasında yanal toprak basıncını azaltma",
      "Derin kazılarda yeraltı suyu kesici perde (cutoff wall) imalatı"
    ],
    advantages: [
      "Zemini dışarı atmadan yerinde kullanarak çevresel etkiyi ve hafriyat maliyetini düşürür.",
      "Geniş alanlı platform iyileştirmelerinde jet grout veya fore kazığa göre daha hızlı ve ekonomiktir.",
      "Yeraltı suyu problemini çözer, kapalı sistem karıştırmayla temiz bir şantiye ortamı sağlar.",
      "Organik killi veya turbalı zeminlerde çimento-kireç karışımlarıyla özel tasarım yapılabilir.",
      "Blade Rotation Number (BRN) takibiyle karıştırma enerjisi izlenir ve kolon homojenliği için ölçülebilir kalite kaydı oluşturulur."
    ],
    processSteps: [
      { title: "Saha Karakterizasyonu ve Karışım Tasarımı", description: "Zemin numuneleri üzerinde laboratuvarda farklı çimento dozajları denenerek projenin hedef mukavemet (UCS) değeri tasarlanır." },
      { title: "Pilot İmalat ve Ekipman Kalibrasyonu", description: "Sahada deneme kolonları imal edilerek en uygun dönüş hızı (rpm) ve ilerleme hızı belirlenir." },
      { title: "Mekanik Karıştırma (Delgi)", description: "Çift veya tek milli DSM bıçakları zemini parçalayarak hedef derinliğe inerken, alttan düşük basınçlı çimento şerbeti basılır." },
      { title: "Yukarı Çekme ve Homojenizasyon", description: "Hedef derinliğe ulaşıldıktan sonra ekipman ters yönde dönerek yukarı çekilir; zemin ile çimento homojen şekilde karışarak kolon formunu alır." },
      { title: "Kalite Kabul ve Karot Testleri", description: "Tamamlanan kolonlardan 28 gün sonra karot alınarak tek eksenli basınç (UCS) testi ile tasarım hedefinin yakalandığı raporlanır." }
    ],
    technicalNote: "DSM tasarımında kritik mühendislik parametrelerinden biri karıştırma enerjisidir (Mixing Energy). Kolon dayanımı; çimento miktarının yanı sıra bıçak dönüş sayısı (Blade Rotation Number), zemin türü ve bağlayıcı reçetesinden etkilenir. Bağlayıcı seçimi laboratuvar karışım çalışmaları ve deneme kolonlarıyla proje özelinde doğrulanmalıdır.",
    faq: [
      { question: "DSM ile Jet Grout arasındaki mühendislik farkı nedir?", answer: "Jet grout yüksek kinetik basınç (400-600 bar) ile zemini parçalar; DSM ise 10-20 bar gibi düşük basınçta, zemini mekanik kanatlarla (blade) karıştırır. DSM, geniş kil yataklarında (ör. körfez bölgeleri) daha homojen ve ekonomikken, jet grout dar alanlarda veya sert katmanları aşmada etkilidir." },
      { question: "DSM (Deep Soil Mixing) hangi derinliğe kadar uygulanabilir?", answer: "Kullanılan ekipmanın (tek milli veya çift milli) kapasitesine göre 25-30 metre derinliğe kadar etkili bir şekilde zemin-çimento kolonları oluşturulabilir." },
      { question: "DSM kolonlarının taşıma kapasitesi nasıl belirlenir?", answer: "Laboratuvarda Unconfined Compressive Strength (UCS) testleriyle belirlenir. Tipik DSM kolonları, zemin türüne ve çimento dozajına bağlı olarak 1.0 MPa ile 3.0 MPa arasında karakteristik basınç dayanımına ulaşır." },
      { question: "DSM zemin sıvılaşmasını nasıl engeller?", answer: "Sıvılaşma beklenen kumlu/siltli sahalarda DSM kolonları birbirine bitişik (kesişen) olarak grid (kafes) şeklinde imal edilir. Bu kafes, içeride kalan zemini hapsederek (confinement) makaslama gerilmesini alır ve yanal yayılmayı engeller." },
      { question: "DSM uygulaması yapan firmalar neye göre seçilmeli?", answer: "DSM operasyonunda kaliteyi belirleyen şey; makinenin karıştırma enerjisini dijital olarak takip etmesi (data logger) ve firmanın laboratuvar karışım tasarım yeteneğidir. YER6, çift milli yüksek kapasiteli DSM makine parkı ve kalite disipliniyle öne çıkar." }
    ]
  },
  {
    slug: "fore-kazik",
    key: "svc_fore_kazik",
    icon: Building2,
    title: "Fore Kazık",
    summary: "YER6, ağır yapı yüklerinin derin taşıyıcı tabakalara aktarılması ve derin kazı desteği için projeye özel fore kazık uygulamaları gerçekleştirir.",
    detail: "Fore kazık (bored pile) sistemleri; büyük yapı temelleri, viyadükler ve derin kazı destek sistemlerinde zemin profili ve yapısal yüklere göre tasarlanır. Bentonit/polimer destekli delgi, muhafaza borusu (casing) ve tremie betonlama süreçleri proje şartnamesi ile ilgili uygulama standartlarına göre planlanmalıdır.",
    specs: ["Rotary ve DTH delgi kapasitesi", "Sürekli dikeylik (vertikallik) kontrolü", "Crosshole Sonic Logging (CSL) bütünlük testi"],
    applications: [
      "Yüksek katlı ve karma kullanımlı yapıların derin temel sistemleri",
      "Kavşak, viyadük ve köprü ayağı temellerinde yüksek eksenel yük transferi",
      "Derin kent içi kazılarda ankrajlı kazıklı perde (kesişen kazık), diyafram duvar ve palplanş (sheet pile) sistemleriyle entegre imalatı",
      "Endüstriyel santral, baca ve ağır makine temelleri",
      "Liman, iskele ve sahil yapılarında suya dayanıklı temel teşkili"
    ],
    advantages: [
      "Uygun delgi ekipmanı ve proje tasarımıyla kil, kum, çakıl ve kaya birimlerinde eksenel ve yanal yükler için uygulanabilme.",
      "Non-displacement bir yöntem olduğu için çakma sistemlerine göre düşük titreşimle uygulanabilir; komşu yapı etkileri saha izleme planıyla kontrol edilir.",
      "Ekipman ve proje koşullarına bağlı geniş çap seçenekleriyle farklı yük senaryolarına uyarlanabilir.",
      "Çakma kazıkların aksine, istenilen kota kadar sert kaya soketlenmesine (rock socketing) izin verir.",
      "İmalat sırasında beton döküm hacmi ve kuyu dikeyliği izlenerek yüksek doğruluk elde edilir."
    ],
    processSteps: [
      { title: "Aplikasyon ve Kılavuz (Muhafaza) Borusu", description: "Kazık merkezleri hassas şekilde aplikasyon edildikten sonra, yüzeydeki yıkılmaları önlemek için kılavuz kılıf (casing) zemine sürülür." },
      { title: "Rotary Delgi (Bentonit/Polimer)", description: "Yüksek yeraltı suyu olan zeminlerde kuyu stabilitesini korumak için bentonit çamuru kullanılarak hedef derinliğe kadar rotary veya bucket ile kazı yapılır." },
      { title: "Donatı Kafesi İndirilmesi", description: "Pas payları takılmış donatı kafesi, kuyu cidarını zedelemeden dikkatlice kuyuya indirilir. Dikeylik (plumbness) lazer ile kontrol edilir." },
      { title: "Tremie Yöntemi ile Beton Dökümü", description: "Beton, suyun veya bentonitin altında kalmayacak şekilde dipten yukarı tremie borusuyla dökülür. Tremie borusu sürekli beton içinde (min. 3 metre) tutulur." },
      { title: "Bütünlük (Integrity) ve Taşıma Testleri", description: "Beton prizini aldıktan sonra Kazık Bütünlük Testi (PIT) veya Crosshole Sonic Logging (CSL) ile kazık cidarında boyun verme veya segregasyon olup olmadığı test edilir." }
    ],
    technicalNote: "Fore kazık kalitesi, delgi hızından çok beton döküm kalitesine bağlıdır. DFI/EFFC kılavuzlarına göre; tremie borusunun beton dökümü esnasında en az 3 metre betonun içinde gömülü kalması, soğuk derz ve çamur sıkışması riskini engellemek için zorunludur. Ayrıca Low-strain (PIT) testleri süreklilik hakkında bilgi verirken, kazığın taşıma kapasitesi ancak Statik veya Dinamik Yükleme Testleri ile doğrulanabilir.",
    faq: [
      { question: "Fore kazık ile mini kazık ve zemin çivisi arasındaki mühendislik farkı nedir?", answer: "Fore kazık; genellikle 60-250 cm çaplarında, yüzlerce ton eksenel yük taşıyabilen ana taşıyıcı elemanlardır. Mini kazık ise 15-30 cm çaplı, çimento enjeksiyonu ile oluşturulan destek elemanlarıdır. Zemin çivisi (soil nail) ise daha çok şev stabilitesi ve ankrajlı iksa sistemlerinde (diyafram duvar vb. ile) yüzey dayanımını artırmak için yatay veya açılı düzlemde uygulanır." },
      { question: "Fore kazık hangi zemin türlerinde, ne kadar derine uygulanabilir?", answer: "Fore kazık; kil, kum, çakıl ve uygun kaya delgi ekipmanlarıyla kaya formasyonlarında uygulanabilir. Ulaşılabilir derinlik; ekipman kapasitesi, kazık çapı, zemin/kaya profili, yeraltı suyu ve saha lojistiğine göre proje özelinde belirlenir." },
      { question: "Fore kazık betonunun kalitesi (bütünlüğü) nasıl doğrulanır?", answer: "ICE SPERW spesifikasyonlarına uygun olarak; düşük gerinimli süreklilik testi (PIT) veya donatı kafesine bağlanan borular yardımıyla ultrasonik dalga yansımalarını ölçen Crosshole Sonic Logging (CSL) testi ile doğrulanır." },
      { question: "Yeraltı suyu yüksek olan sahalarda kuyu nasıl göçmez?", answer: "Sulu ve kendini tutamayan (kohezyonsuz) zeminlerde, hidrostatiği dengelemek için kuyu içine Bentonit çamuru veya sentetik Polimer basılır, ya da tamamen çelik muhafaza borusu (casing) sürülerek kazı yapılır." },
      { question: "Fore kazık firması ararken nelere dikkat edilmelidir?", answer: "Fore kazık operasyonunda kaliteyi belirleyen temel unsurlar; uygun tork kapasitesine sahip ekipman, bentonit/tremie süreçlerindeki teknik disiplin ve imalat sonrası PIT/CSL testleriyle işin belgelenebilmesidir. YER6, proje şartnamesine uygun üretim ve kalite kontrol kayıtlarını esas alır." }
    ]
  },
  {
    slug: "mini-kazik",
    key: "svc_mini_kazik",
    icon: Mountain,
    title: "Mini Kazık",
    summary: "Sınırlı erişimli alanlarda güçlendirme, underpinning ve hassas temel çözümleri.",
    detail: "Mevcut yapı temellerinde düşük titreşimli, güvenli ve kontrollü kapasite artışı.",
    specs: ["Kompakt ekipman", "Çelik donatı seçenekleri", "Enjeksiyonlu imalat"],
    applications: [
      "Mevcut yapı temellerinde underpinning (temel altı takviyesi)",
      "Tarihi yapı ve anıt restorasyon projelerinde temel güçlendirme",
      "Düşük tavan yüksekliğine sahip bodrum ve yeraltı geçişleri",
      "Eğimli arazilerde şev stabilitesi ve toprak ankrajı",
      "Bina içi veya yapıya bitişik sınırlı alanlarda güçlendirme",
      "Yenileme projelerinde mevcut temelin taşıma kapasitesi artırımı"
    ],
    advantages: [
      "Kompakt ekipmanla dar, kapalı ve düşük tavanlı alanlarda uygulanır",
      "Mevcut yapıya minimum titreşim ve hasar riski",
      "Farklı açı ve eğimde delgi yapılabilir",
      "Yüksek dayanımlı çelik donatı ile etkin taşıma kapasitesi",
      "Enjeksiyonlu imalatla zemin-kazık ara yüzey kapasitesi artırılır",
      "Aktif trafiğin altında veya yakınında güvenle uygulanabilir"
    ],
    processSteps: [
      { title: "Geoteknik Değerlendirme ve Tasarım", description: "Zemin koşulları, yapı yükü ve güçlendirme hedefleri incelenerek mini kazık çapı, uzunluğu ve düzeni belirlenir." },
      { title: "Erişim ve Platform Hazırlığı", description: "Sınırlı alana uygun kompakt ekipman yerleştirilir; yapıya yakın çalışmada titreşim izleme sistemi kurulur." },
      { title: "Delgi", description: "Küçük çaplı (100–300 mm) delgi yapılır; zemin koşullarına göre muhafaza borusu veya kuru yöntem uygulanır." },
      { title: "Donatı ve Enjeksiyon", description: "Çelik boru veya çubuk donatı kuyuya yerleştirilir; çimento şerbeti enjekte edilerek zemin-donatı bağı güçlendirilir." },
      { title: "Yük Aktarım Sistemi ve Test", description: "Mevcut temel ile mini kazık arasındaki yük aktarım detayı tamamlanır; uygunluk yükleme testi yapılır." }
    ],
    technicalNote: "Mini kazık uygulamasında delgi açısı ve enjeksiyon yöntemi, güçlendirme amacına göre değişir. Underpinning çalışmalarında yapı yükünün güvenli bir şekilde mini kazıklara aktarılması için etaplı uygulama planlaması şarttır. Küçük saha alanlarında ekipman konfigürasyonu ve beton karışım lojistiği dikkatli planlanmalıdır.",
    faq: [
      { question: "Mini kazık ne zaman tercih edilir?", answer: "Mevcut yapı altında underpinning, dar alanlarda güçlendirme, tarihi yapı restorasyonu ve kompakt ekipman gereken her durumda mini kazık öncelikli seçenektir." },
      { question: "Mini kazık hangi çaplarda yapılabilir?", answer: "Genellikle 100 mm ile 300 mm çapında uygulanır. Özel projelerde 400 mm'ye kadar çıkılabilir. Çap, taşıma kapasitesi gereksinimine ve sahaya erişime göre seçilir." },
      { question: "Mini kazık mevcut bir yapının altında uygulanabilir mi?", answer: "Evet, bu mini kazığın en sık kullanıldığı durumdur. Yapı içinde ya da çevresinde kompakt ekipmanlarla, mevcut temele zarar vermeden uygulama yapılabilir." },
      { question: "Mini kazık ne kadar yük taşıyabilir?", answer: "Çap, uzunluk, zemin tipi ve enjeksiyon yöntemine bağlı olarak genellikle 30–500 kN arasında eksenel kapasite elde edilebilir. Tasarım hesapları projeye özgü yapılır." },
      { question: "Mini kazık yapan firma seçerken nelere dikkat edilmeli?", answer: "Dar alan/underpinning tecrübesi, enjeksiyonlu imalat kalitesi, ekipman uygunluğu, yükleme testi ve referans projeleri belirleyicidir. YER6, Ankara merkezli olarak Türkiye geneli ve yurt dışında mini kazık ve underpinning uygular." },
      { question: "Mini kazık hizmetinizi hangi şehirlere sunuyorsunuz?", answer: "Türkiye genelinde ve yurt dışındaki projelerde, özellikle dar alan ve underpinning gereksinimlerine yönelik mini kazık hizmetleri sağlamaktayız." }
    ]
  },
  {
    slug: "ankraj",
    key: "svc_ankraj",
    icon: Anchor,
    title: "Ankraj",
    summary: "Derin kazılar, iksa perdeleri ve stabilizasyon işleri için aktif pasif ankraj sistemleri.",
    detail: "Proje yüklerine göre delgi, enjeksiyon, germe ve kabul testi süreçlerinin yönetimi.",
    specs: ["Ön germeli ankraj", "Kabul ve uygunluk testleri", "Korozyon koruması"],
    applications: [
      "İksa perde sistemlerinde yanal yük aktarımı",
      "Derin kazılarda zemin ankrajlı destekleme",
      "Şev ve heyelan önleme stabilizasyon ankrajları",
      "Yer altı geçişi ve tünel destek sistemleri",
      "Zemin çivisi (soil nail) uygulamaları",
      "Yüzdürme kuvvetine karşı yapı altı basınç ankrajları"
    ],
    advantages: [
      "İksa sistemine aktif ön yükleme ile deplasman kontrolü",
      "Farklı açı ve yönde delgi imkânı",
      "Korozyon korumalı tasarımla uzun ömürlü kalıcı ankraj",
      "Ön germeli sistemle yapı yüklenmesi öncesinde güvence",
      "Kabul ve uygunluk testleriyle her ankrajın performansı doğrulanır",
      "Geçici veya kalıcı ankraj seçenekleri proje hedefine göre uyarlanır"
    ],
    processSteps: [
      { title: "Tasarım ve Geoteknik Model", description: "Zemin profili, yapı yükleri ve güvenlik gereksinimleri doğrultusunda ankraj uzunluğu, açısı, kapasitesi ve düzeni belirlenir." },
      { title: "Delgi", description: "Belirlenen açı ve derinliğe göre rotary veya percussion yöntemiyle delgi yapılır; delgi suyu veya hava basıncı ile delik temizlenir." },
      { title: "Tendon Yerleşimi", description: "Strand veya çubuk tendon kılıfla birlikte kuyuya yerleştirilir; grout tüp ve drenaj detayları tamamlanır." },
      { title: "Enjeksiyon ve Kürleme", description: "Çimento grout enjekte edilir ve kürleme süresi beklenir. Kalıcı ankrajlarda koruma kılıfı bütünlüğü kontrol edilir." },
      { title: "Germe, Kilitleme ve Kabul Testi", description: "Her ankraj proje yüküne göre gerilir, kilitlenir. Kabul testi ile uygunluk doğrulanır; sonuçlar teslim dosyasına eklenir." }
    ],
    technicalNote: "Ankraj tasarımında geoteknik sınır, grout süresi ve ön yükleme değerleri dikkatli belirlenmeli; zemin kayması ve sürünme potansiyeli değerlendirilmelidir. Kalıcı ankrajlarda çift koruma kılıfı (double corrosion protection) standarttır. Kabul testi yükleri genellikle tasarım yükünün 1,25 katını karşılamalıdır.",
    faq: [
      { question: "Geçici ve kalıcı ankraj arasındaki fark nedir?", answer: "Geçici ankrajlar yalnızca inşaat sürecinde kullanılır ve genellikle 2 yıl içinde serbest bırakılır. Kalıcı ankrajlar yapının ömrü boyunca aktif kalır ve çift korozyon koruması gerektirir." },
      { question: "Ankraj kabul testi nedir?", answer: "Her ankrajın proje yüküne ulaşıp ulaşmadığını ve deformasyon davranışını doğrulayan standarttır. EN 1537 normları çerçevesinde uygunluk ve sondaj testleri uygulanır." },
      { question: "Ankraj hangi zeminlerde uygulanabilir?", answer: "Kaya, sıkı kum ve çakıl gibi zemin türlerinde yüksek kapasiteli ankraj elde edilir. Gevşek zemin ve yumuşak kilde ankraj uzunluğu ve sayısı artırılarak hedef kapasite sağlanabilir." },
      { question: "Ankrajlı iksa sistemi ne zaman seçilir?", answer: "Komşu yapılara yakın ve dar alanda kazı yapılması, yüksek yeraltı suyu, derin kazı (>6 m) ve çevre yapılara deformasyon limiti kısıtlaması olduğunda ankrajlı iksa sistemi tercih edilir." },
      { question: "Ankraj yapan firma seçerken nelere dikkat edilmeli?", answer: "Delgi ve enjeksiyon kalitesi, öngerme (germe) ekipmanı, kabul/çekme testi disiplini, korozyon koruması ve referans projeleri belirleyicidir. YER6, Ankara merkezli olarak Türkiye geneli ve yurt dışında ankraj uygular." },
      { question: "Ankraj ve iksa çalışmalarınız hangi illerde mevcut?", answer: "Türkiye'nin 81 ilinde şev stabilizasyonu ve ankrajlı iksa sistemleri uyguluyor; yurt dışında da güvenilir çözüm ortağı olarak görev alıyoruz." }
    ]
  },
  {
    slug: "iksa-sistemleri",
    key: "svc_iksa",
    icon: ShieldCheck,
    title: "İksa Sistemleri",
    summary: "Kent içi derin kazılarda diyafram, kazıklı perde, ankraj ve kuşak entegrasyonu.",
    detail: "Yanal deplasman, komşu yapı etkisi ve saha lojistiğini birlikte düşünen tasarım.",
    specs: ["Kazıklı perde", "Kuşak kirişleri", "Enstrümantasyon uyumu"],
    applications: [
      "Kent içi derin kazı ve otopark/bodrum kat inşaatı",
      "Metro, raylı sistem tünel girişi ve istasyon kazıları",
      "Komşu yapılara yakın hassas saha kazıları",
      "Sanayi, enerji ve altyapı kazıları",
      "Derin temel çukurları ve silo kazıları",
      "Kıyı ve su kenarı kazıları ile zemin ıslahı"
    ],
    advantages: [
      "Komşu yapılara ve altyapıya minimum etkiyle derin kazı imkânı",
      "Deplasman izleme ile gerçek zamanlı güvenlik kontrolü",
      "Farklı zemin koşullarına uygun çözüm yelpazesi",
      "Ankraj ve kuşak kombinasyonuyla geniş açıklıklara çözüm",
      "Aşamalı kazı planlamasıyla inşaat programı optimizasyonu",
      "Kazı tamamlandıktan sonra kalıcı yapı elemanı olarak kullanılabilir"
    ],
    processSteps: [
      { title: "Geoteknik Tasarım ve Deplasman Analizi", description: "Zemin profili, yapı yükleri ve deplasman limitleri doğrultusunda perde tipi, derinliği ve destekleme sistemi belirlenir." },
      { title: "İksa Perdesi İmalatı", description: "Fore kazık, diyafram duvar veya çelik profil perde seçeneğine göre imalat gerçekleştirilir." },
      { title: "Ankraj veya Strüt Uygulaması", description: "Tasarım yükleri doğrultusunda ankrajlar veya strütler yerleştirilir; kuşak kirişleri monte edilir." },
      { title: "Aşamalı Kazı", description: "Proje planına göre katlar halinde kazı yapılır; her katta ankraj germe ve deplasman ölçümü gerçekleştirilir." },
      { title: "İzleme ve Teslim", description: "İnklinometre, referans noktaları ve yapısal izleme verileri kayıt altına alınır; teslim dosyası hazırlanır." }
    ],
    technicalNote: "İksa sistemi tasarımında kritik parametre, izin verilebilir yanal deplasman limitidir. Kent içi projelerde bu limit komşu yapıların hassasiyetine göre genellikle 10–25 mm aralığında tutulur. Enstrümantasyon planı, kazı programına paralel olarak yürütülmeli; ölçüm verileri alarm eşikleriyle birlikte değerlendirilmelidir.",
    faq: [
      { question: "Derin kazı için hangi iksa sistemi seçilir?", answer: "Zemin türü, kazı derinliği, komşu yapı durumu ve bütçeye göre fore kazık perde, diyafram duvar veya çelik profil perde tercih edilir. Her seçenek farklı maliyet ve performans dengeleri sunar." },
      { question: "İksa perdesi kalıcı yapı elemanı olarak kullanılabilir mi?", answer: "Evet. Diyafram duvar ve fore kazık perdeler çoğu zaman bodrum duvarı veya su yalıtım perdesi olarak kalıcı yapı sistemine entegre edilir." },
      { question: "Komşu binalara zarar verir mi?", answer: "Doğru tasarım, ankraj ön yüklemesi ve deplasman izleme planı ile komşu yapılara deformasyon iletimi kontrol altında tutulabilir. İzleme sistemi şüpheli okumada alarm verir." },
      { question: "İksa sisteminde izleme neden önemlidir?", answer: "İnklinometre ve referans noktası ölçümleri, perde deplasman davranışını gerçek zamanlı takip eder. Tasarım dışı deplasman erken tespit edilerek önlem alınabilir." },
      { question: "İksa yapan firma seçerken nelere dikkat edilmeli?", answer: "Derin kazı ve komşu yapı tecrübesi, fore kazık/diyafram/ankraj kapasitesi, enstrümantasyon (izleme) yaklaşımı, statik tasarım desteği ve referans projeleri belirleyicidir. YER6, Ankara merkezli olarak Türkiye geneli ve yurt dışında iksa sistemleri uygular." },
      { question: "İksa sistemleri uyguladığınız alanlar nerelerdir?", answer: "Başkent Ankara'dan yönettiğimiz operasyonlarla, Türkiye genelindeki kent içi derin kazı ve yurt dışı altyapı projelerinde iksa desteği sunmaktayız." }
    ]
  },
  {
    slug: "zemin-iyilestirme",
    key: "svc_zemin_iy",
    icon: Sparkles,
    title: "Zemin İyileştirme Yöntemleri",
    summary: "Oturma, sıvılaşma ve düşük taşıma gücü sorunlarına karşı uluslararası standartlarda projelendirilen zemin iyileştirme yöntemleri.",
    detail: "Zemin iyileştirme yöntemleri; yapı yüklerini güvenle taşıyamayan, sıvılaşma potansiyeli yüksek veya aşırı oturma riski taşıyan zeminlerin fiziksel veya kimyasal özelliklerinin değiştirilmesidir. YER6, FHWA, USACE ve ISSMGE standartlarını referans alarak; derin karıştırma (DSM), jet grout, taş kolon ve vibro kompaksiyon yöntemlerini tek bir merkezden, mühendislik disipliniyle projelendirir ve uygular.",
    specs: ["Sıvılaşma riskine karşı taş kolon ve drenaj", "Oturma kontrolü için DSM ve Jet Grout", "Yüksek doğruluklu zemin kalite kontrolü"],
    applications: [
      "Taşıma gücü düşük siltli ve killi zeminlerde temel güçlendirme",
      "Aktif deprem faylarına yakın (TBDY 2018) bölgelerde sıvılaşma mitigasyonu (önlemi)",
      "Liman, otoyol ve endüstriyel platformlarda farklı oturma (diferansiyel) kontrolü",
      "Dolgu ve organik içerikli gevşek zeminlerde taşıma kapasitesi artırımı",
      "Mevcut yapıların altında titreşimsiz temel güçlendirme (underpinning)",
      "Yeraltı suyunun yoğun olduğu alüvyal sahalarda su geçirimsizlik perdesi"
    ],
    advantages: [
      "Zemin türüne (kum, kil, silt) en uygun yöntemin veya hibrit çözümlerin (ör. Taş Kolon + Düşey Dren) tek projede entegre edilmesi",
      "Zemin etüt raporundaki geoteknik verilere (SPT, CPT) dayalı spesifik performans tasarımı",
      "Geleneksel derin temellere (fore kazık vb.) kıyasla geniş alanlarda çok daha ekonomik ve hızlı sonuç",
      "Dijital üretim takip sistemleriyle iyileştirme etkinliğinin anlık saha doğrulamasının yapılması",
      "Sıvılaşma kaynaklı yanal yayılma (lateral spreading) ve taban kabarması risklerinin minimize edilmesi",
      "İmalat sonrasında TBDY 2018 ve uluslararası normlara uygun yükleme, karot ve kalite doğrulama raporlarının sunulması"
    ],
    processSteps: [
      { title: "Zemin Modeli ve Geoteknik Analiz", description: "Mevcut sondaj ve laboratuvar deneyleri (SPT, CPT, atterberg limitleri) incelenerek yeraltı su seviyesi, taşıma gücü ve sıvılaşma risk haritası oluşturulur." },
      { title: "Yöntem Seçimi ve Optimizasyon", description: "İnce taneli zeminler için DSM veya Jet Grout, granüler zeminler için Vibro Kompaksiyon veya Taş Kolon seçilerek mühendislik hesaplamaları yapılır." },
      { title: "Saha Pilot (Deneme) Uygulaması", description: "Tam ölçekli imalata geçmeden önce deneme kolonları yapılır; enjeksiyon basıncı, karışım oranı ve dönüş hızı (BRN) gibi parametreler saha gerçeğine kalibre edilir." },
      { title: "Dijital Takip ile İmalat", description: "Yer altındaki üretim parametreleri (basınç, debi, rotasyon) makine sensörleriyle eş zamanlı takip edilir, sürekli kayıt altına alınır." },
      { title: "Kalite Kabul ve Performans Testi", description: "Karot alımı (UCS testleri), plaka yükleme testleri ve sismik/akustik testler ile zemin iyileştirmesinin hedeflenen rijitliğe ulaştığı belgelenir." }
    ],
    technicalNote: "Zemin iyileştirme projelendirmesinde, yalnızca m/tül maliyeti değil; zemin plastisitesi, yer altı suyu hızı ve kullanılacak bağlayıcının homojenliği dikkate alınmalıdır. Örneğin ince taneli siltli kumlarda (fines-rich), uluslararası araştırmalar (Missouri S&T, BYU) taş kolonların tek başına yeterli olmadığını, dikey drenlerle (wick drain) desteklenerek boşluk suyu basıncının sönümlenmesi gerektiğini kanıtlamıştır. YER6, her zemin tipine özel optimum yöntemi tasarlar.",
    faq: [
      { question: "En iyi zemin iyileştirme yöntemi hangisidir?", answer: "Tek bir 'en iyi' yöntem yoktur. Yöntem; zeminin dane boyutu dağılımına (kil, silt, kum, çakıl), yer altı su seviyesine ve yapısal yüklere göre belirlenir. Kil oranı yüksek zeminlerde DSM veya Jet Grout verimliyken, kumlu zeminlerde Vibro Kompaksiyon veya Taş Kolon öne çıkar." },
      { question: "Zemin iyileştirme sıvılaşmayı kesin olarak önler mi?", answer: "Doğru mühendislik hesaplamaları ve TBDY 2018 standartlarında uygulanan yöntemler (taş kolon, DSM grid sistemleri) deprem esnasında aşırı boşluk suyu basıncını sönümleyerek veya zemini rijitleştirerek sıvılaşmayı ve yanal yayılmayı büyük ölçüde önler." },
      { question: "Zemin iyileştirme firmaları arasında tercih yaparken neye dikkat etmeliyim?", answer: "Geoteknik firmanın tasarım yeterliliğine, deneme kolonu (pilot uygulama) yapıp yapmadığına, makine sensörleriyle veri takibi sunmasına ve imalat sonrası karot/yükleme testlerini raporlayabilme yetkinliğine dikkat edilmelidir. Uygulama bir 'beton dökümü' değil, mühendislik operasyonudur." },
      { question: "Jet grout ile DSM arasındaki tercih nasıl yapılır?", answer: "Jet grout yüksek basınçla (ör. 400-600 bar) çalışır, dar sahalarda ve su geçirimsizlik perdesi gereken kesişen kolonlarda (secant) idealdir. DSM ise mevcut zemini çimento şerbetiyle düşük basınçta mekanik olarak karıştırır; geniş alanlı platform iyileştirmelerinde (lojistik depo, liman) çok daha ekonomik ve homojen sonuç verir." },
      { question: "Mevcut yapıların (binaların) altına zemin iyileştirme yapılabilir mi?", answer: "Evet, mini kazık, mikro jet grout veya kompansasyon enjeksiyonu teknikleriyle yapının mevcut temellerine zarar vermeden titreşimsiz (underpinning) temel güçlendirme yapılabilir." },
      { question: "İyileştirilen zeminin kalitesi (dayanımı) nasıl test edilir?", answer: "Uluslararası şartnamelere (FHWA, USACE) göre; imalat sonrası karot numuneleri alınarak serbest basınç dayanım testleri (UCS), kalite kontrol testleri ve taşıma kapasitesi için plaka yükleme testleri uygulanır." }
    ]
  },
  {
    slug: "zemin-guclendirme",
    key: "svc_zemin_guc",
    icon: ShieldCheck,
    title: "Zemin Güçlendirme",
    summary: "Zayıf zeminlerde taşıma kapasitesi, oturma, sıvılaşma ve temel güvenliği sorunlarını saha verisine dayalı yöntemlerle yöneten bütünleşik geoteknik mühendislik hizmeti.",
    detail: "Zemin güçlendirme; yapı yükleri, zemin profili, yeraltı suyu ve deprem etkileri birlikte değerlendirilerek zeminin veya temel sisteminin performansını artırmayı amaçlar. Jet Grout, Deep Soil Mixing (DSM), taş kolon, zemin enjeksiyonu, mini kazık, fore kazık ve CFA kazık gibi yöntemler tek başına ya da hibrit çözüm olarak ele alınır. Yöntem ve üretim parametreleri; zemin etüdü, tasarım şartları, trial column veya deneme imalatı, kalite kontrol sonuçları ve yürürlükteki teknik standartlara göre belirlenir.",
    specs: ["Saha Verisine Dayalı Yöntem Seçimi", "TBDY 2018 ve Proje Şartnamesine Uygun Tasarım", "Data Logger, Deneme İmalatı ve Kalite Kontrol"],
    applications: [
      "Taşıma gücü düşük kil, silt, kum ve kontrolsüz dolgu zeminlerde temel güvenliğinin artırılması",
      "Deprem ve sıvılaşma riski bulunan alüvyon sahalarda zemin performansının iyileştirilmesi",
      "Sanayi tesisleri, depolar ve ağır makine temellerinde toplam ve farklı oturma kontrolü",
      "Mevcut yapılarda temel altı güçlendirme (underpinning) ve oturma riskinin yönetilmesi",
      "Derin kazı, iksa ve komşu yapı etkilerinde yanal deformasyonların sınırlandırılması",
      "Yeraltı suyu bulunan sahalarda su geçirimsizlik, taban stabilitesi ve kazı güvenliği"
    ],
    advantages: [
      "Tek Yönteme Bağlı Değildir: Zemin ve yapı performansına göre Jet Grout, DSM, kazık, enjeksiyon veya hibrit çözüm karşılaştırılır.",
      "Ölçülebilir Tasarım: Taşıma gücü, oturma, sıvılaşma ve deformasyon hedefleri proje kabul kriterleriyle tanımlanır.",
      "Saha Kalibrasyonu: Laboratuvar verileri, trial column ve deneme imalatlarıyla bağlayıcı dozajı ve üretim parametreleri doğrulanır.",
      "Dijital İzlenebilirlik: Uygun ekipmanda basınç, debi, tork, derinlik ve çekme hızı data logger ile kayıt altına alınır.",
      "Bağımsız Kalite Doğrulaması: UCS, karot, PIT, CSL, plaka veya static load test gibi deneyler yönteme göre planlanır.",
      "Yaşam Döngüsü Yaklaşımı: Uygulama hızı kadar çevre yapı etkisi, saha lojistiği, bakım ve toplam proje riski değerlendirilir."
    ],
    processSteps: [
      { title: "Zemin Modeli ve Risk Tanımı", description: "Sondaj, SPT, CPT/CPTu, laboratuvar verileri, yeraltı suyu ve yapı yükleri değerlendirilerek geoteknik model ile performans hedefleri belirlenir." },
      { title: "Yöntem Karşılaştırması", description: "Jet Grout, DSM, taş kolon, enjeksiyon, mini kazık, fore kazık ve CFA gibi uygulanabilir alternatifler teknik risk, metraj ve saha kısıtlarıyla karşılaştırılır." },
      { title: "Deneme İmalatı ve Tasarım Doğrulaması", description: "Gerekli projelerde trial column veya test kazığı uygulanır; çap, dayanım, süreklilik ve üretim parametreleri kabul kriterleriyle doğrulanır." },
      { title: "Kontrollü Saha Uygulaması", description: "Onaylı yöntem beyanı ve kalite planına göre üretim yapılır; kritik parametreler kayıt ve saha kontrolleriyle izlenir." },
      { title: "Kabul Testleri ve Teknik Rapor", description: "Yönteme uygun karot, UCS, PIT, CSL, plaka veya yükleme testleri değerlendirilerek as-built kayıtları ve kalite raporu hazırlanır." }
    ],
    technicalNote: "Zemin güçlendirmede üretim parametreleri ve uygulama yöntemleri; saha araştırmaları, tasarım şartları, deneme imalatları ve yürürlükteki teknik standartlara göre belirlenmelidir. Aynı yöntem farklı zemin profillerinde aynı çap, dayanım veya taşıma performansını garanti etmez. Tasarım kabulleri saha testleriyle doğrulanmalı; uygulama kayıtları ile kabul deneyleri birlikte değerlendirilmelidir.",
    faq: [
      { question: "Zemin güçlendirme ile zemin iyileştirme arasındaki fark nedir?", answer: "Uygulamada iki ifade sıkça birlikte kullanılır. Zemin iyileştirme çoğunlukla zeminin mühendislik özelliklerini değiştirir; zemin güçlendirme ise buna ek olarak kazık, ankraj veya underpinning gibi yapısal elemanlarla temel-zemin sisteminin performansını artırabilir." },
      { question: "En uygun zemin güçlendirme yöntemi nasıl seçilir?", answer: "Yöntem; zemin tabakaları, yeraltı suyu, yapı yükü, oturma ve sıvılaşma hedefleri, komşu yapılar, saha erişimi ve kalite doğrulama imkânları birlikte değerlendirilerek seçilir. Tek başına metrekare veya metre fiyatı yeterli seçim ölçütü değildir." },
      { question: "Mevcut binanın temeli güçlendirilebilir mi?", answer: "Evet. Saha ve temel geometrisine bağlı olarak mini kazık, mikro Jet Grout, zemin enjeksiyonu veya diğer underpinning çözümleri değerlendirilebilir. Uygulama sırası ve deplasman takibi mevcut yapı güvenliği için proje özelinde belirlenir." },
      { question: "Sıvılaşma riski hangi yöntemlerle azaltılır?", answer: "Dane dağılımı ve zemin geçirgenliğine göre DSM, Jet Grout, taş kolon, drenaj veya sıkıştırma yöntemleri tek başına ya da birlikte kullanılabilir. Performans dinamik zemin analizleri ve saha kabul testleriyle doğrulanmalıdır." },
      { question: "Zemin güçlendirme kalitesi nasıl kontrol edilir?", answer: "Seçilen yönteme göre data logger kayıtları, karot ve UCS, PIT, CSL, plaka yükleme, static load test, çap/süreklilik kontrolleri ve enstrümantasyon ölçümleri birlikte değerlendirilir." }
    ]
  },
  {
    slug: "geoteknik-danismanlik",
    key: "svc_geoteknik",
    icon: Compass,
    title: "Geoteknik Danışmanlık",
    summary: "Saha araştırması, tasarım denetimi, metraj optimizasyonu ve risk yönetimi.",
    detail: "Yatırım kararından uygulama teslimine kadar karar destekli geoteknik mühendislik.",
    specs: ["Zemin modeli", "Risk matrisi", "Uygulama metodolojisi"],
    applications: [
      "Yatırım öncesi zemin etüdü ve fizibilite desteği",
      "Geoteknik tasarım denetimi ve teknik onay",
      "İhale öncesi metraj tahmini ve maliyet optimizasyonu",
      "Zemin raporlarının değerlendirilmesi ve riske göre raporlama",
      "Uygulama sürecinde bağımsız teknik denetim",
      "Anlaşmazlık ve hasar durumu için uzman geoteknik raporu"
    ],
    advantages: [
      "Tasarım aşamasında risk erken tespit edilir, maliyet aşımı önlenir",
      "Bağımsız uzman görüşüyle yatırımcıya karar güvencesi",
      "Saha verisine dayalı metraj optimizasyonu proje maliyetini düşürür",
      "Uygulama metodolojisi dokümanları müteahhit ve denetçilere rehberlik eder",
      "Uluslararası standartlara uygunluk (EC7, TBDY, BS 8004) değerlendirilir",
      "Hasar ve hak ediş anlaşmazlıklarında teknik uzman desteği"
    ],
    processSteps: [
      { title: "Proje Tanımı ve Kapsam Belirleme", description: "Proje türü, risk düzeyi ve amaçlanan kullanım doğrultusunda danışmanlık kapsamı tanımlanır." },
      { title: "Zemin Araştırması ve Yorumlama", description: "Sondaj, arazi deneyleri (CPT, SPT, vane shear) ve laboratuvar testleri değerlendirilir; zemin modeli oluşturulur." },
      { title: "Risk Matrisi ve Tasarım Denetimi", description: "Geoteknik riskler sınıflandırılır; tasarım parametreleri ve yöntem seçimi bağımsız olarak denetlenir." },
      { title: "Metraj ve Maliyet Optimizasyonu", description: "Zemin koşullarına göre uygulama yöntemi ve metraj alternatifleri karşılaştırılır; en ekonomik çözüm önerilir." },
      { title: "Uygulama Desteği ve Sonuç Raporu", description: "Saha uygulaması sürecinde teknik destek sağlanır; sonuç raporu ve performans değerlendirmesi hazırlanır." }
    ],
    technicalNote: "Geoteknik danışmanlık, yalnızca zemin etüdü yorumu değil; tasarım, uygulama ve izleme süreçlerini kapsayan bütünleşik bir hizmettir. EC7 (Eurocode 7) ve TBDY 2018 gerekliliklerine uygun geoteknik kategori değerlendirmesi, risk yönetiminin temel adımıdır. Yatırım kararından önce alınan bağımsız geoteknik görüş, ilerleyen süreçte oluşabilecek maliyetlerin çok üzerinde değer yaratır.",
    faq: [
      { question: "Zemin etüdü olmadan proje yapılabilir mi?", answer: "Yasal olarak hayır; yapı ruhsatı için zemin etüdü zorunludur. Ancak yalnızca ruhsat için değil, gerçekçi bir zemin modeli oluşturmak için yeterli sayıda sondaj ve deney yapılması tasarım güvenilirliği açısından kritiktir." },
      { question: "Bağımsız geoteknik denetim ne zaman gereklidir?", answer: "Büyük ölçekli altyapı, yüksek yapı, jeolojik riski yüksek saha ve yatırımcının teknik güvence aradığı her projede bağımsız geoteknik denetim değer yaratır." },
      { question: "Zemin raporu yeterince iyi mi sorusuna nasıl cevap verilir?", answer: "Zemin raporunun yeterliliği; sondaj sayısı ve derinliği, deney türleri, zemin sınıflandırması ve tasarım parametrelerinin proje gereksinimlerini karşılayıp karşılamadığıyla değerlendirilir." },
      { question: "İhale öncesi geoteknik destek sağlayabilir misiniz?", answer: "Evet. YER6 ihale öncesi; zemin koşullarına göre yaklaşık metraj, yöntem önerisi ve risk değerlendirmesi sunarak teklif sürecini destekler." },
      { question: "Geoteknik danışmanlık firması seçerken nelere dikkat edilmeli?", answer: "Bağımsızlık, zemin etüdü yorumlama ve tasarım denetimi yetkinliği, EC7/TBDY 2018 bilgisi, saha tecrübesi ve referansları belirleyicidir. YER6, Ankara merkezli olarak Türkiye geneli ve yurt dışında geoteknik danışmanlık verir." },
      { question: "Geoteknik danışmanlık hizmetinizin kapsamı nedir?", answer: "Ankara merkezli ekibimiz, projelerin bulunduğu lokasyondan bağımsız olarak Türkiye geneline ve uluslararası firmalara tasarım denetimi ve geoteknik danışmanlık sunmaktadır." }
    ]
  },
  {
    slug: "zemin-civisi",
    key: "svc_zemin_civisi",
    icon: Mountain,
    title: "Zemin Çivisi",
    summary: "Kazı yüzeylerinin çelik çubuk ve püskürtme betonla in-situ güçlendirilmesiyle oluşturulan esnek destek sistemi.",
    detail: "Derin kazı şevlerinde ve yamaç stabilizasyonunda, kademeli kazıyla birlikte uygulanan ekonomik ve hızlı iksa çözümü.",
    specs: ["Çelik çubuk ve enjeksiyon aderansı", "Püskürtme beton yüzey kaplaması", "Kademeli kazı ile eş zamanlı imalat"],
    applications: [
      "Derin kazı şevlerinin güvenli hale getirilmesi",
      "Yamaç ve şev stabilizasyonu",
      "Mevcut istinat yapılarının güçlendirilmesi",
      "Geçici ve kalıcı kazı destek sistemleri",
      "Kentsel dönüşümde dar sahalı derin kazılar",
      "Karayolu ve altyapı yarma şevleri"
    ],
    advantages: [
      "Kademeli kazıyla eş zamanlı, hızlı ve ekonomik uygulama",
      "Dar ve erişimi kısıtlı sahalarda kompakt ekipmanla imalat",
      "Esnek geometriyle düzensiz kazı yüzeylerine uyum",
      "Düşük titreşim ile çevre yapılara duyarlı çalışma",
      "Kalıcı veya geçici sistem olarak tasarlanabilir",
      "Ankraj sistemleriyle birlikte hibrit çözüm imkânı"
    ],
    processSteps: [
      { title: "Tasarım ve Kademe Planı", description: "Zemin parametreleri ve kazı geometrisine göre çivi boyu, açısı, aralığı ve kademe yükseklikleri belirlenir." },
      { title: "Kademeli Kazı", description: "Kazı, tasarım kademe yüksekliğinde adım adım gerçekleştirilerek yüzey stabilitesi korunur." },
      { title: "Delgi ve Çivi Yerleşimi", description: "Her kademede delgi yapılır, çelik çubuk yerleştirilir ve enjeksiyonla zemine aderans sağlanır." },
      { title: "Hasır Donatı ve Püskürtme Beton", description: "Yüzeye hasır donatı serilir ve püskürtme beton (shotcrete) ile yüzey kaplaması oluşturulur." },
      { title: "Drenaj ve Kontrol", description: "Yüzey arkası drenaj boşaltması sağlanır; deplasman ve gerilme kontrolleriyle sistem izlenir." }
    ],
    technicalNote: "Zemin çivisi sistemi, ankrajlı iksa perdelerine göre daha esnek ve genellikle daha ekonomiktir; ancak kohezyonsuz, suya doygun veya çok yumuşak zeminlerde uygulanabilirliği sınırlıdır. Çivi boyu tipik olarak kazı yüksekliğinin 0,6–1,0 katı arasında, aralık ise 1,0–2,0 m arasında tasarlanır. Kalıcı sistemlerde korozyon koruması ve drenaj detayları kritik öneme sahiptir.",
    faq: [
      { question: "Zemin çivisi ile ankraj arasındaki fark nedir?", answer: "Ankraj öngermeli (aktif) bir sistemdir ve yükü serbest boyla derin sağlam zemine aktarır. Zemin çivisi ise öngermesiz (pasif) çalışır; kazı yüzeyini bir bütün olarak güçlendirir. Zemin çivisi çoğu durumda daha hızlı ve ekonomiktir." },
      { question: "Zemin çivisi hangi zeminlerde uygun değildir?", answer: "Kohezyonsuz gevşek kum, suya doygun zeminler ve çok yumuşak killerde uygulanabilirliği sınırlıdır; bu koşullarda ankraj veya kazıklı iksa değerlendirilir." },
      { question: "Kalıcı zemin çivisi sistemi yapılabilir mi?", answer: "Evet. Korozyon koruması, drenaj ve yüzey kaplaması uygun tasarlandığında zemin çivisi kalıcı istinat sistemi olarak kullanılabilir." },
      { question: "Uygulama ne kadar sürer?", answer: "Süre kazı yüksekliği, kademe sayısı ve zemin koşullarına bağlıdır; kademeli imalat kazıyla eş zamanlı ilerlediği için genel proje süresini kısaltır." }
    ]
  },
  {
    slug: "puskurtme-beton",
    key: "svc_puskurtme_beton",
    icon: Sparkles,
    title: "Püskürtme Beton",
    summary: "Yüksek basınçla uygulanan, kazı yüzeylerini hızlı biçimde koruyan ve taşıyan shotcrete kaplama sistemi.",
    detail: "Derin kazı, tünel ve şev yüzeylerinde hasır donatı veya çelik tel takviyesiyle uygulanan koruyucu ve taşıyıcı beton kabuk.",
    specs: ["Kuru ve yaş sistem uygulama", "Hasır/çelik tel donatı seçeneği", "Hızlı priz ve erken dayanım"],
    applications: [
      "Zemin çivisi ve ankrajlı iksa yüzey kaplaması",
      "Derin kazı ve yarma şev yüzeylerinin korunması",
      "Tünel ve galeri iç yüzey desteği",
      "Şev stabilizasyonu ve erozyon kontrolü",
      "Mevcut beton yüzeylerin onarım ve güçlendirmesi",
      "Havuz, kanal ve istinat yapılarında kaplama"
    ],
    advantages: [
      "Kalıp gerektirmeden hızlı uygulama",
      "Düzensiz ve eğimli yüzeylere tam uyum",
      "Hasır/çelik tel takviyesiyle yüksek yüzey dayanımı",
      "Erken dayanım kazanımıyla kademeli kazıyı hızlandırır",
      "Su geçişini ve yüzey erozyonunu sınırlar",
      "İksa sistemleriyle bütünleşik çalışma"
    ],
    processSteps: [
      { title: "Yüzey Hazırlığı", description: "Kazı yüzeyi temizlenir, gevşek malzeme alınır ve gerekli drenaj noktaları oluşturulur." },
      { title: "Donatı Yerleşimi", description: "Hasır çelik donatı sabitlenir veya karışıma çelik tel (fiber) katkısı eklenir." },
      { title: "Karışım ve Pompalama", description: "Kuru veya yaş sistemle hazırlanan beton, yüksek basınçlı ekipmanla nozula taşınır." },
      { title: "Püskürtme Uygulaması", description: "Beton, yüzeye kontrollü mesafe ve açıyla püskürtülerek istenen kalınlıkta tabaka oluşturulur." },
      { title: "Kür ve Kalite Kontrol", description: "Yüzey kürü sağlanır; kalınlık, aderans ve dayanım kontrolleriyle uygulama doğrulanır." }
    ],
    technicalNote: "Püskürtme beton uygulamasında yaş sistem daha düşük toz ve daha stabil kalite sunarken, kuru sistem uzun pompalama mesafeleri ve aralıklı çalışmalarda avantajlıdır. Çelik tel (fiber) takviyesi, hasır donatıya göre daha homojen çatlak kontrolü sağlayabilir. Katman kalınlığı ve donatı, iksa sisteminin statik tasarımına göre belirlenir.",
    faq: [
      { question: "Kuru sistem mi yaş sistem mi daha iyidir?", answer: "Yaş sistem daha düşük toz ve daha stabil kalite verir; kuru sistem uzun pompalama mesafeleri ve kesintili işlerde avantajlıdır. Seçim, saha koşullarına ve proje büyüklüğüne göre yapılır." },
      { question: "Püskürtme beton tek başına iksa sistemi midir?", answer: "Hayır. Püskürtme beton genellikle zemin çivisi veya ankrajlı sistemin yüzey kaplaması olarak çalışır; taşıyıcı sistemle birlikte tasarlanır." },
      { question: "Çelik tel (fiber) takviyesi ne sağlar?", answer: "Fiber takviyesi, çatlak kontrolünü iyileştirir ve hasır donatı montaj süresini ortadan kaldırarak uygulamayı hızlandırabilir." },
      { question: "Uygulama kalınlığı ne kadardır?", answer: "Kalınlık projeye göre değişir; koruyucu kaplamalarda birkaç santimetre, taşıyıcı uygulamalarda daha yüksek katman kalınlıkları tasarlanabilir." }
    ]
  },
  {
    slug: "kazik-yukleme-testleri",
    key: "svc_kazik_test",
    icon: Gauge,
    title: "Kazık Yükleme ve PIT Testleri",
    summary: "Kazıkların taşıma kapasitesini ve bütünlüğünü sahada doğrulayan statik yükleme, dinamik yükleme ve düşük gerilme (PIT) testleri.",
    detail: "Uygulanan kazıkların tasarım varsayımlarını karşıladığını belgeleyen bağımsız saha test ve raporlama hizmeti.",
    specs: ["Statik ve dinamik yükleme testi", "Düşük gerilme bütünlük testi (PIT)", "Bağımsız raporlama ve değerlendirme"],
    applications: [
      "Fore kazık ve mini kazık taşıma kapasitesi doğrulaması",
      "Kazık bütünlüğü (süreklilik) kontrolü",
      "Deneme kazığı ile tasarım kalibrasyonu",
      "Kabul kriterlerine uygunluk denetimi",
      "Mevcut kazıklı temellerin performans değerlendirmesi",
      "Altyapı ve yüksek yapı projelerinde kalite güvencesi"
    ],
    advantages: [
      "Tasarım varsayımlarının sahada doğrulanması",
      "Kazık sürekliliği ve boyunun bağımsız kontrolü",
      "Statik ve dinamik yöntemlerle esnek test kapsamı",
      "Kabul kriterlerine uygunluğun belgelenmesi",
      "Risklerin imalat aşamasında erken tespiti",
      "Uluslararası standartlara uygun raporlama"
    ],
    processSteps: [
      { title: "Test Programı Tasarımı", description: "Proje kazık tipine, yüküne ve standartlara göre test yöntemi, sayısı ve kabul kriterleri belirlenir." },
      { title: "Saha Kurulumu", description: "Statik test için reaksiyon sistemi, dinamik/PIT test için sensör ve enstrümantasyon kurulur." },
      { title: "Yükleme / Ölçüm", description: "Kazığa kademeli yük uygulanır veya darbe verilerek deplasman, kuvvet ve dalga verileri kaydedilir." },
      { title: "Veri Analizi", description: "Yük-oturma eğrileri ve dalga sinyalleri analiz edilerek taşıma kapasitesi ve bütünlük değerlendirilir." },
      { title: "Raporlama", description: "Sonuçlar kabul kriterleriyle karşılaştırılarak bağımsız teknik raporla teslim edilir." }
    ],
    technicalNote: "Statik yükleme testi, taşıma kapasitesinin en doğrudan doğrulama yöntemidir ancak kurulumu maliyetli ve zaman alıcıdır. Dinamik yükleme testi daha hızlı ve ekonomiktir; çok sayıda kazığın kısa sürede test edilmesine imkân verir. Düşük gerilme bütünlük testi (PIT/sonic echo) ise kazık sürekliliği ve olası kesit kayıplarını hızlıca tarar. Test kapsamı, proje riskine göre bu yöntemlerin kombinasyonuyla planlanır.",
    faq: [
      { question: "Statik ve dinamik yükleme testi arasındaki fark nedir?", answer: "Statik test, kazığa fiziksel olarak kademeli yük uygulayıp oturmayı ölçer; en doğrudan yöntemdir. Dinamik test ise darbe sırasında oluşan dalga verilerinden kapasiteyi tahmin eder; daha hızlı ve ekonomiktir." },
      { question: "PIT testi ne işe yarar?", answer: "Düşük gerilme bütünlük testi (PIT), kazık boyunca süreklilik ve olası kesit kayıpları/çatlakları hasarsız biçimde tarar; kazık kalitesinin hızlı kontrolünü sağlar." },
      { question: "Her kazık test edilmeli mi?", answer: "Genellikle hayır; test sayısı projedeki toplam kazık adedine, riske ve şartname gerekliliklerine göre örnekleme mantığıyla belirlenir. Bütünlük testleri daha geniş kapsamda uygulanabilir." },
      { question: "Test raporu neden bağımsız olmalı?", answer: "Bağımsız test ve raporlama, tarafsız bir kalite güvencesi sağlar ve yatırımcı, tasarımcı ile idare arasında güvenilir bir referans oluşturur." }
    ]
  },
  {
    slug: "zemin-etudu",
    key: "svc_zemin_etudu",
    icon: Compass,
    title: "Zemin Etüdü",
    summary: "Sondaj, arazi ve laboratuvar deneyleriyle zeminin mühendislik parametrelerini belirleyen geoteknik araştırma hizmeti.",
    detail: "Yapı ruhsatı ve güvenli temel tasarımı için zorunlu; sağlıklı bir zemin modeli kurmanın ilk ve en kritik adımı.",
    specs: ["Sondaj ve arazi deneyleri (SPT, CPT)", "Laboratuvar indeks ve mukavemet deneyleri", "Geoteknik rapor ve tasarım parametreleri"],
    applications: [
      "Yapı ruhsatına esas zemin ve temel etüdü",
      "Sıvılaşma ve oturma analizi için veri toplama",
      "Temel tipi seçimine yönelik parametre belirleme",
      "Zemin iyileştirme yönteminin seçimine altlık",
      "Şev ve istinat yapıları için stabilite verisi",
      "Mevcut yapıların zemin kaynaklı sorunlarının teşhisi"
    ],
    advantages: [
      "Güvenli ve ekonomik temel tasarımının temeli",
      "Sıvılaşma, oturma ve taşıma gücü risklerinin önceden tespiti",
      "Doğru zemin iyileştirme yönteminin seçimine altlık",
      "Yönetmeliğe (TBDY 2018) uygun sınıflandırma",
      "İhale öncesi gerçekçi metraj ve maliyet öngörüsü",
      "Sürprizleri ve sonradan maliyet artışlarını azaltır"
    ],
    processSteps: [
      { title: "Ön Değerlendirme ve Planlama", description: "Proje tipi ve saha koşullarına göre sondaj sayısı, derinliği ve deney programı planlanır." },
      { title: "Arazi Çalışmaları", description: "Sondaj, SPT/CPT ve gerektiğinde jeofizik ölçümlerle zemin profili ve yeraltı suyu belirlenir." },
      { title: "Laboratuvar Deneyleri", description: "Alınan numuneler üzerinde indeks, mukavemet ve konsolidasyon deneyleri yapılır." },
      { title: "Analiz ve Modelleme", description: "Veriler değerlendirilerek zemin modeli, tasarım parametreleri ve risk değerlendirmesi oluşturulur." },
      { title: "Geoteknik Rapor", description: "Bulgular, temel önerileri ve tasarım parametreleri yönetmeliğe uygun raporla sunulur." }
    ],
    technicalNote: "Zemin etüdünün kalitesi; sondaj sayısı ve derinliği, deney çeşitliliği ve raporun tasarım parametrelerini ne kadar net verdiğiyle ölçülür. TBDY 2018 kapsamında yerel zemin sınıfı, sıvılaşma değerlendirmesi ve tasarım spektrumu için yeterli derinlik ve veri esastır. Yetersiz etüt, ilerleyen aşamalarda maliyeti çok daha yüksek sürprizlere yol açar.",
    faq: [
      { question: "Zemin etüdü yasal olarak zorunlu mu?", answer: "Evet. Yapı ruhsatı için zemin ve temel etüdü zorunludur. Bunun yanında güvenli tasarım için yeterli sondaj ve deney yapılması teknik olarak da kritiktir." },
      { question: "Kaç sondaj gerekir?", answer: "Sondaj sayısı ve derinliği; yapı büyüklüğü, yük durumu ve zemin değişkenliğine göre belirlenir. Yönetmelik asgari gereklilikleri sağlamak kadar zemin modelini güvenilir kurmak da önemlidir." },
      { question: "Zemin etüdü sıvılaşmayı gösterir mi?", answer: "Evet. Uygun derinlik ve deneylerle (SPT/CPT, yeraltı suyu) sıvılaşma potansiyeli değerlendirilir ve gerekli iyileştirme yöntemine altlık oluşturulur." },
      { question: "Etüt sonrası zemin iyileştirme gerekir mi?", answer: "Etüt sonucuna bağlıdır. Zayıf, gevşek veya sıvılaşmaya yatkın zeminlerde iyileştirme veya uygun temel sistemi önerilir; sağlam zeminlerde gerekmeyebilir." }
    ]
  },
  {
    slug: "tas-kolon",
    key: "svc_tas_kolon",
    icon: Network,
    title: "Taş Kolon",
    summary: "Yumuşak zemine sıkıştırılmış çakıl/kırmataş kolonları teşkil ederek taşıma gücünü artıran ve drenaj sağlayan iyileştirme yöntemi.",
    detail: "Yumuşak kil ve gevşek dolgu zeminlerde oturmayı azaltan, sıvılaşma direncini artıran ve hızlı konsolidasyon sağlayan çözüm.",
    specs: ["Vibro yerleştirme (ıslak/kuru sistem)", "Drenaj ve taşıma gücü artışı", "Sıvılaşma direncine katkı"],
    applications: [
      "Yumuşak kil ve gevşek zeminlerde geniş taban alanlı yapılar",
      "Depo, lojistik ve endüstriyel platform temelleri",
      "Dolgu altı zemin iyileştirmesi",
      "Sıvılaşmaya yatkın zeminlerde direnç artırımı",
      "Yol ve demiryolu dolgusu altında oturma kontrolü",
      "Tank ve silo temel zeminlerinin güçlendirilmesi"
    ],
    advantages: [
      "Oturma ve fark oturmayı belirgin biçimde azaltır",
      "Kolonlar drenaj görevi görerek konsolidasyonu hızlandırır",
      "Sıvılaşma direncini artırır",
      "Doğal agrega kullanımıyla çevre dostu çözüm",
      "Geniş alanlarda hızlı ve ekonomik uygulama",
      "Taşıma kapasitesini artırarak temel boyutlarını optimize eder"
    ],
    processSteps: [
      { title: "Zemin Modeli ve Tasarım", description: "Zemin parametrelerine göre kolon çapı, aralığı ve derinliği ile hedef iyileştirme oranı belirlenir." },
      { title: "Saha Aplikasyonu", description: "Kolon eksenleri aplikasyon edilir ve vibro ekipmanı konumlandırılır." },
      { title: "Delgi / Vibro Yerleştirme", description: "Vibratör zemine indirilir; ıslak veya kuru sistemle boşluk açılır." },
      { title: "Agrega Besleme ve Sıkıştırma", description: "Çakıl/kırmataş kademeli beslenerek sıkıştırılır ve yanal zemine kenetlenmiş kolon oluşturulur." },
      { title: "Kalite Kontrol", description: "Agrega sarfı, sıkıştırma enerjisi ve kolon geometrisi kayıt altına alınır; gerektiğinde yükleme deneyi yapılır." }
    ],
    technicalNote: "Taş kolon, özellikle yumuşak kil ve gevşek siltli-kumlu zeminlerde oturma kontrolü ve sıvılaşma azaltımı için etkilidir. Çok yumuşak, yanal destek sağlayamayan zeminlerde kolon şişmesi (bulging) riskine karşı geotekstil kılıflı (geosentetik ankastre) taş kolon çözümleri değerlendirilebilir. Kolon aralığı ve çapı, hedef iyileştirme oranına göre tasarlanır.",
    faq: [
      { question: "Taş kolon hangi zeminlerde uygundur?", answer: "Yumuşak kil, gevşek silt ve kumlu zeminlerde etkilidir. Çok yumuşak, yanal destek vermeyen zeminlerde geotekstil kılıflı taş kolon tercih edilebilir." },
      { question: "Taş kolon sıvılaşmayı önler mi?", answer: "Taş kolonlar hem drenaj sağlayarak boşluk suyu basıncını azaltır hem de zemin rijitliğini artırarak sıvılaşma direncine katkıda bulunur." },
      { question: "Taş kolon mu DSM mi tercih edilmeli?", answer: "Karar zemin tipine ve hedefe bağlıdır. Taş kolon drenaj ve doğal agrega avantajı sunar; DSM ise daha yüksek ve kontrollü mukavemet sağlar. Proje koşulları belirleyicidir." },
      { question: "Oturmayı ne kadar azaltır?", answer: "İyileştirme oranı; kolon çapı, aralığı ve zemin özelliklerine göre değişir ve projeye özel analizle belirlenir. Doğru tasarımla oturma önemli ölçüde sınırlandırılır." }
    ]
  },
  {
    slug: "diafram-duvar",
    key: "svc_diafram_duvar",
    icon: Building2,
    title: "Diafram Duvar",
    summary: "Bentonit çamuru desteğinde teşkil edilen, hem iksa hem su geçirimsizlik sağlayan betonarme sürekli perde duvar.",
    detail: "Derin kazılarda yüksek rijitlik ve su kontrolü gereken, komşu yapıya duyarlı projeler için kalıcı taşıyıcı perde sistemi.",
    specs: ["Bentonit çamuru destekli panel imalatı", "Yüksek rijitlik ve su geçirimsizliği", "Kalıcı taşıyıcı sistem entegrasyonu"],
    applications: [
      "Derin bodrumlu yüksek yapı kazıları",
      "Metro istasyonu ve tünel giriş yapıları",
      "Yüksek yeraltı suyu bulunan derin kazılar",
      "Komşu yapı deplasman toleransı çok düşük kentsel kazılar",
      "Liman, rıhtım ve kıyı yapıları",
      "Kalıcı istinat ve bodrum perde duvarları"
    ],
    advantages: [
      "Yüksek rijitlikle deplasmanı en aza indirir",
      "Su geçirimsizlik sağlayarak kazı tabanını korur",
      "Kalıcı taşıyıcı yapı elemanı olarak kullanılabilir",
      "Derin kazılarda güvenli ve güvenilir çözüm",
      "Komşu yapı etkilerini sınırlar",
      "Ankraj veya iç destekle birlikte optimize edilir"
    ],
    processSteps: [
      { title: "Kılavuz Duvar İmalatı", description: "Panel hattı boyunca imalatı yönlendiren ve stabiliteyi artıran kılavuz duvarlar yapılır." },
      { title: "Bentonit Destekli Hafriyat", description: "Panel, bentonit çamuru desteğinde özel kepçelerle (grab) kazılır; çamur çeper stabilitesini sağlar." },
      { title: "Donatı Kafesi Yerleşimi", description: "Fabrikasyon donatı kafesi panele indirilir ve konumlandırılır." },
      { title: "Tremie Beton Dökümü", description: "Beton, tremie borusuyla tabandan yukarı dökülerek çamur yerini alır ve panel oluşturulur." },
      { title: "Panel Birleşimi ve Kontrol", description: "Panjur/su tutucu ile paneller birleştirilir; süreklilik ve düşeylik kontrolleriyle sistem tamamlanır." }
    ],
    technicalNote: "Diafram duvar, fore kazık perdelerine göre daha yüksek rijitlik ve daha iyi su geçirimsizliği sağlar; bu nedenle derin, sulu ve komşu yapıya duyarlı kazılarda tercih edilir. Panel düşeyliği, birleşim detayları (su tutucu) ve tremie beton kalitesi sistemin performansını belirleyen kritik unsurlardır. Kalıcı sistemlerde duvar, nihai yapının bodrum perdesi olarak da çalışabilir.",
    faq: [
      { question: "Diafram duvar mı fore kazık perdesi mi?", answer: "Diafram duvar daha yüksek rijitlik ve daha iyi su geçirimsizliği sağlar; derin, sulu ve komşu yapıya duyarlı kazılarda avantajlıdır. Fore kazık perdesi ise bazı koşullarda daha hızlı ve ekonomik olabilir." },
      { question: "Diafram duvar kalıcı yapı elemanı olur mu?", answer: "Evet. Uygun tasarlandığında nihai yapının bodrum perde duvarı olarak taşıyıcı görev üstlenebilir." },
      { question: "Su geçirimsizliği nasıl sağlanır?", answer: "Sürekli betonarme panel ve paneller arası su tutucu (waterstop) detayları sayesinde yüksek yeraltı suyu koşullarında dahi kazı tabanı korunur." },
      { question: "Bentonit çamuru ne işe yarar?", answer: "Bentonit çamuru, kazı sırasında panel çeperinin göçmesini önleyerek stabiliteyi sağlar ve beton dökümüyle yerini betona bırakır." }
    ]
  },
];

export const standaloneServices = [
  {
    slug: "bina-alti-jet-grout",
    key: "svc_bina_alti_jet_grout",
    icon: Building2,
    title: "Bina Altı Jet Grout & Temel İyileştirme",
    summary: "Elektrikli jet grout makineleri, uygulama noktasında doğrudan dizel egzozu oluşturmayan çalışma, düşük gürültü ve gerçek zamanlı izleme ile işletmedeki binalarda temel güçlendirmeyi destekler.",
    detail: "Bina altı jet grout (underpinning); aktif kullanılan binalar, santral yapıları, veri merkezleri ve tarihi yapılarda temel altı taşıma kapasitesini artırmak ve diferansiyel oturmaları azaltmak için değerlendirilen düşük titreşimli bir hidro-enjeksiyon yöntemidir. Elektrikli jet grout makineleri, ardışık/şaşırtmalı imalat sekansı, enstrümantasyon ve sahada kalibre edilen deneme kolonları; proje özelindeki oturma, kabarma ve yapısal hareket risklerinin yönetilmesini destekler.",
    specs: ["Elektrikli Jet Grout Rigs (Doğrudan Dizel Egzozu Yok & Düşük Titreşim)", "Proje Riskine Göre Gerçek Zamanlı İzleme", "Şaşırtmalı/Ardışık Kolon İmalat Protokolü"],
    applications: [
      "Aktif kullanılan Türk Telekom binaları, veri merkezleri ve santral tesisleri",
      "Bodrum tavan yüksekliği kısıtlı (2.5 - 3.5m) kapalı mekanlarda temel güçlendirme",
      "Tarihi eser, anıt ve hassas cihaz barındıran endüstriyel tesis altı ıslahı",
      "Diferansiyel oturma yaşayan veya kat ilavesi planlanan binalarda zemin takviyesi",
      "Yeraltı su seviyesinin yüksek olduğu bodrum katlarda sızdırmazlık ve underpinning çözümleri",
      "Sıvılaşma riski yüksek alüvyal zeminlerde bina altı zemin rijitleştirmesi"
    ],
    advantages: [
      "Düşük Titreşimli Yöntem: Darbeli ve çakma sistemlere göre titreşim etkisi düşüktür; bina strüktürü ve hassas elektronik cihazlar izleme planıyla korunur.",
      "Elektrikli Makine Teknolojisi: Uygulama noktasında doğrudan dizel egzoz emisyonu oluşturmaz; kapalı alan havalandırma ve gürültü planını destekler.",
      "Oturma (Settlement) ve Kabarma (Heave) Kontrolü: 400-600 bar yüksek basınç enjeksiyonunda spoil (geri dönüş çamuru) kanalları sürekli açık tutularak zemin yükselmesi engellenir.",
      "Ardışık (Dama Düzeni) İmalat Sekansı: Yan yana kolonlar aynı anda yapılmaz; proje şartlarına göre kolon aralığı ve priz süresi belirlenerek oturma riski azaltılır.",
      "Gerçek Zamanlı Monitoring (Sensör Takibi): İnklinometre, oturma plakaları ve tiltmetre ölçümleriyle milimetrik bina deplasmanı anlık izlenir, eşik değerinde otomatik durdurma yapılır.",
      "Deneme Kolonları (Trial Columns): İmalat öncesi basınç, rpm ve çekme hızı gibi parametreler sahada sınanarak tasarım kabulleri doğrulanır."
    ],
    processSteps: [
      { title: "Mühendislik Veri ve Saha Analizi", description: "Zemin etüt raporu (SPT/CPT), mevcut temel/bodrum kotları ve mimari-statik projeler YER6 mühendislerince incelenerek yapıya özel uygulama modeli tasarlanır." },
      { title: "Saha Deneme Kolonları (Trial Column)", description: "Proje sahasında önceden belirlenen noktada pilot kolon imal edilir. Jet enjeksiyon basıncı, tij dönüş hızı (rpm) ve çekme hızı zemin şartlarına göre sahada kalibre edilir." },
      { title: "Elektrikli Ekipman Kurulumu ve Sensör Mobilizasyonu", description: "Uygulama noktasında doğrudan dizel egzozu oluşturmayan elektrikli jet grout makinesi mobilize edilir; proje risk sınıfına göre inklinometre, oturma plakaları ve optik izleme donanımları kurulur." },
      { title: "Şaşırtmalı/Ardışık Jet Grout İmalatı", description: "Yan yana kolonlar aynı gün imal edilmez. Dama düzeninde en az 2 kolon boşluk bırakılarak delgi yapılır ve 24 saat priz süresinin ardından ara kolonlar tamamlanır." },
      { title: "Kesintisiz Spoil ve Basınç Kontrolü", description: "400-600 bar basınçla jetleme yapılırken kuyu ağzından spoil (çamur) geri dönüşü anlık takip edilir. Dönüşün kesilmesi durumunda hidro-fraktür ve kabarmayı önlemek için enjeksiyon derhal kesilir." },
      { title: "Karot Alımı ve Kalite Doğrulama Raporu", description: "Tamamlanan kolonlardan 7-28 gün sonra elmas uçlu karot alınarak serbest basınç dayanımı (UCS) laboratuvarda test edilir ve mühendislik onay raporuyla teslim edilir." }
    ],
    technicalNote: "Bina altı jet grout uygulamalarında (underpinning) temel mühendislik hedefi; delgi sırasında oluşabilecek lokal oturma ile yüksek enjeksiyon basıncının killi zeminlerde tetikleyebileceği hidro-fraktür ve taban kabarması risklerini birlikte yönetmektir. İlgili teknik kılavuzlara göre yüzeye malzeme (spoil) çıkışı durduğunda enjeksiyon durdurulmalı ve parametreler yeniden değerlendirilmelidir. Elektrikli makineler, enstrümantasyon takibi ve ardışık döküm disiplini risklerin izlenip azaltılmasını destekler.",
    faq: [
      { question: "Bina altı jet grout uygulaması mevcut binaya zarar verir mi?", answer: "Jet grout, darbeli veya çakma sistemlere göre düşük titreşimli bir yöntemdir; ancak risk hiçbir zaman sıfır değildir. Basınç, sıra, priz süresi ve durdurma eşikleri proje özelinde belirlenir; oturma, kabarma ve çatlak riskleri uygun enstrümantasyonla izlenir." },
      { question: "Neden elektrikli jet grout makinesi tercih edilir?", answer: "Kapalı bodrum katlarında ve havalandırması kısıtlı tesislerde elektrikli makineler uygulama noktasında doğrudan dizel egzoz emisyonu oluşturmaz. Ekipman seçimi yine de elektrik altyapısı, havalandırma, gürültü ve iş güvenliği planıyla birlikte yapılmalıdır." },
      { question: "Bina altı jet grout ile oturma (settlement) ve kabarma (heave) nasıl önlenir?", answer: "Killi zeminlerde yüksek basınç nedeniyle kabarmayı engellemek için enjeksiyon debisi kademeli ayarlanır ve spoil (çamur) yolu sürekli açık tutulur. Oturmayı engellemek için ise yan yana kolonlar aynı anda yapılmaz (dama düzeni) ve en az 24 saat priz beklenir." },
      { question: "Proje öncesinde mühendislerinize hangi belgeleri sunmalıyız?", answer: "Sağlıklı bir teknik teklif ve risk değerlendirmesi için: 1) Akredite zemin etüt raporu (sondaj, SPT/CPT verileri), 2) Mevcut temel ve mimari projeler, 3) Temel kotları ve bodrum tavan yüksekliklerinin paylaşılması yeterlidir." },
      { question: "Kesintisiz çalışan hassas tesislerde uygulama nasıl yürütülür?", answer: "Elektrikli makineler, gürültü kontrolü, düşük titreşimli delgi ve enstrümantasyon birlikte planlanır. İşletme sürekliliği hedefi; tesis yönetimiyle hazırlanacak çalışma izinleri, durdurma eşikleri ve acil durum planına bağlıdır." },
      { question: "Bina altı jet grout kolonlarının kalitesi nasıl doğrulanır?", answer: "İmalattan 7 ila 28 gün sonra bina altındaki jet grout kolonlarından Karot alınarak Tek Eksenli Basınç Dayanımı (UCS) testleri yapılır ve TBDY 2018 normlarına uygun olarak raporlanır." }
    ]
  },
  {
    slug: "cfa-kazik",
    key: "svc_cfa",
    icon: Drill,
    title: "CFA Kazık & Zemin Güçlendirme",
    summary: "Continuous Flight Auger (Sürekli Burgulu Kazık) teknolojisi ile muhafaza borusuz, yüksek hızlı ve düşük titreşimli derin temel çözümleri.",
    detail: "CFA Kazık (Continuous Flight Auger / Sürekli Burgulu Kazık), uygun zemin koşullarında muhafaza borusu veya bentonit çamuru kullanmaksızın içi boş helezon burgu ile delgi yapılan bir kazık yöntemidir. Delgi hedeflenen kota ulaştığında beton pompalanırken burgu kontrollü olarak yukarı çekilir ve ardından taze betona donatı kafesi yerleştirilir. Üretim hızı ve ekipman seçimi zemin profili, kazık geometrisi, beton lojistiği ve saha koşullarına göre belirlenir.",
    specs: ["EN 1536 ve Proje Şartnamesine Göre CFA İmalatı", "Anlık Dijital Veri Kaydı (Data Logger / Tork & Beton Basıncı)", "Muhafaza Borusuz, Saha Koşullarına Bağlı Üretim"],
    applications: [
      "Yüksek katlı konut, ticari rezidans ve AVM projelerinde CFA derin temel kazıkları",
      "Yumuşak kil, silt ve akıntılı gevşek kum sahalarında muhafaza borusuz kazık imalatı",
      "Deprem ve sıvılaşma riski yüksek alüvyon sahalarda bina yüklerinin derin sağlam kayaya aktarılması",
      "Gürültü ve vibrasyon kısıtlaması olan şehir içi şantiyelerde titreşimsiz delgi",
      "Sanayi tesisleri, fabrika temelleri ve ağır makine platformlarında oturma kontrolü",
      "Derin kazı iksa sistemlerinde ankrajlı CFA kazık perdeleri"
    ],
    advantages: [
      "Muhafaza Borusu (Casing) ve Bentonit Çamuru Gerektirmez: Saha temizliğini korur ve çamur arıtma maliyetlerini ortadan kaldırır.",
      "Yüksek İmalat Potansiyeli: Uygun zemin, kazık geometrisi ve beton lojistiğinde kesintisiz delgi-betonlama çevrimi üretim hızını artırabilir.",
      "Düşük Titreşim ve Gürültü: Çakma ve darbeli yöntemlere göre titreşim etkisi düşüktür; komşu yapılar ve altyapı hatları proje özelinde izlenir.",
      "Gerçek Zamanlı Dijital Takip (Automated Data Logger): Delgi torku, burgu çekme hızı, beton basıncı ve hacmi izlenerek boğulma (necking) riski azaltılır.",
      "Süreklilik ve Kalite Kontrolü: Beton pompalama işleminin delgi ucu kuyu tabanındayken başlaması, kuyu tabanında gevşek zemin birikimi riskini sınırlar.",
      "Uluslararası kabul testleri (PIT - Kazık Bütünlük Testi ve Statik Yükleme Testleri) ile üretimin kalitesi belgelenir."
    ],
    processSteps: [
      { title: "Continuous Auger Drilling (Burgulu Delgi)", description: "İçi boş helezon burgu (hollow-stem auger), yüksek torklu CFA makinesi ile tasarlanan derinlik kotuna kadar kesintisiz olarak zemine sürülür." },
      { title: "High-Pressure Concreting (Basınçlı Betonlama)", description: "Hedef koda ulaşıldığında kuyu tabanından itibaren içi boş mil içerisinden yüksek basınçlı beton pompalanmaya başlanır." },
      { title: "Synchronized Auger Extraction (Burgu Çekimi)", description: "Beton basıncı pozitif seviyede tutularak burgu yavaşça ve sabit hızla yukarı çekilir. Süreç boyunca beton debisi ve çekme hızı sensörlerle senkronize edilir." },
      { title: "Rebar Cage Installation (Donatı Kafesi Montajı)", description: "Burgu tamamen çekildikten sonra, hazırlanan çelik donatı kafesi taze betonun içerisine özel vibratör aparatıyla projekte edilen derinliğe kadar daldırılır." },
      { title: "Quality Verification & PIT Testing (Kalite Kontrol)", description: "Beton prizini aldıktan sonra kazık başları tıraşlanır, Kazık Bütünlük (PIT) ve Yükleme Testleri uygulanarak teknik rapor teslim edilir." }
    ],
    technicalNote: "CFA kazık imalatında en kritik geoteknik parametreler, burgu çekimi esnasındaki pozitif beton basıncı ve kuyu içi sürekliliktir. EN 1536 ve ilgili uygulama esaslarına göre beton basıncındaki düşüş veya burgunun gereğinden hızlı çekilmesi boğulmaya (necking) ya da zemin karışmasına (soil inclusion) neden olabilir. Otomatik beton debimetreleri ve tork sensörleri, imalat parametrelerinin izlenmesini ve kabul kriterlerinin kayıtla doğrulanmasını destekler.",
    faq: [
      { question: "CFA Kazık nedir ve sektörde neden bu isimle anılır?", answer: "CFA (Continuous Flight Auger / Sürekli Burgulu Kazık), muhafaza borusu çakmadan içi boş tek parça helezon burgu ile delgi yapılıp burgu çekilirken beton pompalanan sistemdir. Sektörde tüm mühendis ve müteahhitler hızlı ve ekonomik derin temel çözümü olduğu için bu yöntemi direkt 'CFA' olarak tanımlar." },
      { question: "CFA Kazık ile Geleneksel Fore Kazık arasındaki farklar nelerdir?", answer: "Fore kazıkta delgi yapıldıktan sonra muhafaza borusu veya bentonit kullanılır, donatı indirilir ve en son beton dökülür. CFA kazıkta ise delgi, beton dökümü ve donatı daldırma sırasıyla tek ve kesintisiz operasyonda yapılır. CFA kazık 2-3 kat daha hızlıdır ve bentonit çamuru gerektirmez." },
      { question: "CFA Kazık hangi zemin türlerinde en yüksek verimi sağlar?", answer: "Özellikle orta-sıkı kumlarda, killi ve siltli zeminlerde, yeraltı su seviyesinin yüksek olduğu ve muhafaza borusu sürmenin zor olduğu alüvyal sahalarda en yüksek verimi ve imalat hızını sağlar." },
      { question: "CFA Kazıkta donatı kafesi taze betona nasıl indirilir?", answer: "Beton dökümü tamamlanıp kuyu tamamen dolduktan hemen sonra, hazırlanan dairesel donatı kafesi vinç ve donatı vibratörü yardımıyla taze betonun içine daldırılarak hedef kota yerleştirilir." },
      { question: "CFA Kazık imalat kalitesi nasıl doğrulanır?", answer: "İmalat esnasında dijital data logger kayıtları (tork, debi, beton basıncı) tutulur. İmalat sonrasında ise Kazık Bütünlük Testi (PIT - Pile Integrity Test) ve Statik/Dinamik Kazık Yükleme Testleri yapılarak belgelenir." }
    ]
  },
  {
    slug: "deep-soil-mixing",
    key: "svc_deep_soil",
    icon: Layers3,
    title: "Deep Soil Mixing (DSM Zemin İyileştirme)",
    summary: "Deep Soil Mixing (DSM), taşıma kapasitesini artırmak ve oturmaları kabul edilebilir proje limitlerine indirmek için değerlendirilen bir derin zemin karıştırma yöntemidir.",
    detail: "Deep Soil Mixing (DSM / Derin Zemin Karıştırma), mekanik karıştırma kanatları ile zayıf zemini çimento bazlı bağlayıcılarla yerinde harmanlayarak zemin-çimento kolonları üretir. Liman sahaları, lojistik depolar, yol yaklaşımları, sanayi parselleri ve alüvyal zeminlerde taşıma kapasitesi, oturma ve yanal yayılma hedefleri için proje özelinde değerlendirilebilir.",
    specs: ["BRN (Blade Rotation Number) Dijital Enerji Kontrolü", "Çift Milli (Twin Shaft) Yüksek Kapasiteli DSM Rig Makineleri", "FHWA ve Eurocode 7 Standartlarında Laboratuvar Mix Tasarımı"],
    applications: [
      "Lojistik depolar, AVM ve sanayi tesisleri altında derin zemin iyileştirmesi ve oturma kontrolü",
      "Körfez ve kıyı alüvyonlarında sıvılaşma ve yanal yayılmayı önleyici DSM grid (kafes) kolonları",
      "Otoyol, demiryolu dolguları ve köprü yaklaşım ramplarında diferansiyel oturma engelleme",
      "Derin kazı ve su yapılarında yeraltı suyu kesici perde (cutoff wall) imalatı",
      "Organik killi, siltli ve turba zeminlerde çimento-kireç karışımlı özel zemin ıslahı",
      "Hafriyat çıkarılması imkansız sahalarda atıksız ve temiz zemin güçlendirme"
    ],
    advantages: [
      "Hafriyatsız ve Çevreci: Zemini dışarı çıkarmadan yerinde karıştırır; hafriyat nakliyesi ve çamur arıtma maliyetlerini ortadan kaldırır.",
      "Yüksek İmalat Potansiyeli: Geniş platformlarda üretim hızı zemin türü, kolon geometrisi, ekipman ve bağlayıcı lojistiğine göre değerlendirilir.",
      "Yeraltı Suyu Kontrolü: Uygun tasarlanmış kesişen DSM kolonları düşük geçirgenlikli bariyer oluşturmak için kullanılabilir.",
      "Ölçülebilir Kolon Homojenliği: BRN, bağlayıcı dozajı ve karıştırma parametreleri dijital kayıtlarla izlenebilir; sonuçlar karot/UCS testleriyle doğrulanır.",
      "Derin Temel Alternatifi: Uygun zemin ve yük koşullarında kazıklı temel seçenekleriyle teknik ve ekonomik olarak karşılaştırılabilir."
    ],
    processSteps: [
      { title: "Zemin Karakterizasyonu ve Laboratuvar Mix Tasarımı", description: "Sahadan alınan zemin numuneleri üzerinde laboratuvarda farklı çimento dozajları denenerek hedef UCS dayanımı (1.0 - 3.0 MPa) belirlenir." },
      { title: "Saha Pilot İmalatı ve BRN Kalibrasyonu", description: "Deneme kolonları imal edilerek karıştırma bıçağının devir sayısı (RPM), inme ve çekme hızları sahada kalibre edilir." },
      { title: "Mekanik Karıştırma ve Düşük Basınçlı Enjeksiyon", description: "Çift milli yüksek torklu DSM helezonları zemini parçalayarak hedef kotuna inerken alttan 10-20 bar düşük basınçlı çimento şerbeti verilir." },
      { title: "Ters Yönlü Çekim ve Homojenizasyon", description: "Burgu hedef derinlikten yukarı çekilirken karıştırma sürdürülür; zemin ile bağlayıcının homojenliği üretim parametreleri ve saha testleriyle kontrol edilir." },
      { title: "Karot Alımı ve UCS Dayanım Doğrulaması", description: "İmalattan 28 gün sonra kolonlardan karot örneği alınarak laboratuvarda Tek Eksenli Basınç Testi (UCS) yapılır ve mühendislik onay raporu teslim edilir." }
    ],
    technicalNote: "Deep Soil Mixing (DSM) uygulamalarında kaliteyi etkileyen başlıca parametreler bıçak dönüş sayısı (BRN), bağlayıcı dozajı ve karıştırma enerjisidir. Hedef değerler zemin türü, ekipman geometrisi, laboratuvar karışım tasarımı ve deneme kolonlarıyla proje özelinde belirlenmelidir. Otomatik çimento debimetreleri ve tork sensörleri, metre başına bağlayıcı miktarı ile karıştırma parametrelerinin dijital olarak kayıt altına alınmasını destekler.",
    faq: [
      { question: "Deep Soil Mixing (DSM) nedir ve hangi projelerde tercih edilir?", answer: "DSM (Derin Zemin Karıştırma), yumuşak zeminlerin mekanik karıştırıcı kanatlarla çimento enjekte edilerek yerinde iyileştirilmesidir. Lojistik depolar, sanayi tesisleri, limanlar ve yol dolgularında oturma ve sıvılaşmayı engellemek için ilk tercih edilen ekonomik yöntemdir." },
      { question: "Deep Soil Mixing ile Jet Grouting arasındaki farklar nelerdir?", answer: "Jet Grout 400-600 bar yüksek hidro-basınçla zemini parçalar; DSM ise 10-20 bar gibi düşük basınçta mekanik kanatlarla karıştırır. DSM geniş alanlı killi sahalarda daha homojen, hızlı ve ekonomiktir." },
      { question: "DSM kolonları hangi derinlik ve çaplarda imal edilebilir?", answer: "Tek milli veya çift milli DSM makinelerimizin gücüne bağlı olarak 600 mm ile 1200 mm çaplarında ve 25-30 metre derinliğe kadar kesintisiz DSM kolonları imal edilebilmektedir." },
      { question: "Deep Soil Mixing (DSM) sıvılaşma etkilerini nasıl azaltır?", answer: "Uygun grid veya blok geometrisinde tasarlanan DSM elemanları, yanal deformasyonu sınırlandırıp zeminin rijitliğini artırarak sıvılaşma etkilerinin azaltılmasına katkı sağlayabilir. Performans, sahaya özel dinamik zemin analizleri ve kabul kriterleriyle doğrulanmalıdır." },
      { question: "Deep Soil Mixing firmaları seçerken nelere dikkat edilmelidir?", answer: "Firmanın projeye uygun makine kapasitesi, sahada BRN (Blade Rotation Number) ve bağlayıcı dozajı verilerini kaydedebilmesi, deneme kolonları uygulaması ve 28 günlük karot/UCS testlerini sunabilmesi önemlidir. Kabul kriterleri proje şartnamesi ve kalite planında açıkça tanımlanmalıdır." }
    ]
  }
];

export const allServices = [...services, ...standaloneServices];

export function getServiceBySlug(slug: string) {
  return allServices.find((service) => service.slug === slug);
}

export function getServicePaths() {
  return allServices.map((service) => ({ slug: service.slug }));
}

const projectCatalog = [
  {
    slug: "marmara-lojistik-temel-guclendirme",
    key: "proj_marmara",
    category: "DSM",
    location: "Kocaeli",
    year: "2026",
    area: "118.000 m²",
    metric: "42.000 m DSM kolon",
    title: "Marmara Lojistik Merkezi",
    summary: "Yumuşak kil tabakaları üzerinde düşük oturmalı endüstriyel platform tasarımı.",
    challenge: "Yüksek raf yükleri, sınırlı termin programı ve değişken dolgu kalitesi.",
    solution: "DSM kolonları, saha karot testleri ve dijital üretim raporlaması ile performans kontrollü iyileştirme.",
    tags: ["DSM", "Endüstriyel", "Oturma Kontrolü"],
    image: "/images/projects/saha/saha-genel-cok-makineli.webp",
    imageAlt: "Çok makineli zemin güçlendirme sahası — YER6 saha arşivi",
    soilProblem: "Sahadaki yumuşak kil tabakaları, yüksek raf sistemi yükleri altında kabul edilemez oturma riski taşıyordu. Dolgu kalitesinin değişken olması ek belirsizlik yaratıyordu.",
    solutionMethod: "Derin zemin karıştırma (DSM) yöntemiyle tüm tesis alanında kolon ağı uygulandı. Laboratuvar karışım tasarımı sonrası saha üretimi başlatıldı; her kolona ait üretim verisi dijital olarak kayıt altına alındı. Karot testleri ile kolon mukavemeti doğrulandı.",
    technicalInfo: [
      { label: "Uygulama Yöntemi", value: "DSM (Derin Zemin Karıştırma)" },
      { label: "Kolon Çapı", value: "800 mm" },
      { label: "Kolon Derinliği", value: "12–18 m" },
      { label: "Alan", value: "118.000 m²" },
      { label: "Üretim", value: "42.000 m DSM kolon" },
      { label: "Hedef Mukavemet", value: "qu ≥ 800 kPa" }
    ],
    usedEquipment: ["DSM Çift Aks Ekipmanı", "Çimento Şerbeti Mikser Ünitesi", "Dijital Üretim Kayıt Sistemi", "Karot Numune Ekipmanı"],
    result: "Tüm DSM kolon ağı tamamlandıktan sonra yapılan yük testleri tasarım oturma limitlerinin çok altında kaldı. Proje programı dahilinde tamamlandı; tesis, yükleme ve işletim aşamasına sorunsuz geçti.",
    seoTitle: "Marmara Lojistik Merkezi DSM Zemin İyileştirme | YER6",
    metaDescription: "Yumuşak kil tabakalarında 42.000 m DSM kolon ile yapılan endüstriyel platform zemin iyileştirme projesi detayları."
  },
  {
    slug: "ege-liman-jet-grout-perdesi",
    key: "proj_ege",
    category: "Jet Grout",
    location: "İzmir",
    year: "2025",
    area: "740 m perde",
    metric: "8.600 adet kolon",
    title: "Ege Liman Genişleme",
    summary: "Kıyı yapısında su kontrolü ve taşıma kapasitesi için jet grout perdesi.",
    challenge: "Yüksek yer altı suyu, deniz etkisi ve dar çalışma koridoru.",
    solution: "Triple jet grout, enjeksiyon basınç kayıtları ve aşamalı kalite testleri.",
    tags: ["Jet Grout", "Liman", "Su Kontrolü"],
    image: "/images/projects/saha/su-kenari-kazik-imalati.webp",
    imageAlt: "Su kenarında kazık imalatı yapan delgi makinesi — YER6 saha arşivi",
    soilProblem: "Kıyı alanında yüksek yeraltı suyu seviyesi ve deniz etkisi, liman genişlemesi sırasında su kontrolü ve taşıma kapasitesi sorunlarına yol açıyordu. Dar çalışma koridoru standart ekipman kullanımını kısıtlıyordu.",
    solutionMethod: "Triple jet grout sistemiyle 740 m uzunluğunda geçirimsizlik ve taşıma perdesi oluşturuldu. Her enjeksiyon parametresi saha veri sistemiyle anlık kaydedildi. Aşamalı kalite testleriyle perde bütünlüğü doğrulandı.",
    technicalInfo: [
      { label: "Uygulama Yöntemi", value: "Triple Jet Grout" },
      { label: "Perde Uzunluğu", value: "740 m" },
      { label: "Kolon Adedi", value: "8.600 adet" },
      { label: "Kolon Çapı", value: "1.200–1.800 mm" },
      { label: "Ortalama Derinlik", value: "16 m" },
      { label: "Hedef Geçirimsizlik", value: "k ≤ 10⁻⁷ m/s" }
    ],
    usedEquipment: ["Triple Jet Grout Delgi Makinesi", "Yüksek Basınç Pompası", "Çimento Mikser Ünitesi", "Sondaj Takip Sistemi"],
    result: "Jet grout perdesi tamamlandıktan sonra yapılan sızdırmazlık testleri başarıyla sonuçlandı. Liman genişlemesi güvenli biçimde inşaata başladı; perde boyunca yeraltı suyu kontrolü sağlandı.",
    seoTitle: "Ege Liman Genişleme Jet Grout Perdesi Projesi | YER6",
    metaDescription: "İzmir Ege Limanı genişleme projesi kapsamında deniz etkisinden korunmak üzere uygulanan 740 m uzunluğunda triple jet grout sızdırmazlık perdesi."
  },
  {
    slug: "ankara-rayli-sistem-iksa",
    key: "proj_ankara",
    category: "İksa",
    location: "Ankara",
    year: "2024",
    area: "26 m kazı derinliği",
    metric: "1.920 adet ankraj",
    title: "Ankara Raylı Sistem Etabı",
    summary: "Kent içinde hassas deplasman limitleriyle derin kazı ve iksa sistemi.",
    challenge: "Trafik, komşu yapılar ve servis hatları nedeniyle düşük toleranslı saha koşulları.",
    solution: "Ankrajlı kazıklı perde, izleme planları ve etaplı kazı senaryoları.",
    tags: ["Ankraj", "İksa", "Ulaşım"],
    image: "/images/projects/ankara-rayli-sistem-iksa.jpg",
    imageAlt: "Ankara kent içinde çok kademeli derin kazı ve iksa sistemi saha uygulaması — YER6 saha arşivi",
    soilProblem: "26 metre derinliğinde kent içi kazı; her iki yanında aktif trafik, tarihi yapılar ve kritik altyapı hatları bulunuyordu. İzin verilebilir yanal deplasman limiti yalnızca 15 mm idi.",
    solutionMethod: "Sekant fore kazık perde sistemi oluşturuldu; her kat kazıyla birlikte ön germeli ankrajlar yerleştirildi. İnklinometre ve referans noktaları ile deplasman anlık takip edildi; etaplı kazı senaryosu programla eş zamanlı güncellendi.",
    technicalInfo: [
      { label: "İksa Sistemi", value: "Ankrajlı Sekant Fore Kazık Perde" },
      { label: "Kazı Derinliği", value: "26 m" },
      { label: "Ankraj Adedi", value: "1.920 adet" },
      { label: "Kazık Çapı", value: "800 mm" },
      { label: "İzin Verilen Deplasman", value: "15 mm" },
      { label: "Ankraj Kat Sayısı", value: "5 kat" }
    ],
    usedEquipment: ["Rotary Delgi Makinesi (Fore Kazık)", "Ankraj Delgi ve Germe Ekipmanı", "İnklinometre Sistemi", "Dijital İzleme Platformu"],
    result: "Tüm kazı sürecinde inklinometre okumaları izin verilen limitin altında kaldı. Raylı sistem istasyonu için gereken bodrum kazısı, komşu yapılara herhangi bir hasar vermeksizin güvenle tamamlandı.",
    seoTitle: "Ankara Raylı Sistem Derin Kazı İksa Projesi | YER6",
    metaDescription: "Ankara kent içi raylı sistem projesinde 26 metre derinlikte uygulanan ankrajlı sekant fore kazık perde ve iksa sistemi detayları."
  },
  {
    slug: "istanbul-rezidans-fore-kazik",
    key: "proj_istanbul",
    category: "Fore Kazık",
    location: "İstanbul",
    year: "2024",
    area: "58 kat",
    metric: "1.240 m³ beton günlük pik",
    title: "İstanbul Karma Kullanım Kulesi",
    summary: "Yüksek yapı temel sistemi için büyük çaplı fore kazık ve baret entegrasyonu.",
    challenge: "Sınırlı saha lojistiği ve yoğun beton-donatı koordinasyonu.",
    solution: "Rotary delgi, kalite formları ve beton döküm takip sistemi ile sürekli imalat.",
    tags: ["Fore Kazık", "Yüksek Yapı", "Temel"],
    image: "/images/projects/istanbul-rezidans-fore-kazik.jpg",
    soilProblem: "58 katlı karma kullanım kulesi için yüzeysel temel sistemi yüzey altı zemin koşulları nedeniyle yetersizdi. Yüksek sıkışma ve moment yüklerinin taşınması için derin temel sistemi zorunluydu.",
    solutionMethod: "Büyük çaplı fore kazıklar ve baret temel sistemi birlikte tasarlandı. Tremie yöntemiyle beton döküm yapıldı; her kazık için beton sarf, dikeylik ve bütünlük kaydı tutuldu. Crosshole sonic logging ile kazık bütünlüğü doğrulandı.",
    technicalInfo: [
      { label: "Uygulama Yöntemi", value: "Fore Kazık + Baret" },
      { label: "Kazık Çapı", value: "1.000–1.500 mm" },
      { label: "Kazık Derinliği", value: "35–55 m" },
      { label: "Beton Kalitesi", value: "C35/45" },
      { label: "Günlük Pik Beton", value: "1.240 m³" },
      { label: "Kalite Testi", value: "CSL (Crosshole Sonic Logging)" }
    ],
    usedEquipment: ["Büyük Çaplı Rotary Delgi Makinesi (KR300)", "Tremie Boru Sistemi", "Donatı Kafesi Vinaç ve Yerleştirme Ekipmanı", "CSL Test Ekipmanı"],
    result: "Tüm fore kazıklar CSL testini başarıyla geçti. Baret temel sistemi yapı yükleme programına tam uyumla tamamlandı. Kule inşaatının temel aşaması planlanan sürede bitirildi.",
    seoTitle: "İstanbul Karma Kullanım Kulesi Fore Kazık Temeli | YER6",
    metaDescription: "İstanbul'da 58 katlı kule projesi için uygulanan büyük çaplı fore kazık ve baret derin temel sistemine ait teknik uygulamalar."
  },
  {
    slug: "bursa-yunuseli-nida-evleri-jet-grout-zemin-iyilestirme",
    key: "proj_bursa_yunuseli",
    category: "Jet Grout",
    location: "Yunuseli, Bursa",
    year: "2026",
    area: "Temel altı zemin iyileştirme",
    metric: "6.200 m jet grout",
    title: "Bursa Yunuseli Nida Evleri Jet Grout Zemin İyileştirme Projesi",
    summary: "Bursa Yunuseli bölgesinde Nida Evleri projesi için temel altı jet grout zemin iyileştirme uygulaması.",
    challenge: "Zayıf zemin tabakalarının iyileştirilmesi, oturma risklerinin azaltılması ve temel altı taşıyıcı sistemin güçlendirilmesi ihtiyacı.",
    solution: "15 m kolon boyu ve 60 cm kolon çapı ile yüksek basınçlı çimento enjeksiyonuna dayalı jet grout kolon imalatı.",
    tags: ["Jet Grout", "Zemin İyileştirme", "Temel Altı Güçlendirme"],
    image: "/images/projects/bursa-yunuseli-nida-evleri/bursa-yunuseli-nida-evleri-jet-grout-hero.webp",
    imageAlt: "Bursa Yunuseli Nida Evleri jet grout zemin iyileştirme sahası ve enjeksiyon ekipmanı",
    seoTitle: "Bursa Yunuseli Jet Grout Zemin İyileştirme Projesi | YER6 Geotechnical",
    metaDescription: "Bursa Yunuseli Nida Evleri projesinde 6.200 metre jet grout zemin iyileştirme uygulaması. 15 m kolon boyu ve 60 cm kolon çapı ile temel altı güçlendirme çalışması.",
    projectOverview: "Bursa Yunuseli bölgesinde yer alan Nida Evleri projesinde, temel altı zemin iyileştirme kapsamında jet grout uygulaması gerçekleştirilmiştir. Yaklaşık 6.200 metre imalat kapsamında 15 metre boyunda ve 60 cm çapında jet grout kolonları oluşturularak zemin taşıma kapasitesinin artırılması ve yapı temel güvenliğinin desteklenmesi hedeflenmiştir.",
    technicalSummary: "Yüksek basınçlı çimento enjeksiyonu ile zeminde kontrollü kolon oluşumu sağlanmış, uygulama saha koşullarına göre planlanmıştır. Jet grout yöntemiyle zayıf zemin tabakalarının iyileştirilmesi, oturma risklerinin azaltılması ve temel altı taşıyıcı sistemin güçlendirilmesi amaçlanmıştır.",
    soilProblem: "Temel altı zemin iyileştirme ihtiyacı kapsamında zayıf zemin tabakalarının iyileştirilmesi, oturma risklerinin azaltılması ve zemin taşıma kapasitesinin artırılması hedeflenmiştir.",
    solutionMethod: "Jet grout yöntemiyle yüksek basınçlı çimento enjeksiyonu uygulanmış; 15 metre boyunda ve 60 cm çapında kolonlar oluşturularak temel altı taşıyıcı sistem desteklenmiştir.",
    technicalInfo: [
      { label: "Uygulama Türü", value: "Jet Grout / Zemin İyileştirme" },
      { label: "Konum", value: "Yunuseli, Bursa" },
      { label: "Toplam İmalat", value: "6.200 m jet grout" },
      { label: "Kolon Boyu", value: "15 m" },
      { label: "Kolon Çapı", value: "60 cm" },
      { label: "Kapsam", value: "Temel altı zemin iyileştirme" }
    ],
    applicationScope: [
      "Temel altı zemin iyileştirme kapsamında jet grout uygulaması",
      "Yaklaşık 6.200 metre jet grout imalatı",
      "15 metre boyunda ve 60 cm çapında jet grout kolonları",
      "Zemin taşıma kapasitesinin artırılması",
      "Oturma risklerinin azaltılması",
      "Yapı temel güvenliğinin desteklenmesi"
    ],
    gallery: [
      {
        src: "/images/projects/bursa-yunuseli-nida-evleri/bursa-yunuseli-nida-evleri-jet-grout-temiz-dikey.webp",
        alt: "Bursa Yunuseli Nida Evleri jet grout zemin iyileştirme sahası ve enjeksiyon ekipmanı"
      }
    ],
    relatedServiceSlugs: ["jet-grout", "zemin-iyilestirme"]
  },
  {
    slug: "pekintas-duzce-fabrika-jet-grout",
    key: "proj_pekintas_duzce",
    category: "Jet Grout",
    location: "Düzce",
    year: "2025",
    area: "",
    metric: "3.500 m jet grout",
    title: "Pekintaş Düzce Güneş Paneli Fabrikası Zemin Güçlendirme",
    summary: "Düzce'de Pekintaş güneş paneli fabrikası ek kurulum binası için temel altı zemin güçlendirme; 17 m boyunda jet grout kolonlarıyla toplam 3.500 m imalat.",
    challenge: "Güneş paneli üretim hattı ve ekipman yükleri altında düşük ve düzgün oturma gerektiren temel zemininin güçlendirilmesi.",
    solution: "Temel altında 17 m boyunda jet grout kolonları teşkil edilerek toplam 3.500 m imalatla, oturmaya duyarlı üretim tesisi zemini güçlendirildi.",
    seoTitle: "Pekintaş Düzce Güneş Paneli Fabrikası Jet Grout Zemin Güçlendirme | YER6",
    metaDescription: "Düzce'de Pekintaş güneş paneli fabrikası ek kurulum binası için temel altı jet grout zemin güçlendirme: 17 m kolon boyu, toplam 3.500 m imalat.",
    tags: ["Jet Grout", "Güneş Paneli Fabrikası", "Temel Güçlendirme"],
    image: "/images/projects/pekintas-duzce-fabrika-jet-grout.jpg",
    imageAlt: "Pekintaş Düzce güneş paneli fabrikası sahasında jet grout santrali, silo ve derin kazı — temel altı zemin güçlendirme",
    soilProblem:
      "Düzce'deki proje, Pekintaş'ın güneş paneli üretim fabrikasının ek kurulum binasına aitti. Üretim hatları ve ağır ekipman yükleri temel zemininde düşük ve düzgün oturma gerektirdiğinden, temel altı zeminin güçlendirilmesi kritikti.",
    solutionMethod:
      "Temel altı zemin güçlendirme için jet grout yöntemi uygulandı. 17 m boyunda jet grout kolonları teşkil edilerek toplam 3.500 m imalat gerçekleştirildi; kolonlar, oturmaya duyarlı üretim ekipmanı yüklerini daha güvenli biçimde taşıyacak şekilde düzenlendi.",
    technicalInfo: [
      { label: "Uygulama Yöntemi", value: "Jet Grout" },
      { label: "Lokasyon", value: "Düzce" },
      { label: "İşveren / Yüklenici", value: "Pekintaş" },
      { label: "Tesis Tipi", value: "Güneş Paneli Fabrikası (ek kurulum binası)" },
      { label: "Kolon Boyu", value: "17 m" },
      { label: "Toplam İmalat", value: "3.500 m" },
      { label: "Uygulama", value: "Temel altı zemin güçlendirme (jet grout)" }
    ],
    usedEquipment: ["Jet Grout Delgi Makinesi", "Yüksek Basınç Enjeksiyon Pompası", "Jet Grout Santrali / Mikser"],
    result:
      "Temel altı zemin, jet grout kolonlarıyla güçlendirilerek güneş paneli üretim tesisinin taşıma ve oturma güvenliği desteklendi. Uygulama, saha koşullarına uygun biçimde tamamlandı.",
    relatedServiceSlugs: ["jet-grout", "zemin-iyilestirme"]
  },
  {
    slug: "bozuyuk-sok-dondurma-tesisi-jet-grout",
    key: "proj_bozuyuk",
    category: "Jet Grout",
    location: "Bozüyük",
    year: "2025",
    area: "",
    metric: "2.500 m jet grout",
    title: "Bozüyük Gıda İşleme ve Şok Dondurma (IQF) Tesisi Zemin Güçlendirme",
    summary: "Bozüyük'te meyve işleme ve IQF şok dondurma tesisi için temel altı zemin güçlendirme; 12 m boyunda jet grout kolonlarıyla toplam 2.500 m imalat.",
    challenge: "Şok dondurma hatları, soğuk hava depoları ve ağır ekipman yükleri altında düşük ve düzgün oturma gerektiren temel zemininin güçlendirilmesi.",
    solution: "Temel altında 12 m boyunda jet grout kolonları teşkil edilerek toplam 2.500 m imalatla, oturmaya duyarlı tesis zemini güçlendirildi.",
    seoTitle: "Bozüyük IQF Tesisi Jet Grout ve Test Kazıkları | YER6",
    metaDescription: "Bozüyük IQF şok dondurma tesisinde 12 m jet grout kolonlarıyla 2.500 m zemin güçlendirme; kazıyla açılan test kazıkları ve saha kalite kontrolü.",
    tags: ["Jet Grout", "Test Kazıkları", "Saha Kalite Kontrolü", "Gıda / Şok Dondurma Tesisi", "Temel Güçlendirme"],
    image: "/images/projects/bozuyuk-sok-dondurma-tesisi-jet-grout.jpg",
    imageAlt: "Bozüyük gıda işleme ve şok dondurma (IQF) tesisi temel altı jet grout zemin güçlendirme sahası",
    soilProblem:
      "Bozüyük'teki tesis; meyvelerin temizlenip ayıklandığı, gramajlandığı ve IQF (bireysel hızlı şok dondurma) sistemiyle -35 °C ila -40 °C civarında tek tek dondurulup soğuk hava depolarında muhafaza edildiği bir gıda işleme tesisidir. Şok dondurma hatları, soğuk odalar ve depolama yükleri temel zemininde düşük ve düzgün oturma gerektirdiğinden, temel altı zeminin güçlendirilmesi kritikti.",
    solutionMethod:
      "Temel altı zemin güçlendirme için jet grout yöntemi uygulandı. 12 m boyunda jet grout kolonları teşkil edilerek toplam 2.500 m imalat gerçekleştirildi; kolonlar, oturmaya duyarlı üretim ve soğuk depolama yüklerini daha güvenli biçimde taşıyacak şekilde düzenlendi.",
    technicalInfo: [
      { label: "Uygulama Yöntemi", value: "Jet Grout" },
      { label: "Lokasyon", value: "Bozüyük" },
      { label: "İşveren / Yüklenici", value: "GYD Yapı İnşaat Taahhüt Ltd. Şti." },
      { label: "Tesis Tipi", value: "Gıda İşleme / IQF Şok Dondurma Tesisi" },
      { label: "Kolon Boyu", value: "12 m" },
      { label: "Toplam İmalat", value: "2.500 m" },
      { label: "Uygulama", value: "Temel altı zemin güçlendirme (jet grout)" },
      { label: "Saha Kontrolü", value: "Test kazıklarının kazı ile açığa çıkarılması" }
    ],
    usedEquipment: ["Jet Grout Delgi Makinesi", "Yüksek Basınç Enjeksiyon Pompası", "Jet Grout Santrali / Mikser"],
    result:
      "Temel altı zemin, jet grout kolonlarıyla güçlendirilerek gıda işleme ve şok dondurma tesisinin taşıma ve oturma güvenliği desteklendi. İmalat sonrası seçilen test kazıkları kazı ile açığa çıkarılarak görsel saha kontrolü yapıldı ve uygulama kayıt altına alındı.",
    gallery: [
      { src: "/images/projects/bozuyuk-sok-dondurma-tesisi-jet-grout.jpg", alt: "Bozüyük IQF şok dondurma tesisi jet grout zemin güçlendirme sahası" },
      { src: "/images/projects/bozuyuk-sok-dondurma-tesisi-jet-grout-2.jpg", alt: "Bozüyük IQF şok dondurma tesisi jet grout uygulama sahası" },
      {
        src: "/images/projects/bozuyuk-jet-grout-test-kazigi-kalite-kontrolu-1.jpg",
        alt: "Bozüyük Bilecik jet grout test kazığının kazı ile açığa çıkarıldığı saha kalite kontrol çalışması"
      },
      {
        src: "/images/projects/bozuyuk-jet-grout-test-kazigi-kalite-kontrolu-2.jpg",
        alt: "Bozüyük IQF tesisi zemin güçlendirme projesinde açığa çıkarılan jet grout test kazıkları"
      }
    ],
    relatedServiceSlugs: ["jet-grout", "zemin-iyilestirme"]
  },
  {
    slug: "bina-alti-jet-grout-guclendirme",
    key: "proj_bina_alti_jet",
    category: "Jet Grout",
    location: "Türkiye",
    year: "2025",
    area: "",
    metric: "Sınırlı yükseklikte kompakt imalat",
    title: "Mevcut Bina Altında Jet Grout Temel Güçlendirmesi",
    summary: "Mevcut yapı çevresinde sınırlı çalışma alanında, kompakt paletli delgi ekipmanı ile temel altı jet grout güçlendirme uygulaması.",
    challenge: "Mevcut yapı yakınında dar manevra alanı ve sınırlı çalışma yüksekliği; standart boyutlu jet grout ekipmanının sahaya giremediği koşullar.",
    solution: "Düşük yükseklikte çalışabilen kompakt paletli delgi makinesi ile temel altına yüksek basınçlı çimento enjeksiyonu uygulanarak jet grout kolonları teşkil edildi.",
    tags: ["Jet Grout", "Bina Altı Güçlendirme", "Kompakt Ekipman"],
    image: "/images/projects/saha/bina-alti-jet-grout-kompakt-makine.webp",
    imageAlt: "Bina altı jet grout güçlendirme için kullanılan kompakt paletli delgi makinesi — YER6 saha arşivi",
    soilProblem: "Mevcut yapının temel zemini, ilave yükler ve oturma riskleri nedeniyle güçlendirme gerektiriyordu. Yapının kullanımda olması ve çevresindeki dar alan, büyük boyutlu ekipman kullanımını imkânsız kılıyordu.",
    solutionMethod: "Dar alanlara girebilen kompakt paletli jet grout delgi makinesi sahaya alındı. Temel altına ulaşan delgilerle yüksek basınçlı çimento enjeksiyonu yapılarak zemin, yerinde kolonlar halinde güçlendirildi. Uygulama, yapı kullanımını kesintiye uğratmadan kademeli olarak yürütüldü.",
    technicalInfo: [
      { label: "Uygulama Yöntemi", value: "Bina Altı Jet Grout" },
      { label: "Ekipman", value: "Kompakt paletli delgi makinesi" },
      { label: "Çalışma Koşulu", value: "Sınırlı yükseklik ve dar manevra alanı" },
      { label: "Uygulama", value: "Temel altı zemin güçlendirme" }
    ],
    usedEquipment: ["Kompakt Paletli Jet Grout Delgi Makinesi", "Yüksek Basınç Enjeksiyon Pompası", "Jet Grout Santrali / Mikser"],
    result: "Temel altı zemin, yapı kullanımı kesintiye uğratılmadan jet grout kolonlarıyla güçlendirildi. Kompakt ekipman sayesinde standart makinelerin giremeyeceği alanlarda imalat tamamlandı.",
    seoTitle: "Mevcut Bina Altında Jet Grout Temel Güçlendirmesi",
    metaDescription: "Mevcut yapı altında sınırlı yükseklikte kompakt ekipmanla jet grout zemin güçlendirme: dar alanda temel altı kolon imalatı ve saha uygulaması.",
    video: {
      videoId: "HcMN8T1X4d8",
      title: "Bina Kenarında Jet Grout Uygulaması — Saha Videosu",
      caption:
        "Mevcut yapının hemen yanında yürütülen jet grout imalatı: delgi, yüksek basınçlı çimento enjeksiyonu ve kolon teşkili. Bina kenarındaki uygulamalarda imalat sırası ve kolon aralığı, komşu yapıda hareket oluşmaması için proje kapsamında planlanır.",
      orientation: "portrait" as const
    },
    relatedServiceSlugs: ["bina-alti-jet-grout", "jet-grout"]
  },
  {
    slug: "korfez-bolgesi-fore-kazik-projesi",
    key: "proj_korfez_fore",
    category: "Fore Kazık",
    location: "Körfez Bölgesi (Yurt Dışı)",
    year: "2017",
    area: "",
    metric: "Çok makineli eş zamanlı imalat",
    title: "Körfez Bölgesi Kule Gelişim Projesi Derin Temel Kazıkları",
    summary: "Körfez bölgesinde büyük ölçekli bir gelişim projesinde, çok sayıda rotary delgi makinesinin eş zamanlı çalıştığı derin temel kazık imalatı.",
    challenge: "Geniş imalat alanında yüksek üretim temposu; sıcak iklim koşullarında çok makineli filo koordinasyonu ve sürekli beton-donatı lojistiği.",
    solution: "Bauer BG 40, IFG BG 36 ve SANY rotary delgi makinelerinden oluşan filo ile paletli servis vinci desteğinde eş zamanlı kazık imalatı planlandı ve yürütüldü.",
    tags: ["Fore Kazık", "Yurt Dışı", "Derin Temel"],
    image: "/images/projects/saha/korfez-fore-kazik-hero.webp",
    imageAlt: "Körfez bölgesinde gökdelen siluetli sahada Bauer BG 40 fore kazık delgi makinesi ve paletli vinç",
    soilProblem: "Bölgeye özgü zayıf ve gevşek üst tabakalar, planlanan yapı yükleri için yüzeysel temel kullanımına izin vermiyordu. Yüksek yapı yüklerinin taşıyıcı tabakalara güvenle aktarılması için büyük çaplı fore kazıklardan oluşan derin temel sistemi gerekiyordu.",
    solutionMethod: "Sahada Bauer BG 40, IFG BG 36 ve SANY rotary delgi makinelerinden oluşan filo eş zamanlı çalıştırıldı. Delgiler muhafaza (kelly) sistemiyle açıldı, donatı kafesleri paletli servis vinçleriyle yerleştirildi ve beton dökümü kesintisiz sürdürüldü. İmalat sırası, makine trafiği ve lojistik günlük planlarla koordine edildi.",
    technicalInfo: [
      { label: "Uygulama Yöntemi", value: "Büyük Çaplı Fore Kazık" },
      { label: "Konum", value: "Körfez Bölgesi (Yurt Dışı)" },
      { label: "Makine Filosu", value: "Bauer BG 40, IFG BG 36, SANY rotary delgi makineleri" },
      { label: "Destek Ekipmanı", value: "Paletli servis vinçleri" },
      { label: "Çalışma Düzeni", value: "Çok makineli eş zamanlı imalat" }
    ],
    usedEquipment: ["Bauer BG 40 Rotary Delgi Makinesi", "IFG BG 36 Rotary Delgi Makinesi", "SANY Rotary Delgi Makineleri", "Paletli Servis Vinçleri", "Donatı Kafesi Yerleştirme Ekipmanı"],
    result: "Çok makineli filo düzeniyle yüksek imalat temposu korundu; derin temel kazıkları proje programına uygun şekilde tamamlandı.",
    seoTitle: "Körfez Bölgesi Kule Gelişim Projesi Derin Temel Kazıkları",
    metaDescription: "Körfez bölgesinde Bauer BG 40, IFG BG 36 ve SANY delgi makineleriyle çok makineli eş zamanlı büyük çaplı fore kazık imalatı — YER6 yurt dışı saha uygulaması.",
    gallery: [
      { src: "/images/projects/saha/korfez-fore-kazik-01.webp", alt: "Körfez sahasında sıralı rotary delgi makineleri ve kırmızı paletli vinçler" },
      { src: "/images/projects/saha/korfez-fore-kazik-02.webp", alt: "Geniş imalat alanında eş zamanlı çalışan fore kazık makineleri" },
      { src: "/images/projects/saha/korfez-fore-kazik-03.webp", alt: "Dört rotary delgi makinesinin sıralandığı fore kazık imalat hattı" },
      { src: "/images/projects/saha/korfez-fore-kazik-04.webp", alt: "Şehir silueti önünde gece-gündüz çalışan fore kazık ekipmanları" },
      { src: "/images/projects/saha/korfez-fore-kazik-05.webp", alt: "Fore kazık sahasında makineler arasında yürüyen saha personeli" },
      { src: "/images/projects/saha/korfez-fore-kazik-06.webp", alt: "Gökdelen manzaralı sahada tek rotary delgi makinesi ile kazık imalatı" },
      { src: "/images/projects/saha/korfez-fore-kazik-07.webp", alt: "Servis vinci kancası altında fore kazık donatı hazırlığı" }
    ],
    relatedServiceSlugs: ["fore-kazik"]
  },
  {
    slug: "avrupa-kentsel-saha-kazik-imalati",
    key: "proj_avrupa_kazik",
    category: "Fore Kazık",
    location: "Çekya (Orta Avrupa)",
    year: "2020",
    area: "",
    metric: "Kent merkezinde dar alan imalatı",
    title: "Çekya Ofis Kampüsü Kazık ve İksa Uygulaması",
    summary: "Yoğun kent dokusunda, ofis yapılarına komşu bir sahada iksa perdesi önünde kazık imalatı.",
    challenge: "Çevre yapılara yakınlık, dar çalışma koridoru ve kent merkezi trafiği içinde ekipman lojistiği; düşük titreşimli imalat gerekliliği.",
    solution: "Kompakt sınıf delgi makinesi ile ahşap kaplamalı iksa perdesi önünde kontrollü kazık imalatı yürütüldü; çevre yapılar üzerindeki etkiler sınırlandırıldı.",
    tags: ["Fore Kazık", "İksa", "Kentsel Saha", "Yurt Dışı"],
    image: "/images/projects/saha/avrupa-kentsel-kazik-imalati.webp",
    imageAlt: "Avrupa kent merkezinde ofis binaları önünde iksa perdesi ve kazık delgi makinesi",
    soilProblem: "Kent merkezindeki derin kazı, komşu ofis yapılarının temellerine yakın konumdaydı. Kazı güvenliğinin sağlanması ve çevre yapılarda deformasyonun önlenmesi için kazı çevresinde destekli bir perde sistemi gerekiyordu.",
    solutionMethod: "Kazı çevresinde ahşap kaplamalı iksa perdesi teşkil edildi; perde önünde kompakt delgi makinesi ile kazık imalatı yapıldı. İmalat sırası, komşu yapı temellerine binen yükleri kademeli aktaracak şekilde planlandı.",
    technicalInfo: [
      { label: "Uygulama Yöntemi", value: "Kazık + İksa Perdesi" },
      { label: "Konum", value: "Çekya (Orta Avrupa)" },
      { label: "Saha Tipi", value: "Yoğun kent dokusu, komşu yapılara bitişik" },
      { label: "Çalışma Koşulu", value: "Dar koridor, düşük titreşim gerekliliği" }
    ],
    usedEquipment: ["Kompakt Delgi Makinesi", "İksa Perde Sistemi", "Deformasyon İzleme Ekipmanı"],
    result: "Kazı, komşu yapılara zarar vermeden güvenle desteklendi; kent merkezi koşullarında imalat programı korundu.",
    seoTitle: "Çekya Ofis Kampüsü Kazık ve İksa Uygulaması",
    metaDescription: "Çekya'da yoğun kent dokusunda iksa perdesi önünde kazık imalatı: dar alan, düşük titreşim ve komşu yapı güvenliği — YER6 yurt dışı uygulaması.",
    relatedServiceSlugs: ["fore-kazik", "iksa-sistemleri"]
  },
  {
    slug: "kopru-temeli-kazik-imalati",
    key: "proj_kopru_kazik",
    category: "Fore Kazık",
    location: "Güney Asya (Yurt Dışı)",
    year: "2018",
    area: "",
    metric: "Nehir yatağında muhafazalı delgi",
    title: "Güney Asya Nehir Köprüsü Temel Kazıkları",
    summary: "Mevcut köprü ayaklarına bitişik nehir yatağında, çelik muhafaza borulu kazık imalatı.",
    challenge: "Nehir yatağında yumuşak ve suya doygun zemin; mevcut köprü ayaklarına yakın çalışmada stabilite ve erişim kısıtları.",
    solution: "Rotary delgi makinesi ile çelik muhafaza boruları kullanılarak delgi stabilitesi sağlandı; kazıklar mevcut yapıya bitişik düzende imal edildi.",
    tags: ["Fore Kazık", "Köprü Temeli", "Yurt Dışı"],
    image: "/images/projects/saha/kopru-temeli-kazik-imalati.webp",
    imageAlt: "Nehir yatağında köprü ayağı yanında çelik muhafaza borusu ile kazık imalatı yapan rotary delgi makinesi",
    soilProblem: "Nehir yatağındaki gevşek, suya doygun alüvyon tabakalar delgi stabilitesini tehdit ediyordu. Köprü yüklerinin sağlam tabakalara aktarılması için derin kazık temel sistemi gerekiyordu.",
    solutionMethod: "Delgiler, göçmeyi önlemek amacıyla çelik muhafaza boruları sürülerek açıldı. Rotary delgi makinesi mevcut köprü ayaklarına bitişik konumlarda kademeli çalıştırıldı; kazık imalatı su seviyesi ve zemin koşulları izlenerek yürütüldü.",
    technicalInfo: [
      { label: "Uygulama Yöntemi", value: "Muhafaza Borulu Fore Kazık" },
      { label: "Saha Tipi", value: "Nehir yatağı, mevcut köprüye bitişik" },
      { label: "Delgi Stabilitesi", value: "Çelik muhafaza borusu" },
      { label: "Ekipman", value: "Rotary delgi makinesi" }
    ],
    usedEquipment: ["Rotary Delgi Makinesi", "Çelik Muhafaza Boruları", "Servis Ekipmanları"],
    result: "Zorlu nehir yatağı koşullarında delgi stabilitesi muhafaza borularıyla sağlandı; köprü temel kazıkları güvenle tamamlandı.",
    seoTitle: "Güney Asya Nehir Köprüsü Temel Kazıkları",
    metaDescription: "Nehir yatağında mevcut köprü ayaklarına bitişik, çelik muhafaza borulu fore kazık imalatı — YER6 Güney Asya köprü temeli uygulaması.",
    relatedServiceSlugs: ["fore-kazik"]
  },
  {
    slug: "yurt-disi-konut-fore-kazik",
    key: "proj_konut_fore",
    category: "Fore Kazık",
    location: "Güney Asya (Yurt Dışı)",
    year: "2016",
    area: "",
    metric: "Bauer BG 28 + SANY filosu",
    title: "Güney Asya Toplu Konut Projesi Fore Kazık İmalatı",
    summary: "Çok bloklu bir konut gelişim projesinde Bauer BG 28 ve SANY rotary delgi makineleriyle fore kazık imalatı.",
    challenge: "Yağışlı dönemde saha zemin koşullarının değişkenliği; çok bloklu yerleşimde makine kaydırma ve imalat sırası koordinasyonu.",
    solution: "Bauer BG 28 ve SANY rotary delgi makineleri blok bazlı imalat planına göre kaydırılarak kazık imalatı kesintisiz sürdürüldü.",
    tags: ["Fore Kazık", "Konut", "Yurt Dışı"],
    image: "/images/projects/saha/konut-fore-kazik-hero.webp",
    imageAlt: "Konut projesi sahasında Bauer BG 28 rotary delgi makinesi kelly bar ve delgi ekipmanı yakın görünüm",
    soilProblem: "Konut bloklarının oturduğu alanda üst tabakalar değişken sertlikte ve yer yer suya doygundu. Blok yüklerinin güvenle taşınması için kazıklı temel sistemi tasarlanmıştı.",
    solutionMethod: "Bauer BG 28 ve SANY rotary delgi makineleri sahada blok bazlı sırayla konumlandırıldı. Delgi, donatı kafesi yerleştirme ve beton döküm zinciri her blokta aynı düzenle tekrarlanarak imalat hızı standartlaştırıldı.",
    technicalInfo: [
      { label: "Uygulama Yöntemi", value: "Fore Kazık" },
      { label: "Konum", value: "Güney Asya (Yurt Dışı)" },
      { label: "Makine Filosu", value: "Bauer BG 28, SANY rotary delgi makineleri" },
      { label: "Saha Tipi", value: "Çok bloklu konut gelişim projesi" }
    ],
    usedEquipment: ["Bauer BG 28 Rotary Delgi Makinesi", "SANY Rotary Delgi Makinesi", "Donatı Kafesi ve Beton Döküm Ekipmanları"],
    result: "Blok bazlı imalat planıyla makine kaydırmaları ve kazık imalatı kesintisiz yürütüldü; temel imalatları üstyapı programını aksatmadan tamamlandı.",
    seoTitle: "Güney Asya Toplu Konut Projesi Fore Kazık İmalatı",
    metaDescription: "Güney Asya'da çok bloklu konut projesinde Bauer BG 28 ve SANY delgi makineleriyle fore kazık imalatı — YER6 yurt dışı saha uygulaması.",
    gallery: [
      { src: "/images/projects/saha/konut-fore-kazik-01.webp", alt: "Konut sahasında kazık imalatı yapan kırmızı SANY rotary delgi makinesi" },
      { src: "/images/projects/saha/konut-fore-kazik-02.webp", alt: "Bauer BG 28 rotary delgi makinesi konut projesi sahasında" }
    ],
    relatedServiceSlugs: ["fore-kazik"]
  }
];

// İşveren, sözleşme veya saha kaynağıyla doğrulanmamış örnek kayıtlar kamuya
// referans proje olarak sunulmaz. Doğrulanırlarsa bu listeye yeniden alınabilir.
const unpublishedProjectSlugs = new Set([
  "istanbul-rezidans-fore-kazik"
]);

export const projects = projectCatalog.filter((project) => !unpublishedProjectSlugs.has(project.slug));

export const equipment = [
  {
    key: "eq_bauer_bg_45",
    groupKey: "fleetGroupForePile",
    icon: "building",
    image: "/images/equipment/bauer-bg-45.jpg",
    imageAlt: "Bauer BG 45 fore kazık delgi makinesi şantiye fotoğrafı"
  },
  {
    key: "eq_bauer_bg_28_h",
    groupKey: "fleetGroupForePile",
    icon: "building",
    image: "/images/equipment/bauer-bg-28.jpg",
    imageAlt: "Bauer BG 28 H PremiumLine fore kazık delgi makinesi şantiye fotoğrafı"
  },
  {
    key: "eq_bauer_bg_18_h",
    groupKey: "fleetGroupForePile",
    icon: "building",
    image: "/images/equipment/bauer-bg-18.jpg",
    imageAlt: "Bauer BG 18 H BT 50 PremiumLine fore kazık delgi makinesi şantiye fotoğrafı"
  },
  {
    key: "eq_xcmg_xr220d",
    groupKey: "fleetGroupForePile",
    icon: "building",
    image: "/images/equipment/xcmg-xr220d.jpg",
    imageAlt: "XCMG XR220D fore kazık delgi makinesi fotoğrafı"
  },
  {
    key: "eq_soilmec_sm_401_drill",
    groupKey: "fleetGroupJetAnchor",
    icon: "drill",
    image: "/images/equipment/soilmec-sm-401.jpg",
    imageAlt: "Soilmec SM-401 kazık delgi makinesi şantiye fotoğrafı"
  },
  {
    key: "eq_soilmec_sm_14_drill",
    groupKey: "fleetGroupJetAnchor",
    icon: "drill",
    image: "/images/equipment/soilmec-sm-14.jpg",
    imageAlt: "Soilmec SM-14 jet grout, ankraj ve mikro kazık delgi makinesi fotoğrafı",
    imageCredit: "Fotoğraf: Tommaso Saccarola"
  },
  {
    key: "eq_mdt_180_b_drill",
    groupKey: "fleetGroupJetAnchor",
    icon: "drill",
    image: "/images/equipment/mdt-180-b.jpg",
    imageAlt: "MDT 180 B paletli jet grout, ankraj ve mikro kazık delgi makinesi fotoğrafı"
  },
  {
    key: "eq_casagrande_c6_xp_2",
    groupKey: "fleetGroupJetAnchor",
    icon: "anchor",
    image: "/images/equipment/casagrande-c6-xp-2.jpg",
    imageAlt: "Casagrande C6 XP-2 paletli ankraj, mikro kazık ve jet grout delgi makinesi şantiye fotoğrafı"
  },
  {
    key: "eq_soilmec_5t_400j_pump",
    groupKey: "fleetGroupPumpPlant",
    icon: "gauge",
    image: "/images/equipment/soilmec-5t-400j-pump.jpg",
    imageAlt: "Konteyner içerisinde kurulu Soilmec 5T 400J yüksek basınçlı jet grout pompası"
  },
  {
    key: "eq_metax_mp7_pump",
    groupKey: "fleetGroupPumpPlant",
    icon: "gauge",
    image: "/images/equipment/metax-mp7-pump.jpg",
    imageAlt: "Şantiyede tek konteyner içerisinde kurulu Metax MP7 yüksek basınçlı triplex jet grout pompası"
  },
  {
    key: "eq_soilmec_santral",
    groupKey: "fleetGroupPumpPlant",
    icon: "layers",
    image: "/images/equipment/soilmec-gm-25-mixing-plant.jpg",
    imageAlt: "Konteyner içerisinde kurulu Soilmec GM-25 jet grout çimento şerbeti karıştırma santrali"
  },
  {
    key: "eq_silo_60_ton",
    groupKey: "fleetGroupSilo",
    icon: "building",
    image: "/images/equipment/cement-silo-60-ton.jpg",
    imageAlt: "60 ton kapasiteli tek dikey çimento stok silosu",
    imageSourceUrl:
      "https://german.mobile-concretebatchplant.com/sale-45636110-8850mm-total-height-60-ton-concrete-cement-silo-high-performance.html",
    imageCredit: "Ürün fotoğrafı: TORUI 60T çimento silosu"
  }
];

export const equipmentGroupKeys = [
  "fleetGroupForePile",
  "fleetGroupJetAnchor",
  "fleetGroupPumpPlant",
  "fleetGroupSilo"
] as const;

export const workflow = [
  { key: "wf1", icon: MapPinned },
  { key: "wf2", icon: Gauge },
  { key: "wf3", icon: Network },
  { key: "wf4", icon: BadgeCheck }
];

export const certificateKeys = [
  "cert_methodology",
  "cert_calibration",
  "cert_qa"
];

export const team = [
  { key: "team_design", icon: Waves },
  { key: "team_ops", icon: Factory },
  { key: "team_qa", icon: BadgeCheck }
];

export const blogArticles = [
  {
    slug: "jet-grout-nedir",
    key: "blog_jet_grout",
    read: "9 dk",
    title: "Jet Grout Nedir? Kullanım Alanları ve Çalışma Prensibi",
    excerpt: "Kolon geometrisi, enjeksiyon parametreleri ve kalite kontrol adımlarıyla jet grout teknik rehberi.",
    category: "Jet Grout"
  },
  {
    slug: "fore-kazik-nedir",
    key: "blog_fore_kazik",
    read: "8 dk",
    title: "Fore Kazık Nedir? Tasarım ve Uygulama Esasları",
    excerpt: "Rotary delgi, bentonit ve beton döküm süreçleriyle fore kazık imalatının adım adım açıklaması.",
    category: "Fore Kazık"
  },
  {
    slug: "zemin-iyilestirme-yontemleri",
    key: "blog_zemin_iy",
    read: "14 dk",
    title: "Zemin İyileştirme Nedir? Yöntemler, Seçim ve Uygulama",
    excerpt: "Zemin iyileştirmenin tanımı, gerekli olduğu durumlar; jet grout, DSM, taş kolon, enjeksiyon ve kalite kontrol adımları.",
    category: "Zemin İyileştirme"
  },
  {
    slug: "jet-grout-uygulama-asamalari",
    key: "blog_jet_grout_asama",
    read: "10 dk",
    title: "Jet Grout Uygulama Aşamaları: Delgiden Kalite Kontrole",
    excerpt: "Saha hazırlığı, ekipman kurulumu, delgi, enjeksiyon ve karot testlerine kadar jet grout uygulama akışı.",
    category: "Jet Grout"
  },
  {
    slug: "fore-kazik-nerelerde-kullanilir",
    key: "blog_fore_kazik_alan",
    read: "8 dk",
    title: "Fore Kazık Nerelerde Kullanılır? Uygulama Alanları",
    excerpt: "Yüksek yapılardan köprülere, limanlardan derin kazı perdelerine fore kazığın tercih edildiği proje türleri.",
    category: "Fore Kazık"
  },
  {
    slug: "temel-alti-zemin-guclendirme",
    key: "blog_temel_alti",
    read: "10 dk",
    title: "Temel Altı Zemin Güçlendirme: Yöntemler ve Uygulama",
    excerpt: "Mevcut yapı altında jet grout, mini kazık ve kompansasyon enjeksiyonu ile underpinning uygulaması.",
    category: "Zemin İyileştirme"
  },
  {
    slug: "sivilasma-riskine-karsi-zemin-guclendirme",
    key: "blog_sivilasma",
    read: "11 dk",
    title: "Sıvılaşma Riskine Karşı Zemin Güçlendirme",
    excerpt: "Deprem bölgelerinde sıvılaşmaya yatkın zeminleri jet grout, DSM ve drenaj yöntemleriyle güçlendirme.",
    category: "Zemin İyileştirme"
  },
  {
    slug: "dsm-nedir",
    key: "blog_dsm_nedir",
    read: "9 dk",
    title: "DSM Nedir? Deep Soil Mixing Zemin İyileştirme",
    excerpt: "Derin zemin karıştırma yöntemi DSM'nin çalışma prensibi, sistem türleri ve tasarım kriterleri.",
    category: "DSM"
  },
  {
    slug: "mini-kazik-tercih-nedenleri",
    key: "blog_mini_kazik",
    read: "8 dk",
    title: "Mini Kazık Hangi Durumlarda Tercih Edilir?",
    excerpt: "Sınırlı alanlarda, mevcut yapı altında ve titreşim kısıtlı sahalarda mini kazığın uygulama koşulları.",
    category: "Mini Kazık"
  },
  {
    slug: "kazi-destek-sistemleri-nedir",
    key: "blog_kazi_destek",
    read: "10 dk",
    title: "Kazı Destek Sistemleri Nedir? İksa Türleri ve Seçim",
    excerpt: "Fore kazık perde, diyafram duvar, ankrajlı iksa ve çelik profil perdeler: derin kazı sistem seçim rehberi.",
    category: "İksa"
  }
];
