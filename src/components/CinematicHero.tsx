"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { ParticleField } from "@/components/ParticleField";
import { useLanguage } from "@/components/LanguageProvider";

// Hero görselinin optimize edilmiş sürümleri. Orijinal dosya
// (yer6-construction-hero.jpg) kaynak olarak korunur, silinmez.
const HERO_LCP_MOBILE = "/images/site/yer6-construction-hero-640.avif";
const MEDIA_VERSION = "20260806";

export function CinematicHero() {
  const { t } = useLanguage();
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // Mobilde video zaten CSS ile gizlidir. Gizli masaüstü videosunu mobil
    // bağlantıya hiç indirmeyerek görüntüyü ve masaüstü video kalitesini aynen
    // korur, yalnızca gereksiz ağ trafiğini önleriz.
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    const revealVideo = () => setVideoReady(true);
    const events: Array<keyof WindowEventMap> = ["pointerdown", "keydown", "scroll"];
    events.forEach((event) => window.addEventListener(event, revealVideo, { once: true, passive: true }));
    const timer = window.setTimeout(revealVideo, 6000);

    return () => {
      window.clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, revealVideo));
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 dark-theme">
      <div className="absolute inset-0">
        {/* LCP elemanı (mobil). Görünüm birebir aynıdır; yalnızca aynı görselin
            daha küçük ve modern formatlı sürümleri sunulur. AVIF > WebP > JPEG
            sırasıyla tarayıcı desteğine göre seçilir. */}
        <picture className="md:hidden">
          <source
            type="image/avif"
            srcSet="/images/site/yer6-construction-hero-640.avif 640w, /images/site/yer6-construction-hero-768.avif 768w, /images/site/yer6-construction-hero-960.avif 960w"
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet="/images/site/yer6-construction-hero-640.webp 640w, /images/site/yer6-construction-hero-768.webp 768w, /images/site/yer6-construction-hero-960.webp 960w"
            sizes="100vw"
          />
          <img
            src="/images/site/yer6-construction-hero-640.jpg"
            srcSet="/images/site/yer6-construction-hero-640.jpg 640w, /images/site/yer6-construction-hero-768.jpg 768w, /images/site/yer6-construction-hero-960.jpg 960w"
            sizes="100vw"
            alt="YER6 zemin güçlendirme ve temel mühendisliği saha uygulaması"
            className="h-full w-full object-cover opacity-42"
            width={640}
            height={427}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <video
          className="hidden h-full w-full object-cover opacity-42 md:block"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          src={videoReady ? `/videos/yer6-pile-installation.mp4?v=${MEDIA_VERSION}` : undefined}
          poster={`/images/site/yer6-construction-hero-1400-poster.avif?v=${MEDIA_VERSION}`}
        >
          <track
            default
            kind="captions"
            src={`/captions/hero-construction-tr.vtt?v=${MEDIA_VERSION}`}
            srcLang="tr"
            label="Türkçe"
          />
        </video>
        <div className="absolute inset-0 construction-texture opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/72 via-obsidian/58 to-obsidian" />
      </div>
      <ParticleField density={520} />

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
          <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
            {t("slogan").split(" ").slice(0, 2).join(" ")}{" "}
            <span className="gold-text">{t("slogan").split(" ").slice(2, 4).join(" ")}</span>{" "}
            {t("slogan").split(" ").slice(4).join(" ")}
          </h1>
          {/* Bu paragraf mobil Lighthouse ölçümünde LCP öğesidir. İlk HTML
              boyamasında görünür tutulur; yerleşim ve nihai görünüm değişmez. */}
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
            {t("heroLead")}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.78 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-300 px-6 py-4 text-sm font-semibold text-obsidian shadow-gold transition hover:bg-gold-200 sm:w-auto"
            >
              {t("explore")} <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/16 bg-white/8 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-gold-300/50 sm:w-auto"
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
