export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        position: "relative",
        background: "var(--color-ink)",
        color: "var(--color-cream)",
        overflow: "hidden",
        paddingTop: "clamp(4rem, 8vw, 6rem)",
      }}
    >
      <div
        aria-hidden
        style={{
          width: "1px",
          height: "clamp(2rem, 5vw, 3.5rem)",
          background: "var(--color-gold)",
          opacity: 0.5,
          margin: "0 auto clamp(2rem, 5vw, 3.5rem)",
        }}
      />

      <div
        className="container footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: "3rem",
          paddingBottom: "3rem",
          borderBottom: "1px solid rgba(244,241,234,0.08)",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.6rem",
              marginBottom: "0.75rem",
            }}
          >
            MUREC
          </p>
          <p style={{ color: "var(--color-stone)", maxWidth: "34ch" }}>
            Building legacies beyond compare. Madhusudan, 2nd Floor, Riana
            Towers, 51&ndash;52, Noida Sector 136, Uttar Pradesh &ndash; 201301.
          </p>
        </div>

        <div>
          <p
            className="eyebrow"
            style={{ marginBottom: "1rem" }}
          >
            Explore
          </p>
          <ul style={{ listStyle: "none", display: "grid", gap: "0.6rem" }}>
            <li><a href="#collection">Projects</a></li>
            <li><a href="#legacy">About</a></li>
            <li><a href="#sustainability">Sustainability</a></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Connect
          </p>
          <ul style={{ listStyle: "none", display: "grid", gap: "0.6rem" }}>
            <li>
              <a href="https://www.instagram.com/murec_official/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@Murec_official" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href="mailto:info@murec.com">info@murec.com</a>
            </li>
            <li>
              <a href="tel:+919717773229">+91 97177 73229</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1.5rem 0",
          fontSize: "0.75rem",
          color: "var(--color-stone)",
        }}
      >
        <span>&copy; 2026 MUREC. All rights reserved.</span>
        <span>Concept design &mdash; not a legal offer document.</span>
      </div>

      <div
        aria-hidden
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(4rem, 22vw, 16rem)",
          textAlign: "center",
          lineHeight: 0.8,
          color: "rgba(244,241,234,0.04)",
          userSelect: "none",
          padding: "0 0 1rem",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        MUREC
      </div>
    </footer>
  );
}
