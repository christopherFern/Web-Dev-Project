import HomeSection from "./HomeSection.jsx";
import ReviewSection from "./ReviewSection.jsx";
import { userReviews, criticReviews } from "./reviews.js";

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

        <div className="section-news">LATEST MOVIE NEWS &amp; UPDATES</div>

        <br />
        <br />

        <ReviewSection
          title="Popular User Reviews This Week"
          reviews={userReviews}
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
