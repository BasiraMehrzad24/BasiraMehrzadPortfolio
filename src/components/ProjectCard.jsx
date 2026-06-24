import { Link } from "react-router-dom";
import TechBadge from "./TechBadge";
import { useFavorites } from "../context/FavoritesContext";
function ProjectCard({ project }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(project.id);
  return (
    <div className="project-card">
      <div className="card-badges">
        <span className={`status-badge ${project.status.replace(" ", "")}`}>
          {project.status}
        </span>
      </div>
      <img src={project.image} alt={project.name} loading="lazy" />

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
