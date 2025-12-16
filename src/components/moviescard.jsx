import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="border rounded shadow p-2 hover:scale-105 transition">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
          className="h-64 w-full object-cover"
        />
        <h3 className="font-bold mt-2">{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </Link>
  );
};

export default MovieCard;