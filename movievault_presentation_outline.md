# MovieVault — 5-Minute Group Presentation Guide & Script

This guide is structured for a 5-minute live demo and presentation. It allocates specific roles, talking points, screen actions, and M4 risks so every member gets equal speaking time and grading points.

---

## ⏱️ Presentation Timing Overview (5 Minutes Total)

| Time | Topic / Section | Presenter | Key Focus |
| :--- | :--- | :--- | :--- |
| **0:00 – 1:00** | Introduction & Live App Overview | Member 1 | App concept, Navigation & View Switching |
| **1:00 – 2:30** | Feature Walkthrough & Interaction | Member 2 | Search/Filter, Detail Banner & DVD Shelf Toggle |
| **2:30 – 3:45** | React Architecture & Component Tree | Member 3 (or Member 1/2) | State flow, Props, Immutability & Forms |
| **3:45 – 5:00** | Milestone 4 Risks & Next Steps | All / Member 3 | Technical debt, API integration & UI Polish |

---

## 🗣️ Detailed Presentation Script & Demo Actions

### 1. Introduction & App Overview (0:00 – 1:00) — **Presenter 1**

**What to click on screen:**
1. Start on the `Main Page` (`http://localhost:5173`).
2. Point out the header banner ("Recent Releases").
3. Click on the **"My Lists"** link in the navigation bar to toggle to the DVD Shelf view, then click back to **"Main Page"**.

**What to say:**
> "Hi everyone and [TA Name]. Today our group is presenting **MovieVault**, a dynamic React web application designed for browsing release updates, writing reviews, and managing a personal DVD shelf collection.
>
> We built MovieVault as a Single Page Application using React and Vite. As you can see, navigating between our **Main Page** and **My Lists** view happens instantly without full page reloads, thanks to centralized view state management."

---

### 2. Feature Walkthrough & Live Demo (1:00 – 2:30) — **Presenter 2**

**What to click on screen:**
1. Type `"Inception"` in the top search bar to show instant filtering.
2. Click the **"Action"** genre filter button.
3. Click on **Inception** to expand the **Movie Detail Banner**.
4. Click **"★ Add to My Shelf"** inside the banner (point out the counter in the navbar updating to `(4)`).
5. Switch to **"My Lists"** view to show the dynamic DVD spine added under Action.
6. Scroll down to the **"Write a review"** form, select a movie, submit a test review, and show it appearing at the top of the User Reviews section.

**What to say:**
> "I'll take you through our live interactive features. First, users can quickly search and filter our catalog by genre in real-time using controlled state.
> 
> Clicking on any movie card—like *Inception*—opens a dedicated detail panel displaying the synopsis, director, and status. From here, users can toggle whether the movie is on their **DVD Shelf**. Notice how updating the shelf status immediately updates our navbar counter and dynamically renders the colorful DVD spine inside the **My Lists** bookshelf view.
> 
> We also have an interactive **Review Form** where users can submit reviews. Submissions update our global review state immutably and appear immediately on the page."

---

### 3. Component Structure & React Architecture (2:30 – 3:45) — **Presenter 3** (or shared)

**Visual Aid / Code Reference:**
Show the project file tree in WebStorm/VS Code (`App.jsx`, `HomeSection.jsx`, `ReviewSection.jsx`, `ReviewForm.jsx`).

```text
src/
 ├── main.jsx             (App Entry & Root Render)
 ├── App.jsx              (State Container & Layout Controller)
 ├── HomeSection.jsx      (Reusable Movie/List Grid)
 ├── ReviewSection.jsx    (Review Container & List Mapping)
 ├── ReviewCard.jsx       (Expandable Review Item)
 ├── ReviewForm.jsx       (Controlled Component for New Submissions)
 ├── movies.js            (Initial Movie Data Model)
 └── reviews.js           (Initial Reviews Data Model)
```

**What to say:**
> "Under the hood, our application follows clean React component principles:
> 
> - **State Management (`App.jsx`)**: `App` acts as our single source of truth. It holds top-level state for `movieList`, `reviews`, `currentView`, `searchQuery`, and `selectedMovieId`.
> - **Lifting State Up**: Rather than duplicating state inside individual components, we derive values like `selectedMovie` on the fly (`movieList.find(...)`). This prevents stale data bugs across views.
> - **Reusable Components**: `HomeSection` handles both movie browsing grids and custom list cards by checking item props like `genre` and dynamically applying accessibility attributes (`role="button"`, `tabIndex`).
> - **Controlled Inputs**: `ReviewForm` uses local state to handle text and rating inputs before firing an `onAddReview` callback upward to update the parent review list."

---

### 4. Milestone 4 (M4) Risks & Remaining Work (3:45 – 5:00) — **All Members / Closing**

**What to say:**
> "To wrap up, we want to highlight our technical risks and planned roadmap for the final milestone (M4):
> 
> 1. **Data Persistence (Risk)**: Right now, custom reviews and shelf toggles reset when refreshing the page. For M4, we plan to implement `localStorage` or integrate a backend REST API to persist user updates.
> 2. **Form Validation & Edge Cases**: We need to expand error handling in `ReviewForm` for edge cases like duplicate submissions or missing fields.
> 3. **Accessibility (a11y)**: While we have keyboard navigation (`Enter`/`Space`) and `aria-pressed` on cards, we want to audit screen reader behavior across the full DVD Shelf view.
> 4. **UI Refinement**: Responsive layout adjustments for mobile screens.
> 
> Thank you! We'd be happy to take any questions."

---

## 🎯 Quick Grading Checklist for Team Members

- [ ] **Run `npm run dev` before the presentation** and ensure the local dev server (`localhost:5173`) is active.
- [ ] **Test all buttons** (Genre buttons, search input, shelf toggle, view switch) once right before calling the TA over.
- [ ] **Verify everyone speaks**: Divide the sections strictly so each member contributes ~1.5 minutes.