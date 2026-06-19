import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import FilterPane from "../components/dashboard/FilterPane";
import CandidateCard from "../components/dashboard/CandidateCard";
import Pagination from "../components/dashboard/Pagination";
import BottomNav from "../components/dashboard/BottomNav";
import { Users, Mail, CheckCircle2, Ban, Edit, SlidersHorizontal, Play, X, RotateCcw } from "lucide-react";

// Mock candidates initial database
const initialCandidates = [
  {
    id: 1,
    name: "Joel Diamond",
    role: "Software Engineer",
    pay: "$120 - $234",
    tags: ["Photoshop", "Figma", "illustration"],
    status: "new",
  },
  {
    id: 2,
    name: "Mel Muselphiem",
    role: "Front End Wizard",
    pay: "$130 - $210",
    tags: ["React", "Tailwind", "Next.js"],
    status: "new",
  },
  {
    id: 3,
    name: "Dylan Mercer",
    role: "iOS Developer",
    pay: "$100 - $180",
    tags: ["Swift", "SwiftUI", "Objective-C"],
    status: "new",
  },
  {
    id: 4,
    name: "Felonious Gru",
    role: "Python Developer",
    pay: "$90 - $150",
    tags: ["Python", "Django", "AWS"],
    status: "new",
  },
  {
    id: 5,
    name: "Alex Johnson",
    role: "UI/UX Designer",
    pay: "$80 - $140",
    tags: ["Figma", "Adobe XD", "Wireframing"],
    status: "new",
  },
  {
    id: 6,
    name: "Sarah Williams",
    role: "Full Stack Engineer",
    pay: "$110 - $190",
    tags: ["Node.js", "Express", "MongoDB"],
    status: "new",
  },
];

