// import HomeSection from "./HomeSection.jsx";
// import ReviewSection from "./ReviewSection.jsx";
// import { userReviews, criticReviews } from "./reviews.js";
// import { movies } from "./movies.js";
// import ReviewForm from "./ReviewForm.jsx";
// import { useState } from "react";
//
// const lists = [
//   { id: 1, title: "List One" },
//   { id: 2, title: "List Two" },
//   { id: 3, title: "List Three" },
// ];
//
// const updates = [
//   { id: 1, title: "Update One" },
//   { id: 2, title: "Update Two" },
//   { id: 3, title: "Update Three" },
// ];
//
// export default function App() {
//   const [reviews, setReviews] = useState(userReviews);
//
//   function addReview(review) {
//     setReviews((previous) => [review, ...previous]);
//   }
//
//   return (
//     <>
//       <nav>
//         <div className="container nav-content">
//           <a href="index.html">Main Page</a>
//           <a href="list.html">My Lists</a>
//         </div>
//       </nav>
//
//       <main className="container">
//         <header className="hero">
//           <h1>Recent Releases</h1>
//         </header>
//
//         <div className="section-news">LATEST MOVIE NEWS &amp; UPDATES</div>
//
//         <br />
//         <br />
//
//         <ReviewForm movies={movies} onAddReview={addReview} />
//         <ReviewSection
//           title="Popular User Reviews This Week"
//           reviews={reviews}
//         />
//
//         <ReviewSection
//           title="Popular Critic Reviews This Week"
//           reviews={criticReviews}
//         />
//
//         <HomeSection title="Popular Lists" items={lists} />
//
//         <HomeSection title="Upcoming Removals & Additions" items={updates} />
//       </main>
//     </>
//   );
// }
//
//
// import { useState } from "react";
// import HomeSection from "./HomeSection.jsx";
// import ReviewSection from "./ReviewSection.jsx";
// import ReviewForm from "./ReviewForm.jsx";
// import { userReviews, criticReviews } from "./reviews.js";
// import { movies as initialMovies } from "./movies.js";
//
// const popularLists = [
//   {
//     id: "list-1",
//     title: "Late Night Action Essentials",
//     description: "High-octane blockbusters with practical stunts and relentless pacing."
//   },
//   {
//     id: "list-2",
//     title: " weekend Laughs",
//     description: "Crowd-pleasing comedies to watch with friends."
//   },
//   {
//     id: "list-3",
//     title: "Modern Horror Classics",
//     description: "Psychological thrillers and supernatural horror from the 2010s & 2020s."
//   }
// ];
//
// export default function App() {
//   const [movieList, setMovieList] = useState(initialMovies);
//   const [reviews, setReviews] = useState(userReviews);
//   const [currentView, setCurrentView] = useState("main"); // "main" | "list"
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedGenre, setSelectedGenre] = useState("All");
//   const [selectedMovieId, setSelectedMovieId] = useState(null);
//   const selectedMovie = movieList.find((m) => m.id === selectedMovieId) || null;
//
//   // Add a new user review immutably
//   function addReview(review) {
//     setReviews((previous) => [review, ...previous]);
//   }
//
//   // Toggle whether a movie is saved on the user's DVD Shelf (Milestone 2 state toggle)
//   function toggleShelf(movieId) {
//     setMovieList((previous) =>
//         previous.map((movie) =>
//             movie.id === movieId ? { ...movie, inShelf: !movie.inShelf } : movie
//         )
//     );
//     // Keep the opened detail panel in sync if that movie is currently open
//     setSelectedMovie((prev) =>
//         prev && prev.id === movieId ? { ...prev, inShelf: !prev.inShelf } : prev
//     );
//   }
//
//   // Open or close a clicked movie item
//   function handleSelectMovie(item) {
//     if (!item.genre) return; // Ignore non-movie static list cards
//     setSelectedMovie((prev) => (prev?.id === item.id ? null : item));
//   }
//
//   // Filter movies by search query and genre
//   const filteredMovies = movieList.filter((movie) => {
//     const matchesSearch = movie.title
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase());
//     const matchesGenre =
//         selectedGenre === "All" || movie.genre === selectedGenre;
//     return matchesSearch && matchesGenre;
//   });
//
//   const genres = ["Action", "Comedy", "Horror"];
//
//   return (
//       <>
//         <nav>
//           <div className="container nav-content">
//             <div className="nav-links">
//               <a
//                   href="#main"
//                   className={currentView === "main" ? "nav-active" : ""}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setCurrentView("main");
//                   }}
//               >
//                 Main Page
//               </a>
//               <a
//                   href="#list"
//                   className={currentView === "list" ? "nav-active" : ""}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setCurrentView("list");
//                   }}
//               >
//                 My Lists ({movieList.filter((m) => m.inShelf).length})
//               </a>
//             </div>
//
//             <input
//                 type="text"
//                 className="search-bar"
//                 placeholder="Search movies..."
//                 aria-label="Search movies"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </nav>
//
//         <main className="container">
//           <header className="hero">
//             <h1>
//               {currentView === "main" ? "Recent Releases" : "My DVD Shelf"}
//             </h1>
//           </header>
//
//           {/* Opened Movie Details Panel (Fulfills "Open an item & toggle state") */}
//           {selectedMovie && (
//               <div className="movie-detail-banner">
//                 <div className="movie-detail-header">
//                   <div>
//                     <h2>
//                       {selectedMovie.title} ({selectedMovie.year})
//                     </h2>
//                     <p className="movie-detail-sub">
//                       Directed by {selectedMovie.director} • {selectedMovie.genre} •{" "}
//                       {selectedMovie.status}
//                     </p>
//                   </div>
//                   <div className="movie-detail-actions">
//                     <button
//                         type="button"
//                         className="shelf-toggle-btn"
//                         onClick={() => toggleShelf(selectedMovie.id)}
//                     >
//                       {selectedMovie.inShelf
//                           ? "★ Remove from My Shelf"
//                           : "☆ Add to My Shelf"}
//                     </button>
//                     <button
//                         type="button"
//                         className="close-detail-btn"
//                         onClick={() => setSelectedMovie(null)}
//                     >
//                       Close ✕
//                     </button>
//                   </div>
//                 </div>
//                 <p className="movie-detail-synopsis">{selectedMovie.synopsis}</p>
//               </div>
//           )}
//
//           {currentView === "main" ? (
//               <>
//                 <div className="section-news">
//                   LATEST MOVIE NEWS &amp; UPDATES — Click any movie below to view
//                   details or add it to your DVD Shelf!
//                 </div>
//
//                 <div className="genre-filter-row">
//                   <span>Filter Genre: </span>
//                   {["All", ...genres].map((genre) => (
//                       <button
//                           key={genre}
//                           type="button"
//                           className={`genre-btn ${
//                               selectedGenre === genre ? "genre-btn-active" : ""
//                           }`}
//                           onClick={() => setSelectedGenre(genre)}
//                       >
//                         {genre}
//                       </button>
//                   ))}
//                 </div>
//
//                 <HomeSection
//                     title="Browse Movies"
//                     items={filteredMovies}
//                     selectedItemId={selectedMovie?.id}
//                     onSelectItem={handleSelectMovie}
//                 />
//
//                 <ReviewForm movies={movieList} onAddReview={addReview} />
//
//                 <ReviewSection
//                     title="Popular User Reviews This Week"
//                     reviews={reviews}
//                 />
//
//                 <ReviewSection
//                     title="Popular Critic Reviews This Week"
//                     reviews={criticReviews}
//                 />
//
//                 <HomeSection title="Popular Lists" items={popularLists} />
//
//                 <HomeSection
//                     title="Upcoming Removals & Additions"
//                     items={movieList.map((m) => ({
//                       ...m,
//                       title: `${m.title} (${m.status})`
//                     }))}
//                     selectedItemId={selectedMovie?.id}
//                     onSelectItem={handleSelectMovie}
//                 />
//               </>
//           ) : (
//               /* Rebuilt list.html as a dynamic React View! */
//               <>
//                 <div className="section-news">
//                   Click any DVD spine on your shelf to inspect the movie or toggle
//                   it off your shelf.
//                 </div>
//                 <br />
//
//                 {genres.map((genre) => {
//                   const shelfMovies = filteredMovies.filter(
//                       (m) => m.genre === genre && m.inShelf
//                   );
//
//                   return (
//                       <section className="shelf-section" key={genre}>
//                         <div className="shelf-title">{genre}</div>
//                         <div className="dvd-row">
//                           {shelfMovies.length === 0 ? (
//                               <div className="dvd-spine spine-empty"></div>
//                           ) : (
//                               shelfMovies.map((movie) => (
//                                   <div
//                                       key={movie.id}
//                                       className={`dvd-spine ${movie.spineClass}`}
//                                       tabIndex={0}
//                                       role="button"
//                                       onClick={() => handleSelectMovie(movie)}
//                                       onKeyDown={(e) => {
//                                         if (e.key === "Enter" || e.key === " ") {
//                                           e.preventDefault();
//                                           handleSelectMovie(movie);
//                                         }
//                                       }}
//                                   >
//                                     {movie.title}
//                                   </div>
//                               ))
//                           )}
//                         </div>
//                       </section>
//                   );
//                 })}
//               </>
//           )}
//         </main>
//       </>
//   );
// }

