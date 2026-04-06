
import { C, NAV_SECTIONS } from "../data/data";

/**
 * Navbar
 * Sticky top navigation bar with desktop links and a hamburger trigger.
 *
 * @param {{ scrolled: boolean, menuOpen: boolean, setMenuOpen: (fn) => void }} props
 */
function Navbar({ scrolled, menuOpen, setMenuOpen }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <nav
      style={{
        position:       "sticky",
        top:            0,
        zIndex:         200,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between",
        padding:        scrolled ? "10px 28px" : "13px 28px",
        background:     "rgba(225,212,194,.92)",
        backdropFilter: "blur(14px)",
        borderBottom:   "1px solid rgba(167,141,120,.2)",
        transition:     "padding .3s",
      }}
    >
      {/* Wordmark */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize:   "1.2rem",
          fontWeight: 700,
          color:      C.dark,
        }}
      >
        Mukunda Priya<em style={{ color: C.brown, fontStyle: "normal" }}></em>
      </div>

      {/* Desktop links */}
      <div className="desktop-nav" style={{ display: "flex", gap: 22 }}>
        {NAV_SECTIONS.map((section) => (
          <a
            key={section}
            className="nav-link"
            onClick={() => scrollTo(section.toLowerCase())}
          >
            {section}
          </a>
        ))}
      </div>

      {/* Hamburger button (shown via CSS @media) */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        className="ham-btn"
        style={{
          flexDirection: "column",
          gap:           5,
          cursor:        "pointer",
          padding:       6,
          background:    "none",
          border:        "none",
          zIndex:        300,
          display:       "none", // overridden to flex at ≤640 px via globalStyles
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="ham-line"
            style={{
              transform:
                menuOpen
                  ? i === 0
                    ? "translateY(7px) rotate(45deg)"
                    : i === 2
                    ? "translateY(-7px) rotate(-45deg)"
                    : "none"
                  : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
              width:   menuOpen && i === 1 ? 0 : 22,
            }}
          />
        ))}
      </button>
    </nav>
  );
}

export default Navbar;
