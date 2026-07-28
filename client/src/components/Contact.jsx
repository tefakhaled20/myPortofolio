import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:6000'

export default function Contact() {
    const ref = useScrollReveal()
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | loading | success | error
    const [errMsg, setErrMsg] = useState('')

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')
        setErrMsg('')
        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            const data = await res.json()
            if (res.ok && data.success) {
                setStatus('success')
                setForm({ name: '', email: '', message: '' })
            } else {
                setErrMsg(data.message || 'Something went wrong. Please try again.')
                setStatus('error')
            }
        } catch {
            setErrMsg('Could not reach the server. Please try again later.')
            setStatus('error')
        }
    }

    const contactInfo = [
        {
            label: 'Email',
            value: 'mostafa.khaled.mahmoud0@gmail.com',
            href: 'mailto:mostafa.khaled.mahmoud0@gmail.com',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            label: 'LinkedIn',
            value: 'linkedin.com/in/mostafa-khaled',
            href: 'https://www.linkedin.com/in/mostafa-khaled-6b3b47285',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            label: 'GitHub',
            value: 'github.com/tefakhaled20',
            href: 'https://github.com/tefakhaled20',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            ),
        },
    ]

    return (
        <section id="contact" className="section-padding bg-dark-100">
            <div className="container-width">
                <div className="text-center mb-16">
                    <p className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">Contact</p>
                    <h2 className="text-4xl font-extrabold">
                        Let's <span className="gradient-text">Work Together</span>
                    </h2>
                    <p className="text-zinc-500 mt-3 max-w-lg mx-auto">
                        Whether you have a project idea, need a backend developer, or just want to say hi — my inbox is always open.
                    </p>
                </div>

                <div ref={ref} className="grid lg:grid-cols-5 gap-12 opacity-0 animate-fade-in-up">
                    {/* Left — info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Get in touch</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                I'm currently available for freelance work and open to full-time opportunities.
                                If you have a project that needs a backend developer or want to discuss how I can help — reach out!
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map(info => (
                                <a
                                    key={info.label}
                                    href={info.href}
                                    target={info.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-orange-500/30 hover:text-orange-400 transition-all group"
                                >
                                    <span className="text-orange-500 group-hover:scale-110 transition-transform">{info.icon}</span>
                                    <div>
                                        <div className="text-xs text-zinc-500 font-mono">{info.label}</div>
                                        <div className="text-sm text-zinc-300">{info.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right — form */}
                    <div className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="John Smith"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/30 transition-colors text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/30 transition-colors text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/30 transition-colors text-sm resize-none"
                                />
                            </div>

                            {/* Status messages */}
                            {status === 'success' && (
                                <div className="flex items-center gap-3 px-4 py-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm">
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Message sent! I'll get back to you soon.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="flex items-center gap-3 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {errMsg}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] orange-glow flex items-center justify-center gap-2"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message →'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
