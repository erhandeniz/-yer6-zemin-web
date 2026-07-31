/**
 * YER6 — DEPREM VE ZEMİN BİLGİ MERKEZİ İÇERİĞİ
 *
 * İLKE: Bu içerik deprem korkusu üzerinden pazarlama yapmaz. Sansasyonel başlık,
 * kesin tahmin veya "hemen şunu yaptırın" tarzı yönlendirme içermez. Teknik,
 * sakin ve kaynaklı bir kamu bilgilendirmesidir. Saha kararı yalnızca zemin
 * etüdü ve projelendirme ile verilir.
 */

export type EarthquakeGuideSection = {
  heading: string;
  body: string[];
};

export type EarthquakeGuide = {
  id: string;
  title: string;
  summary: string;
  sections: EarthquakeGuideSection[];
};

export const EARTHQUAKE_GUIDES: EarthquakeGuide[] = [
  {
    id: "deprem-ve-zemin",
    title: "Deprem ve zemin ilişkisi",
    summary:
      "Aynı büyüklükteki bir deprem, zemin koşullarına bağlı olarak farklı sahalarda çok farklı etkiler oluşturabilir.",
    sections: [
      {
        heading: "Yerel zemin etkisi ve zemin büyütmesi",
        body: [
          "Deprem dalgaları ana kayadan yüzeye doğru ilerlerken, üstteki gevşek ve yumuşak tabakalarda genlikleri değişebilir. Yumuşak zeminlerde belirli periyotlardaki hareket büyüyebilir; bu olguya zemin büyütmesi denir.",
          "Bu nedenle bir yapının deprem performansı yalnızca üstyapı tasarımına değil, altındaki zeminin dinamik davranışına da bağlıdır. Zemin sınıfı, tabaka kalınlıkları, kayma dalgası hızı ve yeraltı suyu seviyesi tasarımın girdileridir."
        ]
      },
      {
        heading: "Yapı-zemin etkileşimi",
        body: [
          "Temel sistemi ile zemin birbirinden bağımsız düşünülemez. Rijit bir temel altında yumuşak bir tabaka varsa, deprem sırasında oluşan oturma ve dönme, üstyapıda hesapta görünmeyen zorlamalar üretebilir.",
          "Kazıklı temel, radye temel veya iyileştirilmiş zemin seçimi; taşıma gücü, oturma ve deprem davranışının birlikte değerlendirilmesiyle yapılır."
        ]
      }
    ]
  },
  {
    id: "sivilasma",
    title: "Sıvılaşma nedir, hangi zeminlerde görülür?",
    summary:
      "Suya doygun, gevşek kum ve siltlerde deprem sırasında boşluk suyu basıncının artmasıyla zemin taşıma gücünü geçici olarak yitirebilir.",
    sections: [
      {
        heading: "Oluşum koşulları",
        body: [
          "Sıvılaşma tipik olarak yeraltı su seviyesinin yüzeye yakın olduğu, gevşek-orta sıkı kum ve düşük plastisiteli silt tabakalarında görülür. Killi ve iyi derecelenmiş çakıllı zeminlerde risk belirgin biçimde düşer.",
          "Tekrarlı deprem yükü altında boşluk suyu basıncı artar; efektif gerilme azalır ve zemin, kısa süreliğine sıvı gibi davranabilir."
        ]
      },
      {
        heading: "Sahada gözlenen etkiler",
        body: [
          "Yapılarda oturma ve dönme, temel altında boşluk oluşumu, yüzeyde kum konileri (kaynama), altyapı hatlarında yüzme ve şev kaymaları görülebilir.",
          "Risk değerlendirmesi; sondaj, SPT/CPT verileri, laboratuvar deneyleri ve saha özgü sismik parametrelerle yapılır. Harita üzerinden veya benzer bölgeye bakarak kesin sonuç çıkarılamaz."
        ]
      },
      {
        heading: "Azaltma yaklaşımları",
        body: [
          "Zemin iyileştirme (jet grout, DSM, taş kolon, kompaksiyon), derin temele geçiş, drenaj ile boşluk suyu basıncının kontrolü ve yapısal önlemler birlikte değerlendirilir.",
          "Hangi yöntemin uygun olduğu; tabaka derinliği, kalınlığı, dane dağılımı, yeraltı suyu, yapı yükü ve saha erişimine göre projelendirilir."
        ]
      }
    ]
  },
  {
    id: "deprem-sonrasi-inceleme",
    title: "Deprem sonrası zemin ve temel incelemesi",
    summary:
      "Deprem sonrası değerlendirmede üstyapı hasarı kadar temel ve zemin davranışının da incelenmesi gerekir.",
    sections: [
      {
        heading: "İnceleme başlıkları",
        body: [
          "Farklı oturma ve yapı eğilmesi, temel çevresinde çatlak ve boşluk, döşeme ile zemin arasında ayrılma, istinat yapılarında deplasman, şevlerde kayma izleri ve altyapı hatlarındaki kırılmalar kayıt altına alınır.",
          "Zemin kaynaklı hasar ile üstyapı kaynaklı hasarın ayrıştırılması, güçlendirme kararının doğru kurulması için kritiktir."
        ]
      },
      {
        heading: "Karar süreci",
        body: [
          "Gözlemsel inceleme tek başına yeterli değildir; sondaj, laboratuvar deneyleri ve gerekiyorsa saha testleriyle desteklenir.",
          "Güçlendirme kararı yetkili mühendislik hizmetiyle ve ilgili yönetmelik çerçevesinde verilir."
        ]
      }
    ]
  },
  {
    id: "yontemler",
    title: "Zemin güçlendirme yöntemleri ve deprem davranışı",
    summary:
      "Jet grout, DSM, mikro kazık ve fore kazık; farklı zemin ve yük koşullarında farklı amaçlarla kullanılır.",
    sections: [
      {
        heading: "Jet grout",
        body: [
          "Yüksek basınçlı enjeksiyonla zeminde yerinde kolonlar oluşturulur. Sıvılaşma azaltımı, taşıma gücü artışı, oturma kontrolü ve su kontrolü amacıyla kullanılabilir.",
          "Kolon çapı ve dayanımı; zemin türüne, enjeksiyon parametrelerine ve çekme hızına bağlıdır. Uygulama öncesi deneme kolonu ve sonrasında kalite kontrolü esastır."
        ]
      },
      {
        heading: "DSM (derin zemin karıştırma)",
        body: [
          "Zemin, bağlayıcı ile mekanik olarak karıştırılarak iyileştirilir. Geniş alanlı platformlarda ve yumuşak killerde homojen taşıma kapasitesi hedeflenir.",
          "Karışım tasarımı laboratuvarda kurulur; sahada üretim kayıtları ve karot dayanımlarıyla doğrulanır."
        ]
      },
      {
        heading: "Fore kazık ve mikro kazık",
        body: [
          "Yükleri sağlam tabakalara aktarır. Fore kazık büyük yükler ve derin temeller için; mikro kazık ise sınırlı çalışma alanı ve mevcut yapı altındaki güçlendirme işleri için uygundur.",
          "Kazık bütünlüğü ve taşıma kapasitesi; PIT, CSL ve yükleme testleriyle doğrulanabilir."
        ]
      }
    ]
  },
  {
    id: "kalite-kontrol",
    title: "Deprem bölgesinde kalite kontrol",
    summary:
      "Bir iyileştirmenin deprem performansına katkısı, ancak doğrulanabilir kalite kontrol ile güvenilir hâle gelir.",
    sections: [
      {
        heading: "Kayıt ve doğrulama",
        body: [
          "Delgi kayıtları, enjeksiyon basıncı ve debisi, bağlayıcı dozajı, kolon boyu ve konumu, beton/şerbet numuneleri, karot ve dayanım sonuçları izlenir.",
          "Ölçülmemiş bir imalatın performansı iddia edilemez; kalite kontrol planı imalattan önce kurulur."
        ]
      }
    ]
  }
];

