import FadeIn from "./ui/FadeIn";
import SpotlightCard from "./ui/SpotlightCard";
import ScreenshotCarousel from "./ui/ScreenshotCarousel";
import { ExternalLink, Star, Play, Download, Smartphone, Monitor, AppWindow } from "lucide-react";
import { FiGithub } from "react-icons/fi";

interface Screenshot {
  src: string;
  alt: string;
}

interface PlatformCard {
  label: string;
  icon: "android" | "web" | "desktop";
  screenshots: Screenshot[];
  summary: { tagline: string; highlights: string[]; tech: string[]; stats: string };
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  demo?: { label: string; href: string; icon: "external" | "play" | "download" }[];
  stats: string[];
  image: string;
  platforms?: PlatformCard[];
  screenshots?: Screenshot[];
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "ProductivityX",
    description:
      "A full-stack offline-first productivity system that unifies notes, tasks, calendar, Pomodoro timer, and an AI assistant into a single coherent workspace. One Spring Boot 4 backend serves Android, Desktop (Compose Multiplatform), and Web (React/TypeScript) clients, each of which works fully offline and syncs silently when connectivity returns.",
    tech: ["Spring Boot", "Kotlin", "Jetpack Compose", "TypeScript", "React", "PostgreSQL", "Redis"],
    github: "https://github.com/productivityx-app",
    demo: [
      { label: "Live Web App", href: "https://productivityx-web.vercel.app/login", icon: "external" },
      { label: "Android Demo", href: "https://youtu.be/MkjT6QjkL_U", icon: "play" },
      { label: "Web Demo", href: "https://youtu.be/NObpZm4p51Q", icon: "play" },
      { label: "Download APK", href: "https://github.com/productivityx-app/productivityx_android/releases", icon: "download" },
    ],
    stats: [
      "100K+ lines of code across 4 codebases",
      "60+ REST endpoints, JWT token rotation, Redis rate limiting",
      "Outbox-pattern offline sync with conflict resolution",
    ],
    image: "/projects/px-web-dahboard.png",
    platforms: [
      {
        label: "Android",
        icon: "android",
        screenshots: [
          { src: "/projects/px-android-dashboard.png", alt: "Dashboard" },
          { src: "/projects/px-android-tasks.png", alt: "Tasks" },
          { src: "/projects/px-android-notes.png", alt: "Notes" },
          { src: "/projects/px-android-pomodoro.png", alt: "Pomodoro" },
          { src: "/projects/px-android-Events.png", alt: "Events" },
          { src: "/projects/px-android-profile and main settings.png", alt: "Profile & Settings" },
        ],
        summary: {
          tagline: "Native mobile client built with Kotlin & Jetpack Compose",
          highlights: [
            "Offline-first with Room DB + outbox sync pattern",
            "Rich text notes editor with PDF generation",
            "Kanban boards, subtasks, recurring calendar events",
            "Pomodoro foreground service, AI chat with SSE streaming",
            "Home screen widgets, voice commands, 19 languages",
          ],
          tech: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "WorkManager", "Retrofit"],
          stats: "78K+ lines · 359 files · 31 ViewModels · 64 API endpoints",
        },
      },
      {
        label: "Web",
        icon: "web",
        screenshots: [
          { src: "/projects/px-web-dahboard.png", alt: "Dashboard" },
          { src: "/projects/px-web-tasks.png", alt: "Tasks" },
          { src: "/projects/px-web-notes.png", alt: "Notes" },
          { src: "/projects/px-web-pomodoro.png", alt: "Pomodoro" },
          { src: "/projects/px-web-events.png", alt: "Events" },
          { src: "/projects/px-web-Settings.png", alt: "Settings" },
        ],
        summary: {
          tagline: "Production-grade SPA built with React 19 & TypeScript",
          highlights: [
            "TipTap rich text editor with Markdown support",
            "Kanban boards with drag-and-drop (dnd-kit)",
            "Pomodoro timer backed by Web Worker for accuracy",
            "Delta sync every 30s, 15 languages, PWA support",
            "shadcn/ui design system with 8 accent colors",
          ],
          tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "React Query"],
          stats: "22K+ lines · 236 files · 24 pages · ~180 components",
        },
      },
      {
        label: "Desktop",
        icon: "desktop",
        screenshots: [
          { src: "/projects/px-desktop-Home.png", alt: "Home" },
          { src: "/projects/px-desktop-Tasks.png", alt: "Tasks" },
          { src: "/projects/px-desktop-Notes.png", alt: "Notes" },
          { src: "/projects/px-desktop-Pomodoro.png", alt: "Pomodoro" },
          { src: "/projects/px-desktop-events-calendar.png", alt: "Events" },
          { src: "/projects/px-desktop-Settings.png", alt: "Settings" },
        ],
        summary: {
          tagline: "Native desktop app with Kotlin & Compose Multiplatform",
          highlights: [
            "36 screens with hand-rolled sealed-class navigation",
            "System tray integration, 12+ keyboard shortcuts",
            "SQLDelight local DB, Ktor networking, Koin DI",
            "AES-256-GCM encrypted export/import (.pxbackup)",
            "Native installers: DMG, MSI, DEB",
          ],
          tech: ["Kotlin", "Compose Desktop", "SQLDelight", "Ktor", "Koin"],
          stats: "37K+ lines · 282 files · 29 ViewModels · 10 feature modules",
        },
      },
    ],
    featured: true,
  },
  {
    title: "WellLogAnalyzer",
    description:
      "An offline hydraulics simulation desktop app for petroleum engineers, built for a technical assessment. A custom hydraulics engine implements SPE and API RP 13D equations (ECD, APL, bit hydraulics), with interactive 2D charts, a 3D wellbore viewer, and one-click Excel/Word report export.",
    tech: ["Kotlin", "Jetpack Compose Desktop", "Clean Architecture"],
    github: "https://github.com/osamachatri/WellLogAnalyzer",
    demo: [{ label: "Demo Video", href: "https://youtu.be/EEMwJ0klpMg", icon: "play" }],
    stats: [
      "19K lines of Kotlin, Clean Architecture",
      "4 rheology models, 17 validation rules",
      "One-click Excel + Word engineering reports",
    ],
    image: "/projects/dashboard.png",
    screenshots: [
      { src: "/projects/dashboard.png", alt: "Dashboard" },
      { src: "/projects/2d-charts.png", alt: "2D Charts" },
      { src: "/projects/3d-viewer.png", alt: "3D Wellbore Viewer" },
      { src: "/projects/simulation.png", alt: "Simulation" },
      { src: "/projects/simulation-batch.png", alt: "Batch Simulation" },
      { src: "/projects/formation-zone-input.png", alt: "Formation Zone Input" },
      { src: "/projects/validated-well-input.png", alt: "Validated Well Input" },
      { src: "/projects/settings.png", alt: "Settings" },
      { src: "/projects/word-excel-export.png", alt: "Word & Excel Export" },
    ],
    featured: false,
  },
  {
    title: "Depan.Go",
    description:
      "A collaborative roadside assistance platform connecting stranded drivers with nearby service providers in remote areas. Includes Android client & provider apps, a TypeScript backend, an admin web panel, and a showcase site — built as a team project at ESI SBA.",
    tech: ["Kotlin", "Android", "TypeScript", "REST APIs"],
    github: "https://github.com/roadside-assistance-platform",
    stats: [
      "Multi-repo platform: Android client, provider app, backend, admin panel",
      "Kotlin + Jetpack Compose for mobile, TypeScript for backend & web",
      "2nd-year team project, ESI SBA",
    ],
    image: "",
    featured: false,
  },
];

