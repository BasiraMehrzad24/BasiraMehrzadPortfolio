import { useEffect, useState } from "react";

const updatesData = [
  {
    id: 1,
    type: "New Feature",
    message: "Added project filtering system.",
  },
  {
    id: 2,
    type: "Bug Fix",
    message: "Fixed modal scrolling issue.",
  },
  {
    id: 3,
    type: "Milestone",
    message: "Portfolio reached Version 2.0.",
  },
  {
    id: 4,
    type: "Learning",
    message: "Learned advanced React hooks.",
  },
  {
    id: 5,
    type: "Update",
    message: "Improved theme switching.",
  },
];

export default function ProjectUpdates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % updatesData.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const currentUpdate = updatesData[currentIndex];

  return (
    <section className="project-updates">
      <div className="orbit-wrapper">
        {/* Fixed center */}
        <div className="center-node">
          <h3>{currentUpdate.type}</h3>
          <p>{currentUpdate.message}</p>
        </div>

        {/* Moving emojis */}
        <div className="orbit-item orbit-1">🚀</div>
        <div className="orbit-item orbit-2">🐛</div>
        <div className="orbit-item orbit-3">🎯</div>
        <div className="orbit-item orbit-4">📚</div>
        <div className="orbit-item orbit-5">🔄</div>
      </div>
    </section>
  );
}
