import { useEffect, useState } from "react";
import SearchBar from "../components/searchbar.jsx";
import MovieCard from "../components/moviescard.jsx";
import Filter from "../components/Filter.jsx";
import Pagination from "../components/pagination.jsx";
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
   <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
  {/* Header */}
  <div className="sticky top-0 bg-gradient-to-r from-red-700 to-red-900 shadow-lg z-10">
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-white">🎬 MovieFlix</h1>
          <p className="text-red-200 text-sm">Discover your next favorite movie</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <SearchBar onSearch={setQuery} />
        </div>
        <div className="md:w-48">
          <Filter onFilter={setType} />
        </div>
      </div>
    </div>
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto px-4 py-8">
    {error && (
      <div className="bg-red-500/20 border-l-4 border-red-500 p-4 rounded mt-5 text-red-200">
        <p className="font-semibold">⚠️ {error}</p>
      </div>
    )}

    {!error && movies.length === 0 && (
      <p className="text-center text-gray-400 mt-10 text-lg">
        No movies found 🎬
      </p>
    )}

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
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