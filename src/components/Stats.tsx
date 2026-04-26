import { useInView } from '../hooks/useInView'
import { GoldDivider } from './ui/GoldDivider'
import { Reveal } from './ui/Reveal'

interface StatBlock {
  number: string
  unit: string
  label: string
  desc: string
}

const statBlocks: StatBlock[] = [
  {
    number: '6',
    unit: '',
    label: 'Properties',
    desc: 'Spanning commercial, industrial, and lifestyle real estate',
  },
  {
    number: '5',
    unit: '+',
    label: 'Years Active',
    desc: 'Building expertise in Malaysian real estate investment',
  },
  {
    number: 'KL',
    unit: '',
    label: 'Based',
    desc: "Headquartered in Kuala Lumpur — Malaysia's prime economic hub",
  },
  {
    number: '2',
    unit: '',
    label: 'Asset Classes',
    desc: 'Commercial and industrial assets built for long-term performance',
  },
]

interface StatItemProps {
  stat: StatBlock
  inView: boolean
  delay: 1 | 2 | 3 | 4
}

function StatItem({ stat, inView, delay }: StatItemProps) {
  return (
    <Reveal inView={inView} delay={delay} className="px-0 md:px-8 py-8 md:py-0 first:pl-0 last:pr-0">
      <div className="flex items-end gap-1 mb-4">
        <span
          className="font-display text-gold leading-none"
          style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', fontWeight: 300 }}
        >
          {stat.number}
        </span>
        {stat.unit && (
          <span
            className="font-display text-gold leading-none mb-2"
            style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', fontWeight: 300 }}
          >
            {stat.unit}
          </span>
        )}
      </div>
      <div className="mb-4">
        <GoldDivider />
      </div>
      <div className="text-cream font-medium text-sm tracking-wide uppercase mb-2">{stat.label}</div>
      <div className="text-cream-dim text-sm leading-relaxed font-light">{stat.desc}</div>
    </Reveal>
  )
}

export function Stats() {
  const { ref, inView } = useInView()

  return (
    <section className="border-t border-b border-border py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div ref={ref} className="grid md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
          {statBlocks.map((stat, i) => (
            <StatItem
              key={stat.label}
              stat={stat}
              inView={inView}
              delay={(i + 1) as 1 | 2 | 3 | 4}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
