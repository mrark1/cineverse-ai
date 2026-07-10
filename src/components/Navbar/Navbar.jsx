import "./Navbar.css";
import { FaHeart, FaSearch, FaMoon, FaBars, FaSun } from "react-icons/fa";
import { useState } from "react";
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { favorites } = useContext(FavoritesContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="navbar">
        <div className="container nav-container">
        <div className="logo">
            <span>🎬</span>
                CineVerse AI
        </div>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <Link to="/">Home</Link>

<Link to="/favorites">
    <FaHeart />
    Favorites ({favorites.length})
</Link>

          <button className="icon-btn">
            <FaSearch />
          </button>

          <button
    className="icon-btn"
    onClick={toggleTheme}
    aria-label="Toggle Theme"
>
    {theme === "dark" ? <FaSun /> : <FaMoon />}
</button>

        </nav>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

      </div>

    </header>
  );
}

export default Navbar;