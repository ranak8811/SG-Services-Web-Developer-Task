import React, { useState, useEffect } from "react";

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <button
            onClick={() => onNavigate("landing")}
            className="flex items-center space-x-2 focus:outline-none group cursor-pointer"
          >
            <img
              src="/assets/Logo.png"
              alt="RemoteRecruit Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Fallback text if logo is not loaded
                e.target.style.display = "none";
                document.getElementById("navbar-fallback-logo").style.display = "block";
              }}
            />
            <span
              id="navbar-fallback-logo"
              className="hidden font-display font-bold text-2xl text-white tracking-tight"
            >
              Remote<span className="text-blue-400">Recruit</span>
            </span>
          </button>

          {/* Nav Items / Auth Buttons */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onNavigate("dashboard")}
              className="text-white hover:text-blue-200 text-sm font-semibold transition-colors duration-200 focus:outline-none cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={() => onNavigate("dashboard")}
              className="bg-[#2B6CB0] hover:bg-[#2563EB] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
