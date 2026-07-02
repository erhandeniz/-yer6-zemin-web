import type { Metadata } from "next";
import { EquipmentContent } from "./EquipmentContent";
import { equipmentSeoItems } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/equipment-fleet`;
const equipmentFleetDescription =
  "YER6 Zemin Mühendislik; fore kazık, jet grout, ankraj, zemin iyileştirme, zemin güçlendirme, derin temel ve iksa uygulamalarında kendi makine parkuru ile sahada hızlı, güvenilir ve teknik çözüm üretir.";

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
    itemListElement: equipmentSeoItems.map((item, index) => {
      const brand = "brand" in item ? item.brand : undefined;
      const additionalProperties = "additionalProperties" in item ? item.additionalProperties : undefined;

      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: item.name,
          category: item.category,
          description: item.description,
          ...(brand
            ? {
                brand: {
                  "@type": "Brand",
                  name: brand
                },
                manufacturer: {
                  "@type": "Organization",
                  name: brand
                }
              }
            : {}),
          ...(additionalProperties
            ? {
                additionalProperty: additionalProperties.map((property) => ({
                  "@type": "PropertyValue",
                  name: property.name,
                  value: property.value
                }))
              }
            : {})
        }
      };
    })
  };

  return (
    <>
      <script
        id="equipment-fleet-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(equipmentSchema) }}
      />
      <EquipmentContent />
    </>
  );
}
