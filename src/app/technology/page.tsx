import type { Metadata } from "next";
import { TechnologyContent } from "./TechnologyContent";
import { siteConfig } from "@/lib/siteConfig";
import Script from "next/script";

const pageUrl = `${siteConfig.siteUrl}/technology/`;

export const metadata: Metadata = {
  title: "Zemin İyileştirme Teknolojileri",
  description: "Dijital saha takibiyle ölçülebilir geoteknik kalite. YER6'nın projelerde kullandığı zemin modeli, makine otomasyonu ve tasarım teknolojileri.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin İyileştirme Teknolojileri | YER6",
    description: "Dijital saha takibiyle ölçülebilir geoteknik kalite. YER6'nın projelerde kullandığı zemin modeli, makine otomasyonu ve tasarım teknolojileri.",
    url: pageUrl
  }
};

export default function TechnologyPage() {
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
        name: "Teknoloji",
        item: pageUrl
      }
    ]
  };

  return (
    <>
      <Script
        id="technology-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TechnologyContent />
    </>
  );
}
