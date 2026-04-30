import { useState } from 'react'
import { SEO } from '../components/SEO'
import { breadcrumbSchema, propertySchema } from '../data/schema'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { GoldDivider } from '../components/ui/GoldDivider'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { MapPin, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { properties } from '../data/properties'

export function PropertyPage() {
  const { slug } = useParams<{ slug: string }>()
  const [activeImage, setActiveImage] = useState(0)
  const { ref, inView } = useInView()

  const propertyIndex = properties.findIndex(p => p.slug === slug)
  const property = properties[propertyIndex]

  if (!property) return <Navigate to="/portfolio" replace />

  const prevProperty = propertyIndex > 0 ? properties[propertyIndex - 1] : null
  const nextProperty = propertyIndex < properties.length - 1 ? properties[propertyIndex + 1] : null

  return (
    <>
      <SEO
        title={`${property.name} — ${property.location} | KSR Capital`}
        description={property.story.slice(0, 155).trimEnd() + '…'}
        canonical={`/portfolio/${property.slug}`}
        schema={[
          propertySchema(property),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Portfolio', url: '/portfolio' },
            { name: property.name, url: `/portfolio/${property.slug}` },
          ]),
        ]}
      />
      {/* ── Hero Gallery ── */}
      <section className="pt-[76px] relative" style={{ height: '70vh', minHeight: '500px' }}>
        <div className="absolute inset-0 overflow-hidden">
          {property.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${property.name} — view ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: activeImage === i ? 1 : 0,
                transition: 'opacity 600ms cubic-bezier(0.4,0,0.2,1)',
              }}
            />
          ))}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.1) 40%, rgba(8,8,8,0.7) 100%)',
            }}
          />
        </div>

        {/* Image dots / thumbnails */}
        {property.images.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
            {property.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={[
                  'transition-all duration-200',
                  activeImage === i
                    ? 'w-8 h-1 bg-[#C9A227]'
                    : 'w-4 h-1 bg-white/30 hover:bg-white/60',
                ].join(' ')}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Prev/Next image buttons */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={() => setActiveImage(i => (i - 1 + property.images.length) % property.images.length)}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-white/20 bg-[#080808]/60 backdrop-blur-sm flex items-center justify-center text-[#E2D9C8] hover:border-[#C9A227]/60 hover:text-[#C9A227] transition-colors duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveImage(i => (i + 1) % property.images.length)}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-white/20 bg-[#080808]/60 backdrop-blur-sm flex items-center justify-center text-[#E2D9C8] hover:border-[#C9A227]/60 hover:text-[#C9A227] transition-colors duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Back link */}
        <div className="absolute top-24 left-8 md:left-12 z-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[#9A9085] hover:text-[#C9A227] text-xs tracking-widest uppercase transition-colors duration-200"
            style={{
              background: 'rgba(8,8,8,0.6)',
              backdropFilter: 'blur(8px)',
              padding: '8px 14px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <ArrowLeft className="w-3 h-3" />
            All Properties
          </Link>
        </div>

        {/* Property badge - bottom left */}
        <div className="absolute bottom-8 left-8 md:left-12 z-10">
          <Badge
            variant="outline"
            className="rounded-none border-[#C9A227]/50 bg-[#080808]/80 text-[#C9A227] text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
          >
            {property.type}
          </Badge>
        </div>
      </section>

      {/* ── Property Details ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={ref} className="grid md:grid-cols-3 gap-16">

            {/* Main content */}
            <div className="md:col-span-2">
              <Reveal inView={inView}>
                <span className="text-[#9A9085] text-xs tracking-widest uppercase">{property.tag}</span>
                <h1
                  className="font-display text-[#E2D9C8] mt-2 leading-tight"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
                >
                  {property.name}
                </h1>
                <div className="flex items-center gap-2 mt-3 mb-8">
                  <MapPin className="w-4 h-4 text-[#C9A227]" />
                  <span className="text-[#9A9085] text-sm">{property.location}</span>
                </div>
                <GoldDivider />
              </Reveal>

              <Reveal inView={inView} delay={1} className="mt-8">
                <SectionLabel>Project Story</SectionLabel>
                <p className="text-[#9A9085] leading-loose text-sm md:text-base font-light mt-4">
                  {property.story}
                </p>
              </Reveal>

              <Reveal inView={inView} delay={2} className="mt-12">
                <SectionLabel>Key Highlights</SectionLabel>
                <div className="mt-6 space-y-4">
                  {property.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-4">
                      <div className="w-6 h-px bg-[#C9A227] mt-3 shrink-0" />
                      <p className="text-[#9A9085] text-sm leading-relaxed">{h}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal inView={inView} delay={3} className="mt-12">
                <SectionLabel>Area Context</SectionLabel>
                <p className="text-[#9A9085] leading-loose text-sm font-light mt-4">
                  {property.areaContext}
                </p>
              </Reveal>
            </div>

            {/* Sidebar */}
            <Reveal inView={inView} delay={2}>
              <div
                className="border border-[#242424] p-7"
                style={{ background: '#0F0F0F' }}
              >
                <h3 className="font-display text-[#E2D9C8] mb-6" style={{ fontSize: '1.1rem', fontWeight: 400 }}>
                  Property Specifications
                </h3>
                <div className="space-y-5">
                  {property.specs.map(spec => (
                    <div key={spec.label} className="flex justify-between items-center pb-4 border-b border-[#242424] last:border-0 last:pb-0">
                      <span className="text-[#9A9085] text-xs tracking-wide uppercase">{spec.label}</span>
                      <span className="text-[#E2D9C8] text-sm font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <Separator className="my-7 bg-[#242424]" />

                <p className="text-[#9A9085] text-xs leading-relaxed mb-6">
                  Interested in this property? Get in touch to discuss leasing, investment, or partnership opportunities.
                </p>
                <Button
                  asChild
                  className="w-full bg-[#C9A227] text-[#080808] hover:bg-[#E8C964] rounded-none text-xs tracking-widest uppercase font-semibold transition-colors duration-300"
                >
                  <Link to="/contact">Enquire Now</Link>
                </Button>
              </div>

              {/* Thumbnail strip */}
              {property.images.length > 1 && (
                <div className="mt-4 grid gap-2" style={{ gridTemplateColumns: `repeat(${property.images.length}, 1fr)` }}>
                  {property.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveImage(i)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                      className={[
                        'relative overflow-hidden transition-all duration-200',
                        activeImage === i ? 'ring-1 ring-[#C9A227]' : 'opacity-50 hover:opacity-80',
                      ].join(' ')}
                      style={{ height: '64px' }}
                      aria-label={`Select image ${i + 1}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      {/* ── Prev / Next Navigation ── */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="flex items-center justify-between gap-4">
            {prevProperty ? (
              <Link
                to={`/portfolio/${prevProperty.slug}`}
                className="group flex items-center gap-4 hover:gap-5 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 text-[#C9A227]" />
                <div>
                  <p className="text-[#9A9085] text-xs tracking-widest uppercase mb-1">Previous</p>
                  <p className="font-display text-[#E2D9C8] text-sm group-hover:text-[#C9A227] transition-colors duration-200">
                    {prevProperty.name}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/portfolio"
              className="text-[#9A9085] text-xs tracking-widest uppercase hover:text-[#C9A227] transition-colors duration-200"
            >
              All Properties
            </Link>

            {nextProperty ? (
              <Link
                to={`/portfolio/${nextProperty.slug}`}
                className="group flex items-center gap-4 hover:gap-5 transition-all duration-200 text-right"
              >
                <div>
                  <p className="text-[#9A9085] text-xs tracking-widest uppercase mb-1">Next</p>
                  <p className="font-display text-[#E2D9C8] text-sm group-hover:text-[#C9A227] transition-colors duration-200">
                    {nextProperty.name}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C9A227]" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
