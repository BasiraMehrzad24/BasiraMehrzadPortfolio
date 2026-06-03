import { useState, useEffect } from "react";
function ProjectUpdates() {
  const updates = [
    "Portfolio deployed successfully",
    "Added Feedback Wall",
    "Dark Mode improved",
    "Added Contact Form",
    "Added React Animations",
  ];

  const [currentUpdate, setCurrentUpdate] = useState(updates[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * updates.length);

      setCurrentUpdate(updates[randomIndex]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="updates">
      <h2>Live Project Updates</h2>

      <div className="update-card">🚀 {currentUpdate}</div>
    </section>
  );
}

export default ProjectUpdates;
