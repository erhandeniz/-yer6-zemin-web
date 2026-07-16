export type SEOServicePage = {
  slug: string;
  title: string;
  focusKeywords: string[];
  description: string;
  summary: string;
};

export const SEO_SERVICES_DATABASE: SEOServicePage[] = [
  {
    slug: "jet-grout",
    title: "Jet Grouting Zemin İyileştirme | YER6 Geoteknik",
    focusKeywords: ["jet grout", "jet grouting fiyatı", "zemin iyileştirme"],
    description: "Jet grouting yöntemiyle zemin taşıma kapasitesi artırma, sıvılaşma önleme ve kolon tasarımı hizmetleri.",
    summary: "Jet grout (jet enjeksiyonu) çimentosu ve yüksek basınçlı su jeti yardımıyla zemin malzemesini karıştırarak yerinde yüksek dayanımlı kolonlar oluşturma işlemidir. Sıvılaşma riski olan gevşek kumlu veya yumuşak killi zeminlerde taşıma gücü ve oturma kontrolü için birincil yöntemdir."
  },
  {
    slug: "derin-karistirma-dsm",
    title: "Derin Zemin Karıştırma (DSM) Hizmetleri | YER6",
    focusKeywords: ["derin zemin karıştırma", "dsm kolon", "soil mixing"],
    description: "Derin zemin karıştırma (Deep Soil Mixing) yöntemiyle geniş alanlarda taşıma gücü artırma ve oturma kontrolü.",
    summary: "DSM yöntemi zemin ile çimento bulamacını mekanik bıçaklarla yerinde karıştırarak kütlesel veya kolon şeklinde zemin iyileştirmesi yapar. Büyük ölçekli ve derin yumuşak zeminlerde ekonomik ve az atıklı bir alternatif sunar."
  },
  {
    slug: "fore-kazik",
    title: "Fore Kazık ve Derin Temel Çözümleri | YER6 Geoteknik",
    focusKeywords: ["fore kazık", "kazıklı temel", "derin temel tasarımı"],
    description: "Büyük çaplı ve derin fore kazık sistemleri ile yüksek yapıların yüklerinin güvenli zemin tabakalarına aktarılması.",
    summary: "Fore kazık yöntemi zemin delindikten sonra demir kafesin yerleştirilmesi ve betonlanmasıyla oluşturulan yerinde dökme kazık tipidir. Yüksek taşıma kapasitesi gerektiren binalarda, köprü ve viyadük ayaklarında temel elemanı olarak kullanılır."
  },
  {
    slug: "cfa-kazik",
    title: "CFA Kazık (Sürekli Burgulu Kazık) | YER6 Geoteknik",
    focusKeywords: ["cfa kazık", "sürekli burgulu kazık", "cfa iksa"],
    description: "Sarsıntısız, hızlı ve gürültüsüz sürekli burgu (Continuous Flight Auger - CFA) kazık imalatı.",
    summary: "CFA kazık yöntemi, içi boş bir burgunun delgi derinliğine kadar indirilmesi ve yukarı çekilirken delik içine beton pompalanması prensibiyle imal edilir. Sarsıntısız olması nedeniyle kentsel iksa ve temel işlerinde tercih edilir."
  },
  {
    slug: "mini-kazik",
    title: "Mini Kazık ve Mikrokazık İmalatı | YER6 Geoteknik",
    focusKeywords: ["mini kazık", "mikrokazık", "iksa mini kazık"],
    description: "Dar alanlarda ve iksa duvarı arkasında küçük çaplı mini kazık ve ankrajlı dayanma sistemleri.",
    summary: "Genellikle çapı 300 mm'nin altında olan ve eksenel/lateral yük aktarımına uygun derin temel ve iksa elemanlarıdır. Kentsel dönüşüm alanlarında, dar sokaklarda veya tavan yüksekliği kısıtlı bölgelerde son derece pratiktir."
  },
  {
    slug: "diyafram-duvar",
    title: "Diyafram Duvar ve Derin İksa Sistemleri | YER6",
    focusKeywords: ["diyafram duvar", "slurry wall", "derin kazı iksa"],
    description: "Bentonit bulamacı altında açılan hendeklerin betonlanmasıyla sızdırmaz diyafram duvar imalatı.",
    summary: "Diyafram duvar su sızdırmazlığı ve yüksek rijitlik gerektiren metro istasyonları, barajlar ve derin bodrum katlı projelerde ana taşıyıcı ve iksa perdesi olarak inşa edilir."
  },
  {
    slug: "zemin-ankraji",
    title: "Geçici ve Kalıcı Zemin Ankrajları | YER6 Geoteknik",
    focusKeywords: ["zemin ankrajı", "öngermeli ankraj", "iksa ankraj"],
    description: "Derin kazı destek sistemlerinde öngermeli geçici ve kalıcı zemin ankrajı tasarımı ve imalatı.",
    summary: "Ankrajlar iksa duvarına gelen yanal zemin basıncını aktif bölgenin dışındaki stabil tabakalara çekme kuvvetiyle ileten elemanlardır. Derin kazıların stabilitesinde kritik rol oynarlar."
  }
];

export function buildSEOContextPrompt(): string {
  return [
    "# YER6 Website & SEO Service Knowledge",
    "Use this authorized service page database to align answers with YER6's public service statements, branding keywords, and technical descriptions:",
    ...SEO_SERVICES_DATABASE.map((page) => (
      `- **Page: ${page.slug}** (${page.title}): Keywords: ${page.focusKeywords.join(", ")}; Description: ${page.description}; Core Message: ${page.summary}`
    ))
  ].join("\n");
}
