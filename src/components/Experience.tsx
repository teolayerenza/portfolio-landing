"use client";

import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-wide text-light/50 mb-4">{t.experience.label}</p>
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-14">
            {t.experience.heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-light/10 border border-light/10 rounded-xl overflow-hidden">
          {t.experience.items.map((item, i) => (
            <Reveal key={item.org} delay={i * 100}>
              <div className="bg-dark grid grid-cols-1 md:grid-cols-12 gap-6 p-8">
                <div className="md:col-span-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-accent text-sm mt-1">{item.org}</p>
                  <p className="text-light/40 text-xs mt-1">{item.period}</p>
                </div>
                <div className="md:col-span-8">
                  <ul className="space-y-2 text-light/70 text-sm sm:text-base">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="text-accent">—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full border border-light/15 text-light/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
