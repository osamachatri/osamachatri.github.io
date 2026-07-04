import FadeIn from "./ui/FadeIn";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Welledge / HDSS",
    role: "Software Engineering Intern",
    location: "Algiers, Algeria (On-site)",
    period: "April 2026",
    website: "https://welledge.tech/",
    highlights: [
      "Explored real-world industrial engineering challenges and contributed to engineering solutions that support decision-making in production environments",
      "Gained first-hand exposure to how production-level software is architected, built, and delivered to clients in an enterprise setting",
      "Learned network and code security practices applied in production, along with software licensing considerations for commercial products",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <span className="eyebrow">// 03 Experience</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-12">
            Experience
          </h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.company} delay={index * 0.15}>
                <div className="relative sm:pl-12 group">
                  <div className="absolute left-0 top-2 hidden sm:flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-900 rounded-full border-2 border-primary z-10 group-hover:scale-110 transition-transform">
                    <Briefcase size={16} className="text-primary" />
                  </div>

                  <div className="bg-white dark:bg-slate-800/30 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="hidden sm:inline text-slate-300 dark:text-slate-600">|</span>
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1 group/link"
                      >
                        {exp.company}
                        <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    </div>

                    <p className="text-sm font-mono-ui text-slate-500 dark:text-slate-400 mb-6">
                      {exp.period} · {exp.location}
                    </p>

                    <ul className="space-y-3">
                      {exp.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                      <span className="text-xs font-mono-ui text-slate-400 dark:text-slate-500">
                        details limited by NDA
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



