import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useKeanu } from '../context/KeanuContext'

// Profile switcher roster — Netflix "who's watching"-style.
const PROFILES = [
  { id: 'bc', initials: 'BC', name: 'Blais Cameron',    keanu: false },
  { id: 'jk', initials: 'JK', name: 'John Krasinski',   keanu: false },
  { id: 'ss', initials: 'SS', name: 'Steven Spielberg', keanu: false },
  { id: 'kr', initials: 'KR', name: 'Keanu Reeves',     keanu: true  },
]

// Navigation — appears on every page.
// showBack: shows a "← Back" breadcrumb (film pages)
// On home: just logo + profile avatar
export default function Navigation({ showBack = false }) {
  const navigate = useNavigate()
  const [showProfiles, setShowProfiles] = useState(false)
  const { isKeanuMode } = useKeanu()

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-5 md:px-10">

      {/* Left: logo or back button */}
      {showBack ? (
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
        >
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

      {/* Right: profile avatar — opens Netflix-style profile switcher */}
      <button
        onClick={() => setShowProfiles(true)}
        className={`w-7 h-7 rounded-full border flex items-center justify-center cursor-pointer transition-colors ${
          isKeanuMode
            ? 'bg-amber-500/30 border-amber-400/60 hover:bg-amber-500/40'
            : 'bg-white/20 border-white/30 hover:bg-white/30'
        }`}
      >
        <span className={`text-[10px] font-medium select-none ${isKeanuMode ? 'text-amber-200' : 'text-white'}`}>
          {isKeanuMode ? 'KR' : 'BC'}
        </span>
      </button>

      {showProfiles && (
        <ProfileSwitcher onClose={() => setShowProfiles(false)} />
      )}

    </nav>
  )
}

// ── Profile switcher — Netflix "who's watching" panel ────────────────────────

function ProfileSwitcher({ onClose }) {
  const { isKeanuMode, setIsKeanuMode } = useKeanu()

  function handleSelect(profile) {
    if (profile.keanu) {
      setIsKeanuMode(true)
    } else {
      setIsKeanuMode(false)
    }
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl text-white font-medium mb-10">Who's Watching?</h2>

        <div className="flex gap-6 md:gap-10">
          {PROFILES.map((profile) => {
            const isActive = profile.keanu ? isKeanuMode : !isKeanuMode && profile.id === 'bc'
            return (
              <button
                key={profile.id}
                onClick={() => handleSelect(profile)}
                className="flex flex-col items-center gap-3 group"
              >
                <div
                  className={`w-20 h-20 md:w-28 md:h-28 rounded-lg flex items-center justify-center transition-colors ${
                    profile.keanu
                      ? `bg-amber-950/40 border ${isActive ? 'border-amber-400/70 group-hover:border-amber-300' : 'border-amber-800/40 group-hover:border-amber-600/60'}`
                      : `bg-white/10 border ${isActive ? 'border-white/60 group-hover:border-white' : 'border-white/20 group-hover:border-white/50'}`
                  }`}
                >
                  <span className={`text-xl md:text-2xl font-medium select-none ${profile.keanu ? 'text-amber-200' : 'text-white'}`}>
                    {profile.initials}
                  </span>
                </div>
                <span className={`text-xs md:text-sm transition-colors ${
                  profile.keanu
                    ? 'text-amber-400/70 group-hover:text-amber-300'
                    : 'text-white/60 group-hover:text-white'
                }`}>
                  {profile.name}
                </span>
              </button>
            )
          })}
        </div>

        <button
          onClick={onClose}
          className="mt-10 text-xs uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}
