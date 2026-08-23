import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import RibbonBackground from "./ui/RibbonBackground";

/**
 * Full-screen branded preloader. Capped well under 2s of
 * perceived load time regardless of actual asset load speed,
 * per the brief's "do not make the loader unnecessarily slow" rule.
 */
export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      onDone();
      return;
    }
    const start = performance.now();
    const durationMs = 1600;

    let frame;
    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100));
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        setTimeout(onDone, 550);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onDone, reduced]);

  if (reduced) return null;

  return (
    <AnimatePresence>
      {!exiting || progress < 100 ? (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "var(--color-ink)",
            color: "var(--color-cream)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <RibbonBackground />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 50% 45%, rgba(17,17,15,0.35) 0%, rgba(17,17,15,0.85) 70%)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.25rem",
              padding: "0 1.5rem",
              textAlign: "center",
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "var(--color-stone)",
              }}
            >
              Building Legacies
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(2.75rem, 9vw, 6rem)",
                letterSpacing: "0.01em",
                lineHeight: 1,
              }}
            >
              MUREC
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
                color: "var(--color-sand)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {progress}%
            </motion.span>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "220px" }}
              transition={{ delay: 1, duration: 0.6 }}
              className="premium-progress"
              style={{
                height: "2px",
                background: "rgba(244,241,234,0.12)",
                position: "relative",
                marginTop: "0.5rem",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <div
                className="premium-progress__fill"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: `${progress}%`,
                  transition: "width 0.05s linear",
                  borderRadius: "2px",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
