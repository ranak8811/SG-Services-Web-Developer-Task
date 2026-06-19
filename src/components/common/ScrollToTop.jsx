import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 lg:bottom-8 right-6 z-50 p-3.5 rounded-full bg-[#1A3B8B] hover:bg-[#2B6CB0] text-white shadow-2xl transition-all duration-350 transform hover:scale-110 focus:outline-none cursor-pointer border-2 border-white/20 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 animate-pulse" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
