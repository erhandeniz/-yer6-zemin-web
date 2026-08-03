"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, Download, Link2, Loader2, RotateCcw, Send } from "lucide-react";
import {
  computeEstimate,
  type Complexity,
  type Estimate,
  type SoilType
} from "@/lib/costEngine";
import { generateYer6Report } from "@/lib/pdfReport";
import { fetchLiveFx, BASELINE_FX, type FxRates } from "@/lib/fx";
import type { CalculatorTool as Tool } from "@/lib/calculators";

/**
 * Hesap Merkezi aracı — mevcut costEngine motorunu kullanır, yeni bir hesap
 * mantığı yazmaz. Ana sayfadaki yüzen hesap makinesi aynen korunur; bu, aynı
 * motorun indekslenebilir ve kapsamlı sayfa sürümüdür.
 *
 * Tasarım dili mevcut kart sistemiyle aynıdır (rounded-[2rem], border-white/10,
 * bg-white/[0.03], gold-300 vurgular).
 */

const tl = (value: number) =>
  new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(Math.round(value));

const num = (value: number, digits = 1) =>
  new Intl.NumberFormat("tr-TR", { maximumFractionDigits: digits }).format(value);

export function CalculatorTool({ tool }: { tool: Tool }) {
  const [count, setCount] = useState(tool.defaults.count);
  const [depth, setDepth] = useState(tool.defaults.depth);
  const [diameter, setDiameter] = useState(tool.defaults.diameter);
  const [soilType, setSoilType] = useState<SoilType>("soft");
  const [complexity, setComplexity] = useState<Complexity>("quick");
  const [fx, setFx] = useState<FxRates>(BASELINE_FX);
  const [fxLoading, setFxLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [pdfBusy, setPdfBusy] = useState(false);

  // URL parametrelerinden başlangıç değerlerini al (paylaşılabilir sonuç).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const readNum = (key: string, fallback: number) => {
      const raw = params.get(key);
      const parsed = raw ? Number(raw) : NaN;
      return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
    };
    setCount(readNum("adet", tool.defaults.count));
    setDepth(readNum("boy", tool.defaults.depth));
    setDiameter(readNum("cap", tool.defaults.diameter));
    if (params.get("zemin") === "hard") setSoilType("hard");
  }, [tool.defaults.count, tool.defaults.depth, tool.defaults.diameter]);

  // Canlı döviz kuru — başarısız olursa taban kur kullanılır (hesap yine çalışır).
  useEffect(() => {
    let active = true;
    fetchLiveFx()
      .then((rates) => {
        if (active) setFx(rates);
      })
      .catch(() => {
        /* taban kur kullanılır */
      })
      .finally(() => {
        if (active) setFxLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const estimate: Estimate = useMemo(
    () =>
      computeEstimate({
        mode: tool.mode,
        count,
        depth,
        diameter,
        complexity,
        soilType,
        factor: 1,
        fx
      }),
    [tool.mode, count, depth, diameter, complexity, soilType, fx]
  );

  // Değerler değiştikçe URL'i güncelle (sayfa yenilenmeden, geçmişi kirletmeden).
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("cap", String(diameter));
    params.set("boy", String(depth));
    params.set("adet", String(count));
    if (soilType === "hard") params.set("zemin", "hard");
    window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
  }, [diameter, depth, count, soilType]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* pano erişimi yoksa sessiz geç */
    }
  };

  const downloadPdf = async () => {
    setPdfBusy(true);
    try {
      const q = estimate.quantities;
      // Yalnızca bu yöntemde anlamlı olan metraj satırlarını raporla.
      const quantityRows: [string, string][] = [
        ["Toplam imalat", `${num(q.drillMeters)} m`],
        ...(q.concreteM3 > 0 ? ([["Beton", `${num(q.concreteM3)} m³`]] as [string, string][]) : []),
        ...(q.steelTon > 0 ? ([["Donatı", `${num(q.steelTon, 2)} ton`]] as [string, string][]) : []),
        ...(q.cementTon > 0 ? ([["Çimento", `${num(q.cementTon, 2)} ton`]] as [string, string][]) : []),
        ...(q.groutM3 > 0 ? ([["Şerbet", `${num(q.groutM3)} m³`]] as [string, string][]) : []),
        ...(q.strandM > 0 ? ([["Halat", `${num(q.strandM)} m`]] as [string, string][]) : []),
        ["Mazot", `${num(q.dieselLt)} lt`],
        ["Tahmini makine günü", `${num(q.rigDays)} gün`],
        ["Tahmini karbon ayak izi", `${num(q.co2Ton, 1)} ton CO₂`]
      ];

      const ok = await generateYer6Report({
        toolTitle: `${tool.h1} — ön değerlendirme`,
        methodLabel: tool.mode.toUpperCase().replace("-", " "),
        inputs: [
          [tool.labels.diameter, String(diameter)],
          [tool.labels.depth, String(depth)],
          [tool.labels.count, String(count)],
          ["Zemin Karakteri", soilType === "soft" ? "Yumuşak / orta" : "Sert / kayalı"],
          ["Hesap Detayı", complexity === "quick" ? "Hızlı" : "Detaylı"]
        ],
        quantities: quantityRows,
        estimate,
        fileKey: tool.mode
      });

      if (!ok) {
        alert(
          "Rapor fontları yüklenemediği için PDF oluşturulamadı (Türkçe karakterlerin doğru çıkması için font gereklidir). Lütfen internet bağlantınızı kontrol edip tekrar deneyin."
        );
      }
    } catch (error) {
      console.error("PDF olusturulurken hata olustu:", error);
      alert("PDF oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setPdfBusy(false);
    }
  };

  const reset = () => {
    setCount(tool.defaults.count);
    setDepth(tool.defaults.depth);
    setDiameter(tool.defaults.diameter);
    setSoilType("soft");
    setComplexity("quick");
  };

  const q = estimate.quantities;
  const metrics: { label: string; value: string }[] = [
    { label: "Toplam imalat", value: `${num(q.drillMeters)} m` },
    ...(q.concreteM3 > 0 ? [{ label: "Beton", value: `${num(q.concreteM3)} m³` }] : []),
    ...(q.steelTon > 0 ? [{ label: "Donatı", value: `${num(q.steelTon, 2)} ton` }] : []),
    ...(q.cementTon > 0 ? [{ label: "Çimento", value: `${num(q.cementTon, 2)} ton` }] : []),
    ...(q.groutM3 > 0 ? [{ label: "Şerbet", value: `${num(q.groutM3)} m³` }] : []),
    ...(q.strandM > 0 ? [{ label: "Halat", value: `${num(q.strandM)} m` }] : []),
    { label: "Mazot", value: `${num(q.dieselLt)} lt` },
    { label: "Tahmini süre", value: `${num(q.rigDays)} gün` }
  ];

  return (
    <div className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-gold-300/15 text-gold-200">
          <Calculator className="size-5" />
        </span>
        <div>
          <h2 className="text-2xl font-semibold text-white">Hesaplama aracı</h2>
          <p className="text-xs text-white/45">
            {fxLoading ? "Güncel kur alınıyor…" : `Canlı kur: 1 USD = ${num(fx.usdTry, 2)} ₺`} · Fiyat kataloğu:{" "}
            {estimate.priceBookAsOf}
          </p>
        </div>
      </div>

      {/* Girdiler */}
      <div className="mt-7 grid gap-5 sm:grid-cols-3">
        {(
          [
            { key: "diameter", label: tool.labels.diameter, help: tool.labels.diameterHelp, value: diameter, set: setDiameter, min: 5, max: 300, step: 5 },
            { key: "depth", label: tool.labels.depth, help: tool.labels.depthHelp, value: depth, set: setDepth, min: 1, max: 80, step: 1 },
            { key: "count", label: tool.labels.count, help: tool.labels.countHelp, value: count, set: setCount, min: 1, max: 20000, step: 1 }
          ] as const
        ).map((field) => (
          <div key={field.key}>
            <label htmlFor={`calc-${field.key}`} className="block text-sm font-medium text-white/80">
              {field.label}
            </label>
            <input
              id={`calc-${field.key}`}
              type="number"
              inputMode="numeric"
              min={field.min}
              max={field.max}
              step={field.step}
              value={field.value}
              onChange={(event) => {
                const next = Number(event.target.value);
                if (Number.isFinite(next) && next >= 0) field.set(next);
              }}
              className="mt-2 w-full rounded-xl border border-white/12 bg-obsidian/60 px-4 py-3 text-lg font-semibold text-white outline-none transition focus:border-gold-300/60"
            />
            <p className="mt-2 text-xs leading-5 text-white/40">{field.help}</p>
          </div>
        ))}
      </div>

      {/* Zemin ve detay seviyesi */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <span className="block text-sm font-medium text-white/80">Zemin karakteri</span>
          <div className="mt-2 flex gap-2">
            {(
              [
                { value: "soft", label: "Yumuşak / orta" },
                { value: "hard", label: "Sert / kayalı" }
              ] as const
            ).map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setSoilType(option.value)}
                aria-pressed={soilType === option.value}
                className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  soilType === option.value
                    ? "bg-gold-300 text-obsidian"
                    : "border border-white/12 bg-obsidian/60 text-white/70 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <span className="block text-sm font-medium text-white/80">Hesap detayı</span>
          <div className="mt-2 flex gap-2">
            {(
              [
                { value: "quick", label: "Hızlı" },
                { value: "advanced", label: "Detaylı" }
              ] as const
            ).map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setComplexity(option.value)}
                aria-pressed={complexity === option.value}
                className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  complexity === option.value
                    ? "bg-gold-300 text-obsidian"
                    : "border border-white/12 bg-obsidian/60 text-white/70 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Metraj sonuçları */}
      <div className="mt-8">
        <h3 className="text-xs uppercase tracking-[0.3em] text-gold-200">Metraj sonucu</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-white/10 bg-obsidian/50 p-4">
              <p className="text-xs text-white/45">{metric.label}</p>
              <p className="mt-1 text-xl font-semibold text-white">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Maliyet bandı */}
      <div className="mt-8">
        <h3 className="text-xs uppercase tracking-[0.3em] text-gold-200">Ön maliyet aralığı (KDV hariç)</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Düşük", value: estimate.turnkeyMin, accent: false },
            { label: "Olası", value: estimate.turnkeyPoint, accent: true },
            { label: "Yüksek", value: estimate.turnkeyMax, accent: false }
          ].map((band) => (
            <div
              key={band.label}
              className={`rounded-xl p-5 ${
                band.accent
                  ? "border border-gold-300/30 bg-gold-300/10"
                  : "border border-white/10 bg-obsidian/50"
              }`}
            >
              <p className="text-xs text-white/50">{band.label}</p>
              <p className={`mt-1 text-2xl font-semibold ${band.accent ? "text-gold-200" : "text-white"}`}>
                {tl(band.value)} ₺
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-white/55">
          Sadece işçilik + makine (malzeme hariç), olası senaryo:{" "}
          <span className="font-semibold text-white/80">{tl(estimate.laborOnlyPoint)} ₺</span>
        </p>
      </div>

      {/* Uyarı — etütsüz karar verilmez */}
      <div className="mt-7 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-5">
        <p className="text-sm font-semibold text-amber-200">Bu bir ön değerlendirmedir</p>
        <p className="mt-2 text-sm leading-6 text-white/60">
          Sonuçlar yaklaşık metraj ve büyüklük mertebesi göstermek içindir. Kesin metraj, yöntem
          seçimi ve fiyat; zemin etüdü, projelendirme ve saha keşfi sonrasında belirlenir. Zemin
          etüdü olmadan uygulama kararı verilmemelidir.
        </p>
      </div>

      {/* Eylemler */}
      <div className="mt-7 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={downloadPdf}
          disabled={pdfBusy}
          className="inline-flex items-center gap-2 rounded-full bg-gold-300 px-5 py-2.5 text-sm font-semibold text-obsidian transition hover:bg-gold-200 disabled:opacity-60"
        >
          {pdfBusy ? <Loader2 className="size-4 animate-spin" /> : <Download className="size-4" />}
          PDF indir
        </button>
        <button
          type="button"
          onClick={copyLink}
          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-2.5 text-sm text-white/75 transition hover:text-white"
        >
          <Link2 className="size-4" />
          {copied ? "Bağlantı kopyalandı" : "Sonucu paylaş"}
        </button>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-2.5 text-sm text-white/75 transition hover:text-white"
        >
          <RotateCcw className="size-4" />
          Sıfırla
        </button>
        <Link
          href="/contact/"
          className="inline-flex items-center gap-2 rounded-full border border-gold-300/40 px-5 py-2.5 text-sm font-semibold text-gold-200 transition hover:bg-gold-300/10"
        >
          <Send className="size-4" />
          Teklif al
        </Link>
      </div>
    </div>
  );
}
