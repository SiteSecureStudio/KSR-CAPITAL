import { SEO } from '../components/SEO'
import { organizationSchema, breadcrumbSchema } from '../data/schema'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { GoldDivider } from '../components/ui/GoldDivider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowRight } from 'lucide-react'

interface Value {
  title: string
  desc: string
}

const values: Value[] = [
  {
    title: 'Discipline',
    desc: 'Every asset in our portfolio is the result of rigorous due diligence. We evaluate each opportunity against strict criteria — location fundamentals, income durability, tenant quality, and long-term appreciation potential. We walk away from more deals than we pursue.',
  },
  {
    title: 'Longevity',
    desc: 'We are not a trading house. We acquire assets with the intention of holding them over decades, allowing compounding returns to do their work. Our investment horizon is measured in years, not quarters — and our tenant relationships reflect that same commitment.',
  },
  {
    title: 'Diversity',
    desc: 'Our expertise spans five verticals: industrial land development, commercial land development, strata property management, CLQ setup and administration, and lifestyle venues. This breadth provides resilience and multiple income streams across market cycles.',
  },
  {
    title: 'Integrity',
    desc: 'We operate with full transparency toward our tenants, business partners, and stakeholders. Our commitments are kept, our terms are clear, and our relationships are built on mutual respect. Reputation is an asset we guard as carefully as any property.',
  },
]

const milestones = [
  { year: '2007', event: 'Company incorporated', detail: 'KSR Capital Sdn Bhd (764906-W) incorporated in Malaysia on 8 March 2007, establishing our foundation in property investment across the Klang Valley.' },
  { year: '2020', event: 'First commercial acquisition', detail: 'Secured our first shoplot development in Kampung Baru, Kuala Lumpur — a 10-unit double-storey terrace that established our commercial asset foundation.' },
  { year: '2021', event: 'Industrial expansion', detail: 'Entered the industrial segment with the 32-unit Rinching development in Selangor, diversifying the portfolio across two asset classes and two markets.' },
  { year: '2022', event: 'KL industrial landmark', detail: 'Completed the Sungai Besi industrial complex — a 5-storey, 6-unit development that marked our move into premium vertical industrial space.' },
  { year: '2023', event: 'Lifestyle portfolio entry', detail: 'Developed the Kampung Pandan Pickleball Court facility, broadening our asset class exposure to include community-focused lifestyle real estate.' },
]

function MilestoneItem({ year, event, detail, inView, delay }: { year: string; event: string; detail: string; inView: boolean; delay: 1 | 2 | 3 | 4 }) {
  return (
    <Reveal inView={inView} delay={delay}>
      <div className="flex gap-8 group">
        <div className="flex flex-col items-center">
          <div
            className="w-px flex-1 bg-[#242424] group-first:hidden"
            style={{ minHeight: '24px' }}
          />
          <div className="w-2 h-2 rounded-full bg-[#C9A227] shrink-0 my-2" />
          <div className="w-px flex-1 bg-[#242424] group-last:hidden" />
        </div>
        <div className="pb-10">
          <span className="font-display text-[#C9A227] text-sm tracking-widest">{year}</span>
          <h3 className="font-display text-[#E2D9C8] mt-1 mb-2" style={{ fontSize: '1.15rem', fontWeight: 400 }}>
            {event}
          </h3>
          <p className="text-[#9A9085] text-sm leading-relaxed max-w-lg">{detail}</p>
        </div>
      </div>
    </Reveal>
  )
}

