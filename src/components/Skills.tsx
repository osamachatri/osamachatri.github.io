import FadeIn from "./ui/FadeIn";
import { Code2, Database, Wrench, Monitor, ShieldCheck, BookOpen } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      "Kotlin",
      "Java",
      "Python",
    ],
  },
  {
    title: "Frameworks",
    icon: Monitor,
    skills: [
      "Jetpack Compose (Android & Desktop)",
      "Spring Boot",
      "Ktor",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "MongoDB",
    ],
  },
  {
    title: "Security",
    icon: ShieldCheck,
    skills: [
      "Network Security Fundamentals",
      "Cryptography",
      "Secure Coding Practices",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Familiar With",
    icon: BookOpen,
    skills: [
      "TypeScript",
      "Go",
      "C++",
    ],
    muted: true,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="eyebrow">// 02 Skills</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
            Skills
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 0.08}>
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                    <group.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="space-y-3 flex-1">
                  {group.skills.map((skill, i) => (
                    <div
                      key={i}
                      className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-700/50 ${
                        group.muted 
                          ? "text-slate-500 dark:text-slate-500" 
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-violet-500 group-hover:w-full transition-all duration-500" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}