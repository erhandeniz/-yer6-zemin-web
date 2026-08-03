import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalculatorTool } from "@/components/CalculatorTool";
import { CALCULATOR_TOOLS, getCalculatorTool, getCalculatorPaths } from "@/lib/calculators";
import { getServiceBySlug } from "@/lib/content";
import { publishedKnowledgeArticles } from "@/data/knowledge";
import { siteConfig } from "@/lib/siteConfig";

export function generateStaticParams() {
  return getCalculatorPaths();
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getCalculatorTool(slug);
  if (!tool) return {};
  const url = `${siteConfig.siteUrl}/hesaplama/${tool.slug}/`;
  return {
    title: { absolute: tool.seoTitle },
    description: tool.metaDescription,
    // Parametreli URL'ler (?cap=80&boy=18) ayrı sayfa sayılmasın:
    alternates: { canonical: url, languages: { "tr-TR": url } },
    openGraph: {
      title: tool.seoTitle,
      description: tool.metaDescription,
      url,
      type: "website",
      locale: "tr_TR"
    },
    twitter: { card: "summary_large_image", title: tool.seoTitle, description: tool.metaDescription }
  };
}

const LAST_UPDATED = "2026-08-03";

export default async function CalculatorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getCalculatorTool(slug);
  if (!tool) notFound();

  const url = `${siteConfig.siteUrl}/hesaplama/${tool.slug}/`;
  const services = tool.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<ReturnType<typeof getServiceBySlug>> => Boolean(s));
  const articles = tool.relatedArticles
    .map((a) => publishedKnowledgeArticles.find((article) => article.slug === a))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  const otherTools = CALCULATOR_TOOLS.filter((t) => t.slug !== tool.slug);

  // WebApplication şeması — araç gerçekten sayfada çalışıyor ve ücretsiz.
  // Sahte puan/yorum EKLENMEZ.
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#app`,
    name: tool.h1,
    url,
    description: tool.metaDescription,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    browserRequirements: "JavaScript gerektirir",
    inLanguage: "tr-TR",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
    publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
    dateModified: LAST_UPDATED
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Hesaplama Araçları", item: `${siteConfig.siteUrl}/hesaplama/` },
      { "@type": "ListItem", position: 3, name: tool.h1, item: url }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: tool.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return (
    <>
      <script
        id={`calc-app-${tool.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        id={`calc-breadcrumb-${tool.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id={`calc-faq-${tool.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Başlık + doğrudan cevap — araç hemen altında, kaydırmadan erişilir */}
        <section className="relative overflow-hidden px-5 pb-10 pt-40">
          <div className="absolute inset-0 technical-mesh opacity-80" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-14 bg-gold-300 gold-line" />
              <Link
                href="/hesaplama/"
                className="text-xs font-semibold uppercase tracking-[0.36em] text-gold-200 hover:text-gold-100"
              >
                Hesaplama Araçları
              </Link>
            </div>
            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              {tool.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/64">{tool.directAnswer}</p>
          </div>
        </section>

        {/* ARAÇ — sayfanın en üstünde, fold içinde */}
        <section className="px-5 pb-14">
          <div className="mx-auto max-w-7xl">
            <CalculatorTool tool={tool} />
          </div>
        </section>

        {/* Hesaplama mantığı */}
        <section className="px-5 pb-14">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <h2 className="text-2xl font-semibold text-white">Hesaplama nasıl yapılıyor?</h2>
              <ul className="mt-5 space-y-3">
                {tool.methodology.map((step) => (
                  <li key={step} className="flex gap-3 text-sm leading-7 text-white/62">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-300" />
                    {step}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <h2 className="text-2xl font-semibold text-white">Maliyeti değiştiren faktörler</h2>
              <ul className="mt-5 space-y-3">
                {tool.costFactors.map((factor) => (
                  <li key={factor} className="flex gap-3 text-sm leading-7 text-white/62">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-300" />
                    {factor}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* Aracın kapsamadıkları — dürüstlük bölümü */}
        <section className="px-5 pb-14">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-semibold text-white">Bu araç neyi hesaplamaz?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/55">
              Aşağıdaki konular mühendislik hesabı ve saha verisi gerektirir; ön değerlendirme
              aracının kapsamı dışındadır.
            </p>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {tool.limitations.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-white/62">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-white/25" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SSS */}
        <section className="px-5 pb-14">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-3xl font-semibold text-white">Sık Sorulan Sorular</h2>
            <div className="mt-6 space-y-6">
              {tool.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-white/88">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/62">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* İç link kümesi: hizmet → teknik bilgi → diğer araçlar → teklif */}
        <section className="px-5 pb-24">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h2 className="text-xs uppercase tracking-[0.3em] text-gold-200">İlgili Hizmetler</h2>
                <div className="mt-4 flex flex-col gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/`}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      → {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xs uppercase tracking-[0.3em] text-gold-200">Teknik Rehberler</h2>
                <div className="mt-4 flex flex-col gap-2">
                  {articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/knowledge/${article.slug}/`}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      → {article.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xs uppercase tracking-[0.3em] text-gold-200">Diğer Araçlar</h2>
                <div className="mt-4 flex flex-col gap-2">
                  {otherTools.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/hesaplama/${other.slug}/`}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      → {other.h1}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-6">
              <Link
                href="/contact/"
                className="rounded-full bg-gold-300 px-5 py-2.5 text-sm font-semibold text-obsidian transition hover:bg-gold-200"
              >
                Projeniz için teklif alın
              </Link>
              <span className="text-xs text-white/40">
                Son güncelleme: {LAST_UPDATED} · Fiyat kataloğu ve döviz kuru otomatik güncellenir
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
