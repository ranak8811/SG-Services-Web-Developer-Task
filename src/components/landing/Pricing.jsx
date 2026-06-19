import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import { Check, X } from "lucide-react";

const Pricing = ({ onNavigate }) => {
  const [fRef, reveal] = useScrollReveal({ threshold: 0.15 });

  const basicFeatures = [
    { text: "1 Active Job", included: true },
    { text: "Basic List Placement", included: true },
    { text: "Unlimited Job Applicants", included: false },
    { text: "Invite Anyone to Apply to Your Jobs", included: false },
  ];

  const premiumFeatures = [
    { text: "Unlimited Job Posts", included: true },
    { text: "Instant Job Post Approval", included: true },
    { text: "Premium List Placement", included: true },
    { text: "Unlimited Job Applicants", included: true },
  ];

  return (
    <section
      ref={fRef}
      className={`relative z-10 bg-gradient-to-b from-white via-white to-transparent pt-20 pb-0 transition-all duration-1000 transform ${
        reveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        {/* Section Heading */}
        <h2 className="text-[40px] font-display font-extrabold text-[#0E1B3E] tracking-tight mb-16">
          Help Is One Click Away
        </h2>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto items-stretch">
          {/* Card 1: Free Basic */}
          <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-slate-100/80 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full mb-6 gap-6">
              {/* Left Column: Price Box */}
              <div className="w-[140px] h-[140px] bg-[#EEF2F6] rounded-[24px] flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-[32px] font-extrabold text-[#2B6CB0] leading-none mb-1">
                  Free
                </span>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                  Basic
                </span>
              </div>

              {/* Right Column: Features List */}
              <div className="flex-grow text-left space-y-3.5 self-center">
                {basicFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-3.5">
                    {feat.included ? (
                      <div className="w-5.5 h-5.5 rounded-full bg-[#EEF6FF] text-[#2B6CB0] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-5.5 h-5.5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0">
                        <X className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                    )}
                    <span
                      className={`text-sm font-bold ${
                        feat.included ? "text-[#0E1B3E]" : "text-[#8A9BB4]"
                      }`}
                    >
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onNavigate("dashboard")}
              className="w-full border-2 border-[#1A3B8B] text-[#1A3B8B] hover:bg-slate-50 font-extrabold py-3.5 rounded-2xl tracking-wide transition-all duration-200 cursor-pointer text-center text-sm sm:text-base"
            >
              Get Started
            </button>
          </div>

          {/* Card 2: Premium */}
          <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-slate-100/80 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full mb-6 gap-6">
              {/* Left Column: Price Box with Badge */}
              <div className="relative w-[140px] h-[140px] bg-[#EEF2F6] rounded-[24px] flex flex-col items-center justify-center flex-shrink-0">
                {/* Premium Badge */}
                <div className="absolute top-[-14px] left-1/2 transform -translate-x-1/2 bg-[#CDE9FF] text-[#1A3B8B] text-[10px] font-black uppercase tracking-wider py-1 px-3.5 rounded-full flex items-center space-x-1 border border-[#93C5FD] whitespace-nowrap shadow-sm">
                  <span className="text-[8px] text-[#1A3B8B]">★</span>
                  <span>Premium</span>
                </div>

                <span className="text-[28px] sm:text-[30px] font-extrabold text-[#2B6CB0] leading-none mb-1">
                  $79.99
                </span>
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                  Per Month
                </span>
              </div>

              {/* Right Column: Features List */}
              <div className="flex-grow text-left space-y-3.5 self-center">
                {premiumFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-3.5">
                    <div className="w-5.5 h-5.5 rounded-full bg-[#EEF6FF] text-[#2B6CB0] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-[#0E1B3E]">
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onNavigate("dashboard")}
              className="w-full bg-[#28549A] hover:bg-[#1C3D82] text-white font-extrabold py-3.5 rounded-2xl tracking-wide shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center text-sm sm:text-base"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
