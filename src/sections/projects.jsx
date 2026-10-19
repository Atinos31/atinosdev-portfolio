
const projects = [
    {
        id: 1,
        number: '01',
        category: 'Professional Project',
        title: 'AGRINFO',
        description:
            'A digital regulatory intelligence platform supporting agricultural trade and market access. I contributed to backend functionality, CMS development, APIs, debugging and user-facing improvements at COLEAD.',
        technologies: [
            'Python',
            'Django',
            'Wagtail',
            'PostgreSQL',
            'JavaScript',
            'Tailwind CSS',
        ],
        website: 'https://agrinfo.eu',
        github: null,
        status: 'Professional work',
        color: 'from-teal-500/20 to-cyan-500/5',
        initials: 'AGR',
    },
    {
        id: 2,
        number: '02',
        category: 'Professional Project',
        title: 'Agrinnovators',
        description:
            'An agricultural innovation platform. My contributions at COLEAD included CMS functionality, content structures, backend development and frontend improvements.',
        technologies: [
            'WordPress',
            'PHP',
            'Divi',
            'JavaScript',
            'CSS',
        ],
        website: 'https://agrinnovators.org',
        github: null,
        status: 'Professional work',
        color: 'from-emerald-500/20 to-lime-500/5',
        initials: 'AGI',
    },
    {
        id: 3,
        number: '03',
        category: 'Personal Engineering Project',
        title: 'AI Customer Support System',
        description:
            'A Django-based customer support application under active development. Product, order and refund data models are implemented. AI agents, retrieval and streaming features are planned.',
        technologies: [
            'Python',
            'Django',
            'MySQL',
            'AI Agents (planned)',
            'RAG (planned)',
        ],
        website: null,
        github:
            'https://github.com/Atinos31/django-ai-employees',
        status: 'In development',
        color: 'from-violet-500/20 to-teal-500/5',
        initials: 'AI',
    },
];

function ProjectCard({ project }) {
    return (
        <article
            className="group overflow-hidden rounded-2xl
                 border border-white/10 bg-white/[0.03]
                 transition duration-300
                 hover:-translate-y-1
                 hover:border-teal-400/40"
        >
            {/* Project visual */}
            <div
                className={`flex h-48 items-center justify-center
                    bg-gradient-to-br ${project.color}
                    border-b border-white/10`}
            >
                <div
                    className="flex h-24 w-24 items-center justify-center
                     rounded-2xl border border-white/20
                     bg-white/5 text-3xl font-bold
                     tracking-tight text-teal-300
                     transition group-hover:scale-105"
                >
                    {project.initials}
                </div>
            </div>

            {/* Project information */}
            <div className="p-6">
                <div className="mb-4 flex flex-wrap items-center
                        justify-between gap-2">
          <span
              className="text-xs font-semibold uppercase
                       tracking-widest text-teal-400"
          >
            {project.category}
          </span>

                    <span
                        className="rounded-full border border-white/10
                       px-3 py-1 text-xs text-slate-400"
                    >
            {project.status}
          </span>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-white">
                    {project.title}
                </h3>

                <p className="min-h-32 leading-relaxed text-slate-400">
                    {project.description}
                </p>

                {/* Technology badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-md border border-teal-400/15
                         bg-teal-400/10 px-3 py-1.5
                         text-xs font-medium text-teal-200"
                        >
              {tech}
            </span>
                    ))}
                </div>

                {/* Only show links that exist */}
                <div className="mt-7 flex flex-wrap gap-5">
                    {project.website && (
                        <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-white
                         transition hover:text-teal-400"
                        >
                            Visit Website ↗
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-white
                         transition hover:text-teal-400"
                        >
                            View Source Code ↗
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="mx-auto max-w-7xl px-6 py-24 lg:px-12"
        >
            <div className="mb-12">
                <p
                    className="mb-4 text-sm font-semibold uppercase
                     tracking-[0.25em] text-teal-400"
                >
                    My Work
                </p>

                <h2
                    className="text-3xl font-bold tracking-tight
                     text-white sm:text-4xl"
                >
                    Featured Projects
                </h2>

                <p
                    className="mt-5 max-w-2xl text-lg
                     leading-relaxed text-slate-400"
                >
                    A selection of professional platforms I've
                    contributed to and engineering projects
                    I'm developing independently.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>

            <div className="mt-12 text-center">
                <a
                    href="https://github.com/Atinos31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg
                     border border-teal-400/40 px-6 py-3
                     font-semibold text-teal-300
                     transition hover:bg-teal-400/10"
                >
                    Explore More on GitHub ↗
                </a>
            </div>
        </section>
    );
}
