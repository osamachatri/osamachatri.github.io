import FadeIn from "./ui/FadeIn";
import { MapPin, Globe, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="eyebrow">// 01 About</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
        </FadeIn>
        <div className="grid lg:grid-cols-[1.6fr_0.9fr] gap-10 mt-14">
          {/* Left Content */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  I'm a 4th-year Engineering student at{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    ENSTA
                  </span>
                  , specializing in Security of Systems. I build across the full
                  stack — from Android and desktop applications with{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Jetpack Compose
                  </span>{" "}
                  to robust backend APIs with{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Spring Boot
                  </span>
                  .
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  My approach is product-minded: I don't just write code — I
                  build systems that work offline-first, sync seamlessly, and
                  scale. My main project,{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    ProductivityX
                  </span>
                  , is a full-stack productivity suite that demonstrates
                  production-grade architecture across Android, Desktop, and Web
                  codebases sharing a single Spring Boot backend.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  A passionate{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    self-learner
                  </span>{" "}
                  who ships real projects, not tutorials. I thrive on turning
                  complex problems into clean, working solutions.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right Sidebar */}
          <FadeIn delay={0.2}>
            <div className="sticky top-24 space-y-5">
              {/* Location Card */}
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Location
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Biskra, Algeria
                    </p>
                    <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
                      Open to relocation · Remote · Hybrid
                    </p>
                  </div>
                </div>
              </div>

              {/* Languages Card */}
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Globe size={18} className="text-primary" />
                  </div>
                  <div className="w-full">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Languages
                    </p>
                    <div className="mt-4 space-y-3">
                      {[
                        { lang: "Arabic", level: "Native" },
                        { lang: "English", level: "Intermediate" },
                        { lang: "French", level: "Intermediate" },
                      ].map((l) => (
                        <div
                          key={l.lang}
                          className="flex items-center justify-between rounded-xl bg-slate-100/70 dark:bg-slate-700/30 px-3 py-2"
                        >
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {l.lang}
                          </span>
                          <span className="text-xs font-mono-ui text-slate-400 dark:text-slate-500">
                            {l.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Focus Areas Card */}
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Zap size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Focus Areas
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "Offline-First",
                        "System Security",
                        "Clean Architecture",
			"Project management",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}