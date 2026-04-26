import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { GoldDivider } from '../components/ui/GoldDivider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowRight } from 'lucide-react'

const pillars = [
  {
    word: 'Invest.',
    desc: 'Capital allocation is our first discipline. Before any acquisition, we conduct rigorous due diligence — evaluating market position, income durability, tenant profile, and macro trends. We operate with patience: willing to wait months for the right deal rather than deploy capital into a subpar asset.',
  },
  {
    word: 'Develop.',
    desc: 'We develop industrial and commercial land from the ground up — structuring each project to maximise yield, occupancy, and long-term value. From site planning and contractor coordination through to strata titling and CLQ establishment, we manage the full development process with discipline and precision.',
  },
  {
    word: 'Management.',
    desc: 'Active, hands-on management is our edge. We administer strata properties in full compliance with the Strata Management Act, set up and run CLQ (Communal Land Quit Rent) arrangements for shared-title assets, and operate lifestyle venues — including pickleball courts and a wedding hall — to the same performance standard we apply to every asset in our portfolio.',
  },
]

const criteria = [
  {
    title: 'Location Fundamentals',
    desc: 'We look for assets in areas with proven demand drivers — proximity to major roads, established commercial activity, growing population density, and improving infrastructure. Location is the one thing we cannot change about a property.',
  },
  {
    title: 'Income Durability',
    desc: 'We prioritise assets with strong tenancy prospects — properties suited to essential business activities rather than discretionary or cyclical tenants. Our shoplots and industrial units serve businesses that need to operate regardless of the economic climate.',
  },
  {
    title: 'Appreciation Potential',
    desc: 'Every acquisition is evaluated for its long-term value trajectory. We identify growth corridors early — areas where infrastructure investment, rezoning, or commercial densification will drive meaningful capital appreciation over a 5–10 year horizon.',
  },
  {
    title: 'Operational Practicality',
    desc: 'We only acquire assets we can manage effectively. This means properties within our geographic focus (Klang Valley), in asset classes we understand deeply, and at a scale where we can maintain direct oversight of tenant relationships and property condition.',
  },
]

const assetClasses = [
  {
    type: 'Industrial Land',
    role: 'Growth Engine',
    desc: 'Industrial real estate is Malaysia\'s fastest-growing segment, driven by logistics expansion, e-commerce growth, and manufacturing relocation. We develop industrial land from the ground up — delivering flexible units in strategic logistics corridors that attract long-term occupiers.',
  },
  {
    type: 'Commercial Land',
    role: 'Income Bedrock',
    desc: 'Commercial land development anchors our portfolio with high-footfall, high-occupancy assets. We design and deliver commercial units in established and emerging townships, with strata titling and professional management built into every project from day one.',
  },
  {
    type: 'Strata & CLQ Management',
    role: 'Operational Core',
    desc: 'We manage strata-titled properties in full compliance with the Strata Management Act — handling JMB/MC setup, maintenance funds, service charge collection, and owner relations. We also administer CLQ (Communal Land Quit Rent) arrangements, structuring shared-title assets for clarity, compliance, and equitable cost allocation.',
  },
  {
    type: 'Pickleball Courts',
    role: 'Lifestyle Asset',
    desc: 'Pickleball is Malaysia\'s fastest-growing recreational sport, and we are ahead of the curve. Our Kampung Pandan facility is purpose-built for performance and community — delivering reliable rental income while meeting genuine demand in the urban lifestyle market.',
  },
  {
    type: 'Wedding Hall',
    role: 'Event Venue',
    desc: 'Our premium wedding hall and event venue brings lifestyle income to our portfolio through a high-demand, relationship-driven market. Professionally managed with a focus on guest experience, the venue builds community goodwill and generates consistent bookings year-round.',
  },
]

const tenantBenefits = [
  'Well-maintained properties with prompt maintenance response',
  'Transparent lease terms with no hidden costs',
  'Strategic locations that maximise your business\'s visibility and accessibility',
  'Flexible unit configurations suited to a range of business operations',
  'A landlord who views your success as integral to our own',
]

