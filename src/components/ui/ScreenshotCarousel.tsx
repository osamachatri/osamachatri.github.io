import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface Screenshot {
  src: string;
  alt: string;
}

interface ScreenshotCarouselProps {
  screenshots: Screenshot[];
  autoPlayInterval?: number;
  aspect?: "landscape" | "portrait";
}

export default function ScreenshotCarousel({
  screenshots,
  autoPlayInterval = 4000,
  aspect = "landscape",
}: ScreenshotCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  const total = screenshots.length;
  const isPortrait = aspect === "portrait";

  const goTo = useCallback(
    (index: number) => {
      setCurrent(index);
    },
    [],
  );

  const next = useCallback(() => {
    goTo((current + 1) % total);
  }, [current, total, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + total) % total);
  }, [current, total, goTo]);

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(next, autoPlayInterval);
    return () => clearInterval(id);
  }, [paused, next, total, autoPlayInterval]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, next, prev]);

  if (total === 0) return null;

  const translateX = -(current * 100);

  return (
    <>
      <div
        className="relative w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 group/carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Image track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {screenshots.map((shot) => (
            <div
              key={shot.src}
              className={`w-full shrink-0 ${isPortrait ? "aspect-[9/16]" : "aspect-video"}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className={`h-full w-full ${isPortrait ? "object-contain" : "object-cover"}`}
              />
            </div>
          ))}
        </div>

        {/* Fullscreen button */}
        <button
          onClick={() => setLightbox(true)}
          className="absolute top-2 right-2 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100"
          aria-label="View full screen"
        >
          <Maximize2 size={14} />
        </button>

        {/* Arrows overlay */}
        {total > 1 && (
          <>
            <button
              onClick={() => prev()}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={isPortrait ? 14 : 18} />
            </button>
            <button
              onClick={() => next()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
              aria-label="Next screenshot"
            >
              <ChevronRight size={isPortrait ? 14 : 18} />
            </button>
          </>
        )}

        {/* Caption overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
          <p className={`${isPortrait ? "text-xs" : "text-sm"} text-white font-medium`}>
            {screenshots[current].alt}
          </p>
        </div>

        {/* Dots overlay */}
        {total > 1 && (
          <div className="absolute bottom-10 inset-x-0 flex justify-center gap-1">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "bg-white w-3" : "bg-white/40 hover:bg-white/70"
                } ${isPortrait ? "w-1 h-1" : "w-1.5 h-1.5"}`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(false)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {/* Caption */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <p className="text-sm text-white font-medium bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
              {screenshots[current].alt}
              <span className="text-white/50 ml-2">
                {current + 1} / {total}
              </span>
            </p>
          </div>

          {/* Prev */}
          {total > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Image */}
          <img
            src={screenshots[current].src}
            alt={screenshots[current].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg select-none"
          />

          {/* Next */}
          {total > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Next screenshot"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Bottom dots */}
          {total > 1 && (
            <div className="absolute bottom-6 inset-x-0 flex justify-center gap-1.5 z-10">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); goTo(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "bg-white w-4 h-1.5" : "bg-white/40 hover:bg-white/70 w-1.5 h-1.5"
                  }`}
                  aria-label={`Go to screenshot ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>,
        document.body,
      )}
    </>
  );
}
