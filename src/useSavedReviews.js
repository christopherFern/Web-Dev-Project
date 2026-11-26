import { useEffect, useState } from "react";
import { readSavedReviews, saveReviews } from "./reviewStorage.js";

function getReviewStorage() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export default function useSavedReviews() {
  const [reviews, setReviews] = useState(() =>
    readSavedReviews(getReviewStorage())
  );
  const [saveFailed, setSaveFailed] = useState(false);

  useEffect(() => {
    // skip saving an empty list when the page first opens
    if (reviews.length === 0) return;

    setSaveFailed(!saveReviews(getReviewStorage(), reviews));
  }, [reviews]);

  function addReview(review) {
    setReviews((previous) => [review, ...previous]);
  }

  return { reviews, addReview, saveFailed };
}