import "./MoodSearch.css";
import { useState } from "react";

function MoodSearch({ onSearch }) {

  const [mood, setMood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mood.trim()) return;

    onSearch(mood);

    setMood("");
  };

  return (
    <form
      className="mood-search"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="How are you feeling today?"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />

      <button type="submit">
        ✨ Find Movie
      </button>
    </form>
  );
}

export default MoodSearch;