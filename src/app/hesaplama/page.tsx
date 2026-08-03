import type { Metadata } from "next";
import Link from "next/link";
import { Calculator } from "lucide-react";
import { CALCULATOR_TOOLS } from "@/lib/calculators";
import { siteConfig } from "@/lib/siteConfig";

const pageUrl = `${siteConfig.siteUrl}/hesaplama/`;
const pageTitle = "Geoteknik Hesaplama Araçları | Jet Grout, Fore Kazık, DSM ve Ankraj Metrajı | YER6";
const pageDescription =
  "Jet grout, fore kazık, DSM, ankraj ve mini kazık için ücretsiz metraj ve ön maliyet hesaplama araçları. Çimento, beton, donatı ve süre hesabını saniyeler içinde yapın.";

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

const LAST_UPDATED = "2026-08-03";

export default function CalculatorHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Hesaplama Araçları", item: pageUrl }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#tools`,
    name: "YER6 Geoteknik Hesaplama Araçları",
    itemListElement: CALCULATOR_TOOLS.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.h1,
      url: `${siteConfig.siteUrl}/hesaplama/${tool.slug}/`
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
        id="hesaplama-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="hesaplama-collection"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        id="hesaplama-itemlist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main>
        <section className="relative overflow-hidden px-5 pb-16 pt-40">
          <div className="absolute inset-0 technical-mesh opacity-80" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-14 bg-gold-300 gold-line" />
              <span className="text-xs font-semibold uppercase tracking-[0.36em] text-gold-200">
                Hesaplama Araçları
              </span>
            </div>
            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              YER6 Geoteknik Hesap Merkezi
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/64">
              Jet grout, fore kazık, DSM, ankraj ve mini kazık uygulamalarında yaklaşık metraj ve ön
              maliyet hesabı yapın. Araçlar; güncel malzeme fiyat kataloğu ve canlı döviz kuru ile
              çalışır, sonucu PDF olarak indirmenize ve paylaşmanıza izin verir. Tüm araçlar ücretsizdir.
            </p>
          </div>
        </section>

        <section className="px-5 pb-16">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CALCULATOR_TOOLS.map((tool) => (
              <Link
                key={tool.slug}
                href={`/hesaplama/${tool.slug}/`}
                className="group gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:border-gold-300/40"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-gold-300/15 text-gold-200">
                  <Calculator className="size-5" />
                </span>
                <h2 className="mt-5 text-xl font-semibold text-white group-hover:text-gold-100">
                  {tool.h1}
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/58">
                  {tool.metaDescription}
                </p>
                <span className="mt-5 inline-block text-sm font-semibold text-gold-200">
                  Hesaplamayı aç →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="px-5 pb-24">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-semibold text-white">Bu araçlar nasıl kullanılmalı?</h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-white/85">Ne işe yarar</h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-white/60">
                  <li>• Teklif almadan önce büyüklük mertebesini görmek</li>
                  <li>• Farklı senaryoları (çap, boy, adet) hızlıca karşılaştırmak</li>
                  <li>• Malzeme ve süre planlaması için ön veri üretmek</li>
                  <li>• Gelen teklifleri aynı kapsamda karşılaştırmak</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white/85">Ne işe yaramaz</h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-white/60">
                  <li>• Zemin etüdünün yerini tutmaz</li>
                  <li>• Yöntem seçimi kararı vermez</li>
                  <li>• Kesin sözleşme fiyatı üretmez</li>
                  <li>• Statik veya stabilite hesabı yapmaz</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-xs leading-6 text-white/40">
              Son güncelleme: {LAST_UPDATED} · Fiyat kataloğu ve döviz kuru otomatik güncellenir ·
              Sonuçlar KDV hariçtir ve yaklaşık ön değerlendirmedir.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact/"
                className="rounded-full bg-gold-300 px-5 py-2.5 text-sm font-semibold text-obsidian transition hover:bg-gold-200"
              >
                Teknik ön değerlendirme al
              </Link>
              <Link
                href="/knowledge/"
                className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm text-white/74 transition hover:text-white"
              >
                Bilgi Merkezi
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
