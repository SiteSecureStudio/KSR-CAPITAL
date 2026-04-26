import { useInView } from '../hooks/useInView'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Reveal } from './ui/Reveal'
import { SectionLabel } from './ui/SectionLabel'

interface Value {
  title: string
  desc: string
}

const values: Value[] = [
  { title: 'Discipline', desc: 'Rigorous asset selection grounded in fundamentals.' },
  { title: 'Longevity',  desc: 'Investments built to generate value over decades.' },
  { title: 'Diversity',  desc: 'Five verticals: industrial land, commercial land, strata management, CLQ, and lifestyle venues.' },
  { title: 'Integrity',  desc: 'Transparent dealings with tenants, partners, and stakeholders.' },
]

interface BulletProps {
  text: string
}

function Bullet({ text }: BulletProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-px bg-[#C9A227] mt-3 shrink-0" />
      <p className="text-[#9A9085] text-sm leading-relaxed">{text}</p>
    </div>
  )
}

export function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-8 md:px-12">

        <div ref={ref}>
          <Reveal inView={inView}>
            <SectionLabel>About</SectionLabel>
          </Reveal>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — Ornamental column */}
          <Reveal inView={inView} delay={1}>
            <div
              className="font-display text-[#C9A227] select-none leading-none"
              style={{ fontSize: 'clamp(6rem, 14vw, 11rem)', fontWeight: 300 }}
            >
              KSR
            </div>
            <div className="mt-6 space-y-6">
              <Bullet text="Established with a vision to create lasting value through the development of industrial and commercial land across Malaysia's most active growth corridors." />
              <Bullet text="From strata property management and CLQ setup to pickleball courts and wedding hall operations — our expertise spans every stage of the asset lifecycle." />
            </div>
          </Reveal>

          {/* Right — Main content */}
          <Reveal inView={inView} delay={2}>
            <h2
              className="font-display text-[#E2D9C8] leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, letterSpacing: '-0.01em' }}
            >
              Building Malaysia's<br />
              <em className="text-[#C9A227]" style={{ fontStyle: 'italic' }}>commercial future</em>,<br />
              one asset at a time.
            </h2>

            <Separator className="my-8 bg-[#C9A227]/40 w-12 h-px" />

            <p className="text-[#9A9085] leading-loose text-sm md:text-base font-light mb-6">
              KSR Capital Sdn Bhd is a privately held property firm with deep expertise in industrial and commercial land development, strata property management, and CLQ setup across key growth zones in Malaysia. We take a disciplined, long-term approach — acquiring assets that generate durable income and appreciate meaningfully over time.
            </p>
            <p className="text-[#9A9085] leading-loose text-sm md:text-base font-light mb-10">
              Our portfolio spans industrial and commercial land developments, strata-titled properties under active management, CLQ-structured assets, and lifestyle venues including pickleball courts and a wedding hall — reflecting the full breadth of modern property needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <Card
                  key={v.title}
                  className="rounded-none border-[#242424] bg-[#0F0F0F]/60 backdrop-blur-sm hover:border-[#C9A227]/40 transition-colors duration-300"
                >
                  <CardHeader className="pb-2 pt-5 px-5">
                    <CardTitle className="text-[#C9A227] text-xs font-semibold tracking-widest uppercase">
                      {v.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-5 pb-5">
                    <p className="text-[#9A9085] text-xs leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
