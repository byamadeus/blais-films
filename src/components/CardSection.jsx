import { Link } from 'react-router-dom'

// CardSection — horizontal scrollable row of cards.
//
// Props:
//   title    — section label
//   films    — array of items from films.js
//   variant  — 'film' (default, 2:3 portrait poster) | 'commercial' (16:9 thumbnail)

export default function CardSection({ title, films, variant = 'film' }) {
  if (!films?.length) return null

  return (
    <section className="py-8 px-6 md:px-10 bg-gradient-to-b from-transparent to-[#000000]">

      {title && (
        <h2 className="text-lg text-white mb-4">{title}</h2>
      )}

      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {films.map((item) =>
          variant === 'commercial'
            ? <CommercialCard key={item.id} item={item} />
            : <FilmCard key={item.id} film={item} />
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
