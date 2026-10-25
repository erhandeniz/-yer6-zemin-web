"use client";

import { useState } from "react";
import type { KnowledgeSection } from "@/types/knowledge";
import { BookOpen, ChevronDown, ChevronRight, Layers, Search, Sparkles, Target } from "lucide-react";

export function EncyclopediaHub({ sections }: { sections: KnowledgeSection[] }) {
  const [filter, setFilter] = useState("");

  if (!sections || sections.length === 0) return null;

  const filteredSections = filter.trim()
    ? sections.filter(
        (s) =>
          s.title.toLowerCase().includes(filter.toLowerCase()) ||
          s.blocks.some(
            (b) =>
              ("content" in b && typeof b.content === "string" && b.content.toLowerCase().includes(filter.toLowerCase())) ||
              ("title" in b && typeof b.title === "string" && b.title.toLowerCase().includes(filter.toLowerCase()))
          )
      )
    : sections;

  const handleCardClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add("ring-2", "ring-gold-300", "ring-offset-8", "ring-offset-obsidian");
      setTimeout(() => {
        el.classList.remove("ring-2", "ring-gold-300", "ring-offset-8", "ring-offset-obsidian");
      }, 2500);
    }
  };

  return (
    <div className="mb-14 rounded-[2rem] border border-gold-300/30 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-2xl sm:p-8">
      {/* Üst Başlık ve Arama */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gold-400/20 text-gold-300">
              <Layers className="h-3.5 w-3.5" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
              Geoteknik Veri Merkezi
            </span>
          </div>
          <h2 className="mt-1.5 text-2xl font-bold text-white sm:text-3xl">
            Ansiklopedi & Karar Fihristi
          </h2>
          <p className="mt-1 text-xs text-white/60 sm:text-sm">
            Tüm teknik yöntemleri, tasarım kriterlerini ve saha testlerini doğrudan kartlara tıklayarak inceleyin.
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Konu veya terim ara..."
            className="w-full rounded-xl border border-white/15 bg-white/[0.05] py-2 pl-9 pr-3 text-xs text-white placeholder-white/40 outline-none transition focus:border-gold-300 focus:bg-white/[0.08]"
          />
        </div>
      </div>

      {/* Ansiklopedi Kartları Grid'i */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSections.map((section, idx) => {
          // İlk paragrafı kısa özet olarak al
          const firstPara = section.blocks.find((b) => b.type === "paragraph" || b.type === "note");
          const previewText =
            firstPara && "content" in firstPara && typeof firstPara.content === "string"
              ? firstPara.content.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").slice(0, 110) + "..."
              : "Detaylı mühendislik hesapları, saha uygulama aşamaları ve kalite standartları.";

          return (
            <div
              key={section.id}
              onClick={() => handleCardClick(section.id)}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-gold-300/60 hover:bg-gold-400/[0.06] hover:shadow-[0_10px_30px_rgba(216,164,45,0.15)] cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold text-gold-300/70 group-hover:text-gold-200">
                    BÖLÜM {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-white/40 transition group-hover:bg-gold-300/20 group-hover:text-gold-200">
                    <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>

                <h3 className="mt-2.5 text-sm font-semibold text-white group-hover:text-gold-100 line-clamp-2">
                  {section.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-white/55 group-hover:text-white/75">
                  {previewText}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1.5 border-t border-white/5 pt-3 text-[11px] font-medium text-gold-300/80 group-hover:text-gold-200">
                <span>Bölümü İncele</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredSections.length === 0 && (
        <div className="py-12 text-center text-sm text-white/50">
          Aramanızla eşleşen bölüm bulunamadı. Lütfen farklı bir terim deneyin.
        </div>
      )}
    </div>
  );
}
