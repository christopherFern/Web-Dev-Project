import ReviewCard from "./ReviewCard.jsx";

export default function ReviewSection({ title, reviews }) {
  return (
    <section>
      <h2 className="label-box">{title}</h2>

      <div className="content-area">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
