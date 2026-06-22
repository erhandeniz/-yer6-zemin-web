"use client";

import { useMemo, useState } from "react";
import { KnowledgeCard } from "@/components/KnowledgeCard";
import type { KnowledgeArticle } from "@/types/knowledge";
import { useLanguage } from "@/components/LanguageProvider";

const ALL_KEY = "__all__";

export function KnowledgeFilter({
  categories,
  articles
}: {
  categories: readonly string[];
  articles: KnowledgeArticle[];
}) {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_KEY);

  const allCategories = useMemo(() => [ALL_KEY, ...categories], [categories]);

  const filteredArticles = useMemo(
    () =>
      selectedCategory === ALL_KEY
        ? articles
        : articles.filter((article) => article.category === selectedCategory),
    [articles, selectedCategory]
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-4xl font-semibold text-white">{t("knowledgeTitle")}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">{t("knowledgeCopy")}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {allCategories.map((category) => {
            const isActive = category === selectedCategory;
            const label = category === ALL_KEY ? t("knowledgeFilterAll") : category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
                  isActive
                    ? "bg-gold-300 text-obsidian shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
                    : "border border-white/10 bg-white/5 text-white/70 hover:border-gold-200/40 hover:text-white"
                }`}
                aria-pressed={isActive}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {filteredArticles.map((article) => (
          <KnowledgeCard key={article.slug} article={article} />
        ))}
      </div>
    </>
  );
}
