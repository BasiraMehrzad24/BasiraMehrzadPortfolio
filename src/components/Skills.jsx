import { useEffect, useState } from "react";

function Skills() {
  const [animate, setAnimate] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const skills = [
    {
      name: "HTML",
      level: 95,
      fact: "I built my first website with HTML.",
    },
    {
      name: "CSS",
      level: 90,
      fact: "I enjoy creating modern UI designs.",
    },
    {
      name: "JavaScript(ES6)",
      level: 85,
      fact: "React made me love JavaScript.",
    },
    {
      name: "React",
      level: 80,
      fact: "My favorite frontend library.",
    },
    {
      name: "Laravel",
      level: 80,
      fact: "My favorite frontend library.",
    },
    {
      name: "TailwindCSS",
      level: 70,
      fact: "My favorite frontend library.",
    },
  ];

  return (
    <section className="skills">
      <h2>My Skills</h2>

      {skills.map((skill) => (
        <div
          className="skill-card"
          key={skill.name}
          onMouseEnter={() => setActiveSkill(skill.name)}
          onMouseLeave={() => setActiveSkill(null)}
        >
          <div className="skill-header">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: animate ? `${skill.level}%` : "0%",
              }}
            ></div>
          </div>

          {activeSkill === skill.name && (
            <p className="skill-fact">💡 {skill.fact}</p>
          )}
        </div>
      ))}
    </section>
  );
}

export default Skills;
