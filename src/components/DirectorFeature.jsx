import { Link } from 'react-router-dom'

// DirectorFeature — full-width "takeover" block on the home page.
// Links to the About page. Sits between the card row and footer.

export default function DirectorFeature({ headshot, name, tagline }) {
  return (
    <section className="relative mx-6 md:mx-10 my-8 rounded-lg overflow-hidden h-64 md:h-80 bg-black">

      {/* Background layers — declared first, sit underneath the content layer */}
      {headshot && (
        <img
          src={headshot}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover object-top lg:object-center"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

      {/*
        Content layer.
        - relative + z-10: lifts above the absolute background layers
        - h-full: fills the section so flex centering has room to work
        - flex flex-col + justify-center: vertical centering
        - items-start: left-aligns children (cross-axis start)
        Change padding or justify-* to reposition the whole block.
      */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start p-6 md:p-10">

        {/* Inner wrapper — caps line length, stacks children with consistent gap */}
        <div className="flex flex-col items-start max-w-sm gap-2">

          <p className="text-xs uppercase tracking-widest text-white/40">Director</p>
          <h2 className="text-2xl md:text-4xl font-bold text-white">{name}</h2>

          {tagline && (
            <p className="text-sm text-white/60">{tagline}</p>
          )}

          {/*
            self-start stops the link stretching to fill the column width.
            inline-flex keeps it sized to its content.
          */}
          <Link
            to="/about"
            className="mt-2 self-start inline-flex items-center px-4 py-2 bg-white/15 border border-white/25 text-white text-sm font-medium rounded hover:bg-white/25 transition-colors"
          >
            Read More
          </Link>

        </div>
      </div>

    </section>
  )
}
