import useScrollReveal from "../../hooks/useScrollReveal";
import { Check } from "lucide-react";

const FeeFreeFeature = () => {
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
          {/* Graphic block (rendered first on large screens for alternating layouts) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start order-last lg:order-first py-10 px-8 sm:px-12 lg:px-0">
            {/* Aspect container to handle fixed layout dimensions and prevent clipping */}
            <div className="relative w-[320px] sm:w-[360px] h-[420px] sm:h-[460px]">
              {/* Floating sphere (top-left) */}
              <div className="absolute -left-6 top-6 w-7 h-7 bg-gradient-to-b from-[#3182CE] to-[#2B6CB0] rounded-full shadow-[0_4px_12px_rgba(43,108,176,0.3)] z-10" />

              {/* tall Membership Premium Card */}
              <div className="absolute inset-0 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100/80 p-8 flex flex-col justify-start">
                {/* Header Info */}
                <div className="text-left mb-6">
                  <p className="text-[#8A9BB4] text-[11px] font-bold uppercase tracking-wider mb-1">
                    Your Membership Tier
                  </p>
                  <h3 className="text-3xl font-display font-extrabold text-[#2B6CB0] tracking-tight">
                    Premium
                  </h3>
                </div>

                {/* Features Checklist */}
                <div className="text-left">
                  <p className="text-[#8A9BB4] text-[11px] font-bold uppercase tracking-wider mb-4">
                    Features
                  </p>
                  <div className="space-y-4">
                    {[
                      "Up to 25 active job posts",
                      "Premium Placement & Visibility",
                      "Messaging anyone, unlimited",
                      "Unlimited invites",
                      "View all applicants",
                      "Unlimited invites to jobseekers",
                    ].map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-3.5">
                        <div className="w-6 h-6 rounded-full bg-[#2B6CB0] flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                          <Check
                            className="w-3.5 h-3.5 text-white"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-slate-600 font-sans text-sm font-semibold">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Large RR Logo Circle (Right Overlap) */}
              <div className="absolute -right-8 top-[26%] w-20 h-20 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] overflow-hidden bg-transparent z-20 transition-transform duration-300 hover:scale-105">
                <img
                  src="/assets/RR.png"
                  alt="RR Logo"
                  className="absolute w-[165%] h-[165%] max-w-none left-[-16%] top-[-0%] object-contain"
                  loading="lazy"
                />
              </div>

              {/* Floating PayPal upcoming payment card (Bottom Left Overlap) */}
              <div className="absolute left-[-40px] bottom-[2%] bg-white rounded-[24px] shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center p-3 pr-8 min-w-[270px] sm:min-w-[290px] z-10 transition-transform duration-200 hover:scale-102">
                <div className="w-12 h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center flex-shrink-0 mr-3.5">
                  <img
                    src="/assets/paypal.png"
                    alt="PayPal Icon"
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-display font-bold text-[#1C3D82] text-xs leading-none mb-1">
                    Upcoming Payment In...
                  </h4>
                  <p className="text-sm sm:text-base font-extrabold text-slate-800 tracking-tight leading-tight">
                    14 Days - $79.99
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text block */}
          <div className="lg:col-span-6 space-y-6 text-left max-w-xl">
            <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold bg-[#DDF0FF] text-[#1A3B8B] tracking-wide">
              Actually Fee Free
            </span>
            <h2 className="text-[40px] font-display font-extrabold text-[#0E1B3E] tracking-tight leading-tight">
              Fee-Free Forever
            </h2>
            <p className="text-[19px] font-sans text-slate-500 leading-relaxed">
              We don’t charge you fees and we don’t put up paywalls. We’re the
              bridge that connects job opportunities with the best candidates,
              with no middleman involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeFreeFeature;
