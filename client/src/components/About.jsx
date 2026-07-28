import useScrollReveal from '../hooks/useScrollReveal'

const techs = [
    'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Docker',
]

export default function About() {
    const ref = useScrollReveal()

    return (
        <section id="about" className="section-padding bg-dark-100">
            <div className="container-width">
                <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center opacity-0 animate-fade-in-up">
                    {/* Left — story */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">About Me</p>
                            <h2 className="text-4xl font-extrabold">
                                Building Systems,{' '}
                                <span className="gradient-text">Not Just Code</span>
                            </h2>
                        </div>
                        <p className="text-zinc-400 leading-relaxed">
                            I'm a passionate junior backend developer with a strong focus on building
                            <span className="text-white font-medium"> scalable, reliable systems</span>. I started
                            my journey by learning JavaScript fundamentals and quickly fell in love with the
                            server-side world — databases, APIs, and the architecture that ties them together.
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                            I have a particular interest in <span className="text-orange-400 font-medium">automation workflows</span>,
                            REST API design, and AI integrations. I love the problem-solving aspect of backend
                            development — taking complex requirements and turning them into clean, maintainable solutions.
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                            When I'm not coding, I'm exploring new tools and technologies, contributing to open-source
                            projects, or learning about system design and distributed architectures.
                        </p>

                        {/* Tech I enjoy */}
                        <div>
                            <p className="text-sm font-semibold text-zinc-300 mb-3">Technologies I enjoy:</p>
                            <div className="flex flex-wrap gap-2">
                                {techs.map(t => (
                                    <span key={t} className="px-3 py-1.5 glass-card text-orange-400 font-mono text-sm rounded-lg hover:border-orange-500/40 transition-colors cursor-default">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — stats / card */}
                    <div className="space-y-4">
                        {/* Currently learning card */}
                        <div className="glass-card rounded-2xl p-6 border border-orange-500/20 orange-glow">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">📚</span>
                                <h3 className="font-semibold text-lg">Currently Learning</h3>
                            </div>
                            <div className="space-y-2">
                                {['Kubernetes & Container Orchestration', 'System Design & Scalability', 'Microservices Architecture', 'Advanced PostgreSQL Optimization'].map(item => (
                                    <div key={item} className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                                        <span className="text-zinc-400 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { value: '10+', label: 'Projects Built' },
                                { value: '2+', label: 'Years Learning' },
                                { value: '5+', label: 'Tech Stacks' },
                            ].map(stat => (
                                <div key={stat.label} className="glass-card rounded-xl p-4 text-center hover:border-orange-500/30 transition-colors">
                                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                                    <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Passion quote */}
                        <div className="glass-card rounded-2xl p-6">
                            <div className="text-orange-500 text-3xl mb-3">"</div>
                            <p className="text-zinc-300 italic leading-relaxed">
                                Clean code isn't just about aesthetics — it's about building systems that scale,
                                that others can maintain, and that solve real problems elegantly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
