import { motion } from "framer-motion";
import { projects } from "../data/projects";
import RevealText from "../components/ui/RevealText";
import MagneticButton from "../components/ui/MagneticButton";
import SectionLabel from "../components/ui/SectionLabel";
import { useIsDesktop } from "../hooks/useMediaQuery";

export default function Collection() {
  const project = projects[0];
  const isDesktop = useIsDesktop();

  return (
    <section id="collection" className="section">
      <div className="container">
        <SectionLabel chapter="Ch. 04" label="The Collection" />
        <RevealText
          as="h2"
          text="THE FIRST\nADDRESS IN\nTHE COLLECTION"
          splitBy="lines"
          className="section-heading"
          style={{ maxWidth: "20ch", marginTop: "1rem" }}
        />

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={isDesktop ? "hover" : undefined}
          style={{
            marginTop: "clamp(3rem, 6vw, 5rem)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ overflow: "hidden", aspectRatio: "16 / 8" }}>
            <motion.img
              src={project.image}
              alt={`${project.title} — ${project.location}`}
              loading="lazy"
              variants={{
                hover: { scale: 1.03, filter: "brightness(0.85)" },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: "1.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                }}
              >
                {project.id} &mdash; MUREC Collection
              </span>
              <motion.h3
                variants={{ hover: { y: -4 } }}
                transition={{ duration: 0.4 }}
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  marginTop: "0.4rem",
                }}
              >
                {project.title}
              </motion.h3>
              <p style={{ color: "var(--color-stone)", marginTop: "0.35rem" }}>
                {project.location}
              </p>
            </div>
            <MagneticButton href="#contact">Explore</MagneticButton>
          </div>

          <p
            style={{
              marginTop: "1.5rem",
              maxWidth: "62ch",
              color: "var(--color-sand)",
            }}
          >
            {project.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
