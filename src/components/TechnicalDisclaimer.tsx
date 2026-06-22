"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function TechnicalDisclaimer() {
  const { t } = useLanguage();

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-sm leading-7 text-white/75">
      <p>{t("articleDisclaimer")}</p>
    </div>
  );
}
