import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealText from "../components/ui/RevealText";
import ScrollIndicator from "../components/ui/ScrollIndicator";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Hero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.14]
  );

  const imgOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.35]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 60]
  );

  return (
    <section
      id="top"
      ref={ref}
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "640px",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "var(--color-ink)",
      }}
    >
      {/* Background Image */}
      <motion.img
        src="https://murec.com/images/banner.jpg"
        alt="Forest Walk villas, a MUREC development set among dense greenery"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          scale: reduced ? 1 : imgScale,
          opacity: reduced ? 0.55 : imgOpacity,
        }}
      />

      {/* Cinematic dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(17,17,15,0.65) 0%, rgba(17,17,15,0.15) 38%, rgba(17,17,15,0.35) 62%, rgba(17,17,15,0.94) 100%)",
        }}
      />

      {/* Warm highlight overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(157,130,87,0.12) 0%, transparent 55%)",
        }}
      />

      {/* Hero Content */}
      <motion.div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          paddingBottom: "clamp(3.5rem, 9vw, 6rem)",
          y: reduced ? 0 : contentY,
        }}
      >
        {/* Prologue */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: "inline-block",
            fontSize: "0.72rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            marginBottom: "1.5rem",
          }}
        >
          Prologue
        </motion.span>

        {/* Animated Heading */}
        <RevealText
          as="h1"
          text={"THE LEGACY\nBEYOND COMPARE"}
          splitBy="lines"
          delay={0.45}
          className="hero-heading"
        />

        {/* Bottom Content */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "2.5rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              maxWidth: "34ch",
              fontSize: "1rem",
              letterSpacing: "0.02em",
              color: "var(--color-sand)",
              textTransform: "uppercase",
            }}
          >
            Built on 78 years of principle. Designed for tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.8,
            }}
          >
            <ScrollIndicator />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}