"use client";

import { workflow } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";

export function WorkflowDiagram() {
  const { t } = useLanguage();

  return (
    <div className="relative grid gap-5 lg:grid-cols-4">
      <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent lg:block" />
      {workflow.map((step, index) => {
        const Icon = step.icon;
        return (
          <article key={step.key} className="gsap-reveal relative rounded-[2rem] border border-white/10 bg-obsidian/62 p-6 backdrop-blur">
            <div className="grid h-16 w-16 place-items-center rounded-full border border-gold-300/35 bg-gold-300/10 text-gold-100">
              <Icon className="h-7 w-7" />
            </div>
            <div className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-gold-200">0{index + 1}</div>
            <h3 className="mt-3 text-2xl font-semibold text-white">{t(`${step.key}Title`)}</h3>
            <p className="mt-4 text-sm leading-7 text-white/58">{t(`${step.key}Copy`)}</p>
          </article>
        );
      })}
    </div>
  );
}
