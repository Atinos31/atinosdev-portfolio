
import { useState } from 'react';

// --------------------------------------
// 1. PROJECT DATA
// --------------------------------------

const projects = [
    {
        id: 1,
        number: '01',
        category: 'Professional Project',
        title: 'AGRINFO — EU Regulatory Intelligence Platform',
        description:'An EU-funded digital platform that helps agri-food stakeholders in low- and middle-income countries monitor changes to European regulations and market-access requirements. As a full-stack developer, I contributed to developing and maintaining the platform.',
        technologies: [
            'Python',
            'Django',
            'Wagtail',
            'PostgreSQL',
            'JavaScript',
            'Tailwind CSS',
            'Alpine.js',
            'Deepl API',
            'Matomo Analytics',
        ],
        image: '/images/projects/agrinfo.png',
        website: 'https://agrinfo.eu/',
        github: null,
        status: 'Professional Work',
        initials: 'AGR',
        gradient: 'from-teal-500/20 to-cyan-500/5',
    },

    {
        id: 2,
        number: '02',
        category: 'Professional Project',
        title: 'Agrinnovators — Agrifood Entrepreneurship Hub',
        description:'A digital platform by COLEAD connecting agrifood entrepreneurs with industry insights, innovation, networking opportunities, and business support services. As part of the development team, I contributed to developing and maintaining the platform.',
        technologies: [
            'WordPress',
            'PHP',
            'Divi',
            'JavaScript',
            'CSS',
            'jquery',
            'ajax',
            'Advanced Custom Fields',


        ],
        image: '/images/projects/agrinnovators.png',
        website: 'https://agrinnovators.org/',
        github: null,
        status: 'Professional Work',
        initials: 'AGI',
        gradient: 'from-emerald-500/20 to-lime-500/5',
    },

    {
        id: 3,
        number: '03',
        category: 'Personal AI Agents Project',
        title: 'AI Customer Support System',
        description:
            'An ongoing Django application exploring AI-assisted customer support, order management, refund workflows and conversational agents. Advanced AI functionality is under development.',
        technologies: [
            'Python',
            'Django',
            'MySQL',
            'AI Agents',
            'REST APIs',
            'ChromaDB',
            'Claude Api'
        ],
        image: '/images/projects/ai-support.png',
        website: null,
        github: 'https://github.com/Atinos31/django-ai-employees',
        status: 'In Development',
        initials: 'AI',
        gradient: 'from-violet-500/20 to-teal-500/5',
    },
];

// --------------------------------------
// 2. PROJECT IMAGE COMPONENT
// --------------------------------------

function ProjectImage({ project }) {
    const [hasError, setHasError] = useState(false);

    const showImage = project.image && !hasError;

    return (
        <div
            className={`relative h-52 overflow-hidden
                  border-b border-white/10
                  bg-gradient-to-br ${project.gradient}`}
        >
            {showImage ? (
                <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    loading="lazy"
                    onError={() => setHasError(true)}
                    className="h-full w-full object-cover object-top
                     transition-transform duration-500
                     group-hover:scale-105"
                />
            ) : (
                <div
                    className="flex h-full items-center
                     justify-center"
                >
                    <div
                        className="flex h-24 w-24 items-center
                       justify-center rounded-2xl
                       border border-white/20
                       bg-white/5 text-3xl
                       font-bold tracking-tight
                       text-teal-300"
                    >
                        {project.initials}
                    </div>
                </div>
            )}

            <span
                className="absolute bottom-4 left-4 rounded-md
                   border border-white/20 bg-slate-950/80
                   px-3 py-1 text-xs font-medium text-white"
            >
        {project.number}
      </span>
        </div>
    );
}

// --------------------------------------
// 3. TECHNOLOGY BADGE COMPONENT
// --------------------------------------

function TechnologyBadge({ name }) {
    return (
        <span
            className="rounded-md border border-teal-400/15
                 bg-teal-400/10 px-3 py-1.5
                 text-xs font-medium text-teal-200"
        >
      {name}
    </span>
    );
}

// --------------------------------------
// 4. PROJECT CARD COMPONENT
// --------------------------------------

function ProjectCard({ project }) {
    return (
        <article
            className="group flex h-full flex-col
                 overflow-hidden rounded-2xl
                 border border-white/10
                 bg-white/[0.03]
                 transition duration-300
                 hover:-translate-y-1
                 hover:border-teal-400/40
                 hover:shadow-xl
                 hover:shadow-teal-500/5"
        >
            {/* Project screenshot */}
            <ProjectImage project={project} />

            {/* Project information */}
            <div className="flex flex-1 flex-col p-6">

                {/* Category and status */}
                <div
                    className="mb-4 flex flex-wrap
                     items-center justify-between gap-2"
                >
          <span
              className="text-xs font-semibold
                       uppercase tracking-wider
                       text-teal-400"
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

                {/* Project title */}
                <h3
                    className="mb-3 text-2xl font-bold
                     tracking-tight text-white"
                >
                    {project.title}
                </h3>

                {/* Project description */}
                <p
                    className="flex-1 leading-relaxed
                     text-slate-400"
                >
                    {project.description}
                </p>

                {/* Technology stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <TechnologyBadge
                            key={technology}
                            name={technology}
                        />
                    ))}
                </div>

                {/* Links */}
                <div
                    className="mt-7 flex flex-wrap
                     items-center gap-5
                     border-t border-white/10 pt-5"
                >
                    {project.website && (
                        <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${project.title} website`}
                            className="text-sm font-semibold
                         text-white transition
                         hover:text-teal-400"
                        >
                            Live Website ↗
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} source code`}
                            className="text-sm font-semibold
                         text-white transition
                         hover:text-teal-400"
                        >
                            GitHub Repository ↗
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

// --------------------------------------
// 5. MAIN PROJECTS SECTION
// --------------------------------------

export default function Projects() {
    return (
        <section
            id="projects"
            className="mx-auto max-w-7xl px-6
                 py-24 lg:px-12"
        >
            {/* Section introduction */}
            <div className="mb-12">
                <p
                    className="mb-4 text-sm font-semibold
                     uppercase tracking-[0.25em]
                     text-teal-400"
                >
                    Portfolio
                </p>

                <h2
                    className="text-3xl font-bold
                     tracking-tight text-white
                     sm:text-4xl"
                >
                    Featured Projects
                </h2>

                <p
                    className="mt-5 max-w-2xl text-lg
                     leading-relaxed text-slate-400"
                >
                    A selection of production platforms
                    I've contributed to and independent
                    software projects I'm developing.
                </p>
            </div>

            {/* Responsive project grid */}
            <div
                className="grid gap-6
                   md:grid-cols-2
                   xl:grid-cols-3"
            >
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>

            {/* More projects */}
            <div className="mt-12 text-center">
                <a
                    href="https://github.com/Atinos31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center
                     rounded-lg border
                     border-teal-400/40
                     px-6 py-3 font-semibold
                     text-teal-300
                     transition
                     hover:bg-teal-400/10"
                >
                    Explore More Projects on GitHub ↗
                </a>
            </div>
        </section>
    );
}
