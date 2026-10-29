// SEMA NOTU: Bu sayfa statik export ile HTML olarak uretilir. next/script
// bileseni (<Script>) script etiketini tarayicida calistirmak icin tasarlanmistir
// ve uretilen HTML dosyasina YAZILMAZ. Googlebot HTML dosyasini okudugu icin
// <Script> ile yazilan schema.org kunyelerini hic gormez. Bu nedenle duz
// <script> kullanilir; layout.tsx ve knowledge/page.tsx zaten boyle calisiyor.
// <Script> bilesenine geri donulmemelidir.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServicePaths } from "@/lib/content";
import { getServiceSchemaDescription, localSeoServiceAreas, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { ServiceDetailContent } from "./ServiceDetailContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServicePaths();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  const canonical = service.slug === "deep-soil-mixing"
    ? `${siteConfig.siteUrl}/services/dsm/`
    : `${siteConfig.siteUrl}/services/${service.slug}/`;

  const serviceSeoTitles: Record<string, string> = {
    "jet-grout": "Jet Grout (Jet Beton) Firmaları ve Zemin İyileştirme | YER6",
    dsm: "Deep Soil Mixing (DSM) Firmaları ve Zemin İyileştirme | YER6",
    "fore-kazik": "Fore Kazık Firmaları | Derin Temel ve Zemin İyileştirme | YER6",
    "mini-kazik": "Mini Kazık Firmaları | Bina Altı Temel Güçlendirme | YER6",
    ankraj: "Öngermeli Ankraj Firmaları ve İksa Sistemleri | YER6 Geoteknik",
    "iksa-sistemleri": "İksa Sistemleri Firmaları ve Derin Kazı Çözümleri | YER6",
    "zemin-iyilestirme": "Zemin İyileştirme | Yöntemler, Firma ve Maliyet 2026 | YER6",
    "zemin-guclendirme": "Zemin Güçlendirme Firmaları, Yöntemleri ve Uygulamaları | YER6",
    "geoteknik-danismanlik": "Geoteknik Danışmanlık ve Mühendislik Firmaları | YER6",
    "zemin-civisi": "Zemin Çivisi (Soil Nailing) Firmaları ve Şev Stabilitesi | YER6",
    "puskurtme-beton": "Püskürtme Beton (Shotcrete) Firmaları ve İksa | YER6",
    "kazik-yukleme-testleri": "Kazık Yükleme ve Bütünlük (PIT) Testi Firmaları | YER6",
    "zemin-etudu": "Zemin Etüdü ve Zemin Etüt Firmaları | Geoteknik Rapor | YER6",
    "tas-kolon": "Taş Kolon Firmaları | Zemin İyileştirme ve Vibro | YER6",
    "diafram-duvar": "Diyafram Duvar Firmaları ve Derin Kazı İksa | YER6",
    "bina-alti-jet-grout": "Bina Altı Jet Grout Firmaları ve Temel Güçlendirme | YER6",
    "cfa-kazik": "CFA Kazık Firmaları ve Sürekli Burgulu Kazık | YER6",
    "deep-soil-mixing": "Deep Soil Mixing (DSM) Firmaları ve Zemin İyileştirme | YER6",
    palplans: "Palplanş Firmaları ve Çelik İksa Perdesi Sistemleri | YER6"
  };
  const seoTitle = serviceSeoTitles[service.slug] ?? `${service.title} | YER6 Geoteknik`;
  const schemaDescription = getServiceSchemaDescription(
    service.slug,
    `${service.summary} ${service.title}, zemin güçlendirme ve zemin iyileştirme projelerinde saha verisi, kalite kontrol ve teknik raporlama ile uygulanır.`
  );
  const serviceMetaDescriptions: Partial<Record<string, string>> = {
    "jet-grout":
      "Jet grout (jet beton / graut beton) firmaları arasında YER6; yüksek basınçlı çimento enjeksiyonu ile temel altı zemin iyileştirme, su perdesi ve sıvılaşma önleme uygular.",
    dsm:
      "Deep soil mixing (DSM) zemin iyileştirme firmaları arasında YER6; TS EN 14679 standartlarında hafriyatsız zemin karıştırma, çift milli makineler ve UCS testleri sunar.",
    "fore-kazik":
      "Türkiye ve Ankara fore kazık firmaları arasında YER6; Bauer ve XCMG makine parkuruyla büyük çaplı fore kazık, baret kazık, derin temel ve iksa imalatı yapar.",
    "mini-kazik":
      "Mini kazık firmaları arasında YER6; dar alanlarda, bina içinde ve aktif yapıların altında zemin iyileştirme ve enjeksiyonlu mini kazık temel güçlendirme sunar.",
    ankraj:
      "Öngermeli zemin ankrajı ve iksa firmaları arasında YER6; derin kazı, zemin iyileştirme ve şev stabilitesi projelerinde delgi, enjeksiyon ve germe testleri uygular.",
    "iksa-sistemleri":
      "İksa sistemleri firmaları arasında YER6; kent içi derin kazılarda fore kazık perde, diyafram duvar, ankraj ve enstrümantasyon entegrasyonu ile komşu yapı güvenliğini sağlar.",
    "zemin-iyilestirme":
      "Zemin iyileştirme yöntemleri, maliyet etkenleri ve uygulama süreci. YER6; jet grout, DSM, taş kolon ve enjeksiyonda Türkiye geneli mühendislik sunar.",
    "zemin-guclendirme":
      "Zemin güçlendirme firmaları arasında YER6; jet grout, fore kazık, ankraj ve iksa yöntemleriyle deprem bölgelerinde taşıma kapasitesi, oturma kontrolü ve temel güvenliği sağlar.",
    "geoteknik-danismanlik":
      "Geoteknik danışmanlık ve zemin etüdü firmaları arasında YER6; saha araştırması, tasarım denetimi, metraj optimizasyonu ve risk yönetimiyle anahtar teslim mühendislik sunar.",
    "zemin-civisi":
      "Zemin çivisi (soil nailing) firmaları arasında YER6; şev stabilizasyonu, eğimli araziler ve derin kazılarda demir çivi ile püskürtme beton kombinasyonu uygular.",
    "puskurtme-beton":
      "Püskürtme beton (shotcrete) firmaları arasında YER6; tünel, iksa ve şev güçlendirmede yüksek basınçlı beton püskürtme ile hızlı ve dayanıklı yüzey koruması sağlar.",
    "kazik-yukleme-testleri":
      "Kazık yükleme testi ve bütünlük (PIT) testi firmaları arasında YER6; statik, dinamik yükleme ve CSL testleriyle fore kazık ve jet grout kalite doğrulaması yapar.",
    "zemin-etudu":
      "Ankara ve Türkiye geneli zemin etüt firmaları arasında YER6; sondaj, SPT/CPT arazi deneyleri, laboratuvar testleri ve TBDY 2018 onaylı zemin etüdü ve geoteknik rapor sunar.",
    "tas-kolon":
      "Taş kolon (stone column) firmaları arasında YER6; granüler zeminlerde vibro kompaksiyon ile taşıma kapasitesini artırır, sıvılaşma riskini minimize eder.",
    "diafram-duvar":
      "Diyafram duvar firmaları arasında YER6; derin kazılarda bentonit tremi beton ve lamellerle su geçirimsiz, yüksek rijitlikte iksa perdesi ve yapısal taşıyıcı eleman oluşturur.",
    "bina-alti-jet-grout":
      "Bina altı jet grout firmaları arasında YER6; elektrikli titreşimsiz makinelerle aktif yapıların temel altında zemin iyileştirme ve oturma önleme imalatı yapar.",
    "cfa-kazik":
      "CFA kazık firmaları arasında YER6; Continuous Flight Auger teknolojisiyle muhafaza borusuz, hızlı ve titreşimsiz delgi ile kazık imalatı ve 2026 maliyet analizi sunar.",
    "deep-soil-mixing":
      "Deep soil mixing (DSM) firmaları arasında YER6; çift milli makinelerle atıksız derin zemin karıştırma ve yerinde zemin-çimento kolonu oluşturarak alüvyon sahalarda zemin iyileştirme yapar.",
    palplans:
      "Palplanş firmaları arasında YER6; Larssen çelik palplanş profilleri, vibro çakıcı ve hidrolik presleme ile su geçirimsiz çelik iksa perdesi ve derin kazı destek sistemleri imalatı yapar."
  };
  const description = serviceMetaDescriptions[service.slug] ?? schemaDescription;

  return {
    title: {
      absolute: seoTitle
    },
    description,
    alternates: {
      canonical,
      languages: { "tr-TR": canonical }
    },
    openGraph: {
      title: seoTitle,
      description,
      url: canonical,
      locale: "tr_TR",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description
    }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const canonical = service.slug === "deep-soil-mixing"
    ? `${siteConfig.siteUrl}/services/dsm/`
    : `${siteConfig.siteUrl}/services/${service.slug}/`;
  const description = getServiceSchemaDescription(
    service.slug,
    `${service.summary} ${service.title}, zemin güçlendirme ve zemin iyileştirme projelerinde saha verisi, kalite kontrol ve teknik raporlama ile uygulanır.`
  );
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: service.title,
    description,
    url: canonical,
    serviceType: service.title,
    category: "Zemin Güçlendirme ve Geoteknik Mühendislik",
    provider: { "@id": `${siteConfig.siteUrl}/#organization` },
    knowsAbout: [
      "https://en.wikipedia.org/wiki/Deep_soil_mixing",
      "Deep Soil Mixing",
      "DSM Zemin İyileştirme",
      "Jet Grout",
      "Fore Kazık",
      "Öngermeli Ankraj",
      "CFA Kazık",
      "Zemin Güçlendirme Firmaları",
      "Geoteknik Mühendislik"
    ],
    areaServed: localSeoServiceAreas.map((name) => ({
      "@type": name === "Türkiye geneli" ? "Country" : "AdministrativeArea",
      name
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone.display,
        url: siteConfig.phone.href
      },
      serviceUrl: canonical
    }
  };
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Ana Sayfa", item: siteConfig.siteUrl },
    { name: "Hizmetler", item: `${siteConfig.siteUrl}/services/` },
    { name: service.title, item: canonical }
  ]);

  const faqItems =
    "faq" in service && Array.isArray((service as { faq?: { question: string; answer: string }[] }).faq)
      ? (service as { faq?: { question: string; answer: string }[] }).faq ?? []
      : [];
      
  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <script
        id={`service-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id={`service-breadcrumb-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          id={`service-faq-schema-${service.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {(() => {
        const steps =
          "processSteps" in service &&
          Array.isArray((service as { processSteps?: { title: string; description: string }[] }).processSteps)
            ? (service as { processSteps?: { title: string; description: string }[] }).processSteps ?? []
            : [];
        const howToSchema = generateHowToSchema({
          name: `${service.title} Uygulama Aşamaları`,
          description: `${service.title} zemin mühendisliği uygulamasının adım adım teknik süreci.`,
          steps,
          url: canonical
        });
        return howToSchema ? (
          <script
            id={`service-howto-schema-${service.slug}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
          />
        ) : null;
      })()}
      <ServiceDetailContent slug={slug} />
    </>
  );
}
