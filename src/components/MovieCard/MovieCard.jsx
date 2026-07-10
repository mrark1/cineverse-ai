import "./MovieCard.css";
import { IMAGE_URL } from "../../utils/constants";
import { FaStar, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";

function MovieCard({ movie }) {
    const { toggleFavorite, isFavorite } =
    useContext(FavoritesContext);
  return (
    <div className="movie-card">

      <img
        src={
movie.poster_path
? `${IMAGE_URL}${movie.poster_path}`
: "https://placehold.co/500x750?text=No+Image"
}
        alt={movie.title}
        loading="lazy"
      />

      <div className="movie-info">

        <h3>{movie.title}</h3>

        <div className="movie-meta">

          <span>
            📅 {movie.release_date?.split("-")[0]}
          </span>

          <div className="rating">

    <FaStar />

    <span>
        {movie.vote_average.toFixed(1)}
    </span>

</div>

        </div>

        <button
    className={`favorite-btn ${
        isFavorite(movie.id) ? "active" : ""
    }`}
    onClick={() => toggleFavorite(movie)}
>
          <FaHeart />
        </button>

      </div>

    </div>
  );
}

export default MovieCard;