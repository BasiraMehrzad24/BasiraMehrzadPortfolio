function FeedbackCard({ feedback }) {
  return (
    <div className="feedback-card">
      {feedback.rating === 5 && (
        <span className="featured-review"> 🌟 Featured</span>
      )}
      <h3>{feedback.name}</h3>
      <p>{feedback.comment}</p>
      <p className="rating">{"⭐".repeat(feedback.rating)}</p>
    </div>
  );
}

export default FeedbackCard;
