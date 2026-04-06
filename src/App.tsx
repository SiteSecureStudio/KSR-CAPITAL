import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Background } from './components/Background'
import { CursorGlow } from './components/ui/CursorGlow'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { DirectorPage } from './pages/DirectorPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { PropertyPage } from './pages/PropertyPage'
import { ApproachPage } from './pages/ApproachPage'
import { ContactPage } from './pages/ContactPage'
import { PrivacyPage } from './pages/PrivacyPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <CursorGlow />
      <Background />
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/director" element={<DirectorPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<PropertyPage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
