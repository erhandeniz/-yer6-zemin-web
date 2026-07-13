"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  ChevronDown,
  Files,
  FolderKanban,
  LayoutDashboard,
  Languages,
  Menu,
  MessageSquareText,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Users,
  X
} from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { UploadDialog } from "@/components/uploads/upload-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";
import { useAppStore } from "@/store/app-store";
import { aiLocales, useAITranslation } from "@/components/i18n-provider";

const primaryNavigation = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/chat", label: "AI Engineer", icon: MessageSquareText },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/documents", label: "Documents", icon: Files },
  { href: "/reports", label: "Reports", icon: BarChart3 }
];

const systemNavigation = [
  { href: "/admin", label: "Admin", icon: ShieldCheck },
  { href: "/team", label: "Team", icon: Users },
  { href: "/settings", label: "Settings", icon: Settings }
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const setUploadOpen = useAppStore((state) => state.setUploadOpen);
  const { locale, setLocale, t } = useAITranslation();

  const renderLink = (item: (typeof primaryNavigation)[number]) => {
    const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
    const Icon = item.icon;
    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={onNavigate}
        className={cn(
          "group flex h-9 items-center gap-3 rounded-md px-3 text-[13px] font-medium transition-colors",
          active
            ? "bg-primary/10 text-primary shadow-[inset_2px_0_0_#e2b54c]"
            : "text-white/48 hover:bg-white/[0.045] hover:text-white/85"
        )}
      >
        <Icon className="size-4 shrink-0" strokeWidth={1.8} />
        {t(item.label)}
      </Link>
    );
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center border-b border-white/[0.065] px-5">
        <BrandMark />
      </div>
      <div className="px-3 pt-4">
        <Button className="w-full justify-start" onClick={() => setUploadOpen(true)}>
          <Plus className="size-4" />
          {t("New analysis")}
        </Button>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-5" aria-label={t("Workspace navigation")}>
        <p className="technical-label mb-2 px-3 text-white/25">{t("Workspace")}</p>
        <div className="space-y-1">{primaryNavigation.map(renderLink)}</div>
        <p className="technical-label mb-2 mt-7 px-3 text-white/25">{t("Management")}</p>
        <div className="space-y-1">{systemNavigation.map(renderLink)}</div>
      </nav>
      <div className="mx-3 mb-1 flex h-9 items-center rounded-md border border-white/[0.075] bg-white/[0.025] p-0.5" aria-label={t("Language")}>
        <Languages className="mx-2 size-3.5 text-primary/70" />
        {aiLocales.map((item) => (
          <button
            key={item}
            onClick={() => setLocale(item)}
            className={`h-7 flex-1 rounded px-2 text-[10px] font-semibold uppercase transition-colors ${
              locale === item ? "bg-primary text-primary-foreground" : "text-white/38 hover:text-white/75"
            }`}
            aria-label={`${t("Language")} ${item}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="m-3 rounded-md border border-primary/15 bg-primary/[0.045] p-3.5">
        <div className="mb-2 flex items-center justify-between">
          <span className="technical-label text-primary/70">{t("Enterprise")}</span>
          <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.6)]" />
        </div>
        <p className="text-xs font-medium text-white/75">{t("Engineering workspace")}</p>
        <p className="mt-1 text-[11px] leading-4 text-white/35">{t("Data region: Europe West")}</p>
      </div>
      <div className="border-t border-white/[0.065] p-3">
        <Link href="/login" className="flex items-center gap-3 rounded-md p-2 hover:bg-white/[0.04]">
          <span className="grid size-8 place-items-center rounded-md bg-white/8 text-[11px] font-semibold text-white/80">ED</span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-xs font-medium text-white/80">Erhan Deniz</span>
            <span className="block truncate text-[11px] text-white/35">{t("Lead Engineer")}</span>
          </span>
          <ChevronDown className="size-3.5 text-white/30" />
        </Link>
      </div>
    </div>
  );
}

function Topbar() {
  const setSidebarOpen = useAppStore((state) => state.setSidebarOpen);
  const selectedProjectId = useAppStore((state) => state.selectedProjectId);
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? projects[0];
  const { locale, setLocale, t } = useAITranslation();

  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-white/[0.065] bg-[#0b0b0b]/95 px-4 backdrop-blur-xl lg:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setSidebarOpen(true)}
        aria-label={t("Open navigation")}
      >
        <Menu className="size-5" />
      </Button>
      <button className="flex min-w-0 items-center gap-2 rounded-md px-2 py-1.5 text-left hover:bg-white/[0.04]">
        <span className="hidden text-xs text-white/32 sm:inline">{t("Current project")}</span>
        <span className="hidden h-4 w-px bg-white/10 sm:block" />
        <span className="max-w-[160px] truncate text-xs font-medium text-white/78 md:max-w-none">{selectedProject.name}</span>
        <ChevronDown className="size-3.5 shrink-0 text-white/30" />
      </button>
      <div className="ml-auto hidden w-full max-w-[360px] md:block">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/25" />
          <input
            type="search"
            placeholder={t("Search projects, files, analyses")}
            className="h-9 w-full rounded-md border border-white/[0.075] bg-white/[0.035] pl-9 pr-14 text-xs text-white outline-none placeholder:text-white/25 focus:border-primary/35"
            aria-label={t("Search projects, files, analyses")}
          />
          <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-white/30">⌘ K</kbd>
        </label>
      </div>
      <div className="hidden h-9 items-center rounded-md border border-white/[0.075] bg-white/[0.025] p-0.5 sm:flex">
        <Languages className="mx-2 size-3.5 text-primary/70" />
        {aiLocales.map((item) => (
          <button
            key={item}
            onClick={() => setLocale(item)}
            className={`h-7 rounded px-2 text-[10px] font-semibold uppercase transition-colors ${
              locale === item ? "bg-primary text-primary-foreground" : "text-white/38 hover:text-white/75"
            }`}
            aria-label={`${t("Language")} ${item}`}
          >
            {item}
          </button>
        ))}
      </div>
      <Button variant="ghost" size="icon" className="relative" aria-label={t("Notifications")}>
        <Bell className="size-4" />
        <span className="absolute right-2 top-2 size-1.5 rounded-full bg-primary" />
      </Button>
      <span className="hidden h-5 w-px bg-white/[0.08] sm:block" />
      <button className="hidden items-center gap-2 rounded-md p-1.5 hover:bg-white/[0.04] sm:flex">
        <span className="grid size-7 place-items-center rounded-md bg-primary/15 text-[10px] font-semibold text-primary">ED</span>
        <ChevronDown className="size-3.5 text-white/30" />
      </button>
    </header>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const sidebarOpen = useAppStore((state) => state.sidebarOpen);
  const setSidebarOpen = useAppStore((state) => state.setSidebarOpen);
  const { t } = useAITranslation();

  return (
    <div className="flex min-h-screen bg-[#090909] text-white">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 border-r border-white/[0.065] bg-[#0b0b0b] lg:block">
        <SidebarContent />
      </aside>
      <AnimatePresence>
        {sidebarOpen ? (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={() => setSidebarOpen(false)}
              aria-label={t("Close navigation")}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 w-[280px] border-r border-white/10 bg-[#0b0b0b] lg:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-3 top-3 z-10"
                onClick={() => setSidebarOpen(false)}
                aria-label={t("Close navigation")}
              >
                <X className="size-5" />
              </Button>
              <SidebarContent onNavigate={() => setSidebarOpen(false)} />
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
      <div className="flex min-h-screen min-w-0 flex-1 flex-col lg:pl-60">
        <Topbar />
        <main className="app-grid min-h-0 flex-1">{children}</main>
      </div>
      <UploadDialog />
    </div>
  );
}
