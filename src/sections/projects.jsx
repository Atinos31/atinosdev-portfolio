
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
    ArrowUpRight,
    Layers3,
    Code2,
    BriefcaseBusiness,
} from 'lucide-react';

import { SiGithub } from 'react-icons/si';

const BASE = import.meta.env.BASE_URL;

// Project metadata stays independent of language.
// All descriptions and case study text live in projects.json.
const projects = [
    {
        id: 'agrinfo',
        name: 'AGRINFO',
        image: `${BASE}images/projects/agrinfo.png`,
        website: 'https://agrinfo.eu/',
        github: null,
        technologies: [
            'Python',
            'Django',
            'Wagtail CMS',
            'PostgreSQL',
            'JavaScript',
            'Tailwind CSS',
            'Alpine.js',
            'React.js',
            'Matomo Analytics',
            'Meilisearch',
            'DeepL API',
        ],
        accent: '#38bdf8',
    },
    {
        id: 'agrinnovators',
        name: 'Agrinnovators',
        image: `${BASE}images/projects/agrinnovators.png`,
        website: 'https://agrinnovators.org/',
        github: null,
        technologies: [
            'WordPress',
            'Divi',
            'PHP',
            'JavaScript',
            'ACF',
            'WPML',
            'jQuery',
            'CSS',
            'Google Analytics',
        ],
        accent: '#2dd4bf',
    },
    {
        id: 'ai-employees',
        name: 'Django AI Employees',
        image: null,
        website: null,
        github:
            'https://github.com/Atinos31/django-ai-employees',
        technologies: [
            'Python',
            'Django',
            'MySQL',
            'ChromaDB',
            'LangChain',
            'Claude API',
            'AI Agents — Learning',
        ],
        accent: '#c084fc',
    },
];

// Screenshot or placeholder for projects without images.
function ProjectVisual({ project }) {
    const { t } = useTranslation();
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
                        aria-hidden="true"
                    />

                    <p className="font-semibold text-white">
                        {project.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                        {project.id === 'ai-employees'
                            ? t('projects.developmentInProgress')
                            : t('projects.showcase')}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <img
            src={project.image}
            alt={t('projects.imageAlt', {
                name: project.name,
            })}
            onError={() => setImageFailed(true)}
            className="aspect-video w-full rounded-xl
                 object-cover object-top"
            loading="lazy"
        />
    );
}

export default function Projects() {
    const { t } = useTranslation();

    const [selectedId, setSelectedId] =
        useState('agrinnovators');

    const selected =
        projects.find((project) => project.id === selectedId) ??
        projects[0];

    function projectText(project, key) {
        return t(`projects.items.${project.id}.${key}`);
    }

    function getContributions(project) {
        const result = t(
            `projects.items.${project.id}.contributions`,
            { returnObjects: true }
        );

        return Array.isArray(result) ? result : [];
    }

    function translateTechnology(technology) {
        if (technology === 'AI Agents — Learning') {
            return `AI Agents — ${t('projects.learning')}`;
        }

        return technology;
    }

    return (
        <section
            id="projects"
            className="bg-[#080f1e] py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* SECTION INTRODUCTION */}
                <p
                    className="text-sm font-semibold uppercase
                     tracking-[0.25em] text-teal-400"
                >
                    {t('projects.eyebrow')}
                </p>

                <h2
                    className="mt-4 text-3xl font-bold
                     text-white sm:text-4xl"
                >
                    {t('projects.title')}
                </h2>

                <p
                    className="mt-4 max-w-3xl
                     leading-relaxed text-slate-400"
                >
                    {t('projects.description')}
                </p>

                {/* PROJECT SELECTION */}
                <div
                    className="mt-10 grid gap-3 sm:grid-cols-3"
                    role="group"
                    aria-label={t('projects.chooseProject')}
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
                                {/* Project category */}
                                <span
                                    className="text-xs uppercase
                             tracking-wider text-slate-400"
                                >
                  {projectText(project, 'eyebrow')}
                </span>

                                {/* Project name */}
                                <span
                                    className="mt-2 block text-lg
                             font-semibold text-white"
                                >
                  {project.name}
                </span>

                                {/* Short project description */}
                                <span
                                    className="mt-1 block text-sm
                             text-slate-400"
                                >
                  {projectText(project, 'tagline')}
                </span>
                            </button>
                        );
                    })}
                </div>

                {/* SELECTED PROJECT CASE STUDY */}
                <div
                    className="mt-6 grid gap-8
                     rounded-2xl border
                     border-white/10
                     bg-[#102033] p-5
                     md:p-8 lg:grid-cols-2"
                >
                    {/* LEFT: PROJECT IMAGE AND LINKS */}
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
                                    {t('projects.visitWebsite')}
                                    <ArrowUpRight
                                        size={16}
                                        aria-hidden="true"
                                    />
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
                                    <SiGithub
                                        size={16}
                                        aria-hidden="true"
                                    />

                                    {t('projects.viewCode')}
                                </a>
                            )}
                        </div>
                    </div>

                    {/* RIGHT: PROJECT DETAILS */}
                    <div className="min-w-0">
                        <p
                            className="text-xs font-semibold
                         uppercase tracking-widest"
                            style={{
                                color: selected.accent,
                            }}
                        >
                            {t('projects.caseStudy')}
                        </p>

                        <h3
                            className="mt-3 text-2xl
                         font-bold text-white"
                        >
                            {selected.name}
                        </h3>

                        {/* Overview */}
                        <p
                            className="mt-3 leading-relaxed
                         text-slate-300"
                        >
                            {projectText(selected, 'overview')}
                        </p>

                        {/* My role */}
                        <div
                            className="mt-6 flex items-center
                         gap-2 text-sm text-teal-300"
                        >
                            <BriefcaseBusiness
                                size={17}
                                aria-hidden="true"
                            />

                            {projectText(selected, 'role')}
                        </div>

                        {/* Contributions heading */}
                        <h4
                            className="mt-7 flex items-center
                         gap-2 font-semibold
                         text-white"
                        >
                            <Code2
                                size={18}
                                className="text-teal-400"
                                aria-hidden="true"
                            />

                            {t('projects.contribution')}
                        </h4>

                        {/* Contributions list */}
                        <ul className="mt-3 space-y-2">
                            {getContributions(selected).map(
                                (item, index) => (
                                    <li
                                        key={`${selected.id}-${index}`}
                                        className="flex gap-3
                               text-sm leading-relaxed
                               text-slate-300"
                                    >
                    <span
                        className="mt-1 text-teal-400"
                        aria-hidden="true"
                    >
                      ▸
                    </span>

                                        <span>{item}</span>
                                    </li>
                                )
                            )}
                        </ul>

                        {/* TECHNOLOGIES */}
                        <h4
                            className="mt-7 font-semibold
                         text-white"
                        >
                            {t('projects.technologies')}
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
                  {translateTechnology(tech)}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

