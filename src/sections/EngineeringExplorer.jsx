
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
    Code2,
    BrainCircuit,
    Database,
    Orbit,
    ExternalLink,
    ArrowUpRight,
} from 'lucide-react';

import EngineeringScene, {
    engineeringAreas,
} from '../components/EngineeringScene.jsx';

const areaIcons = {
    web: Code2,
    ai: BrainCircuit,
    data: Database,
    creative: Orbit,
};

// Translate status labels without changing technology names.
function translateTechnology(technology, t) {
    return technology
        .replace(
            ' — Learning',
            ` — ${t('engineering.statuses.learning')}`
        )
        .replace(
            ' — Exploring',
            ` — ${t('engineering.statuses.exploring')}`
        );
}

// Identify known projects by their existing URLs.
// Project links themselves are never translated.
function translateProjectName(project, t) {
    const url = project.url || '';

    if (url.includes('agrinfo.eu')) {
        return t('engineering.projectNames.agrinfo');
    }

    if (url.includes('agrinnovators.org')) {
        return t('engineering.projectNames.agrinnovators');
    }

    if (url.includes('django-ai-employees')) {
        return t('engineering.projectNames.aiEmployees');
    }

    if (url.includes('atinosdev-portfolio')) {
        return t('engineering.projectNames.portfolio');
    }

    return project.name;
}

function useReducedMotion() {
    const [reducedMotion, setReducedMotion] =
        useState(false);

    useEffect(() => {
        const media = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        );

        const update = () => {
            setReducedMotion(media.matches);
        };

        update();

        if (media.addEventListener) {
            media.addEventListener('change', update);

            return () => {
                media.removeEventListener('change', update);
            };
        }

        return undefined;
    }, []);

    return reducedMotion;
}

