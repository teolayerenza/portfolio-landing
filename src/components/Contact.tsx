"use client";

import { useLanguage } from "@/lib/language-context";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="bg-grid-dark py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <p className="text-sm tracking-wide text-light/50 mb-4">{t.contact.label}</p>
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              {t.contact.heading}
            </h2>
          </Reveal>
          <p className="mt-6 text-light/60 max-w-xl">{t.contact.body}</p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block mt-8 text-sm font-medium bg-accent text-dark rounded-full px-6 py-3.5 hover:opacity-85 transition-opacity"
          >
            {t.contact.emailCta} — {EMAIL}
          </a>
        </div>

        <div className="lg:col-span-4 flex lg:justify-end gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-light/20 rounded-full px-5 py-3 hover:border-accent hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-light/20 rounded-full px-5 py-3 hover:border-accent hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
