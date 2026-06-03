import { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";

function Feedback() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [sortType, setSortType] = useState("highest");

  // for adding feedback by user

  function handleAddFeedback() {
    if (!name || !comment) {
      return;
    }

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

  //  for saving feedbacks on local storage
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  // sorting starts here

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
      <div className="feedback-form">
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

        <button onClick={handleAddFeedback}>Add Feedback</button>
      </div>

      <div className="sort-buttons">
        <button
          className={sortType === "highest" ? "active" : ""}
          onClick={() => setSortType("highest")}
        >
          ⭐ Highest
        </button>

        <button
          className={sortType === "lowest" ? "active" : ""}
          onClick={() => setSortType("lowest")}
        >
          📉 Lowest
        </button>

        <button
          className={sortType === "newest" ? "active" : ""}
          onClick={() => setSortType("newest")}
        >
          🕒 Newest
        </button>
      </div>

      <section className="feedback">
        <h2>Visitor Feedback</h2>
        {sortedFeedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))}
      </section>
    </>
  );
}

export default Feedback;
