import type { Metadata } from "next";
import { EquipmentContent } from "./EquipmentContent";
import { equipmentSeoItems } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import Script from "next/script";

const pageUrl = `${siteConfig.siteUrl}/equipment-fleet/`;
const equipmentFleetDescription =
  "YER6 Zemin Güçlendirme Geoteknik Mühendislik; fore kazık, jet grout, ankraj, zemin iyileştirme, zemin güçlendirme, derin temel ve iksa uygulamalarında kendi makine parkuru ile sahada hızlı, güvenilir ve teknik çözüm üretir.";

export const metadata: Metadata = {
  title: "Zemin İyileştirme Makine Parkı",
  description: equipmentFleetDescription,
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin İyileştirme Makine Parkı | YER6",
    description: equipmentFleetDescription,
    url: pageUrl
  }
};

export default function EquipmentFleetPage() {
  const equipmentSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#equipment-list`,
    name: "YER6 Zemin İyileştirme Makine Parkı",
    description: equipmentFleetDescription,
    url: pageUrl,
    numberOfItems: equipmentSeoItems.length,
    itemListElement: equipmentSeoItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description
    }))
  };

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
        name: "Makine Parkı",
        item: pageUrl
      }
    ]
  };

  return (
    <>
      <Script
        id="equipment-fleet-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="equipment-fleet-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(equipmentSchema) }}
      />
      <EquipmentContent />
    </>
  );
}
