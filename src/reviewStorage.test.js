import assert from "node:assert/strict";
import { test } from "node:test";
import { readSavedReviews, saveReviews } from "./reviewStorage.js";

test("saving and loading keeps each rating with the right movie", () => {
  const data = {};
  const storage = {
    getItem(key) {
      return data[key];
    },
    setItem(key, value) {
      data[key] = value;
    },
  };

  const reviews = [
    { movieId: 1, rating: 4 },
    { movieId: 2, rating: 5 },
  ];

  assert.equal(saveReviews(storage, reviews), true);
  assert.deepEqual(readSavedReviews(storage), reviews);
});

test("missing or invalid saved data gives an empty list", () => {
  assert.deepEqual(readSavedReviews({ getItem: () => null }), []);
  assert.deepEqual(readSavedReviews({ getItem: () => "invalid JSON" }), []);
});

test("saving returns false when storage is blocked", () => {
  const storage = {
    setItem() {
      throw new Error("storage blocked");
    },
  };

  assert.equal(saveReviews(storage, [{ movieId: 1, rating: 4 }]), false);
});