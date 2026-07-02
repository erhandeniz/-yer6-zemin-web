"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let active = true;
    let cleanupTriggers: (() => void) | undefined;

    async function init() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);

      if (!active) return;

      gsap.registerPlugin(ScrollTrigger);

      const reveals = gsap.utils.toArray<HTMLElement>(".gsap-reveal");
      reveals.forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%"
            }
          }
        );
      });

      const lines = gsap.utils.toArray<HTMLElement>(".gold-line");
      lines.forEach((line) => {
        gsap.to(line, {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 90%"
          }
        });
      });

      cleanupTriggers = () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    void init();

    return () => {
      active = false;
      cleanupTriggers?.();
    };
  }, []);

  return null;
}
