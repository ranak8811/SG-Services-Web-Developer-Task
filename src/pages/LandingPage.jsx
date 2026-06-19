import React from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import GlobalReachFeature from "../components/landing/GlobalReachFeature";
import FeeFreeFeature from "../components/landing/FeeFreeFeature";
import ShowcaseTalentFeature from "../components/landing/ShowcaseTalentFeature";
import HelpIsOnlyWay from "../components/landing/HelpIsOnlyWay";
import FAQ from "../components/landing/FAQ";
import Pricing from "../components/landing/Pricing";
import Footer from "../components/landing/Footer";

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

        {/* FAQ Section */}
        <FAQ />

        {/* Pricing Section */}
        <Pricing onNavigate={onNavigate} />
      </main>

      {/* Footer Section */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default LandingPage;
