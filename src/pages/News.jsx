import Navigation from '../components/Navigation'
import CardSection from '../components/CardSection'
import Footer from '../components/Footer'
import { press } from '../data/press'

// News — hidden press page. Reachable at /news but not linked from
// Navigation or Footer. Mirrors the home page's "Commercial Work" row style.

export default function News() {
  return (
    <div className="min-h-screen bg-black">

      <Navigation showBack />

      <div className="pt-28">
        <CardSection title="Press" films={press} variant="press" />
      </div>

      <Footer />

    </div>
  )
}
