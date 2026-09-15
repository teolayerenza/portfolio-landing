"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Locale, type SiteContent } from "./content";

interface LanguageContextValue {
  locale: Locale;
  toggleLocale: () => void;
  t: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "teolayer-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    // Reads client-only storage after mount to avoid an SSR/client hydration mismatch.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocale(stored);
    } else if (navigator.language.toLowerCase().startsWith("en")) {
      setLocale("en");
    }
  }, []);

  const toggleLocale = () => {
    setLocale((prev) => {
      const next = prev === "es" ? "en" : "es";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t: content[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
