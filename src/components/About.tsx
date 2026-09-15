"use client";

import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function About() {
  const { locale, t } = useLanguage();
  const videoSrc = locale === "es" ? "/video-es.mp4" : "/video-en.mp4";

  return (
    <section className="bg-light text-dark py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <p className="text-sm tracking-wide text-dark/50 mb-4">{t.about.label}</p>
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              {t.about.heading}
            </h2>
          </Reveal>
          <p className="mt-6 text-base sm:text-lg text-dark/70 max-w-2xl leading-relaxed">
            {t.about.body}
          </p>
        </div>

        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-wide text-dark/40 mb-3">{t.about.videoLabel}</p>
          <div className="aspect-video rounded-xl border border-dark/10 bg-dark overflow-hidden">
            <video
              key={videoSrc}
              className="w-full h-full object-cover"
              controls
              preload="none"
              poster="/video-poster.jpg"
            >
              <source src={videoSrc} />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
