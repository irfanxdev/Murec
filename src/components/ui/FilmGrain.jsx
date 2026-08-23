/**
 * A near-invisible grain layer over the whole page — the difference
 * between "dark website" and "film". Pure SVG turbulence, no image
 * asset, fixed and non-interactive. Kept extremely subtle: this is
 * texture, not a visual effect anyone should consciously notice.
 */
export default function FilmGrain() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        pointerEvents: "none",
        opacity: 0.045,
        mixBlendMode: "overlay",
      }}
    >
      <svg width="100%" height="100%">
        <filter id="grainFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainFilter)" />
      </svg>
    </div>
  );
}
