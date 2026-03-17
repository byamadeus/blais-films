import { Link } from 'react-router-dom'

// CardSection — horizontal scrollable row of film poster cards.
//
// Props:
//   title  — section label, e.g. "Featured Titles" or "More Like This"
//   films  — array of film objects from films.js

export default function CardSection({ title, films }) {
  if (!films?.length) return null

  return (
    <section className="py-8 px-6 md:px-10 bg-gradient-to-b from-transparent to-[#000000]">

      {/* Section label */}
      {title && (
        <h2 className="text-lg text-white mb-4">
          {title}
        </h2>
      )}

      {/* Scrollable card row */}
      <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1">
        {films.map((film) => (
          <Card key={film.id} film={film} />
        ))}
      </div>

    </section>
  )
}

// Individual film card
function Card({ film }) {
  return (
    <Link
      to={`/film/${film.id}`}
      className="flex-none w-24 lg:w-48 group"
    >
      {/* Poster — 2:3 portrait ratio */}
      <div className="relative aspect-[2/3] overflow-hidden rounded bg-card">
        {film.poster ? (
          <img
            src={film.poster}
            alt={film.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Placeholder if no poster yet
          <div className="w-full h-full bg-white/5 flex items-end p-3">
            <span className="text-xs text-white/40 leading-tight">{film.title}</span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Title below card — subtle, appears on hover */}
      <p className="mt-2 text-sm text-white/80 group-hover:text-white transition-colors truncate lg:hidden md:hidden">
        {film.title}
      </p>
    </Link>
  )
}
