"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Anchor, Building2, Drill, Gauge, Layers3 } from "lucide-react";
import type { equipment } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";

type Machine = (typeof equipment)[number];
const iconMap = {
  anchor: Anchor,
  building: Building2,
  drill: Drill,
  gauge: Gauge,
  layers: Layers3
};

const equipmentPlaceholderSrc =
  "data:image/svg+xml,%3Csvg%20width%3D%2764%27%20height%3D%2764%27%20viewBox%3D%270%200%2064%2064%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Crect%20width%3D%2764%27%20height%3D%2764%27%20rx%3D%2716%27%20fill%3D%27%23d8a42d%27%20fill-opacity%3D%270.12%27/%3E%3Cpath%20d%3D%27M16%2042h32M22%2042V24h20v18M27%2024v-6h10v6M23%2031h18M27%2037h10%27%20stroke%3D%27%23fff7d1%27%20stroke-width%3D%273%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27/%3E%3Ccircle%20cx%3D%2723%27%20cy%3D%2747%27%20r%3D%273%27%20fill%3D%27%23fff7d1%27/%3E%3Ccircle%20cx%3D%2741%27%20cy%3D%2747%27%20r%3D%273%27%20fill%3D%27%23fff7d1%27/%3E%3C/svg%3E";

export function MachineCard({ machine }: { machine: Machine }) {
  const { t } = useLanguage();
  const Icon = iconMap[machine.icon as keyof typeof iconMap] ?? Drill;
  const imageAlt = "imageAlt" in machine ? (machine.imageAlt as string) : "";
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  return (
    <motion.article
      onMouseMove={(event) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setRotate({
          x: ((y / rect.height) - 0.5) * -10,
          y: ((x / rect.width) - 0.5) * 12
        });
      }}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 140, damping: 18 }}
      className="gsap-reveal relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 [transform-style:preserve-3d]"
    >
      <div className="absolute inset-0 bg-radial-gold opacity-40" />
      <div className="relative [transform:translateZ(36px)]">
        <div className="flex items-center justify-between">
          <div className="grid h-16 w-16 place-items-center rounded-2xl border border-gold-300/25 bg-gold-300/10 text-gold-100">
            {imageAlt ? (
              <img
                src={equipmentPlaceholderSrc}
                alt={imageAlt}
                className="h-10 w-10"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <Icon className="h-8 w-8" />
            )}
          </div>
          <span className="max-w-[12rem] rounded-full border border-white/10 px-3 py-1 text-right text-[10px] uppercase leading-4 tracking-normal text-white/46 sm:text-xs">
            {t(`${machine.key}_type`)}
          </span>
        </div>
        <h3 className="mt-8 text-3xl font-semibold leading-tight text-white">{t(`${machine.key}_name`)}</h3>
        <div className="mt-8 grid gap-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-2xl border border-white/10 bg-obsidian/48 px-4 py-3 text-sm text-white/64">
              {t(`${machine.key}_spec${n}`)}
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-gold-300 p-4 text-sm font-semibold text-obsidian">
          {t(`${machine.key}_output`)}
        </div>
      </div>
    </motion.article>
  );
}
