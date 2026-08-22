import type { Metadata } from "next";
import Script from "next/script";
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

  const canonical = `${siteConfig.siteUrl}/services/${service.slug}/`;
  const serviceSeoTitles: Record<string, string> = {
    "jet-grout": "Jet Grout Firmaları ve Birim Fiyatları 2026 | YER6 Geoteknik",
    dsm: "DSM Firmaları | Deep Soil Mixing Zemin İyileştirme Fiyatları 2026",
    "fore-kazik": "Fore Kazık Firmaları ve Birim Fiyatları 2026 | YER6 Geoteknik",
    "mini-kazik": "Mini Kazık Firmaları ve Temel Güçlendirme Fiyatları 2026 | YER6",
    ankraj: "Ankraj Firmaları ve Öngermeli İksa Fiyatları 2026 | YER6",
    "iksa-sistemleri": "İksa Firmaları | Derin Kazı İksa Sistemleri ve Çözümleri 2026",
    "zemin-iyilestirme": "Zemin İyileştirme | Yöntemler, Firma ve Maliyet 2026 | YER6",
    "zemin-guclendirme": "Zemin Güçlendirme Firmaları ve Maliyet Hesaplama 2026 | YER6",
    "geoteknik-danismanlik": "Geoteknik Danışmanlık ve Zemin Etüdü Firmaları 2026",
    "zemin-civisi": "Zemin Çivisi (Soil Nailing) Uygulaması ve Birim Fiyatları 2026",
    "puskurtme-beton": "Püskürtme Beton (Shotcrete) Firmaları ve m2 Fiyatları 2026",
    "kazik-yukleme-testleri": "Kazık Yükleme Testi ve Bütünlük (PIT) Testi Firmaları",
    "zemin-etudu": "Zemin Etüdü Firmaları | Sondaj, Arazi Deneyleri ve Geoteknik Rapor",
    "tas-kolon": "Taş Kolon (Stone Column) Zemin İyileştirme Firmaları 2026",
    "diafram-duvar": "Diyafram Duvar Firmaları ve Derin Kazı İksa Çözümleri",
    "bina-alti-jet-grout": "Bina Altı Jet Grout Firmaları | Elektrikli Titreşimsiz Temel Güçlendirme",
    "cfa-kazik": "CFA Kazık Firmaları ve Metraj Maliyeti 2026 | YER6 Geoteknik",
    "deep-soil-mixing": "Deep Soil Mixing Firmaları | DSM Zemin İyileştirme & Derin Zemin Karıştırma",
    palplans: "Palplanş Firmaları ve m2 Birim Fiyatları 2026 | YER6 Geoteknik"
  };
  const seoTitle = serviceSeoTitles[service.slug] ?? `${service.title} Zemin Güçlendirme Hizmeti`;
  const schemaDescription = getServiceSchemaDescription(
    service.slug,
    `${service.summary} ${service.title}, zemin güçlendirme ve zemin iyileştirme projelerinde saha verisi, kalite kontrol ve teknik raporlama ile uygulanır.`
  );
  const serviceMetaDescriptions: Partial<Record<string, string>> = {
    "zemin-iyilestirme":
      "Zemin iyileştirme yöntemleri, maliyet etkenleri ve uygulama süreci. YER6; jet grout, DSM, taş kolon ve enjeksiyonda Türkiye geneli mühendislik sunar."
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

  const canonical = `${siteConfig.siteUrl}/services/${service.slug}/`;
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
      <Script
        id={`service-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id={`service-breadcrumb-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <Script
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
          <Script
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
