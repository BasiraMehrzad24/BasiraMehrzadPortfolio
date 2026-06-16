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

        {project.featured && <span className="featured">Featured</span>}
      </div>
      <img src={project.image} alt={project.name} />

      <h3>{project.name}</h3>

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
