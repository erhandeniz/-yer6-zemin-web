import type { Metadata } from "next";
import Script from "next/script";
import { ServicesContent } from "./ServicesContent";
import { localSeoServiceAreas, serviceSchemaDescriptions } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/services`;

export const metadata: Metadata = {
  title: "Zemin Güçlendirme ve Zemin İyileştirme Hizmetleri",
  description: "Jet grout, fore kazık, DSM zemin iyileştirme, enjeksiyon, ankraj, iksa sistemleri ve temel güçlendirme hizmetlerini inceleyin.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin Güçlendirme ve Zemin İyileştirme Hizmetleri | YER6",
    description: "Jet grout, fore kazık, DSM zemin iyileştirme, enjeksiyon, ankraj, iksa sistemleri ve temel güçlendirme hizmetlerini inceleyin.",
    url: pageUrl
  }
};

export default function ServicesPage() {
  const zeminGuclendirmeSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#zemin-guclendirme-service`,
    name: "Zemin Güçlendirme",
    description: serviceSchemaDescriptions["zemin-guclendirme"],
    url: pageUrl,
    serviceType: "Zemin Güçlendirme",
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
      serviceUrl: pageUrl
    }
  };

  return (
    <>
      <Script
        id="service-schema-zemin-guclendirme"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(zeminGuclendirmeSchema) }}
      />
      <ServicesContent />
    </>
  );
}
