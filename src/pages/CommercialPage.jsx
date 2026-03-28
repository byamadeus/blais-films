import { useParams, Navigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import ContentSection from '../components/ContentSection'
import CardSection from '../components/CardSection'
import Footer from '../components/Footer'
import { commercials, getCommercial } from '../data/films'

// Commercial page — individual commercial detail.
// Layout (top → bottom):
//   Navigation (back arrow)
//   HeroSection (commercial still / video)
//   Awards
//   Key Collaborators
//   More About the Film
//   Select Stills
//   More Like This (card row)
//   Footer

export default function Commercial() {
  const { id } = useParams()
  const commercial = getCommercial(id)

  // 404 fallback — redirect home if commercial not found
  if (!commercial) return <Navigate to="/" replace />

  // "More Like This" — all other commercials
  const moreLikeThis = commercials.filter((c) => c.id !== commercial.id)

  return (
    <div className="min-h-screen">

      {/* Nav overlays the hero */}
      <Navigation showBack />

      {/* Hero */}
      <HeroSection
        title={commercial.title}
        subtitle={[commercial.year, commercial.roles.join(', ')].filter(Boolean).join(' · ')}
        description={commercial.overview}
        muxPlaybackId={commercial.muxPlaybackId}
        backgroundImage={commercial.thumbnail}
        size="large"
        primaryAction={
          commercial.movieUrl
            ? { label: 'Watch', href: commercial.movieUrl }
            : null
        }
      />

      {/* ── Below-the-fold content ── */}
      <div className="max-w-4xl">

        {/* Awards */}
        {commercial.awards?.length > 0 && (
          <ContentSection
            title="Awards"
            type="awards"
            items={commercial.awards}
          />
        )}

        {/* Key Collaborators */}
        {commercial.credits?.length > 0 && (
          <ContentSection
            title="Key Collaborators"
            type="credits"
            items={commercial.credits}
          />
        )}

        {/* More About the Film */}
        {commercial.blaisOverview && (
          <ContentSection
            title="More about the work"
            type="text"
            text={commercial.blaisOverview}
          />
        )}

      </div>

      {/* Select Stills — outside max-w-4xl so the carousel fills full page width */}
      <ContentSection
        title="Select Stills"
        type="stills"
        items={commercial.stills}
      />

      {/* More Like This — commercial variant */}
      {moreLikeThis.length > 0 && (
        <CardSection title="More Like This" films={moreLikeThis} variant="commercial" />
      )}

      <Footer />

    </div>
  )
}
