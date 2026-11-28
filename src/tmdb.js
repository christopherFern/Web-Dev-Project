export async function fetchTmdb(path, signal) {
  const response = await fetch(`/api/tmdb${path}`, { signal });

  if (!response.ok) {
    throw new Error(`TMDB request failed (${response.status})`);
  }

  return response.json();
}
