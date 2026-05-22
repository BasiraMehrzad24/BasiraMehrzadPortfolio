import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  const hobbies = ["Coding", "Reading", "Sport", "Watching Movie"];

  return (
    <section className="about">
      <h2>About Me</h2>

      <p>
        I am passionate about frontend development and building
        beautiful user interfaces.
      </p>

      {showMore && (
        <p>
          My goal is to become a skilled frontend developer who
         creates innovative, responsive, and meaningful web
         applications while continuously learning, improving,
         and turning creative ideas into real-world solutions.
        </p>
      )}

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>

      <h3>Hobbies</h3>

      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
}

export default About;