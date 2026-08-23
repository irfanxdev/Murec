import { useState } from "react";
import Preloader from "./components/Preloader";
import FilmGrain from "./components/ui/FilmGrain";
import Letterbox from "./components/ui/Letterbox";
import Navbar from "./components/layout/Navbar";
import MobileMenu from "./components/layout/MobileMenu";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import Legacy from "./sections/Legacy";
import Timeline from "./sections/Timeline";
import Marquee from "./sections/Marquee";
import Principles from "./sections/Principles";
import Collection from "./sections/Collection";
import ProjectExperience from "./sections/ProjectExperience";
import Sustainability from "./sections/Sustainability";
import Statistics from "./sections/Statistics";
import FinalCTA from "./sections/FinalCTA";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <FilmGrain />
      <Letterbox play={!loading} />
      {loading && <Preloader onDone={() => setLoading(false)} />}

      <Navbar menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((v) => !v)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <Hero />
        <Legacy />
        <Timeline />
        <Marquee />
        <Principles />
        <Collection />
        <ProjectExperience />
        <Sustainability />
        <Statistics />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
