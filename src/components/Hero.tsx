"use client";

import { useLanguage } from "@/lib/language-context";
import { EMAIL } from "@/lib/content";

const STACK_GRID = [
  "React", "TypeScript", "Next.js", "Vite",
  "Node.js", "Tailwind", "Swift", "Kotlin",
  "Python", "SQL", "C", "Zod",
];

export function Hero() {
  const { locale, t } = useLanguage();
  const resumeHref = locale === "es" ? "/resume-es.pdf" : "/resume-en.pdf";

  return (
    <section id="top" className="bg-grid-dark pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-light/10 border-b border-light/10 text-xs md:text-sm">
        {[t.quickFacts.location, t.quickFacts.remote, t.quickFacts.freelance].map((fact) => (
          <div key={fact.label} className="bg-dark px-6 py-3">
            <span className="text-light/40 uppercase tracking-wide">{fact.label}</span>
            <p className="text-light mt-0.5">{fact.value}</p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 px-6 md:px-10 py-20 lg:py-28 items-center">
        <div className="lg:col-span-7">
          <p className="text-accent text-sm tracking-wide mb-4">{t.hero.greeting}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
            {t.hero.name}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-light/70 max-w-xl">{t.hero.role}</p>
          <p className="mt-4 text-base text-light/50 max-w-lg">{t.hero.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium bg-light text-dark rounded-full px-5 py-3 hover:bg-accent transition-colors"
            >
              {t.hero.ctaResume}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm font-medium border border-light/20 rounded-full px-5 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              {t.hero.ctaHire}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-wide text-light/40 mb-3">{t.hero.hint}</p>
          <div className="grid grid-cols-4 gap-2">
            {STACK_GRID.map((tech) => (
              <div
                key={tech}
                className="group aspect-square flex items-center justify-center rounded-lg border border-light/10 bg-light/[0.03] text-[11px] text-center px-1 text-light/60 hover:border-accent hover:text-accent hover:bg-accent/5 hover:-translate-y-1 transition-all duration-200 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
