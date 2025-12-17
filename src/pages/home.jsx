import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import MovieCard from "../components/moviescard.jsx";
import Filter from "../components/Filter.jsx";
import Pagination from "../components/Pagination.jsx";
import { searchMovies } from "../servies/omdbservices.js";


const Home = () => {
  const [query, setQuery] = useState("batman");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await searchMovies(query, page, type);
      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
        setTotalResults(parseInt(data.totalResults) || 0);
      } else {
        setMovies([]);
        setError(data.Error);
        setTotalResults(0);
      }
    };

    fetchMovies();
  }, [query, page, type]);

  return (
   <div className="min-h-screen">
  {/* Header */}
  <div className="sticky top-0 bg-white shadow z-10">
    <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-4">
      <SearchBar onSearch={setQuery} />
      <Filter onFilter={setType} />
    </div>
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto p-5">
    {error && (
      <p className="text-center text-red-500 mt-5">{error}</p>
    )}

    {!error && movies.length === 0 && (
      <p className="text-center text-gray-500 mt-10">
        No movies found 🎬
      </p>
    )}

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>

    <Pagination
      currentPage={page}
      totalResults={totalResults}
      onPageChange={setPage}
    />
  </div>
</div>
  );
};

export default Home;