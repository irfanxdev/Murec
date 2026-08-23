import { motion } from "framer-motion";
import { sustainability } from "../data/stats";
import RevealText from "../components/ui/RevealText";
import ImageReveal from "../components/ui/ImageReveal";
import SectionLabel from "../components/ui/SectionLabel";

export default function Sustainability() {
  return (
    <section id="sustainability" className="section section--light">
      <div className="container">
        <SectionLabel chapter="Ch. 06" label="Sustainability" light />
        <RevealText
          as="h2"
          text="BUILDING FOR\nTHE FUTURE"
          splitBy="lines"
          className="section-heading"
          style={{ color: "var(--color-ink)", marginTop: "1rem" }}
        />
        <p style={{ maxWidth: "56ch", marginTop: "1.5rem", color: "var(--color-charcoal)" }}>
          The first MUREC collection is envisioned to align with IGBC
          certification standards &mdash; sustainability treated as a design
          principle, thoughtfully, quietly, and with long-term impact in mind.
        </p>

        <ImageReveal
          src="https://murec.com/images/sunsability.webp"
          alt="Landscaped green corridor at Forest Walk"
          style={{ marginTop: "3rem", aspectRatio: "21 / 9" }}
        />

        <div
          className="sustainability-grid"
          style={{
            marginTop: "3.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
        >
          {sustainability.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                borderTop: "1px solid rgba(17,17,15,0.15)",
                paddingTop: "1.25rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "var(--color-gold)",
                }}
              >
                {item.id}
              </span>
              <h4
                style={{
                  fontSize: "1.35rem",
                  margin: "0.5rem 0 0.6rem",
                  color: "var(--color-ink)",
                }}
              >
                {item.title}
              </h4>
              <p style={{ fontSize: "0.95rem", color: "var(--color-charcoal)" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
