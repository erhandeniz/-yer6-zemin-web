// SEMA NOTU: Bu sayfa statik export ile HTML olarak uretilir. next/script
// bileseni (<Script>) script etiketini tarayicida calistirmak icin tasarlanmistir
// ve uretilen HTML dosyasina YAZILMAZ. Googlebot HTML dosyasini okudugu icin
// <Script> ile yazilan schema.org kunyelerini hic gormez. Bu nedenle duz
// <script> kullanilir; layout.tsx ve knowledge/page.tsx zaten boyle calisiyor.
// <Script> bilesenine geri donulmemelidir.
import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";
import { localSeoServiceAreas, serviceSchemaDescriptions } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/services/`;

export const metadata: Metadata = {
  title: "Zemin Güçlendirme ve Zemin İyileştirme Hizmetleri",
  description: "Zorlu zemin koşulları için entegre geoteknik çözümler. YER6'nın jet grout, fore kazık, DSM, ankraj ve iksa sistemleri hizmetlerini inceleyin.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Zemin Güçlendirme ve Zemin İyileştirme Hizmetleri | YER6",
    description: "Zorlu zemin koşulları için entegre geoteknik çözümler. YER6'nın jet grout, fore kazık, DSM, ankraj ve iksa sistemleri hizmetlerini inceleyin.",
    url: pageUrl
  }
};

export default function ServicesPage() {
  const zeminGuclendirmeSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#zemin-guclendirme-service`,
    name: "Zemin Güçlendirme",
    description: serviceSchemaDescriptions["zemin-guclendirme"],
    url: pageUrl,
    serviceType: "Zemin Güçlendirme",
    category: "Zemin Güçlendirme ve Geoteknik Mühendislik",
    provider: { "@id": `${siteConfig.siteUrl}/#organization` },
    areaServed: localSeoServiceAreas.map((name) => ({
      "@type": name === "Türkiye geneli" ? "Country" : "AdministrativeArea",
      name
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone.display,
        url: siteConfig.phone.href
      },
      serviceUrl: pageUrl
    }
  };

  return (
    <>
      <script
        id="service-schema-zemin-guclendirme"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(zeminGuclendirmeSchema) }}
      />
      <ServicesContent />
    </>
  );
}
