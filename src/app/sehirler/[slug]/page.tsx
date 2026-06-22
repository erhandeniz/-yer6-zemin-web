import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import { getCityPageBySlug, getCityPaths, cityPages } from "@/lib/cityContent";
import { services } from "@/lib/content";
import { siteConfig } from "@/lib/siteConfig";
import { publishedKnowledgeArticles } from "@/data/knowledge";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCityPaths();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cityPage = getCityPageBySlug(slug);
  if (!cityPage) {
    notFound();
  }

  const pageUrl = `${siteConfig.siteUrl}/sehirler/${cityPage.slug}`;

  return {
    title: cityPage.title,
    description: cityPage.description,
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title: `${cityPage.title} | YER6`,
      description: cityPage.description,
      url: pageUrl
    }
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const cityPage = getCityPageBySlug(slug);
  if (!cityPage) {
    notFound();
  }

  const pageUrl = `${siteConfig.siteUrl}/sehirler/${cityPage.slug}`;
  const linkedServices = cityPage.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is (typeof services)[number] => Boolean(service));
  const linkedArticles = cityPage.articleSlugs
    .map((articleSlug) => publishedKnowledgeArticles.find((article) => article.slug === articleSlug))
    .filter((article): article is (typeof publishedKnowledgeArticles)[number] => Boolean(article));
  const nearbyCities = cityPages.filter((page) => page.slug !== cityPage.slug).slice(0, 4);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${cityPage.city} zemin güçlendirme ve zemin iyileştirme`,
    description: cityPage.description,
    url: pageUrl,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.companyName,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phone.display,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.locality,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country
      }
    },
    areaServed: {
      "@type": "City",
      name: cityPage.city
    },
    serviceType: linkedServices.map((service) => service.title)
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
        name: "Şehirler",
        item: `${siteConfig.siteUrl}/sehirler`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cityPage.title,
        item: pageUrl
      }
    ]
  };

  return (
    <main>
      <Script
        id={`city-service-schema-${cityPage.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id={`city-breadcrumb-schema-${cityPage.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative overflow-hidden px-5 pb-20 pt-40">
        <div className="absolute inset-0 technical-mesh opacity-80" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-14 bg-gold-300 gold-line" />
              <span className="text-xs font-semibold uppercase tracking-[0.36em] text-gold-200">Şehir Bazlı Hizmet</span>
            </div>
            <h1 className="text-balance text-5xl font-semibold leading-tight text-white md:text-7xl">{cityPage.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/64">{cityPage.heroLead}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-10">
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <MapPin className="h-8 w-8 text-gold-200" />
              <h2 className="mt-6 text-3xl font-semibold text-white">{cityPage.city} zemin koşulları nasıl değerlendirilir?</h2>
              <p className="mt-5 text-sm leading-7 text-white/70">{cityPage.soilContext}</p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <CheckCircle2 className="h-8 w-8 text-gold-200" />
              <h2 className="mt-6 text-3xl font-semibold text-white">Uygulama yaklaşımı</h2>
              <p className="mt-5 text-sm leading-7 text-white/70">{cityPage.recommendedApproach}</p>
              <p className="mt-5 text-sm leading-7 text-white/70">{cityPage.qualityFocus}</p>
            </article>
          </div>

          <aside className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-sm text-white/75">
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-gold-200">İlgili Hizmetler</h2>
              <div className="mt-4 space-y-3">
                {linkedServices.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="block text-white/70 hover:text-white">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xs uppercase tracking-[0.3em] text-gold-200">Teknik Makaleler</h2>
              <div className="mt-4 space-y-3">
                {linkedArticles.map((article) => (
                  <Link key={article.slug} href={`/knowledge/${article.slug}`} className="block text-white/70 hover:text-white">
                    {article.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xs uppercase tracking-[0.3em] text-gold-200">Diğer Şehirler</h2>
              <div className="mt-4 space-y-3">
                {nearbyCities.map((page) => (
                  <Link key={page.slug} href={`/sehirler/${page.slug}`} className="block text-white/70 hover:text-white">
                    {page.city} zemin güçlendirme
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-100">
              Teknik ön değerlendirme al <ArrowUpRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
