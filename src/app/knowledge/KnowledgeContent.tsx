"use client";

import { PageHero } from "@/components/PageHero";
import { KnowledgeFilter } from "@/components/KnowledgeFilter";
import { knowledgeCategories, publishedKnowledgeArticles } from "@/data/knowledge";

export function KnowledgeContent() {
  return (
    <main>
      <PageHero
        eyebrowKey="knowledgeEyebrow"
        titleKey="knowledgeTitle"
        copyKey="knowledgeCopy"
      />
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <KnowledgeFilter categories={knowledgeCategories} articles={publishedKnowledgeArticles} />
        </div>
      </section>
    </main>
  );
}
