import { motion, AnimatePresence } from "framer-motion";

const ITEMS = [
  { n: "01", label: "Home", href: "#top" },
  { n: "02", label: "About", href: "#legacy" },
  { n: "03", label: "Collection", href: "#collection" },
  { n: "04", label: "Sustainability", href: "#sustainability" },
  { n: "05", label: "Contact", href: "#contact" },
];

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 70,
            background: "var(--color-ink)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1.75rem var(--gutter) 3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.35rem",
              }}
            >
              MUREC
            </span>
            <button
              onClick={onClose}
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Close
            </button>
          </div>

          <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {ITEMS.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={onClose}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.15 + i * 0.06,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1.25rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 9vw, 3.5rem)",
                  color: "var(--color-cream)",
                  borderBottom: "1px solid rgba(244,241,234,0.08)",
                  padding: "0.6rem 0",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "var(--color-gold)",
                  }}
                >
                  {item.n}
                </span>
                {item.label}
              </motion.a>
            ))}
          </nav>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "1.25rem",
              color: "var(--color-sand)",
            }}
          >
            Let&rsquo;s build something meaningful.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
