"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";

type Service = (typeof services)[number];

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = service.icon;
  const { t } = useLanguage();

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block gsap-reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-500 hover:-translate-y-2 hover:border-gold-300/40 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-gold-300/50 focus:ring-offset-2 focus:ring-offset-obsidian"
      style={{ transitionDelay: `${index * 35}ms` }}
    >
      <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gold-300/10 transition group-hover:bg-gold-300/18" />
      <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-gold-300/25 bg-gold-300/10 text-gold-100">
        <Icon className="h-6 w-6" />
      </div>
      <div className="relative mt-7">
        <h3 className="text-2xl font-semibold text-white">{t(`${service.key}_title`)}</h3>
        <p className="mt-4 text-sm leading-7 text-white/62">{t(`${service.key}_summary`)}</p>
      </div>
      <ul className="relative mt-6 grid gap-2 text-sm text-white/52">
        {[1, 2, 3].map((n) => (
          <li key={n} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
            {t(`${service.key}_spec${n}`)}
          </li>
        ))}
      </ul>
      <div className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-100">
        {t("serviceViewDetails")} <ArrowUpRight className="h-4 w-4" />
      </div>
    </Link>
  );
}
