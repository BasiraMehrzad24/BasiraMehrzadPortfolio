import TechBadge from "./TechBadge";
function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="modal-body">
          {/* Left Side */}
          <div className="modal-image">
            <img src={project.image} alt={project.name} />
          </div>

          {/* Right Side */}
          <div className="modal-details">
            <h2>{project.name}</h2>

            <p>{project.description}</p>

            <div className="project-info">
              <div className="info-card">
                <span className="info-label">Role</span>
                <span>{project.role}</span>
              </div>

              <div className="info-card">
                <span className="info-label">Duration</span>
                <span>{project.duration}</span>
              </div>

              <div className="info-card">
                <span className="info-label">Status</span>
                <span className="status-badge">{project.status}</span>
              </div>
            </div>

            <div className="challenge-box">
              <h4>Challenges</h4>
              <p>{project.challenges}</p>
            </div>

            <h3>Technologies</h3>

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
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
