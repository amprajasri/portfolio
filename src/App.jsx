import { useState, useEffect } from "react";

// Global styles
import globalCss from "./assets/globalStyles";

// Components
import Loader      from "./components/Loader";
import MobileMenu  from "./components/MobileMenu";
import Navbar      from "./components/Navbar";

// Sections
import About      from "./sections/About";
import Skills     from "./sections/Skills";
import Education  from "./sections/Education";
import Experience from "./sections/Experience";
import Projects   from "./sections/Projects";
import Contact    from "./sections/Contact";

// Color token (used for the divider)
import { C } from "./data/data";

function App() {
  const [scrolled,  setScrolled]  = useState(false);
  const [loaded,    setLoaded]    = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  // Mark the page as loaded after the intro animation finishes.
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2300);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll position to shrink the navbar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Inject global CSS once */}
      <style>{globalCss}</style>

      {/* Overlays */}
      <Loader     done={loaded} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Sticky nav */}
      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Page sections */}
      <About />

      {/* Decorative divider between About and Skills */}
      <div
        style={{
          height:     1,
          background: `linear-gradient(to right, transparent, rgba(167,141,120,.28), transparent)`,
          margin:     "0 28px",
        }}
      />

      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
