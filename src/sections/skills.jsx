

import { useRef, useState } from 'react';

import {
    SiPython,
    SiDjango,
    SiPhp,
    SiJavascript,
    SiReact,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiBootstrap,
    SiJquery,
    SiPostgresql,
    SiMysql,
    SiWordpress,
    SiGit,
    SiGithub,
    SiDocker,
    SiVite,
    SiPandas,
} from 'react-icons/si';

import {
    FaCode,
    FaDatabase,
    FaBrain,
    FaNetworkWired,
    FaServer,
    FaCubes,
    FaFeatherAlt,
    FaRegSmile,
} from 'react-icons/fa';

import TechStackBackground from '../components/TechStackBackgroud.jsx';


// ---------------------------------------
// TECHNOLOGY DATA
// ---------------------------------------

const skills = [
    // BACKEND
    {
        name: 'Python',
        category: 'Backend',
        icon: SiPython,
        color: '#3776AB',
        description:
            'Backend development, business logic, automation, and Python applications.',
    },
    {
        name: 'Django',
        category: 'Backend',
        icon: SiDjango,
        color: '#44B78B',
        description:
            'Building web applications, database-backed services, and backend systems.',
    },
    {
        name: 'PHP',
        category: 'Backend',
        icon: SiPhp,
        color: '#8892BF',
        description:
            'Custom WordPress functionality, templates, queries, and integrations.',
    },
    {
        name: 'REST APIs',
        category: 'Backend',
        icon: FaCode,
        color: '#2DD4BF',
        description:
            'Developing and integrating APIs between web applications and external systems.',
    },

    // FRONTEND
    {
        name: 'JavaScript',
        category: 'Frontend',
        icon: SiJavascript,
        color: '#F7DF1E',
        description:
            'Interactive frontend functionality and application behaviour.',
    },
    {
        name: 'React',
        category: 'Frontend',
        icon: SiReact,
        color: '#61DAFB',
        description:
            'Reusable UI components, state management, and modern frontend applications.',
    },
    {
        name: 'HTML5',
        category: 'Frontend',
        icon: SiHtml5,
        color: '#E34F26',
        description:
            'Semantic page structure and accessible markup.',
    },
    {
        name: 'CSS3',
        category: 'Frontend',
        icon: SiCss,
        color: '#1572B6',
        description:
            'Responsive layouts, custom styling, and interface presentation.',
    },
    {
        name: 'Tailwind CSS',
        category: 'Frontend',
        icon: SiTailwindcss,
        color: '#06B6D4',
        description:
            'Building responsive interfaces with utility-first CSS.',
    },
    {
        name: 'Bootstrap',
        category: 'Frontend',
        icon: SiBootstrap,
        color: '#7952B3',
        description:
            'Responsive interface components and layouts.',
    },
    {
        name: 'jQuery',
        category: 'Frontend',
        icon: SiJquery,
        color: '#78CFF5',
        description:
            'Custom interactions and dynamic functionality in WordPress websites.',
    },

    // DATABASES
    {
        name: 'PostgreSQL',
        category: 'Databases',
        icon: SiPostgresql,
        color: '#699EBD',
        description:
            'Relational data modelling, queries, and database-backed Django applications.',
    },
    {
        name: 'MySQL',
        category: 'Databases',
        icon: SiMysql,
        color: '#F29111',
        description:
            'SQL queries and relational data storage.',
    },

    // CMS
    {
        name: 'WordPress',
        category: 'CMS',
        icon: SiWordpress,
        color: '#38BDF8',
        description:
            'Custom WordPress development, content structures, and website integrations.',
    },
    {
        name: 'Wagtail',
        category: 'CMS',
        icon: FaFeatherAlt,
        color: '#34C7B5',
        description:
            'Building content-managed websites using Django and Wagtail.',
    },
    {
        name: 'Divi',
        category: 'CMS',
        icon: FaCubes,
        color: '#A78BFA',
        description:
            'Custom Divi websites with PHP, JavaScript, and responsive styling.',
    },
    {
        name: 'ACF',
        category: 'CMS',
        icon: FaDatabase,
        color: '#60A5FA',
        description:
            'Advanced Custom Fields for structured WordPress content.',
    },
    {
        name: 'WPML',
        category: 'CMS',
        icon: FaNetworkWired,
        color: '#F59E0B',
        description:
            'Multilingual content and functionality in WordPress.',
    },

    // TOOLS & DEPLOYMENT
    {
        name: 'Git',
        category: 'Tools & Deployment',
        icon: SiGit,
        color: '#F05032',
        description:
            'Version control, branching, and collaborative development.',
    },
    {
        name: 'GitHub',
        category: 'Tools & Deployment',
        icon: SiGithub,
        color: '#FFFFFF',
        description:
            'Source repositories, collaboration, and GitHub Actions.',
    },
    {
        name: 'Vite',
        category: 'Tools & Deployment',
        icon: SiVite,
        color: '#A78BFA',
        description:
            'Modern React application tooling and production builds.',
    },
    {
        name: 'Docker',
        category: 'Tools & Deployment',
        icon: SiDocker,
        color: '#2496ED',
        description:
            'Learning container-based application packaging and deployment.',
        status: 'Learning',
    },

    // AI & DATA
    {
        name: 'LLM APIs',
        category: 'AI & Data',
        icon: FaBrain,
        color: '#C084FC',
        description:
            'Learning language model API integration, structured outputs, and tool calling.',
        status: 'Learning',
    },
    {
        name: 'AI Agents',
        category: 'AI & Data',
        icon: FaCubes,
        color: '#A78BFA',
        description:
            'Developing knowledge of AI workflows, agent tools, and automation.',
        status: 'Learning',
    },
    {
        name: 'RAG',
        category: 'AI & Data',
        icon: FaNetworkWired,
        color: '#5EEAD4',
        description:
            'Exploring retrieval-augmented generation and document-grounded responses.',
        status: 'Exploring',
    },
    {
        name: 'Hugging Face',
        category: 'AI & Data',
        icon: FaRegSmile,
        color: '#FFCD34',
        description:
            'Exploring open models, datasets, Transformers, and inference.',
        status: 'Exploring',
    },
    {
        name: 'Pandas',
        category: 'AI & Data',
        icon: SiPandas,
        color: '#E70488',
        description:
            'Learning data analysis, cleaning, and transformation with Python.',
        status: 'Learning',
    },
    {
        name: 'Vector Search',
        category: 'AI & Data',
        icon: FaDatabase,
        color: '#2DD4BF',
        description:
            'Exploring embeddings and semantic search for AI applications.',
        status: 'Exploring',
    },
    {
        name: 'Data Pipelines',
        category: 'AI & Data',
        icon: FaServer,
        color: '#38BDF8',
        description:
            'Learning data processing and ETL workflows.',
        status: 'Learning',
    },
];

