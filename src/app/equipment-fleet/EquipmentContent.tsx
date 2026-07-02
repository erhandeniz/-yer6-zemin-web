"use client";

import { MachineCard } from "@/components/MachineCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { equipment, equipmentGroupKeys } from "@/lib/content";
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
        <div className="mx-auto grid max-w-7xl gap-16">
          {equipmentGroupKeys.map((groupKey) => {
            const groupEquipment = equipment.filter((machine) => machine.groupKey === groupKey);

            return (
              <div key={groupKey} className="grid gap-6">
                <div className="gsap-reveal flex items-center gap-4">
                  <span aria-hidden="true" className="h-px w-10 shrink-0 bg-gold-300/50" />
                  <h2 className="text-xl font-semibold uppercase leading-tight tracking-normal text-white md:text-2xl">
                    {t(groupKey)}
                  </h2>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  {groupEquipment.map((machine) => (
                    <MachineCard key={machine.key} machine={machine} />
                  ))}
                </div>
              </div>
            );
          })}
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
