import React from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar onNavigate={onNavigate} />

      {/* Hero Section */}
      <Hero />

      {/* Main Sections (Implemented in subsequent parts) */}
      <main className="flex-grow">
        {/* Placeholder for Features Section (Part 2) */}
        <div className="bg-white py-16 text-center text-slate-400 text-sm border-y border-slate-100">
          Features Section (Coming in Part 2)
        </div>

        {/* Placeholder for CTA & FAQ & Pricing (Part 3) */}
        <div className="bg-slate-50 py-16 text-center text-slate-400 text-sm">
          CTA, FAQ & Pricing Sections (Coming in Part 3)
        </div>
      </main>

      {/* Footer (Part 3) */}
      <footer className="bg-brand-dark py-8 text-center text-slate-400 text-sm">
        Footer Section (Coming in Part 3)
      </footer>
    </div>
  );
};

export default LandingPage;
