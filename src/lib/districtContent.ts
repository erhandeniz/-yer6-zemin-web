import type { CityPage } from "@/lib/cityContent";

/**
 * Deprem riski yüksek ilçeler için zemin iyileştirme/güçlendirme sayfaları.
 *
 * Her ilçe; GERÇEK yerel veriyle (aktif fay segmenti, zemin türü, sıvılaşma/
 * oturma riski ve uygun yöntem) ayrıştırılır — isim değiştirilmiş kopya değil.
 * Sadece zemin iyileştirmenin fiilen konu olduğu (alüvyon / sıvılaşma / yumuşak
 * zemin) ilçeler seçilmiştir; il sayfalarını tamamlar, yamyamlamaz.
 */

type DistrictSeed = {
  slug: string;
  district: string;
  province: string;
  /** Etkili aktif fay/segment. */
  fault: string;
  /** Yerel zemin karakteri. */
  soil: string;
  /** Öne çıkan geoteknik risk (sıvılaşma/oturma vb.). */
  risk: string;
  /** Uygun hizmet slug'ları — ilki birincil yöntem. */
  methods: string[];
  articles: string[];
};

const METHOD_PHRASE: Record<string, string> = {
  "jet-grout":
    "yüksek basınçlı jet grout kolon ve gerektiğinde su geçirimsizlik perdesi",
  dsm: "DSM (derin zemin karıştırma) ile kontrollü kolon/panel iyileştirmesi",
  "fore-kazik": "fore kazık ile yükü sağlam tabakalara aktaran derin temel",
  "mini-kazik": "mini kazık ve underpinning ile mevcut temel güçlendirmesi",
  "tas-kolon": "taş kolon ile drenaj ve taşıma gücü artırımı",
  "zemin-iyilestirme": "zemine uygun iyileştirme yöntemi kombinasyonu",
  enjeksiyon: "çimento/kimyasal enjeksiyon ile zemin sıkılaştırma"
};

function methodLabel(slug: string) {
  return METHOD_PHRASE[slug] ?? "zemine uygun iyileştirme yöntemi";
}

function buildDistrict(s: DistrictSeed): CityPage {
  const primary = methodLabel(s.methods[0]);
  const secondary = s.methods[1] ? methodLabel(s.methods[1]) : null;
  return {
    slug: s.slug,
    city: `${s.district} (${s.province})`,
    title: `${s.district} Zemin Güçlendirme ve Zemin İyileştirme | ${s.province}`,
    description:
      `${s.district}, ${s.province}: ${s.fault} etkisindeki zeminlerde jet grout, DSM zemin iyileştirme, fore kazık ve enjeksiyon ile ${s.risk} ` +
      `karşısında taşıma gücü ve deprem güvenliği. YER6 saha uygulaması.`.slice(0, 300),
    heroLead:
      `${s.district}'de zemin güçlendirme ve zemin iyileştirme kararı; ${s.fault} kaynaklı deprem etkisi, ${s.soil} ve ${s.risk} ` +
      `bir arada değerlendirilerek verilmelidir.`,
    soilContext:
      `${s.district} ve çevresinde ${s.soil} koşulları öne çıkar. ${cap(s.risk)}; ` +
      `[zemin iyileştirme yöntemleri](/knowledge/yer-alti-zemin-iyilestirme/) ve saha/laboratuvar parametreleriyle birlikte oturma ve taşıma gücü açısından değerlendirilir.`,
    recommendedApproach:
      `Bu koşullarda ${primary}${secondary ? `, tamamlayıcı olarak ${secondary}` : ""} kurgulanır; ` +
      `çözüm zemin profiline, yeraltı suyuna ve yapı yüklerine göre projelendirilir.`,
    qualityFocus:
      `${s.district} sahalarında karot/UCS, kolon sürekliliği, bağlayıcı dozajı ve üretim kayıtları; ` +
      `deprem güvenliği ve işletme yüklerine uygun performans için izlenir.`,
    serviceSlugs: s.methods,
    articleSlugs: s.articles
  };
}

function cap(text: string) {
  return text.length ? text[0].toLocaleUpperCase("tr-TR") + text.slice(1) : text;
}

