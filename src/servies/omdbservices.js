const API_KEY = "599d33a0";
const BASE_URL = "http://www.omdbapi.com/";

/**
 * Search movies by title, page number, and type
 * @param {string} query
 * @param {number} page
 * @param {string} type
 */
export const searchMovies = async (query, page = 1, type = "") => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}&type=${type}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return response.json();
};

/**
 * Fetch full movie details using IMDb ID
 * @param {string} id
 */
export const getMovieDetails = async (id) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }

  return response.json();
};