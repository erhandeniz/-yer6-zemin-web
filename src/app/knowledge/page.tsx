import type { Metadata } from "next";
import { KnowledgeContent } from "./KnowledgeContent";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/knowledge/`;

// /knowledge/ = YAPILANDIRILMIŞ, kalıcı (evergreen) teknik rehberler.
// (/blog/ = güncel yazılar ve saha içgörüleri — niyetler ayrışıktır.)
const pageTitle = "Geoteknik Bilgi Merkezi | Jet Grout, DSM ve Fore Kazık | YER6";
const pageDescription =
  "Jet grout, DSM, fore kazık, ankraj ve zemin iyileştirme yöntemleri hakkında doğrulanmış teknik rehberler, uygulama esasları ve kalite kontrol içerikleri.";

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
      <script
        id="knowledge-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...breadcrumbSchema, "@id": `${pageUrl}#breadcrumb` }) }}
      />
      <script
        id="knowledge-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <KnowledgeContent />
    </>
  );
}
