import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [selectedTech, setSelectedTech] = useState("All");

  const filters = ["All", "React", "JavaScript", "CSS", "Laravel", "PHP"];

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) => project.techStack.includes(selectedTech));

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-filters">
        {filters.map((tech) => (
          <button
            key={tech}
            className={selectedTech === tech ? "active" : ""}
            onClick={() => setSelectedTech(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="project-container">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
