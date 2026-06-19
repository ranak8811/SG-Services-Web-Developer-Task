import React from "react";
import { Menu, ArrowLeft } from "lucide-react";

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0A1E3B] text-white lg:hidden shadow-md">
      {/* Mobile Top Navigation */}
      <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Logo Branding */}
        <button
          onClick={() => onNavigate("landing")}
          className="flex items-center space-x-2 focus:outline-none cursor-pointer"
        >
          <img
            src="/assets/Logo.png"
            alt="RemoteRecruit Logo"
            className="h-7 w-auto object-contain brightness-0 invert"
            onError={(e) => {
              e.target.style.display = "none";
              document.getElementById("mobile-fallback-logo").style.display = "block";
            }}
          />
          <span
            id="mobile-fallback-logo"
            className="hidden font-display font-bold text-lg text-white"
          >
            Remote<span className="text-blue-400">Recruit</span>
          </span>
        </button>

        {/* Get Premium & Hamburger */}
        <div className="flex items-center space-x-3">
          <button className="bg-[#FBBF24] hover:bg-amber-500 text-slate-900 font-extrabold px-4 py-1.5 rounded-full text-xs transition-colors shadow-sm cursor-pointer whitespace-nowrap">
            Get Premium
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-lg hover:bg-white/5 focus:outline-none text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Back Button Bar (below top nav, matching mobile view) */}
      <div className="px-4 py-3 bg-slate-50 border-b border-slate-200/60 flex items-center">
        <button
          onClick={() => onNavigate("landing")}
          className="flex items-center space-x-2 bg-[#0A1E3B] hover:bg-[#112F5A] text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
