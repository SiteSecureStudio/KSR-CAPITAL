import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Portfolio } from '../components/Portfolio'
import { Stats } from '../components/Stats'
import { Contact } from '../components/Contact'
import { SEO } from '../components/SEO'
import { organizationSchema, websiteSchema } from '../data/schema'

export function HomePage() {
  return (
    <>
      <SEO
        title="KSR Capital Sdn Bhd — Property Investment & Development, Malaysia"
        description="KSR Capital Sdn Bhd is a premier Malaysian property firm specialising in industrial and commercial land development, strata management, CLQ setup, and lifestyle venues across Kuala Lumpur and Selangor. Est. 2007 (SSM 764906-W)."
        canonical="/"
        schema={[organizationSchema, websiteSchema]}
      />
      <Hero />
      <About />
      <Portfolio />
      <Stats />
      <Contact />
    </>
  )
}
