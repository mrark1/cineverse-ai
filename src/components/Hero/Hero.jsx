import "./Hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <span className="hero-tag">
          🔥 Trending Movies
        </span>

        <h1>
          Discover Amazing Movies
        </h1>

        <p>
          Search millions of movies, discover trending titles,
          save your favorites, and let AI recommend the perfect
          movie for your mood.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Now
          </button>

          <Link
    to="/favorites"
    className="secondary-btn"
>
    ❤️ My Favorites
</Link>
        </div>

      </div>

    </section>
  );
}

export default Hero;