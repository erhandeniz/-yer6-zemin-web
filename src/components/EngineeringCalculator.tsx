"use client";

import { useMemo, useState } from "react";

export function EngineeringCalculator() {
  const [mode, setMode] = useState<"fore-kazik" | "jet-grout">("fore-kazik");

  // Fore Kazık State
  const [fkDiameter, setFkDiameter] = useState(0.8); // 0.6 to 1.5 m
  const [fkDepth, setFkDepth] = useState(25); // m
  const [fkCount, setFkCount] = useState(150); // adet
  const [fkOverbreak, setFkOverbreak] = useState(1.1); // %10 fire
  const [fkSteelDensity, setFkSteelDensity] = useState(120); // kg/m3 (düşük 80, orta 120, yüksek 160)

  // Jet Grout State
  const [jgDiameter, setJgDiameter] = useState(0.6); // 0.4 to 1.2 m
  const [jgEffectiveDepth, setJgEffectiveDepth] = useState(12); // Etkin delgi (m)
  const [jgEmptyDepth, setJgEmptyDepth] = useState(3); // Boş delgi (m)
  const [jgCount, setJgCount] = useState(300); // adet
  const [jgCementDosage, setJgCementDosage] = useState(400); // kg/m3 kolon hacmi için veya kg/m. (Yaygın: 300-500 kg/m)
  // Let's use kg/m for Jet Grout dosage (e.g. 60cm kolon için 350 kg/m)
  const [jgDosagePerMeter, setJgDosagePerMeter] = useState(350);

  const fkResult = useMemo(() => {
    const radius = fkDiameter / 2;
    const singleVolume = Math.PI * radius * radius * fkDepth;
    const totalVolume = singleVolume * fkCount * fkOverbreak;
    const totalLength = fkDepth * fkCount;
    const totalSteelTon = (totalVolume * fkSteelDensity) / 1000;
    return {
      drilling: totalLength,
      concrete: totalVolume,
      steel: totalSteelTon
    };
  }, [fkDiameter, fkDepth, fkCount, fkOverbreak, fkSteelDensity]);

  const jgResult = useMemo(() => {
    const totalEffective = jgEffectiveDepth * jgCount;
    const totalEmpty = jgEmptyDepth * jgCount;
    const totalDrilling = totalEffective + totalEmpty;
    const totalCementTon = (totalEffective * jgDosagePerMeter) / 1000; // Ton
    return {
      drilling: totalDrilling,
      cement: totalCementTon
    };
  }, [jgEffectiveDepth, jgEmptyDepth, jgCount, jgDosagePerMeter]);

  return (
    <div className="gsap-reveal grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-white">Geoteknik Hesaplayıcı</h3>
        </div>
        <p className="mt-3 text-sm leading-7 text-white/58">
          Projenizdeki zemin iyileştirme veya derin temel imalatları için tahmini metraj ve sarfiyat hesaplamaları.
        </p>

        {/* Mode Toggle */}
        <div className="mt-6 flex gap-2 rounded-full border border-white/10 bg-white/5 p-1">
          <button
            type="button"
            onClick={() => setMode("fore-kazik")}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              mode === "fore-kazik" ? "bg-gold-300 text-obsidian" : "text-white/60 hover:text-white"
            }`}
          >
            Fore Kazık
          </button>
          <button
            type="button"
            onClick={() => setMode("jet-grout")}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              mode === "jet-grout" ? "bg-gold-300 text-obsidian" : "text-white/60 hover:text-white"
            }`}
          >
            Jet Grout
          </button>
        </div>

        <div className="mt-8 grid gap-5">
          {mode === "fore-kazik" ? (
            <>
              <Range label="Kazık Çapı" unit="m" value={fkDiameter} min={0.6} max={1.5} step={0.1} onChange={setFkDiameter} />
              <Range label="Kazık Boyu" unit="m" value={fkDepth} min={10} max={60} step={1} onChange={setFkDepth} />
              <Range label="Kazık Adedi" unit="adet" value={fkCount} min={10} max={2000} step={10} onChange={setFkCount} />
              <Range label="Beton Fire Katsayısı" unit="x" value={fkOverbreak} min={1.0} max={1.3} step={0.01} onChange={setFkOverbreak} />
              <Range label="Donatı Yoğunluğu" unit="kg/m³" value={fkSteelDensity} min={60} max={180} step={5} onChange={setFkSteelDensity} />
            </>
          ) : (
            <>
              <Range label="Kolon Çapı" unit="m" value={jgDiameter} min={0.4} max={1.2} step={0.1} onChange={setJgDiameter} />
              <Range label="Etkin Boy" unit="m" value={jgEffectiveDepth} min={5} max={35} step={1} onChange={setJgEffectiveDepth} />
              <Range label="Boş Delgi Boyu" unit="m" value={jgEmptyDepth} min={0} max={15} step={1} onChange={setJgEmptyDepth} />
              <Range label="Kolon Adedi" unit="adet" value={jgCount} min={50} max={5000} step={50} onChange={setJgCount} />
              <Range label="Çimento Dozajı" unit="kg/m" value={jgDosagePerMeter} min={250} max={600} step={10} onChange={setJgDosagePerMeter} />
            </>
          )}
        </div>
      </div>
      <div className="rounded-[1.5rem] border border-gold-300/25 bg-gold-300 p-6 text-obsidian flex flex-col justify-center">
        <div className="text-sm font-semibold uppercase tracking-[0.24em] mb-8">TAHMİNİ METRAJ ÇIKTISI</div>
        
        {mode === "fore-kazik" ? (
          <div className="grid gap-6">
            <div>
              <div className="text-5xl font-semibold">{Math.round(fkResult.concrete).toLocaleString("tr-TR")}</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-obsidian/70">Toplam Beton (m³)</div>
            </div>
            <div className="h-px bg-obsidian/18" />
            <div>
              <div className="text-4xl font-semibold">{Math.round(fkResult.steel).toLocaleString("tr-TR")}</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-obsidian/70">Toplam Donatı (Ton)</div>
            </div>
            <div className="h-px bg-obsidian/18" />
            <div>
              <div className="text-3xl font-semibold">{Math.round(fkResult.drilling).toLocaleString("tr-TR")}</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-obsidian/70">Toplam Delgi (m)</div>
            </div>
          </div>
        ) : (
          <div className="grid gap-6">
            <div>
              <div className="text-5xl font-semibold">{Math.round(jgResult.cement).toLocaleString("tr-TR")}</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-obsidian/70">Toplam Çimento (Ton)</div>
            </div>
            <div className="h-px bg-obsidian/18" />
            <div>
              <div className="text-4xl font-semibold">{Math.round(jgResult.drilling).toLocaleString("tr-TR")}</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-obsidian/70">Toplam Delgi (Etkin + Boş) (m)</div>
            </div>
          </div>
        )}
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
        <span className="rounded-full bg-white/8 px-3 py-1 text-gold-100 tabular-nums">
          {value.toLocaleString("tr-TR")} {unit}
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
