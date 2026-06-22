"use client";

import { Activity, Database, Microscope, Radar } from "lucide-react";
import { EngineeringCalculator } from "@/components/EngineeringCalculator";
import { PageHero } from "@/components/PageHero";
import { ParticleField } from "@/components/ParticleField";
import { SectionHeader } from "@/components/SectionHeader";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { useLanguage } from "@/components/LanguageProvider";

export function TechnologyContent() {
  const { t } = useLanguage();

  const techCards = [
    { key: "techSensor", icon: Radar, copyKey: "techSensorCopy" },
    { key: "techLab", icon: Database, copyKey: "techLabCopy" },
    { key: "techQA", icon: Microscope, copyKey: "techQACopy" },
    { key: "techReport", icon: Activity, copyKey: "techReportCopy" },
  ] as const;

  return (
    <main>
      <PageHero
        eyebrowKey="techEyebrow"
        titleKey="techTitle"
        copyKey="techCopy"
      />
      <section className="relative overflow-hidden px-5 py-24">
        <div className="absolute inset-0 technical-mesh opacity-60" />
        <ParticleField density={680} className="opacity-60" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t("techWorkflowEyebrow")}
            title={
              <>
                {t("techWorkflowTitle").split(" ").slice(0, 3).join(" ")}{" "}
                <span className="gold-text">{t("techWorkflowTitle").split(" ").slice(3, 5).join(" ")}</span>
                {" "}{t("techWorkflowTitle").split(" ").slice(5).join(" ")}
              </>
            }
            align="center"
          />
          <div className="mt-14">
            <WorkflowDiagram />
          </div>
        </div>
      </section>
      <section className="bg-white/[0.025] px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {techCards.map(({ key, icon: Icon, copyKey }) => (
            <article key={key} className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
              <Icon className="h-9 w-9 text-gold-200" />
              <h3 className="mt-7 text-2xl font-semibold text-white">{t(key)}</h3>
              <p className="mt-4 text-sm leading-7 text-white/58">{t(copyKey)}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <EngineeringCalculator />
        </div>
      </section>
    </main>
  );
}
