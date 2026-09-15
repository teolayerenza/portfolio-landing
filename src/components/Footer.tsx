"use client";

import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-light/10 px-6 md:px-10 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 items-center text-xs text-light/40">
        <span>Teo Layer © {year}. {t.footer.rights}</span>
        <div className="flex sm:justify-end gap-4">
          <a href="#top" className="hover:text-accent transition-colors">
            {t.hero.name}
          </a>
        </div>
      </div>
    </footer>
  );
}
