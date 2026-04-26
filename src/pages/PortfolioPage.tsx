import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { MapPin } from 'lucide-react'
import { properties, type PropertyData } from '../data/properties'

type FilterType = 'All' | 'Commercial' | 'Industrial' | 'Lifestyle'

const filters: FilterType[] = ['All', 'Commercial', 'Industrial', 'Lifestyle']

interface PropertyCardProps {
  property: PropertyData
  index: number
  inView: boolean
}

function PropertyCard({ property, inView }: PropertyCardProps) {
  const [hovered, setHovered] = useState(false)

  const imgScale: React.CSSProperties = {
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 700ms cubic-bezier(0.4,0,0.2,1)',
    transformOrigin: 'center center',
  }

  return (
    <Reveal inView={inView} delay={1} className="relative">
      <div style={{ position: 'relative', zIndex: hovered ? 10 : 1 }}>
        <Link
          to={`/portfolio/${property.slug}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="block overflow-hidden"
          style={{
            border: `1px solid ${hovered ? 'rgba(201,162,39,0.4)' : 'rgba(36,36,36,1)'}`,
            transition: 'border-color 300ms ease',
          }}
        >
          {/* Single image container — all content overlays inside */}
          <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <img
              src={property.images[0]}
              alt={property.name}
              className="absolute inset-0 w-full h-full object-cover"
              style={imgScale}
            />

            {/* Gradient overlay — scales with the image on hover */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(6,6,6,0.92) 0%, rgba(6,6,6,0.45) 45%, transparent 75%)',
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 700ms cubic-bezier(0.4,0,0.2,1)',
              }}
            />

            {/* Top-left: category badge */}
            <div className="absolute top-5 left-5">
              <Badge
                variant="outline"
                className="rounded-none border-[#C9A227]/40 bg-[#080808]/80 text-[#C9A227] text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
              >
                {property.type}
              </Badge>
            </div>

            {/* Top-right: view project (hover reveal) */}
            <div
              className="absolute top-5 right-5"
              style={{ opacity: hovered ? 1 : 0, transition: 'opacity 200ms ease' }}
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

            {/* Bottom overlay: tag, name, location — pinned to image bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="block text-xs text-[#C9A227]/80 tracking-widest uppercase mb-2">
                {property.tag}
              </span>
              <h3
                className="font-display text-[#E2D9C8] leading-tight mb-3"
                style={{ fontSize: '1.35rem', fontWeight: 400 }}
              >
                {property.name}
              </h3>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A227] flex-shrink-0" />
                <span className="text-[#B8AFA3] text-sm">{property.location}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Reveal>
  )
}

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All')
  const { ref, inView } = useInView()

  const filtered = activeFilter === 'All'
    ? properties
    : properties.filter(p => p.type === activeFilter)

  const kl = properties.filter(p => p.area === 'Kuala Lumpur').length
  const selangor = properties.filter(p => p.area === 'Selangor').length

  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={ref}>
            <Reveal inView={inView}>
              <SectionLabel>Our Portfolio</SectionLabel>
            </Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-6">
              <Reveal inView={inView} delay={1}>
                <h1
                  className="font-display text-[#E2D9C8] leading-tight"
                  style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
                >
                  Properties We<br />
                  <em className="text-[#C9A227] italic">Own & Manage</em>
                </h1>
              </Reveal>
              <Reveal inView={inView} delay={2} className="max-w-sm">
                <p className="text-[#9A9085] text-sm leading-relaxed">
                  Industrial land, commercial developments, strata-managed properties, CLQ-structured assets, pickleball courts, and a wedding hall — across Kuala Lumpur and Selangor.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      {/* ── Filter Bar ── */}
      <div
        className="sticky top-[76px] z-40 border-b border-[#242424]"
        style={{ background: 'rgba(8,8,8,0.94)', backdropFilter: 'blur(14px)' }}
      >
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="flex items-center gap-1 py-3">
            <span className="text-[#9A9085] text-xs tracking-widest uppercase mr-4">Filter:</span>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={[
                  'px-4 py-2 text-xs tracking-widest uppercase transition-colors duration-200',
                  activeFilter === f
                    ? 'text-[#C9A227] border border-[#C9A227]/40 bg-[#C9A227]/5'
                    : 'text-[#9A9085] border border-transparent hover:text-[#E2D9C8]',
                ].join(' ')}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto text-[#9A9085] text-xs">
              {filtered.length} {filtered.length === 1 ? 'property' : 'properties'}
            </span>
          </div>
        </div>
      </div>

      {/* ── Property Grid ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((property, i) => (
              <PropertyCard
                key={property.slug}
                property={property}
                index={i}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      {/* ── Portfolio Summary ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#242424] border border-[#242424]">
            {[
              { value: String(properties.length) + '+', label: 'Total Properties' },
              { value: '3', label: 'Asset Classes' },
              { value: String(kl), label: 'KL Properties' },
              { value: String(selangor), label: 'Selangor Properties' },
            ].map((item, i) => (
              <div key={item.label} className={`px-8 py-8 ${i >= 2 ? 'col-span-1' : ''}`}>
                <div
                  className="font-display text-[#C9A227] leading-none mb-3"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}
                >
                  {item.value}
                </div>
                <div className="text-[#9A9085] text-xs tracking-widest uppercase">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
