import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const user = useUser();
  return (
    <nav className="navbar">
      <h2>{user.name}</h2>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Projects
          </NavLink>{" "}
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <div className="theme-switcher">
        <div
          className={`theme-toggle ${theme === "light" ? "light" : "dark"}`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <div className="toggle-thumb">{theme === "dark" ? "🌙" : "☀️"}</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