/** Sık sorulan sorular — görünür içerikle birebir aynıdır (FAQPage şeması için). */
export const EARTHQUAKE_FAQ: { question: string; answer: string }[] = [
  {
    question: "Aynı deprem neden farklı kurumlarda farklı büyüklükte görünüyor?",
    answer:
      "Kurumlar farklı istasyon ağları, farklı büyüklük ölçekleri (ML, Mw, mb) ve farklı çözüm yöntemleri kullanır. İlk dakikalarda otomatik çözüm yayınlanır, sonrasında uzman revizyonu yapılabilir. Bu nedenle büyüklük, derinlik ve merkez üssü değerleri kurumlar arasında farklılık gösterebilir; YER6 bu farkları gizlemeden yan yana gösterir."
  },
  {
    question: "Depremin büyüklüğü ile şiddeti aynı şey mi?",
    answer:
      "Hayır. Büyüklük, depremde açığa çıkan enerjinin ölçüsüdür ve her deprem için tek bir değerdir. Şiddet ise belirli bir noktadaki etkinin ölçüsüdür; mesafeye, zemin koşullarına ve yapı stoğuna göre aynı depremde yerden yere değişir."
  },
  {
    question: "Derinlik ne anlama gelir?",
    answer:
      "Odak derinliği, kırılmanın başladığı noktanın yüzeyden uzaklığıdır. Sığ depremler yüzeyde genellikle daha güçlü hissedilir; ancak hissedilme ve hasar, zemin koşulları ve mesafeyle birlikte değerlendirilir."
  },
  {
    question: "Zemin koşulları depremin hissedilmesini nasıl etkiler?",
    answer:
      "Gevşek ve suya doygun zeminlerde deprem hareketi belirli periyotlarda büyüyebilir; bu nedenle iki komşu bölge aynı depremi farklı şiddette yaşayabilir. Bu, zemin etüdünün neden bina bazında yapıldığının temel sebeplerinden biridir."
  },
  {
    question: "Bir sonraki depremin ne zaman olacağı tahmin edilebilir mi?",
    answer:
      "Hayır. Bugünkü bilimsel yöntemlerle bir depremin yeri, zamanı ve büyüklüğü kesin olarak önceden bildirilemez. Bu sayfada yalnızca gerçekleşmiş ve resmî kurumlarca yayımlanmış deprem kayıtları ile doğrulanmış teknik bilgi paylaşılır; tahmin yapılmaz."
  },
  {
    question: "Zemin güçlendirme depreme karşı garanti sağlar mı?",
    answer:
      "Zemin güçlendirme, zemin kaynaklı riskleri (oturma, sıvılaşma, taşıma gücü yetersizliği) azaltmayı hedefler; tek başına deprem güvenliği garantisi vermez. Yapının deprem performansı, üstyapı tasarımı, malzeme kalitesi ve uygulama ile birlikte değerlendirilir."
  }
];
