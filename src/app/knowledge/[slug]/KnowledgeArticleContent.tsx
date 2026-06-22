"use client";

import Link from "next/link";
import type { KnowledgeArticle } from "@/types/knowledge";
import { ArticleSection } from "@/components/ArticleSection";
import { ArticleFaq } from "@/components/ArticleFaq";
import { RelatedArticles } from "@/components/RelatedArticles";
import { TechnicalDisclaimer } from "@/components/TechnicalDisclaimer";
import { ShareLinks } from "@/components/ShareLinks";
import { publishedKnowledgeArticles } from "@/data/knowledge";
import { useLanguage } from "@/components/LanguageProvider";

export function KnowledgeArticleContent({ article }: { article: KnowledgeArticle }) {
  const { t } = useLanguage();
  const related = publishedKnowledgeArticles.filter((other) => article.relatedSlugs.includes(other.slug));
  const canonical = `https://www.yer6zemin.com.tr/knowledge/${article.slug}`;

  return (
    <main>
      <article className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-200">{article.heroLabel}</p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight text-white">{article.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span>{article.readingTime} {t("articleReadTime")}</span>
              <span>{t("articlePublished")} {article.publishedAt}</span>
              <span>{t("articleUpdated")} {article.updatedAt}</span>
            </div>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{article.introduction}</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-16">
              {article.sections.map((section) => (
                <ArticleSection key={section.id} section={section} />
              ))}
              <ArticleFaq faq={article.faq} />
              <TechnicalDisclaimer />
              <ShareLinks url={canonical} title={article.title} />
            </div>
            <aside className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-sm text-white/75">
              <div className="sticky top-24 space-y-4">
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
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-200">{t("articleRelated")}</p>
                  <div className="mt-4 space-y-3">
                    {related.map((item) => (
                      <Link key={item.slug} href={`/knowledge/${item.slug}`} className="block text-white/70 hover:text-white">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
      <RelatedArticles articles={related} />
    </main>
  );
}
