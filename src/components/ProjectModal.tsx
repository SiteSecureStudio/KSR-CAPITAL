import { useEffect, useState, useCallback } from 'react'
import { MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export interface ProjectData {
  name: string
  location: string
  type: string
  tag: string
  images: string[]
  story: string
  highlights: string[]
}

interface ProjectModalProps {
  project: ProjectData | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (project) {
      setActiveIndex(0)
      requestAnimationFrame(() => setIsVisible(true))
    } else {
      setIsVisible(false)
    }
  }, [project])

  const handleClose = useCallback(() => {
    setIsVisible(false)
    setTimeout(onClose, 320)
  }, [onClose])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!project) return
      if (e.key === 'Escape') handleClose()
      if (e.key === 'ArrowRight') setActiveIndex(i => (i + 1) % project.images.length)
      if (e.key === 'ArrowLeft') setActiveIndex(i => (i - 1 + project.images.length) % project.images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, handleClose])

  useEffect(() => {
    if (project) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [project])

  if (!project) return null

  const prev = () => setActiveIndex(i => (i - 1 + project.images.length) % project.images.length)
  const next = () => setActiveIndex(i => (i + 1) % project.images.length)

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 320ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#050505]/90 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Modal — gradient border wrapper */}
      <div
        className="relative w-full max-w-5xl mx-4 md:mx-8"
        style={{
          maxHeight: '92vh',
          padding: '1.5px',
          background: 'linear-gradient(145deg, #E8C964 0%, #C9A227 15%, rgba(201,162,39,0.5) 40%, rgba(201,162,39,0.14) 70%, rgba(201,162,39,0.04) 100%)',
          boxShadow: '0 0 80px rgba(201,162,39,0.1), 0 40px 80px rgba(0,0,0,0.75)',
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'transform 320ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
      {/* Inner surface */}
      <div
        className="relative overflow-hidden w-full h-full"
        style={{
          background: 'linear-gradient(160deg, #111009 0%, #0c0b08 60%, #0a0a0a 100%)',
          maxHeight: 'calc(92vh - 3px)',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center text-[#9A9085] hover:text-[#C9A227] focus-visible:outline-none"
          style={{ transition: 'color 200ms ease' }}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row h-full overflow-auto md:overflow-hidden" style={{ maxHeight: '92vh' }}>

          {/* ── Image Gallery ── */}
          <div className="relative md:w-[58%] flex-shrink-0 bg-[#080808]" style={{ minHeight: '220px', height: 'clamp(220px, 40vw, 520px)' }}>
            {/* Images */}
            <div className="absolute inset-0 overflow-hidden">
              {project.images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${project.name} — image ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    opacity: i === activeIndex ? 1 : 0,
                    transform: i === activeIndex ? 'scale(1)' : 'scale(1.03)',
                    transition: 'opacity 500ms cubic-bezier(0.4,0,0.2,1), transform 500ms cubic-bezier(0.4,0,0.2,1)',
                  }}
                />
              ))}
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, rgba(5,5,5,0.1) 0%, transparent 30%, rgba(5,5,5,0.5) 100%)',
                  mixBlendMode: 'multiply',
                }}
              />
              {/* Color treatment */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'rgba(201,162,39,0.04)', mixBlendMode: 'color' }}
              />
            </div>

            {/* Nav arrows — only if multiple images */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center text-[#E2D9C8]/70 hover:text-[#C9A227] focus-visible:outline-none"
                  style={{
                    background: 'rgba(8,8,8,0.6)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(201,162,39,0.15)',
                    transition: 'color 200ms ease, border-color 200ms ease',
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center text-[#E2D9C8]/70 hover:text-[#C9A227] focus-visible:outline-none"
                  style={{
                    background: 'rgba(8,8,8,0.6)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(201,162,39,0.15)',
                    transition: 'color 200ms ease, border-color 200ms ease',
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Dot indicators */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className="focus-visible:outline-none"
                    style={{
                      width: i === activeIndex ? '20px' : '6px',
                      height: '6px',
                      background: i === activeIndex ? '#C9A227' : 'rgba(201,162,39,0.3)',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      transition: 'width 280ms cubic-bezier(0.4,0,0.2,1), background 200ms ease',
                    }}
                  />
                ))}
              </div>
            )}

            {/* Image counter */}
            {project.images.length > 1 && (
              <div
                className="absolute top-4 left-4 z-10 text-[#9A9085] text-xs tracking-widest"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                {String(activeIndex + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}
              </div>
            )}
          </div>

          {/* ── Project Details ── */}
          <div
            className="flex-1 overflow-y-auto p-5 md:p-10 flex flex-col gap-4 md:gap-6"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(201,162,39,0.2) transparent' }}
          >
            {/* Type badge */}
            <div>
              <Badge
                variant="outline"
                className="rounded-none border-[#C9A227]/30 bg-[#C9A227]/8 text-[#C9A227] text-xs font-semibold tracking-widest uppercase"
              >
                {project.type}
              </Badge>
            </div>

            {/* Title + location */}
            <div>
              <h2
                className="font-display text-[#E2D9C8] leading-tight mb-3"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 400, letterSpacing: '-0.01em' }}
              >
                {project.name}
              </h2>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-[#C9A227] flex-shrink-0" />
                <span className="text-[#9A9085] text-sm">{project.location}</span>
              </div>
            </div>

            {/* Gold rule */}
            <div style={{ height: '1px', background: 'linear-gradient(to right, rgba(201,162,39,0.4), transparent)' }} />

            {/* Story */}
            <div>
              <span className="text-[#C9A227] text-xs tracking-widest uppercase block mb-3">Project Story</span>
              <p
                className="text-[#9A9085] leading-relaxed"
                style={{ fontSize: '0.875rem', lineHeight: '1.75' }}
              >
                {project.story}
              </p>
            </div>

            {/* Highlights */}
            {project.highlights.length > 0 && (
              <div>
                <span className="text-[#C9A227] text-xs tracking-widest uppercase block mb-3">Key Highlights</span>
                <ul className="flex flex-col gap-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 mt-[6px]"
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#C9A227',
                          display: 'inline-block',
                        }}
                      />
                      <span className="text-[#9A9085] text-sm leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
