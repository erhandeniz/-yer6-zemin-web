"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, Languages, Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "@/lib/content";
import { locales, type Locale } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("yer6-theme");
    const startLight = stored === "light";
    setIsLight(startLight);
    document.documentElement.classList.toggle("light", startLight);
  }, []);

  function toggleTheme() {
    setIsLight((current) => {
      const next = !current;
      document.documentElement.classList.toggle("light", next);
      window.localStorage.setItem("yer6-theme", next ? "light" : "dark");
      return next;
    });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5">
      <nav aria-label="Main Navigation" className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-obsidian/72 px-4 py-3 shadow-glass backdrop-blur-2xl">
        <Link href="/" className="group flex items-center gap-3.5" aria-label="YER6 home">
          <span className="relative grid h-[52px] w-[52px] place-items-center overflow-hidden rounded-full border border-gold-300/35 bg-gold-400/10 brand-logo-emblem">
            <span className="absolute h-16 w-16 rotate-45 bg-gradient-to-r from-transparent via-gold-300/40 to-transparent animate-shimmer" />
            <span className="relative text-[17px] font-bold text-gold-100 brand-logo-text">Y6</span>
          </span>
          <span className="leading-tight">
            <span className="block brand-title">YER6</span>
            <span className="hidden brand-subtitle sm:block">Geotechnical</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm transition ${
                  active ? "bg-white/10 text-gold-100" : "text-white/72 hover:bg-white/8 hover:text-white"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="https://ai.yer6zemin.com.tr"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-gold-300/30 bg-gold-300/10 px-3 text-gold-100 transition hover:border-gold-300/60 hover:bg-gold-300/15"
            aria-label="YER6 AI"
          >
            <BrainCircuit className="h-4 w-4" />
            <span className="hidden text-xs font-semibold xl:inline">YER6 AI</span>
          </Link>
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 md:flex">
            <Languages className="h-4 w-4 text-gold-200" />
            {locales.map((item) => (
              <button
                key={item}
                onClick={() => setLocale(item as Locale)}
                className={`rounded-full px-2 py-1 text-xs uppercase transition ${
                  locale === item ? "bg-gold-300 text-obsidian" : "text-white/70 hover:text-white"
                }`}
                aria-label={`${t("language")} ${item}`}
                aria-pressed={locale === item}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-gold-300/50"
            aria-label="Temayı değiştir"
          >
            {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <Link
            href="/contact"
            className="hidden rounded-full bg-gold-300 px-4 py-2 text-sm font-semibold text-obsidian shadow-gold transition hover:bg-gold-200 sm:inline-flex"
          >
            {t("quote")}
          </Link>
          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-obsidian/95 p-4 shadow-glass backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      active ? "bg-white/10 text-gold-100" : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
              <Link
                href="https://ai.yer6zemin.com.tr"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 rounded-2xl border border-gold-300/25 bg-gold-300/10 px-4 py-3 text-sm font-semibold text-gold-100"
              >
                <BrainCircuit className="h-4 w-4" />
                YER6 AI
              </Link>
              <div className="h-px bg-white/8 my-2" />
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">{t("language")}</span>
                <div className="flex gap-2">
                  {locales.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setLocale(item as Locale);
                        setMenuOpen(false);
                      }}
                      className={`rounded-full px-3 py-1.5 text-xs uppercase transition ${
                        locale === item ? "bg-gold-300 text-obsidian" : "text-white/70 hover:text-white"
                      }`}
                      aria-label={`${t("language")} ${item}`}
                      aria-pressed={locale === item}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 grid place-items-center rounded-2xl bg-gold-300 py-3 text-sm font-semibold text-obsidian shadow-gold"
              >
                {t("quote")}
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
