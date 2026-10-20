
import { useEffect, useState } from 'react';

import KnowledgeGraph, {
    knowledgeNodes,
} from '../components/KnowledgeGraph.jsx';

const interests = [
    'AI & Data',
    'Gardening',
    'Travel',
    'Culture',
    'Dance',
];

const nodePositions = {
    'top-left': {
        left: '17%',
        top: '20%',
    },
    'top-right': {
        left: '83%',
        top: '20%',
    },
    'bottom-left': {
        left: '16%',
        top: '69%',
    },
    'bottom-right': {
        left: '84%',
        top: '69%',
    },
    'bottom-center': {
        left: '50%',
        top: '91%',
    },
};

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

        media.addListener(update);

        return () => media.removeListener(update);
    }, []);

    return reducedMotion;
}

function TechnologyButton({
                              node,
                              selected,
                              onSelect,
                          }) {
    const position = nodePositions[node.position];

    return (
        <button
            type="button"
            onClick={() => onSelect(node.id)}
            aria-pressed={selected}
            aria-label={`Show ${node.name} details`}
            className="group absolute z-20
                 flex -translate-x-1/2
                 -translate-y-1/2 flex-col
                 items-center gap-1.5
                 rounded-lg p-1
                 focus-visible:outline-2
                 focus-visible:outline-offset-4
                 focus-visible:outline-teal-400"
            style={{
                left: position.left,
                top: position.top,
            }}
        >
      <span
          className="flex h-8 w-8 items-center
                   justify-center rounded-full
                   border border-white/20
                   bg-[#102237]/90
                   transition-all duration-300
                   group-hover:scale-110
                   group-hover:border-teal-400
                   motion-reduce:transition-none
                   sm:h-10 sm:w-10"
          style={{
              boxShadow: selected
                  ? `0 0 16px ${node.color}55`
                  : 'none',
          }}
      >
        <span
            className="h-3.5 w-3.5 rounded-full
                     sm:h-4 sm:w-4"
            style={{
                backgroundColor: node.color,
            }}
        />
      </span>

            <span
                className={`max-w-[92px] text-center
                    text-[10px] font-medium
                    leading-tight sm:text-xs
          ${
                    selected
                        ? 'text-teal-200'
                        : 'text-slate-300'
                }`}
            >
        {node.name}
      </span>
        </button>
    );
}

export default function Hero() {
    const [selectedId, setSelectedId] =
        useState('python');

    const reducedMotion = useReducedMotion();

    const selectedNode = knowledgeNodes.find(
        (node) => node.id === selectedId
    );

    return (
        <section
            id="home"
            className="mx-auto grid min-h-[85vh]
                 max-w-7xl grid-cols-1
                 items-center gap-12
                 px-6 py-16
                 lg:grid-cols-2 lg:gap-10
                 lg:px-12"
        >
            {/* LEFT COLUMN */}
            <div className="relative z-10 min-w-0">

                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
                    Sandra Atino · Full-Stack Developer · Applied AI
                </p>

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl xl:text-6xl">
                    Building intelligent software
                    <span className="block text-teal-400">
    for real-world problems.
  </span>
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
                    I'm a full-stack developer specializing in Python,
                    Django and modern web technologies. I build reliable
                    digital platforms while expanding into AI-powered
                    applications, intelligent automation and data engineering.
                </p>

                <p className="mt-4 text-slate-400">
                    Based in Belgium · Open to remote
                    and hybrid opportunities
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="rounded-lg bg-teal-400
                       px-6 py-3 font-semibold
                       text-slate-950 transition
                       hover:bg-teal-300"
                    >
                        Explore My Work →
                    </a>

                    <a
                        href="#contact"
                        className="rounded-lg border
                       border-slate-500
                       px-6 py-3 font-semibold
                       text-white transition
                       hover:border-teal-400"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div
                className="relative z-0 flex min-w-0
                   w-full flex-col items-center lg:pl-4"
            >
                {/* Confined network visualization */}
                <div
                    className="relative isolate
                     h-[390px] w-full
                     max-w-[520px]
                     overflow-hidden rounded-3xl
                     sm:h-[460px]"
                >
                    {/* Background glow */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none
                       absolute inset-[18%]
                       rounded-full bg-teal-500/10
                       blur-3xl"
                    />

                    {/* Three.js background */}
                    <KnowledgeGraph
                        reducedMotion={reducedMotion}
                    />

                    {/* Single central portrait */}
                    <div
                        className="pointer-events-none
                       absolute left-1/2 top-[46%]
                       z-10 h-44 w-44
                       -translate-x-1/2
                       -translate-y-1/2
                       overflow-hidden rounded-full
                       border-2
                       border-teal-400/60
                       bg-slate-800
                       shadow-2xl
                       shadow-teal-500/15
                       sm:h-60 sm:w-60"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}images/profile/sandra.jpg`}
                            alt="Portrait of Sandra Atino"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Interactive nodes */}
                    {knowledgeNodes.map((node) => (
                        <TechnologyButton
                            key={node.id}
                            node={node}
                            selected={selectedId === node.id}
                            onSelect={setSelectedId}
                        />
                    ))}
                </div>

                {/* Selected technology detail */}
                {selectedNode && (
                    <div
                        className="mt-4 w-full max-w-[520px]
                       rounded-xl border
                       border-teal-400/20
                       bg-[#102237]/90
                       p-5"
                        aria-live="polite"
                    >
                        <div className="flex items-center gap-3">
              <span
                  className="h-3 w-3
                           shrink-0 rounded-full"
                  style={{
                      backgroundColor:
                      selectedNode.color,
                  }}
              />

                            <h2
                                className="text-base font-semibold
                           text-white"
                            >
                                {selectedNode.name}
                            </h2>
                        </div>

                        <p
                            className="mt-3 text-sm
                         leading-relaxed
                         text-slate-300"
                        >
                            {selectedNode.description}
                        </p>
                    </div>
                )}

                {/* Personal interests */}
                <div
                    className="mt-5 flex max-w-[520px]
                     flex-wrap justify-center
                     gap-2"
                >
                    {interests.map((interest) => (
                        <span
                            key={interest}
                            className="rounded-full border
                         border-teal-400/20
                         bg-[#0c1728]/90
                         px-3 py-1.5 text-xs
                         text-teal-200"
                        >
              {interest}
            </span>
                    ))}
                </div>
            </div>
        </section>
    );
}


