import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReviewCard from "./ReviewCard.jsx";

test("shows and hides the review text", async () => {
  const review = {
    movieTitle: "Interstellar",
    author: "You",
    rating: 5,
    text: "The soundtrack was my favourite part.",
  };

  render(<ReviewCard review={review} />);
  expect(screen.queryByText(review.text)).toBeNull();

  await userEvent.click(screen.getByRole("button", { name: "Show Review" }));
  expect(screen.getByText(review.text)).toBeTruthy();

  await userEvent.click(screen.getByRole("button", { name: "Hide Review" }));
  expect(screen.queryByText(review.text)).toBeNull();
  expect(screen.getByRole("button", { name: "Show Review" })).toBeTruthy();
});