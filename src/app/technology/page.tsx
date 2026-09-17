// SEMA NOTU: Bu sayfa statik export ile HTML olarak uretilir. next/script
// bileseni (<Script>) script etiketini tarayicida calistirmak icin tasarlanmistir
// ve uretilen HTML dosyasina YAZILMAZ. Googlebot HTML dosyasini okudugu icin
// <Script> ile yazilan schema.org kunyelerini hic gormez. Bu nedenle duz
// <script> kullanilir; layout.tsx ve knowledge/page.tsx zaten boyle calisiyor.
// <Script> bilesenine geri donulmemelidir.
import type { Metadata } from "next";
import { TechnologyContent } from "./TechnologyContent";
import { siteConfig } from "@/lib/siteConfig";

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
      <script
        id="technology-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TechnologyContent />
    </>
  );
}