const A = {
  liq: ["yer-alti-zemin-iyilestirme", "zemin-iyilestirme-yontemleri", "jet-grout-hangi-zeminlerde-uygulanir"],
  jet: ["jet-grout-nedir", "jet-grout-hangi-zeminlerde-uygulanir", "yer-alti-zemin-iyilestirme"],
  dsm: ["dsm-nasil-uygulanir", "zemin-iyilestirme-yontemleri", "yer-alti-zemin-iyilestirme"]
};

const districtSeeds: DistrictSeed[] = [
  // İSTANBUL — KAF Marmara segmenti, kıyı alüvyonu ve sıvılaşma
  { slug: "istanbul-avcilar-zemin-guclendirme", district: "Avcılar", province: "İstanbul", fault: "Kuzey Anadolu Fayı'nın Marmara (Kumburgaz) segmenti", soil: "kıyı ve Küçükçekmece gölü çevresi gevşek kum-silt alüvyonu, yüksek yeraltı suyu", risk: "sıvılaşma ve farklı oturma riski (1999'da ağır hasar gören bölge)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "istanbul-kucukcekmece-zemin-guclendirme", district: "Küçükçekmece", province: "İstanbul", fault: "KAF Marmara segmenti", soil: "göl kenarı alüvyon, doygun kum ve yumuşak kil", risk: "sıvılaşma ve taşıma gücü yetersizliği", methods: ["jet-grout", "dsm", "zemin-iyilestirme", "fore-kazik"], articles: A.liq },
  { slug: "istanbul-bakirkoy-zemin-guclendirme", district: "Bakırköy", province: "İstanbul", fault: "KAF Marmara segmenti", soil: "kıyı dolgu ve alüvyon zeminler", risk: "sıvılaşma ve oturma", methods: ["jet-grout", "fore-kazik", "dsm", "zemin-iyilestirme"], articles: A.jet },
  { slug: "istanbul-zeytinburnu-zemin-guclendirme", district: "Zeytinburnu", province: "İstanbul", fault: "KAF Marmara segmenti", soil: "sahil dolgu ve gevşek alüvyon", risk: "sıvılaşma ve kentsel dönüşümde temel güçlendirme ihtiyacı", methods: ["fore-kazik", "jet-grout", "mini-kazik", "zemin-iyilestirme"], articles: A.jet },
  { slug: "istanbul-bahcelievler-zemin-guclendirme", district: "Bahçelievler", province: "İstanbul", fault: "KAF Marmara segmenti", soil: "gevşek dolgu ve killi-kumlu tabakalar", risk: "farklı oturma ve deprem büyütmesi", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.dsm },
  { slug: "istanbul-esenyurt-zemin-guclendirme", district: "Esenyurt", province: "İstanbul", fault: "KAF Marmara segmenti", soil: "yüksek yoğunluklu yapılaşmada değişken dolgu ve killi zemin", risk: "oturma ve yetersiz taşıma gücü", methods: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"], articles: A.dsm },
  { slug: "istanbul-beylikduzu-zemin-guclendirme", district: "Beylikdüzü", province: "İstanbul", fault: "KAF Marmara segmenti (kıyıya yakın)", soil: "kıyı platformu alüvyon ve dolgu", risk: "sıvılaşma ve oturma", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "istanbul-fatih-zemin-guclendirme", district: "Fatih", province: "İstanbul", fault: "KAF Marmara segmenti", soil: "tarihi yarımada dolgu ve heterojen zemin", risk: "tarihi/mevcut yapıda temel güçlendirme ve oturma", methods: ["mini-kazik", "jet-grout", "fore-kazik", "zemin-iyilestirme"], articles: A.jet },
  { slug: "istanbul-pendik-zemin-guclendirme", district: "Pendik", province: "İstanbul", fault: "KAF Marmara (Adalar) segmenti", soil: "Anadolu yakası kıyı alüvyonu ve dolgu", risk: "sıvılaşma ve oturma", methods: ["jet-grout", "fore-kazik", "dsm", "zemin-iyilestirme"], articles: A.liq },
  { slug: "istanbul-kartal-zemin-guclendirme", district: "Kartal", province: "İstanbul", fault: "KAF Marmara (Adalar) segmenti", soil: "kıyı dolgu ve alüvyon", risk: "sıvılaşma ve farklı oturma", methods: ["jet-grout", "fore-kazik", "dsm", "zemin-iyilestirme"], articles: A.liq },
  { slug: "istanbul-tuzla-zemin-guclendirme", district: "Tuzla", province: "İstanbul", fault: "KAF Marmara (Adalar) segmenti", soil: "sahil ve sanayi dolgu alanları", risk: "sıvılaşma ve endüstriyel yük altında oturma", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "istanbul-silivri-zemin-guclendirme", district: "Silivri", province: "İstanbul", fault: "KAF Marmara (Kumburgaz–Silivri) segmenti", soil: "kıyı alüvyonu ve gevşek zemin", risk: "sıvılaşma ve taşıma gücü", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },

  // İZMİR — Batı Anadolu graben sistemi, 2020 Sisam depremi (Bayraklı)
  { slug: "izmir-bayrakli-zemin-guclendirme", district: "Bayraklı", province: "İzmir", fault: "İzmir Körfezi fayları ve Batı Anadolu graben sistemi", soil: "körfez alüvyonu, doygun kum-silt, yüksek yeraltı suyu", risk: "sıvılaşma ve büyük oturma (2020 depreminde ağır hasar bölgesi)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "izmir-bornova-zemin-guclendirme", district: "Bornova", province: "İzmir", fault: "Bornova fay zonu / graben kenarı", soil: "ova alüvyonu ve yumuşak zeminler", risk: "sıvılaşma ve oturma", methods: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "izmir-karsiyaka-zemin-guclendirme", district: "Karşıyaka", province: "İzmir", fault: "İzmir Körfezi fay sistemi", soil: "kıyı alüvyonu ve dolgu", risk: "sıvılaşma ve farklı oturma", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "izmir-cigli-zemin-guclendirme", district: "Çiğli", province: "İzmir", fault: "Gediz deltası / körfez fayları", soil: "delta alüvyonu, doygun gevşek kum", risk: "yüksek sıvılaşma potansiyeli", methods: ["jet-grout", "dsm", "zemin-iyilestirme", "fore-kazik"], articles: A.liq },
  { slug: "izmir-konak-zemin-guclendirme", district: "Konak", province: "İzmir", fault: "İzmir Körfezi fay sistemi", soil: "şehir merkezi dolgu ve alüvyon", risk: "oturma ve temel güçlendirme", methods: ["jet-grout", "mini-kazik", "fore-kazik", "zemin-iyilestirme"], articles: A.jet },
  { slug: "izmir-menemen-zemin-guclendirme", district: "Menemen", province: "İzmir", fault: "Gediz graben sistemi", soil: "Gediz ovası alüvyonu", risk: "sıvılaşma ve oturma", methods: ["dsm", "jet-grout", "tas-kolon", "zemin-iyilestirme"], articles: A.dsm },

  // KOCAELİ — KAF, 1999 Gölcük depremi
  { slug: "kocaeli-golcuk-zemin-guclendirme", district: "Gölcük", province: "Kocaeli", fault: "Kuzey Anadolu Fayı (1999 depremi yüzey kırığı)", soil: "körfez kıyısı alüvyon ve dolgu", risk: "sıvılaşma, kıyı kaymaları ve oturma (1999'da yıkım bölgesi)", methods: ["jet-grout", "fore-kazik", "dsm", "zemin-iyilestirme"], articles: A.liq },
  { slug: "kocaeli-izmit-zemin-guclendirme", district: "İzmit", province: "Kocaeli", fault: "KAF ana segmenti", soil: "körfez alüvyonu ve sanayi dolgu", risk: "sıvılaşma ve endüstriyel yük altında oturma", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "kocaeli-derince-zemin-guclendirme", district: "Derince", province: "Kocaeli", fault: "KAF", soil: "liman ve kıyı dolgu zeminleri", risk: "sıvılaşma ve taşıma gücü", methods: ["jet-grout", "fore-kazik", "dsm", "zemin-iyilestirme"], articles: A.liq },
  { slug: "kocaeli-korfez-zemin-guclendirme", district: "Körfez", province: "Kocaeli", fault: "KAF", soil: "kıyı ve rafineri bölgesi dolgu/alüvyon", risk: "sıvılaşma ve ağır ekipman yükü altında oturma", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "kocaeli-gebze-zemin-guclendirme", district: "Gebze", province: "Kocaeli", fault: "KAF", soil: "sanayi bölgesi değişken zemin ve dolgu", risk: "oturma ve endüstriyel taşıma gücü", methods: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"], articles: A.dsm },

  // SAKARYA — KAF, 1999 Adapazarı sıvılaşması
  { slug: "sakarya-adapazari-zemin-guclendirme", district: "Adapazarı", province: "Sakarya", fault: "KAF (1999 depremi)", soil: "Sakarya nehri ovası kalın alüvyon, doygun kum-silt", risk: "klasik sıvılaşma ve büyük oturma (1999 referans sahası)", methods: ["jet-grout", "dsm", "tas-kolon", "zemin-iyilestirme"], articles: A.liq },
  { slug: "sakarya-serdivan-zemin-guclendirme", district: "Serdivan", province: "Sakarya", fault: "KAF", soil: "ova alüvyonu ve göl kenarı zeminler", risk: "sıvılaşma ve oturma", methods: ["dsm", "jet-grout", "zemin-iyilestirme", "fore-kazik"], articles: A.liq },
  { slug: "sakarya-erenler-zemin-guclendirme", district: "Erenler", province: "Sakarya", fault: "KAF", soil: "ova alüvyonu", risk: "sıvılaşma ve taşıma gücü", methods: ["dsm", "jet-grout", "tas-kolon", "zemin-iyilestirme"], articles: A.dsm },

  // DÜZCE — KAF, 1999
  { slug: "duzce-merkez-zemin-guclendirme", district: "Düzce Merkez", province: "Düzce", fault: "KAF Düzce segmenti (1999 depremi)", soil: "ova alüvyonu, doygun kum-silt", risk: "sıvılaşma ve oturma", methods: ["jet-grout", "dsm", "tas-kolon", "zemin-iyilestirme"], articles: A.liq },
  { slug: "duzce-kaynasli-zemin-guclendirme", district: "Kaynaşlı", province: "Düzce", fault: "KAF (1999 yüzey kırığı)", soil: "vadi alüvyonu", risk: "fay yakınlığı ve sıvılaşma", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },

  // YALOVA — KAF
  { slug: "yalova-merkez-zemin-guclendirme", district: "Yalova Merkez", province: "Yalova", fault: "KAF Marmara segmenti", soil: "kıyı alüvyonu ve termal bölge zeminleri", risk: "sıvılaşma ve oturma", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "yalova-cinarcik-zemin-guclendirme", district: "Çınarcık", province: "Yalova", fault: "KAF (Çınarcık çukuru)", soil: "kıyı dolgu ve alüvyon", risk: "sıvılaşma ve şev/oturma", methods: ["jet-grout", "fore-kazik", "dsm", "zemin-iyilestirme"], articles: A.liq },

  // BURSA — KAF güney kolu, ova alüvyonu
  { slug: "bursa-osmangazi-zemin-guclendirme", district: "Osmangazi", province: "Bursa", fault: "KAF güney kolu / Bursa fayı", soil: "ova alüvyonu ve şehir dolgu", risk: "oturma ve deprem büyütmesi", methods: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"], articles: A.dsm },
  { slug: "bursa-yildirim-zemin-guclendirme", district: "Yıldırım", province: "Bursa", fault: "Bursa fay zonu", soil: "eğimli alüvyon ve dolgu", risk: "oturma ve taşıma gücü", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.jet },
  { slug: "bursa-nilufer-zemin-guclendirme", district: "Nilüfer", province: "Bursa", fault: "Bursa fayı / KAF güney kolu", soil: "ova alüvyonu, gevşek dolgu", risk: "oturma ve yumuşak zemin", methods: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"], articles: A.dsm },
  { slug: "bursa-gemlik-zemin-guclendirme", district: "Gemlik", province: "Bursa", fault: "KAF (Gemlik körfezi segmenti)", soil: "körfez kıyısı alüvyon ve dolgu", risk: "sıvılaşma ve oturma", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "bursa-inegol-zemin-guclendirme", district: "İnegöl", province: "Bursa", fault: "KAF güney kolu", soil: "ova alüvyonu", risk: "oturma ve sanayi yükü", methods: ["dsm", "jet-grout", "tas-kolon", "zemin-iyilestirme"], articles: A.dsm },

  // HATAY — Doğu Anadolu Fayı, 2023 depremleri
  { slug: "hatay-antakya-zemin-guclendirme", district: "Antakya", province: "Hatay", fault: "Doğu Anadolu Fayı ve Ölü Deniz fay kolu", soil: "Amik ovası ve Asi nehri kalın alüvyonu, doygun kum-silt", risk: "yoğun sıvılaşma ve büyük oturma (2023'te ağır yıkım)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "hatay-iskenderun-zemin-guclendirme", district: "İskenderun", province: "Hatay", fault: "DAF / Ölü Deniz fay sistemi", soil: "kıyı alüvyonu ve dolgu, çok yüksek yeraltı suyu", risk: "sıvılaşma, deniz suyu baskını ve oturma (2023)", methods: ["jet-grout", "fore-kazik", "dsm", "zemin-iyilestirme"], articles: A.liq },
  { slug: "hatay-defne-zemin-guclendirme", district: "Defne", province: "Hatay", fault: "DAF", soil: "Asi nehri ovası alüvyonu", risk: "sıvılaşma ve oturma (2023)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "hatay-samandag-zemin-guclendirme", district: "Samandağ", province: "Hatay", fault: "DAF / Asi deltası", soil: "delta alüvyonu, gevşek doygun kum", risk: "yüksek sıvılaşma ve deniz etkisi", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "hatay-kirikhan-zemin-guclendirme", district: "Kırıkhan", province: "Hatay", fault: "DAF (Amanos segmenti)", soil: "Amik ovası alüvyonu", risk: "sıvılaşma ve oturma (2023)", methods: ["jet-grout", "dsm", "tas-kolon", "zemin-iyilestirme"], articles: A.liq },

  // KAHRAMANMARAŞ — DAF, 2023
  { slug: "kahramanmaras-onikisubat-zemin-guclendirme", district: "Onikişubat", province: "Kahramanmaraş", fault: "Doğu Anadolu Fayı (2023 depremi merkez bölgesi)", soil: "ova alüvyonu ve şehir dolgu", risk: "fay yakınlığı, sıvılaşma ve oturma (2023)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "kahramanmaras-dulkadiroglu-zemin-guclendirme", district: "Dulkadiroğlu", province: "Kahramanmaraş", fault: "DAF", soil: "alüvyon ve eğimli zeminler", risk: "oturma ve fay etkisi (2023)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.jet },
  { slug: "kahramanmaras-elbistan-zemin-guclendirme", district: "Elbistan", province: "Kahramanmaraş", fault: "DAF (Çardak–Elbistan kolu, 2023 ikinci deprem)", soil: "Elbistan ovası alüvyonu", risk: "sıvılaşma ve oturma (2023)", methods: ["jet-grout", "dsm", "tas-kolon", "zemin-iyilestirme"], articles: A.liq },
  { slug: "kahramanmaras-turkoglu-zemin-guclendirme", district: "Türkoğlu", province: "Kahramanmaraş", fault: "DAF fay kesişimi", soil: "ova alüvyonu", risk: "fay yakınlığı ve sıvılaşma (2023)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "kahramanmaras-pazarcik-zemin-guclendirme", district: "Pazarcık", province: "Kahramanmaraş", fault: "DAF (6 Şubat 2023 birinci deprem merkezi)", soil: "alüvyon ve tarım ovası zeminleri", risk: "fay yakınlığı, sıvılaşma ve oturma", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },

  // GAZİANTEP — DAF, 2023
  { slug: "gaziantep-sahinbey-zemin-guclendirme", district: "Şahinbey", province: "Gaziantep", fault: "Doğu Anadolu Fayı etki alanı", soil: "değişken dolgu, killi zeminler ve yer yer alüvyon", risk: "oturma ve deprem yükü altında taşıma gücü (2023)", methods: ["fore-kazik", "jet-grout", "dsm", "zemin-iyilestirme"], articles: A.jet },
  { slug: "gaziantep-sehitkamil-zemin-guclendirme", district: "Şehitkamil", province: "Gaziantep", fault: "DAF etki alanı", soil: "killi-kumlu zemin ve dolgu", risk: "oturma ve temel güçlendirme (2023)", methods: ["fore-kazik", "jet-grout", "mini-kazik", "zemin-iyilestirme"], articles: A.jet },
  { slug: "gaziantep-nurdagi-zemin-guclendirme", district: "Nurdağı", province: "Gaziantep", fault: "DAF (Amanos segmenti, 2023 yüzey kırığı)", soil: "vadi ve ova alüvyonu", risk: "fay yakınlığı ve sıvılaşma (2023)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "gaziantep-islahiye-zemin-guclendirme", district: "İslahiye", province: "Gaziantep", fault: "DAF (Amanos segmenti)", soil: "Karasu ovası alüvyonu, doygun zemin", risk: "yüksek sıvılaşma (2023'te ağır hasar)", methods: ["jet-grout", "dsm", "tas-kolon", "zemin-iyilestirme"], articles: A.liq },

  // MALATYA — DAF, 2023
  { slug: "malatya-battalgazi-zemin-guclendirme", district: "Battalgazi", province: "Malatya", fault: "Doğu Anadolu Fayı", soil: "ova alüvyonu ve dolgu", risk: "oturma ve sıvılaşma (2023)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "malatya-yesilyurt-zemin-guclendirme", district: "Yeşilyurt", province: "Malatya", fault: "DAF etki alanı", soil: "eğimli alüvyon ve killi zemin", risk: "oturma ve taşıma gücü (2023)", methods: ["fore-kazik", "jet-grout", "dsm", "zemin-iyilestirme"], articles: A.jet },
  { slug: "malatya-dogansehir-zemin-guclendirme", district: "Doğanşehir", province: "Malatya", fault: "DAF (Sürgü–Doğanşehir kolu, 2023)", soil: "ova alüvyonu", risk: "fay yakınlığı ve sıvılaşma (2023)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },

  // ADIYAMAN — DAF, 2023
  { slug: "adiyaman-merkez-zemin-guclendirme", district: "Adıyaman Merkez", province: "Adıyaman", fault: "Doğu Anadolu Fayı", soil: "ova alüvyonu ve dolgu", risk: "sıvılaşma ve oturma (2023'te ağır hasar)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "adiyaman-golbasi-zemin-guclendirme", district: "Gölbaşı", province: "Adıyaman", fault: "DAF (Gölbaşı gölü fay kesimi, 2023)", soil: "göl kenarı doygun alüvyon", risk: "çok yüksek sıvılaşma (2023 referans hasarı)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "adiyaman-besni-zemin-guclendirme", district: "Besni", province: "Adıyaman", fault: "DAF etki alanı", soil: "ova ve yamaç alüvyonu", risk: "oturma ve fay etkisi (2023)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.jet },

  // OSMANİYE / KİLİS — DAF
  { slug: "osmaniye-merkez-zemin-guclendirme", district: "Osmaniye Merkez", province: "Osmaniye", fault: "Doğu Anadolu Fayı (Amanos–Osmaniye)", soil: "Ceyhan ovası alüvyonu", risk: "sıvılaşma ve oturma (2023)", methods: ["jet-grout", "dsm", "tas-kolon", "zemin-iyilestirme"], articles: A.liq },
  { slug: "osmaniye-kadirli-zemin-guclendirme", district: "Kadirli", province: "Osmaniye", fault: "DAF etki alanı", soil: "Ceyhan ovası alüvyonu", risk: "sıvılaşma ve oturma", methods: ["dsm", "jet-grout", "tas-kolon", "zemin-iyilestirme"], articles: A.liq },
  { slug: "kilis-merkez-zemin-guclendirme", district: "Kilis Merkez", province: "Kilis", fault: "DAF etki alanı", soil: "killi-kumlu zemin ve alüvyon", risk: "oturma ve deprem yükü (2023)", methods: ["fore-kazik", "jet-grout", "dsm", "zemin-iyilestirme"], articles: A.jet },

  // ELAZIĞ — DAF, 2020 Sivrice
  { slug: "elazig-merkez-zemin-guclendirme", district: "Elazığ Merkez", province: "Elazığ", fault: "Doğu Anadolu Fayı (2020 Sivrice depremi)", soil: "alüvyon ve dolgu zeminler", risk: "sıvılaşma ve oturma (2020)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "elazig-sivrice-zemin-guclendirme", district: "Sivrice", province: "Elazığ", fault: "DAF (2020 deprem merkezi, Hazar gölü)", soil: "göl kenarı ve vadi alüvyonu", risk: "fay yakınlığı ve sıvılaşma (2020)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },

  // ADANA — Ceyhan ovası, DAF etkisi
  { slug: "adana-seyhan-zemin-guclendirme", district: "Seyhan", province: "Adana", fault: "DAF ve Çukurova fay sistemleri", soil: "Çukurova (Seyhan) delta alüvyonu, doygun kum-silt", risk: "sıvılaşma ve oturma", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "adana-yuregir-zemin-guclendirme", district: "Yüreğir", province: "Adana", fault: "Çukurova / DAF etki alanı", soil: "delta alüvyonu", risk: "sıvılaşma ve tarım/sanayi yükü altında oturma", methods: ["dsm", "jet-grout", "tas-kolon", "zemin-iyilestirme"], articles: A.liq },
  { slug: "adana-ceyhan-zemin-guclendirme", district: "Ceyhan", province: "Adana", fault: "DAF (Ceyhan segmenti)", soil: "Ceyhan nehri delta alüvyonu", risk: "yüksek sıvılaşma potansiyeli", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },

  // VAN — 2011 depremi
  { slug: "van-ipekyolu-zemin-guclendirme", district: "İpekyolu", province: "Van", fault: "Van gölü havzası aktif fayları (2011 depremi)", soil: "göl kenarı alüvyon ve dolgu", risk: "sıvılaşma ve oturma (2011)", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "van-ercis-zemin-guclendirme", district: "Erciş", province: "Van", fault: "Van fay sistemi (2011 ağır hasar)", soil: "göl ovası alüvyonu", risk: "sıvılaşma ve büyük oturma (2011)", methods: ["jet-grout", "dsm", "tas-kolon", "zemin-iyilestirme"], articles: A.liq },

  // DENİZLİ / AYDIN / MANİSA — Ege grabenleri
  { slug: "denizli-pamukkale-zemin-guclendirme", district: "Pamukkale", province: "Denizli", fault: "Pamukkale/Denizli graben fay sistemi", soil: "ova alüvyonu ve traverten/killi zeminler", risk: "oturma ve sıvılaşma", methods: ["dsm", "jet-grout", "fore-kazik", "zemin-iyilestirme"], articles: A.dsm },
  { slug: "aydin-efeler-zemin-guclendirme", district: "Efeler", province: "Aydın", fault: "Büyük Menderes graben fayı", soil: "Menderes ovası alüvyonu, yüksek yeraltı suyu", risk: "sıvılaşma ve oturma", methods: ["dsm", "jet-grout", "tas-kolon", "zemin-iyilestirme"], articles: A.liq },
  { slug: "manisa-yunusemre-zemin-guclendirme", district: "Yunusemre", province: "Manisa", fault: "Gediz (Manisa) graben fayı", soil: "Gediz ovası alüvyonu", risk: "sıvılaşma ve oturma", methods: ["dsm", "jet-grout", "tas-kolon", "zemin-iyilestirme"], articles: A.liq },
  { slug: "manisa-akhisar-zemin-guclendirme", district: "Akhisar", province: "Manisa", fault: "Gediz graben sistemi", soil: "ova alüvyonu", risk: "oturma ve sıvılaşma", methods: ["dsm", "jet-grout", "tas-kolon", "zemin-iyilestirme"], articles: A.dsm },

  // BALIKESİR / ÇANAKKALE / BOLU / ERZİNCAN — KAF ve Ege
  { slug: "balikesir-bandirma-zemin-guclendirme", district: "Bandırma", province: "Balıkesir", fault: "KAF Marmara güney kolu", soil: "körfez kıyısı alüvyon ve liman dolgu", risk: "sıvılaşma ve oturma", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "canakkale-merkez-zemin-guclendirme", district: "Çanakkale Merkez", province: "Çanakkale", fault: "KAF Biga/Marmara güney kolu", soil: "kıyı alüvyonu ve dolgu", risk: "sıvılaşma ve oturma", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.liq },
  { slug: "bolu-merkez-zemin-guclendirme", district: "Bolu Merkez", province: "Bolu", fault: "KAF Bolu segmenti (1944/1999)", soil: "ova alüvyonu ve dolgu", risk: "fay yakınlığı ve oturma", methods: ["jet-grout", "dsm", "fore-kazik", "zemin-iyilestirme"], articles: A.jet },
  { slug: "erzincan-merkez-zemin-guclendirme", district: "Erzincan Merkez", province: "Erzincan", fault: "KAF (1939 ve 1992 depremleri)", soil: "Erzincan ovası kalın alüvyonu", risk: "sıvılaşma ve büyük oturma", methods: ["jet-grout", "dsm", "tas-kolon", "zemin-iyilestirme"], articles: A.liq }
];

export const districtPages: CityPage[] = districtSeeds.map(buildDistrict);
export const districtPaths = districtPages.map((page) => ({ slug: page.slug }));
export const districtSlugSet = new Set(districtPages.map((page) => page.slug));
