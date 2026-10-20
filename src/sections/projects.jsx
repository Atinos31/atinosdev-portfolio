
import { useState } from 'react';
import {
    ArrowUpRight,
    Layers3,
    Code2,
    BriefcaseBusiness,
} from 'lucide-react';

import { SiGithub } from 'react-icons/si';


const BASE = import.meta.env.BASE_URL;

const projects = [
    {
        id: 'agrinfo',
        name: 'AGRINFO',
        eyebrow: 'PROFESSIONAL PROJECT · FULL-STACK',
        tagline: 'Supporting access to regulatory intelligence',
        image: `${BASE}images/projects/agrinfo.png`,
        website: 'https://agrinfo.eu/',
        github: null,
        role: 'Full-stack development team member',
        overview:
            'AGRINFO helps agri-food stakeholders understand changing EU regulatory requirements and their implications for market access.',
        contributions: [
            'Contributed to development of the AGRINFO platform.',
            'Worked within a Python, Django and Wagtail-based stack.',
            'Used PostgreSQL and frontend technologies in a content-rich application.',
            'Collaborated within a professional development environment.',
        ],
        technologies: [
            'Python', 'Django', 'Wagtail CMS', 'PostgreSQL', 'JavaScript',
            'Tailwind CSS','Alpine.js','React.js','Matomo Analytics', 'Meilisearch','DeepL Api'
        ],
        accent: '#38bdf8',
    },
    {
        id: 'agrinnovators',
        name: 'Agrinnovators',
        eyebrow: 'PROFESSIONAL PROJECT · WORDPRESS',
        tagline: 'Building a platform for agri-food innovation',
        image: `${BASE}images/projects/agrinnovators.png`,
        website: 'https://agrinnovators.org/',
        github: null,
        role: 'Website developer — end-to-end implementation',
        overview:
            'A digital platform supporting agri-food innovation, entrepreneurship and knowledge sharing.',
        contributions: [
            'Implemented the website using WordPress and Divi.',
            'Developed custom PHP, JavaScript, jQuery and CSS functionality.',
            'Created custom post types, ACF fields and dynamic content queries.',
            'Implemented search, filtering and user registration features.',
            'Supported multilingual content with WPML.',
        ],
        technologies: [
            'WordPress', 'Divi', 'PHP', 'JavaScript',
            'ACF', 'WPML', 'jQuery', 'CSS','Google Analytics',
        ],
        accent: '#2dd4bf',
    },
    {
        id: 'ai-employees',
        name: 'Django AI Employees',
        eyebrow: 'PERSONAL PROJECT · IN PROGRESS',
        tagline: 'Exploring intelligent customer support systems',
        image: null,
        website: null,
        github:
            'https://github.com/Atinos31/django-ai-employees',
        role: 'Independent developer',
        overview:
            'A Django project exploring the foundations of AI-assisted customer support, order management and intelligent workflows.',
        contributions: [
            'Structured Django applications for orders and support.',
            'Implemented domain models for products, orders and refund requests.',
            'Developed conversation, message and agent log data structures.',
            'Continuing work on LLM integration, agent workflows and automation.',
        ],
        technologies: [
            'Python', 'Django', 'MySQL','ChromaDB','LangChain','Claude Api',
            'AI Agents — Learning',
        ],
        accent: '#c084fc',
    },
];



