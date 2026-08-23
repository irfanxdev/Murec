import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Projects", href: "#collection" },
  { label: "About", href: "#legacy" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ menuOpen, onToggleMenu }) {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const onScroll = () => setFloating(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      style={{
        position: "fixed",
        top: floating ? "1rem" : 0,
        left: 0,
        right: 0,
        zIndex: 60,
        display: "flex",
        justifyContent: "center",
        padding: floating ? "0" : "0 var(--gutter)",
        transition: "top 0.4s var(--ease-premium)",
      }}
    >
      <nav
        style={{
          width: floating ? "min(92%, 960px)" : "100%",
          maxWidth: "var(--max-width)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: floating ? "0.85rem 1.75rem" : "1.75rem 0",
          borderRadius: floating ? "999px" : 0,
          background: floating ? "rgba(17,17,15,0.55)" : "transparent",
          backdropFilter: floating ? "blur(16px)" : "none",
          WebkitBackdropFilter: floating ? "blur(16px)" : "none",
          border: floating
            ? "1px solid rgba(244,241,234,0.08)"
            : "1px solid transparent",
          transition:
            "all 0.5s var(--ease-premium), border-radius 0.5s var(--ease-premium)",
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.35rem",
            letterSpacing: "0.04em",
          }}
        >
          MUREC
        </a>

        <div
          className="nav-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-sand)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={onToggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{
            fontSize: "0.78rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>
    </motion.header>
  );
}
