import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const HelpIsOnlyWay = ({ onNavigate }) => {
  const [fRef, reveal] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={fRef}
      className={`relative min-h-[460px] sm:min-h-[500px] md:min-h-[560px] flex items-center bg-[#F3F7FA] overflow-hidden transition-all duration-1000 transform ${
        reveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{
        backgroundImage: "url('/assets/help_is_only_way.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end z-10">
        
        {/* Right Section: Text Content (positioned on the right) */}
        <div className="w-full lg:w-[45%] space-y-6 text-left p-6 sm:p-8 lg:p-0 rounded-3xl bg-white/90 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none shadow-xl lg:shadow-none border border-slate-100 lg:border-none">
          <span className="text-base sm:text-lg font-bold text-[#1A3B8B] tracking-wide block">
            Are you ready?
          </span>
          <h2 className="text-[40px] font-display font-extrabold text-[#0E1B3E] tracking-tight leading-tight">
            Help is only a few clicks away!
          </h2>
          <p className="text-[19px] font-sans text-slate-500 leading-relaxed">
            Click Below to get set up super quickly and find help now!
          </p>
          
          <button
            onClick={() => onNavigate("dashboard")}
            className="inline-flex items-center space-x-3.5 bg-[#DDF0FF] hover:bg-[#CDE9FF] text-[#1A3B8B] font-extrabold px-6 py-3.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg cursor-pointer group"
          >
            <span className="text-base">Get Started</span>
            <div className="w-8 h-8 rounded-full bg-[#1A3B8B] flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default HelpIsOnlyWay;
