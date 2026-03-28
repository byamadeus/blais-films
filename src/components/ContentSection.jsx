// ContentSection — a labeled section block used on the film page.
//
// Props:
//   title   — section heading, e.g. "Awards", "Key Collaborators"
//   type    — 'awards' | 'credits' | 'text' | 'stills'
//   items   — array; shape depends on type (see below)
//   text    — plain string, used when type="text"
//
// items shapes by type:
//   awards:  [{ name, detail, year }]
//   credits: [{ name, role }]
//   stills:  ['/path/to/image.jpg', ...]

// ContentSection — a labeled section block used on the film page.
//
// Props:
//   title  — section heading
//   type   — 'awards' | 'credits' | 'text' | 'stills' | 'video'
//   items  — array (awards, credits, stills)
//   text   — string (type="text")
//   url    — string (type="video") — Vimeo URL, YouTube URL, or Mux playback ID

export default function ContentSection({ title, type, items, text, url }) {
  return (
    <section className="px-6 md:px-10 py-8 border-t border-white/10">

      {title && (
        <h3 className="text-xs uppercase tracking-widest text-white/40 mb-5">
          {title}
        </h3>
      )}

      {type === 'video'   && <VideoPlayer url={url} />}
      {type === 'awards'  && <AwardsList items={items} />}
      {type === 'credits' && <CreditsList items={items} />}
      {type === 'text'    && <TextBlock text={text} />}
      {type === 'stills'  && <StillsGrid items={items} />}

    </section>
  )
}

// ── Sub-renderers ──────────────────────────────────────────────────────────

function AwardsList({ items }) {
  if (!items?.length) return <p className="text-white/30 text-sm">No awards listed yet.</p>

  return (
    <ul className="flex flex-wrap gap-6">
      {items.map((award, i) => (
        <li key={i} className="flex flex-col gap-0.5">
          {/* Laurel icon placeholder — swap with an actual SVG if you have one */}
          <div className="w-8 h-8 mb-2 opacity-60">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4C12 8 8 10 4 10C4 18 8 24 16 28C24 24 28 18 28 10C24 10 20 8 16 4Z" stroke="white" strokeWidth="1.2" fill="none"/>
            </svg>
          </div>
          <span className="text-sm text-white font-medium leading-tight">{award.name}</span>
          {award.detail && (
            <span className="text-xs text-white/50">{award.detail} {award.year}</span>
          )}
        </li>
      ))}
    </ul>
  )
}

function CreditsList({ items }) {
  if (!items?.length) return null

  return (
    <ul className="flex flex-col gap-2">
      {items.map((credit, i) => (
        <li key={i} className="flex items-baseline gap-3">
          <span className="text-sm text-white">{credit.name}</span>
          <span className="text-xs text-white/40">{credit.role}</span>
        </li>
      ))}
    </ul>
  )
}

function TextBlock({ text }) {
  if (!text) return null

  return (
    <p className="text-sm text-white/60 leading-relaxed max-w-xl">
      {text}
    </p>
  )
}

function StillsGrid({ items }) {
  const list = items?.length ? items : [null, null, null]

  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
      {list.map((src, i) => (
        <div key={i} className="shrink-0 w-[38%] overflow-hidden rounded bg-white/5">
          {src
            ? <img src={src} alt={`Still ${i + 1}`} className="w-full h-auto block" />
            : <div className="aspect-video" />
          }
        </div>
      ))}
    </div>
  )
}

// ── VideoPlayer ───────────────────────────────────────────────────────────────
// Accepts a single `url` and auto-detects the platform.
//
//   Vimeo    https://vimeo.com/123456789  or  https://vimeo.com/123456789/hash
//   YouTube  https://youtube.com/watch?v=ID  or  https://youtu.be/ID
//   Mux      bare playback ID (alphanumeric, no slashes)

function detectPlatform(url) {
  if (!url) return null
  if (url.includes('vimeo.com'))                         return 'vimeo'
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube'
  // Bare Mux playback ID — alphanumeric string, typically 25+ chars, no path separators
  if (/^[A-Za-z0-9]{20,}$/.test(url.trim()))            return 'mux'
  return null
}

function vimeoEmbedUrl(url) {
  // Handles both public (/123456789) and unlisted (/123456789/abcdef) Vimeo links
  const match = url.match(/vimeo\.com\/(\d+)(?:\/([a-f0-9]+))?/)
  if (!match) return null
  const [, id, hash] = match
  const params = `badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0`
  return `https://player.vimeo.com/video/${id}?${hash ? `h=${hash}&` : ''}${params}`
}

function youtubeEmbedUrl(url) {
  // Handles youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID
  const match = url.match(/(?:v=|youtu\.be\/|\/embed\/)([A-Za-z0-9_-]{11})/)
  if (!match) return null
  return `https://www.youtube.com/embed/${match[1]}?modestbranding=1&rel=0`
}

function VideoPlayer({ url }) {
  const platform = detectPlatform(url)
  if (!platform) return null

  const wrapper = 'relative aspect-video w-full overflow-hidden rounded-lg bg-black'
  const fill    = 'absolute inset-0 w-full h-full'

  if (platform === 'mux') {
    // Use a plain iframe against the Mux stream embed endpoint
    return (
      <div className={wrapper}>
        <iframe
          src={`https://stream.mux.com/${url.trim()}`}
          className={fill}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Mux Video"
        />
      </div>
    )
  }

  if (platform === 'vimeo') {
    const src = vimeoEmbedUrl(url)
    if (!src) return null
    return (
      <div className={wrapper}>
        <iframe
          src={src}
          className={fill}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Video"
        />
      </div>
    )
  }

  if (platform === 'youtube') {
    const src = youtubeEmbedUrl(url)
    if (!src) return null
    return (
      <div className={wrapper}>
        <iframe
          src={src}
          className={fill}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="YouTube Video"
        />
      </div>
    )
  }

  return null
}