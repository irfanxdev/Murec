import { useState } from "react";

const WORDS = ["Trust", "Quality", "Legacy", "Innovation"];

export default function Marquee() {
  const [paused, setPaused] = useState(false);
  const loopText = [...WORDS, ...WORDS];

  return (
    <div
      style={{
        borderTop: "1px solid rgba(244,241,234,0.08)",
        borderBottom: "1px solid rgba(244,241,234,0.08)",
        padding: "1.75rem 0",
        overflow: "hidden",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`marquee-track ${paused ? "marquee-track--paused" : ""}`}>
        {[0, 1].map((copy) => (
          <div key={copy} style={{ display: "flex" }}>
            {loopText.map((word, i) => (
              <span
                key={`${copy}-${i}`}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 7vw, 5rem)",
                  color: "transparent",
                  WebkitTextStroke: "1px var(--color-sand)",
                  padding: "0 1.5rem",
                  whiteSpace: "nowrap",
                }}
              >
                {word}
                <span style={{ WebkitTextStroke: "1px var(--color-gold)" }}>
                  {" "}
                  &mdash;
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
