const Pagination = ({ currentPage, totalResults, onPageChange }) => {
  const totalPages = Math.ceil(totalResults / 10);
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-4 mt-12 pb-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          px-6 py-3 rounded-lg border-2 border-red-600
          bg-transparent text-white font-semibold
          hover:bg-red-600 hover:text-white
          disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent
          transition duration-200
        "
      >
        ← Prev
      </button>

      <span className="font-bold text-gray-300 text-lg px-4 py-2 bg-gray-800/50 rounded-lg">
        {currentPage} <span className="text-gray-500">of</span> {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          px-6 py-3 rounded-lg border-2 border-red-600
          bg-transparent text-white font-semibold
          hover:bg-red-600 hover:text-white
          disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent
          transition duration-200
        "
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;