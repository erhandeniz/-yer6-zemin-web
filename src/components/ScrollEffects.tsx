"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reveals = gsap.utils.toArray<HTMLElement>(".gsap-reveal");
    reveals.forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 34 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%"
          }
        }
      );
    });

    const lines = gsap.utils.toArray<HTMLElement>(".gold-line");
    lines.forEach((line) => {
      gsap.to(line, {
        scaleX: 1,
        duration: 1.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: line,
          start: "top 90%"
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
