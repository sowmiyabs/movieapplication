import { useState, useEffect } from "react";
import { searchMovies } from "../api/omdb.js";
import SearchBar from "../components/searchbar.jsx";
import MovieCard from "../components/moviescard.jsx";
import Pagination from "../components/pagination.jsx";
import FilterDropdown from "../components/Filter droupdown.jsx";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        const data = await searchMovies(query, page, type);
        if (data.Response === "False") {
          setError(data.Error);
          setMovies([]);
        } else {
          setMovies(data.Search);
          setError("");
        }
      } catch {
        setError("Something went wrong!");
      }
    };

    fetchData();
  }, [query, page, type]);

  return (
    <div className="p-6">
      <SearchBar onSearch={(q) => { setQuery(q); setPage(1); }} />
      <FilterDropdown onFilter={setType} />

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {movies.length > 0 && <Pagination page={page} setPage={setPage} />}
    </div>
  );
};

export default Home;