import { motion } from "framer-motion";

export default function ScrollIndicator({ label = "Scroll to explore" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        fontSize: "0.7rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--color-stone)",
      }}
    >
      <span>{label}</span>
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ display: "inline-block" }}
        aria-hidden
      >
        ↓
      </motion.span>
    </div>
  );
}
