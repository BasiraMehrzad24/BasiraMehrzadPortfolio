import { useParams } from "react-router-dom";
import { useEffect } from "react";

import projects from "../data/projects";
import TechBadge from "../components/TechBadge";
import "../App.css";
function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((project) => project.id === Number(id));

  if (!project) {
    return <h2>Project Not Found</h2>;
  }
  // page title
  useEffect(() => {
    document.title = `${project.name} | Basira Mehrzad`;
  }, [project]);
  return (
    <section className="project-details">
      <div className="project-details-container">
        <div className="project-image">
          <img src={project.image} alt={project.name} loading="lazy" />
        </div>

        <div className="project-details-content">
          <h1>{project.name}</h1>

          <p className="project-description">{project.description}</p>

          <div className="project-info">
            <div className="info-card">
              <strong>Role</strong>
              <p>{project.role}</p>
            </div>

            <div className="info-card">
              <strong>Duration</strong>
              <p>{project.duration}</p>
            </div>

            <div className="info-card">
              <strong>Status</strong>
              <p>{project.status}</p>
            </div>

            <div className="info-card">
              <strong>Challenges</strong>
              <p>{project.challenges}</p>
            </div>
            <div className="info-card">
              <strong>Problem</strong>
              <p>{project.problem}</p>
            </div>
            <div className="info-card">
              <strong>Solution</strong>
              <p>{project.solution}</p>
            </div>
            <div className="info-card">
              <strong>Outcome</strong>
              <p>{project.outcome}</p>
            </div>
          </div>

          <div className="tech-stack">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Code
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
