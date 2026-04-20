import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import CardSection from '../components/CardSection'
import DirectorFeature from '../components/DirectorFeature'
import Footer from '../components/Footer'
import { director, films, commercials } from '../data/films'
import { about } from '../data/about'

// Home page — director portfolio landing.
// Mirrors the Netflix home: full-height hero, card row below.

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Nav overlays the hero */}
      <Navigation showBack={false} />

      {/* Hero: showreel video or director still */}
      <HeroSection
        title={director.name}
        subtitle={director.roles.join(', ')}
        description={director.bio}
        // muxPlaybackId={director.muxPlaybackId}
        backgroundImage={director.heroStill}
        size="full"
        // loadEffect="none"
        // No buttons on the home hero — just identity
      />

      {/* Film card row — negative margin pulls it up over the hero's bottom fade */}
      <div className="relative z-10 -mt-64">
        <CardSection title="Featured Narratives" films={films} />
      </div>

      {/* Commercial work row */}
      <CardSection title="Commercial Work" films={commercials} variant="commercial" />

      {/* Director feature — takeover block linking to About page */}
      <DirectorFeature
        headshot={about.headshot}
        name="About Blais"
        tagline={about.shortBio}
      />

      <Footer />

    </div>
  )
}
