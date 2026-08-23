import { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * The site's signature CTA: no button chrome, just editorial
 * text with an expanding underline and a nudging arrow.
 * On desktop with a mouse, the label drifts slightly toward
 * the cursor ("magnetic") for a premium, tactile feel.
 */
export default function MagneticButton({
  children,
  href = "#",
  onClick,
  arrow = "\u2197",
  large = false,
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.18, y: relY * 0.3 });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const Tag = motion.a;

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="magnetic-button"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.75rem",
        fontFamily: "var(--font-body)",
        fontSize: large ? "1rem" : "0.85rem",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        paddingBottom: "0.6rem",
        position: "relative",
        color: "inherit",
      }}
    >
      <span>{children}</span>
      <motion.span
        whileHover={{ x: 4, y: -4 }}
        style={{ display: "inline-block" }}
      >
        {arrow}
      </motion.span>
      <span
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          height: "1px",
          width: "100%",
          background: "currentColor",
          opacity: 0.35,
          transformOrigin: "left",
        }}
        className="magnetic-button__line"
      />
    </Tag>
  );
}
