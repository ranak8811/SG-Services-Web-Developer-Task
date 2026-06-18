import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import GlobalReachFeature from "../components/landing/GlobalReachFeature";
import FeeFreeFeature from "../components/landing/FeeFreeFeature";
import ShowcaseTalentFeature from "../components/landing/ShowcaseTalentFeature";
import HelpIsOnlyWay from "../components/landing/HelpIsOnlyWay";

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar onNavigate={onNavigate} />

      {/* Hero Section */}
      <Hero />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Feature 1: Global Reach */}
        <GlobalReachFeature />

        {/* Feature 2: Fee-Free Forever */}
        <FeeFreeFeature />

        {/* Feature 3: Showcase Your Talents */}
        <ShowcaseTalentFeature />

        {/* Help Is Only Way Section */}
        <HelpIsOnlyWay onNavigate={onNavigate} />

        {/* Placeholder for FAQ & Pricing (Part 3) */}
        <div className="bg-slate-50 py-16 text-center text-slate-400 text-sm">
          FAQ & Pricing Sections (Coming in Part 3)
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
