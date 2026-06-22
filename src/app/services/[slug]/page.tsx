import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServicePaths } from "@/lib/content";
import { cityPages } from "@/lib/cityContent";
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

  const canonical = `${siteConfig.siteUrl}/services/${service.slug}`;
  const seoTitle = service.slug === "dsm" ? "DSM Zemin İyileştirme Hizmeti" : `${service.title} Zemin Güçlendirme Hizmeti`;
  const description = `${service.summary} ${service.title}, zemin güçlendirme ve zemin iyileştirme projelerinde saha verisi, kalite kontrol ve teknik raporlama ile uygulanır.`;

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

  const canonical = `${siteConfig.siteUrl}/services/${service.slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: canonical,
    provider: {
      "@type": "LocalBusiness",
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
    areaServed: cityPages.map((page) => ({
      "@type": "City",
      name: page.city
    })),
    serviceType: service.title
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
        item: `${siteConfig.siteUrl}/services`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: canonical
      }
    ]
  };

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
      <ServiceDetailContent slug={slug} />
    </>
  );
}
