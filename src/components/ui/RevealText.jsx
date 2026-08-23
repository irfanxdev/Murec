import { motion } from "framer-motion";

/**
 * Splits text into words or lines and reveals them
 * upward with a staggered fade.
 */
export default function RevealText({
  text,
  as: Tag = "h2",
  className = "",
  style = {},
  delay = 0,
  splitBy = "words",
  once = true,
}) {
  const pieces =
    splitBy === "words" ? text.split(" ") : text.split("\n");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: {
      y: "110%",
      opacity: 0,
    },
    show: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Tag
      className={className}
      style={{
        overflow: "hidden",
        ...style,
      }}
    >
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount: 0.6 }}
        style={{
          display: splitBy === "lines" ? "block" : "inline-block",
        }}
      >
        {pieces.map((piece, i) => (
          <span
            key={i}
            style={{
              display: splitBy === "lines" ? "block" : "inline-block",
              overflow: "hidden",
            }}
          >
            <motion.span
              variants={item}
              style={{
                display: "inline-block",
              }}
            >
              {piece}
              {splitBy === "words" && i < pieces.length - 1
                ? "\u00A0"
                : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}