export function ApproachPage() {
  const { ref: heroRef, inView: heroInView } = useInView()
  const { ref: pillarsRef, inView: pillarsInView } = useInView()
  const { ref: criteriaRef, inView: criteriaInView } = useInView()
  const { ref: classesRef, inView: classesInView } = useInView()
  const { ref: tenantRef, inView: tenantInView } = useInView()

  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-28">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={heroRef}>
            <Reveal inView={heroInView}>
              <SectionLabel>Our Approach</SectionLabel>
            </Reveal>
            <Reveal inView={heroInView} delay={1}>
              <h1
                className="font-display text-[#E2D9C8] mt-6 leading-tight"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
              >
                Disciplined capital.<br />
                <em className="text-[#C9A227] italic">Long-term thinking.</em>
              </h1>
            </Reveal>
            <Reveal inView={heroInView} delay={2} className="mt-8 max-w-2xl">
              <p className="text-[#9A9085] leading-loose text-base md:text-lg font-light">
                KSR Capital's investment philosophy is built on a simple but demanding principle:
                acquire assets of genuine quality in proven locations, manage them with care, and hold
                them long enough for compounding returns to do their work. We resist the temptation
                of short-term speculation in favour of durable, income-generating real estate.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      {/* ── Invest. Develop. Manage. ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={pillarsRef}>
            <Reveal inView={pillarsInView}>
              <SectionLabel>Our Framework</SectionLabel>
              <h2
                className="font-display text-[#E2D9C8] mt-4 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '-0.01em' }}
              >
                Three words.<br />
                <em className="text-[#C9A227] italic">One discipline.</em>
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 space-y-0 divide-y divide-[#242424] border-y border-[#242424]">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.word} inView={pillarsInView} delay={(i + 1) as 1 | 2 | 3}>
                <div className="py-12 grid md:grid-cols-3 gap-8 items-start">
                  <div>
                    <div
                      className="font-display text-[#C9A227]"
                      style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
                    >
                      {pillar.word}
                    </div>
                    <div className="mt-3">
                      <GoldDivider />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-[#9A9085] leading-loose text-sm md:text-base font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      {/* ── Asset Selection Criteria ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={criteriaRef}>
            <Reveal inView={criteriaInView}>
              <SectionLabel>Asset Selection</SectionLabel>
              <h2
                className="font-display text-[#E2D9C8] mt-4 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '-0.01em' }}
              >
                What makes an asset<br />
                <em className="text-[#C9A227] italic">worthy of our portfolio</em>
              </h2>
              <p className="text-[#9A9085] text-sm leading-relaxed mt-6 max-w-xl">
                We evaluate every potential acquisition against four core criteria. All four must be
                satisfied — a great location in a poorly-suited asset class is not a KSR investment.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {criteria.map((c, i) => (
              <Reveal key={c.title} inView={criteriaInView} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <Card className="rounded-none border-[#242424] bg-[#0F0F0F]/60 backdrop-blur-sm hover:border-[#C9A227]/40 transition-colors duration-300 h-full">
                  <CardHeader className="pb-3 pt-7 px-7">
                    <div className="mb-4"><GoldDivider /></div>
                    <CardTitle className="text-[#C9A227] text-xs font-semibold tracking-widest uppercase">
                      {c.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-7 pb-7">
                    <p className="text-[#9A9085] text-sm leading-relaxed">{c.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      {/* ── Asset Class Strategy ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={classesRef}>
            <Reveal inView={classesInView}>
              <SectionLabel>Asset Class Strategy</SectionLabel>
              <h2
                className="font-display text-[#E2D9C8] mt-4 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '-0.01em' }}
              >
                Five verticals.<br />
                <em className="text-[#C9A227] italic">One resilient portfolio.</em>
              </h2>
              <p className="text-[#9A9085] text-sm leading-relaxed mt-6 max-w-xl">
                Our five verticals span the full property value chain — from land development and strata
                management to CLQ administration and lifestyle venue operations. Together, they create
                a portfolio that generates income across multiple market conditions.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y divide-[#242424] border border-[#242424]">
            {assetClasses.map((ac, i) => (
              <Reveal key={ac.type} inView={classesInView} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="p-8 md:p-10 border-r border-[#242424] last:border-r-0">
                  <span className="text-[#9A9085] text-xs tracking-widest uppercase">{ac.role}</span>
                  <div
                    className="font-display text-[#C9A227] mt-2 mb-4"
                    style={{ fontSize: '1.8rem', fontWeight: 300 }}
                  >
                    {ac.type}
                  </div>
                  <GoldDivider />
                  <p className="text-[#9A9085] text-sm leading-relaxed mt-5">{ac.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      {/* ── For Tenants ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={tenantRef} className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal inView={tenantInView}>
              <SectionLabel>For Tenants</SectionLabel>
              <h2
                className="font-display text-[#E2D9C8] mt-4 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '-0.01em' }}
              >
                What we offer<br />
                <em className="text-[#C9A227] italic">every tenant</em>
              </h2>
              <p className="text-[#9A9085] text-sm leading-relaxed mt-6">
                Our investment philosophy directly shapes the experience of every business that
                occupies our properties. Our long-term holding approach means we have every incentive
                to keep our properties excellent and our tenants successful.
              </p>
            </Reveal>

            <Reveal inView={tenantInView} delay={2}>
              <div className="space-y-5 mt-2">
                {tenantBenefits.map((b) => (
                  <div key={b} className="flex items-start gap-4">
                    <div className="w-6 h-px bg-[#C9A227] mt-3 shrink-0" />
                    <p className="text-[#9A9085] text-sm leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 text-[#C9A227] text-sm tracking-wide hover:gap-4 transition-all duration-200"
                >
                  Enquire about a property
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
