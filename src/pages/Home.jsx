import { useEffect, useState } from "react";
import SkeletonGrid from "../components/Skeleton/SkeletonGrid";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import Loader from "../components/Loader/Loader";
import MoodSearch from "../components/MoodSearch/MoodSearch";
import { getMovieRecommendation } from "../services/gemini";
import { moodMap } from "../utils/moodMap";
import Footer from "../components/Footer/Footer";

import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useDebounce from "../hooks/useDebounce";

import { getPopularMovies, searchMovies } from "../services/tmdb";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  // Load next page
  const loadNextPage = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  const lastMovieRef = useInfiniteScroll(
    loadNextPage,
    hasMore,
    loading
  );
  
  const handleMoodSearch = async (mood) => {

  try {

    setLoading(true);

    const movieTitle =
  moodMap[mood.toLowerCase()] || "Inception";

setQuery(movieTitle);

  } catch (error) {

    console.error(error);

  } finally {

    setLoading(false);

  }

};

  // Reset page whenever search changes
  useEffect(() => {
    setPage(1);
  }, [debouncedQuery]);

  // Fetch Movies
  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);

      try {
        let data;

        if (debouncedQuery.trim()) {
          data = await searchMovies(debouncedQuery, page);
        } else {
          data = await getPopularMovies(page);
        }

        if (page === 1) {
          setMovies(data.results);
        } else {
          setMovies((prev) => [...prev, ...data.results]);
        }

        setHasMore(page < data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [debouncedQuery, page]);

  return (
    <>
      <Navbar />

      <Hero />

      <SearchBar
        value={query}
        onChange={setQuery}
      />
        <MoodSearch
    onSearch={handleMoodSearch}
/>

      <MovieGrid
        movies={movies}
        lastMovieRef={lastMovieRef}
      />

      {loading && <SkeletonGrid />}
    </>
    
  );
  <Footer />
}

export default Home;