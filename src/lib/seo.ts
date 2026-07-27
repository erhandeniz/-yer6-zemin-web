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
export const socialProfiles: string[] = [
  "https://armut.com/hizmetveren/yer6-zemin-guclendirme-geoteknik-muhendislik-ankara-golbasi-zemin-iyilestirme_85780374",
  "https://www.youtube.com/channel/UCCikguZzwvtEg3peobxzSQw"
];

export const serviceSchemaDescriptions: Record<string, string> = {
  "jet-grout":
    "YER6, Ankara merkezli; Türkiye geneli ve yurt dışında jet grout yapan bir zemin mühendisliği firmasıdır. Jet grout ile zayıf zeminlerde temel altı güçlendirme, su geçirimsizlik perdesi, kazı tabanı stabilizasyonu ve sıvılaşma riskinin azaltılması için yüksek basınçlı çimento enjeksiyonuyla zemin-çimento kolonları oluşturur.",
  "zemin-iyilestirme":
    "YER6, Ankara merkezli; Türkiye geneli ve yurt dışında zemin iyileştirme yapan bir mühendislik firmasıdır. Oturma, taşıma kapasitesi, sıvılaşma ve zayıf zemin problemlerine karşı jet grout, DSM, enjeksiyon, drenaj ve saha kalite kontrolünü birlikte değerlendiren çözümler sunar.",
  "fore-kazik":
    "YER6, Ankara merkezli; Türkiye geneli ve yurt dışında fore kazık yapan bir zemin mühendisliği firmasıdır. Fore kazık ile yüksek yapı, köprü, endüstriyel tesis ve derin temel projelerinde büyük çaplı rotary delgi, donatı yerleşimi, tremie beton dökümü ve bütünlük testleriyle yüksek taşıma kapasitesi sağlar.",
  dsm:
    "YER6, Ankara merkezli; Türkiye geneli ve yurt dışında DSM (deep soil mixing / derin zemin karıştırma) yapan bir zemin mühendisliği firmasıdır. Yumuşak kil ve gevşek dolgu zeminlerde oturma kontrolü ve taşıma kapasitesi için çimento bağlayıcıyla yerinde zemin-çimento kolonları oluşturur.",
  ankraj:
    "YER6, Ankara merkezli; Türkiye geneli ve yurt dışında ankraj yapan bir zemin mühendisliği firmasıdır. Derin kazı, iksa perdesi, şev stabilizasyonu ve yapı destekleme projelerinde delgi, enjeksiyon, ön germe ve kabul testleriyle yatay yükleri güvenli biçimde zemine aktarır.",
  "iksa-sistemleri":
    "YER6, Ankara merkezli; Türkiye geneli ve yurt dışında iksa sistemleri yapan bir zemin mühendisliği firmasıdır. Kent içi derin kazılarda fore kazık perde, diyafram duvar, ankraj, kuşak kirişi ve enstrümantasyon entegrasyonu ile çevre yapılardaki deplasman riskini kontrol eder.",
  "zemin-guclendirme":
    "Zemin güçlendirme hizmeti; yapı temellerinde güvenli taşıma kapasitesi, oturma kontrolü ve deprem bölgesi zemin performansı için jet grout, fore kazık, ankraj, iksa ve temel mühendisliği yöntemlerini bir araya getirir.",
  "mini-kazik":
    "YER6, Ankara merkezli; Türkiye geneli ve yurt dışında mini kazık (mikro kazık) yapan bir zemin mühendisliği firmasıdır. Sınırlı erişimli alanlarda güçlendirme, underpinning ve hassas temel çözümleri için enjeksiyonlu mini kazık uygular.",
  "geoteknik-danismanlik":
    "YER6, Ankara merkezli; Türkiye geneli ve yurt dışında geoteknik danışmanlık veren bir zemin mühendisliği firmasıdır. Saha araştırması, tasarım denetimi, metraj optimizasyonu ve risk yönetimiyle yatırım kararından uygulama teslimine karar destekli mühendislik sunar.",
  "bina-alti-jet-grout":
    "YER6, elektrikli Jet Grout makineleri ile aktif binalarda, veri merkezlerinde ve tarihi eserlerde titreşimsiz temel altı güçlendirme, oturma önleme ve underpinning imalatı yapan zemin mühendislik firmasıdır.",
  "cfa-kazik":
    "YER6, Continuous Flight Auger (CFA) teknolojisiyle muhafaza borusuz, yüksek hızlı ve titreşimsiz delgi ile kazık imalatı yapan geoteknik zemin firmasıdır.",
  "deep-soil-mixing":
    "YER6, Türkiye genelinde Deep Soil Mixing (DSM / Derin Zemin Karıştırma) teknolojisi ile yumuşak kil ve alüvyon sahalarda atıksız ve homojen zemin-çimento kolonları üreten zemin iyileştirme firmasıdır."
};

