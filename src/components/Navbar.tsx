"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
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
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-obsidian/72 px-4 py-3 shadow-glass backdrop-blur-2xl">
        <Link href="/" className="group flex items-center gap-3" aria-label="YER6 home">
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-gold-300/35 bg-gold-400/10">
            <span className="absolute h-16 w-16 rotate-45 bg-gradient-to-r from-transparent via-gold-300/40 to-transparent animate-shimmer" />
            <span className="relative text-sm font-bold text-gold-100">Y6</span>
          </span>
          <span className="leading-none">
            <span className="block text-base font-semibold tracking-[0.22em] text-white">YER6</span>
            <span className="hidden text-[10px] uppercase tracking-[0.28em] text-gold-200/80 sm:block">Geotechnical</span>
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

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-obsidian/95 p-4 shadow-glass backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-white/82 transition hover:bg-white/8"
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-2">
              {locales.map((item) => (
                <button
                  key={item}
                  onClick={() => setLocale(item as Locale)}
                  className={`flex-1 rounded-xl px-3 py-2 text-sm uppercase ${
                    locale === item ? "bg-gold-300 text-obsidian" : "text-white/70"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
