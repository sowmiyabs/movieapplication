const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      className="w-full p-2 border rounded"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onSearch(e.target.value);
        }
      }}
    />
  );
};

export default SearchBar;