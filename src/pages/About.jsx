import { useEffect, useState } from "react";
import profileImage from "../assets/images/basiramehrzad.webp";
import { useUser } from "../context/UserContext";

function About() {
  const [showMore, setShowMore] = useState(false);
  const [avatarReaction, setAvatarReaction] = useState("💻 Frontend Developer");

  const user = useUser();

  useEffect(() => {
    document.title = "About | Basira Mehrzad";
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <div
            className="image"
            onMouseEnter={() => setAvatarReaction("💻 Frontend Developer")}
            onMouseLeave={() => setAvatarReaction("👋 Hello!")}
            onClick={() => setAvatarReaction("🚀 React Enthusiast")}
          >
            <img src={profileImage} alt="Basira Mehrzad profile photo" />

            <div className="avatar-overlay">{avatarReaction}</div>

            <div className="lines" aria-hidden="true"></div>
            <div className="dots" aria-hidden="true"></div>
          </div>
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <span className="about-tag">{user.role}</span>

          <p>
            I build modern, responsive, and user-friendly web applications with
            React and JavaScript. I enjoy transforming ideas into clean,
            interactive, and meaningful digital experiences.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <h3>5+</h3>
              <span>Projects</span>
            </div>

            <div className="stat-card">
              <h3>5+</h3>
              <span>Technologies</span>
            </div>

            <div className="stat-card">
              <h3>∞</h3>
              <span>Learning</span>
            </div>
          </div>

          <button
            className="about-btn"
            onClick={() => setShowMore(!showMore)}
            aria-expanded={showMore}
            aria-label={
              showMore ? "Show less information" : "Show more information"
            }
          >
            {showMore ? "Show Less" : "Learn More"}
          </button>

          {showMore && (
            <div className="about-extra">
              <div className="info-grid">
                <div className="info-card">
                  <span>📍</span>
                  <div>
                    <h4>Location</h4>
                    <p>Afghanistan</p>
                  </div>
                </div>

                <div className="info-card">
                  <span>🎓</span>
                  <div>
                    <h4>Education</h4>
                    <p>Bachelor of Computer Science</p>
                  </div>
                </div>

                <div className="info-card">
                  <span>💻</span>
                  <div>
                    <h4>Focus</h4>
                    <p>Frontend Development</p>
                  </div>
                </div>

                <div className="info-card">
                  <span>⚛️</span>
                  <div>
                    <h4>Main Stack</h4>
                    <p>React & JavaScript</p>
                  </div>
                </div>

                <div className="info-card">
                  <span>📚</span>
                  <div>
                    <h4>Currently Learning</h4>
                    <p>Advanced React & Modern UI Design</p>
                  </div>
                </div>
              </div>

              <div className="about-story">
                <h3>Career Goals</h3>

                <p>
                  My goal is to become a professional Frontend Developer and
                  contribute to building modern, accessible, and user-friendly
                  web applications that solve real-world problems.
                </p>

                <h3>Work Philosophy</h3>

                <p>
                  I believe great software should be simple, accessible, and
                  enjoyable to use. I focus on writing clean code, continuous
                  learning, and creating meaningful user experiences.
                </p>

                <h3>My Journey</h3>

                <p>
                  My passion for web development started with creating simple
                  websites and gradually evolved into building complete React
                  applications. I enjoy solving problems, learning new
                  technologies, and continuously improving my skills while
                  creating projects that have real-world value.
                </p>

                <p>
                  Every project helps me grow as a developer. I enjoy
                  transforming ideas into modern, responsive, and user-friendly
                  digital experiences while focusing on clean code, performance,
                  and great user experience.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
