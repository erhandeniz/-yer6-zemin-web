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
    summary: "Türkiye'nin lider zemin iyileştirme ve jet grout firması YER6, zayıf zeminlerde taşıma kapasitesini artırmak için yüksek basınçlı enjeksiyonla zemin-çimento kolonları oluşturur.",
    detail: "Jet grout yapan firmalar arasında ileri mühendislik standartlarıyla öne çıkan YER6; 400-600 bar aralığındaki yüksek basınçlı çimento şerbetinin (grout), zemin matrisini parçalayarak yerinde zemin-çimento kolonları (soilcrete) oluşturması prensibine dayanır. Zorlu saha koşullarında, dar alanlarda ve mevcut yapılara bitişik (underpinning) kazılarda taşıma kapasitesini artırmak ve su geçirimsizlik perdesi (secant wall) sağlamak için en etkili geoteknik çözümdür.",
    specs: ["Mono, double ve triple sistem", "Gerçek zamanlı basınç ve debi takibi", "Kesintisiz yüzey dönüş (spoil) kontrolü"],
    applications: [
      "Derin kazılarda yeraltı suyu kesici (cutoff) geçirimsizlik perdeleri",
      "Mevcut yapıların temel altı güçlendirmesi (underpinning)",
      "Yumuşak kil ve gevşek kumlarda taşıma gücü (bearing capacity) artırımı",
      "Tünel ayna ve portal giriş stabilizasyonu, şaft kazıları",
      "Kıyı yapılarında deniz suyu girişini engelleyen sızdırmazlık perdeleri",
      "Sıvılaşma riskine karşı zemin iyileştirmesi"
    ],
    advantages: [
      "Mevcut yapılara sıfır titreşimle, yapısal hasar riski olmadan uygulanabilir.",
      "Kompakt ekipman yapısı sayesinde dar ve yüksekliği kısıtlı bodrum katlarda çalışılabilir.",
      "Zemin profiline göre Mono (sadece grout), Double (grout+hava) veya Triple (grout+su+hava) sistem seçimiyle optimize edilir.",
      "Geleneksel fore kazık yöntemlerinin aksine donatı gerektirmediği için daha hızlı ve ekonomiktir.",
      "Yeraltı su seviyesinin altındaki akıntılı kumlarda bile yüksek basınç sayesinde etkili birleşim sağlar.",
      "Uygulama esnasında dijital sensörlerle dönüş hızı (rpm) ve enjeksiyon debisi anlık izlenir."
    ],
    processSteps: [
      { title: "Zemin Modeli ve Ön Tasarım", description: "Geoteknik zemin etüdüne (SPT/CPT) dayalı olarak hedeflenen kolon çapı, derinliği ve kafes (grid) aralığı belirlenir." },
      { title: "Saha Deneme Kolonları (Zorunlu)", description: "Uluslararası standartlar (USACE, FHWA) gereği pilot kolonlar imal edilir. Hedef çap ve dayanım için basınç, çekme hızı ve su/çimento oranı sahada kalibre edilir." },
      { title: "Yüksek Basınçlı Enjeksiyon (Jetleme)", description: "Delgi tijinin ucundaki nozullardan 400-600 bar basınçla enjeksiyon basılırken, tij belirli bir hızda döndürülerek (rpm) yukarı çekilir." },
      { title: "Dönüş (Spoil) Kontrolü", description: "İmalat boyunca yüzeye sürekli malzeme (spoil) dönüşü sağlanarak kolon sürekliliği doğrulanır ve tehlikeli zemin kabarması (heave) engellenir." },
      { title: "Kalite Kabul Testleri", description: "Sertleşen jet grout kolonlarından karot alınarak (UCS - serbest basınç dayanımı) test edilir ve kolon sürekliliği raporlanarak teslim edilir." }
    ],
    technicalNote: "Bir jet grout uygulamasının kalitesi yalnızca kullanılan çimento miktarına değil, uygulanan kinetik enerjiye (basınç ve çekme hızı) bağlıdır. FHWA-HRT-13-046 yönergelerine göre, yüzeye sürekli çamur (spoil) dönüşünün kesilmesi jetlemenin durdurulmasını gerektirir; aksi takdirde yanal zemin kırılmaları (hidro-fraktür) oluşur. YER6, her projede deneme kolonu (trial column) uygulamasını standart olarak kabul eder.",
    faq: [
      { question: "Jet grout hangi zemin türlerinde uygulanır?", answer: "Jet grout; kum, silt, kil ve karma yapılı zeminlerde uygulanabilir. Ancak çok katı kil veya yoğun çakıllı (boulder) zeminlerde, yüksek kinetik enerji (Triple sistem) ve özel nozul tasarımları gerektirir." },
      { question: "Jet grout kolon çapı ne kadar olabilir?", answer: "Kullanılan sisteme (Mono, Double, Triple), zemin sıkılığına ve enjeksiyon parametrelerine bağlı olarak 0.40 metre ile 2.50 metre arasında kolon çapı elde edilebilir." },
      { question: "Mevcut yapının altında (bodrumda) jet grout uygulanabilir mi?", answer: "Evet. Mini kazık makinelerine entegre edilebilen kompakt jet grout kafaları ile mevcut yapıların bodrumlarında, minimum 2.5 - 3 metre tavan yüksekliği olan alanlarda titreşimsiz temel güçlendirme (underpinning) yapılabilir." },
      { question: "Jet grout uygulaması ne kadar sürer?", answer: "Uygulama hızı, zeminin delinebilirliğine ve kolon derinliğine bağlıdır. YER6'nın yüksek kapasiteli makine parkı sayesinde günlük 150-300 m/tül üretime çıkılabilmektedir." },
      { question: "Jet grout kolonlarının kalitesi nasıl test edilir?", answer: "Saha imalatından 7-28 gün sonra kolonlardan elmas uçlu karot alınır. Laboratuvarda UCS (Tek Eksenli Basınç) testi yapılarak tasarım mukavemetinin sağlanıp sağlanmadığı belgelenir." },
      { question: "Jet grout firmaları seçilirken hangi kriterler önemlidir?", answer: "Geoteknik firmanın kendi yüksek basınçlı pompalarına (Soilmec, Metax vb.) sahip olması, üretim esnasında dijital veri kaydı (data logger) tutabilmesi ve mutlaka saha deneme kolonu yapması en kritik faktörlerdir." }
    ]
  },
  {
    slug: "dsm",
    key: "svc_dsm",
    icon: Layers3,
    title: "DSM (Deep Soil Mixing)",
    summary: "Türkiye'de önde gelen DSM ve zemin iyileştirme firması olarak derin zemin karıştırma ile yüksek taşıma kapasitesi sağlıyoruz.",
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
      "Blade Rotation Number (BRN) takibiyle karıştırma enerjisi ve kolon homojenliği garanti edilir."
    ],
    processSteps: [
      { title: "Saha Karakterizasyonu ve Karışım Tasarımı", description: "Zemin numuneleri üzerinde laboratuvarda farklı çimento dozajları denenerek projenin hedef mukavemet (UCS) değeri tasarlanır." },
      { title: "Pilot İmalat ve Ekipman Kalibrasyonu", description: "Sahada deneme kolonları imal edilerek en uygun dönüş hızı (rpm) ve ilerleme hızı belirlenir." },
      { title: "Mekanik Karıştırma (Delgi)", description: "Çift veya tek milli DSM bıçakları zemini parçalayarak hedef derinliğe inerken, alttan düşük basınçlı çimento şerbeti basılır." },
      { title: "Yukarı Çekme ve Homojenizasyon", description: "Hedef derinliğe ulaşıldıktan sonra ekipman ters yönde dönerek yukarı çekilir; zemin ile çimento homojen şekilde karışarak kolon formunu alır." },
      { title: "Kalite Kabul ve Karot Testleri", description: "Tamamlanan kolonlardan 28 gün sonra karot alınarak tek eksenli basınç (UCS) testi ile tasarım hedefinin yakalandığı raporlanır." }
    ],
    technicalNote: "DSM tasarımında kritik mühendislik parametresi 'Karıştırma Enerjisi'dir (Mixing Energy). FHWA-NHI-13-046 rehberine göre kolon dayanımı, çimento miktarının yanı sıra bıçağın dönüş sayısı (Blade Rotation Number) ile doğrudan ilişkilidir. Organik içeriği yüksek killerde (%5 üzeri) saf çimento yerine çimento-kireç bağlayıcılar kullanılarak hidratasyon ısısı artırılır. YER6, her DSM projesinde laboratuvar karışım tasarımı yapar.",
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
    summary: "Profesyonel derin temel ve fore kazık firması YER6, ağır yapı yüklerini güvenle taşımak için kalite garantili uygulamalar gerçekleştirir.",
    detail: "Türkiye'deki öncü fore kazık firmaları arasında yüksek makine parkuru ve mühendislik tecrübesiyle bilinen YER6; fore kazık (bored pile) sistemlerini büyük çaplı temel projeleri, viyadükler ve derin kazı destek (iksa) sistemleri için vazgeçilmez bir taşıyıcı eleman olarak tasarlar. Bentonit/polimer destekli delgi, muhafaza borusu (casing) sürme ve tremie betonlama süreçlerini uluslararası FHWA standartlarına uygun yönetir.",
    specs: ["Rotary ve DTH delgi kapasitesi", "Sürekli dikeylik (vertikallik) kontrolü", "Crosshole Sonic Logging (CSL) bütünlük testi"],
    applications: [
      "Yüksek katlı ve karma kullanımlı yapıların derin temel sistemleri",
      "Kavşak, viyadük ve köprü ayağı temellerinde yüksek eksenel yük transferi",
      "Derin kent içi kazılarda ankrajlı kazıklı perde (kesişen kazık), diyafram duvar ve palplanş (sheet pile) sistemleriyle entegre imalatı",
      "Endüstriyel santral, baca ve ağır makine temelleri",
      "Liman, iskele ve sahil yapılarında suya dayanıklı temel teşkili"
    ],
    advantages: [
      "Zemin profili ne olursa olsun (sert kaya dahil) yüksek eksenel ve yanal taşıma kapasitesi.",
      "Titreşimsiz (non-displacement) bir yöntem olduğundan komşu yapılara zarar vermez.",
      "Geniş çap seçenekleri (60 cm - 250 cm) ile farklı yük senaryolarına tam uyum sağlar.",
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
      { question: "Fore kazık hangi zemin türlerinde, ne kadar derine uygulanabilir?", answer: "Fore kazık; kil, kum, çakıl ve hatta DTH ekipmanlarıyla sert kaya formasyonlarına uygulanabilir. Gelişmiş makine parkımızla 70 metre ve üzeri derinliklere inmek mümkündür. Sıvılaşma riski veya aşırı yeraltı suyu olan bölgelerde kesişen kazık veya diyafram duvar sistemleriyle kombine edilebilir." },
      { question: "Fore kazık betonunun kalitesi (bütünlüğü) nasıl doğrulanır?", answer: "ICE SPERW spesifikasyonlarına uygun olarak; düşük gerinimli süreklilik testi (PIT) veya donatı kafesine bağlanan borular yardımıyla ultrasonik dalga yansımalarını ölçen Crosshole Sonic Logging (CSL) testi ile doğrulanır." },
      { question: "Yeraltı suyu yüksek olan sahalarda kuyu nasıl göçmez?", answer: "Sulu ve kendini tutamayan (kohezyonsuz) zeminlerde, hidrostatiği dengelemek için kuyu içine Bentonit çamuru veya sentetik Polimer basılır, ya da tamamen çelik muhafaza borusu (casing) sürülerek kazı yapılır." },
      { question: "Fore kazık firması ararken nelere dikkat edilmelidir?", answer: "Fore kazık operasyonunda kaliteyi belirleyen temel unsurlar; firmanın yüksek torklu (ör. 220-300 kNm) makine parkı, bentonit/tremie süreçlerindeki teknik disiplini ve imalat sonrası PIT/CSL testleriyle işi belgelendirebilmesidir. YER6, mühendislik garantisiyle Türkiye'nin önde gelen fore kazık yüklenicilerindendir." }
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
    summary: "Zayıf veya deprem riski taşıyan zeminlerin mühendislik yöntemleriyle taşıyıcı ve stabil hale getirilmesi.",
    detail: "Zemin güçlendirme; sıvılaşma potansiyeli olan, aşırı oturma beklenen veya taşıma kapasitesi yetersiz zeminlerin fiziksel özelliklerinin iyileştirilerek yapısal yükleri güvenle taşıyacak hale getirilmesidir. TBDY 2018 ve uluslararası normlara uygun tasarlanan güçlendirme projeleri ile yapı-zemin etkileşimi güvenli sınırlara çekilir.",
    specs: ["Deprem ve sıvılaşma mitigasyonu", "Taşıma gücü artırımı", "Mevcut yapı altı takviye (underpinning)"],
    applications: [
      "Deprem bölgelerinde sıvılaşmaya yatkın sahaların güçlendirilmesi",
      "Mevcut binaların ve tarihi yapıların temel altı zemin güçlendirmesi",
      "Endüstriyel tesisler ve ağır makine temellerinde oturma kontrolü",
      "Şev stabilitesi ve heyelan bölgelerinde zemin çivisi/ankraj destekli güçlendirme",
      "Dolgu ve alüvyon zeminlerde platform stabilitesi sağlanması"
    ],
    advantages: [
      "Deprem anında sıvılaşma ve yanal yayılma risklerini minimize eder.",
      "Mevcut yapılara zarar vermeden (titreşimsiz) uygulanabilen yöntemler sunar.",
      "Derin kazı ve istinat yapılarında göçme riskini engeller.",
      "Projenin geoteknik ihtiyaçlarına göre (jet grout, mini kazık, enjeksiyon vb.) optimize edilir.",
      "Oturmaları kabul edilebilir sınırlar içinde tutarak üst yapıyı korur.",
      "Uluslararası standartlara uygun testlerle (karot, PIT, yükleme) kalitesi kanıtlanır."
    ],
    processSteps: [
      { title: "Mevcut Durum ve Risk Analizi", description: "Zemin etüt raporları (SPT, CPT, sismik hızlar) incelenerek zemin profili, sıvılaşma potansiyeli ve güçlendirme ihtiyacı belirlenir." },
      { title: "Yöntem Seçimi ve Tasarım", description: "Zemin tipine ve mevcut yapı durumuna göre en uygun yöntem (Jet Grout, DSM, Mini Kazık vb.) seçilir ve güçlendirme projesi çizilir." },
      { title: "Ekipman ve Mobilizasyon", description: "Sahadaki yükseklik kısıtlamalarına (ör. mevcut bodrum katlar) ve zemin şartlarına uygun kompakt veya yüksek kapasiteli makineler sevk edilir." },
      { title: "Uygulama ve Dijital Takip", description: "Zemin güçlendirme imalatı, kalite kontrol mühendisleri gözetiminde ve anlık dijital veri kayıt cihazlarıyla (data logger) gerçekleştirilir." },
      { title: "Performans Doğrulama Testleri", description: "Uygulama sonrası gerekli yükleme, karot veya jeofizik testler yapılarak zeminin hedeflenen taşıma gücüne ulaştığı belgelenir." }
    ],
    technicalNote: "Zemin güçlendirme projelerinde, Türkiye Bina Deprem Yönetmeliği (TBDY-2018) gereğince sıvılaşma tetiklenmesi ve sonrasındaki deformasyonlar kritik önemdedir. Sıvılaşmaya karşı güçlendirme yapıldığında, hedeflenen SPT-N veya kesme dalgası hızı (Vs) değerlerinin sağlanıp sağlanmadığı imalat sonrası testlerle doğrulanmalıdır. Ayrıca mevcut yapıların altındaki (underpinning) güçlendirme çalışmalarında, yapısal deplasmanları izlemek amacıyla mutlaka optik veya lazer topoğrafik ölçümler yapılmalıdır.",
    faq: [
      { question: "Zemin güçlendirme nedir ve neden yapılır?", answer: "Zemin güçlendirme; yapı yüklerini taşıyamayacak kadar zayıf olan veya depremde sıvılaşma riski taşıyan zeminlerin, çeşitli enjeksiyon, mekanik karıştırma veya kazık yöntemleriyle iyileştirilmesidir. Yapının güvenliğini ve ömrünü sağlamak için yapılır." },
      { question: "Mevcut (oturulan) bir binanın zemini güçlendirilebilir mi?", answer: "Evet. Özel kompakt makineler kullanılarak, bina dışından veya bodrum katından yapı temeline girilip 'underpinning' denilen temel altı zemin güçlendirme işlemleri (mini kazık, mikro jet grout vb.) yapılabilir." },
      { question: "Zemin güçlendirme firmaları arasında tercih yaparken nelere dikkat edilmeli?", answer: "Firmanın zemin mekaniği ve geoteknik mühendislik uzmanlığına, uygun makine parkına sahip olmasına ve imalat sonrası kalite kontrol testlerini (karot, yükleme) bağımsız raporlayabilme yeteneğine dikkat edilmelidir." },
      { question: "Zemin güçlendirme maliyeti nasıl hesaplanır?", answer: "Maliyet; zemin sınıfına, güçlendirme derinliğine, kullanılacak yönteme (jet grout, DSM, fore kazık vb.) ve toplam metraja göre hesaplanır. Geoteknik proje olmadan verilen fiyatlar yanıltıcı olabilir." },
      { question: "Zemin güçlendirme sıvılaşmayı önler mi?", answer: "Doğru tasarlanmış ve uygulanmış bir zemin güçlendirme (örneğin sık aralıklı jet grout veya taş kolon) deprem esnasında oluşan boşluk suyu basıncını sönümler veya zemini rijit bir bloğa çevirerek sıvılaşmayı engeller." }
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
      "Komşu yapıya sıfır toleranslı kentsel kazılar",
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
  {
    slug: "cmf-zemin-iyilestirme",
    key: "svc_cmf_zemin",
    icon: Drill,
    title: "CMF Zemin İyileştirme",
    summary: "Sürekli burgu ve mekanik karıştırma teknolojileriyle (CMF) zemin taşıma kapasitesini artıran gelişmiş geoteknik çözüm.",
    detail: "CMF (Continuous Mixing Foundation / Zemin İyileştirme), zayıf zemin profillerinde taşıma kapasitesini artırmak, oturma problemlerini çözmek ve sıvılaşma riskini minimize etmek amacıyla uygulanan son teknoloji bir zemin ıslahı yöntemidir. Özel CMF donanımları ve karıştırıcı bıçaklarla zeminin yerinde (in-situ) bağlayıcı maddelerle karıştırılması, homojen ve yüksek mukavemetli zemin-çimento kolonları oluşturur.",
    specs: ["Homojen karışım ve yüksek dayanım", "Çevre dostu titreşimsiz uygulama", "Hızlı ve ekonomik saha imalatı"],
    applications: [
      "Zayıf ve sıkışabilir zeminlerde temel güçlendirme",
      "Sıvılaşma potansiyeli yüksek alanlarda zemin ıslahı",
      "Endüstriyel tesisler ve ağır yük platformları",
      "Otoyol ve demiryolu yaklaşım dolgularında oturma kontrolü",
      "Liman ve depolama sahalarında taşıma kapasitesi artırımı"
    ],
    advantages: [
      "Derin zemin karıştırma (DSM) teknolojisiyle entegre yüksek verim",
      "Titreşimsiz (vibration-free) çalışma ile çevre yapılara sıfır zarar",
      "Geleneksel kazıklı sistemlere göre çok daha ekonomik ve hızlı",
      "Hafriyat maliyetlerini sıfıra indirerek çevreci çözüm sunar",
      "Zeminin doğal yapısını bağlayıcılar ile güçlendirerek uzun ömürlü temel oluşturur"
    ],
    processSteps: [
      { title: "Zemin Araştırması", description: "Sahadan alınan numunelerle laboratuvarda en uygun çimento-zemin karışım oranı (binder ratio) hesaplanır." },
      { title: "Ekipman Kurulumu", description: "Yüksek torklu CMF makine parkuru ve bağlayıcı üniteleri sahaya mobilize edilir." },
      { title: "Sürekli Karıştırma (Delgi)", description: "CMF helezonları ile hedeflenen derinliğe inilirken mekanik karıştırma işlemi başlatılır." },
      { title: "Bağlayıcı Enjeksiyonu", description: "Geri çekme aşamasında çimento şerbeti veya özel bağlayıcılar zeminle homojen bir şekilde karıştırılır." },
      { title: "Kalite Kontrol", description: "İmalat sonrası kolonlardan karot alınarak basınç dayanımı (UCS) ve süreklilik testleri uygulanır." }
    ],
    technicalNote: "CMF Zemin İyileştirme teknolojisi, klasik Jet Grout yönteminden farklı olarak hidrolik parçalama yerine mekanik karıştırma prensibini (Soil Mixing) benimser. Bu sayede özellikle killi ve siltli zeminlerde çok daha homojen bir çap ve öngörülebilir bir dayanım profili elde edilir. Ekipman üzerindeki sensörler ile dönüş devri (RPM), ilerleme hızı ve enjeksiyon debisi anlık olarak izlenir.",
    faq: [
      { question: "CMF Zemin İyileştirme hangi zeminlerde uygulanır?", answer: "Özellikle taşıma gücü zayıf olan kil, silt, turba ve gevşek kum zeminlerde yüksek verim sağlar. Çok sert kaya formasyonlarında veya yoğun çakıllı alanlarda tercih edilmez." },
      { question: "Jet Grout ile CMF arasındaki fark nedir?", answer: "Jet Grout yüksek basınçlı enjeksiyon ile zemini parçalar. CMF ise özel kanatlı helezonlar (auger) ile zemini mekanik olarak karıştırıp çimento ile harmanlar. CMF genellikle daha ekonomik ve geniş çaplı kolonlarda daha homojendir." },
      { question: "CMF Zemin İyileştirme sıvılaşmayı önler mi?", answer: "Evet. Zemin içerisinde oluşturulan rijit çimento-zemin blokları ve kolonları, deprem anında yanal yayılmayı ve aşırı boşluk suyu basıncını sönümleyerek sıvılaşmayı engeller." },
      { question: "Uygulama hızı nasıldır?", answer: "Geleneksel fore kazık ve kazı-dolgu yöntemlerine göre çok daha hızlıdır. Hafriyat çıkarma işlemi olmadığı için saha lojistiği ve üretim hızı oldukça yüksektir." }
    ]
  }
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicePaths() {
  return services.map((service) => ({ slug: service.slug }));
}

export const projects = [
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
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&fm=webp&q=72",
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
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&fm=webp&q=72",
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
    image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=1400&fm=webp&q=72",
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
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&fm=webp&q=72",
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
    seoTitle: "Bozüyük Gıda / IQF Şok Dondurma Tesisi Jet Grout Zemin Güçlendirme | YER6",
    metaDescription: "Bozüyük'te meyve işleme ve IQF şok dondurma tesisi için temel altı jet grout zemin güçlendirme: 12 m kolon boyu, toplam 2.500 m imalat.",
    tags: ["Jet Grout", "Gıda / Şok Dondurma Tesisi", "Temel Güçlendirme"],
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
      { label: "Uygulama", value: "Temel altı zemin güçlendirme (jet grout)" }
    ],
    usedEquipment: ["Jet Grout Delgi Makinesi", "Yüksek Basınç Enjeksiyon Pompası", "Jet Grout Santrali / Mikser"],
    result:
      "Temel altı zemin, jet grout kolonlarıyla güçlendirilerek gıda işleme ve şok dondurma tesisinin taşıma ve oturma güvenliği desteklendi. Uygulama, saha koşullarına uygun biçimde tamamlandı.",
    gallery: [
      { src: "/images/projects/bozuyuk-sok-dondurma-tesisi-jet-grout.jpg", alt: "Bozüyük IQF şok dondurma tesisi jet grout zemin güçlendirme sahası" },
      { src: "/images/projects/bozuyuk-sok-dondurma-tesisi-jet-grout-2.jpg", alt: "Bozüyük IQF şok dondurma tesisi jet grout uygulama sahası" }
    ],
    relatedServiceSlugs: ["jet-grout", "zemin-iyilestirme"]
  }
];

