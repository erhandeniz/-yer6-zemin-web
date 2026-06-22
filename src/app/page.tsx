"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CinematicHero } from "@/components/CinematicHero";
import { ClientLogoRail } from "@/components/ClientLogoRail";
import { EngineeringCalculator } from "@/components/EngineeringCalculator";
import { MetricStrip } from "@/components/MetricStrip";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { projects, services } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main>
      <CinematicHero />
      <MetricStrip />
      <ClientLogoRail />

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t("homeServicesEyebrow")}
            title={
              <>
                {t("homeServicesTitle").split(" ").slice(0, 2).join(" ")}{" "}
                <span className="gold-text">{t("homeServicesTitle").split(" ").slice(2, 4).join(" ")}</span>{" "}
                {t("homeServicesTitle").split(" ").slice(4).join(" ")}
              </>
            }
            copy={t("homeServicesCopy")}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
          <Link href="/services" className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-gold-100">
            {t("homeViewAllServices")} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-white/[0.025] px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader
              eyebrow={t("homeProjectsEyebrow")}
              title={
                <>
                  {t("homeProjectsTitle").split(" ").slice(0, 3).join(" ")}{" "}
                  <span className="gold-text">{t("homeProjectsTitle").split(" ").slice(3, 5).join(" ")}</span>{" "}
                  {t("homeProjectsTitle").split(" ").slice(5).join(" ")}
                </>
              }
              copy={t("homeProjectsCopy")}
            />
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-gold-300 px-5 py-3 text-sm font-semibold text-obsidian">
              {t("homeProjectGallery")} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24">
        <div className="absolute inset-0 technical-mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t("homeWorkflowEyebrow")}
            title={
              <>
                {t("homeWorkflowTitle").split(" ").slice(0, 2).join(" ")}{" "}
                <span className="gold-text">{t("homeWorkflowTitle").split(" ").slice(2, 4).join(" ")}</span>
                {" "}{t("homeWorkflowTitle").split(" ").slice(4).join(" ")}
              </>
            }
            copy={t("homeWorkflowCopy")}
            align="center"
          />
          <div className="mt-14">
            <WorkflowDiagram />
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="gsap-reveal">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-14 bg-gold-300 gold-line" />
              <span className="text-xs font-semibold uppercase tracking-[0.36em] text-gold-200">{t("homeTenderEyebrow")}</span>
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              {t("homeTenderTitle").split(" ").slice(0, 2).join(" ")}{" "}
              <span className="gold-text">{t("homeTenderTitle").split(" ").slice(2, 5).join(" ")}</span>{" "}
              {t("homeTenderTitle").split(" ").slice(5).join(" ")}
            </h2>
            <div className="mt-7 grid gap-4 text-sm leading-7 text-white/62">
              {(["homeTenderItem1", "homeTenderItem2", "homeTenderItem3"] as const).map((key) => (
                <div key={key} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold-200" />
                  <span>{t(key)}</span>
                </div>
              ))}
            </div>
          </div>
          <EngineeringCalculator />
        </div>
      </section>
    </main>
  );
}
