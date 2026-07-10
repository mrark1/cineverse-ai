import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHeart
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-brand">

          <h2>
            🎬 CineVerse AI
          </h2>

          <p>
            Discover trending movies, search millions
            of titles and save your favourites.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/">Home</a>

          <a href="/favorites">Favorites</a>

          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noreferrer"
          >
            TMDB
          </a>

        </div>

        <div className="footer-social">

          <h3>Connect</h3>

          <div className="social-icons">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        Made with <FaHeart className="heart" /> by
        <strong> Arpit Raj Katiyar</strong>

      </div>

    </footer>
  );
}

export default Footer;