import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";
import { siteConfig } from "@/lib/siteConfig";
import Script from "next/script";

const pageUrl = `${siteConfig.siteUrl}/about/`;

export const metadata: Metadata = {
  title: "Zemin Güçlendirme Ekibi ve Jeoteknik Mühendislik",
  description: "Zemin altındaki belirsizliği üstyapıdaki güvene dönüştüren mühendislik ekibimiz. YER6'nın vizyonu, kalite standartları ve uzman kadrosu.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin Güçlendirme Ekibi ve Jeoteknik Mühendislik | YER6",
    description: "Zemin altındaki belirsizliği üstyapıdaki güvene dönüştüren mühendislik ekibimiz. YER6'nın vizyonu, kalite standartları ve uzman kadrosu.",
    url: pageUrl
  }
};

export default function AboutPage() {
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
        name: "Hakkımızda",
        item: pageUrl
      }
    ]
  };

  return (
    <>
      <Script
        id="about-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutContent />
    </>
  );
}
