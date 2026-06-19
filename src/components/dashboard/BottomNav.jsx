import React from "react";
import { Search, Briefcase, Settings, MessageSquare, User } from "lucide-react";

const BottomNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "find-candidates", icon: Search, label: "Find" },
    { id: "job-posts", icon: Briefcase, label: "Jobs" },
    { id: "settings", icon: Settings, label: "Settings" },
    { id: "messages", icon: MessageSquare, label: "Messages" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A1E3B] border-t border-white/5 text-white lg:hidden h-16 flex items-center justify-around px-2 shadow-2xl">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-150 cursor-pointer focus:outline-none ${
              isActive
                ? "bg-[#1E40AF]/60 text-blue-400 scale-105"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[9px] font-bold mt-1 tracking-wide leading-none">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
