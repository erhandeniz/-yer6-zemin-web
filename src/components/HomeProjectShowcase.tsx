"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin, Pause, Play } from "lucide-react";
import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/components/LanguageProvider";

type Project = (typeof projects)[number];

export function HomeProjectShowcase() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 17 projeyi 2'şerli sayfalara bölüyoruz (9 sayfa)
  const pages = useMemo(() => {
    const chunked: Project[][] = [];
    for (let i = 0; i < projects.length; i += 2) {
      chunked.push(projects.slice(i, i + 2));
    }
    return chunked;
  }, []);

  const totalPages = pages.length;

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  // Otomatik rotasyon: ilk sayfa yüklemesinden sonra devreye girer
  useEffect(() => {
    if (isPaused) return;
    let intervalTimer: ReturnType<typeof setInterval> | undefined;
    const startTimer = setTimeout(() => {
      intervalTimer = setInterval(() => {
        nextPage();
      }, 4200);
    }, 6000);
    return () => {
      clearTimeout(startTimer);
      if (intervalTimer) clearInterval(intervalTimer);
    };
  }, [isPaused, nextPage]);

  return (
    <div
      className="mt-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Üst Kontrol Çubuğu (Sayaç ve Yön Okları) */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 rounded-full bg-gold-300 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-200">
            Saha Referansları ({currentPage + 1} / {totalPages})
          </span>
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className="text-white/40 hover:text-gold-200 transition text-xs flex items-center gap-1 ml-2"
            title={isPaused ? "Otomatik Geçişi Başlat" : "Otomatik Geçişi Duraklat"}
            aria-label={isPaused ? "Otomatik Geçişi Başlat" : "Otomatik Geçişi Duraklat"}
          >
            {isPaused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
          </button>
        </div>

        {/* Sağ/Sol Okları */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevPage}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white transition hover:border-gold-300/40 hover:bg-gold-300 hover:text-obsidian"
            aria-label="Önceki Projeler"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={nextPage}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white transition hover:border-gold-300/40 hover:bg-gold-300 hover:text-obsidian"
            aria-label="Sonraki Projeler"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Kayar Kart Vitrini (Tüm 17 Proje HTML içinde yer alır -> Googlebot hepsini okur) */}
      <div className="relative overflow-hidden rounded-[2.5rem]">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {pages.map((pair, pageIdx) => (
            <div
              key={`page-${pageIdx}`}
              className="grid w-full shrink-0 gap-6 lg:grid-cols-2"
            >
              {pair.map((project) => (
                <div key={project.slug} className="min-w-0">
                  <ProjectCard project={project} />
                </div>
              ))}
              {/* Tek kalan son sayfa olursa dengeli görünüm için boşluk koruyucu */}
              {pair.length === 1 && (
                <div className="hidden lg:flex flex-col justify-center items-center rounded-[2rem] border border-dashed border-white/10 p-8 text-center bg-white/[0.015]">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-200 mb-3">
                    YER6 Geoteknik Arşivi
                  </span>
                  <p className="text-sm text-white/60 max-w-sm mb-6">
                    Türkiye genelinde tamamlanan 17+ büyük ölçekli derin temel, iksa ve zemin iyileştirme referansımızı inceleyin.
                  </p>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-full bg-gold-300 px-5 py-2.5 text-xs font-semibold text-obsidian transition hover:bg-gold-200"
                  >
                    {t("homeProjectGallery")} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Alt Sayfa Gösterge Noktaları (Dots) */}
      <div className="mt-8 flex justify-center items-center gap-2">
        {pages.map((_, idx) => (
          <button
            key={`dot-${idx}`}
            type="button"
            onClick={() => setCurrentPage(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentPage
                ? "w-8 bg-gold-300"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Proje sayfası ${idx + 1}`}
          />
        ))}
      </div>

      {/* Googlebot ve Kullanıcı İçin Hızlı Referans Link Dizini (Internal Link Equity) */}
      <div className="mt-10 border-t border-white/10 pt-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Tüm Saha Referansları
          </span>
          <span className="text-xs text-gold-200/80">
            17 Aktif Proje
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {projects.map((proj) => (
            <Link
              key={`quick-${proj.slug}`}
              href={`/projects/${proj.slug}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70 transition hover:border-gold-300/40 hover:text-gold-100"
            >
              <MapPin className="h-3 w-3 text-gold-300" />
              <span className="font-medium text-white/90">{proj.location}:</span>
              <span>{proj.title.split(" ").slice(0, 4).join(" ")}...</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
