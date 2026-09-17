// SEMA NOTU: Bu sayfa statik export ile HTML olarak uretilir. next/script
// bileseni (<Script>) script etiketini tarayicida calistirmak icin tasarlanmistir
// ve uretilen HTML dosyasina YAZILMAZ. Googlebot HTML dosyasini okudugu icin
// <Script> ile yazilan schema.org kunyelerini hic gormez. Bu nedenle duz
// <script> kullanilir; layout.tsx ve knowledge/page.tsx zaten boyle calisiyor.
// <Script> bilesenine geri donulmemelidir.
import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Activity, 
  Hammer, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  Microscope, 
  PhoneCall, 
  Layers,
  ChevronRight,
  Ruler,
  Users,
  FileCheck
} from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/kalite-kontrol-saha-testleri/`;

export const metadata: Metadata = {
  title: "Saha Testleri ve Kalite Kontrol Protokolü",
  description: "Zemin güçlendirme ve iyileştirmede şantiye kalite güvencesi: PIT bütünlük testi, merkezden karot alımı, UCS basınç dayanımı ve kolon çapı teyidi.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Saha Testleri ve Kalite Kontrol Protokolü",
    description: "Zemin güçlendirme ve iyileştirmede şantiye kalite güvencesi: PIT bütünlük testi, merkezden karot alımı, UCS basınç dayanımı ve kolon çapı teyidi.",
    url: pageUrl
  }
};

export default function KaliteKontrolPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteConfig.siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Saha ve Laboratuvar Testleri",
        item: pageUrl
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Zemin iyileştirme ve kazık imalatlarında hangi saha testleri uygulanır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "YER6 şantiyelerinde başlıca dört kalite kontrol testi uygulanır: 1) PIT (Pile Integrity Test) ile kazık/kolon süreklilik kontrolü, 2) Kolondan merkez karot alımı ve laboratuvarda UCS basınç dayanımı testi, 3) Kazı ile kolon çapı teyidi ve boyutsal denetim, 4) Kazık yükleme deneyleri (statik ve dinamik)."
        }
      },
      {
        "@type": "Question",
        name: "Jet Grout ve DSM kolonlarından karot ne zaman alınır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Karot numuneleri genellikle priz alma sürecine bağlı olarak imalattan sonraki 7., 14. ve nihai kabul için 28. günlerde elmas uçlu karotiyerlerle kolon ekseninden alınır."
        }
      },
      {
        "@type": "Question",
        name: "PIT (Bütünlük) testi nasıl çalışır ve neyi kanıtlar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PIT (Pile Integrity Test), kazık veya jet grout kolonunun başlığına hafif darbeli bir çekiçle vurularak oluşturulan elastik dalgaların ivmeölçerle kaydedilmesidir. Kazık gövdesinde süreksizlik, boğulma, çatlak veya boy kısalığı olup olmadığını tahribatsız şekilde kanıtlar."
        }
      }
    ]
  };

  const testProtocols = [
    {
      id: "karot-ucs",
      title: "Merkezden Karot Alımı & UCS Basınç Testi",
      standard: "ASTM D2166 / TS EN 12504-1",
      desc: "İmalatı tamamlanan Jet Grout ve DSM kolonlarının tam ekseninden elmas uçlu makinelerle kesintisiz karot numuneleri çıkarılır. Akredite laboratuvarda tek eksenli basınç dayanımı (UCS) testine tabi tutularak projenin hedef MPa dayanım değerleri belgelenir.",
      icon: Microscope,
      highlights: [
        "Kolon merkezinden tam derinlik karot alımı",
        "7, 14 ve 28 günlük UCS basınç dayanım eğrileri",
        "Akredite laboratuvar onaylı resmi deney raporu"
      ],
      img: "/images/kalite/yeni-2-karot.jpg"
    },
    {
      id: "karot-delik-yuvasi",
      title: "Kolon Ekseninden Karot Çıkarma Yuvası & Masif Gövde",
      standard: "ASTM D2166 / TS EN 12504-1 / TS EN 12716",
      desc: "Aydın Meydan Otopark projemizde jet grout kolonunun tam merkez ekseninden elmas uçlu karotiyer ile açılan delik yuvası; zemin-çimento karışımının hiçbir merkezkaç ayrışma yaşamaksızın homojen, boşluksuz ve masif bir monolit oluşturduğunu açıkça kanıtlar.",
      icon: Microscope,
      highlights: [
        "Kolon ekseninde milimetrik merkezleme ile numune çıkarma",
        "Çimento-zemin harcında kusursuz, boşluksuz masif gövde sürekliliği",
        "Basınç dayanım numuneleri için pürüzsüz karot silindiri yuvası"
      ],
      img: "/images/kalite/aydin-meydan-saha-test-2130.jpg"
    },
    {
      id: "pit-test",
      title: "PIT (Pile Integrity) Kazık Bütünlük Testi",
      standard: "ASTM D5882 (Düşük Gerinimli Sismik Refleksiyon)",
      desc: "Kazık ve rijit zemin kolonlarının yapısal sürekliliğini, gövde çatlağı veya boğulma olup olmadığını tahribatsız ses dalgalarıyla ölçer. Sahada anlık reflektogram grafiğiyle kolon boyu ve homojenliği teyit edilir.",
      icon: Activity,
      highlights: [
        "Milimetrik süreksizlik ve boy kontrolü",
        "Tahribatsız (Non-destructive) anlık saha ölçümü",
        "TBDY 2018 ve uluslararası standartlara tam uyum"
      ],
      img: "/images/kalite/yeni-1-inceleme.jpg"
    },
    {
      id: "pit-dijital-olcum",
      title: "PIT Dijital Ekran & Sismik Refleksiyon Saha Ölçümü",
      standard: "ASTM D5882 / Düşük Gerinim Bütünlük Deneyi",
      desc: "Aydın Meydan Otopark şantiyemizde imalatı tamamlanan jet grout kolonlarının başlığına yerleştirilen ivmeölçer ve el tipi dijital PIT cihazı ile anlık sismik refleksiyon dalgaları kaydedilir. Cihaz ekranında beliren milisaniyelik yansıma profiliyle kolon boyu, derinliği ve gövde sürekliliği sahada doğrudan doğrulanır.",
      icon: Activity,
      highlights: [
        "Sahada el tipi PIT ekranı ile anlık yansıma ve dalga grafiği analizi",
        "Kolon boyu boyunca süreksizlik, çatlak ve boğulma kontrolü",
        "ASTM D5882 standardına tam uyumlu tahribatsız sismik doğrulama"
      ],
      img: "/images/kalite/aydin-meydan-saha-test-2142.jpg"
    },
    {
      id: "cap-teyidi",
      title: "Kazı ile Kolon Çapı ve Geometri Teyidi",
      standard: "TS EN 12716 (Jet Grouting Uygulama Standardı)",
      desc: "Yer altında görünmeyen kolon kalitesine dair hiçbir şüpheye yer bırakmamak için seçilen deneme ve imalat kolonları ekskavatörle kazılarak yüzeye çıkarılır. Tasarım çapı ile sahadaki çap kumpas ve şerit metreyle ölçülerek fotoğraflanır.",
      icon: Hammer,
      highlights: [
        "Gözle görülebilir doğrudan çap doğrulaması",
        "Zemin-çimento karışım homojenliğinin yerinde incelenmesi",
        "İşveren ve yapı denetim heyetine yerinde fiziksel sunum"
      ],
      img: "/images/kalite/yeni-3-denetim.jpg"
    },
    {
      id: "kazi-ici-cap-olcumu",
      title: "Kazı İçi Şerit Metre ile Birebir Çap ve Derinlik Teyidi",
      standard: "TS EN 12716 / TS EN 14679",
      desc: "Aydın Meydan Otopark şantiye çukurunda kazılarak açığa çıkarılan kolonun başlığı ve gövdesi üzerinde mühendislerimizce şerit metre ile doğrudan çap ölçümü yapılır. Tasarım çapı ile sahadaki fiili çapın birebir uyumu şantiye kabul tutanağıyla tescillenir.",
      icon: Ruler,
      highlights: [
        "Kazı çukuru içinde doğrudan şerit metre ile çap ve geometri muayenesi",
        "Tasarlanan kolon çapı ve nozul basıncının sahada tam karşılanması",
        "Yapı denetim ve müşavir heyetine şantiyede yerinde fiziksel teyit"
      ],
      img: "/images/kalite/aydin-meydan-saha-test-2138.jpg"
    },
    {
      id: "karot-sandiklama",
      title: "Tam Boy Karot Numunesi Sandıklama ve Arşivleme",
      standard: "TS EN ISO 22475-1 / ASTM D2113",
      desc: "Alınan karot numuneleri derinlik kotlarına göre özel numune sandıklarına dizilir; çatlak, süreksizlik, porozite ve bağlayıcı homojenliği milimetrik olarak fotoğraflanıp etiketlenerek laboratuvara teslim edilir.",
      icon: Layers,
      highlights: [
        "Kot kot etiketlenmiş numune sandıkları",
        "Çatlak ve süreksizlik haritalandırması",
        "RQD (Kaya/Kolon Kalite Göstergesi) analiz raporlaması"
      ],
      img: "/images/projects/aydin-incirliova/aydin-meydan-otopark-tam-boy-karot-numunesi.jpg"
    },
    {
      id: "resmi-karot-sandiklama",
      title: "324 Blok Resmi Karot Sandıklama ve Kotlama (0.00m - 6.00m)",
      standard: "TS EN ISO 22475-1 / ASTM D2113",
      desc: "Aydın Meydan Otopark projesi 324 numaralı bloktan 0.00 m ile 6.00 m derinlik boyunca alınan kesintisiz karot silindirleri; 1.50 m, 3.00 m ve 4.50 m kot aralıklarına göre özel sandıklara yerleştirilerek şantiye yazı tahtasıyla resmi kayıt altına alınmıştır.",
      icon: Layers,
      highlights: [
        "0.00 m - 6.00 m derinlik aralığında tam boy silindirik karot dizilimi",
        "Şantiye yazı tahtası ve resmi numune kabul etiketlemesi",
        "Laboratuvar UCS kırma testleri için yüksek RQD kalitesi ve homojenlik"
      ],
      img: "/images/kalite/aydin-meydan-saha-test-2146.jpg"
    },
    {
      id: "serit-metre-olcumu",
      title: "Şerit Metre ile Yerinde Milimetrik Çap Ölçümü",
      standard: "TS EN 12716 / TS EN 14679",
      desc: "Açığa çıkarılan kolon gövdesi üzerinde dikey ve yatay çap ölçümleri yapılır. Jet grout enjeksiyon basıncı, nozul çapı ve dönüş hızının tasarlanan kolon geometrisini eksiksiz sağladığı şantiyede bizzat doğrulanır.",
      icon: Ruler,
      highlights: [
        "Çift yönlü dikey ve yatay çap kontrolleri",
        "İmalat parametreleriyle tasarım çapının birebir eşleşmesi",
        "Şantiye kabul tutanağına işlenen ölçüm fotoğrafları"
      ],
      img: "/images/projects/aydin-incirliova/aydin-meydan-otopark-kolon-capi-olcme.jpg"
    },
    {
      id: "taze-numune-kontrolu",
      title: "Şantiyede Taze Numune ve Karışım Denetimi",
      standard: "TS EN 197-1 & TS EN 12350",
      desc: "Enjeksiyon sırasında mikserden çıkan taze çimento şerbeti yoğunluk hidrometresi (Mud Balance) ve akışkanlık hunisiyle (Marsh Funnel) kontrol edilir. Zemin ile buluşan malzemenin su/çimento oranı her parti imalatta kayıt altına alınır.",
      icon: FileCheck,
      highlights: [
        "Mud Balance ile anlık şerbet yoğunluğu ölçümü",
        "Marsh Funnel viskozite ve akışkanlık takibi",
        "Her mikser şarjında standart su/çimento oranı güvencesi"
      ],
      img: "/images/projects/aydin-incirliova/aydin-meydan-otopark-test-alma.jpg"
    },
    {
      id: "kolon-ortusme-kontrolu",
      title: "Kolon Eksen Doğruluğu ve Kesişim Arakesit Muayenesi",
      standard: "TS EN 12716 & TS EN 1536",
      desc: "Bina temellerinde ve su yalıtımı sağlayan kesişen (secant) kolon dizilimlerinde kolonların birbiriyle teması ve arakesit sürekliliği kazı yüzeyinde milimetrik olarak incelenir; kaçıklık veya aralık oluşmadığı belgelenir.",
      icon: ShieldCheck,
      highlights: [
        "Kesişen kolonlarda su geçirimsizlik temas kontrolü",
        "Düşey kaçıklık (sapma) payının toleranslar içinde kalması",
        "Homojen ve kesintisiz yeraltı taşıyıcı perde yapısı"
      ],
      img: "/images/projects/aydin-incirliova/aydin-meydan-otopark-kolon-kontrolu.jpg"
    },
    {
      id: "yekpare-kolon-govdesi",
      title: "Kazılarak Açığa Çıkarılan Yekpare Gövde Bütünlüğü",
      standard: "TS EN 1997-1 (Eurocode 7) & TBDY 2018",
      desc: "Kazı tabanından itibaren derinlemesine açığa çıkarılan kolon yüzeyinde hiçbir segregasyon (ayrışma) veya kohezyonsuz zemin cebi olmadığı gözle muayene edilir. Kolonun yekpare rijit gövdesi fiziksel olarak onaylanır.",
      icon: Hammer,
      highlights: [
        "Tam gövde yüzeyi gözlemsel denetimi",
        "Segregasyon ve ayrışma kontrolü",
        "Zeminle kolon arasındaki yüksek sürtünme ve aderans"
      ],
      img: "/images/projects/aydin-incirliova/aydin-meydan-otopark-aciga-cikarilan-kolon.jpg"
    },
    {
      id: "idare-heyet-kabulu",
      title: "İdare, Müşavir ve Yapı Denetim Heyetiyle Saha Kabulü",
      standard: "Kamu İhale Kurumu & Çevre Şehircilik Şartnameleri",
      desc: "Yerel yönetimler, müşavir mühendislik firmaları ve yapı denetim heyetleri şantiyeye davet edilerek kazılan kolonlar, karot sandıkları ve ölçüm cihazları eşliğinde müşterek kabul tutanakları imzalanır.",
      icon: Users,
      highlights: [
        "Tarafsız ve şeffaf şantiye heyet incelemesi",
        "Resmi kabul tutanağı ve imalat onay belgeleri",
        "%100 işveren güveni ve sıfır şüphe yaklaşımı"
      ],
      img: "/images/projects/aydin-incirliova/aydin-belediyesi-kolon-testi-olcum.jpg"
    },
    {
      id: "statik-yukleme-deneyi",
      title: "Statik Kazık Yükleme ve Deplasman Takibi",
      standard: "ASTM D1143 (Aksiyel Basınç Yükleme Deneyi)",
      desc: "Fore kazık ve test kolonlarında hidrolik krikolar ve deplasman komparatörleri ile tasarım yükünün 1.5 - 2 katı basma yükü uygulanır. Yük-oturma eğrileri çıkarılarak zeminin nihai taşıma kapasitesi doğrulanır.",
      icon: Activity,
      highlights: [
        "Tasarım yükünün 1.5 - 2.0 katı aşamalı yükleme",
        "LVDT komparatörlerle mikron hassasiyetinde oturma ölçümü",
        "Elastik ve kalıcı deformasyon grafik raporu"
      ],
      img: "/images/projects/bozuyuk-jet-grout-test-kazigi-kalite-kontrolu-1.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-[#070707] text-white pt-24 pb-20">
      <script
        id="kalite-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="kalite-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
            <Link href="/" className="hover:text-gold-200 transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gold-200 font-medium">Kalite Kontrol ve Saha Testleri</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-300/30 bg-gold-500/10 text-gold-200 text-xs font-semibold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4" />
            Doğrulanmış Geoteknik Mühendislik
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-4xl leading-tight">
            Laboratuvar ve Saha Testleri: <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-white to-gold-400">Sıfır Şüphe Protokolü</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-zinc-300 max-w-3xl leading-relaxed font-light">
            Bizde &quot;yaptık bitti&quot; veya &quot;yer altında kaldı, görünmez&quot; anlayışı yoktur. Türkiye&apos;nin dört bir yanındaki Jet Grout, Fore Kazık ve DSM şantiyelerimizde kolon çapını kazarak açığa çıkarır, merkezden karot numunesi alır ve PIT sismik testleriyle yapısal bütünlüğü resmi belgelerle kanıtlarız.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <CheckCircle2 className="w-4 h-4 text-gold-300" /> ASTM & TS EN Standartları
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <CheckCircle2 className="w-4 h-4 text-gold-300" /> Bağımsız Akredite Laboratuvar Raporu
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <CheckCircle2 className="w-4 h-4 text-gold-300" /> Şantiye Kabul Dosyası & Teslim
            </div>
          </div>
        </div>
      </section>

      {/* Main Protocols Grid (All 10 Real Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {testProtocols.map((item, idx) => {
            const Icon = item.icon;
            const isReversed = idx % 2 === 1;
            return (
              <div 
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-3xl border border-white/10 bg-zinc-950/60 p-6 sm:p-10 shadow-2xl backdrop-blur-xl ${isReversed ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : ""}`}>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-gold-300 uppercase tracking-wider mb-3">
                    <Icon className="w-4 h-4 text-gold-200" />
                    <span>{item.standard}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {item.title}
                  </h2>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-gold-300 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gold-200 hover:text-white transition-colors"
                  >
                    <span>Şantiyeniz İçin Test Protokolü Talep Edin</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-xl group">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 text-xs text-white/80 font-medium">
                      YER6 Şantiye Kalite Güvence Kaydı
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Deep Knowledge Hub Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-light text-white">
            İlgili Geoteknik <span className="font-bold text-gold-300">Mühendislik Rehberleri</span>
          </h3>
          <p className="text-zinc-400 text-sm mt-3">
            Saha testleri, numune alma yöntemleri ve şartname kabul kriterleri hakkında hazırladığımız akademik düzeydeki teknik makaleleri inceleyebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/knowledge/saha-denetimi-numune-testleri/"
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-gold-300/40 transition-all duration-300"
          >
            <FileText className="w-8 h-8 text-gold-200 mb-4 group-hover:translate-x-1 transition-transform" />
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gold-200 transition-colors">
              Saha Denetimi ve Numune Testleri Rehberi
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Zemin iyileştirme uygulamalarında numune alımı, etiketleme ve laboratuvar teslim süreçleri.
            </p>
          </Link>

          <Link 
            href="/knowledge/zemin-kalite-kontrol-standartlari/"
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-gold-300/40 transition-all duration-300"
          >
            <Layers className="w-8 h-8 text-gold-200 mb-4 group-hover:translate-x-1 transition-transform" />
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gold-200 transition-colors">
              Zemin Kalite Kontrol Standartları (TBDY 2018)
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Deprem yönetmeliği ve uluslararası şartnamelere göre zemin imalatı kabul kriterleri.
            </p>
          </Link>

          <Link 
            href="/knowledge/karot-ve-ucs-deneyleri/"
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-gold-300/40 transition-all duration-300"
          >
            <Microscope className="w-8 h-8 text-gold-200 mb-4 group-hover:translate-x-1 transition-transform" />
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gold-200 transition-colors">
              Karot Alımı ve UCS Basınç Deneyleri
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Jet Grout ve DSM kolonlarından alınan karotların basınç dayanım analizleri ve MPa hesapları.
            </p>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
          Sıkça Sorulan Sorular
        </h3>
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
              Zemin iyileştirme ve kazık imalatlarında hangi saha testleri uygulanır?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              YER6 şantiyelerinde başlıca dört kalite kontrol testi uygulanır: 1) PIT (Pile Integrity Test) ile kazık/kolon süreklilik kontrolü, 2) Kolondan merkez karot alımı ve laboratuvarda UCS basınç dayanımı testi, 3) Kazı ile kolon çapı teyidi ve boyutsal denetim, 4) Kazık yükleme deneyleri (statik ve dinamik).
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
              Jet Grout ve DSM kolonlarından karot ne zaman alınır?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Karot numuneleri genellikle çimento-zemin karışımının priz alma sürecine bağlı olarak imalattan sonraki 7., 14. ve nihai kabul için 28. günlerde elmas uçlu karotiyerlerle kolon ekseninden alınır.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
              PIT (Bütünlük) testi nasıl çalışır ve neyi kanıtlar?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              PIT (Pile Integrity Test), kazık veya jet grout kolonunun başlığına hafif darbeli bir çekiçle vurularak oluşturulan elastik dalgaların ivmeölçerle kaydedilmesidir. Kazık gövdesinde süreksizlik, boğulma, çatlak veya boy kısalığı olup olmadığını tahribatsız şekilde kanıtlar.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl border border-gold-400/30 bg-gradient-to-r from-gold-500/15 via-black to-gold-500/10 p-8 sm:p-12 text-center relative overflow-hidden">
          <h3 className="text-2xl sm:text-4xl font-light text-white mb-4">
            Projenizde <span className="font-bold text-gold-200">Kanıtlanmış Mühendislik</span> İstiyorsanız
          </h3>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-light">
            Saha testleri, zemin etüdü ve ön maliyet değerlendirmesi için uzman geoteknik mühendislerimizle hemen görüşün.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 text-sm font-bold text-black hover:bg-gold-300 transition-colors shadow-lg"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Teknik Ön Değerlendirme Al</span>
            </Link>
            <Link 
              href="/hesaplama"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <span>Ön Maliyet Hesapla</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
