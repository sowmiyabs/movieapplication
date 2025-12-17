import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div
        className="
          bg-white rounded-xl overflow-hidden
          shadow hover:shadow-xl
          transform hover:-translate-y-1
          transition duration-300
        "
      >
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.Title}
          className="h-72 w-full object-cover"
        />

        <div className="p-4">
          <h3 className="font-semibold text-lg truncate">
            {movie.Title}
          </h3>
          <p className="text-sm text-gray-500">
            {movie.Year} • {movie.Type}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;