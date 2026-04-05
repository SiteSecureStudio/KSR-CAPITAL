import { useState, useEffect } from 'react'
import logo from '../../brand assests/KSR Capital logo design.png'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12"
      style={{
        height: '76px',
        background: scrolled ? 'rgba(8,8,8,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,162,39,0.12)' : '1px solid transparent',
        transition: 'background 0.45s ease, border-color 0.45s ease, backdrop-filter 0.45s ease',
      }}
    >
      {/* Logo */}
      <a href="#hero" className="flex items-center">
        <img src={logo} alt="KSR Capital Sdn Bhd" className="h-12 md:h-16 w-auto object-contain" />
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            {navLinks.map(({ href, label }) => (
              <NavigationMenuItem key={label}>
                <NavigationMenuLink
                  href={href}
                  className="px-4 py-2 text-sm tracking-wide text-[#9A9085] hover:text-[#E2D9C8] hover:bg-white/5 rounded-none transition-colors duration-200 inline-flex items-center"
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-[#C9A227] text-[#C9A227] bg-transparent hover:bg-[#C9A227] hover:text-[#080808] rounded-none text-xs tracking-widest uppercase font-semibold transition-colors duration-250"
        >
          <a href="#contact">Get in Touch</a>
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
              {navLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="py-5 text-[#9A9085] hover:text-[#C9A227] text-sm tracking-wide border-b border-[#242424] transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
              <Button
                asChild
                className="mt-8 bg-[#C9A227] text-[#080808] hover:bg-[#E8C964] rounded-none text-xs tracking-widest uppercase font-semibold"
              >
                <a href="#contact" onClick={() => setOpen(false)}>Get in Touch</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
