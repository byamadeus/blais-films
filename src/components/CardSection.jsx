import { Link } from 'react-router-dom'

// CardSection — horizontal scrollable row of cards.
//
// Props:
//   title    — section label
//   films    — array of items from films.js
//   variant  — 'film' (default, 2:3 portrait poster) | 'commercial' (16:9 thumbnail) | 'press' (16:9 outlet card, links out)

export default function CardSection({ title, films, variant = 'film' }) {
  if (!films?.length) return null

  return (
    <section className="py-8 px-6 md:px-10 bg-gradient-to-b from-transparent to-[#000000]">

      {title && (
        <h2 className="text-lg text-white mb-4">{title}</h2>
      )}

      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {films.map((item) =>
          variant === 'commercial' ? <CommercialCard key={item.id} item={item} /> :
          variant === 'press'      ? <PressCard key={item.id} item={item} /> :
          <FilmCard key={item.id} film={item} />
        )}
      </div>

    </section>
  )
}

// ── Film card — 2:3 portrait poster ──────────────────────────────────────────

function FilmCard({ film }) {
  return (
    <Link to={`/film/${film.id}`} className="flex-none w-24 lg:w-48 group">
      <div className="relative aspect-[2/3] overflow-hidden rounded bg-card">
        {film.poster ? (
          <img
            src={film.poster}
            alt={film.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-white/5 flex items-end p-3">
            <span className="text-xs text-white/40 leading-tight">{film.title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <p className="mt-2 text-sm text-white/80 group-hover:text-white transition-colors truncate lg:hidden md:hidden">
        {film.title}
      </p>
    </Link>
  )
}

// ── Commercial card — 16:9 YouTube-style thumbnail ───────────────────────────

function CommercialCard({ item }) {
  return (
    <Link to={`/commercial/${item.id}`} className="flex-none w-56 md:w-72 group">

      {/* Thumbnail — 16:9 */}
      <div className="relative aspect-video overflow-hidden rounded bg-white/5">
        {item.thumbnail ? (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-white/5" />
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Metadata below */}
      <div className="mt-2 flex gap-2">
        {/* Channel avatar stand-in */}
        {/* <div className="flex-none w-7 h-7 rounded-full bg-white/10 mt-0.5" /> */}
        <div className="min-w-0">
          <p className="text-sm text-white leading-snug line-clamp-2 group-hover:text-white/80 transition-colors">
            {item.title}
          </p>
          <p className="text-xs text-white/40 mt-0.5">
            {/* {item.roles?.join(', ')}  */}
            {item.genre} · {item.year}
          </p>
        </div>
      </div>

    </Link>
  )
}

// ── Press card — small link chip, no photo. Links out to the original article.

function PressCard({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-none w-64 md:w-72 flex items-start gap-3 px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-colors"
    >
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-widest text-white/40 mb-1.5">
          {item.outlet} · {item.year}
        </p>
        <p className="text-sm text-white leading-snug line-clamp-2 group-hover:text-white/80 transition-colors">
          {item.headline}
        </p>
      </div>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-40 group-hover:opacity-70 transition-opacity mt-1 flex-none">
        <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    </a>
  )
}
