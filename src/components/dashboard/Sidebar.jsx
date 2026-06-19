import { Search, Briefcase, User, MessageSquare, Settings, HelpCircle, ChevronsUpDown, Play } from "lucide-react";

const Sidebar = ({ activeTab, setActiveTab, onNavigate }) => {
  const menuItems = [
    { id: "find-candidates", label: "Find Candidates", icon: Search },
    { id: "job-posts", label: "Your Job Posts", icon: Briefcase, badge: 8 },
    { id: "profile", label: "Profile", icon: User },
    { id: "messages", label: "Messages", icon: MessageSquare, badge: 23 },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "help", label: "Help", icon: HelpCircle },
  ];

  return (
    <aside className="w-64 bg-[#0A1E3B] text-white flex flex-col h-screen fixed left-0 top-0 overflow-y-auto shrink-0 z-30 border-r border-white/5 scrollbar-thin">
      {/* Sidebar Header: Logo */}
      <div className="p-6 flex items-center justify-center border-b border-white/5">
        <button
          onClick={() => onNavigate("landing")}
          className="flex items-center space-x-2 focus:outline-none group cursor-pointer"
        >
          <img
            src="/assets/Logo.png"
            alt="RemoteRecruit Logo"
            className="h-8 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = "none";
              document.getElementById("sidebar-fallback-logo").style.display = "block";
            }}
          />
          <span
            id="sidebar-fallback-logo"
            className="hidden font-display font-bold text-xl text-white tracking-tight"
          >
            Remote<span className="text-blue-400">Recruit</span>
          </span>
        </button>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 cursor-pointer focus:outline-none ${
                isActive
                  ? "bg-[#1E40AF]/60 text-white shadow-md border-l-4 border-blue-500"
                  : "text-slate-350 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-3.5">
                <Icon className={`w-5 h-5 ${isActive ? "text-blue-400" : "text-slate-400"}`} />
                <span>{item.label}</span>
              </div>
              {item.badge !== undefined && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  isActive ? "bg-blue-500 text-white" : "bg-white/10 text-slate-300"
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Sidebar Footer Panels */}
      <div className="p-4 space-y-4 border-t border-white/5 bg-black/10">
        
        {/* Promotion Card: Why you should try Premium */}
        <div className="bg-[#1E3A8A]/50 border border-blue-500/20 rounded-2xl p-4 relative overflow-hidden group hover:border-blue-500/40 transition-colors">
          {/* Money Back Ribbon */}
          <div className="absolute top-0 right-0 bg-[#EF4444] text-[8px] font-black uppercase tracking-wider py-0.5 px-3 rounded-bl-lg shadow-sm">
            ★ Guarantee
          </div>
          <h4 className="text-xs font-bold text-slate-300 mt-2 uppercase tracking-wide leading-none mb-1">Why You Should</h4>
          <p className="text-sm font-extrabold text-white mb-3">Try Premium</p>
          <button className="w-full bg-white hover:bg-slate-150 text-[#0A1E3B] font-bold py-2 px-3 rounded-full text-xs flex items-center justify-center space-x-1.5 shadow-md cursor-pointer transition-all">
            <span className="w-4 h-4 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white text-[8px]">▶</span>
            <span>Watch Video</span>
          </button>
        </div>

        {/* Limits Card: Basic */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">Basic</span>
          </div>
          <div className="space-y-2 mb-3.5">
            <div>
              <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                <span>Free Messages</span>
                <span>1/5</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[20%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                <span>Free Invites</span>
                <span>1/5</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[20%]" />
              </div>
            </div>
          </div>
          <button className="w-full bg-[#FBBF24] hover:bg-amber-500 text-slate-900 font-extrabold py-2 px-3 rounded-full text-xs transition-colors shadow-md cursor-pointer">
            Upgrade
          </button>
          <button className="w-full text-center text-[10px] text-slate-400 font-bold hover:underline mt-2 cursor-pointer block">
            Why you should try premium?
          </button>
        </div>

        {/* Profile Footer */}
        <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="/assets/Guru.png"
                alt="Profile Avatar"
                className="w-9 h-9 rounded-full border border-blue-400 object-cover bg-slate-800"
              />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-[#0A1E3B]" />
            </div>
            <div className="text-left leading-none">
              <h5 className="font-display font-bold text-sm text-white leading-tight">Bungie</h5>
              <span className="text-[10px] text-blue-400 font-bold">Premium</span>
            </div>
          </div>
          <ChevronsUpDown className="w-4 h-4 text-slate-400 group-hover:text-white" />
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;
