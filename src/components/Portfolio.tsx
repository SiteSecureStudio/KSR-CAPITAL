import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { Reveal } from './ui/Reveal'
import { SectionLabel } from './ui/SectionLabel'
import { Badge } from '@/components/ui/badge'
import { MapPin } from 'lucide-react'
import { ProjectModal, type ProjectData } from './ProjectModal'

// ── Kampung Baru images ──
import imgKB1 from '../../brand assests/Portfolio pictures/Double Storey Terrace Shoplot Kampung Baru/IMG_5236.jpg'
import imgKB2 from '../../brand assests/Portfolio pictures/Double Storey Terrace Shoplot Kampung Baru/IMG_5237.jpg'
import imgKB3 from '../../brand assests/Portfolio pictures/Double Storey Terrace Shoplot Kampung Baru/IMG_5240.jpg'
import imgKB4 from '../../brand assests/Portfolio pictures/Double Storey Terrace Shoplot Kampung Baru/IMG_5241.jpg'

// ── Rinching images ──
import imgRC1 from '../../brand assests/Portfolio pictures/Industrial Shoplot Rinching/45a640ed-0beb-4d1c-bcf0-674bbd8cd1ab.JPG'
import imgRC2 from '../../brand assests/Portfolio pictures/Industrial Shoplot Rinching/f097ef78-ee4a-4297-8fb3-612b17224849.JPG'

// ── Sungai Besi images ──
import imgSB1 from '../../brand assests/Portfolio pictures/Industrial Shoplot Sungai Besi/IMG_5248.JPG'

// ── Pickleball images ──
import imgPB1 from '../../brand assests/Portfolio pictures/Pickleball Court Kampung Pandan/dele 43.jpg'
import imgPB2 from '../../brand assests/Portfolio pictures/Pickleball Court Kampung Pandan/dele 44.jpg'
import imgPB3 from '../../brand assests/Portfolio pictures/Pickleball Court Kampung Pandan/dele 45.jpg'

const projects: ProjectData[] = [
  {
    name: 'Double Storey Terrace Shoplot',
    location: 'Kampung Baru, KL',
    type: 'Commercial',
    tag: 'Commercial Retail',
    images: [imgKB1, imgKB2, imgKB3, imgKB4],
    story:
      'Nestled in the thriving community of Kampung Baru Ampang, this double-story terrace shoplot development features 10 well-crafted units that seamlessly blend functionality with contemporary design. Each unit is thoughtfully designed to cater to a variety of business ventures, offering spacious layouts that promote efficient operations and adaptability. The double-story structure provides additional flexibility for businesses, allowing for a mix of commercial and office spaces under one roof.',
    highlights: [
      '10 well-crafted units with contemporary design',
      'Double-story structure offering commercial and office flexibility',
      'Prime location with high foot traffic and excellent connectivity',
      'Spacious layouts designed for efficient operations',
    ],
  },
  {
    name: 'Industrial Shoplot',
    location: 'Rinching, Selangor',
    type: 'Industrial',
    tag: 'Industrial Unit',
    images: [imgRC1, imgRC2],
    story:
      'Located in the vibrant area of Rinching, this single-story industrial shoplot development comprises 32 versatile units, thoughtfully designed to cater to a wide range of business needs. The project emphasizes functionality and practicality, offering ample space for businesses to operate efficiently while fostering a conducive environment for growth. Its strategic location ensures easy accessibility and connectivity to major transportation routes, making it an ideal hub for enterprises seeking convenience and visibility.',
    highlights: [
      '32 versatile single-story units',
      'Designed for a wide range of business needs',
      'Strategic location with major transportation connectivity',
      'Emphasis on functionality and practical space planning',
    ],
  },
  {
    name: 'Industrial Shoplot',
    location: 'Sungai Besi, KL',
    type: 'Industrial',
    tag: 'Industrial Complex',
    images: [imgSB1],
    story:
      'This landmark development in Sungai Besi is a meticulously designed 5-story industrial shoplot that combines functionality with modern aesthetics. Featuring six spacious units, each equipped with integrated lift systems, the project is tailored to meet the needs of businesses seeking a versatile and premium workspace. Strategically located in a bustling commercial hub, the industrial shoplot offers seamless accessibility and high visibility, making it an ideal choice for enterprises looking to thrive in a dynamic environment.',
    highlights: [
      '5-story landmark development with 6 spacious units',
      'Integrated lift systems in every unit',
      'Located in a prime, high-visibility commercial hub',
      'Modern aesthetics with optimised space efficiency',
    ],
  },
  {
    name: 'Pickleball Court',
    location: 'Kampung Pandan, KL',
    type: 'Lifestyle',
    tag: 'Recreational Facility',
    images: [imgPB1, imgPB2, imgPB3],
    story:
      'In the heart of Kampung Pandan, KSR Capital has developed a state-of-the-art pickleball court facility featuring six premium courts, designed to meet international standards. This project reflects our dedication to promoting active lifestyles and fostering community engagement. The courts are meticulously constructed to provide players with a superior experience, incorporating high-quality materials and thoughtful layouts to ensure optimal playability and safety.',
    highlights: [
      '6 premium courts built to international standards',
      'High-quality materials for optimal playability and safety',
      'Community-centred facility fostering active lifestyles',
      'Strategically located in a lively neighbourhood hub',
    ],
  },
]

