import { motion } from "framer-motion";

export default function ImageReveal({
  src,
  alt = "",
  className = "",
  style = {},
}) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        ...style,
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 1,
        }}
        style={{
          width: "100%",
          height: "100%",
          minHeight: "250px",
          objectFit: "cover",
          display: "block",
        }}
        onLoad={() => {
          console.log("Image loaded:", src);
        }}
        onError={() => {
          console.error("Image failed:", src);
        }}
      />
    </div>
  );
}