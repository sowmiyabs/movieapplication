import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../servies/omdbservices.js";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
  <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6
                  flex flex-col md:flex-row gap-6">
    <img
      src={movie.Poster}
      alt={movie.Title}
      className="w-full md:w-80 rounded-lg"
    />

    <div>
      <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
      <p className="text-gray-600 mb-4">
        {movie.Year} • {movie.Runtime} • {movie.Genre}
      </p>

      <p className="mb-4 leading-relaxed">{movie.Plot}</p>

      <p><b>Cast:</b> {movie.Actors}</p>
      <p><b>IMDB Rating:</b> ⭐ {movie.imdbRating}</p>
    </div>
  </div>
</div>

  );
};

export default MovieDetails;