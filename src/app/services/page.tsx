import type { Metadata } from "next";
import Script from "next/script";
import { ServicesContent } from "./ServicesContent";
import { localSeoServiceAreas, serviceSchemaDescriptions } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/services/`;

export const metadata: Metadata = {
  title: "Zemin Güçlendirme ve Zemin İyileştirme Hizmetleri",
  description: "Zorlu zemin koşulları için entegre geoteknik çözümler. YER6'nın jet grout, fore kazık, DSM, ankraj ve iksa sistemleri hizmetlerini inceleyin.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin Güçlendirme ve Zemin İyileştirme Hizmetleri | YER6",
    description: "Zorlu zemin koşulları için entegre geoteknik çözümler. YER6'nın jet grout, fore kazık, DSM, ankraj ve iksa sistemleri hizmetlerini inceleyin.",
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
    provider: { "@id": `${siteConfig.siteUrl}/#organization` },
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
