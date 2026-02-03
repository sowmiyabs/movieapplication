const Filter = ({ onFilter }) => {
  return (
    <select
      className="
        px-4 py-3 rounded-lg border border-gray-300 bg-white
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
        shadow-sm text-gray-900 font-medium
        cursor-pointer transition duration-200
      "
      onChange={(e) => onFilter(e.target.value)}
    >
      <option value="">All Types</option>
      <option value="movie">Movies</option>
      <option value="series">Series</option>
      <option value="episode">Episodes</option>
    </select>
  );
};

export default Filter;