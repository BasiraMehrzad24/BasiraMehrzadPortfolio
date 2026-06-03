function Navbar({ theme, setTheme }) {
  return (
    <nav className="navbar">
      <h2>Basira Mehrzad</h2>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="theme-switcher">
        <button className="theme-btn" onClick={() => setTheme("dark")}>
          🌙 Dark
        </button>

        <button className="theme-btn" onClick={() => setTheme("light")}>
          ☀️ Light
        </button>

        <button className="theme-btn" onClick={() => setTheme("ocean")}>
          🌊 Ocean
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
