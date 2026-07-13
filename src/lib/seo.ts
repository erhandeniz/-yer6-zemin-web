import { siteConfig } from "@/lib/siteConfig";

export const localSeoServiceAreas = [
  "Ankara",
  "İstanbul",
  "İzmir",
  "Bursa",
  "Hatay",
  "Mersin",
  "Muğla",
  "Kayseri",
  "Sivas",
  "Van",
  "Ağrı",
  "Deprem bölgesi",
  "Türkiye geneli"
] as const;

export const localSeoServices = [
  "Jet Grout",
  "Zemin İyileştirme",
  "Zemin Güçlendirme",
  "Fore Kazık",
  "Ankraj",
  "İksa Sistemleri",
  "Temel Mühendisliği"
] as const;

// Sosyal medya profilleri açıldığında doğrulanmış URL'ler buraya eklenebilir.
export const socialProfiles: string[] = [];

export const serviceSchemaDescriptions: Record<string, string> = {
  "jet-grout":
    "YER6, Ankara merkezli; Türkiye geneli ve yurt dışında jet grout yapan bir zemin mühendisliği firmasıdır. Jet grout ile zayıf zeminlerde temel altı güçlendirme, su geçirimsizlik perdesi, kazı tabanı stabilizasyonu ve sıvılaşma riskinin azaltılması için yüksek basınçlı çimento enjeksiyonuyla zemin-çimento kolonları oluşturur.",
  "zemin-iyilestirme":
    "Zemin iyileştirme hizmeti; oturma, taşıma kapasitesi, sıvılaşma ve zayıf zemin problemlerine karşı jet grout, DSM, enjeksiyon, drenaj ve saha kalite kontrolünü birlikte değerlendiren mühendislik çözümüdür.",
  "fore-kazik":
    "YER6, Ankara merkezli; Türkiye geneli ve yurt dışında fore kazık yapan bir zemin mühendisliği firmasıdır. Fore kazık ile yüksek yapı, köprü, endüstriyel tesis ve derin temel projelerinde büyük çaplı rotary delgi, donatı yerleşimi, tremie beton dökümü ve bütünlük testleriyle yüksek taşıma kapasitesi sağlar.",
  dsm:
    "YER6, Ankara merkezli; Türkiye geneli ve yurt dışında DSM (deep soil mixing / derin zemin karıştırma) yapan bir zemin mühendisliği firmasıdır. Yumuşak kil ve gevşek dolgu zeminlerde oturma kontrolü ve taşıma kapasitesi için çimento bağlayıcıyla yerinde zemin-çimento kolonları oluşturur.",
  ankraj:
    "Ankraj hizmeti; derin kazı, iksa perdesi, şev stabilizasyonu ve yapı destekleme projelerinde delgi, enjeksiyon, ön germe ve kabul testleriyle yatay yükleri güvenli biçimde zemine aktarır.",
  "iksa-sistemleri":
    "İksa sistemleri hizmeti; kent içi derin kazılarda fore kazık perde, diyafram duvar, ankraj, kuşak kirişi ve enstrümantasyon entegrasyonu ile çevre yapılardaki deplasman riskini kontrol eder.",
  "zemin-guclendirme":
    "Zemin güçlendirme hizmeti; yapı temellerinde güvenli taşıma kapasitesi, oturma kontrolü ve deprem bölgesi zemin performansı için jet grout, fore kazık, ankraj, iksa ve temel mühendisliği yöntemlerini bir araya getirir."
};

