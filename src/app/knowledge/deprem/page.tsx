import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { EARTHQUAKE_GUIDES, EARTHQUAKE_FAQ } from "@/lib/earthquake/guides";
import { EARTHQUAKE_SOURCES } from "@/lib/earthquake/sources";
import { cityPriorityRanking } from "@/lib/cityPriority";

const pageUrl = `${siteConfig.siteUrl}/knowledge/deprem/`;

const pageTitle = "Deprem ve Zemin Bilgi Merkezi | Sıvılaşma, Zemin Büyütmesi ve Güçlendirme | YER6";
const pageDescription =
  "Deprem ve zemin ilişkisi, sıvılaşma, yapı-zemin etkileşimi, deprem sonrası temel incelemesi ve zemin güçlendirme yöntemleri üzerine resmî kaynaklara dayalı teknik bilgi merkezi.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: pageUrl, languages: { "tr-TR": pageUrl } },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    locale: "tr_TR"
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription }
};

// Son güncelleme: içerik gerçekten değiştiğinde elle güncellenir (sahte tazeleme yapılmaz).
const LAST_UPDATED = "2026-07-28";

export default function EarthquakeKnowledgePage() {
  const priorityCities = cityPriorityRanking.slice(0, 20);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Bilgi Merkezi", item: `${siteConfig.siteUrl}/knowledge/` },
      { "@type": "ListItem", position: 3, name: "Deprem ve Zemin", item: pageUrl }
    ]
  };

  // FAQPage şeması yalnızca sayfada GÖRÜNEN gerçek SSS ile birebir aynıdır.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: EARTHQUAKE_FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
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
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    dateModified: LAST_UPDATED
  };

  return (
    <>
      <script
        id="deprem-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="deprem-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        id="deprem-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Hero — mevcut sayfa hero dili birebir korunur */}
        <section className="relative overflow-hidden px-5 pb-20 pt-40">
          <div className="absolute inset-0 technical-mesh opacity-80" />
          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-14 bg-gold-300 gold-line" />
                <span className="text-xs font-semibold uppercase tracking-[0.36em] text-gold-200">
                  Deprem ve Zemin
                </span>
              </div>
              <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
                Deprem ve Zemin Bilgi Merkezi
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/64">
                Deprem ve zemin davranışı üzerine teknik bilgi. Bu sayfa tahmin yapmaz, korku üzerinden
                yönlendirme içermez; resmî kaynaklara ve mühendislik pratiğine dayanır.
              </p>
            </div>
          </div>
        </section>

        {/* Teknik rehberler */}
        <section className="px-5 pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2">
              {EARTHQUAKE_GUIDES.map((guide) => (
                <article
                  key={guide.id}
                  id={guide.id}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
                >
                  <h2 className="text-3xl font-semibold text-white">{guide.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-white/62">{guide.summary}</p>
                  {guide.sections.map((section) => (
                    <div key={section.heading} className="mt-6">
                      <h3 className="text-lg font-semibold text-white/88">{section.heading}</h3>
                      {section.body.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)} className="mt-3 text-sm leading-7 text-white/62">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Şehir bazlı deprem ve zemin rehberleri */}
        <section className="px-5 pb-16">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-3xl font-semibold text-white">Şehir bazlı deprem ve zemin rehberleri</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/62">
              Öncelikli 20 il; nüfus, deprem tehlikesi, sanayi yoğunluğu, zemin riski ve saha
              mobilizasyonu birlikte değerlendirilerek belirlenmiştir. Her il sayfasında yerel zemin
              koşulları, uygun yöntemler ve kalite kontrol yaklaşımı açıklanır.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {priorityCities.map((record) => (
                <Link
                  key={record.slug}
                  href={`/sehirler/${record.slug}/`}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/74 transition hover:border-gold-300/40 hover:text-white"
                >
                  {record.city}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-xs leading-6 text-white/40">
              Sınırlama: Bu rehberler bölgesel genel bilgi sunar. Mahalle veya parsel ölçeğinde zemin
              sınıfı, sıvılaşma riski veya yöntem kararı yalnızca sahaya özgü zemin etüdü ve
              projelendirme ile belirlenir.
            </p>
          </div>
        </section>

        {/* SSS — görünür içerik, FAQPage şemasıyla birebir */}
        <section className="px-5 pb-16">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-3xl font-semibold text-white">Sık Sorulan Sorular</h2>
            <div className="mt-6 space-y-6">
              {EARTHQUAKE_FAQ.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-white/88">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/62">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kaynaklar ve şeffaflık */}
        <section className="px-5 pb-24">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-xs uppercase tracking-[0.3em] text-gold-200">Kaynaklar</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">
              Deprem verilerinde yalnızca resmî ve kurumsal kaynaklar esas alınır. Aynı deprem farklı
              kurumlarda farklı büyüklük, derinlik veya merkez üssü ile yayımlanabilir; bu farklar
              gizlenmez, kaynağıyla birlikte gösterilir.
            </p>
            <ul className="mt-5 space-y-2">
              {EARTHQUAKE_SOURCES.map((source) => (
                <li key={source.id} className="text-sm leading-7 text-white/62">
                  <a
                    href={source.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gold-200 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-100"
                  >
                    {source.name}
                  </a>
                  <span className="text-white/40"> — {source.organization} ({source.coverage})</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-6 text-white/40">
              Son güncelleme: {LAST_UPDATED} · Teknik kontrol: YER6 Geoteknik Mühendislik ·
              Bu sayfa deprem tahmini yapmaz. Yapı ve zemin kararları için yetkili mühendislik
              hizmeti alınmalıdır.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/knowledge/"
                className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm text-white/74 transition hover:border-gold-300/40 hover:text-white"
              >
                Bilgi Merkezi'ne dön
              </Link>
              <Link
                href="/contact/"
                className="rounded-full bg-gold-300 px-5 py-2.5 text-sm font-semibold text-obsidian transition hover:bg-gold-200"
              >
                Teknik ön değerlendirme al
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
