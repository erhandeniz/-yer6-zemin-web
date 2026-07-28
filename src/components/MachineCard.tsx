"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Anchor, Building2, Drill, Gauge, Layers3, X } from "lucide-react";
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

export function MachineCard({ machine }: { machine: Machine }) {
  const { t } = useLanguage();
  const Icon = iconMap[machine.icon as keyof typeof iconMap] ?? Drill;
  const image = "image" in machine && typeof machine.image === "string" ? machine.image : "";
  const imageAlt = "imageAlt" in machine && typeof machine.imageAlt === "string" ? machine.imageAlt : "";
  const imageSourceUrl =
    "imageSourceUrl" in machine && typeof machine.imageSourceUrl === "string" ? machine.imageSourceUrl : "";
  const imageCredit =
    "imageCredit" in machine && typeof machine.imageCredit === "string" ? machine.imageCredit : "";
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [previewOpen, setPreviewOpen] = useState(false);
  const machineName = t(`${machine.key}_name`);

  useEffect(() => {
    if (!previewOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreviewOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [previewOpen]);

  const preview =
    previewOpen && image && typeof document !== "undefined"
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${machineName} fotoğraf önizlemesi`}
            className="fixed inset-0 z-[200] grid place-items-center bg-black/88 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setPreviewOpen(false)}
          >
            <button
              type="button"
              autoFocus
              aria-label="Fotoğraf önizlemesini kapat"
              title="Kapat"
              onClick={() => setPreviewOpen(false)}
              className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-obsidian/90 text-white shadow-2xl transition hover:border-gold-300/70 hover:text-gold-200 focus:outline-none focus:ring-2 focus:ring-gold-300 sm:right-8 sm:top-8"
            >
              <X aria-hidden="true" className="h-6 w-6" />
            </button>

            <figure
              className="flex max-h-[92vh] max-w-[94vw] flex-col items-center gap-3"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={image}
                alt={imageAlt}
                className="max-h-[84vh] max-w-[94vw] rounded-2xl object-contain shadow-2xl"
                decoding="async"
              />
              {(imageCredit || imageSourceUrl) && (
                <figcaption className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-xs text-white/60">
                  {imageCredit && <span>{imageCredit}</span>}
                  {imageSourceUrl && (
                    <a
                      href={imageSourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gold-200 underline decoration-gold-300/40 underline-offset-4 transition hover:text-gold-100"
                    >
                      Görsel kaynağı
                    </a>
                  )}
                </figcaption>
              )}
            </figure>
          </div>,
          document.body
        )
      : null;

  return (
    <>
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
            <div className="grid h-16 w-16 overflow-hidden place-items-center rounded-2xl border border-gold-300/25 bg-gold-300/10 text-gold-100">
              {image ? (
                <button
                  type="button"
                  aria-label={`${machineName} fotoğrafını büyüt`}
                  title="Fotoğrafı büyüt"
                  onClick={() => setPreviewOpen(true)}
                  className="group block h-full w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold-300"
                >
                  <img
                    src={image}
                    alt={imageAlt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ) : (
                <Icon aria-hidden="true" className="h-8 w-8" />
              )}
            </div>
            <span className="max-w-[12rem] rounded-full border border-white/10 px-3 py-1 text-right text-[10px] uppercase leading-4 tracking-normal text-white/46 sm:text-xs">
              {t(`${machine.key}_type`)}
            </span>
          </div>
          <h3 className="mt-8 text-3xl font-semibold leading-tight text-white">{machineName}</h3>
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
      {preview}
    </>
  );
}
