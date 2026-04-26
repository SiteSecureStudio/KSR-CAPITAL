import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { Separator } from '@/components/ui/separator'
import { MapPin, Phone, Mail, Printer, ArrowRight, CheckCircle } from 'lucide-react'

interface LeadFormState {
  name: string
  email: string
  inquiryType: string
  message: string
}

const inquiryOptions = [
  { value: '', label: 'Select inquiry type' },
  { value: 'Investment Inquiry — KSR Capital', label: 'For Investors — Co-investment & partnerships' },
  { value: 'Leasing Inquiry — KSR Capital', label: 'For Tenants — Commercial & industrial space' },
  { value: 'Partnership Inquiry — KSR Capital', label: 'For Partners — Agents, advisors & collaborators' },
]

export function ContactPage() {
  const { ref, inView } = useInView()
  const { ref: channelsRef, inView: channelsInView } = useInView()

  const [form, setForm] = useState<LeadFormState>({ name: '', email: '', inquiryType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = form.inquiryType || 'General Inquiry — KSR Capital'
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:ksrcapitalsb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

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
                <p className="text-[#9A9085] text-xs mt-1">Incorporated 8 March 2007 · Malaysia</p>
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
                  src="https://maps.google.com/maps?q=3.23782882520018,101.70423591349342&z=16&output=embed"
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

      {/* ── Lead Form ── */}
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

          <Reveal inView={channelsInView} delay={1}>
            <div className="mt-14 border border-[#242424]" style={{ background: 'rgba(15,13,10,0.6)' }}>
              {submitted ? (
                <div className="p-12 md:p-16 flex flex-col items-start gap-5">
                  <CheckCircle className="w-8 h-8 text-[#C9A227]" />
                  <p className="font-display text-[#E2D9C8] text-xl" style={{ fontWeight: 400 }}>
                    Your message is on its way.
                  </p>
                  <p className="text-[#9A9085] text-sm leading-relaxed max-w-md">
                    We'll be in touch shortly at <span className="text-[#E2D9C8]">{form.email}</span>. In the meantime, feel free to explore our portfolio.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', inquiryType: '', message: '' }) }}
                    className="mt-2 inline-flex items-center gap-3 text-[#C9A227] text-xs tracking-widest uppercase group"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    Send another message
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-12 lg:p-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-[#9A9085] text-xs tracking-widest uppercase"
                        style={{ transition: 'color 0.2s', color: focused === 'name' ? '#C9A227' : undefined }}
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        placeholder="Your name"
                        className="bg-transparent text-[#E2D9C8] text-sm placeholder-[#3a3530] outline-none py-3 px-0"
                        style={{
                          borderBottom: `1px solid ${focused === 'name' ? '#C9A227' : '#2e2b26'}`,
                          transition: 'border-color 0.2s',
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-[#9A9085] text-xs tracking-widest uppercase"
                        style={{ transition: 'color 0.2s', color: focused === 'email' ? '#C9A227' : undefined }}
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        placeholder="your@email.com"
                        className="bg-transparent text-[#E2D9C8] text-sm placeholder-[#3a3530] outline-none py-3 px-0"
                        style={{
                          borderBottom: `1px solid ${focused === 'email' ? '#C9A227' : '#2e2b26'}`,
                          transition: 'border-color 0.2s',
                        }}
                      />
                    </div>

                    {/* Inquiry Type — full width */}
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label
                        htmlFor="inquiryType"
                        className="text-[#9A9085] text-xs tracking-widest uppercase"
                        style={{ transition: 'color 0.2s', color: focused === 'inquiryType' ? '#C9A227' : undefined }}
                      >
                        Nature of Inquiry
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={form.inquiryType}
                        onChange={handleChange}
                        onFocus={() => setFocused('inquiryType')}
                        onBlur={() => setFocused(null)}
                        className="bg-[#0f0d0a] text-sm outline-none py-3 px-0 appearance-none cursor-pointer"
                        style={{
                          color: form.inquiryType ? '#E2D9C8' : '#3a3530',
                          borderBottom: `1px solid ${focused === 'inquiryType' ? '#C9A227' : '#2e2b26'}`,
                          transition: 'border-color 0.2s',
                        }}
                      >
                        {inquiryOptions.map(opt => (
                          <option
                            key={opt.value}
                            value={opt.value}
                            style={{ background: '#0f0d0a', color: opt.value ? '#E2D9C8' : '#6b6560' }}
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message — full width */}
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label
                        htmlFor="message"
                        className="text-[#9A9085] text-xs tracking-widest uppercase"
                        style={{ transition: 'color 0.2s', color: focused === 'message' ? '#C9A227' : undefined }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        placeholder="Tell us what you're looking for…"
                        className="bg-transparent text-[#E2D9C8] text-sm placeholder-[#3a3530] outline-none py-3 px-0 resize-none"
                        style={{
                          borderBottom: `1px solid ${focused === 'message' ? '#C9A227' : '#2e2b26'}`,
                          transition: 'border-color 0.2s',
                        }}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="mt-12 flex items-center justify-between flex-wrap gap-6">
                    <p className="text-[#9A9085] text-xs leading-relaxed max-w-xs">
                      We typically respond within one business day.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-4 border border-[#C9A227]/40 text-[#C9A227] text-xs tracking-widest uppercase px-8 py-4"
                      style={{
                        background: 'transparent',
                        cursor: 'pointer',
                        transition: 'background 0.25s, border-color 0.25s, color 0.25s',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget
                        el.style.background = 'rgba(201,162,39,0.08)'
                        el.style.borderColor = '#C9A227'
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget
                        el.style.background = 'transparent'
                        el.style.borderColor = 'rgba(201,162,39,0.4)'
                      }}
                    >
                      Send Message
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
