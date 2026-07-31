/**
 * YER6 — ÖNCELİKLİ ŞEHİR PUANLAMA MODELİ
 *
 * Amaç: "20 öncelikli şehir" listesini ezberden değil, denetlenebilir bir
 * puanlama ile belirlemek. Her puan bileşeni ve gerekçesi burada açıkça durur;
 * veri güncellendiğinde liste otomatik olarak yeniden sıralanır.
 *
 * PUAN BİLEŞENLERİ (toplam 100)
 *  - population        0-30  TÜİK 2025 il nüfusu (ADNKS, Şubat 2026 açıklaması)
 *  - seismic           0-25  AFAD Türkiye Deprem Tehlike Haritası + 2023 Kahramanmaraş
 *                            depremlerinden etkilenme durumu
 *  - industry          0-20  OSB yoğunluğu, lojistik/liman/fabrika yatırımları,
 *                            altyapı ve toplu konut hacmi
 *  - soilRisk          0-15  Alüvyon havza, yüksek yeraltı suyu, sıvılaşma
 *                            potansiyeli, kıyı dolgusu
 *  - mobilization      0-10  YER6'nın Gölbaşı/Ankara üssünden ekip ve makine
 *                            mobilizasyon kolaylığı (mesafe + karayolu ekseni)
 *
 * NOT: Bu puanlar ticari önceliklendirme içindir; bir sahanın zemin sınıfını
 * veya deprem riskini belirlemez. Saha kararı yalnızca zemin etüdü ile verilir.
 */

export type CityPriorityRecord = {
  /** cityContent.ts içindeki şehir sayfası slug'ı */
  slug: string;
  city: string;
  /** TÜİK 2025 (ADNKS) il nüfusu */
  population2025: number;
  scores: {
    population: number;
    seismic: number;
    industry: number;
    soilRisk: number;
    mobilization: number;
  };
  /** Seçim gerekçesi — rapora ve içerik planına girer */
  rationale: string;
};

