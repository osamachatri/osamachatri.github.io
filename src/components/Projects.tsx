import FadeIn from "./ui/FadeIn";
import SpotlightCard from "./ui/SpotlightCard";
import { ExternalLink, Star } from "lucide-react";
import { FiGithub } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "ProductivityX",
    description:
      "A full-stack offline-first productivity system that unifies notes, tasks, calendar, Pomodoro timer, and an AI assistant into a single coherent workspace. Built with a shared Spring Boot backend serving Android & Desktop (Jetpack Compose) and Web (TypeScript) frontends. Syncs silently when connectivity returns.",
    tech: ["Spring Boot", "Kotlin", "Jetpack Compose", "TypeScript", "PostgreSQL", "Redis"],
    github: "https://github.com/productivityx-app",
    featured: true,
  },
  {
    title: "WellLogAnalyzer",
    description:
      "An offline hydraulics simulation desktop app for petroleum engineers, built for a technical assessment. Features a custom hydraulics engine (ECD, APL, bit hydraulics per API RP 13D), interactive 2D charts, a 3D wellbore viewer, and one-click Excel/Word report export, structured with Clean Architecture.",
    tech: ["Kotlin", "Jetpack Compose Desktop", "Python", "Clean Architecture"],
    github: "https://github.com/osamachatri/WellLogAnalyzer",
    featured: false,
  },
  {
    title: "Depan.Go",
    description:
      "An Android application for roadside assistance and on-demand services in remote areas. Built as a team project during the 2nd year at ESI SBA. Connects users in need of help (e.g., car breakdowns in the desert) with nearby service providers.",
    tech: ["Kotlin", "Android", "REST APIs"],
    github: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="eyebrow">// 04 Projects</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-4 leading-tight">
            Featured Projects
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.15}>
              <SpotlightCard
                className={`bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 ${
                  project.featured ? "ring-1 ring-primary/20" : ""
                }`}
              >
                {project.featured && (
                  <div className="bg-primary/10 px-6 py-2 flex items-center gap-2">
                    <Star size={14} className="text-primary fill-primary" />
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Featured Project</span>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {project.github && (
                        <>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all hover:scale-110"
                            aria-label={`${project.title} GitHub`}
                          >
                            <FiGithub size={20} />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all hover:scale-110"
                            aria-label={`${project.title} external link`}
                          >
                            <ExternalLink size={20} />
                          </a>
                        </>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 text-xs font-medium text-primary bg-primary/10 rounded-lg border border-primary/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}



