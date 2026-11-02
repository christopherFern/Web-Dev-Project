import { useState } from "react";

export default function ReviewCard({ review }) {
  const [showReview, setShowReview] = useState(false);

  return (
    <article className="item-card review-card">
      <h3>{review.movieTitle}</h3>
      <p>{review.author}</p>
      <p>Rating: {review.rating}/5</p>

      <button
        type="button"
        onClick={() => setShowReview((previous) => !previous)} // toggle
      >
        {showReview ? "Hide Review" : "Show Review"}
      </button>

      {showReview && <p className="review-text">{review.text}</p>}
    </article>
  );
}
