const API_KEY = "599d33a0";
// Use HTTPS to avoid mixed-content blocking when site is served over HTTPS
const BASE_URL = "https://www.omdbapi.com/";

/**
 * Search movies by title, page number, and type
 * @param {string} query
 * @param {number} page
 * @param {string} type
 */
export const searchMovies = async (query, page = 1, type = "") => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}&type=${type}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    return response.json();
  } catch (err) {
    console.error("searchMovies error:", err);
    return { Response: "False", Error: "Network error" };
  }
};

/**
 * Fetch full movie details using IMDb ID
 * @param {string} id
 */
export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }

    return response.json();
  } catch (err) {
    console.error("getMovieDetails error:", err);
    return { Response: "False", Error: "Network error" };
  }
};