import useScrollReveal from '../hooks/useScrollReveal'

const skillGroups = [
    {
        category: 'Backend',
        icon: '⚙️',
        color: 'from-orange-500/20 to-orange-600/5',
        border: 'border-orange-500/20',
        skills: [
            { name: 'Node.js', level: 80 },
            { name: 'Express.js', level: 82 },
            { name: 'REST APIs', level: 85 },
            { name: 'Database Design', level: 75 },
        ],
    },
    {
        category: 'Databases',
        icon: '🗄️',
        color: 'from-blue-500/20 to-blue-600/5',
        border: 'border-blue-500/20',
        skills: [
            { name: 'MongoDB', level: 78 },
            { name: 'PostgreSQL', level: 72 },
        ],
    },
    {
        category: 'Tools & DevOps',
        icon: '🛠️',
        color: 'from-green-500/20 to-green-600/5',
        border: 'border-green-500/20',
        skills: [
            { name: 'Git', level: 85 },
            { name: 'Docker', level: 68 },
            { name: 'n8n', level: 75 },
            { name: 'Postman', level: 90 },
        ],
    },
]

function SkillBar({ name, level, delay }) {
    return (
        <div className="space-y-1.5" style={{ animationDelay: `${delay}ms` }}>
            <div className="flex justify-between text-sm">
                <span className="text-zinc-300 font-medium">{name}</span>
                <span className="text-zinc-500 font-mono">{level}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${level}%` }}
                />
            </div>
        </div>
    )
}

export default function Skills() {
    const ref = useScrollReveal()

    return (
        <section id="skills" className="section-padding">
            <div className="container-width">
                <div className="text-center mb-16">
                    <p className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">Skills</p>
                    <h2 className="text-4xl font-extrabold">
                        My <span className="gradient-text">Tech Stack</span>
                    </h2>
                    <p className="text-zinc-500 mt-3 max-w-md mx-auto">
                        Technologies I work with to build scalable backend systems and automation tools.
                    </p>
                </div>

                <div ref={ref} className="grid md:grid-cols-3 gap-6 opacity-0 animate-fade-in-up">
                    {skillGroups.map(group => (
                        <div
                            key={group.category}
                            className={`glass-card rounded-2xl p-6 border ${group.border} bg-gradient-to-br ${group.color} hover:scale-105 transition-transform duration-300 orange-glow-hover`}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl">{group.icon}</span>
                                <h3 className="text-lg font-bold">{group.category}</h3>
                            </div>
                            <div className="space-y-4">
                                {group.skills.map((skill, i) => (
                                    <SkillBar key={skill.name} {...skill} delay={i * 100} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Extra badges row */}
                <div className="mt-12 text-center">
                    <p className="text-zinc-500 text-sm mb-4">Also familiar with:</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['JavaScript (ES6+)', 'Python', 'JWT Auth', 'WebSockets', 'Redis', 'Nginx', 'Linux', 'Mongoose'].map(tech => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 glass-card text-zinc-400 font-mono text-xs rounded-full hover:text-orange-400 hover:border-orange-500/30 transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
