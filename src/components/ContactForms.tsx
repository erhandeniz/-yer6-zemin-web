"use client";

import type { FormEvent } from "react";
import { Send, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { useLanguage } from "@/components/LanguageProvider";

export function ContactForms() {
  const { t } = useLanguage();

  const openWhatsApp = (message: string) => {
    window.open(
      `${siteConfig.whatsapp.url}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const message = [
      t("formWhatsAppIntro"),
      `${t("formName")}: ${String(data.get("name") ?? "").trim()}`,
      email ? `${t("formEmail")}: ${email}` : "",
      `${t("formPhone")}: ${String(data.get("phone") ?? "").trim()}`,
      `${t("formNotes")}: ${String(data.get("notes") ?? "").trim()}`
    ]
      .filter(Boolean)
      .join("\n");

    openWhatsApp(message);
  };

  const handleQuoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      t("quoteWhatsAppIntro"),
      `${t("quoteService")}: ${String(data.get("service") ?? "").trim()}`,
      `${t("quoteLocation")}: ${String(data.get("location") ?? "").trim()}`,
      `${t("quoteSizeArea")}: ${String(data.get("size") ?? "").trim()}`,
      `${t("quoteSiteConstraints")}: ${String(data.get("constraints") ?? "").trim()}`
    ].join("\n");

    openWhatsApp(message);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form
        className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.045] p-6"
        onSubmit={handleContactSubmit}
      >
        <h2 className="text-2xl font-semibold text-white">{t("formTitle")}</h2>
        <div className="mt-6 grid gap-4">
          <input
            aria-label={t("formName")}
            autoComplete="name"
            className="rounded-2xl border border-white/10 bg-obsidian/60 px-4 py-4 text-white outline-none focus:border-gold-300/60"
            name="name"
            placeholder={t("formName")}
            required
          />
          <input
            aria-label={t("formEmail")}
            autoComplete="email"
            className="rounded-2xl border border-white/10 bg-obsidian/60 px-4 py-4 text-white outline-none focus:border-gold-300/60"
            name="email"
            placeholder={t("formEmail")}
            type="email"
          />
          <input
            aria-label={t("formPhone")}
            autoComplete="tel"
            className="rounded-2xl border border-white/10 bg-obsidian/60 px-4 py-4 text-white outline-none focus:border-gold-300/60"
            name="phone"
            placeholder={t("formPhone")}
            required
            type="tel"
          />
          <textarea
            aria-label={t("formNotes")}
            className="min-h-36 rounded-2xl border border-white/10 bg-obsidian/60 px-4 py-4 text-white outline-none focus:border-gold-300/60"
            name="notes"
            placeholder={t("formNotes")}
            required
          />
          <button
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-300 px-6 py-4 text-sm font-semibold text-obsidian"
            type="submit"
          >
            {t("formSend")} <Send className="h-4 w-4" />
          </button>
        </div>
      </form>

      <form
        className="gsap-reveal rounded-[2rem] border border-gold-300/25 bg-gold-300 p-6 text-obsidian"
        onSubmit={handleQuoteSubmit}
      >
        <h2 className="text-2xl font-semibold">{t("quoteTitle")}</h2>
        <div className="mt-6 grid gap-4">
          <select
            aria-label={t("quoteService")}
            className="rounded-2xl border border-obsidian/10 bg-white/80 px-4 py-4 outline-none"
            name="service"
          >
            <option>{t("quoteSvcJetGrout")}</option>
            <option>{t("quoteSvcDSM")}</option>
            <option>{t("quoteSvcFore")}</option>
            <option>{t("quoteSvcAnkraj")}</option>
            <option>{t("quoteSvcGeo")}</option>
          </select>
          <input
            aria-label={t("quoteLocation")}
            className="rounded-2xl border border-obsidian/10 bg-white/80 px-4 py-4 outline-none"
            name="location"
            placeholder={t("quoteLocation")}
            required
          />
          <input
            aria-label={t("quoteSizeArea")}
            className="rounded-2xl border border-obsidian/10 bg-white/80 px-4 py-4 outline-none"
            name="size"
            placeholder={t("quoteSizeArea")}
            required
          />
          <textarea
            aria-label={t("quoteSiteConstraints")}
            className="min-h-32 rounded-2xl border border-obsidian/10 bg-white/80 px-4 py-4 outline-none"
            name="constraints"
            placeholder={t("quoteSiteConstraints")}
            required
          />
          <button
            className="inline-flex items-center justify-center gap-2 rounded-full bg-obsidian px-6 py-4 text-sm font-semibold text-white"
            type="submit"
          >
            {t("quoteWhatsApp")} <MessageCircle className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
