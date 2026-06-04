import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/BasiraMehrzad24">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/basira-mehrzad-3679ab25a">
          <FaLinkedin />
        </a>
      </div>

      <p>© {new Date().getFullYear()} Basira Mehrzad</p>
    </footer>
  );
}

export default Footer;
