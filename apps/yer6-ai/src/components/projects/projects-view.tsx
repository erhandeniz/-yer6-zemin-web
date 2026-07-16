"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  FileText,
  Grid2X2,
  List,
  MapPin,
  MoreHorizontal,
  Plus,
  Search,
  SlidersHorizontal
} from "lucide-react";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { engineeringCategories, projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";
import { useAITranslation } from "@/components/i18n-provider";

export function ProjectsView() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All methods");
  const [view, setView] = useState<"grid" | "list">("grid");
  const setUploadOpen = useAppStore((state) => state.setUploadOpen);
  const setSelectedProjectId = useAppStore((state) => state.setSelectedProjectId);
  const { t } = useAITranslation();
  const pathname = usePathname();
  const isDemo = pathname.startsWith("/demo");
  const chatHref = isDemo ? "/demo/chat" : "/chat";

  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          (category === "All methods" || project.category === category) &&
          `${project.name} ${project.location} ${project.id}`.toLowerCase().includes(query.toLowerCase())
      ),
    [category, query]
  );

  return (
    <div className="mx-auto w-full max-w-[1540px] px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="technical-label text-primary/65">{t("Portfolio")}</p><h1 className="mt-2 text-xl font-semibold sm:text-2xl">{t("Projects")}</h1><p className="mt-1.5 text-xs text-white/38">{t("Manage engineering data, analysis status and deliverables.")}</p></div>
        <Button onClick={() => setUploadOpen(true)}><Plus className="size-4" />{t("New project")}</Button>
      </div>

      <div className="mt-6 flex flex-col gap-2 rounded-lg border border-white/[0.07] bg-[#0f0f0f] p-2.5 md:flex-row md:items-center">
        <label className="relative min-w-0 flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/25" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} className="h-10 w-full rounded-md border border-white/[0.075] bg-white/[0.025] pl-9 pr-3 text-xs text-white outline-none placeholder:text-white/24 focus:border-primary/35" placeholder={t("Search project, location or ID")} aria-label={t("Search project, location or ID")} />
        </label>
        <label className="relative">
          <SlidersHorizontal className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-white/25" />
          <select value={category} onChange={(event) => setCategory(event.target.value)} className="h-10 w-full appearance-none rounded-md border border-white/[0.075] bg-[#141414] pl-9 pr-9 text-xs text-white/60 outline-none focus:border-primary/35 md:w-52">
            <option value="All methods">{t("All methods")}</option>{engineeringCategories.map((item) => <option key={item} value={item}>{t(item)}</option>)}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-white/25" />
        </label>
        <div className="flex rounded-md border border-white/[0.075] bg-black/20 p-0.5" aria-label={t("Project view")}>
          <Button variant="ghost" size="icon" className={cn("size-8 min-h-8", view === "grid" && "bg-white/[0.07] text-primary")} onClick={() => setView("grid")} aria-label={t("Grid view")}><Grid2X2 className="size-3.5" /></Button>
          <Button variant="ghost" size="icon" className={cn("size-8 min-h-8", view === "list" && "bg-white/[0.07] text-primary")} onClick={() => setView("list")} aria-label={t("List view")}><List className="size-3.5" /></Button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between"><p className="text-[11px] text-white/28">{filtered.length} {t("projects")}</p><p className="text-[11px] text-white/22">{t("Updated just now")}</p></div>

      {view === "grid" ? (
        <div className="mt-3 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, index) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .04 }} className="panel group overflow-hidden">
              <div className="relative aspect-[16/7] overflow-hidden bg-white/[0.025]">
                {project.image ? <Image src={project.image} alt={`${project.name} project site`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale-[25%] transition-transform duration-500 group-hover:scale-[1.025]" /> : null}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent" />
                <span className="absolute left-3 top-3"><Badge tone={project.status === "Complete" ? "green" : project.status === "Review" ? "blue" : "gold"}>{t(project.status)}</Badge></span>
                <Button variant="secondary" size="icon" className="absolute right-3 top-3 bg-black/55" aria-label={t("Project options")}><MoreHorizontal className="size-4" /></Button>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className="technical-label text-white/24">{project.id}</p><h2 className="mt-1.5 truncate text-sm font-semibold text-white/82">{project.name}</h2></div><Button variant="ghost" size="icon" asChild><Link href={chatHref} onClick={() => setSelectedProjectId(project.id)} aria-label={`Open ${project.name}`}><ArrowUpRight className="size-4" /></Link></Button></div>
                <div className="mt-3 flex items-center gap-4 text-[11px] text-white/32"><span className="flex items-center gap-1.5"><MapPin className="size-3" />{project.location}</span><span className="flex items-center gap-1.5"><FileText className="size-3" />{project.files} files</span></div>
                <div className="mt-4"><div className="mb-2 flex items-center justify-between text-[10px]"><span className="text-white/28">{t("Analysis progress")}</span><span className="font-mono text-white/46">{project.progress}%</span></div><Progress value={project.progress} /></div>
                <div className="mt-4 flex items-center justify-between border-t border-white/[0.055] pt-3"><span className="text-[10px] text-white/22">{t("Updated")} {project.updated}</span><span className="text-[10px] text-primary/60">{t(project.category)}</span></div>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="panel mt-3 overflow-x-auto">
          <table className="w-full min-w-[760px] text-left"><thead className="border-b border-white/[0.065] text-[10px] uppercase text-white/24"><tr><th className="px-5 py-3 font-medium">{t("Project")}</th><th className="px-4 py-3 font-medium">{t("Method")}</th><th className="px-4 py-3 font-medium">{t("Status")}</th><th className="px-4 py-3 font-medium">{t("Progress")}</th><th className="px-4 py-3 font-medium">{t("Updated")}</th><th className="w-12" /></tr></thead><tbody className="divide-y divide-white/[0.055]">{filtered.map((project) => <tr key={project.id} className="hover:bg-white/[0.02]"><td className="px-5 py-4"><p className="text-xs font-medium text-white/70">{project.name}</p><p className="mt-1 text-[10px] text-white/24">{project.id} · {project.location}</p></td><td className="px-4 text-xs text-white/38">{t(project.category)}</td><td className="px-4"><Badge tone={project.status === "Complete" ? "green" : project.status === "Review" ? "blue" : "gold"}>{t(project.status)}</Badge></td><td className="px-4"><div className="w-28"><Progress value={project.progress} /></div></td><td className="px-4 text-[11px] text-white/28">{project.updated}</td><td><Button variant="ghost" size="icon"><MoreHorizontal className="size-4" /></Button></td></tr>)}</tbody></table>
        </div>
      )}
    </div>
  );
}
