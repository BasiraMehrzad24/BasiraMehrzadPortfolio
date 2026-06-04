import { useState } from "react";
import profileImage from "../assets/images/basiramehrzad.PNG";

function About() {
  const [showMore, setShowMore] = useState(false);
  const [avatarReaction, setAvatarReaction] = useState("💻 Frontend Developer");

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
            <img src={profileImage} alt="Profile" />

            <div className="avatar-overlay">{avatarReaction}</div>

            <div className="lines"></div>
            <div className="dots"></div>
          </div>
        </div>

        <div className="about-content">
          <span className="about-tag">Frontend Developer</span>
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

          <button className="about-btn" onClick={() => setShowMore(!showMore)}>
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
                    <p> Bachloar of Computer Science </p>
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
