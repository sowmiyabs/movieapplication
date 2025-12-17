const Filter = ({ onFilter }) => {
  return (
    <select
      className="
        p-3 rounded-lg border bg-white
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        shadow-sm
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