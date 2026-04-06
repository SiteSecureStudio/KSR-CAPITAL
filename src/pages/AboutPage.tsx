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
    desc: 'Our portfolio deliberately spans three distinct asset classes: commercial retail, industrial operations, and lifestyle facilities. This cross-class diversification provides resilience — when one sector faces headwinds, others provide stability.',
  },
  {
    title: 'Integrity',
    desc: 'We operate with full transparency toward our tenants, business partners, and stakeholders. Our commitments are kept, our terms are clear, and our relationships are built on mutual respect. Reputation is an asset we guard as carefully as any property.',
  },
]

const milestones = [
  { year: '2019', event: 'Company established', detail: 'KSR Capital Sdn Bhd (764906-W) incorporated in Malaysia, beginning with a focused mandate in commercial real estate across the Klang Valley.' },
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
                KSR Capital Sdn Bhd is a privately held property investment firm focused on commercial
                and industrial real estate across key growth zones in Malaysia. Established in 2019 and
                registered under SSM (764906-W), we take a disciplined, long-term approach to asset
                selection — seeking properties that generate durable income and appreciate meaningfully
                over time.
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
                      Established with a vision to create lasting value through strategic property investment across Malaysia's most active economic corridors.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-px bg-[#C9A227] mt-3 shrink-0" />
                    <p className="text-[#9A9085] text-sm leading-relaxed">
                      From commercial shoplots to industrial units and recreational facilities — we identify, acquire, and manage assets built to perform across market cycles.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-px bg-[#C9A227] mt-3 shrink-0" />
                    <p className="text-[#9A9085] text-sm leading-relaxed">
                      Our operations are centred in Kuala Lumpur and Selangor — Malaysia's twin economic engines — where demand for quality commercial and industrial space continues to grow.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal inView={heroInView} delay={3}>
              <p className="text-[#9A9085] leading-loose text-sm md:text-base font-light mb-6">
                Our portfolio spans double-storey shoplots in established townships, industrial
                facilities in strategic logistics corridors, and lifestyle assets that reflect
                the evolving needs of modern communities. Each asset is selected for its ability
                to generate consistent returns while building long-term capital appreciation.
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
                <p className="text-[#9A9085] text-sm mt-1">Incorporated in Malaysia · SSM Registered</p>
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
                Five years of<br />
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
                leasing, and tenant relations across the Klang Valley. Over five years, we have
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