export default function EngineeringExplorer() {
    const { t } = useTranslation();

    const [selectedId, setSelectedId] =
        useState('web');

    const reducedMotion = useReducedMotion();

    const selectedArea =
        engineeringAreas.find(
            (area) => area.id === selectedId
        ) ?? engineeringAreas[0];

    const SelectedIcon = areaIcons[selectedArea.id];

    function areaTitle(area) {
        return t(`engineering.areas.${area.id}.title`, {
            defaultValue: area.title,
        });
    }

    function areaSubtitle(area) {
        return t(`engineering.areas.${area.id}.subtitle`, {
            defaultValue: area.subtitle,
        });
    }

    function areaDescription(area) {
        return t(`engineering.areas.${area.id}.description`, {
            defaultValue: area.description,
        });
    }

    return (
        <section
            id="engineering"
            className="relative isolate overflow-hidden
                 bg-[#080f1e] py-20 sm:py-28"
        >
            {/* Subtle background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute
                   left-1/2 top-1/3 -z-10
                   h-80 w-80 -translate-x-1/2
                   rounded-full bg-teal-500/5
                   blur-3xl"
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* INTRODUCTION */}
                <div className="max-w-3xl">
                    <p
                        className="text-xs font-semibold
                       uppercase tracking-[0.25em]
                       text-teal-400"
                    >
                        {t('engineering.eyebrow')}
                    </p>

                    <h2
                        className="mt-4 text-3xl font-bold
                       tracking-tight text-white
                       sm:text-4xl"
                    >
                        {t('engineering.title')}
                    </h2>

                    <p
                        className="mt-5 leading-relaxed
                       text-slate-400"
                    >
                        {t('engineering.description')}
                    </p>
                </div>

                {/* EXPLORER LAYOUT */}
                <div
                    className="mt-12 grid items-center gap-8
                     lg:grid-cols-2"
                >
                    {/* LEFT: THREE.JS VISUALIZATION */}
                    <div
                        className="min-w-0 overflow-hidden
                       rounded-3xl border
                       border-teal-400/10
                       bg-[#0a1829]/70"
                    >
                        <EngineeringScene
                            selectedId={selectedId}
                            onSelect={setSelectedId}
                            reducedMotion={reducedMotion}
                        />

                        <p
                            className="px-5 pb-4 text-center
                         text-xs text-slate-500"
                        >
                            {t('engineering.instruction')}
                        </p>
                    </div>

                    {/* RIGHT: INTERACTIVE INFORMATION */}
                    <div className="min-w-0">
                        {/* Engineering category buttons */}
                        <div
                            className="grid grid-cols-2 gap-3"
                            role="group"
                            aria-label={t(
                                'engineering.disciplinesLabel'
                            )}
                        >
                            {engineeringAreas.map((area) => {
                                const Icon = areaIcons[area.id];
                                const selected =
                                    selectedId === area.id;

                                return (
                                    <button
                                        key={area.id}
                                        type="button"
                                        onClick={() =>
                                            setSelectedId(area.id)
                                        }
                                        aria-pressed={selected}
                                        className={`rounded-xl border
                                p-4 text-left
                                transition-colors
                                focus-visible:outline-2
                                focus-visible:outline-teal-400
                      ${
                                            selected
                                                ? 'border-teal-400/70 bg-teal-400/10'
                                                : 'border-white/10 bg-[#102033] hover:border-teal-400/40'
                                        }`}
                                    >
                                        <Icon
                                            size={23}
                                            color={area.color}
                                            aria-hidden="true"
                                        />

                                        <span
                                            className="mt-3 block
                                 text-sm font-semibold
                                 text-white"
                                        >
                      {areaTitle(area)}
                    </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* SELECTED AREA DETAILS */}
                        <div
                            className="mt-5 rounded-2xl
                         border border-white/10
                         bg-[#102033] p-6"
                            aria-live="polite"
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className="rounded-lg p-3"
                                    style={{
                                        backgroundColor:
                                            `${selectedArea.color}18`,
                                    }}
                                >
                                    <SelectedIcon
                                        size={25}
                                        color={selectedArea.color}
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <h3
                                        className="text-xl font-semibold
                               text-white"
                                    >
                                        {areaTitle(selectedArea)}
                                    </h3>

                                    <p
                                        className="mt-1 text-sm
                               text-teal-300"
                                    >
                                        {areaSubtitle(selectedArea)}
                                    </p>
                                </div>
                            </div>

                            <p
                                className="mt-6 leading-relaxed
                           text-slate-300"
                            >
                                {areaDescription(selectedArea)}
                            </p>

                            {/* TECHNOLOGIES */}
                            <div className="mt-6">
                                <h4
                                    className="text-xs font-semibold
                             uppercase tracking-widest
                             text-slate-400"
                                >
                                    {t('engineering.technologies')}
                                </h4>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {selectedArea.technologies.map(
                                        (technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full
                                   border border-white/10
                                   bg-white/5 px-3 py-1.5
                                   text-xs text-slate-200"
                                            >
                        {translateTechnology(
                            technology,
                            t
                        )}
                      </span>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* RELATED PROJECTS */}
                            <div className="mt-7">
                                <h4
                                    className="text-xs font-semibold
                             uppercase tracking-widest
                             text-slate-400"
                                >
                                    {t('engineering.relatedProjects')}
                                </h4>

                                {selectedArea.projects.length > 0 ? (
                                    <div className="mt-3 space-y-3">
                                        {selectedArea.projects.map(
                                            (project) => (
                                                <a
                                                    key={project.url}
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center
                                     justify-between gap-3
                                     rounded-lg border
                                     border-white/10 p-3
                                     text-sm text-white
                                     transition-colors
                                     hover:border-teal-400/50
                                     hover:text-teal-300"
                                                >
                          <span>
                            {translateProjectName(
                                project,
                                t
                            )}
                          </span>

                                                    <ExternalLink
                                                        size={15}
                                                        aria-hidden="true"
                                                    />
                                                </a>
                                            )
                                        )}
                                    </div>
                                ) : (
                                    <p
                                        className="mt-3 text-sm
                               text-slate-400"
                                    >
                                        {t('engineering.noProjects')}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION FOOTER */}
                <div
                    className="mt-10 flex flex-wrap
                     items-center justify-between
                     gap-4 border-t border-white/10
                     pt-6"
                >
                    <p className="text-sm text-slate-400">
                        {t('engineering.footer')}
                    </p>

                    <a
                        href="#projects"
                        className="inline-flex items-center
                       gap-2 text-sm font-semibold
                       text-teal-300
                       hover:text-teal-200"
                    >
                        {t('engineering.exploreProjects')}

                        <ArrowUpRight
                            size={17}
                            aria-hidden="true"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
