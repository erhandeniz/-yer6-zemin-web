"use client";

import { BeforeAfter } from "@/components/BeforeAfter";
import { PageHero } from "@/components/PageHero";
import { ProjectFilter } from "@/components/ProjectFilter";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/components/LanguageProvider";

export function ProjectsContent() {
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        eyebrowKey="projectsEyebrow"
        titleKey="projectsTitle"
        copyKey="projectsCopy"
      />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <ProjectFilter />
        </div>
      </section>
      <section className="bg-white/[0.025] px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeader
            eyebrow={t("projectsBeforeEyebrow")}
            title={
              <>
                {t("projectsBeforeTitle").split(" ").slice(0, 2).join(" ")}{" "}
                <span className="gold-text">{t("projectsBeforeTitle").split(" ").slice(2, 4).join(" ")}</span>
                {" "}{t("projectsBeforeTitle").split(" ").slice(4).join(" ")}
              </>
            }
            copy={t("projectsBeforeCopy")}
          />
          <BeforeAfter />
        </div>
      </section>
    </main>
  );
}
