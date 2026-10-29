"use client";

import { useState } from "react";
import Link from "next/link";
import type { KnowledgeArticle } from "@/types/knowledge";
import { ArticleSection } from "@/components/ArticleSection";
import { parseMarkdownLinks } from "@/components/LinkParser";
import { ArticleFaq } from "@/components/ArticleFaq";
import { RelatedArticles } from "@/components/RelatedArticles";
import { TechnicalDisclaimer } from "@/components/TechnicalDisclaimer";
import { ShareLinks } from "@/components/ShareLinks";
import { cityPages } from "@/lib/cityContent";
import { siteConfig } from "@/lib/siteConfig";
import { publishedKnowledgeArticles } from "@/data/knowledge";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";
import { CalculatorTool } from "@/components/CalculatorTool";
import { getToolForArticle, getCalculatorTool } from "@/lib/calculators";
import { GeotechAiEngineer } from "@/components/GeotechAiEngineer";
import { EncyclopediaHub } from "@/components/EncyclopediaHub";

const METHOD_TABS = [
  { slug: "jet-grout-maliyet-hesaplama", name: "Jet Grout", tag: "Enjeksiyon", icon: "⚡" },
  { slug: "fore-kazik-maliyet-hesaplama", name: "Fore Kazık", tag: "Derin Temel", icon: "🏗️" },
  { slug: "dsm-maliyet-hesaplama", name: "DSM", tag: "Karıştırma", icon: "🌀" },
  { slug: "ankraj-maliyet-hesaplama", name: "Öngermeli Ankraj", tag: "İksa & Kazı", icon: "🔩" },
  { slug: "palplans-maliyet-hesaplama", name: "Palplanş", tag: "Çelik İksa", icon: "🧱" }
];

