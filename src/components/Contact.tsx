import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { Reveal } from './ui/Reveal'
import { SectionLabel } from './ui/SectionLabel'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Mail, Phone, MapPin } from 'lucide-react'

function CornerLines() {
  return (
    <>
      <div className="absolute top-10 left-10 w-16 h-16 border-t border-l border-[#C9A227]/20 pointer-events-none" />
      <div className="absolute top-10 right-10 w-16 h-16 border-t border-r border-[#C9A227]/20 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-16 h-16 border-b border-l border-[#C9A227]/20 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-b border-r border-[#C9A227]/20 pointer-events-none" />
    </>
  )
}

export function Contact() {
  const { ref, inView } = useInView()

  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,35,102,0.28) 0%, transparent 70%)',
      }}
    >
      <CornerLines />

      <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-12 text-center">

        <div ref={ref}>
          <Reveal inView={inView}>
            <SectionLabel>Get In Touch</SectionLabel>
          </Reveal>
        </div>

        <Reveal inView={inView} delay={1}>
          <h2
            className="font-display text-[#E2D9C8] mt-6 leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.015em' }}
          >
            Ready to invest in<br />
            <em className="text-[#C9A227] italic">Malaysia's future</em>?
          </h2>
        </Reveal>

        <Reveal inView={inView} delay={2}>
          <p className="text-[#9A9085] mt-6 mb-12 text-base leading-relaxed max-w-xl mx-auto font-light">
            Whether you're an investor, prospective tenant, or strategic partner — we'd love to hear from you.
            Reach out and let's explore what's possible together.
          </p>
        </Reveal>

        <Reveal inView={inView} delay={3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="bg-[#C9A227] text-[#080808] hover:bg-[#E8C964] rounded-none px-8 h-13 text-sm font-semibold tracking-wide transition-colors duration-300"
          >
            <a href="mailto:ksrcapitalsb@gmail.com" className="inline-flex items-center gap-3">
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-[#242424] text-[#9A9085] bg-transparent hover:border-[#C9A227] hover:text-[#E2D9C8] rounded-none px-8 h-13 text-sm font-medium tracking-wide transition-colors duration-300"
          >
            <a href="tel:0361867032" className="inline-flex items-center gap-3">
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-[#C9A227]/30 text-[#C9A227] bg-transparent hover:bg-[#C9A227]/10 rounded-none px-8 h-13 text-sm font-medium tracking-wide transition-colors duration-300"
          >
            <Link to="/contact" className="inline-flex items-center gap-3">
              Full Contact Details
            </Link>
          </Button>
        </Reveal>

        <Reveal inView={inView} delay={4}>
          <Separator className="mt-16 mb-10 bg-[#242424]" />
          <Card className="rounded-none border-[#242424] bg-[#0F0F0F]/40 backdrop-blur-sm">
            <CardContent className="flex flex-col sm:flex-row items-center justify-center gap-8 py-6 px-8">
              <div className="flex items-center gap-2.5 text-[#9A9085] text-sm">
                <MapPin className="h-4 w-4 text-[#C9A227]" />
                Kuala Lumpur, Malaysia
              </div>
              <div className="hidden sm:block w-px h-4 bg-[#242424]" />
              <div className="flex items-center gap-2.5 text-[#9A9085] text-sm">
                <Mail className="h-4 w-4 text-[#C9A227]" />
                ksrcapitalsb@gmail.com
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
