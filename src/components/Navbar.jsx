function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2>Basira Mehrzad</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
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