export const equipmentSeoItems = [
  {
    name: "Bauer BG 28 H PremiumLine Fore Kazık Delgi Makinesi",
    category: "Fore Kazık Delgi Makinesi",
    description:
      "Bauer BG 28 H PremiumLine; büyük çaplı fore kazık, derin temel, iksa, muhafaza borulu delgi, CFA ve zemin güçlendirme projelerinde kullanılan yüksek kapasiteli fore kazık delgi makinesidir. YER6 Zemin Mühendislik makine parkurunda ağır zemin koşulları ve yüksek kapasiteli temel mühendisliği projeleri için güçlü çözüm sunar.",
    brand: "Bauer",
    imageAlt: "Bauer BG 28 H PremiumLine fore kazık delgi makinesi",
    additionalProperties: [
      { name: "Maksimum tork", value: "277 kNm / 250 kNm" },
      { name: "Maksimum kazık çapı", value: "Kılıfsız 1.700-2.500 mm, kılıflı 1.400-2.200 mm" },
      { name: "Maksimum delgi derinliği", value: "43,3 m / 65,7 m" },
      { name: "Motor", value: "CAT C13, 354 kW" },
      { name: "Döner kafa hızı", value: "Maksimum 30 dev/dk / 55 dev/dk" },
      { name: "Ana vinç", value: "200 / 250 kN" },
      { name: "Yardımcı vinç", value: "80-100 / 100-125 kN" },
      { name: "Baskı vinci", value: "330 / 423 kN" },
      { name: "Baskı stroku", value: "18.700 mm'ye kadar" },
      { name: "Çalışma yüksekliği", value: "Yaklaşık 24,9 m" },
      { name: "Hidrolik basınç", value: "350 bar" },
      { name: "Çalışma ağırlığı", value: "Yaklaşık 83,7-102,1 ton" },
      { name: "Palet genişliği", value: "3.000-4.600 mm" }
    ]
  },
  {
    name: "Bauer BG 18 H BT 50 PremiumLine Fore Kazık Delgi Makinesi",
    category: "Fore Kazık Delgi Makinesi",
    description:
      "Bauer BG 18 H BT 50 PremiumLine; fore kazık, derin temel, iksa, muhafaza borulu delgi, kılıfsız delgi, CFA ve FDP uygulamaları için kullanılan kompakt ve güçlü fore kazık delgi makinesidir. YER6 Zemin Mühendislik makine parkurunda orta ve büyük ölçekli temel mühendisliği projeleri için yüksek performanslı çözüm sunar.",
    brand: "Bauer",
    imageAlt: "Bauer BG 18 H BT 50 PremiumLine fore kazık delgi makinesi",
    additionalProperties: [
      { name: "Maksimum tork", value: "181 kNm / 178 kNm" },
      { name: "Maksimum kazık çapı", value: "Kılıfsız 1.500 mm, kılıflı 1.200 mm" },
      { name: "Maksimum delgi derinliği", value: "45,7 m'ye kadar" },
      { name: "Çalışma yüksekliği", value: "19,13 m" },
      { name: "Çalışma ağırlığı", value: "Yaklaşık 52 ton" },
      { name: "Ana vinç", value: "140 / 175 kN" },
      { name: "Yardımcı vinç", value: "55 / 70 kN" },
      { name: "Baskı / çekme kuvveti", value: "200 / 256 kN" },
      { name: "Kelly sistem stroku", value: "8.500 mm" },
      { name: "Maksimum kızak stroku", value: "13.950 mm" },
      { name: "Palet uzunluğu", value: "4.750 mm" },
      { name: "Palet genişliği", value: "Yaklaşık 3.310-4.510 mm" },
      {
        name: "Uygulama alanları",
        value: "Fore kazık, muhafaza borulu delgi, kılıfsız delgi, CFA kazık, FDP deplasman kazığı, derin temel, iksa sistemleri"
      }
    ]
  },
  {
    name: "XCMG XR220D Fore Kazık Delgi Makinesi",
    category: "Fore Kazık Delgi Makinesi",
    description:
      "XCMG XR220D; fore kazık, derin temel, iksa, muhafaza borulu delgi ve zemin güçlendirme projelerinde kullanılan yüksek kapasiteli fore kazık delgi makinesidir. YER6 Zemin Mühendislik makine parkurunda büyük çaplı ve derin delgi gerektiren projeler için teknik çözüm sunar.",
    brand: "XCMG",
    imageAlt: "XCMG XR220D fore kazık delgi makinesi",
    additionalProperties: [
      { name: "Maksimum tork", value: "220 kNm" },
      { name: "Maksimum kazık çapı", value: "2.000 mm" },
      { name: "Maksimum delgi derinliği", value: "67 m" },
      { name: "Motor", value: "Cummins QSL-325, 242 kW" },
      { name: "Dönüş hızı", value: "7-25 dev/dk" },
      { name: "Hidrolik basınç", value: "35 MPa" }
    ]
  },
  {
    name: "Soilmec SM-401 Kazık Delgi Makinesi",
    category: "Kazık Delgi Makinesi",
    description:
      "Soilmec SM-401; jet grout, ankraj, zemin iyileştirme, zemin güçlendirme ve temel mühendisliği uygulamalarında kullanılan kompakt ve güçlü delgi makinesidir.",
    brand: "Soilmec",
    imageAlt: "Soilmec SM-401 jet grout kazık delgi makinesi"
  },
  {
    name: "MDT 1800 Kazık Delgi Makinesi",
    category: "Kazık Delgi Makinesi",
    description:
      "MDT 1800; jet grout, zemin iyileştirme, zemin güçlendirme ve temel mühendisliği uygulamalarında kullanılan delgi makinesidir.",
    brand: "MDT",
    imageAlt: "MDT 1800 zemin iyileştirme kazık delgi makinesi"
  },
  {
    name: "Casagrande C6 XP-2 Ankraj Delgi Makinesi",
    category: "Ankraj Delgi Makinesi",
    description:
      "Casagrande C6 XP-2; ankraj, mikro kazık ve jet grouting uygulamalarında kullanılan kompakt hidrolik paletli delgi makinesidir. Büyük çaplı fore kazık makinesi değildir. Özellikle dar alanlarda, ankraj ve hassas zemin uygulamalarında verimli çalışma sağlar.",
    brand: "Casagrande",
    imageAlt: "Casagrande C6 XP-2 ankraj delgi makinesi",
    additionalProperties: [
      { name: "Motor", value: "Cummins B4.5 Stage V, 142 kW" },
      { name: "Çalışma ağırlığı", value: "Yaklaşık 15 ton" },
      { name: "Mast", value: "9.100 mm veya 6.100 mm" },
      { name: "Kafa stroku", value: "7.300 / 4.300 mm" },
      { name: "Çekme-itme kuvveti", value: "87 kN, opsiyonel 100 kN" },
      { name: "Döner kafa torku", value: "12,2 kNm / 15,2 kNm / 22,2 kNm seçenekleri" },
      { name: "Kıskaç / morset çapı", value: "30-406 mm" },
      { name: "Sıkma kuvveti", value: "159-283 kN" },
      { name: "Hidrolik", value: "350 bar, 319 l/dk ana pompa" },
      { name: "Palet genişliği / makine eni", value: "400 mm pabuç / 2.250 mm" },
      {
        name: "Maksimum derinlik",
        value: "Tij yükleyiciye göre 10-35 m, RC10 karusel ile 35,3 m, jet grouting kulesiyle 20,1 m"
      },
      { name: "Mast hareketi", value: "front-the-wall mafsal +93°" },
      {
        name: "Uygulama alanları",
        value: "Ankraj, mikro kazık, jet grout, dar alan delgi uygulamaları ve zemin iyileştirme destek işleri"
      }
    ]
  },
  {
    name: "Soilmec 5T 400J Pompa",
    category: "Jet Grout Pompası",
    description:
      "Soilmec 5T 400J Pompa; yüksek basınçlı jet grout enjeksiyon uygulamalarında kullanılan pompa ekipmanıdır. Zemin iyileştirme, zemin güçlendirme ve temel altı jet grout kolon imalatlarında kullanılır.",
    brand: "Soilmec",
    imageAlt: "Soilmec 5T 400J jet grout pompası"
  },
  {
    name: "Metax MP7 Pompa",
    category: "Pompa / Enjeksiyon Pompası",
    description:
      "Metax MP7 Pompa; jet grout, zemin enjeksiyonu, zemin iyileştirme ve yüksek basınçlı saha uygulamalarında kullanılan pompa ekipmanıdır.",
    brand: "Metax",
    imageAlt: "Metax MP7 Pompa jet grout ve enjeksiyon pompası"
  },
  {
    name: "Soilmec Santral",
    category: "Jet Grout Santrali",
    description:
      "Soilmec Santral; jet grout uygulamalarında çimento şerbeti hazırlama, karıştırma ve enjeksiyon sistemini besleme amacıyla kullanılan santral ekipmanıdır.",
    brand: "Soilmec",
    imageAlt: "Soilmec Santral jet grout santrali"
  },
  {
    name: "60 Tonluk Silo",
    category: "Çimento Silosu",
    description:
      "60 Tonluk Silo; jet grout ve zemin iyileştirme uygulamalarında çimento depolama ve sürekli üretim akışını sağlamak için kullanılan 60 ton kapasiteli silo ekipmanıdır.",
    imageAlt: "60 tonluk çimento silosu"
  }
] as const;

