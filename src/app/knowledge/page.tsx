import type { Metadata } from "next";
import { KnowledgeContent } from "./KnowledgeContent";
import { siteConfig } from "@/lib/siteConfig";
import Script from "next/script";

const pageUrl = `${siteConfig.siteUrl}/knowledge/`;

export const metadata: Metadata = {
  title: "Zemin Güçlendirme Bilgi Merkezi",
  description:
    "Geoteknik mühendislik bilgi bankası. Jet grout, DSM, fore kazık, ankraj ve zemin iyileştirme yöntemleri hakkında detaylı teknik makaleler.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin Güçlendirme Bilgi Merkezi | YER6",
    description:
      "Geoteknik mühendislik bilgi bankası. Jet grout, DSM, fore kazık, ankraj ve zemin iyileştirme yöntemleri hakkında detaylı teknik makaleler.",
    url: pageUrl
  }
};

export default function KnowledgeIndexPage() {
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
        name: "Bilgi Merkezi",
        item: pageUrl
      }
    ]
  };

  return (
    <>
      <Script
        id="knowledge-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <KnowledgeContent />
    </>
  );
}
