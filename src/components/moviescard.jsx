import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="group">
      <div
        className="
          bg-gray-800 rounded-lg overflow-hidden
          shadow-md hover:shadow-2xl
          transform hover:-translate-y-2
          transition duration-300 ease-in-out
          cursor-pointer h-full flex flex-col
        "
      >
        <div className="relative overflow-hidden bg-gray-700 h-72">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movie.Title}
            className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-300"></div>
        </div>

        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-base truncate text-gray-100 group-hover:text-red-500 transition duration-200">
              {movie.Title}
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              {movie.Year} • <span className="uppercase text-red-500 font-semibold">{movie.Type}</span>
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-700">
            <p className="text-xs text-gray-400 font-medium">Click to view details</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;