const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search movies, series..."
      className="
        w-full px-4 py-3 rounded-lg border border-gray-300
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
        shadow-sm bg-white text-gray-900
        transition duration-200"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;