import { Ghost } from "lucide-react";

const Footer = ({ onNavigate }) => {
  return (
    <footer
      className="relative text-white pt-48 sm:pt-56 lg:pt-64 pb-12 overflow-hidden -mt-36 sm:-mt-44 lg:-mt-52 z-0"
      style={{
        backgroundImage: "url('/assets/Footer_Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Wave divider line or layout padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/10 pb-10 mb-10">
          {/* Left Column: Logo Branding */}
          <button
            onClick={() => onNavigate("landing")}
            className="flex items-center space-x-2 focus:outline-none mb-6 md:mb-0 group cursor-pointer"
          >
            <img
              src="/assets/Logo.png"
              alt="RemoteRecruit Logo"
              className="h-8 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </button>

          {/* Right Column: Social Media Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5 stroke-current fill-none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
              aria-label="X / Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://snapchat.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
              aria-label="Snapchat"
            >
              <Ghost className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright and Center Icon */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex justify-center">
            {/* Center RR Small Logo Icon */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center focus:outline-none transition-transform duration-300 hover:scale-110 cursor-pointer shadow-lg"
              title="Scroll to Top"
            >
              <img
                src="/assets/Icon.png"
                alt="RR Badge"
                className="w-12 h-12 object-contain"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "/assets/RR.png";
                }}
              />
            </button>
          </div>
          <p className="text-center text-xs text-white/40 tracking-wider">
            &copy; {new Date().getFullYear()} RemoteRecruit. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