const categories = [
    'All',
    'Backend',
    'Frontend',
    'Databases',
    'CMS',
    'Tools & Deployment',
    'AI & Data',
];

const hexagon =
    'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)';

// ---------------------------------------
// INTERACTIVE 3D SKILL TILE
// ---------------------------------------

function SkillTile({ skill, selected, onSelect }) {
    const Icon = skill.icon; // Properly set icon component
    const tileRef = useRef(null);

    function resetTilt() {
        if (!tileRef.current) return;
        tileRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }

    function handlePointerMove(event) {
        if (event.pointerType !== 'mouse') return;

        // Respect user's motion preferences
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const tile = tileRef.current;
        const rect = tile?.getBoundingClientRect();

        if (!rect) return;

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        tile.style.transform = `
            rotateX(${-y * 18}deg)
            rotateY(${x * 18}deg)
            translateZ(12px)
        `;
    }

    return (
        <button
            type="button"
            onClick={() => onSelect(skill)}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
            onBlur={resetTilt}
            aria-pressed={selected}
            aria-label={`Learn about ${skill.name}`}
            title={skill.description}
            className="group flex min-w-0 flex-col items-center gap-3 rounded-xl
                       p-1 text-center focus-visible:outline-2
                       focus-visible:outline-teal-400 motion-reduce:transition-none"
            style={{ perspective: '750px' }}
        >
            <div
                ref={tileRef}
                className={`flex aspect-square w-full max-w-28 items-center justify-center p-[2px]
                          ${selected ? 'bg-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]'
                    : 'bg-[#31566B] group-hover:bg-teal-400'}`}
                style={{
                    clipPath: hexagon,
                    transformStyle: 'preserve-3d',
                }}
            >
                <span
                    className="flex h-full w-full items-center justify-center"
                    style={{
                        transformStyle: 'preserve-3d',
                        clipPath: hexagon,
                    }}
                >
                    <Icon size={39} color={skill.color} aria-hidden="true" />
                </span>
            </div>

            <div>
                <p className="text-sm font-medium text-white">
                    {skill.name}
                </p>

                {skill.status && (
                    <p className={`mt-1 text-xs ${skill.status === 'Learning' ? 'text-violet-300' : 'text-slate-400'}`}>
                        {skill.status}
                    </p>
                )}
            </div>
        </button>
    );
}


// ---------------------------------------
// MAIN SECTION
// ---------------------------------------

