"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeVideoPlayerProps {
  /** YouTube video ID (Default: HcMN8T1X4d8 - YER6 Jet Grout Saha Videosu) */
  videoId?: string;
  title: string;
  description: string;
}

export function YouTubeVideoPlayer({
  videoId = "HcMN8T1X4d8",
  title,
  description
}: YouTubeVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": [
      `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    ],
    "uploadDate": "2026-01-01T08:00:00+03:00",
    "embedUrl": `https://www.youtube-nocookie.com/embed/${videoId}`,
    "publisher": {
      "@type": "Organization",
      "name": "YER6 Zemin Güçlendirme & Geoteknik Mühendislik",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.yer6zemin.com.tr/icon.png"
      }
    }
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <div className="flex items-center gap-3 mb-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600/20 text-red-400 border border-red-500/30">
          <Play className="h-4 w-4 fill-current ml-0.5" />
        </span>
        <div>
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <p className="text-xs text-white/55">{description}</p>
        </div>
      </div>
      
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-2xl">
        {isPlaying ? (
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`${title} - Videoyu Oynat`}
            className="group absolute inset-0 flex h-full w-full items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailUrl}
              alt={title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/30" />
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition group-hover:scale-110">
              <Play className="h-7 w-7 fill-current ml-1" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
