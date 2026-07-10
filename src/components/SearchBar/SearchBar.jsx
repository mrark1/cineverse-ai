import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar({ value, onChange }) {
  return (
    <div className="search-container">
      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search movies..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;