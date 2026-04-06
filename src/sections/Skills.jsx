import useScrollReveal from "../hooks/useScrollReveal";
import { C, SKILLS } from "../data/data";

/**
 * Skills
 * Dark-background section featuring two infinite marquee rows of skill badges.
 * The rows scroll in opposite directions and pause on hover.
 */
function Skills() {
  const headRef  = useScrollReveal("fade");
  const trackRef = useScrollReveal("up", 0.12);

  // Double the array so the seamless-loop trick works.
  const doubled = [...SKILLS, ...SKILLS];

  return (
    <section
      id="skills"
      style={{ background: C.dark, padding: "72px 0", overflow: "hidden" }}
    >
      {/* Heading */}
      <div
        ref={headRef}
        style={{ textAlign: "center", padding: "0 28px", marginBottom: 34 }}
      >
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
          What I Work With
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize:   "clamp(1.5rem, 3vw, 2.1rem)",
            color:      "#fff",
          }}
        >
          Skills &amp; Technologies
        </h2>
      </div>

      {/* Marquee rows */}
      <div ref={trackRef}>
        {[false, true].map((reversed, rowIndex) => (
          <div key={rowIndex} style={{ overflow: "hidden", marginBottom: 12 }}>
            <div className={`marquee-track${reversed ? " marquee-rev" : ""}`}>
              {doubled.map((skill, i) => (
                <div
                  key={i}
                  style={{
                    margin:       "0 8px",
                    padding:      "10px 20px",
                    background:   "rgba(255,255,255,.06)",
                    border:       "1px solid rgba(167,141,120,.2)",
                    borderRadius: 40,
                    color:        reversed ? C.accent : C.neutral,
                    fontSize:     ".8rem",
                    fontWeight:   500,
                    whiteSpace:   "nowrap",
                    cursor:       "default",
                    transition:   "background .25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(167,141,120,.2)";
                    e.currentTarget.style.color      = "#E1D4C2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,.06)";
                    e.currentTarget.style.color      = reversed ? C.accent : C.neutral;
                  }}
                >
                  {reversed ? `✦ ${skill}` : skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
