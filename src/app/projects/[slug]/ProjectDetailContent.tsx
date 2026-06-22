"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, MapPin } from "lucide-react";
import { projects } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";

export function ProjectDetailContent({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return null;

  return (
    <main>
      <section className="relative min-h-[78vh] overflow-hidden px-5 pb-20 pt-40">
        <img src={project.image} alt={t(`${project.key}_title`)} className="absolute inset-0 h-full w-full object-cover opacity-54" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/78 via-obsidian/58 to-obsidian" />
        <div className="relative mx-auto max-w-7xl">
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/74 backdrop-blur">
            <ArrowLeft className="h-4 w-4" /> {t("projectBack")}
          </Link>
          <div className="mt-10 max-w-4xl">
            <span className="rounded-full bg-gold-300 px-4 py-2 text-sm font-semibold text-obsidian">{project.category}</span>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-tight text-white md:text-7xl">{t(`${project.key}_title`)}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">{t(`${project.key}_summary`)}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {(
            [
              [t("projectLocation"), project.location],
              [t("projectYear"), project.year],
              [t("projectArea"), project.area],
              [t("projectMetric"), project.metric]
            ] as [string, string][]
          ).map(([label, value]) => (
            <div key={label} className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
              <div className="text-xs uppercase tracking-[0.28em] text-gold-200">{label}</div>
              <div className="mt-3 text-2xl font-semibold text-white">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
            <MapPin className="h-8 w-8 text-gold-200" />
            <h2 className="mt-6 text-3xl font-semibold text-white">{t("projectChallenge")}</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">{t(`${project.key}_challenge`)}</p>
          </article>
          <article className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
            <CheckCircle2 className="h-8 w-8 text-gold-200" />
            <h2 className="mt-6 text-3xl font-semibold text-white">{t("projectSolution")}</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">{t(`${project.key}_solution`)}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
