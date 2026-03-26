import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Home from './pages/Home'
import Film from './pages/Film'
import About from './pages/About'

// Scrolls to the top whenever the route changes (including back/forward)
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <Analytics />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:id" element={<Film />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
