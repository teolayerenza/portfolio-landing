"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/language-context";
import { caseStudies } from "@/lib/content";

export default function DentalyCaseStudy() {
  const { locale, t } = useLanguage();
  const project = t.projects.items.find((p) => p.slug === "dentaly")!;
  const study = caseStudies.dentaly[locale];

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-20">
          <Link href="/#proyectos" className="text-sm text-light/50 hover:text-accent transition-colors">
            {study.backLabel}
          </Link>

          <div className="mt-8 flex items-center gap-3 text-xs text-light/40">
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-3">
            {project.name}
          </h1>
          <p className="mt-6 text-lg text-light/60 max-w-2xl leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.stack.map((tech) => (
              <span key={tech} className="text-xs px-3 py-1 rounded-full border border-light/15 text-light/60">
                {tech}
              </span>
            ))}
          </div>

          <div className="aspect-video rounded-2xl border border-light/10 bg-light/[0.03] mt-12 flex items-center justify-center">
            <span className="font-serif italic text-3xl text-light/15">{project.name}</span>
          </div>

          <div className="grid grid-cols-1 gap-14 mt-16">
            <section>
              <h2 className="text-sm uppercase tracking-wide text-accent mb-3">{study.challengeLabel}</h2>
              <p className="text-light/70 leading-relaxed text-base sm:text-lg">{study.challenge}</p>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-wide text-accent mb-3">{study.usersLabel}</h2>
              <p className="text-light/70 leading-relaxed text-base sm:text-lg">{study.users}</p>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-wide text-accent mb-3">{study.architectureLabel}</h2>
              <p className="text-light/70 leading-relaxed text-base sm:text-lg">{study.architecture}</p>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-wide text-accent mb-3">{study.decisionsLabel}</h2>
              <ul className="space-y-4">
                {study.decisions.map((decision) => (
                  <li key={decision} className="flex gap-3 text-light/70 leading-relaxed text-base sm:text-lg">
                    <span className="text-accent shrink-0">—</span>
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-wide text-accent mb-3">{study.linksLabel}</h2>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.repoUrl ?? "#"}
                  className="text-sm border border-light/20 rounded-full px-5 py-3 hover:border-accent hover:text-accent transition-colors"
                >
                  {project.repoLabel}
                </a>
                <a
                  href={project.demoUrl ?? "#"}
                  className="text-sm border border-light/20 rounded-full px-5 py-3 hover:border-accent hover:text-accent transition-colors"
                >
                  {project.demoLabel}
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
