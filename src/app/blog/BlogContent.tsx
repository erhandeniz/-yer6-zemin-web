"use client";

import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { blogArticles } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";

export function BlogContent() {
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        eyebrowKey="blogEyebrow"
        titleKey="blogTitle"
        copyKey="blogCopy"
      />
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t("blogSectionEyebrow")}
            title={
              <>
                {t("blogSectionTitle").split(" ").slice(0, 2).join(" ")}{" "}
                <span className="gold-text">{t("blogSectionTitle").split(" ").slice(2).join(" ")}</span>
              </>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogArticles.map((article) => (
              <article id={article.slug} key={article.slug} className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-gold-300/12 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-100">
                    {t(`${article.key}_cat`)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-white/48">
                    <Clock3 className="h-3.5 w-3.5" /> {article.read}
                  </span>
                </div>
                <h2 className="mt-8 text-2xl font-semibold leading-tight text-white">{t(`${article.key}_title`)}</h2>
                <p className="mt-4 text-sm leading-7 text-white/58">{t(`${article.key}_excerpt`)}</p>
                <Link href={`/knowledge/${article.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-100">
                  {t("blogReadMore")} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 pb-24">
        <div className="mx-auto rounded-[2rem] border border-gold-300/20 bg-gold-300 p-8 text-obsidian max-w-7xl">
          <h2 className="text-4xl font-semibold">{t("blogCMSTitle")}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 font-medium">{t("blogCMSText")}</p>
        </div>
      </section>
    </main>
  );
}
