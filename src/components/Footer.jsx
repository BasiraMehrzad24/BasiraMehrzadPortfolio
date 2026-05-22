import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
        <div className="social-links">
        <a href="https://github.com/">
        <FaGithub />
       </a>

       <a href="https://linkedin.com/">
        <FaLinkedin />
       </a>

      <a href="https://twitter.com/">
      <FaTwitter />
      </a>
      </div>

      <p>
        © {new Date().getFullYear()} Basira Mehrzad
      </p>
    </footer>
  );
}

export default Footer;