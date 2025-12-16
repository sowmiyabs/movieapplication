import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/omdb.js";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img src={movie.Poster} alt={movie.Title} className="w-80" />
      <div>
        <h1 className="text-2xl font-bold">{movie.Title}</h1>
        <p>{movie.Plot}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Cast:</strong> {movie.Actors}</p>
        <p><strong>Rating:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  );
};

export default MovieDetails;