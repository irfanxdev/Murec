import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { principles } from "../data/principles";
import SectionLabel from "../components/ui/SectionLabel";

export default function Principles() {
  const [active, setActive] = useState(0);
  const current = principles[active];

  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="container">
        <SectionLabel chapter="Ch. 03" label="Principles" />
      </div>

      <div
        className="principles-layout"
        style={{
          position: "relative",
          marginTop: "3rem",
          minHeight: "70vh",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `linear-gradient(90deg, var(--color-ink) 0%, rgba(17,17,15,0.2) 60%), url(${current.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden
          />
        </AnimatePresence>

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "var(--color-gold)",
                }}
              >
                {current.id}
              </span>
              <h3
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  margin: "0.5rem 0 1.25rem",
                }}
              >
                {current.title}
              </h3>
              <p
                style={{
                  maxWidth: "40ch",
                  color: "var(--color-sand)",
                  fontSize: "1.05rem",
                }}
              >
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div
            role="tablist"
            aria-label="MUREC principles"
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "3rem",
              borderTop: "1px solid rgba(244,241,234,0.12)",
            }}
          >
            {principles.map((p, i) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                onMouseEnter={() => {
                  if (window.matchMedia("(hover: hover)").matches) setActive(i);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  padding: "1rem 0",
                  borderBottom: "1px solid rgba(244,241,234,0.12)",
                  textAlign: "left",
                  color: active === i ? "var(--color-cream)" : "var(--color-stone)",
                  transition: "color 0.3s var(--ease-premium)",
                }}
              >
                <span style={{ fontSize: "0.85rem", fontFamily: "var(--font-body)" }}>
                  {p.id}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  }}
                >
                  {p.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
