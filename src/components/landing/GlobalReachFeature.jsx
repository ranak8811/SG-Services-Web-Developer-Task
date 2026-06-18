import useScrollReveal from "../../hooks/useScrollReveal";

const GlobalReachFeature = () => {
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
              Global Reach
            </span>
            <h2 className="text-[40px] font-display font-extrabold text-[#0E1B3E] tracking-tight leading-tight">
              The First Fully Global Job Board, Anywhere, Ever
            </h2>
            <p className="text-[19px] font-sans text-slate-500 leading-relaxed">
              RemoteRecruit connects candidates with opportunities around the
              world. With today’s remote-first workforce, you need to be able to
              find the best jobs and the best people for them, wherever they may
              be.
            </p>
          </div>

          {/* Graphic block */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end py-10 px-8 sm:px-12 lg:px-0">
            {/* Aspect container to handle fixed layout dimensions and prevent clipping */}
            <div className="relative w-[320px] sm:w-[360px] h-[400px] sm:h-[440px]">
              {/* Floating sphere (top-left) */}
              <div className="absolute -left-6 top-6 w-7 h-7 bg-gradient-to-b from-[#3182CE] to-[#2B6CB0] rounded-full shadow-[0_4px_12px_rgba(43,108,176,0.3)] z-10" />

              {/* Tall Mockup Card Container */}
              <div className="absolute inset-0 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100/80 p-4 pb-20 overflow-hidden flex flex-col justify-start">
                <img
                  src="/assets/lets_find_work_small.png"
                  alt="RemoteRecruit Job Search Board"
                  className="w-full h-auto rounded-[20px] border border-slate-100"
                  loading="lazy"
                />
              </div>

              {/* Large RR Logo Circle (Right Overlap) */}
              <div className="absolute -right-8 top-[36%] w-20 h-20 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] overflow-hidden bg-transparent z-20 transition-transform duration-300 hover:scale-105">
                <img
                  src="/assets/RR.png"
                  alt="RR Logo"
                  className="absolute w-[165%] h-[165%] max-w-none left-[-16%] top-[-0%] object-contain"
                  loading="lazy"
                />
              </div>

              {/* Floating Card 1: Felonious Gru (Bottom Left Overlap) */}
              <div className="absolute left-[-20px] bottom-[28%] bg-white rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-slate-100/50 flex items-center pl-16 pr-8 py-3.5 min-w-[270px] sm:min-w-[290px] z-10 transition-all duration-300 hover:scale-[1.03] animate-bounce-slow">
                {/* Hanging avatar */}
                <div className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 flex-shrink-0">
                  <div className="relative">
                    <img
                      src="/assets/Guru.png"
                      alt="Felonious Gru Avatar"
                      className="w-14 h-14 rounded-full border-[3.5px] border-[#FBBF24] object-cover bg-slate-50 shadow-md"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-[#1C3D82] font-bold tracking-wide leading-none mb-1">
                    Python Developer
                  </span>
                  <span className="font-display font-extrabold text-slate-800 text-sm sm:text-base leading-tight">
                    Felonious Gru
                  </span>
                </div>
              </div>

              {/* Floating Card 2: Mel Muselphiem (Bottom Right Overlap) */}
              <div className="absolute left-[30px] sm:left-[50px] bottom-[-16px] bg-white rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-slate-100/50 flex items-center pl-16 pr-8 py-3.5 min-w-[270px] sm:min-w-[290px] z-10 transition-all duration-300 hover:scale-[1.03]">
                {/* Hanging avatar */}
                <div className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 flex-shrink-0">
                  <div className="relative">
                    <img
                      src="/assets/Guru.png"
                      alt="Mel Muselphiem Avatar"
                      className="w-14 h-14 rounded-full border-[3.5px] border-[#FBBF24] object-cover bg-slate-50 shadow-md"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-[#0ea5e9] font-bold tracking-wide leading-none mb-1">
                    Front End Wizard
                  </span>
                  <span className="font-display font-extrabold text-slate-800 text-sm sm:text-base leading-tight">
                    Mel Muselphiem
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachFeature;
