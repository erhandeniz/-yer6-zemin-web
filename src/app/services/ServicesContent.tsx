"use client";

import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { services } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";

export function ServicesContent() {
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        eyebrowKey="servicesEyebrow"
        titleKey="servicesTitle"
        copyKey="servicesCopy"
      />
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white/[0.025] px-5 py-24">
        <div className="absolute inset-0 technical-mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t("servicesMethodEyebrow")}
            title={
              <>
                {t("servicesMethodTitle").split(" ").slice(0, 2).join(" ")}{" "}
                <span className="gold-text">{t("servicesMethodTitle").split(" ").slice(2).join(" ")}</span>
              </>
            }
            copy={t("servicesMethodCopy")}
            align="center"
          />
          <div className="mt-14">
            <WorkflowDiagram />
          </div>
        </div>
      </section>
    </main>
  );
}
