import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function Footer({ openContact }) {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          href="https://github.com/BasiraMehrzad24"
        >
          <FaGithub />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          href="https://www.linkedin.com/in/basira-mehrzad-3679ab25a"
        >
          <FaLinkedin />
        </a>

        <button
          className="contact-icon"
          onClick={openContact}
          aria-label="Call me"
        >
          <FaPhone />
        </button>
      </div>

      <p>© {new Date().getFullYear()} Basira Mehrzad</p>
    </footer>
  );
}

export default Footer;