export const equipmentSeoItems = [
  {
    name: "Bauer BG 45 BS 95 Fore Kazık Delgi Makinesi",
    category: "Fore Kazık Delgi Makinesi",
    description:
      "Bauer BG 45 BS 95; Kelly delgi, zemin karıştırma ve zemin iyileştirme uygulamalarında kullanılan yüksek kapasiteli, çok amaçlı fore kazık delgi makinesidir.",
    brand: "Bauer",
    imageAlt: "Bauer BG 45 BS 95 fore kazık delgi makinesi",
    additionalProperties: [
      { name: "Maksimum tork", value: "461 kNm" },
      { name: "Maksimum Kelly delgi derinliği", value: "100 m" },
      { name: "Maksimum kılıfsız Kelly delgi çapı", value: "3.700 mm" },
      { name: "Motor", value: "CAT C15, 433 kW" },
      { name: "Hidrolik basınç", value: "350 bar" }
    ]
  },
  {
    name: "Bauer BG 28 H PremiumLine Fore Kazık Delgi Makinesi",
    category: "Fore Kazık Delgi Makinesi",
    description:
      "Bauer BG 28 H PremiumLine; büyük çaplı fore kazık, derin temel, iksa, muhafaza borulu delgi, CFA ve zemin güçlendirme projelerinde kullanılan yüksek kapasiteli fore kazık delgi makinesidir. YER6 Zemin Güçlendirme Geoteknik Mühendislik makine parkurunda ağır zemin koşulları ve yüksek kapasiteli temel mühendisliği projeleri için güçlü çözüm sunar.",
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
      "Bauer BG 18 H BT 50 PremiumLine; fore kazık, derin temel, iksa, muhafaza borulu delgi, kılıfsız delgi, CFA ve FDP uygulamaları için kullanılan kompakt ve güçlü fore kazık delgi makinesidir. YER6 Zemin Güçlendirme Geoteknik Mühendislik makine parkurunda orta ve büyük ölçekli temel mühendisliği projeleri için yüksek performanslı çözüm sunar.",
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
      "XCMG XR220D; fore kazık, derin temel, iksa, muhafaza borulu delgi ve zemin güçlendirme projelerinde kullanılan yüksek kapasiteli fore kazık delgi makinesidir. YER6 Zemin Güçlendirme Geoteknik Mühendislik makine parkurunda büyük çaplı ve derin delgi gerektiren projeler için teknik çözüm sunar.",
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
    name: "Soilmec SM-401 Hidrolik Delgi Makinesi",
    category: "Çok Amaçlı Delgi Makinesi",
    description:
      "Soilmec SM-401; mikro kazık, ankraj, jet grout, karot, drenaj ve su kuyusu uygulamaları için geliştirilmiş çok amaçlı hidrolik delgi makinesidir.",
    brand: "Soilmec",
    imageAlt: "Soilmec SM-401 hidrolik delgi makinesi",
    additionalProperties: [
      { name: "HR 70 V maksimum tork", value: "1.400 daNm" },
      { name: "HR 70 V maksimum dönüş hızı", value: "238 dev/dk" },
      { name: "Besleme stroku", value: "4.000 / 7.000 mm" },
      { name: "Maksimum çekme kuvveti", value: "89 / 61 kN" },
      { name: "Motor", value: "Cummins QSB 5.9-30-T, 119 kW" },
      { name: "Çalışma ağırlığı", value: "Yaklaşık 13,4-13,8 ton" }
    ]
  },
  {
    name: "Soilmec SM-14 Delgi Makinesi",
    category: "Mikro Kazık ve Jet Grout Delgi Makinesi",
    description:
      "Soilmec SM-14; mikro kazık, ankraj, jet grout, drenaj, su kuyusu ve zemin araştırması için kullanılan modüler hidrolik delgi makinesidir.",
    brand: "Soilmec",
    imageAlt: "Soilmec SM-14 mikro kazık ve jet grout delgi makinesi",
    additionalProperties: [
      { name: "Çalışma ağırlığı", value: "14 ton" },
      { name: "Motor", value: "119 kW" },
      { name: "Maksimum çekme kuvveti", value: "89 kN" },
      { name: "Maksimum itme kuvveti", value: "45 kN" },
      { name: "Standart strok", value: "7.000 mm" },
      { name: "Kıskaç aralığı", value: "50-415 mm" }
    ]
  },
  {
    name: "MDT 180 B Hidrolik Delgi Makinesi",
    category: "Jet Grout ve Mikro Kazık Delgi Makinesi",
    description:
      "MDT 180 B; jet grout, mikro kazık, ankraj ve çok amaçlı delgi uygulamaları için geliştirilmiş hidrolik paletli delgi makinesidir.",
    brand: "MDT",
    imageAlt: "MDT 180 B jet grout ve mikro kazık delgi makinesi",
    additionalProperties: [
      { name: "Nominal tork", value: "Yaklaşık 15-32 kNm" },
      { name: "İtme / çekme kuvveti", value: "Yaklaşık 100 kN" },
      { name: "Döner kafa stroku", value: "Yaklaşık 4,7-6,7 m" },
      { name: "Tek geçiş delgi derinliği", value: "22 m'ye kadar" },
      { name: "Motor", value: "Yaklaşık 149-163 kW" },
      { name: "Çalışma ağırlığı", value: "Yaklaşık 17,7-18,5 ton" }
    ]
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
    name: "Soilmec 5T-400J Pompa",
    category: "Yüksek Basınçlı Jet Grout Pompası",
    description:
      "Soilmec 5T-400J; 900 bar kısa süreli maksimum basınç, 442 l/dk maksimum debi ve 298 kW nominal güç değerlerine sahip mekanik tahrikli yüksek basınç pompasıdır. Jet grout, zemin konsolidasyonu ve yüksek basınçlı çimento şerbeti enjeksiyonunda kullanılır.",
    brand: "Soilmec",
    imageAlt: "Soilmec 5T-400J yüksek basınçlı jet grout pompası",
    additionalProperties: [
      { name: "Maksimum basınç", value: "900 bar / 13.050 psi (yalnızca kısa süreli acil durum değeri)" },
      { name: "Maksimum debi", value: "442 l/dk / 116 gpm" },
      { name: "Nominal güç", value: "298 kW / 400 HP" },
      { name: "Plunger çapları", value: "3 / 3½ / 4 inç" },
      { name: "Strok", value: "5 inç / 127 mm" },
      { name: "Yaklaşık kütle", value: "12.500 kg / 27.560 lb" },
      { name: "Volümetrik verim", value: "%100" },
      { name: "Mekanik verim", value: "%90" },
      { name: "Tahrik sistemi", value: "Kavrama, şanzıman, kardan mili ve zincir üzerinden mekanik tahrik" },
      { name: "Kurulum seçenekleri", value: "Konteyner veya skid üzerine montaj" },
      { name: "Konteyner ölçüleri", value: "6.055 × 2.435 × 2.585 mm (U × G × Y)" },
      {
        name: "Opsiyonlar",
        value: "Farklı marka dizel motor, booster pompa, işlem parametrelerini görüntüleme ve kaydetme cihazları"
      },
      { name: "Uygulamalar", value: "Jet grout, zemin konsolidasyonu ve yüksek basınçlı grout enjeksiyonu" }
    ]
  },
  {
    name: "Metax MP7 Pompa",
    category: "Yüksek Basınçlı Triplex Motopompa",
    description:
      "Metax MP7 serisi; konfigürasyona göre 452-708 kW güç, 700-840 bar maksimum basınç ve 780-1.220 l/dk maksimum debi sunan yüksek basınçlı triplex motopompa ailesidir. Jet grout, soil mixing, tünel enjeksiyonu, backfilling ve özel yüksek basınçlı pompalama uygulamalarında kullanılır.",
    brand: "Metax",
    imageAlt: "Metax MP7 yüksek basınçlı triplex jet grout pompası",
    additionalProperties: [
      { name: "Güç aralığı", value: "452-708 kW / 615-950 HP (konfigürasyona göre)" },
      { name: "Power-end seçenekleri", value: "HD veya STD" },
      { name: "Aktarma seçenekleri", value: "Dişli veya zincir" },
      { name: "Maksimum basınç aralığı", value: "700-840 bar / 10.150-12.180 psi" },
      { name: "Maksimum debi aralığı", value: "780-1.220 l/dk / 205-320 gpm" },
      { name: "Plunger çapı", value: "88,9-140 mm / 3,5-5,51 inç" },
      { name: "Maksimum strok hızı", value: "116-148 strok/dk" },
      { name: "Strok", value: "177,8 mm / 7 inç" },
      { name: "Emiş çapı", value: "101,6-152,4 mm / 4-6 inç" },
      { name: "Çıkış çapı", value: "50,8 mm / 2 inç" },
      {
        name: "Yaklaşık ölçüler",
        value: "Standart konfigürasyonlarda 2,45 × 6,06 × 2,59 m; 950 HP konfigürasyonunda 2,54 × 8,03 × 2,90 m"
      },
      { name: "Yaklaşık ağırlık", value: "14.000-16.000 kg; 950 HP konfigürasyonunda 26.000 kg" },
      { name: "Kurulum seçenekleri", value: "Konteyner veya skid üzerine montaj; isteğe göre farklı dizel motor" },
      {
        name: "Uygulamalar",
        value: "Jet grout, soil mixing, zemin konsolidasyonu, tünel ve backfilling, derin delgi ve yüksek basınçlı enjeksiyon"
      }
    ]
  },
  {
    name: "Soilmec GM-25 Jet Grout Karıştırma Santrali",
    category: "Konteyner Tipi Grout Mixing Unit",
    description:
      "Soilmec GM-25; jet grout ve enjeksiyon uygulamalarında su/çimento şerbetini hazırlayan, homojenleştiren ve yüksek basınç pompa hattını besleyen konteyner tipi grout karıştırma santralidir.",
    brand: "Soilmec",
    imageAlt: "Soilmec GM-25 jet grout çimento şerbeti karıştırma santrali",
    additionalProperties: [
      { name: "Sistem tipi", value: "Konteyner tipi grout mixing unit" },
      { name: "Hazırlanan karışım", value: "Su/çimento şerbeti" },
      { name: "Malzeme besleme", value: "Silo helezon besleme sistemi" },
      { name: "Hat görevi", value: "Yüksek basınç jet grout pompasını besleme" },
      { name: "Uygulamalar", value: "Jet grout ve enjeksiyon işleri" }
    ]
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
      caption: "YER6 Zemin Güçlendirme Geoteknik Mühendislik"
    },
    description:
      "YER6 Zemin Güçlendirme Geoteknik Mühendislik; jet grout, zemin iyileştirme, zemin güçlendirme, fore kazık, ankraj, iksa sistemleri ve temel mühendisliği alanlarında Ankara merkezli, Türkiye geneli ve yurt dışında geoteknik saha uygulaması sunar.",
    telephone: siteConfig.phone.display,
    email: siteConfig.email,
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "17:00"
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

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item
    }))
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  url: string;
}) {
  const author = article.authorName
    ? {
        "@type": "Person",
        name: article.authorName,
        jobTitle: "Geoteknik Uzmanı",
        url: `${siteConfig.siteUrl}/about`
      }
    : {
        "@type": "Organization",
        name: `${siteConfig.companyName} Teknik İçerik Ekibi`,
        url: `${siteConfig.siteUrl}/about`
      };

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    image: article.image || `${siteConfig.siteUrl}/opengraph-image.png`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author,
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/icon.png`
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url
    }
  };
}
