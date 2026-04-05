import { Background } from './components/Background'
import { CursorGlow } from './components/ui/CursorGlow'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Stats } from './components/Stats'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <CursorGlow />
      <Background />
      <Nav />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
