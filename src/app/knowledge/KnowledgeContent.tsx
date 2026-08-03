"use client";

import Link from "next/link";
import { Calculator } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { KnowledgeFilter } from "@/components/KnowledgeFilter";
import { knowledgeCategories, publishedKnowledgeArticles } from "@/data/knowledge";
import { CALCULATOR_TOOLS } from "@/lib/calculators";

export function KnowledgeContent() {
  return (
    <main>
      <PageHero
        eyebrowKey="knowledgeEyebrow"
        titleKey="knowledgeTitle"
        copyKey="knowledgeCopy"
      />

      {/* Hesaplama araçları — makalelerin ÜSTÜNDE, mevcut kart tasarım diliyle.
          Blog ve Bilgi Merkezi ayrı kalır; bu yalnızca araçlara erişim sağlar. */}
      <section className="px-5 pt-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-gold-200">Hesaplama Araçları</h2>
              <p className="mt-3 max-w-2xl text-lg font-semibold text-white">
                Metraj ve ön maliyeti saniyeler içinde hesaplayın
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/58">
                Jet grout, fore kazık, DSM, ankraj ve mini kazık için ücretsiz mühendislik araçları.
                Güncel fiyat kataloğu ve canlı döviz kuruyla çalışır; sonucu PDF olarak indirebilirsiniz.
              </p>
            </div>
            <Link
              href="/hesaplama/"
              className="rounded-full bg-gold-300 px-5 py-2.5 text-sm font-semibold text-obsidian transition hover:bg-gold-200"
            >
              Tüm araçlar
            </Link>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CALCULATOR_TOOLS.map((tool) => (
              <Link
                key={tool.slug}
                href={`/hesaplama/${tool.slug}/`}
                className="group flex items-start gap-3 rounded-xl border border-white/10 bg-obsidian/50 p-5 transition hover:border-gold-300/40"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gold-300/15 text-gold-200">
                  <Calculator className="size-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white group-hover:text-gold-100">
                    {tool.h1}
                  </span>
                  <span className="mt-1 block text-xs text-gold-200/80">Hesaplamayı aç →</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <KnowledgeFilter categories={knowledgeCategories} articles={publishedKnowledgeArticles} />
        </div>
      </section>
    </main>
  );
}
