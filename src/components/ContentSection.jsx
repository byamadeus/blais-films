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

export default function ContentSection({ title, type, items, text }) {
  return (
    <section className="px-6 md:px-10 py-8 border-t border-white/10">

      {title && (
        <h3 className="text-xs uppercase tracking-widest text-white/40 mb-5">
          {title}
        </h3>
      )}

      {type === 'awards' && <AwardsList items={items} />}
      {type === 'credits' && <CreditsList items={items} />}
      {type === 'text' && <TextBlock text={text} />}
      {type === 'stills' && <StillsGrid items={items} />}

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
