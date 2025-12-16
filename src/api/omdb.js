import axios from "axios";

const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = "599d33a0";

export const searchMovies = async (query, page = 1, type = "") => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: query,
      page,
      type, // movie | series | episode
    },
  });
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: id,
      plot: "full",
    },
  });
  return response.data;
};