import { useState } from "react";
import HomeSection from "./HomeSection.jsx";
import ReviewSection from "./ReviewSection.jsx";
import ReviewForm from "./ReviewForm.jsx";
import { userReviews, criticReviews } from "./reviews.js";
import { movies as initialMovies } from "./movies.js";

const popularLists = [
  {
    id: "list-1",
    title: "Late Night Action Essentials",
    description: "High-octane blockbusters with practical stunts and relentless pacing."
  },
  {
    id: "list-2",
    title: "Weekend Laughs",
    description: "Crowd-pleasing comedies to watch with friends."
  },
  {
    id: "list-3",
    title: "Modern Horror Classics",
    description: "Psychological thrillers and supernatural horror from the 2010s & 2020s."
  }
];

export default function App() {
  const [movieList, setMovieList] = useState(initialMovies);
  const [reviews, setReviews] = useState(userReviews);
  const [currentView, setCurrentView] = useState("main");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  // Derived state: automatically stays in sync when movieList changes
  const selectedMovie = movieList.find((m) => m.id === selectedMovieId) || null;

  function addReview(review) {
    setReviews((previous) => [review, ...previous]);
  }

  function toggleShelf(movieId) {
    setMovieList((previous) =>
        previous.map((movie) =>
            movie.id === movieId ? { ...movie, inShelf: !movie.inShelf } : movie
        )
    );
  }

  function handleSelectMovie(item) {
    if (!item.genre) return;
    setSelectedMovieId((prevId) => (prevId === item.id ? null : item.id));
  }

  const filteredMovies = movieList.filter((movie) => {
    const matchesSearch = movie.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    const matchesGenre =
        selectedGenre === "All" || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const genres = ["Action", "Comedy", "Horror"];

  return (
      <>
        <nav>
          <div className="container nav-content">
            <div className="nav-links">
              <a
                  href="#main"
                  className={currentView === "main" ? "nav-active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentView("main");
                  }}
              >
                Main Page
              </a>
              <a
                  href="#list"
                  className={currentView === "list" ? "nav-active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentView("list");
                  }}
              >
                My Lists ({movieList.filter((m) => m.inShelf).length})
              </a>
            </div>

            <input
                type="text"
                className="search-bar"
                placeholder="Search movies..."
                aria-label="Search movies"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </nav>

        <main className="container">
          <header className="hero">
            <h1>
              {currentView === "main" ? "Recent Releases" : "My DVD Shelf"}
            </h1>
          </header>

          {selectedMovie && (
              <div className="movie-detail-banner">
                <div className="movie-detail-header">
                  <div>
                    <h2>
                      {selectedMovie.title} ({selectedMovie.year})
                    </h2>
                    <p className="movie-detail-sub">
                      Directed by {selectedMovie.director} • {selectedMovie.genre} •{" "}
                      {selectedMovie.status}
                    </p>
                  </div>
                  <div className="movie-detail-actions">
                    <button
                        type="button"
                        className="shelf-toggle-btn"
                        onClick={() => toggleShelf(selectedMovie.id)}
                    >
                      {selectedMovie.inShelf
                          ? "★ Remove from My Shelf"
                          : "☆ Add to My Shelf"}
                    </button>
                    <button
                        type="button"
                        className="close-detail-btn"
                        onClick={() => setSelectedMovieId(null)}
                    >
                      Close ✕
                    </button>
                  </div>
                </div>
                <p className="movie-detail-synopsis">{selectedMovie.synopsis}</p>
              </div>
          )}

          {currentView === "main" ? (
              <>
                <div className="section-news">
                  LATEST MOVIE NEWS & UPDATES — Click any movie below to view
                  details or add it to your DVD Shelf!
                </div>

                <div className="genre-filter-row">
                  <span>Filter Genre: </span>
                  {["All", ...genres].map((genre) => (
                      <button
                          key={genre}
                          type="button"
                          className={`genre-btn ${
                              selectedGenre === genre ? "genre-btn-active" : ""
                          }`}
                          onClick={() => setSelectedGenre(genre)}
                      >
                        {genre}
                      </button>
                  ))}
                </div>

                <HomeSection
                    title="Browse Movies"
                    items={filteredMovies}
                    selectedItemId={selectedMovie?.id}
                    onSelectItem={handleSelectMovie}
                />

                <ReviewForm movies={movieList} onAddReview={addReview} />

                <ReviewSection
                    title="Popular User Reviews This Week"
                    reviews={reviews}
                />

                <ReviewSection
                    title="Popular Critic Reviews This Week"
                    reviews={criticReviews}
                />

                <HomeSection title="Popular Lists" items={popularLists} />

                <HomeSection
                    title="Upcoming Removals & Additions"
                    items={movieList.map((m) => ({
                      ...m,
                      title: `${m.title} (${m.status})`
                    }))}
                    selectedItemId={selectedMovie?.id}
                    onSelectItem={handleSelectMovie}
                />
              </>
          ) : (
              <>
                <div className="section-news">
                  Click any DVD spine on your shelf to inspect the movie or toggle
                  it off your shelf.
                </div>
                <br />

                {genres.map((genre) => {
                  const shelfMovies = filteredMovies.filter(
                      (m) => m.genre === genre && m.inShelf
                  );

                  return (
                      <section className="shelf-section" key={genre}>
                        <div className="shelf-title">{genre}</div>
                        <div className="dvd-row">
                          {shelfMovies.length === 0 ? (
                              <div className="dvd-spine spine-empty"></div>
                          ) : (
                              shelfMovies.map((movie) => (
                                  <div
                                      key={movie.id}
                                      className={`dvd-spine ${movie.spineClass}`}
                                      tabIndex={0}
                                      role="button"
                                      onClick={() => handleSelectMovie(movie)}
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                          e.preventDefault();
                                          handleSelectMovie(movie);
                                        }
                                      }}
                                  >
                                    {movie.title}
                                  </div>
                              ))
                          )}
                        </div>
                      </section>
                  );
                })}
              </>
          )}
        </main>
      </>
  );
}