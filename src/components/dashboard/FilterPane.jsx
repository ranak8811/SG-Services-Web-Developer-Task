import React from "react";
import { X, SlidersHorizontal, Award } from "lucide-react";

const FilterPane = ({
  filters,
  setFilters,
  resetFilters,
  isOpen,
  onClose,
}) => {
  const handleCheckboxChange = (field) => {
    setFilters((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleInputChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className={`bg-white lg:w-80 border-l border-slate-200/80 p-6 flex flex-col h-full overflow-y-auto shrink-0 z-20 ${
        isOpen
          ? "fixed inset-y-0 right-0 w-80 shadow-2xl lg:shadow-none"
          : "hidden lg:flex"
      }`}
    >
      {/* Mobile Header for Filter Panel */}
      <div className="flex items-center justify-between lg:hidden border-b border-slate-100 pb-4 mb-6">
        <div className="flex items-center space-x-2 text-slate-800">
          <SlidersHorizontal className="w-5 h-5 text-blue-600" />
          <h3 className="font-display font-extrabold text-lg">Filters</h3>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-650 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="text-left space-y-6">
        {/* Section Title (Desktop Only) */}
        <div className="hidden lg:flex items-center justify-between border-b border-slate-150 pb-3">
          <span className="font-display font-extrabold text-lg text-slate-800">Filter</span>
        </div>

        {/* PAY SECTION */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-sm text-slate-800">Pay:</h4>
          
          {/* Hourly */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2.5 cursor-pointer text-slate-700 text-sm font-semibold select-none">
              <input
                type="checkbox"
                checked={filters.payHourly}
                onChange={() => handleCheckboxChange("payHourly")}
                className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500 cursor-pointer"
              />
              <span>Hourly</span>
            </label>
            <div className="pl-6 space-y-2">
              <input
                type="number"
                placeholder="Max Hourly Rate"
                value={filters.maxHourly}
                onChange={(e) => handleInputChange("maxHourly", e.target.value)}
                className="w-full bg-[#EEF2F6]/50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <select
                value={filters.sortPay}
                onChange={(e) => handleInputChange("sortPay", e.target.value)}
                className="w-full bg-[#EEF2F6]/50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
              >
                <option value="all">Sort Pay By: All</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Annual Salary */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2.5 cursor-pointer text-slate-700 text-sm font-semibold select-none">
              <input
                type="checkbox"
                checked={filters.payAnnual}
                onChange={() => handleCheckboxChange("payAnnual")}
                className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500 cursor-pointer"
              />
              <span>Annual Salary</span>
            </label>
            <div className="pl-6">
              <input
                type="number"
                placeholder="Max Annual Salary"
                value={filters.maxAnnual}
                onChange={(e) => handleInputChange("maxAnnual", e.target.value)}
                className="w-full bg-[#EEF2F6]/50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Both Hourly & Salary */}
          <div>
            <label className="flex items-center space-x-2.5 cursor-pointer text-slate-700 text-sm font-semibold select-none">
              <input
                type="checkbox"
                checked={filters.payBoth}
                onChange={() => handleCheckboxChange("payBoth")}
                className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500 cursor-pointer"
              />
              <span>Both Hourly & Salary</span>
            </label>
          </div>

          {/* Sort Salary By */}
          <div className="border-t border-slate-100 pt-3">
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Sort Salary By</h5>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer text-slate-700 text-xs font-semibold select-none">
                <input
                  type="radio"
                  name="sortSalary"
                  checked={filters.sortSalaryAsc}
                  onChange={() => {
                    setFilters((prev) => ({
                      ...prev,
                      sortSalaryAsc: true,
                      sortSalaryDesc: false,
                    }));
                  }}
                  className="w-3.5 h-3.5 text-blue-600 border-slate-300 focus:ring-blue-500 cursor-pointer"
                />
                <span>Ascending</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer text-slate-700 text-xs font-semibold select-none">
                <input
                  type="radio"
                  name="sortSalary"
                  checked={filters.sortSalaryDesc}
                  onChange={() => {
                    setFilters((prev) => ({
                      ...prev,
                      sortSalaryAsc: false,
                      sortSalaryDesc: true,
                    }));
                  }}
                  className="w-3.5 h-3.5 text-blue-600 border-slate-300 focus:ring-blue-500 cursor-pointer"
                />
                <span>Descending</span>
              </label>
            </div>
          </div>
        </div>

        {/* LANGUAGE */}
        <div className="space-y-2 border-t border-slate-100 pt-4">
          <h4 className="font-display font-bold text-sm text-slate-800">Language:</h4>
          <select
            value={filters.language}
            onChange={(e) => handleInputChange("language", e.target.value)}
            className="w-full bg-[#EEF2F6]/50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-750 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
          >
            <option value="all">All Languages</option>
            <option value="english">English Only</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </select>
        </div>

        {/* COUNTRIES */}
        <div className="space-y-3 border-t border-slate-100 pt-4">
          <h4 className="font-display font-bold text-sm text-slate-800">Countries:</h4>
          <div className="flex flex-wrap gap-1.5">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
              <span>United States</span>
              <button className="ml-1 text-slate-400 hover:text-slate-600 focus:outline-none">
                <X className="w-3 h-3" />
              </button>
            </span>
          </div>
          <button className="text-xs text-amber-600 font-extrabold hover:underline text-left block">
            Upgrade to Premium to Access
          </button>
        </div>

        {/* AI RANKING */}
        <div className="space-y-4 border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5 text-slate-850">
              <h4 className="font-display font-bold text-sm text-slate-800">AI Ranking</h4>
              <span className="text-amber-500 text-xs">👑</span>
            </div>
            
            {/* Toggle Switch */}
            <button
              onClick={() => handleCheckboxChange("aiRanking")}
              className={`w-11 h-6 rounded-full transition-colors duration-200 relative p-1 focus:outline-none cursor-pointer ${
                filters.aiRanking ? "bg-amber-400" : "bg-slate-200"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-205 transform ${
                  filters.aiRanking ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Customize ranking filter */}
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-left">
            <button className="bg-[#F59E0B] text-white text-[10px] font-black uppercase tracking-wider py-1 px-3.5 rounded-full shadow-sm hover:bg-amber-600 transition-colors mx-auto block mb-3">
              Customize Ranking Filter
            </button>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1">
                  <span>English Proficiency</span>
                  <span>{filters.englishProf}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.englishProf}
                  onChange={(e) => handleInputChange("englishProf", e.target.value)}
                  className="w-full accent-blue-600 cursor-pointer h-1 bg-slate-200 rounded-lg appearance-none"
                />
              </div>
              <div>
                <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1">
                  <span>Experience Match</span>
                  <span>{filters.experienceMatch}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.experienceMatch}
                  onChange={(e) => handleInputChange("experienceMatch", e.target.value)}
                  className="w-full accent-blue-600 cursor-pointer h-1 bg-slate-200 rounded-lg appearance-none"
                />
              </div>
            </div>
          </div>
          
          <button className="text-xs text-amber-600 font-extrabold hover:underline text-left block leading-none">
            Why Ai Ranking
          </button>
        </div>

        {/* RESET FILTERS */}
        <div className="border-t border-slate-100 pt-4 flex justify-center">
          <button
            onClick={resetFilters}
            className="text-sm font-extrabold text-red-500 hover:text-red-700 hover:underline transition-colors focus:outline-none cursor-pointer"
          >
            Reset all filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPane;
