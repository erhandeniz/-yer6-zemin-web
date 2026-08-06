"use client";

import { Calculator } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ComponentType } from "react";

/**
 * Yüzen hesap makinesini ilk boyamadan (first paint) SONRA yükler.
 *
 * NEDEN: FloatingCalculator bir istemci bileşenidir ve framer-motion + ikon
 * kütüphanesini ilk JS paketine sokar. Görsel olarak fold üstünde kritik bir
 * eleman değildir (sağ alt köşede yüzen buton). Yüklemesini ertelemek LCP ve
 * TBT'yi iyileştirir; buton yine aynı yerde, aynı görünümde belirir.
 *
 * DAVRANIŞ DEĞİŞMEZ: bileşenin kendisine dokunulmadı, yalnızca ne zaman
 * yükleneceği değişti. Kullanıcı sayfaya girdiğinde butonu yine görür.
 */
type FloatingCalculatorComponent = ComponentType<{ initialOpen?: boolean }>;

export function DeferredCalculator() {
  const [CalculatorPanel, setCalculatorPanel] = useState<FloatingCalculatorComponent | null>(null);
  const loadPromise = useRef<Promise<void> | null>(null);
  const openOnLoad = useRef(false);

  const loadCalculator = useCallback((shouldOpen = false) => {
    if (shouldOpen) openOnLoad.current = true;
    if (loadPromise.current) return loadPromise.current;

    loadPromise.current = import("@/components/FloatingCalculator").then((module) => {
      setCalculatorPanel(() => module.FloatingCalculator);
    });
    return loadPromise.current;
  }, []);

  useEffect(() => {
    const warm = () => void loadCalculator(false);
    const events: Array<keyof WindowEventMap> = ["pointermove", "keydown", "touchstart", "scroll"];
    events.forEach((event) => window.addEventListener(event, warm, { once: true, passive: true }));
    const timer = window.setTimeout(warm, 8000);

    return () => {
      window.clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, warm));
    };
  }, [loadCalculator]);

  if (CalculatorPanel) return <CalculatorPanel initialOpen={openOnLoad.current} />;

  // Ağır hesap/PDF kodu indirilmeden önce gerçek butonla aynı görünüm ve
  // erişilebilirlik korunur. Dokunulduğunda modül yüklenir ve panel doğrudan açılır.
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <button
        type="button"
        onPointerEnter={() => void loadCalculator(false)}
        onFocus={() => void loadCalculator(false)}
        onClick={() => void loadCalculator(true)}
        aria-label="Hesaplama aracını aç"
        aria-expanded={false}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gold-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-transform hover:scale-110 active:scale-95"
      >
        <div className="absolute inset-0 rounded-full bg-gold-300 opacity-20 group-hover:animate-ping" />
        <Calculator className="relative z-10 h-6 w-6 text-obsidian" />
      </button>
    </div>
  );
}
