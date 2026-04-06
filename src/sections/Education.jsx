import useScrollReveal from "../hooks/useScrollReveal";
import { C, EDUCATION } from "../data/data";

/**
 * EducationItem
 * Single timeline entry — icon node + detail card.
 *
 * @param {{ item: object, index: number }} props
 */
function EducationItem({ item, index }) {
  // Alternate left/right reveals for visual rhythm.
  const itemRef = useScrollReveal(index % 2 === 0 ? "left" : "right", index * 0.14);

  return (
    <div ref={itemRef} style={{ display: "flex", gap: 22, marginBottom: 26 }}>
      {/* Icon node */}
      <div
        style={{
          flexShrink:   0,
          width:        46,
          height:       46,
          borderRadius: "50%",
          background:   C.brown,
          display:      "flex",
          alignItems:   "center",
          justifyContent: "center",
          fontSize:     "1rem",
          zIndex:       1,
          border:       `3px solid ${C.bg}`,
          boxShadow:    `0 4px 14px rgba(110,71,59,.28)`,
          transition:   "transform .3s, box-shadow .3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform  = "scale(1.14)";
          e.currentTarget.style.boxShadow  = "0 6px 18px rgba(110,71,59,.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform  = "scale(1)";
          e.currentTarget.style.boxShadow  = "0 4px 14px rgba(110,71,59,.28)";
        }}
      >
        {item.icon}
      </div>

      {/* Detail card */}
      <div
        className="edu-card"
        style={{
          flex:         1,
          background:   "#fff",
          borderRadius: 17,
          padding:      "18px 20px",
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
          {item.deg}
        </div>

        <div style={{ color: C.brown, fontSize: ".82rem", fontWeight: 600, marginBottom: 5 }}>
          {item.inst}
        </div>

        <span
          style={{
            display:      "inline-block",
            padding:      "2px 10px",
            background:   "rgba(167,141,120,.18)",
            color:        C.brown,
            fontSize:     ".69rem",
            fontWeight:   600,
            borderRadius: 20,
            marginBottom: 7,
          }}
        >
          {item.yr}
        </span>

        <p style={{ color: C.brown, fontSize: ".8rem", lineHeight: 1.7 }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

/**
 * Education
 * Timeline section listing academic credentials.
 */
function Education() {
  const headRef = useScrollReveal("fade");

  return (
    <section
      id="education"
      style={{ padding: "90px 40px", background: C.bg }}
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
          Academic Background
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize:   "clamp(1.5rem, 3vw, 2.1rem)",
            color:      C.dark,
          }}
        >
          Education
        </h2>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
        {/* Vertical rule */}
        <div
          style={{
            position:     "absolute",
            left:         22,
            top:          0,
            bottom:       0,
            width:        2,
            background:   `linear-gradient(to bottom, transparent, ${C.accent} 8%, ${C.accent} 92%, transparent)`,
            borderRadius: 2,
          }}
        />

        {EDUCATION.map((item, i) => (
          <EducationItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Education;
