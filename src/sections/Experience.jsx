import useScrollReveal from "../hooks/useScrollReveal";
import { C, EXPERIENCE } from "../data/data";

/**
 * ExperienceCard
 * Individual work-history card with gradient left-border accent and hover lift.
 *
 * @param {{ item: object, index: number }} props
 */
function ExperienceCard({ item, index }) {
  const cardRef = useScrollReveal("up", index * 0.13);

  return (
    <div
      ref={cardRef}
      className="exp-card"
      style={{
        background:   "#fff",
        borderRadius: 17,
        padding:      "20px 22px",
        border:       "1px solid rgba(167,141,120,.18)",
        boxShadow:    "0 4px 16px rgba(41,28,14,.07)",
      }}
    >
      <div
        style={{
          fontFamily:   "'Playfair Display', serif",
          fontSize:     "1rem",
          color:        C.dark,
          fontWeight:   700,
          marginBottom: 3,
        }}
      >
        {item.role}
      </div>

      <div style={{ color: C.brown, fontSize: ".82rem", fontWeight: 600, marginBottom: 7 }}>
        {item.co}
      </div>

      <span
        style={{
          display:      "inline-flex",
          alignItems:   "center",
          gap:          5,
          padding:      "2px 10px",
          background:   "rgba(167,141,120,.14)",
          color:        C.brown,
          fontSize:     ".69rem",
          fontWeight:   600,
          borderRadius: 20,
          marginBottom: 12,
        }}
      >
        📅 {item.dur}
      </span>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {item.tasks.map((task, j) => (
          <li
            key={j}
            style={{
              color:      C.brown,
              fontSize:   ".8rem",
              lineHeight: 1.7,
              padding:    "3px 0 3px 14px",
              position:   "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left:     0,
                color:    C.accent,
                fontSize: ".68rem",
                top:      5,
              }}
            >
              ▸
            </span>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Experience
 * Responsive grid of work-history cards.
 */
function Experience() {
  const headRef = useScrollReveal("fade");

  return (
    <section
      id="experience"
      style={{ padding: "90px 40px", background: C.bgAlt }}
    >
      {/* Heading */}
      <div ref={headRef} style={{ textAlign: "center", marginBottom: 52 }}>
        <p
          style={{
            color:         C.brown,
            fontWeight:    600,
            fontSize:      ".72rem",
            letterSpacing: ".14em",
            textTransform: "uppercase",
            marginBottom:  8,
          }}
        >
          Career Journey
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize:   "clamp(1.5rem, 3vw, 2.1rem)",
            color:      C.dark,
          }}
        >
          Work Experience
        </h2>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap:                 18,
          maxWidth:            940,
          margin:              "0 auto",
        }}
      >
        {EXPERIENCE.map((item, i) => (
          <ExperienceCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
