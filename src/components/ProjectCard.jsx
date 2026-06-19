import { Link } from "react-router-dom";
import { useState } from "react";
import TechBadge from "./TechBadge";
import { useFavorites } from "../context/FavoritesContext";
function ProjectCard({ project }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(project.id);

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="project-card">
      <div className="card-badges">
        <span className={`status-badge ${project.status.replace(" ", "")}`}>
          {project.status}
        </span>

        {project.featured && <span className="featured">Featured</span>}
      </div>
      <img src={project.image} alt={project.name} />

      <h3>{project.name}</h3>

      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={project.progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-fill"
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>

      <p className="progress-text">{project.progress}% Complete</p>
      <button
        className="more-info-btn"
        aria-expanded={showMore}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Hide Info" : "More Info"}
      </button>

      {showMore && (
        <div className="extra-info">
          <p>{project.description}</p>

          <div className="extra-grid">
            <div>
              <strong>Role</strong>
              <span>{project.role}</span>
            </div>

            <div>
              <strong>Duration</strong>
              <span>{project.duration}</span>
            </div>
          </div>
        </div>
      )}

      <Link className="project-btn" to={`/projects/${project.id}`}>
        View Details
      </Link>

      <button
        className="favorite-btn"
        onClick={() => toggleFavorite(project.id)}
      >
        {isFavorite ? "⭐" : "☆"}
      </button>

      <div className="tech-stack">
        {project.techStack.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
