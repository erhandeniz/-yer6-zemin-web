"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { navItems, services } from "@/lib/content";
import { siteConfig } from "@/lib/siteConfig";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const fullAddress = `${siteConfig.address.streetAddress}, ${siteConfig.address.postalLine}`;

  return (
    <footer className="border-t border-white/10 bg-obsidian px-5 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="text-3xl font-semibold tracking-[0.18em] text-white">YER6</div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/62">
            {t("footerTagline")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/72">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Phone className="h-4 w-4 text-gold-200" /> {siteConfig.phone.display}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Mail className="h-4 w-4 text-gold-200" /> {siteConfig.email}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-200">{t("footerPages")}</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/64">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gold-100">
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-200">{t("footerServices")}</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/64">
            {services.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="hover:text-gold-100">
                {t(`${service.key}_title`)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-200">{t("footerHQ")}</h3>
          <p className="mt-5 flex items-start gap-3 text-sm leading-7 text-white/64">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-200" />
            <span>{fullAddress}</span>
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-100">
            {t("footerQuickQuote")} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/42 md:flex-row">
        <p>© 2026 YER6 Zemin Mühendislik. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
