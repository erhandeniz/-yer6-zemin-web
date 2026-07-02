"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projects } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const imageAlt = "imageAlt" in project ? (project.imageAlt as string) : t(`${project.key}_title`);

  return (
    <article className="group gsap-reveal overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045]">
      <div className="media-grain relative h-72 overflow-hidden">
        <img
          src={project.image}
          alt={imageAlt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div>
            <span className="rounded-full border border-gold-300/30 bg-obsidian/60 px-3 py-1 text-xs text-gold-100 backdrop-blur">
              {project.category}
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-white">{t(`${project.key}_title`)}</h3>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-300 text-obsidian transition group-hover:rotate-45"
            aria-label={`${t(`${project.key}_title`)} details`}
          >
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-white/46">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-gold-200" /> {project.location}
          </span>
          <span>{project.year}</span>
          <span>{project.metric}</span>
        </div>
        <p className="mt-4 text-sm leading-7 text-white/62">{t(`${project.key}_summary`)}</p>
      </div>
    </article>
  );
}