export function KnowledgeArticleContent({ article }: { article: KnowledgeArticle }) {
  const { locale, t } = useLanguage();
  const related = publishedKnowledgeArticles.filter((other) => article.relatedSlugs.includes(other.slug));
  const canonical = `${siteConfig.siteUrl}/knowledge/${article.slug}/`;
  const relatedCities = cityPages.filter((page) => page.articleSlugs.includes(article.slug)).slice(0, 5);
  const readingMinutes = article.readingTime.match(/\d+/)?.[0] ?? article.readingTime;
  const initialTool = getToolForArticle(article.slug);
  const [activeToolSlug, setActiveToolSlug] = useState<string>(
    initialTool?.slug || "jet-grout-maliyet-hesaplama"
  );
  const currentTool = getCalculatorTool(activeToolSlug) || initialTool;

  return (
    <main>
      <article className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Başlık ve Üst Bilgi Kartı (Sade, Hızlı ve Modern) */}
          <div className="mb-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:mb-8 sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold-200 sm:text-xs">{article.heroLabel}</p>
            <h1 className="mt-2 text-2xl font-semibold leading-snug text-white sm:mt-3 sm:text-5xl sm:leading-tight">{article.title}</h1>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3 text-xs text-white/50 sm:mt-4 sm:pt-4 sm:text-sm">
              <div className="flex flex-wrap items-center gap-2.5">
                <span>{t("articleAuthor")}</span>
                <span>•</span>
                <span>{t("articleReadTime").replace("{minutes}", readingMinutes)}</span>
              </div>
              <Link
                href="/services/zemin-iyilestirme/"
                className="font-semibold text-gold-200 hover:text-gold-100 transition"
              >
                Zemin İyileştirme Hizmeti →
              </Link>
            </div>
            {article.sections && article.sections.length > 0 && (
              <details className="mt-3 rounded-xl border border-white/10 bg-black/30 px-4 py-2.5 text-xs text-white/80 lg:hidden">
                <summary className="cursor-pointer font-semibold text-gold-200 select-none">
                  📑 {t("articleTOC")} ({article.sections.length} Bölüm — Hızlı Atlama)
                </summary>
                <ul className="mt-3 space-y-2 border-t border-white/10 pt-2.5">
                  {article.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="block py-0.5 text-white/75 hover:text-gold-200">
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-14">
              {/* 1. YER6 AI Geoteknik Mühendisi (Doğrudan Açık Canlı Sohbet) */}
              <GeotechAiEngineer />

              {/* 2. İnteraktif Saha Aracı ve Narin Çoklu Metot Hesaplayıcı */}
              {currentTool && (
                <section className="rounded-[2rem] border border-gold-300/30 bg-gold-300/[0.04] p-6 sm:p-8">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
                        İnteraktif Saha Aracı
                      </span>
                      <h2 className="mt-1 text-2xl font-bold text-white">
                        2026 Metraj ve Ön Maliyet Hesaplayıcı
                      </h2>
                      <p className="mt-1 text-sm text-white/70">
                        Projenizde hangi yöntemi hesaplamak istiyorsanız butondan seçin; çap, boy ve adet verilerini girerek anlık maliyeti hesaplayın.
                      </p>
                    </div>
                    <Link
                      href={`/hesaplama/${currentTool.slug}/`}
                      className="inline-flex items-center gap-2 rounded-xl border border-gold-300/40 bg-gold-300/10 px-4 py-2 text-xs font-semibold text-gold-200 transition hover:bg-gold-300/20"
                    >
                      Tam Ekran Sayfası →
                    </Link>
                  </div>

                  {/* Narin Metot Seçim Butonları */}
                  <div className="mb-6 flex flex-wrap items-center gap-2">
                    <span className="mr-1 text-xs font-medium text-white/50">Hesaplama Metodu:</span>
                    {METHOD_TABS.map((tab) => {
                      const isActive = activeToolSlug === tab.slug;
                      return (
                        <button
                          key={tab.slug}
                          type="button"
                          onClick={() => setActiveToolSlug(tab.slug)}
                          className={`group relative flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "border border-gold-300 bg-gold-400/20 text-gold-100 shadow-[0_0_15px_rgba(226,181,76,0.3)] ring-1 ring-gold-300/40"
                              : "border border-white/10 bg-white/[0.03] text-white/70 hover:border-gold-300/30 hover:bg-white/[0.06] hover:text-white"
                          }`}
                        >
                          <span>{tab.icon}</span>
                          <span>{tab.name}</span>
                          <span
                            className={`rounded px-1.5 py-0.5 text-[10px] font-normal ${
                              isActive
                                ? "bg-gold-300/30 text-gold-200"
                                : "bg-white/5 text-white/40 group-hover:text-white/60"
                            }`}
                          >
                            {tab.tag}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Seçilen Metoda Göre Canlı Hesaplayıcı */}
                  <CalculatorTool key={currentTool.slug} tool={currentTool} />
                </section>
              )}

              {/* 3. Geoteknik Mühendislik Çerçevesi ve Kapsamlı Giriş */}
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold-300" />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
                    Geoteknik Mühendislik Çerçevesi
                  </span>
                </div>
                <div className="mt-4 text-base leading-8 text-white/80 sm:text-lg">
                  {parseMarkdownLinks(article.introduction)}
                </div>
              </div>

              {/* 4. İnteraktif Geoteknik Veri Merkezi & Ansiklopedi Fihristi */}
              <EncyclopediaHub sections={article.sections} />

              {/* 5. Tam Metin Bölümleri (Googlebot için eksiksiz indekslenebilir statik içerik) */}
              {article.sections.map((section) => (
                <ArticleSection key={section.id} section={section} />
              ))}
              <ArticleFaq faq={article.faq} />
              <TechnicalDisclaimer />
              <ShareLinks url={canonical} title={article.title} />
            </div>
            <aside className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-sm text-white/75">
              <div className="sticky top-24 space-y-4">
                {article.sections && article.sections.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gold-200">{t("articleTOC")}</p>
                    <ul className="mt-4 space-y-3">
                      {article.sections.map((section) => (
                        <li key={section.id}>
                          <a href={`#${section.id}`} className="text-white/70 hover:text-white">
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="rounded-[2rem] border border-gold-300/30 bg-gold-300/[0.06] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-200">Geoteknik Otorite Merkezleri</p>
                  <div className="mt-4 space-y-2.5">
                    <Link href="/services/zemin-iyilestirme/" className="block text-xs font-semibold text-gold-200 hover:text-gold-100 transition">
                      → Zemin İyileştirme Hizmeti & Uygulamaları
                    </Link>
                    <Link href="/services/jet-grout/" className="block text-xs text-white/70 hover:text-white transition">
                      → Jet Grout Zemin İyileştirme
                    </Link>
                    <Link href="/services/fore-kazik/" className="block text-xs text-white/70 hover:text-white transition">
                      → Fore Kazık Sistemleri
                    </Link>
                    <Link href="/services/dsm/" className="block text-xs text-white/70 hover:text-white transition">
                      → Deep Soil Mixing (DSM)
                    </Link>
                    <Link href="/services/ankraj/" className="block text-xs text-white/70 hover:text-white transition">
                      → Öngermeli Ankraj & İksa
                    </Link>
                    <Link href="/services/mini-kazik/" className="block text-xs text-white/70 hover:text-white transition">
                      → Mini Kazık Temel Güçlendirme
                    </Link>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-200">{t("articleRelated")}</p>
                  <div className="mt-4 space-y-3">
                    {related.map((item) => (
                      <Link key={item.slug} href={`/knowledge/${item.slug}/`} className="block text-white/70 hover:text-white">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                {relatedCities.length > 0 ? (
                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold-200">Şehir Uygulamaları</p>
                    <div className="mt-4 space-y-3">
                      {relatedCities.map((page) => (
                        <Link key={page.slug} href={`/sehirler/${page.slug}/`} className="block text-white/70 hover:text-white">
                          {page.city} zemin güçlendirme
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </aside>
          </div>
        </div>
      </article>
      <RelatedArticles articles={related} />
    </main>
  );
}
