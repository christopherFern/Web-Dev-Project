const reviewStorageKey = "movievault.reviews";

export function readSavedReviews(storage) {
  try {
    const saved = storage.getItem(reviewStorageKey);
    const reviews = saved ? JSON.parse(saved) : [];

    return Array.isArray(reviews) ? reviews : [];
  } catch {
    // let the app open even if the saved reviews cant be read
    return [];
  }
}

export function saveReviews(storage, reviews) {
  try {
    storage.setItem(reviewStorageKey, JSON.stringify(reviews)); // array to text
    return true;
  } catch {
    return false;
  }
}
