import { motion } from "framer-motion";

/**
 * Reveals an image with a clip-path wipe + gentle scale settle,
 * used for the Legacy image, project images, and sustainability image.
 */
export default function ImageReveal({ src, alt, className = "", style = {} }) {
  return (
    <div
      className={className}
      style={{ overflow: "hidden", position: "relative", ...style }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        initial={{ clipPath: "inset(0 0 100% 0)", scale: 1.15 }}
        whileInView={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}
