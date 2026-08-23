import { motion } from "framer-motion";

/**
 * Top and bottom bars that hold the frame closed like a shutter,
 * then draw open to reveal the hero — the visual grammar of a film
 * beginning, not a website loading. Fires once, right after the
 * preloader exits, then fully retracts (it does not persist as a
 * permanent frame, so it never competes with the floating navbar).
 */
export default function Letterbox({ play }) {
  const bar = {
    initial: { height: "42vh" },
    animate: { height: "0vh" },
  };

  return (
    <>
      <motion.div
        aria-hidden="true"
        initial="initial"
        animate={play ? "animate" : "initial"}
        variants={bar}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "var(--color-ink)",
          zIndex: 400,
          pointerEvents: "none",
        }}
      />
      <motion.div
        aria-hidden="true"
        initial="initial"
        animate={play ? "animate" : "initial"}
        variants={bar}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "var(--color-ink)",
          zIndex: 400,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
