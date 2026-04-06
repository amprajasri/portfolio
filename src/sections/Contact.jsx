import useScrollReveal from "../hooks/useScrollReveal";
import { C, CONTACT_LINKS } from "../data/data";

// ─── Earth decoration ────────────────────────────────────────────────────────
const BLOBS = [
  { w: 28, h: 18, t: 12, l:  8 },
  { w: 22, h: 15, t: 35, l: 55 },
  { w: 18, h: 22, t: 55, l: 20 },
  { w: 25, h: 16, t: 70, l: 60 },
  { w: 20, h: 12, t: 25, l: 35 },
  { w: 15, h: 18, t: 48, l: 78 },
];

/**
 * Earth
 * Decorative spinning globe with an orbiting satellite.
 */
function Earth() {
  return (
    <div
      style={{
        position:       "relative",
        width:          126,
        height:         126,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        margin:         "0 auto 14px",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position:     "absolute",
          inset:        -16,
          borderRadius: "50%",
          background:   "radial-gradient(circle, rgba(167,141,120,.2) 0%, transparent 68%)",
          animation:    "glowPulse 3s ease-in-out infinite",
        }}
      />

      {/* Globe */}
      <div
        style={{
          width:        108,
          height:       108,
          borderRadius: "50%",
          background:   `conic-gradient(${C.brown}, ${C.accent}, #4a7c59, #2d5a40, ${C.brown})`,
          boxShadow:    "inset -15px -8px 30px rgba(41,28,14,.5)",
          overflow:     "hidden",
          animation:    "earthSpin 11s linear infinite",
          position:     "relative",
        }}
      >
        {BLOBS.map((b, i) => (
          <div
            key={i}
            style={{
              position:     "absolute",
              borderRadius: "50%",
              background:   "rgba(90,140,70,.42)",
              width:        b.w,
              height:       b.h,
              top:          `${b.t}%`,
              left:         `${b.l}%`,
            }}
          />
        ))}
      </div>

      {/* Orbiting satellite */}
      <div style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0 }}>
        <div
          style={{
            width:        10,
            height:       10,
            borderRadius: "50%",
            background:   C.accent,
            boxShadow:    `0 0 6px ${C.accent}`,
            animation:    "orbit 3.8s linear infinite",
            position:     "absolute",
            top:          -5,
            left:         -5,
          }}
        />
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

/**
 * Contact
 * Dark-background footer section with contact links and the Earth visual.
 */
function Contact() {
  const headRef  = useScrollReveal("fade");
  const earthRef = useScrollReveal("fade",  0.1);
  const linksRef = useScrollReveal("right", 0.15);

  return (
    <section
      id="contact"
      style={{ background: C.dark, padding: "90px 40px 64px" }}
    >
      {/* Heading */}
      <div ref={headRef} style={{ textAlign: "center", marginBottom: 40 }}>
        <p
          style={{
            color:         C.accent,
            fontWeight:    600,
            fontSize:      ".72rem",
            letterSpacing: ".14em",
            textTransform: "uppercase",
            marginBottom:  8,
          }}
        >
          Get In Touch
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize:   "clamp(1.5rem, 3vw, 2.1rem)",
            color:      "#fff",
          }}
        >
          Let's Build Something
          <br />
          <em style={{ color: C.accent, fontWeight: 400 }}>Impactful Together</em>
        </h2>
      </div>

      {/* Content row */}
      <div
        style={{
          display:        "flex",
          gap:            36,
          flexWrap:       "wrap",
          alignItems:     "flex-start",
          justifyContent: "center",
          maxWidth:       660,
          margin:         "0 auto",
        }}
      >
        {/* Earth + status */}
        <div ref={earthRef} style={{ flexShrink: 0, textAlign: "center" }}>
          <Earth />
          <p
            style={{
              color:         C.neutral,
              fontSize:      ".72rem",
              letterSpacing: ".08em",
              textTransform: "uppercase",
            }}
          >
            Open to opportunities
          </p>
        </div>

        {/* Links */}
        <div
          ref={linksRef}
          style={{
            flex:          1,
            minWidth:      190,
            maxWidth:      340,
            display:       "flex",
            flexDirection: "column",
            gap:           9,
          }}
        >
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="c-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  color:      C.accent,
                  fontSize:   16,
                  width:      22,
                  textAlign:  "center",
                  flexShrink: 0,
                }}
              >
                {link.icon}
              </span>
              <div>
                <div style={{ fontWeight: 600, fontSize: ".83rem", color: "#fff", marginBottom: 1 }}>
                  {link.name}
                </div>
                <div style={{ fontSize: ".73rem", color: C.neutral }}>
                  {link.val}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer line */}
      <p
        style={{
          textAlign:  "center",
          color:      "rgba(190,181,169,.28)",
          fontSize:   ".73rem",
          marginTop:  48,
        }}
      >
        © 2026 Mukunda Priya · Designed &amp; Built with ♥
      </p>
    </section>
  );
}

export default Contact;
