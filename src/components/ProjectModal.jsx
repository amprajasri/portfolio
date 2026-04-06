import { useEffect } from "react";
import { C } from "../data/data";

/**
 * ProjectModal
 * Detail overlay for a selected project.
 * Closes on backdrop click, close button, or Escape key.
 *
 * @param {{ project: object, onClose: () => void }} props
 */
function ProjectModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position:       "fixed",
        inset:          0,
        background:     "rgba(41,28,14,.62)",
        backdropFilter: "blur(7px)",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        zIndex:         500,
        padding:        20,
        animation:      "backdropFade .25s ease",
      }}
    >
      {/* Modal card – stop propagation so clicks inside don't close */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background:    C.bg,
          borderRadius:  20,
          maxWidth:      560,
          width:         "100%",
          overflow:      "hidden",
          animation:     "modalRise .36s cubic-bezier(.22,.61,.36,1)",
          boxShadow:     "0 40px 80px rgba(41,28,14,.35)",
        }}
      >
        {/* Hero image */}
        <div style={{ position: "relative" }}>
          <img
            src={project.img}
            alt={project.title}
            style={{ width: "100%", height: 210, objectFit: "cover", display: "block" }}
          />
          <button
            onClick={onClose}
            style={{
              position:     "absolute",
              top:          13,
              right:        13,
              width:        32,
              height:       32,
              borderRadius: "50%",
              border:       "none",
              background:   "rgba(41,28,14,.7)",
              color:        "#fff",
              cursor:       "pointer",
              fontSize:     13,
              display:      "flex",
              alignItems:   "center",
              justifyContent:"center",
            }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "22px 26px 28px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 9 }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <h3
            style={{
              fontFamily:   "'Playfair Display', serif",
              fontSize:     "1.45rem",
              color:        C.dark,
              marginBottom: 9,
            }}
          >
            {project.title}
          </h3>

          <p style={{ color: C.brown, lineHeight: 1.8, fontSize: ".86rem", marginBottom: 20 }}>
            {project.desc}
          </p>

          {/* <button className="btn btn-solid" onClick={onClose}>
            View Live Project ↗
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