function ProjectVisual({ project }) {
    const [imageFailed, setImageFailed] = useState(false);

    if (!project.image || imageFailed) {
        return (
            <div
                className="flex aspect-video items-center
                   justify-center rounded-xl
                   bg-gradient-to-br
                   from-[#19304a] to-[#081321]"
            >
                <div className="text-center">
                    <Layers3
                        className="mx-auto mb-3 text-teal-300"
                        size={48}
                    />
                    <p className="font-semibold text-white">
                        {project.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                        {project.id === 'ai-employees'
                            ? 'Development in progress'
                            : 'Project showcase'}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <img
            src={project.image}
            alt={`${project.name} website screenshot`}
            onError={() => setImageFailed(true)}
            className="aspect-video w-full rounded-xl
                 object-cover object-top"
            loading="lazy"
        />
    );
}

export default function Projects() {
    const [selectedId, setSelectedId] =
        useState('agrinnovators');

    const selected =
        projects.find((p) => p.id === selectedId) ??
        projects[0];

    return (
        <section
            id="projects"
            className="bg-[#080f1e] py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
                    Selected Work
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                    Engineering with purpose
                </h2>

                <p className="mt-4 max-w-3xl leading-relaxed text-slate-400">
                    From professional web platforms to
                    independent AI experiments, here is how
                    I translate requirements into working software.
                </p>

                {/* Project selection */}
                <div
                    className="mt-10 grid gap-3 sm:grid-cols-3"
                    role="group"
                    aria-label="Choose a project"
                >
                    {projects.map((project) => {
                        const active = project.id === selectedId;

                        return (
                            <button
                                key={project.id}
                                type="button"
                                onClick={() => setSelectedId(project.id)}
                                aria-pressed={active}
                                className={`rounded-xl border p-4
                            text-left transition-colors
                            focus-visible:outline-2
                            focus-visible:outline-teal-400
                  ${
                                    active
                                        ? 'border-teal-400 bg-teal-400/10'
                                        : 'border-white/10 bg-[#102033] hover:border-teal-400/40'
                                }`}
                            >
                <span className="text-xs uppercase tracking-wider text-slate-400">
                  {project.eyebrow}
                </span>

                                <span className="mt-2 block text-lg font-semibold text-white">
                  {project.name}
                </span>

                                <span className="mt-1 block text-sm text-slate-400">
                  {project.tagline}
                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Selected project case study */}
                <div
                    className="mt-6 grid gap-8 rounded-2xl
                     border border-white/10
                     bg-[#102033] p-5
                     md:p-8 lg:grid-cols-2"
                >
                    <div className="min-w-0">
                        <ProjectVisual
                            key={selected.id}
                            project={selected}
                        />

                        <div className="mt-6 flex flex-wrap gap-3">
                            {selected.website && (
                                <a
                                    href={selected.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center
                             gap-2 rounded-lg
                             bg-teal-400 px-4 py-2.5
                             text-sm font-semibold
                             text-slate-950
                             hover:bg-teal-300"
                                >
                                    Visit Website
                                    <ArrowUpRight size={16} />
                                </a>
                            )}

                            {selected.github && (
                                <a
                                    href={selected.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center
                             gap-2 rounded-lg border
                             border-white/20 px-4
                             py-2.5 text-sm
                             font-semibold text-white
                             hover:border-teal-400"
                                >
                                    <SiGithub size={16} />
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="min-w-0">
                        <p
                            className="text-xs font-semibold uppercase tracking-widest"
                            style={{ color: selected.accent }}
                        >
                            Project Case Study
                        </p>

                        <h3 className="mt-3 text-2xl font-bold text-white">
                            {selected.name}
                        </h3>

                        <p className="mt-3 leading-relaxed text-slate-300">
                            {selected.overview}
                        </p>

                        <div className="mt-6 flex items-center gap-2 text-sm text-teal-300">
                            <BriefcaseBusiness size={17} />
                            {selected.role}
                        </div>

                        <h4 className="mt-7 flex items-center gap-2 font-semibold text-white">
                            <Code2 size={18} className="text-teal-400" />
                            My Contribution
                        </h4>

                        <ul className="mt-3 space-y-2">
                            {selected.contributions.map((item) => (
                                <li
                                    key={item}
                                    className="flex gap-3 text-sm
                             leading-relaxed text-slate-300"
                                >
                  <span className="mt-1 text-teal-400">
                    ▸
                  </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h4 className="mt-7 font-semibold text-white">
                            Technologies
                        </h4>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {selected.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border
                             border-white/10
                             bg-white/5 px-3 py-1.5
                             text-xs text-slate-200"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
