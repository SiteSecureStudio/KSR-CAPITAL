import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Portfolio } from '../components/Portfolio'
import { Stats } from '../components/Stats'
import { Contact } from '../components/Contact'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Stats />
      <Contact />
    </>
  )
}
