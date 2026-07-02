"use client";

import { ParticleField } from "@/components/ParticleField";
import { useLanguage } from "@/components/LanguageProvider";

export function PageHero({
  eyebrowKey,
  titleKey,
  copyKey
}: {
  eyebrowKey: string;
  titleKey: string;
  copyKey: string;
}) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-40">
      <div className="absolute inset-0 technical-mesh opacity-80" />
      <ParticleField density={260} className="opacity-50" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-14 bg-gold-300 gold-line" />
            <span className="text-xs font-semibold uppercase tracking-[0.36em] text-gold-200">{t(eyebrowKey)}</span>
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">{t(titleKey)}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/64">{t(copyKey)}</p>
        </div>
      </div>
    </section>
  );
}
