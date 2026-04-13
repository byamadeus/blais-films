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
            <svg viewBox="0 0 280 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M188.234 0.000489267C192.389 -0.0509246 195.927 3.96145 198.925 6.49268C207.427 13.6706 214.418 22.1354 219.865 31.8335C221.727 35.1486 222.932 38.9534 224.835 42.1909C225.435 42.447 226.202 40.5565 226.682 39.7388C229.417 35.0958 236.317 22.9315 241.317 21.144C242.872 20.5946 244.582 20.6992 246.059 21.4321C249.874 23.2855 251.289 28.2952 252.774 31.9448C259.616 48.7752 261.587 67.4466 257.344 85.1899C256.555 88.4947 255.91 92.3493 254.455 95.4058C258.662 92.882 267.092 89.9266 271.767 89.3823C278.122 88.6426 280.344 95.0891 279.104 100.301C278.517 102.779 278.082 106.129 277.559 108.723C274.517 123.863 267.935 138.294 258.03 150.184C255.27 153.498 252.219 156.706 249.292 159.877C254.747 159.639 267.587 160.498 271.99 163.754C278.784 169.058 269.302 177.989 265.782 182.105C253.359 196.636 232.514 207.959 213.372 209.217C217.88 212.547 234.065 223.837 235.147 228.745C235.549 230.569 235.277 232.372 234.227 233.934C231.262 238.341 219.93 240.394 214.745 241.424C198.87 244.578 181.115 241.154 166.252 233.883C155.497 228.116 146.813 220.494 140.449 214.651C137.937 217.698 131.893 223.222 122.597 228.747C122.639 228.645 122.68 228.55 122.717 228.459C121.068 229.654 118.228 231.042 116.39 232.084C115.86 232.385 115.323 232.678 114.781 232.967C110.148 235.235 104.945 237.388 99.1941 239.239C89.1045 242.142 78.3295 243.224 68.3552 242.047C63.3676 241.457 48.4247 238.242 45.3386 234.147C44.2895 232.77 43.8649 231.017 44.1667 229.312C44.5767 226.902 46.1651 225.212 47.9255 223.622C53.6616 218.447 59.7695 213.784 66.0173 209.268C58.4012 208.934 47.816 205.587 41.0007 202.452C29.1125 197.02 18.7194 188.876 10.6335 178.605C7.39984 174.497 3.24648 170.867 5.90012 165.383C9.01862 161.224 13.3551 161.383 18.0886 160.558C22.0501 159.868 26.0304 159.518 30.0447 159.324C15.0341 144.832 4.83037 127.219 1.45676 106.449C0.798551 102.395 -1.11075 96.654 0.886452 92.8345C1.67689 91.2941 3.06328 90.1439 4.72337 89.6528C9.22087 88.3258 20.8178 93.1669 24.9558 95.4087C23.7869 93.0704 22.784 88.4806 22.1872 85.896C18.2603 69.5832 19.1994 52.477 24.8874 36.6919C26.3779 32.4972 29.56 22.9638 33.24 21.2368C41.3584 17.4276 51.9429 37.6999 54.198 42.9136C61.0787 26.477 70.285 14.6121 84.0173 3.43115C86.044 1.78118 88.4188 0.0879466 91.1755 0.377442C93.0001 0.584513 94.6684 1.50538 95.8171 2.93799C97.4838 4.98561 98.158 7.89884 98.8972 10.3706C107.247 38.2922 95.2421 67.647 74.7497 87.0571C70.9724 90.6349 66.1285 94.0365 61.949 97.3413C61.7297 98.2742 61.4558 99.2793 61.279 100.211C60.02 106.846 57.7041 113.057 55.6052 119.455C66.8521 132.529 73.9074 150.081 76.5486 166.976C88.7292 172.401 97.2842 177.387 106.664 187.249C108.511 189.19 110.861 191.582 112.31 193.814C117.359 194.237 121.823 194.179 127.001 194.972C130.396 195.493 136.797 197.574 139.746 197.556C143.086 197.536 149.679 195.307 153.356 194.802C157.981 194.167 162.3 194.096 166.938 193.904C168.854 191.366 171.172 189.084 173.306 186.77C182.51 176.792 190.65 171.96 202.852 166.661C204.437 151.936 214.068 130.006 224.115 119.081C220.933 110.986 219.597 105.53 217.797 97.1206C213.894 93.7581 209.269 91.0681 205.554 87.6401C185.042 68.6857 172.694 39.5119 180.234 11.7271C181.706 6.30458 181.942 1.47437 188.234 0.000489267ZM214.386 227.367C202.161 216.747 178.718 206.466 162.357 208.31C159.508 208.482 156.663 208.727 153.826 209.045C168.098 221.054 186.974 229.962 206.018 228.282C206.181 228.269 206.344 228.251 206.507 228.234C209.131 228.024 211.952 227.527 214.386 227.367ZM125.578 209.027C121.267 208.904 114.04 208.273 110.055 208.81C106.96 209.031 103.799 209.246 100.752 209.826C88.1352 212.225 75.1435 219.087 65.3728 227.387C71.5349 227.812 74.9487 228.82 81.5056 228.243C97.8729 227.07 113.34 219.812 125.578 209.027ZM39.3122 173.673C37.8308 173.646 34.2745 173.62 32.8659 173.809C30.3452 173.974 27.7476 174.179 25.2322 174.304C28.7497 177.291 31.1402 179.726 34.9851 182.449C50.1503 193.19 69.5507 197.045 87.9245 196.27C90.4059 196.178 92.8852 196.029 95.3601 195.824C80.273 180.342 60.6393 174.06 39.3122 173.673ZM254.09 174.368C249.472 173.98 240.763 173.267 236.293 173.809C217.313 175.159 197.077 181.106 184.177 195.91C189.85 196.169 196.822 196.612 202.425 196.049C219.242 194.78 232.337 191.226 246.277 181.145C249.354 178.919 251.375 176.612 254.09 174.368ZM15.988 107.047C22.2048 132.058 36.2797 152.265 60.9353 161.621C54.4583 136.587 39.8068 117.74 15.988 107.047ZM263.346 106.79C242.569 116.436 228.704 131.611 220.877 153.226C220.411 154.51 218.619 160.115 218.882 161.093L219.101 161.1C236.056 155.257 248.713 142.143 256.593 126.248C259.918 119.543 261.591 114.141 263.596 107.052C263.532 106.975 263.421 106.811 263.346 106.79ZM37.9519 42.5327C36.9432 46.0174 35.8149 49.9741 35.1892 53.5229C32.3543 69.6004 34.5971 87.0437 42.5241 101.418L45.0144 105.857C45.6546 104.7 46.2489 100.885 46.6286 99.396C49.8494 86.7682 49.4549 73.109 45.8855 60.5864C45.0441 57.6352 39.9501 43.8868 37.9519 42.5327ZM240.997 42.8364C239.792 45.9491 237.652 49.1967 236.304 52.5903C230.86 66.3202 229.457 79.5466 231.715 94.0737C232.305 97.8545 233.617 101.906 234.097 105.47L234.397 105.663L234.684 105.324C245.419 87.4164 248.074 68.2619 243.059 47.9624C242.752 46.7188 242.004 43.2292 241.094 42.5776L240.997 42.8364ZM192.624 20.0903C190.941 44.1903 199.032 61.3977 216.257 78.0991C217.632 55.5185 209.383 35.223 192.624 20.0903ZM86.0115 20.3862C71.4812 33.8566 63.5727 51.1168 62.8064 70.9565C62.7616 72.1161 62.538 76.8189 62.9089 77.646C63.1928 77.5723 63.2314 77.6156 63.3952 77.4575C79.0169 64.1074 89.669 41.2688 86.2839 20.6323C86.2602 20.4874 86.1179 20.4366 86.0115 20.3862Z" fill="white"/>
            </svg>

          </div>
          <span className="text-md text-white font-medium leading-tight">{award.name}</span>
          {award.detail && (
            <span className="text-sm text-white/50">{award.detail} {award.year}</span>
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
          <span className="text-sm text-white/60">{credit.role}</span>
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