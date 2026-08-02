"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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
const FloatingCalculator = dynamic(
  () => import("@/components/FloatingCalculator").then((m) => m.FloatingCalculator),
  { ssr: false }
);

export function DeferredCalculator() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Tarayıcı boştayken yükle; desteklenmiyorsa kısa bir gecikmeyle.
    const idle = (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
      .requestIdleCallback;
    if (typeof idle === "function") {
      const id = idle(() => setReady(true));
      return () => {
        const cancel = (window as unknown as { cancelIdleCallback?: (id: number) => void })
          .cancelIdleCallback;
        if (typeof cancel === "function") cancel(id);
      };
    }
    const timer = window.setTimeout(() => setReady(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) return null;
  return <FloatingCalculator />;
}
