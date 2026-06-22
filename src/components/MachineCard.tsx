"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Anchor, Building2, Drill, Layers3 } from "lucide-react";
import type { equipment } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";

type Machine = (typeof equipment)[number];
const iconMap = {
  anchor: Anchor,
  building: Building2,
  drill: Drill,
  layers: Layers3
};

export function MachineCard({ machine }: { machine: Machine }) {
  const { t } = useLanguage();
  const Icon = iconMap[machine.icon as keyof typeof iconMap];
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  return (
    <motion.article
      onMouseMove={(event) => {
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
            <Icon className="h-8 w-8" />
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/46">
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
