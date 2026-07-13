"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  MessageSquareText,
  MoreHorizontal,
  Plus,
  ShieldAlert,
  Sparkles,
  Upload
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { engineeringCategories, metrics, projects } from "@/lib/data";
import { useAppStore } from "@/store/app-store";
import { useAITranslation } from "@/components/i18n-provider";

const riskItems = [
  { name: "Liquefaction potential", score: 78, tone: "bg-amber-400" },
  { name: "Differential settlement", score: 46, tone: "bg-sky-400" },
  { name: "Bearing capacity", score: 32, tone: "bg-emerald-400" }
];

const activity = [
  { icon: FileText, title: "BH-03 borehole log processed", meta: "Duzce Industrial Campus · 8 min ago", tone: "text-sky-300 bg-sky-400/10" },
  { icon: Sparkles, title: "Ground improvement analysis completed", meta: "Yunuseli Residences · 1 hr ago", tone: "text-primary bg-primary/10" },
  { icon: CheckCircle2, title: "Technical review approved", meta: "Bozuyuk Cold Storage · Yesterday", tone: "text-emerald-300 bg-emerald-400/10" }
];

function statusTone(status: (typeof projects)[number]["status"]) {
  if (status === "Complete") return "green" as const;
  if (status === "Review") return "blue" as const;
  return "gold" as const;
}

