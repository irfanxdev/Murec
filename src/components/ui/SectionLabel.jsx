import { motion } from "framer-motion";

/**
 * "CH. 01 — LEGACY" style marker. This is the signature structural
 * device of the redesign: every section is framed as a chapter in
 * one continuous story of MUREC's 78 years, from Prologue (Hero)
 * through Ch. 01–07 to Epilogue (Final CTA). The numbering is
 * meaningful here — it mirrors the real chronology of the brand's
 * history, not decoration borrowed from an unrelated template.
 */
export default function SectionLabel({ chapter, label, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.9rem",
        fontSize: "0.72rem",
        letterSpacing: "0.24em",
        textTransform: "uppercase",
        color: light ? "var(--color-charcoal)" : "var(--color-sand)",
      }}
    >
      {chapter && (
        <>
          <span style={{ color: "var(--color-gold)", fontWeight: 600 }}>
            {chapter}
          </span>
          <span
            aria-hidden
            style={{
              width: "22px",
              height: "1px",
              background: "var(--color-gold)",
              opacity: 0.6,
            }}
          />
        </>
      )}
      <span>{label}</span>
    </motion.div>
  );
}
