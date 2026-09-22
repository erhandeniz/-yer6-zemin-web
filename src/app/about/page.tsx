// SEMA NOTU: Bu sayfa statik export ile HTML olarak uretilir. next/script
// bileseni (<Script>) script etiketini tarayicida calistirmak icin tasarlanmistir
// ve uretilen HTML dosyasina YAZILMAZ. Googlebot HTML dosyasini okudugu icin
// <Script> ile yazilan schema.org kunyelerini hic gormez. Bu nedenle duz
// <script> kullanilir; layout.tsx ve knowledge/page.tsx zaten boyle calisiyor.
// <Script> bilesenine geri donulmemelidir.
import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";
import { siteConfig } from "@/lib/siteConfig";

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

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "YER6 Geoteknik Hakkında",
    description: "2016 yılında kurulan YER6 Geoteknik; jet grout, fore kazık, DSM, mini kazık, ankraj ve iksa sistemlerinde uzman mühendislik kadrosu ve modern makine parkıyla hizmet vermektedir.",
    isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
    about: {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}/#organization`,
      name: "YER6 Geoteknik",
      foundingDate: "2016",
      foundingLocation: {
        "@type": "Place",
        name: "Ankara, Türkiye"
      }
    }
  };

  return (
    <>
      <script
        id="about-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <AboutContent />
    </>
  );
}
