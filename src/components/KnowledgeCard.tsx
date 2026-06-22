"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { KnowledgeArticle } from "@/types/knowledge";
import { useLanguage } from "@/components/LanguageProvider";

export function KnowledgeCard({ article }: { article: KnowledgeArticle }) {
  const { t } = useLanguage();

  return (
    <Link href={`/knowledge/${article.slug}`} className="group block rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 transition hover:border-gold-200/30 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-gold-300/50 focus:ring-offset-2 focus:ring-offset-obsidian">
      <article>
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-gold-300/12 px-3 py-1 text-xs uppercase tracking-[0.22em] text-gold-100">{article.category}</span>
          <span className="text-xs text-white/50">{article.readingTime}</span>
        </div>
        <h2 className="mt-6 text-2xl font-semibold text-white">{article.title}</h2>
        <p className="mt-4 text-sm leading-7 text-white/60">{article.excerpt}</p>
        <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-gold-100">
          <span className="inline-flex items-center gap-2">
            {t("knowledgeReadArticle")} <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}
