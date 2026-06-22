"use client";

import { metrics } from "@/lib/content";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useLanguage } from "@/components/LanguageProvider";

export function MetricStrip() {
  const { t } = useLanguage();

  return (
    <section className="px-5 py-16">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.labelKey} className="gsap-reveal lux-panel rounded-[2rem] p-6">
            <div className="text-4xl font-semibold text-white md:text-5xl">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gold-100">{t(metric.labelKey)}</h3>
            <p className="mt-2 text-sm leading-6 text-white/56">{t(metric.detailKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
