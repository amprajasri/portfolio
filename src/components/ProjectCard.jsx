import useScrollReveal from "../hooks/useScrollReveal";
import { C } from "../data/data";

/**
 * ProjectCard
 * Displays a single project thumbnail with hover effect.
 * Clicking fires `onSelect` to open the detail modal.
 *
 * @param {{ project: object, index: number, onSelect: (project) => void }} props
 */
function ProjectCard({ project, index, onSelect }) {
  const cardRef = useScrollReveal("up", index * 0.1);

  return (
    <div
      ref={cardRef}
      className="proj-card"
      onClick={() => onSelect(project)}
      style={{
        background:    "#fff",
        borderRadius:  17,
        overflow:      "hidden",
        cursor:        "pointer",
        border:        "1px solid rgba(167,141,120,.18)",
        boxShadow:     "0 6px 18px rgba(41,28,14,.07)",
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={project.img}
          alt={project.title}
          style={{
            width:      "100%",
            height:     162,
            objectFit:  "cover",
            display:    "block",
            transition: "transform .45s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <div
          style={{
            position:   "absolute",
            inset:      0,
            background: "linear-gradient(to top, rgba(41,28,14,.42), transparent)",
            transition: "opacity .3s",
          }}
        />
      </div>

      {/* Body */}
      <div style={{ padding: "14px 17px 17px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 6 }}>
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <h3
          style={{
            fontFamily:   "'Playfair Display', serif",
            fontSize:     ".98rem",
            color:        C.dark,
            marginBottom: 5,
          }}
        >
          {project.title}
        </h3>

        <p style={{ color: C.brown, fontSize: ".78rem", lineHeight: 1.6, marginBottom: 11 }}>
          {project.short}
        </p>

        <span style={{ color: C.brown, fontSize: ".74rem", fontWeight: 600 }}>
          View Project ↗
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;
