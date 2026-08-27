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

const machineImageMap: Record<string, string> = {
  "Bauer BG 45 BS 95 Fore Kazık Delgi Makinesi": "/images/equipment/bauer-bg-45.jpg",
  "Bauer BG 28 H PremiumLine Fore Kazık Delgi Makinesi": "/images/equipment/bauer-bg-28.jpg",
  "Bauer BG 18 H BT 50 PremiumLine Fore Kazık Delgi Makinesi": "/images/equipment/bauer-bg-18.jpg",
  "XCMG XR220D Fore Kazık Delgi Makinesi": "/images/equipment/xcmg-xr220d.jpg",
  "Soilmec SM-401 Hidrolik Delgi Makinesi": "/images/equipment/soilmec-sm-401.jpg",
  "Soilmec SM-14 Delgi Makinesi": "/images/equipment/soilmec-sm-14.jpg",
  "MDT 180 B Hidrolik Delgi Makinesi": "/images/equipment/mdt-180-b.jpg",
  "Casagrande C6 XP-2 Ankraj Delgi Makinesi": "/images/equipment/casagrande-c6-xp-2.jpg",
  "Soilmec 5T-400J Pompa": "/images/equipment/soilmec-5t-400j-pump.jpg",
  "Metax MP7 Pompa": "/images/equipment/metax-mp7-pump.jpg",
  "Soilmec GM-25 Jet Grout Karıştırma Santrali": "/images/equipment/soilmec-gm-25-mixing-plant.jpg",
  "60 Tonluk Silo": "/images/equipment/cement-silo-60-ton.jpg"
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
      item: {
        "@type": "Thing",
        name: item.name,
        description: item.description,
        image: `${siteConfig.siteUrl}${machineImageMap[item.name] ?? "/opengraph-image.png"}`,
        ...("brand" in item
          ? {
              brand: {
                "@type": "Brand",
                name: item.brand
              }
            }
          : {}),
        ...("additionalProperties" in item
          ? {
              additionalProperty: item.additionalProperties.map((property) => ({
                "@type": "PropertyValue",
                name: property.name,
                value: property.value
              }))
            }
          : {})
      }
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