const RECORDS: CityPriorityRecord[] = [
  {
    slug: "istanbul-zemin-guclendirme",
    city: "İstanbul",
    population2025: 15754053,
    scores: { population: 30, seismic: 25, industry: 20, soilRisk: 14, mobilization: 7 },
    rationale:
      "Türkiye'nin en büyük yapı ve kentsel dönüşüm pazarı; Marmara deprem beklentisi, Avrupa ve Anadolu yakasında geniş alüvyon ile kıyı dolgu alanları."
  },
  {
    slug: "ankara-zemin-guclendirme",
    city: "Ankara",
    population2025: 5864049,
    scores: { population: 27, seismic: 12, industry: 18, soilRisk: 9, mobilization: 10 },
    rationale:
      "YER6'nın merkez üssü; en kısa mobilizasyon, en yüksek saha kontrolü. Kamu yapıları, OSB'ler ve derin kazı/iksa talebi yoğun."
  },
  {
    slug: "izmir-zemin-guclendirme",
    city: "İzmir",
    population2025: 4493242,
    scores: { population: 25, seismic: 24, industry: 18, soilRisk: 15, mobilization: 6 },
    rationale:
      "Bornova–Bayraklı ovası alüvyonu, yüksek yeraltı suyu ve sıvılaşma hassasiyeti; 2020 depremi sonrası zemin iyileştirme talebi kalıcı biçimde arttı."
  },
  {
    slug: "bursa-zemin-guclendirme",
    city: "Bursa",
    population2025: 3238618,
    scores: { population: 23, seismic: 22, industry: 20, soilRisk: 13, mobilization: 8 },
    rationale:
      "Otomotiv ve tekstil sanayisi, geniş OSB alanları; Bursa ovası alüvyonu ve fay yakınlığı nedeniyle temel altı iyileştirme talebi sürekli."
  },
  {
    slug: "kocaeli-zemin-guclendirme",
    city: "Kocaeli",
    population2025: 2130006,
    scores: { population: 19, seismic: 25, industry: 20, soilRisk: 15, mobilization: 8 },
    rationale:
      "1999 depremi hafızası, Kuzey Anadolu Fay Zonu, körfez kıyısı dolgu ve alüvyon zeminler; ağır sanayi ve liman yatırımları yoğun."
  },
  {
    slug: "hatay-zemin-guclendirme",
    city: "Hatay",
    population2025: 1686043,
    scores: { population: 16, seismic: 25, industry: 15, soilRisk: 15, mobilization: 5 },
    rationale:
      "6 Şubat 2023 depremlerinden en ağır etkilenen illerden; Amik Ovası alüvyonu ve yaygın sıvılaşma gözlemleri, yeniden inşa sürecinde zemin iyileştirme ihtiyacı yüksek."
  },
  {
    slug: "gaziantep-zemin-guclendirme",
    city: "Gaziantep",
    population2025: 2154051,
    scores: { population: 19, seismic: 22, industry: 19, soilRisk: 10, mobilization: 6 },
    rationale:
      "Bölgenin sanayi merkezi; 2023 depremleri sonrası yeni sanayi ve konut yatırımlarında temel sistemi ve zemin iyileştirme talebi arttı."
  },
  {
    slug: "adana-zemin-guclendirme",
    city: "Adana",
    population2025: 2280484,
    scores: { population: 20, seismic: 22, industry: 18, soilRisk: 14, mobilization: 6 },
    rationale:
      "Çukurova alüvyon ovası, yüksek yeraltı suyu; tarım-sanayi tesisleri, lojistik yatırımları ve deprem bölgesi konumu."
  },
  {
    slug: "kahramanmaras-zemin-guclendirme",
    city: "Kahramanmaraş",
    population2025: 1180594,
    scores: { population: 13, seismic: 25, industry: 15, soilRisk: 12, mobilization: 6 },
    rationale:
      "2023 depremlerinin merkez üssü; yeniden inşa programı kapsamında temel güçlendirme ve zemin iyileştirme hacmi yüksek."
  },
  {
    slug: "antalya-zemin-guclendirme",
    city: "Antalya",
    population2025: 2722103,
    scores: { population: 22, seismic: 16, industry: 17, soilRisk: 13, mobilization: 5 },
    rationale:
      "Turizm ve konut yatırımları; karstik zemin, boşluk/erime riski ve kıyı bandı yeraltı suyu nedeniyle özel geoteknik çözüm ihtiyacı."
  },
  {
    slug: "konya-zemin-guclendirme",
    city: "Konya",
    population2025: 2330024,
    scores: { population: 20, seismic: 10, industry: 18, soilRisk: 12, mobilization: 9 },
    rationale:
      "Geniş OSB ve tarım-sanayi tesisleri; Konya Ovası'nda obruk ve oturma sorunları, Ankara'ya yakın mobilizasyon avantajı."
  },
  {
    slug: "mersin-zemin-guclendirme",
    city: "Mersin",
    population2025: 1938389,
    scores: { population: 18, seismic: 17, industry: 19, soilRisk: 14, mobilization: 5 },
    rationale:
      "Liman ve lojistik yatırımları, kıyı alüvyonu ve yüksek yeraltı suyu; ağır depo/terminal yükleri için derin temel talebi."
  },
  {
    slug: "kayseri-zemin-guclendirme",
    city: "Kayseri",
    population2025: 1462566,
    scores: { population: 15, seismic: 12, industry: 19, soilRisk: 9, mobilization: 9 },
    rationale:
      "Güçlü sanayi altyapısı ve büyük ölçekli fabrika yatırımları; Ankara ekseninde hızlı mobilizasyon."
  },
  {
    slug: "sakarya-zemin-guclendirme",
    city: "Sakarya",
    population2025: 1109466,
    scores: { population: 12, seismic: 25, industry: 18, soilRisk: 15, mobilization: 8 },
    rationale:
      "Kuzey Anadolu Fay Zonu üzerinde; Adapazarı ovasının yumuşak alüvyonu ve 1999'da gözlenen yaygın sıvılaşma nedeniyle zemin iyileştirme neredeyse zorunlu."
  },
  {
    slug: "manisa-zemin-guclendirme",
    city: "Manisa",
    population2025: 1483842,
    scores: { population: 15, seismic: 20, industry: 19, soilRisk: 13, mobilization: 6 },
    rationale:
      "Organize sanayi yoğunluğu yüksek; Gediz Ovası alüvyonu ve fay sistemleri nedeniyle endüstriyel platformlarda oturma kontrolü kritik."
  },
  {
    slug: "tekirdag-zemin-guclendirme",
    city: "Tekirdağ",
    population2025: 1200262,
    scores: { population: 13, seismic: 18, industry: 20, soilRisk: 12, mobilization: 6 },
    rationale:
      "Çorlu–Çerkezköy sanayi koridoru ve Marmara kıyı yatırımları; hızlı büyüyen fabrika ve lojistik depo stoğu."
  },
  {
    slug: "samsun-zemin-guclendirme",
    city: "Samsun",
    population2025: 1379104,
    scores: { population: 14, seismic: 13, industry: 17, soilRisk: 15, mobilization: 6 },
    rationale:
      "Kızılırmak deltası ve kıyı dolgu alanları; liman, hastane ve toplu konut projelerinde derin temel ve iyileştirme talebi."
  },
  {
    slug: "denizli-zemin-guclendirme",
    city: "Denizli",
    population2025: 1063077,
    scores: { population: 12, seismic: 21, industry: 18, soilRisk: 12, mobilization: 6 },
    rationale:
      "Yoğun fay sistemleri ve jeotermal alanlar; tekstil-sanayi tesislerinde temel sistemi ve iyileştirme ihtiyacı."
  },
  {
    slug: "malatya-zemin-guclendirme",
    city: "Malatya",
    population2025: 736589,
    scores: { population: 9, seismic: 24, industry: 14, soilRisk: 12, mobilization: 6 },
    rationale:
      "2023 depremlerinden ağır etkilendi; yeniden inşa ve temel güçlendirme talebi sürüyor."
  },
  {
    slug: "eskisehir-zemin-guclendirme",
    city: "Eskişehir",
    population2025: 928334,
    scores: { population: 11, seismic: 14, industry: 17, soilRisk: 13, mobilization: 10 },
    rationale:
      "Porsuk vadisi alüvyonu ve yüksek yeraltı suyu; sanayi/raylı sistem yatırımları ve Ankara'ya en yakın mobilizasyon hattı."
  },
  // — Aşağıdakiler havuzda değerlendirildi, ilk 20'ye giremedi (şeffaflık için tutulur) —
  {
    slug: "sanliurfa-zemin-guclendirme",
    city: "Şanlıurfa",
    population2025: 2213964,
    scores: { population: 20, seismic: 14, industry: 12, soilRisk: 8, mobilization: 4 },
    rationale:
      "Nüfusu yüksek ancak özel geoteknik uygulama talebi ve mobilizasyon avantajı diğer illere göre sınırlı."
  },
  {
    slug: "diyarbakir-zemin-guclendirme",
    city: "Diyarbakır",
    population2025: 1832577,
    scores: { population: 18, seismic: 15, industry: 12, soilRisk: 8, mobilization: 4 },
    rationale: "Bazalt platolar nedeniyle derin temel talebi görece düşük; uzaklık mobilizasyonu zorlaştırıyor."
  },
  {
    slug: "balikesir-zemin-guclendirme",
    city: "Balıkesir",
    population2025: 1273159,
    scores: { population: 13, seismic: 19, industry: 15, soilRisk: 11, mobilization: 6 },
    rationale: "Deprem riski yüksek; sanayi hacmi ilk 20'deki illere göre daha dağınık."
  },
  {
    slug: "mugla-zemin-guclendirme",
    city: "Muğla",
    population2025: 1064509,
    scores: { population: 12, seismic: 18, industry: 13, soilRisk: 11, mobilization: 4 },
    rationale: "Turizm yapılaşması güçlü ancak proje ölçekleri daha küçük ve dağınık."
  },
  {
    slug: "van-zemin-guclendirme",
    city: "Van",
    population2025: 1148642,
    scores: { population: 12, seismic: 22, industry: 10, soilRisk: 10, mobilization: 3 },
    rationale: "Deprem riski çok yüksek; uzak mobilizasyon ve sınırlı özel uygulama pazarı nedeniyle ilk 20 dışında."
  }
];

export function totalScore(record: CityPriorityRecord): number {
  const s = record.scores;
  return s.population + s.seismic + s.industry + s.soilRisk + s.mobilization;
}

/** Tüm aday havuzu, puana göre yüksekten düşüğe sıralı. */
export const cityPriorityRanking: CityPriorityRecord[] = [...RECORDS].sort(
  (a, b) => totalScore(b) - totalScore(a)
);

/** Veriyle seçilen ilk 20 öncelikli şehir (slug listesi). */
export const priorityCitySlugs: string[] = cityPriorityRanking.slice(0, 20).map((r) => r.slug);

export function getCityPriority(slug: string): CityPriorityRecord | undefined {
  return RECORDS.find((r) => r.slug === slug);
}
