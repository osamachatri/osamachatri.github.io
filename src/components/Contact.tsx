import { useState } from "react";
import FadeIn from "./ui/FadeIn";
import { Mail, MapPin, Copy, Check, Send } from "lucide-react";
import { FiGithub } from "react-icons/fi";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "osamachatri@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="eyebrow">// 06 Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-4 leading-tight">
            Get in Touch
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mb-12">
            I'm actively looking for software engineering opportunities — whether full-time, internship, or freelance. Let's talk.
          </p>
        </FadeIn>

        {/* Contact Cards - Same Height */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email Card */}
          <FadeIn delay={0.1}>
            <button
              onClick={copyEmail}
              className="group h-full w-full text-left flex flex-col p-7 bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-700/60 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="p-3.5 bg-primary/10 rounded-2xl group-hover:bg-primary/15 transition-colors mb-6">
                {copied ? <Check size={26} className="text-emerald-500" /> : <Mail size={26} className="text-primary" />}
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">Email</p>
                  <Copy size={18} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-mono-ui break-all flex-1">
                  {email}
                </p>
              </div>

              {copied && (
                <p className="text-emerald-500 text-sm font-medium mt-4">✓ Copied to clipboard!</p>
              )}
            </button>
          </FadeIn>

          {/* GitHub Card */}
          <FadeIn delay={0.2}>
            <a
              href="https://github.com/osamachatri"
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full flex flex-col p-7 bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-700/60 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="p-3.5 bg-primary/10 rounded-2xl group-hover:bg-primary/15 transition-colors mb-6">
                <FiGithub size={26} className="text-primary" />
              </div>

              <div className="flex-1 flex flex-col">
                <p className="text-lg font-semibold text-slate-900 dark:text-white mb-3">GitHub</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-mono-ui">@osamachatri</p>
              </div>

              <div className="mt-auto pt-6 text-xs text-primary/70 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Visit Profile →
              </div>
            </a>
          </FadeIn>

          {/* Location Card */}
          <FadeIn delay={0.3}>
            <div className="h-full flex flex-col p-7 bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-700/60 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <div className="p-3.5 bg-primary/10 rounded-2xl mb-6">
                <MapPin size={26} className="text-primary" />
              </div>

              <div className="flex-1 flex flex-col">
                <p className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Location</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Biskra, Algeria</p>
                <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">Open to Remote • Hybrid • Relocation</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Direct Message Box */}
        <FadeIn delay={0.4}>
          <div className="mt-16 p-10 rounded-3xl bg-gradient-to-br from-primary/5 to-violet-500/5 dark:from-primary/10 dark:to-violet-500/10 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Prefer a direct conversation?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
              I'm actively looking for software engineering opportunities — whether full-time, internship, or freelance. Let's talk.
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-hover text-white font-medium rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <Send size={18} />
              Send an Email
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}