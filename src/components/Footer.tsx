import logo from '../../brand assests/KSR Capital logo design.png'
import { Separator } from '@/components/ui/separator'
import { MapPin, Phone, Mail, Printer } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-[#C9A227]/20"
      style={{ background: '#080808' }}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12 py-14">

        {/* Top row: logo + tagline | contact details | nav */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 justify-between">

          {/* Logo + tagline */}
          <div className="flex-shrink-0">
            <img src={logo} alt="KSR Capital Sdn Bhd" className="h-20 w-auto object-contain mb-4" />
            <p className="text-[#9A9085] text-xs tracking-wide">
              Premier property investment<br />Kuala Lumpur, Malaysia.
            </p>
          </div>

          {/* Contact details */}
          <div className="flex-1">
            <h3
              className="font-display text-[#E2D9C8] mb-1"
              style={{ fontSize: '1.25rem', fontWeight: 400 }}
            >
              KSR Capital Sdn. Bhd.
            </h3>
            <p className="text-[#C9A227] text-xs tracking-widest mb-6">764906-W</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A227] mt-0.5 flex-shrink-0" />
                <address className="text-[#9A9085] text-sm not-italic leading-relaxed">
                  No. 26510, Lot 10234,<br />
                  Mukim Gombak,<br />
                  Jalan Batu Caves,<br />
                  68100 Batu Caves<br />
                  Selangor Darul Ehsan
                </address>
              </div>

              {/* Phone / Fax / Email */}
              <div className="flex flex-col gap-3">
                <a
                  href="tel:0361867032"
                  className="flex items-center gap-3 text-[#9A9085] hover:text-[#C9A227] text-sm transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                  03-6186 7032
                </a>
                <div className="flex items-center gap-3 text-[#9A9085] text-sm">
                  <Printer className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                  03-6186 6241
                </div>
                <a
                  href="mailto:ksrcapitalsb@gmail.com"
                  className="flex items-center gap-3 text-[#9A9085] hover:text-[#C9A227] text-sm transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                  ksrcapitalsb@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-row md:flex-col gap-5 md:gap-4 flex-shrink-0 md:pt-1">
            {['About', 'Portfolio', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#9A9085] hover:text-[#C9A227] text-sm tracking-wide transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <Separator className="mt-12 mb-6 bg-[#242424]" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[#9A9085] text-xs">
            © {year} KSR Capital Sdn Bhd. All rights reserved.
          </p>
          <p className="text-[#9A9085] text-xs opacity-50">
            Registered in Malaysia · SSM
          </p>
        </div>
      </div>
    </footer>
  )
}
