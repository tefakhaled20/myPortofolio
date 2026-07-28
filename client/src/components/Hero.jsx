import { useEffect, useRef } from 'react'

const code = `const developer = {
  name: "Mostafa Khaled",
  role: "Junior Backend Developer",
  passion: "Scalable Systems",
  status: "Open to opportunities 🚀"
};`

export default function Hero() {
    const typedRef = useRef(null)

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            if (typedRef.current && i <= code.length) {
                typedRef.current.textContent = code.slice(0, i)
                i++
            } else {
                clearInterval(interval)
            }
        }, 25)
        return () => clearInterval(interval)
    }, [])

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="hero" className="relative min-h-screen flex items-center grid-bg overflow-hidden">
            {/* Radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-width section-padding w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left — text */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-zinc-400 font-mono">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow" />
                            Available for work
                        </div>

                        <div className="space-y-4">
                            <p className="text-orange-500 font-mono text-sm tracking-widest uppercase">
                                Hello, World! 👋
                            </p>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
                                I'm{' '}
                                <span className="gradient-text">Mostafa</span>
                                <br />
                                Khaled
                            </h1>
                            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-400">
                                Junior Backend Developer
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                                I build <span className="text-orange-400 font-semibold">scalable backend systems</span> and
                                automation tools. Passionate about APIs, clean architecture, and solving real-world problems.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => scrollTo('projects')}
                                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 orange-glow"
                            >
                                View Projects →
                            </button>
                            <button
                                onClick={() => scrollTo('contact')}
                                className="px-6 py-3 glass-card hover:border-orange-500/40 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
                            >
                                Contact Me
                            </button>
                            <a
                                href="/cv.pdf"
                                download
                                className="px-6 py-3 border border-zinc-700 hover:border-orange-500/50 text-zinc-400 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                </svg>
                                Download CV
                            </a>
                        </div>

                        {/* Currently learning */}
                        <div className="flex items-center gap-3 text-sm text-zinc-500">
                            <span className="font-mono text-orange-500">📚 Currently Learning:</span>
                            <span className="text-zinc-400">Kubernetes · Microservices · System Design</span>
                        </div>
                    </div>

                    {/* Right — code card */}
                    <div className="hidden lg:flex justify-center">
                        <div className="glass-card rounded-2xl p-6 w-full max-w-md orange-glow animate-float">
                            {/* Terminal header */}
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                                <span className="w-3 h-3 rounded-full bg-red-500" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                <span className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-2 text-xs text-zinc-500 font-mono">developer.js</span>
                            </div>
                            <pre className="font-mono text-sm text-zinc-300 leading-relaxed overflow-x-auto">
                                <code ref={typedRef} />
                                <span className="animate-pulse text-orange-400">|</span>
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 text-xs">
                    <span>Scroll down</span>
                    <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </section>
    )
}