export default function Skills() {
    const [activeCategory, setActiveCategory] =
        useState('All');

    const [selectedSkill, setSelectedSkill] =
        useState(null);

    const filteredSkills =
        activeCategory === 'All'
            ? skills
            : skills.filter(
                (skill) => skill.category === activeCategory
            );

    function changeCategory(category) {
        setActiveCategory(category);
        setSelectedSkill(null);
    }

    function selectSkill(skill) {
        setSelectedSkill((previous) =>
            previous?.name === skill.name ? null : skill
        );
    }

    return (
        <section
            id="skills"
            className="relative isolate overflow-hidden
                 bg-[#080f1e] py-24"
        >
            <TechStackBackground />

            <div
                className="pointer-events-none absolute
                   inset-0 bg-gradient-to-b
                   from-[#080f1e]/30
                   via-transparent
                   to-[#080f1e]/40"
            />

            <div
                className="relative z-10 mx-auto
                   max-w-7xl px-6 lg:px-12"
            >
                {/* Heading */}
                <p
                    className="mb-4 text-sm font-semibold
                     uppercase tracking-[0.25em]
                     text-teal-400"
                >
                    Technologies & Expertise
                </p>

                <h2
                    className="text-3xl font-bold
                     text-white sm:text-4xl"
                >
                    My Tech Stack
                </h2>

                <p
                    className="mt-4 max-w-2xl
                     leading-relaxed text-slate-400"
                >
                    Technologies I use to build web
                    applications and backend systems,
                    alongside tools I'm exploring as
                    I expand into AI and data engineering.
                </p>

                {/* Filters */}
                <div
                    className="mt-10 flex flex-wrap gap-3"
                    role="group"
                    aria-label="Technology filters"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => changeCategory(category)}
                            aria-pressed={
                                activeCategory === category
                            }
                            className={`rounded-full border px-5
                          py-2 text-sm
                          transition-colors
                ${
                                activeCategory === category
                                    ? 'border-teal-400 bg-teal-400 font-semibold text-slate-950'
                                    : 'border-white/15 text-slate-300 hover:border-teal-400/50 hover:text-teal-300'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* 3D hexagonal grid */}
                <div
                    className="mt-12 grid grid-cols-3
                     gap-x-5 gap-y-10
                     sm:grid-cols-4
                     md:grid-cols-6
                     lg:grid-cols-7"
                >
                    {filteredSkills.map((skill) => (
                        <SkillTile
                            key={skill.name}
                            skill={skill}
                            selected={
                                selectedSkill?.name === skill.name
                            }
                            onSelect={selectSkill}
                        />
                    ))}
                </div>

                {/* Click-to-reveal detail panel */}
                {selectedSkill && (
                    <div
                        className="mt-12 rounded-2xl
                       border border-teal-400/30
                       bg-[#102237]/95 p-6
                       shadow-xl shadow-black/10"
                        role="region"
                        aria-label={`${selectedSkill.name} details`}
                    >
                        <div
                            className="flex flex-wrap
                         items-start justify-between
                         gap-4"
                        >
                            <div className="flex items-center gap-4">
                                <selectedSkill.icon
                                    size={36}
                                    color={selectedSkill.color}
                                    aria-hidden="true"
                                />

                                <div>
                                    <h3
                                        className="text-xl font-semibold
                               text-white"
                                    >
                                        {selectedSkill.name}
                                    </h3>

                                    <p
                                        className="mt-1 text-sm
                               text-teal-300"
                                    >
                                        {selectedSkill.category}
                                        {selectedSkill.status &&
                                            ` · ${selectedSkill.status}`}
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedSkill(null)}
                                className="rounded-lg border
                           border-white/20 px-3 py-1.5
                           text-sm text-slate-300
                           hover:text-white"
                                aria-label="Close skill details"
                            >
                                Close ×
                            </button>
                        </div>

                        <p
                            className="mt-5 max-w-3xl
                         leading-relaxed text-slate-300"
                        >
                            {selectedSkill.description}
                        </p>
                    </div>
                )}

                {/* AI career transition notice */}
                {(activeCategory === 'All' ||
                    activeCategory === 'AI & Data') && (
                    <p
                        className="mt-12 max-w-3xl
                       rounded-xl border
                       border-violet-400/20
                       bg-violet-400/5 p-5
                       text-sm leading-relaxed
                       text-slate-300"
                    >
                        I'm expanding my professional Python
                        and full-stack development experience
                        into AI-powered applications,
                        intelligent workflows and data
                        engineering. Learning and Exploring
                        labels indicate technologies I'm
                        still developing.
                    </p>
                )}
            </div>
        </section>
    );
}
