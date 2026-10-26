export default function ReviewCard({ review }) {
  return (
    <article className="item-card review-card">
      <h3>{review.movieTitle}</h3>
      <p>{review.author}</p>
      <p>Rating: {review.rating}/5</p>
      <p className="review-text">{review.text}</p>
    </article>
  );
}
