import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServicePaths } from "@/lib/content";
import { getServiceSchemaDescription, localSeoServiceAreas, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { ServiceDetailContent } from "./ServiceDetailContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServicePaths();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  const canonical = `${siteConfig.siteUrl}/services/${service.slug}/`;
  const serviceSeoTitles: Record<string, string> = {
    "jet-grout": "Jet Grout Firmaları | Türkiye Geneli Jet Grout Uygulaması",
    dsm: "DSM Firmaları | Deep Soil Mixing Zemin İyileştirme",
    "fore-kazik": "Fore Kazık Firmaları | Türkiye Geneli Fore Kazık Uygulaması",
    "mini-kazik": "Mini Kazık Firmaları | Türkiye Geneli Mini Kazık ve Askıya Alma",
    ankraj: "Ankraj Firmaları | Türkiye Geneli Öngermeli Ankraj Uygulaması",
    "iksa-sistemleri": "İksa Firmaları | Derin Kazı İksa Sistemleri ve Çözümleri",
    "zemin-iyilestirme": "Zemin İyileştirme Teknikleri ve En İyi Zemin İyileştirme Firmaları",
    "geoteknik-danismanlik": "Geoteknik Danışmanlık ve Zemin Etüdü Firmaları",
    "zemin-civisi": "Zemin Çivisi (Soil Nailing) Uygulaması ve Avantajları",
    "puskurtme-beton": "Püskürtme Beton (Shotcrete) Uygulaması ve Kullanım Alanları",
    "kazik-yukleme-testleri": "Kazık Yükleme ve Bütünlük (PIT) Testleri",
    "zemin-etudu": "Zemin Etüdü: Sondaj, Arazi Deneyleri ve Geoteknik Rapor",
    "tas-kolon": "Taş Kolon (Stone Column) Zemin İyileştirme Uygulaması",
    "diafram-duvar": "Diyafram Duvar İmalatı: Derin Kazı ve İksa Çözümü",
    "cmf-zemin-iyilestirme": "CMF Zemin İyileştirme Firmaları | Yüksek Taşıma Kapasitesi ve Zemin Islahı"
  };
  const seoTitle = serviceSeoTitles[service.slug] ?? `${service.title} Zemin Güçlendirme Hizmeti`;
  const description = getServiceSchemaDescription(
    service.slug,
    `${service.summary} ${service.title}, zemin güçlendirme ve zemin iyileştirme projelerinde saha verisi, kalite kontrol ve teknik raporlama ile uygulanır.`
  );

  return {
    title: seoTitle,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title: `${seoTitle} | YER6`,
      description,
      url: canonical
    }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const canonical = `${siteConfig.siteUrl}/services/${service.slug}/`;
  const description = getServiceSchemaDescription(
    service.slug,
    `${service.summary} ${service.title}, zemin güçlendirme ve zemin iyileştirme projelerinde saha verisi, kalite kontrol ve teknik raporlama ile uygulanır.`
  );
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: service.title,
    description,
    url: canonical,
    serviceType: service.title,
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
      serviceUrl: canonical
    }
  };
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Ana Sayfa", item: siteConfig.siteUrl },
    { name: "Hizmetler", item: `${siteConfig.siteUrl}/services/` },
    { name: service.title, item: canonical }
  ]);

  const faqItems =
    "faq" in service && Array.isArray((service as { faq?: { question: string; answer: string }[] }).faq)
      ? (service as { faq?: { question: string; answer: string }[] }).faq ?? []
      : [];
      
  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <Script
        id={`service-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id={`service-breadcrumb-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <Script
          id={`service-faq-schema-${service.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ServiceDetailContent slug={slug} />
    </>
  );
}
