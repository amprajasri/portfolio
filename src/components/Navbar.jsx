import { C, NAV_SECTIONS } from "../data/data";

function Navbar({ scrolled, menuOpen, setMenuOpen }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: scrolled ? "10px 32px" : "14px 32px",
        backdropFilter: "blur(18px)",
background: "rgba(167,141,120,0.9)",


        borderBottom: "1px solid rgba(167,141,120,.2)",
        boxShadow: scrolled
          ? "0 8px 30px rgba(0,0,0,0.08)"
          : "none",
        transition: "all .3s ease",
      }}
    >

      {/* ✨ Glow Line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 2,
          background:
            "linear-gradient(90deg, transparent, rgba(167,141,120,.6), transparent)",
          opacity: scrolled ? 1 : 0,
          transition: "opacity .4s",
        }}
      />

      {/* 🧠 LOGO */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.4rem",
          fontWeight: 700,
          color: C.dark,
          letterSpacing: ".5px",
          position: "relative",
        }}
      >
        Mukunda Priya
      </div>

      {/* 🔗 LINKS */}
      <div style={{ display: "flex", gap: 26 }}>
        {NAV_SECTIONS.map((section) => (
          <span
            key={section}
            onClick={() => scrollTo(section.toLowerCase())}
            style={{
              position: "relative",
              cursor: "pointer",
              fontSize: ".9rem",
              fontWeight: 600,
              color: C.brown,
              transition: "color .3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = C.dark;
              e.target.children[0].style.width = "100%";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = C.brown;
              e.target.children[0].style.width = "0%";
            }}
          >
            {section}

            {/* ✨ Animated underline */}
            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: -4,
                height: 2,
                width: "0%",
                background: C.accent,
                transition: "width .3s ease",
              }}
            />
          </span>
        ))}
      </div>

      {/* 🍔 HAMBURGER */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        style={{
          display: "none",
          flexDirection: "column",
          gap: 5,
          cursor: "pointer",
          background: "none",
          border: "none",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: 22,
              height: 2,
              background: C.dark,
              transition: "all .3s ease",
              transform:
                menuOpen
                  ? i === 0
                    ? "translateY(6px) rotate(45deg)"
                    : i === 2
                    ? "translateY(-6px) rotate(-45deg)"
                    : "scaleX(0)"
                  : "none",
            }}
          />
        ))}
      </button>
    </nav>
  );
}

export default Navbar;
