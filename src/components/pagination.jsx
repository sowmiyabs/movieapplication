const Pagination = ({ currentPage, totalResults, onPageChange }) => {
  const totalPages = Math.ceil(totalResults / 10);
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-6 mt-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          px-5 py-2 rounded-lg border
          hover:bg-indigo-500 hover:text-white
          disabled:opacity-50 disabled:hover:bg-white
          transition
        "
      >
        ← Prev
      </button>

      <span className="font-semibold">
        {currentPage} / {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          px-5 py-2 rounded-lg border
          hover:bg-indigo-500 hover:text-white
          disabled:opacity-50 disabled:hover:bg-white
          transition
        "
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;