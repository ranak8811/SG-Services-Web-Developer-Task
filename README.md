# RemoteRecruit

A premium, highly responsive landing page and applicant dashboard designed and built for **RemoteRecruit**. This project connects businesses with remote, full-time, part-time, and freelance workers worldwide with a frictionless, modern interface.

---

## 🚀 Live Demo & Navigation

- **Live Netlify App**: [Click here to view live application](https://effervescent-tapioca-8c79ea.netlify.app)

You can seamlessly navigate the entire flow of the application:

- **Landing Page ➔ Dashboard**: Click the **Sign In** or **Sign Up** buttons in the sticky top Navbar.
- **Dashboard ➔ Landing Page**: Click the **Back** button in the sidebar (desktop) or the mobile sub-header (mobile), or click the brand logo in the top header.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) (latest features, native state management, strict component modularity)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using next-gen utility framework configurations and variables)
- **Icons**: [Lucide React](https://lucide.dev/) + Inline Custom SVG paths (custom branded icons like Facebook, Instagram, LinkedIn, Snapchat, and X/Twitter)
- **Build Tool**: [Vite 8](https://vite.dev/) (leveraging the lightning-fast Rolldown compiler for optimized production builds)

---

## 📦 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and [npm](https://www.npmjs.com/) installed.

### Installation

1. Clone or extract the project repository.
2. Open your terminal in the project root directory.
3. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application in real-time.

### Production Build

To build the application for production:

```bash
npm run build
```

The output files will be generated in the `dist` directory. You can preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```text
├── public/
│   └── assets/            # Static assets (logos, avatars, backgrounds)
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── ScrollToTop.jsx      # Global scroll-to-top component
│   │   ├── dashboard/
│   │   │   ├── Sidebar.jsx          # Desktop left sidebar
│   │   │   ├── Header.jsx           # Mobile top navigation and Back button
│   │   │   ├── BottomNav.jsx        # Mobile bottom navigation tabs
│   │   │   ├── FilterPane.jsx       # Advanced candidate filtering & search
│   │   │   ├── CandidateCard.jsx    # Candidate profiles with interactive video triggers
│   │   │   └── Pagination.jsx       # Custom candidate list pagination
│   │   └── landing/
│   │       ├── Navbar.jsx           # Sticky glassmorphic top navigation
│   │       ├── Hero.jsx             # High-impact introduction banner
│   │       ├── GlobalReachFeature.jsx # Interactive 1st Feature layout (avatars grid)
│   │       ├── FeeFreeFeature.jsx   # Checklist & floating PayPal mockup card
│   │       ├── ShowcaseTalentFeature.jsx # Talent profiles video player & skills grid
│   │       ├── HelpIsOnlyWay.jsx    # Split CTA with background graphic overlay
│   │       ├── FAQ.jsx              # Left-aligned dynamic Q&A accordion list
│   │       ├── Pricing.jsx          # 2-Column interactive subscription cards
│   │       └── Footer.jsx           # Wave overlapping layout & social linkages
│   ├── hooks/
│   │   └── useScrollReveal.js       # Dynamic viewport entry animations
│   ├── pages/
│   │   ├── LandingPage.jsx          # Main features landing page view
│   │   └── DashboardPage.jsx        # Interactive recruiters applicant dashboard
│   ├── App.jsx                      # App view routing and ScrollToTop registration
│   ├── main.jsx                     # Vite index mountpoint
│   └── index.css                    # Custom fonts, keyframes, scrollbar configuration
├── index.html                       # Base HTML wrapper
├── tailwind.config.js               # Tailwind variables overrides
├── vite.config.js                   # Vite configuration
└── package.json                     # Project scripts and dependencies
```

---

## ✨ Features Implemented

### 1. Interactive Landing Page

- **Typography & Aesthetics**: Standardized Google Poppins font. Custom `@keyframes` for smooth, slow bounce and pulse animations on absolute overlay elements.
- **Dynamic Navbar**: Fixed header which transitions from transparent to a dark frosted glass (`bg-brand-dark/90 backdrop-blur-md`) once the page is scrolled.
- **Section Layouts**: Re-created features sections exactly matching Figma specs:
  - **Global Reach**: Clean left alignment with a custom pill badge, rounded avatar borders, and an overlapping circular brand logo.
  - **Fee-Free**: Overlapping PayPal membership tier and upcoming billing alert pill badges.
  - **Showcase Talent**: Interactive skills grid, custom overlay play button, and clients feedback overlay.
- **FAQ Section**: Left-aligned structured Q&A matching the design layout, with a custom Sky-Blue border query button.
- **Pricing & Wave Footer**: Dynamic overlapping layout where the negative margin on the wave-bottom footer pulls itself on top of the pricing cards gradient background to blend seamlessly. Social accounts link directly using custom inline SVG shapes (avoiding external third-party library dependency issues).

### 2. High-Fidelity Recruiter Dashboard

- **Responsive Layout**: Adapts gracefully to all viewports. Desktop uses a fixed `Sidebar` navigation layout; Tablet and Mobile views show a sticky `Header` with a sliding hamburger menu, secondary `Back` header action bar, and a compact `BottomNav` bar.
- **HUD Video Cover Letter Player**: Clicking "Cover Letter Video" or a card's placeholder video opens a full-screen blurred glassmorphic overlay modal containing a responsive video player.
- **Interactive States**:
  - **Tabs Filter**: Quick-view counters for _All_, _Shortlisted_, and _Rejected_ sync with active candidate list tabs.
  - **Candidate Action Toggles**: Recruiters can instantly _Shortlist_ or _Reject_ candidates directly from cards. Button colors toggle between solid states and outlined buttons.
  - **Search & Advanced Filters**: Dynamic search query and filter controls (by Role, Minimum Pay rate, and tags) instantly update candidate list size and pagination ranges.
  - **Pagination Controls**: Bottom pages selector updates on candidate quantity changes.

### 3. Scroll-to-Top Button

- Rendered globally via `App.jsx`.
- Automatically monitors scroll position (`window.scrollY > 400`) to fade in/out.
- Smoothly scrolls to the top of the page using native `behavior: "smooth"`.
- Uses a hover-scaling effect (`hover:scale-110 hover:-translate-y-1`) with a subtle pulsing arrow.

### 4. Performance & Image Lazy Loading

- **Native Image Lazy Loading**: Every image below the viewport has the standard `loading="lazy"` attribute declared.
- **LCP Optimization**: Critical top-level hero banner files load instantly without delay, ensuring excellent Core Web Vitals (CWV) metrics.
- **Fallback Handlers**: Critical static asset references utilize React `onError` event handling to transition to safe visual placeholders if static files fail to load.
