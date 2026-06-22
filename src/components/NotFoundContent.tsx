"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export function NotFoundContent() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <div className="mx-auto max-w-lg text-center">
        <div className="text-8xl font-semibold text-gold-300/30">404</div>
        <h1 className="mt-6 text-4xl font-semibold text-white">{t("notFoundTitle")}</h1>
        <p className="mt-4 text-base leading-7 text-white/60">{t("notFoundText")}</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-300 px-6 py-4 text-sm font-semibold text-obsidian shadow-gold transition hover:bg-gold-200"
        >
          <ArrowLeft className="h-4 w-4" /> {t("notFoundBack")}
        </Link>
      </div>
    </main>
  );
}