export function getServiceSchemaDescription(slug: string, fallback: string) {
  return serviceSchemaDescriptions[slug] ?? fallback;
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "EngineeringService"],
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.companyName,
    alternateName: "YER6 Geotechnical",
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/opengraph-image.png`,
    logo: {
      "@type": "ImageObject",
      "@id": `${siteConfig.siteUrl}/#logo`,
      url: `${siteConfig.siteUrl}/icon.png`,
      width: 512,
      height: 512,
      caption: "YER6 Zemin Mühendislik"
    },
    description:
      "YER6 Zemin Mühendislik; jet grout, zemin iyileştirme, zemin güçlendirme, fore kazık, ankraj, iksa sistemleri ve temel mühendisliği alanlarında Ankara merkezli, Türkiye geneli ve yurt dışında geoteknik saha uygulaması sunar.",
    telephone: siteConfig.phone.display,
    email: siteConfig.email,
    priceRange: "$$",
    currenciesAccepted: "TRY",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.7826,
      longitude: 32.8597
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone.display,
        url: siteConfig.phone.href,
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["Turkish", "English"]
      }
    ],
    areaServed: localSeoServiceAreas.map((name) => ({
      "@type": name === "Türkiye geneli" ? "Country" : "AdministrativeArea",
      name
    })),
    serviceArea: localSeoServiceAreas.map((name) => ({
      "@type": name === "Türkiye geneli" ? "Country" : "AdministrativeArea",
      name
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "YER6 Zemin Güçlendirme Hizmetleri",
      itemListElement: localSeoServices.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          provider: { "@id": `${siteConfig.siteUrl}/#organization` },
          areaServed: "Türkiye"
        }
      }))
    },
    slogan: "Geleceğin Yapıları Güçlü Zeminlerle Başlar",
    ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {})
  };
}
