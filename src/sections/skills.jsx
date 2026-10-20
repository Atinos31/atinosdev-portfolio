
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

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

// Keep the existing filename exactly as it appears in your project.
import TechStackBackground from '../components/TechStackBackgroud.jsx';

// Technology information that does not change with language.
// Text descriptions are loaded from skills.json.
const skills = [
    // BACKEND
    {
        id: 'python',
        name: 'Python',
        category: 'backend',
        icon: SiPython,
        color: '#3776AB',
    },
    {
        id: 'django',
        name: 'Django',
        category: 'backend',
        icon: SiDjango,
        color: '#44B78B',
    },
    {
        id: 'php',
        name: 'PHP',
        category: 'backend',
        icon: SiPhp,
        color: '#8892BF',
    },
    {
        id: 'rest',
        name: 'REST APIs',
        category: 'backend',
        icon: FaCode,
        color: '#2DD4BF',
    },

    // FRONTEND
    {
        id: 'javascript',
        name: 'JavaScript',
        category: 'frontend',
        icon: SiJavascript,
        color: '#F7DF1E',
    },
    {
        id: 'react',
        name: 'React',
        category: 'frontend',
        icon: SiReact,
        color: '#61DAFB',
    },
    {
        id: 'html',
        name: 'HTML5',
        category: 'frontend',
        icon: SiHtml5,
        color: '#E34F26',
    },
    {
        id: 'css',
        name: 'CSS3',
        category: 'frontend',
        icon: SiCss,
        color: '#1572B6',
    },
    {
        id: 'tailwind',
        name: 'Tailwind CSS',
        category: 'frontend',
        icon: SiTailwindcss,
        color: '#06B6D4',
    },
    {
        id: 'bootstrap',
        name: 'Bootstrap',
        category: 'frontend',
        icon: SiBootstrap,
        color: '#7952B3',
    },
    {
        id: 'jquery',
        name: 'jQuery',
        category: 'frontend',
        icon: SiJquery,
        color: '#78CFF5',
    },

    // DATABASES
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        category: 'databases',
        icon: SiPostgresql,
        color: '#699EBD',
    },
    {
        id: 'mysql',
        name: 'MySQL',
        category: 'databases',
        icon: SiMysql,
        color: '#F29111',
    },

    // CMS
    {
        id: 'wordpress',
        name: 'WordPress',
        category: 'cms',
        icon: SiWordpress,
        color: '#38BDF8',
    },
    {
        id: 'wagtail',
        name: 'Wagtail',
        category: 'cms',
        icon: FaFeatherAlt,
        color: '#34C7B5',
    },
    {
        id: 'divi',
        name: 'Divi',
        category: 'cms',
        icon: FaCubes,
        color: '#A78BFA',
    },
    {
        id: 'acf',
        name: 'ACF',
        category: 'cms',
        icon: FaDatabase,
        color: '#60A5FA',
    },
    {
        id: 'wpml',
        name: 'WPML',
        category: 'cms',
        icon: FaNetworkWired,
        color: '#F59E0B',
    },

    // TOOLS & DEPLOYMENT
    {
        id: 'git',
        name: 'Git',
        category: 'tools',
        icon: SiGit,
        color: '#F05032',
    },
    {
        id: 'github',
        name: 'GitHub',
        category: 'tools',
        icon: SiGithub,
        color: '#FFFFFF',
    },
    {
        id: 'vite',
        name: 'Vite',
        category: 'tools',
        icon: SiVite,
        color: '#A78BFA',
    },
    {
        id: 'docker',
        name: 'Docker',
        category: 'tools',
        icon: SiDocker,
        color: '#2496ED',
        status: 'learning',
    },

    // AI & DATA
    {
        id: 'llm',
        name: 'LLM APIs',
        category: 'ai',
        icon: FaBrain,
        color: '#C084FC',
        status: 'learning',
    },
    {
        id: 'agents',
        name: 'AI Agents',
        category: 'ai',
        icon: FaCubes,
        color: '#A78BFA',
        status: 'learning',
    },
    {
        id: 'rag',
        name: 'RAG',
        category: 'ai',
        icon: FaNetworkWired,
        color: '#5EEAD4',
        status: 'exploring',
    },
    {
        id: 'huggingface',
        name: 'Hugging Face',
        category: 'ai',
        icon: FaRegSmile,
        color: '#FFCD34',
        status: 'exploring',
    },
    {
        id: 'pandas',
        name: 'Pandas',
        category: 'ai',
        icon: SiPandas,
        color: '#E70488',
        status: 'learning',
    },
    {
        id: 'vector',
        name: 'Vector Search',
        category: 'ai',
        icon: FaDatabase,
        color: '#2DD4BF',
        status: 'exploring',
    },
    {
        id: 'pipelines',
        name: 'Data Pipelines',
        category: 'ai',
        icon: FaServer,
        color: '#38BDF8',
        status: 'learning',
    },
];

const categories = [
    'all',
    'backend',
    'frontend',
    'databases',
    'cms',
    'tools',
    'ai',
];

const hexagon =
    'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)';

