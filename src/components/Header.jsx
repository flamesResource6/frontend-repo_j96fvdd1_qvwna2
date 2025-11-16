import { useEffect, useState } from 'react'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-semibold tracking-tight text-white text-lg lg:text-xl">
            Meal.ai
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#product" className="hover:text-white transition-colors">Product</a>
            <a href="#docs" className="hover:text-white transition-colors">Docs</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#login" className="hover:text-white transition-colors">Login</a>
            <a href="#get-started" className="ml-2 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-black bg-cyan-400 hover:bg-cyan-300 transition-colors">Get Started</a>
          </nav>

          {/* Mobile CTA */}
          <a href="#get-started" className="md:hidden inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium text-black bg-cyan-400 hover:bg-cyan-300 transition-colors">Start</a>
        </div>
      </div>
    </header>
  )
}

export default Header
