import HomeSection from "./HomeSection.jsx";
import ReviewSection from "./ReviewSection.jsx";
import { userReviews, criticReviews } from "./reviews.js";
import { movies } from "./movies.js";
import ReviewForm from "./ReviewForm.jsx";
import useSavedReviews from "./useSavedReviews.js";
import { useEffect, useRef, useState } from "react";
import { fetchTmdb } from "./tmdb.js";


const lists = [
  { id: 1, title: "List One" },
  { id: 2, title: "List Two" },
  { id: 3, title: "List Three" },
];

const updates = [
  { id: 1, title: "Update One" },
  { id: 2, title: "Update Two" },
  { id: 3, title: "Update Three" },
];

export default function App() {
  const { reviews, addReview, saveFailed } = useSavedReviews();
  const [apiMovies, setApiMovies] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(true);
  const [movieError, setMovieError] = useState("");
  const movieCarouselRef = useRef(null);
  useEffect(() => {
    const controller = new AbortController();

    async function loadMovies() {
      try {
        setLoadingMovies(true);
        setMovieError("");

        const data = await fetchTmdb(
          "/trending/movie/week",
          controller.signal,
        );

        if (!Array.isArray(data.results)) {
          throw new Error("TMDB returned an unexpected response.");
        }

        setApiMovies(data.results);
      } catch (error) {
        if (error.name !== "AbortError") {
          setMovieError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoadingMovies(false);
        }
      }
    }

    loadMovies();
    return () => controller.abort();
  }, []);

  function scrollMovies(direction) {
    const carousel = movieCarouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector(".movie-card");
    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    const distance = firstCard
      ? firstCard.getBoundingClientRect().width + gap
      : carousel.clientWidth;

    carousel.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  }

  return (
    <>
      <nav>
        <div className="container nav-content">
          <a href="index.html">Main Page</a>
          <a href="list.html">My Lists</a>
        </div>
      </nav>

      <main className="container">
        <header className="hero">
          <h1>Recent Releases</h1>
        </header>
        <section className="movie-section" aria-labelledby="trending-heading">
          <h2 id="trending-heading">Trending this week</h2>

          {loadingMovies && <p role="status">Loading movies…</p>}
          {movieError && <p role="alert">{movieError}</p>}

          {!loadingMovies && !movieError && (
            <div className="movie-carousel">
              <button className="carousel-button" type="button" aria-label="Show previous trending movies" aria-controls="trending-movies" onClick={() => scrollMovies(-3)}>
                &larr;
              </button>
              <div className="movie-grid" id="trending-movies" ref={movieCarouselRef} role="region" aria-label="Trending movies" tabIndex={0}>
                {apiMovies.map((movie) => (
                  <article className="movie-card" key={movie.id}>
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={`Poster for ${movie.title}`}
                      />
                    ) : (
                      <div className="poster-fallback">Poster unavailable</div>
                    )}
                  </article>
                ))}
              </div>
              <button className="carousel-button" type="button" aria-label="Show next trending movies" aria-controls="trending-movies" onClick={() => scrollMovies(3)}>
                &rarr;
              </button>
            </div>
          )}
        </section>

        <div className="section-news">LATEST MOVIE NEWS &amp; UPDATES</div>

        <br />
        <br />

        <ReviewForm movies={movies} onAddReview={addReview} />
        {saveFailed && (
          <p role="status">
            Your review is visible, but this browser could not save it for
            later.
          </p>
        )}
        <ReviewSection
          title="Popular User Reviews This Week"
          reviews={[...reviews, ...userReviews]}
        />

        <ReviewSection
          title="Popular Critic Reviews This Week"
          reviews={criticReviews}
        />

        <HomeSection title="Popular Lists" items={lists} />

        <HomeSection title="Upcoming Removals & Additions" items={updates} />
      </main>
    </>
  );
}
