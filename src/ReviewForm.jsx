import { useState } from "react";

export default function ReviewForm({ movies, onAddReview }) {
  const [movieId, setMovieId] = useState("");
  const [rating, setRating] = useState("5");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // stop page reload

    const movie = movies.find((movie) => movie.id === Number(movieId)); // find by ID

    if (!movie || !text.trim()) {
      setError("Choose a movie and write a review.");
      return;
    }

    // create review ID
    const review = {
      id: crypto.randomUUID(),
      movieId: movie.id,
      movieTitle: movie.title,
      author: "You",
      rating: Number(rating),
      text: text.trim(),
    };

    onAddReview(review);
    setText("");
    setError("");
  }

  return (
    <section>
      <h2 className="label-box">Write a review</h2>

      <form className="review-form" onSubmit={handleSubmit}>
        <label htmlFor="review-movie">Movie you watched</label>
        <select
          id="review-movie"
          value={movieId}
          onChange={(event) => setMovieId(event.target.value)}
          required
        >
          <option value="">Choose a movie</option>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>

        <label htmlFor="review-rating">Rating out of five</label>
        <select
          id="review-rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label htmlFor="review-text">Your review</label>
        <textarea
          id="review-text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={4}
          maxLength={500}
          required
        />

        {error && <p role="alert">{error}</p>}

        <button type="submit">Submit review</button>
      </form>
    </section>
  );
}