export function AboutPage() {
  const { ref: heroRef, inView: heroInView } = useInView()
  const { ref: valuesRef, inView: valuesInView } = useInView()
  const { ref: milestoneRef, inView: milestoneInView } = useInView()
  const { ref: teamRef, inView: teamInView } = useInView()

  return (
    <>
      <SEO
        title="About KSR Capital — Malaysian Property Investment Firm Since 2007"
        description="KSR Capital Sdn Bhd (SSM 764906-W) has built a diversified property portfolio across 5 verticals since 2007 — industrial land, commercial land, strata management, CLQ setup, and lifestyle venues in KL and Selangor."
        canonical="/about"
        schema={[organizationSchema, breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }])]}
      />
      {/* ── Page Header ── */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-28">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={heroRef}>
            <Reveal inView={heroInView}>
              <SectionLabel>About KSR Capital</SectionLabel>
            </Reveal>
            <Reveal inView={heroInView} delay={1}>
              <h1
                className="font-display text-[#E2D9C8] mt-6 leading-tight"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
              >
                Building Malaysia's<br />
                <em className="text-[#C9A227] italic">commercial future</em>,<br />
                one asset at a time.
              </h1>
            </Reveal>
            <Reveal inView={heroInView} delay={2} className="mt-8 max-w-2xl">
              <p className="text-[#9A9085] leading-loose text-base md:text-lg font-light">
                KSR Capital Sdn Bhd is a privately held property firm specialising in industrial and commercial land development, strata property management, and CLQ setup across key growth zones in Malaysia. Incorporated on 8 March 2007 and registered under SSM (764906-W), we combine disciplined asset selection with hands-on operational expertise across five distinct verticals.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      {/* ── Company Story ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <Reveal inView={heroInView} delay={1}>
                <div
                  className="font-display text-[#C9A227] select-none leading-none"
                  style={{ fontSize: 'clamp(5rem, 12vw, 9rem)', fontWeight: 300, opacity: 0.8 }}
                >
                  KSR
                </div>
              </Reveal>
              <Reveal inView={heroInView} delay={2}>
                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-px bg-[#C9A227] mt-3 shrink-0" />
                    <p className="text-[#9A9085] text-sm leading-relaxed">
                      Built on a foundation of industrial and commercial land development — identifying growth corridors early and delivering well-structured assets that perform over the long term.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-px bg-[#C9A227] mt-3 shrink-0" />
                    <p className="text-[#9A9085] text-sm leading-relaxed">
                      Beyond development, we manage strata properties end-to-end, administer CLQ structures, and operate lifestyle venues — including pickleball courts and a wedding hall — that serve the evolving needs of urban communities.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-px bg-[#C9A227] mt-3 shrink-0" />
                    <p className="text-[#9A9085] text-sm leading-relaxed">
                      Centred in Kuala Lumpur and Selangor — Malaysia's twin economic engines — where demand for quality industrial space, managed strata assets, and lifestyle infrastructure continues to grow.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal inView={heroInView} delay={3}>
              <p className="text-[#9A9085] leading-loose text-sm md:text-base font-light mb-6">
                Our portfolio spans industrial and commercial land developments, strata-titled properties under active management, CLQ-structured assets, pickleball courts, and a wedding hall. Each asset is selected and operated for its ability to generate consistent returns while building long-term capital appreciation.
              </p>
              <p className="text-[#9A9085] leading-loose text-sm md:text-base font-light mb-8">
                We work closely with tenants to ensure our properties remain fully occupied and
                well-maintained — recognising that tenant success directly translates into portfolio
                performance. This hands-on, relationship-driven approach sets us apart from passive
                investment vehicles.
              </p>
              <div className="pt-6 border-t border-[#242424]">
                <p className="text-[#9A9085] text-xs tracking-widest uppercase mb-2">Company Registration</p>
                <p className="font-display text-[#E2D9C8]" style={{ fontSize: '1.1rem' }}>
                  KSR Capital Sdn Bhd · 764906-W
                </p>
                <p className="text-[#9A9085] text-sm mt-1">Incorporated 8 March 2007 · SSM Registered</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      {/* ── Core Values ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={valuesRef}>
            <Reveal inView={valuesInView}>
              <SectionLabel>Our Values</SectionLabel>
              <h2
                className="font-display text-[#E2D9C8] mt-4 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '-0.01em' }}
              >
                The principles that<br />
                <em className="text-[#C9A227] italic">guide every decision</em>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {values.map((v, i) => (
              <Reveal key={v.title} inView={valuesInView} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <Card className="rounded-none border-[#242424] bg-[#0F0F0F]/60 backdrop-blur-sm hover:border-[#C9A227]/40 transition-colors duration-300 h-full">
                  <CardHeader className="pb-3 pt-7 px-7">
                    <div className="mb-4">
                      <GoldDivider />
                    </div>
                    <CardTitle className="text-[#C9A227] text-xs font-semibold tracking-widest uppercase">
                      {v.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-7 pb-7">
                    <p className="text-[#9A9085] text-sm leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      {/* ── Milestones ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={milestoneRef}>
            <Reveal inView={milestoneInView}>
              <SectionLabel>Our Journey</SectionLabel>
              <h2
                className="font-display text-[#E2D9C8] mt-4 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '-0.01em' }}
              >
                19+ years of<br />
                <em className="text-[#C9A227] italic">deliberate growth</em>
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 max-w-2xl">
            {milestones.map((m, i) => (
              <MilestoneItem
                key={m.year}
                {...m}
                inView={milestoneInView}
                delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}
              />
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      {/* ── Team Philosophy ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={teamRef} className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal inView={teamInView}>
              <SectionLabel>Our Team</SectionLabel>
              <h2
                className="font-display text-[#E2D9C8] mt-4 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '-0.01em' }}
              >
                Experience that<br />
                <em className="text-[#C9A227] italic">speaks through results</em>
              </h2>
            </Reveal>
            <Reveal inView={teamInView} delay={2}>
              <p className="text-[#9A9085] leading-loose text-sm md:text-base font-light mb-6">
                Our team brings deep, collective expertise in property acquisition, asset management,
                leasing, and tenant relations across the Klang Valley. Over 19 years, we have
                cultivated strong relationships with contractors, legal advisors, and local authorities
                that give us a meaningful edge in deal sourcing and execution.
              </p>
              <p className="text-[#9A9085] leading-loose text-sm md:text-base font-light mb-10">
                We are a lean, focused team — and deliberately so. Our size allows us to move quickly,
                maintain close oversight of every asset, and build genuine relationships with every
                tenant and partner we work with.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-[#C9A227] text-sm tracking-wide hover:gap-4 transition-all duration-200"
              >
                Connect with us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
