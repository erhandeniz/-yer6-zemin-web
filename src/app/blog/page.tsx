import type { Metadata } from "next";
import { BlogContent } from "./BlogContent";
import { siteConfig } from "@/lib/siteConfig";
import Script from "next/script";

const pageUrl = `${siteConfig.siteUrl}/blog/`;

// /blog/ = GÜNCEL yazılar, saha içgörüleri ve şirket yayınları.
// (/knowledge/ = yapılandırılmış kalıcı teknik rehberler — niyetler ayrışıktır.)
const pageTitle = "Zemin Güçlendirme Blogu | YER6";
const pageDescription =
  "Jet grout, DSM, fore kazık, zemin iyileştirme, iksa ve kalite kontrol uygulamalarına yönelik güncel teknik yazılar ve saha rehberleri.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
    languages: { "tr-TR": pageUrl }
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    locale: "tr_TR"
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription
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

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collectionpage`,
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` }
  };

  return (
    <>
      <Script
        id="blog-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...breadcrumbSchema, "@id": `${pageUrl}#breadcrumb` }) }}
      />
      <Script
        id="blog-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <BlogContent />
    </>
  );
}
