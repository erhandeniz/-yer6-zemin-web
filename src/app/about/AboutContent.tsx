"use client";

import { Award, Clock3, Eye, Target } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { certificateKeys, team } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";

const timelineKeys: Array<[string, string]> = [
  ["2016", "aboutTimeline2016"],
  ["2019", "aboutTimeline2019"],
  ["2023", "aboutTimeline2023"],
  ["2026", "aboutTimeline2026"]
];

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        eyebrowKey="aboutEyebrow"
        titleKey="aboutTitle"
        copyKey="aboutCopy"
      />

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow={t("aboutHistoryEyebrow")}
            title={
              <>
                {t("aboutHistoryTitle").split(" ").slice(0, 2).join(" ")}{" "}
                <span className="gold-text">{t("aboutHistoryTitle").split(" ").slice(2, 5).join(" ")}</span>
                {" "}{t("aboutHistoryTitle").split(" ").slice(5).join(" ")}
              </>
            }
            copy={t("aboutHistoryCopy")}
          />
          <div className="grid gap-5">
            {timelineKeys.map(([year, key]) => (
              <div key={year} className="gsap-reveal grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 md:grid-cols-[120px_1fr]">
                <div className="text-3xl font-semibold text-gold-100">{year}</div>
                <p className="text-sm leading-7 text-white/62">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.025] px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <article className="gsap-reveal rounded-[2rem] border border-white/10 bg-obsidian/70 p-8">
            <Eye className="h-9 w-9 text-gold-200" />
            <h2 className="mt-7 text-3xl font-semibold text-white">{t("aboutVisionTitle")}</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">{t("aboutVisionText")}</p>
          </article>
          <article className="gsap-reveal rounded-[2rem] border border-white/10 bg-obsidian/70 p-8">
            <Target className="h-9 w-9 text-gold-200" />
            <h2 className="mt-7 text-3xl font-semibold text-white">{t("aboutMissionTitle")}</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">{t("aboutMissionText")}</p>
          </article>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t("aboutTeamEyebrow")}
            title={
              <>
                {t("aboutTeamTitle").split(" ").slice(0, 2).join(" ")}{" "}
                <span className="gold-text">{t("aboutTeamTitle").split(" ").slice(2, 4).join(" ")}</span>
                {" "}{t("aboutTeamTitle").split(" ").slice(4).join(" ")}
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {team.map((member) => {
              const Icon = member.icon;
              return (
                <article key={member.key} className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
                  <Icon className="h-9 w-9 text-gold-200" />
                  <h3 className="mt-7 text-2xl font-semibold text-white">{t(`${member.key}_name`)}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/58">{t(`${member.key}_role`)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-gold-300/20 bg-gold-300 p-8 text-obsidian">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em]">
                <Award className="h-5 w-5" /> {t("aboutCertsEyebrow")}
              </div>
              <h2 className="mt-4 text-4xl font-semibold">{t("aboutCertsTitle")}</h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Clock3 className="h-4 w-4" /> {t("aboutCertsAudit")}
            </div>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {certificateKeys.map((key) => (
              <div key={key} className="rounded-2xl bg-obsidian/90 px-4 py-4 text-sm text-white">
                {t(key)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
