import { lazy, Suspense } from "react";
import SkipLink from "./components/SkipLink";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));

function LoadingSection() {
  return (
    <div className="py-20 px-4 animate-pulse">
      <div className="max-w-4xl mx-auto h-64 bg-slate-100 dark:bg-slate-800/50 rounded-2xl" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 noise-overlay">
      <SkipLink />
      <ScrollProgress />
      <Navigation />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<LoadingSection />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
