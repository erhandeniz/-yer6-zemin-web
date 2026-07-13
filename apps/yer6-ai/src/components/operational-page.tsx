"use client";

import { BarChart3, CheckCircle2, File, FileImage, FileText, Filter, Plus, Search, Settings2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAppStore } from "@/store/app-store";
import { useAITranslation } from "@/components/i18n-provider";

const documents = [
  ["BH-03_Borehole_Log.pdf", "PDF", "Duzce Industrial Campus", "Ready", "8.4 MB"],
  ["Foundation_Plan_RevC.dwg", "DWG", "Duzce Industrial Campus", "Indexed", "24.1 MB"],
  ["Lab_Results_June.pdf", "PDF", "Yunuseli Residences", "Ready", "3.2 MB"],
  ["Site_Model.ifc", "IFC", "Bozuyuk Cold Storage", "Processing", "86.7 MB"]
];

export function OperationalPage({ section }: { section: "documents" | "reports" | "team" | "settings" }) {
  const { t } = useAITranslation();
  const setUploadOpen = useAppStore((state) => state.setUploadOpen);
  const config = {
    documents: { eyebrow: "Knowledge base", title: "Documents", description: "Search, inspect and manage project source files.", icon: FileText },
    reports: { eyebrow: "Engineering output", title: "Reports", description: "Review AI-assisted analyses and issue-controlled deliverables.", icon: BarChart3 },
    team: { eyebrow: "Organization", title: "Team", description: "Coordinate engineers, reviewers and project responsibilities.", icon: Users },
    settings: { eyebrow: "Workspace", title: "Settings", description: "Configure engineering defaults, security and integrations.", icon: Settings2 }
  }[section];
  const Icon = config.icon;

  return (
    <div className="mx-auto w-full max-w-[1540px] px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
      <div className="flex items-end justify-between gap-4"><div><p className="technical-label text-primary/65">{t(config.eyebrow)}</p><h1 className="mt-2 text-xl font-semibold sm:text-2xl">{t(config.title)}</h1><p className="mt-1.5 text-xs text-white/38">{t(config.description)}</p></div><Button onClick={() => setUploadOpen(true)}><Plus className="size-4" />{t(section === "documents" ? "Upload files" : section === "reports" ? "New report" : "New item")}</Button></div>
      <section className="panel mt-6 overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-white/[0.065] p-4 sm:flex-row sm:items-center"><label className="relative min-w-0 flex-1"><Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-white/25" /><input className="h-9 w-full rounded-md border border-white/[0.075] bg-white/[0.025] pl-9 pr-3 text-xs outline-none placeholder:text-white/22" placeholder={t(`Search ${config.title.toLowerCase()}`)} aria-label={t(`Search ${config.title.toLowerCase()}`)} /></label><Button variant="secondary" size="sm"><Filter className="size-3.5" />{t("Filter")}</Button></div>
        {section === "documents" ? <div className="overflow-x-auto"><table className="w-full min-w-[700px] text-left"><thead className="border-b border-white/[0.055] text-[10px] uppercase text-white/22"><tr><th className="px-5 py-3 font-medium">{t("File")}</th><th className="px-4 py-3 font-medium">{t("Project")}</th><th className="px-4 py-3 font-medium">{t("Status")}</th><th className="px-4 py-3 font-medium">{t("Size")}</th></tr></thead><tbody className="divide-y divide-white/[0.055]">{documents.map(([name, type, project, status, size]) => <tr key={name} className="hover:bg-white/[0.02]"><td className="px-5 py-4"><div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-md bg-white/[0.045] text-white/38">{type === "PDF" ? <FileText className="size-3.5" /> : type === "IFC" ? <FileImage className="size-3.5" /> : <File className="size-3.5" />}</span><div><p className="text-xs text-white/68">{name}</p><p className="mt-0.5 text-[9px] text-white/22">{type}</p></div></div></td><td className="px-4 text-[11px] text-white/35">{project}</td><td className="px-4"><Badge tone={status === "Processing" ? "gold" : "green"}>{t(status)}</Badge></td><td className="px-4 font-mono text-[10px] text-white/28">{size}</td></tr>)}</tbody></table></div> : <div className="grid min-h-[420px] place-items-center p-8 text-center"><div><span className="mx-auto grid size-12 place-items-center rounded-md border border-primary/15 bg-primary/[0.06] text-primary"><Icon className="size-5" /></span><h2 className="mt-4 text-sm font-semibold text-white/72">{t(section === "reports" ? "Analysis library ready" : section === "team" ? "Team workspace connected" : "Enterprise controls available")}</h2><p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-white/30">{t("This module is wired into the shared workspace shell and ready for organization-specific data and policy.")}</p><div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-emerald-300/60"><CheckCircle2 className="size-3.5" />{t("Service operational")}</div></div></div>}
      </section>
    </div>
  );
}