export const equipment = [
  {
    key: "eq_bauer_bg_28_h",
    groupKey: "fleetGroupForePile",
    icon: "building",
    imageAlt: "Bauer BG 28 H PremiumLine fore kazık delgi makinesi"
  },
  {
    key: "eq_bauer_bg_18_h",
    groupKey: "fleetGroupForePile",
    icon: "building",
    imageAlt: "Bauer BG 18 H BT 50 PremiumLine fore kazık delgi makinesi"
  },
  {
    key: "eq_xcmg_xr220d",
    groupKey: "fleetGroupForePile",
    icon: "building",
    imageAlt: "XCMG XR220D fore kazık delgi makinesi"
  },
  {
    key: "eq_soilmec_sm_401_drill",
    groupKey: "fleetGroupJetAnchor",
    icon: "drill",
    imageAlt: "Soilmec SM-401 jet grout kazık delgi makinesi"
  },
  {
    key: "eq_mdt_1800_drill",
    groupKey: "fleetGroupJetAnchor",
    icon: "drill",
    imageAlt: "MDT 1800 zemin iyileştirme kazık delgi makinesi"
  },
  {
    key: "eq_casagrande_c6_xp_2",
    groupKey: "fleetGroupJetAnchor",
    icon: "anchor",
    imageAlt: "Casagrande C6 XP-2 ankraj delgi makinesi"
  },
  {
    key: "eq_soilmec_5t_400j_pump",
    groupKey: "fleetGroupPumpPlant",
    icon: "gauge",
    imageAlt: "Soilmec 5T 400J jet grout pompası"
  },
  {
    key: "eq_metax_mp7_pump",
    groupKey: "fleetGroupPumpPlant",
    icon: "gauge",
    imageAlt: "Metax MP7 Pompa jet grout ve enjeksiyon pompası"
  },
  {
    key: "eq_soilmec_santral",
    groupKey: "fleetGroupPumpPlant",
    icon: "layers",
    imageAlt: "Soilmec Santral jet grout santrali"
  },
  {
    key: "eq_silo_60_ton",
    groupKey: "fleetGroupSilo",
    icon: "building",
    imageAlt: "60 tonluk çimento silosu"
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
  "cert_iso9001",
  "cert_iso14001",
  "cert_iso45001",
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
