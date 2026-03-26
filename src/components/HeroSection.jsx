import MuxPlayer from '@mux/mux-player-react'

// HeroSection — full-viewport background (video or still) with content overlay.
//
// Props:
//   title           — large heading (director name or film title)
//   subtitle        — small label above title, e.g. "Director, Producer, Writer"
//   description     — short paragraph below title
//   muxPlaybackId   — Mux playback ID for background video (optional)
//   backgroundImage — fallback/static image path (used when no muxPlaybackId)
//   primaryAction   — { label, href } for the main button (e.g. "Watch Film")
//   secondaryAction — { label, href } for a second button (optional)
//   size            — 'full' (100vh, home) | 'large' (85vh, film page)

export default function HeroSection({
  title,
  subtitle,
  description,
  muxPlaybackId,
  backgroundImage,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  size = 'full',
}) {
  const heightClass = size === 'full' ? 'h-screen' : 'h-[85vh]'

  return (
    <section className={`relative w-full ${heightClass} overflow-hidden bg-black`}>

      {/* ── Background: Mux video or static image ── */}
      {muxPlaybackId ? (
        <MuxPlayer
          playbackId={muxPlaybackId}
          streamType="on-demand"
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        />
      ) : backgroundImage ? (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      ) : null}

      {/* ── Gradient overlays ── */}
      {/* Bottom fade — pulls content out of the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      {/* Left vignette — keeps text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

      {/* ── Content: bottom-left ── */}
      <div className="absolute top-[50%] -translate-y-1/2 left-0 px-6 pb-10 md:px-10 md:pb-14 max-w-xl">

        {subtitle && (
          <p className="text-xs uppercase tracking-widest text-white/50 mb-3">
            {subtitle}
          </p>
        )}

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          {title}
        </h1>

        {description && (
          <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6 max-w-sm">
            {description}
          </p>
        )}

        {/* Buttons */}
        {(primaryAction || secondaryAction || tertiaryAction) && (
          <div className="flex items-center gap-3 flex-wrap">
            {primaryAction && (
              <a
                href={primaryAction.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded hover:bg-white/90 transition-colors"
              >
                {/* Play icon */}
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L11 7L1 13V1Z" fill="currentColor"/>
                </svg>
                {primaryAction.label}
              </a>
            )}
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-white/20 text-white text-sm font-medium rounded hover:bg-white/30 transition-colors border border-white/20"
              >
                {secondaryAction.label}
              </a>
            )}
            {tertiaryAction && (
              <a
                href={tertiaryAction.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-white/20 text-white text-sm font-medium rounded hover:bg-white/30 transition-colors border border-white/20"
              >
                {tertiaryAction.label}
              </a>
            )}
          </div>
        )}

      </div>
    </section>
  )
}
