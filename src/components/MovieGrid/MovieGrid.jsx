import "./MovieGrid.css";
import MovieCard from "../MovieCard/MovieCard";

function MovieGrid({ movies, lastMovieRef }) {
  if (movies.length === 0) {
    return (
      <div className="no-results">
        <h2>No Movies Found 🎬</h2>
        <p>Try another search keyword.</p>
      </div>
    );
  }

  return (
    <section className="movie-grid container">
      {movies.map((movie, index) => {
        if (index === movies.length - 1) {
          return (
            <div key={movie.id} ref={lastMovieRef}>
              <MovieCard movie={movie} />
            </div>
          );
        }

        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </section>
  );
}

export default MovieGrid;