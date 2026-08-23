import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { zones } from "../data/projects";
import SectionLabel from "../components/ui/SectionLabel";
import { useIsDesktop } from "../hooks/useMediaQuery";
import { useReducedMotion } from "../hooks/useReducedMotion";

function DesktopHorizontal() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(zones.length - 1) * 100}%`]);
  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} style={{ height: `${zones.length * 100}vh`, position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <motion.div style={{ display: "flex", height: "100%", x }}>
          {zones.map((zone) => (
            <div
              key={zone.id}
              style={{
                minWidth: "100vw",
                height: "100%",
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <img
                src={zone.image}
                alt={zone.name}
                loading="lazy"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(0deg, rgba(17,17,15,0.85) 0%, rgba(17,17,15,0.15) 55%)",
                }}
              />
              <div
                className="container"
                style={{ position: "relative", zIndex: 2, paddingBottom: "5rem" }}
              >
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--color-gold)" }}>
                  {zone.id}
                </span>
                <h3 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", margin: "0.5rem 0 1rem" }}>
                  {zone.name}
                </h3>
                <p style={{ maxWidth: "48ch", color: "var(--color-sand)" }}>
                  {zone.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: "clamp(1.5rem, 5vw, 2.5rem)",
            zIndex: 3,
          }}
        >
          <div className="container">
            <div
              style={{
                position: "relative",
                height: "1px",
                background: "rgba(244,241,234,0.15)",
              }}
            >
              <motion.div
                className="premium-progress__fill"
                style={{ position: "absolute", inset: 0, width: fillWidth }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "0.6rem",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "var(--color-stone)",
              }}
            >
              {zones.map((zone) => (
                <span key={zone.id}>{zone.id}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileStack() {
  return (
    <div className="container" style={{ display: "grid", gap: "1.5rem" }}>
      {zones.map((zone) => (
        <div key={zone.id} style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={zone.image}
            alt={zone.name}
            loading="lazy"
            style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover" }}
          />
          <div style={{ padding: "1.25rem 0" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--color-gold)" }}>{zone.id}</span>
            <h3 style={{ fontSize: "1.75rem", margin: "0.4rem 0 0.6rem" }}>{zone.name}</h3>
            <p style={{ color: "var(--color-stone)" }}>{zone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProjectExperience() {
  const isDesktop = useIsDesktop();
  const reduced = useReducedMotion();

  return (
    <section className="section" style={{ paddingBottom: isDesktop && !reduced ? 0 : undefined }}>
      <div className="container" style={{ marginBottom: "3rem" }}>
        <SectionLabel chapter="Ch. 05" label="The Masterplan" />
        <h2 className="section-heading" style={{ marginTop: "1rem" }}>
          A masterplan that flows like a forest.
        </h2>
      </div>

      {isDesktop && !reduced ? <DesktopHorizontal /> : <MobileStack />}
    </section>
  );
}
