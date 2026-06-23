"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, ShieldCheck } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { useLanguage } from "@/components/LanguageProvider";

export function CinematicHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 dark-theme">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-42"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-construction-workers-at-a-construction-site-4137-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 construction-texture opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/72 via-obsidian/58 to-obsidian" />
      </div>
      <ParticleField density={1100} />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-5 pb-16">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-300/25 bg-white/8 px-4 py-2 text-sm text-gold-100 backdrop-blur"
          >
            <ShieldCheck className="h-4 w-4" />
            {t("heroBadge")}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl text-balance text-5xl font-semibold leading-[0.95] text-white md:text-7xl lg:text-8xl"
          >
            {t("slogan").split(" ").slice(0, 2).join(" ")}{" "}
            <span className="gold-text">{t("slogan").split(" ").slice(2, 4).join(" ")}</span>{" "}
            {t("slogan").split(" ").slice(4).join(" ")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.64 }}
            className="mt-7 max-w-3xl text-lg leading-8 text-white/72 md:text-xl"
          >
            {t("heroLead")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.78 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-300 px-6 py-4 text-sm font-semibold text-obsidian shadow-gold transition hover:bg-gold-200"
            >
              {t("explore")} <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/16 bg-white/8 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-gold-300/50"
            >
              <Play className="h-4 w-4 fill-current" /> {t("call")}
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.36em] text-white/46 md:flex">
        <span className="h-px w-14 bg-white/24" /> {t("heroScroll")} <span className="h-px w-14 bg-white/24" />
      </div>
    </section>
  );
}
