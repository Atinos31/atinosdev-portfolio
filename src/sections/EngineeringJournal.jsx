
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
    BookOpen,
    ChevronDown,
    ChevronUp,
    Code2,
    BrainCircuit,
    Box,
} from 'lucide-react';

// Journal article configuration.
// All translated content lives in journal.json.
const notes = [
    {
        id: 'django',
        icon: Code2,
        tags: ['Python', 'Django', 'Wagtail'],
    },
    {
        id: 'three',
        icon: Box,
        tags: ['React', 'Three.js', 'React Three Fiber'],
    },
    {
        id: 'ai',
        icon: BrainCircuit,
        tags: ['Python', 'Django', 'aiLearning'],
    },
];

export default function EngineeringJournal() {
    const { t } = useTranslation();

    const [expandedId, setExpandedId] = useState(null);

    function toggleNote(id) {
        setExpandedId((current) =>
            current === id ? null : id
        );
    }

    function translateTag(tag) {
        if (tag === 'aiLearning') {
            return t('journal.tags.aiLearning');
        }

        // Technology names remain unchanged.
        return tag;
    }

    return (
        <section
            id="journal"
            className="bg-[#080f1e] py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* SECTION INTRODUCTION */}
                <p
                    className="text-sm font-semibold uppercase
                     tracking-[0.25em] text-teal-400"
                >
                    {t('journal.eyebrow')}
                </p>

                <h2
                    className="mt-4 text-3xl font-bold
                     text-white sm:text-4xl"
                >
                    {t('journal.title')}
                </h2>

                <p
                    className="mt-4 max-w-2xl
                     leading-relaxed text-slate-400"
                >
                    {t('journal.description')}
                </p>

                {/* JOURNAL CARDS */}
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {notes.map((note) => {
                        const Icon = note.icon;
                        const expanded = expandedId === note.id;

                        const noteKey = `journal.notes.${note.id}`;

                        return (
                            <article
                                key={note.id}
                                className="flex flex-col rounded-2xl
                           border border-white/10
                           bg-[#102033] p-6"
                            >
                                {/* Category icon */}
                                <Icon
                                    size={28}
                                    className="text-teal-400"
                                    aria-hidden="true"
                                />

                                {/* Category */}
                                <p
                                    className="mt-5 text-xs font-semibold
                             tracking-widest text-teal-300"
                                >
                                    {t(`${noteKey}.category`)}
                                </p>

                                {/* Title */}
                                <h3
                                    className="mt-3 text-xl
                             font-semibold text-white"
                                >
                                    {t(`${noteKey}.title`)}
                                </h3>

                                {/* Summary */}
                                <p
                                    className="mt-4 text-sm
                             leading-relaxed text-slate-400"
                                >
                                    {t(`${noteKey}.summary`)}
                                </p>

                                {/* Expanded article */}
                                <div
                                    id={`note-${note.id}`}
                                    hidden={!expanded}
                                    className="mt-4"
                                >
                                    {expanded && (
                                        <p
                                            className="text-sm leading-relaxed
                                 text-slate-300"
                                        >
                                            {t(`${noteKey}.content`)}
                                        </p>
                                    )}
                                </div>

                                {/* Technology tags */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {note.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-white/5
                                 px-3 py-1 text-xs
                                 text-slate-300"
                                        >
                      {translateTag(tag)}
                    </span>
                                    ))}
                                </div>

                                {/* Expand / collapse button */}
                                <button
                                    type="button"
                                    onClick={() => toggleNote(note.id)}
                                    aria-expanded={expanded}
                                    aria-controls={`note-${note.id}`}
                                    className="mt-auto flex items-center
                             gap-2 pt-6 text-sm
                             font-semibold text-teal-300
                             hover:text-teal-200
                             focus-visible:outline-2
                             focus-visible:outline-offset-2
                             focus-visible:outline-teal-400"
                                >
                                    <BookOpen
                                        size={16}
                                        aria-hidden="true"
                                    />

                                    {expanded
                                        ? t('journal.showLess')
                                        : t('journal.readMore')}

                                    {expanded ? (
                                        <ChevronUp
                                            size={16}
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <ChevronDown
                                            size={16}
                                            aria-hidden="true"
                                        />
                                    )}
                                </button>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

