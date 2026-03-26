// Footer — social links + streaming-style sitemap.
//
// Props:
//   instagram, youtube, vimeo — profile URLs (leave blank to hide)

export default function Footer({
  instagram = 'https://www.instagram.com/blaisludwig/',
  youtube = 'https://youtube.com/',
  vimeo = 'https://vimeo.com/',
}) {
  const socials = [
    { label: 'Instagram', href: instagram, Icon: InstagramIcon },
    { label: 'YouTube',   href: youtube,   Icon: YouTubeIcon   },
    { label: 'Vimeo',     href: vimeo,     Icon: VimeoIcon     },
  ].filter(s => s.href)

  return (
    <footer className="border-t border-white/10 px-6 md:px-10 py-12 mt-4">

      {/* Social icons */}
      <div className="flex gap-5 mb-10">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-white/30 hover:text-white/70 transition-colors"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Sitemap-style links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <FooterCol heading="Films" links={[
          { label: 'Clocked Out',    href: '/film/clocked-out'    },
          { label: 'Kissed Ur Mom',  href: '/film/kissed-ur-mom'  },
        ]} />
        <FooterCol heading="About" links={[
          { label: 'Director', href: '/' },
          { label: 'Producer', href: '/' },
          { label: 'Writer',   href: '/' },
        ]} />
        <FooterCol heading="Contact" links={[
          { label: 'Instagram', href: instagram, external: true },
          { label: 'Vimeo',     href: vimeo,     external: true },
        ]} />
        <FooterCol heading="Watch" links={[
          { label: 'Vimeo',   href: vimeo,   external: true },
          { label: 'YouTube', href: youtube, external: true },
        ]} />
      </div>

      {/* Copyright */}
      <p className="text-xs text-white/20">
        © {new Date().getFullYear()} Blais Cameron. All rights reserved.
      </p>

    </footer>
  )
}

function FooterCol({ heading, links }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-widest text-white/30 mb-3">
        {heading}
      </h4>
      <ul className="flex flex-col gap-2">
        {links.map(({ label, href, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ── Icon components ────────────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="20" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.5 6.5C22.2 5.3 21.3 4.4 20.1 4.1C18.4 3.5 12 3.5 12 3.5C12 3.5 5.6 3.5 3.9 4.1C2.7 4.4 1.8 5.3 1.5 6.5C1 8.2 1 12 1 12C1 12 1 15.8 1.5 17.5C1.8 18.7 2.7 19.6 3.9 19.9C5.6 20.5 12 20.5 12 20.5C12 20.5 18.4 20.5 20.1 19.9C21.3 19.6 22.2 18.7 22.5 17.5C23 15.8 23 12 23 12C23 12 23 8.2 22.5 6.5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 15.5L16 12L10 8.5V15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

function VimeoIcon() {
  return (
    <svg width="20" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 7.1C21.9 9.3 20.4 12.2 17.5 16C14.5 20 11.9 22 9.7 22C8.3 22 7.1 20.7 6.1 18.1L4.3 11.5C3.6 8.9 2.8 7.6 1.9 7.6C1.7 7.6 1 8.1 0 9L1 7.9C4 5.2 6.9 3.8 9.7 3.5C11.4 3.3 12.7 4.2 13.5 6.1C14.3 8.1 14.8 9.8 15 11.2C15.6 9 16.5 6.8 17.8 5.6C18.6 4.9 19.5 4.5 20.5 4.5C21.4 4.6 22 5.5 22 7.1Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}
