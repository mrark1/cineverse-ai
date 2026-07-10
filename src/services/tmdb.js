import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
});

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getPopularMovies = async (page = 1) => {
  const { data } = await api.get("/movie/popular", {
    params: {
      api_key: API_KEY,
      page,
    },
  });

  return data;
};

export const searchMovies = async (query, page = 1) => {
  const { data } = await api.get("/search/movie", {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });

  return data;
};