function DemoIcon({ icon }: { icon: "external" | "play" | "download" }) {
  if (icon === "play") return <Play size={14} />;
  if (icon === "download") return <Download size={14} />;
  return <ExternalLink size={14} />;
}

function PlatformIcon({ icon }: { icon: "android" | "web" | "desktop" }) {
  if (icon === "android") return <Smartphone size={16} />;
  if (icon === "desktop") return <Monitor size={16} />;
  return <AppWindow size={16} />;
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
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

                {/* Header: title + description + stats + tech (for projects with platforms) */}
                {project.platforms && project.platforms.length > 0 && (
                  <div className="p-6 sm:p-8 pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 shrink-0">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all hover:scale-110"
                            aria-label={`${project.title} GitHub`}
                          >
                            <FiGithub size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <ul className="mb-5 grid gap-1.5 sm:grid-cols-2">
                      {project.stats.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {s}
                        </li>
                      ))}
                    </ul>
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
                )}

                {/* Platform cards — screenshots + descriptions */}
                {project.platforms && project.platforms.length > 0 && (
                  <div className="flex flex-col divide-y divide-slate-200 dark:divide-slate-700/50">
                    {project.platforms.map((platform) => (
                      platform.icon === "android" ? (
                        <div
                          key={platform.label}
                          className="grid grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8"
                        >
                          {/* Screenshot — centered in left half */}
                          <div className="flex items-center justify-center">
                            <div className="w-44 sm:w-52">
                              <ScreenshotCarousel
                                screenshots={platform.screenshots}
                                autoPlayInterval={4000}
                                aspect="portrait"
                              />
                            </div>
                          </div>

                          {/* Text — left-aligned in right half */}
                          <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-2">
                              <PlatformIcon icon="android" />
                              <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                Android
                              </span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
                              {platform.summary.tagline}
                            </p>
                            <ul className="space-y-2.5 mb-5 max-w-xs">
                              {platform.summary.highlights.map((h) => (
                                <li key={h} className="flex items-start gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                  {h}
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-1.5 mb-4 justify-center">
                              {platform.summary.tech.map((t) => (
                                <span
                                  key={t}
                                  className="px-2.5 py-1 text-xs font-medium text-primary bg-primary/10 rounded-md border border-primary/10"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                            <p className="text-xs text-slate-400 dark:text-slate-500 font-mono tracking-tight">
                              {platform.summary.stats}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div
                          key={platform.label}
                          className="grid grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8"
                        >
                          {/* Screenshot — centered in left half */}
                          <div className="flex items-center justify-center">
                            <div className="w-full">
                              <ScreenshotCarousel
                                screenshots={platform.screenshots}
                                autoPlayInterval={4000}
                                aspect="landscape"
                              />
                            </div>
                          </div>

                          {/* Text — left-aligned in right half */}
                          <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-2">
                              <PlatformIcon icon={platform.icon} />
                              <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                {platform.label}
                              </span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                              {platform.summary.tagline}
                            </p>
                            <ul className="space-y-2.5 mb-5">
                              {platform.summary.highlights.map((h) => (
                                <li key={h} className="flex items-start gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                  {h}
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {platform.summary.tech.map((t) => (
                                <span
                                  key={t}
                                  className="px-2.5 py-1 text-xs font-medium text-primary bg-primary/10 rounded-md border border-primary/10"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                            <p className="text-xs text-slate-400 dark:text-slate-500 font-mono tracking-tight">
                              {platform.summary.stats}
                            </p>
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                )}

                {/* Links (for projects with platforms) */}
                {project.platforms && project.platforms.length > 0 && project.demo && project.demo.length > 0 && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 flex flex-wrap gap-3 border-t border-slate-100 dark:border-slate-700/50">
                    {project.demo.map((d) => (
                      <a
                        key={d.label}
                        href={d.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                      >
                        <DemoIcon icon={d.icon} />
                        {d.label}
                      </a>
                    ))}
                  </div>
                )}

                {/* Non-platform projects: title → carousel → links */}
                {!project.platforms && (
                  <>
                    {/* Header: title + description + stats + tech */}
                    <div className="p-6 sm:p-8 pb-0">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 shrink-0">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 rounded-xl text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all hover:scale-110"
                              aria-label={`${project.title} GitHub`}
                            >
                              <FiGithub size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                        {project.description}
                      </p>
                      <ul className="mb-5 grid gap-1.5 sm:grid-cols-2">
                        {project.stats.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {s}
                          </li>
                        ))}
                      </ul>
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

                    {/* Carousel */}
                    {project.screenshots && project.screenshots.length > 0 && (
                      <div className="p-6 sm:p-8">
                        <ScreenshotCarousel screenshots={project.screenshots} autoPlayInterval={4000} />
                      </div>
                    )}

                    {!project.screenshots || project.screenshots.length === 0 ? (
                      project.image ? (
                        <div className="p-6 sm:p-8">
                          <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900 rounded-xl">
                            <img
                              src={project.image}
                              alt={`${project.title} screenshot`}
                              loading="lazy"
                              className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                        </div>
                      ) : null
                    ) : null}

                    {/* Links */}
                    {project.demo && project.demo.length > 0 && (
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 flex flex-wrap gap-3 border-t border-slate-100 dark:border-slate-700/50">
                        {project.demo.map((d) => (
                          <a
                            key={d.label}
                            href={d.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                          >
                            <DemoIcon icon={d.icon} />
                            {d.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
