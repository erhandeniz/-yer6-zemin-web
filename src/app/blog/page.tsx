import type { Metadata } from "next";
import { BlogContent } from "./BlogContent";
import { siteConfig } from "@/lib/siteConfig";
import Script from "next/script";

const pageUrl = `${siteConfig.siteUrl}/blog/`;

export const metadata: Metadata = {
  title: "Zemin Güçlendirme Blogu",
  description: "Zemin mühendisliği sektörü ve şantiye operasyonları hakkında en güncel yazılar, geoteknik uygulama rehberleri ve mühendislik makaleleri.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin Güçlendirme Blogu | YER6",
    description: "Zemin mühendisliği sektörü ve şantiye operasyonları hakkında en güncel yazılar, geoteknik uygulama rehberleri ve mühendislik makaleleri.",
    url: pageUrl
  }
};

export default function BlogPage() {
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
        name: "Blog",
        item: pageUrl
      }
    ]
  };

  return (
    <>
      <Script
        id="blog-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogContent />
    </>
  );
}
