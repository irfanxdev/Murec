import RevealText from "../components/ui/RevealText";
import MagneticButton from "../components/ui/MagneticButton";
import SectionLabel from "../components/ui/SectionLabel";

export default function FinalCTA() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <img
        src="https://murec.com/images/about-forest.webp"
        alt="Forest Walk villas at dusk"
        loading="lazy"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(17,17,15,0.75) 0%, rgba(17,17,15,0.5) 50%, rgba(17,17,15,0.85) 100%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ marginBottom: "1.25rem" }}>
          <SectionLabel label="Epilogue" />
        </div>
        <RevealText
          as="h2"
          text={"THE NEXT\nCHAPTER\nSTARTS HERE"}
          splitBy="lines"
          className="section-heading"
          style={{ maxWidth: "18ch" }}
        />
        <div style={{ marginTop: "2.5rem" }}>
          <MagneticButton href="#contact" large>
            Explore MUREC
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
