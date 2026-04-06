import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { C, PROJECTS } from "../data/data";

/**
 * Projects
 * Responsive grid of project cards with a detail modal on selection.
 */
function Projects() {
  const headRef            = useScrollReveal("fade");
  const [active, setActive] = useState(null);

  return (
    <section
      id="projects"
      style={{ padding: "90px 40px", maxWidth: 1100, margin: "0 auto" }}
    >
      {/* Heading */}
      <div ref={headRef} style={{ textAlign: "center", marginBottom: 48 }}>
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
          Selected Work
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize:   "clamp(1.5rem, 3vw, 2.1rem)",
            color:      C.dark,
          }}
        >
          Featured Projects
        </h2>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(245px, 1fr))",
          gap:                 18,
        }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onSelect={setActive}
          />
        ))}
      </div>

      {/* Detail modal */}
      {active && (
        <ProjectModal project={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}

export default Projects;
