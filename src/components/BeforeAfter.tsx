"use client";

import { useState } from "react";

export function BeforeAfter() {
  const [position, setPosition] = useState(54);

  return (
    <div className="gsap-reveal overflow-hidden rounded-[2rem] border border-white/10 bg-obsidian shadow-glass">
      <div className="relative h-[420px] overflow-hidden">
        <div className="absolute inset-0 construction-texture" />
        <div className="absolute inset-0 opacity-80" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <div className="h-full w-full bg-[radial-gradient(circle_at_45%_35%,rgba(245,194,67,0.28),transparent_20rem),linear-gradient(135deg,#322416,#090909_66%)]" />
          <div className="absolute inset-x-10 bottom-10 grid grid-cols-5 gap-4">
            {Array.from({ length: 20 }).map((_, index) => (
              <span key={index} className="h-16 rounded-full border border-gold-300/35 bg-gold-300/15" />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent),repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_42px)]" />
        <div className="absolute bottom-7 left-7 rounded-full bg-obsidian/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/70 backdrop-blur">
          Iyilestirme oncesi
        </div>
        <div className="absolute bottom-7 right-7 rounded-full bg-gold-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-obsidian">
          Jet grout sonrasi
        </div>
        <div className="absolute inset-y-0 w-px bg-gold-200 shadow-gold" style={{ left: `${position}%` }} />
        <div
          className="absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold-200 bg-obsidian text-gold-100"
          style={{ left: `${position}%` }}
        >
          ↔
        </div>
      </div>
      <div className="border-t border-white/10 p-5">
        <input
          aria-label="Before after comparison"
          type="range"
          min="8"
          max="92"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="w-full accent-gold-300"
        />
      </div>
    </div>
  );
}
