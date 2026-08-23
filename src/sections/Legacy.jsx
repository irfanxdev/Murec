import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealText from "../components/ui/RevealText";
import ImageReveal from "../components/ui/ImageReveal";
import MagneticButton from "../components/ui/MagneticButton";
import SectionLabel from "../components/ui/SectionLabel";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Legacy() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const numberY = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : 60, reduced ? 0 : -60]);

  return (
    <section id="legacy" ref={ref} className="section">
      <div
        className="container legacy-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "0.9fr 1.6fr",
          gap: "clamp(2rem, 5vw, 5rem)",
          alignItems: "start",
        }}
      >
        <motion.div style={{ y: numberY }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 9vw, 8rem)",
              lineHeight: 0.9,
              display: "block",
              color: "var(--color-cream)",
            }}
          >
            78+
          </span>
          <span
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-stone)",
            }}
          >
            Years
          </span>
        </motion.div>

        <div>
          <SectionLabel chapter="Ch. 01" label="Legacy" />
          <RevealText
            as="h2"
            text="THE LEGACY BEYOND COMPARE"
            className="section-heading"
            style={{ marginTop: "1rem" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              marginTop: "1.75rem",
              maxWidth: "56ch",
              fontSize: "1.1rem",
              color: "var(--color-sand)",
            }}
          >
            For over seven decades, the family stood for perseverance,
            integrity, and nation-building through enterprise &mdash; from
            tobacco and steel to dairy, education, and now real estate. Every
            step was guided by one oath: quality before profit, trust before
            everything.
          </motion.p>

          <div style={{ marginTop: "2.25rem" }}>
            <MagneticButton href="#collection">Our History</MagneticButton>
          </div>

          <ImageReveal
            src="https://murec.com/images/vision.jpg"
            alt="Architectural detail representing MUREC's vision for urban living"
            style={{ marginTop: "3.5rem", aspectRatio: "16 / 9" }}
          />
        </div>
      </div>
    </section>
  );
}
