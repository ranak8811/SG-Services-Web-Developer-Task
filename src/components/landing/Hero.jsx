import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-brand-dark text-white overflow-hidden"
      style={{
        backgroundImage: "url('/assets/Banner_Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay for better contrast and premium look */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/20 to-brand-dark/10 pointer-events-none" />

      {/* Decorative Light Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-32 z-10">
        {/* Animated Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-blue-200 uppercase mb-8 border border-white/10 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span>Remote Job Board Platform</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none text-white max-w-4xl mx-auto mb-6">
          RemoteRecruit&apos;s Difference
        </h1>

        {/* Hero Description */}
        <p className="font-sans font-normal text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
          RemoteRecruit is connecting the world with an easy-to-use platform that lets
          full-time, part-time, and freelance workers showcase their talents to
          businesses that need them. With no paywalls, no fees, and no barriers, there&apos;s
          nothing but you, your talents, and the next step in your career.
        </p>

        {/* Smooth animation wave bottom divider (just in case the banner background needs visual blend) */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;
