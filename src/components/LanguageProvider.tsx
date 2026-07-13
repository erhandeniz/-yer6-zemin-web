"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dictionary, type Locale, locales } from "@/lib/i18n";

type TranslationKey = keyof (typeof dictionary)["tr"];

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const arabicCountries = new Set([
  "AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "OM", "PS", "QA", "SA", "SD", "SY", "TN", "YE"
]);

function localeForCountry(country: string): Locale {
  if (country === "TR") return "tr";
  if (arabicCountries.has(country)) return "ar";
  return "en";
}

function localeForBrowser(): Locale {
  const language = window.navigator.language.toLowerCase();
  if (language.startsWith("tr")) return "tr";
  if (language.startsWith("ar")) return "ar";
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");

  useEffect(() => {
    const stored = window.localStorage.getItem("yer6-locale") as Locale | null;
    if (stored && locales.includes(stored)) {
      setLocaleState(stored);
      return;
    }

    setLocaleState(localeForBrowser());
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 2500);

    fetch("/cdn-cgi/trace", { signal: controller.signal, cache: "no-store" })
      .then((response) => response.text())
      .then((trace) => {
        const country = trace.match(/^loc=([A-Z]{2})$/m)?.[1];
        if (country) setLocaleState(localeForCountry(country));
      })
      .catch(() => undefined)
      .finally(() => window.clearTimeout(timeout));

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("yer6-locale", nextLocale);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key: string) => dictionary[locale][key as TranslationKey] ?? key
    }),
    [locale, setLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
