import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timeline } from "../data/timeline";
import { useReducedMotion } from "../hooks/useReducedMotion";
import SectionLabel from "../components/ui/SectionLabel";

const AUTO_ADVANCE_MS = 4500;
const N = timeline.length;

// Alternating cinematic transitions so consecutive slides never feel identical —
// this is what sells the "movie trailer, not a slideshow" feeling.
const IMAGE_VARIANTS = [
  {
    initial: { opacity: 0, scale: 1.18, x: 40 },
    animate: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 1.06, x: -40 },
  },
  {
    initial: { opacity: 0, scale: 1.1, clipPath: "inset(0 0 100% 0)" },
    animate: { opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)" },
    exit: { opacity: 0, scale: 1.04, clipPath: "inset(0 100% 0 0)" },
  },
];

const TEXT_VARIANTS = {
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

export default function Timeline() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const timerRef = useRef(null);
  const entry = timeline[index];
  const imgVariant = IMAGE_VARIANTS[index % IMAGE_VARIANTS.length];

  const goTo = useCallback((i) => {
    setIndex(((i % N) + N) % N);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Auto-advance on a timer, like a slideshow/trailer — pauses on hover,
  // focus, or reduced-motion preference, and resets whenever the index
  // changes (including manual clicks) so the pacing always feels intentional.
  useEffect(() => {
    if (reduced || paused) return;
    timerRef.current = setTimeout(next, AUTO_ADVANCE_MS);
    return () => clearTimeout(timerRef.current);
  }, [index, paused, reduced, next]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="MUREC history, 1948 to 2026"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "560px",
        overflow: "hidden",
        background: "var(--color-ink)",
      }}
    >
      {/* Background image layer — crossfades + moves like a film cut */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={entry.year}
          initial={reduced ? { opacity: 0 } : imgVariant.initial}
          animate={reduced ? { opacity: 1 } : imgVariant.animate}
          exit={reduced ? { opacity: 0 } : imgVariant.exit}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "absolute", inset: 0 }}
        >
          <img
            src={entry.image}
            alt={`MUREC in ${entry.year}: ${entry.title}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(17,17,15,0.45) 0%, rgba(17,17,15,0.35) 40%, rgba(17,17,15,0.9) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Foreground content — fixed viewport, never scrolls */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <SectionLabel chapter="Ch. 02" label="History" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={entry.year}
            initial={reduced ? { opacity: 0 } : TEXT_VARIANTS.initial}
            animate={reduced ? { opacity: 1 } : TEXT_VARIANTS.animate}
            exit={reduced ? { opacity: 0 } : TEXT_VARIANTS.exit}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
                color: "var(--color-gold)",
                lineHeight: 0.9,
                display: "block",
              }}
            >
              {entry.year}
            </span>
            <h3
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                margin: "0.75rem 0 1rem",
                maxWidth: "18ch",
              }}
            >
              {entry.title}
            </h3>
            <p style={{ maxWidth: "48ch", color: "var(--color-sand)" }}>
              {entry.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Click-through arrows */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            transform: "translateY(-50%)",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 var(--gutter)",
            pointerEvents: "none",
          }}
        >
          <button
            onClick={prev}
            aria-label="Previous era"
            style={{
              pointerEvents: "auto",
              width: "48px",
              height: "48px",
              borderRadius: "999px",
              border: "1px solid rgba(244,241,234,0.25)",
              color: "var(--color-cream)",
              fontSize: "1.1rem",
              backdropFilter: "blur(6px)",
            }}
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next era"
            style={{
              pointerEvents: "auto",
              width: "48px",
              height: "48px",
              borderRadius: "999px",
              border: "1px solid rgba(244,241,234,0.25)",
              color: "var(--color-cream)",
              fontSize: "1.1rem",
              backdropFilter: "blur(6px)",
            }}
          >
            →
          </button>
        </div>

        {/* Scrubber: click any year to jump; active segment fills gold */}
        <div style={{ marginTop: "clamp(2rem, 6vw, 3.5rem)" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            {timeline.map((t, i) => (
              <button
                key={t.year}
                onClick={() => goTo(i)}
                aria-label={`Jump to ${t.year}, ${t.title}`}
                aria-current={i === index}
                style={{
                  flex: 1,
                  height: "3px",
                  borderRadius: "2px",
                  background:
                    i === index ? "transparent" : "rgba(244,241,234,0.18)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {i === index && (
                  <motion.span
                    key={entry.year}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: paused || reduced ? 1 : 1 }}
                    transition={{
                      duration: reduced || paused ? 0.3 : AUTO_ADVANCE_MS / 1000,
                      ease: "linear",
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      transformOrigin: "left",
                      background: "var(--color-gold)",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "0.6rem",
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              color: "var(--color-stone)",
            }}
          >
            <span>{timeline[0].year}</span>
            <span style={{ color: "var(--color-gold)" }}>
              {index + 1} / {N}
            </span>
            <span>{timeline[N - 1].year}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
