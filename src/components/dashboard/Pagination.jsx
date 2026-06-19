import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, setCurrentPage, totalPages = 7 }) => {
  const pages = [1, 2, 3, "...", totalPages];

  return (
    <div className="flex items-center justify-center space-x-2 py-8">
      {/* Previous Button */}
      <button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-500 hover:text-slate-800 disabled:opacity-30 disabled:hover:bg-white disabled:cursor-not-allowed transition-colors cursor-pointer"
        aria-label="Previous Page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Page Numbers */}
      {pages.map((p, idx) => {
        if (p === "...") {
          return (
            <span
              key={idx}
              className="w-10 h-10 flex items-center justify-center text-slate-400 font-bold select-none"
            >
              ...
            </span>
          );
        }

        const isActive = currentPage === p;
        return (
          <button
            key={idx}
            onClick={() => setCurrentPage(p)}
            className={`w-10 h-10 rounded-xl text-sm font-extrabold transition-all cursor-pointer ${
              isActive
                ? "bg-[#2B6CB0] text-white shadow-md shadow-blue-500/20"
                : "border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-800"
            }`}
          >
            {p}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-500 hover:text-slate-800 disabled:opacity-30 disabled:hover:bg-white disabled:cursor-not-allowed transition-colors cursor-pointer"
        aria-label="Next Page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
