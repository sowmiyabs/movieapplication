const FilterDropdown = ({ onFilter }) => {
  return (
    <select
      className="p-2 border rounded"
      onChange={(e) => onFilter(e.target.value)}
    >
      <option value="">All</option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </select>
  );
};

export default FilterDropdown;