// Interactive 3D hexagonal tile
function SkillTile({
                       skill,
                       selected,
                       onSelect,
                   }) {
    const { t } = useTranslation();
    const tileRef = useRef(null);

    const description = t(
        `skills.descriptions.${skill.id}`
    );

    function resetTilt() {
        if (!tileRef.current) return;

        tileRef.current.style.transform =
            'rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }

    function handlePointerMove(event) {
        if (event.pointerType !== 'mouse') return;

        if (
            window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ).matches
        ) {
            return;
        }

        const tile = tileRef.current;
        const rect = tile?.getBoundingClientRect();

        if (!tile || !rect) return;

        const x =
            (event.clientX - rect.left) / rect.width - 0.5;

        const y =
            (event.clientY - rect.top) / rect.height - 0.5;

        tile.style.transform = `
      rotateX(${-y * 18}deg)
      rotateY(${x * 18}deg)
      translateZ(12px)
    `;
    }

    const Icon = skill.icon;

    return (
        <button
            type="button"
            onClick={() => onSelect(skill)}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
            onBlur={resetTilt}
            aria-pressed={selected}
            aria-label={t('skills.learnAbout', {
                name: skill.name,
            })}
            title={description}
            className="group flex min-w-0 flex-col
                 items-center gap-3 rounded-xl
                 p-1 text-center
                 focus-visible:outline-2
                 focus-visible:outline-teal-400
                 motion-reduce:transition-none"
            style={{ perspective: '750px' }}
        >
            {/* Hexagonal icon */}
            <div
                ref={tileRef}
                className={`flex aspect-square w-full
                    max-w-28 items-center
                    justify-center p-[2px] ${
                    selected
                        ? 'bg-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]'
                        : 'bg-[#31566B] group-hover:bg-teal-400'
                }`}
                style={{
                    clipPath: hexagon,
                    transformStyle: 'preserve-3d',
                }}
            >
        <span
            className="flex h-full w-full
                     items-center justify-center"
            style={{
                transformStyle: 'preserve-3d',
                clipPath: hexagon,
            }}
        >
          <Icon
              size={39}
              color={skill.color}
              aria-hidden="true"
          />
        </span>
            </div>

            {/* Technology label */}
            <div>
                <p className="text-sm font-medium text-white">
                    {skill.name}
                </p>

                {skill.status && (
                    <p
                        className={`mt-1 text-xs ${
                            skill.status === 'learning'
                                ? 'text-violet-300'
                                : 'text-slate-400'
                        }`}
                    >
                        {t(`skills.statuses.${skill.status}`)}
                    </p>
                )}
            </div>
        </button>
    );
}

export default function Skills() {
    const { t } = useTranslation();

    const [activeCategory, setActiveCategory] =
        useState('all');

    const [selectedSkill, setSelectedSkill] =
        useState(null);

    const filteredSkills =
        activeCategory === 'all'
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
            previous?.id === skill.id ? null : skill
        );
    }

    const SelectedIcon = selectedSkill?.icon;

    return (
        <section
            id="skills"
            className="relative isolate overflow-hidden
                 bg-[#080f1e] py-24"
        >
            {/* Three.js background */}
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
                {/* Section heading */}
                <p
                    className="mb-4 text-sm font-semibold
                     uppercase tracking-[0.25em]
                     text-teal-400"
                >
                    {t('skills.eyebrow')}
                </p>

                <h2
                    className="text-3xl font-bold
                     text-white sm:text-4xl"
                >
                    {t('skills.title')}
                </h2>

                <p
                    className="mt-4 max-w-2xl
                     leading-relaxed text-slate-400"
                >
                    {t('skills.description')}
                </p>

                {/* Category filters */}
                <div
                    className="mt-10 flex flex-wrap gap-3"
                    role="group"
                    aria-label={t('skills.filtersLabel')}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => changeCategory(category)}
                            aria-pressed={activeCategory === category}
                            className={`rounded-full border
                          px-5 py-2 text-sm
                          transition-colors ${
                                activeCategory === category
                                    ? 'border-teal-400 bg-teal-400 font-semibold text-slate-950'
                                    : 'border-white/15 text-slate-300 hover:border-teal-400/50 hover:text-teal-300'
                            }`}
                        >
                            {t(`skills.categories.${category}`)}
                        </button>
                    ))}
                </div>

                {/* Hexagonal skills grid */}
                <div
                    className="mt-12 grid grid-cols-3
                     gap-x-5 gap-y-10
                     sm:grid-cols-4
                     md:grid-cols-6
                     lg:grid-cols-7"
                >
                    {filteredSkills.map((skill) => (
                        <SkillTile
                            key={skill.id}
                            skill={skill}
                            selected={selectedSkill?.id === skill.id}
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
                        aria-label={t('skills.detailsLabel', {
                            name: selectedSkill.name,
                        })}
                    >
                        <div
                            className="flex flex-wrap items-start
                         justify-between gap-4"
                        >
                            <div
                                className="flex items-center gap-4"
                            >
                                {SelectedIcon && (
                                    <SelectedIcon
                                        size={36}
                                        color={selectedSkill.color}
                                        aria-hidden="true"
                                    />
                                )}

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
                                        {t(
                                            `skills.categories.${selectedSkill.category}`
                                        )}

                                        {selectedSkill.status &&
                                            ` · ${t(
                                                `skills.statuses.${selectedSkill.status}`
                                            )}`}
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedSkill(null)}
                                className="rounded-lg border
                           border-white/20
                           px-3 py-1.5
                           text-sm text-slate-300
                           hover:text-white"
                                aria-label={t('skills.close')}
                            >
                                {t('skills.close')} ×
                            </button>
                        </div>

                        <p
                            className="mt-5 max-w-3xl
                         leading-relaxed text-slate-300"
                        >
                            {t(
                                `skills.descriptions.${selectedSkill.id}`
                            )}
                        </p>
                    </div>
                )}

                {/* AI learning transparency notice */}
                {(activeCategory === 'all' ||
                    activeCategory === 'ai') && (
                    <p
                        className="mt-12 max-w-3xl
                       rounded-xl border
                       border-violet-400/20
                       bg-violet-400/5 p-5
                       text-sm leading-relaxed
                       text-slate-300"
                    >
                        {t('skills.notice')}
                    </p>
                )}
            </div>
        </section>
    );
}
