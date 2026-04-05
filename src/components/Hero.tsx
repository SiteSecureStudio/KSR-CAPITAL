import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowRight } from 'lucide-react'

interface StatItem {
  value: string
  label: string
}

const stats: StatItem[] = [
  { value: '4',  label: 'Properties' },
  { value: '5+', label: 'Years Active' },
  { value: 'KL', label: 'Based' },
  { value: '2',  label: 'Asset Classes' },
]

function FadeIn({ children, loaded, delay = '0s', className = '' }: {
  children: React.ReactNode
  loaded: boolean
  delay?: string
  className?: string
}) {
  return (
    <div
      className={className}
      style={{
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}`,
      }}
    >
      {children}
    </div>
  )
}

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="hero-glow relative flex flex-col justify-center min-h-screen">

      {/* Subtle horizontal grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,162,39,0.025) 1px, transparent 1px)',
          backgroundSize: '100% 96px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-8 md:px-12 pt-24 md:pt-32 pb-12">

        <FadeIn loaded={loaded} className="mb-10">
          <Badge
            variant="outline"
            className="border-[#C9A227]/40 text-[#C9A227] bg-[#C9A227]/5 rounded-none text-[0.65rem] tracking-[0.2em] uppercase font-semibold px-3 py-1"
          >
            KSR Capital Sdn Bhd — Kuala Lumpur, Malaysia
          </Badge>
        </FadeIn>

        <FadeIn loaded={loaded} delay="0.1s" className="gold-rule">
          <h1
            className="font-display text-cream leading-none mb-0"
            style={{
              fontSize: 'clamp(3.2rem, 7.5vw, 7rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.04,
            }}
          >
            Invest.<br />
            <em style={{ fontStyle: 'italic', color: '#C9A227' }}>Develop.</em><br />
            Deliver.
          </h1>
        </FadeIn>

        <FadeIn loaded={loaded} delay="0.3s" className="mt-10 max-w-xl">
          <p className="text-cream-dim leading-relaxed text-base md:text-lg font-light">
            A premier property investment firm building long-term value through
            commercial, industrial, and lifestyle assets across Malaysia.
          </p>
        </FadeIn>

        <FadeIn loaded={loaded} delay="0.45s" className="flex flex-wrap items-center gap-4 mt-10">
          <Button
            asChild
            className="bg-[#C9A227] text-[#080808] hover:bg-[#E8C964] rounded-none px-7 py-3.5 h-auto text-sm font-semibold tracking-wide transition-colors duration-300"
          >
            <a href="#portfolio" className="inline-flex items-center gap-2.5">
              Explore Portfolio
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-[#242424] text-[#9A9085] bg-transparent hover:border-[#C9A227] hover:text-[#E2D9C8] rounded-none px-7 py-3.5 h-auto text-sm font-medium tracking-wide transition-colors duration-300"
          >
            <a href="#about">Our Story</a>
          </Button>
        </FadeIn>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 border-t border-[#242424]"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1.1s ease 0.65s' }}
      >
        <div className="max-w-6xl mx-auto w-full px-8 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={[
                  'py-7 pr-4 md:pr-8',
                  i === 0 || i === 2 ? 'border-r border-[#242424]' : '',
                  i === 1 ? 'md:border-r md:border-[#242424]' : '',
                ].join(' ')}
              >
                <div className="font-display text-[#C9A227] leading-none" style={{ fontSize: '2rem', fontWeight: 500 }}>
                  {stat.value}
                </div>
                <div className="text-[#9A9085] text-xs tracking-widest uppercase mt-1.5 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-12 hidden md:flex items-center gap-3"
        style={{ opacity: loaded ? 0.45 : 0, transition: 'opacity 1.2s ease 0.9s' }}
      >
        <Separator orientation="vertical" className="h-12 bg-[#C9A227]/30" />
        <span className="text-[#9A9085] text-xs tracking-widest uppercase rotate-90 origin-left translate-x-6">
          Scroll
        </span>
      </div>
    </section>
  )
}
