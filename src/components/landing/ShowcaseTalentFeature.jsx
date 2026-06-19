import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const ShowcaseTalentFeature = () => {
  const [fRef, reveal] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={fRef}
      className={`bg-slate-50 py-20 overflow-hidden transition-all duration-1000 transform ${
        reveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text block */}
          <div className="lg:col-span-6 space-y-6 text-left max-w-xl">
            <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold bg-[#DDF0FF] text-[#1A3B8B] tracking-wide">
              Custom Profile
            </span>
            <h2 className="text-[40px] font-display font-extrabold text-[#0E1B3E] tracking-tight leading-tight">
              Showcase Your Talents
            </h2>
            <p className="text-[19px] font-sans text-slate-500 leading-relaxed">
              Personalize your profile with everything that makes you unique. Add an
              introductory video and other media for a personal touch that stands out
              to employers and candidates.
            </p>
          </div>

          {/* Graphic block */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end py-10 px-8 sm:px-12 lg:px-0">
            {/* Aspect container to handle fixed layout dimensions and prevent clipping */}
            <div className="relative w-[320px] sm:w-[360px] h-[420px] sm:h-[460px]">
              
              {/* Floating sphere (top-left) */}
              <div className="absolute -left-6 top-6 w-7 h-7 bg-gradient-to-b from-[#3182CE] to-[#2B6CB0] rounded-full shadow-[0_4px_12px_rgba(43,108,176,0.3)] z-10" />

              {/* Tall White Profile Card Container */}
              <div className="absolute inset-0 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100/80 p-5 pb-8 overflow-hidden flex flex-col justify-between">
                
                {/* Mockup Profile Showcase */}
                <div className="relative rounded-[20px] overflow-hidden border border-slate-100">
                  <img
                    src="/assets/Showcase_Your_Talents.png"
                    alt="Showcase Your Talents Page"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />

                  {/* Circular Play Button Overlaid */}
                  <div className="absolute left-[54%] top-[38%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#93c5fd]/80 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
                      <img
                        src="/assets/play_button.png"
                        alt="Play Button"
                        className="w-4 h-4 translate-x-0.5 object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Internal Skills Pills (Bottom of Card) */}
                <div className="flex flex-wrap gap-2 justify-start mt-4">
                  {["Python Dev", "Javascript", "Front End", "Back End", "iOS Development", "+12"].map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-2 rounded-full text-xs font-semibold bg-[#EEF6FF] text-[#1A3B8B] border border-blue-100/50 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Large Circular Avatar on Right Border (Right Overlap) */}
              <div className="absolute -right-8 top-[36%] w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-white z-20 transition-transform duration-300 hover:scale-105">
                <img
                  src="/assets/Guru.png"
                  alt="Candidate Avatar Graphic"
                  className="w-[88%] h-[88%] rounded-full border-[3.5px] border-[#2B6CB0] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Card: Past Client Feedback (Bottom Left Overlap) */}
              <div className="absolute left-[-20px] bottom-[28%] bg-white rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center pl-16 pr-8 py-3.5 min-w-[270px] sm:min-w-[290px] z-10 transition-transform duration-200 hover:scale-102">
                {/* Hanging avatar */}
                <div className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 flex-shrink-0">
                  <div className="relative">
                    <img
                      src="/assets/Guru.png"
                      alt="Gru Avatar"
                      className="w-14 h-14 rounded-full border-[3.5px] border-[#FBBF24] object-cover bg-slate-50 shadow-md"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-display font-bold text-[#1C3D82] text-xs leading-none mb-1">Past Client Feedback</h4>
                  <p className="text-sm font-extrabold text-slate-800 tracking-tight leading-tight">Best Developer Ever!</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseTalentFeature;
