import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  const [currentPage, setCurrentPage] = useState("landing");

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Reset scroll position on navigate
  };

  return (
    <>
      {currentPage === "landing" ? (
        <LandingPage onNavigate={handleNavigate} />
      ) : (
        <DashboardPage onNavigate={handleNavigate} />
      )}
      <ScrollToTop />
    </>
  );
};

export default App;
