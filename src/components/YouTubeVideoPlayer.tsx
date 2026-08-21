"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export interface VideoItem {
  id: string;
  title: string;
  location?: string;
  description?: string;
}

interface YouTubeVideoPlayerProps {
  videoId?: string;
  videos?: VideoItem[];
  title: string;
  description: string;
}

export function YouTubeVideoPlayer({
  videoId = "HcMN8T1X4d8",
  videos,
  title,
  description
}: YouTubeVideoPlayerProps) {
  const videoList: VideoItem[] = videos && videos.length > 0
    ? videos
    : [{ id: videoId, title, description }];

  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeVideo = videoList[activeIdx] ?? videoList[0];
  const activeId = activeVideo.id;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${activeId}?autoplay=1&rel=0&modestbranding=1`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${activeId}/hqdefault.jpg`;

  const videoSchemas = videoList.map((v) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": v.title,
    "description": v.description || description,
    "thumbnailUrl": [
      `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`
    ],
    "uploadDate": "2026-08-16T08:00:00+03:00",
    "embedUrl": `https://www.youtube-nocookie.com/embed/${v.id}`,
    "contentUrl": `https://www.youtube.com/watch?v=${v.id}`,
    "publisher": {
      "@type": "Organization",
      "name": "Yer6 Zemin Geoteknik Mühendislik",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.yer6zemin.com.tr/icon.png"
      }
    }
  }));

  const handleSelectVideo = (idx: number) => {
    setActiveIdx(idx);
    setIsPlaying(true);
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
      {videoSchemas.map((schema, sIdx) => (
        <script
          key={sIdx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="flex items-center gap-3 mb-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600/20 text-red-400 border border-red-500/30">
          <Play className="h-4 w-4 fill-current ml-0.5" />
        </span>
        <div>
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <p className="text-xs text-white/55">{description}</p>
        </div>
      </div>

      {videoList.length > 1 && (
        <div className="mb-5 flex flex-wrap gap-2">
          {videoList.map((v, idx) => (
            <button
              key={v.id}
              type="button"
              onClick={() => handleSelectVideo(idx)}
              className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition flex items-center gap-2 border ${
                activeIdx === idx
                  ? "bg-gold-400/20 text-gold-200 border-gold-400/40 shadow-lg shadow-gold-900/20"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Play className="h-3 w-3 fill-current text-red-400" />
              <span>{v.location ? `${v.location} — ` : ""}{v.title}</span>
            </button>
          ))}
        </div>
      )}
      
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-2xl">
        {isPlaying ? (
          <iframe
            key={activeId}
            src={embedUrl}
            title={activeVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`${activeVideo.title} - Videoyu Oynat`}
            className="group absolute inset-0 flex h-full w-full items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailUrl}
              alt={activeVideo.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/30" />
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition group-hover:scale-110">
              <Play className="h-7 w-7 fill-current ml-1" />
            </span>
            <div className="absolute bottom-4 left-4 right-4 z-10 rounded-xl bg-black/60 backdrop-blur-md px-4 py-2 text-left border border-white/10">
              <p className="text-xs font-semibold text-white truncate">{activeVideo.title}</p>
              {activeVideo.location && (
                <p className="text-[11px] text-gold-300">{activeVideo.location}</p>
              )}
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
