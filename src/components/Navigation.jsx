import { Link, useNavigate } from 'react-router-dom'

// Navigation — appears on every page.
// showBack: shows a "← Back" breadcrumb (film pages)
// On home: just logo + profile avatar
export default function Navigation({ showBack = false }) {
  const navigate = useNavigate()

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-5 md:px-10">

      {/* Left: logo or back button */}
      {showBack ? (
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
        >
          {/* Simple left arrow */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L3 7L9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>
      ) : (
        <Link to="/" className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors">
          Blaisfilms
        </Link>
      )}

      {/* Right: fake profile avatar */}
      <div className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
        <span className="text-[10px] font-medium text-white select-none">BC</span>
      </div>

    </nav>
  )
}
