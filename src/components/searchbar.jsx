const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search movies, series..."
      className="
        w-full p-3 rounded-lg border
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        shadow-sm
      "
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;