const DashboardPage = ({ onNavigate }) => {
  // Navigation states
  const [activeTab, setActiveTab] = useState("job-posts");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(2);

  // Active Category Filter state: 'new' | 'invites' | 'shortlisted' | 'rejected'
  const [activeCategory, setActiveCategory] = useState("new");

  // Candidates database state
  const [candidates, setCandidates] = useState(initialCandidates);

  // Filter pane states
  const defaultFilters = {
    payHourly: true,
    maxHourly: "",
    sortPay: "all",
    payAnnual: false,
    maxAnnual: "",
    payBoth: false,
    sortSalaryAsc: true,
    sortSalaryDesc: false,
    language: "all",
    aiRanking: true,
    englishProf: 100,
    experienceMatch: 100,
  };
  const [filters, setFilters] = useState(defaultFilters);

  // Search input query
  const [searchQuery, setSearchQuery] = useState("");

  // Video modal states
  const [activeVideoCandidate, setActiveVideoCandidate] = useState(null);

  // Shortlist / Reject Handlers
  const handleShortlist = (id) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: c.status === "shortlisted" ? "new" : "shortlisted" } : c))
    );
  };

  const handleReject = (id) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: c.status === "rejected" ? "new" : "rejected" } : c))
    );
  };

  // Reset Filters Handler
  const resetFilters = () => {
    setFilters(defaultFilters);
    setSearchQuery("");
  };

  // Filter & Search Candidates Logic
  const filteredCandidates = candidates.filter((candidate) => {
    // 1. Search Query filter (matches Name, Role or Skills)
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      const matchName = candidate.name.toLowerCase().includes(query);
      const matchRole = candidate.role.toLowerCase().includes(query);
      const matchTags = candidate.tags.some((t) => t.toLowerCase().includes(query));
      if (!matchName && !matchRole && !matchTags) return false;
    }

    // 2. Active Category filter
    if (activeCategory === "new" && candidate.status !== "new") return false;
    if (activeCategory === "shortlisted" && candidate.status !== "shortlisted") return false;
    if (activeCategory === "rejected" && candidate.status !== "rejected") return false;
    if (activeCategory === "invites") {
      // Demo: filter out some mock invites
      return candidate.id % 2 === 0;
    }

    return true;
  });

  // Dynamic counter badge numbers
  const countNew = candidates.filter((c) => c.status === "new").length;
  const countShortlisted = candidates.filter((c) => c.status === "shortlisted").length;
  const countRejected = candidates.filter((c) => c.status === "rejected").length;
  const countInvites = 3; // Demo invites count

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 pb-16 lg:pb-0">
      
      {/* Mobile Drawer Menu Layer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Overlay backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Drawer Sidebar Content */}
          <div className="relative flex flex-col w-64 max-w-xs h-full bg-[#0A1E3B] text-white">
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-md text-white/70 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <Sidebar
              activeTab={activeTab}
              setActiveTab={(tab) => {
                setActiveTab(tab);
                setIsMobileMenuOpen(false);
              }}
              onNavigate={(page) => {
                onNavigate(page);
                setIsMobileMenuOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Desktop Sidebar (hidden on mobile) */}
      <div className="hidden lg:block">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onNavigate={onNavigate}
        />
      </div>

      {/* Mobile Header (hidden on desktop) */}
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onNavigate={onNavigate}
      />

      {/* Main Content Area */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        
        {/* Main grid wrapper holding applicants flow and filters */}
        <div className="flex-grow flex flex-col lg:flex-row">
          
          {/* Candidates Applicants flow */}
          <main className="flex-grow p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full space-y-6">
            
            {/* Header: Welcome & Page Title */}
            <div className="text-left">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Welcome Bungie
              </span>
              <h1 className="text-3xl font-display font-extrabold text-[#0E1B3E] tracking-tight mt-1">
                Job Applicants
              </h1>
            </div>

            {/* Your Job Post Details Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.03)] border border-slate-100/80 flex items-center justify-between transition-transform duration-300 hover:scale-[1.005]">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center p-1 flex-shrink-0">
                  <img
                    src="/assets/Icon.png"
                    alt="Company icon"
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      e.target.src = "/assets/RR.png";
                    }}
                  />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Your Job Post</span>
                  <h3 className="font-display font-extrabold text-[#0E1B3E] text-sm sm:text-base leading-tight mt-0.5">
                    Senior UI/UX Designer needed for ongoing support
                  </h3>
                </div>
              </div>
              <button className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors focus:outline-none cursor-pointer">
                <Edit className="w-4 h-4" />
              </button>
            </div>

            {/* Key Categories counter tabs selection */}
            <div className="text-left">
              <span className="text-xs font-bold text-[#1A3B8B] uppercase tracking-wider block mb-3">
                Key Categories:
              </span>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Category 1: New Applicants */}
                <button
                  onClick={() => setActiveCategory("new")}
                  className={`p-4 rounded-[20px] text-left transition-all duration-200 focus:outline-none cursor-pointer border flex flex-col justify-between ${
                    activeCategory === "new"
                      ? "bg-[#0A1E3B] text-white shadow-xl border-amber-400/80 scale-[1.01]"
                      : "bg-white text-slate-800 hover:bg-slate-50 border-slate-100/80 shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      activeCategory === "new" ? "bg-white/10 text-white" : "bg-[#EEF6FF] text-[#2B6CB0]"
                    }`}>
                      <Users className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div>
                    <h4 className={`text-xs font-extrabold leading-none mb-1 ${activeCategory === "new" ? "text-slate-300" : "text-slate-400"}`}>
                      New Applicants
                    </h4>
                    <span className="text-sm font-black tracking-tight block">
                      +{countNew} Individuals
                    </span>
                  </div>
                </button>

                {/* Category 2: Invites */}
                <button
                  onClick={() => setActiveCategory("invites")}
                  className={`p-4 rounded-[20px] text-left transition-all duration-200 focus:outline-none cursor-pointer border flex flex-col justify-between ${
                    activeCategory === "invites"
                      ? "bg-[#0A1E3B] text-white shadow-xl border-amber-400/80 scale-[1.01]"
                      : "bg-white text-slate-800 hover:bg-slate-50 border-slate-100/80 shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      activeCategory === "invites" ? "bg-white/10 text-white" : "bg-[#EEF6FF] text-[#2B6CB0]"
                    }`}>
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div>
                    <h4 className={`text-xs font-extrabold leading-none mb-1 ${activeCategory === "invites" ? "text-slate-300" : "text-slate-400"}`}>
                      Invites
                    </h4>
                    <span className="text-sm font-black tracking-tight block">
                      {countInvites}0 Individuals
                    </span>
                  </div>
                </button>

                {/* Category 3: Shortlisted */}
                <button
                  onClick={() => setActiveCategory("shortlisted")}
                  className={`p-4 rounded-[20px] text-left transition-all duration-200 focus:outline-none cursor-pointer border flex flex-col justify-between ${
                    activeCategory === "shortlisted"
                      ? "bg-[#0A1E3B] text-white shadow-xl border-amber-400/80 scale-[1.01]"
                      : "bg-white text-slate-800 hover:bg-slate-50 border-slate-100/80 shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      activeCategory === "shortlisted" ? "bg-white/10 text-white" : "bg-[#EEF6FF] text-[#2B6CB0]"
                    }`}>
                      <CheckCircle2 className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div>
                    <h4 className={`text-xs font-extrabold leading-none mb-1 ${activeCategory === "shortlisted" ? "text-slate-300" : "text-slate-400"}`}>
                      Shortlisted
                    </h4>
                    <span className="text-sm font-black tracking-tight block">
                      {countShortlisted}0 Individuals
                    </span>
                  </div>
                </button>

                {/* Category 4: Rejected */}
                <button
                  onClick={() => setActiveCategory("rejected")}
                  className={`p-4 rounded-[20px] text-left transition-all duration-200 focus:outline-none cursor-pointer border flex flex-col justify-between ${
                    activeCategory === "rejected"
                      ? "bg-[#0A1E3B] text-white shadow-xl border-amber-400/80 scale-[1.01]"
                      : "bg-white text-slate-800 hover:bg-slate-50 border-slate-100/80 shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      activeCategory === "rejected" ? "bg-white/10 text-white" : "bg-[#EEF6FF] text-[#2B6CB0]"
                    }`}>
                      <Ban className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div>
                    <h4 className={`text-xs font-extrabold leading-none mb-1 ${activeCategory === "rejected" ? "text-slate-300" : "text-slate-400"}`}>
                      Rejected
                    </h4>
                    <span className="text-sm font-black tracking-tight block">
                      {countRejected}0 Box
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* List Controls: View count, Filter mobile trigger, search block */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
              <div className="flex items-center space-x-4">
                {/* View Dropdown */}
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
                  <span>View</span>
                  <select className="bg-white border border-slate-200 rounded-lg px-2 py-1 cursor-pointer">
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                </div>
                {/* Sort By Dropdown */}
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
                  <span>Sort by</span>
                  <select className="bg-white border border-slate-200 rounded-lg px-2 py-1 cursor-pointer">
                    <option>All</option>
                    <option>Rating</option>
                    <option>Match %</option>
                  </select>
                </div>
              </div>

              {/* Mobile Filter Button and Search input */}
              <div className="flex items-center space-x-3.5 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search candidates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-grow md:w-60 bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400"
                />
                
                {/* Mobile Filter toggle button (hidden on desktop) */}
                <button
                  onClick={() => setIsMobileFiltersOpen(true)}
                  className="lg:hidden p-2 rounded-xl bg-white border border-slate-250 text-slate-650 hover:bg-slate-50 flex items-center justify-center cursor-pointer focus:outline-none"
                  title="Filter Options"
                >
                  <SlidersHorizontal className="w-4 h-4 text-[#2B6CB0]" />
                </button>
              </div>
            </div>

            {/* Empty State applicant screen if list is empty */}
            {filteredCandidates.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100/80 shadow-md">
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4 text-slate-400 border border-slate-200/50">
                  <SlidersHorizontal className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-slate-800 text-lg mb-1">No applicants found</h4>
                <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">
                  There are no candidates matching your active filters or query. Try resetting your settings.
                </p>
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 text-[#2B6CB0] font-extrabold px-6 py-2.5 rounded-full text-xs transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            ) : (
              /* Candidates applicant grid flow (2 columns on desktop) */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCandidates.map((candidate) => (
                  <CandidateCard
                    key={candidate.id}
                    candidate={candidate}
                    onShortlist={handleShortlist}
                    onReject={handleReject}
                    onPlayVideo={setActiveVideoCandidate}
                  />
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {filteredCandidates.length > 0 && (
              <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
            )}

          </main>

          {/* Mobile Filter slide-over drawer panel layer */}
          {isMobileFiltersOpen && (
            <div className="fixed inset-0 z-50 flex lg:hidden">
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setIsMobileFiltersOpen(false)}
              />
              {/* Drawer Container */}
              <div className="relative w-80 max-w-xs h-full bg-white ml-auto">
                <FilterPane
                  filters={filters}
                  setFilters={setFilters}
                  resetFilters={resetFilters}
                  isOpen={isMobileFiltersOpen}
                  onClose={() => setIsMobileFiltersOpen(false)}
                />
              </div>
            </div>
          )}

          {/* Desktop Right Filter Pane (sticky/docked) */}
          <div className="hidden lg:block">
            <FilterPane
              filters={filters}
              setFilters={setFilters}
              resetFilters={resetFilters}
              isOpen={false}
              onClose={() => {}}
            />
          </div>

        </div>
      </div>

      {/* Mobile bottom navigation bar tabs (hidden on desktop) */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Cover Letter Video Player Modal overlay */}
      {activeVideoCandidate && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-950 max-w-2xl w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="text-left text-white leading-none">
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">Cover Letter Video</span>
                <h4 className="font-display font-extrabold text-sm sm:text-base leading-tight mt-0.5">{activeVideoCandidate.name}</h4>
              </div>
              <button
                onClick={() => setActiveVideoCandidate(null)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Canvas HUD player */}
            <div className="aspect-video bg-black flex flex-col justify-between p-6 relative">
              
              {/* Play state interface overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-blue-500/5 animate-pulse">
                <div className="w-20 h-20 rounded-full bg-blue-600/30 flex items-center justify-center text-white border-4 border-white/40 shadow-inner">
                  <Play className="w-8 h-8 fill-current translate-x-1" />
                </div>
              </div>

              {/* Status bar */}
              <div className="z-10 flex items-center justify-between text-white/80 text-[10px] font-bold">
                <span>00:00 / 01:34</span>
                <span className="bg-green-500 text-slate-950 px-2 py-0.5 rounded uppercase text-[8px] font-black">Live</span>
              </div>

              {/* HUD Controls */}
              <div className="z-10 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/5 flex flex-col space-y-3.5">
                {/* Timeline slider progress */}
                <div className="w-full bg-white/20 h-1 rounded-full cursor-pointer relative">
                  <div className="absolute left-0 top-0 bottom-0 bg-blue-500 w-[15%] rounded-full" />
                  <div className="absolute left-[15%] top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 bg-blue-500 border-2 border-white rounded-full shadow-md" />
                </div>

                {/* Buttons HUD */}
                <div className="flex items-center justify-between text-white/80">
                  <div className="flex items-center space-x-4">
                    <button className="hover:text-white font-black text-xs cursor-pointer">Play</button>
                    <button className="hover:text-white font-black text-xs cursor-pointer">Mute</button>
                  </div>
                  <span className="text-xs font-bold">{activeVideoCandidate.role}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DashboardPage;
