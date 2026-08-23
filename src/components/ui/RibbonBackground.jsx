import { motion } from "framer-motion";

/**
 * The signature decorative backdrop: soft, blurred ribbons of light
 * curving diagonally across a dark field, like draped silk. Used on
 * the preloader and, at low opacity, behind the timeline section.
 * Purely decorative (aria-hidden) — text always sits on top with a
 * scrim, never relying on the ribbons for contrast.
 */
const RIBBONS = [
  { d: "M -100 60 C 250 180, 150 420, 480 560 C 780 690, 700 900, 1000 1000", width: 46, opacity: 0.7, delay: 0, highlight: true },
  { d: "M 60 -60 C 300 120, 120 380, 420 520 C 700 650, 640 860, 920 980", width: 26, opacity: 0.55, delay: 0.15 },
  { d: "M 380 -80 C 560 100, 460 340, 700 480 C 920 610, 880 820, 1120 960", width: 58, opacity: 0.45, delay: 0.3 },
  { d: "M 700 -60 C 860 140, 760 360, 980 500 C 1180 630, 1140 840, 1360 980", width: 22, opacity: 0.65, delay: 0.1, highlight: true },
  { d: "M 980 -80 C 1140 120, 1020 360, 1240 500 C 1440 630, 1400 840, 1600 980", width: 38, opacity: 0.4, delay: 0.4 },
  { d: "M 1280 -60 C 1440 140, 1320 360, 1540 500 C 1740 630, 1700 840, 1900 980", width: 32, opacity: 0.6, delay: 0.2, highlight: true },
];

export default function RibbonBackground({ animate = true, className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`ribbon-bg ${animate ? "ribbon-bg--drift" : ""} ${className}`}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <svg
        viewBox="0 0 1920 1000"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2e2116" />
            <stop offset="45%" stopColor="var(--color-gold)" />
            <stop offset="100%" stopColor="#241b13" />
          </linearGradient>
          <filter id="ribbonBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        <g filter="url(#ribbonBlur)">
          {RIBBONS.map((ribbon, i) => (
            <motion.path
              key={i}
              d={ribbon.d}
              fill="none"
              stroke="url(#ribbonGradient)"
              strokeWidth={ribbon.width}
              strokeLinecap="round"
              opacity={ribbon.opacity}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2.2,
                delay: ribbon.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}
        </g>

        {RIBBONS.filter((r) => r.highlight).map((ribbon, i) => (
          <motion.path
            key={`sheen-${i}`}
            d={ribbon.d}
            fill="none"
            stroke="#c9ad82"
            strokeWidth={1.5}
            strokeLinecap="round"
            opacity={0.45}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.2,
              delay: ribbon.delay + 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </svg>
    </div>
  );
}
