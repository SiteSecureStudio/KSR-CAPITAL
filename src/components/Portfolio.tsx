import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { Reveal } from './ui/Reveal'
import { SectionLabel } from './ui/SectionLabel'
import { Badge } from '@/components/ui/badge'
import { MapPin } from 'lucide-react'
import { properties, type PropertyData } from '../data/properties'

const assetTypes = ['Commercial', 'Industrial', 'Lifestyle']

interface PropertyCardProps {
  property: PropertyData
  index: number
  inView: boolean
}

function PropertyCard({ property, index, inView }: PropertyCardProps) {
  const delay = Math.min(index + 1, 4) as 1 | 2 | 3 | 4

  return (
    <Reveal inView={inView} delay={delay} className="h-full">
      <Link
        to={`/portfolio/${property.slug}`}
        className="portfolio-card h-full w-full text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A227]/60"
        aria-label={`View ${property.name} — ${property.location}`}
      >
        <img
          src={property.images[0]}
          alt={property.name}
        />
        <div className="card-overlay" />

        <div
          className="group-hover:opacity-100 absolute inset-0 z-[5] pointer-events-none"
          style={{ background: 'rgba(201,162,39,0.06)', transition: 'opacity 300ms ease' }}
        />

        <div className="absolute top-5 left-5 z-10">
          <Badge
            variant="outline"
            className="rounded-none border-[#C9A227]/40 bg-[#080808]/80 text-[#C9A227] text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
          >
            {property.type}
          </Badge>
        </div>

        <div
          className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100"
          style={{ transition: 'opacity 200ms ease' }}
        >
          <span
            className="text-[#C9A227] text-xs tracking-widest uppercase"
            style={{
              background: 'rgba(8,8,8,0.7)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(201,162,39,0.25)',
              padding: '4px 10px',
            }}
          >
            View Project
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
          <div className="card-tag">
            <span className="text-xs text-[#9A9085] tracking-wide uppercase mb-2 block">{property.tag}</span>
          </div>
          <h3 className="font-display text-[#E2D9C8] leading-tight" style={{ fontSize: '1.35rem', fontWeight: 400 }}>
            {property.name}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <MapPin className="w-3 h-3 text-[#C9A227]" />
            <span className="text-[#9A9085] text-xs">{property.location}</span>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

export function Portfolio() {
  const { ref, inView } = useInView()

  return (
    <section id="portfolio" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-8 md:px-12">

        <div ref={ref} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal inView={inView}>
            <SectionLabel>Selected Portfolio</SectionLabel>
            <h2
              className="font-display text-[#E2D9C8] mt-4 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '-0.01em' }}
            >
              Properties We <em className="text-[#C9A227] italic">Own & Manage</em>
            </h2>
          </Reveal>
          <Reveal inView={inView} delay={1} className="hidden md:block">
            <p className="text-[#9A9085] text-sm max-w-xs text-right leading-relaxed">
              A focused portfolio of income-generating assets across Kuala Lumpur and Selangor.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:[grid-template-rows:420px_340px]">
          {properties.map((property, i) => (
            <PropertyCard
              key={property.slug}
              property={property}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        <Reveal inView={inView} delay={4} className="flex items-center gap-6 mt-10 pt-8 border-t border-[#242424]">
          <span className="text-[#9A9085] text-xs tracking-widest uppercase">Asset Types:</span>
          <div className="flex items-center gap-3">
            {assetTypes.map((t) => (
              <Badge
                key={t}
                variant="outline"
                className="rounded-none border-[#242424] text-[#9A9085] text-xs bg-transparent hover:border-[#C9A227]/40 hover:text-[#C9A227] transition-colors duration-200 cursor-default"
              >
                {t}
              </Badge>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
