import FadeIn from "./ui/FadeIn";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "ENSTA (École Nationale Supérieure des Technologies Avancées)",
    degree: "Engineering degree in Security of Systems",
    period: "2025 – Present",
    description: "4th year of a 5-year Engineer program. Focus on security of systems.",
  },
  {
    school: "ESI SBA (École Supérieure en Informatique de Sidi Bel Abbès)",
    degree: "Computer Science",
    period: "2023 – 2025",
    description: "First 2 years of the engineering program. Foundation in computer science, algorithms, and software development.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <span className="eyebrow">// 05 Education</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-12">
            Education
          </h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" />

          <div className="space-y-10">
            {education.map((edu, index) => (
              <FadeIn key={edu.school} delay={index * 0.1}>
                <div className="relative sm:pl-12 group">
                  <div className="absolute left-0 top-0 hidden sm:flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-900 rounded-full border-2 border-primary z-10 group-hover:scale-110 transition-transform">
                    <GraduationCap size={16} className="text-primary" />
                  </div>

                  <div className="bg-white dark:bg-slate-800/30 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/50 hover:border-primary/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {edu.school}
                      </h3>
                      <span className="text-sm font-mono-ui text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-base font-medium text-slate-700 dark:text-slate-300 mb-3">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {edu.description}
                    </p>
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
