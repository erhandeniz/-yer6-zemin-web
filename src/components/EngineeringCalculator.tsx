"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export function EngineeringCalculator() {
  const { t } = useLanguage();
  const [diameter, setDiameter] = useState(0.8);
  const [depth, setDepth] = useState(18);
  const [count, setCount] = useState(120);
  const [factor, setFactor] = useState(1.08);

  const result = useMemo(() => {
    const radius = diameter / 2;
    const volume = Math.PI * radius * radius * depth * count * factor;
    const cement = volume * 0.34;
    return { volume, cement };
  }, [diameter, depth, count, factor]);

  return (
    <div className="gsap-reveal grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <h3 className="text-2xl font-semibold text-white">{t("calcTitle")}</h3>
        <p className="mt-3 text-sm leading-7 text-white/58">{t("calcSubtitle")}</p>
        <div className="mt-7 grid gap-5">
          <Range label={t("calcDiam")} unit="m" value={diameter} min={0.4} max={1.8} step={0.1} onChange={setDiameter} />
          <Range label={t("calcDepth")} unit="m" value={depth} min={4} max={42} step={1} onChange={setDepth} />
          <Range label={t("calcCount")} unit="adet" value={count} min={10} max={800} step={10} onChange={setCount} />
          <Range label={t("calcFactor")} unit="x" value={factor} min={1} max={1.35} step={0.01} onChange={setFactor} />
        </div>
      </div>
      <div className="rounded-[1.5rem] border border-gold-300/25 bg-gold-300 p-6 text-obsidian">
        <div className="text-sm font-semibold uppercase tracking-[0.24em]">{t("calcEstimate")}</div>
        <div className="mt-8 grid gap-6">
          <div>
            <div className="text-5xl font-semibold">{Math.round(result.volume).toLocaleString("tr-TR")}</div>
            <div className="mt-2 text-sm font-semibold">{t("calcVolumeLabel")}</div>
          </div>
          <div className="h-px bg-obsidian/18" />
          <div>
            <div className="text-4xl font-semibold">{Math.round(result.cement).toLocaleString("tr-TR")}</div>
            <div className="mt-2 text-sm font-semibold">{t("calcCementLabel")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Range({
  label,
  unit,
  value,
  min,
  max,
  step,
  onChange
}: {
  label: string;
  unit: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between gap-4 text-sm">
        <span className="font-semibold text-white/72">{label}</span>
        <span className="rounded-full bg-white/8 px-3 py-1 text-gold-100">
          {value} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-gold-300"
      />
    </label>
  );
}
