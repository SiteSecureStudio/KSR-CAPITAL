import { useInView } from '../hooks/useInView'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { GoldDivider } from '../components/ui/GoldDivider'
import { Separator } from '@/components/ui/separator'
import { MapPin, Phone, Mail, Printer, ArrowRight } from 'lucide-react'

const audienceChannels = [
  {
    audience: 'For Investors',
    description: 'Interested in co-investment opportunities, partnership structures, or learning more about our portfolio performance? We welcome conversations with aligned capital partners.',
    action: 'Investment Inquiry',
    subject: 'Investment Inquiry — KSR Capital',
    email: 'ksrcapitalsb@gmail.com',
  },
  {
    audience: 'For Tenants',
    description: 'Looking for commercial, industrial, or lifestyle space in Kuala Lumpur or Selangor? Tell us about your requirements and we\'ll match you with the right property.',
    action: 'Leasing Inquiry',
    subject: 'Leasing Inquiry — KSR Capital',
    email: 'ksrcapitalsb@gmail.com',
  },
  {
    audience: 'For Partners',
    description: 'Property agents, contractors, legal advisors, or strategic collaborators — we\'re always open to building relationships with professionals who share our standards.',
    action: 'Partnership Inquiry',
    subject: 'Partnership Inquiry — KSR Capital',
    email: 'ksrcapitalsb@gmail.com',
  },
]

export function ContactPage() {
  const { ref, inView } = useInView()
  const { ref: channelsRef, inView: channelsInView } = useInView()

  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-28">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={ref}>
            <Reveal inView={inView}>
              <SectionLabel>Contact</SectionLabel>
            </Reveal>
            <Reveal inView={inView} delay={1}>
              <h1
                className="font-display text-[#E2D9C8] mt-6 leading-tight"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
              >
                Let's build<br />
                <em className="text-[#C9A227] italic">something together.</em>
              </h1>
            </Reveal>
            <Reveal inView={inView} delay={2} className="mt-8 max-w-xl">
              <p className="text-[#9A9085] leading-loose text-base md:text-lg font-light">
                Whether you're an investor, prospective tenant, or strategic partner — we'd love to
                hear from you. Reach out and let's explore what's possible together.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      {/* ── Contact Details ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Office details */}
            <Reveal inView={inView} delay={1}>
              <SectionLabel>Our Office</SectionLabel>
              <h2
                className="font-display text-[#E2D9C8] mt-4 mb-10 leading-tight"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400 }}
              >
                KSR Capital Sdn. Bhd.
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div
                    className="w-10 h-10 border border-[#C9A227]/30 flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(201,162,39,0.05)' }}
                  >
                    <MapPin className="w-4 h-4 text-[#C9A227]" />
                  </div>
                  <div>
                    <p className="text-[#9A9085] text-xs tracking-widest uppercase mb-2">Registered Address</p>
                    <address className="text-[#E2D9C8] text-sm not-italic leading-relaxed">
                      No. 26510, Lot 10234,<br />
                      Mukim Gombak,<br />
                      Jalan Batu Caves,<br />
                      68100 Batu Caves,<br />
                      Selangor Darul Ehsan
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div
                    className="w-10 h-10 border border-[#C9A227]/30 flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(201,162,39,0.05)' }}
                  >
                    <Phone className="w-4 h-4 text-[#C9A227]" />
                  </div>
                  <div>
                    <p className="text-[#9A9085] text-xs tracking-widest uppercase mb-2">Telephone</p>
                    <a
                      href="tel:0361867032"
                      className="text-[#E2D9C8] text-sm hover:text-[#C9A227] transition-colors duration-200"
                    >
                      03-6186 7032
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div
                    className="w-10 h-10 border border-[#C9A227]/30 flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(201,162,39,0.05)' }}
                  >
                    <Printer className="w-4 h-4 text-[#C9A227]" />
                  </div>
                  <div>
                    <p className="text-[#9A9085] text-xs tracking-widest uppercase mb-2">Fax</p>
                    <p className="text-[#E2D9C8] text-sm">03-6186 6241</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div
                    className="w-10 h-10 border border-[#C9A227]/30 flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(201,162,39,0.05)' }}
                  >
                    <Mail className="w-4 h-4 text-[#C9A227]" />
                  </div>
                  <div>
                    <p className="text-[#9A9085] text-xs tracking-widest uppercase mb-2">Email</p>
                    <a
                      href="mailto:ksrcapitalsb@gmail.com"
                      className="text-[#E2D9C8] text-sm hover:text-[#C9A227] transition-colors duration-200"
                    >
                      ksrcapitalsb@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-[#242424]">
                <p className="text-[#9A9085] text-xs tracking-widest uppercase mb-2">Company Registration</p>
                <p className="text-[#E2D9C8] text-sm">KSR Capital Sdn Bhd · SSM No. 764906-W</p>
                <p className="text-[#9A9085] text-xs mt-1">Incorporated in Malaysia</p>
              </div>
            </Reveal>

            {/* Map embed */}
            <Reveal inView={inView} delay={2}>
              <div
                className="border border-[#242424] overflow-hidden"
                style={{ height: '420px' }}
              >
                <iframe
                  title="KSR Capital Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.259953060065!2d101.68280987496556!3d3.2345919967901766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49e8c0c81bbd%3A0x6e8b9c24a1b48b5!2sBatu%20Caves%2C%20Selangor!5e0!3m2!1sen!2smy!4v1712000000000!5m2!1sen!2smy"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-[#9A9085] text-xs mt-3">
                Jalan Batu Caves, 68100 Batu Caves, Selangor
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Separator className="bg-[#242424]" />

      {/* ── Audience Channels ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div ref={channelsRef}>
            <Reveal inView={channelsInView}>
              <SectionLabel>How Can We Help?</SectionLabel>
              <h2
                className="font-display text-[#E2D9C8] mt-4 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '-0.01em' }}
              >
                The right fit starts with<br />
                <em className="text-[#C9A227] italic">the right conversation.</em>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#242424] border border-[#242424]">
            {audienceChannels.map((ch, i) => (
              <Reveal key={ch.audience} inView={channelsInView} delay={(i + 1) as 1 | 2 | 3}>
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="mb-5">
                    <GoldDivider />
                  </div>
                  <h3 className="text-[#C9A227] text-xs font-semibold tracking-widest uppercase mb-3">
                    {ch.audience}
                  </h3>
                  <p className="text-[#9A9085] text-sm leading-relaxed flex-1 mb-8">
                    {ch.description}
                  </p>
                  <a
                    href={`mailto:${ch.email}?subject=${encodeURIComponent(ch.subject)}`}
                    className="inline-flex items-center gap-3 text-[#C9A227] text-xs tracking-widest uppercase hover:gap-4 transition-all duration-200"
                  >
                    {ch.action}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
