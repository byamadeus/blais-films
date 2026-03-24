import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { about } from '../data/about'

// About page — director profile.
// Layout:
//   Navigation (back)
//   Hero (headshot, title, short bio, CTA buttons)
//   Two-column body: long bio + personal details sidebar
//   Full credits table
//   Footer

export default function About() {
  return (
    <div className="min-h-screen bg-black">

      <Navigation showBack />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-black">
        {about.headshot && (
          <img
            src={about.headshot}
            alt="Blais Cameron"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 px-6 pb-10 md:px-10 md:pb-14 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">{about.headline}</h1>
          <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6 max-w-sm">
            {about.shortBio}
          </p>
          <div className="flex gap-3 flex-wrap">
            {about.primaryAction && (
              <a
                href={about.primaryAction.href}
                className="inline-flex items-center px-5 py-2.5 bg-white text-black text-sm font-medium rounded hover:bg-white/90 transition-colors"
              >
                {about.primaryAction.label}
              </a>
            )}
            {about.secondaryAction && (
              <a
                href={about.secondaryAction.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-white/15 border border-white/25 text-white text-sm font-medium rounded hover:bg-white/25 transition-colors"
              >
                {about.secondaryAction.label}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="px-6 md:px-10 py-12">

        {/* Two-column: bio + personal details */}
        <div className="flex flex-col md:flex-row gap-12 mb-16 border-b border-white/10 pb-16">

          {/* Bio */}
          <div className="flex-1">
            <h3 className="text-xs uppercase tracking-widest text-white/40 mb-4">Blais Cameron</h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-lg">{about.longBio}</p>
          </div>

          {/* Personal details sidebar */}
          <div className="md:w-64 flex-none">
            <h3 className="text-xs uppercase tracking-widest text-white/40 mb-4">Personal Details</h3>
            <ul className="flex flex-col gap-3">
              {about.details.map(({ label, value }) => (
                <li key={label} className="flex items-baseline gap-3">
                  <span className="text-xs text-white/30 w-28 flex-none">{label}</span>
                  <span className="text-sm text-white">{value}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Full credits table */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-white/40 mb-6">Full Credits</h3>

          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="pb-3 text-xs text-white/30 font-normal w-16">Year</th>
                <th className="pb-3 text-xs text-white/30 font-normal">Title</th>
                <th className="pb-3 text-xs text-white/30 font-normal">Role</th>
                <th className="pb-3 text-xs text-white/30 font-normal hidden md:table-cell">Award</th>
              </tr>
            </thead>
            <tbody>
              {[...about.credits].sort((a, b) => Number(b.year) - Number(a.year)).map((credit, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-3 text-white/30">{credit.year}</td>
                  <td className="py-3 pr-4">
                    {credit.link ? (
                      <a
                        href={credit.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white group-hover:text-white/80 transition-colors inline-flex items-center gap-1"
                      >
                        {credit.title}
                        {/* External link arrow */}
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-40">
                          <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                      </a>
                    ) : (
                      <span className="text-white">{credit.title}</span>
                    )}
                  </td>
                  <td className="py-3 pr-4 text-white/50">{credit.role}</td>
                  <td className="py-3 text-white/30 hidden md:table-cell">{credit.award || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <Footer />

    </div>
  )
}
