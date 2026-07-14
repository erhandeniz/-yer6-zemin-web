"use client";

import { useState } from "react";
import { Check, ChevronDown, Database, MoreHorizontal, Plus, Search, Shield, UploadCloud, X } from "lucide-react";
import { adminMetrics } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useAITranslation } from "@/components/i18n-provider";
import { KnowledgeBaseAdmin } from "@/components/admin/knowledge-base-admin";

const initialUsers = [
  { name: "Erhan Deniz", email: "erhan@yer6.ai", role: "Admin", status: "Active", initials: "ED", last: "Now" },
  { name: "Selin Kaya", email: "selin@yer6.ai", role: "Manager", status: "Active", initials: "SK", last: "18 min" },
  { name: "Mert Arslan", email: "mert@yer6.ai", role: "Engineer", status: "Active", initials: "MA", last: "2 hr" },
  { name: "Defne Yilmaz", email: "defne@yer6.ai", role: "Engineer", status: "Invited", initials: "DY", last: "—" }
];

export function AdminView() {
  const { t } = useAITranslation();
  const [inviteOpen, setInviteOpen] = useState(false);
  const [invited, setInvited] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[1540px] px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><div className="flex items-center gap-2"><Badge tone="red"><Shield className="mr-1 size-3" />{t("Admin access")}</Badge></div><h1 className="mt-3 text-xl font-semibold sm:text-2xl">{t("Workspace administration")}</h1><p className="mt-1.5 text-xs text-white/38">{t("Manage access, usage, data services and organization policy.")}</p></div><Button onClick={() => { setInviteOpen(true); setInvited(false); }}><Plus className="size-4" />{t("Invite member")}</Button></div>
      <section className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">{adminMetrics.map((metric) => { const Icon = metric.icon; return <div key={metric.label} className="panel top-rule p-4 sm:p-5"><div className="flex items-center justify-between"><p className="text-xs text-white/35">{t(metric.label)}</p><Icon className="size-4 text-primary/60" /></div><p className="mt-3 text-2xl font-semibold">{metric.value}</p></div>; })}</section>
      <KnowledgeBaseAdmin />
      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.5fr)_360px]">
        <section className="panel overflow-hidden"><div className="flex flex-col gap-3 border-b border-white/[0.065] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-sm font-semibold text-white/85">{t("Members")}</h2><p className="mt-1 text-[11px] text-white/28">{t("Roles and workspace access")}</p></div><label className="relative"><Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-white/25" /><input className="h-9 w-full rounded-md border border-white/[0.075] bg-white/[0.025] pl-9 pr-3 text-xs outline-none placeholder:text-white/22 sm:w-56" placeholder={t("Search members")} aria-label={t("Search members")} /></label></div><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left"><thead className="border-b border-white/[0.055] text-[10px] uppercase text-white/22"><tr><th className="px-5 py-3 font-medium">{t("Member")}</th><th className="px-4 py-3 font-medium">{t("Role")}</th><th className="px-4 py-3 font-medium">{t("Status")}</th><th className="px-4 py-3 font-medium">{t("Last active")}</th><th className="w-12" /></tr></thead><tbody className="divide-y divide-white/[0.055]">{initialUsers.map((user) => <tr key={user.email} className="hover:bg-white/[0.02]"><td className="px-5 py-3.5"><div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-md bg-white/[0.06] text-[10px] font-semibold text-white/60">{user.initials}</span><div><p className="text-xs font-medium text-white/68">{user.name}</p><p className="mt-0.5 text-[10px] text-white/24">{user.email}</p></div></div></td><td className="px-4"><button className="flex items-center gap-1.5 text-[11px] text-white/42">{t(user.role)}<ChevronDown className="size-3" /></button></td><td className="px-4"><Badge tone={user.status === "Active" ? "green" : "gold"}>{t(user.status)}</Badge></td><td className="px-4 text-[11px] text-white/28">{t(user.last)}</td><td><Button variant="ghost" size="icon"><MoreHorizontal className="size-4" /></Button></td></tr>)}</tbody></table></div></section>
        <div className="space-y-4">
          <section className="panel p-5"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-md bg-emerald-400/10 text-emerald-300"><Database className="size-4" /></span><div><h2 className="text-sm font-semibold text-white/82">{t("System status")}</h2><p className="mt-0.5 text-[10px] text-emerald-300/60">{t("All services operational")}</p></div></div><div className="mt-5 space-y-3">{[["AI inference", "Operational"], ["PostgreSQL", "Connected"], ["Upload pipeline", "Operational"], ["Cloudflare edge", "Healthy"]].map(([service, status]) => <div key={service} className="flex items-center justify-between text-[11px]"><span className="text-white/35">{t(service)}</span><span className="flex items-center gap-1.5 text-white/52"><span className="size-1.5 rounded-full bg-emerald-400" />{t(status)}</span></div>)}</div></section>
          <section className="panel p-5"><div className="flex items-center justify-between"><h2 className="text-sm font-semibold text-white/82">{t("Storage")}</h2><span className="text-[11px] text-white/30">680 GB / 1 TB</span></div><Progress value={68} className="mt-4 h-2" /><div className="mt-4 flex items-center gap-2 text-[10px] text-white/25"><UploadCloud className="size-3.5 text-primary/55" />{t("Retention policy: 7 years")}</div></section>
        </div>
      </div>

      {inviteOpen ? <div className="fixed inset-0 z-[80] grid place-items-center bg-black/75 p-4 backdrop-blur-sm"><div className="w-full max-w-md rounded-lg border border-white/10 bg-[#111] shadow-2xl"><div className="flex items-center justify-between border-b border-white/[0.065] px-5 py-4"><div><h2 className="text-sm font-semibold">{t("Invite workspace member")}</h2><p className="mt-1 text-[10px] text-white/30">{t("Grant project access with a controlled role.")}</p></div><Button variant="ghost" size="icon" onClick={() => setInviteOpen(false)} aria-label={t("Close")}><X className="size-4" /></Button></div>{invited ? <div className="p-8 text-center"><span className="mx-auto grid size-11 place-items-center rounded-full bg-emerald-400/10 text-emerald-300"><Check className="size-5" /></span><p className="mt-3 text-sm font-medium">{t("Invitation prepared")}</p><p className="mt-1 text-xs text-white/30">{t("The member will receive role-scoped workspace access.")}</p><Button className="mt-5" onClick={() => setInviteOpen(false)}>{t("Done")}</Button></div> : <form className="space-y-4 p-5" onSubmit={(event) => { event.preventDefault(); setInvited(true); }}><label className="block text-xs text-white/45">{t("Work email")}<input required type="email" placeholder="engineer@company.com" className="mt-1.5 h-10 w-full rounded-md border border-white/10 bg-white/[0.035] px-3 text-xs text-white outline-none placeholder:text-white/20 focus:border-primary/40" /></label><label className="block text-xs text-white/45">{t("Role")}<select className="mt-1.5 h-10 w-full rounded-md border border-white/10 bg-[#151515] px-3 text-xs text-white/70 outline-none"><option value="Engineer">{t("Engineer")}</option><option value="Manager">{t("Manager")}</option><option value="Admin">{t("Admin")}</option></select></label><div className="flex justify-end gap-2 border-t border-white/[0.055] pt-4"><Button type="button" variant="ghost" onClick={() => setInviteOpen(false)}>{t("Cancel")}</Button><Button type="submit">{t("Send invitation")}</Button></div></form>}</div></div> : null}
    </div>
  );
}
