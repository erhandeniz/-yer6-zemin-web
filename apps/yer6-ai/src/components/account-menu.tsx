"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogOut, Settings2, Shield, User as UserIcon, UserCircle2 } from "lucide-react";
import { userInitials } from "@/lib/initials";
import { useAITranslation, aiLocales } from "@/components/i18n-provider";

type SessionUser = {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
  title?: string | null;
};

const PRIVILEGED = new Set(["ADMIN", "SUPER_ADMIN"]);

/**
 * Real account menu behind the avatar (Package B). Two visual variants that
 * preserve the existing shell EXACTLY:
 *  - "sidebar": the bottom profile block (was a hardcoded ED → /login link);
 *  - "topbar":  the small ED button in the header.
 * Authenticated → dropdown with role-aware items + working sign-out.
 * Unauthenticated (public demo) → routes to /login (honest state, no fake menu).
 */
export function AccountMenu({ variant }: { variant: "sidebar" | "topbar" }) {
  const { t, locale, setLocale } = useAITranslation();
  const router = useRouter();
  const [user, setUser] = useState<SessionUser | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/auth/session")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!active) return;
        setUser(data?.user ?? null);
        setLoaded(true);
      })
      .catch(() => {
        if (active) setLoaded(true);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const initials = userInitials(user?.name);
  const isAdmin = PRIVILEGED.has(user?.role ?? "");

  const avatar = (size: string, text: string) =>
    user?.image ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={user.image} alt="" className={`${size} rounded-md object-cover`} />
    ) : initials ? (
      <span className={`grid ${size} place-items-center rounded-md bg-primary/15 ${text} font-semibold text-primary`}>{initials}</span>
    ) : (
      <span className={`grid ${size} place-items-center rounded-md bg-white/8 text-white/60`}><UserIcon className="size-4" /></span>
    );

  // Unauthenticated (e.g. public demo shell): honest sign-in action.
  if (loaded && !user?.id) {
    if (variant === "sidebar") {
      return (
        <Link href="/login" className="flex items-center gap-3 rounded-md p-2 hover:bg-white/[0.04]">
          <span className="grid size-8 place-items-center rounded-md bg-white/8 text-white/60"><UserIcon className="size-4" /></span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-xs font-medium text-white/80">{t("Sign in")}</span>
            <span className="block truncate text-[11px] text-white/35">{t("Full access")}</span>
          </span>
          <ChevronDown className="size-3.5 text-white/30" />
        </Link>
      );
    }
    return (
      <Link href="/login" aria-label={t("Sign in")} className="hidden items-center gap-2 rounded-md p-1.5 hover:bg-white/[0.04] sm:flex">
        <span className="grid size-7 place-items-center rounded-md bg-white/8 text-white/60"><UserIcon className="size-4" /></span>
        <ChevronDown className="size-3.5 text-white/30" />
      </Link>
    );
  }

  const menu = open ? (
    <div
      role="menu"
      aria-label={t("Account menu")}
      className={`absolute z-50 w-64 rounded-md border border-white/[0.09] bg-[#0d0d0d] p-1.5 shadow-2xl ${
        variant === "sidebar" ? "bottom-full left-2 mb-2" : "right-0 top-full mt-2"
      }`}
    >
      <div className="border-b border-white/[0.065] px-3 pb-2.5 pt-2">
        <p className="truncate text-xs font-semibold text-white/85">{user?.name ?? t("Signed in")}</p>
        <p className="truncate text-[11px] text-white/35">{user?.title ?? user?.email ?? ""}</p>
      </div>
      <div className="py-1">
        <MenuLink href="/settings" icon={<UserCircle2 className="size-3.5" />} label={t("My profile")} onNavigate={() => setOpen(false)} />
        <MenuLink href="/settings" icon={<Settings2 className="size-3.5" />} label={t("Account & security")} onNavigate={() => setOpen(false)} />
        {isAdmin ? (
          <MenuLink href="/admin" icon={<Shield className="size-3.5" />} label={t("Admin panel")} onNavigate={() => setOpen(false)} />
        ) : null}
        <MenuLink href="/hakkinda" icon={<UserIcon className="size-3.5" />} label={t("Founder profile")} onNavigate={() => setOpen(false)} />
      </div>
      <div className="border-t border-white/[0.065] px-3 py-2">
        <p className="mb-1.5 text-[10px] uppercase tracking-wide text-white/25">{t("Language")}</p>
        <div className="flex gap-1">
          {aiLocales.map((item) => (
            <button
              key={item}
              role="menuitemradio"
              aria-checked={locale === item}
              onClick={() => setLocale(item)}
              className={`h-6 flex-1 rounded px-2 text-[10px] font-semibold uppercase ${
                locale === item ? "bg-primary text-primary-foreground" : "text-white/38 hover:text-white/75"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="border-t border-white/[0.065] py-1">
        <button
          role="menuitem"
          onClick={() => {
            setOpen(false);
            void signOut({ callbackUrl: "/login" });
          }}
          className="flex w-full items-center gap-2.5 rounded px-3 py-2 text-left text-xs text-red-300/85 hover:bg-red-400/[0.08]"
        >
          <LogOut className="size-3.5" />
          {t("Sign out")}
        </button>
      </div>
    </div>
  ) : null;

  if (variant === "sidebar") {
    return (
      <div ref={rootRef} className="relative">
        <button
          onClick={() => setOpen((value) => !value)}
          aria-haspopup="menu"
          aria-expanded={open}
          className="flex w-full items-center gap-3 rounded-md p-2 text-left hover:bg-white/[0.04]"
        >
          {avatar("size-8", "text-[11px]")}
          <span className="min-w-0 flex-1">
            <span className="block truncate text-xs font-medium text-white/80">{user?.name ?? "…"}</span>
            <span className="block truncate text-[11px] text-white/35">{user?.title ?? t("Engineering workspace")}</span>
          </span>
          <ChevronDown className={`size-3.5 text-white/30 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {menu}
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative hidden sm:block">
      <button
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t("Account menu")}
        className="flex items-center gap-2 rounded-md p-1.5 hover:bg-white/[0.04]"
      >
        {avatar("size-7", "text-[10px]")}
        <ChevronDown className={`size-3.5 text-white/30 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {menu}
    </div>
  );
}

function MenuLink({
  href,
  icon,
  label,
  onNavigate
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      role="menuitem"
      href={href}
      onClick={onNavigate}
      className="flex items-center gap-2.5 rounded px-3 py-2 text-xs text-white/70 hover:bg-white/[0.05] hover:text-white"
    >
      {icon}
      {label}
    </Link>
  );
}
