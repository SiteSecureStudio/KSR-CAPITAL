import { SEO } from '../components/SEO'
import { breadcrumbSchema } from '../data/schema'
import directorImg from '../../brand assests/Director Image.jpeg'
import { useInView } from '../hooks/useInView'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { GoldDivider } from '../components/ui/GoldDivider'
import { Separator } from '@/components/ui/separator'

const credentials = [
  {
    label: 'Education',
    value: 'Civil Engineering',
    sub: 'Federal Institute of Technology',
  },
  {
    label: 'Early Career',
    value: 'Civil Engineer',
    sub: 'Hazama Corporation',
  },
  {
    label: 'Experience',
    value: '20+ Years',
    sub: 'Property Development & Civil Engineering',
  },
  {
    label: 'Current Role',
    value: 'Director',
    sub: 'KSR Capital Sdn. Bhd.',
  },
]

export function DirectorPage() {
  const { ref: heroRef, inView: heroInView } = useInView()
  const { ref: letterRef, inView: letterInView } = useInView()
  const { ref: credsRef, inView: credsInView } = useInView()

  return (
    <>
      <SEO
        title="Our Director — KSR Capital Sdn Bhd Leadership"
        description="Meet the director of KSR Capital Sdn Bhd, leading Malaysia's premier property investment firm across industrial land, commercial development, strata management, and lifestyle venues since 2007."
        canonical="/about/director"
        schema={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }, { name: 'Director', url: '/about/director' }])}
      />
      {/* ── Page Header ── */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-28">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={heroRef}>
            <Reveal inView={heroInView}>
              <SectionLabel>Leadership</SectionLabel>
            </Reveal>
            <Reveal inView={heroInView} delay={1}>
              <h1
                className="font-display text-[#E2D9C8] mt-6 leading-tight"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
              >
                Meet the<br />
                <em className="text-[#C9A227] italic">Director</em>
              </h1>
            </Reveal>
            <Reveal inView={heroInView} delay={2} className="mt-8 max-w-2xl">
              <p className="text-[#9A9085] leading-loose text-base md:text-lg font-light">
                Over two decades of hands-on expertise in property development and civil engineering,
                driving KSR Capital's vision of constructing spaces that inspire, connect, and
                enrich communities across Malaysia.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      {/* ── Director Profile ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

            {/* Left — visual identity block */}
            <Reveal inView={heroInView} delay={1}>
              <div className="relative">
                {/* Director photo */}
                <div
                  className="relative mb-6 overflow-hidden"
                  style={{ aspectRatio: '3/4' }}
                >
                  <img
                    src={directorImg}
                    alt="Mr. Sivabalan — Director, KSR Capital"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%', filter: 'brightness(0.88) contrast(1.05)' }}
                  />
                  {/* Gold-tinted gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 50%, rgba(10,8,5,0.7) 100%)',
                    }}
                  />
                </div>

                {/* Name plate */}
                <div
                  className="relative border border-[#C9A227]/20 bg-[#0F0F0F]/60 p-8 backdrop-blur-sm"
                  style={{ boxShadow: '0 0 60px rgba(201,162,39,0.04)' }}
                >
                  {/* Gold accent bar — full height of name plate */}
                  <div className="absolute -left-px top-0 bottom-0 w-px bg-[#C9A227]" style={{ opacity: 0.6 }} />
                  <div className="mb-6">
                    <GoldDivider />
                  </div>
                  <p className="text-[#C9A227] text-xs tracking-widest uppercase font-semibold mb-1">Director</p>
                  <h2
                    className="font-display text-[#E2D9C8] leading-tight"
                    style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.01em' }}
                  >
                    Mr. Sivabalan
                  </h2>
                  <p className="text-[#9A9085] text-sm mt-2 tracking-wide">KSR Capital Sdn. Bhd.</p>

                  <div className="mt-8 pt-6 border-t border-[#242424] space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-px bg-[#C9A227] mt-2.5 shrink-0" />
                      <p className="text-[#9A9085] text-sm leading-relaxed">
                        Civil Engineering graduate from the Federal Institute of Technology.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-px bg-[#C9A227] mt-2.5 shrink-0" />
                      <p className="text-[#9A9085] text-sm leading-relaxed">
                        Began career as a Civil Engineer at Hazama Corporation, mastering project management and operational excellence.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-px bg-[#C9A227] mt-2.5 shrink-0" />
                      <p className="text-[#9A9085] text-sm leading-relaxed">
                        Over two decades building landmark developments across Malaysia's property landscape.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>

            {/* Right — letter */}
            <div ref={letterRef}>
              <Reveal inView={letterInView}>
                <p className="text-[#9A9085] text-sm tracking-widest uppercase mb-8">Director's Introduction</p>
                <p className="text-[#6B6560] text-sm mb-6 italic">Dear Valued Partners,</p>

                <div className="space-y-5">
                  <p className="text-[#9A9085] leading-loose text-sm md:text-base font-light">
                    It is my privilege to welcome you to KSR Capital. As the Director, I bring over
                    two decades of hands-on experience in the property development and civil
                    engineering sectors. My journey began with a degree in Civil Engineering from
                    the Federal Institute of Technology, which laid the foundation for my career.
                    Starting as a Civil Engineer at Hazama Corporation, I gained invaluable insights
                    into project management and operational excellence.
                  </p>
                  <p className="text-[#9A9085] leading-loose text-sm md:text-base font-light">
                    At KSR Capital, my mission is to go beyond building structures — we aim to
                    construct facilities that inspire, connect, and unify communities. Whether it's
                    designing commercial spaces that foster business opportunities or creating sports
                    facilities that encourage active lifestyles, each project reflects our dedication
                    to innovation and sustainability.
                  </p>
                  <p className="text-[#9A9085] leading-loose text-sm md:text-base font-light">
                    I invite you to explore our portfolio to see how our projects are transforming
                    landscapes and enriching lives. Together, we can shape the future of property
                    development.
                  </p>
                </div>

                {/* Signature block */}
                <div className="mt-10 pt-8 border-t border-[#242424]">
                  <p className="text-[#6B6560] text-sm mb-3">Warm Regards,</p>
                  <p
                    className="font-display text-[#C9A227]"
                    style={{ fontSize: '1.6rem', fontWeight: 300, fontStyle: 'italic', letterSpacing: '0.02em' }}
                  >
                    Sivabalan
                  </p>
                  <p className="text-[#E2D9C8] text-sm font-semibold mt-2 tracking-wide">Mr. Sivabalan</p>
                  <p className="text-[#9A9085] text-xs tracking-widest uppercase mt-1">Director · KSR Capital Sdn. Bhd.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      {/* ── Credentials Grid ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={credsRef}>
            <Reveal inView={credsInView}>
              <SectionLabel>Background</SectionLabel>
              <h2
                className="font-display text-[#E2D9C8] mt-4 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '-0.01em' }}
              >
                Experience that<br />
                <em className="text-[#C9A227] italic">speaks for itself</em>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-14 border border-[#242424]">
            {credentials.map((c, i) => (
              <Reveal key={c.label} inView={credsInView} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="bg-[#0A0A0A] p-8 hover:bg-[#0F0F0F] transition-colors duration-300 h-full flex flex-col">
                  <p className="text-[#C9A227] text-xs tracking-widest uppercase font-semibold mb-4">{c.label}</p>
                  <p className="font-display text-[#E2D9C8] leading-tight mb-2" style={{ fontSize: '1.05rem', fontWeight: 400 }}>
                    {c.value}
                  </p>
                  <p className="text-[#6B6560] text-xs leading-relaxed mt-auto pt-2">{c.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
