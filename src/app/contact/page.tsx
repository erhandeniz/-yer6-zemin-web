import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";
import { siteConfig } from "@/lib/siteConfig";
import Script from "next/script";

const pageUrl = `${siteConfig.siteUrl}/contact/`;

export const metadata: Metadata = {
  title: "Zemin Güçlendirme Teklif ve İletişim",
  description: "Projeniz için teknik ön değerlendirme ve hızlı keşif talebi oluşturun. Ankara merkezli geoteknik uzmanlarımızla zemin problemlerinize çözüm bulalım.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin Güçlendirme Teklif ve İletişim | YER6",
    description: "Projeniz için teknik ön değerlendirme ve hızlı keşif talebi oluşturun. Ankara merkezli geoteknik uzmanlarımızla zemin problemlerinize çözüm bulalım.",
    url: pageUrl
  }
};

export default function ContactPage() {
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
        name: "İletişim",
        item: pageUrl
      }
    ]
  };

  return (
    <>
      <Script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactContent />
    </>
  );
}
