import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServicePaths } from "@/lib/content";
import { getServiceSchemaDescription, localSeoServiceAreas } from "@/lib/seo";
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
  const seoTitle =
    service.slug === "dsm"
      ? "DSM Firması | Deep Soil Mixing Türkiye Geneli Zemin İyileştirme"
      : service.slug === "jet-grout"
        ? "Jet Grout Firması | Türkiye Geneli Jet Grout Yapan Firma"
        : service.slug === "fore-kazik"
          ? "Fore Kazık Firması | Türkiye Geneli Fore Kazık Yapan Firma"
          : `${service.title} Zemin Güçlendirme Hizmeti`;
  const description = getServiceSchemaDescription(
    service.slug,
    `${service.summary} ${service.title}, zemin güçlendirme ve zemin iyileştirme projelerinde saha verisi, kalite kontrol ve teknik raporlama ile uygulanır.`
  );

  return {
    title: seoTitle,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title: `${seoTitle} | YER6`,
      description,
      url: canonical
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
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.siteUrl}/#organization`,
      name: siteConfig.companyName,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phone.display,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.locality,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country
      }
    },
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
        name: "Hizmetler",
        item: `${siteConfig.siteUrl}/services/`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: canonical
      }
    ]
  };

  const faqItems =
    "faq" in service && Array.isArray((service as { faq?: { question: string; answer: string }[] }).faq)
      ? (service as { faq?: { question: string; answer: string }[] }).faq ?? []
      : [];
  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        }
      : null;

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
      <ServiceDetailContent slug={slug} />
    </>
  );
}
