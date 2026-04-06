import { C, NAV_SECTIONS } from "../data/data";

/**
 * MobileMenu
 * Full-screen overlay navigation shown on small screens.
 *
 * @param {{ open: boolean, onClose: () => void }} props
 */
function MobileMenu({ open, onClose }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    onClose();
  };

  return (
    <div
      style={{
        position:   "fixed",
        inset:      0,
        zIndex:     190,
        background: C.dark,
        display:    "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        opacity:    open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
        transform:  open ? "translateX(0)" : "translateX(100%)",
        transition: "opacity .4s ease, visibility .4s ease, transform .4s cubic-bezier(.22,.61,.36,1)",
      }}
    >
      {NAV_SECTIONS.map((section, i) => (
        <a
          key={section}
          onClick={() => scrollTo(section.toLowerCase())}
          style={{
            fontFamily:  "'Playfair Display', serif",
            fontSize:    "2rem",
            color:       C.bg,
            textDecoration: "none",
            padding:     "14px 0",
            cursor:      "pointer",
            opacity:     open ? 1 : 0,
            transform:   open ? "none" : "translateY(20px)",
            transition:  `opacity .4s ease ${0.08 + i * 0.06}s, transform .4s ease ${0.08 + i * 0.06}s, color .2s`,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = C.bg)}
        >
          {section}
        </a>
      ))}

      <p
        style={{
          marginTop:     36,
          color:         "rgba(190,181,169,.35)",
          fontSize:      ".72rem",
          letterSpacing: ".1em",
          textTransform: "uppercase",
        }}
      >
        tap any link to navigate
      </p>
    </div>
  );
}

export default MobileMenu;
