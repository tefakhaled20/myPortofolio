import useScrollReveal from '../hooks/useScrollReveal'

const milestones = [
    {
        year: '2023',
        title: 'Started the Journey',
        description: 'Began learning JavaScript fundamentals, HTML/CSS, and programming concepts. Built my first small projects and discovered a passion for logic and problem solving.',
        icon: '🚀',
        tags: ['JavaScript', 'HTML/CSS', 'Programming Fundamentals'],
    },
    {
        year: '2023',
        title: 'Diving into Backend Development',
        description: 'Transitioned to server-side development with Node.js and Express. Learned RESTful API design, HTTP protocols, and built my first backend applications from scratch.',
        icon: '⚙️',
        tags: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
        year: '2024',
        title: 'Databases & Data Modeling',
        description: 'Explored both SQL and NoSQL databases. Learned MongoDB with Mongoose and PostgreSQL. Designed database schemas for real-world applications including relationships and indexing.',
        icon: '🗄️',
        tags: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Database Design'],
    },
    {
        year: '2024',
        title: 'Building Automation Tools',
        description: 'Discovered n8n and workflow automation. Started building automated pipelines for lead management, email marketing, and business process automation for clients.',
        icon: '⚡',
        tags: ['n8n', 'Webhooks', 'Automation', 'APIs'],
    },
    {
        year: '2025',
        title: 'AI Integrations & Scalable Services',
        description: 'Began integrating AI tools into backend workflows. Built systems that leverage OpenAI APIs, implemented vector databases, and created intelligent automation pipelines.',
        icon: '🤖',
        tags: ['AI APIs', 'OpenAI', 'Chatbots', 'Automation'],
    },
    {
        year: '2025 →',
        title: 'Scaling Up: DevOps & Architecture',
        description: 'Currently deep-diving into containerization with Docker, Kubernetes fundamentals, microservices architecture, and system design patterns for high-availability systems.',
        icon: '📈',
        tags: ['Docker', 'Kubernetes', 'Microservices', 'System Design'],
        current: true,
    },
]

export default function Experience() {
    const ref = useScrollReveal()

    return (
        <section id="experience" className="section-padding">
            <div className="container-width">
                <div className="text-center mb-16">
                    <p className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">Experience</p>
                    <h2 className="text-4xl font-extrabold">
                        My Learning <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-zinc-500 mt-3 max-w-lg mx-auto">
                        From writing my first line of code to building full-stack backend systems — here's how my journey unfolded.
                    </p>
                </div>

                <div ref={ref} className="relative opacity-0 animate-fade-in-up">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent" />

                    <div className="space-y-8">
                        {milestones.map((m, i) => (
                            <div key={i} className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Timeline dot */}
                                <div className="absolute left-8 md:left-1/2 top-6 -translate-x-1/2 z-10">
                                    <div className={`w-4 h-4 rounded-full border-2 ${m.current ? 'bg-orange-500 border-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.6)]' : 'bg-dark-900 border-orange-500/60'}`} />
                                </div>

                                {/* Spacer for the opposite side */}
                                <div className="hidden md:block md:w-1/2" />

                                {/* Card */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                                    <div className={`glass-card rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 ${m.current ? 'border-orange-500/30 orange-glow' : ''}`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-xl">{m.icon}</span>
                                            <span className="text-xs font-mono text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded-full">
                                                {m.year}
                                            </span>
                                            {m.current && (
                                                <span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{m.title}</h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed mb-4">{m.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {m.tags.map(tag => (
                                                <span key={tag} className="px-2 py-0.5 bg-white/5 text-zinc-400 font-mono text-xs rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
