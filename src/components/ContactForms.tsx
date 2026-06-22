"use client";

import { Send, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { useLanguage } from "@/components/LanguageProvider";

export function ContactForms() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
        <h2 className="text-2xl font-semibold text-white">{t("formTitle")}</h2>
        <div className="mt-6 grid gap-4">
          <input className="rounded-2xl border border-white/10 bg-obsidian/60 px-4 py-4 text-white outline-none focus:border-gold-300/60" placeholder={t("formName")} />
          <input className="rounded-2xl border border-white/10 bg-obsidian/60 px-4 py-4 text-white outline-none focus:border-gold-300/60" placeholder={t("formEmail")} type="email" />
          <input className="rounded-2xl border border-white/10 bg-obsidian/60 px-4 py-4 text-white outline-none focus:border-gold-300/60" placeholder={t("formPhone")} />
          <textarea className="min-h-36 rounded-2xl border border-white/10 bg-obsidian/60 px-4 py-4 text-white outline-none focus:border-gold-300/60" placeholder={t("formNotes")} />
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-300 px-6 py-4 text-sm font-semibold text-obsidian">
            {t("formSend")} <Send className="h-4 w-4" />
          </button>
        </div>
      </form>

      <form className="gsap-reveal rounded-[2rem] border border-gold-300/25 bg-gold-300 p-6 text-obsidian">
        <h2 className="text-2xl font-semibold">{t("quoteTitle")}</h2>
        <div className="mt-6 grid gap-4">
          <select className="rounded-2xl border border-obsidian/10 bg-white/80 px-4 py-4 outline-none">
            <option>{t("quoteSvcJetGrout")}</option>
            <option>{t("quoteSvcDSM")}</option>
            <option>{t("quoteSvcFore")}</option>
            <option>{t("quoteSvcAnkraj")}</option>
            <option>{t("quoteSvcGeo")}</option>
          </select>
          <input className="rounded-2xl border border-obsidian/10 bg-white/80 px-4 py-4 outline-none" placeholder={t("quoteLocation")} />
          <input className="rounded-2xl border border-obsidian/10 bg-white/80 px-4 py-4 outline-none" placeholder={t("quoteSizeArea")} />
          <textarea className="min-h-32 rounded-2xl border border-obsidian/10 bg-white/80 px-4 py-4 outline-none" placeholder={t("quoteSiteConstraints")} />
          <a
            href={`${siteConfig.whatsapp.url}?text=${encodeURIComponent(siteConfig.whatsapp.message)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-obsidian px-6 py-4 text-sm font-semibold text-white"
          >
            {t("quoteWhatsApp")} <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </form>
    </div>
  );
}