const assetTypes = ['Commercial', 'Industrial', 'Lifestyle']

interface PropertyCardProps {
  project: ProjectData
  index: number
  inView: boolean
  onClick: () => void
}

function PropertyCard({ project, index, inView, onClick }: PropertyCardProps) {
  const delay = Math.min(index + 1, 4) as 1 | 2 | 3 | 4

  return (
    <Reveal inView={inView} delay={delay} className="h-full">
      <button
        onClick={onClick}
        className="portfolio-card h-full w-full text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A227]/60"
        style={{ cursor: 'pointer' }}
        aria-label={`View ${project.name} — ${project.location}`}
      >
        <img
          src={project.images[0]}
          alt={project.name}
          className="transition-transform duration-700 group-hover:scale-105"
          style={{ transition: 'transform 700ms cubic-bezier(0.4,0,0.2,1)' }}
        />
        <div className="card-overlay" />

        {/* Hover cue */}
        <div
          className="absolute inset-0 z-[5] pointer-events-none"
          style={{
            background: 'rgba(201,162,39,0.06)',
            opacity: 0,
            transition: 'opacity 300ms ease',
          }}
          aria-hidden="true"
        />
        <div
          className="group-hover:opacity-100 absolute inset-0 z-[5] pointer-events-none"
          style={{ background: 'rgba(201,162,39,0.06)', transition: 'opacity 300ms ease' }}
        />

        <div className="absolute top-5 left-5 z-10">
          <Badge
            variant="outline"
            className="rounded-none border-[#C9A227]/40 bg-[#080808]/80 text-[#C9A227] text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
          >
            {project.type}
          </Badge>
        </div>

        {/* "View Project" hint on hover */}
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
            View Story
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
          <div className="card-tag">
            <span className="text-xs text-[#9A9085] tracking-wide uppercase mb-2 block">{project.tag}</span>
          </div>
          <h3 className="font-display text-[#E2D9C8] leading-tight" style={{ fontSize: '1.35rem', fontWeight: 400 }}>
            {project.name}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <MapPin className="w-3 h-3 text-[#C9A227]" />
            <span className="text-[#9A9085] text-xs">{project.location}</span>
          </div>
        </div>
      </button>
    </Reveal>
  )
}

export function Portfolio() {
  const { ref, inView } = useInView()
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null)

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
          {projects.map((project, i) => (
            <PropertyCard
              key={project.name + project.location}
              project={project}
              index={i}
              inView={inView}
              onClick={() => setActiveProject(project)}
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

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}
