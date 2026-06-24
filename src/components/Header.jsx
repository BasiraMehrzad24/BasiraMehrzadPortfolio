import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

function Header() {
  const user = useUser();

  const quotes = [
    "Keep learning every day.",
    "Dream big and build bigger than your dreams.",
    "Code creates possibilities.",
    "Small steps every day create big results.",
  ];

  const titles = [
    "Frontend Developer",
    "React Developer",
    "UI Enthusiast",
    "JavaScript Developer",
  ];

  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const randomQuote = useMemo(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }, []);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setText(currentTitle.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }

    const pause = setTimeout(() => {
      setCharIndex(0);
      setText("");
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearTimeout(pause);
  }, [charIndex, titleIndex]);

  return (
    <header id="home" className="hero">
      <div className="hero-content">
        <h2>
          Hi, I'm <span>{user.name}</span>
        </h2>
        <h3 className="typing-text">
          {text}
          <span className="cursor">|</span>
        </h3>

        <p className="hero-description">
          I create modern, responsive, and interactive web applications with
          React and JavaScript, transforming ideas into beautiful digital
          experiences.
        </p>

        <p className="hero-quote">"{randomQuote}"</p>

        <div className="hero-buttons">
          <Link to="/projects" className="primary-btn">
            View Projects
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Me
          </Link>

          <a href="/Basira Mehrzad resume.pdf" download className="resume-btn">
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
