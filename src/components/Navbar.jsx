function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2>Basira Mehrzad</h2>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    </nav>
  );
}

export default Navbar;