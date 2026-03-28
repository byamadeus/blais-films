import { useParams, Navigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import ContentSection from '../components/ContentSection'
import CardSection from '../components/CardSection'
import Footer from '../components/Footer'
import { films, getFilm } from '../data/films'

// Film page — individual film detail.
// Layout (top → bottom):
//   Navigation (back arrow)
//   HeroSection (film still / video)
//   Awards
//   Key Collaborators
//   More About the Film
//   Select Stills
//   More Like This (card row)
//   Footer

export default function Film() {
  const { id } = useParams()
  const film = getFilm(id)

  // 404 fallback — redirect home if film not found
  if (!film) return <Navigate to="/" replace />

  // "More Like This" — all other films
  const moreLikeThis = films.filter((f) => f.id !== film.id)

  return (
    <div className="min-h-screen">

      {/* Nav overlays the hero */}
      <Navigation showBack />

      {/* Hero */}
      <HeroSection
        title={film.title}
        subtitle={[film.year, film.duration, film.roles.join(', ')].filter(Boolean).join(' · ')}
        description={film.logline}
        muxPlaybackId={film.muxPlaybackId}
        backgroundImage={film.heroStill}
        size="large"
        primaryAction={
          film.movieUrl
            ? { label: 'Watch', href: film.movieUrl }
            : null
        }
        secondaryAction={
          film.trailerUrl
            ? { label: 'Trailer', href: film.trailerUrl }
            : null
        }
      />

      {/* ── Below-the-fold content ── */}
      <div className="max-w-4xl">

        {/* Awards */}
        {film.awards?.length > 0 && (
          <ContentSection
            title="Awards"
            type="awards"
            items={film.awards}
          />
        )}

        {/* Key Collaborators */}
        {film.credits?.length > 0 && (
          <ContentSection
            title="Key Collaborators"
            type="credits"
            items={film.credits}
          />
        )}

        {/* More About the Film */}
        {film.description && (
          <ContentSection
            title="More About the Film"
            type="text"
            text={film.description}
          />
        )}

        {/* Mini Doc — embedded player, shown only when miniDocUrl is set */}
        {film.miniDocUrl && (
          <ContentSection
            title="Behind the Scenes"
            type="video"
            url={film.miniDocUrl}
          />
        )}

      </div>

      {/* Select Stills — outside max-w-4xl so the carousel fills full page width */}
      <ContentSection
        title="Select Stills"
        type="stills"
        items={film.stills}
      />

      {/* More Like This — full-width card row */}
      {moreLikeThis.length > 0 && (
        <CardSection title="More Like This" films={moreLikeThis} />
      )}

      <Footer />

    </div>
  )
}
