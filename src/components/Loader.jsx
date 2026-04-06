import { C } from "../data/data";

/**
 * Loader
 * Full-screen intro overlay shown while the page is initialising.
 * Fades out and becomes invisible once `done` is true.
 *
 * @param {{ done: boolean }} props
 */
function Loader({ done }) {
  return (
    <div
      style={{
        position:   "fixed",
        inset:      0,
        zIndex:     9999,
        background: C.dark,
        display:    "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        opacity:    done ? 0 : 1,
        visibility: done ? "hidden" : "visible",
        transition: "opacity .9s ease, visibility .9s ease",
      }}
    >
      {/* Wordmark */}
      <div
        style={{
          fontFamily:    "'Playfair Display', serif",
          fontSize:      "2.1rem",
          fontWeight:    700,
          color:         C.bg,
          marginBottom:  28,
          letterSpacing: ".02em",
        }}
      >
        Mukunda Priya<span style={{ color: C.accent }}>.</span>
      </div>

      {/* Dot pulse */}
      <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
        {[C.accent, C.brown, C.neutral].map((clr, i) => (
          <div
            key={i}
            style={{
              width:        10,
              height:       10,
              borderRadius: "50%",
              background:   clr,
              animation:    `dotPulse 1.4s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div
        style={{
          width:        130,
          height:       2,
          background:   "rgba(167,141,120,.18)",
          borderRadius: 2,
          overflow:     "hidden",
        }}
      >
        <div
          style={{
            height:       "100%",
            background:   `linear-gradient(90deg, ${C.brown}, ${C.accent})`,
            animation:    "barFill 2.1s ease forwards",
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
}

export default Loader;
