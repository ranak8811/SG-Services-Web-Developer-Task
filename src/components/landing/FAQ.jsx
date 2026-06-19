import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const FAQ = () => {
  const [fRef, reveal] = useScrollReveal({ threshold: 0.15 });

  const faqData = [
    {
      question: "Do I have to sign a long-term contract?",
      answer:
        "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr",
    },
    {
      question: "Can I pay for a whole year?",
      answer:
        "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage",
    },
    {
      question: "What if I need help?",
      answer:
        "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
    },
  ];

  return (
    <section
      ref={fRef}
      className={`bg-white py-20 transition-all duration-1000 transform ${
        reveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Heading (Left-Aligned) */}
        <h2 className="text-[40px] font-display font-extrabold text-[#0E1B3E] tracking-tight mb-12">
          Common Questions
        </h2>

        {/* Q&A List */}
        <div className="space-y-8 mb-12 max-w-4xl">
          {faqData.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="font-display font-bold text-[#0E1B3E] text-lg sm:text-xl leading-snug">
                {item.question}
              </h3>
              <p className="text-[19px] font-sans text-[#6B7280] leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Left-Aligned More Questions Button */}
        <div className="flex justify-start">
          <button className="border-2 border-[#93C5FD] text-[#1A3B8B] hover:bg-[#F3F7FA] font-bold px-7 py-3 rounded-2xl text-sm sm:text-base tracking-wide transition-all duration-300 cursor-pointer">
            More Questions
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
