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
    summary: "Yüksek basınçlı enjeksiyon ile düşük geçirgenlikli, yüksek dayanımlı zemin kolonları.",
    detail: "Dar sahalarda, mevcut yapılara yakın bölgelerde ve su yalıtımı gereken alanlarda kontrollü kolon geometrisi.",
    specs: ["Mono, double ve triple sistem", "Gerçek zamanlı basınç takibi", "Kolon çapı optimizasyonu"],
    applications: [
      "Su geçirimsizlik perdeleri ve zemin sızdırmazlığı",
      "Temel altı zemin iyileştirme ve mevcut yapı takviyesi",
      "Kazı tabanı stabilizasyonu ve şişme önleme",
      "Tünel giriş bölgesi ve köprü ayağı çevresi güçlendirme",
      "Kıyı yapıları ve liman zemin güçlendirmesi",
      "Deprem riskli bölgelerde sıvılaşmaya karşı zemin güçlendirme"
    ],
    advantages: [
      "Dar ve erişimi kısıtlı sahalarda kompakt ekipmanla uygulanabilir",
      "Mevcut yapılara sıfır titreşimle yakın çalışma imkânı",
      "Mono, double, triple sistem seçimiyle geniş uygulama yelpazesi",
      "Kolon çapı ve derinliği saha koşullarına göre optimize edilebilir",
      "Yeraltı suyu seviyesinin altında etkin geçirimsizlik sağlar",
      "Gerçek zamanlı basınç ve karışım takibiyle yüksek kalite güvencesi"
    ],
    processSteps: [
      { title: "Zemin Etüdü ve Projelendirme", description: "Sondaj verileri, laboratuvar sonuçları ve zemin modeli üzerinden kolon parametreleri (çap, derinlik, aralık, basınç) belirlenir." },
      { title: "Deneme Kolonları ve Kalibrasyon", description: "Üretim öncesinde saha koşullarına özgü deneme kolonları yapılır; enjeksiyon basıncı ve karışım oranı doğrulanır." },
      { title: "Saha Aplikasyonu ve Platform Hazırlığı", description: "Kolon merkezleri projeye uygun aplikasyon edilir, ekipman erişim yolları ve güvenlik koridorları hazırlanır." },
      { title: "Delgi ve Jet Enjeksiyonu", description: "Delgi makinesi belirlenen derinliğe iner; kontrollü geri çekilme sırasında yüksek basınçlı çimento karışımı enjekte edilerek zemin-çimento kolonu oluşturulur." },
      { title: "Kalite Kontrol ve Teslim", description: "Karot alımı, basınç testi ve süreklilik kontrolleri yapılır; tüm üretim verileri teslim dosyasına eklenir." }
    ],
    technicalNote: "Jet grout kolon çapı; zemin geçirimliliği, enjeksiyon basıncı ve geri çekilme hızına bağlı olarak 0,4 m ile 2,5 m arasında değişebilir. Silt ve kil içeren zeminlerde mono sistem yeterliyken, homojen kum tabakalarında triple sistem daha geniş çap sağlar. Her proje öncesinde deneme kolonları yapılması, üretim parametrelerinin güvenilir biçimde kalibre edilmesi açısından kritiktir.",
    faq: [
      { question: "Jet grout hangi zemin türlerinde uygulanır?", answer: "Jet grout; kum, silt, kil ve karma yapılı zeminlerde uygulanabilir. Çakıl ve iri dane içeren zemin katmanları enjeksiyon kontrolü açısından ayrıca değerlendirilmelidir." },
      { question: "Jet grout kolon çapı ne kadar olabilir?", answer: "Sistem türüne göre 0,4 m ile 2,5 m arasında kolon çapı elde edilebilir. Zemin tipi, enjeksiyon basıncı ve geri çekilme hızı çapı belirleyen temel değişkenlerdir." },
      { question: "Mevcut yapının altında jet grout uygulanabilir mi?", answer: "Evet. Kompakt ekipmanlar kullanılarak mevcut yapı bodrum katı veya temel altında jet grout uygulaması gerçekleştirilebilir. Uygulama öncesinde yapı yerleşimi ve zemin koşulları ayrıntılı incelenmelidir." },
      { question: "Jet grout uygulaması ne kadar sürer?", answer: "Uygulama süresi kolon sayısı, derinlik ve zemin koşullarına göre değişir. Günlük 50–150 adet kolon üretimi mümkündür; proje programı saha veri analizine göre optimize edilir." }
    ]
  },
  {
    slug: "dsm",
    key: "svc_dsm",
    icon: Layers3,
    title: "DSM",
    summary: "Derin zemin karıştırma ile taşıma kapasitesi ve oturma performansı kontrollü iyileştirme.",
    detail: "Yumuşak kil, gevşek kum ve dolgu alanlarında düşük vibrasyonlu, seri üretimli çözüm.",
    specs: ["Çimento bağlayıcı tasarımı", "Laboratuvar karışım tasarımı", "Kolon kalite kaydı"],
    applications: [
      "Yumuşak kil zeminlerde endüstriyel tesis ve depo platformu",
      "Raylı sistem, karayolu ve köprü altyapı iyileştirme",
      "Lojistik merkezi ve fabrika temel desteği",
      "Dolgu ve sıvılaşmaya yatkın zemin stabilizasyonu",
      "Oturma duyarlı yapı alanlarında fark oturma kontrolü",
      "Deniz dolgularında zemin güçlendirme"
    ],
    advantages: [
      "Düşük titreşim ve gürültüyle kentsel sahalarda uygulanabilir",
      "Yüksek günlük ilerleme kapasitesiyle geniş alanlar için ekonomik",
      "Çimento dozajı zemin özelliğine göre kolayca ayarlanabilir",
      "Karot testleriyle kolon kalitesi sahadayken doğrulanabilir",
      "Zemin içi malzeme sarfını minimize eden çevre dostu yöntem",
      "Oturma ve sıvılaşma riskini birlikte azaltır"
    ],
    processSteps: [
      { title: "Laboratuvar Karışım Tasarımı", description: "Zemin numuneleri alınarak optimum çimento dozajı ve hedef mukavemet değerleri laboratuvarda belirlenir." },
      { title: "Saha Aplikasyonu ve Platform Hazırlığı", description: "Kolon eksenleri aplikasyon edilir, makine erişim yolları ve çalışma koridorları hazırlanır." },
      { title: "Zemin-Çimento Karıştırma", description: "Çift veya tekli aks DSM ekipmanı, çimento şerbetini enjekte ederken dönüş ve çekilme hareketi ile homojen karışım oluşturur." },
      { title: "Üretim Takibi ve Dijital Kayıt", description: "Çimento tüketimi, karıştırma hızı ve derinlik verisi dijital sistemle anlık kayıt altına alınır." },
      { title: "Karot Alımı ve Kalite Testleri", description: "Belirlenen aralıklarla karot numuneleri alınarak unconfined basınç (qu) testleri yapılır; sonuçlar teslim dosyasına eklenir." }
    ],
    technicalNote: "DSM uygulamasında hedef mukavemet değeri; zemin plastisitesi, organik içeriği ve bağlayıcı oranına bağlıdır. Organik içeriği yüksek veya pH değeri yüksek zeminlerde çimento yerine kireç-çimento karışımları veya özel katkı malzemeleri değerlendirilebilir. Laboratuvar tasarımı, saha karışım tasarımını yönlendiren temel adımdır.",
    faq: [
      { question: "DSM ile jet grout arasındaki fark nedir?", answer: "DSM, dönen aks üzerindeki karıştırıcı kanatlarla zemin ve çimento şerbetini yerinde karıştırır. Jet grout ise yüksek basınçlı sıvı jetiyle zemini parçalayarak kolon oluşturur. DSM, geniş alanlarda ve yumuşak zeminlerde genellikle ekonomik avantaj sağlar." },
      { question: "DSM hangi derinliğe kadar uygulanabilir?", answer: "Standart ekipmanlarla 20–25 m, özel uzatmalı akslı ekipmanlarla 30 m ve üzeri derinliklere ulaşılabilir. Uygun derinlik, zemin koşulları ve ekipman kapasitesine göre belirlenir." },
      { question: "DSM kolonlarının dayanımı nasıl kontrol edilir?", answer: "Karot alımı ve unconfined basınç testleri (qu) ile kolon dayanımı doğrulanır. Saha penetrometre testleri de tamamlayıcı kalite ölçümü olarak kullanılabilir." },
      { question: "DSM oturma problemlerini çözer mi?", answer: "Evet. DSM kolonları, zemin taşıma kapasitesini artırarak fark oturmayı ve toplam oturmayı önemli ölçüde azaltır. Performans hedefleri projelendirme aşamasında belirlenir." }
    ]
  },
  {
    slug: "fore-kazik",
    key: "svc_fore_kazik",
    icon: Building2,
    title: "Fore Kazık",
    summary: "Büyük çaplı temeller, derin kazılar ve yüksek taşıma kapasitesi için rotary delgi uygulamaları.",
    detail: "Bentonit, muhafaza borusu ve tremie beton süreçleriyle hassas geoteknik üretim.",
    specs: ["Derin delgi kapasitesi", "Dikeylik kontrolü", "Beton sarf izleme"],
    applications: [
      "Yüksek ve karma kullanımlı yapıların derin temel sistemleri",
      "Köprü, viyadük ve kavşak ayak temelleri",
      "Sahil yapıları, liman ve iskele temelleri",
      "Endüstriyel tesis, fabrika ve enerji santrali temelleri",
      "İksa perdeleri ile birlikte ankrajlı derin kazı sistemleri",
      "Büyük çaplı baret temel entegrasyonu"
    ],
    advantages: [
      "Çok yüksek eksenel taşıma kapasitesi sağlar",
      "Kaya ve sert zemin formasyonlarına kadar delinebilir",
      "Geniş çap seçenekleriyle farklı yapı yüklerine uyarlanabilir",
      "Titreşim seviyesi düşük, komşu yapılara zarar vermez",
      "Sürekli dikeylik ölçümüyle yüksek hassasiyetli üretim",
      "Beton sarf ve bütünlük loglamasıyla tam kalite izlenebilirliği"
    ],
    processSteps: [
      { title: "Aplikasyon ve Teçhiz Kurulumu", description: "Kazık merkezleri aplikasyon edilir; bentonit veya muhafaza borusu sistemi kurulur." },
      { title: "Rotary Delgi", description: "Belirlenen çap ve derinliğe kadar rotary delgi yapılır; kayaç karşılaşıldığında core barrel veya DTH ile devam edilir." },
      { title: "Donatı Kafesi Yerleşimi", description: "Mühendislik hesaplarına göre hazırlanan donatı kafesi kuyuya indirilir; dikeylik ve örtü kontrol edilir." },
      { title: "Beton Dökümü ve Tremie", description: "Tremie boru yöntemiyle beton, alttan üste homojen biçimde doldurulur; beton sarf miktarı sürekli izlenir." },
      { title: "Başlık Betonu ve Kalite Testleri", description: "Kazık başı beton beklenir; crosshole sonic logging veya yükleme testleriyle kalite doğrulanır." }
    ],
    technicalNote: "Fore kazık tasarımında kazık çapı, uzunluğu ve beton sınıfı; zemin taşıma kapasitesi, grup etkisi ve yapı yüklerine göre belirlenir. Kaya içindeki soket uzunluğu ve beton bütünlüğü kritik tasarım parametreleridir. Zemin koşullarına bağlı olarak bentonit, polimer veya muhafaza borusu (casing) sistemi seçimi uygulamanın kalitesini doğrudan etkiler.",
    faq: [
      { question: "Fore kazık ile mini kazık arasındaki fark nedir?", answer: "Fore kazık; büyük çaplı (genellikle 600–2000 mm), derin ve yüksek kapasiteli temel elemanlarıdır. Mini kazık ise küçük çaplı (genellikle 100–300 mm), sınırlı sahaya uygun kompakt ekipmanla uygulanan güçlendirme elemanıdır." },
      { question: "Fore kazık hangi derinliğe kadar yapılabilir?", answer: "Zemin koşullarına ve ekipman kapasitesine bağlı olarak 80–100 m ve üzeri derinliklere ulaşılabilir. Kaya soket uygulamaları için özel DTH ekipmanları kullanılır." },
      { question: "Fore kazık bütünlüğü nasıl test edilir?", answer: "Crosshole sonic logging (CSL), low-strain integrity testing veya statik/dinamik yükleme testleri ile kazık bütünlüğü ve taşıma kapasitesi doğrulanır." },
      { question: "Yeraltı suyu olan sahada fore kazık yapılabilir mi?", answer: "Evet. Yüksek yeraltı suyu seviyesinde bentonit veya polimer sirkülasyonu, ya da muhafaza borusu (casing) yöntemiyle fore kazık güvenle uygulanabilir." }
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
      { question: "Mini kazık ne kadar yük taşıyabilir?", answer: "Çap, uzunluk, zemin tipi ve enjeksiyon yöntemine bağlı olarak genellikle 30–500 kN arasında eksenel kapasite elde edilebilir. Tasarım hesapları projeye özgü yapılır." }
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
      { question: "Ankrajlı iksa sistemi ne zaman seçilir?", answer: "Komşu yapılara yakın ve dar alanda kazı yapılması, yüksek yeraltı suyu, derin kazı (>6 m) ve çevre yapılara deformasyon limiti kısıtlaması olduğunda ankrajlı iksa sistemi tercih edilir." }
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
      { question: "İksa sisteminde izleme neden önemlidir?", answer: "İnklinometre ve referans noktası ölçümleri, perde deplasman davranışını gerçek zamanlı takip eder. Tasarım dışı deplasman erken tespit edilerek önlem alınabilir." }
    ]
  },
  {
    slug: "zemin-iyilestirme",
    key: "svc_zemin_iy",
    icon: Sparkles,
    title: "Zemin İyileştirme",
    summary: "Oturma, sıvılaşma ve taşıma sorunlarına özel hibrit geoteknik iyileştirme paketleri.",
    detail: "Zemin modelinden saha kalitesine kadar tek merkezden izlenen mühendislik süreci.",
    specs: ["Kolon, enjeksiyon ve drenaj", "Performans tasarımı", "Saha veri analizi"],
    applications: [
      "Düşük taşıma kapasiteli zeminlerde temel güçlendirme",
      "Deprem bölgelerinde sıvılaşmaya karşı zemin güçlendirme",
      "Fark oturma kontrolü gerektiren yapı alanları",
      "Dolgu ve yumuşak zemin üzerinde platform iyileştirme",
      "Mevcut yapı altında temel güçlendirme (underpinning)",
      "Atık veya kirlenmiş zemin stabilizasyonu"
    ],
    advantages: [
      "Birden fazla yöntemi (jet grout, DSM, enjeksiyon, drenaj) tek projede entegre eder",
      "Zemin modeline dayalı performans tasarımıyla hedefe odaklı çözüm",
      "Oturma, sıvılaşma ve taşıma kapasitesi sorunlarını birlikte çözer",
      "Saha verisi takibiyle iyileştirme etkinliği gerçek zamanlı doğrulanır",
      "Geoteknik risk ve proje maliyeti birlikte optimize edilir",
      "Tüm test ve doğrulama süreçleri teslim dosyasında raporlanır"
    ],
    processSteps: [
      { title: "Zemin Modeli ve Risk Analizi", description: "Sondaj, laboratuvar ve saha deneyleriyle zemin profili çıkarılır; oturma, taşıma ve sıvılaşma riskleri belirlenir." },
      { title: "Yöntem Seçimi ve Tasarım", description: "Zemin koşullarına, yapı yüklerine ve proje programına uygun iyileştirme yöntemi veya yöntem kombinasyonu seçilir; performans kriterleri tanımlanır." },
      { title: "Pilot Uygulama", description: "Tam ölçekli üretim öncesinde pilot alan uygulamasıyla tasarım parametreleri doğrulanır." },
      { title: "Saha Uygulaması ve Takip", description: "Üretim parametreleri dijital sistemle kaydedilir; iyileştirme süreci mühendislik denetimi altında yürütülür." },
      { title: "Performans Testi ve Teslim", description: "Tasarım kriterleri doğrultusunda yükleme, oturma ve sıvılaşma testleri yapılır; raporlar teslim dosyasına eklenir." }
    ],
    technicalNote: "Zemin iyileştirme yöntemi seçiminde tek kriter maliyet değil, risk düzeyi ve proje ömrüdür. Deprem bölgelerinde sıvılaşma riskine karşı iyileştirmede tasarım, TBDY 2018 ve ASTM D7928 gibi standartlara uygun değerlendirilmelidir. Hibrit çözümler (örneğin jet grout + prefabrik dren), tek yöntemle çözülemeyen karmaşık zemin profillerinde etkin sonuç verir.",
    faq: [
      { question: "Zemin iyileştirme ne zaman gereklidir?", answer: "Yapı yükleri altında aşırı oturma, zemin taşıma kapasitesinin yetersizliği, sıvılaşma riski veya mevcut yapı altında oluşan oturma ve deformasyon tespit edildiğinde zemin iyileştirme gereklidir." },
      { question: "Hangi yöntem daha iyi: jet grout mu, DSM mi?", answer: "İkisi farklı koşullara özeldir. Jet grout dar sahalarda ve su geçirimsizliği gereken yerlerde; DSM ise geniş alanlarda ve yumuşak kil zeminlerde ekonomik avantaj sağlar. Doğru seçim zemin koşulları ve proje hedefine göre yapılır." },
      { question: "Zemin iyileştirme mevcut yapıların altında uygulanabilir mi?", answer: "Evet. Mini kazık ve mikro jet grout gibi yöntemler, mevcut yapıya zarar vermeden bodrum veya temel altında zemin iyileştirmeye olanak sağlar." },
      { question: "Deprem bölgesinde zemin iyileştirme zorunlu mudur?", answer: "TBDY 2018 kapsamında sıvılaşma potansiyeli tespit edilen zeminlerde ya iyileştirme uygulanmalı ya da yapı tasarımı bu risk gözetilerek yapılmalıdır. Zemin güçlendirme çoğu zaman en ekonomik çözümdür." }
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
      { question: "İhale öncesi geoteknik destek sağlayabilir misiniz?", answer: "Evet. YER6 ihale öncesi; zemin koşullarına göre yaklaşık metraj, yöntem önerisi ve risk değerlendirmesi sunarak teklif sürecini destekler." }
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
    result: "Tüm DSM kolon ağı tamamlandıktan sonra yapılan yük testleri tasarım oturma limitlerinin çok altında kaldı. Proje programı dahilinde tamamlandı; tesis, yükleme ve işletim aşamasına sorunsuz geçti."
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
    result: "Jet grout perdesi tamamlandıktan sonra yapılan sızdırmazlık testleri başarıyla sonuçlandı. Liman genişlemesi güvenli biçimde inşaata başladı; perde boyunca yeraltı suyu kontrolü sağlandı."
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
    result: "Tüm kazı sürecinde inklinometre okumaları izin verilen limitin altında kaldı. Raylı sistem istasyonu için gereken bodrum kazısı, komşu yapılara herhangi bir hasar vermeksizin güvenle tamamlandı."
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
    result: "Tüm fore kazıklar CSL testini başarıyla geçti. Baret temel sistemi yapı yükleme programına tam uyumla tamamlandı. Kule inşaatının temel aşaması planlanan sürede bitirildi."
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
