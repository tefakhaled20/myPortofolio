import { useState, useEffect } from 'react'

const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setActive(id)
        setIsOpen(false)
    }

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
            }`}>
            <div className="container-width flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <button onClick={() => scrollTo('hero')} className="font-mono text-xl font-bold gradient-text">
                    &lt;DevPortfolio /&gt;
                </button>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className={`text-sm font-medium transition-colors duration-200 hover:text-orange-500 ${active === link.id ? 'text-orange-500' : 'text-zinc-400'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollTo('contact')}
                        className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                    >
                        Hire Me
                    </button>
                </div>

                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
                <div className="bg-black/95 backdrop-blur-md border-b border-white/5 px-4 py-4 flex flex-col gap-4">
                    {navLinks.map(link => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="text-base font-medium text-zinc-400 hover:text-orange-500 text-left transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollTo('contact')}
                        className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg w-fit transition-colors"
                    >
                        Hire Me
                    </button>
                </div>
            </div>
        </nav>
    )
}
