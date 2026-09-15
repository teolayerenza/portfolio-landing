"use client";

import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="bg-grid-light bg-light text-dark py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-wide text-dark/50 mb-4">{t.skills.label}</p>
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-14">
            {t.skills.heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-dark/10 border border-dark/10 rounded-xl overflow-hidden">
          {t.skills.groups.map((group) => (
            <div key={group.name} className="bg-light p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-dark/40 mb-4">
                {group.name}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-dark text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
