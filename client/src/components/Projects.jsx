import useScrollReveal from '../hooks/useScrollReveal'

const projects = [
    {
        title: 'E-Commerce Platform API',
        description:
            'A fully-featured RESTful API for an e-commerce platform. Includes product management, user auth, cart, orders, and payment integration. Built with Node.js, Express, and MongoDB.',
        tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe'],
        github: 'https://github.com/tefakhaled20/E-commerce-shop',
        live: 'https://e-commerce-shop-black.vercel.app',
        icon: '🛒',
        featured: true,
    },
    {
        title: 'YouTube Automation Agency Portfolio',
        description:
            'A sleek portfolio website for a YouTube automation agency. Showcases services, case studies, testimonials, and results. Fully responsive with smooth animations.',
        tags: ['React', 'Node.js', 'Express', 'Tailwind'],
        github: 'https://github.com/tefakhaled20/ThumbsUp',
        live: 'https://www.thumbs-ups.com/',
        icon: '🎬',
        featured: true,
    },
    {
        title: 'Marketing Agency Website',
        description:
            'A high-conversion marketing agency website with landing pages, contact forms, newsletter integration, and analytics dashboard for campaign tracking.',
        tags: ['React', 'Node.js', 'Nodemailer', 'PostgreSQL'],
        github: 'https://github.com/tefakhaled20/agency',
        live: "https://agency-olive-nu.vercel.app/",
        icon: '📣',
        featured: false,
    },
    {
        title: 'Motion Graphic Portfolio',
        description:
            'A sleek portfolio website for a motion graphic designer. Showcases services, case studies, testimonials, and results. Fully responsive with smooth animations.',
        tags: ['React', 'Node.js', 'Express', 'Tailwind'],
        github: 'https://github.com/tefakhaled20/motion-graphic-portofolio',
        live: "https://motion-graphic-portofolio.vercel.app/",
        icon: '⚡',
        featured: false,
    },
    {
        title: 'Volunteer Management Backend',
        description:
            'Complete backend system for a volunteer management mobile app. JWT auth, role-based access control (RBAC), task management, location tracking, and announcements API.',
        tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
        github: 'https://github.com',
        live: null,
        icon: '🤝',
        featured: false,
    },
    {
        title: 'REST API Boilerplate',
        description:
            'A production-ready REST API boilerplate with authentication, rate limiting, Swagger docs, environment management, and comprehensive error handling out of the box.',
        tags: ['Node.js', 'Express', 'PostgreSQL', 'Swagger', 'Docker'],
        github: 'https://github.com',
        live: null,
        icon: '🏗️',
        featured: false,
    },
]

function ProjectCard({ project, index }) {
    return (
        <div
            className={`glass-card rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-2 orange-glow-hover group flex flex-col ${project.featured ? 'border-orange-500/20' : ''
                }`}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.icon}</span>
                    {project.featured && (
                        <span className="px-2 py-0.5 bg-orange-500/15 text-orange-400 text-xs font-mono rounded-full border border-orange-500/20">
                            Featured
                        </span>
                    )}
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 glass-card rounded-lg hover:text-orange-400 transition-colors"
                        aria-label="GitHub"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                    </a>
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 glass-card rounded-lg hover:text-orange-400 transition-colors"
                            aria-label="Live Demo"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <h3 className="font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors">
                {project.title}
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/5 text-zinc-400 font-mono text-xs rounded-md">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default function Projects() {
    const ref = useScrollReveal()

    return (
        <section id="projects" className="section-padding bg-dark-100">
            <div className="container-width">
                <div className="text-center mb-16">
                    <p className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">Projects</p>
                    <h2 className="text-4xl font-extrabold">
                        Things I've <span className="gradient-text">Built</span>
                    </h2>
                    <p className="text-zinc-500 mt-3 max-w-lg mx-auto">
                        A selection of projects that demonstrate my backend skills, problem-solving approach, and attention to detail.
                    </p>
                </div>

                <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 animate-fade-in-up">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 glass-card hover:border-orange-500/40 text-zinc-400 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        View All on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}