export function Dashboard() {
  const setUploadOpen = useAppStore((state) => state.setUploadOpen);
  const { t } = useAITranslation();

  return (
    <div className="mx-auto w-full max-w-[1540px] px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-1.5 flex items-center gap-2 text-xs text-white/32">
            <span>{t("Workspace")}</span><ChevronRight className="size-3" /><span className="text-white/55">{t("Overview")}</span>
          </div>
          <h1 className="text-xl font-semibold text-white sm:text-2xl">{t("Engineering overview")}</h1>
          <p className="mt-1.5 max-w-2xl text-xs leading-5 text-white/40">{t("Projects, subsurface evidence and AI-assisted decisions across your active portfolio.")}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => setUploadOpen(true)}><Upload className="size-4" />{t("Upload files")}</Button>
          <Button asChild><Link href="/chat"><Plus className="size-4" />{t("New analysis")}</Link></Button>
        </div>
      </motion.div>

      <section className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4" aria-label={t("Workspace metrics")}>
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className="panel top-rule min-h-[126px] p-4 sm:p-5"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs text-white/38">{t(metric.label)}</span>
                <Icon className="size-4 text-primary/65" strokeWidth={1.7} />
              </div>
              <p className="mt-3 text-2xl font-semibold tabular-nums text-white">{metric.value}</p>
              <p className="mt-1 text-[11px] text-white/30">{t(metric.delta)}</p>
            </motion.div>
          );
        })}
      </section>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,.8fr)]">
        <section className="panel overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/[0.065] px-4 py-3.5 sm:px-5">
            <div>
              <h2 className="text-sm font-semibold text-white/90">{t("Active projects")}</h2>
              <p className="mt-0.5 text-[11px] text-white/30">{t("Live engineering status and document processing")}</p>
            </div>
            <Button variant="ghost" size="sm" asChild><Link href="/projects">{t("View all")}<ArrowRight className="size-3.5" /></Link></Button>
          </div>
          <div className="divide-y divide-white/[0.055]">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects?project=${project.id}`}
                className="grid min-h-[92px] grid-cols-[52px_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 transition-colors hover:bg-white/[0.025] sm:grid-cols-[60px_minmax(170px,1.25fr)_minmax(130px,.8fr)_100px_34px] sm:gap-4 sm:px-5"
              >
                <span className="relative size-[52px] overflow-hidden rounded-md border border-white/10 bg-white/5 sm:size-[60px]">
                  {project.image ? <Image src={project.image} alt="" fill sizes="60px" className="object-cover grayscale-[25%]" /> : null}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-xs font-medium text-white/82 sm:text-[13px]">{project.name}</span>
                  <span className="mt-1 block truncate text-[11px] text-white/30">{project.id} · {project.location}</span>
                </span>
                <span className="hidden min-w-0 sm:block">
                  <span className="block truncate text-[11px] text-white/42">{t(project.category)}</span>
                  <span className="mt-1 block text-[10px] text-white/25">{project.files} {t("documents")}</span>
                </span>
                <span className="hidden sm:block"><Badge tone={statusTone(project.status)}>{t(project.status)}</Badge></span>
                <MoreHorizontal className="size-4 text-white/25" />
              </Link>
            ))}
          </div>
        </section>

        <section className="panel top-rule flex min-h-[350px] flex-col overflow-hidden">
          <div className="border-b border-white/[0.065] px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-md bg-primary/10 text-primary"><Sparkles className="size-3.5" /></span>
              <div>
                <h2 className="text-sm font-semibold text-white/90">{t("AI Engineer")}</h2>
                <p className="text-[10px] text-emerald-300/70">{t("Online · Project context loaded")}</p>
              </div>
            </div>
          </div>
          <div className="flex-1 p-5">
            <p className="technical-label text-white/28">{t("Latest finding")}</p>
            <p className="mt-3 text-sm leading-6 text-white/72">{t("Loose silty sand in the upper stratum may govern settlement. Verify the jet grout trial column UCS before finalizing the 1.8 m grid.")}</p>
            <div className="mt-4 rounded-md border border-primary/15 bg-primary/[0.045] p-3">
              <div className="flex items-center gap-2 text-xs font-medium text-primary/85"><ShieldAlert className="size-3.5" />{t("Engineering review required")}</div>
              <p className="mt-1.5 text-[11px] leading-4 text-white/35">{t("Groundwater elevation differs between BH-02 and BH-03.")}</p>
            </div>
          </div>
          <div className="border-t border-white/[0.065] p-3">
            <Button variant="secondary" className="w-full" asChild><Link href="/chat"><MessageSquareText className="size-4" />{t("Open engineering chat")}</Link></Button>
          </div>
        </section>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <section className="panel p-5">
          <div className="flex items-center justify-between">
            <div><h2 className="text-sm font-semibold text-white/90">{t("Project risk profile")}</h2><p className="mt-1 text-[11px] text-white/30">Duzce Industrial Campus · {t("AI screening")}</p></div>
            <Badge tone="neutral">{t("Preliminary")}</Badge>
          </div>
          <div className="mt-6 space-y-4">
            {riskItems.map((item) => (
              <div key={item.name}>
                <div className="mb-2 flex items-center justify-between text-[11px]"><span className="text-white/48">{t(item.name)}</span><span className="font-mono text-white/58">{item.score}/100</span></div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.055]"><motion.div initial={{ width: 0 }} animate={{ width: `${item.score}%` }} transition={{ duration: .7 }} className={`h-full rounded-full ${item.tone}`} /></div>
              </div>
            ))}
          </div>
        </section>
        <section className="panel overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/[0.065] px-5 py-4"><div><h2 className="text-sm font-semibold text-white/90">{t("Recent activity")}</h2><p className="mt-1 text-[11px] text-white/30">{t("Updates across your workspace")}</p></div><Clock3 className="size-4 text-white/25" /></div>
          <div className="divide-y divide-white/[0.055]">
            {activity.map((item) => {
              const Icon = item.icon;
              return <div key={item.title} className="flex items-center gap-3 px-5 py-3.5"><span className={`grid size-8 shrink-0 place-items-center rounded-md ${item.tone}`}><Icon className="size-3.5" /></span><div className="min-w-0"><p className="truncate text-xs font-medium text-white/68">{t(item.title)}</p><p className="mt-1 truncate text-[10px] text-white/25">{item.meta}</p></div></div>;
            })}
          </div>
        </section>
      </div>

      <section className="mt-4 overflow-hidden rounded-lg border border-white/[0.065] bg-[#0e0e0e]">
        <div className="flex items-center border-b border-white/[0.055] px-5 py-3"><p className="technical-label text-white/28">{t("Engineering capabilities")}</p><span className="ml-auto text-[10px] text-white/20">18 {t("methods")}</span></div>
        <div className="flex gap-2 overflow-x-auto p-3.5">
          {engineeringCategories.map((category) => <span key={category} className="shrink-0 rounded-md border border-white/[0.065] bg-white/[0.025] px-3 py-2 text-[11px] text-white/42">{t(category)}</span>)}
        </div>
      </section>
    </div>
  );
}
