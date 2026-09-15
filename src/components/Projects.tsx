"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-wide text-light/50 mb-4">{t.projects.label}</p>
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {t.projects.heading}
          </h2>
        </Reveal>
        <p className="mt-4 text-light/50 max-w-xl">{t.projects.subheading}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {t.projects.items.map((project) => (
            <Reveal key={project.slug}>
              <Link
                href={`/proyectos/${project.slug}`}
                className="group block rounded-2xl border border-light/10 overflow-hidden hover:border-accent/50 transition-colors"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-light/10 to-light/[0.02] flex items-center justify-center relative overflow-hidden">
                  <span className="font-serif italic text-4xl text-light/20 group-hover:text-accent/30 transition-colors">
                    {project.name}
                  </span>
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-light/40 mb-2">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-light/60 text-sm mt-2 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full border border-light/15 text-light/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-accent text-sm mt-5 group-hover:gap-2 transition-all">
                    {project.caseStudyLabel} →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
