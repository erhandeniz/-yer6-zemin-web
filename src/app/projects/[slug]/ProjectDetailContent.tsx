"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, MapPin, Wrench } from "lucide-react";
import { projects } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/siteConfig";

export function ProjectDetailContent({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return null;

  const technicalInfo = "technicalInfo" in project ? (project.technicalInfo as { label: string; value: string }[]) : [];
  const usedEquipment = "usedEquipment" in project ? (project.usedEquipment as string[]) : [];
  const soilProblem = "soilProblem" in project ? (project.soilProblem as string) : "";
  const solutionMethod = "solutionMethod" in project ? (project.solutionMethod as string) : "";
  const result = "result" in project ? (project.result as string) : "";

  return (
    <main>
      {/* Hero bölümü */}
      <section className="relative min-h-[78vh] overflow-hidden px-5 pb-20 pt-40">
        <img src={project.image} alt={t(`${project.key}_title`)} className="absolute inset-0 h-full w-full object-cover opacity-54" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/78 via-obsidian/58 to-obsidian" />
        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/74 backdrop-blur"
          >
            <ArrowLeft className="h-4 w-4" /> {t("projectBack")}
          </Link>
          <div className="mt-10 max-w-4xl">
            <span className="rounded-full bg-gold-300 px-4 py-2 text-sm font-semibold text-obsidian">{project.category}</span>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-tight text-white md:text-7xl">
              {t(`${project.key}_title`)}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">{t(`${project.key}_summary`)}</p>
          </div>
        </div>
      </section>

      {/* Temel metrikler */}
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

      {/* Zemin sorunu ve çözüm */}
      <section className="px-5 pb-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
            <MapPin className="h-8 w-8 text-gold-200" />
            <h2 className="mt-6 text-3xl font-semibold text-white">{t("projectChallenge")}</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">{t(`${project.key}_challenge`)}</p>
            {soilProblem && (
              <p className="mt-4 text-sm leading-7 text-white/55 border-t border-white/10 pt-4">{soilProblem}</p>
            )}
          </article>
          <article className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
            <CheckCircle2 className="h-8 w-8 text-gold-200" />
            <h2 className="mt-6 text-3xl font-semibold text-white">{t("projectSolution")}</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">{t(`${project.key}_solution`)}</p>
            {solutionMethod && (
              <p className="mt-4 text-sm leading-7 text-white/55 border-t border-white/10 pt-4">{solutionMethod}</p>
            )}
          </article>
        </div>
      </section>

      {/* Teknik Bilgiler */}
      {technicalInfo.length > 0 && (
        <section className="px-5 pb-12">
          <div className="mx-auto max-w-7xl">
            <div className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <h2 className="text-2xl font-semibold text-white">Teknik Bilgiler</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {technicalInfo.map((info, i) => (
                  <div key={i} className="rounded-2xl border border-white/8 bg-white/[0.04] px-5 py-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-gold-200">{info.label}</div>
                    <div className="mt-2 text-base font-semibold text-white">{info.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Kullanılan Ekipman */}
      {usedEquipment.length > 0 && (
        <section className="px-5 pb-12">
          <div className="mx-auto max-w-7xl">
            <div className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <div className="flex items-center gap-3">
                <Wrench className="h-6 w-6 text-gold-200" />
                <h2 className="text-2xl font-semibold text-white">Kullanılan Ekipman</h2>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {usedEquipment.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-gold-200/70" />
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Proje Sonucu */}
      {result && (
        <section className="px-5 pb-12">
          <div className="mx-auto max-w-7xl">
            <div className="gsap-reveal rounded-[2rem] border border-gold-300/20 bg-gold-300/[0.06] p-8">
              <h2 className="text-2xl font-semibold text-white">Proje Sonucu</h2>
              <p className="mt-4 text-base leading-7 text-white/70">{result}</p>
            </div>
          </div>
        </section>
      )}

      {/* Etiketler ve CTA */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
                {tag}
              </span>
            ))}
          </div>
          <div className="rounded-[2rem] border border-gold-300/30 bg-gold-300 p-8 text-obsidian">
            <h2 className="text-2xl font-semibold">Benzer bir proje için teklif alın</h2>
            <p className="mt-3 text-sm leading-7 font-medium">
              Zemin koşullarınızı ve proje detaylarını paylaşın; YER6 mühendisleri size özel teknik değerlendirme ve yaklaşık metraj hazırlasın.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-2xl bg-obsidian px-6 py-3 text-sm font-semibold text-white transition hover:bg-graphite"
              >
                İletişime Geç
              </Link>
              <a
                href={`${siteConfig.whatsapp.url}?text=${encodeURIComponent("Merhaba YER6, proje hakkında bilgi almak istiyorum.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-obsidian/20 bg-obsidian/8 px-6 py-3 text-sm font-semibold transition hover:bg-obsidian/15"
              >
                WhatsApp ile Teklif
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
