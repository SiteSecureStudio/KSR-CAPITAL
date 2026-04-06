import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../brand assests/KSR Capital logo design.png'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, ChevronDown } from 'lucide-react'

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/approach', label: 'Our Approach' },
  { href: '/contact', label: 'Contact' },
]

const aboutSubLinks = [
  { href: '/about', label: 'Our Story' },
  { href: '/about/director', label: 'Meet The Director' },
]

function AboutDropdown({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isAboutActive = pathname.startsWith('/about')

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(v => !v)}
        className={[
          'px-4 py-2 text-sm tracking-wide rounded-none transition-colors duration-200 inline-flex items-center gap-1',
          isAboutActive ? 'text-[#C9A227]' : 'text-[#9A9085] hover:text-[#E2D9C8] hover:bg-white/5',
        ].join(' ')}
      >
        About
        <ChevronDown
          className="h-3 w-3 transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className="absolute top-full left-0 min-w-[200px] overflow-hidden"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transform: open ? 'translateY(0)' : 'translateY(-6px)',
          transition: 'opacity 0.18s ease, transform 0.18s ease',
          background: 'rgba(8,8,8,0.97)',
          border: '1px solid rgba(201,162,39,0.15)',
          backdropFilter: 'blur(16px)',
          marginTop: '8px',
        }}
      >
        {aboutSubLinks.map(({ href, label }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              to={href}
              className={[
                'block px-5 py-3.5 text-sm tracking-wide border-b border-[#1a1a1a] last:border-b-0 transition-colors duration-150',
                active
                  ? 'text-[#C9A227] bg-white/[0.03]'
                  : 'text-[#9A9085] hover:text-[#E2D9C8] hover:bg-white/[0.04]',
              ].join(' ')}
            >
              {label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/'
  const solidBg = scrolled || !isHome
  const isAboutActive = pathname.startsWith('/about')

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12"
      style={{
        height: '76px',
        background: solidBg ? 'rgba(8,8,8,0.94)' : 'transparent',
        backdropFilter: solidBg ? 'blur(14px)' : 'none',
        borderBottom: solidBg ? '1px solid rgba(201,162,39,0.12)' : '1px solid transparent',
        transition: 'background 0.45s ease, border-color 0.45s ease, backdrop-filter 0.45s ease',
      }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="KSR Capital Sdn Bhd" className="h-12 md:h-16 w-auto object-contain" />
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            {/* Home */}
            <NavigationMenuItem>
              <Link
                to="/"
                className={[
                  'px-4 py-2 text-sm tracking-wide rounded-none transition-colors duration-200 inline-flex items-center',
                  pathname === '/' ? 'text-[#C9A227]' : 'text-[#9A9085] hover:text-[#E2D9C8] hover:bg-white/5',
                ].join(' ')}
              >
                Home
              </Link>
            </NavigationMenuItem>

            {/* About dropdown */}
            <NavigationMenuItem>
              <AboutDropdown pathname={pathname} />
            </NavigationMenuItem>

            {/* Remaining links */}
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href))
              return (
                <NavigationMenuItem key={label}>
                  <Link
                    to={href}
                    className={[
                      'px-4 py-2 text-sm tracking-wide rounded-none transition-colors duration-200 inline-flex items-center',
                      active ? 'text-[#C9A227]' : 'text-[#9A9085] hover:text-[#E2D9C8] hover:bg-white/5',
                    ].join(' ')}
                  >
                    {label}
                  </Link>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-[#C9A227] text-[#C9A227] bg-transparent hover:bg-[#C9A227] hover:text-[#080808] rounded-none text-xs tracking-widest uppercase font-semibold transition-colors duration-250"
        >
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>

      {/* Mobile nav — Sheet drawer */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-[#E2D9C8] hover:bg-white/10 rounded-none">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-l border-[#242424] bg-[#080808]/97 backdrop-blur-2xl p-0"
          >
            <div className="flex flex-col gap-0 pt-20 px-8">
              {/* Home */}
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className={[
                  'py-5 text-sm tracking-wide border-b border-[#242424] transition-colors duration-200',
                  pathname === '/' ? 'text-[#C9A227]' : 'text-[#9A9085] hover:text-[#C9A227]',
                ].join(' ')}
              >
                Home
              </Link>

              {/* About accordion */}
              <div className="border-b border-[#242424]">
                <button
                  onClick={() => setMobileAboutOpen(v => !v)}
                  className={[
                    'w-full py-5 text-sm tracking-wide flex items-center justify-between transition-colors duration-200',
                    isAboutActive ? 'text-[#C9A227]' : 'text-[#9A9085] hover:text-[#C9A227]',
                  ].join(' ')}
                >
                  About
                  <ChevronDown
                    className="h-3 w-3 transition-transform duration-200"
                    style={{ transform: mobileAboutOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                {mobileAboutOpen && (
                  <div className="pb-2 space-y-0">
                    {aboutSubLinks.map(({ href, label }) => (
                      <Link
                        key={href}
                        to={href}
                        onClick={() => { setOpen(false); setMobileAboutOpen(false) }}
                        className={[
                          'block py-3 pl-4 text-sm tracking-wide transition-colors duration-200',
                          pathname === href ? 'text-[#C9A227]' : 'text-[#6B6560] hover:text-[#C9A227]',
                        ].join(' ')}
                      >
                        — {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Remaining links */}
              {navLinks.map(({ href, label }) => {
                const active = pathname === href || (href !== '/' && pathname.startsWith(href))
                return (
                  <Link
                    key={label}
                    to={href}
                    onClick={() => setOpen(false)}
                    className={[
                      'py-5 text-sm tracking-wide border-b border-[#242424] transition-colors duration-200',
                      active ? 'text-[#C9A227]' : 'text-[#9A9085] hover:text-[#C9A227]',
                    ].join(' ')}
                  >
                    {label}
                  </Link>
                )
              })}

              <Button
                asChild
                className="mt-8 bg-[#C9A227] text-[#080808] hover:bg-[#E8C964] rounded-none text-xs tracking-widest uppercase font-semibold"
              >
                <Link to="/contact" onClick={() => setOpen(false)}>Get in Touch</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
