import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "../data/stats";
import { useReducedMotion } from "../hooks/useReducedMotion";
import SectionLabel from "../components/ui/SectionLabel";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    const duration = 1400;
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value]);

  return (
    <span
      ref={ref}
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(2.75rem, 6vw, 5rem)",
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {display}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ marginBottom: "clamp(2.5rem, 6vw, 4rem)" }}>
          <SectionLabel chapter="Ch. 07" label="By The Numbers" />
          <h2
            className="section-heading"
            style={{ marginTop: "1rem", maxWidth: "16ch" }}
          >
            Seventy-eight years, in scale.
          </h2>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(244,241,234,0.15)",
            borderBottom: "1px solid rgba(244,241,234,0.15)",
          }}
        >
          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  padding: "2.5rem 1.5rem",
                  borderRight:
                    i < stats.length - 1 ? "1px solid rgba(244,241,234,0.1)" : "none",
                }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
                <p
                  style={{
                    marginTop: "0.75rem",
                    fontSize: "0.78rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-stone)",
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
