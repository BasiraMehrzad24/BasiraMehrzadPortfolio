import { useMemo } from "react";

function Header() {
  const quotes = [
    "Keep learning every day.",
    "Dream big and build bigger than your dreams.",
    "Code creates possibilities.",
    "Small steps every day create big results.",
  ];

  const randomQuote = useMemo(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }, []);

  return (
    <header id="home" className="hero">
      <div className="hero-content">
        <h2>
          Hi, I'm <span>Basira Mehrzad</span>
        </h2>

        <p className="hero-description">
          I create modern, responsive, and interactive web applications with
          React and JavaScript, transforming ideas into beautiful digital
          experiences.
        </p>

        <p className="hero-quote">"{randomQuote}"</p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
