
import { useState } from 'react';
import {
    BookOpen,
    ChevronDown,
    ChevronUp,
    Code2,
    BrainCircuit,
    Box,
} from 'lucide-react';

const notes = [
    {
        id: 'django',
        category: 'BACKEND ENGINEERING',
        title: 'Why Django Remains Central to My Work',
        icon: Code2,
        summary:
            'How Django connects application logic, data models and maintainable backend development.',
        content:
            'Django brings together routing, data models, authentication and application structure. I particularly value how it supports content-rich applications alongside Wagtail. As I explore AI-powered software, Django continues to provide a practical foundation for building the services around language models.',
        tags: ['Python', 'Django', 'Wagtail'],
    },
    {
        id: 'three',
        category: 'CREATIVE ENGINEERING',
        title: 'Building Interactive Experiences with Three.js',
        icon: Box,
        summary:
            'Exploring procedural geometry, animations and interaction in a React portfolio.',
        content:
            'For this portfolio, I use React Three Fiber to create 3D objects inside React components. The engineering challenge is not simply making objects move: it is connecting scene interaction to application state, preserving mobile usability and keeping navigation accessible without a 3D interface.',
        tags: ['React', 'Three.js', 'React Three Fiber'],
    },
    {
        id: 'ai',
        category: 'AI ENGINEERING JOURNEY',
        title: 'From Django Applications to AI-Powered Systems',
        icon: BrainCircuit,
        summary:
            'How existing backend engineering skills provide a foundation for applied AI.',
        content:
            'My Django AI Employees project is a place to explore customer support workflows, orders and conversations. The next development stages involve connecting language models, introducing controlled tool use and evaluating system behaviour. I am approaching these as engineering problems that require dependable application design, not just prompting.',
        tags: ['Python', 'Django', 'AI Agents — Learning'],
    },
];

export default function EngineeringJournal() {
    const [expandedId, setExpandedId] =
        useState(null);

    return (
        <section
            id="journal"
            className="bg-[#080f1e] py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
                    Engineering Notes
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                    Learning, building and sharing.
                </h2>

                <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
                    Short technical reflections from my work
                    in backend development, interactive web
                    experiences and applied AI.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {notes.map((note) => {
                        const Icon = note.icon;
                        const expanded =
                            expandedId === note.id;

                        return (
                            <article
                                key={note.id}
                                className="flex flex-col rounded-2xl
                           border border-white/10
                           bg-[#102033] p-6"
                            >
                                <Icon
                                    size={28}
                                    className="text-teal-400"
                                    aria-hidden="true"
                                />

                                <p className="mt-5 text-xs font-semibold tracking-widest text-teal-300">
                                    {note.category}
                                </p>

                                <h3 className="mt-3 text-xl font-semibold text-white">
                                    {note.title}
                                </h3>

                                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                                    {note.summary}
                                </p>

                                {expanded && (
                                    <p
                                        id={`note-${note.id}`}
                                        className="mt-4 text-sm leading-relaxed text-slate-300"
                                    >
                                        {note.content}
                                    </p>
                                )}

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {note.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full
                                 bg-white/5 px-3 py-1
                                 text-xs text-slate-300"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setExpandedId(
                                            expanded ? null : note.id
                                        )
                                    }
                                    aria-expanded={expanded}
                                    aria-controls={`note-${note.id}`}
                                    className="mt-auto flex items-center
                             gap-2 pt-6 text-sm
                             font-semibold text-teal-300
                             hover:text-teal-200"
                                >
                                    <BookOpen size={16} />

                                    {expanded
                                        ? 'Show Less'
                                        : 'Read Engineering Note'}

                                    {expanded
                                        ? <ChevronUp size={16} />
                                        : <ChevronDown size={16} />}
                                </button>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
