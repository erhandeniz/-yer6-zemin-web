"use client";

import type { KnowledgeFaq } from "@/types/knowledge";
import { useLanguage } from "@/components/LanguageProvider";

export function ArticleFaq({ faq }: { faq: KnowledgeFaq[] }) {
  const { t } = useLanguage();

  return (
    <section className="scroll-mt-28 pt-10">
      <h2 className="text-3xl font-semibold text-white">{t("articleFAQ")}</h2>
      <div className="mt-6 space-y-6">
        {faq.map((item) => (
          <div key={item.question} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-lg font-semibold text-white">{item.question}</h3>
            <p className="mt-3 text-sm leading-7 text-white/75">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
