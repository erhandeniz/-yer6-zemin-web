"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { KnowledgeArticle } from "@/types/knowledge";
import { useLanguage } from "@/components/LanguageProvider";

export function RelatedArticles({ articles }: { articles: KnowledgeArticle[] }) {
  const { t } = useLanguage();

  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="scroll-mt-28 pt-10 px-5 pb-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold text-white">{t("articleRelatedArticles")}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/knowledge/${article.slug}`}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 transition hover:border-gold-300/30"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-gold-100">{article.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{article.title}</h3>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-100">
                {t("articleReadMore")} <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
