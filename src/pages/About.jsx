import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { about } from '../data/about'

// ── Shared backdrop ───────────────────────────────────────────────────────────
function Backdrop({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  )
}

// ── Hire Me modal ─────────────────────────────────────────────────────────────
function HireModal({ email, onClose }) {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <Backdrop onClose={onClose}>
      <div className="bg-[#111] border border-white/10 rounded-2xl p-8 max-w-sm w-full mx-4 text-center shadow-2xl">
        <h2 className="text-xl font-semibold text-white mb-2">Let's Work Together</h2>
        <p className="text-sm text-white/50 mb-6 leading-relaxed">
          Reach out directly.
        </p>

        {/* Email copy row */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-4 text-left">
          <span className="text-sm text-white flex-1 truncate">{email}</span>
          <button
            onClick={copyEmail}
            className={`text-xs shrink-0 font-medium transition-colors px-2 py-1 rounded ${
              copied
                ? 'text-green-400'
                : 'text-white/40 hover:text-white'
            }`}
          >
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>

        {/* Mailto fallback */}
        <a
          href={`mailto:${email}`}
          className="block w-full py-2.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-white/90 transition-colors mb-4"
        >
          Open in Mail App
        </a>

        <button
          onClick={onClose}
          className="text-xs text-white/25 hover:text-white/50 transition-colors"
        >
          Close
        </button>
      </div>
    </Backdrop>
  )
}

// ── Inspire Me modal ──────────────────────────────────────────────────────────
// Uses Formspree (free tier) to send the link without opening an email app.
// Setup: create a free form at formspree.io, then replace the endpoint below.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwvwvane'

function InspireModal({ onClose }) {
  const [link, setLink]     = useState('')
  const [note, setNote]     = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSend(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify({ link, note }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Backdrop onClose={onClose}>
      <div className="bg-[#111] border border-white/10 rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl">

        {status === 'sent' ? (
          /* ── Success state ── */
          <div className="text-center py-2">
            <div className="text-4xl mb-4">✦</div>
            <h2 className="text-xl font-semibold text-white mb-2">Sent to Blais</h2>
            <p className="text-sm text-white/50 mb-6">Thanks for sharing.</p>
            <button
              onClick={onClose}
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          /* ── Form state ── */
          <>
            <h2 className="text-xl font-semibold text-white mb-1">Drop a Link</h2>
            <p className="text-sm text-white/50 mb-6 leading-relaxed">
              Share something that moves you — a film, song, article, anything. No email app needed.
            </p>

            <form onSubmit={handleSend} className="flex flex-col gap-3">
              <input
                type="url"
                required
                placeholder="https://..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 transition-colors"
              />
              <textarea
                rows={3}
                placeholder="Why does this move you? (optional)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-2.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-white/90 transition-colors disabled:opacity-40 mt-1"
              >
                {status === 'sending' ? 'Sending…' : 'Send to Blais'}
              </button>

              {status === 'error' && (
                <p className="text-xs text-red-400 text-center">
                  Something went wrong — try again in a moment.
                </p>
              )}

              <button
                type="button"
                onClick={onClose}
                className="text-xs text-white/25 hover:text-white/50 transition-colors text-center"
              >
                Cancel
              </button>
            </form>
          </>
        )}

      </div>
    </Backdrop>
  )
}

// ── About page ────────────────────────────────────────────────────────────────
export default function About() {
  const [showHire, setShowHire]       = useState(false)
  const [showInspire, setShowInspire] = useState(false)

  return (
    <div className="min-h-screen bg-black">

      {/* ── Modals ── */}
      {showHire    && <HireModal    email={about.email} onClose={() => setShowHire(false)}    />}
      {showInspire && <InspireModal                     onClose={() => setShowInspire(false)} />}

      {/* ── Sticky Resume button ── */}
      <a
        href={about.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-24 z-40 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-black/10 hover:bg-white/20 border border-white/15 text-white text-sm font-medium rounded-full backdrop-blur-sm transition-colors"
      >
        {/* Download icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15V3"/>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <path d="m7 10 5 5 5-5"/>
        </svg>
        Resume
      </a>

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
            {/* Hire Me → opens modal */}
            {about.primaryAction && (
              <button
                onClick={() => setShowHire(true)}
                className="inline-flex items-center px-5 py-2.5 bg-white text-black text-sm font-semibold rounded hover:bg-white/90 transition-colors"
              >
                {about.primaryAction.label}
              </button>
            )}
            {/* Inspire Me → opens modal */}
            {about.secondaryAction && (
              <button
                onClick={() => setShowInspire(true)}
                className="inline-flex items-center px-5 py-2.5 bg-white/15 border border-white/25 text-white text-sm font-semibold rounded hover:bg-white/25 transition-colors"
              >
                {about.secondaryAction.label}
              </button>
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
            <h3 className="text-sm uppercase tracking-widest text-white/40 mb-4">Blais Cameron</h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-lg">{about.longBio}</p>
          </div>

          {/* Personal details sidebar */}
          <div className="md:w-64 flex-none">
            <h3 className="text-sm uppercase tracking-widest text-white/40 mb-4">Personal Details</h3>
            <ul className="flex flex-col gap-3">
              {about.details.map(({ label, value }) => (
                <li key={label} className="flex items-baseline gap-3">
                  <span className="text-sm text-white/60 w-28 flex-none">{label}</span>
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
              <tr className="border-b border-white/10 text-left uppercase">
                <th className="pb-3 text-xs text-white/60 font-normal w-16">Year</th>
                <th className="pb-3 text-xs text-white/60 font-normal">Title</th>
                <th className="pb-3 text-xs text-white/60 font-normal">Role</th>
                <th className="pb-3 text-xs text-white/60 font-normal hidden md:table-cell">Award</th>
              </tr>
            </thead>
            <tbody>
              {[...about.credits].sort((a, b) => Number(b.year) - Number(a.year)).map((credit, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-3 text-white/60">{credit.year}</td>
                  <td className="py-3 pr-4">
                    {credit.link ? (
                      <a
                        href={credit.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white group-hover:text-white/80 transition-colors inline-flex items-center gap-1"
                      >
                        {credit.title}
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-40">
                          <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                      </a>
                    ) : (
                      <span className="text-white">{credit.title}</span>
                    )}
                  </td>
                  <td className="py-3 pr-4 text-white/50">{credit.role}</td>
                  <td className="py-3 text-white/90 hidden md:table-cell">{credit.award || '—'}</td>
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
