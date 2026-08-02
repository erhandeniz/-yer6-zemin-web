"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * YouTube video gömme bloğu — mevcut kart tasarım diliyle (rounded-[2rem],
 * border-white/10, bg-white/[0.03]) uyumludur; sayfa yapısını değiştirmez.
 *
 * Performans: iframe SAYFA AÇILIRKEN YÜKLENMEZ. Önce hafif bir kapak görseli
 * gösterilir; kullanıcı oynat'a bastığında iframe eklenir. Böylece Core Web
 * Vitals ve sayfa hızı korunur (YouTube iframe'i tek başına ~1 MB yükler).
 */
export function VideoEmbed({
  videoId,
  title,
  caption,
  /** Dikey (Shorts) çekimlerde 9:16, yatay çekimlerde 16:9 */
  orientation = "landscape"
}: {
  videoId: string;
  title: string;
  caption?: string;
  orientation?: "landscape" | "portrait";
}) {
  const [active, setActive] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const frameClass =
    orientation === "portrait"
      ? "relative mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-[1.5rem]"
      : "relative aspect-video w-full overflow-hidden rounded-[1.5rem]";

  return (
    <figure className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <div className={frameClass}>
        {active ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`${title} — videoyu oynat`}
            className="group absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-gold-300 text-obsidian shadow-2xl transition group-hover:scale-110">
                <Play className="ml-1 h-7 w-7 fill-current" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-5">
        <p className="text-lg font-semibold text-white">{title}</p>
        {caption ? <p className="mt-2 text-sm leading-7 text-white/62">{caption}</p> : null}
      </figcaption>
    </figure>
  );
}
