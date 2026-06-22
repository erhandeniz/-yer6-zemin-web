"use client";

import { MachineCard } from "@/components/MachineCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { equipment } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";

export function EquipmentContent() {
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        eyebrowKey="fleetEyebrow"
        titleKey="fleetTitle"
        copyKey="fleetCopy"
      />
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {equipment.map((machine) => (
              <MachineCard key={machine.key} machine={machine} />
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t("fleetControlEyebrow")}
            title={
              <>
                {t("fleetControlTitle").split(" ").slice(0, 2).join(" ")}{" "}
                <span className="gold-text">{t("fleetControlTitle").split(" ").slice(2, 4).join(" ")}</span>
                {" "}{t("fleetControlTitle").split(" ").slice(4).join(" ")}
              </>
            }
            copy={t("fleetControlCopy")}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {(["fleetItem1", "fleetItem2", "fleetItem3"] as const).map((key) => (
              <div key={key} className="gsap-reveal rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-white/70">
                {t(key)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
