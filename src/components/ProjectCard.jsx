function ProjectCard({ project, onViewDetails }) {
  return (
    <div className="project-card">
      {project.featured && <span className="featured">Featured</span>}

      <img src={project.image} alt={project.name} />

      <h3>{project.name}</h3>

      <button className="details-btn" onClick={onViewDetails}>
        View Details
      </button>

      <div className="tech-stack">
        {project.techStack.map((tech, index) => (
          <span key={index} className="badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
