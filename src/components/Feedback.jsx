import { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";

function Feedback() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [sortType, setSortType] = useState("highest");
  const [showModal, setShowModal] = useState(false);

  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");

    return savedFeedbacks
      ? JSON.parse(savedFeedbacks)
      : [
          {
            id: 1,
            name: "Sara",
            rating: 5,
            comment: "Amazing portfolio!",
          },
          {
            id: 2,
            name: "John",
            rating: 4,
            comment: "Very clean design.",
          },
        ];
  });

  function handleAddFeedback() {
    if (!name || !comment) return;

    const newFeedback = {
      id: Date.now(),
      name,
      rating,
      comment,
    };

    setFeedbacks([newFeedback, ...feedbacks]);

    setName("");
    setRating(5);
    setComment("");
  }

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const sortedFeedbacks = [...feedbacks];

  if (sortType === "highest") {
    sortedFeedbacks.sort((a, b) => b.rating - a.rating);
  }

  if (sortType === "lowest") {
    sortedFeedbacks.sort((a, b) => a.rating - b.rating);
  }

  if (sortType === "newest") {
    sortedFeedbacks.sort((a, b) => b.id - a.id);
  }

  return (
    <>
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="feedback-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              ✕
            </button>

            <h2>Add Feedback</h2>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>

            <textarea
              placeholder="Your Feedback"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button
              onClick={() => {
                handleAddFeedback();
                setShowModal(false);
              }}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      )}

      <section className="feedback">
        <h2>Visitor Feedback</h2>

        <div className="sort-dropdown">
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="highest">⭐ Highest Rating</option>

            <option value="lowest">📉 Lowest Rating</option>

            <option value="newest">🕒 Newest First</option>
          </select>
        </div>

        <div className="feedback-container">
          {sortedFeedbacks.map((feedback) => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))}
        </div>

        <button
          className="floating-feedback-btn"
          onClick={() => setShowModal(true)}
        >
          💬
        </button>
      </section>
    </>
  );
}

export default Feedback;
