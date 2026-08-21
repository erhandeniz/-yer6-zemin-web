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
export type VideoEmbedItem = {
  videoId: string;
  title: string;
  caption?: string;
  orientation?: "landscape" | "portrait";
};

export function VideoEmbed({
  videoId,
  title,
  caption,
  orientation = "landscape",
  videos
}: {
  videoId?: string;
  title?: string;
  caption?: string;
  orientation?: "landscape" | "portrait";
  videos?: VideoEmbedItem[];
}) {
  const videoList: VideoEmbedItem[] =
    videos && videos.length > 0
      ? videos
      : videoId && title
      ? [{ videoId, title, caption, orientation }]
      : [];

  const [activeIdx, setActiveIdx] = useState(0);
  const [active, setActive] = useState(false);

  if (videoList.length === 0) return null;

  const current = videoList[activeIdx] ?? videoList[0];
  const thumbnail = `https://i.ytimg.com/vi/${current.videoId}/hqdefault.jpg`;
  const frameClass =
    current.orientation === "portrait"
      ? "relative mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-[1.5rem]"
      : "relative aspect-video w-full overflow-hidden rounded-[1.5rem]";

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
    setActive(true);
  };

  return (
    <figure className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      {videoList.length > 1 && (
        <div className="mb-5 flex flex-wrap gap-2">
          {videoList.map((v, idx) => (
            <button
              key={v.videoId}
              type="button"
              onClick={() => handleSelect(idx)}
              className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition flex items-center gap-2 border ${
                activeIdx === idx
                  ? "bg-gold-400/20 text-gold-200 border-gold-400/40 shadow-lg shadow-gold-900/20"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Play className="h-3 w-3 fill-current text-gold-200" />
              <span>{v.title}</span>
            </button>
          ))}
        </div>
      )}

      <div className={frameClass}>
        {active ? (
          <iframe
            key={current.videoId}
            src={`https://www.youtube-nocookie.com/embed/${current.videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={current.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`${current.title} — videoyu oynat`}
            className="group absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnail}
              alt={current.title}
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
        <p className="text-lg font-semibold text-white">{current.title}</p>
        {current.caption ? <p className="mt-2 text-sm leading-7 text-white/62">{current.caption}</p> : null}
      </figcaption>
    </figure>
  );
}
