"use client";

import { useLanguage } from "@/lib/language-context";

export function Header() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-light/10 bg-dark/80 backdrop-blur">
      <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 md:px-10 h-16 max-w-7xl mx-auto">
        <a href="#top" className="font-serif italic text-2xl tracking-tight">
          Teo Layer
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-light/70 justify-self-center">
          <a href="#proyectos" className="hover:text-accent transition-colors">
            [ {t.nav.projects} ]
          </a>
          <a href="#skills" className="hover:text-accent transition-colors">
            [ {t.nav.skills} ]
          </a>
          <a href="#contacto" className="hover:text-accent transition-colors">
            [ {t.nav.contact} ]
          </a>
        </nav>

        <div className="flex items-center gap-3 justify-self-end">
          <button
            onClick={toggleLocale}
            aria-label="Toggle language"
            className="text-xs font-medium tracking-wide border border-light/20 rounded-full px-3 py-1.5 hover:border-accent hover:text-accent transition-colors"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
          <a
            href="#contacto"
            className="text-xs font-medium tracking-wide bg-accent text-dark rounded-full px-4 py-1.5 hover:opacity-85 transition-opacity"
          >
            {t.nav.getInTouch}
          </a>
        </div>
      </div>
    </header>
  );
}
