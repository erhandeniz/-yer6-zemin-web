"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  // Statik export HTML'inde (ve JS gelmeden) gerçek değer görünsün diye başlangıç
  // değeri "value" olarak ayarlanır; sayfa görünüme girdiğinde 0'dan animasyon yapılır.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const duration = 1550;
    const started = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - started) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Number((value * eased).toFixed(value % 1 === 0 ? 0 : 1)));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
